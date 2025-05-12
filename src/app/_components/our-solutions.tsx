"use client";

import FadeInY from "@/components/animations/fade-in-y";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import EnergyHubImg from "../../_assets/images/energy-hub.jpg";
import FinancialStructuringImg from "../../_assets/images/financial-structuring.jpg";
import IndustrialApplicationImg from "../../_assets/images/industrial-application.jpg";
import SystemArchitectureImg from "../../_assets/images/system-architecture.jpg";

const OurSolutions = () => {
	const solutions = [
		{
			title: "Integrated Energy Hubs",
			description:
				"We develop hubs combining multiple energy carriers—hydrogen, solar PV, battery storage—into coordinated, high-impact systems.",
			image: EnergyHubImg,
			alt: "Integrated Energy Hubs",
		},
		{
			title: "Financial Structuring",
			description:
				"We design investment-ready projects with robust business models, using blended finance and private-public partnerships.",
			image: FinancialStructuringImg,
			alt: "Financial Structuring",
		},
		{
			title: "Innovation & Research",
			description:
				"We collaborate with universities and technical partners to drive applied research and next-generation energy solutions.",
			image: IndustrialApplicationImg,
			alt: "Innovation & Research",
		},
		{
			title: "System Architecture & Smart Control",
			description:
				"We implement digital control systems that ensure efficient energy flows and grid responsiveness.",
			image: SystemArchitectureImg,
			alt: "System Architecture & Smart Control",
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
						We deliver end-to-end solutions that enable the development and
						financing of integrated energy systems.
					</p>
				</motion.div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-max mx-auto">
					{solutions.map((solution, index) => (
						<motion.div
							key={solution.title}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: index * 0.2 }}
							viewport={{ once: true }}
							className="max-w-[500px]"
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
