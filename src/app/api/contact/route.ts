
import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Create reusable transporter object using SMTP transport
const createTransporter = () => {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
};

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json();
    
    // Validate required fields
    if (!formData.name || !formData.email || !formData.message) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      return NextResponse.json(
        { success: false, error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Check if SMTP credentials are configured
    if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.error('SMTP credentials not configured');
      return NextResponse.json(
        { success: false, error: 'Email service not configured' },
        { status: 500 }
      );
    }

    const transporter = createTransporter();

    // Email content
    const emailContent = `
      New Contact Form Submission
      
      Name: ${formData.name}
      Email: ${formData.email}
      Phone: ${formData.phone || 'Not provided'}
      Organization: ${formData.organization || 'Not provided'}
      Subject: ${formData.subject}
      
      Message:
      ${formData.message}
      
      Submitted at: ${new Date().toISOString()}
    `;

    // Send email to your company
    const companyMailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.CONTACT_EMAIL || 'info@crossafriquehydrogen.com',
      subject: `Contact Form: ${formData.subject}`,
      text: emailContent,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Phone:</strong> ${formData.phone || 'Not provided'}</p>
        <p><strong>Organization:</strong> ${formData.organization || 'Not provided'}</p>
        <p><strong>Subject:</strong> ${formData.subject}</p>
        <h4>Message:</h4>
        <p>${formData.message.replace(/\n/g, '<br>')}</p>
        <p><em>Submitted at: ${new Date().toLocaleString()}</em></p>
      `,
    };

    // Send confirmation email to user
    const userMailOptions = {
      from: process.env.SMTP_USER,
      to: formData.email,
      subject: 'Thank you for contacting Crossafrique Hydrogen',
      text: `
        Dear ${formData.name},

        Thank you for reaching out to Crossafrique Hydrogen. We have received your message and will get back to you as soon as possible.

        Your message:
        ${formData.message}

        Best regards,
        Crossafrique Hydrogen Team
      `,
      html: `
        <h3>Thank you for contacting Crossafrique Hydrogen</h3>
        <p>Dear ${formData.name},</p>
        <p>Thank you for reaching out to Crossafrique Hydrogen. We have received your message and will get back to you as soon as possible.</p>
        <h4>Your message:</h4>
        <p>${formData.message.replace(/\n/g, '<br>')}</p>
        <p>Best regards,<br>Crossafrique Hydrogen Team</p>
      `,
    };

    // Send both emails
    await Promise.all([
      transporter.sendMail(companyMailOptions),
      transporter.sendMail(userMailOptions)
    ]);

    return NextResponse.json({
      success: true,
      message: 'Email sent successfully'
    });

  } catch (error) {
    console.error('Contact form submission error:', error);
    
    // Handle specific nodemailer errors
    if (error instanceof Error) {
      if (error.message.includes('EAUTH')) {
        return NextResponse.json(
          { success: false, error: 'Email authentication failed' },
          { status: 500 }
        );
      }
      if (error.message.includes('ECONNECTION')) {
        return NextResponse.json(
          { success: false, error: 'Email service connection failed' },
          { status: 500 }
        );
      }
    }

    return NextResponse.json(
      { success: false, error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
