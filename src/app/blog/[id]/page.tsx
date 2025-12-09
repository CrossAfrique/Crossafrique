
import IndustrialApplicationImg from "@/app/_assets/images/industrial-application.jpg";
import { Button } from "@/components/ui/button";
import parse, { domToReact, HTMLReactParserOptions, Element, DOMNode } from "html-react-parser";
import { ArrowLeft, Calendar, Share2, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  getWordPressBlogPost,
  getWordPressBlogPosts,
} from "@/app/blog/_actions";
import type { WordPressBlogPost } from "@/app/blog/types";

interface BlogPostPageProps {
  params: Promise<{ id: string }>;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const resolvedParams = await params;
  const postId = resolvedParams.id;

  let post: WordPressBlogPost;
  try {
    post = await getWordPressBlogPost({ blogId: postId });
  } catch (error) {
    console.error("Failed to fetch blog post:", error);
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <p className="text-red-500">Failed to load post. Please try again later.</p>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <p className="text-red-500">Post not found.</p>
      </div>
    );
  }

  const categoryKey = Object.keys(post.categories || {})[0];
  const category = categoryKey ? parseInt(categoryKey) : undefined;

  let relatedPostsResult: { found: number; posts: WordPressBlogPost[] } | null = null;

  if (category) {
    try {
      relatedPostsResult = await getWordPressBlogPosts({
        category: String(category),
        exclude: parseInt(postId),
        limit: 3,
      });
    } catch (error) {
      console.error("Failed to fetch related posts:", error);
      relatedPostsResult = { found: 0, posts: [] };
    }
  } else {
    relatedPostsResult = { found: 0, posts: [] };
  }

  const relatedPosts = relatedPostsResult?.posts || [];

  const postDate = post.date ? new Date(post.date) : new Date();
  const formattedDate = postDate.toLocaleDateString();

  const categoryName =
    Object.values(post.categories || {})[0]?.name || "Uncategorized";

  return (
    <div className="pt-16">
      <div className="relative h-[40vh] min-h-[300px] w-full">
        <Image
          src={post.featured_image || IndustrialApplicationImg}
          alt={post.title || "Blog Post"}
          fill
          className="object-cover"
          priority
          suppressHydrationWarning
        />
        <div className="absolute inset-0 bg-black/50 flex items-end">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="max-w-3xl">
              <span className="inline-block px-3 py-1 bg-emerald-600 text-white text-sm font-medium rounded-full mb-4">
                {categoryName}
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                {post.title || "Untitled"}
              </h1>
              <div className="flex items-center text-white/80">
                <div className="flex items-center mr-6">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{formattedDate}</span>
                </div>
                <div className="flex items-center">
                  <User className="w-4 h-4 mr-2" />
                  <span>{post.author?.name || "Unknown Author"}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-2/3">
            <Link
              href="/blog"
              className="inline-flex items-center text-emerald-600 hover:text-emerald-700 mb-8"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to all articles
            </Link>

            <article className="prose prose-lg dark:prose-invert max-w-none prose-headings:text-gray-900 dark:prose-headings:text-white prose-a:text-emerald-600 hover:prose-a:text-emerald-700">
              <div>{parse(post.content || "")}</div>
            </article>

            <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <h3 className="font-medium text-gray-900 dark:text-white">
                    {post.author?.name || "Unknown Author"}
                  </h3>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center"
                >
                  <Share2 className="w-4 h-4 mr-2" />
                  Share
                </Button>
              </div>
            </div>
          </div>

          <aside className="lg:w-1/3">
            <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
              Related Articles
            </h3>
            {relatedPosts.length > 0 ? (
              <ul className="space-y-4">
                {relatedPosts.map((relatedPost) => (
                  <li key={relatedPost.ID}>
                    <Link
                      href={`/blog/${relatedPost.ID}`}
                      className="text-blue-600 hover:underline"
                    >
                      {relatedPost.title || "Untitled"}
                    </Link>
                    <p className="text-sm text-gray-600">
                      {new Date(relatedPost.date || new Date()).toLocaleDateString()}
                    </p>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500">No related articles found.</p>
            )}
          </aside>
        </div>
      </div>
    </div>
  );
}
