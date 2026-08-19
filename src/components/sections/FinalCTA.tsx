import Link from 'next/link';
import styles from './FinalCTA.module.css';

export default function FinalCTA() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.bgGlow} aria-hidden="true" />
          <h2 className={styles.title}>
            Ready to save time and grow your business?
          </h2>
          <p className={styles.desc}>
            Tell us what you want to build, automate, or improve. We&apos;ll help you find the most practical solution.
          </p>
          <div className={styles.actions}>
            <Link href="/contact" className={styles.primary}>
              Book Your Free Consultation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
