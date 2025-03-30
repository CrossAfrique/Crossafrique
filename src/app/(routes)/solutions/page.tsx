"use client";

import BuildingSolutionImg from "@/app/_assets/images/building-solution.jpg";
import IndustrialApplicationImg from "@/app/_assets/images/industrial-application.jpg";
import MobileSolutionImg from "@/app/_assets/images/mobile-solution.jpg";
import ProductionFacilitiesImg from "@/app/_assets/images/production-facilities.jpg";
import StorageTankImg from "@/app/_assets/images/storage-tank.jpg";
import SustainableAgricultureImg from "@/app/_assets/images/sustainable-agriculture.jpeg";
import { Button } from "@/components/ui/button";
import {
	ArrowRight,
	Building2,
	CheckCircle2,
	Droplets,
	Factory,
	Leaf,
	Truck,
	Zap,
} from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

export default function SolutionsPage() {
	const solutions = [
		{
			id: "green-hydrogen-production",
			title: "Green Hydrogen Production",
			description:
				"Renewable-powered electrolysis systems to produce clean hydrogen for various applications.",
			icon: <Zap className="w-10 h-10 text-emerald-600" />,
			image: ProductionFacilitiesImg,
			benefits: [
				"Zero-emission hydrogen production",
				"Scalable from small to utility-scale",
				"Leverages Africa's abundant renewable resources",
				"Flexible operation to match renewable generation",
			],
			applications: [
				"Industrial feedstock",
				"Energy storage",
				"Fuel for transportation",
				"Power generation",
			],
		},
		{
			id: "industrial-applications",
			title: "Industrial Applications",
			description:
				"Hydrogen solutions for industrial processes, reducing emissions while maintaining productivity.",
			icon: <Factory className="w-10 h-10 text-emerald-600" />,
			image: IndustrialApplicationImg,
			benefits: [
				"Reduced carbon footprint for industrial operations",
				"Potential cost savings compared to imported fuels",
				"Improved energy security and reliability",
				"Compliance with emerging carbon regulations",
			],
			applications: [
				"Mining operations",
				"Manufacturing processes",
				"Chemical production",
				"Food processing",
			],
		},
		{
			id: "mobility-solutions",
			title: "Mobility Solutions",
			description:
				"Hydrogen fuel cell vehicles and refueling infrastructure for clean transportation.",
			icon: <Truck className="w-10 h-10 text-emerald-600" />,
			image: MobileSolutionImg,
			benefits: [
				"Zero-emission transportation",
				"Fast refueling times compared to battery electric",
				"Long range capability",
				"Suitable for heavy-duty applications",
			],
			applications: [
				"Public transportation buses",
				"Commercial vehicle fleets",
				"Heavy-duty trucks",
				"Material handling equipment",
			],
		},
		{
			id: "energy-storage",
			title: "Energy Storage & Grid Services",
			description:
				"Hydrogen-based energy storage systems to balance renewable generation and provide grid stability.",
			icon: <Droplets className="w-10 h-10 text-emerald-600" />,
			image: StorageTankImg,
			benefits: [
				"Long-duration energy storage capability",
				"Seasonal storage potential",
				"Grid stabilization services",
				"Integration with existing gas infrastructure",
			],
			applications: [
				"Renewable energy integration",
				"Microgrids and off-grid systems",
				"Backup power systems",
				"Grid balancing services",
			],
		},
		{
			id: "building-solutions",
			title: "Building Solutions",
			description:
				"Hydrogen technologies for clean heating, cooling, and power in commercial and residential buildings.",
			icon: <Building2 className="w-10 h-10 text-emerald-600" />,
			image: BuildingSolutionImg,
			benefits: [
				"Reduced emissions from building operations",
				"Combined heat and power capability",
				"Energy resilience during grid outages",
				"Potential for integration with renewable systems",
			],
			applications: [
				"Commercial buildings",
				"Residential developments",
				"Institutional facilities",
				"Hospitality sector",
			],
		},
		{
			id: "sustainable-agriculture",
			title: "Sustainable Agriculture",
			description:
				"Hydrogen and ammonia solutions for clean fertilizer production and agricultural operations.",
			icon: <Leaf className="w-10 h-10 text-emerald-600" />,
			image: SustainableAgricultureImg,
			benefits: [
				"Locally produced green fertilizers",
				"Reduced dependence on imported chemicals",
				"Lower carbon footprint for agricultural sector",
				"Support for food security initiatives",
			],
			applications: [
				"Green ammonia production",
				"Fertilizer manufacturing",
				"Agricultural machinery",
				"Food processing facilities",
			],
		},
	];

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
						Our Hydrogen Solutions
					</motion.h1>
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.2 }}
						className="text-xl text-emerald-100 max-w-3xl mx-auto"
					>
						Comprehensive hydrogen technologies and services tailored for
						African contexts, from production to end-use applications.
					</motion.p>
				</div>
			</div>

			<section className="py-16 bg-white dark:bg-gray-900">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<div className="max-w-3xl mx-auto text-center mb-16">
						<motion.h2
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6 }}
							viewport={{ once: true }}
							className="text-3xl font-bold mb-6 text-gray-900 dark:text-white"
						>
							Tailored Hydrogen Solutions for Africa
						</motion.h2>
						<motion.p
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.2 }}
							viewport={{ once: true }}
							className="text-lg text-gray-700 dark:text-gray-300"
						>
							We develop and implement hydrogen technologies specifically
							designed for African conditions and requirements, addressing local
							challenges while maximizing economic and environmental benefits.
						</motion.p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{solutions.map((solution, index) => (
							<motion.div
								key={solution.id}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: index * 0.1 }}
								viewport={{ once: true }}
								className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
							>
								<div className="relative h-60 w-full">
									<Image
										src={solution.image}
										alt={solution.title}
										fill
										className="object-cover"
									/>
								</div>
								<div className="p-6">
									<div className="mb-4">{solution.icon}</div>
									<h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
										{solution.title}
									</h3>
									<p className="text-gray-700 dark:text-gray-300 mb-4">
										{solution.description}
									</p>
									<Link href={`/solutions/${solution.id}`}>
										<Button
											variant="outline"
											className="w-full flex items-center justify-center"
										>
											Learn More
											<ArrowRight className="ml-2 w-4 h-4" />
										</Button>
									</Link>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			<section className="py-16 bg-gray-50 dark:bg-gray-800">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
						<motion.div
							initial={{ opacity: 0, x: -30 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.6 }}
							viewport={{ once: true }}
						>
							<h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
								Our Approach to Solution Development
							</h2>
							<p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
								We follow a comprehensive process to ensure our hydrogen
								solutions are effective, sustainable, and aligned with local
								needs and conditions.
							</p>

							<div className="space-y-4">
								<div className="flex items-start">
									<div className="bg-emerald-100 dark:bg-emerald-900/50 p-2 rounded-full mr-4 mt-1">
										<CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
									</div>
									<div>
										<h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
											Assessment & Analysis
										</h3>
										<p className="text-gray-700 dark:text-gray-300">
											We conduct thorough assessments of local conditions,
											resources, and requirements to identify the most suitable
											hydrogen solutions.
										</p>
									</div>
								</div>

								<div className="flex items-start">
									<div className="bg-emerald-100 dark:bg-emerald-900/50 p-2 rounded-full mr-4 mt-1">
										<CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
									</div>
									<div>
										<h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
											Customized Design
										</h3>
										<p className="text-gray-700 dark:text-gray-300">
											Our engineering team develops tailored solutions that
											address specific challenges and maximize local advantages.
										</p>
									</div>
								</div>

								<div className="flex items-start">
									<div className="bg-emerald-100 dark:bg-emerald-900/50 p-2 rounded-full mr-4 mt-1">
										<CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
									</div>
									<div>
										<h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
											Implementation & Integration
										</h3>
										<p className="text-gray-700 dark:text-gray-300">
											We manage the deployment process, ensuring seamless
											integration with existing systems and infrastructure.
										</p>
									</div>
								</div>

								<div className="flex items-start">
									<div className="bg-emerald-100 dark:bg-emerald-900/50 p-2 rounded-full mr-4 mt-1">
										<CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
									</div>
									<div>
										<h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
											Training & Capacity Building
										</h3>
										<p className="text-gray-700 dark:text-gray-300">
											We provide comprehensive training for local personnel to
											ensure effective operation and maintenance of hydrogen
											systems.
										</p>
									</div>
								</div>

								<div className="flex items-start">
									<div className="bg-emerald-100 dark:bg-emerald-900/50 p-2 rounded-full mr-4 mt-1">
										<CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
									</div>
									<div>
										<h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
											Ongoing Support & Optimization
										</h3>
										<p className="text-gray-700 dark:text-gray-300">
											Our team provides continuous support and performance
											monitoring to optimize system operation and address
											evolving needs.
										</p>
									</div>
								</div>
							</div>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, x: 30 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.6 }}
							viewport={{ once: true }}
							className="relative h-[500px] rounded-lg overflow-hidden"
						>
							<Image
								src={IndustrialApplicationImg}
								alt="Our approach to hydrogen solutions"
								fill
								className="object-cover"
							/>
						</motion.div>
					</div>
				</div>
			</section>

			<section className="py-16 bg-emerald-700 text-white">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<div className="max-w-3xl mx-auto text-center">
						<motion.h2
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6 }}
							viewport={{ once: true }}
							className="text-3xl font-bold mb-6"
						>
							Ready to Explore Hydrogen Solutions?
						</motion.h2>
						<motion.p
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.2 }}
							viewport={{ once: true }}
							className="text-lg text-emerald-100 mb-8"
						>
							Contact our team to discuss how our hydrogen technologies can
							address your specific needs and contribute to a cleaner, more
							sustainable future.
						</motion.p>
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.4 }}
							viewport={{ once: true }}
							className="flex flex-col sm:flex-row gap-4 justify-center"
						>
							<Link href="/contact">
								<Button
									size="lg"
									className="bg-white text-emerald-700 hover:bg-emerald-50"
								>
									Contact Us
								</Button>
							</Link>
							<Link href="/projects">
								<Button size="lg" variant="secondary">
									View Our Projects
								</Button>
							</Link>
						</motion.div>
					</div>
				</div>
			</section>

			<section className="py-16 bg-white dark:bg-gray-900">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<div className="max-w-3xl mx-auto text-center mb-12">
						<motion.h2
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6 }}
							viewport={{ once: true }}
							className="text-3xl font-bold mb-6 text-gray-900 dark:text-white"
						>
							Frequently Asked Questions
						</motion.h2>
						<motion.p
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.2 }}
							viewport={{ once: true }}
							className="text-lg text-gray-700 dark:text-gray-300"
						>
							Learn more about our hydrogen solutions and how they can benefit
							your organization.
						</motion.p>
					</div>

					<div className="max-w-4xl mx-auto">
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6 }}
							viewport={{ once: true }}
							className="space-y-6"
						>
							<div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
								<h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
									What makes hydrogen solutions suitable for Africa?
								</h3>
								<p className="text-gray-700 dark:text-gray-300">
									Africa has abundant renewable energy resources that can be
									used to produce green hydrogen. Hydrogen technologies can
									address multiple challenges simultaneously, including energy
									access, industrial development, and climate change mitigation,
									while leveraging local resources and creating jobs.
								</p>
							</div>

							<div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
								<h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
									How do you ensure your solutions are appropriate for local
									conditions?
								</h3>
								<p className="text-gray-700 dark:text-gray-300">
									We conduct thorough assessments of local resources,
									infrastructure, skills, and needs before designing solutions.
									Our team includes experts with deep understanding of African
									contexts, and we work closely with local stakeholders to
									ensure our solutions address specific challenges and
									opportunities.
								</p>
							</div>

							<div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
								<h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
									What is the typical timeline for implementing a hydrogen
									project?
								</h3>
								<p className="text-gray-700 dark:text-gray-300">
									Project timelines vary depending on scale and complexity.
									Small-scale demonstration projects can be implemented in 6-12
									months, while larger industrial applications may take 18-36
									months from initial assessment to full operation. We work with
									clients to develop realistic timelines and often implement
									projects in phases.
								</p>
							</div>

							<div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
								<h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
									How do you address the cost challenges of hydrogen
									technologies?
								</h3>
								<p className="text-gray-700 dark:text-gray-300">
									We focus on applications where hydrogen already makes economic
									sense or provides unique benefits that justify the investment.
									We also help clients access financing, grants, and carbon
									credits to improve project economics. As technology costs
									continue to decline, more applications become viable each
									year.
								</p>
							</div>

							<div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
								<h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
									Do you provide training and capacity building for local teams?
								</h3>
								<p className="text-gray-700 dark:text-gray-300">
									Yes, training and capacity building are integral parts of our
									approach. We provide comprehensive training programs for local
									personnel on system operation, maintenance, and safety. We
									also offer broader educational initiatives to build hydrogen
									expertise in the regions where we work.
								</p>
							</div>
						</motion.div>
					</div>
				</div>
			</section>

			<section className="py-16 bg-gray-50 dark:bg-gray-800">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<div className="max-w-3xl mx-auto text-center mb-12">
						<motion.h2
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6 }}
							viewport={{ once: true }}
							className="text-3xl font-bold mb-6 text-gray-900 dark:text-white"
						>
							Our Partners
						</motion.h2>
						<motion.p
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.2 }}
							viewport={{ once: true }}
							className="text-lg text-gray-700 dark:text-gray-300"
						>
							We collaborate with leading organizations to deliver comprehensive
							hydrogen solutions.
						</motion.p>
					</div>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						viewport={{ once: true }}
						className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center"
					>
						{[1, 2, 3, 4, 5, 6].map((partner) => (
							<div key={partner} className="flex justify-center">
								<div className="bg-white dark:bg-gray-700 p-4 rounded-lg w-full h-24 flex items-center justify-center">
									<Image
										src={`/images/partners/partner-${partner}.svg`}
										alt={`Partner ${partner}`}
										width={120}
										height={60}
										className="max-h-12 w-auto"
									/>
								</div>
							</div>
						))}
					</motion.div>
				</div>
			</section>
		</div>
	);
}
