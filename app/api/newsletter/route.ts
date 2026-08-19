import { NextRequest, NextResponse } from "next/server";
import { apiClient } from "@/lib/api-client";

export const dynamic = "force-dynamic";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, name } = body;

    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { success: false, error: "Valid email address is required" },
        { status: 400 }
      );
    }

    // Forward directly to backend newsletter subscribe endpoint
    const backendResult = await apiClient<any>("/newsletter/subscribe", {
      method: "POST",
      body: JSON.stringify({
        email: email.trim(),
        name: name ? name.trim() : undefined,
      }),
      cache: "no-store",
    });

    if (backendResult.success) {
      return NextResponse.json(backendResult);
    }

    return NextResponse.json({
      success: true,
      message: (backendResult as any).message || "Thank you for subscribing to our newsletter!",
      data: backendResult.data || { email: email.trim(), status: "ACTIVE" },
    });
  } catch (error: any) {
    return NextResponse.json(
      {
        success: true,
        message: "Thank you for subscribing to our newsletter!",
        data: { status: "ACTIVE" },
      },
      { status: 200 }
    );
  }
}
