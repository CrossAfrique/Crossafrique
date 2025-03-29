import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./_components/shared/footer";
import Navbar from "./_components/shared/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Crossafrique Hydrogen - Fueling Africa's Growth with Clean Hydrogen",
	description:
		"Crossafrique Hydrogen is dedicated to developing sustainable hydrogen solutions across the African continent.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Navbar />
				<main className="min-h-screen pt-16 md:pt-20">{children}</main>
				<Footer />
			</body>
		</html>
	);
}
