import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, phone, device, message } = data;

    // Create transporter - configure with your SMTP settings
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER || 'techn0smartffm@gmail.com',
        pass: process.env.EMAIL_PASS || '', // App password required
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER || 'techn0smartffm@gmail.com',
      to: 'techn0smartffm@gmail.com',
      subject: `Neue Anfrage von ${name} - ${device}`,
      html: `
        <h2>Neue Reparaturanfrage</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Telefon:</strong> ${phone}</p>
        <p><strong>Gerät:</strong> ${device}</p>
        <p><strong>Nachricht:</strong> ${message || 'Keine Nachricht'}</p>
        <hr>
        <p><small>Gesendet von techn0smart.de</small></p>
      `,
    };

    // For development/demo - just log and return success
    if (!process.env.EMAIL_PASS) {
      console.log('Contact form submission:', { name, phone, device, message });
      return NextResponse.json({ success: true, demo: true });
    }

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    );
  }
}
