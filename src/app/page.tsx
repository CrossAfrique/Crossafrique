import CTASection from "./_components/cta-section";
import FeaturedProjects from "./_components/featured-projects";
import HeroSection from "./_components/hero-section";
import Introduction from "./_components/introduction";
import OurSolutions from "./_components/our-solutions";
import Partners from "./_components/partners";
import WhyEnergySystem from "./_components/why-energy-system";

export default function Home() {
	return (
		<>
			<HeroSection />
			<Introduction />
			<WhyEnergySystem />
			<OurSolutions />
			<FeaturedProjects />
			<Partners />
			<CTASection />
		</>
	);
}
