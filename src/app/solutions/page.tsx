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

const GOAL_GROUPS = [
  {
    goalTitle: 'Save Time & Eliminate Manual Busywork',
    icon: '⚡',
    solutions: [
      {
        title: 'n8n & Make Workflow Automations',
        desc: 'Connect your web forms, CRM, spreadsheets, and messaging apps to eliminate manual copy-pasting and routine data transfer.',
        who: 'Teams spending 10+ hours weekly copying data between disconnected software tools.',
        href: '/services/automation',
        cta: 'Explore Automation Solutions',
        color: '#8B5CF6',
      },
      {
        title: 'AI Document & Invoice Processing',
        desc: 'Extract structured data from PDF invoices, emails, and contracts directly into your accounting spreadsheets and databases.',
        who: 'Finance teams, operations managers, and property managers handling heavy paperwork.',
        href: '/services/automation',
        cta: 'View Document AI Workflows',
        color: '#8B5CF6',
      },
    ],
  },
  {
    goalTitle: 'Get More Qualified Leads & Convert Higher',
    icon: '🎯',
    solutions: [
      {
        title: 'High-Converting Next.js Websites',
        desc: 'Ultra-fast, mobile-first websites designed with clear value propositions, interactive booking flows, and instant lead capture forms.',
        who: 'Businesses with slow, outdated WordPress sites or low mobile conversion rates.',
        href: '/services/websites',
        cta: 'Explore Website Development',
        color: '#2563EB',
      },
      {
        title: 'Instant WhatsApp & CRM Lead Routing',
        desc: 'Trigger immediate WhatsApp alerts to sales reps and create enriched CRM contacts within 60 seconds of form submission.',
        who: 'Service businesses where fast response time directly impacts closing rates.',
        href: '/services/automation',
        cta: 'View Lead Routing Pipelines',
        color: '#2563EB',
      },
    ],
  },
  {
    goalTitle: 'Scale Marketing & Build Brand Authority',
    icon: '📈',
    solutions: [
      {
        title: 'Multi-Channel AI Content Engines',
        desc: 'Repurpose founder insights or a single 5-minute recording into LinkedIn posts, newsletters, and social graphics on autopilot.',
        who: 'Founders and executives who want consistent visibility without writing for hours.',
        href: '/services/ai-marketing',
        cta: 'Explore Content Engines',
        color: '#10B981',
      },
      {
        title: 'Automated Lead Nurture Funnels',
        desc: 'Behavior-based email drip campaigns and lead magnets that educate prospects and guide them toward booking consultations.',
        who: 'B2B service providers looking to monetize website traffic and build email lists.',
        href: '/services/ai-marketing',
        cta: 'View Marketing Funnels',
        color: '#10B981',
      },
    ],
  },
  {
    goalTitle: 'Optimize Internal Operations & Support',
    icon: '🤖',
    solutions: [
      {
        title: 'Custom AI Chatbots & Customer Assistants',
        desc: 'Intelligent support bots trained on your company docs and FAQs that answer client inquiries accurately 24/7.',
        who: 'Businesses receiving repetitive pre-sale questions or support inquiries.',
        href: '/contact',
        cta: 'Discuss AI Assistant Setup',
        color: '#F59E0B',
      },
      {
        title: 'Custom Digital Transformation Consulting',
        desc: 'Full-stack audit and tailored architecture uniting modern web engineering, AI models, and automated back-office pipelines.',
        who: 'Companies needing a bespoke technical partner to modernize legacy workflows.',
        href: '/contact',
        cta: 'Request Transformation Audit',
        color: '#EC4899',
      },
    ],
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
            <span className={styles.eyebrow}>Solutions by Business Goal</span>
            <h1 className={styles.title}>Outcome-Driven AI & Web Solutions</h1>
            <p className={styles.sub}>
              Tell us what business metric you want to improve. We design and deliver practical, AI-assisted systems engineered to achieve measurable outcomes.
            </p>
          </header>

          {/* Grouped Goals Section */}
          <section className={styles.goalsSection} aria-labelledby="goals-heading">
            {GOAL_GROUPS.map((group) => (
              <div key={group.goalTitle} className={styles.goalGroup}>
                <div className={styles.goalHeader}>
                  <span className={styles.goalIcon}>{group.icon}</span>
                  <h2 className={styles.goalTitle}>{group.goalTitle}</h2>
                </div>

                <div className={styles.grid}>
                  {group.solutions.map((sol) => (
                    <div key={sol.title} className={styles.card}>
                      <div>
                        <h3 className={styles.cardTitle}>{sol.title}</h3>
                        <p className={styles.cardDesc}>{sol.desc}</p>
                        <div className={styles.cardWho}>
                          <strong>Ideal for:</strong> {sol.who}
                        </div>
                      </div>
                      <Link href={sol.href} className={styles.cardLink} style={{ color: sol.color }}>
                        {sol.cta} <ArrowRight size={14} />
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            ))}
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
