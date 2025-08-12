import Navigation from "@/components/layout/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutPreview from "@/components/AboutPreview";
import ServicesSection from "@/components/ServicesSection";
import WhyWorkWithMe from "@/components/WhyWorkWithMe";
import TestimonialsSection from "@/components/TestimonialsSection";
import ResourcesSection from "@/components/ResourcesSection";
import CallToActionSection from "@/components/CallToActionSection";
import Footer from "@/components/layout/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      
      <HeroSection />
      <AboutPreview />
      <ServicesSection />
      <WhyWorkWithMe />
      <TestimonialsSection />
      {/* <ResourcesSection /> */}
      {/* <CallToActionSection /> */}
     
    </div>
  );
};

export default Index;
