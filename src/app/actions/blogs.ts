'use server';

import { createClient } from '@/utils/supabase/server';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function createBlog(formData: FormData) {
  const supabase = await createClient();
  
  const title = formData.get('title') as string;
  const slug = formData.get('slug') as string;
  const type = formData.get('type') as string;
  const content = formData.get('content') as string;
  const published = formData.get('published') === 'on';

  const { error } = await supabase
    .from('blogs')
    .insert([{ title, slug, type, content, published }]);

  if (error) {
    console.error('Error creating blog:', error);
    throw new Error('Failed to create blog');
  }

  revalidatePath('/admin/blogs');
  revalidatePath('/blogs');
  redirect('/admin/blogs');
}

export async function updateBlog(id: string, formData: FormData) {
  const supabase = await createClient();
  
  const title = formData.get('title') as string;
  const slug = formData.get('slug') as string;
  const type = formData.get('type') as string;
  const content = formData.get('content') as string;
  const published = formData.get('published') === 'on';

  const { error } = await supabase
    .from('blogs')
    .update({ title, slug, type, content, published })
    .eq('id', id);

  if (error) {
    console.error('Error updating blog:', error);
    throw new Error('Failed to update blog');
  }

  revalidatePath('/admin/blogs');
  revalidatePath('/blogs');
  revalidatePath(`/blogs/${slug}`);
  redirect('/admin/blogs');
}

export async function deleteBlog(id: string) {
  const supabase = await createClient();
  
  const { error } = await supabase
    .from('blogs')
    .delete()
    .eq('id', id);

  if (error) {
    console.error('Error deleting blog:', error);
    throw new Error('Failed to delete blog');
  }

  revalidatePath('/admin/blogs');
  revalidatePath('/blogs');
  redirect('/admin/blogs');
}
