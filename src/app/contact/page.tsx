'use client';
import { useState } from 'react';
import type { FormEvent } from 'react';
import styles from './page.module.css';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    // TODO: wire up to form service
    setSubmitted(true);
  }

  return (
    <div className={styles.page}>
      <div className="container">
        <header className={styles.header}>
          <span className={styles.eyebrow}>Contact</span>
          <h1 className={styles.title}>Start a Project</h1>
          <p className={styles.sub}>
            Tell us what you&apos;re building, automating, or trying to improve.
            We&apos;ll respond with clear next steps — no commitment required.
          </p>
        </header>

        {submitted ? (
          <div className={styles.success}>
            <h2>Thank you — we&apos;ll be in touch soon.</h2>
            <p>We review every enquiry and will respond within 1–2 business days.</p>
          </div>
        ) : (
          <form className={styles.form} onSubmit={handleSubmit} noValidate>
            <div className={styles.row}>
              <div className={styles.field}>
                <label htmlFor="name" className={styles.label}>Name <span aria-hidden>*</span></label>
                <input id="name" name="name" type="text" required className={styles.input} placeholder="Your full name" />
              </div>
              <div className={styles.field}>
                <label htmlFor="email" className={styles.label}>Email <span aria-hidden>*</span></label>
                <input id="email" name="email" type="email" required className={styles.input} placeholder="your@email.com" />
              </div>
            </div>

            <div className={styles.row}>
              <div className={styles.field}>
                <label htmlFor="phone" className={styles.label}>Phone / WhatsApp</label>
                <input id="phone" name="phone" type="tel" className={styles.input} placeholder="+1 234 567 890" />
              </div>
              <div className={styles.field}>
                <label htmlFor="company" className={styles.label}>Company / Business</label>
                <input id="company" name="company" type="text" className={styles.input} placeholder="Your business name" />
              </div>
            </div>

            <div className={styles.field}>
              <label htmlFor="website" className={styles.label}>Existing Website URL</label>
              <input id="website" name="website" type="url" className={styles.input} placeholder="https://yourwebsite.com (if applicable)" />
            </div>

            <div className={styles.field}>
              <label htmlFor="service" className={styles.label}>Service <span aria-hidden>*</span></label>
              <select id="service" name="service" required className={styles.select}>
                <option value="">Select a service</option>
                <option value="website">Website</option>
                <option value="automation">Automation</option>
                <option value="content">Content & Design</option>
                <option value="marketing">Marketing & Growth</option>
                <option value="ai-solution">AI Solution</option>
                <option value="other">Other / Not Sure</option>
              </select>
            </div>

            <div className={styles.field}>
              <label htmlFor="description" className={styles.label}>Project Description <span aria-hidden>*</span></label>
              <textarea
                id="description"
                name="description"
                required
                rows={5}
                className={styles.textarea}
                placeholder="Describe what you're trying to build, automate, or achieve..."
              />
            </div>

            <div className={styles.row}>
              <div className={styles.field}>
                <label htmlFor="budget" className={styles.label}>Approximate Budget</label>
                <select id="budget" name="budget" className={styles.select}>
                  <option value="">Select a range</option>
                  <option value="under-500">Under $500</option>
                  <option value="500-1500">$500 – $1,500</option>
                  <option value="1500-3000">$1,500 – $3,000</option>
                  <option value="3000-plus">$3,000+</option>
                  <option value="unsure">Not sure yet</option>
                </select>
              </div>
              <div className={styles.field}>
                <label htmlFor="timeline" className={styles.label}>Desired Timeline</label>
                <select id="timeline" name="timeline" className={styles.select}>
                  <option value="">Select a timeline</option>
                  <option value="asap">As soon as possible</option>
                  <option value="2-weeks">Within 2 weeks</option>
                  <option value="1-month">Within 1 month</option>
                  <option value="flexible">Flexible</option>
                </select>
              </div>
            </div>

            <div className={styles.field}>
              <label htmlFor="contact-pref" className={styles.label}>Preferred Contact Method</label>
              <select id="contact-pref" name="contactPreference" className={styles.select}>
                <option value="">Select preference</option>
                <option value="email">Email</option>
                <option value="whatsapp">WhatsApp</option>
                <option value="call">Phone Call</option>
              </select>
            </div>

            <button type="submit" className={styles.submit}>
              Send Enquiry
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
