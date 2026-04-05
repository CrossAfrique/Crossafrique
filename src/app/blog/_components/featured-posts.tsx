"use client";

import { motion } from "framer-motion";
import PDFCard from "@/app/blog/_components/PDFCard";
import PostCard from "@/app/blog/_components/PostCard";
import IndustrialApplicationImg from "@/app/_assets/images/curtailment.png";
import type { WordPressBlogPost } from "@/app/blog/types";

interface FeaturedPostsProps {
  initialPosts: WordPressBlogPost[];
}

// Hardcoded PDF Publication
const PDF_PUBLICATION = {
  ID: -1,
  title: "Curtailment Report",
  description: "Analysis of curtailment challenges in renewable energy integration and the role of hydrogen as long-duration storage solution for African grids.",
  pdfUrl: "https://mx5.88c.myftpupload.com/wp-content/uploads/2026/04/Curtailment-report-CrossAfrique_1.pdf",
  coverImage: IndustrialApplicationImg,
};

export default function FeaturedPosts({ initialPosts }: FeaturedPostsProps) {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold mb-8 text-gray-900 dark:text-white"
        >
          Featured Articles & Publications
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Hardcoded PDF Publication Card */}
          <PDFCard
            index={0}
            title={PDF_PUBLICATION.title}
            description={PDF_PUBLICATION.description}
            pdfUrl={PDF_PUBLICATION.pdfUrl}
            coverImage={typeof PDF_PUBLICATION.coverImage === 'string' ? PDF_PUBLICATION.coverImage : (PDF_PUBLICATION.coverImage as any).src}
          />

          {/* WordPress Blog Posts */}
          {initialPosts.map((post, index) => (
            <PostCard
              key={post.ID}
              post={post}
              index={index + 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}