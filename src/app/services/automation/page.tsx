import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle2, Zap, ArrowRight, Database, MessageSquare, Bot } from 'lucide-react';
import SchemaMarkup from '@/components/SchemaMarkup';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Business Automation Services & n8n Workflows | I Am To Work',
  description:
    'Eliminate repetitive manual tasks with custom n8n and Make workflows, AI agents, automated lead qualification, CRM integrations, and smart notification alerts.',
  alternates: {
    canonical: '/services/automation',
  },
  openGraph: {
    title: 'Business Automation Services & n8n Workflows | I Am To Work',
    description:
      'Eliminate repetitive manual tasks with custom n8n and Make workflows, AI agents, automated lead qualification, CRM integrations, and smart notification alerts.',
    url: 'https://www.iamtowork.com/services/automation',
  },
};

const AUTOMATION_FAQS = [
  {
    q: 'What is the difference between n8n and Make for business automation?',
    a: 'n8n is a powerful open-source workflow automation platform that can be self-hosted with no execution limits and custom code flexibility. Make (Integromat) is a cloud-based visual automation tool ideal for connecting SaaS applications quickly. We evaluate your privacy, budget, and integration needs to recommend the ideal platform.',
  },
  {
    q: 'How long does it take to implement a custom automation workflow?',
    a: 'Standard workflows (like lead capture to WhatsApp and CRM routing) are typically deployed within 3 to 7 business days. Complex multi-system automations with custom AI processing logic generally take 1 to 3 weeks.',
  },
  {
    q: 'What happens if an external API or tool changes?',
    a: 'We build error-handling routines, automated retry logic, and fallback notifications (via Slack/Email/Telegram) into every workflow. We also provide ongoing maintenance and monitoring to ensure your automations never break silently.',
  },
  {
    q: 'Do I need to migrate away from my existing software or CRM?',
    a: 'No. Our automations integrate directly into your current tech stack — including HubSpot, Airtable, Notion, Google Workspace, WhatsApp, Supabase, Stripe, and custom databases.',
  },
];

const automationSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      name: 'Business Automation Services & Workflow Engineering',
      serviceType: 'Business Process Automation',
      provider: {
        '@type': 'Organization',
        name: 'I Am To Work',
        url: 'https://www.iamtowork.com',
      },
      description:
        'Custom n8n and Make automation pipelines, AI agent integrations, CRM routing, and lead qualification workflows.',
      url: 'https://www.iamtowork.com/services/automation',
    },
    {
      '@type': 'FAQPage',
      mainEntity: AUTOMATION_FAQS.map((faq) => ({
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
    icon: Zap,
    title: 'n8n Workflow Engineering',
    desc: 'Self-hosted and cloud n8n architectures with custom Javascript/Python nodes and complex multi-branch routing.',
    deliverables: ['Custom API endpoints', 'Webhooks & trigger logic', 'Data transformation & cleansing'],
  },
  {
    icon: Database,
    title: 'CRM & Lead Automation',
    desc: 'Capture inbound leads from website forms, qualify intent with AI, and instantly sync them to your CRM.',
    deliverables: ['HubSpot / Airtable sync', 'Lead scoring & qualification', 'Automated assignment rules'],
  },
  {
    icon: MessageSquare,
    title: 'WhatsApp & Notification Systems',
    desc: 'Instant alerts and conversational messaging pipelines triggered whenever key business events occur.',
    deliverables: ['WhatsApp Cloud API integration', 'Slack / Telegram admin alerts', 'SMS & transactional email'],
  },
  {
    icon: Bot,
    title: 'AI Agents & Document Parsing',
    desc: 'Extract structured information from PDFs, invoices, emails, and unstructured messages using OpenAI/Claude.',
    deliverables: ['Invoice & receipt processing', 'Auto-drafting customer replies', 'Sentiment & intent classification'],
  },
];

const INTEGRATIONS = [
  'n8n',
  'Make',
  'OpenAI API',
  'Anthropic Claude',
  'WhatsApp API',
  'Airtable',
  'HubSpot',
  'Supabase',
  'PostgreSQL',
  'Google Workspace',
  'Stripe',
  'Slack',
  'Notion',
  'Webhook Systems',
];

const PROCESS_STEPS = [
  { step: '01', title: 'Audit & Mapping', desc: 'We document your manual bottlenecks and identify high-ROI automation targets.' },
  { step: '02', title: 'System Architecture', desc: 'We design the data schemas, webhook triggers, and error-handling paths.' },
  { step: '03', title: 'Workflow Build', desc: 'We configure and code the workflows in n8n or Make with security controls.' },
  { step: '04', title: 'End-to-End QA', desc: 'We stress-test edge cases, rate limits, and fallback notifications.' },
  { step: '05', title: 'Deploy & Monitor', desc: 'We launch into production with live logging and staff documentation.' },
];

export default function AutomationPage() {
  return (
    <>
      <SchemaMarkup data={automationSchema} />
      <div className={styles.page}>
        <div className="container">
          {/* Header */}
          <header className={styles.header}>
            <span className={styles.eyebrow}>AUTOMATE</span>
            <h1 className={styles.title}>Automate Repetitive Work. Free Your Time to Scale.</h1>
            <p className={styles.sub}>
              We engineer custom n8n and Make workflows that eliminate manual data entry, connect your SaaS tools,
              and run your business operations 24/7 without human bottlenecks.
            </p>
            <div className={styles.heroActions}>
              <Link href="/contact" className={styles.heroCta}>
                Automate Your Workflow
              </Link>
              <Link href="#capabilities" className={styles.secondaryCta}>
                Explore Capabilities
              </Link>
            </div>
          </header>

          {/* Problem / Pain Point Section */}
          <section className={styles.problemSection} aria-labelledby="problem-heading">
            <div className={styles.sectionHeader}>
              <span className={styles.sectionTag}>The Operational Trap</span>
              <h2 id="problem-heading" className={styles.sectionTitle}>
                Manual Tasks Are Eating Your High-Value Hours
              </h2>
              <p className={styles.sectionDesc}>
                Most businesses lose 15+ hours weekly copying data between spreadsheets, chasing leads manually,
                and copy-pasting customer information.
              </p>
            </div>
            <div className={styles.problemGrid}>
              <div className={styles.problemCard}>
                <span className={styles.problemIcon}>⏳</span>
                <h3 className={styles.problemCardTitle}>Slow Lead Response</h3>
                <p className={styles.problemCardDesc}>
                  Every minute a new enquiry sits unanswered decreases conversion rates by 80%. Manual routing creates costly delays.
                </p>
              </div>
              <div className={styles.problemCard}>
                <span className={styles.problemIcon}>📉</span>
                <h3 className={styles.problemCardTitle}>Human Error & Lost Data</h3>
                <p className={styles.problemCardDesc}>
                  Manual data entry leads to missed follow-ups, duplicate CRM records, and disconnected communication across your team.
                </p>
              </div>
              <div className={styles.problemCard}>
                <span className={styles.problemIcon}>💸</span>
                <h3 className={styles.problemCardTitle}>Skyrocketing SaaS Costs</h3>
                <p className={styles.problemCardDesc}>
                  Overpaying for bloated enterprise automation subscriptions when lightweight, self-hosted n8n workflows can do more for less.
                </p>
              </div>
            </div>
          </section>

          {/* Capabilities Grid */}
          <section id="capabilities" className={styles.capabilitiesSection} aria-labelledby="cap-heading">
            <div className={styles.sectionHeader}>
              <span className={`${styles.sectionTag} ${styles.sectionTagPurple}`}>Core Capabilities</span>
              <h2 id="cap-heading" className={styles.sectionTitle}>
                Custom Automation Systems Built for Reliability
              </h2>
              <p className={styles.sectionDesc}>
                From simple notification hooks to complex multi-step AI business pipelines.
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
          <section className={styles.metricsSection} aria-labelledby="metrics-heading">
            <span className={`${styles.sectionTag} ${styles.sectionTagPositive}`}>Proven Impact</span>
            <h2 id="metrics-heading" className={styles.sectionTitle}>
              Real Business Efficiency by the Numbers
            </h2>
            <div className={styles.metricsGrid}>
              <div className={styles.metricItem}>
                <div className={styles.metricNumber}>15+ hrs</div>
                <div className={styles.metricLabel}>Time Saved Weekly</div>
                <p className={styles.metricDesc}>Per team member across administrative tasks</p>
              </div>
              <div className={styles.metricItem}>
                <div className={styles.metricNumber}>&lt; 60s</div>
                <div className={styles.metricLabel}>Lead Turnaround</div>
                <p className={styles.metricDesc}>Instant form processing and WhatsApp alerts</p>
              </div>
              <div className={styles.metricItem}>
                <div className={styles.metricNumber}>99.9%</div>
                <div className={styles.metricLabel}>Data Accuracy</div>
                <p className={styles.metricDesc}>Zero dropped records between your core systems</p>
              </div>
            </div>
          </section>

          {/* Integrations Bar */}
          <section className={styles.techBar} aria-labelledby="tech-heading">
            <span className={styles.sectionTag}>Ecosystem</span>
            <h2 id="tech-heading" className={styles.sectionTitle}>
              Tools & Platforms We Seamlessly Integrate
            </h2>
            <div className={styles.techList}>
              {INTEGRATIONS.map((tool) => (
                <span key={tool} className={styles.techBadge}>
                  <Zap size={14} color="#a78bfa" />
                  {tool}
                </span>
              ))}
            </div>
          </section>

          {/* Process Section */}
          <section className={styles.processSection} aria-labelledby="process-heading">
            <div className={styles.sectionHeader}>
              <span className={styles.sectionTag}>How We Deliver</span>
              <h2 id="process-heading" className={styles.sectionTitle}>
                5-Step Implementation Workflow
              </h2>
              <p className={styles.sectionDesc}>
                We build bulletproof workflows with robust error-handling so you never have to worry about silent failures.
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
          <section className={styles.faqSection} aria-labelledby="faq-heading">
            <div className={styles.sectionHeader}>
              <span className={styles.sectionTag}>Got Questions?</span>
              <h2 id="faq-heading" className={styles.sectionTitle}>
                Automation Services FAQ
              </h2>
            </div>
            <div className={styles.faqList}>
              {AUTOMATION_FAQS.map((faq) => (
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
            <h2 className={styles.ctaTitle}>Ready to Eliminate Repetitive Work?</h2>
            <p className={styles.ctaDesc}>
              Tell us about your current manual bottlenecks. We&apos;ll propose a custom automation architecture within 24 hours.
            </p>
            <div className={styles.ctaActions}>
              <Link href="/contact" className={styles.ctaBtn}>
                Get an Automation Blueprint <ArrowRight size={16} style={{ marginLeft: '0.5rem' }} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
