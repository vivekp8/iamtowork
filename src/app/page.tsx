import type { Metadata } from 'next';
import HeroSection from '@/components/sections/HeroSection';
import OutcomesSection from '@/components/sections/OutcomesSection';
import ServicePillars from '@/components/sections/ServicePillars';
import FinalCTA from '@/components/sections/FinalCTA';

export const metadata: Metadata = {
  title: 'I Am To Work | AI Websites, Automation & Growth Solutions',
  description:
    'Build high-converting websites and eliminate manual tasks with custom AI workflows, n8n automations, and growth systems tailored for modern businesses.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'I Am To Work | AI Websites, Automation & Growth Solutions',
    description:
      'Build high-converting websites and eliminate manual tasks with custom AI workflows, n8n automations, and growth systems tailored for modern businesses.',
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
      <FinalCTA />
    </>
  );
}
