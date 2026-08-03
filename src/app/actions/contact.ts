'use server';

import { supabase } from '@/lib/supabase';

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
