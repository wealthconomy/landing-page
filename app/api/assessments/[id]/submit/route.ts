import { NextRequest, NextResponse } from "next/server";
import { submitAssessmentAnswers } from "@/lib/assessment-service";

export const dynamic = "force-dynamic";

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();
    const { email, answers } = body;

    if (!email) {
      return NextResponse.json(
        { success: false, error: "Email is required to submit assessment" },
        { status: 400 }
      );
    }

    if (!answers || !Array.isArray(answers)) {
      return NextResponse.json(
        { success: false, error: "Answers array is required" },
        { status: 400 }
      );
    }

    const result = await submitAssessmentAnswers(id, email, answers);
    return NextResponse.json(result);
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message || "Failed to process assessment submission" },
      { status: 500 }
    );
  }
}
