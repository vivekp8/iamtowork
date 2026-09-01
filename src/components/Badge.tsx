import React from 'react';
import styles from './Badge.module.css';

interface BadgeProps {
  children: React.ReactNode;
  color?: 'blue' | 'purple' | 'emerald' | 'default';
  className?: string;
}

export function Badge({ children, color = 'default', className = '' }: BadgeProps) {
  return (
    <span className={`${styles.badge} ${styles[color]} ${className}`}>
      {children}
    </span>
  );
}
