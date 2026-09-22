'use client'

import { useState } from 'react'
import { updatePassword } from '@/app/actions/auth'
import styles from '../login/page.module.css'

export default function UpdatePasswordPage() {
  const [errorMsg, setErrorMsg] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setErrorMsg('')
    
    const formData = new FormData(e.currentTarget)
    
    if (formData.get('password') !== formData.get('confirm_password')) {
      setErrorMsg('Passwords do not match')
      setLoading(false)
      return
    }
    
    const res = await updatePassword(formData)
    
    if (res?.error) {
      setErrorMsg(res.error)
      setLoading(false)
    }
    // if successful, action redirects to /admin
  }

  return (
    <div className={styles.page}>
      <div className={styles.card}>
        <header className={styles.header}>
          <h1 className={styles.title}>Set New Password</h1>
          <p className={styles.sub}>Enter your new password below.</p>
        </header>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.field}>
            <label htmlFor="password" className={styles.label}>New Password</label>
            <input 
              id="password" 
              name="password" 
              type="password" 
              required 
              className={styles.input} 
              placeholder="••••••••"
              minLength={6}
            />
          </div>
          
          <div className={styles.field}>
            <label htmlFor="confirm_password" className={styles.label}>Confirm New Password</label>
            <input 
              id="confirm_password" 
              name="confirm_password" 
              type="password" 
              required 
              className={styles.input} 
              placeholder="••••••••"
              minLength={6}
            />
          </div>

          {errorMsg && (
            <div style={{ color: 'var(--destructive, #ef4444)', fontSize: '0.875rem' }}>
              {errorMsg}
            </div>
          )}

          <button type="submit" className={styles.submit} disabled={loading}>
            {loading ? 'Updating...' : 'Update Password'}
          </button>
        </form>
      </div>
    </div>
  )
}
