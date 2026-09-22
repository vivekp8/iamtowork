'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import styles from './Navigation.module.css';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.navContainer}`}>
        <div className={styles.logo}>
          <Link href="/">
            <Image
              src="/logo.png"
              alt="I Am To Work"
              width={170}
              height={48}
              priority
              className={styles.logoImg}
            />
          </Link>
        </div>
        
        <nav className={`${styles.desktopNav} ${isOpen ? styles.open : ''}`}>
          <Link href="/services" className={styles.navLink}>Services</Link>
          <Link href="/solutions" className={styles.navLink}>Solutions</Link>
          <Link href="/work" className={styles.navLink}>Work</Link>
          <Link href="/pricing" className={styles.navLink}>Pricing</Link>
          <Link href="/blogs" className={styles.navLink}>Blogs</Link>
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
