import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle2, TrendingUp, ArrowRight, Target, Share2, Users, BarChart3, Bot, Layers } from 'lucide-react';
import SchemaMarkup from '@/components/SchemaMarkup';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'AI Marketing & Growth Services | I Am To Work',
  description:
    'AI-powered marketing systems, content engines, and lead generation solutions that help businesses attract more clients and grow faster.',
  alternates: {
    canonical: '/services/ai-marketing',
  },
  openGraph: {
    title: 'AI Marketing & Growth Services | I Am To Work',
    description:
      'AI-powered marketing systems, content engines, and lead generation solutions that help businesses attract more clients and grow faster.',
    url: 'https://www.iamtowork.com/services/ai-marketing',
  },
};

const MARKETING_FAQS = [
  {
    q: 'How does AI marketing differ from traditional digital marketing agency services?',
    a: 'Traditional agencies rely entirely on manual production, resulting in slow campaign turnarounds and high retainer costs. We use AI models for research, copy generation, audience segmentation, and multi-channel repurposing, combined with human strategic oversight. You get 5x more output at a fraction of typical agency costs.',
  },
  {
    q: 'Will our marketing content sound robotic or generic?',
    a: 'No. We train custom brand voice frameworks and tone guidelines for your business. Every piece of content is thoroughly edited, fact-checked, and approved by human copywriters before publication.',
  },
  {
    q: 'Which channels do you support for automated marketing workflows?',
    a: 'We build systems for LinkedIn, X (Twitter), Instagram, YouTube Shorts, email newsletters (Beehiiv, Substack, Mailchimp), and SEO-driven blog distribution.',
  },
  {
    q: 'How do you track return on investment (ROI)?',
    a: 'We set up automated reporting dashboards connecting your CRM and analytics tools (Google Analytics 4, Meta Pixel, LinkedIn Campaign Manager) so you see exact lead acquisition numbers, customer touchpoints, and conversion rates.',
  },
];

const aiMarketingSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      name: 'AI Marketing & Automated Growth Systems',
      serviceType: 'Digital Marketing & Growth Automation',
      provider: {
        '@type': 'Organization',
        name: 'I Am To Work',
        url: 'https://www.iamtowork.com',
      },
      description:
        'AI-driven marketing strategy, multi-channel content engines, automated lead nurture funnels, and CRM performance tracking.',
      url: 'https://www.iamtowork.com/services/ai-marketing',
    },
    {
      '@type': 'FAQPage',
      mainEntity: MARKETING_FAQS.map((faq) => ({
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

const WHAT_WE_OFFER = [
  {
    icon: Target,
    title: 'AI Marketing Strategy',
    desc: 'Deep market analysis, customer persona creation, and positioning blueprints engineered using LLM market intelligence.',
  },
  {
    icon: Share2,
    title: 'Content Systems',
    desc: 'Repeatable pipelines that transform founder insights into LinkedIn posts, newsletters, and social assets at scale.',
  },
  {
    icon: Users,
    title: 'Lead Generation Systems',
    desc: 'High-converting landing pages combined with automated lead magnets and instant CRM qualification sequences.',
  },
  {
    icon: BarChart3,
    title: 'Marketing Automation',
    desc: 'Event-triggered email nurture sequences and automated pipeline follow-ups that turn prospects into clients.',
  },
  {
    icon: Layers,
    title: 'Social Media Support Systems',
    desc: 'AI-assisted scheduling, hashtag optimization, and community engagement prompts for consistent brand presence.',
  },
  {
    icon: Bot,
    title: 'AI Implementation for Marketing Teams',
    desc: 'Empowering your in-house staff with custom GPTs, tailored prompt libraries, and automated creative tools.',
  },
];

const BENEFITS = [
  {
    title: 'Create better content faster',
    desc: 'Turn a single core brief or voice note into multi-platform content assets in minutes instead of days.',
  },
  {
    title: 'Generate and nurture leads more effectively',
    desc: 'Automated lead capture funnels and email nurture sequences working 24/7 without manual intervention.',
  },
  {
    title: 'Reduce manual marketing work',
    desc: 'Eliminate tedious formatting, manual scheduling, and repetitive copy adjustments across channels.',
  },
  {
    title: 'Improve consistency across channels',
    desc: 'Maintain active authority on LinkedIn, email newsletters, and social platforms every single week.',
  },
  {
    title: 'Make data-driven decisions',
    desc: 'Clear conversion tracking dashboards that connect your marketing campaigns directly to closed revenue.',
  },
];

const TECH_TOOLS = [
  'ChatGPT Enterprise',
  'Claude 3.5 Sonnet',
  'Midjourney',
  'Canva AI',
  'ElevenLabs',
  'Beehiiv',
  'Buffer / Hootsuite',
  'HubSpot',
  'Google Analytics 4',
  'Meta Ads Manager',
  'LinkedIn Campaign Manager',
  'Make / n8n',
];

const PROCESS_STEPS = [
  { step: '01', title: 'Brand & Audience Audit', desc: 'We analyze your target market, tone of voice, and historical marketing performance.' },
  { step: '02', title: 'Growth Architecture', desc: 'We design your content system, lead funnel blueprint, and automation stack.' },
  { step: '03', title: 'Asset & Engine Setup', desc: 'We build the landing pages, email workflows, and AI content prompt pipelines.' },
  { step: '04', title: 'Campaign Launch', desc: 'We deploy multi-channel content and activate automated inbound capture.' },
  { step: '05', title: 'Optimize & Scale', desc: 'We review conversion analytics weekly and continuously double down on top performers.' },
];

export default function AIMarketingPage() {
  return (
    <>
      <SchemaMarkup data={aiMarketingSchema} />
      <div className={styles.page}>
        <div className="container">
          {/* Header */}
          <header className={styles.header}>
            <span className={styles.eyebrow}>GROW</span>
            <h1 className={styles.title}>AI-Powered Marketing Systems That Help You Grow</h1>
            <p className={styles.sub}>
              Practical AI marketing solutions that improve content, lead generation, and customer engagement.
            </p>
            <div className={styles.heroActions}>
              <Link href="/contact" className={styles.heroCta}>
                Improve Your Marketing with AI
              </Link>
              <Link href="#capabilities" className={styles.secondaryCta}>
                Explore Services
              </Link>
            </div>
          </header>

          {/* Problem Section */}
          <section className={styles.problemSection} aria-labelledby="growth-problem-heading">
            <div className={styles.sectionHeader}>
              <span className={styles.sectionTag}>The Growth Bottleneck</span>
              <h2 id="growth-problem-heading" className={styles.sectionTitle}>
                Inconsistent Marketing Produces Inconsistent Revenue
              </h2>
              <p className={styles.sectionDesc}>
                Most founders and marketing teams struggle to maintain regular content and follow-ups while running daily operations.
              </p>
            </div>
            <div className={styles.problemGrid}>
              <div className={styles.problemCard}>
                <span className={styles.problemIcon}>📉</span>
                <h3 className={styles.problemCardTitle}>Content Burnout</h3>
                <p className={styles.problemCardDesc}>
                  Spending hours writing a single blog or post, only for it to disappear in algorithms without multi-platform leverage.
                </p>
              </div>
              <div className={styles.problemCard}>
                <span className={styles.problemIcon}>🕳️</span>
                <h3 className={styles.problemCardTitle}>Leaky Inbound Funnels</h3>
                <p className={styles.problemCardDesc}>
                  Traffic lands on your site but leaves without engaging because there is no automated lead capture or nurture sequence.
                </p>
              </div>
              <div className={styles.problemCard}>
                <span className={styles.problemIcon}>💰</span>
                <h3 className={styles.problemCardTitle}>Costly Agency Retainers</h3>
                <p className={styles.problemCardDesc}>
                  Paying traditional agencies thousands monthly for slow turnarounds, generic copy, and opaque reporting.
                </p>
              </div>
            </div>
          </section>

          {/* What We Offer Grid */}
          <section id="capabilities" className={styles.capabilitiesSection} aria-labelledby="marketing-cap-heading">
            <div className={styles.sectionHeader}>
              <span className={`${styles.sectionTag} ${styles.sectionTagGreen}`}>Capabilities</span>
              <h2 id="marketing-cap-heading" className={styles.sectionTitle}>
                What We Offer
              </h2>
              <p className={styles.sectionDesc}>
                Everything you need to build authority, capture qualified demand, and turn traffic into clients.
              </p>
            </div>
            <div className={styles.grid}>
              {WHAT_WE_OFFER.map((cap) => {
                const IconComponent = cap.icon;
                return (
                  <div key={cap.title} className={styles.card}>
                    <div className={styles.cardHeader}>
                      <IconComponent size={28} className={styles.checkIcon} strokeWidth={1.75} style={{ marginBottom: '1rem' }} />
                      <h3 className={styles.cardTitle}>{cap.title}</h3>
                      <p className={styles.cardDesc}>{cap.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Benefits Section */}
          <section className={styles.metricsSection} aria-labelledby="marketing-metrics-heading">
            <span className={`${styles.sectionTag} ${styles.sectionTagGreen}`}>Core Benefits</span>
            <h2 id="marketing-metrics-heading" className={styles.sectionTitle}>
              Why Use AI in Your Marketing Strategy?
            </h2>
            <div className={styles.metricsGrid}>
              {BENEFITS.slice(0, 3).map((b) => (
                <div key={b.title} className={styles.metricItem}>
                  <div className={styles.metricLabel}>{b.title}</div>
                  <p className={styles.metricDesc}>{b.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Tech Bar */}
          <section className={styles.techBar} aria-labelledby="marketing-tech-heading">
            <span className={styles.sectionTag}>Tech Stack</span>
            <h2 id="marketing-tech-heading" className={styles.sectionTitle}>
              Marketing & AI Platforms in Our Tooling Ecosystem
            </h2>
            <div className={styles.techList}>
              {TECH_TOOLS.map((tool) => (
                <span key={tool} className={styles.techBadge}>
                  <TrendingUp size={14} color="#34d399" />
                  {tool}
                </span>
              ))}
            </div>
          </section>

          {/* Process Section */}
          <section className={styles.processSection} aria-labelledby="marketing-process-heading">
            <div className={styles.sectionHeader}>
              <span className={styles.sectionTag}>Execution Roadmap</span>
              <h2 id="marketing-process-heading" className={styles.sectionTitle}>
                How We Build Your Growth System
              </h2>
              <p className={styles.sectionDesc}>
                A structured 5-step sprint from initial positioning to automated daily distribution.
              </p>
            </div>
            <div className={styles.processTimeline}>
              {PROCESS_STEPS.map((step) => (
                <div key={step.step} className={styles.processCard}>
                  <div className={styles.processNum}>{step.step}</div>
                  <h3 className={styles.processCardTitle}>{step.title}</h3>
                  <p className={styles.processCardDesc}>{step.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* FAQs */}
          <section className={styles.faqSection} aria-labelledby="marketing-faq-heading">
            <div className={styles.sectionHeader}>
              <span className={styles.sectionTag}>Got Questions?</span>
              <h2 id="marketing-faq-heading" className={styles.sectionTitle}>
                AI Marketing FAQ
              </h2>
            </div>
            <div className={styles.faqList}>
              {MARKETING_FAQS.map((faq) => (
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
            <h2 className={styles.ctaTitle}>Ready to Accelerate Your Customer Acquisition?</h2>
            <p className={styles.ctaDesc}>
              Let&apos;s map out an AI-assisted marketing engine that delivers compounding pipeline growth.
            </p>
            <div className={styles.ctaActions}>
              <Link href="/contact" className={styles.ctaBtn}>
                Improve Your Marketing with AI <ArrowRight size={16} style={{ marginLeft: '0.5rem' }} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
