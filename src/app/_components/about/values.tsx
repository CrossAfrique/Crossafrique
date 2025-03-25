"use client";

import { Globe, Leaf, Lightbulb, Scale, Sparkles, Users } from "lucide-react";
import { motion } from "motion/react";

const Values = () => {
	const values = [
		{
			id: "sustainability",
			icon: <Leaf className="w-10 h-10 text-emerald-600" />,
			title: "Sustainability",
			description:
				"We prioritize environmental stewardship in all our operations, ensuring our solutions contribute to a healthier planet.",
		},
		{
			id: "innovation",
			icon: <Lightbulb className="w-10 h-10 text-emerald-600" />,
			title: "Innovation",
			description:
				"We constantly seek new approaches and technologies to overcome challenges and maximize hydrogen's potential in Africa.",
		},
		{
			id: "collaboration",
			icon: <Users className="w-10 h-10 text-emerald-600" />,
			title: "Collaboration",
			description:
				"We believe in the power of partnerships to achieve greater impact and accelerate the transition to clean energy.",
		},
		{
			id: "local-impact",
			icon: <Globe className="w-10 h-10 text-emerald-600" />,
			title: "Local Impact",
			description:
				"We design solutions that address specific needs of African communities and create opportunities for local development.",
		},
		{
			id: "excellence",
			icon: <Sparkles className="w-10 h-10 text-emerald-600" />,
			title: "Excellence",
			description:
				"We strive for the highest standards in our work, from technical implementation to stakeholder engagement.",
		},
		{
			id: "integrity",
			icon: <Scale className="w-10 h-10 text-emerald-600" />,
			title: "Integrity",
			description:
				"We conduct our business ethically and transparently, building trust with all our stakeholders.",
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
						developing hydrogen solutions for Africa.
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
