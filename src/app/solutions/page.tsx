import type { Metadata } from 'next';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Solutions | I Am To Work',
  description: 'Find the right AI solution for your business challenge. I Am To Work guides you from problem to practical solution.',
};

const SOLUTIONS = [
  {
    problem: 'I need a professional website',
    desc: 'Your business needs a modern, clean website that accurately represents your brand and helps you attract clients.',
    href: '/services/websites',
    cta: 'Explore Website Services',
    color: '#2563EB',
  },
  {
    problem: 'I want to automate repetitive work',
    desc: 'Manual tasks are eating your time. You need smart workflows that run automatically so your team can focus on what matters.',
    href: '/services/automation',
    cta: 'Explore Automation Services',
    color: '#8B5CF6',
  },
  {
    problem: 'I need consistent content',
    desc: 'You need a steady stream of professional content — social posts, copy, emails — without spending hours producing it.',
    href: '/services/content-design',
    cta: 'Explore Content Services',
    color: '#06B6D4',
  },
  {
    problem: 'I want better marketing',
    desc: 'Your marketing is inconsistent. You need a system that generates leads and keeps your brand visible without constant manual effort.',
    href: '/services/ai-marketing',
    cta: 'Explore Marketing Services',
    color: '#10B981',
  },
  {
    problem: 'I need an AI assistant or chatbot',
    desc: 'You want to add an AI assistant to your business that can handle common enquiries, qualify leads, or support your team.',
    href: '/contact',
    cta: 'Discuss Your AI Project',
    color: '#F59E0B',
  },
  {
    problem: 'I need a custom business solution',
    desc: "Your requirement doesn't fit a standard category. You need a custom solution designed around your specific business challenge.",
    href: '/contact',
    cta: 'Tell Us What You Need',
    color: '#EC4899',
  },
];

export default function SolutionsPage() {
  return (
    <div className={styles.page}>
      <div className="container">
        <header className={styles.header}>
          <span className={styles.eyebrow}>Solutions</span>
          <h1 className={styles.title}>Find Your Solution</h1>
          <p className={styles.sub}>
            Start with your problem. We&apos;ll guide you to the most practical solution.
          </p>
        </header>

        <div className={styles.grid}>
          {SOLUTIONS.map((sol) => (
            <div key={sol.problem} className={styles.card}>
              <div className={styles.bullet} style={{ backgroundColor: sol.color }} />
              <h2 className={styles.cardTitle}>{sol.problem}</h2>
              <p className={styles.cardDesc}>{sol.desc}</p>
              <Link href={sol.href} className={styles.cardLink} style={{ color: sol.color }}>
                {sol.cta} →
              </Link>
            </div>
          ))}
        </div>

        <div className={styles.cta}>
          <h2 className={styles.ctaTitle}>Still unsure? Let&apos;s talk.</h2>
          <p className={styles.ctaDesc}>Describe your challenge and we&apos;ll recommend the right approach.</p>
          <Link href="/contact" className={styles.ctaBtn}>Contact Us</Link>
        </div>
      </div>
    </div>
  );
}
