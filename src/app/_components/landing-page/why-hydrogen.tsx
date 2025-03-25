"use client";

import { Factory, Leaf, TrendingUp, Zap } from "lucide-react";
import { motion } from "motion/react";

const WhyHydrogen = () => {
	const benefits = [
		{
			id: "benefit-1",
			icon: <Leaf className="w-10 h-10 text-emerald-600" />,
			title: "Environmentally Friendly",
			description:
				"Zero carbon emissions when produced from renewable sources, helping Africa meet climate goals.",
		},
		{
			id: "benefit-2",
			icon: <Zap className="w-10 h-10 text-emerald-600" />,
			title: "Energy Independence",
			description:
				"Reduces reliance on imported fossil fuels, enhancing energy security across the continent.",
		},
		{
			id: "benefit-3",
			icon: <TrendingUp className="w-10 h-10 text-emerald-600" />,
			title: "Economic Growth",
			description:
				"Creates new industries and thousands of jobs while attracting international investment.",
		},
		{
			id: "benefit-4",
			icon: <Factory className="w-10 h-10 text-emerald-600" />,
			title: "Industrial Applications",
			description:
				"Powers everything from transportation to manufacturing, enabling clean industrial development.",
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
						Why Hydrogen for Africa?
					</motion.h2>
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.2 }}
						viewport={{ once: true }}
						className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto"
					>
						Clean hydrogen is the ideal energy solution for Africa&#39;s unique
						challenges and opportunities, offering multiple benefits for the
						continent&#39;s sustainable development.
					</motion.p>
				</div>

				<motion.div
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
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

export default WhyHydrogen;
