
"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { Linkedin, Twitter, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const LeadershipTeam = () => {
	const [isExpanded, setIsExpanded] = useState(false);

	const shortText = "CrossAfrique's technical and advisory team has led or supported projects in Nigeria, the Netherlands, and other leading energy innovation hubs across Europe and Africa. The team is led by Joshua Dauda, Director of Projects at CrossAfrique Hydrogen Ltd, who has over a decade of experience in finance, renewable energy project development, and system integration across Africa and Europe.";

	const fullText = "CrossAfrique's technical and advisory team has led or supported projects in Nigeria, the Netherlands, and other leading energy innovation hubs across Europe and Africa. The team is led by Joshua Dauda, Director of Projects at CrossAfrique Hydrogen Ltd, who has over a decade of experience in finance, renewable energy project development, and system integration across Africa and Europe. His expertise spans large-scale EU-funded innovation and demonstration projects such as REFORMERS (€20M), where he coordinated the deployment of 12 assets—including hydrogen production systems, battery storage, and heat buffers—alongside their smart integration. In his role as project coordinator for NSH2V Ports (€3.5M), he facilitates the development of hydrogen hubs across four North Sea ports, working with a consortium of nine partners from six European countries. His portfolio also includes work on hydrogen mobility and grid-balancing solutions through research engagements with ENTRANCE (Netherlands) and TotalEnergies, focusing on the alignment of technical innovation with commercial viability.";

	return (
		<section className="py-20 bg-gray-50 dark:bg-gray-800">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
					className="max-w-7xl mx-auto"
				>
					{/* Main Team Section */}
					<div className="bg-white dark:bg-gray-900 rounded-lg p-8 shadow-lg">
						<div className="flex flex-col lg:flex-row items-start gap-8">
							{/* Content Section */}
							<div className="flex-1">
								<h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
									Our Team of Experts
								</h2>
								<div className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
									<p>
										{isExpanded ? fullText : shortText}
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

							{/* Joshua Dauda Avatar Card */}
							<motion.div
								initial={{ opacity: 0, x: 20 }}
								whileInView={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.6, delay: 0.2 }}
								viewport={{ once: true }}
								className="flex-shrink-0 w-full lg:w-auto"
							>
								<div className="bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-900/20 dark:to-emerald-800/20 rounded-lg p-6 border border-emerald-200 dark:border-emerald-700 max-w-sm mx-auto lg:mx-0">
									<div className="text-center">
										<div className="relative w-24 h-24 mx-auto mb-4">
											<div className="w-full h-full rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center text-white text-2xl font-bold shadow-lg">
												JD
											</div>
										</div>
										<h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
											Joshua Dauda
										</h3>
										<p className="text-emerald-600 dark:text-emerald-400 font-medium mb-3 text-sm">
											Director of Projects
										</p>
										{/* <p className="text-xs text-gray-600 dark:text-gray-400 mb-4">
											Leading renewable energy innovation across Africa and Europe
										</p> */}
										<div className="flex justify-center space-x-3">
											<a
												href="#"
												className="text-gray-500 hover:text-emerald-600 dark:text-gray-400 dark:hover:text-emerald-400 transition-colors"
												aria-label="LinkedIn"
											>
												<Linkedin className="w-4 h-4" />
											</a>
											<a
												href="#"
												className="text-gray-500 hover:text-emerald-600 dark:text-gray-400 dark:hover:text-emerald-400 transition-colors"
												aria-label="Twitter"
											>
												<Twitter className="w-4 h-4" />
											</a>
										</div>
									</div>
								</div>
							</motion.div>
						</div>
					</div>
				</motion.div>

				{/* Growing Team Section - Commented Out */}
				{/* 
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.4 }}
					viewport={{ once: true }}
					className="text-center mt-12"
				>
					<div className="bg-white dark:bg-gray-900 rounded-lg p-8 shadow-md max-w-2xl mx-auto">
						<div className="mb-6 bg-emerald-100 dark:bg-emerald-900/30 p-4 rounded-full inline-block">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-12 w-12 text-emerald-600 dark:text-emerald-400"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<title>Team</title>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
								/>
							</svg>
						</div>
						<h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
							Growing Our Team
						</h3>
						<p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
							We're expanding our team of experts and partners across Africa and Europe. 
							Stay tuned as we introduce more key team members who are driving our mission forward.
						</p>
						<div className="inline-block bg-emerald-50 dark:bg-emerald-900/20 px-4 py-2 rounded-md">
							<p className="text-emerald-700 dark:text-emerald-300 font-medium">
								More Team Members Coming Soon
							</p>
						</div>
					</div>
				</motion.div>
				*/}
			</div>
		</section>
	);
};

export default LeadershipTeam;
