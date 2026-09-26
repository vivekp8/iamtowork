import type { Metadata, ResolvingMetadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { createClient } from '@/utils/supabase/server';
import ReactMarkdown from 'react-markdown';
import styles from '../page.module.css';

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata(
  props: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const params = await props.params;
  const slug = params.slug;
  const supabase = await createClient();

  const { data: blog } = await supabase
    .from('blogs')
    .select('title, content')
    .eq('slug', slug)
    .single();

  if (!blog) {
    return {
      title: 'Blog Not Found | I Am To Work'
    };
  }

  // Very basic description extraction from markdown
  const desc = blog.content.substring(0, 150).replace(/[#*]/g, '') + '...';

  return {
    title: `${blog.title} | I Am To Work`,
    description: desc,
  };
}

export default async function BlogPostPage(props: Props) {
  const params = await props.params;
  const supabase = await createClient();
  
  const { data: blog, error } = await supabase
    .from('blogs')
    .select('*')
    .eq('slug', params.slug)
    .single();

  if (error || !blog) {
    notFound();
  }

  // Only allow viewing unpublished blogs if admin is logged in
  if (!blog.published) {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      notFound();
    }
  }

  return (
    <div className={`${styles.page} ${styles.postPageContainer}`}>
      <div className="container">
        <article>
          <header className={styles.postHeader}>
            <div className={styles.backLinkContainer}>
              <Link href="/blogs" className={styles.backLink}>
                &larr; Back to Blogs
              </Link>
            </div>
            
            <div className={`${styles.type} ${styles.typeContainer}`}>
              {blog.type.replace('_', ' ')}
            </div>
            
            <h1 className={styles.postTitle}>{blog.title}</h1>
            
            <div className={styles.postMeta}>
              <time dateTime={blog.created_at}>
                {new Date(blog.created_at).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric'
                })}
              </time>
              {!blog.published && (
                <span className={styles.draftBadge}>
                  DRAFT
                </span>
              )}
            </div>
          </header>

          <div className={styles.postContent}>
            <ReactMarkdown>{blog.content}</ReactMarkdown>
          </div>
        </article>
      </div>
    </div>
  );
}
