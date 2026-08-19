import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import SchemaMarkup from '@/components/SchemaMarkup';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'AI Business Solutions & Automation Systems | I Am To Work',
  description:
    'Practical AI and automation solutions that help businesses reduce manual work, improve operations, and scale with confidence.',
  alternates: {
    canonical: '/solutions',
  },
  openGraph: {
    title: 'AI Business Solutions & Automation Systems | I Am To Work',
    description:
      'Practical AI and automation solutions that help businesses reduce manual work, improve operations, and scale with confidence.',
    url: 'https://www.iamtowork.com/solutions',
  },
};

const SOLUTIONS_FAQS = [
  {
    q: 'What if my operational challenge spans across both website and automation?',
    a: 'We frequently combine website builds with backend automation. For example, building a high-converting Next.js website with an automated n8n pipeline that routes form leads instantly to WhatsApp and your CRM.',
  },
  {
    q: 'How do you determine the best approach for custom AI projects?',
    a: 'We start with a 30-minute discovery consultation to understand your exact business workflow, inputs, and desired outputs. We then deliver a clear architecture proposal with exact timelines and fixed deliverables.',
  },
  {
    q: 'Can you work with our existing development or marketing team?',
    a: 'Yes. We often act as a specialist implementation partner, delivering automation modules, custom AI scripts, or specific frontend components directly into your team&apos;s workflow.',
  },
];

const solutionsSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      name: 'Custom AI & Digital Business Solutions',
      serviceType: 'Consulting & Digital Solutions',
      provider: {
        '@type': 'Organization',
        name: 'I Am To Work',
        url: 'https://www.iamtowork.com',
      },
      description:
        'Tailored AI implementations, workflow automation, and custom web development organized around real-world business challenges.',
      url: 'https://www.iamtowork.com/solutions',
    },
    {
      '@type': 'FAQPage',
      mainEntity: SOLUTIONS_FAQS.map((faq) => ({
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

const SOLUTIONS = [
  {
    problem: 'I need a modern, high-converting website',
    desc: 'Your current website looks dated, loads slowly on mobile, or fails to turn visitors into booked calls and paying customers.',
    href: '/services/websites',
    cta: 'Explore Website Solutions',
    color: '#2563EB',
  },
  {
    problem: 'I want to eliminate manual data entry & repetitive tasks',
    desc: 'Your staff spends hours manually transferring data between forms, spreadsheets, and emails instead of focusing on growth.',
    href: '/services/automation',
    cta: 'Explore Automation Solutions',
    color: '#8B5CF6',
  },
  {
    problem: 'I need a consistent stream of on-brand content',
    desc: 'You want high-quality social posts, newsletters, landing page copy, and slide decks without spending days writing.',
    href: '/services/content-design',
    cta: 'Explore Content Solutions',
    color: '#06B6D4',
  },
  {
    problem: 'I want to build an automated inbound marketing system',
    desc: 'Your customer acquisition is inconsistent. You need an automated system that captures, qualifies, and nurtures leads 24/7.',
    href: '/services/ai-marketing',
    cta: 'Explore Marketing Solutions',
    color: '#10B981',
  },
  {
    problem: 'I need a custom AI chatbot or operational assistant',
    desc: 'You want an intelligent assistant that handles common customer inquiries, extracts invoice data, or assists internal teams.',
    href: '/contact',
    cta: 'Discuss Your AI Project',
    color: '#F59E0B',
  },
  {
    problem: 'I need a custom end-to-end digital transformation',
    desc: 'Your business challenges are unique and require a combination of custom software, AI workflows, and modern cloud deployment.',
    href: '/contact',
    cta: 'Talk to an AI Consultant',
    color: '#EC4899',
  },
];

const INDUSTRIES = [
  {
    icon: '🏢',
    title: 'Real Estate & Property',
    desc: 'Automated lead qualification from property portals, instant WhatsApp notifications, and CRM sync.',
  },
  {
    icon: '🍽️',
    title: 'Hospitality & Dining',
    desc: 'Ultra-fast mobile menus, table reservation workflows, and location-based SEO setup.',
  },
  {
    icon: '💼',
    title: 'Consultants & Agencies',
    desc: 'Executive portfolio websites, client proposal decks, and automated onboarding sequences.',
  },
  {
    icon: '🛍️',
    title: 'E-commerce & Brands',
    desc: 'AI product description engines, customer feedback analysis, and ad creative workflows.',
  },
];

export default function SolutionsPage() {
  return (
    <>
      <SchemaMarkup data={solutionsSchema} />
      <div className={styles.page}>
        <div className="container">
          {/* Header */}
          <header className={styles.header}>
            <span className={styles.eyebrow}>Solutions</span>
            <h1 className={styles.title}>Find the Right Solution for Your Business</h1>
            <p className={styles.sub}>
              Start with your operational bottleneck. We design and deliver practical, AI-driven solutions
              engineered to achieve measurable business outcomes.
            </p>
          </header>

          {/* Solutions Matrix */}
          <section className={styles.challengesSection} aria-labelledby="challenges-heading">
            <div className={styles.sectionHeader}>
              <span className={styles.sectionTag}>Problem Matrix</span>
              <h2 id="challenges-heading" className={styles.sectionTitle}>
                What Challenge Are You Looking to Solve?
              </h2>
            </div>
            <div className={styles.grid}>
              {SOLUTIONS.map((sol) => (
                <div key={sol.problem} className={styles.card}>
                  <div>
                    <div className={styles.bullet} style={{ backgroundColor: sol.color, marginBottom: '0.75rem' }} />
                    <h2 className={styles.cardTitle}>{sol.problem}</h2>
                  </div>
                  <p className={styles.cardDesc}>{sol.desc}</p>
                  <Link href={sol.href} className={styles.cardLink} style={{ color: sol.color }}>
                    {sol.cta} <ArrowRight size={14} />
                  </Link>
                </div>
              ))}
            </div>
          </section>

          {/* Industry Focus */}
          <section className={styles.industrySection} aria-labelledby="industry-heading">
            <div className={styles.sectionHeader}>
              <span className={styles.sectionTag}>Tailored Expertise</span>
              <h2 id="industry-heading" className={styles.sectionTitle}>
                Solutions by Industry
              </h2>
              <p className={styles.sectionDesc}>
                Proven automation blueprints and digital architectures customized for your market.
              </p>
            </div>
            <div className={styles.industryGrid}>
              {INDUSTRIES.map((ind) => (
                <div key={ind.title} className={styles.industryCard}>
                  <span className={styles.industryIcon}>{ind.icon}</span>
                  <h3 className={styles.industryTitle}>{ind.title}</h3>
                  <p className={styles.industryDesc}>{ind.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* FAQs */}
          <section className={styles.faqSection} aria-labelledby="sol-faq-heading">
            <div className={styles.sectionHeader}>
              <span className={styles.sectionTag}>Got Questions?</span>
              <h2 id="sol-faq-heading" className={styles.sectionTitle}>
                Solutions FAQ
              </h2>
            </div>
            <div className={styles.faqList}>
              {SOLUTIONS_FAQS.map((faq) => (
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
            <h2 className={styles.ctaTitle}>Still Unsure About the Right Approach?</h2>
            <p className={styles.ctaDesc}>
              Schedule a free 20-minute discovery call. We&apos;ll diagnose your operational bottlenecks and suggest practical solutions.
            </p>
            <Link href="/contact" className={styles.ctaBtn}>
              Schedule a Discovery Call
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
