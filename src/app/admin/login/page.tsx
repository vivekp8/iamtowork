'use client'

import { useState } from 'react'
import { login } from '@/app/actions/auth'
import styles from './page.module.css'

export default function LoginPage() {
  const [errorMsg, setErrorMsg] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setErrorMsg('')
    
    const formData = new FormData(e.currentTarget)
    const res = await login(formData)
    
    if (res?.error) {
      setErrorMsg(res.error)
      setLoading(false)
    }
    // if successful, the action will redirect, so no need to setLoading(false)
  }

  return (
    <div className={styles.page}>
      <div className={styles.card}>
        <header className={styles.header}>
          <h1 className={styles.title}>Admin Login</h1>
          <p className={styles.sub}>Enter your credentials to access the dashboard</p>
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

          <div className={styles.field}>
            <label htmlFor="password" className={styles.label}>Password</label>
            <input 
              id="password" 
              name="password" 
              type="password" 
              required 
              className={styles.input} 
              placeholder="••••••••"
            />
          </div>

          {errorMsg && (
            <div style={{ color: 'var(--destructive, #ef4444)', fontSize: '0.875rem' }}>
              {errorMsg}
            </div>
          )}

          <button type="submit" className={styles.submit} disabled={loading}>
            {loading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>
      </div>
    </div>
  )
}
