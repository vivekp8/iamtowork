import type { Metadata } from 'next';
import './globals.css';
import { SITE, CONTACT, TRACKING } from '../lib/config';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: `${SITE.name} | Custom AI Websites & Business Automation`,
  description: SITE.description,
  alternates: {
    canonical: '/',
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
  const socialLinks = [
    CONTACT.companyLinkedin,
    CONTACT.facebook,
    CONTACT.twitter,
    CONTACT.instagram,
    CONTACT.youtube
  ].filter(Boolean);

  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": SITE.name,
    "url": SITE.url,
    "logo": `${SITE.url}/og-image.jpg`,
    "description": SITE.description,
    "sameAs": socialLinks,
    "contactPoint": {
      "@type": "ContactPoint",
      "email": CONTACT.email,
      "telephone": CONTACT.phone,
      "contactType": "customer support"
    }
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": SITE.name,
    "url": SITE.url,
    "logo": `${SITE.url}/og-image.jpg`,
    "telephone": CONTACT.phone,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": CONTACT.address,
    }
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        
        {/* Google Analytics */}
        {TRACKING.googleAnalyticsId && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${TRACKING.googleAnalyticsId}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${TRACKING.googleAnalyticsId}');
                `,
              }}
            />
          </>
        )}

        {/* Facebook Pixel */}
        {TRACKING.facebookPixelId && (
          <script
            dangerouslySetInnerHTML={{
              __html: `
                !function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', '${TRACKING.facebookPixelId}');
                fbq('track', 'PageView');
              `,
            }}
          />
        )}
      </head>
      <body>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
