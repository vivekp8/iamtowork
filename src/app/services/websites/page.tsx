import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle2, Globe, ArrowRight } from 'lucide-react';
import SchemaMarkup from '@/components/SchemaMarkup';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Custom Website Development Services | I Am To Work',
  description:
    'Modern, fast, and conversion-focused websites built for real business goals. Professional websites, landing pages, and redesigns available.',
  alternates: {
    canonical: '/services/websites',
  },
  openGraph: {
    title: 'Custom Website Development Services | I Am To Work',
    description:
      'Modern, fast, and conversion-focused websites built for real business goals. Professional websites, landing pages, and redesigns available.',
    url: 'https://www.iamtowork.com/services/websites',
  },
};

const WEBSITE_FAQS = [
  {
    q: 'Why do you build with Next.js and React instead of standard WordPress templates?',
    a: 'Next.js provides sub-second page load times, superior mobile Core Web Vitals, enterprise security (no vulnerable PHP plugins to get hacked), and custom design flexibility tailored precisely to your brand and conversion goals.',
  },
  {
    q: 'How long does a website project typically take from start to finish?',
    a: 'A high-converting landing page takes 5 to 10 business days. A complete multi-page business website typically takes 2 to 4 weeks depending on content readiness.',
  },
  {
    q: 'Will my website be optimized for mobile phones and search engines?',
    a: 'Yes. Every website we deliver is 100% mobile-responsive, includes semantic HTML markup, structured JSON-LD schema, OpenGraph social sharing meta tags, XML sitemaps, and optimized Core Web Vitals.',
  },
  {
    q: 'Can I update the content on my website after launch?',
    a: 'Yes. We can integrate lightweight CMS solutions (like Supabase, Notion, or Sanity) or provide straightforward markdown/content schemas so your team can easily update copy, products, or blog articles.',
  },
  {
    q: 'Do I own the website code, domain, and assets after launch?',
    a: 'Yes, 100%. We transfer the entire GitHub repository, DNS configurations, and deployment accounts directly to you with zero vendor lock-in or recurring proprietary platform fees.',
  },
  {
    q: 'Can you redesign or migrate my existing slow website?',
    a: 'Absolutely. We specialize in taking slow, outdated websites on WordPress, Wix, or Squarespace and re-architecting them into modern, ultra-fast Next.js assets while preserving your existing SEO rankings.',
  },
];

const websiteServiceSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      name: 'Custom Website Development & Web Design',
      serviceType: 'Web Development & Design',
      provider: {
        '@type': 'Organization',
        name: 'I Am To Work',
        url: 'https://www.iamtowork.com',
      },
      description:
        'Custom Next.js web development, mobile-first design, SEO architecture, and conversion-focused landing pages.',
      url: 'https://www.iamtowork.com/services/websites',
    },
    {
      '@type': 'FAQPage',
      mainEntity: WEBSITE_FAQS.map((faq) => ({
        '@type': 'Question',
        name: faq.q,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.a,
        },
      })),
    },
  ],
};

const TYPES = [
  { label: 'Business Websites', desc: 'Complete multi-page digital headquarters designed to establish credibility and convert traffic.' },
  { label: 'Landing Pages', desc: 'Laser-focused single pages engineered for paid ad campaigns or new product launches.' },
  { label: 'Startup Websites', desc: 'Speed-to-market websites that clearly communicate your value proposition to investors & users.' },
  { label: 'Portfolio Websites', desc: 'Authority-building portfolio sites for founders, consultants, coaches, and boutique firms.' },
  { label: 'Service & Restaurant Websites', desc: 'Interactive menus, reservation integrations, operating hours, and location maps.' },
  { label: 'Website Redesigns', desc: 'Transform outdated, slow websites into modern, ultra-fast Next.js digital assets.' },
];

const DELIVERABLES = [
  'Modern UI/UX design',
  'Fully responsive design',
  'Fast loading speed',
  'Clear calls-to-action',
  'Contact forms + WhatsApp integration',
  'Basic SEO setup',
  'Performance optimisation',
];

