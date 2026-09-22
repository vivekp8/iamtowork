import { createClient } from '@/utils/supabase/server';
import { createBlog } from '@/app/actions/blogs';
import styles from '../../page.module.css';
import Link from 'next/link';

export default async function NewBlogPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  return (
    <div className={styles.page}>
      <div className="container">
        <header className={styles.header}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <h1 className={styles.title}>Create New Blog Post</h1>
              <p className={styles.sub}>Write a new article or research paper.</p>
              <p className={styles.sub} style={{ marginTop: '0.25rem', fontSize: '0.75rem' }}>Logged in as {user?.email}</p>
            </div>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
              <Link href="/admin/blogs" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>
                &larr; Back to Blogs
              </Link>
            </div>
          </div>
        </header>

        <div className={styles.card} style={{ maxWidth: '800px', margin: '0 auto' }}>
          <form action={createBlog} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label htmlFor="title" className={styles.label}>Title</label>
              <input 
                type="text" 
                id="title" 
                name="title" 
                required
                style={{ padding: '0.75rem', borderRadius: '8px', border: '1px solid #333', background: '#111', color: '#fff', fontSize: '1rem' }} 
              />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label htmlFor="slug" className={styles.label}>Slug (URL-friendly)</label>
              <input 
                type="text" 
                id="slug" 
                name="slug" 
                required
                placeholder="e.g. my-first-article"
                style={{ padding: '0.75rem', borderRadius: '8px', border: '1px solid #333', background: '#111', color: '#fff', fontSize: '1rem' }} 
              />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label htmlFor="type" className={styles.label}>Type</label>
              <select 
                id="type" 
                name="type" 
                style={{ padding: '0.75rem', borderRadius: '8px', border: '1px solid #333', background: '#111', color: '#fff', fontSize: '1rem' }}
              >
                <option value="article">Article</option>
                <option value="research_paper">Research Paper</option>
              </select>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label htmlFor="content" className={styles.label}>Content (Markdown)</label>
              <textarea 
                id="content" 
                name="content" 
                rows={8}
                required
                style={{ padding: '0.75rem', borderRadius: '8px', border: '1px solid #333', background: '#111', color: '#fff', fontSize: '1rem', fontFamily: 'monospace', resize: 'vertical' }} 
              />
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <input 
                type="checkbox" 
                id="published" 
                name="published" 
                style={{ width: '1.25rem', height: '1.25rem' }} 
              />
              <label htmlFor="published" className={styles.label}>Publish immediately</label>
            </div>

            <button 
              type="submit" 
              style={{ 
                padding: '1rem', 
                background: 'var(--primary)', 
                color: '#000', 
                border: 'none', 
                borderRadius: '8px',
                fontSize: '1rem',
                fontWeight: 600,
                cursor: 'pointer',
                marginTop: '1rem'
              }}
            >
              Create Post
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
