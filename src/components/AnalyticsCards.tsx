import styles from './AnalyticsCards.module.css';

interface ContactItem {
  id?: string;
  status: string;
}

export default function AnalyticsCards({ contacts }: { contacts: ContactItem[] }) {
  const totalLeads = contacts.length;
  const activeDiscussions = contacts.filter(c => ['in_discussion', 'proposal_sent'].includes(c.status)).length;
  const wonDeals = contacts.filter(c => c.status === 'won').length;
  const lostDeals = contacts.filter(c => c.status === 'lost').length;
  
  const totalClosed = wonDeals + lostDeals;
  const conversionRate = totalClosed > 0 ? Math.round((wonDeals / totalClosed) * 100) : 0;

  return (
    <div className={styles.grid}>
      <div className={styles.card}>
        <div className={styles.label}>Total Leads</div>
        <div className={styles.value}>{totalLeads}</div>
      </div>
      <div className={styles.card}>
        <div className={styles.label}>Active Discussions</div>
        <div className={styles.value}>{activeDiscussions}</div>
      </div>
      <div className={styles.card}>
        <div className={styles.label}>Closed (Won)</div>
        <div className={styles.value}>{wonDeals}</div>
      </div>
      <div className={styles.card}>
        <div className={styles.label}>Win Rate</div>
        <div className={styles.value}>{conversionRate}%</div>
      </div>
    </div>
  );
}
