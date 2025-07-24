
  "use client";

  import { useState, useEffect } from "react";
 import { getWordPressBlogPosts } from "@/app/blog/_actions";
// import type { WordPressBlogPost } from "@/app/blog/types";

export default function BlogCategories() {
  const [categories, setCategories] = useState<Record<string, any>[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const { posts } = await getWordPressBlogPosts({ limit: 10 });
        const uniqueCategories = Array.from(
          new Set(posts.flatMap((post) => Object.values(post.categories)))
        );
        setCategories(uniqueCategories);
      } catch (error) {
        console.error("Failed to fetch categories:", error);
      }
    };
    fetchCategories();
  }, []);

  return (
    <div className="py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold mb-6">Categories</h2>
        <div className="flex flex-wrap gap-2">
          {categories.map((category, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm"
            >
              {category.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}