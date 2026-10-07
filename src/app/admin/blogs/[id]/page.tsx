import { createClient } from '@/utils/supabase/server';
import styles from '../../page.module.css';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { EditBlogForm } from './EditBlogForm';

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
          <EditBlogForm blog={blog} />
        </div>
      </div>
    </div>
  );
}
