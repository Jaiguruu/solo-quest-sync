
import { HeroSection } from "@/components/hero-section";
import { FeaturesSection } from "@/components/features-section";
import { HowItWorksSection } from "@/components/how-it-works-section";
import { CTASection } from "@/components/cta-section";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-solosync-black">
      <Navbar />
      
      <main>
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <CTASection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
