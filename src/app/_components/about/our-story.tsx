"use client";

import { motion } from "motion/react"
import Image from "next/image";

const OurStory = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              Our Story
            </h2>
            
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Founded in 2020, Crossafrique Hydrogen emerged from a vision to address two critical challenges facing Africa: the need for clean, reliable energy and the imperative to combat climate change.
            </p>
            
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Our founders, a team of energy experts and entrepreneurs from across the continent, recognized hydrogen&#39;s potential to transform Africa&#39;s energy landscape while creating economic opportunities and reducing environmental impact.
            </p>
            
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Starting with pilot projects in East Africa, we&#39;ve since expanded our operations to multiple countries, building partnerships with governments, international organizations, and private sector entities committed to sustainable development.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-[400px] rounded-lg overflow-hidden shadow-xl"
          >
            <Image
              src="/images/about/our-story.jpg"
              alt="Crossafrique Hydrogen team"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
        
        <div className="mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-emerald-50 dark:bg-emerald-900/20 p-8 rounded-lg border border-emerald-100 dark:border-emerald-800">
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Our Mission</h3>
              <p className="text-gray-700 dark:text-gray-300">
                To accelerate Africa&#39;s transition to clean energy through innovative hydrogen solutions that drive sustainable development, create economic opportunities, and improve quality of life across the continent.
              </p>
            </div>
            
            <div className="bg-emerald-50 dark:bg-emerald-900/20 p-8 rounded-lg border border-emerald-100 dark:border-emerald-800">
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Our Vision</h3>
              <p className="text-gray-700 dark:text-gray-300">
                An Africa where clean hydrogen powers industries, transportation, and communities, enabling prosperity while preserving the environment for future generations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
