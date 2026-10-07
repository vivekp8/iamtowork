'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { logout } from '@/app/actions/auth';
import styles from './AdminNav.module.css';

export function AdminNav({ userEmail }: { userEmail?: string }) {
  const pathname = usePathname();

  // Do not show on the login page
  if (pathname === '/admin/login') {
    return null;
  }

  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <div className={styles.left}>
          <Link href="/admin" className={styles.brand}>
            IAW <span>Admin</span>
          </Link>
          <div className={styles.links}>
            {['/admin', '/admin/blogs'].map((path) => {
              const label = path === '/admin' ? 'Submissions' : 'Blogs';
              const isActive = path === '/admin' ? pathname === path : pathname.startsWith(path);
              return (
                <Link 
                  key={path}
                  href={path} 
                  className={`${styles.link} ${isActive ? styles.active : ''}`}
                >
                  {label}
                  {isActive && (
                    <motion.div
                      layoutId="adminNavUnderline"
                      className={styles.activeUnderline}
                      initial={false}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>
        </div>
        
        <div className={styles.right}>
          {userEmail && (
            <span className={styles.user}>{userEmail}</span>
          )}
          <form action={logout}>
            <button type="submit" className={styles.signOut}>
              Sign Out
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}
