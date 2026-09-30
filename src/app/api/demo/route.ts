import { NextRequest, NextResponse } from 'next/server';
import { sendDemoBookingNotification } from '@/lib/email';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, phone, email, businessName, city, industry, message } = body;

    // 1. Validation
    if (!name || typeof name !== 'string' || name.trim().length < 2) {
      return NextResponse.json(
        { success: false, error: 'Please enter your full name (minimum 2 characters).' },
        { status: 400 }
      );
    }

    // Clean and validate Indian 10-digit phone
    const cleanPhone = String(phone || '').replace(/\D/g, '');
    if (cleanPhone.length !== 10) {
      return NextResponse.json(
        { success: false, error: 'Please provide a valid 10-digit mobile number.' },
        { status: 400 }
      );
    }

    if (email && typeof email === 'string' && email.trim().length > 0) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email.trim())) {
        return NextResponse.json(
          { success: false, error: 'Please enter a valid email address.' },
          { status: 400 }
        );
      }
    }

    if (!city || typeof city !== 'string') {
      return NextResponse.json(
        { success: false, error: 'Please select your city.' },
        { status: 400 }
      );
    }

    if (!industry || typeof industry !== 'string') {
      return NextResponse.json(
        { success: false, error: 'Please select your business category.' },
        { status: 400 }
      );
    }

    // 2. Send email via SMTP
    await sendDemoBookingNotification({
      name: name.trim(),
      phone: cleanPhone,
      email: email ? email.trim() : undefined,
      businessName: businessName ? businessName.trim() : undefined,
      city: city.trim(),
      industry: industry.trim(),
      message: message ? message.trim() : undefined,
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Demo scheduled successfully! Our team will contact you shortly.',
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Error handling demo request:', error);
    return NextResponse.json(
      {
        success: false,
        error: error?.message || 'Failed to schedule demo. Please try again or WhatsApp us directly.',
      },
      { status: 500 }
    );
  }
}
