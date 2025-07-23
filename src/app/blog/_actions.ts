"use server";

export interface BlogPostParams {
  offset?: number;
  limit?: number;
  category?: string;
  exclude?: number;
  search?: string;"use server";

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
const CACHE_TIME = 60 * 60; // 1 hour cache

async function wordPressFetch<T>(url: string): Promise<T> {
  try {
    const response = await fetch(url, {
      next: { revalidate: CACHE_TIME },
      headers: { "Content-Type": "application/json" },
      credentials: 'include', // Allow cookies if authentication is needed
    });

    if (!response.ok) {
      const error = `WordPress API error: ${response.status} - ${response.statusText}`;
      console.error(error);
      throw new Error(error);
    }

    const data = await response.json();
    return transformPosts(data) as T; // Transform raw API data
  } catch (error) {
    console.error("Fetch error:", error);
    throw new Error("Failed to fetch data from WordPress API");
  }
}

function transformPost(post: any): WordPressBlogPost {
  return {
    ID: post.id,
    author: { ID: post.author, name: "TODO: Fetch author name", login: "", email: false, first_name: "", last_name: "", nice_name: "", URL: "", avatar_URL: "", profile_URL: "", site_ID: 0 }, // Placeholder, fetch separately if needed
    date: post.date,
    title: post.title.rendered,
    excerpt: post.excerpt.rendered,
    status: post.status,
    featured_image: post.featured_media ? `https://mx5.88c.myftpupload.com/wp-json/wp/v2/media/${post.featured_media}` : "", // Fetch media URL
    content: post.content?.rendered,
    modified: post.modified,
    categories: Object.fromEntries(
      (post.categories || []).map((catId: number) => [
        catId.toString(),
        { ID: catId, name: "TODO: Fetch category name", slug: "", description: "", post_count: 0, parent: 0, meta: { links: { help: "", self: "", site: "" } } },
      ])
    ),
  };
}

function transformPosts(data: any): WordPressBlogPosts {
  if (Array.isArray(data)) {
    return { found: data.length, posts: data.map(transformPost) };
  }
  return { found: 1, posts: [transformPost(data)] };
}

export async function getWordPressBlogPosts({
  offset = 0,
  limit = 20,
  category,
  exclude,
  search,
}: BlogPostParams = {}): Promise<WordPressBlogPosts> {
  const fields = "author,id,date,title.rendered,excerpt.rendered,content.rendered,status,featured_media,categories,modified";
  let url = `${BASE_URL}posts/?offset=${offset}&per_page=${limit}&_fields=${fields}`;
  url = appendUrlParams(url, { categories: category, exclude, search });

  return await wordPressFetch<WordPressBlogPosts>(url);
}

export async function getWordPressBlogPost({ blogId }: SingleBlogParams): Promise<WordPressBlogPost> {
  const fields = "author,id,date,modified,title.rendered,content.rendered,excerpt.rendered,status,featured_media,categories";
  const url = `${BASE_URL}posts/${blogId}?_fields=${fields}`;

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
const CACHE_TIME = 60 * 60; // 1 hour cache

async function wordPressFetch<T>(url: string): Promise<T> {
  try {
    const response = await fetch(url, {
      next: { revalidate: CACHE_TIME },
      headers: { "Content-Type": "application/json" },
      credentials: 'include', // Allow cookies if authentication is needed
    });

    if (!response.ok) {
      const error = `WordPress API error: ${response.status} - ${response.statusText}`;
      console.error(error);
      throw new Error(error);
    }

    const data = await response.json();
    return transformPosts(data) as T; // Transform raw API data
  } catch (error) {
    console.error("Fetch error:", error);
    throw new Error("Failed to fetch data from WordPress API");
  }
}

function transformPost(post: any): WordPressBlogPost {
  return {
    ID: post.id,
    author: { ID: post.author, name: "TODO: Fetch author name", login: "", email: false, first_name: "", last_name: "", nice_name: "", URL: "", avatar_URL: "", profile_URL: "", site_ID: 0 }, // Placeholder, fetch separately if needed
    date: post.date,
    title: post.title.rendered,
    excerpt: post.excerpt.rendered,
    status: post.status,
    featured_image: post.featured_media ? `https://mx5.88c.myftpupload.com/wp-json/wp/v2/media/${post.featured_media}` : "", // Fetch media URL
    content: post.content?.rendered,
    modified: post.modified,
    categories: Object.fromEntries(
      (post.categories || []).map((catId: number) => [
        catId.toString(),
        { ID: catId, name: "TODO: Fetch category name", slug: "", description: "", post_count: 0, parent: 0, meta: { links: { help: "", self: "", site: "" } } },
      ])
    ),
  };
}

function transformPosts(data: any): WordPressBlogPosts {
  if (Array.isArray(data)) {
    return { found: data.length, posts: data.map(transformPost) };
  }
  return { found: 1, posts: [transformPost(data)] };
}

export async function getWordPressBlogPosts({
  offset = 0,
  limit = 20,
  category,
  exclude,
  search,
}: BlogPostParams = {}): Promise<WordPressBlogPosts> {
  const fields = "author,id,date,title.rendered,excerpt.rendered,content.rendered,status,featured_media,categories,modified";
  let url = `${BASE_URL}posts/?offset=${offset}&per_page=${limit}&_fields=${fields}`;
  url = appendUrlParams(url, { categories: category, exclude, search });

  return await wordPressFetch<WordPressBlogPosts>(url);
}

export async function getWordPressBlogPost({ blogId }: SingleBlogParams): Promise<WordPressBlogPost> {
  const fields = "author,id,date,modified,title.rendered,content.rendered,excerpt.rendered,status,featured_media,categories";
  const url = `${BASE_URL}posts/${blogId}?_fields=${fields}`;

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
