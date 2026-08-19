import { NextRequest, NextResponse } from "next/server";
import { fetchBlogByIdOrSlug, toggleBlogLike, addBlogComment } from "@/lib/blog-service";

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const blog = await fetchBlogByIdOrSlug(id);
    if (!blog) {
      return NextResponse.json(
        { success: false, error: "Blog post not found" },
        { status: 404 }
      );
    }
    return NextResponse.json({ success: true, data: blog });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message || "Error fetching blog" },
      { status: 500 }
    );
  }
}

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json().catch(() => ({}));
    
    if (body.action === "like") {
      const result = await toggleBlogLike(id);
      return NextResponse.json(result);
    }

    if (body.action === "comment" && body.content) {
      const result = await addBlogComment(id, body.content);
      return NextResponse.json(result);
    }

    return NextResponse.json(
      { success: false, error: "Invalid action" },
      { status: 400 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message || "Error handling blog action" },
      { status: 500 }
    );
  }
}
