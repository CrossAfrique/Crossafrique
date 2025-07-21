"use server";

export interface BlogPostParams {
  offset?: number;
  limit?: number;
  category?: string;
  exclude?: number;
  search?: string;
}

interface SingleBlogParams {
  blogId?: string;
}

interface IAuthor {
  ID: number;
  login: string;
  email: boolean;
  name: string;
  first_name: string;
  last_name: string;
  nice_name: string;
  URL: string;
  avatar_URL: string;
  profile_URL: string;
  site_ID: number;
}

interface IWordPressCategory {
  ID: number;
  name: string;
  slug: string;
  description: string;
  post_count: number;
  parent: number;
  meta: {
    links: {
      help: string;
      self: string;
      site: string;
    };
  };
}

export interface WordPressBlogPost {
  ID: number;
  author: IAuthor;
  date: string;
  title: string;
  excerpt: string;
  status: string;
  featured_image: string;
  content?: string;
  modified?: string;
  categories: Record<string, IWordPressCategory>;
}

interface WordPressBlogPosts {
  found: number;
  posts: WordPressBlogPost[];
}

const BASE_URL = process.env.WORDPRESS_API_BASE_URL || "https://mx5.88c.myftpupload.com/wp-json/";
const CACHE_TIME = 60 * 60; // Increase to 1 hour for less frequent updates

async function wordPressFetch<T>(url: string): Promise<T> {
  try {
    const response = await fetch(url, {
      next: { revalidate: CACHE_TIME },
      headers: { "Content-Type": "application/json" },
    });

    if (!response.ok) {
      const error = `WordPress API error: ${response.status} - ${response.statusText}`;
      console.error(error);
      throw new Error(error);
    }

    return response.json();
  } catch (error) {
    console.error("Fetch error:", error);
    throw new Error("Failed to fetch data from WordPress API");
  }
}

export async function getWordPressBlogPosts({
  offset = 0,
  limit = 20,
  category,
  exclude,
  search,
}: BlogPostParams = {}): Promise<WordPressBlogPosts> {
  const fields = "author,ID,date,title,content,excerpt,status,featured_image,categories";
  let url = `${BASE_URL}posts/?offset=${offset}&number=${limit}&fields=${fields}`;
  url = appendUrlParams(url, { category, exclude, search });

  return await wordPressFetch<WordPressBlogPosts>(url);
}

export async function getWordPressBlogPost({ blogId }: SingleBlogParams): Promise<WordPressBlogPost> {
  const fields = "author,ID,date,modified,title,content,excerpt,status,featured_image,categories";
  const url = `${BASE_URL}posts/${blogId}?fields=${fields}`;

  return await wordPressFetch<WordPressBlogPost>(url);
}

function appendUrlParams(url: string, params: Record<string, string | number | undefined>): string {
  let updatedUrl = url;
  const queryParams = new URLSearchParams();
  for (const [key, value] of Object.entries(params)) {
    if (value !== undefined && value !== null) {
      queryParams.append(key, encodeURIComponent(value.toString()));
    }
  }
  if (queryParams.toString()) {
    updatedUrl += `${url.includes("?") ? "&" : "?"}${queryParams.toString()}`;
  }
  return updatedUrl;
}
