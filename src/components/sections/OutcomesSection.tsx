'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Globe, Zap, PenLine, TrendingUp, Bot, Settings2 } from 'lucide-react';
import { OUTCOMES } from '@/lib/config';
import styles from './OutcomesSection.module.css';

const ICON_MAP: Record<string, React.ElementType> = {
  Globe,
  Zap,
  PenLine,
  TrendingUp,
  Bot,
  Settings2,
};

export default function OutcomesSection() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>What do you want to accomplish?</h2>
          <p className={styles.sub}>Select your goal and we&apos;ll show you the right solution.</p>
        </div>

        <div className={styles.grid}>
          {OUTCOMES.map((item) => {
            const Icon = ICON_MAP[item.icon];
            const isActive = active === item.label;
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`${styles.card} ${isActive ? styles.cardActive : ''}`}
                onMouseEnter={() => setActive(item.label)}
                onMouseLeave={() => setActive(null)}
                onFocus={() => setActive(item.label)}
                onBlur={() => setActive(null)}
              >
                <div className={styles.iconWrapper}>
                  {Icon && <Icon size={22} strokeWidth={1.5} />}
                </div>
                <span className={styles.label}>{item.label}</span>
                <svg
                  className={styles.arrow}
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
