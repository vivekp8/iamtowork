import { PROCESS_STEPS } from '@/lib/config';
import styles from './ProcessSection.module.css';

export default function ProcessSection() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.eyebrow}>How We Work</span>
          <h2 className={styles.title}>Our Process</h2>
          <p className={styles.sub}>
            A clear, structured approach that keeps you informed and in control at every stage.
          </p>
        </div>

        <div className={styles.timeline}>
          {PROCESS_STEPS.map((step, idx) => (
            <div key={step.number} className={styles.step}>
              <div className={styles.stepLeft}>
                <div className={styles.stepNumber}>{step.number}</div>
                {idx < PROCESS_STEPS.length - 1 && (
                  <div className={styles.stepLine} aria-hidden="true" />
                )}
              </div>
              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDesc}>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
