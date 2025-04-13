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

// Common types for responses
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

const BASE_URL = process.env.WORDPRESS_API_BASE_URL;
const CACHE_TIME = 60;

// Reusable fetch wrapper with error handling
async function wordPressFetch<T>(url: string): Promise<T> {
	const response = await fetch(url, {
		next: { revalidate: CACHE_TIME },
	});

	if (!response.ok) {
		const error = `WordPress API error: ${response.statusText}`;
		console.error(error);
		throw new Error(error);
	}

	return response.json();
}

export async function getWordPressBlogPosts({
	offset = 0,
	limit = 20,
	category,
	exclude,
	search,
}: BlogPostParams = {}): Promise<WordPressBlogPosts> {
	const fields =
		"author,ID,date,title,content,excerpt,status,featured_image,categories";
	const url = `${BASE_URL}/posts/?offset=${offset}&number=${limit}&fields=${fields}`;
	const updatedUrl = appendUrlParams(url, {
		category,
		exclude,
		search,
	});

	try {
		return await wordPressFetch<WordPressBlogPosts>(updatedUrl);
	} catch (error) {
		console.error("Error fetching blog posts:", error);
		throw error;
	}
}

export async function getWordPressBlogPost({
	blogId,
}: SingleBlogParams): Promise<WordPressBlogPost> {
	const fields =
		"author,ID,date,modified,title,content,date,excerpt,status,featured_image,categories";
	const url = `${BASE_URL}/posts/${blogId}?fields=${fields}`;

	try {
		return await wordPressFetch<WordPressBlogPost>(url);
	} catch (error) {
		console.error("Error fetching blog post:", error);
		throw error;
	}
}

function appendUrlParams(
	url: string,
	params: Record<string, string | number | undefined>,
): string {
	let updatedUrl = url;

	for (const [key, value] of Object.entries(params)) {
		if (value) {
			updatedUrl = `${url}&${key}=${value}`;
		}
	}
	return updatedUrl;
}
