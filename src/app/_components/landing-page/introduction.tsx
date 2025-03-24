"use client";

import { motion } from "motion/react"

const Introduction = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
            Welcome to <span className="text-emerald-600">Crossafrique Hydrogen</span>
          </h2>
          
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
            At Crossafrique Hydrogen, we&#39;re committed to transforming Africa&#39;s energy landscape through innovative hydrogen solutions. Our mission is to harness the continent&#39;s abundant renewable resources to produce clean hydrogen, creating a sustainable energy future while driving economic growth.
          </p>
          
          <div className="p-6 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg border border-emerald-100 dark:border-emerald-800">
            <p className="text-lg font-medium text-emerald-800 dark:text-emerald-300">
              Clean hydrogen represents a transformative opportunity for Africa - enabling energy independence, creating jobs, and supporting sustainable development while addressing climate change.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Introduction;
