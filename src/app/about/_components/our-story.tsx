"use client";

import { motion } from "motion/react";

const OurStory = () => {
	return (
		<section className="py-20 bg-white dark:bg-gray-900">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<div className="grid grid-cols-1">
					<motion.div
						initial={{ opacity: 0, x: -30 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8 }}
						viewport={{ once: true }}
					>
						<h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
							Our Story
						</h2>

						<p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
							CrossAfrique Hydrogen was born from the recognition that
							Africa—and the broader Global South—requires energy solutions that
							are systemic, financially sustainable, and future-ready. Our
							founding team brought together deep experience in clean energy
							innovation, infrastructure development, and project finance to
							build a platform that bridges local needs with global expertise.
						</p>

						<p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
							We work across sectors—from research hubs and industrial zones to
							port areas—to design integrated systems that go beyond pilots and
							turn ideas into operational impact.
						</p>
					</motion.div>

					{/* <motion.div
						initial={{ opacity: 0, x: 30 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8 }}
						viewport={{ once: true }}
						className="relative h-[400px] rounded-lg overflow-hidden shadow-xl"
					>
						<Image
							src="/images/about/our-story.jpg"
							alt="Crossafrique Hydrogen team"
							fill
							className="object-cover"
						/>
					</motion.div> */}
				</div>

				<div className="mt-20">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						<div className="bg-emerald-50 dark:bg-emerald-900/20 p-8 rounded-lg border border-emerald-100 dark:border-emerald-800">
							<h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
								Our Mission
							</h3>
							<p className="text-gray-700 dark:text-gray-300">
								To design, develop, and finance clean energy systems that
								integrate hydrogen and other energy carriers into cohesive,
								scalable solutions—delivering innovation, financial viability,
								and sustainable impact.
							</p>
						</div>

						<div className="bg-emerald-50 dark:bg-emerald-900/20 p-8 rounded-lg border border-emerald-100 dark:border-emerald-800">
							<h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
								Our Vision
							</h3>
							<p className="text-gray-700 dark:text-gray-300">
								A future powered by connected clean energy ecosystems—where
								hydrogen plays a strategic role in supporting climate goals,
								industrial development, and inclusive prosperity.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default OurStory;
