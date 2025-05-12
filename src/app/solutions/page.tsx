"use client";

import EnergyHubImg from "@/app/_assets/images/energy-hub.jpg";
import FinancialStructuringImg from "@/app/_assets/images/financial-structuring.jpg";
import IndustrialApplicationImg from "@/app/_assets/images/industrial-application.jpg";
import SystemArchitectureImg from "@/app/_assets/images/system-architecture.jpg";
// import Partners from "@/app/_components/landing-page/partners";
import { Button } from "@/components/ui/button";
import {
	ArrowRight,
	BookOpen,
	ChartArea,
	CheckCircle2,
	Factory,
	Home,
	Recycle,
	Truck,
	Zap,
} from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

const APPROACH = [
	{
		icon: <CheckCircle2 className="w-5 h-5 text-emerald-600" />,
		title: "Assessment & Feasibility",
		description:
			"We conduct local energy assessments, demand analysis, and infrastructure reviews to identify appropriate energy carriers and technologies.",
	},
	{
		icon: <CheckCircle2 className="w-5 h-5 text-emerald-600" />,
		title: "System Design & Modelling",
		description:
			"Our team uses energy modeling and system architecture tools to design integrated, context-specific clean energy hubs.",
	},
	{
		icon: <CheckCircle2 className="w-5 h-5 text-emerald-600" />,
		title: "Financing & Structuring",
		description:
			"We work with partners to structure blended financing packages, combining grants, equity, concessional finance, and carbon credits.",
	},
	{
		icon: <CheckCircle2 className="w-5 h-5 text-emerald-600" />,
		title: "Deployment & Integration",
		description:
			"We coordinate project delivery and ensure seamless integration between carriers, control systems, and grid infrastructure.",
	},
	{
		icon: <CheckCircle2 className="w-5 h-5 text-emerald-600" />,
		title: "Capacity Building & Optimization",
		description:
			"We train local teams, monitor performance, and adapt systems to ensure long-term technical and economic success.",
	},
];

export const SOLUTIONS = [
	{
		id: "integrated-energy-hubs",
		title: "Integrated Energy Hubs",
		description:
			"We develop hubs combining multiple energy carriers—hydrogen, solar PV, battery storage—into coordinated, high-impact systems.",
		icon: <Zap className="w-10 h-10 text-emerald-600" />,
		image: EnergyHubImg,
		benefits: [
			"Zero-emission energy production",
			"Scalable from small to utility-scale",
			"Leverages Africa's abundant renewable resources",
			"Integrated systems for maximum efficiency",
		],
		applications: [
			"Industrial zones",
			"Commercial complexes",
			"Community energy systems",
			"Off-grid applications",
		],
	},
	{
		id: "financial-structuring",
		title: "Financial Structuring",
		description:
			"We design investment-ready projects with robust business models, using blended finance and private-public partnerships.",
		icon: <ChartArea className="w-10 h-10 text-emerald-600" />,
		image: FinancialStructuringImg,
		benefits: [
			"Reduced investment risk",
			"Access to diverse funding sources",
			"Sustainable business models",
			"Optimized return on investment",
		],
		applications: [
			"Public-private partnerships",
			"Blended finance projects",
			"Carbon credit monetization",
			"Impact investment opportunities",
		],
	},
	{
		id: "applied-research-innovation",
		title: "Innovation & Research",
		description:
			"We collaborate with universities and technical partners to drive applied research and next-generation energy solutions.",
		icon: <BookOpen className="w-10 h-10 text-emerald-600" />,
		image: IndustrialApplicationImg,
		benefits: [
			"Access to cutting-edge technologies",
			"Knowledge transfer and capacity building",
			"Locally adapted solutions",
			"Continuous improvement and innovation",
		],
		applications: [
			"University research partnerships",
			"Technology demonstration projects",
			"Innovation hubs and incubators",
			"Technical training programs",
		],
	},
	{
		id: "system-architecture-and-smart-control",
		title: "System Architecture & Smart Control",
		description:
			"We implement digital control systems that ensure efficient energy flows and grid responsiveness.",
		icon: <Factory className="w-10 h-10 text-emerald-600" />,
		image: SystemArchitectureImg,
		benefits: [
			"Optimized energy flows",
			"Real-time monitoring and control",
			"Predictive maintenance capabilities",
			"Enhanced system reliability",
		],
		applications: [
			"Smart grid integration",
			"Energy management systems",
			"Demand response solutions",
			"Digital twin modeling",
		],
	},
];

