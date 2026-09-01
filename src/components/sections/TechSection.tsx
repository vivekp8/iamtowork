import { TOOLS } from '@/lib/config';
import styles from './TechSection.module.css';

export default function TechSection() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.eyebrow}>Tools & Technologies</span>
          <h2 className={styles.title}>Built with the Best AI Tools</h2>
          <p className={styles.sub}>
            We use the right tool for each job. Clients buy results — the technology is in service of your goals.
          </p>
        </div>

        <div className={styles.grid}>
          {TOOLS.map((tool) => (
            <div key={tool} className={styles.tool}>
              {tool}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
