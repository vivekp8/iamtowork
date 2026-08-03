'use client';

export default function AnalyticsCards({ contacts }: { contacts: any[] }) {
  const totalLeads = contacts.length;
  const activeDiscussions = contacts.filter(c => ['in_discussion', 'proposal_sent'].includes(c.status)).length;
  const wonDeals = contacts.filter(c => c.status === 'won').length;
  const lostDeals = contacts.filter(c => c.status === 'lost').length;
  
  const totalClosed = wonDeals + lostDeals;
  const conversionRate = totalClosed > 0 ? Math.round((wonDeals / totalClosed) * 100) : 0;

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '1.5rem',
      marginBottom: '3rem',
      marginTop: '2rem'
    }}>
      <div style={cardStyle}>
        <div style={labelStyle}>Total Leads</div>
        <div style={valueStyle}>{totalLeads}</div>
      </div>
      <div style={cardStyle}>
        <div style={labelStyle}>Active Discussions</div>
        <div style={valueStyle}>{activeDiscussions}</div>
      </div>
      <div style={cardStyle}>
        <div style={labelStyle}>Closed (Won)</div>
        <div style={valueStyle}>{wonDeals}</div>
      </div>
      <div style={cardStyle}>
        <div style={labelStyle}>Win Rate</div>
        <div style={valueStyle}>{conversionRate}%</div>
      </div>
    </div>
  );
}

const cardStyle = {
  background: '#1a1a1a',
  borderRadius: '16px',
  padding: '1.5rem',
  display: 'flex',
  flexDirection: 'column' as const,
  gap: '0.5rem',
  boxShadow: '7px 7px 14px #121212, -7px -7px 14px #222222',
  border: 'none',
};

const labelStyle = {
  fontSize: '0.875rem',
  color: '#9ca3af',
  fontWeight: 500,
  letterSpacing: '0.025em',
};

const valueStyle = {
  fontSize: '2rem',
  fontWeight: 700,
  color: '#f9fafb',
  lineHeight: 1,
};
