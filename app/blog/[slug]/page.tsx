import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { fetchBlogByIdOrSlug, fetchBlogs } from "@/lib/blog-service";
import { BlogPostDetail } from "@/components/blog-post-detail";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await fetchBlogByIdOrSlug(slug);

  if (!post) {
    return {
      title: "Article Not Found — WiseUp Blog",
    };
  }

  return {
    title: `${post.title} — WiseUp Blog`,
    description: post.description || post.content.slice(0, 150),
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await fetchBlogByIdOrSlug(slug);

  if (!post) {
    notFound();
  }

  // Fetch recent articles for related section
  const allBlogs = await fetchBlogs({ limit: 4 });
  const related = allBlogs.items.filter((b) => b.id !== post.id && b.slug !== post.slug).slice(0, 3);

  return <BlogPostDetail post={post} relatedPosts={related} />;
}
