"use client";

import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import AFDBLogo from "./_assets/afdb-logo.png";
import GHALogo from "./_assets/gha-logo.jpg";
import GreenEnergyLogo from "./_assets/green-energy-logo.jpg";
import KenyaPowerLogo from "./_assets/kenya-power-logo.webp";
import NNPCLogo from "./_assets/nnpc-logo.png";
import SAEnergyLogo from "./_assets/sa-energy-logo.png";

const Partners = () => {
	const partners = [
		{
			name: "African Development Bank",
			logo: AFDBLogo,
		},
		{
			name: "Green Energy Solutions",
			logo: GreenEnergyLogo,
		},
		{ name: "Kenya Power", logo: KenyaPowerLogo },
		{
			name: "Nigerian National Petroleum Corporation",
			logo: NNPCLogo,
		},
		{
			name: "South African Energy Department",
			logo: SAEnergyLogo,
		},
		{ name: "Global Hydrogen Alliance", logo: GHALogo },
	];

	return (
		<section className="py-20 bg-white dark:bg-gray-900">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
					className="text-center mb-16"
				>
					<h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
						Our Partners & Network
					</h2>
					<p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
						We work alongside technical partners, universities, governments, and
						development institutions to build practical, future-ready energy
						systems. Collaboration is at the heart of our mission.
					</p>
				</motion.div>

				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
					className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12"
				>
					{partners.map((partner, index) => (
						<motion.div
							key={partner.name}
							initial={{ opacity: 0, scale: 0.9 }}
							whileInView={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							viewport={{ once: true }}
							className="flex items-center justify-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg h-24"
						>
							<Image
								src={partner.logo}
								alt={partner.name}
								width={120}
								height={60}
								className="max-h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
							/>
						</motion.div>
					))}
				</motion.div>

				<div className="text-center">
					<Button asChild className="bg-emerald-600 hover:bg-emerald-700">
						<Link href="/contact">Become a Partner</Link>
					</Button>
				</div>
			</div>
		</section>
	);
};

export default Partners;
