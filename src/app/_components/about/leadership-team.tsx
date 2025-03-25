"use client";

import { Linkedin, Twitter } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";

const LeadershipTeam = () => {
	const leaders = [
		{
			name: "Dr. Amara Nkosi",
			title: "Chief Executive Officer",
			bio: "With over 20 years of experience in energy infrastructure development across Africa, Dr. Nkosi leads our strategic vision and operations.",
			image: "/images/team/amara-nkosi.jpg",
			linkedin: "#",
			twitter: "#",
		},
		{
			name: "Dr. Sarah Kimani",
			title: "Chief Technology Officer",
			bio: "A renowned expert in hydrogen production technologies, Dr. Kimani oversees our technical innovation and project implementation.",
			image: "/images/team/sarah-kimani.jpg",
			linkedin: "#",
			twitter: "#",
		},
		{
			name: "Ibrahim Osei",
			title: "Chief Financial Officer",
			bio: "Ibrahim brings extensive experience in project finance and investment, ensuring our initiatives are financially sustainable and impactful.",
			image: "/images/team/ibrahim-osei.jpg",
			linkedin: "#",
			twitter: "#",
		},
		{
			name: "Fatima Diallo",
			title: "Chief Operations Officer",
			bio: "Fatima's background in large-scale infrastructure projects helps us deliver complex hydrogen initiatives efficiently across diverse African contexts.",
			image: "/images/team/fatima-diallo.jpg",
			linkedin: "#",
			twitter: "#",
		},
		{
			name: "Dr. Emmanuel Kwesi",
			title: "Director of Research",
			bio: "Leading our research efforts, Dr. Kwesi focuses on adapting hydrogen technologies to African conditions and developing innovative solutions.",
			image: "/images/team/emmanuel-kwesi.jpg",
			linkedin: "#",
			twitter: "#",
		},
		{
			name: "Chioma Okonkwo",
			title: "Director of Partnerships",
			bio: "Chioma builds and maintains our crucial relationships with governments, international organizations, and private sector partners.",
			image: "/images/team/chioma-okonkwo.jpg",
			linkedin: "#",
			twitter: "#",
		},
	];

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
						Our Leadership Team
					</h2>
					<p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
						Meet the experienced professionals guiding Crossafrique
						Hydrogen&#39;s mission to transform Africa&#39;s energy landscape.
					</p>
				</motion.div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{leaders.map((leader, index) => (
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
					))}
				</div>
			</div>
		</section>
	);
};

export default LeadershipTeam;
