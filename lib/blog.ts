// Re-export types from live blog service
export type { BlogItem as BlogPost, BlogAuthor, BlogListResponse } from "./blog-service";
export { fetchBlogs, fetchBlogByIdOrSlug } from "./blog-service";
