export const dynamic = 'force-dynamic';

import { createClient } from '@/utils/supabase/server';
import { logout } from '@/app/actions/auth';
import styles from './page.module.css';
import AdminControls from '@/components/AdminControls';
import AnalyticsCards from '@/components/AnalyticsCards';
import SearchFilter from '@/components/SearchFilter';
import Link from 'next/link';

export default async function AdminDashboard(
  props: {
    searchParams: Promise<{ status?: string, search?: string }>;
  }
) {
  const searchParams = await props.searchParams;
  const supabase = await createClient();

  const { data: { user } } = await supabase.auth.getUser();

  const currentStatus = searchParams.status || 'active';
  const searchTerm = searchParams.search?.toLowerCase() || '';

  // Fetch all contacts to calculate global analytics
  const { data: allContacts, error } = await supabase
    .from('contacts')
    .select('*')
    .order('created_at', { ascending: false });

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
            <br /><br />
            Error details: {error.message}
          </div>
        </div>
      </div>
    );
  }

  // In-memory filtering based on tabs and search
  let filteredContacts = allContacts || [];

  // 1. Filter by Search Term
  if (searchTerm) {
    filteredContacts = filteredContacts.filter(c => 
      c.name?.toLowerCase().includes(searchTerm) || 
      c.email?.toLowerCase().includes(searchTerm) ||
      c.company?.toLowerCase().includes(searchTerm)
    );
  }

  // 2. Filter by Tab Status
  if (currentStatus === 'archived') {
    filteredContacts = filteredContacts.filter(c => ['archived', 'spam'].includes(c.status));
  } else if (currentStatus === 'closed') {
    filteredContacts = filteredContacts.filter(c => ['won', 'lost'].includes(c.status));
  } else {
    // Active
    filteredContacts = filteredContacts.filter(c => !['archived', 'spam', 'won', 'lost'].includes(c.status));
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

        <AnalyticsCards contacts={allContacts || []} />

        <div className={styles.toolbar}>
          <div className={styles.tabs}>
            <Link 
              href={`/admin?status=active${searchTerm ? `&search=${searchTerm}` : ''}`} 
              className={`${styles.tab} ${currentStatus === 'active' ? styles.activeTab : ''}`}
            >
              Active
            </Link>
            <Link 
              href={`/admin?status=closed${searchTerm ? `&search=${searchTerm}` : ''}`}
              className={`${styles.tab} ${currentStatus === 'closed' ? styles.activeTab : ''}`}
            >
              Closed
            </Link>
            <Link 
              href={`/admin?status=archived${searchTerm ? `&search=${searchTerm}` : ''}`}
              className={`${styles.tab} ${currentStatus === 'archived' ? styles.activeTab : ''}`}
            >
              Archived
            </Link>
          </div>
          
          <SearchFilter />
        </div>

        {(!filteredContacts || filteredContacts.length === 0) ? (
          <div className={styles.empty}>
            <p>No client submissions found in this category.</p>
          </div>
        ) : (
          <div className={styles.grid}>
            {filteredContacts.map((contact) => (
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

                <AdminControls id={contact.id} currentStatus={contact.status || 'new'} initialNotes={contact.admin_notes} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
