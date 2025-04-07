import React from 'react';

const PrivacyPage: React.FC = () => {
  return (
    <div className="privacy-page">
      <h1>Privacy Policy</h1>
      <p>
        <strong>Effective Date:</strong> 7 April 2025
      </p>
      <p>
        <strong>Last Updated:</strong> 11 April 2025
      </p>

      <section className="privacy-section">
        <h2>Introduction</h2>
        <p>
          At CineNiche, your privacy matters to us. This Privacy Policy outlines
          how we collect, use, and protect your personal data in accordance with
          the General Data Protection Regulation (GDPR).
        </p>
      </section>

      <section className="privacy-section">
        <h2>What Personal Data We Collect</h2>
        <ul>
          <li>
            <strong>Account & Contact Information</strong>: Name, Email address,
            Payment details (processed securely through third-party providers)
          </li>
          <li>
            <strong>Usage Data</strong>: Shows/movies watched, Preferences and
            watchlists, Ratings and reviews, IP address, browser type, device
            info, and access times
          </li>
          <li>
            <strong>Cookies & Tracking</strong>: We use cookies and similar
            technologies to improve functionality and personalize your
            experience. You may opt out or manage your preferences via our
            [Cookie Settings page].
          </li>
        </ul>
      </section>

      <section className="privacy-section">
        <h2>Legal Bases for Processing</h2>
        <ul>
          <li>
            Contractual necessity – To provide and manage your account and
            access to our streaming services
          </li>
          <li>
            Consent – For sending newsletters or personalizing recommendations
            (you can withdraw consent at any time)
          </li>
          <li>Legal obligation – To comply with applicable laws</li>
          <li>
            Legitimate interest – For analytics, security, and fraud prevention,
            provided your rights are not overridden
          </li>
        </ul>
      </section>

      <section className="privacy-section">
        <h2>How We Use Your Data</h2>
        <ul>
          <li>Provide access to streaming content</li>
          <li>Create personalized content and recommendations</li>
          <li>Improve site performance and user experience</li>
          <li>
            Communicate with you (account-related and marketing, if you opt in)
          </li>
          <li>Detect and prevent fraud or unauthorized access</li>
          <li>Fulfill our legal obligations</li>
        </ul>
      </section>

      <section className="privacy-section">
        <h2>Sharing Your Data</h2>
        <ul>
          <li>
            Service Providers (e.g., payment processors, hosting services)
          </li>
          <li>Legal Authorities when legally required</li>
          <li>
            Analytics & Performance Tools (e.g., Google Analytics, with IP
            anonymization)
          </li>
        </ul>
        <p>We never sell your personal data.</p>
      </section>

      <section className="privacy-section">
        <h2>International Data Transfers</h2>
        <p>
          If your data is transferred outside the European Economic Area (EEA),
          we ensure appropriate safeguards such as:
        </p>
        <ul>
          <li>Standard Contractual Clauses (SCCs)</li>
          <li>
            Transfers to countries with adequate protection levels (recognized
            by the European Commission)
          </li>
        </ul>
      </section>

      <section className="privacy-section">
        <h2>Data Retention</h2>
        <p>
          We retain your personal data only as long as necessary to fulfill the
          purposes described above, including:
        </p>
        <ul>
          <li>While your account is active</li>
          <li>To meet legal, accounting, or reporting obligations</li>
        </ul>
        <p>
          You can request deletion of your data at any time (see next section).
        </p>
      </section>

      <section className="privacy-section">
        <h2>Your GDPR Rights</h2>
        <ul>
          <li>Access your personal data</li>
          <li>Correct inaccurate or incomplete data</li>
          <li>Erase your data ("right to be forgotten")</li>
          <li>Restrict or object to processing</li>
          <li>Data portability (receive your data in a usable format)</li>
          <li>Withdraw consent at any time</li>
        </ul>
        <p>
          To exercise these rights, contact us at:{' '}
          <a href="mailto:privacy@cineniche.com">privacy@cineniche.com</a>
        </p>
        <p>
          You also have the right to lodge a complaint with your local data
          protection authority.
        </p>
      </section>

      <section className="privacy-section">
        <h2>Children's Privacy</h2>
        <p>
          Our service is not directed to children under 16. We do not knowingly
          collect personal data from minors without parental consent.
        </p>
      </section>

      <section className="privacy-section">
        <h2>Changes to This Policy</h2>
        <p>
          We may update this policy periodically. If we make material changes,
          we will notify you via email or through our platform.
        </p>
      </section>

      <section className="privacy-section">
        <h2>Contact Us</h2>
        <p>Data Controller: CineNiche</p>
        <p>
          Email:{' '}
          <a href="mailto:privacy@cineniche.com">privacy@cineniche.com</a>
        </p>
        <p>Address: 155 E 1230 N Provo, UT 84602</p>
        <p>
          Data Protection Officer (if applicable): John McConkie | 801-854-8750
        </p>
      </section>
    </div>
  );
};

export default PrivacyPage;
