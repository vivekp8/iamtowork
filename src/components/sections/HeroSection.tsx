import Link from 'next/link';
import { CONTACT } from '@/lib/config';
import { ChevronRight } from 'lucide-react';
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
          Helping small businesses launch websites & automate work with AI.
        </p>

        <div className={styles.actions}>
          <Link href="/contact" className={styles.primaryCta}>
            Book Free Consultation
          </Link>
          <Link href="/services" className={styles.secondaryCta}>
            Explore Services
            <ChevronRight size={16} aria-hidden="true" />
          </Link>
        </div>

        <p className={styles.tertiary}>
          Or{' '}
          {CONTACT.bookingUrl ? (
            <a href={CONTACT.bookingUrl} target="_blank" rel="noopener noreferrer" className={styles.tertiaryLink}>
              start a project enquiry
            </a>
          ) : (
            <Link href="/contact" className={styles.tertiaryLink}>
              start a project enquiry
            </Link>
          )}
        </p>

        <div className={styles.socials}>
          <a href={CONTACT.companyLinkedin} target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Company LinkedIn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </svg> Company LinkedIn
          </a>
          <a href={CONTACT.personalLinkedin} target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Founder LinkedIn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </svg> Founder LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
