import type { Metadata } from 'next';
import Link from 'next/link';
import { WHY_US } from '@/lib/config';
import ProcessSection from '@/components/sections/ProcessSection';
import TechSection from '@/components/sections/TechSection';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'About | I Am To Work',
  description: 'I Am To Work is an AI-powered services business helping businesses build, automate, create, and grow.',
};

export default function AboutPage() {
  return (
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

        <div className={styles.mission}>
          <h2 className={styles.missionTitle}>What We Believe</h2>
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
        </div>

        <div className={styles.principles}>
          <h2 className={styles.principlesTitle}>How We Work</h2>
          <div className={styles.principlesGrid}>
            {WHY_US.map((item) => (
              <div key={item.title} className={styles.principleCard}>
                <div className={styles.dot} />
                <h3 className={styles.principleTitle}>{item.title}</h3>
                <p className={styles.principleDesc}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <ProcessSection />
        <TechSection />

        <div className={styles.cta}>
          <h2 className={styles.ctaTitle}>Ready to work together?</h2>
          <p className={styles.ctaDesc}>
            Tell us what you&apos;re building, automating, or trying to improve.
          </p>
          <div className={styles.ctaActions}>
            <Link href="/contact" className={styles.ctaBtnPrimary}>Start a Project</Link>
            <Link href="/services" className={styles.ctaBtnOutline}>View Services</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
