'use client';
import { useRouter, usePathname } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import styles from './BackButton.module.css';

export default function BackButton() {
  const router = useRouter();
  const pathname = usePathname();

  // Don't show on the home page
  if (pathname === '/') return null;

  return (
    <button
      onClick={() => router.back()}
      className={styles.backButton}
      aria-label="Go back"
    >
      <ArrowLeft size={20} aria-hidden="true" />
    </button>
  );
}
