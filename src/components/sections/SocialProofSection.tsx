import styles from './SocialProofSection.module.css';

const LOGOS = [
  { id: 'logo1', name: 'Placeholder Company 1' },
  { id: 'logo2', name: 'Placeholder Company 2' },
  { id: 'logo3', name: 'Placeholder Company 3' },
  { id: 'logo4', name: 'Placeholder Company 4' },
];

export default function SocialProofSection() {
  return (
    <section className={styles.section}>
      <div className="container">
        <p className={styles.label}>Trusted by forward-thinking businesses</p>
        <div className={styles.logos}>
          {LOGOS.map((logo) => (
            <div key={logo.id} className={styles.logoItem}>
              {/* Replace this div with an actual img when you have client logos */}
              <div className={styles.logoPlaceholder}>{logo.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
