import { NextRequest, NextResponse } from "next/server";

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

    // Log to console for now — will connect to CRM later
    console.log("=== NEW CONSULTATION REQUEST ===");
    console.log("Name:", name);
    console.log("Phone:", phone);
    console.log("Email:", email || "Not provided");
    console.log("Practice Area:", practiceArea || "Not specified");
    console.log("Description:", description);
    console.log("Submitted at:", new Date().toISOString());
    console.log("================================");

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Invalid request." },
      { status: 400 }
    );
  }
}
