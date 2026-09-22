export const dynamic = 'force-dynamic';

import { createClient } from '@/utils/supabase/server';
import { logout } from '@/app/actions/auth';
import styles from '../page.module.css';
import Link from 'next/link';

export default async function AdminBlogsDashboard() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  const { data: blogs, error } = await supabase
    .from('blogs')
    .select('*')
    .order('created_at', { ascending: false });

  return (
    <div className={styles.page}>
      <div className="container">
        <header className={styles.header}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <h1 className={styles.title}>Blogs & Research Papers</h1>
              <p className={styles.sub}>Manage your articles and publications.</p>
              <p className={styles.sub} style={{ marginTop: '0.25rem', fontSize: '0.75rem' }}>Logged in as {user?.email}</p>
            </div>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
              <Link href="/admin" style={{ color: 'var(--primary)', textDecoration: 'none', fontWeight: 500 }}>
                Client Submissions
              </Link>
              <form action={logout}>
                <button type="submit" className={styles.secondaryButton}>Sign Out</button>
              </form>
            </div>
          </div>
        </header>

        <div className={styles.toolbar} style={{ justifyContent: 'flex-start' }}>
          <Link 
            href="/admin/blogs/new" 
            className={styles.primaryButton}
          >
            + Create New Post
          </Link>
        </div>

        {error ? (
          <div className={styles.error} style={{ marginTop: '2rem' }}>
            Failed to load blogs. Error details: {error.message}
          </div>
        ) : (!blogs || blogs.length === 0) ? (
          <div className={styles.empty}>
            <p>No blogs found. Create one to get started.</p>
          </div>
        ) : (
          <div className={styles.grid}>
            {blogs.map((blog) => (
              <div key={blog.id} className={styles.card}>
                <div className={styles.cardHeader}>
                  <h3 className={styles.name}>{blog.title}</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '4px' }}>
                    <span className={styles.date}>
                      {new Date(blog.created_at).toLocaleDateString()}
                    </span>
                    <span className={styles.statusBadge} data-status={blog.published ? 'won' : 'archived'}>
                      {blog.published ? 'PUBLISHED' : 'DRAFT'}
                    </span>
                  </div>
                </div>
                
                <div className={styles.details}>
                  <div className={styles.detailRow}>
                    <span className={styles.label}>Type:</span>
                    <span className={styles.value} style={{ textTransform: 'capitalize' }}>
                      {blog.type.replace('_', ' ')}
                    </span>
                  </div>
                  <div className={styles.detailRow}>
                    <span className={styles.label}>Slug:</span>
                    <span className={styles.value}>{blog.slug}</span>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                  <Link 
                    href={`/admin/blogs/${blog.id}`}
                    className={styles.secondaryButton}
                  >
                    Edit
                  </Link>
                  {blog.published && (
                    <Link 
                      href={`/blogs/${blog.slug}`}
                      target="_blank"
                      className={styles.secondaryButton}
                    >
                      View Live
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
