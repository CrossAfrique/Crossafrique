import FinancialStructuringImg from "@/app/_assets/images/financial-structuring.jpg";
import IndustrialApplicationImg from "@/app/_assets/images/industrial-application.jpg";
import { Button } from "@/components/ui/button";
import parse from "html-react-parser";
import { ArrowLeft, Calendar, Share2, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { getWordPressBlogPost } from "@/app/blog/_actions";

export default async function BlogPostPage(props: {
  params: Promise<{ id: string }>;
}) {
  const params = await props.params;
  const post = await getWordPressBlogPost({ blogId: params.id });

  return (
    <div className="pt-16">
      <div className="relative h-[40vh] min-h-[300px] w-full">
        <Image
          src={post.featured_image || IndustrialApplicationImg}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex items-end">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="max-w-3xl">
              <span className="inline-block px-3 py-1 bg-emerald-600 text-white text-sm font-medium rounded-full mb-4">
                {Object.values(post.categories)[0]?.name || "Uncategorized"}
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                {post.title}
              </h1>
              <div className="flex items-center text-white/80">
                <div className="flex items-center mr-6">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{new Date(post.date).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center">
                  <User className="w-4 h-4 mr-2" />
                  <span>{post.author.name || "Unknown Author"}</span>
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
                    {post.author.name || "Unknown Author"}
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

          <div className="lg:w-1/3">
            <div className="sticky top-24 bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                Related Articles
              </h3>
              <div className="space-y-4">
                <Link
                  href="/blog/2"
                  className="block p-4 bg-white dark:bg-gray-900 rounded-lg hover:shadow-md transition-shadow"
                >
                  <h4 className="font-medium text-gray-900 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                    Innovative Storage Solutions for Hydrogen
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    April 2025
                  </p>
                </Link>
                <Link
                  href="/blog/3"
                  className="block p-4 bg-white dark:bg-gray-900 rounded-lg hover:shadow-md transition-shadow"
                >
                  <h4 className="font-medium text-gray-900 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                    Policy Frameworks for Hydrogen Development in East Africa
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    April 2025
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
