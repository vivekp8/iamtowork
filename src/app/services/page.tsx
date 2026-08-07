import type { Metadata } from 'next';
import Link from 'next/link';
import { SERVICES, PILLARS } from '@/lib/config';
import WebsiteFeature from '@/components/sections/WebsiteFeature';
import styles from './services.module.css';

export const metadata: Metadata = {
  title: 'Services | I Am To Work',
  description: 'Website building, automation, AI content & design, and AI marketing services from I Am To Work.',
};

export default function ServicesPage() {
  return (
    <div className={styles.page}>
      <div className="container">
        <header className={styles.header}>
          <h1 className={styles.title}>What We Build</h1>
          <p className={styles.sub}>
            Practical AI services organised around the four ways we help businesses grow.
          </p>
        </header>

        <div className={styles.pillars}>
          {PILLARS.map((pillar) => {
            const service = SERVICES.find((s) => s.pillar === pillar.label);
            return (
              <div key={pillar.id} className={styles.pillar}>
                <div
                  className={styles.pillarHeader}
                  style={{ borderLeftColor: pillar.color }}
                >
                  <span
                    className={styles.pillarLabel}
                    style={{ color: pillar.color }}
                  >
                    {pillar.label}
                  </span>
                  <h2 className={styles.pillarTitle}>{pillar.tagline}</h2>
                  <p className={styles.pillarDesc}>{pillar.description}</p>
                </div>

                {service && (
                  <div className={styles.serviceItems}>
                    {service.items.map((item) => (
                      <span key={item} className={styles.serviceItem}>{item}</span>
                    ))}
                    <Link href={service.slug} className={styles.serviceLink} style={{ color: pillar.color }}>
                      Learn more about {pillar.label.toLowerCase()} →
                    </Link>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <WebsiteFeature />

        <div className={styles.cta}>
          <h2 className={styles.ctaTitle}>Not sure which service you need?</h2>
          <p className={styles.ctaDesc}>Tell us what you&apos;re trying to achieve and we&apos;ll recommend the right approach.</p>
          <Link href="/contact" className={styles.ctaBtn}>
            Start a Conversation
          </Link>
        </div>
      </div>
    </div>
  );
}
