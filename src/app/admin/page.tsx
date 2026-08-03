export const dynamic = 'force-dynamic';

import { createClient } from '@/utils/supabase/server';
import { logout } from '@/app/actions/auth';
import styles from './page.module.css';
import AdminControls from '@/components/AdminControls';
import Link from 'next/link';

export default async function AdminDashboard(
  props: {
    searchParams: Promise<{ status?: string }>;
  }
) {
  const searchParams = await props.searchParams;
  const supabase = await createClient();

  // We are guaranteed to have a user because middleware redirects if not
  const { data: { user } } = await supabase.auth.getUser();

  const currentStatus = searchParams.status || 'active'; // 'active', 'closed', 'archived'

  let query = supabase.from('contacts').select('*').order('created_at', { ascending: false });

  if (currentStatus === 'archived') {
    query = query.in('status', ['archived', 'spam']);
  } else if (currentStatus === 'closed') {
    query = query.in('status', ['won', 'lost']);
  } else {
    // Active (default)
    // We show 'new', 'contacted', 'in_discussion', 'proposal_sent', or null
    // We achieve this by filtering out the other categories
    query = query.not('status', 'in', '("archived","spam","won","lost")');
  }

  const { data: contacts, error } = await query;

  if (error) {
    return (
      <div className={styles.page}>
        <div className="container">
          <header className={styles.header}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div>
                <h1 className={styles.title}>Admin Dashboard</h1>
                <p className={styles.sub}>Logged in as {user?.email}</p>
              </div>
              <form action={logout}>
                <button type="submit" style={{ padding: '0.5rem 1rem', background: '#333', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Sign Out</button>
              </form>
            </div>
          </header>
          <div className={styles.error} style={{ marginTop: '2rem' }}>
            Failed to load contacts. Ensure your Supabase connection is set up and the contacts table exists.
            <br />
            <br />
            Error details: {error.message}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <div className="container">
        <header className={styles.header}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <h1 className={styles.title}>Client Submissions</h1>
              <p className={styles.sub}>Manage and view your project enquiries.</p>
              <p className={styles.sub} style={{ marginTop: '0.25rem', fontSize: '0.75rem' }}>Logged in as {user?.email}</p>
            </div>
            <form action={logout}>
              <button type="submit" style={{ padding: '0.5rem 1rem', background: '#333', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Sign Out</button>
            </form>
          </div>
        </header>

        <div className={styles.tabs}>
          <Link 
            href="/admin?status=active" 
            className={`${styles.tab} ${currentStatus === 'active' ? styles.activeTab : ''}`}
          >
            Active
          </Link>
          <Link 
            href="/admin?status=closed" 
            className={`${styles.tab} ${currentStatus === 'closed' ? styles.activeTab : ''}`}
          >
            Closed
          </Link>
          <Link 
            href="/admin?status=archived" 
            className={`${styles.tab} ${currentStatus === 'archived' ? styles.activeTab : ''}`}
          >
            Archived
          </Link>
        </div>

        {(!contacts || contacts.length === 0) ? (
          <div className={styles.empty}>
            <p>No client submissions found in this category.</p>
          </div>
        ) : (
          <div className={styles.grid}>
            {contacts.map((contact) => (
              <div key={contact.id} className={styles.card}>
                <div className={styles.cardHeader}>
                  <h3 className={styles.name}>{contact.name}</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '4px' }}>
                    <span className={styles.date}>
                      {new Date(contact.created_at).toLocaleDateString()}
                    </span>
                    <span className={styles.statusBadge} data-status={contact.status || 'new'}>
                      {(contact.status || 'new').replace('_', ' ').toUpperCase()}
                    </span>
                  </div>
                </div>
                
                <div className={styles.details}>
                  <div className={styles.detailRow}>
                    <span className={styles.label}>Prefers:</span>
                    <span className={styles.value}>
                      {contact.contact_preference}
                      {contact.contact_preference === 'email' && ` (${contact.email})`}
                      {contact.contact_preference === 'whatsapp' && ` (${contact.whatsapp})`}
                      {contact.contact_preference === 'call' && ` (${contact.phone})`}
                    </span>
                  </div>
                  
                  {contact.company && (
                    <div className={styles.detailRow}>
                      <span className={styles.label}>Company:</span>
                      <span className={styles.value}>{contact.company}</span>
                    </div>
                  )}

                  <div className={styles.detailRow}>
                    <span className={styles.label}>Service:</span>
                    <span className={styles.value}>{contact.service}</span>
                  </div>
                  
                  <div className={styles.detailRow}>
                    <span className={styles.label}>Budget:</span>
                    <span className={styles.value}>{contact.budget || 'N/A'}</span>
                  </div>
                  
                  <div className={styles.detailRow}>
                    <span className={styles.label}>Timeline:</span>
                    <span className={styles.value}>{contact.timeline || 'N/A'}</span>
                  </div>
                </div>

                <div className={styles.description}>
                  <span className={styles.label}>Project Description:</span>
                  <p>{contact.description}</p>
                </div>
                
                {contact.website && (
                  <div className={styles.website}>
                    <a href={contact.website} target="_blank" rel="noreferrer">
                      View Website &rarr;
                    </a>
                  </div>
                )}

                <AdminControls id={contact.id} currentStatus={contact.status || 'new'} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
