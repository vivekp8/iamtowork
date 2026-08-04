import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://iamtowork.com'),
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
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
