import type { Metadata } from 'next';
import Link from 'next/link';
import Badge from '@/components/Badge';
import { PORTFOLIO_PROJECTS } from '@/lib/config';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Work | I Am To Work',
  description: 'Selected projects from I Am To Work — websites, automation, content, and AI solutions.',
};

const FILTERS = ['All', 'Websites', 'Automation', 'Content', 'Design', 'AI Solutions'];

export default function WorkPage() {
  return (
    <div className={styles.page}>
      <div className="container">
        <header className={styles.header}>
          <span className={styles.eyebrow}>Work</span>
          <h1 className={styles.title}>Selected Projects</h1>
          <p className={styles.sub}>
            A curated selection of our work. Concept projects are always clearly labelled — we never present demo work as client work.
          </p>
        </header>

        <div className={styles.notice}>
          <span className={styles.noticeIcon}>ℹ️</span>
          <p>
            <strong>Project transparency:</strong> All projects are labelled as either{' '}
            <Badge variant="client">Client Project</Badge> or{' '}
            <Badge variant="concept">Concept Project</Badge>. Concept projects demonstrate capability
            with hypothetical scenarios.
          </p>
        </div>

        <div className={styles.grid}>
          {PORTFOLIO_PROJECTS.map((project) => (
            <article key={project.id} className={styles.card}>
              <div className={styles.cardImage}>
                <span className={styles.imagePlaceholder}>{project.category[0]}</span>
              </div>
              <div className={styles.cardBody}>
                <div className={styles.cardMeta}>
                  <Badge variant={project.type}>
                    {project.type === 'concept' ? 'Concept Project' : 'Client Project'}
                  </Badge>
                  <span className={styles.category}>{project.category}</span>
                </div>
                <h2 className={styles.cardTitle}>{project.title}</h2>
                <p className={styles.cardDesc}>{project.description}</p>
                <div className={styles.techList}>
                  {project.technologies.map((tech) => (
                    <span key={tech} className={styles.techTag}>{tech}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className={styles.cta}>
          <h2 className={styles.ctaTitle}>Have a project in mind?</h2>
          <Link href="/contact" className={styles.ctaBtn}>Start a Project</Link>
        </div>
      </div>
    </div>
  );
}
