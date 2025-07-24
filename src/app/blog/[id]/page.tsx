import Image from "next/image";
import Newsletter from "@/app/blog/_components/newsletter";
import { getWordPressBlogPost, getWordPressBlogPosts } from "@/app/blog/_actions";
import Link from "next/link";

export const metadata = {
  title: "Blog Post | Crossafrique Hydrogen",
  description: "Read detailed insights on clean hydrogen technology.",
};

export default async function BlogPostPage({ params }: { params: { id: string } }) {
  const post = await getWordPressBlogPost({ blogId: params.id });
  const relatedPosts = await getWordPressBlogPosts({
    category: Object.keys(post.categories)[0], // Use the first category ID
    exclude: parseInt(params.id), // Exclude the current post as an array
    limit: 3, // Limit to 3 related posts
  });

  return (
    <div className="pt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <article className="prose prose-lg dark:prose-invert max-w-none lg:col-span-2">
            <h1>{post.title}</h1>
            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
              <span>{new Date(post.date).toLocaleDateString()}</span>
              <span className="mx-2">•</span>
              <span>{post.author.name || "Unknown Author"}</span>
            </div>
            {post.featured_image && (
              <div className="relative w-full h-64 mb-6">
                <Image src={post.featured_image} alt={post.title} fill className="object-cover" />
              </div>
            )}
            <div dangerouslySetInnerHTML={{ __html: post.content || "" }} />
          </article>

          {/* Related Articles Sidebar */}
          <aside className="lg:col-span-1">
            <h3 className="text-xl font-bold mb-4">Related Articles</h3>
            {relatedPosts.posts.length > 0 ? (
              <ul className="space-y-4">
                {relatedPosts.posts.map((relatedPost) => (
                  <li key={relatedPost.ID}>
                    <Link href={`/blog/${relatedPost.ID}`} className="text-blue-600 hover:underline">
                      {relatedPost.title}
                    </Link>
                    <p className="text-sm text-gray-600">{new Date(relatedPost.date).toLocaleDateString()}</p>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500">No related articles found.</p>
            )}
          </aside>
        </div>
      </div>
      <Newsletter />
    </div>
  );
}