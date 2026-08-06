import Link from 'next/link';
import Badge from '@/components/Badge';
import { PORTFOLIO_PROJECTS } from '@/lib/config';
import styles from './PortfolioSection.module.css';

export default function PortfolioSection() {
  const featured = PORTFOLIO_PROJECTS.slice(0, 3);

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.eyebrow}>Selected Work</span>
          <h2 className={styles.title}>Recent Projects</h2>
          <p className={styles.sub}>
            A selection of projects showcasing our approach. All concept projects are clearly labelled (client results coming soon).
          </p>
        </div>

        <div className={styles.grid}>
          {featured.map((project) => (
            <div key={project.id} className={styles.card}>
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
                <h3 className={styles.cardTitle}>{project.title}</h3>
                <p className={styles.cardDesc}>{project.description}</p>
                <div className={styles.techList}>
                  {project.technologies.map((tech) => (
                    <span key={tech} className={styles.techTag}>{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.cta}>
          <Link href="/work" className={styles.ctaLink}>
            View All Work →
          </Link>
        </div>
      </div>
    </section>
  );
}
