export const dynamic = 'force-dynamic';

import type { Metadata } from 'next';
import Link from 'next/link';
import { createClient } from '@/utils/supabase/server';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Blogs & Research Papers | I Am To Work',
  description: 'Read our latest articles, insights, and research papers.',
};

export default async function BlogsPage() {
  const supabase = await createClient();

  const { data: blogs, error } = await supabase
    .from('blogs')
    .select('*')
    .eq('published', true)
    .order('created_at', { ascending: false });

  return (
    <div className={styles.page}>
      <div className="container">
        <header className={styles.header}>
          <span className={styles.eyebrow}>INSIGHTS</span>
          <h1 className={styles.title}>Blogs & Research Papers</h1>
          <p className={styles.sub}>
            Explore our latest thoughts, technical guides, and academic publications.
          </p>
        </header>

        {error ? (
          <div className={styles.empty}>
            <p>Failed to load articles. Please try again later.</p>
          </div>
        ) : (!blogs || blogs.length === 0) ? (
          <div className={styles.empty}>
            <p>No articles published yet. Check back soon!</p>
          </div>
        ) : (
          <div className={styles.grid}>
            {blogs.map((blog) => (
              <Link key={blog.id} href={`/blogs/${blog.slug}`} className={styles.card}>
                <div className={styles.type}>
                  {blog.type.replace('_', ' ')}
                </div>
                <h2 className={styles.cardTitle}>{blog.title}</h2>
                <div className={styles.date}>
                  {new Date(blog.created_at).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric'
                  })}
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
