'use client';

import { motion } from 'framer-motion';
import styles from './TechStackMarquee.module.css';

const TECH_STACK = [
  'Next.js', 'React', 'Framer Motion', 'Supabase', 'Tailwind',
  'PostgreSQL', 'TypeScript', 'Node.js', 'Vercel', 'OpenAI',
  'Anthropic', 'Midjourney', 'Figma', 'Stripe', 'n8n'
];

export default function TechStackMarquee() {
  return (
    <div className={styles.marqueeContainer}>
      <div className={styles.marqueeFadeLeft}></div>
      <div className={styles.marqueeFadeRight}></div>
      <motion.div
        className={styles.marqueeTrack}
        animate={{
          x: ['0%', '-50%'],
        }}
        transition={{
          duration: 30,
          ease: 'linear',
          repeat: Infinity,
        }}
      >
        {/* We double the array so the loop is seamless */}
        {[...TECH_STACK, ...TECH_STACK].map((tech, i) => (
          <div key={i} className={styles.marqueeItem}>
            {tech}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
