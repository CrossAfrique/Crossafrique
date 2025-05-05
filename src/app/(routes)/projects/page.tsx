"use client";

import { projects } from "@/app/_constants";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Calendar, MapPin } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

export default function ProjectsPage() {
	return (
		<div className="pt-16">
			<div className="bg-emerald-700 text-white py-20">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
					<motion.h1
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						className="text-4xl md:text-5xl font-bold mb-6"
					>
						Our Projects
					</motion.h1>
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.2 }}
						className="text-xl text-emerald-100 max-w-3xl mx-auto"
					>
						Discover how we are developing integrated clean energy hubs that
						combine hydrogen, solar, battery storage, and smart control systems.
						From research campuses to industrial zones, our projects are built
						around systems thinking, financial viability, and long-term impact.
					</motion.p>
				</div>
			</div>

			<section className="py-16 bg-white dark:bg-gray-900">
				<div className="container grid grid-cols-1 md:grid-cols-2 gap-8 px-4 sm:px-6 lg:px-8 max-w-max mx-auto">
					{projects.map((project, index) => (
						<motion.div
							key={project.id}
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							className="max-w-[700px]"
						>
							<Card className="h-full overflow-hidden hover:shadow-lg transition-shadow duration-300">
								<div className="relative h-60 w-full">
									<Image
										src={project.image}
										alt={project.title}
										fill
										className="object-cover"
									/>
									<div className="absolute top-4 right-4 bg-emerald-600 text-white text-xs font-medium px-2 py-1 rounded">
										{project.status}
									</div>
								</div>
								<CardContent className="p-6">
									<h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
										{project.title}
									</h3>
									<p className="text-gray-700 dark:text-gray-300 mb-4">
										{project.description}
									</p>
									<div className="flex flex-col space-y-2 mb-4">
										<div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
											<MapPin className="w-4 h-4 mr-2" />
											<span>{project.location}</span>
										</div>
										<div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
											<Calendar className="w-4 h-4 mr-2" />
											<span>{project.year}</span>
										</div>
									</div>
									<Link href={`/projects/${project.id}`}>
										<Button
											variant="outline"
											className="w-full flex items-center justify-center"
										>
											View Project Details
											<ArrowRight className="ml-2 w-4 h-4" />
										</Button>
									</Link>
								</CardContent>
							</Card>
						</motion.div>
					))}
				</div>
			</section>

			<section className="py-16 bg-gray-50 dark:bg-gray-800">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<div className="max-w-3xl mx-auto text-center">
						<motion.h2
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6 }}
							viewport={{ once: true }}
							className="text-3xl font-bold mb-6 text-gray-900 dark:text-white"
						>
							Partner with Us
						</motion.h2>
						<motion.p
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.2 }}
							viewport={{ once: true }}
							className="text-lg text-gray-700 dark:text-gray-300 mb-8"
						>
							We work with governments, industry, universities, and
							infrastructure developers to co-create sustainable energy hubs. If
							you are developing a project or looking for a finance- and
							innovation-driven partner, we would love to hear from you.
						</motion.p>
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.4 }}
							viewport={{ once: true }}
						>
							<Link href="/contact">
								<Button
									size="lg"
									className="bg-emerald-600 hover:bg-emerald-700"
								>
									Discuss a Potential Project
								</Button>
							</Link>
						</motion.div>
					</div>
				</div>
			</section>
		</div>
	);
}
