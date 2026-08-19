import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle2, ArrowRight, PenTool, Layout, Presentation, Video, Sparkles, FileText } from 'lucide-react';
import SchemaMarkup from '@/components/SchemaMarkup';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'AI Content Creation & Creative Design Services | I Am To Work',
  description:
    'High-impact copywriting, social media assets, marketing graphics, and presentation decks produced with cutting-edge AI tools and refined by expert human review.',
  alternates: {
    canonical: '/services/content-design',
  },
  openGraph: {
    title: 'AI Content Creation & Creative Design Services | I Am To Work',
    description:
      'High-impact copywriting, social media assets, marketing graphics, and presentation decks produced with cutting-edge AI tools and refined by expert human review.',
    url: 'https://www.iamtowork.com/services/content-design',
  },
};

const CONTENT_FAQS = [
  {
    q: 'How do you guarantee quality and prevent generic AI-generated copy?',
    a: 'We use a Human-in-the-Loop (HITL) methodology. AI models generate initial research, multiple angles, and draft variations. Every single asset is then edited, fact-checked, and polished by seasoned copywriters and designers to ensure high emotional resonance and factual accuracy.',
  },
  {
    q: 'What types of creative assets do you produce?',
    a: 'We produce website sales copy, SEO articles, LinkedIn carousels, slide pitch decks, ad creatives, social media graphics, product descriptions, and video scripts.',
  },
  {
    q: 'Can you match our existing brand design guidelines?',
    a: 'Yes. We ingest your typography, color palettes, tone of voice, and brand guidelines into our workflow environments before generating any production deliverables.',
  },
  {
    q: 'What is the turnaround time for content packages?',
    a: 'Weekly content batches (social posts, newsletter, and blog copy) are delivered within 48 to 72 hours of receiving the weekly brief or recording.',
  },
];

const contentSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      name: 'AI Content Creation & Creative Design Services',
      serviceType: 'Content Creation & Digital Design',
      provider: {
        '@type': 'Organization',
        name: 'I Am To Work',
        url: 'https://www.iamtowork.com',
      },
      description:
        'AI-assisted copywriting, social media graphics, brand decks, video scripting, and marketing creatives refined with human oversight.',
      url: 'https://www.iamtowork.com/services/content-design',
    },
    {
      '@type': 'FAQPage',
      mainEntity: CONTENT_FAQS.map((faq) => ({
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
    icon: FileText,
    title: 'High-Converting Web Copywriting',
    desc: 'Persuasive website copy, landing page headlines, and email sequences that communicate value clearly and drive conversions.',
    deliverables: ['Landing page copy', 'Email sales sequences', 'Case study writeups'],
  },
  {
    icon: Sparkles,
    title: 'Social Media Content & Carousels',
    desc: 'Scroll-stopping LinkedIn posts, visual carousels, and X threads engineered to build founder authority and brand engagement.',
    deliverables: ['LinkedIn carousels (PDF/Visual)', 'X / Twitter growth threads', 'Monthly content editorial calendar'],
  },
  {
    icon: Layout,
    title: 'AI Design & Marketing Graphics',
    desc: 'On-brand social graphics, featured blog banners, ad creatives, and digital product covers crafted with Midjourney and Canva.',
    deliverables: ['Social media visual templates', 'Digital ad creatives (Static & GIF)', 'Ebook / Lead magnet covers'],
  },
  {
    icon: Presentation,
    title: 'Pitch Decks & Presentations',
    desc: 'Sleek, executive slide decks for client proposals, investor pitches, webinars, and keynote speaking engagements.',
    deliverables: ['Investor pitch decks', 'Client proposal decks', 'Keynote & workshop slides'],
  },
  {
    icon: Video,
    title: 'Video Scripting & Short-Form Content',
    desc: 'Engaging scripts and AI-assisted short-form video formatting (Reels/TikTok/Shorts) with captions and visual hooks.',
    deliverables: ['Hook & retention scripting', 'CapCut / Descript editing workflows', 'Voiceover generation with ElevenLabs'],
  },
  {
    icon: PenTool,
    title: 'SEO Article & Editorial Writing',
    desc: 'In-depth, search-optimized articles written with comprehensive keyword coverage, structured headings, and original analysis.',
    deliverables: ['Long-form SEO blog posts', 'Industry thought leadership', 'Content repurposing workflows'],
  },
];

const CREATIVE_TOOLS = [
  'Claude 3.5 Sonnet',
  'Midjourney v6',
  'Canva Pro & AI',
  'Figma',
  'ElevenLabs',
  'CapCut Pro',
  'Descript',
  'ChatGPT Enterprise',
  'Notion AI',
  'Adobe Creative Suite',
];

const PROCESS_STEPS = [
  { step: '01', title: 'Brand Tone Ingestion', desc: 'We capture your tone of voice, visual preferences, and ideal customer profile.' },
  { step: '02', title: 'Ideation & Angle Sprint', desc: 'We generate multi-angle hooks, content themes, and visual concepts for review.' },
  { step: '03', title: 'AI Generation + Human Craft', desc: 'Drafts are produced via advanced models and refined word-by-word by professional editors.' },
  { step: '04', title: 'Client Review & Feedback', desc: 'Fast, seamless feedback cycles via shared Notion / Figma workspaces.' },
  { step: '05', title: 'Final Delivery & Assets', desc: 'Ready-to-publish copy, formatted PDFs, and high-res visual assets delivered on schedule.' },
];

export default function ContentDesignPage() {
  return (
    <>
      <SchemaMarkup data={contentSchema} />
      <div className={styles.page}>
        <div className="container">
          {/* Header */}
          <header className={styles.header}>
            <span className={styles.eyebrow}>CREATE</span>
            <h1 className={styles.title}>Professional Content Created with AI Intelligence</h1>
            <p className={styles.sub}>
              From high-converting landing page copy to social media visuals and investor decks — we produce elite creative work
              powered by state-of-the-art AI tools and perfected by human judgment.
            </p>
            <div className={styles.heroActions}>
              <Link href="/contact" className={styles.heroCta}>
                Start Creating Content
              </Link>
              <Link href="#capabilities" className={styles.secondaryCta}>
                Explore Capabilities
              </Link>
            </div>
          </header>

          {/* Problem Section */}
          <section className={styles.problemSection} aria-labelledby="content-problem-heading">
            <div className={styles.sectionHeader}>
              <span className={styles.sectionTag}>The Creative Dilemma</span>
              <h2 id="content-problem-heading" className={styles.sectionTitle}>
                High-Volume Content Usually Means Low Quality
              </h2>
              <p className={styles.sectionDesc}>
                Generic AI tools flood the internet with hollow copy, while traditional designers and copywriters take weeks to deliver.
              </p>
            </div>
            <div className={styles.problemGrid}>
              <div className={styles.problemCard}>
                <span className={styles.problemIcon}>🤖</span>
                <h3 className={styles.problemCardTitle}>Generic AI Clichés</h3>
                <p className={styles.problemCardDesc}>
                  Unedited raw AI outputs full of buzzwords (&quot;delve&quot;, &quot;tapestry&quot;, &quot;revolutionize&quot;) that instantly erode your brand credibility.
                </p>
              </div>
              <div className={styles.problemCard}>
                <span className={styles.problemIcon}>🐢</span>
                <h3 className={styles.problemCardTitle}>Slow Creative Turnarounds</h3>
                <p className={styles.problemCardDesc}>
                  Waiting 2+ weeks for simple slide decks or graphics slows down your sales cycle and marketing momentum.
                </p>
              </div>
              <div className={styles.problemCard}>
                <span className={styles.problemIcon}>🧩</span>
                <h3 className={styles.problemCardTitle}>Fragmented Brand Voice</h3>
                <p className={styles.problemCardDesc}>
                  Freelancers producing disconnected designs and copy that fail to match your core business identity.
                </p>
              </div>
            </div>
          </section>

          {/* Capabilities Grid */}
          <section id="capabilities" className={styles.capabilitiesSection} aria-labelledby="content-cap-heading">
            <div className={styles.sectionHeader}>
              <span className={`${styles.sectionTag} ${styles.sectionTagCyan}`}>Creative Portfolio</span>
              <h2 id="content-cap-heading" className={styles.sectionTitle}>
                Comprehensive Content & Creative Design Services
              </h2>
              <p className={styles.sectionDesc}>
                Engineered to stand out in crowded feeds and turn readers into paying customers.
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
          <section className={styles.metricsSection} aria-labelledby="content-metrics-heading">
            <span className={`${styles.sectionTag} ${styles.sectionTagCyan}`}>Efficiency & Reach</span>
            <h2 id="content-metrics-heading" className={styles.sectionTitle}>
              Speed, Quality, and Engagement Combined
            </h2>
            <div className={styles.metricsGrid}>
              <div className={styles.metricItem}>
                <div className={styles.metricNumber}>72 hrs</div>
                <div className={styles.metricLabel}>Turnaround Time</div>
                <p className={styles.metricDesc}>From raw weekly brief to final polished deliverables</p>
              </div>
              <div className={styles.metricItem}>
                <div className={styles.metricNumber}>100%</div>
                <div className={styles.metricLabel}>Human-Refined</div>
                <p className={styles.metricDesc}>Zero unvetted AI fluff or factual hallucinations</p>
              </div>
              <div className={styles.metricItem}>
                <div className={styles.metricNumber}>3x</div>
                <div className={styles.metricLabel}>Audience Engagement</div>
                <p className={styles.metricDesc}>Higher retention and click-throughs on social & web</p>
              </div>
            </div>
          </section>

          {/* Tech Bar */}
          <section className={styles.techBar} aria-labelledby="content-tech-heading">
            <span className={styles.sectionTag}>Creative Suite</span>
            <h2 id="content-tech-heading" className={styles.sectionTitle}>
              Industry-Leading AI & Design Software
            </h2>
            <div className={styles.techList}>
              {CREATIVE_TOOLS.map((tool) => (
                <span key={tool} className={styles.techBadge}>
                  <Sparkles size={14} color="#38bdf8" />
                  {tool}
                </span>
              ))}
            </div>
          </section>

          {/* Process Section */}
          <section className={styles.processSection} aria-labelledby="content-process-heading">
            <div className={styles.sectionHeader}>
              <span className={styles.sectionTag}>How We Deliver</span>
              <h2 id="content-process-heading" className={styles.sectionTitle}>
                Our Human + AI Creative Workflow
              </h2>
              <p className={styles.sectionDesc}>
                A proven system that combines algorithmic speed with artistic craftsmanship.
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
          <section className={styles.faqSection} aria-labelledby="content-faq-heading">
            <div className={styles.sectionHeader}>
              <span className={styles.sectionTag}>Got Questions?</span>
              <h2 id="content-faq-heading" className={styles.sectionTitle}>
                Content & Creative Design FAQ
              </h2>
            </div>
            <div className={styles.faqList}>
              {CONTENT_FAQS.map((faq) => (
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
            <h2 className={styles.ctaTitle}>Need Content That Actually Converts?</h2>
            <p className={styles.ctaDesc}>
              Tell us about your brand and what creative assets you need. We&apos;ll prepare a customized content sprint proposal.
            </p>
            <div className={styles.ctaActions}>
              <Link href="/contact" className={styles.ctaBtn}>
                Request a Content Sprint <ArrowRight size={16} style={{ marginLeft: '0.5rem' }} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
