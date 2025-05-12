"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, TrendingDown, Zap } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";

const FEATURED_PROJECTS = [
	{
		name: "Green Energy Hub",
		location: "Nigeria",
		description:
			"A research and industrial hydrogen hub integrating solar, electrolysis, and recycled water use in partnership with academia and industry.",
		metrics: [
			{
				icon: <Zap className="w-5 h-5 text-emerald-600" />,
				label: "Output",
				value: "1 MW electrolyzer",
			},
			{
				icon: <TrendingDown className="w-5 h-5 text-emerald-600" />,
				label: "Key Feature",
				value: "Academic-industrial collaboration",
			},
		],
		status: "In Development",
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

				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-max mx-auto">
					{FEATURED_PROJECTS.map((project, index) => (
						<ProjectCard key={project.name} project={project} index={index} />
					))}

					{/* Placeholder for upcoming projects */}
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.2 }}
						viewport={{ once: true }}
						className="max-w-[500px]"
					>
						<Card className="h-full border-dashed border-2 flex flex-col justify-center items-center text-center p-0">
							<CardHeader className="w-full">
								<CardTitle className="text-xl font-semibold">
									More Projects Coming Soon
								</CardTitle>
							</CardHeader>
							<CardContent>
								<p className="text-gray-700 dark:text-gray-300 mb-6">
									We&#39;re expanding our portfolio of hydrogen initiatives
									across Africa. Stay tuned for updates or reach out to discuss
									collaboration opportunities.
								</p>
								<Button asChild className="bg-emerald-600 hover:bg-emerald-700">
									<Link href="/contact">Contact Us</Link>
								</Button>
							</CardContent>
						</Card>
					</motion.div>
				</div>

				<div className="text-center mt-12">
					<Button asChild className="bg-emerald-600 hover:bg-emerald-700">
						<Link href="/projects">See all projects</Link>
					</Button>
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
			className="max-w-[500px]"
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
