import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "../components/shared/footer";
import Navbar from "../components/shared/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Crossafrique Hydrogen - Fueling Africa's Growth with Clean Hydrogen",
  description: "Crossafrique Hydrogen is dedicated to developing sustainable hydrogen solutions across the African continent.",
  manifest: "/favicon_io/site.webmanifest", // Adds <link rel="manifest" href="/favicon_io/site.webmanifest">
  icons: {
    icon: [
      // Browser favicons (PNG versions for better compatibility)
      { url: "/favicon_io/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon_io/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      // Optional: If you have a favicon.ico in the folder, add it as a fallback
      // { url: "/favicon_io/favicon.ico", type: "image/x-icon" },
    ],
    apple: [
      // Apple touch icon
      { url: "/favicon_io/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    // Optional: If you have other sizes or shortcuts, add them here (e.g., for Android)
    // other: { rel: "apple-touch-icon-precomposed", url: "/favicon_io/apple-touch-icon.png" },
  },
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
