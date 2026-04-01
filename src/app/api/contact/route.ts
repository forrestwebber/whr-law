import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, phone, email, practiceArea, description } = body;

    if (!name || !phone || !description) {
      return NextResponse.json(
        { error: "Name, phone, and description are required." },
        { status: 400 }
      );
    }

    // Send email notification to William
    await transporter.sendMail({
      from: `"WHR Law Website" <${process.env.SMTP_USER}>`,
      to: "william@whr-law.com",
      cc: "forrestwebber@gmail.com",
      subject: `New Consultation Request from ${name}`,
      html: `
        <h2>New Free Consultation Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email || "Not provided"}</p>
        <p><strong>Practice Area:</strong> ${practiceArea || "Not specified"}</p>
        <p><strong>Description:</strong></p>
        <p>${description}</p>
        <hr />
        <p style="color: #666; font-size: 12px;">
          Submitted via whr-law.com on ${new Date().toLocaleString("en-US", { timeZone: "America/Chicago" })}
        </p>
      `,
    });

    console.log(`Lead captured: ${name} - ${phone} - ${new Date().toISOString()}`);

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json(
      { error: "Failed to send. Please call us directly." },
      { status: 500 }
    );
  }
}
