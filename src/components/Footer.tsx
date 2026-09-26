'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SITE, CONTACT } from '../lib/config';
import styles from './Footer.module.css';

export function Footer() {
  const pathname = usePathname();

  if (pathname.startsWith('/admin')) {
    return null;
  }

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        <div className={styles.brandColumn}>
          <div className={styles.logo}>
            <Link href="/">{SITE.name}</Link>
          </div>
          <p className={styles.tagline}>Build Faster. Automate Smarter. Grow with AI.</p>
        </div>
        
        <div className={styles.linksGrid}>
          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Services</h3>
            <Link href="/services/websites" className={styles.link}>Websites</Link>
            <Link href="/services/automation" className={styles.link}>Automation</Link>
            <Link href="/services/ai-marketing" className={styles.link}>Marketing</Link>
            <Link href="/solutions" className={styles.link}>AI Solutions</Link>
          </div>
          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Company</h3>
            <Link href="/about" className={styles.link}>About</Link>
            <Link href="/blogs" className={styles.link}>Blogs</Link>
            <Link href="/work" className={styles.link}>Work</Link>
            <Link href="/pricing" className={styles.link}>Pricing</Link>
            <Link href="/contact" className={styles.link}>Contact</Link>
          </div>
          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Connect</h3>
            <a href={`mailto:${CONTACT.email}`} className={styles.link}>Email Us</a>
            {CONTACT.phone && <a href={`tel:${CONTACT.phone.replace(/\s+/g, '')}`} className={styles.link}>{CONTACT.phone}</a>}
            <a href={CONTACT.companyLinkedin} target="_blank" rel="noopener noreferrer" className={styles.link}>Company LinkedIn</a>
            <a href={CONTACT.personalLinkedin} target="_blank" rel="noopener noreferrer" className={styles.link}>Founder LinkedIn</a>
            {CONTACT.facebook && <a href={CONTACT.facebook} target="_blank" rel="noopener noreferrer" className={styles.link}>Facebook</a>}
            {CONTACT.twitter && <a href={CONTACT.twitter} target="_blank" rel="noopener noreferrer" className={styles.link}>X (Twitter)</a>}
            {CONTACT.instagram && <a href={CONTACT.instagram} target="_blank" rel="noopener noreferrer" className={styles.link}>Instagram</a>}
            {CONTACT.youtube && <a href={CONTACT.youtube} target="_blank" rel="noopener noreferrer" className={styles.link}>YouTube</a>}
          </div>
        </div>
      </div>
      <div className={styles.bottomBar}>
        <div className={`container ${styles.bottomContainer}`}>
          <p className={styles.copyright}>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
