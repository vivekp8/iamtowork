'use client';
import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { FAQS } from '@/lib/config';
import styles from './FAQSection.module.css';

export default function FAQSection() {
  const [openIndices, setOpenIndices] = useState<Set<number>>(new Set([0, 1, 2]));

  const toggleOpen = (idx: number) => {
    setOpenIndices((prev) => {
      const next = new Set(prev);
      if (next.has(idx)) {
        next.delete(idx);
      } else {
        next.add(idx);
      }
      return next;
    });
  };

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.eyebrow}>FAQ</span>
          <h2 className={styles.title}>Common Questions</h2>
        </div>

        <div className={styles.list}>
          {FAQS.map((faq, idx) => {
            const isOpen = openIndices.has(idx);
            return (
              <div key={idx} className={`${styles.item} ${isOpen ? styles.itemOpen : ''}`}>
                <button
                  className={styles.question}
                  onClick={() => toggleOpen(idx)}
                  aria-expanded={isOpen}
                >
                  <span>{faq.q}</span>
                  {isOpen ? (
                    <Minus size={18} className={styles.icon} strokeWidth={1.5} />
                  ) : (
                    <Plus size={18} className={styles.icon} strokeWidth={1.5} />
                  )}
                </button>
                {isOpen && (
                  <div className={styles.answer}>
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
