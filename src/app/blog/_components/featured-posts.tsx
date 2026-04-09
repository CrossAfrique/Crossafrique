"use client";

import { motion } from "framer-motion";
import PostCard from "@/app/blog/_components/PostCard";
import type { WordPressBlogPost } from "@/app/blog/types";

interface FeaturedPostsProps {
  initialPosts: WordPressBlogPost[];
}

// Hardcoded PDF Publication
// const PDF_PUBLICATION = {
//   ID: -1,
//   title: "Curtailment Report",
//   description: `Across sub-Saharan Africa, solar PV installations are growing rapidly. 
//   Yet a significant fraction of the clean energy they produce is routinely wasted. It is curtailed because the load, 
//   the storage system, or the grid cannot absorb it at the moment it is generated. 
//   This white paper explains why curtailment happens, quantifies the scale of the opportunity, 
//   and presents green hydrogen production as a proven, bankable pathway to convert that waste into a storable, trade-able, and decarbonizing energy carrier.`,
//   pdfUrl: "https://mx5.88c.myftpupload.com/wp-content/uploads/2026/04/Curtailment-report-CrossAfrique_1.pdf",
//   coverImage: IndustrialApplicationImg,
// };

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
          {/* <PDFCard
            index={0}
            title={PDF_PUBLICATION.title}
            description={PDF_PUBLICATION.description}
            pdfUrl={PDF_PUBLICATION.pdfUrl}
            coverImage={typeof PDF_PUBLICATION.coverImage === 'string' ? PDF_PUBLICATION.coverImage : (PDF_PUBLICATION.coverImage as any).src}
          /> */}

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