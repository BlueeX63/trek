import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { supabaseAdmin } from '@/lib/supabaseAdmin';

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
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

    // 1. Generate 6 digit OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
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
