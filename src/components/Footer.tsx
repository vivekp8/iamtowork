import Link from 'next/link';
import Image from 'next/image';
import { siteConfig } from '../lib/config';
import styles from './Footer.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        <div className={styles.brandColumn}>
          <div className={styles.logo}>
            <Link href="/">
              <Image src="/iamtowork-logo.png" alt="I Am To Work Logo" width={200} height={60} style={{ width: 'auto', height: '40px' }} />
            </Link>
          </div>
          <p className={styles.tagline}>Build Faster. Automate Smarter. Grow with AI.</p>
        </div>
        
        <div className={styles.linksGrid}>
          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Services</h4>
            <Link href="/services/websites" className={styles.link}>Websites</Link>
            <Link href="/services/automation" className={styles.link}>Automation</Link>
            <Link href="/services/ai-marketing" className={styles.link}>Marketing</Link>
            <Link href="/solutions" className={styles.link}>AI Solutions</Link>
          </div>
          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Company</h4>
            <Link href="/about" className={styles.link}>About</Link>
            <Link href="/work" className={styles.link}>Work</Link>
            <Link href="/pricing" className={styles.link}>Pricing</Link>
            <Link href="/contact" className={styles.link}>Contact</Link>
          </div>
          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Connect</h4>
            <a href={`mailto:${siteConfig.contact.email}`} className={styles.link}>Email Us</a>
            <a href={siteConfig.contact.linkedinCompany} target="_blank" rel="noopener noreferrer" className={styles.link}>Company LinkedIn</a>
            <a href={siteConfig.contact.linkedinFounder} target="_blank" rel="noopener noreferrer" className={styles.link}>Founder LinkedIn</a>
          </div>
        </div>
      </div>
      <div className={styles.bottomBar}>
        <div className={`container ${styles.bottomContainer}`}>
          <p className={styles.copyright}>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
