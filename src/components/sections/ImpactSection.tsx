import styles from './ImpactSection.module.css';

const IMPACT_STATS = [
  {
    number: '15+ hrs',
    label: 'Saved Per Week',
    desc: 'Eliminating repetitive data entry, file transfers, and manual message routing.',
  },
  {
    number: '< 60s',
    label: 'Lead Follow-up Time',
    desc: 'Instant WhatsApp and CRM triggers connecting you with buyers when intent is highest.',
  },
  {
    number: '3.5x',
    label: 'Content Output',
    desc: 'Multi-platform repurposing pipelines creating social, newsletter, and blog assets.',
  },
  {
    number: '< 1.0s',
    label: 'Web Load Speed',
    desc: 'Ultra-fast Next.js architecture designed for higher mobile conversion rates.',
  },
];

export default function ImpactSection() {
  return (
    <section className={styles.section} aria-labelledby="impact-heading">
      <div className="container">
        <div className={styles.header}>
          <span className={styles.eyebrow}>Real Impact</span>
          <h2 id="impact-heading" className={styles.title}>
            Measurable Results for Growing Businesses
          </h2>
          <p className={styles.sub}>
            Practical digital systems engineered to save hours, eliminate friction, and accelerate revenue.
          </p>
        </div>

        <div className={styles.grid}>
          {IMPACT_STATS.map((stat) => (
            <div key={stat.label} className={styles.card}>
              <div className={styles.number}>{stat.number}</div>
              <div className={styles.label}>{stat.label}</div>
              <p className={styles.desc}>{stat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
