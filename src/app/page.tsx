import HeroSection from '../components/sections/HeroSection';
import OutcomesSection from '../components/sections/OutcomesSection';
import ServicePillars from '../components/sections/ServicePillars';
import ImpactSection from '../components/sections/ImpactSection';
import WhyUsSection from '../components/sections/WhyUsSection';
import PortfolioSection from '../components/sections/PortfolioSection';
import ProcessSection from '../components/sections/ProcessSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import FAQSection from '../components/sections/FAQSection';
import FinalCTA from '../components/sections/FinalCTA';
import TechStackMarquee from '../components/TechStackMarquee';

export default function Home() {
  return (
    <>
      <HeroSection />
      <TechStackMarquee />
      <OutcomesSection />
      <ServicePillars />
      <ImpactSection />
      <WhyUsSection />
      <PortfolioSection />
      <ProcessSection />
      <TestimonialsSection />
      <FAQSection />
      <FinalCTA />
    </>
  );
}
