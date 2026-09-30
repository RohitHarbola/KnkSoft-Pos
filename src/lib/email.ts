import nodemailer from 'nodemailer';

export interface DemoEmailData {
  name: string;
  phone: string;
  email?: string;
  businessName?: string;
  city: string;
  industry: string;
  message?: string;
}

export async function sendDemoBookingNotification(data: DemoEmailData) {
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const recipients = process.env.CONTACT_RECIPIENTS || smtpUser;

  if (!smtpUser || !smtpPass) {
    console.error('SMTP configuration missing: SMTP_USER or SMTP_PASS not set in environment.');
    throw new Error('Email service configuration missing');
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });

  const submissionDate = new Date().toLocaleString('en-IN', {
    timeZone: 'Asia/Kolkata',
    dateStyle: 'full',
    timeStyle: 'medium',
  });

  // Admin Notification Email
  const adminMailHtml = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f8fafc; margin: 0; padding: 20px; color: #1e293b; }
        .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 16px; overflow: hidden; border: 1px solid #e2e8f0; box-shadow: 0 4px 20px rgba(0,0,0,0.06); }
        .header { background: linear-gradient(135deg, #FF4C00 0%, #FF8C00 100%); padding: 28px 24px; color: #ffffff; text-align: center; }
        .header h1 { margin: 0; font-size: 22px; font-weight: 800; letter-spacing: -0.02em; }
        .header p { margin: 6px 0 0; opacity: 0.92; font-size: 13px; font-weight: 500; }
        .content { padding: 28px 24px; }
        .badge { display: inline-block; background: #FFF3EF; border: 1px solid #FFD5C2; color: #FF4C00; padding: 4px 12px; border-radius: 9999px; font-size: 11px; font-weight: 700; text-transform: uppercase; margin-bottom: 16px; }
        .card { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 18px; margin-bottom: 18px; }
        .card-title { font-size: 14px; font-weight: 700; color: #0f172a; margin-bottom: 12px; border-bottom: 1px solid #e2e8f0; padding-bottom: 8px; }
        .data-row { display: flex; justify-content: space-between; padding: 6px 0; font-size: 13px; }
        .data-label { color: #64748b; font-weight: 600; width: 40%; }
        .data-value { color: #0f172a; font-weight: 700; width: 60%; text-align: right; word-break: break-word; }
        .cta-box { margin-top: 24px; text-align: center; padding-top: 18px; border-top: 1px dashed #cbd5e1; }
        .btn-call { display: inline-block; background: #FF4C00; color: #ffffff !important; text-decoration: none; padding: 10px 20px; border-radius: 9999px; font-size: 13px; font-weight: 700; margin: 4px; }
        .btn-wa { display: inline-block; background: #25D366; color: #ffffff !important; text-decoration: none; padding: 10px 20px; border-radius: 9999px; font-size: 13px; font-weight: 700; margin: 4px; }
        .footer { background: #f1f5f9; padding: 16px; text-align: center; font-size: 11px; color: #64748b; border-top: 1px solid #e2e8f0; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>🚀 New KNK POS Demo Booking</h1>
          <p>A customer has requested a live 1-on-1 software demonstration</p>
        </div>
        <div class="content">
          <span class="badge">🔥 High Priority Lead</span>
          
          <div class="card">
            <div class="card-title">👤 Customer &amp; Store Information</div>
            <div class="data-row">
              <span class="data-label">Full Name:</span>
              <span class="data-value">${data.name}</span>
            </div>
            <div class="data-row">
              <span class="data-label">WhatsApp / Phone:</span>
              <span class="data-value">+91 ${data.phone}</span>
            </div>
            ${data.email ? `
            <div class="data-row">
              <span class="data-label">Email:</span>
              <span class="data-value">${data.email}</span>
            </div>` : ''}
            <div class="data-row">
              <span class="data-label">Store / Brand:</span>
              <span class="data-value">${data.businessName || 'Not specified'}</span>
            </div>
            <div class="data-row">
              <span class="data-label">City / Location:</span>
              <span class="data-value">${data.city}</span>
            </div>
            <div class="data-row">
              <span class="data-label">Business Category:</span>
              <span class="data-value">${data.industry}</span>
            </div>
            ${data.message ? `
            <div class="data-row" style="flex-direction: column; align-items: flex-start; gap: 4px; margin-top: 6px;">
              <span class="data-label" style="width: 100%;">Special Requirements:</span>
              <span class="data-value" style="width: 100%; text-align: left; font-weight: 400; background: #ffffff; padding: 8px; border-radius: 6px; border: 1px solid #e2e8f0;">${data.message}</span>
            </div>` : ''}
          </div>

          <div class="cta-box">
            <p style="font-size: 13px; font-weight: 600; color: #334155; margin-bottom: 12px;">Quick Action Contact Buttons:</p>
            <a href="tel:+91${data.phone}" class="btn-call">📞 Call Customer</a>
            <a href="https://wa.me/91${data.phone}?text=Hello%20${encodeURIComponent(data.name)}%2C%20thank%20you%20for%20booking%20a%20demo%20with%20KNK%20POS%20by%20KNK%3ASOFT.%20When%20is%20a%20good%20time%20for%20your%201-on-1%20walkthrough%3F" class="btn-wa" target="_blank">💬 WhatsApp Chat</a>
          </div>
        </div>
        <div class="footer">
          <p style="margin: 0;">Submission Time (IST): ${submissionDate}</p>
          <p style="margin: 4px 0 0;">KNK:SOFT INFOTECH — POS System Lead Notification</p>
        </div>
      </div>
    </body>
    </html>
  `;

  // Send admin notification
  const mailOptions = {
    from: `"KNK POS Demo Alerts" <${smtpUser}>`,
    to: recipients,
    subject: `🔥 New KNK POS Demo Request: ${data.name} (${data.businessName || data.industry}) - ${data.city}`,
    html: adminMailHtml,
    replyTo: data.email || smtpUser,
  };

  const result = await transporter.sendMail(mailOptions);

  // If user provided email, send confirmation
  if (data.email) {
    const userMailHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #f8fafc; margin: 0; padding: 20px; color: #1e293b; }
          .container { max-width: 580px; margin: 0 auto; background: #ffffff; border-radius: 14px; overflow: hidden; border: 1px solid #e2e8f0; }
          .header { background: linear-gradient(135deg, #FF4C00, #FF8C00); padding: 24px; color: #ffffff; text-align: center; }
          .content { padding: 24px; line-height: 1.6; font-size: 14px; }
          .footer { background: #f1f5f9; padding: 14px; text-align: center; font-size: 11px; color: #64748b; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2 style="margin: 0;">Thank You, ${data.name}!</h2>
            <p style="margin: 4px 0 0; opacity: 0.9; font-size: 13px;">Your KNK POS demo is confirmed</p>
          </div>
          <div class="content">
            <p>Hello <strong>${data.name}</strong>,</p>
            <p>Thank you for requesting a 1-on-1 demo of <strong>KNK POS</strong> by <strong>KNK:SOFT INFOTECH</strong> for <strong>${data.businessName || data.industry}</strong>.</p>
            <p>One of our POS specialists will connect with you on <strong>+91 ${data.phone}</strong> within 15 minutes to arrange a live interactive session customized for your billing and hardware needs.</p>
            <p style="margin-top: 20px;">Best regards,<br><strong>KNK:SOFT INFOTECH Team</strong><br><a href="https://knksoft.com" style="color: #FF4C00; text-decoration: none;">www.knksoft.com</a></p>
          </div>
          <div class="footer">
            <p style="margin: 0;">© ${new Date().getFullYear()} KNK:SOFT INFOTECH. All rights reserved.</p>
          </div>
        </div>
      </body>
      </html>
    `;

    try {
      await transporter.sendMail({
        from: `"KNK POS Team" <${smtpUser}>`,
        to: data.email,
        subject: `Your KNK POS Demo Booking Confirmation - KNK:SOFT`,
        html: userMailHtml,
      });
    } catch (err) {
      console.warn('Customer confirmation email failed to send:', err);
    }
  }

  return result;
}
