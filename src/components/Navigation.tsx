import Link from 'next/link';
import styles from './Navigation.module.css';

export default function Navigation() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.navContainer}`}>
        <div className={styles.logo}>
          <Link href="/">
            I Am To Work
          </Link>
        </div>
        
        <nav className={styles.desktopNav}>
          <Link href="/" className={styles.navLink}>Home</Link>
          <Link href="/services" className={styles.navLink}>Services</Link>
          <Link href="/solutions" className={styles.navLink}>Solutions</Link>
          <Link href="/work" className={styles.navLink}>Work</Link>
          <Link href="/pricing" className={styles.navLink}>Pricing</Link>
          <Link href="/about" className={styles.navLink}>About</Link>
          <Link href="/contact" className={styles.navLink}>Contact</Link>
        </nav>

        <div className={styles.actions}>
          <Link href="/contact" className={styles.actionSecondary}>
            Book a Call
          </Link>
          <Link href="/contact" className={styles.actionPrimary}>
            Get a Quote
          </Link>
        </div>
      </div>
    </header>
  );
}
