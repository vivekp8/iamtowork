import type { Metadata } from 'next';
import './globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'I Am To Work | AI Websites, Automation & Business Solutions',
  description: 'I Am To Work helps businesses build modern websites, automate repetitive workflows, create better content, and implement practical AI solutions.',
  openGraph: {
    title: 'I Am To Work',
    description: 'I Am To Work helps businesses build modern websites, automate repetitive workflows, create better content, and implement practical AI solutions.',
    url: 'https://iamtowork.com',
    siteName: 'I Am To Work',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'I Am To Work - AI Websites & Automation',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'I Am To Work',
    description: 'I Am To Work helps businesses build modern websites, automate repetitive workflows, create better content, and implement practical AI solutions.',
    images: ['/og-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
