import {
	Facebook,
	Instagram,
	Linkedin,
	Mail,
	MapPin,
	Phone,
	Twitter,
} from "lucide-react";
import Link from "next/link";

const SOCIALS = [
	{
		label: "Facebook",
		href: "https://www.facebook.com/",
		icon: Facebook,
	},
	{
		label: "Twitter",
		href: "https://twitter.com/",
		icon: Twitter,
	},
	{
		label: "LinkedIn",
		href: "https://www.linkedin.com/company/crossafrique-hydrogen/about/?viewAsMember=true",
		icon: Linkedin,
	},
	{
		label: "Instagram",
		href: "https://www.instagram.com/",
		icon: Instagram,
	},
];

const QUICK_LINKS = [
	{
		label: "Home",
		href: "/",
	},
	{
		label: "About Us",
		href: "/about",
	},
	{
		label: "Blog & Publications",
		href: "/blog",
	},
	{
		label: "Contact Us",
		href: "/contact",
	},
];

const SOLUTIONS = [
	{
		label: "Integrated Energy Hubs",
		href: "/solutions/integrated-energy-hubs",
	},
	{
		label: "Financial Structuring",
		href: "/solutions/financial-structuring",
	},
	{
		label: "Innovation & Research",
		href: "/solutions/applied-research-innovation",
	},
	{
		label: "System Architecture & Smart Control",
		href: "/solutions/system-architecture-and-smart-control",
	},
];

const CONTACT_INFO = [
	{
		label: "Email",
		href: "mailto:info@crossafriquehydrogen.com",
		icon: Mail,
	},
	{
		label: "Nigeria: 6, Adenuga Street, Harmony Estate, Gbagada, Lagos",
		href: "https://www.google.com/maps/search/6+Adenuga+Street+Harmony+Estate+Gbagada+Lagos",
		icon: MapPin,
	},
];

const PARTNERS = [
	{ name: "CU", file: "/partner/cu.svg", href: "#" },
	{ name: "Afe", file: "/partner/Afe.svg", href: "#" },
	{ name: "ahf", file: "/partner/ahf.svg", href: "#" },
	{ name: "hyvault", file: "/partner/hyvault.svg", href: "#" },
	{ name: "Daramanihot", file: "/partner/Daramanihot.svg", href: "#" },
	{ name: "soventix", file: "/partner/soventix.svg", href: "#" },
	{ name: "Hydrogem", file: "/partner/Hydrogem.svg", href: "#" },
	{ name: "Taatisolar", file: "/partner/Taatisolar.svg", href: "#" },
	{ name: "Solarcentric", file: "/partner/Solarcentric.svg", href: "#" },
	{ name: "Arboreta", file: "/partner/Arboreta.svg", href: "#" },
];

const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="bg-gray-900 text-white pt-16 pb-8">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
					{/* Company Info */}
					<div>
						<h3 className="text-xl font-bold mb-4">🌍 Crossafrique Hydrogen</h3>
						<p className="text-gray-400 mb-4">
							We design and finance innovative energy hubs where hydrogen,
							solar, storage, and smart technologies work together to deliver
							real-world impact.
						</p>
						<div className="flex space-x-4">
							{SOCIALS.map((social) => (
								<Link
									key={social.label}
									href={social.href}
									className="text-gray-400 hover:text-emerald-500 transition-colors"
								>
									<social.icon size={20} />
								</Link>
							))}
						</div>
					</div>

					{/* Quick Links */}
					<div>
						<h3 className="text-lg font-semibold mb-4">Quick Links</h3>
						<ul className="space-y-2">
							{QUICK_LINKS.map((link) => (
								<li key={link.label}>
									<Link
										href={link.href}
										className="text-gray-400 hover:text-emerald-500 transition-colors"
									>
										{link.label}
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* Services */}
					<div>
						<h3 className="text-lg font-semibold mb-4">Our Solutions</h3>
						<ul className="space-y-2">
							{SOLUTIONS.map((solution) => (
								<li key={solution.label}>
									<Link
										href={solution.href}
										className="text-gray-400 hover:text-emerald-500 transition-colors"
									>
										{solution.label}
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* Contact Info */}
					<div>
						<h3 className="text-lg font-semibold mb-4">Contact Us</h3>
						<ul className="space-y-3">
							{CONTACT_INFO.map((contact) => (
								<li key={contact.label} className="flex items-center">
									<contact.icon
										size={20}
										className="text-emerald-500 mr-2 flex-shrink-0"
									/>
									<Link
										href={contact.href}
										className="text-gray-400 hover:text-emerald-500 transition-colors"
									>
										{contact.label}
									</Link>
								</li>
							))}
						</ul>
					</div>
				</div>

				{/* Partners row */}
				<div className="mt-10">
					<h3 className="text-lg font-semibold mb-4 text-center">Partners</h3>
					<div className="flex flex-wrap items-center justify-center gap-6">
						{PARTNERS.map((p) => (
							<a
								key={p.name}
								href={p.href}
								className="inline-flex items-center"
								aria-label={`${p.name} Logo Link`}
							>
								<img
									src={p.file}
									alt={`${p.name} Logo`}
									className="h-12 md:h-14 object-contain filter grayscale hover:grayscale-0 transition duration-200"
									style={{ height: 56 }}
								/>
							</a>
						))}
					</div>
				</div>

				<div className="border-t border-gray-800 mt-12 pt-8">
					<p className="text-gray-500 text-center">
						© {currentYear} Crossafrique Hydrogen. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
