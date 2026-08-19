import { apiClient } from "./api-client";

export interface BlogAuthor {
  id?: string;
  name: string;
  image?: string;
}

export interface BlogItem {
  id: string;
  slug: string;
  title: string;
  author: BlogAuthor;
  content: string;
  category: string;
  image: string;
  status: string;
  timeAgo?: string;
  bookmarks?: number;
  views?: number;
  publishToApp?: boolean;
  publishToWeb?: boolean;
  description?: string;
  readingDuration?: string;
  sharesCount?: number;
  createdAt: string;
  updatedAt?: string;
}

export interface BlogListResponse {
  items: BlogItem[];
  nextCursor?: string | null;
  prevCursor?: string | null;
  pageSize?: number;
  hasNext?: boolean;
  hasPrev?: boolean;
  total?: number;
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function transformApiBlog(item: any): BlogItem {
  const title = item.title || "Untitled Blog";
  const slug = item.slug || `${slugify(title)}-${item.id?.slice(-6) || Math.random().toString(36).substring(2, 6)}`;
  
  const authorName = item.author?.name || (typeof item.author === "string" ? item.author : "Wealthconomy Editorial");
  const authorImage = item.author?.image || item.authorAvatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(authorName)}&background=random`;

  return {
    id: item.id || item._id || slug,
    slug: item.slug || slug,
    title,
    author: {
      id: item.author?.id,
      name: authorName,
      image: authorImage,
    },
    content: item.content || item.description || "",
    category: item.category || "General",
    image: item.image || "",
    status: item.status || "published",
    timeAgo: item.timeAgo,
    bookmarks: item.bookmarks || 0,
    views: item.views || 0,
    publishToApp: item.publishToApp ?? true,
    publishToWeb: item.publishToWeb ?? true,
    description: item.description || "",
    readingDuration: item.readingDuration || "4 min read",
    sharesCount: item.sharesCount || 0,
    createdAt: item.createdAt || new Date().toISOString(),
    updatedAt: item.updatedAt,
  };
}

export async function fetchBlogs(params?: {
  q?: string;
  category?: string;
  limit?: number;
  sortBy?: string;
  sortDir?: "asc" | "desc";
}): Promise<BlogListResponse> {
  const queryParams = new URLSearchParams();
  queryParams.append("publishToWeb", "true");
  
  if (params?.q) queryParams.append("q", params.q);
  if (params?.limit) queryParams.append("limit", params.limit.toString());
  if (params?.sortBy) queryParams.append("sortBy", params.sortBy);
  if (params?.sortDir) queryParams.append("sortDir", params.sortDir);

  const endpoint = `/client/blogs?${queryParams.toString()}`;
  const response = await apiClient<any>(endpoint, { cache: "no-store" });

  if (response.success && response.data) {
    const rawItems = Array.isArray(response.data)
      ? response.data
      : response.data.items || [];
    
    let items: BlogItem[] = rawItems
      .filter((b: any) => b.publishToWeb !== false)
      .map(transformApiBlog);

    if (params?.category && params.category !== "All") {
      items = items.filter(
        (b) => b.category.toLowerCase() === params.category!.toLowerCase()
      );
    }

    return {
      items,
      nextCursor: response.data.nextCursor,
      prevCursor: response.data.prevCursor,
      pageSize: response.data.pageSize || items.length,
      hasNext: response.data.hasNext ?? false,
      hasPrev: response.data.hasPrev ?? false,
      total: items.length,
    };
  }

  return {
    items: [],
    total: 0,
    hasNext: false,
    hasPrev: false,
  };
}

export async function fetchBlogByIdOrSlug(idOrSlug: string): Promise<BlogItem | null> {
  const response = await apiClient<any>(`/client/blogs/${idOrSlug}`, { cache: "no-store" });
  if (response.success && response.data) {
    return transformApiBlog(response.data);
  }

  // Fallback search across active blogs
  const allBlogs = await fetchBlogs({ limit: 50 });
  const matched = allBlogs.items.find(
    (b) =>
      b.id === idOrSlug ||
      b.slug === idOrSlug ||
      b.slug.includes(idOrSlug) ||
      idOrSlug.includes(b.id)
  );

  return matched || null;
}

export async function toggleBlogLike(id: string): Promise<{ success: boolean }> {
  const res = await apiClient<any>(`/client/blogs/${id}/like`, {
    method: "POST",
  });
  return { success: res.success };
}

export async function addBlogComment(id: string, content: string): Promise<{ success: boolean; data?: any }> {
  const res = await apiClient<any>(`/client/blogs/${id}/comments`, {
    method: "POST",
    body: JSON.stringify({ content }),
  });
  return { success: res.success, data: res.data };
}
