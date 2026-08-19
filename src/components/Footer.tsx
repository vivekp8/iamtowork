import Link from 'next/link';
import Image from 'next/image';
import { CONTACT } from '@/lib/config';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        <div className={styles.brandColumn}>
          <div className={styles.logo}>
            <Image
              src="/logo.png"
              alt="I Am To Work - AI Powered Workflows"
              width={190}
              height={52}
              className={styles.footerLogoImg}
            />
          </div>
          <p className={styles.tagline}>Build Faster. Automate Smarter. Grow with AI.</p>
        </div>
        
        <div className={styles.linksGrid}>
          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Services</h4>
            <Link href="/services/websites" className={styles.link}>Websites</Link>
            <Link href="/services/automation" className={styles.link}>Automation</Link>
            <Link href="/services/content-design" className={styles.link}>AI Content & Design</Link>
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
            <h4 className={styles.columnTitle}>Legal</h4>
            <Link href="/privacy" className={styles.link}>Privacy</Link>
            <Link href="/terms" className={styles.link}>Terms</Link>
          </div>

          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Connect</h4>
            <a href={`mailto:${CONTACT.email}`} className={styles.link}>Email Us</a>
            <a href={CONTACT.companyLinkedin} target="_blank" rel="noopener noreferrer" className={styles.link}>Company LinkedIn</a>
            <a href={CONTACT.personalLinkedin} target="_blank" rel="noopener noreferrer" className={styles.link}>Founder LinkedIn</a>
          </div>
        </div>
      </div>
      
      <div className={styles.bottomBar}>
        <div className={`container ${styles.bottomContainer}`}>
          <p className={styles.copyright}>© {new Date().getFullYear()} I Am To Work. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
