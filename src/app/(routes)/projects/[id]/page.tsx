"use client";

import { Button } from "@/components/ui/button";
import parse from "html-react-parser";
import {
	ArrowLeft,
	BarChart,
	Calendar,
	Lightbulb,
	MapPin,
	Users,
} from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

// This would typically come from a CMS or database
const getProject = (id: string) => {
	const projects = [
		{
			id: "1",
			title: "Rwanda Green Hydrogen Production Facility",
			description:
				"A 10 MW green hydrogen production facility powered by solar energy, providing clean hydrogen for industrial use in Kigali.",
			fullDescription: `
        <p>The Rwanda Green Hydrogen Production Facility represents a significant milestone in East Africa's clean energy transition. Located just outside Kigali, this state-of-the-art facility harnesses Rwanda's abundant solar resources to produce green hydrogen through electrolysis.</p>
        
        <h2>Project Overview</h2>
        <p>The facility includes a 15 MW solar PV installation that powers a 10 MW PEM electrolyzer system, capable of producing up to 4 tonnes of hydrogen per day. The hydrogen is primarily used by industrial customers in the region, including manufacturing facilities and backup power systems.</p>
        
        <h2>Environmental Impact</h2>
        <p>By replacing fossil fuel-based hydrogen and other energy sources, the facility reduces carbon emissions by approximately 18,000 tonnes per year. The project also includes water recycling systems to minimize resource consumption, with 85% of process water being reused.</p>
        
        <h2>Economic Benefits</h2>
        <p>The facility has created 45 permanent jobs and supported over 200 positions during construction. It serves as a training ground for local engineers and technicians, building vital skills in hydrogen technologies. Additionally, by providing a reliable source of clean hydrogen, the project supports the growth of industries that can utilize this versatile energy carrier.</p>
        
        <h2>Technology & Innovation</h2>
        <p>The facility employs cutting-edge PEM electrolysis technology optimized for operation with variable renewable energy inputs. Advanced control systems manage the integration between solar generation and hydrogen production, maximizing efficiency while ensuring stable operation.</p>
        
        <h2>Future Expansion</h2>
        <p>Plans are underway to expand the facility's capacity to 25 MW by 2025, including the addition of wind power to complement solar generation. The expansion will also incorporate hydrogen storage solutions to enhance supply reliability and enable the facility to provide grid balancing services.</p>
      `,
			image: "/images/projects/rwanda-facility.jpg",
			gallery: [
				"/images/projects/rwanda-facility-1.jpg",
				"/images/projects/rwanda-facility-2.jpg",
				"/images/projects/rwanda-facility-3.jpg",
				"/images/projects/rwanda-facility-4.jpg",
			],
			location: "Kigali, Rwanda",
			status: "Operational",
			year: "2022",
			category: "Production",
			capacity: "10 MW",
			partners: [
				"Rwanda Energy Group",
				"African Development Bank",
				"Green Hydrogen Systems",
			],
			keyFeatures: [
				"15 MW solar PV installation",
				"10 MW PEM electrolyzer",
				"4 tonnes/day hydrogen production capacity",
				"Water recycling system",
				"Hydrogen compression and storage",
			],
		},
	];

	return projects.find((project) => project.id === id) || projects[0]; // Default to first project if not found
};

