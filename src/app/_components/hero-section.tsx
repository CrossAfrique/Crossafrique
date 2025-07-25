"use client";

import FadeInY from "@/components/animations/fade-in-y";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import HydrogenImg from "./_assets/hydrogen.jpg";

const HeroSection = () => {
	return (
		<section className="relative h-[calc(100vh-80px)] xl:h-[700px] flex items-center">
			{/* Background Image */}
			<div className="absolute inset-0 z-0">
				<div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 z-10" />
				<Image
					src={HydrogenImg}
					alt="Clean hydrogen production"
					layout="fill"
					objectFit="cover"
					priority
				/>
			</div>

			{/* Content */}
			<div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
				<div className="max-w-3xl">
					<FadeInY
						as={motion.h1}
						className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
					>
						<div>
							Powering Sustainable Progress Through Integrated{" "}
							<span className="text-emerald-400">Clean Energy Systems</span>
						</div>
					</FadeInY>
					<FadeInY
						as={motion.p}
						delay={0.2}
						className="text-xl text-gray-200 mb-8"
					>
						We design and finance innovative energy hubs where hydrogen, solar,
						storage, and smart technologies work together to deliver real-world
						impact.
					</FadeInY>
					<FadeInY delay={0.4} className="flex flex-col sm:flex-row gap-4">
						<Button
							asChild
							size="lg"
							className="bg-emerald-600 hover:bg-emerald-700 text-white"
						>
							<Link href="#projects">Explore Our Work</Link>
						</Button>
						<Button
							asChild
							size="lg"
							variant="outline"
							className="text-white bg-white/10 hover:text-white hover:bg-white/20"
						>
							<Link href="/about">Partner With Us</Link>
						</Button>
					</FadeInY>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
