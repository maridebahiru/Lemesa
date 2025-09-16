import { Hero } from "@/components/ui/hero-1";
import AboutSection from "@/components/sections/AboutSection";
import ExpertiseSection from "@/components/sections/ExpertiseSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ContactSection from "@/components/sections/ContactSection";
import FooterSection from "@/components/ui/footer";

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
      
      <div id="testimonials">
        <TestimonialsSection />
      </div>
      
      <div id="contact">
        <ContactSection />
      </div>
      
      <FooterSection />
    </div>
  );
};

export default Index;
