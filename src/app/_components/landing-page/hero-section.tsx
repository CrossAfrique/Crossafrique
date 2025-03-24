"use client";

import { Button } from "@/components/ui/button";
import { motion } from "motion/react"
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 z-10" />
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/videos/hydrogen-production.mp4" type="video/mp4" />
          {/* Fallback image if video doesn't load */}
          <Image
            src="/images/hydrogen-production.jpg"
            alt="Clean hydrogen production"
            layout="fill"
            objectFit="cover"
            priority
          />
        </video>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Fueling Africa&#39;s Growth with{" "}
            <span className="text-emerald-400">Clean Hydrogen</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-200 mb-8"
          >
            Pioneering sustainable hydrogen solutions to power Africa&#39;s future
            and drive economic growth while protecting our environment.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button asChild size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white">
              <Link href="#projects">Explore Our Projects</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
              <Link href="/about">Learn More</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
