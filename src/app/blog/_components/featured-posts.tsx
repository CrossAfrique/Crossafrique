"use client";

import FinancialStructuringImg from "@/app/_assets/images/financial-structuring.jpg";
import IndustrialApplicationImg from "@/app/_assets/images/industrial-application.jpg";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, User } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { getWordPressBlogPosts } from "@/app/blog/_actions";

const FeaturedPosts = async ({ initialPosts }: { initialPosts?: WordPressBlogPost[] }) => {
  const { posts } = initialPosts ? { posts: initialPosts } : await getWordPressBlogPosts({ limit: 2 });

  return (
    <section className="py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold mb-8 text-gray-900 dark:text-white"
        >
          Featured Articles
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.div
              key={post.ID}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow duration-300 p-6 justify-between">
                <div className="flex flex-col gap-6">
                  <Link href={`/blog/${post.ID}`} className="block">
                    <div className="relative h-48 w-full">
                      <Image
                        src={post.featured_image || IndustrialApplicationImg}
                        alt={post.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </Link>
                  <CardContent className="p-0">
                    <div className="flex items-center mb-3">
                      <span className="text-xs font-medium px-2 py-1 bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300 rounded-full">
                        {Object.values(post.categories)[0]?.name || "Uncategorized"}
                      </span>
                    </div>
                    <Link href={`/blog/${post.ID}`}>
                      <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                        {post.title}
                      </h3>
                    </Link>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      {post.excerpt}
                    </p>
                  </CardContent>
                </div>

                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                  <div className="flex items-center mr-4">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-1" />
                    <span>{post.author.name || "Unknown Author"}</span>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedPosts;
