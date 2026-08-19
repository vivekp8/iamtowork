import type { Metadata } from 'next';
import ContactForm from './ContactForm';
import SchemaMarkup from '@/components/SchemaMarkup';

export const metadata: Metadata = {
  title: 'Book a Consultation | Start Your Project with I Am To Work',
  description:
    'Ready to build a modern website or automate your workflows? Book a free consultation or send us an enquiry. We respond within 1–2 business days.',
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Book a Consultation | Start Your Project with I Am To Work',
    description:
      'Ready to build a modern website or automate your workflows? Book a free consultation or send us an enquiry. We respond within 1–2 business days.',
    url: 'https://www.iamtowork.com/contact',
  },
};

const contactSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contact I Am To Work',
  description:
    'Start a web development, workflow automation, or AI growth project with I Am To Work.',
  url: 'https://www.iamtowork.com/contact',
  mainEntity: {
    '@type': 'Organization',
    name: 'I Am To Work',
    url: 'https://www.iamtowork.com',
    email: 'vivekp@iamtowork.com',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer support',
      email: 'vivekp@iamtowork.com',
      availableLanguage: ['English'],
    },
  },
};

export default function ContactPage() {
  return (
    <>
      <SchemaMarkup data={contactSchema} />
      <ContactForm />
    </>
  );
}
