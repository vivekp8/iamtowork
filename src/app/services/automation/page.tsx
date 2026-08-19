import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle2, Zap, ArrowRight, Database, MessageSquare, Bot, FileText, Settings } from 'lucide-react';
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
    a: 'Most clients eliminate 10 to 15+ hours per week of manual data copying, lead follow-up delays, and reporting busywork, often seeing full project payback within the first 30 to 60 days.',
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

const WHAT_WE_AUTOMATE = [
  {
    icon: Database,
    title: 'Lead capture & CRM updates',
    desc: 'Automatically capture inbound web leads, qualify them, and create clean records in HubSpot, Airtable, or Notion.',
  },
  {
    icon: MessageSquare,
    title: 'WhatsApp & email notifications',
    desc: 'Send instant WhatsApp alerts to team members and automated confirmation emails to prospective clients.',
  },
  {
    icon: Zap,
    title: 'Form processing',
    desc: 'Validate, route, and transform multi-step form submissions without manual human intervention.',
  },
  {
    icon: Settings,
    title: 'Data syncing between tools',
    desc: 'Keep spreadsheets, databases, billing apps, and communication channels 100% in sync around the clock.',
  },
  {
    icon: Bot,
    title: 'AI-powered document processing',
    desc: 'Extract structured information from incoming PDF invoices, receipts, and emails using Claude & OpenAI models.',
  },
  {
    icon: FileText,
    title: 'Internal workflow automation',
    desc: 'Automate client onboarding packets, scheduled reporting digests, task creation, and team status alerts.',
  },
];

const BENEFITS = [
  {
    stat: '10–15+ hrs',
    title: 'Save 10–15+ hours per week',
    desc: 'Free your team from repetitive manual grunt work so they can focus on high-leverage growth.',
  },
  {
    stat: '< 60s',
    title: 'Respond to leads in under 60 seconds',
    desc: 'Connect with prospective buyers while their intent is highest, radically boosting conversions.',
  },
  {
    stat: '99.9%',
    title: 'Reduce human error',
    desc: 'Eliminate typos, duplicate data, and dropped leads with automated validation rules.',
  },
  {
    stat: '$$$',
    title: 'Lower operational costs',
    desc: 'Replace expensive bloated enterprise subscriptions with lean, reliable workflows.',
  },
  {
    stat: '10x',
    title: 'Scale without hiring more people',
    desc: 'Handle 5x to 10x your current inquiry and processing volume without expanding headcount.',
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
  { step: '01', title: 'Audit Your Current Workflows', desc: 'We analyze your manual tasks and pinpoint high-ROI automation opportunities.' },
  { step: '02', title: 'Design the Automation Architecture', desc: 'We map out the data schemas, trigger logic, and error-handling paths.' },
  { step: '03', title: 'Build & Test the Workflows', desc: 'We configure the workflows in n8n or Make and run rigorous QA edge-case testing.' },
  { step: '04', title: 'Deploy with Monitoring', desc: 'We launch live in production with real-time error alerts and logging.' },
  { step: '05', title: 'Train Your Team & Support', desc: 'We provide video walkthroughs, documentation, and ongoing support.' },
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
              Custom n8n and Make workflows that eliminate manual tasks, connect your tools, and run your operations 24/7.
            </p>
            <div className={styles.heroActions}>
              <Link href="/contact" className={styles.heroCta}>
                Get Your Automation Blueprint
              </Link>
              <Link href="#capabilities" className={styles.secondaryCta}>
                Explore Capabilities
              </Link>
            </div>
          </header>

          {/* Problem Section */}
          <section className={styles.problemSection} aria-labelledby="problem-heading">
            <div className={styles.sectionHeader}>
              <span className={styles.sectionTag}>The Operational Trap</span>
              <h2 id="problem-heading" className={styles.sectionTitle}>
                Manual Tasks Are Eating Your High-Value Hours
              </h2>
              <p className={styles.sectionDesc}>
                Most businesses lose 10–15 hours every week on repetitive work — copying data, following up on leads manually, and managing tools that don’t talk to each other.
              </p>
            </div>
            <div className={styles.problemGrid}>
              <div className={styles.problemCard}>
                <span className={styles.problemIcon}>⏳</span>
                <h3 className={styles.problemCardTitle}>Slow Lead Follow-ups</h3>
                <p className={styles.problemCardDesc}>
                  Every minute a new enquiry sits unanswered decreases conversion rates by 80%. Manual routing creates costly delays.
                </p>
              </div>
              <div className={styles.problemCard}>
                <span className={styles.problemIcon}>📉</span>
                <h3 className={styles.problemCardTitle}>Human Error & Lost Data</h3>
                <p className={styles.problemCardDesc}>
                  Manual copy-pasting leads to missing follow-ups, duplicate CRM records, and disconnected communication across your team.
                </p>
              </div>
              <div className={styles.problemCard}>
                <span className={styles.problemIcon}>💸</span>
                <h3 className={styles.problemCardTitle}>Disconnected Software Tools</h3>
                <p className={styles.problemCardDesc}>
                  Your forms, spreadsheets, and messaging apps don&apos;t communicate, forcing your team to act as manual bridges.
                </p>
              </div>
            </div>
          </section>

          {/* Capabilities Grid: What We Automate */}
          <section id="capabilities" className={styles.capabilitiesSection} aria-labelledby="cap-heading">
            <div className={styles.sectionHeader}>
              <span className={`${styles.sectionTag} ${styles.sectionTagPurple}`}>Capabilities</span>
              <h2 id="cap-heading" className={styles.sectionTitle}>
                What We Automate
              </h2>
              <p className={styles.sectionDesc}>
                Custom automation systems engineered to eliminate friction from your daily operations.
              </p>
            </div>
            <div className={styles.grid}>
              {WHAT_WE_AUTOMATE.map((cap) => {
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

          {/* Benefits Section */}
          <section className={styles.metricsSection} aria-labelledby="metrics-heading">
            <span className={`${styles.sectionTag} ${styles.sectionTagPositive}`}>Core Benefits</span>
            <h2 id="metrics-heading" className={styles.sectionTitle}>
              Why Automate Your Business Operations?
            </h2>
            <div className={styles.metricsGrid}>
              {BENEFITS.slice(0, 3).map((b) => (
                <div key={b.title} className={styles.metricItem}>
                  <div className={styles.metricNumber}>{b.stat}</div>
                  <div className={styles.metricLabel}>{b.title}</div>
                  <p className={styles.metricDesc}>{b.desc}</p>
                </div>
              ))}
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
              <span className={styles.sectionTag}>Our Process</span>
              <h2 id="process-heading" className={styles.sectionTitle}>
                How We Deliver Your Automations
              </h2>
              <p className={styles.sectionDesc}>
                A structured 5-step sprint from workflow discovery to production deployment.
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
                Get Your Automation Blueprint <ArrowRight size={16} style={{ marginLeft: '0.5rem' }} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
