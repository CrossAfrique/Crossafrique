"use client";

import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import CrossAfriqueImg from "../../_assets/images/crossafrique.svg";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const pathname = usePathname();

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 10);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const isActive = (href: string) => {
		// For exact matches
		if (href === pathname) return true;

		// For nested routes (e.g., /solutions/[solutionId])
		// This will highlight the parent route when on a child route
		if (href !== "/" && pathname.startsWith(href)) return true;

		return false;
	};

	const navLinks = [
		{ href: "/", label: "Home" },
		{ href: "/blog", label: "Blog" },
		{ href: "/about", label: "About" },
		{ href: "/solutions", label: "Solutions" },
		{ href: "/projects", label: "Projects" },
		{ href: "/contact", label: "Contact" },
	];

	return (
		<header
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
				scrolled
					? "bg-white dark:bg-gray-900/90 backdrop-blur-md shadow-md"
					: "bg-transparent"
			}`}
		>
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-16 md:h-20">
					<Link href="/" className="flex items-center relative -left-8">
						<div className=" clip-logo">
							<Image
								src={CrossAfriqueImg}
								alt="Crossarique"
								width={100}
								height={100}
								className=""
							/>
						</div>
					</Link>

					{/* Desktop Navigation */}
					<nav className="hidden md:flex items-center space-x-8">
						{navLinks.map((link) => (
							<Link
								key={link.href}
								href={link.href}
								className={`${
									isActive(link.href)
										? "text-emerald-600 dark:text-emerald-400 font-medium"
										: "text-gray-700 dark:text-gray-200 hover:text-emerald-600 dark:hover:text-emerald-400"
								} transition-colors`}
							>
								{link.label}
							</Link>
						))}
						<Button className="bg-emerald-600 hover:bg-emerald-700">
							Get Started
						</Button>
					</nav>

					{/* Mobile Navigation Toggle */}
					<Button
						variant="ghost"
						size="fit"
						className="md:hidden text-gray-700 dark:text-gray-200"
						onClick={() => setIsOpen(!isOpen)}
					>
						{isOpen ? <X className="size-6" /> : <Menu className="size-6" />}
					</Button>
				</div>
			</div>

			{/* Mobile Navigation Menu */}
			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ opacity: 0, height: 0 }}
						animate={{ opacity: 1, height: "auto" }}
						exit={{ opacity: 0, height: 0 }}
						className="md:hidden bg-white dark:bg-gray-900 shadow-lg"
					>
						<div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
							{navLinks.map((link) => (
								<Link
									key={link.href}
									href={link.href}
									className={`${
										isActive(link.href)
											? "text-emerald-600 dark:text-emerald-400 font-medium"
											: "text-gray-700 dark:text-gray-200 hover:text-emerald-600 dark:hover:text-emerald-400"
									} transition-colors py-2`}
									onClick={() => setIsOpen(false)}
								>
									{link.label}
								</Link>
							))}
							<Button className="bg-emerald-600 hover:bg-emerald-700 w-full">
								Get Started
							</Button>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</header>
	);
};

export default Navbar;
