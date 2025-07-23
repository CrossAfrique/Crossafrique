export interface BlogPostParams {
  offset?: number;
  limit?: number;
  category?: string;
  exclude?: number;
  search?: string;
}

export interface SingleBlogParams {
  blogId?: string;
}

export interface IAuthor {
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

export interface IWordPressCategory {
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

export interface WordPressBlogPosts {
  found: number;
  posts: WordPressBlogPost[];
}