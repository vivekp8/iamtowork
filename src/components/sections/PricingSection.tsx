import Link from 'next/link';
import { Check } from 'lucide-react';
import styles from './PricingSection.module.css';

const PACKAGES = [
  {
    id: 'websites',
    title: 'Website Building',
    price: '$X,XXX',
    description: 'Professional, responsive websites built for conversion.',
    features: [
      'Custom Design & Development',
      'Mobile-First Approach',
      'Basic SEO Setup',
      'CMS Integration',
    ],
  },
  {
    id: 'automation',
    title: 'Business Automation',
    price: '$X,XXX',
    description: 'Workflows that eliminate manual tasks and save hours.',
    features: [
      'Workflow Audit & Strategy',
      'Custom n8n / Make Setup',
      'API Integrations',
      'Testing & Documentation',
    ],
    highlight: true,
  },
  {
    id: 'ai-growth',
    title: 'AI Growth',
    price: '$X,XXX',
    description: 'Content and marketing engines powered by AI.',
    features: [
      'AI Content Strategy',
      'Social Media Automation',
      'Lead Generation Flows',
      'Performance Tracking',
    ],
  },
];

export default function PricingSection() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.eyebrow}>Pricing</span>
          <h2 className={styles.title}>Simple, Transparent Pricing</h2>
          <p className={styles.sub}>
            Starting prices to give you an idea of investment. Every project gets a custom quote.
          </p>
        </div>

        <div className={styles.grid}>
          {PACKAGES.map((pkg) => (
            <div key={pkg.id} className={`${styles.card} ${pkg.highlight ? styles.highlight : ''}`}>
              {pkg.highlight && <div className={styles.badge}>Most Popular</div>}
              <h3 className={styles.cardTitle}>{pkg.title}</h3>
              <div className={styles.price}>
                <span className={styles.from}>Starting from</span>
                <span className={styles.amount}>{pkg.price}</span>
              </div>
              <p className={styles.cardDesc}>{pkg.description}</p>
              
              <ul className={styles.features}>
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className={styles.feature}>
                    <Check size={18} className={styles.checkIcon} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Link href="/contact" className={pkg.highlight ? styles.primaryBtn : styles.secondaryBtn}>
                Get a Custom Quote
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
