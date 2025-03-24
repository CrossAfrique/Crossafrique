import AboutHero from "@/app/_components/about/hero-section";
import OurStory from "@/app/_components/about/our-story";
import LeadershipTeam from "@/app/_components/about/leadership-team";
import Values from "@/app/_components/about/values";
import CTASection from "@/app/_components/landing-page/cta-section";

export const metadata = {
  title: "About Us | Crossafrique Hydrogen",
  description: "Learn about Crossafrique Hydrogen's mission to transform Africa's energy landscape through innovative hydrogen solutions.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <OurStory />
      <Values />
      <LeadershipTeam />
      <CTASection />
    </>
  );
}
