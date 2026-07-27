import type { Metadata } from 'next';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Privacy Policy | I Am To Work',
};

export default function PrivacyPage() {
  return (
    <div className={styles.page}>
      <div className="container">
        <div className={styles.prose}>
          <h1>Privacy Policy</h1>
          <p className={styles.updated}>Last updated: {new Date().getFullYear()}</p>

          <h2>Information We Collect</h2>
          <p>
            When you use our contact form or reach out to us, we collect the information you voluntarily provide,
            such as your name, email address, phone number, and project details. We do not collect any information
            without your knowledge or consent.
          </p>

          <h2>How We Use Your Information</h2>
          <p>
            We use the information you provide solely to respond to your enquiry, discuss your project requirements,
            and communicate with you about our services. We do not sell, share, or distribute your personal information
            to third parties.
          </p>

          <h2>Data Retention</h2>
          <p>
            We retain your contact information only for as long as necessary to fulfil the purpose for which it was
            collected, or as required by law.
          </p>

          <h2>Cookies</h2>
          <p>
            This website may use essential cookies to ensure basic functionality. We do not use tracking or
            advertising cookies.
          </p>

          <h2>Contact</h2>
          <p>
            If you have questions about this privacy policy, please <Link href="/contact" className={styles.link}>contact us</Link>.
          </p>
        </div>
      </div>
    </div>
  );
}
