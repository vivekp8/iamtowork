import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';
import styles from './WebsiteFeature.module.css';

const DELIVERABLES = [
  'Modern UI/UX design',
  'Fully responsive & mobile-optimised',
  'Contact forms & WhatsApp integration',
  'Clear calls-to-action',
  'Basic SEO setup',
  'Custom domain & deployment',
  'Performance optimisation',
  'Social links & Google Maps (where relevant)',
];

const WEBSITE_TYPES = [
  'Business Websites',
  'Landing Pages',
  'Restaurant Websites',
  'Professional Websites',
  'Startup Websites',
  'Portfolio Websites',
  'Website Redesigns',
];

export default function WebsiteFeature() {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.wrapper}`}>
        <div className={styles.content}>
          <span className={styles.eyebrow}>Featured Service</span>
          <h2 className={styles.title}>
            Modern Websites Built for{' '}
            <span className={styles.accent}>Real Business Goals</span>
          </h2>
          <p className={styles.desc}>
            A professional website is often the first impression your business makes. We build
            clean, fast, conversion-focused websites that accurately represent your brand and
            help you attract clients.
          </p>

          <div className={styles.types}>
            {WEBSITE_TYPES.map((type) => (
              <span key={type} className={styles.typeTag}>{type}</span>
            ))}
          </div>

          <Link href="/services/websites" className={styles.cta}>
            Start Your Website
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="m9 18 6-6-6-6" />
            </svg>
          </Link>
        </div>

        <div className={styles.deliverables}>
          <h3 className={styles.delTitle}>What&apos;s Included</h3>
          <ul className={styles.list}>
            {DELIVERABLES.map((item) => (
              <li key={item} className={styles.listItem}>
                <CheckCircle2 size={18} className={styles.checkIcon} strokeWidth={1.5} />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
