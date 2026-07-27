import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Website Building Services | I Am To Work',
  description: 'Modern, responsive websites built for real business goals. Business websites, landing pages, portfolios, and redesigns.',
};

const TYPES = [
  { label: 'Business Websites', desc: 'A complete professional website for your business.' },
  { label: 'Landing Pages', desc: 'High-converting single pages for campaigns or products.' },
  { label: 'Restaurant Websites', desc: 'Menu, hours, reservations, and location — beautifully presented.' },
  { label: 'Professional Websites', desc: 'For consultants, coaches, therapists, and professionals.' },
  { label: 'Startup Websites', desc: 'Launch-ready sites that communicate your value proposition fast.' },
  { label: 'Portfolio Websites', desc: 'Showcase your work and attract the right clients.' },
  { label: 'Website Redesigns', desc: 'Transform an outdated site into something modern and effective.' },
];

const DELIVERABLES = [
  'Modern UI/UX design',
  'Fully responsive & mobile-optimised',
  'Contact forms integration',
  'WhatsApp integration (optional)',
  'Clear calls-to-action',
  'Basic SEO setup',
  'Custom domain & deployment',
  'Performance optimisation',
  'Social media links',
  'Google Maps integration (where relevant)',
];

const PROCESS = [
  { step: '01', title: 'Brief', desc: 'We discuss your business, goals, and what the website needs to achieve.' },
  { step: '02', title: 'Design', desc: 'We plan the structure, pages, and visual direction.' },
  { step: '03', title: 'Build', desc: 'We build the website using modern, clean code.' },
  { step: '04', title: 'Review', desc: 'You review and we refine until everything is right.' },
  { step: '05', title: 'Launch', desc: 'We deploy to your domain and make it live.' },
];

export default function WebsitesPage() {
  return (
    <div className={styles.page}>
      <div className="container">
        <header className={styles.header}>
          <span className={styles.eyebrow}>BUILD</span>
          <h1 className={styles.title}>Modern Websites Built for Real Business Goals</h1>
          <p className={styles.sub}>
            A professional website is often the first impression your business makes.
            We build clean, fast, conversion-focused websites that help you attract clients and grow.
          </p>
          <Link href="/contact" className={styles.heroCta}>Start Your Website</Link>
        </header>

        <div className={styles.typesSection}>
          <h2 className={styles.sectionTitle}>Website Types</h2>
          <div className={styles.typesGrid}>
            {TYPES.map((type) => (
              <div key={type.label} className={styles.typeCard}>
                <h3 className={styles.typeLabel}>{type.label}</h3>
                <p className={styles.typeDesc}>{type.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.deliverablesSection}>
          <div className={styles.delContent}>
            <h2 className={styles.sectionTitle}>What&apos;s Included</h2>
            <p className={styles.delDesc}>Every website we build comes with these standard deliverables.</p>
            <ul className={styles.delList}>
              {DELIVERABLES.map((item) => (
                <li key={item} className={styles.delItem}>
                  <CheckCircle2 size={18} strokeWidth={1.5} className={styles.checkIcon} />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.delProcess}>
            <h2 className={styles.sectionTitle}>Our Process</h2>
            <div className={styles.processList}>
              {PROCESS.map((p) => (
                <div key={p.step} className={styles.processItem}>
                  <span className={styles.processStep}>{p.step}</span>
                  <div>
                    <strong className={styles.processTitle}>{p.title}</strong>
                    <p className={styles.processDesc}>{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.cta}>
          <h2 className={styles.ctaTitle}>Ready to build your website?</h2>
          <p className={styles.ctaDesc}>Tell us about your business and what you need. We&apos;ll respond with next steps.</p>
          <Link href="/contact" className={styles.ctaBtn}>Start a Project</Link>
        </div>
      </div>
    </div>
  );
}
