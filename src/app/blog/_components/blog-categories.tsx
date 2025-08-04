
"use client";

import { useState, useEffect } from "react";
import { getWordPressBlogPosts } from "@/app/blog/_actions";
import type { WordPressBlogPost, IWordPressCategory } from "@/app/blog/types";

export default function BlogCategories() {
  const [categories, setCategories] = useState<IWordPressCategory[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const { posts } = await getWordPressBlogPosts({ limit: 10 });
        
        // Extract all categories from posts safely
        const allCategories = posts.flatMap((post) => 
          post.categories ? Object.values(post.categories) : []
        );
        
        // Remove duplicates using Map with category ID as key
        const uniqueCategories = Array.from(
          new Map(allCategories.map(cat => [cat.ID, cat])).values()
        );
        
        setCategories(uniqueCategories);
      } catch (error) {
        console.error("Failed to fetch categories:", error);
        setError("Failed to load categories");
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchCategories();
  }, []);

  if (error) {
    return (
      <div className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-red-500">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold mb-6">Categories</h2>
        <div className="flex flex-wrap gap-2">
          {isLoading ? (
            <p className="text-gray-500">Loading categories...</p>
          ) : categories.length > 0 ? (
            categories.map((category) => (
              <span
                key={category.ID}
                className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm"
              >
                {category.name}
              </span>
            ))
          ) : (
            <p className="text-gray-500">No categories found</p>
          )}
        </div>
      </div>
    </div>
  );
}
