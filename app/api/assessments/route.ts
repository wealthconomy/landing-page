import { NextRequest, NextResponse } from "next/server";
import { fetchActiveAssessments } from "@/lib/assessment-service";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  try {
    const items = await fetchActiveAssessments();
    return NextResponse.json(
      { success: true, data: { items } },
      { headers: { "Cache-Control": "no-store, max-age=0" } }
    );
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message || "Failed to fetch assessments" },
      { status: 500 }
    );
  }
}
