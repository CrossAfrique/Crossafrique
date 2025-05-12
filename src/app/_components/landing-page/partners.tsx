"use client";

import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import Link from "next/link";

const Partners = () => {
	return (
		<section className="py-20 bg-white dark:bg-gray-900">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
					className="text-center mb-10"
				>
					<h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
						Our Partners & Network
					</h2>
					<p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
						We work alongside technical partners, universities, governments, and
						development institutions to build practical, future-ready energy
						systems. Collaboration is at the heart of our mission.
					</p>
				</motion.div>

				<div className="text-center">
					<Button asChild className="bg-emerald-600 hover:bg-emerald-700">
						<Link href="/contact">Become a Partner</Link>
					</Button>
				</div>
			</div>
		</section>
	);
};

export default Partners;
