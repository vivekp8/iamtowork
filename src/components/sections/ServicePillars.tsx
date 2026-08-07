import Link from 'next/link';
import { PILLARS } from '@/lib/config';
import styles from './ServicePillars.module.css';

export default function ServicePillars() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.eyebrow}>What We Do</span>
          <h2 className={styles.title}>Three Ways We Help Your Business</h2>
          <p className={styles.sub}>
            From websites to automation, from content to growth — practical AI services built around real business outcomes.
          </p>
        </div>

        <div className={styles.grid}>
          {PILLARS.map((pillar) => (
            <Link key={pillar.id} href={pillar.href} className={styles.card}>
              <div className={styles.cardTop}>
                <div
                  className={styles.pillarTag}
                  style={{ color: pillar.color, borderColor: `${pillar.color}33`, backgroundColor: `${pillar.color}11` }}
                >
                  {pillar.label}
                </div>
              </div>
              <h3 className={styles.cardTitle}>{pillar.tagline}</h3>
              <p className={styles.cardDesc}>{pillar.description}</p>
              <span className={styles.cardLink} style={{ color: pillar.color }}>
                Learn more →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
