'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
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
            <Link 
              href="/admin" 
              className={`${styles.link} ${pathname === '/admin' ? styles.active : ''}`}
            >
              Submissions
            </Link>
            <Link 
              href="/admin/blogs" 
              className={`${styles.link} ${pathname.startsWith('/admin/blogs') ? styles.active : ''}`}
            >
              Blogs
            </Link>
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