const TECH_STACK = [
  'Next.js 16 (App Router)',
  'React 19',
  'TypeScript',
  'Tailwind CSS / CSS Modules',
  'Vercel Global Edge CDN',
  'Supabase',
  'Figma',
  'Framer Motion',
];

const PROCESS = [
  { step: '01', title: 'Understand Your Goals', desc: 'We align on your business model, customer journey, and conversion targets.' },
  { step: '02', title: 'Plan Structure & Design Direction', desc: 'We map the user flow and design modern desktop and mobile prototypes.' },
  { step: '03', title: 'Design & Develop', desc: 'We build the site with clean Next.js code, optimizing performance and responsive breakpoints.' },
  { step: '04', title: 'Review & Refine', desc: 'We run cross-browser QA, mobile speed tests, and fine-tune based on your feedback.' },
  { step: '05', title: 'Launch & Support', desc: 'We connect your domain, configure DNS & SSL, and provide post-launch support.' },
];

export default function WebsitesPage() {
  return (
    <>
      <SchemaMarkup data={websiteServiceSchema} />
      <div className={styles.page}>
        <div className="container">
          {/* Header */}
          <header className={styles.header}>
            <span className={styles.eyebrow}>BUILD</span>
            <h1 className={styles.title}>Modern Websites Built for Real Business Results</h1>
            <p className={styles.sub}>
              Clean, fast, and conversion-focused websites that help you attract clients and make a strong first impression.
            </p>
            <div className={styles.heroActions}>
              <Link href="/contact" className={styles.heroCta}>
                Start Your Website Project
              </Link>
              <Link href="#types" className={styles.secondaryCta}>
                View Website Types
              </Link>
            </div>
          </header>

          {/* Problem Section */}
          <section className={styles.problemSection} aria-labelledby="web-problem-heading">
            <div className={styles.sectionHeader}>
              <span className={styles.sectionTag}>The Digital Challenge</span>
              <h2 id="web-problem-heading" className={styles.sectionTitle}>
                Is an Outdated Website Holding You Back?
              </h2>
              <p className={styles.sectionDesc}>
                Many businesses still operate with outdated, slow, or confusing websites. This leads to lost trust, fewer enquiries, and missed opportunities.
              </p>
            </div>
            <div className={styles.problemGrid}>
              <div className={styles.problemCard}>
                <span className={styles.problemIcon}>🐌</span>
                <h3 className={styles.problemCardTitle}>Slow Loading Speed</h3>
                <p className={styles.problemCardDesc}>
                  Visitors abandon websites that take longer than 3 seconds to load. Outdated templates kill conversions.
                </p>
              </div>
              <div className={styles.problemCard}>
                <span className={styles.problemIcon}>📱</span>
                <h3 className={styles.problemCardTitle}>Poor Mobile Experience</h3>
                <p className={styles.problemCardDesc}>
                  Clunky layouts and hard-to-click buttons turn away mobile visitors where the majority of traffic originates.
                </p>
              </div>
              <div className={styles.problemCard}>
                <span className={styles.problemIcon}>📉</span>
                <h3 className={styles.problemCardTitle}>Unclear Conversion Path</h3>
                <p className={styles.problemCardDesc}>
                  Vague messaging and buried contact options cause visitors to bounce without ever reaching out.
                </p>
              </div>
            </div>
          </section>

          {/* Types Section: What We Build */}
          <section id="types" className={styles.typesSection} aria-labelledby="types-heading">
            <div className={styles.sectionHeader}>
              <span className={`${styles.sectionTag} ${styles.sectionTagBlue}`}>What We Build</span>
              <h2 id="types-heading" className={styles.sectionTitle}>
                Websites Tailored to Your Business Goals
              </h2>
            </div>
            <div className={styles.typesGrid}>
              {TYPES.map((type) => (
                <div key={type.label} className={styles.typeCard}>
                  <h3 className={styles.typeLabel}>{type.label}</h3>
                  <p className={styles.typeDesc}>{type.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Deliverables Section: What's Included */}
          <section className={styles.deliverablesSection} aria-labelledby="del-heading">
            <div>
              <span className={`${styles.sectionTag} ${styles.sectionTagBlue}`}>Complete Package</span>
              <h2 id="del-heading" className={styles.sectionTitle}>
                What&apos;s Included in Every Build
              </h2>
              <p className={styles.delDesc}>
                We do not cut corners. Every project includes comprehensive design, performance, and SEO foundations.
              </p>
              <ul className={styles.delList}>
                {DELIVERABLES.map((item) => (
                  <li key={item} className={styles.delItem}>
                    <CheckCircle2 size={16} className={styles.checkIcon} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Metrics inside section */}
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div className={styles.metricsSection} style={{ margin: 0, padding: '2rem' }}>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '1.5rem', color: 'var(--text-main)' }}>Engineering Standards</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  <div>
                    <div className={styles.metricNumber}>&lt; 1.0s</div>
                    <div className={styles.metricLabel}>LCP Page Load Time</div>
                  </div>
                  <div>
                    <div className={styles.metricNumber}>100%</div>
                    <div className={styles.metricLabel}>Mobile Responsive Layouts</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Tech Bar */}
          <section className={styles.techBar} aria-labelledby="web-tech-heading">
            <span className={styles.sectionTag}>Modern Technology</span>
            <h2 id="web-tech-heading" className={styles.sectionTitle}>
              Built on Modern, Scalable Web Infrastructure
            </h2>
            <div className={styles.techList}>
              {TECH_STACK.map((tool) => (
                <span key={tool} className={styles.techBadge}>
                  <Globe size={14} color="#60a5fa" />
                  {tool}
                </span>
              ))}
            </div>
          </section>

          {/* Process Section */}
          <section className={styles.processSection} aria-labelledby="web-process-heading">
            <div className={styles.sectionHeader}>
              <span className={styles.sectionTag}>Our Process</span>
              <h2 id="web-process-heading" className={styles.sectionTitle}>
                How We Deliver Your Website
              </h2>
              <p className={styles.sectionDesc}>
                Clear communication, transparent milestones, and zero unexpected surprises.
              </p>
            </div>
            <div className={styles.processTimeline}>
              {PROCESS.map((p) => (
                <div key={p.step} className={styles.processCard}>
                  <div className={styles.processNum}>{p.step}</div>
                  <h3 className={styles.processCardTitle}>{p.title}</h3>
                  <p className={styles.processCardDesc}>{p.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* FAQs */}
          <section className={styles.faqSection} aria-labelledby="web-faq-heading">
            <div className={styles.sectionHeader}>
              <span className={styles.sectionTag}>Got Questions?</span>
              <h2 id="web-faq-heading" className={styles.sectionTitle}>
                Website Development FAQ
              </h2>
            </div>
            <div className={styles.faqList}>
              {WEBSITE_FAQS.map((faq) => (
                <details key={faq.q} className={styles.faqItem}>
                  <summary className={styles.faqQuestion}>
                    <span>{faq.q}</span>
                  </summary>
                  <div className={styles.faqAnswer}>
                    <p>{faq.a}</p>
                  </div>
                </details>
              ))}
            </div>
          </section>

          {/* Final CTA */}
          <div className={styles.cta}>
            <h2 className={styles.ctaTitle}>Ready to Build Your High-Performance Website?</h2>
            <p className={styles.ctaDesc}>
              Tell us about your business goals and current web setup. We&apos;ll propose a tailored scope and timeline.
            </p>
            <div className={styles.ctaActions}>
              <Link href="/contact" className={styles.ctaBtn}>
                Start Your Website Project <ArrowRight size={16} style={{ marginLeft: '0.5rem' }} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
