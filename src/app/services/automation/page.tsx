import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle2, Zap, ArrowRight, Database, MessageSquare, Bot, FileText, Bell } from 'lucide-react';
import SchemaMarkup from '@/components/SchemaMarkup';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Business Automation Services & n8n Workflows | I Am To Work',
  description:
    'Eliminate repetitive tasks with custom n8n and Make automations. Save 15+ hours weekly and run your business operations more efficiently.',
  alternates: {
    canonical: '/services/automation',
  },
  openGraph: {
    title: 'Business Automation Services & n8n Workflows | I Am To Work',
    description:
      'Eliminate repetitive tasks with custom n8n and Make automations. Save 15+ hours weekly and run your business operations more efficiently.',
    url: 'https://www.iamtowork.com/services/automation',
  },
};

const AUTOMATION_FAQS = [
  {
    q: 'What is the difference between n8n and Make for business automation?',
    a: 'n8n is an open-source workflow automation platform that can be self-hosted with zero per-execution fees and full custom code flexibility. Make (Integromat) is a cloud-based visual automation tool ideal for connecting SaaS applications quickly. We evaluate your privacy, volume, and security needs to recommend the ideal engine.',
  },
  {
    q: 'How long does it take to implement a custom automation workflow?',
    a: 'Standard workflows (such as instant lead capture to WhatsApp and CRM routing) are typically deployed within 3 to 7 business days. Complex multi-system automations with custom AI data transformation logic generally take 1 to 2 weeks.',
  },
  {
    q: 'What happens if an external API or third-party service changes?',
    a: 'We build robust error-handling routines, automated retry mechanisms, and instant fallback notifications (via Slack/Email/Telegram) into every workflow. We also provide ongoing maintenance so your operations never break silently.',
  },
  {
    q: 'Do I need to replace my existing software or CRM?',
    a: 'No. Our automations integrate directly into your current tech stack — including HubSpot, Airtable, Notion, Google Workspace, WhatsApp, Supabase, Stripe, and custom databases.',
  },
  {
    q: 'Who owns the automation workflows and data once built?',
    a: 'You do. We build workflows directly in your own cloud instances or accounts, document every step thoroughly, and hand over 100% administrative control upon completion.',
  },
  {
    q: 'How much time and money can my team realistically save?',
    a: 'Most clients eliminate 12 to 20 hours per week of manual data copying, lead follow-up delays, and reporting busywork, often seeing full project payback within the first 30 to 60 days.',
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

const EXAMPLE_WORKFLOWS = [
  {
    badge: 'Live Workflow Architecture',
    title: 'Instant Lead Capture & WhatsApp Routing',
    desc: 'Eliminates the delay between a website visitor requesting a quote and sales following up.',
    steps: [
      'Visitor submits inquiry form on website',
      'n8n validates data & enriches lead profile via AI',
      'Contact record automatically created in HubSpot/Airtable',
      'Instant WhatsApp notification sent to on-duty sales rep (< 45s)',
    ],
    result: 'Reduces lead response time from hours to under 60 seconds, boosting conversion by 40%.',
  },
  {
    badge: 'Live Workflow Architecture',
    title: 'Automated Invoice & Document Extraction',
    desc: 'Turns vendor invoices and receipts into structured financial records without human typing.',
    steps: [
      'Vendor emails PDF invoice to finance inbox',
      'Webhook triggers Claude Vision to parse line items & amounts',
      'Line items matched with Stripe transactions & logged to Sheets',
      'Slack notification alert sent if amount exceeds budget threshold',
    ],
    result: 'Saves 10+ hours of monthly accounting data entry with 100% accuracy.',
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

          {/* Real-World Workflow Examples Showcase */}
          <section className={styles.workflowSection} aria-labelledby="workflows-heading">
            <div className={styles.sectionHeader}>
              <span className={`${styles.sectionTag} ${styles.sectionTagPurple}`}>Real-World Blueprints</span>
              <h2 id="workflows-heading" className={styles.sectionTitle}>
                Example Automations We Build
              </h2>
              <p className={styles.sectionDesc}>
                Take a look under the hood at standard workflow pipelines we design and deploy for our clients.
              </p>
            </div>

            <div className={styles.workflowGrid}>
              {EXAMPLE_WORKFLOWS.map((wf) => (
                <div key={wf.title} className={styles.workflowCard}>
                  <div>
                    <span className={styles.workflowBadge}>{wf.badge}</span>
                    <h3 className={styles.workflowTitle}>{wf.title}</h3>
                    <p className={styles.workflowDesc}>{wf.desc}</p>
                    <div className={styles.workflowSteps}>
                      {wf.steps.map((step, idx) => (
                        <div key={step} className={styles.workflowStepItem}>
                          <span className={styles.workflowStepNum}>{idx + 1}</span>
                          <span>{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className={styles.workflowResult}>
                    <span>✨</span> {wf.result}
                  </div>
                </div>
              ))}
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
