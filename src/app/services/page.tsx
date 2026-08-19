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

const PILLAR_BENEFITS: Record<string, string[]> = {
  build: [
    'Sub-second page loads optimized for mobile conversion rates',
    'Custom clean Next.js code with zero proprietary builder lock-in',
    'Built-in technical SEO and conversion tracking architectures',
  ],
  automate: [
    'Save 15+ hours weekly by automating manual repetitive data entry',
    'Instant WhatsApp, Slack, and email notifications for high-intent leads',
    'Robust custom n8n and Make workflows with error-handling safeguards',
  ],
  grow: [
    'Multi-channel AI content engines that repurpose founder insights',
    'Automated email nurture pipelines that convert cold visitors into clients',
    'Scalable, data-backed customer acquisition systems',
  ],
};

const DECISION_GUIDE = [
  {
    problem: 'My website is slow, outdated, or doesn’t convert visitors into leads.',
    recommendation: 'Custom Website Development',
    link: '/services/websites',
    pillar: 'Build',
  },
  {
    problem: 'My team is drowning in manual data entry, slow follow-ups, and copy-pasting.',
    recommendation: 'Business Automation & n8n Workflows',
    link: '/services/automation',
    pillar: 'Automate',
  },
  {
    problem: 'I need consistent marketing content and automated lead generation funnels.',
    recommendation: 'AI Marketing & Growth Systems',
    link: '/services/ai-marketing',
    pillar: 'Grow',
  },
];

export default function ServicesPage() {
  return (
    <>
      <SchemaMarkup data={servicesCatalogSchema} />
      <div className={styles.page}>
        <div className="container">
          <header className={styles.header}>
            <span className={styles.eyebrow}>Services Overview</span>
            <h1 className={styles.title}>AI & Web Development Services</h1>
            <p className={styles.sub}>
              Practical services organised around the three ways we help businesses grow.
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
                    
                    <ul className={styles.benefitList}>
                      {PILLAR_BENEFITS[pillar.id]?.map((benefit) => (
                        <li key={benefit}>
                          <span style={{ color: pillar.color, fontWeight: 700 }}>✓</span> {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {service && (
                    <div className={styles.serviceItems}>
                      <span style={{ fontSize: '0.8125rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-main)' }}>
                        Included Capabilities
                      </span>
                      {service.items.map((item) => (
                        <span key={item} className={styles.serviceItem}>{item}</span>
                      ))}
                      <Link href={service.slug} className={styles.serviceLink} style={{ color: pillar.color }}>
                        Explore detailed {pillar.label.toLowerCase()} services →
                      </Link>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Which Service Do You Need Guide */}
          <section className={styles.guideSection} aria-labelledby="guide-heading">
            <div className={styles.guideHeader}>
              <span className={styles.eyebrow}>Decision Guide</span>
              <h2 id="guide-heading" className={styles.guideTitle}>Which Service Do You Need?</h2>
              <p className={styles.guideSub}>Match your current operational bottleneck to the most effective solution.</p>
            </div>

            <div className={styles.guideGrid}>
              {DECISION_GUIDE.map((guide) => (
                <div key={guide.recommendation} className={styles.guideCard}>
                  <div>
                    <span className={styles.guideProblem}>If your challenge is:</span>
                    <p className={styles.guideProblemText}>&ldquo;{guide.problem}&rdquo;</p>
                  </div>
                  <div className={styles.guideSolution}>
                    <div className={styles.guideSolutionLabel}>Recommended Solution</div>
                    <div className={styles.guideSolutionText}>{guide.recommendation}</div>
                  </div>
                  <Link href={guide.link} className={styles.guideBtn}>
                    View Service Details →
                  </Link>
                </div>
              ))}
            </div>
          </section>

          <WebsiteFeature />

          <div className={styles.cta}>
            <h2 className={styles.ctaTitle}>Not sure which service you need?</h2>
            <p className={styles.ctaDesc}>
              Start a conversation. Tell us what you want to build, automate, or improve and we’ll help you find the right approach.
            </p>
            <Link href="/contact" className={styles.ctaBtn}>
              Start a Conversation
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
