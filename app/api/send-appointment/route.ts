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
New Appointment Request from Glen Gemstone Website

Full Name: ${fullName}
Email: ${email}
Phone: ${phone}
Country: ${country}
Item of Interest: ${itemInterested}

Message:
${message}

---
This message was sent from the Glen Gemstone website appointment form.
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
      const resendResponse = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${resendApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Glen Gemstone <noreply@theglowgem.com>",
          to: ["support@theglowgem.com"],
          reply_to: email,
          subject: `New Appointment Request: ${itemInterested} - ${fullName}`,
          text: emailContent,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
              <h2 style="color: #C5A572; border-bottom: 2px solid #C5A572; padding-bottom: 10px;">
                New Appointment Request
              </h2>
              
              <div style="background: #f8f8f8; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <p><strong>Full Name:</strong> ${fullName}</p>
                <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
                <p><strong>Phone:</strong> <a href="tel:${phone}">${phone}</a></p>
                <p><strong>Country:</strong> ${country}</p>
                <p><strong>Item of Interest:</strong> ${itemInterested}</p>
              </div>
              
              <div style="margin: 20px 0;">
                <h3 style="color: #333;">Message:</h3>
                <p style="background: #fff; padding: 15px; border-left: 4px solid #C5A572; margin: 0;">
                  ${message.replace(/\n/g, "<br>")}
                </p>
              </div>
              
              <hr style="border: none; border-top: 1px solid #ddd; margin: 30px 0;">
              <p style="color: #888; font-size: 12px;">
                This message was sent from the Glen Gemstone website appointment form.
              </p>
            </div>
          `,
        }),
      });

      if (!resendResponse.ok) {
        const errorData = await resendResponse.json();
        console.error("Resend error:", errorData);
        throw new Error("Failed to send email via Resend");
      }
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
