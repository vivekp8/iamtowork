import { siteConfig } from '../../../lib/config';
import { Badge } from '../../../components/Badge';
import { Button } from '../../../components/Button';
import styles from '../websites/page.module.css';

export default function AutomationPage() {
  const pillar = siteConfig.pillars.find(p => p.id === 'automate');
  
  if (!pillar) return null;

  return (
    <div className="container">
      <section className={styles.hero}>
        <Badge color="purple" className={styles.badge}>{pillar.tagline}</Badge>
        <h1 className={styles.title}>{pillar.title}</h1>
        <p className={styles.desc}>{pillar.description}</p>
        
        <div className={styles.features}>
          <h2>Why Automate?</h2>
          <ul>
            {pillar.features.map((f, i) => (
              <li key={i}>{f}</li>
            ))}
          </ul>
        </div>
        
        <div className={styles.cta}>
          <Button href="/contact">Start Your Automation Project</Button>
        </div>
      </section>
    </div>
  );
}
