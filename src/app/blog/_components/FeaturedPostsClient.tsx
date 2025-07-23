"use client";

import FeaturedPostsServer from "./featured-posts";
import { motion } from "motion/react";

export default function FeaturedPostsClient({ initialPosts }: { initialPosts?: any[] }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <FeaturedPostsServer initialPosts={initialPosts} />
    </motion.div>
  );
}