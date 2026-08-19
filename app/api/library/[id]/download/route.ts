import { NextRequest, NextResponse } from "next/server";
import { recordLibraryDownload } from "@/lib/library-service";

export async function POST(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const result = await recordLibraryDownload(id);
    return NextResponse.json({ success: result.success, downloadsCount: result.downloadsCount });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message || "Failed to record download" },
      { status: 500 }
    );
  }
}
