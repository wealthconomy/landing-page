import { NextResponse } from "next/server";
import { blogPosts } from "@/lib/blog";

export async function GET() {
  // Map and serve the latest/featured blog posts from our blog database
  const lessons = blogPosts.slice(0, 3).map((post) => ({
    title: post.title,
    desc: post.excerpt,
    cat: post.category,
    slug: post.slug,
  }));

  const assessments = [
    {
      id: "assessment-01",
      badge: "Assessment 01",
      title: "Net Worth & Asset Check",
      description: "Evaluate your current asset-to-liability ratio and understand your immediate net worth distribution category. Learn exactly where your money is tied up.",
      readTime: "3 Min Read",
      features: ["Asset distribution analysis", "Liability risk evaluation"],
    },
    {
      id: "assessment-02",
      badge: "Assessment 02",
      title: "Risk & Buffer Defense",
      description: "Analyze your savings capacity and emergency buffer readiness score to verify your risk defense category against sudden economic shifts.",
      readTime: "5 Min Read",
      features: ["Emergency fund capacity", "Inflation protection score"],
    },
  ];

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
      description: "Sitting cash loses value. We demystifying the economy, cutting out the financial noise and teaching you actionable strategies to protect your purchasing power against inflation, ensuring your wealth outpaces the market.",
      linkText: "Beat Inflation",
    },
  ];

  return NextResponse.json({
    success: true,
    lessons,
    assessments,
    modules,
  });
}
