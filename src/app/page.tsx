import Image from 'next/image';
import { siteConfig } from '../lib/config';
import { Button } from '../components/Button';
import { Badge } from '../components/Badge';
import styles from './page.module.css';

export default function Home() {
  return (
    <>
      <section className={styles.hero}>
        <div className={`container ${styles.heroContent}`}>
          <Badge className={styles.heroBadge}>AI Services for Modern Businesses</Badge>
          <h1 className={styles.headline}>
            <span className={styles.headlineLine}>Reclaim Your Time.</span>
            <span className={styles.accent}>Automate the Busywork.</span>
          </h1>
          <p className={styles.sub}>
            We build custom AI websites and smart automations that help your business run smoothly — without the manual grind.
          </p>
          <div className={styles.actions}>
            <Button href="/contact" variant="primary">Book Free Consultation</Button>
            <Button href="/services" variant="secondary">View Services →</Button>
          </div>
          <div style={{ marginTop: '3rem', width: '100%', display: 'flex', justifyContent: 'center' }}>
            <Image 
              src="/iamtowork-full-banner.png" 
              alt="I Am To Work Banner" 
              width={1200} 
              height={600} 
              style={{ width: '100%', height: 'auto', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}
              priority
            />
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className="container">
          <div className={styles.header}>
            <h2 className={styles.title}>What do you want to accomplish?</h2>
            <p className={styles.subtext}>Select your goal and we'll show you the right solution.</p>
          </div>
          
          <div className={styles.grid}>
            <a href="/services/websites" className={styles.card}>
              <span className={styles.label}>Launch a Website</span>
              <span className={styles.arrow}>→</span>
            </a>
            <a href="/services/automation" className={styles.card}>
              <span className={styles.label}>Automate My Work</span>
              <span className={styles.arrow}>→</span>
            </a>
            <a href="/services/ai-marketing" className={styles.card}>
              <span className={styles.label}>Improve Marketing</span>
              <span className={styles.arrow}>→</span>
            </a>
            <a href="/solutions" className={styles.card}>
              <span className={styles.label}>View Solutions by Industry</span>
              <span className={styles.arrow}>→</span>
            </a>
          </div>
        </div>
      </section>

      <section className={styles.sectionAlt}>
        <div className="container">
          <div className={styles.header}>
            <span className={styles.eyebrow}>What We Do</span>
            <h2 className={styles.title}>Three Ways We Help Your Business</h2>
            <p className={styles.subtext}>From websites to automation, from content to growth — practical AI services built around real business outcomes.</p>
          </div>

          <div className={styles.pillarsGrid}>
            {siteConfig.pillars.map((pillar) => (
              <div key={pillar.id} className={styles.pillarCard}>
                <Badge color={pillar.color as 'blue'|'purple'|'emerald'}>{pillar.tagline}</Badge>
                <h3 className={styles.pillarTitle}>{pillar.title}</h3>
                <p className={styles.pillarDesc}>{pillar.description}</p>
                <ul className={styles.featureList}>
                  {pillar.features.map((feature, i) => (
                    <li key={i}>✓ {feature}</li>
                  ))}
                </ul>
                <a href={pillar.link} className={`${styles.cardLink} ${styles[pillar.color]}`}>Learn more →</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className="container">
           <div className={styles.header}>
            <span className={styles.eyebrow}>Measurable Impact</span>
            <h2 className={styles.title}>Real Results</h2>
            <p className={styles.subtext}>Practical AI websites and smart automations that deliver immediate operational improvements.</p>
          </div>
          
          <div className={styles.impactGrid}>
            <div className={styles.impactCard}>
              <div className={styles.number}>10–15 hrs</div>
              <div className={styles.impactLabel}>Average Time Saved</div>
              <p className={styles.impactDesc}>Hours saved per week eliminating manual data entry and repetitive busywork.</p>
            </div>
            <div className={styles.impactCard}>
              <div className={styles.number}>&lt; 60s</div>
              <div className={styles.impactLabel}>Lead Response Time</div>
              <p className={styles.impactDesc}>Response time reduced from hours to under 60 seconds with automated routing.</p>
            </div>
            <div className={styles.impactCard}>
              <div className={styles.number}>Days, not months</div>
              <div className={styles.impactLabel}>Turnaround Time</div>
              <p className={styles.impactDesc}>Clean, modern websites and custom automations delivered with speed.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
