// pages/api/sendEmail.ts

import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer';

export  async function POST(req) {
  const body = await req.json()
  if (req.method === 'POST') {
    const { name, email, message } = body;
    console.log(name,email,message);
    // Create a Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      port: 587,
      secure: true,
      auth: {
        user: 'groupaurora54@gmail.com',
        pass: 'eldc hzbt zizw guyk',
      },
    });

    // Define email content
    const mailOptions = {
      from: 'groupaurora54@gmail.com',
      to: 'auroragroup321@gmail.com', // Replace with your email address
      subject: 'New Message from Contact Form',
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
    };

    try {
      // Send email
      await transporter.sendMail(mailOptions);
      console.log('Email sent successfully');
      return NextResponse.json({ error: 'Email sent successfully' }, { status: 200 });
    } catch (error) {
      console.error('Error sending email:', error);
      return NextResponse.json({ error: 'Error sending email' }, { status: 500 });
    }
  } else {
    return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
  }
}
