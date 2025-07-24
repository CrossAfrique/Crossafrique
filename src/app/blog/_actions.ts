"use server";

// Import types
import type {
  BlogPostParams,
  SingleBlogParams,
  WordPressBlogPost,
  WordPressBlogPosts,
  IAuthor,
  // IWordPressCategory,
} from "./types";

const BASE_URL =
  process.env.WORDPRESS_API_BASE_URL ||
  "https://mx5.88c.myftpupload.com/wp-json/wp/v2/";
const CACHE_TIME = 60 * 60; // 1 hour cache

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
  name: string;
  slug: string;
  description: string;
  count: number;
}

async function wordPressFetch<T>(url: string): Promise<T> {
  try {
    const response = await fetch(url, {
      next: { revalidate: CACHE_TIME },
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });

    if (!response.ok) {
      const error = `WordPress API error: ${response.status} - ${response.statusText}`;
      console.error(error);
      throw new Error(error);
    }

    return await response.json();
  } catch (error) {
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
        const categoryResponse =
          await wordPressFetch<WordPressCategoryResponse>(
            `${BASE_URL}categories/${catId}`,
          );
        return [
          catId.toString(),
          {
            ID: catId,
            name: categoryResponse.name || "Uncategorized",
            slug: categoryResponse.slug || "",
            description: categoryResponse.description || "",
            post_count: categoryResponse.count || 0,
            parent: 0,
            meta: { links: { help: "", self: "", site: "" } },
          },
        ];
      } catch (error) {
        console.warn(`Failed to fetch category ${catId}:`, error);
        return [
          catId.toString(),
          {
            ID: catId,
            name: "Uncategorized",
            slug: "",
            description: "",
            post_count: 0,
            parent: 0,
            meta: { links: { help: "", self: "", site: "" } },
          },
        ];
      }
    }),
  );

  return {
    ID: post.id,
    author,
    date: post.date,
    title: post.title.rendered,
    excerpt: post.excerpt.rendered,
    status: post.status,
    featured_image: post.featured_media
      ? `${BASE_URL}media/${post.featured_media}`
      : "",
    content: post.content?.rendered,
    modified: post.modified,
    categories: Object.fromEntries(categories),
  };
}

async function transformPosts(
  data: WordPressPostResponse[],
): Promise<WordPressBlogPosts> {
  if (Array.isArray(data)) {
    const posts = await Promise.all(data.map(transformPost));
    return { found: data.length, posts };
  }
  const post = await transformPost(data);
  return { found: 1, posts: [post] };
}
export async function getWordPressBlogPosts({
  offset = 0,
  limit = 20,
  category,
  exclude,
  search,
}: BlogPostParams = {}): Promise<WordPressBlogPosts> {
  const fields =
    "author,id,date,title.rendered,excerpt.rendered,content.rendered,status,featured_media,categories,modified";
  let url = `${BASE_URL}posts?offset=${offset}&per_page=${limit}&_fields=${fields}`;

  const params: Record<string, string | number | undefined> = {};

  // Handle category filtering
  if (category) {
    params.categories = category;
  }

  // Handle exclude parameter (single ID or array of IDs)
  if (exclude) {
    const excludeIds = Array.isArray(exclude) ? exclude : [exclude];
    params.exclude = excludeIds.join(",");
  }

  if (search) {
    params.search = search;
  }

  url = appendUrlParams(url, params);

  console.log("Fetching URL:", url);
  return await wordPressFetch<WordPressPostResponse[]>(url).then(
    transformPosts,
  );
}

export async function getWordPressBlogPost({
  blogId,
}: SingleBlogParams): Promise<WordPressBlogPost> {
  const fields =
    "author,id,date,modified,title.rendered,content.rendered,excerpt.rendered,status,featured_media,categories";
  const url = `${BASE_URL}posts/${blogId}?_fields=${fields}`;
  console.log("Fetching URL:", url);
  return await wordPressFetch<WordPressPostResponse>(url).then(transformPost);
}

function appendUrlParams(
  url: string,
  params: Record<string, string | number | undefined>,
): string {
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
