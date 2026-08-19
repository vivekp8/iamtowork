import type { Metadata } from 'next';
import ContactForm from './ContactForm';
import SchemaMarkup from '@/components/SchemaMarkup';

export const metadata: Metadata = {
  title: 'Contact I Am To Work | Start Your Project',
  description:
    'Ready to build a website, automate your work, or implement AI solutions? Contact us for a free consultation and project discussion.',
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact I Am To Work | Start Your Project',
    description:
      'Ready to build a website, automate your work, or implement AI solutions? Contact us for a free consultation and project discussion.',
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
