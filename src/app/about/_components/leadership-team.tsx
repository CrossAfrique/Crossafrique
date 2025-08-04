"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { Linkedin, Twitter, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const LeadershipTeam = () => {
	const [isExpanded, setIsExpanded] = useState(false);

	const shortBio = "Joshua Dauda is the Founder and Project Development and Finance Lead at CrossAfrique Hydrogen. With over a decade of experience spanning finance and renewable energy infrastructure, he has led multidisciplinary projects across Africa and Europe.";

	const fullBio = "Joshua Dauda is the Founder and Project Development and Finance Lead at CrossAfrique Hydrogen. With over a decade of experience spanning finance and renewable energy infrastructure, he has led multidisciplinary projects across Africa and Europe. Joshua brings expertise in strategic project development, financial structuring, technical coordination, and donor engagement. He has contributed to the development and implementation of clean energy infrastructure projects valued at over €50 million and has played key roles in EU-funded programs such as the REFORMERS project, where he coordinated hydrogen asset deployment and digital twin integration, and NSH2V Ports, where he led development of hydrogen hub strategies across four European ports. He holds a Master's degree in Interdisciplinary Business with a focus on Renewable Energy from Hanze University in the Netherlands. His professional certifications include Hydrogen Energy (Engineering Institute of Technology, Australia), Climate & Renewable Energy Finance (Frankfurt School of Finance & Management, Germany), and Sustainable Energy and Water Technology (Van Hall Larenstein University, Netherlands).";

	return (
		<section className="py-20 bg-gray-50 dark:bg-gray-800">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				{/* Our Team Section */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
					className="max-w-7xl mx-auto mb-16"
				>
					<div className="bg-white dark:bg-gray-900 rounded-lg p-8 shadow-lg">
						<h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white text-center">
							Our Team
						</h2>
						<div className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-4xl mx-auto text-center">
							<p className="mb-4">
								At CrossAfrique Hydrogen, our team brings together over 50 years of combined experience in renewable energy project development, project finance, and system integration. With deep technical and financial expertise, we design and deploy integrated energy hubs that combine hydrogen, solar PV, battery storage, and smart control systems.
							</p>
							<p>
								Having worked across Africa and Europe, our professionals bridge global innovation with local realities — delivering clean, scalable energy systems that drive industrial growth, climate resilience, and sustainable development.
							</p>
						</div>
					</div>
				</motion.div>

				{/* Leadership Section */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.2 }}
					viewport={{ once: true }}
					className="max-w-7xl mx-auto"
				>
					<div className="bg-white dark:bg-gray-900 rounded-lg p-8 shadow-lg">
						<h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 dark:text-white text-center">
							Leadership
						</h2>

						<div className="flex flex-col lg:flex-row items-start gap-8">
							{/* Joshua Dauda Avatar Card */}
							<motion.div
								initial={{ opacity: 0, x: -20 }}
								whileInView={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.6, delay: 0.3 }}
								viewport={{ once: true }}
								className="flex-shrink-0 w-full lg:w-auto"
							>
								<div className="bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-900/20 dark:to-emerald-800/20 rounded-lg p-6 border border-emerald-200 dark:border-emerald-700 max-w-sm mx-auto lg:mx-0">
									<div className="text-center">
										<div className="relative w-32 h-32 mx-auto mb-4">
											<div className="w-full h-full rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center text-white text-3xl font-bold shadow-lg">
												JD
											</div>
										</div>
										<h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
											Joshua Dauda
										</h3>
										<p className="text-emerald-600 dark:text-emerald-400 font-medium mb-4 text-sm">
											Project Development & Finance Lead
										</p>
										<div className="flex justify-center space-x-3">
											<a
												href="#"
												className="text-gray-500 hover:text-emerald-600 dark:text-gray-400 dark:hover:text-emerald-400 transition-colors"
												aria-label="LinkedIn"
											>
												<Linkedin className="w-5 h-5" />
											</a>
											<a
												href="#"
												className="text-gray-500 hover:text-emerald-600 dark:text-gray-400 dark:hover:text-emerald-400 transition-colors"
												aria-label="Twitter"
											>
												<Twitter className="w-5 h-5" />
											</a>
										</div>
									</div>
								</div>
							</motion.div>

							{/* Bio Content Section */}
							<div className="flex-1">
								<div className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
									<p>
										{isExpanded ? fullBio : shortBio}
									</p>
									<button
										onClick={() => setIsExpanded(!isExpanded)}
										className="mt-4 inline-flex items-center text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 font-medium transition-colors"
									>
										{isExpanded ? (
											<>
												Read Less
												<ChevronUp className="ml-1 w-4 h-4" />
											</>
										) : (
											<>
												Read More
												<ChevronDown className="ml-1 w-4 h-4" />
											</>
										)}
									</button>
								</div>
							</div>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default LeadershipTeam;