import { HeroGeometric } from "@/components/ui/shape-landing-hero";
import AboutSection from "@/components/sections/AboutSection";
import ExpertiseSection from "@/components/sections/ExpertiseSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ContactSection from "@/components/sections/ContactSection";
import FooterSection from "@/components/ui/footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroGeometric 
        badge="IT Professional"
        title1="Lemesa Yadeta"
        title2="blending experience, technology, and creativity to drive innovation."
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
