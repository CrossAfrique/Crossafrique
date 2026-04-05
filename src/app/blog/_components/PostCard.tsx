"use client";

import Image from "next/image";
import Link from "next/link";
import { Calendar, User } from "lucide-react";
import { motion } from "framer-motion";
import sanitizeHtml from 'sanitize-html';
import type { WordPressBlogPost } from "@/app/blog/types";

interface PostCardProps {
  post: WordPressBlogPost;
  index?: number;
}

export default function PostCard({ post, index = 0 }: PostCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl flex flex-col h-full transition-all"
    >
      {/* Clickable Image */}
      <Link href={`/blog/${post.ID}`} className="block relative h-56">
        <Image
          src={post.featured_image || "/images/default-cover.jpg"}
          alt={typeof post.title === 'string' ? post.title : 'Blog post'}
          fill
          className="object-cover hover:scale-105 transition-transform duration-300"
        />
      </Link>

      <div className="p-6 flex flex-col flex-1">
        {/* Category */}
        <div className="flex items-center mb-3">
          <span className="text-xs font-medium px-2 py-1 bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300 rounded-full">
            {(() => {
              const categories = post.categories ? Object.values(post.categories) : [];
              return categories.length > 0 ? categories[0]?.name || "Uncategorized" : "Uncategorized";
            })()}
          </span>
        </div>

        {/* Title */}
        <Link href={`/blog/${post.ID}`}>
          <h3 
            className="text-xl font-semibold mb-3 text-gray-900 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors line-clamp-2"
            dangerouslySetInnerHTML={{ __html: sanitizeHtml(
              typeof post.title === 'string' ? post.title : (post.title as any)?.rendered || ''
            ) }}
          />
        </Link>

        {/* Excerpt */}
        <div
          className="text-gray-700 dark:text-gray-300 mb-6 prose-excerpt flex-1 text-sm leading-relaxed"
          dangerouslySetInnerHTML={{ __html: sanitizeHtml(post.excerpt || "") }}
        />

        {/* Meta */}
        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mt-auto">
          <div className="flex items-center mr-4">
            <Calendar className="w-4 h-4 mr-1" />
            <span>{new Date(post.date).toLocaleDateString()}</span>
          </div>
          <div className="flex items-center">
            <User className="w-4 h-4 mr-1" />
            <span>{post.author.name || "Unknown Author"}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}