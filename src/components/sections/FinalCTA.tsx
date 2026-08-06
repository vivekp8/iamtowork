import Link from 'next/link';
import styles from './FinalCTA.module.css';

export default function FinalCTA() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.bgGlow} aria-hidden="true" />
          <h2 className={styles.title}>
            Have work that AI could make easier?
          </h2>
          <p className={styles.desc}>
            Tell us what you&apos;re trying to build, automate, create, or improve.
            We&apos;ll help you find a practical way forward.
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
