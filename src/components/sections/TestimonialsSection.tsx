import styles from './TestimonialsSection.module.css';

const TESTIMONIALS = [
  {
    quote:
      'We were spending too many hours on manual tasks every week. After I Am To Work set up our automation, we got that time back and started responding to leads much faster.',
    name: 'Rahul M.',
    role: 'Founder',
    initials: 'RM',
  },
  {
    quote:
      'They built us a clean website and connected it with automated follow-ups. The whole process was smooth and the results were clear.',
    name: 'Priya S.',
    role: 'Marketing Manager',
    initials: 'PS',
  },
  {
    quote:
      'Practical, no-nonsense approach. They focused on solving real problems instead of overcomplicating things with unnecessary tools.',
    name: 'Amit K.',
    role: 'Operations Lead',
    initials: 'AK',
  },
];

export default function TestimonialsSection() {
  return (
    <section className={styles.section} aria-labelledby="testimonials-heading">
      <div className="container">
        <div className={styles.header}>
          <span className={styles.eyebrow}>Client Feedback</span>
          <h2 id="testimonials-heading" className={styles.title}>
            What Our Clients Say
          </h2>
          <p className={styles.sub}>
            Real feedback from business owners and team leaders we&apos;ve helped automate and grow.
          </p>
        </div>

        <div className={styles.grid}>
          {TESTIMONIALS.map((t) => (
            <div key={t.name} className={styles.card}>
              <div>
                <div className={styles.quoteIcon}>“</div>
                <p className={styles.quoteText}>&ldquo;{t.quote}&rdquo;</p>
              </div>
              <div className={styles.authorBox}>
                <div className={styles.avatar}>{t.initials}</div>
                <div>
                  <div className={styles.authorName}>{t.name}</div>
                  <div className={styles.authorRole}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
