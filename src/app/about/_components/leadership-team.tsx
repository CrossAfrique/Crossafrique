"use client";

import { motion } from "motion/react";

const LeadershipTeam = () => {
	// const leaders = [
	// 	{
	// 		name: "Dr. Amara Nkosi",
	// 		title: "Chief Executive Officer",
	// 		bio: "With over 20 years of experience in energy infrastructure development across Africa, Dr. Nkosi leads our strategic vision and operations.",
	// 		image: "/images/team/amara-nkosi.jpg",
	// 		linkedin: "#",
	// 		twitter: "#",
	// 	},
	// 	{
	// 		name: "Dr. Sarah Kimani",
	// 		title: "Chief Technology Officer",
	// 		bio: "A renowned expert in hydrogen production technologies, Dr. Kimani oversees our technical innovation and project implementation.",
	// 		image: "/images/team/sarah-kimani.jpg",
	// 		linkedin: "#",
	// 		twitter: "#",
	// 	},
	// 	{
	// 		name: "Ibrahim Osei",
	// 		title: "Chief Financial Officer",
	// 		bio: "Ibrahim brings extensive experience in project finance and investment, ensuring our initiatives are financially sustainable and impactful.",
	// 		image: "/images/team/ibrahim-osei.jpg",
	// 		linkedin: "#",
	// 		twitter: "#",
	// 	},
	// 	{
	// 		name: "Fatima Diallo",
	// 		title: "Chief Operations Officer",
	// 		bio: "Fatima's background in large-scale infrastructure projects helps us deliver complex hydrogen initiatives efficiently across diverse African contexts.",
	// 		image: "/images/team/fatima-diallo.jpg",
	// 		linkedin: "#",
	// 		twitter: "#",
	// 	},
	// 	{
	// 		name: "Dr. Emmanuel Kwesi",
	// 		title: "Director of Research",
	// 		bio: "Leading our research efforts, Dr. Kwesi focuses on adapting hydrogen technologies to African conditions and developing innovative solutions.",
	// 		image: "/images/team/emmanuel-kwesi.jpg",
	// 		linkedin: "#",
	// 		twitter: "#",
	// 	},
	// 	{
	// 		name: "Chioma Okonkwo",
	// 		title: "Director of Partnerships",
	// 		bio: "Chioma builds and maintains our crucial relationships with governments, international organizations, and private sector partners.",
	// 		image: "/images/team/chioma-okonkwo.jpg",
	// 		linkedin: "#",
	// 		twitter: "#",
	// 	},
	// ];

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
					<h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
						Our Team of Experts
					</h2>
					<p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
						CrossAfrique’s technical and advisory team has led or supported projects in Nigeria, the Netherlands,
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
				</motion.div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{/* <motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						viewport={{ once: true }}
						className="col-span-full flex flex-col items-center justify-center bg-white dark:bg-gray-900 rounded-lg p-10 shadow-md"
					>
						<div className="text-center">
							<div className="mb-6 bg-emerald-100 dark:bg-emerald-900/30 p-4 rounded-full inline-block">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-12 w-12 text-emerald-600 dark:text-emerald-400"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<title>Founders</title>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
									/>
								</svg>
							</div>
							<h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
								Our Founders
							</h3>
							<p className="text-lg text-gray-700 dark:text-gray-300 mb-6 max-w-2xl">
								We&#39;re excited to introduce our visionary leadership team
								soon. Our founders bring decades of combined experience in
								renewable energy, infrastructure development, and sustainable
								business practices across Africa.
							</p>
							<div className="inline-block bg-emerald-50 dark:bg-emerald-900/20 px-4 py-2 rounded-md">
								<p className="text-emerald-700 dark:text-emerald-300 font-medium">
									Coming Soon
								</p>
							</div>
						</div>
					</motion.div> */}

					{/* {leaders.map((leader, index) => (
						<motion.div
							key={leader.name}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: index * 0.1 }}
							viewport={{ once: true }}
							className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
						>
							<div className="relative h-80 w-full">
								<Image
									src={leader.image}
									alt={leader.name}
									fill
									className="object-cover"
								/>
							</div>
							<div className="p-6">
								<h3 className="text-xl font-semibold mb-1 text-gray-900 dark:text-white">
									{leader.name}
								</h3>
								<p className="text-emerald-600 dark:text-emerald-400 font-medium mb-3">
									{leader.title}
								</p>
								<p className="text-gray-700 dark:text-gray-300 mb-4">
									{leader.bio}
								</p>
								<div className="flex space-x-3">
									<a
										href={leader.linkedin}
										className="text-gray-500 hover:text-emerald-600 dark:text-gray-400 dark:hover:text-emerald-400 transition-colors"
									>
										<Linkedin className="w-5 h-5" />
									</a>
									<a
										href={leader.twitter}
										className="text-gray-500 hover:text-emerald-600 dark:text-gray-400 dark:hover:text-emerald-400 transition-colors"
									>
										<Twitter className="w-5 h-5" />
									</a>
								</div>
							</div>
						</motion.div>
					))} */}
				</div>
			</div>
		</section>
	);
};

export default LeadershipTeam;
