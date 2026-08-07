import type { Metadata } from 'next';
import HeroSection from '@/components/sections/HeroSection';
import OutcomesSection from '@/components/sections/OutcomesSection';
import ServicePillars from '@/components/sections/ServicePillars';
import FinalCTA from '@/components/sections/FinalCTA';

export const metadata: Metadata = {
  title: 'I Am To Work | AI Websites, Automation & Business Solutions',
  description:
    'I Am To Work helps businesses build modern websites, automate repetitive workflows, create better content, and implement practical AI solutions.',
  openGraph: {
    title: 'I Am To Work | Build Faster. Automate Smarter. Grow with AI.',
    description:
      'Premium AI solutions to help businesses build websites, automate workflows, create content and implement practical AI.',
    url: 'https://iamtowork.com',
    type: 'website',
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <OutcomesSection />
      <ServicePillars />
      <FinalCTA />
    </>
  );
}
