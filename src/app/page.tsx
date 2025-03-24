import HeroSection from "./_components/landing-page/hero-section";
import Introduction from "./_components/landing-page/introduction";
import WhyHydrogen from "./_components/landing-page/why-hydrogen";
import OurSolutions from "./_components/landing-page/our-solutions";
import FeaturedProjects from "./_components/landing-page/featured-projects";
import Partners from "./_components/landing-page/partners";
import CTASection from "./_components/landing-page/cta-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Introduction />
      <WhyHydrogen />
      <OurSolutions />
      <FeaturedProjects />
      <Partners />
      <CTASection />
    </>
  );
}
