import { createClient } from '@/utils/supabase/server';
import { createBlog } from '@/app/actions/blogs';
import styles from '../../page.module.css';
import Link from 'next/link';

export default function NewBlogPage() {

  return (
    <div className={styles.page}>
      <div className={`container ${styles.blogContainer}`}>
        <div className={styles.blogHeader}>
          <Link href="/admin/blogs" className={styles.blogBackLink}>
            &larr; Back to Blogs
          </Link>
          <h1 className={`${styles.title} ${styles.blogTitle}`}>Create New Blog Post</h1>
        </div>

        <div className={`${styles.card} ${styles.blogCard}`}>
          <form action={createBlog} className={styles.blogForm}>
            
            <div className={styles.blogFormGroup}>
              <label htmlFor="title" className={styles.label}>Title</label>
              <input 
                type="text" 
                id="title" 
                name="title" 
                required
                className={styles.blogInput} 
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
                rows={8}
                required
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
              className={styles.blogSubmitBtn}
            >
              Create Post
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
