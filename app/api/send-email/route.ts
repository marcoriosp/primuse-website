import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// The correct destination email address
const DESTINATION_EMAIL = 'aus@primuse.net';

// Create email transporter with basic error handling
const createTransporter = (): nodemailer.Transporter | null => {
  try {
    // Create nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      }
    });
    
    return transporter;
  } catch (error) {
    console.error('Failed to create transporter:', error);
    return null;
  }
};

export async function POST(request: Request) {
  try {
    // Parse the request body
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Name, email, subject, and message are required' },
        { status: 400 }
      );
    }

    // Check if SMTP is configured
    if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASSWORD) {
      return NextResponse.json({ 
        success: true,
        warning: true,
        message: 'SMTP not configured. Email would be sent in production.'
      });
    }

    // Create transporter
    const transporter = createTransporter();
    if (!transporter || typeof transporter.sendMail !== 'function') {
      console.error('Email transporter invalid:', transporter);
      return NextResponse.json(
        { error: 'Failed to create email transporter' },
        { status: 500 }
      );
    }

    // Format the sender name with email for better display
    const formattedSender = `${name} <${process.env.SMTP_FROM || process.env.SMTP_USER}>`;

    // Prepare email
    const mailOptions = {
      from: formattedSender,
      to: DESTINATION_EMAIL,
      replyTo: email,
      subject: `Contact Form: ${subject}`,
      text: `Message from: ${name} (${email})\n\n${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">New Contact Form Submission</h2>
          <p><strong>From:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Subject:</strong> ${subject}</p>
          <div style="background-color: #f7f7f7; padding: 15px; border-radius: 5px; margin-top: 20px;">
            <h3 style="margin-top: 0;">Message:</h3>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
        </div>
      `,
      headers: {
        'Reply-To': email,
        'X-Original-Sender': email,
        'X-Contact-Form-Name': name
      }
    };
    
    // Send email
    try {
      await transporter.sendMail(mailOptions);
      
      return NextResponse.json({ 
        success: true,
        message: 'Your message has been sent successfully'
      });
    } catch (error) {
      if (error instanceof Error) {
        console.error('Error sending email:', {
          name: error.name,
          message: error.message,
          stack: error.stack
        });
      }
      
      return NextResponse.json(
        { error: 'Failed to send email. Please try again later.' },
        { status: 500 }
      );
    }
  } catch (error) {
    if (error instanceof Error) {
      console.error('Error processing request:', error);
    }
    
    return NextResponse.json(
      { error: 'An error occurred while processing your request' },
      { status: 500 }
    );
  }
} 