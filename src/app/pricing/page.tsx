import type { Metadata } from 'next';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Pricing | I Am To Work',
  description: 'Simple, transparent pricing tiers for websites, automation, and AI services from I Am To Work.',
};

const TIERS = [
  {
    name: 'Starter',
    desc: 'For small requirements — a clean, fast website or a single automation workflow.',
    highlights: ['Single-page or small site', 'Basic automation workflow', 'Mobile responsive', 'Contact form setup', 'Domain deployment'],
    cta: 'Request Quote',
    href: '/contact',
  },
  {
    name: 'Growth',
    desc: 'For growing businesses that need a complete site or multi-step automation system.',
    highlights: ['Multi-page website', 'Complete automation workflow', 'SEO foundations', 'WhatsApp integration', 'Speed optimisation', 'Post-launch support'],
    cta: 'Request Quote',
    href: '/contact',
    featured: true,
  },
  {
    name: 'Business',
    desc: 'For larger requirements — advanced sites, complex automations, or combined services.',
    highlights: ['Custom website design', 'Advanced workflow automation', 'AI content integration', 'Priority support', 'Custom domain & hosting setup', 'Ongoing maintenance option'],
    cta: 'Request Quote',
    href: '/contact',
  },
  {
    name: 'Custom',
    desc: 'For specialized or multi-service projects. We scope everything based on your specific needs.',
    highlights: ['Tailored scope & deliverables', 'Multi-service packages', 'Phased delivery', 'Dedicated consultation', 'Bespoke pricing'],
    cta: 'Talk to Us',
    href: '/contact',
  },
];

export default function PricingPage() {
  return (
    <div className={styles.page}>
      <div className="container">
        <header className={styles.header}>
          <span className={styles.eyebrow}>Pricing</span>
          <h1 className={styles.title}>Simple, Transparent Pricing</h1>
          <p className={styles.sub}>
            We provide detailed quotes once we understand your specific requirements.
            All prices are provided on request — no hidden fees, no surprises.
          </p>
        </header>

        <div className={styles.grid}>
          {TIERS.map((tier) => (
            <div key={tier.name} className={`${styles.card} ${tier.featured ? styles.featured : ''}`}>
              {tier.featured && <div className={styles.featuredBadge}>Most Popular</div>}
              <h2 className={styles.tierName}>{tier.name}</h2>
              <p className={styles.tierDesc}>{tier.desc}</p>
              <div className={styles.price}>
                <span className={styles.priceLabel}>Pricing on request</span>
              </div>
              <ul className={styles.highlights}>
                {tier.highlights.map((h) => (
                  <li key={h} className={styles.highlight}>
                    <svg className={styles.checkIcon} viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path d="M2 8l4 4 8-8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {h}
                  </li>
                ))}
              </ul>
              <Link href={tier.href} className={`${styles.ctaBtn} ${tier.featured ? styles.ctaBtnPrimary : styles.ctaBtnOutline}`}>
                {tier.cta}
              </Link>
            </div>
          ))}
        </div>

        <div className={styles.note}>
          <p>
            Pricing varies based on complexity, scope, and timeline. We provide a detailed quote after an initial conversation.
            There is no obligation to proceed after receiving a quote.
          </p>
          <Link href="/contact" className={styles.noteLink}>Get in touch to discuss your project →</Link>
        </div>
      </div>
    </div>
  );
}
