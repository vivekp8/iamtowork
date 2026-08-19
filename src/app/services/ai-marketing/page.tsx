import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle2, TrendingUp, ArrowRight, Target, Share2, Layers, BarChart3, Users } from 'lucide-react';
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

const CAPABILITIES = [
  {
    icon: Target,
    title: 'AI Marketing Strategy & Positioning',
    desc: 'Deep competitor research, customer persona generation, and positioning blueprints engineered using LLM analysis.',
    deliverables: ['Competitor gap analysis', 'Audience segmentation models', 'Channel priority matrix'],
  },
  {
    icon: Share2,
    title: 'Multi-Channel Content Engines',
    desc: 'Systems that transform 1 core idea or founder voice note into 10+ platform-specific assets (LinkedIn, Twitter, Newsletters).',
    deliverables: ['Weekly content calendars', 'Cross-platform auto-formatting', 'High-engagement hook templates'],
  },
  {
    icon: Users,
    title: 'Automated Inbound Lead Funnels',
    desc: 'High-converting landing pages combined with automated lead magnets, instant qualification, and nurture sequences.',
    deliverables: ['Lead magnet creation', 'Email drip sequences', 'Instant calendar booking flows'],
  },
  {
    icon: Layers,
    title: 'Social Media Management & Distribution',
    desc: 'Strategic organic presence management with AI-assisted scheduling, hashtag optimization, and community engagement prompts.',
    deliverables: ['LinkedIn founder branding', 'X / Twitter growth threads', 'Visual asset generation'],
  },
  {
    icon: BarChart3,
    title: 'Marketing Automation & Attribution',
    desc: 'Event-triggered campaigns that nurture prospects based on page visits, email clicks, and document downloads.',
    deliverables: ['Behavioral email triggers', 'CRM lead scoring', 'GA4 & conversion attribution setup'],
  },
  {
    icon: TrendingUp,
    title: 'Business AI Implementation',
    desc: 'Empowering your in-house marketing team with custom GPTs, prompt libraries, and automated creative tools.',
    deliverables: ['Custom AI marketing bots', 'Brand prompt library', 'Team training & SOPs'],
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
            <h1 className={styles.title}>Grow Your Business with AI-Assisted Marketing</h1>
            <p className={styles.sub}>
              We build repeatable content systems, automated lead generation funnels, and marketing engines that
              consistently attract customers without burning out your team.
            </p>
            <div className={styles.heroActions}>
              <Link href="/contact" className={styles.heroCta}>
                Start Your Growth Engine
              </Link>
              <Link href="#capabilities" className={styles.secondaryCta}>
                Explore Capabilities
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

          {/* Capabilities Grid */}
          <section id="capabilities" className={styles.capabilitiesSection} aria-labelledby="marketing-cap-heading">
            <div className={styles.sectionHeader}>
              <span className={`${styles.sectionTag} ${styles.sectionTagGreen}`}>Core Capabilities</span>
              <h2 id="marketing-cap-heading" className={styles.sectionTitle}>
                Intelligent Marketing Services Built to Scale
              </h2>
              <p className={styles.sectionDesc}>
                Everything you need to build authority, capture qualified demand, and turn traffic into clients.
              </p>
            </div>
            <div className={styles.grid}>
              {CAPABILITIES.map((cap) => {
                const IconComponent = cap.icon;
                return (
                  <div key={cap.title} className={styles.card}>
                    <div className={styles.cardHeader}>
                      <IconComponent size={28} className={styles.checkIcon} strokeWidth={1.75} style={{ marginBottom: '1rem' }} />
                      <h3 className={styles.cardTitle}>{cap.title}</h3>
                      <p className={styles.cardDesc}>{cap.desc}</p>
                    </div>
                    <ul className={styles.cardDeliverables}>
                      {cap.deliverables.map((item) => (
                        <li key={item} className={styles.delItem}>
                          <CheckCircle2 size={14} className={styles.checkIcon} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Measurable ROI */}
          <section className={styles.metricsSection} aria-labelledby="marketing-metrics-heading">
            <span className={`${styles.sectionTag} ${styles.sectionTagGreen}`}>Growth Impact</span>
            <h2 id="marketing-metrics-heading" className={styles.sectionTitle}>
              Compounding Results Through Automation
            </h2>
            <div className={styles.metricsGrid}>
              <div className={styles.metricItem}>
                <div className={styles.metricNumber}>5x</div>
                <div className={styles.metricLabel}>Content Output</div>
                <p className={styles.metricDesc}>Multi-platform distribution from a single core brief</p>
              </div>
              <div className={styles.metricItem}>
                <div className={styles.metricNumber}>+42%</div>
                <div className={styles.metricLabel}>Lead Capture Lift</div>
                <p className={styles.metricDesc}>With automated lead magnets & instant nurture flows</p>
              </div>
              <div className={styles.metricItem}>
                <div className={styles.metricNumber}>100%</div>
                <div className={styles.metricLabel}>Brand Alignment</div>
                <p className={styles.metricDesc}>Trained custom tone models with human QA oversight</p>
              </div>
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
                Book a Marketing Strategy Call <ArrowRight size={16} style={{ marginLeft: '0.5rem' }} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
