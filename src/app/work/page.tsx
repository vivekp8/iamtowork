import type { Metadata } from 'next';
import Link from 'next/link';
import Badge from '@/components/Badge';
import SchemaMarkup from '@/components/SchemaMarkup';
import { PORTFOLIO_PROJECTS } from '@/lib/config';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Case Studies & Selected Client Projects | I Am To Work',
  description:
    'Browse our portfolio of custom web applications, n8n automation pipelines, and AI solutions delivered for businesses across hospitality, consulting, and tech.',
  alternates: {
    canonical: '/work',
  },
  openGraph: {
    title: 'Case Studies & Selected Client Projects | I Am To Work',
    description:
      'Browse our portfolio of custom web applications, n8n automation pipelines, and AI solutions delivered for businesses across hospitality, consulting, and tech.',
    url: 'https://www.iamtowork.com/work',
  },
};

const workSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Case Studies & Selected Client Projects | I Am To Work',
  description:
    'Curated case studies demonstrating measurable business outcomes from custom website builds and n8n workflow automations.',
  url: 'https://www.iamtowork.com/work',
};

export default function WorkPage() {
  return (
    <>
      <SchemaMarkup data={workSchema} />
      <div className={styles.page}>
        <div className="container">
          <header className={styles.header}>
            <span className={styles.eyebrow}>Case Studies</span>
            <h1 className={styles.title}>Selected Projects & Proven Outcomes</h1>
            <p className={styles.sub}>
              Explore how we design, build, and automate solutions that solve real operational bottlenecks.
            </p>
          </header>

          <div className={styles.notice}>
            <span className={styles.noticeIcon}>ℹ️</span>
            <p>
              <strong>Project transparency:</strong> All projects are labelled as either{' '}
              <Badge variant="client">Client Project</Badge> or{' '}
              <Badge variant="concept">Concept Project</Badge>. Concept projects demonstrate capability
              with realistic business requirements.
            </p>
          </div>

          <div className={styles.grid}>
            {PORTFOLIO_PROJECTS.map((project) => (
              <article key={project.id} className={styles.card}>
                <div>
                  <div className={styles.cardMeta}>
                    <Badge variant={project.type}>
                      {project.type === 'concept' ? 'Concept Project' : 'Client Project'}
                    </Badge>
                    <span className={styles.category}>{project.category}</span>
                  </div>
                  <h2 className={styles.cardTitle}>{project.title}</h2>

                  {/* Case Study Details */}
                  <div className={styles.caseStudyBody}>
                    <div className={styles.caseStudyRow}>
                      <span className={styles.caseStudyLabel}>Client</span>
                      <span className={styles.caseStudyValue}>{project.client}</span>
                    </div>

                    <div className={styles.caseStudyRow}>
                      <span className={styles.caseStudyLabel}>Challenge</span>
                      <span className={styles.caseStudyValue}>{project.challenge}</span>
                    </div>

                    <div className={styles.caseStudyRow}>
                      <span className={styles.caseStudyLabel}>Solution</span>
                      <span className={styles.caseStudyValue}>{project.solution}</span>
                    </div>

                    <div className={`${styles.caseStudyRow} ${styles.resultRow}`}>
                      <span className={styles.caseStudyLabel}>Result</span>
                      <span className={`${styles.caseStudyValue} ${styles.resultValue}`}>
                        ✨ {project.result}
                      </span>
                    </div>
                  </div>
                </div>

                <div>
                  <div className={styles.techList}>
                    {project.technologies.map((tech) => (
                      <span key={tech} className={styles.techTag}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className={styles.cta}>
            <h2 className={styles.ctaTitle}>Ready to Achieve Similar Results?</h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '1.75rem' }}>
              Tell us about your business challenge and let&apos;s build a custom solution.
            </p>
            <Link href="/contact" className={styles.ctaBtn}>
              Start a Project
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
