"use client";

import FadeInY from "@/components/animations/fade-in-y";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import IndustrialApplicationImg from "../../_assets/images/industrial-application.jpg";
import ProductionDacilitiesImg from "../../_assets/images/production-facilities.jpg";
import StorageTankImg from "../../_assets/images/storage-tank.jpg";

const OurSolutions = () => {
	const solutions = [
		{
			title: "Hydrogen Production",
			description:
				"Building state-of-the-art facilities to produce green hydrogen using Africa's abundant renewable energy resources.",
			image: ProductionDacilitiesImg,
			alt: "Hydrogen production facility",
		},
		{
			title: "Storage & Distribution",
			description:
				"Developing innovative solutions for hydrogen storage and creating efficient distribution networks across the continent.",
			image: StorageTankImg,
			alt: "Hydrogen storage tanks",
		},
		{
			title: "Industrial Applications",
			description:
				"Implementing hydrogen technologies in industries, transportation, and power generation to reduce carbon emissions.",
			image: IndustrialApplicationImg,
			alt: "Industrial hydrogen application",
		},
	];

	return (
		<section className="py-20 bg-white dark:bg-gray-900">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
					className="text-center mb-16"
				>
					<h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
						Our Work & Solutions
					</h2>
					<p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
						We provide comprehensive hydrogen solutions across the entire value
						chain, from production to end-use applications.
					</p>
				</motion.div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{solutions.map((solution, index) => (
						<motion.div
							key={solution.title}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: index * 0.2 }}
							viewport={{ once: true }}
						>
							<Card className="overflow-hidden h-full hover:shadow-lg transition-shadow duration-300 p-0">
								<div className="relative h-60">
									<Image
										src={solution.image}
										alt={solution.alt}
										fill
										className="object-cover"
									/>
								</div>
								<CardContent className="p-6">
									<h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
										{solution.title}
									</h3>
									<p className="text-gray-700 dark:text-gray-300">
										{solution.description}
									</p>
								</CardContent>
							</Card>
						</motion.div>
					))}
				</div>

				<FadeInY className="flex flex-col sm:flex-row gap-4 pt-12" delay={0.4}>
					<Button
						asChild
						className="bg-emerald-600 hover:bg-emerald-700 text-white mx-auto"
					>
						<Link href="/solutions">Explore Our Solutions</Link>
					</Button>
				</FadeInY>
			</div>
		</section>
	);
};

export default OurSolutions;
