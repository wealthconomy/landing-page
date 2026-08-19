import { apiClient } from "./api-client";

export interface LibraryAuthor {
  id?: string;
  name?: string;
  image?: string;
}

export interface LibraryMaterialItem {
  id: string;
  title: string;
  description: string;
  category?: string;
  contentType: "document" | "video" | "whitepaper" | "report";
  fileType?: string;
  fileSize?: string;
  documentUrl?: string;
  youtubeUrl?: string;
  image?: string;
  author?: LibraryAuthor;
  readingDuration?: string;
  isDownloadable?: boolean;
  downloadsCount?: number;
  likesCount?: number;
  commentsCount?: number;
  publishToApp?: boolean;
  publishToWeb?: boolean;
  createdAt: string;
  updatedAt?: string;
}

export interface LibraryListResponse {
  items: LibraryMaterialItem[];
  nextCursor?: string | null;
  prevCursor?: string | null;
  pageSize?: number;
  hasNext?: boolean;
  hasPrev?: boolean;
  total?: number;
}

export function transformApiLibrary(item: any): LibraryMaterialItem {
  return {
    id: item.id || item._id,
    title: item.title || "Untitled Material",
    description: item.description || "",
    category: item.category || "General",
    contentType: item.contentType || (item.type === "video" ? "video" : "document"),
    fileType: item.fileType || (item.contentType === "video" ? "MP4" : "PDF"),
    fileSize: item.fileSize || "2.5 MB",
    documentUrl: item.documentUrl || item.fileUrl || item.url || "#",
    youtubeUrl: item.youtubeUrl,
    image: item.image || item.thumbnail || "",
    author: item.author,
    readingDuration: item.readingDuration || (item.contentType === "video" ? "15 min watch" : "10 min read"),
    isDownloadable: item.isDownloadable ?? true,
    downloadsCount: item.downloadsCount || 0,
    likesCount: item.likesCount || 0,
    commentsCount: item.commentsCount || 0,
    publishToApp: item.publishToApp ?? true,
    publishToWeb: item.publishToWeb ?? true,
    createdAt: item.createdAt || new Date().toISOString(),
    updatedAt: item.updatedAt,
  };
}

export async function fetchLibraryMaterials(params?: {
  q?: string;
  type?: string;
  limit?: number;
  sortBy?: string;
  sortDir?: "asc" | "desc";
}): Promise<LibraryListResponse> {
  const queryParams = new URLSearchParams();
  queryParams.append("publishToWeb", "true");

  if (params?.q) queryParams.append("q", params.q);
  if (params?.type && params.type !== "all" && params.type !== "All") {
    queryParams.append("type", params.type.toLowerCase());
  }
  if (params?.limit) queryParams.append("limit", params.limit.toString());
  if (params?.sortBy) queryParams.append("sortBy", params.sortBy);
  if (params?.sortDir) queryParams.append("sortDir", params.sortDir);

  const endpoint = `/client/library?${queryParams.toString()}`;
  const response = await apiClient<any>(endpoint, { cache: "no-store" });

  if (response.success && response.data) {
    const rawItems = Array.isArray(response.data)
      ? response.data
      : response.data.items || [];

    const items: LibraryMaterialItem[] = rawItems
      .filter((m: any) => m.publishToWeb !== false)
      .map(transformApiLibrary);

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

export async function fetchLibraryById(id: string): Promise<LibraryMaterialItem | null> {
  const response = await apiClient<any>(`/client/library/${id}`, { cache: "no-store" });
  if (response.success && response.data) {
    return transformApiLibrary(response.data);
  }

  return null;
}

export async function recordLibraryDownload(id: string): Promise<{ success: boolean; downloadsCount?: number }> {
  const res = await apiClient<any>(`/client/library/${id}/download`, {
    method: "POST",
  });
  return { success: res.success, downloadsCount: res.data?.downloadsCount };
}
