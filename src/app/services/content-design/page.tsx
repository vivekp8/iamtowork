import type { Metadata } from 'next';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'AI Content & Design Services | I Am To Work',
  description: 'Professional AI-assisted content, copywriting, social media, and creative design services.',
};

export default function ContentDesignPage() {
  const items = [
    { label: 'AI Content Writing', desc: 'High-quality articles, blogs, and web copy produced with AI tools.' },
    { label: 'Social Media Content', desc: 'Consistent, on-brand posts designed for engagement.' },
    { label: 'Copywriting', desc: 'Persuasive, clear copy for websites, ads, and sales materials.' },
    { label: 'AI Design & Graphics', desc: 'Brand graphics, social media visuals, and marketing assets.' },
    { label: 'Presentations', desc: 'Professional slide decks for pitches, proposals, and reports.' },
    { label: 'Marketing Creatives', desc: 'Ad creatives, banners, and promotional materials.' },
    { label: 'Video Content', desc: 'Short-form video content and editing using AI-assisted tools.' },
  ];

  return (
    <div className={styles.page}>
      <div className="container">
        <header className={styles.header}>
          <span className={styles.eyebrow}>CREATE</span>
          <h1 className={styles.title}>Professional Content Created with AI Intelligence</h1>
          <p className={styles.sub}>
            From copywriting to social media content, we produce high-quality creative work powered by AI tools and refined by human judgment.
          </p>
          <Link href="/contact" className={styles.heroCta}>Start Creating</Link>
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
          <h2 className={styles.ctaTitle}>Need content that actually works?</h2>
          <Link href="/contact" className={styles.ctaBtn}>Get in Touch</Link>
        </div>
      </div>
    </div>
  );
}
