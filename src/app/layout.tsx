import type { Metadata } from 'next';
import './globals.css';
import { SITE, CONTACT } from '../lib/config';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: `${SITE.name} | Custom AI Websites & Business Automation`,
  description: SITE.description,
  alternates: {
    canonical: './',
  },
  openGraph: {
    title: `${SITE.name} | AI Websites & Business Automation`,
    description: SITE.description,
    url: SITE.url,
    siteName: SITE.name,
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": SITE.name,
    "url": SITE.url,
    "logo": `${SITE.url}/og-image.jpg`,
    "description": SITE.description,
    "contactPoint": {
      "@type": "ContactPoint",
      "email": CONTACT.email,
      "contactType": "customer support"
    }
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
      </head>
      <body>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
