"use client";

import { Button } from "@/components/ui/button";
import {
	ArrowLeft,
	CheckCircle2,
	Droplets,
	Factory,
	Truck,
} from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { SOLUTIONS } from "../page";

// interface Solution {
// 	id: string;
// 	title: string;
// 	description: string;
// 	icon: React.ReactNode;
// 	image: string;
// 	benefits: string[];
// 	applications: string[];
// 	detailedDescription?: string;
// 	features?: string[];
// 	caseStudies?: {
// 		title: string;
// 		location: string;
// 		description: string;
// 		image: string;
// 	}[];
// }

// const SOLUTIONS: Solution[] = [
// 	{
// 		id: "green-hydrogen-production",
// 		title: "Green Hydrogen Production",
// 		description:
// 			"Renewable-powered electrolysis systems to produce clean hydrogen for various applications.",
// 		icon: <Zap className="w-10 h-10 text-emerald-600" />,
// 		image: "/images/solutions/green-hydrogen-production.jpg",
// 		benefits: [
// 			"Zero-emission hydrogen production",
// 			"Scalable from small to utility-scale",
// 			"Leverages Africa's abundant renewable resources",
// 			"Flexible operation to match renewable generation",
// 		],
// 		applications: [
// 			"Industrial feedstock",
// 			"Energy storage",
// 			"Fuel for transportation",
// 			"Power generation",
// 		],
// 		detailedDescription:
// 			"Our green hydrogen production solutions utilize renewable energy sources such as solar, wind, and hydropower to produce hydrogen through water electrolysis. This process splits water molecules into hydrogen and oxygen without any carbon emissions. We offer a range of electrolysis technologies, including alkaline, PEM (Proton Exchange Membrane), and emerging solid oxide systems, tailored to specific project requirements and local conditions across Africa.",
// 		features: [
// 			"Modular electrolysis systems scalable from kilowatts to megawatts",
// 			"Integration with various renewable energy sources",
// 			"Water treatment and purification systems",
// 			"Hydrogen compression, storage, and distribution solutions",
// 			"Advanced control systems for optimal operation",
// 			"Remote monitoring and diagnostics capabilities",
// 		],
// 		caseStudies: [
// 			{
// 				title: "Solar-Powered Hydrogen Facility",
// 				location: "Morocco",
// 				description:
// 					"A 10 MW solar-powered electrolysis facility producing green hydrogen for industrial use and export.",
// 				image: "/images/case-studies/morocco-hydrogen.jpg",
// 			},
// 			{
// 				title: "Hybrid Wind-Solar Hydrogen Production",
// 				location: "South Africa",
// 				description:
// 					"A hybrid renewable energy system powering hydrogen production for mining operations.",
// 				image: "/images/case-studies/south-africa-hydrogen.jpg",
// 			},
// 		],
// 	},
// 	{
// 		id: "industrial-applications",
// 		title: "Industrial Applications",
// 		description:
// 			"Hydrogen solutions for industrial processes, reducing emissions while maintaining productivity.",
// 		icon: <Factory className="w-10 h-10 text-emerald-600" />,
// 		image: "/images/solutions/industrial-applications.jpg",
// 		benefits: [
// 			"Reduced carbon footprint for industrial operations",
// 			"Potential cost savings compared to imported fuels",
// 			"Improved energy security and reliability",
// 			"Compliance with emerging carbon regulations",
// 		],
// 		applications: [
// 			"Mining operations",
// 			"Manufacturing processes",
// 			"Chemical production",
// 			"Food processing",
// 		],
// 		detailedDescription:
// 			"Our industrial hydrogen solutions enable businesses to reduce their carbon footprint while maintaining or improving productivity. We provide systems for direct hydrogen use in industrial processes, hydrogen-based heating, and combined heat and power applications. Our solutions are designed to integrate with existing industrial infrastructure, minimizing disruption while maximizing environmental and economic benefits.",
// 		features: [
// 			"Hydrogen burners and furnaces for industrial heating",
// 			"Fuel cell systems for reliable power generation",
// 			"Process heat recovery and utilization",
// 			"Integration with existing industrial equipment",
// 			"Emissions monitoring and reporting systems",
// 			"Scalable implementation approaches",
// 		],
// 		caseStudies: [
// 			{
// 				title: "Mining Equipment Conversion",
// 				location: "Namibia",
// 				description:
// 					"Conversion of mining equipment from diesel to hydrogen fuel cells, reducing emissions and improving air quality.",
// 				image: "/images/case-studies/namibia-mining.jpg",
// 			},
// 			{
// 				title: "Food Processing Plant",
// 				location: "Kenya",
// 				description:
// 					"Implementation of hydrogen-based heating systems in a food processing facility, reducing carbon emissions by 80%.",
// 				image: "/images/case-studies/kenya-food-processing.jpg",
// 			},
// 		],
// 	},
// 	{
// 		id: "mobility-solutions",
// 		title: "Mobility Solutions",
// 		description:
// 			"Hydrogen fuel cell vehicles and refueling infrastructure for clean transportation.",
// 		icon: <Truck className="w-10 h-10 text-emerald-600" />,
// 		image: "/images/solutions/mobility-solutions.jpg",
// 		benefits: [
// 			"Zero-emission transportation",
// 			"Fast refueling times compared to battery electric",
// 			"Long range capability",
// 			"Suitable for heavy-duty applications",
// 		],
// 		applications: [
// 			"Public transportation buses",
// 			"Commercial vehicle fleets",
// 			"Heavy-duty trucks",
// 			"Material handling equipment",
// 		],
// 		detailedDescription:
// 			"Our hydrogen mobility solutions provide zero-emission transportation options with the performance and operational characteristics that fleet operators need. We focus on applications where hydrogen offers distinct advantages, such as heavy-duty vehicles, high-utilization fleets, and operations requiring fast refueling and long range. Our comprehensive approach includes vehicles, refueling infrastructure, and operational support.",
// 		features: [
// 			"Hydrogen fuel cell vehicle procurement and integration",
// 			"Hydrogen refueling station design and installation",
// 			"Fleet transition planning and implementation",
// 			"Driver and maintenance staff training",
// 			"Performance monitoring and optimization",
// 			"Financing and total cost of ownership analysis",
// 		],
// 		caseStudies: [
// 			{
// 				title: "Public Bus Fleet Conversion",
// 				location: "Egypt",
// 				description:
// 					"Implementation of hydrogen fuel cell buses for public transportation, reducing emissions and noise in urban areas.",
// 				image: "/images/case-studies/egypt-buses.jpg",
// 			},
// 			{
// 				title: "Mining Logistics Fleet",
// 				location: "Ghana",
// 				description:
// 					"Conversion of heavy-duty mining logistics vehicles to hydrogen fuel cells, improving air quality and reducing operational costs.",
// 				image: "/images/case-studies/ghana-mining-logistics.jpg",
// 			},
// 		],
// 	},
// 	{
// 		id: "energy-storage",
// 		title: "Energy Storage & Grid Services",
// 		description:
// 			"Hydrogen-based energy storage systems to balance renewable generation and provide grid stability.",
// 		icon: <Droplets className="w-10 h-10 text-emerald-600" />,
// 		image: "/images/solutions/energy-storage.jpg",
// 		benefits: [
// 			"Long-duration energy storage capability",
// 			"Seasonal storage potential",
// 			"Grid stabilization services",
// 			"Integration with existing gas infrastructure",
// 		],
// 		applications: [
// 			"Renewable energy integration",
// 			"Microgrids and off-grid systems",
// 			"Backup power systems",
// 			"Grid balancing services",
// 		],
// 		detailedDescription:
// 			"Our hydrogen energy storage solutions address the intermittency challenges of renewable energy by converting excess electricity into hydrogen for later use. This approach enables long-duration and even seasonal energy storage, providing flexibility and reliability to energy systems. We design and implement complete hydrogen energy storage systems, from production and storage to reconversion to electricity or direct use.",
// 		features: [
// 			"Power-to-gas systems for renewable energy storage",
// 			"Hydrogen storage solutions (compressed, liquid, or material-based)",
// 			"Fuel cell systems for power generation",
// 			"Grid integration and control systems",
// 			"Microgrid and off-grid applications",
// 			"Hybrid storage solutions combining hydrogen with batteries",
// 		],
// 		caseStudies: [
// 			{
// 				title: "Island Microgrid System",
// 				location: "Cape Verde",
// 				description:
// 					"A hydrogen-based energy storage system enabling 100% renewable energy supply for an island community.",
// 				image: "/images/case-studies/cape-verde-microgrid.jpg",
// 			},
// 			{
// 				title: "Solar Farm Integration",
// 				location: "Tanzania",
// 				description:
// 					"Hydrogen storage system integrated with a utility-scale solar farm to provide dispatchable power and grid services.",
// 				image: "/images/case-studies/tanzania-solar-storage.jpg",
// 			},
// 		],
// 	},
// 	{
// 		id: "building-solutions",
// 		title: "Building Solutions",
// 		description:
// 			"Hydrogen technologies for clean heating, cooling, and power in commercial and residential buildings.",
// 		icon: <Building2 className="w-10 h-10 text-emerald-600" />,
// 		image: "/images/solutions/building-solutions.jpg",
// 		benefits: [
// 			"Reduced emissions from building operations",
// 			"Combined heat and power capability",
// 			"Energy resilience during grid outages",
// 			"Potential for integration with renewable systems",
// 		],
// 		applications: [
// 			"Commercial buildings",
// 			"Residential developments",
// 			"Institutional facilities",
// 			"Hospitality sector",
// 		],
// 		detailedDescription:
// 			"Our building solutions leverage hydrogen technologies to provide clean, efficient, and reliable energy for commercial and residential buildings. We offer hydrogen-based heating systems, combined heat and power (CHP) solutions, and backup power systems that reduce carbon emissions while enhancing energy security. Our approach integrates with building management systems and on-site renewable generation for optimal performance.",
// 		features: [
// 			"Hydrogen boilers and heating systems",
// 			"Fuel cell CHP systems for efficient power and heat generation",
// 			"Backup power solutions for critical facilities",
// 			"Integration with building management systems",
// 			"Hybrid systems combining hydrogen with other clean technologies",
// 			"Monitoring and optimization tools for building operators",
// 		],
// 		caseStudies: [
// 			{
// 				title: "Commercial Office Complex",
// 				location: "Nigeria",
// 				description:
// 					"Implementation of hydrogen fuel cell CHP system in a commercial office complex, reducing energy costs and emissions.",
// 				image: "/images/case-studies/nigeria-office-complex.jpg",
// 			},
// 			{
// 				title: "Eco-Tourism Resort",
// 				location: "Rwanda",
// 				description:
// 					"Hydrogen-based energy system for an off-grid eco-tourism resort, providing clean and reliable power and heating.",
// 				image: "/images/case-studies/rwanda-eco-resort.jpg",
// 			},
// 		],
// 	},
// 	{
// 		id: "sustainable-agriculture",
// 		title: "Sustainable Agriculture",
// 		description:
// 			"Hydrogen and ammonia solutions for clean fertilizer production and agricultural operations.",
// 		icon: <Leaf className="w-10 h-10 text-emerald-600" />,
// 		image: "/images/solutions/sustainable-agriculture.jpg",
// 		benefits: [
// 			"Locally produced green fertilizers",
// 			"Reduced dependence on imported chemicals",
// 			"Lower carbon footprint for agricultural sector",
// 			"Support for food security initiatives",
// 		],
// 		applications: [
// 			"Green ammonia production",
// 			"Fertilizer manufacturing",
// 			"Agricultural machinery",
// 			"Food processing facilities",
// 		],
// 		detailedDescription:
// 			"Our sustainable agriculture solutions focus on producing green ammonia and fertilizers using renewable-powered hydrogen, reducing the carbon footprint and import dependence of agricultural operations. We also provide hydrogen solutions for powering agricultural machinery and food processing facilities. Our approach supports food security while reducing environmental impact.",
// 		features: [
// 			"Small to medium-scale green ammonia production systems",
// 			"Fertilizer manufacturing using green hydrogen and ammonia",
// 			"Hydrogen fuel cell systems for agricultural machinery",
// 			"Clean energy solutions for food processing and storage",
// 			"Water treatment and irrigation systems",
// 			"Integrated renewable energy systems for agricultural operations",
// 		],
// 		caseStudies: [
// 			{
// 				title: "Green Fertilizer Production",
// 				location: "Ethiopia",
// 				description:
// 					"Small-scale green ammonia production facility using renewable energy to produce fertilizer for local farmers.",
// 				image: "/images/case-studies/ethiopia-fertilizer.jpg",
// 			},
// 			{
// 				title: "Agricultural Cooperative",
// 				location: "Senegal",
// 				description:
// 					"Comprehensive hydrogen solution for an agricultural cooperative, including machinery, processing, and fertilizer production.",
// 				image: "/images/case-studies/senegal-cooperative.jpg",
// 			},
// 		],
// 	},
// ];

