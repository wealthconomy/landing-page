import type { Metadata } from "next";
import { BlogIndex } from "@/components/blog-index";

export const metadata: Metadata = {
  title: "Blog — WiseUp by Wealthconomy",
  description: "Stay ahead with curated financial guides, market insights, savings strategies, and smart budgeting tips on WiseUp Hub.",
};

export default function BlogPage() {
  return <BlogIndex />;
}
