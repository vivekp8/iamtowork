import type { Metadata } from 'next';
import Link from 'next/link';
import { WHY_US } from '@/lib/config';
import ProcessSection from '@/components/sections/ProcessSection';
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

const WHO_WE_HELP = [
  {
    icon: '🚀',
    title: 'Solo Founders & Consultants',
    desc: 'You wear every hat and spend hours every week on invoicing, calendar ping-pong, and manual follow-ups.',
    deliverables: [
      'High-converting authority portfolio',
      'Automated client onboarding & bookings',
      'Hands-free lead routing',
    ],
  },
  {
    icon: '📈',
    title: 'Growing Small & Medium Businesses',
    desc: 'You have paying customers and steady operations, but your team is bogged down by manual data entry and disjointed apps.',
    deliverables: [
      'Multi-app n8n/Make automation pipelines',
      'Automated CRM & spreadsheet synchronization',
      'AI marketing & lead nurture engines',
    ],
  },
  {
    icon: '🏢',
    title: 'Service & Local Businesses',
    desc: 'You need an ultra-fast website that ranks on Google and turns local inquiries into booked appointments immediately.',
    deliverables: [
      'Modern, mobile-first Next.js web application',
      'Instant WhatsApp & SMS lead notification triggers',
      'Zero monthly builder lock-in',
    ],
  },
];

const APPROACH_STEPS = [
  {
    number: '01',
    title: 'Problem-First, Not Tech-First',
    desc: 'We don&apos;t build technology just because it&apos;s trendy. Every line of code and automation step must solve a verified business friction point.',
  },
  {
    number: '02',
    title: 'Lean, Production-Grade Stack',
    desc: 'We build with modern frameworks like Next.js, n8n, Supabase, and Claude — fast to deploy, secure, and completely free of expensive proprietary lock-in.',
  },
  {
    number: '03',
    title: 'Human in the Loop',
    desc: 'AI handles speed and repetitive execution, while human judgment ensures branding quality, tone, and logical edge cases are 100% sound.',
  },
  {
    number: '04',
    title: 'Complete Client Ownership',
    desc: 'You own all of your code, workflows, accounts, and data. We hand over the keys with full documentation so you are never held hostage.',
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
            <h1 className={styles.title}>Practical AI & Web Engineering for Modern Businesses</h1>
            <p className={styles.sub}>
              We help founders and growing teams eliminate operational friction, build lightning-fast web assets, and deploy AI workflows that produce measurable ROI.
            </p>
          </header>

          {/* What We Believe */}
          <section className={styles.mission} aria-labelledby="mission-title">
            <h2 id="mission-title" className={styles.missionTitle}>What We Believe</h2>
            <p>
              AI tools have fundamentally transformed how fast high-quality software and automated systems can be built. Yet most businesses are either overwhelmed by technical jargon or stuck with generic, unusable AI wrappers.
            </p>
            <p>
              <strong>We do not sell AI hype.</strong> We use AI as a practical execution tool to deliver real work — faster, cleaner, and at a quality level that previously required a dedicated engineering department.
            </p>
            <p>
              Whether it&apos;s building a lightning-fast Next.js website, connecting your CRM to WhatsApp alerts via n8n, or creating an automated content engine, our focus is always the same: saving you time and growing your revenue.
            </p>
          </section>

          {/* Who We Help */}
          <section className={styles.sectionBlock} aria-labelledby="who-heading">
            <div className={styles.sectionHeader}>
              <span className={styles.sectionEyebrow}>Audience Focus</span>
              <h2 id="who-heading" className={styles.sectionTitle}>Who We Help</h2>
              <p className={styles.sectionSub}>
                Our solutions are custom tailored for businesses that value speed, clarity, and practical execution.
              </p>
            </div>

            <div className={styles.threeGrid}>
              {WHO_WE_HELP.map((item) => (
                <div key={item.title} className={styles.card}>
                  <div className={styles.cardIcon}>{item.icon}</div>
                  <h3 className={styles.cardTitle}>{item.title}</h3>
                  <p className={styles.cardDesc}>{item.desc}</p>
                  <ul className={styles.cardList}>
                    {item.deliverables.map((del) => (
                      <li key={del}>
                        <span>✓</span> {del}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Our Approach */}
          <section className={styles.sectionBlock} aria-labelledby="approach-heading">
            <div className={styles.sectionHeader}>
              <span className={styles.sectionEyebrow}>Methodology</span>
              <h2 id="approach-heading" className={styles.sectionTitle}>Our Approach</h2>
              <p className={styles.sectionSub}>
                How we deliver high-impact results without the fluff, scope creep, or bureaucratic delays.
              </p>
            </div>

            <div className={styles.approachGrid}>
              {APPROACH_STEPS.map((step) => (
                <div key={step.number} className={styles.approachCard}>
                  <div className={styles.approachNumber}>{step.number}</div>
                  <h3 className={styles.cardTitle}>{step.title}</h3>
                  <p className={styles.cardDesc}>{step.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Operating Values */}
          <section className={styles.sectionBlock} aria-labelledby="principles-title">
            <div className={styles.sectionHeader}>
              <span className={styles.sectionEyebrow}>Core Values</span>
              <h2 id="principles-title" className={styles.sectionTitle}>How We Think About Every Project</h2>
              <p className={styles.sectionSub}>
                Honest operating standards that guide every sprint, build, and client relationship.
              </p>
            </div>

            <div className={styles.principlesGrid}>
              {WHY_US.map((item) => (
                <div key={item.title} className={styles.principleCard}>
                  <div className={styles.dot} />
                  <h3 className={styles.principleTitle}>{item.title}</h3>
                  <p className={styles.principleDesc}>{item.description}</p>
                </div>
              ))}
            </div>
          </section>

          <ProcessSection />
          <TechSection />

          {/* Final CTA */}
          <section className={styles.cta} aria-labelledby="about-cta-title">
            <h2 id="about-cta-title" className={styles.ctaTitle}>Ready to Reclaim Your Time?</h2>
            <p className={styles.ctaDesc}>
              Tell us about your business challenge and let&apos;s build a practical, automated solution together.
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
