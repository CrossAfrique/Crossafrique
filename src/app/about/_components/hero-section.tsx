"use client";

import { motion } from "motion/react";

const AboutHero = () => {
	return (
		<section className="relative py-20 bg-emerald-700 text-white overflow-hidden">
			<div className="absolute inset-0 z-0">
				<div className="absolute inset-0 bg-emerald-800/70 z-10" />
				<div className="absolute inset-0 bg-[url('/images/about/about-bg.jpg')] bg-cover bg-center" />
			</div>

			<div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					className="max-w-3xl"
				>
					<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
						About Crossafrique Hydrogen
					</h1>

					<p className="text-xl text-emerald-100 mb-8">
						At CrossAfrique Hydrogen, we believe hydrogen is part of the
						solution—not the whole story. We focus on developing and financing
						integrated clean energy hubs, where hydrogen works alongside solar,
						batteries, and smart systems to meet complex energy needs across
						emerging and industrial regions. We are a platform that bridges
						innovation, finance, and infrastructure, turning bold ideas into
						scalable, bankable energy systems with long-term environmental and
						socioeconomic impact.
					</p>
				</motion.div>
			</div>
		</section>
	);
};

export default AboutHero;
