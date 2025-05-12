"use client";

import { Building2, Globe, Lightbulb, Users } from "lucide-react";
import { motion } from "motion/react";

const WhyEnergySystem = () => {
	const benefits = [
		{
			id: "benefit-1",
			icon: <Lightbulb className="w-10 h-10 text-emerald-600" />,
			title: "Strategic Innovation",
			description:
				"Integrated systems combine solar, hydrogen, batteries, and digital controls to meet diverse energy needs—power, heat, storage, and mobility—within a single platform.",
		},
		{
			id: "benefit-2",
			icon: <Building2 className="w-10 h-10 text-emerald-600" />,
			title: "Bankable Infrastructure",
			description:
				"Integration enables smart risk-sharing across technologies, allowing us to structure bankable projects that attract both public and private capital.",
		},
		{
			id: "benefit-3",
			icon: <Users className="w-10 h-10 text-emerald-600" />,
			title: "Local Context Relevance",
			description:
				"We design systems that fit the physical, economic, and institutional realities of each region—driving industrial productivity, job creation, and self-reliance",
		},
		{
			id: "benefit-4",
			icon: <Globe className="w-10 h-10 text-emerald-600" />,
			title: "Resilience Over Fragility",
			description:
				"By decentralizing energy production and enabling local use, storage and control, integrated systems reduce dependence on unstable grids and fossil fuels.",
		},
	];

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
			},
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.6 },
		},
	};

	return (
		<section className="py-20 bg-gray-50 dark:bg-gray-800">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-16">
					<motion.h2
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						viewport={{ once: true }}
						className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white"
					>
						Why We Build Integrated Energy Systems?
					</motion.h2>
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.2 }}
						viewport={{ once: true }}
						className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto"
					>
						Energy challenges in Africa require systems that are flexible,
						scalable, and rooted in local context. That&#39;s why we build
						integrated energy systems engineered to deliver:
					</motion.p>
				</div>

				<motion.div
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
				>
					{benefits.map((benefit) => (
						<motion.div
							key={benefit.id}
							variants={itemVariants}
							className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
						>
							<div className="mb-4">{benefit.icon}</div>
							<h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
								{benefit.title}
							</h3>
							<p className="text-gray-700 dark:text-gray-300">
								{benefit.description}
							</p>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
};

export default WhyEnergySystem;
