import styles from './ImpactSection.module.css';

const IMPACT_STATS = [
  {
    number: '10–15 hrs',
    label: 'Average Time Saved',
    desc: 'Hours saved per week eliminating manual data entry and repetitive busywork.',
  },
  {
    number: '< 60s',
    label: 'Lead Response Time',
    desc: 'Response time reduced from hours to under 60 seconds with automated routing.',
  },
  {
    number: 'Days, not months',
    label: 'Turnaround Time',
    desc: 'Clean, modern websites and custom automations delivered with speed.',
  },
];

export default function ImpactSection() {
  return (
    <section className={styles.section} aria-labelledby="impact-heading">
      <div className="container">
        <div className={styles.header}>
          <span className={styles.eyebrow}>Measurable Impact</span>
          <h2 id="impact-heading" className={styles.title}>
            Real Results
          </h2>
          <p className={styles.sub}>
            Practical AI websites and smart automations that deliver immediate operational improvements.
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
