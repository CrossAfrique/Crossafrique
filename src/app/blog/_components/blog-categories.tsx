"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, User } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { getWordPressBlogPosts } from "..";

const TABS = [
  { value: "all", label: "All Posts" },
  { value: "clean energy", label: "Clean Energy Transitions" },
  { value: "technology", label: "Technology & Innovation" },
  { value: "finance", label: "Finance & Project Development" },
  { value: "policy", label: "Policy & Regulation" },
  { value: "capacity building", label: "Capacity Building & Talent" },
  { value: "news", label: "Company News & Insights" },
];

const BlogCategories = async () => {
  const { posts } = await getWordPressBlogPosts({ limit: 6 });
  const [activeTab, setActiveTab] = useState("all");

  const filteredPosts = activeTab === "all"
    ? posts
    : posts.filter((post) =>
        Object.values(post.categories)[0]?.slug?.toLowerCase().includes(activeTab.toLowerCase()) || false
      );

  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold mb-8 text-gray-900 dark:text-white"
        >
          Blog Categories
        </motion.h2>

        <Tabs
          defaultValue="all"
          className="w-full"
          onValueChange={setActiveTab}
        >
          <TabsList className="w-full h-full mx-auto mb-8 bg-white dark:bg-gray-900 p-1 overflow-x-auto flex flex-nowrap">
            {TABS.map((tab) => (
              <TabsTrigger key={tab.value} value={tab.value} className="flex-1">
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value={activeTab} className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <motion.div
                  key={post.ID}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow duration-300">
                    <Link href={`/blog/${post.ID}`} className="block">
                      <div className="relative h-48 w-full">
                        <Image
                          src={post.featured_image || "/images/blog/placeholder.jpg"}
                          alt={post.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </Link>
                    <CardContent className="p-6">
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
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default BlogCategories;
