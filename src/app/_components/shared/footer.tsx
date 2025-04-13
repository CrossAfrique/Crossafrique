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
		href: "https://www.linkedin.com/company/",
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
		href: "/solutions/innovation-research",
	},
	{
		label: "System Architecture & Smart Control",
		href: "/solutions/system-architecture-smart-control",
	},
];

const CONTACT_INFO = [
	{
		label: "Email",
		href: "mailto:info@crossafriquehydrogen.com",
		icon: Mail,
	},
	{
		label: "Phone",
		href: "tel:+254700000000",
		icon: Phone,
	},
	{
		label: "Address",
		href: "https://www.google.com/maps/place/Crossafrique+Hydrogen/@-1.2833314,36.821934,15z/data=!4m6!3m5!1s0x0:0x4a152e4064d87e1c!8m2!3d-1.2833314!4d36.821934!16s%2Fg%2F11c2970_80?entry=ttu",
		icon: MapPin,
	},
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
