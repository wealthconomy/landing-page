import { NextRequest, NextResponse } from "next/server";
import { fetchAssessmentById } from "@/lib/assessment-service";

export const dynamic = "force-dynamic";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const data = await fetchAssessmentById(id);
    if (!data) {
      return NextResponse.json(
        { success: false, error: "Assessment not found" },
        { status: 404 }
      );
    }
    return NextResponse.json(
      { success: true, data },
      { headers: { "Cache-Control": "no-store, max-age=0" } }
    );
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message || "Failed to fetch assessment" },
      { status: 500 }
    );
  }
}