export default function ProjectDetailPage({
	params,
}: { params: { id: string } }) {
	const project = getProject(params.id);

	return (
		<div className="pt-16">
			<div className="relative h-[50vh] min-h-[400px] w-full">
				<Image
					src={project.image}
					alt={project.title}
					fill
					className="object-cover"
					priority
				/>
				<div className="absolute inset-0 bg-black/60 flex items-end">
					<div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
						<div className="max-w-3xl">
							<span className="inline-block px-3 py-1 bg-emerald-600 text-white text-sm font-medium rounded-full mb-4">
								{project.category}
							</span>
							<h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
								{project.title}
							</h1>
							<div className="flex flex-wrap items-center text-white/80 gap-4">
								<div className="flex items-center">
									<MapPin className="w-4 h-4 mr-2" />
									<span>{project.location}</span>
								</div>
								<div className="flex items-center">
									<Calendar className="w-4 h-4 mr-2" />
									<span>{project.year}</span>
								</div>
								<div className="flex items-center">
									<BarChart className="w-4 h-4 mr-2" />
									<span>{project.capacity}</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
				<Link
					href="/projects"
					className="inline-flex items-center text-emerald-600 hover:text-emerald-700 mb-8"
				>
					<ArrowLeft className="w-4 h-4 mr-2" />
					Back to all projects
				</Link>

				<div className="flex flex-col lg:flex-row gap-12">
					<div className="lg:w-2/3">
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6 }}
						>
							<div>{parse(project.fullDescription)}</div>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.2 }}
							className="mt-12"
						>
							<h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
								Project Gallery
							</h2>
							<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
								{project.gallery.map((image) => (
									<div
										key={image}
										className="relative aspect-square rounded-lg overflow-hidden"
									>
										<Image
											src={image}
											alt={`${project.title} - Image`}
											fill
											className="object-cover hover:scale-105 transition-transform duration-300"
										/>
									</div>
								))}
							</div>
						</motion.div>
					</div>

					<div className="lg:w-1/3">
						<motion.div
							initial={{ opacity: 0, x: 30 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.6 }}
							className="sticky top-24 space-y-8"
						>
							<div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
								<h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
									Project Details
								</h3>
								<div className="space-y-4">
									<div>
										<p className="text-sm text-gray-500 dark:text-gray-400">
											Status
										</p>
										<p className="font-medium text-gray-900 dark:text-white">
											{project.status}
										</p>
									</div>
									<div>
										<p className="text-sm text-gray-500 dark:text-gray-400">
											Location
										</p>
										<p className="font-medium text-gray-900 dark:text-white">
											{project.location}
										</p>
									</div>
									<div>
										<p className="text-sm text-gray-500 dark:text-gray-400">
											Year
										</p>
										<p className="font-medium text-gray-900 dark:text-white">
											{project.year}
										</p>
									</div>
									<div>
										<p className="text-sm text-gray-500 dark:text-gray-400">
											Capacity
										</p>
										<p className="font-medium text-gray-900 dark:text-white">
											{project.capacity}
										</p>
									</div>
								</div>
							</div>

							<div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
								<div className="flex items-center mb-4">
									<Users className="w-5 h-5 text-emerald-600 mr-2" />
									<h3 className="text-xl font-semibold text-gray-900 dark:text-white">
										Partners
									</h3>
								</div>
								<ul className="space-y-2">
									{project.partners.map((partner) => (
										<li
											key={partner}
											className="text-gray-700 dark:text-gray-300"
										>
											{partner}
										</li>
									))}
								</ul>
							</div>

							<div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
								<div className="flex items-center mb-4">
									<Lightbulb className="w-5 h-5 text-emerald-600 mr-2" />
									<h3 className="text-xl font-semibold text-gray-900 dark:text-white">
										Key Features
									</h3>
								</div>
								<ul className="space-y-2">
									{project.keyFeatures.map((feature) => (
										<li
											key={feature}
											className="text-gray-700 dark:text-gray-300 flex items-start"
										>
											<span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-600 mt-2 mr-2" />
											{feature}
										</li>
									))}
								</ul>
							</div>

							<div className="bg-emerald-50 dark:bg-emerald-900/20 p-6 rounded-lg border border-emerald-100 dark:border-emerald-800">
								<h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
									Interested in similar projects?
								</h3>
								<p className="text-gray-700 dark:text-gray-300 mb-4">
									Contact our team to discuss how we can implement hydrogen
									solutions for your organization or community.
								</p>
								<Link href="/contact">
									<Button className="w-full bg-emerald-600 hover:bg-emerald-700">
										Get in Touch
									</Button>
								</Link>
							</div>
						</motion.div>
					</div>
				</div>
			</div>
		</div>
	);
}
