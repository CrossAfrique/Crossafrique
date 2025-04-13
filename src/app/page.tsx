import CTASection from "./_components/landing-page/cta-section";
import FeaturedProjects from "./_components/landing-page/featured-projects";
import HeroSection from "./_components/landing-page/hero-section";
import Introduction from "./_components/landing-page/introduction";
import OurSolutions from "./_components/landing-page/our-solutions";
import Partners from "./_components/landing-page/partners";
import WhyEnergySystem from "./_components/landing-page/why-energy-system";

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
