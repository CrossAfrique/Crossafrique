"use client";

import { useState } from "react";
import { motion } from "motion/react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, User } from "lucide-react";

const BlogCategories = () => {
  const [activeTab, setActiveTab] = useState("all");
  
  const blogPosts = [
    {
      id: 4,
      title: "Hydrogen-Powered Transportation in Urban Africa",
      excerpt: "How hydrogen fuel cell vehicles could revolutionize public transportation in Africa's rapidly growing cities.",
      image: "/images/blog/hydrogen-transport.jpg",
      date: "February 28, 2023",
      author: "Dr. Emmanuel Kwesi",
      category: "Clean Energy & Sustainability"
    },
    {
      id: 5,
      title: "Breakthrough in Electrolysis Efficiency",
      excerpt: "Our research team has achieved a significant improvement in electrolysis efficiency, reducing the cost of green hydrogen production.",
      image: "/images/blog/electrolysis.jpg",
      date: "February 15, 2023",
      author: "Dr. Fatima Nkosi",
      category: "Hydrogen Technology & Innovation"
    },
    {
      id: 6,
      title: "African Union Announces Hydrogen Initiative",
      excerpt: "The African Union has launched a continent-wide initiative to promote hydrogen development and establish standards.",
      image: "/images/blog/african-union.jpg",
      date: "January 30, 2023",
      author: "Ibrahim Hassan",
      category: "Industry & Policy Updates"
    },
    {
      id: 7,
      title: "Crossafrique Hydrogen Partners with Nigerian Government",
      excerpt: "Announcing our new partnership with the Nigerian government to develop hydrogen infrastructure in the Niger Delta region.",
      image: "/images/blog/nigeria-partnership.jpg",
      date: "January 15, 2023",
      author: "Chioma Okonkwo",
      category: "Company News & Announcements"
    },
    {
      id: 8,
      title: "Hydrogen's Role in Decarbonizing Mining Operations",
      excerpt: "Exploring how hydrogen can help reduce emissions in Africa's vital mining sector while improving operational efficiency.",
      image: "/images/blog/mining-hydrogen.jpg",
      date: "December 20, 2022",
      author: "Robert Mutasa",
      category: "Clean Energy & Sustainability"
    },
    {
      id: 9,
      title: "New Catalyst Developed for Low-Cost Hydrogen Production",
      excerpt: "Our scientists have developed a novel catalyst that significantly reduces the cost of hydrogen production from water electrolysis.",
      image: "/images/blog/catalyst.jpg",
      date: "December 5, 2022",
      author: "Dr. Aisha Mohammed",
      category: "Hydrogen Technology & Innovation"
    }
  ];

  const filteredPosts = activeTab === "all" 
    ? blogPosts 
    : blogPosts.filter(post => post.category.toLowerCase().includes(activeTab.toLowerCase()));

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

        <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
          <TabsList className="w-full max-w-4xl mx-auto mb-8 bg-white dark:bg-gray-900 p-1 overflow-x-auto flex flex-nowrap">
            <TabsTrigger value="all" className="flex-1">All Posts</TabsTrigger>
            <TabsTrigger value="clean energy" className="flex-1">Clean Energy</TabsTrigger>
            <TabsTrigger value="technology" className="flex-1">Technology</TabsTrigger>
            <TabsTrigger value="policy" className="flex-1">Policy Updates</TabsTrigger>
            <TabsTrigger value="company" className="flex-1">Company News</TabsTrigger>
          </TabsList>

          <TabsContent value={activeTab} className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow duration-300">
                    <Link href={`/blog/${post.id}`} className="block">
                      <div className="relative h-48 w-full">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </Link>
                    <CardContent className="p-6">
                      <div className="flex items-center mb-3">
                        <span className="text-xs font-medium px-2 py-1 bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300 rounded-full">
                          {post.category}
                        </span>
                      </div>
                      <Link href={`/blog/${post.id}`}>
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
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center">
                          <User className="w-4 h-4 mr-1" />
                          <span>{post.author}</span>
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
