import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import BackButton from '@/components/BackButton';
import { SITE, CONTACT } from '@/lib/config';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  adjustFontFallback: true,
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
  adjustFontFallback: true,
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.iamtowork.com'),
  title: {
    default: 'I Am To Work | AI Websites, Automation & Business Growth',
    template: '%s | I Am To Work',
  },
  description:
    'Custom web development, intelligent n8n & Make business automations, and AI growth systems designed to streamline operations and scale your business.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'I Am To Work | AI Websites, Automation & Business Growth',
    description:
      'We build high-converting websites and custom AI workflows that eliminate repetitive work and drive revenue.',
    url: 'https://www.iamtowork.com',
    siteName: 'I Am To Work',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'I Am To Work - AI Websites & Business Automation',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'I Am To Work | AI Websites & Business Automation',
    description:
      'Custom websites and intelligent workflow automation built for modern growing businesses.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://www.iamtowork.com/#organization',
        name: SITE.name,
        url: 'https://www.iamtowork.com',
        logo: 'https://www.iamtowork.com/icon.png',
        description: SITE.description,
        email: CONTACT.email,
        sameAs: [
          CONTACT.companyLinkedin,
          CONTACT.personalLinkedin,
        ],
      },
      {
        '@type': 'WebSite',
        '@id': 'https://www.iamtowork.com/#website',
        url: 'https://www.iamtowork.com',
        name: SITE.name,
        publisher: {
          '@id': 'https://www.iamtowork.com/#organization',
        },
      },
    ],
  };

  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Navigation />
        <main>{children}</main>
        <Footer />
        <BackToTop />
        <BackButton />
      </body>
    </html>
  );
}
