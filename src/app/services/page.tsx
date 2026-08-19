import type { Metadata } from 'next';
import Link from 'next/link';
import { SERVICES, PILLARS } from '@/lib/config';
import WebsiteFeature from '@/components/sections/WebsiteFeature';
import SchemaMarkup from '@/components/SchemaMarkup';
import styles from './services.module.css';

export const metadata: Metadata = {
  title: 'AI & Web Development Services | I Am To Work',
  description:
    'Custom websites, business automation with n8n & Make, and AI-powered growth solutions designed to help small and medium businesses scale efficiently.',
  alternates: {
    canonical: '/services',
  },
  openGraph: {
    title: 'AI & Web Development Services | I Am To Work',
    description:
      'Custom websites, business automation with n8n & Make, and AI-powered growth solutions designed to help small and medium businesses scale efficiently.',
    url: 'https://www.iamtowork.com/services',
  },
};

const servicesCatalogSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'AI & Digital Business Services',
  provider: {
    '@type': 'Organization',
    name: 'I Am To Work',
    url: 'https://www.iamtowork.com',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Digital Services Portfolio',
    itemListElement: SERVICES.map((service) => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: service.label,
        description: service.description,
        url: `https://www.iamtowork.com${service.slug}`,
      },
    })),
  },
};

export default function ServicesPage() {
  return (
    <>
      <SchemaMarkup data={servicesCatalogSchema} />
      <div className={styles.page}>
        <div className="container">
          <header className={styles.header}>
            <h1 className={styles.title}>What We Build</h1>
            <p className={styles.sub}>
              Practical AI services organised around the four ways we help businesses grow.
            </p>
          </header>

          <div className={styles.pillars}>
            {PILLARS.map((pillar) => {
              const service = SERVICES.find((s) => s.pillar === pillar.label);
              return (
                <div key={pillar.id} className={styles.pillar}>
                  <div
                    className={styles.pillarHeader}
                    style={{ borderLeftColor: pillar.color }}
                  >
                    <span
                      className={styles.pillarLabel}
                      style={{ color: pillar.color }}
                    >
                      {pillar.label}
                    </span>
                    <h2 className={styles.pillarTitle}>{pillar.tagline}</h2>
                    <p className={styles.pillarDesc}>{pillar.description}</p>
                  </div>

                  {service && (
                    <div className={styles.serviceItems}>
                      {service.items.map((item) => (
                        <span key={item} className={styles.serviceItem}>{item}</span>
                      ))}
                      <Link href={service.slug} className={styles.serviceLink} style={{ color: pillar.color }}>
                        Learn more about {pillar.label.toLowerCase()} →
                      </Link>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <WebsiteFeature />

          <div className={styles.cta}>
            <h2 className={styles.ctaTitle}>Not sure which service you need?</h2>
            <p className={styles.ctaDesc}>Tell us what you&apos;re trying to achieve and we&apos;ll recommend the right approach.</p>
            <Link href="/contact" className={styles.ctaBtn}>
              Start a Conversation
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
