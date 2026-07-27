import Link from 'next/link';
import styles from './HeroSection.module.css';

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      {/* Subtle background gradient */}
      <div className={styles.bgGradient} aria-hidden="true" />

      <div className={`container ${styles.content}`}>
        <div className={styles.badge}>
          <span className={styles.badgeDot} />
          AI Services for Modern Businesses
        </div>

        <h1 className={styles.headline}>
          Build Faster.{' '}
          <span className={styles.accent}>Automate Smarter.</span>
          <br />
          Grow with AI.
        </h1>

        <p className={styles.sub}>
          I Am To Work helps businesses build modern websites, automate repetitive workflows,
          create better content, and implement practical AI solutions.
        </p>

        <div className={styles.actions}>
          <Link href="/contact" className={styles.primaryCta}>
            Start a Project
          </Link>
          <Link href="/services" className={styles.secondaryCta}>
            Explore Services
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="m9 18 6-6-6-6" />
            </svg>
          </Link>
        </div>

        <p className={styles.tertiary}>
          Or{' '}
          <Link href="/contact" className={styles.tertiaryLink}>
            book a free consultation
          </Link>
        </p>
      </div>
    </section>
  );
}
