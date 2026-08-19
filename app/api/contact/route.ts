import { NextRequest, NextResponse } from "next/server";
import { submitContact } from "@/lib/contact-service";

export const dynamic = "force-dynamic";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, subject, message } = body;

    if (!firstName || typeof firstName !== "string" || !firstName.trim()) {
      return NextResponse.json(
        { success: false, error: "First name is required." },
        { status: 400 }
      );
    }

    if (!lastName || typeof lastName !== "string" || !lastName.trim()) {
      return NextResponse.json(
        { success: false, error: "Last name is required." },
        { status: 400 }
      );
    }

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json(
        { success: false, error: "A valid email address is required." },
        { status: 400 }
      );
    }

    if (!subject || typeof subject !== "string" || !subject.trim()) {
      return NextResponse.json(
        { success: false, error: "Subject is required." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || !message.trim()) {
      return NextResponse.json(
        { success: false, error: "Message is required." },
        { status: 400 }
      );
    }

    const result = await submitContact({
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      email: email.trim(),
      subject: subject.trim(),
      message: message.trim(),
    });

    if (!result.success) {
      return NextResponse.json(
        { success: false, error: result.error || "Failed to submit message." },
        { status: 400 }
      );
    }

    return NextResponse.json({
      success: true,
      message:
        (result as any).message ||
        "Thank you for reaching out to Wealthconomy! Our team will get back to you within 24 hours.",
      data: result.data,
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error?.message || "An unexpected error occurred." },
      { status: 500 }
    );
  }
}
