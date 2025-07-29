import CTASection from "@/app/_components/cta-section";
import AboutHero from "@/app/about/_components/hero-section";
import LeadershipTeam from "@/app/about/_components/leadership-team";
import OurStory from "@/app/about/_components/our-story";
import Values from "@/app/about/_components/values";

export const metadata = {
	title: "About Us | Crossafrique Hydrogen",
	description:
		"Learn about Crossafrique Hydrogen's mission to transform Africa's energy landscape through innovative hydrogen solutions.",
};

export default function AboutPage() {
	return (
		<>
			<AboutHero />
			<LeadershipTeam />
			{/* <OurStory /> */}
			<Values />
			<CTASection />
		</>
	);
}
