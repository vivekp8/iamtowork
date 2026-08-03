'use client';

import { useState, useTransition } from 'react';
import { updateContactStatus, deleteContact } from '@/app/actions/contact';

export default function AdminControls({ 
  id, 
  currentStatus 
}: { 
  id: string, 
  currentStatus: string 
}) {
  const [isPending, startTransition] = useTransition();
  const [isDeleting, setIsDeleting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newStatus = e.target.value;
    setError(null);
    startTransition(async () => {
      const result = await updateContactStatus(id, newStatus);
      if (!result.success) {
        setError(result.error || 'Failed to update status');
      }
    });
  };

  const handleDelete = async () => {
    if (!window.confirm('Are you sure you want to delete this contact? This cannot be undone.')) {
      return;
    }
    
    setError(null);
    setIsDeleting(true);
    
    const result = await deleteContact(id);
    if (!result.success) {
      setError(result.error || 'Failed to delete contact');
      setIsDeleting(false);
    }
  };

  return (
    <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
      <select 
        value={currentStatus || 'new'} 
        onChange={handleStatusChange}
        disabled={isPending || isDeleting}
        style={{
          padding: '0.4rem',
          borderRadius: '4px',
          background: '#222',
          color: 'white',
          border: '1px solid #444',
          fontSize: '0.85rem'
        }}
      >
        <optgroup label="Active">
          <option value="new">🆕 New</option>
          <option value="contacted">📞 Contacted</option>
          <option value="in_discussion">💬 In Discussion</option>
          <option value="proposal_sent">📄 Proposal Sent</option>
        </optgroup>
        <optgroup label="Closed">
          <option value="won">🏆 Closed (Won)</option>
          <option value="lost">❌ Closed (Lost)</option>
        </optgroup>
        <optgroup label="Other">
          <option value="archived">📁 Archived</option>
          <option value="spam">🗑️ Spam</option>
        </optgroup>
      </select>
      
      <button 
        onClick={handleDelete}
        disabled={isPending || isDeleting}
        style={{
          padding: '0.4rem 0.8rem',
          borderRadius: '4px',
          background: 'transparent',
          color: '#ff4444',
          border: '1px solid #ff4444',
          fontSize: '0.85rem',
          cursor: (isPending || isDeleting) ? 'not-allowed' : 'pointer',
          opacity: (isPending || isDeleting) ? 0.5 : 1
        }}
      >
        {isDeleting ? 'Deleting...' : 'Delete'}
      </button>

      {isPending && <span style={{ fontSize: '0.8rem', color: '#888' }}>Updating...</span>}
      {error && <span style={{ fontSize: '0.8rem', color: '#ff4444' }}>{error}</span>}
    </div>
  );
}
