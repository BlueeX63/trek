import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { supabaseAdmin } from '@/lib/supabaseAdmin';
import crypto from 'crypto';

// Basic in-memory rate limiter to prevent email bombing
const rateLimitMap = new Map<string, { count: number; timestamp: number }>();
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000; // 15 minutes
const MAX_REQUESTS_PER_WINDOW = 3;

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email || typeof email !== 'string') {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Invalid email format' }, { status: 400 });
    }

    // Rate Limiting (A04: Insecure Design)
    const ip = req.headers.get('x-forwarded-for') || req.headers.get('x-real-ip') || 'unknown';
    const rateLimitKey = `${ip}-${email}`;
    const now = Date.now();
    const limitData = rateLimitMap.get(rateLimitKey);

    if (limitData && now - limitData.timestamp < RATE_LIMIT_WINDOW_MS) {
      if (limitData.count >= MAX_REQUESTS_PER_WINDOW) {
        return NextResponse.json({ error: 'Too many requests. Please try again later.' }, { status: 429 });
      }
      limitData.count++;
    } else {
      rateLimitMap.set(rateLimitKey, { count: 1, timestamp: now });
    }

    // 0. Check if user already exists
    const { data: existingUser } = await supabaseAdmin
      .schema('auth')
      .from('users')
      .select('id')
      .eq('email', email)
      .maybeSingle();

    if (existingUser) {
      return NextResponse.json({ error: 'User already exists. Please sign in.' }, { status: 400 });
    }

    // 1. Generate secure 6 digit OTP (A02: Cryptographic Failures)
    const otp = crypto.randomInt(100000, 1000000).toString();
    const expiresAt = new Date();
    expiresAt.setMinutes(expiresAt.getMinutes() + 10); // Expires in 10 mins

    // 2. Save OTP to Supabase using Admin client (bypasses RLS)
    const { error: dbError } = await supabaseAdmin
      .from('custom_otps')
      .upsert({ email, otp_code: otp, expires_at: expiresAt.toISOString() }, { onConflict: 'email' });

    if (dbError) {
      console.error("Database error saving OTP:", dbError);
      return NextResponse.json({ error: 'Failed to generate OTP' }, { status: 500 });
    }

    // 3. Configure Nodemailer
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp-relay.brevo.com',
      port: Number(process.env.SMTP_PORT) || 587,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // 4. Send Email
    await transporter.sendMail({
      from: `"Xplore The Dreams" <${process.env.SMTP_SENDER_EMAIL || process.env.SMTP_USER}>`,
      to: email,
      subject: 'Verify your email for Xplore The Dreams',
      html: `
        <div style="font-family: sans-serif; text-align: center; padding: 20px;">
          <h2>Verify Your Email</h2>
          <p>Your authentication code is:</p>
          <h1 style="letter-spacing: 5px; color: #FFC000;">${otp}</h1>
          <p>This code will expire in 10 minutes.</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Error sending OTP:", error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
