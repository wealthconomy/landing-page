import { NextResponse } from "next/server";
import { fetchBlogs } from "@/lib/blog-service";
import { fetchActiveAssessments } from "@/lib/assessment-service";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const [blogData, liveAssessments] = await Promise.all([
      fetchBlogs({ limit: 3 }),
      fetchActiveAssessments(),
    ]);

    const blogs = blogData.items.slice(0, 3).map((post) => ({
      id: post.id,
      title: post.title,
      desc: post.description || post.content.slice(0, 100) + "...",
      cat: post.category,
      slug: post.slug || post.id,
      readTime: post.readingDuration || "4 min",
    }));

    const assessments = liveAssessments.map((ast, idx) => ({
      id: ast.id,
      badge: `Assessment 0${idx + 1}`,
      title: ast.title,
      description: ast.description,
      readTime: `${ast.estimatedMinutes || 3} Min Test`,
      features: [
        `${ast.totalQuestions || 5} Questions Scorecard`,
        "Instant Personalized Readiness Report",
      ],
    }));

    const modules = [
      {
        id: "compounding",
        title: "The Mathematics of Wealth",
        icon: "TrendingUp",
        description: "Understand exactly how time and consistency multiply your money. We break down the mechanics of compounding interest, showing you how small, automated contributions in your WealthFix portfolio turn into massive, life-changing milestones over time.",
        linkText: "Master Compounding",
      },
      {
        id: "discipline",
        title: "Structured Discipline",
        icon: "Target",
        description: "Willpower is limited, but systems are infinite. Learn how to construct a foolproof financial framework. We teach you how to split your income, budget efficiently, and reach your emergency fund goals without feeling restricted.",
        linkText: "Learn Smart Allocation",
      },
      {
        id: "inflation",
        title: "Protect Your Power",
        icon: "ShieldCheck",
        description: "Sitting cash loses value. We demystify the economy, cutting out the financial noise and teaching you actionable strategies to protect your purchasing power against inflation, ensuring your wealth outpaces the market.",
        linkText: "Beat Inflation",
      },
    ];

    return NextResponse.json({
      success: true,
      blogs,
      lessons: blogs,
      assessments,
      modules,
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message || "Failed to load learning hub data" },
      { status: 500 }
    );
  }
}