export default function SolutionPage() {
	const params = useParams();
	const solutionId = params.solutionId as string;

	const solution = SOLUTIONS.find((s) => s.id === solutionId);

	if (!solution) {
		return (
			<div className="pt-24 pb-16 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
				<h1 className="text-3xl font-bold mb-6">Solution not found</h1>
				<p className="mb-8">
					The solution you are looking for does not exist or has been moved.
				</p>
				<Link href="/solutions">
					<Button>
						<ArrowLeft className="mr-2 w-4 h-4" />
						Back to Solutions
					</Button>
				</Link>
			</div>
		);
	}

	return (
		<div className="pt-16">
			<div className="bg-emerald-700 text-white py-20">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<Link
						href="/solutions"
						className="inline-flex items-center text-emerald-100 hover:text-white mb-6"
					>
						<ArrowLeft className="mr-2 w-4 h-4" />
						Back to Solutions
					</Link>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						className="flex flex-col md:flex-row gap-8 items-center"
					>
						<div className="md:w-1/2">
							<h1 className="text-4xl md:text-5xl font-bold mb-6">
								{solution.title}
							</h1>
							<p className="text-xl text-emerald-100 mb-8">
								{solution.description}
							</p>
							<div className="flex flex-wrap gap-4 mb-8">
								{solution.applications.map((application) => (
									<span
										key={application}
										className="bg-emerald-600 px-4 py-2 rounded-full text-sm font-medium"
									>
										{application}
									</span>
								))}
							</div>
							<Link href="/contact">
								<Button
									size="lg"
									className="bg-white text-emerald-700 hover:bg-emerald-50"
								>
									Request Consultation
								</Button>
							</Link>
						</div>
						<div className="md:w-1/2 relative h-[300px] md:h-[400px] w-full rounded-lg overflow-hidden">
							<Image
								src={solution.image}
								alt={solution.title}
								fill
								className="object-cover"
							/>
						</div>
					</motion.div>
				</div>
			</div>

			<section className="py-16 bg-white dark:bg-gray-900">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<div className="max-w-3xl mx-auto">
						<motion.h2
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6 }}
							viewport={{ once: true }}
							className="text-3xl font-bold mb-6 text-gray-900 dark:text-white"
						>
							Overview
						</motion.h2>
						<motion.p
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.2 }}
							viewport={{ once: true }}
							className="text-lg text-gray-700 dark:text-gray-300 mb-12"
						>
							{solution.description}
						</motion.p>

						{/* <motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6 }}
							viewport={{ once: true }}
						>
							<h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
								Key Features
							</h2>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
								{solution.features?.map((feature) => (
									<div key={feature} className="flex items-start">
										<div className="bg-emerald-100 dark:bg-emerald-900/50 p-2 rounded-full mr-4 mt-1">
											<CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
										</div>
										<p className="text-gray-700 dark:text-gray-300">
											{feature}
										</p>
									</div>
								))}
							</div>
						</motion.div> */}

						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6 }}
							viewport={{ once: true }}
						>
							<h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
								Benefits
							</h2>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
								{solution.benefits.map((benefit) => (
									<div key={benefit} className="flex items-start">
										<div className="bg-emerald-100 dark:bg-emerald-900/50 p-2 rounded-full mr-4 mt-1">
											<CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
										</div>
										<p className="text-gray-700 dark:text-gray-300">
											{benefit}
										</p>
									</div>
								))}
							</div>
						</motion.div>
					</div>
				</div>
			</section>

			{/* {solution.caseStudies && (
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
								Case Studies
							</motion.h2>
							<motion.p
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: 0.2 }}
								viewport={{ once: true }}
								className="text-lg text-gray-700 dark:text-gray-300"
							>
								Real-world examples of our {solution.title.toLowerCase()} in
								action.
							</motion.p>
						</div>

						<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
							{solution.caseStudies.map((caseStudy, index) => (
								<motion.div
									key={caseStudy.title}
									initial={{ opacity: 0, y: 30 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.5, delay: index * 0.1 }}
									viewport={{ once: true }}
									className="bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-md"
								>
									<div className="relative h-60 w-full">
										<Image
											src={caseStudy.image}
											alt={caseStudy.title}
											fill
											className="object-cover"
										/>
									</div>
									<div className="p-6">
										<h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
											{caseStudy.title}
										</h3>
										<p className="text-emerald-600 dark:text-emerald-400 font-medium mb-4">
											{caseStudy.location}
										</p>
										<p className="text-gray-700 dark:text-gray-300">
											{caseStudy.description}
										</p>
									</div>
								</motion.div>
							))}
						</div>
					</div>
				</section>
			)} */}

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
							Ready to Implement {solution.title}?
						</motion.h2>
						<motion.p
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.2 }}
							viewport={{ once: true }}
							className="text-lg text-emerald-100 mb-8"
						>
							Contact our team to discuss how our {solution.title.toLowerCase()}{" "}
							can address your specific needs and contribute to a cleaner, more
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
						</motion.div>
					</div>
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
							Other Solutions
						</motion.h2>

						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6 }}
							viewport={{ once: true }}
							className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8"
						>
							{SOLUTIONS.filter((s) => s.id !== solutionId).map((solution) => (
								<div
									key={solution.id}
									className="flex flex-col items-center justify-between gap-3 bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-md p-6"
								>
									<>
										<div className="mb-4">{solution.icon}</div>
										<h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
											{solution.title}
										</h3>
										<p className="text-gray-700 dark:text-gray-300 mb-4">
											{solution.description}
										</p>
									</>
									<Link href={`/solutions/${solution.id}`}>
										<Button variant="outline" className="w-full">
											Learn More
										</Button>
									</Link>
								</div>
							))}
						</motion.div>
					</div>
				</div>
			</section>
		</div>
	);
}
