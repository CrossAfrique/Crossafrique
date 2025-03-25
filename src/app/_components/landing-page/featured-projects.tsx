"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, TrendingDown, Zap } from "lucide-react";
import { motion } from "motion/react";

const FEATURED_PROJECTS = [
	{
		name: "Nairobi Green Hydrogen Hub",
		location: "Kenya",
		description:
			"A large-scale green hydrogen production facility powered by solar and wind energy, supplying clean hydrogen to industrial users in East Africa.",
		metrics: [
			{
				icon: <Zap className="w-5 h-5 text-emerald-600" />,
				label: "Energy Output",
				value: "50 MW",
			},
			{
				icon: <TrendingDown className="w-5 h-5 text-emerald-600" />,
				label: "CO₂ Reduction",
				value: "75,000 tons/year",
			},
		],
		status: "Operational",
	},
	{
		name: "West African Hydrogen Corridor",
		location: "Multiple Countries",
		description:
			"A cross-border hydrogen distribution network connecting production facilities with industrial centers across West Africa.",
		metrics: [
			{
				icon: <Zap className="w-5 h-5 text-emerald-600" />,
				label: "Network Length",
				value: "1,200 km",
			},
			{
				icon: <TrendingDown className="w-5 h-5 text-emerald-600" />,
				label: "CO₂ Reduction",
				value: "120,000 tons/year",
			},
		],
		status: "In Development",
	},
	{
		name: "South African Mining Hydrogen Project",
		location: "South Africa",
		description:
			"Converting mining operations to use hydrogen-powered equipment and vehicles, reducing emissions in the mining sector.",
		metrics: [
			{
				icon: <Zap className="w-5 h-5 text-emerald-600" />,
				label: "Hydrogen Supply",
				value: "25 tons/day",
			},
			{
				icon: <TrendingDown className="w-5 h-5 text-emerald-600" />,
				label: "CO₂ Reduction",
				value: "50,000 tons/year",
			},
		],
		status: "Planning Phase",
	},
];

const FeaturedProjects = () => {
	return (
		<section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
					className="text-center mb-16"
				>
					<h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
						Featured Projects
					</h2>
					<p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
						Discover our groundbreaking hydrogen initiatives that are
						transforming Africa&#39;s energy landscape.
					</p>
				</motion.div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{FEATURED_PROJECTS.map((project, index) => (
						<ProjectCard key={project.name} project={project} index={index} />
					))}
				</div>
			</div>
		</section>
	);
};

export default FeaturedProjects;

function ProjectCard({
	project,
	index,
}: { project: (typeof FEATURED_PROJECTS)[0]; index: number }) {
	return (
		<motion.div
			key={index}
			initial={{ opacity: 0, y: 30 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.6, delay: index * 0.2 }}
			viewport={{ once: true }}
		>
			<Card className="h-full hover:shadow-lg transition-shadow duration-300">
				<CardHeader>
					<div className="flex justify-between items-start">
						<CardTitle className="text-xl font-semibold text-gray-900 dark:text-white">
							{project.name}
						</CardTitle>
						<span
							className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap ${
								project.status === "Operational"
									? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
									: project.status === "In Development"
										? "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300"
										: "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300"
							}`}
						>
							{project.status}
						</span>
					</div>
					<div className="flex items-center mt-2 text-gray-600 dark:text-gray-400">
						<MapPin className="w-4 h-4 mr-1" />
						<span className="text-sm">{project.location}</span>
					</div>
				</CardHeader>
				<CardContent>
					<p className="text-gray-700 dark:text-gray-300 mb-6">
						{project.description}
					</p>
					<div className="grid grid-cols-2 gap-4">
						{project.metrics.map((metric) => (
							<div key={metric.label} className="flex items-center">
								<div className="mr-2">{metric.icon}</div>
								<div>
									<p className="text-xs text-gray-500 dark:text-gray-400">
										{metric.label}
									</p>
									<p className="font-medium text-gray-900 dark:text-white">
										{metric.value}
									</p>
								</div>
							</div>
						))}
					</div>
				</CardContent>
			</Card>
		</motion.div>
	);
}
