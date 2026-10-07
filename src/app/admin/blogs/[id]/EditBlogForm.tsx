'use client';

import { useActionState } from 'react';
import { updateBlog, deleteBlog } from '@/app/actions/blogs';
import styles from '../../page.module.css';

export function EditBlogForm({ blog }: { blog: any }) {
  const updateBlogWithId = updateBlog.bind(null, blog.id);
  const deleteBlogWithId = deleteBlog.bind(null, blog.id);
  const [state, formAction, isPending] = useActionState(updateBlogWithId, null);

  return (
    <form action={formAction} className={styles.blogForm}>
      {state?.error && (
        <div className={styles.errorAlert}>
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
          defaultValue={blog.title}
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
          defaultValue={blog.slug}
          className={styles.blogInput} 
        />
      </div>

      <div className={styles.blogFormGroup}>
        <label htmlFor="type" className={styles.label}>Type</label>
        <select 
          id="type" 
          name="type"
          defaultValue={blog.type}
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
          rows={15}
          required
          defaultValue={blog.content}
          className={styles.blogTextarea} 
        />
      </div>

      <div className={styles.blogCheckboxGroup}>
        <input 
          type="checkbox" 
          id="published" 
          name="published"
          defaultChecked={blog.published}
          className={styles.blogCheckbox} 
        />
        <label htmlFor="published" className={styles.label}>Published</label>
      </div>

      <div className={styles.flexGap1Mt1}>
        <button 
          type="submit" 
          disabled={isPending}
          className={styles.blogSubmitBtnHalf}
        >
          {isPending ? 'Saving...' : 'Save Changes'}
        </button>
        
        <button 
          formAction={deleteBlogWithId}
          disabled={isPending}
          className={styles.blogDeleteBtn}
          onClick={(e) => {
            if(!confirm('Are you sure you want to delete this post?')) e.preventDefault();
          }}
        >
          Delete
        </button>
      </div>
    </form>
  );
}
