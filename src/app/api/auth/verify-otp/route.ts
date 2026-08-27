import { NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabaseAdmin';

export async function POST(req: Request) {
  try {
    const { email, otp, password, name } = await req.json();

    if (!email || !otp || !password) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // 1. Check OTP in database
    const { data: otpRecord, error: fetchError } = await supabaseAdmin
      .from('custom_otps')
      .select('*')
      .eq('email', email)
      .single();

    if (fetchError || !otpRecord) {
      return NextResponse.json({ error: 'Invalid or expired OTP' }, { status: 400 });
    }

    // 2. Validate OTP
    if (otpRecord.otp_code !== otp) {
      return NextResponse.json({ error: 'Incorrect OTP code' }, { status: 400 });
    }

    const expiresAt = new Date(otpRecord.expires_at);
    if (new Date() > expiresAt) {
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

    // 5. Return success. 
    // Note: The client will now simply call supabase.auth.signInWithPassword to get a session!
    return NextResponse.json({ success: true, user: userData.user });
    
  } catch (error: any) {
    console.error("Error verifying OTP:", error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
