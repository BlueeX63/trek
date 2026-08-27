import { NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabaseAdmin';

// Basic in-memory rate limiter to prevent brute force
const verifyRateLimitMap = new Map<string, { count: number; timestamp: number }>();
const VERIFY_RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000; // 15 minutes
const MAX_VERIFY_ATTEMPTS = 5;

export async function POST(req: Request) {
  try {
    const { email, otp, password, name } = await req.json();

    if (!email || !otp || !password || typeof email !== 'string') {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Rate Limiting (A07: Identification and Authentication Failures)
    const ip = req.headers.get('x-forwarded-for') || req.headers.get('x-real-ip') || 'unknown';
    const rateLimitKey = `${ip}-${email}`;
    const now = Date.now();
    const limitData = verifyRateLimitMap.get(rateLimitKey);

    if (limitData && now - limitData.timestamp < VERIFY_RATE_LIMIT_WINDOW_MS) {
      if (limitData.count >= MAX_VERIFY_ATTEMPTS) {
        return NextResponse.json({ error: 'Too many failed attempts. Please try again later.' }, { status: 429 });
      }
    }

    // Helper to increment failed attempts
    const incrementFailedAttempt = () => {
      if (limitData && now - limitData.timestamp < VERIFY_RATE_LIMIT_WINDOW_MS) {
        limitData.count++;
      } else {
        verifyRateLimitMap.set(rateLimitKey, { count: 1, timestamp: now });
      }
    };

    // 1. Check OTP in database
    const { data: otpRecord, error: fetchError } = await supabaseAdmin
      .from('custom_otps')
      .select('*')
      .eq('email', email)
      .single();

    if (fetchError || !otpRecord) {
      incrementFailedAttempt();
      return NextResponse.json({ error: 'Invalid or expired OTP' }, { status: 400 });
    }

    // 2. Validate OTP
    if (otpRecord.otp_code !== otp) {
      incrementFailedAttempt();
      return NextResponse.json({ error: 'Incorrect OTP code' }, { status: 400 });
    }

    const expiresAt = new Date(otpRecord.expires_at);
    if (new Date() > expiresAt) {
      incrementFailedAttempt();
      return NextResponse.json({ error: 'OTP has expired' }, { status: 400 });
    }

    // 3. OTP is valid! Create the user officially via Admin API (bypassing email verification)
    const { data: userData, error: createError } = await supabaseAdmin.auth.admin.createUser({
      email: email,
      password: password,
      email_confirm: true, // Crucial: auto-confirm the user!
      user_metadata: {
        full_name: name,
      }
    });

    if (createError) {
      // If user already exists, it might throw an error. We can handle it or just return it.
      if (createError.message.includes('already been registered')) {
         return NextResponse.json({ error: 'User already exists. Please sign in.' }, { status: 400 });
      }
      return NextResponse.json({ error: createError.message }, { status: 500 });
    }

    // 4. Delete the used OTP
    await supabaseAdmin.from('custom_otps').delete().eq('email', email);
    verifyRateLimitMap.delete(rateLimitKey); // Clear failed attempts on success

    // 5. Return success. 
    // Note: The client will now simply call supabase.auth.signInWithPassword to get a session!
    return NextResponse.json({ success: true, user: userData.user });
    
  } catch (error: any) {
    console.error("Error verifying OTP:", error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
