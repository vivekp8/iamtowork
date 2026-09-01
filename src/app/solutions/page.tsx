import { siteConfig } from '../../lib/config';
import { Button } from '../../components/Button';
import styles from './page.module.css';

export default function SolutionsPage() {
  return (
    <div className="container">
      <section className={styles.hero}>
        <h1 className={styles.title}>Solutions by Industry</h1>
        <p className={styles.desc}>We tailor our build, automate, and grow pillars to the specific needs of your sector.</p>
      </section>

      <section className={styles.sectorsGrid}>
        {siteConfig.sectors.map((sector) => (
          <div key={sector.id} className={styles.sectorCard}>
            <h2 className={styles.sectorTitle}>{sector.title}</h2>
            <p className={styles.sectorDesc}>{sector.description}</p>
            <Button href="/contact" variant="outline" className={styles.sectorBtn}>Learn More</Button>
          </div>
        ))}
      </section>
    </div>
  );
}
