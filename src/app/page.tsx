import type { Metadata } from 'next';
import HeroSection from '@/components/sections/HeroSection';
import OutcomesSection from '@/components/sections/OutcomesSection';
import ServicePillars from '@/components/sections/ServicePillars';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import FinalCTA from '@/components/sections/FinalCTA';

export const metadata: Metadata = {
  title: 'AI Websites & Business Automation Agency | I Am To Work',
  description:
    'We build custom AI websites, n8n & Make automations, and growth systems that help businesses save time and scale. Book a free consultation today.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'AI Websites & Business Automation Agency | I Am To Work',
    description:
      'We build custom AI websites, n8n & Make automations, and growth systems that help businesses save time and scale. Book a free consultation today.',
    url: 'https://www.iamtowork.com',
    type: 'website',
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <OutcomesSection />
      <ServicePillars />
      <TestimonialsSection />
      <FinalCTA />
    </>
  );
}
