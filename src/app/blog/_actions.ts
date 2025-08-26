"use server";

// Import types
import type {
  BlogPostParams,
  SingleBlogParams,
  WordPressBlogPost,
  WordPressBlogPosts,
  IAuthor,
  IWordPressCategory,
} from "./types";

const BASE_URL = process.env.WORDPRESS_API_BASE_URL || "https://mx5.88c.myftpupload.com/wp-json/wp/v2/";
const CACHE_TIME = 60 * 60; // 1 hour cache

// Export type alias for backward compatibility
export type WordPressPost = WordPressBlogPost;

interface WordPressPostResponse {
  id: number;
  author: number;
  date: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  content: { rendered: string };
  status: string;
  featured_media: number;
  categories: number[];
  modified: string;
}

interface WordPressUserResponse {
  name: string;
  slug: string;
  avatar_urls: { [key: string]: string };
}

interface WordPressCategoryResponse {
  id: number;
  name: string;
  slug: string;
  description: string;
  count: number;
}

async function wordPressFetch<T>(
  url: string,
  signal?: AbortSignal,
): Promise<T> {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 10000); // 10-second timeout

  try {
    const response = await fetch(url, {
      next: { revalidate: CACHE_TIME },
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      signal: signal || controller.signal,
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      const error = `WordPress API error: ${response.status} - ${response.statusText}`;
      console.error(error);
      throw new Error(error);
    }

    return (await response.json()) as T; // Type assertion for stricter typing
  } catch (error) {
    clearTimeout(timeoutId); // Ensure timeout is cleared even on error

    if (error instanceof Error && error.name === "AbortError") {
      throw new Error("Request timed out");
    }

    console.error("Fetch error:", error);
    throw new Error("Failed to fetch data from WordPress API");
  }
}

async function transformPost(
  post: WordPressPostResponse,
): Promise<WordPressBlogPost> {
  let author: IAuthor = {
    ID: post.author,
    name: "Unknown Author",
    login: "",
    email: false,
    first_name: "",
    last_name: "",
    nice_name: "",
    URL: "",
    avatar_URL: "",
    profile_URL: "",
    site_ID: 0,
  };

  try {
    const authorResponse = await wordPressFetch<WordPressUserResponse>(
      `${BASE_URL}users/${post.author}`,
    );

    author = {
      ID: post.author,
      name: authorResponse.name || "Unknown Author",
      login: authorResponse.slug || "",
      email: false,
      first_name: "",
      last_name: "",
      nice_name: authorResponse.slug || "",
      URL: "",
      avatar_URL: authorResponse.avatar_urls?.["96"] || "",
      profile_URL: "",
      site_ID: 0,
    };
  } catch (error) {
    console.warn("Failed to fetch author data:", error);
  }

  const categories = await Promise.all(
    (post.categories || []).map(async (catId: number) => {
      try {
        const categoryResponse = await wordPressFetch<WordPressCategoryResponse>(
          `${BASE_URL}categories/${catId}`,
        );

        const category: IWordPressCategory = {
          ID: catId,
          name: categoryResponse.name || "Uncategorized",
          slug: categoryResponse.slug || "",
          description: categoryResponse.description || "",
          post_count: categoryResponse.count || 0,
          parent: 0,
          meta: { links: { help: "", self: "", site: "" } },
        };

        return [catId.toString(), category] as [string, IWordPressCategory]; // Explicit type assertion
      } catch (error) {
        console.warn(`Failed to fetch category ${catId}:`, error);

        const defaultCategory: IWordPressCategory = {
          ID: catId,
          name: "Uncategorized",
          slug: "",
          description: "",
          post_count: 0,
          parent: 0,
          meta: { links: { help: "", self: "", site: "" } },
        };

        return [catId.toString(), defaultCategory] as [string, IWordPressCategory]; // Explicit type assertion
      }
    }),
  );

  // Clean and format content
  const cleanContent = post.content?.rendered
    ? post.content.rendered
        .replace(/\n\s*\n/g, '\n\n') // Normalize paragraph breaks
        .replace(/<p>\s*<\/p>/g, '') // Remove empty paragraphs
        .trim()
    : "";

  const cleanExcerpt = post.excerpt.rendered
    ? post.excerpt.rendered
        .replace(/\[\&hellip;\]/g, '...')
        .replace(/<p>\s*<\/p>/g, '') // Remove empty paragraphs
        .trim()
    : "";

  return {
    ID: post.id,
    author,
    date: post.date,
    title: post.title.rendered,
    excerpt: cleanExcerpt,
    status: post.status,
    featured_image: post.featured_media
      ? `${BASE_URL}media/${post.featured_media}`
      : "",
    content: cleanContent,
    modified: post.modified,
    categories: Object.fromEntries(categories),
  };
}

async function transformPosts(
  data: WordPressPostResponse[] | WordPressPostResponse, // Allow single post as well
): Promise<WordPressBlogPosts> {
  if (Array.isArray(data)) {
    const posts = await Promise.all(data.map(transformPost));
    return { found: data.length, posts };
  } else {
    const post = await transformPost(data);
    return { found: 1, posts: [post] };
  }
}

export async function getWordPressBlogPosts({
  offset = 0,
  limit = 20,
  category,
  exclude,
  search,
}: BlogPostParams = {}): Promise<WordPressBlogPosts> {
  // Validate inputs
  if (limit < 0 || limit > 100) {
    throw new Error("Limit must be between 0 and 100");
  }
  if (offset < 0) {
    throw new Error("Offset cannot be negative");
  }
  if (category && (isNaN(Number(category)) || Number(category) < 0)) {
    throw new Error("Category must be a non-negative number");
  }
  if (exclude !== undefined && typeof exclude !== "number") {
    throw new Error("Exclude must be a number");
  }
  if (search && typeof search !== "string") {
    throw new Error("Search must be a string");
  }

  const fields =
    "author,id,date,title.rendered,excerpt.rendered,content.rendered,status,featured_media,categories,modified";
  let url = `${BASE_URL}posts?offset=${offset}&per_page=${limit}&_fields=${fields}`;

  // Build query parameters safely
  const params: Record<string, string> = {};
  if (category) {
    params.categories = category.toString();
  }
  if (exclude !== undefined) {
    params.exclude = exclude.toString();
  }
  if (search) {
    params.search = encodeURIComponent(search);
  }

  // Construct URL with validated params
  const queryString = new URLSearchParams(params).toString();
  url += queryString ? `&${queryString}` : "";

  console.log("Fetching URL:", url);

  try {
    const data = await wordPressFetch<WordPressPostResponse[]>(url);
    return await transformPosts(data);
  } catch (error) {
    console.error("Error fetching WordPress posts:", error);
    throw new Error("Unable to retrieve WordPress posts");
  }
}

export async function getWordPressBlogPost({
  blogId,
}: SingleBlogParams): Promise<WordPressBlogPost> {
  if (!blogId || isNaN(parseInt(blogId))) {
    throw new Error("Invalid blogId");
  }

  const fields =
    "author,id,date,modified,title.rendered,content.rendered,excerpt.rendered,status,featured_media,categories";
  const url = `${BASE_URL}posts/${blogId}?_fields=${fields}`;
  console.log("Fetching URL:", url);
  const data = await wordPressFetch<WordPressPostResponse>(url);
  return await transformPost(data);
}