import type { Metadata } from 'next';
import './globals.css';
import { siteConfig } from '../lib/config';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

export const metadata: Metadata = {
  title: `${siteConfig.name} | AI Websites & Business Automation`,
  description: siteConfig.description,
  openGraph: {
    title: `${siteConfig.name} | AI Websites & Business Automation`,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
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
  return (
    <html lang="en">
      <body>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
