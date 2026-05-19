import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { blogPosts } from "@/lib/blog";
import { BlogPostDetail } from "@/components/blog-post-detail";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  
  if (!post) {
    return {
      title: "Article Not Found",
    };
  }

  return {
    title: `${post.title} — WiseUp Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return <BlogPostDetail post={post} />;
}
