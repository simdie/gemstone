import { NextRequest, NextResponse } from "next/server";

interface AppointmentFormData {
  fullName: string;
  itemInterested: string;
  country: string;
  email: string;
  phone: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: AppointmentFormData = await request.json();

    const { fullName, itemInterested, country, email, phone, message } = body;

    // Validate required fields
    if (!fullName || !itemInterested || !country || !email || !phone || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Create email content
    const emailContent = `
New Appointment Request from The Glowgem Website

Full Name: ${fullName}
Email: ${email}
Phone: ${phone}
Country: ${country}
Item of Interest: ${itemInterested}

Message:
${message}

---
This message was sent from The Glowgem website appointment form.
    `.trim();

    // For now, we'll use a simple email service approach
    // In production, you would integrate with services like:
    // - Resend (recommended for Vercel)
    // - SendGrid
    // - Postmark
    // - AWS SES
    
    // Using Resend if API key is available
    const resendApiKey = process.env.RESEND_API_KEY;
    
    if (resendApiKey) {
      // Send notification to business
      const resendResponse = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${resendApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "The Glowgem <noreply@theglowgem.com>",
          to: ["support@theglowgem.com"],
          reply_to: email,
          subject: `New Appointment Request: ${itemInterested} - ${fullName}`,
          text: emailContent,
          html: `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
<body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #0a0a0f; color: #ffffff;">
  <div style="max-width: 600px; margin: 0 auto; padding: 40px 20px;">
    <div style="text-align: center; margin-bottom: 40px;">
      <h1 style="color: #d4a853; font-size: 24px; margin: 0 0 8px 0;">The Glowgem</h1>
      <p style="color: #888; font-size: 12px; margin: 0; text-transform: uppercase; letter-spacing: 2px;">Natural Coloured Gemstones</p>
    </div>
    <div style="background: linear-gradient(135deg, #1a1a24 0%, #12121a 100%); border-radius: 16px; padding: 32px; border: 1px solid #2a2a3a;">
      <h2 style="color: #d4a853; font-size: 20px; margin: 0 0 24px 0;">New Appointment Request</h2>
      <div style="margin-bottom: 24px;">
        <h3 style="color: #888; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 16px 0;">Client Details</h3>
        <table style="width: 100%; border-collapse: collapse;">
          <tr><td style="padding: 8px 0; color: #888; width: 120px;">Name</td><td style="padding: 8px 0; color: #fff; font-weight: 500;">${fullName}</td></tr>
          <tr><td style="padding: 8px 0; color: #888;">Email</td><td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #d4a853;">${email}</a></td></tr>
          <tr><td style="padding: 8px 0; color: #888;">Phone</td><td style="padding: 8px 0;"><a href="tel:${phone}" style="color: #d4a853;">${phone}</a></td></tr>
          <tr><td style="padding: 8px 0; color: #888;">Country</td><td style="padding: 8px 0; color: #fff;">${country}</td></tr>
        </table>
      </div>
      <div style="margin-bottom: 24px; padding-top: 24px; border-top: 1px solid #2a2a3a;">
        <h3 style="color: #888; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 16px 0;">Interest</h3>
        <div style="background: #d4a853; color: #0a0a0f; display: inline-block; padding: 8px 16px; border-radius: 20px; font-size: 14px; font-weight: 600;">${itemInterested}</div>
      </div>
      <div style="padding-top: 24px; border-top: 1px solid #2a2a3a;">
        <h3 style="color: #888; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 16px 0;">Message</h3>
        <p style="color: #ccc; line-height: 1.6; margin: 0; white-space: pre-wrap;">${message}</p>
      </div>
    </div>
    <div style="text-align: center; margin-top: 32px;">
      <a href="mailto:${email}?subject=Re: Appointment Request - The Glowgem" style="display: inline-block; background: #d4a853; color: #0a0a0f; text-decoration: none; padding: 14px 32px; border-radius: 25px; font-weight: 600;">Reply to Client</a>
    </div>
    <p style="text-align: center; color: #666; font-size: 12px; margin-top: 32px;">Please respond within 24 hours.</p>
  </div>
</body>
</html>
          `,
        }),
      });

      if (!resendResponse.ok) {
        const errorData = await resendResponse.json();
        console.error("Resend error:", errorData);
        throw new Error("Failed to send email via Resend");
      }

      // Send confirmation email to customer
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${resendApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "The Glowgem <noreply@theglowgem.com>",
          to: [email],
          subject: "Appointment Request Received - The Glowgem",
          html: `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
<body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #0a0a0f; color: #ffffff;">
  <div style="max-width: 600px; margin: 0 auto; padding: 40px 20px;">
    <div style="text-align: center; margin-bottom: 40px;">
      <h1 style="color: #d4a853; font-size: 24px; margin: 0 0 8px 0;">The Glowgem</h1>
      <p style="color: #888; font-size: 12px; margin: 0; text-transform: uppercase; letter-spacing: 2px;">Natural Coloured Gemstones</p>
    </div>
    <div style="background: linear-gradient(135deg, #1a1a24 0%, #12121a 100%); border-radius: 16px; padding: 32px; border: 1px solid #2a2a3a;">
      <h2 style="color: #fff; font-size: 20px; margin: 0 0 16px 0;">Thank You, ${fullName}</h2>
      <p style="color: #ccc; line-height: 1.6; margin: 0 0 24px 0;">We have received your appointment request for <strong style="color: #d4a853;">${itemInterested}</strong>. Our team will review your inquiry and respond within 24 hours.</p>
      <div style="background: #0a0a0f; border-radius: 12px; padding: 20px; margin-bottom: 24px;">
        <p style="color: #888; font-size: 12px; margin: 0 0 8px 0; text-transform: uppercase;">Your Message</p>
        <p style="color: #ccc; font-size: 14px; margin: 0; line-height: 1.5;">${message}</p>
      </div>
      <p style="color: #888; font-size: 14px; margin: 0;">For urgent inquiries: <a href="tel:+447403824831" style="color: #d4a853;">+44 740 382 4831</a></p>
    </div>
    <p style="text-align: center; color: #666; font-size: 12px; margin-top: 32px;">30+ Years of Excellence in Natural Coloured Gemstones<br><span style="color: #444;">theglowgem.com</span></p>
  </div>
</body>
</html>
          `,
        }),
      });
    } else {
      // Fallback: Log the appointment request
      // In production, you should configure an email service
      console.log("=== NEW APPOINTMENT REQUEST ===");
      console.log("To: support@theglowgem.com");
      console.log("Subject: New Appointment Request:", itemInterested, "-", fullName);
      console.log(emailContent);
      console.log("================================");
      
      // For demo purposes, we'll consider this successful
      // In production, you should set up RESEND_API_KEY or another email service
    }

    return NextResponse.json(
      { success: true, message: "Appointment request sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing appointment request:", error);
    return NextResponse.json(
      { error: "Failed to process appointment request" },
      { status: 500 }
    );
  }
}
