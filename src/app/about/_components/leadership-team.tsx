"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { Linkedin, Twitter } from "lucide-react";

const LeadershipTeam = () => {
	return (
		<section className="py-20 bg-gray-50 dark:bg-gray-800">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
					className="text-center mb-16"
				>
					<div className="flex flex-col lg:flex-row items-center justify-center gap-12 mb-8">
						<div className="flex-1 max-w-3xl">
							<h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
								Our Team of Experts
							</h2>
							<p className="text-lg text-gray-700 dark:text-gray-300">
								CrossAfrique's technical and advisory team has led or supported projects in Nigeria, the Netherlands,
								and other leading energy innovation hubs across Europe and Africa. The team is led by Joshua Dauda,
								Director of Projects at CrossAfrique Hydrogen Ltd, who has over a decade of experience in finance,
								renewable energy project development, and system integration across Africa and Europe. His expertise
								spans large-scale EU-funded innovation and demonstration projects such as REFORMERS (€20M), where
								he coordinated the deployment of 12 assets—including hydrogen production systems, battery storage,
								and heat buffers—alongside their smart integration. In his role as project coordinator for NSH2V Ports
								(€3.5M), he facilitates the development of hydrogen hubs across four North Sea ports, working with a
								consortium of nine partners from six European countries. His portfolio also includes work on hydrogen
								mobility and grid-balancing solutions through research engagements with ENTRANCE (Netherlands) and
								TotalEnergies, focusing on the alignment of technical innovation with commercial viability.
							</p>
						</div>

						{/* Joshua Dauda Avatar Card */}
						<motion.div
							initial={{ opacity: 0, x: 20 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.6, delay: 0.2 }}
							viewport={{ once: true }}
							className="flex-shrink-0"
						>
							<div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg max-w-sm">
								<div className="text-center">
									<div className="relative w-32 h-32 mx-auto mb-4">
										<div className="w-full h-full rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center text-white text-3xl font-bold shadow-lg">
											JD
										</div>
									</div>
									<h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
										Joshua Dauda
									</h3>
									<p className="text-emerald-600 dark:text-emerald-400 font-medium mb-3">
										Director of Projects
									</p>
									<p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
										Leading renewable energy innovation across Africa and Europe
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
					</div>
				</motion.div>

				{/* Future team members placeholder */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.4 }}
					viewport={{ once: true }}
					className="text-center"
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
			</div>
		</section>
	);
};

export default LeadershipTeam;