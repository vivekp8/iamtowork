import type { Metadata } from 'next';
import Link from 'next/link';
import styles from '../privacy/page.module.css';

export const metadata: Metadata = {
  title: 'Terms of Service | I Am To Work',
  description:
    'Review the terms of service, project delivery standards, payment policies, and intellectual property agreements for digital services provided by I Am To Work.',
  alternates: {
    canonical: '/terms',
  },
  openGraph: {
    title: 'Terms of Service | I Am To Work',
    description:
      'Review the terms of service, project delivery standards, payment policies, and intellectual property agreements for digital services provided by I Am To Work.',
    url: 'https://www.iamtowork.com/terms',
  },
};

export default function TermsPage() {
  return (
    <div className={styles.page}>
      <div className="container">
        <div className={styles.prose}>
          <h1>Terms of Service</h1>
          <p className={styles.updated}>Last updated: {new Date().getFullYear()}</p>

          <h2>Services</h2>
          <p>
            I Am To Work provides digital services including website building, business automation,
            AI content creation, and AI-assisted marketing solutions. The specific scope, deliverables,
            and timeline for each project are agreed upon in writing before work commences.
          </p>

          <h2>Payment</h2>
          <p>
            Payment terms are agreed per project and outlined in the project proposal. We typically
            require a deposit before work begins. The remaining balance is due upon project completion
            unless otherwise agreed.
          </p>

          <h2>Intellectual Property</h2>
          <p>
            Upon full payment, all deliverables created specifically for your project become your property.
            We retain the right to showcase work in our portfolio unless otherwise agreed in writing.
          </p>

          <h2>Revisions</h2>
          <p>
            A reasonable number of revisions is included in all projects. The scope of revisions is defined
            in the project agreement. Significant changes to the original brief may incur additional costs.
          </p>

          <h2>Limitation of Liability</h2>
          <p>
            I Am To Work is not liable for any indirect, incidental, or consequential damages arising from
            the use of our services. Our total liability is limited to the amount paid for the specific service.
          </p>

          <h2>Contact</h2>
          <p>
            For questions about these terms, please <Link href="/contact" className={styles.link}>contact us</Link>.
          </p>
        </div>
      </div>
    </div>
  );
}
