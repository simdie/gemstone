import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, reason, message } = body;

    // Validate required fields
    if (!name || !email || !reason || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Send email using Resend or your preferred email service
    // For now, we'll use a simple fetch to a mail service
    const emailContent = `
New Contact Form Submission from The Glowgem Website

Name: ${name}
Email: ${email}
Phone: ${phone || "Not provided"}
Reason: ${reason}

Message:
${message}

---
This message was sent from the contact form at theglowgem.com
    `.trim();

    // Check if RESEND_API_KEY is available for email sending
    if (process.env.RESEND_API_KEY) {
      const resendResponse = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${process.env.RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "The Glowgem <noreply@theglowgem.com>",
          to: ["support@theglowgem.com"],
          reply_to: email,
          subject: `Contact Form: ${reason} - ${name}`,
          text: emailContent,
        }),
      });

      if (!resendResponse.ok) {
        const errorData = await resendResponse.json();
        console.error("Resend API error:", errorData);
        return NextResponse.json(
          { error: "Failed to send email" },
          { status: 500 }
        );
      }

      return NextResponse.json(
        { success: true, message: "Email sent successfully" },
        { status: 200 }
      );
    }

    // If no email service is configured, log the submission and return success
    // This allows the form to work during development
    console.log("Contact form submission (email service not configured):");
    console.log(emailContent);

    return NextResponse.json(
      { 
        success: true, 
        message: "Message received successfully",
        note: "Email service not configured - message logged to server"
      },
      { status: 200 }
    );

  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
