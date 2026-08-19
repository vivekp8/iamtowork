import type { Metadata } from 'next';
import Link from 'next/link';
import { WHY_US } from '@/lib/config';
import ProcessSection from '@/components/sections/ProcessSection';
import TechSection from '@/components/sections/TechSection';
import SchemaMarkup from '@/components/SchemaMarkup';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'About Us | Practical AI & Web Solutions for Business',
  description:
    'Learn how I Am To Work helps businesses scale faster by combining modern web development, intelligent automation, and practical AI implementations.',
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About Us | Practical AI & Web Solutions for Business',
    description:
      'Learn how I Am To Work helps businesses scale faster by combining modern web development, intelligent automation, and practical AI implementations.',
    url: 'https://www.iamtowork.com/about',
  },
};

const aboutSchema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'About I Am To Work',
  description:
    'An AI-powered services agency helping businesses build modern websites, automate repetitive workflows, and implement practical AI solutions.',
  url: 'https://www.iamtowork.com/about',
  mainEntity: {
    '@type': 'Organization',
    name: 'I Am To Work',
    url: 'https://www.iamtowork.com',
  },
};

export default function AboutPage() {
  return (
    <>
      <SchemaMarkup data={aboutSchema} />
      <div className={styles.page}>
        <div className="container">
          <header className={styles.header}>
            <span className={styles.eyebrow}>About</span>
            <h1 className={styles.title}>I Am To Work</h1>
            <p className={styles.sub}>
              An AI-powered services business helping businesses build modern websites,
              automate repetitive workflows, create better content, and implement practical AI solutions.
            </p>
          </header>

          <section className={styles.mission} aria-labelledby="mission-title">
            <h2 id="mission-title" className={styles.missionTitle}>What We Believe</h2>
            <p>
              AI tools have fundamentally changed what small businesses can build and how fast they can build it.
              Most businesses are not yet taking advantage of this. We exist to close that gap.
            </p>
            <p>
              We do not sell AI as a concept. We use AI as a practical tool to deliver real work — better, faster,
              and at a quality level that previously required much larger teams or budgets.
            </p>
            <p>
              Every project starts with your actual business problem. We then determine the most practical solution,
              using whatever combination of technology, AI, and human judgment gets the best result.
            </p>
          </section>

          <section className={styles.principles} aria-labelledby="principles-title">
            <h2 id="principles-title" className={styles.principlesTitle}>How We Work</h2>
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

          <section className={styles.cta} aria-labelledby="about-cta-title">
            <h2 id="about-cta-title" className={styles.ctaTitle}>Ready to work together?</h2>
            <p className={styles.ctaDesc}>
              Tell us what you&apos;re building, automating, or trying to improve.
            </p>
            <div className={styles.ctaActions}>
              <Link href="/contact" className={styles.ctaBtnPrimary}>Start a Project</Link>
              <Link href="/services" className={styles.ctaBtnOutline}>View Services</Link>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
