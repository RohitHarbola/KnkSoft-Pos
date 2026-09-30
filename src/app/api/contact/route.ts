import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, companyName, interestedServices, launchTimeline, budget, aboutProject } = body;

    if (!name || typeof name !== 'string' || name.trim().length < 2) {
      return NextResponse.json(
        { success: false, error: 'Please enter your name.' },
        { status: 400 }
      );
    }

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email).trim())) {
      return NextResponse.json(
        { success: false, error: 'Please enter a valid email address.' },
        { status: 400 }
      );
    }

    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const recipients = process.env.CONTACT_RECIPIENTS || smtpUser;

    if (!smtpUser || !smtpPass) {
      return NextResponse.json(
        { success: false, error: 'SMTP server is not configured.' },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const mailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; border: 1px solid #e2e8f0; overflow: hidden;">
        <div style="background: linear-gradient(135deg, #FF4C00, #FF8C00); padding: 24px; color: #ffffff; text-align: center;">
          <h2 style="margin: 0;">New Contact Form Message</h2>
          <p style="margin: 6px 0 0; opacity: 0.9;">KNK POS Website Consultation Request</p>
        </div>
        <div style="padding: 24px; color: #1e293b;">
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
          <p><strong>Company:</strong> ${companyName || 'Not provided'}</p>
          <p><strong>Interested Service:</strong> ${interestedServices || 'POS Software'}</p>
          <p><strong>Launch Timeline:</strong> ${launchTimeline || 'Immediate'}</p>
          <p><strong>Budget:</strong> ₹${budget || 15000}</p>
          <p><strong>About Project:</strong></p>
          <div style="background: #f8fafc; padding: 12px; border-radius: 8px; border: 1px solid #e2e8f0;">
            ${aboutProject || 'No additional notes'}
          </div>
        </div>
        <div style="background: #f1f5f9; padding: 12px; text-align: center; font-size: 11px; color: #64748b;">
          Received via KNK POS Contact Page
        </div>
      </div>
    `;

    await transporter.sendMail({
      from: `"KNK POS Contact" <${smtpUser}>`,
      to: recipients,
      subject: `📩 Contact Form Message from ${name} (${companyName || 'Lead'})`,
      html: mailHtml,
      replyTo: email,
    });

    return NextResponse.json({
      success: true,
      message: 'Message sent successfully! Our team will contact you soon.',
    });
  } catch (err: any) {
    console.error('Contact form send error:', err);
    return NextResponse.json(
      { success: false, error: err.message || 'Failed to send message.' },
      { status: 500 }
    );
  }
}
