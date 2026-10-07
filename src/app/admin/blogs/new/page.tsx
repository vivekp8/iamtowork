'use client';

import { createBlog } from '@/app/actions/blogs';
import styles from '../../page.module.css';
import Link from 'next/link';
import { useActionState } from 'react';
import { Loader2 } from 'lucide-react';

export default function NewBlogPage() {
  const [state, formAction, pending] = useActionState(createBlog, null);

  return (
    <div className={styles.page}>
      <div className={`container ${styles.blogContainer}`}>
        <div className={styles.blogHeader}>
          <Link href="/admin/blogs" className={styles.secondaryButton}>
            &larr; Back to Blogs
          </Link>
          <h1 className={`${styles.title} ${styles.blogTitle}`}>Create New Blog Post</h1>
        </div>

        <div className={`${styles.card} ${styles.blogCard}`}>
          <form action={formAction} className={styles.blogForm}>
            
            {state?.error && (
              <div className={styles.error}>
                {state.error}
              </div>
            )}

            <div className={styles.blogFormGroup}>
              <label htmlFor="title" className={styles.label}>Title</label>
              <input 
                type="text" 
                id="title" 
                name="title" 
                required
                className={styles.blogInput} 
                placeholder="Enter an engaging title..."
              />
            </div>

            <div className={styles.blogFormGroup}>
              <label htmlFor="slug" className={styles.label}>Slug (URL-friendly)</label>
              <input 
                type="text" 
                id="slug" 
                name="slug" 
                required
                placeholder="e.g. my-first-article"
                className={styles.blogInput} 
              />
            </div>

            <div className={styles.blogFormGroup}>
              <label htmlFor="type" className={styles.label}>Type</label>
              <select 
                id="type" 
                name="type" 
                className={styles.blogInput}
              >
                <option value="article">Article</option>
                <option value="research_paper">Research Paper</option>
              </select>
            </div>

            <div className={styles.blogFormGroup}>
              <label htmlFor="content" className={styles.label}>Content (Markdown)</label>
              <textarea 
                id="content" 
                name="content" 
                rows={12}
                required
                placeholder="Write your markdown content here..."
                className={styles.blogTextarea} 
              />
            </div>

            <div className={styles.blogCheckboxGroup}>
              <input 
                type="checkbox" 
                id="published" 
                name="published" 
                className={styles.blogCheckbox} 
              />
              <label htmlFor="published" className={styles.label}>Publish immediately</label>
            </div>

            <button 
              type="submit" 
              className={styles.primaryButton}
              style={{ marginTop: '1rem' }}
              disabled={pending}
            >
              {pending ? (
                <>
                  <Loader2 className="animate-spin inline-block mr-2" size={18} />
                  Creating...
                </>
              ) : 'Create Post'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
