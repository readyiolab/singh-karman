import { Helmet } from 'react-helmet-async';
import HeroSection from "@/components/HeroSection";
import AboutPreview from "@/components/AboutPreview";
import ServicesSection from "@/components/ServicesSection";
import WhyWorkWithMe from "@/components/WhyWorkWithMe";
import TestimonialsSection from "@/components/TestimonialsSection";
import ResourcesSection from "@/components/ResourcesSection";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Karman Singh Financial Services - Empowering Your Financial Future</title>
        <meta
          name="description"
          content="Discover Karman Singh Financial Services, your partner in building wealth, protecting assets, and creating a lasting financial legacy with tailored strategies."
        />
        <meta
          name="keywords"
          content="financial planning, wealth building, life insurance, retirement strategies, college savings, debt elimination, Karman Singh, financial services"
        />
        <meta name="author" content="Karman Singh Financial Services" />
        <meta property="og:title" content="Karman Singh Financial Services - Empowering Your Financial Future" />
        <meta
          property="og:description"
          content="Explore personalized financial solutions with Karman Singh Financial Services to achieve wealth, security, and peace of mind for you and your family."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.karmansingh.com/" />
        <meta property="og:image" content="https://www.karmansingh.com/hero-image.webp" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Karman Singh Financial Services - Empowering Your Financial Future" />
        <meta
          name="twitter:description"
          content="Start your journey to financial freedom with Karman Singh Financial Services. Discover our expert strategies for wealth creation and legacy planning."
        />
        <meta name="twitter:image" content="https://www.karmansingh.com/hero-image.webp" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <HeroSection />
        <AboutPreview />
        <ServicesSection />
        <WhyWorkWithMe />
        <TestimonialsSection />
        <ResourcesSection />
      </div>
    </>
  );
};

export default Index;