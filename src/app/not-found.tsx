import type { Metadata } from 'next';
import Link from 'next/link';
import styles from './not-found.module.css';

export const metadata: Metadata = {
  title: '404 — Page Not Found | I Am To Work',
};

export default function NotFound() {
  return (
    <div className={styles.page}>
      <div className="container">
        <div className={styles.inner}>
          <span className={styles.code}>404</span>
          <h1 className={styles.title}>Page not found</h1>
          <p className={styles.desc}>
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          <div className={styles.actions}>
            <Link href="/" className={styles.primary}>Go Home</Link>
            <Link href="/services" className={styles.outline}>View Services</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
