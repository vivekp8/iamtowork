import type { Metadata } from 'next';
import Link from 'next/link';
import { WHY_US, PROCESS_STEPS } from '@/lib/config';
import TechSection from '@/components/sections/TechSection';
import SchemaMarkup from '@/components/SchemaMarkup';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'About I Am To Work | Practical AI & Web Solutions',
  description:
    'Learn how I Am To Work helps businesses build modern websites, automate workflows, and implement practical AI solutions that deliver real results.',
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About I Am To Work | Practical AI & Web Solutions',
    description:
      'Learn how I Am To Work helps businesses build modern websites, automate workflows, and implement practical AI solutions that deliver real results.',
    url: 'https://www.iamtowork.com/about',
  },
};

const aboutSchema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'About I Am To Work',
  description:
    'An AI-powered services agency helping businesses build modern websites, automate workflows, and implement practical AI solutions.',
  url: 'https://www.iamtowork.com/about',
  mainEntity: {
    '@type': 'Organization',
    name: 'I Am To Work',
    url: 'https://www.iamtowork.com',
  },
};

const HOW_WE_WORK_POINTS = [
  {
    title: 'AI-First Execution',
    desc: 'We use modern AI tools where they genuinely improve quality, speed, and outcomes — not as a marketing gimmick, but as our standard working method.',
  },
  {
    title: 'Business-Focused Approach',
    desc: 'Every project starts with your actual business goal. We build what you need to solve friction and drive revenue, not what is technically complex.',
  },
  {
    title: 'Modern Technology',
    desc: 'We work with current web frameworks and AI automation tools — Next.js, n8n, Supabase, Claude — delivering fast, clean, and reliable systems.',
  },
  {
    title: 'Flexible Solutions',
    desc: 'We select the right technology for your exact requirements rather than forcing your business onto rigid, one-size-fits-all platforms.',
  },
  {
    title: 'Built to Grow',
    desc: 'We design digital solutions with future expansion in mind so your software and workflows continue to serve you as you scale.',
  },
  {
    title: 'Transparent Process',
    desc: 'Clear communication, honest timelines, and no surprises. You always know what is happening, why, and what to expect next.',
  },
];

export default function AboutPage() {
  return (
    <>
      <SchemaMarkup data={aboutSchema} />
      <div className={styles.page}>
        <div className="container">
          <header className={styles.header}>
            <span className={styles.eyebrow}>About Us</span>
            <h1 className={styles.title}>Practical AI & Web Solutions for Modern Businesses</h1>
            <p className={styles.sub}>
              We help businesses build modern websites, automate workflows, and implement AI tools that deliver real results.
            </p>
          </header>

          {/* What We Believe */}
          <section className={styles.mission} aria-labelledby="mission-title">
            <h2 id="mission-title" className={styles.missionTitle}>What We Believe</h2>
            <p>
              AI has changed what small and medium businesses can achieve. Most companies are still not using these tools effectively. We exist to close that gap with practical, results-focused solutions.
            </p>
          </section>

          {/* How We Work */}
          <section className={styles.sectionBlock} aria-labelledby="principles-title">
            <div className={styles.sectionHeader}>
              <span className={styles.sectionEyebrow}>Our Principles</span>
              <h2 id="principles-title" className={styles.sectionTitle}>How We Work</h2>
              <p className={styles.sectionSub}>
                Real operating principles that guide every build and client collaboration.
              </p>
            </div>

            <div className={styles.principlesGrid}>
              {HOW_WE_WORK_POINTS.map((item) => (
                <div key={item.title} className={styles.principleCard}>
                  <div className={styles.dot} />
                  <h3 className={styles.principleTitle}>{item.title}</h3>
                  <p className={styles.principleDesc}>{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Our Process */}
          <section className={styles.sectionBlock} aria-labelledby="process-title">
            <div className={styles.sectionHeader}>
              <span className={styles.sectionEyebrow}>Methodology</span>
              <h2 id="process-title" className={styles.sectionTitle}>Our Process</h2>
              <p className={styles.sectionSub}>
                A structured, step-by-step approach to delivering high-impact solutions.
              </p>
            </div>

            <div className={styles.approachGrid}>
              {PROCESS_STEPS.map((step) => (
                <div key={step.number} className={styles.approachCard}>
                  <div className={styles.approachNumber}>{step.number}</div>
                  <h3 className={styles.cardTitle}>{step.title}</h3>
                  <p className={styles.cardDesc}>{step.description}</p>
                </div>
              ))}
            </div>
          </section>

          <TechSection />

          {/* Final CTA */}
          <section className={styles.cta} aria-labelledby="about-cta-title">
            <h2 id="about-cta-title" className={styles.ctaTitle}>Let’s Work Together</h2>
            <p className={styles.ctaDesc}>
              Tell us what you want to build, automate, or improve. We&apos;ll help you find the most practical solution.
            </p>
            <div className={styles.ctaActions}>
              <Link href="/contact" className={styles.ctaBtnPrimary}>Book a Free Consultation</Link>
              <Link href="/services" className={styles.ctaBtnOutline}>Explore All Services</Link>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
