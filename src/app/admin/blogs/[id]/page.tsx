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
      <div className="container" style={{ marginTop: '2rem' }}>
        <div style={{ marginBottom: '2rem' }}>
          <Link href="/admin/blogs" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>
            &larr; Back to Blogs
          </Link>
          <h1 className={styles.title} style={{ marginTop: '1rem' }}>Edit Post</h1>
          <p className={styles.sub}>Editing: {blog.title}</p>
        </div>

        <div className={styles.card} style={{ maxWidth: '800px', margin: '0 auto' }}>
          <form action={updateBlogWithId} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label htmlFor="title" className={styles.label}>Title</label>
              <input 
                type="text" 
                id="title" 
                name="title" 
                required
                defaultValue={blog.title}
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
                defaultValue={blog.slug}
                style={{ padding: '0.75rem', borderRadius: '8px', border: '1px solid #333', background: '#111', color: '#fff', fontSize: '1rem' }} 
              />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label htmlFor="type" className={styles.label}>Type</label>
              <select 
                id="type" 
                name="type"
                defaultValue={blog.type}
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
                rows={15}
                required
                defaultValue={blog.content}
                style={{ padding: '0.75rem', borderRadius: '8px', border: '1px solid #333', background: '#111', color: '#fff', fontSize: '1rem', fontFamily: 'monospace' }} 
              />
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <input 
                type="checkbox" 
                id="published" 
                name="published"
                defaultChecked={blog.published}
                style={{ width: '1.25rem', height: '1.25rem' }} 
              />
              <label htmlFor="published" className={styles.label}>Published</label>
            </div>

            <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
              <button 
                type="submit" 
                style={{ 
                  flex: 1,
                  padding: '1rem', 
                  background: 'var(--primary)', 
                  color: '#000', 
                  border: 'none', 
                  borderRadius: '8px',
                  fontSize: '1rem',
                  fontWeight: 600,
                  cursor: 'pointer'
                }}
              >
                Save Changes
              </button>
              
              <button 
                formAction={deleteBlogWithId}
                style={{ 
                  padding: '1rem', 
                  background: 'transparent', 
                  color: '#ef4444', 
                  border: '1px solid #ef4444', 
                  borderRadius: '8px',
                  fontSize: '1rem',
                  fontWeight: 600,
                  cursor: 'pointer'
                }}
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
