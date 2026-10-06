import { createClient } from '@/utils/supabase/server';
import { updateBlog, deleteBlog } from '@/app/actions/blogs';
import styles from '../../page.module.css';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export default async function EditBlogPage(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const supabase = await createClient();

  const { data: blog, error } = await supabase
    .from('blogs')
    .select('*')
    .eq('id', params.id)
    .single();

  if (error || !blog) {
    notFound();
  }

  // We need to bind the id to the server actions
  const updateBlogWithId = updateBlog.bind(null, blog.id);
  const deleteBlogWithId = deleteBlog.bind(null, blog.id);

  return (
    <div className={styles.page}>
      <div className={`container ${styles.blogContainer}`}>
        <div className={styles.blogHeader}>
          <Link href="/admin/blogs" className={styles.blogBackLink}>
            &larr; Back to Blogs
          </Link>
          <h1 className={`${styles.title} ${styles.blogTitle}`}>Edit Post</h1>
          <p className={styles.sub}>Editing: {blog.title}</p>
        </div>

        <div className={`${styles.card} ${styles.blogCard}`}>
          <form action={updateBlogWithId} className={styles.blogForm}>
            
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
                className={styles.blogSubmitBtnHalf}
              >
                Save Changes
              </button>
              
              <button 
                formAction={deleteBlogWithId}
                className={styles.blogDeleteBtn}
                onClick={(e) => {
                  if(!confirm('Are you sure you want to delete this post?')) e.preventDefault();
                }}
              >
                Delete
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
