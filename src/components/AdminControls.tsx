'use client';

import { useState, useEffect } from 'react';
import { updateContactStatus, deleteContact, updateAdminNotes } from '@/app/actions/contact';

export default function AdminControls({ 
  id, 
  currentStatus, 
  initialNotes = '' 
}: { 
  id: string, 
  currentStatus: string, 
  initialNotes?: string 
}) {
  const [isPending, setIsPending] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [notes, setNotes] = useState(initialNotes);
  const [isSavingNotes, setIsSavingNotes] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);

  const handleStatusChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    setIsPending(true);
    const newStatus = e.target.value;
    const result = await updateContactStatus(id, newStatus);
    
    if (!result.success) {
      alert('Failed to update status: ' + result.error);
    }
    setIsPending(false);
  };

  const handleDelete = async () => {
    if (!window.confirm('Are you sure you want to permanently delete this contact?')) {
      return;
    }
    
    setIsDeleting(true);
    const result = await deleteContact(id);
    
    if (!result.success) {
      alert('Failed to delete contact: ' + result.error);
      setIsDeleting(false);
    }
  };

  const handleSaveNotes = async () => {
    setIsSavingNotes(true);
    const result = await updateAdminNotes(id, notes);
    
    if (result.success) {
      setSaveSuccess(true);
      setTimeout(() => setSaveSuccess(false), 2000);
    } else {
      alert('Failed to save notes: ' + result.error);
    }
    setIsSavingNotes(false);
  };

  return (
    <div style={{ marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
      <div style={{ marginBottom: '1rem' }}>
        <label style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.85rem', color: '#9ca3af', marginBottom: '0.5rem' }}>
          <span>Private Admin Notes</span>
          {saveSuccess && <span style={{ color: '#34d399', fontSize: '0.75rem' }}>Saved!</span>}
        </label>
        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Add internal notes about this client..."
          style={{
            width: '100%',
            minHeight: '80px',
            padding: '0.75rem',
            borderRadius: '12px',
            background: '#1a1a1a',
            border: 'none',
            boxShadow: 'inset 5px 5px 10px #121212, inset -5px -5px 10px #222222',
            color: 'white',
            fontSize: '0.9rem',
            resize: 'vertical',
            fontFamily: 'inherit',
            outline: 'none'
          }}
        />
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '0.5rem' }}>
          <button 
            onClick={handleSaveNotes}
            disabled={isSavingNotes || notes === (initialNotes || '')}
            style={{
              padding: '0.3rem 0.75rem',
              borderRadius: '4px',
              border: 'none',
              background: notes !== (initialNotes || '') ? '#3b82f6' : '#374151',
              color: 'white',
              fontSize: '0.8rem',
              cursor: notes !== (initialNotes || '') ? 'pointer' : 'not-allowed',
              opacity: isSavingNotes ? 0.7 : 1,
              transition: 'background 0.2s'
            }}
          >
            {isSavingNotes ? 'Saving...' : 'Save Notes'}
          </button>
        </div>
      </div>

      <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
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
            padding: '0.4rem 0.75rem',
            borderRadius: '4px',
            border: '1px solid #ef4444',
            background: 'transparent',
            color: '#ef4444',
            fontSize: '0.85rem',
            cursor: (isPending || isDeleting) ? 'not-allowed' : 'pointer',
            opacity: (isPending || isDeleting) ? 0.5 : 1
          }}
        >
          {isDeleting ? 'Deleting...' : 'Delete'}
        </button>
      </div>
    </div>
  );
}
