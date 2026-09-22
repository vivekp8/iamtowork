'use client'

import { useState } from 'react'
import Link from 'next/link'
import { resetPassword } from '@/app/actions/auth'
import styles from '../login/page.module.css'

export default function ForgotPasswordPage() {
  const [errorMsg, setErrorMsg] = useState('')
  const [successMsg, setSuccessMsg] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setErrorMsg('')
    setSuccessMsg('')
    
    const formData = new FormData(e.currentTarget)
    const res = await resetPassword(formData)
    
    if (res?.error) {
      setErrorMsg(res.error)
    } else if (res?.success) {
      setSuccessMsg('Check your email for the password reset link.')
    }
    
    setLoading(false)
  }

  return (
    <div className={styles.page}>
      <div className={styles.card}>
        <header className={styles.header}>
          <h1 className={styles.title}>Reset Password</h1>
          <p className={styles.sub}>Enter your email to receive a reset link</p>
        </header>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.field}>
            <label htmlFor="email" className={styles.label}>Email</label>
            <input 
              id="email" 
              name="email" 
              type="email" 
              required 
              className={styles.input} 
              placeholder="admin@example.com"
            />
          </div>

          {errorMsg && (
            <div style={{ color: 'var(--destructive, #ef4444)', fontSize: '0.875rem' }}>
              {errorMsg}
            </div>
          )}
          
          {successMsg && (
            <div style={{ color: '#10b981', fontSize: '0.875rem' }}>
              {successMsg}
            </div>
          )}

          <button type="submit" className={styles.submit} disabled={loading}>
            {loading ? 'Sending...' : 'Send Reset Link'}
          </button>
          
          <div style={{ textAlign: 'center', marginTop: '1rem' }}>
            <Link href="/admin/login" style={{ color: '#a1a1aa', fontSize: '0.875rem', textDecoration: 'none' }}>
              Back to Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}
