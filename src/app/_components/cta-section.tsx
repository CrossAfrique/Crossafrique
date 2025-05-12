"use client";

import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import Link from "next/link";

const CTASection = () => {
	return (
		<section className="py-20 bg-emerald-700 text-white">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<div className="max-w-4xl mx-auto text-center">
					<motion.h2
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						viewport={{ once: true }}
						className="text-3xl md:text-4xl font-bold mb-6"
					>
						Discover How We&apos;re Powering the Future
					</motion.h2>

					<motion.p
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.2 }}
						viewport={{ once: true }}
						className="text-xl mb-8 text-emerald-100"
					>
						Whether you are a potential partner, investor, or innovator—join us
						in building systems that move beyond pilots and promises. We are
						creating the blueprint for scalable, integrated energy in emerging
						markets and industrial regions alike.
					</motion.p>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.4 }}
						viewport={{ once: true }}
						className="flex flex-col sm:flex-row gap-4 justify-center"
					>
						<Button
							asChild
							size="lg"
							className="bg-white text-emerald-700 hover:bg-emerald-100"
						>
							<Link href="/about">Learn More</Link>
						</Button>
						<Button
							asChild
							size="lg"
							variant="outline"
							className="text-emerald-700 bg-transparent text-white border-white hover:text-white hover:bg-white/10"
						>
							<Link href="/contact">Contact Us</Link>
						</Button>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default CTASection;
