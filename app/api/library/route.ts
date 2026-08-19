import { NextRequest, NextResponse } from "next/server";
import { fetchLibraryMaterials } from "@/lib/library-service";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const q = searchParams.get("q") || undefined;
    const type = searchParams.get("type") || undefined;
    const limit = searchParams.get("limit") ? parseInt(searchParams.get("limit")!, 10) : undefined;
    const sortBy = searchParams.get("sortBy") || undefined;
    const sortDir = (searchParams.get("sortDir") as "asc" | "desc") || undefined;

    const data = await fetchLibraryMaterials({ q, type, limit, sortBy, sortDir });
    return NextResponse.json(
      { success: true, ...data },
      { headers: { "Cache-Control": "no-store, max-age=0" } }
    );
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message || "Failed to fetch library materials" },
      { status: 500 }
    );
  }
}
