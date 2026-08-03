'use server';

import { supabase } from '@/lib/supabase';
import { createClient } from '@/utils/supabase/server';
import { revalidatePath } from 'next/cache';

export async function submitContactForm(formData: FormData) {
  try {
    const rawData = {
      name: formData.get('name') as string,
      email: formData.get('email') as string | null,
      company: formData.get('company') as string | null,
      contact_preference: formData.get('contactPreference') as string,
      whatsapp: formData.get('whatsapp') as string | null,
      phone: formData.get('phone') as string | null,
      website: formData.get('website') as string | null,
      service: formData.get('service') as string,
      description: formData.get('description') as string,
      budget: formData.get('budget') as string | null,
      timeline: formData.get('timeline') as string | null,
    };

    const { error } = await supabase
      .from('contacts')
      .insert([rawData]);

    if (error) {
      console.error('Supabase insertion error:', error);
      return { success: false, error: 'Failed to submit form. Please try again later.' };
    }

    return { success: true };
  } catch (error) {
    console.error('Action error:', error);
    return { success: false, error: 'An unexpected error occurred.' };
  }
}

export async function updateContactStatus(id: string, status: string) {
  const supabaseServer = await createClient();
  const { error } = await supabaseServer
    .from('contacts')
    .update({ status })
    .eq('id', id);

  if (error) {
    console.error('Failed to update status:', error);
    return { success: false, error: error.message };
  }
  
  revalidatePath('/admin');
  return { success: true };
}

export async function deleteContact(id: string) {
  const supabaseServer = await createClient();
  const { error } = await supabaseServer
    .from('contacts')
    .delete()
    .eq('id', id);

  if (error) {
    console.error('Failed to delete contact:', error);
    return { success: false, error: error.message };
  }
  
  revalidatePath('/admin');
  return { success: true };
}

export async function updateAdminNotes(id: string, notes: string) {
  const supabaseServer = await createClient();
  const { error } = await supabaseServer
    .from('contacts')
    .update({ admin_notes: notes })
    .eq('id', id);

  if (error) {
    console.error('Failed to update notes:', error);
    return { success: false, error: error.message };
  }
  
  revalidatePath('/admin');
  return { success: true };
}