export default function SolutionsPage() {
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
						Our Solutions
					</motion.h1>
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.2 }}
						className="text-xl text-emerald-100 max-w-3xl mx-auto"
					>
						At CrossAfrique Hydrogen, we develop and finance integrated clean
						energy systems that combine hydrogen, solar PV, battery storage, and
						digital control platforms into cohesive, scalable energy hubs. Our
						solutions are designed to meet local energy needs while enabling
						industrial growth, sustainability, and climate resilience.
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
							What We Deliver
						</motion.h2>
						<motion.p
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.2 }}
							viewport={{ once: true }}
							className="text-lg text-gray-700 dark:text-gray-300"
						>
							We offer end-to-end services—from opportunity assessment and
							project structuring to deployment, financing, and long-term
							optimization.
						</motion.p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-max mx-auto">
						{SOLUTIONS.map((solution, index) => (
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

			<section className="py-16 bg-gray-100 dark:bg-gray-850">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<div className="max-w-3xl mx-auto text-center mb-12">
						<motion.h2
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6 }}
							viewport={{ once: true }}
							className="text-3xl font-bold mb-6 text-gray-900 dark:text-white"
						>
							Our Solutions Are Designed For
						</motion.h2>
					</div>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.2 }}
						viewport={{ once: true }}
						className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto"
					>
						{[
							{
								title: "Industrial zones and production facilities",
								icon: <Factory className="w-8 h-8 text-emerald-600" />,
							},
							{
								title: "Universities and research campuses",
								icon: <BookOpen className="w-8 h-8 text-emerald-600" />,
							},
							{
								title: "Off-grid communities and remote regions",
								icon: <Home className="w-8 h-8 text-emerald-600" />,
							},
							{
								title: "Transport & logistics hubs",
								icon: <Truck className="w-8 h-8 text-emerald-600" />,
							},
							{
								title: "Circular economy and agri-processing zones",
								icon: <Recycle className="w-8 h-8 text-emerald-600" />,
							},
						].map((item, index) => (
							<motion.div
								key={item.title}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: index * 0.1 }}
								viewport={{ once: true }}
								className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center text-center"
							>
								<div className="bg-emerald-100 dark:bg-emerald-900/50 p-3 rounded-full mb-4">
									{item.icon}
								</div>
								<h3 className="text-lg font-semibold text-gray-900 dark:text-white">
									{item.title}
								</h3>
							</motion.div>
						))}
					</motion.div>
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
								Our Approach
							</h2>
							<p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
								We follow a comprehensive process to ensure our energy solutions
								are effective, sustainable, and aligned with local needs and
								conditions.
							</p>

							<div className="space-y-4">
								{APPROACH.map((step) => (
									<div key={step.title} className="flex items-start">
										<div className="bg-emerald-100 dark:bg-emerald-900/50 p-2 rounded-full mr-4 mt-1">
											{step.icon}
										</div>
										<div>
											<h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
												{step.title}
											</h3>
											<p className="text-gray-700 dark:text-gray-300">
												{step.description}
											</p>
										</div>
									</div>
								))}
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
							Work With Us
						</motion.h2>
						<motion.p
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.2 }}
							viewport={{ once: true }}
							className="text-lg text-emerald-100 mb-8"
						>
							Are you ready to develop an integrated clean energy system
							tailored to your needs? Whether you are a government partner,
							research institution, developer, or investor—we can help design
							and implement systems that create lasting value.
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
									Explore Our Projects
								</Button>
							</Link>
						</motion.div>
					</div>
				</div>
			</section>

			{/* <section className="py-16 bg-white dark:bg-gray-900">
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

			<Partners /> */}
		</div>
	);
}
