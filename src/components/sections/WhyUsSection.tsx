import { WHY_US } from '@/lib/config';
import styles from './WhyUsSection.module.css';

export default function WhyUsSection() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.eyebrow}>Why I Am To Work</span>
          <h2 className={styles.title}>How We Think About Every Project</h2>
          <p className={styles.sub}>
            Real operating principles rather than generic marketing claims.
          </p>
        </div>

        <div className={styles.grid}>
          {WHY_US.map((item) => (
            <div key={item.title} className={styles.card}>
              <div className={styles.dot} aria-hidden="true" />
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDesc}>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
