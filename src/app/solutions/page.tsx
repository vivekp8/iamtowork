import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Clock, Target, Settings, TrendingUp } from 'lucide-react';
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
  {
    q: 'How quickly can we expect to see results after deploying a solution?',
    a: 'Website revamps and core automation workflows go live within 1 to 3 weeks. You will notice immediate time savings and faster lead response times from day one of deployment.',
  },
  {
    q: 'Do you offer ongoing support after the solution is deployed?',
    a: 'Yes. Every project includes 30 days of post-launch warranty and monitoring, with optional monthly retainer plans for continuous optimization, feature expansion, and API maintenance.',
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

const GOAL_SOLUTIONS = [
  {
    goalTitle: 'Save Time',
    desc: 'Automate repetitive tasks and free your team for higher-value work.',
    icon: Clock,
    color: '#8B5CF6',
    items: [
      'Custom n8n and Make workflow automations',
      'Automated invoice and document extraction',
      'Automatic spreadsheet and database syncing',
    ],
    href: '/services/automation',
    cta: 'Explore Time-Saving Automations',
  },
  {
    goalTitle: 'Get More Leads',
    desc: 'Websites + lead capture systems + automated follow-ups.',
    icon: Target,
    color: '#2563EB',
    items: [
      'High-converting Next.js website & landing pages',
      'Instant WhatsApp & SMS lead notification triggers',
      'Automated CRM contact qualification & routing',
    ],
    href: '/services/websites',
    cta: 'Explore Lead Generation Solutions',
  },
  {
    goalTitle: 'Improve Operations',
    desc: 'Connect your tools and create smooth internal workflows.',
    icon: Settings,
    color: '#06B6D4',
    items: [
      'Seamless SaaS tool & API integrations',
      'Automated onboarding & notification pipelines',
      'Real-time business alerts and status digests',
    ],
    href: '/services/automation',
    cta: 'Explore Operational Systems',
  },
  {
    goalTitle: 'Scale Faster',
    desc: 'AI-powered systems that grow with your business without adding complexity.',
    icon: TrendingUp,
    color: '#10B981',
    items: [
      'Multi-channel AI content creation engines',
      'Scalable inbound marketing and nurture funnels',
      'Custom AI assistants for staff and customer support',
    ],
    href: '/services/ai-marketing',
    cta: 'Explore Growth Solutions',
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
            <span className={styles.eyebrow}>Outcome-Focused Solutions</span>
            <h1 className={styles.title}>Practical AI & Automation Solutions for Business Growth</h1>
            <p className={styles.sub}>
              Outcome-focused solutions designed to save time, improve operations, and help your business scale.
            </p>
          </header>

          {/* Solutions by Goal Section */}
          <section className={styles.goalsSection} aria-labelledby="goals-heading">
            <div className={styles.sectionHeader}>
              <span className={styles.sectionTag}>Solutions by Goal</span>
              <h2 id="goals-heading" className={styles.sectionTitle}>
                What Metric Do You Want to Improve?
              </h2>
              <p className={styles.sectionDesc}>
                We align our technology stack to directly solve your specific operational objective.
              </p>
            </div>

            <div className={styles.grid}>
              {GOAL_SOLUTIONS.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.goalTitle} className={styles.card}>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                        <Icon size={24} style={{ color: item.color }} />
                        <h3 className={styles.cardTitle} style={{ margin: 0 }}>{item.goalTitle}</h3>
                      </div>
                      <p className={styles.cardDesc}>{item.desc}</p>
                      
                      <ul style={{ listStyle: 'none', padding: 0, margin: '1rem 0', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        {item.items.map((it) => (
                          <li key={it} style={{ fontSize: '0.8125rem', color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <span style={{ color: item.color, fontWeight: 700 }}>✓</span> {it}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link href={item.href} className={styles.cardLink} style={{ color: item.color }}>
                      {item.cta} <ArrowRight size={14} />
                    </Link>
                  </div>
                );
              })}
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
            <h2 className={styles.ctaTitle}>Find the Right Solution for Your Business</h2>
            <p className={styles.ctaDesc}>
              Schedule a free 20-minute discovery call. We&apos;ll diagnose your operational bottlenecks and suggest practical solutions.
            </p>
            <Link href="/contact" className={styles.ctaBtn}>
              Find the Right Solution
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
