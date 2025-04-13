"use client";

import { Globe, Leaf, Lightbulb, Scale, Sparkles, Users } from "lucide-react";
import { motion } from "motion/react";

const Values = () => {
	const values = [
		{
			id: "innovation",
			icon: <Sparkles className="w-10 h-10 text-emerald-600" />,
			title: "Innovation with Purpose",
			description:
				"We turn cutting-edge research into deployable energy infrastructure that works.",
		},
		{
			id: "financial-discipline",
			icon: <Scale className="w-10 h-10 text-emerald-600" />,
			title: "Financial Discipline",
			description:
				"We develop bankable projects that attract capital and ensure long-term sustainability.",
		},
		{
			id: "systems-thinking",
			icon: <Lightbulb className="w-10 h-10 text-emerald-600" />,
			title: "Systems Thinking",
			description:
				"We design flexible, multi-carrier energy systems that work together—not in silos.",
		},
		{
			id: "collaboration",
			icon: <Users className="w-10 h-10 text-emerald-600" />,
			title: "Collaboration & Partnership",
			description:
				"We build trust-based partnerships with technical experts, investors, institutions, and communities.",
		},
		{
			id: "context-driven-impact",
			icon: <Globe className="w-10 h-10 text-emerald-600" />,
			title: "Context-Driven Impact",
			description:
				"Our solutions are grounded in real needs—local realities, industrial demand, and social outcomes.",
		},
		{
			id: "integrity",
			icon: <Leaf className="w-10 h-10 text-emerald-600" />,
			title: "Integrity & Transparency",
			description:
				"We operate with accountability and responsibility across every project and partnership.",
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
						Our Values
					</h2>
					<p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
						These core principles guide our work and shape our approach to
						developing energy solutions.
					</p>
				</motion.div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{values.map((value, index) => (
						<motion.div
							key={value.id}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: index * 0.1 }}
							viewport={{ once: true }}
							className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg border border-gray-100 dark:border-gray-700"
						>
							<div className="mb-4">{value.icon}</div>
							<h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
								{value.title}
							</h3>
							<p className="text-gray-700 dark:text-gray-300">
								{value.description}
							</p>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Values;
