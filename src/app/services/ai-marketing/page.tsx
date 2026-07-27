import type { Metadata } from 'next';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'AI Marketing & Growth Services | I Am To Work',
  description: 'AI-assisted marketing, content systems, lead generation, and business growth services.',
};

export default function AIMarketingPage() {
  const items = [
    { label: 'AI Marketing Strategy', desc: 'Data-driven marketing strategies powered by AI insights.' },
    { label: 'Content Systems', desc: 'Repeatable systems that produce consistent content at scale.' },
    { label: 'Lead Generation Systems', desc: 'Automated lead capture, qualification, and nurture flows.' },
    { label: 'Social Media Management', desc: 'Consistent, strategic presence across your chosen platforms.' },
    { label: 'Marketing Automation', desc: 'Campaigns that run automatically based on user behaviour.' },
    { label: 'Business AI Implementation', desc: 'Embedding practical AI tools into your marketing operations.' },
  ];

  return (
    <div className={styles.page}>
      <div className="container">
        <header className={styles.header}>
          <span className={styles.eyebrow}>GROW</span>
          <h1 className={styles.title}>Grow Your Business with AI-Assisted Marketing</h1>
          <p className={styles.sub}>
            We help businesses build content systems, lead generation flows, and marketing automation that consistently drive growth.
          </p>
          <Link href="/contact" className={styles.heroCta}>Start Growing</Link>
        </header>

        <div className={styles.grid}>
          {items.map((s) => (
            <div key={s.label} className={styles.card}>
              <h3 className={styles.cardTitle}>{s.label}</h3>
              <p className={styles.cardDesc}>{s.desc}</p>
            </div>
          ))}
        </div>

        <div className={styles.cta}>
          <h2 className={styles.ctaTitle}>Ready to grow your business with AI?</h2>
          <Link href="/contact" className={styles.ctaBtn}>Get in Touch</Link>
        </div>
      </div>
    </div>
  );
}
