import type { Metadata } from 'next';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Business Automation Services | I Am To Work',
  description: 'Eliminate repetitive work with smart n8n and Make workflows, AI agents, and business process automation.',
};

const SERVICES = [
  { label: 'n8n Workflows', desc: 'Powerful open-source automation with custom logic.' },
  { label: 'Make Workflows', desc: 'Visual automation for connecting your favourite tools.' },
  { label: 'Lead Automation', desc: 'Capture, qualify, and route leads automatically.' },
  { label: 'Email Automation', desc: 'Smart email sequences triggered by actions.' },
  { label: 'Form Processing', desc: 'Auto-process form submissions and route to the right place.' },
  { label: 'Notifications & Alerts', desc: 'Get notified instantly when something important happens.' },
  { label: 'AI Workflows', desc: 'Add AI processing steps to your automation pipelines.' },
  { label: 'Business Process Automation', desc: 'Map, design, and automate your core business processes.' },
];

export default function AutomationPage() {
  return (
    <div className={styles.page}>
      <div className="container">
        <header className={styles.header}>
          <span className={styles.eyebrow}>AUTOMATE</span>
          <h1 className={styles.title}>Automate Repetitive Work. Free Your Time.</h1>
          <p className={styles.sub}>
            We design and implement practical automation workflows that eliminate manual tasks and let your business run smarter.
          </p>
          <Link href="/contact" className={styles.heroCta}>Start Automating</Link>
        </header>

        <div className={styles.grid}>
          {SERVICES.map((s) => (
            <div key={s.label} className={styles.card}>
              <h3 className={styles.cardTitle}>{s.label}</h3>
              <p className={styles.cardDesc}>{s.desc}</p>
            </div>
          ))}
        </div>

        <div className={styles.cta}>
          <h2 className={styles.ctaTitle}>Ready to automate your workflow?</h2>
          <Link href="/contact" className={styles.ctaBtn}>Get in Touch</Link>
        </div>
      </div>
    </div>
  );
}
