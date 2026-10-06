import Link from 'next/link';
import { PILLARS } from '@/lib/config';
import styles from './ServicePillars.module.css';

const PILLAR_BENEFITS: Record<string, string[]> = {
  build: [
    'Sub-second mobile loading with Next.js',
    'Conversion-focused UI & lead capture forms',
    'Custom tailored design with zero bloat',
  ],
  automate: [
    'Save 15+ hours weekly on manual busywork',
    'Instant lead notifications via WhatsApp & CRM',
    'Reliable n8n & Make custom workflow integrations',
  ],
  grow: [
    'Multi-channel AI content repurposing engines',
    'Automated email nurture & follow-up pipelines',
    'Scalable customer acquisition systems',
  ],
};

export default function ServicePillars() {
  return (
    <section className={styles.section} aria-labelledby="pillars-heading">
      <div className="container">
        <div className={styles.header}>
          <span className={styles.eyebrow}>What We Do</span>
          <h2 id="pillars-heading" className={styles.title}>
            Three Ways We Help Your Business
          </h2>
          <p className={styles.sub}>
            From websites to automation, from content to growth — practical AI services built around real business outcomes.
          </p>
        </div>

        <div className={styles.grid}>
          {PILLARS.map((pillar) => (
            <Link key={pillar.id} href={pillar.href} className={styles.card}>
              <div className={styles.cardTop}>
                <div
                  className={`${styles.pillarTag} theme-${pillar.id}-tag`}
                >
                  {pillar.label}
                </div>
              </div>
              <h3 className={styles.cardTitle}>{pillar.tagline}</h3>
              <p className={styles.cardDesc}>{pillar.description}</p>
              
              <ul className="pillar-list">
                {PILLAR_BENEFITS[pillar.id]?.map((b) => (
                  <li key={b} className="pillar-list-item">
                    <span className={`pillar-list-icon theme-${pillar.id}`}>✓</span> {b}
                  </li>
                ))}
              </ul>

              <span className={`${styles.cardLink} theme-${pillar.id}`}>
                Learn more →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
