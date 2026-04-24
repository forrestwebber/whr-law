import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN || "8658667496:AAHbf8jGYCKPBaPEY9pyXXzNPNtEnadiDOU";
const CHAT_ID = process.env.TELEGRAM_CHAT_ID || "8569056081";

async function sendTelegram(text: string) {
  await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ chat_id: CHAT_ID, text, parse_mode: "Markdown" }),
  }).catch(() => {});
}

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

    const subject = `New Consultation Request from ${name}`;
    const html = `
      <h2>New Free Consultation Request — WHR Law</h2>
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
    `;

    await resend.emails.send({
      from: "WHR Law Website <noreply@slacked.co>",
      to: ["william@whr-law.com", "contactus@whr-law.com"],
      subject,
      html,
    });

    await sendTelegram(
      `📋 *New WHR Law Inquiry*\nName: ${name}\nPhone: ${phone}\nEmail: ${email || "none"}\nArea: ${practiceArea || "not specified"}\n${description}`
    );

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json(
      { error: "Failed to send. Please call us directly." },
      { status: 500 }
    );
  }
}
