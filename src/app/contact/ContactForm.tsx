'use client';

import { useState } from 'react';
import type { FormEvent } from 'react';
import styles from './page.module.css';
import { submitContactForm } from '@/app/actions/contact';
import { CONTACT } from '@/lib/config';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');

    const formData = new FormData(e.currentTarget);
    const result = await submitContactForm(formData);

    if (result.success) {
      setSubmitted(true);
    } else {
      setErrorMsg(result.error || 'Something went wrong. Please try again.');
    }
    setLoading(false);
  }

  return (
    <div className={styles.page}>
      <div className="container">
        <header className={styles.header}>
          <span className={styles.eyebrow}>Contact</span>
          <h1 className={styles.title}>Let’s Build Something Practical</h1>
          <p className={styles.sub}>
            Tell us what you want to create, automate, or improve. We’ll get back to you with clear next steps.
          </p>
          <div className={styles.quickContact}>
            <span>Or need a faster response?</span>
            <a
              href={`https://wa.me/${CONTACT.whatsapp.replace(/\+/g, '').replace(/\s/g, '')}`}
              target="_blank"
              rel="noreferrer"
              className={styles.whatsappBtn}
            >
              Message on WhatsApp
            </a>
          </div>
        </header>

        {submitted ? (
          <div className={styles.success}>
            <h2>Thank you — we&apos;ll be in touch soon.</h2>
            <p>We review every enquiry and will respond within 1–2 business days.</p>
          </div>
        ) : (
          <form className={styles.form} onSubmit={handleSubmit} noValidate>
            <div className={styles.field}>
              <label htmlFor="name" className={styles.label}>
                Name <span aria-hidden="true">*</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className={styles.input}
                placeholder="Your full name"
              />
            </div>

            <div className={styles.row}>
              <div className={styles.field}>
                <label htmlFor="email" className={styles.label}>
                  Email <span aria-hidden="true">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className={styles.input}
                  placeholder="your@email.com"
                />
              </div>

              <div className={styles.field}>
                <label htmlFor="phone" className={styles.label}>
                  Phone
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  className={styles.input}
                  placeholder="+1 234 567 890"
                />
              </div>
            </div>

            <div className={styles.field}>
              <label htmlFor="helpWith" className={styles.label}>
                What do you need help with? <span aria-hidden="true">*</span>
              </label>
              <select id="helpWith" name="helpWith" required className={styles.select}>
                <option value="">Select an option</option>
                <option value="website">Launch or Redesign a Website</option>
                <option value="automation">Automate My Workflows & Tools</option>
                <option value="content">AI Content & Creative Design</option>
                <option value="marketing">Marketing & Inbound Lead Systems</option>
                <option value="ai-solution">Custom AI Solution or Chatbot</option>
                <option value="other">Other / General Inquiry</option>
              </select>
            </div>

            <div className={styles.field}>
              <label htmlFor="message" className={styles.label}>
                Message <span aria-hidden="true">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className={styles.textarea}
                placeholder="Tell us about what you want to create, automate, or improve..."
              />
            </div>

            {errorMsg && (
              <div style={{ color: 'var(--destructive, #ef4444)', fontSize: '0.875rem', marginTop: '0.5rem' }}>
                {errorMsg}
              </div>
            )}

            <button type="submit" className={styles.submit} disabled={loading}>
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
