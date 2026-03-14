import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { fullName, email, phone, country, itemInterested, message } = body;

    // Validate required fields
    if (!fullName || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // In production, you would integrate with an email service like:
    // - Resend
    // - SendGrid
    // - Nodemailer with SMTP
    // For now, we'll log the message and return success
    
    console.log("Contact Form Submission:", {
      to: "support@theglowgem.com",
      from: email,
      subject: `New Inquiry from ${fullName}${itemInterested ? ` - ${itemInterested}` : ""}`,
      body: {
        fullName,
        email,
        phone,
        country,
        itemInterested,
        message,
        timestamp: new Date().toISOString(),
      },
    });

    // Return success response
    return NextResponse.json(
      { 
        success: true, 
        message: "Your message has been sent successfully. We will get back to you within 24 hours." 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}
