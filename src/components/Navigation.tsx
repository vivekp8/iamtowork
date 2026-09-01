'use client';
import Link from 'next/link';
import { useState } from 'react';
import styles from './Navigation.module.css';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.navContainer}`}>
        <div className={styles.logo}>
          <Link href="/">I Am To Work</Link>
        </div>
        
        <nav className={`${styles.desktopNav} ${isOpen ? styles.open : ''}`}>
          <Link href="/" className={styles.navLink}>Home</Link>
          <Link href="/services" className={styles.navLink}>Services</Link>
          <Link href="/solutions" className={styles.navLink}>Solutions</Link>
        </nav>

        <div className={styles.actions}>
          <Link href="/contact" className={styles.actionPrimary}>Book a Call</Link>
          <button 
            className={styles.hamburger} 
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
          </button>
        </div>
      </div>
    </header>
  );
}
