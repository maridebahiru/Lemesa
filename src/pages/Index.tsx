import { Hero } from "@/components/ui/hero-1";
import AboutSection from "@/components/sections/AboutSection";
import ExpertiseSection from "@/components/sections/ExpertiseSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero 
        title="Build smarter tools for modern teams"
        subtitle="Streamline your workflow and boost productivity with intuitive solutions. Security, speed, and simplicity—all in one platform."
        eyebrow="Next-Gen Productivity"
        ctaLabel="Get Started"
        ctaHref="#about"
      />
      
      <div id="about">
        <AboutSection />
      </div>
      
      <ExpertiseSection />
    </div>
  );
};

export default Index;
