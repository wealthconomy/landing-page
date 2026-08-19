import { NextRequest, NextResponse } from "next/server";
import { fetchBlogs } from "@/lib/blog-service";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const q = searchParams.get("q") || undefined;
    const category = searchParams.get("category") || undefined;
    const limit = searchParams.get("limit") ? parseInt(searchParams.get("limit")!, 10) : undefined;
    const sortBy = searchParams.get("sortBy") || undefined;
    const sortDir = (searchParams.get("sortDir") as "asc" | "desc") || undefined;

    const data = await fetchBlogs({ q, category, limit, sortBy, sortDir });
    return NextResponse.json(
      { success: true, ...data },
      { headers: { "Cache-Control": "no-store, max-age=0" } }
    );
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message || "Failed to fetch blogs" },
      { status: 500 }
    );
  }
}
