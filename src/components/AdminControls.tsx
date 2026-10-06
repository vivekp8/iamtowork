'use client';

import { useState, useEffect } from 'react';
import { updateContactStatus, deleteContact, updateAdminNotes } from '@/app/actions/contact';
import styles from './AdminControls.module.css';

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
    <div className={styles.container}>
      <div className={styles.formGroup}>
        <label className={styles.labelWrapper}>
          <span>Private Admin Notes</span>
          {saveSuccess && <span className={styles.successMsg}>Saved!</span>}
        </label>
        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Add internal notes about this client..."
          className={styles.textarea}
        />
        <div className={styles.btnRight}>
          <button 
            onClick={handleSaveNotes}
            disabled={isSavingNotes || notes === (initialNotes || '')}
            className={styles.saveNotesBtn}
          >
            {isSavingNotes ? 'Saving...' : 'Save Notes'}
          </button>
        </div>
      </div>

      <div className={styles.actionGroup}>
        <select 
          value={currentStatus || 'new'} 
          onChange={handleStatusChange}
          disabled={isPending || isDeleting}
          className={styles.select}
        >
          <option value="new">New</option>
          <option value="contacted">Contacted</option>
          <option value="in_discussion">In Discussion</option>
          <option value="proposal_sent">Proposal Sent</option>
          <option value="won">Closed (Won)</option>
          <option value="lost">Closed (Lost)</option>
          <option value="archived">Archived</option>
          <option value="spam">Spam</option>
        </select>
        
        <button 
          onClick={handleDelete}
          disabled={isPending || isDeleting}
          className={styles.deleteBtn}
        >
          {isDeleting ? 'Deleting...' : 'Delete'}
        </button>
      </div>
    </div>
  );
}
