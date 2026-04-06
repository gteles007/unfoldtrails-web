import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Privacy Policy — Unfold Trails",
  description: "Privacy Policy for Unfold Trails, operated by Unworried Ventures LTD.",
};

export default function PrivacyPolicy() {
  return (
    <LegalLayout title="Privacy Policy" lastUpdated="6 April 2026">
      <p>
        This Privacy Policy explains how Unworried Ventures LTD (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), trading as Unfold Trails, collects, uses, and protects your personal data when you use our website at www.unfoldtrails.com (the &quot;Website&quot;) and, in the future, our mobile application (the &quot;App&quot;).
      </p>
      <p>
        Unworried Ventures LTD is a company registered in England and Wales (Company number 15016871) with its registered office at 124 City Road, London, England, EC1V 2NX, United Kingdom. We are the data controller for the purposes of the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.
      </p>

      <h2>1. Information We Collect</h2>

      <h3>1.1 Information You Provide</h3>
      <ul>
        <li><strong>Waitlist sign-up:</strong> When you join our waitlist, we collect your email address.</li>
        <li><strong>Communications:</strong> If you contact us, we may collect your name, email address, and the content of your message.</li>
      </ul>

      <h3>1.2 Information Collected Automatically</h3>
      <ul>
        <li><strong>Usage data:</strong> We may collect information about how you access and use the Website, including your IP address, browser type, operating system, referring URLs, pages viewed, and the dates and times of your visits.</li>
        <li><strong>Cookies:</strong> We use essential cookies to ensure the Website functions properly. See our <a href="/cookies">Cookie Policy</a> for more details.</li>
      </ul>

      <h2>2. How We Use Your Information</h2>
      <p>We use the information we collect for the following purposes:</p>
      <ul>
        <li>To manage your waitlist registration and notify you when the App launches.</li>
        <li>To respond to your enquiries and provide customer support.</li>
        <li>To improve and optimise the Website and our services.</li>
        <li>To comply with legal obligations.</li>
      </ul>

      <h2>3. Legal Basis for Processing</h2>
      <p>Under the UK GDPR, we process your personal data on the following legal bases:</p>
      <ul>
        <li><strong>Consent:</strong> When you voluntarily provide your email address to join the waitlist, you consent to us processing that data for the purpose of contacting you about the launch.</li>
        <li><strong>Legitimate interests:</strong> We may process data to improve our services, provided this does not override your rights and freedoms.</li>
        <li><strong>Legal obligation:</strong> We may process data where required by law.</li>
      </ul>

      <h2>4. Data Sharing and Third Parties</h2>
      <p>We do not sell, rent, or trade your personal data. We may share your data with:</p>
      <ul>
        <li><strong>Service providers:</strong> We use Supabase (hosted in the EU) for database services and Vercel for website hosting. These providers process data on our behalf under appropriate data processing agreements.</li>
        <li><strong>Legal requirements:</strong> We may disclose your data if required by law, regulation, or legal process.</li>
      </ul>

      <h2>5. International Data Transfers</h2>
      <p>
        Your data may be transferred to and processed in countries outside the United Kingdom. Where this occurs, we ensure appropriate safeguards are in place, such as Standard Contractual Clauses approved by the UK Information Commissioner&apos;s Office (ICO), to protect your data.
      </p>

      <h2>6. Data Retention</h2>
      <p>
        We retain your email address for as long as necessary to fulfil the purposes described in this policy, or until you request its deletion. Waitlist data will be retained until the App launches and you are notified, after which it will be deleted unless you create an account.
      </p>

      <h2>7. Your Rights</h2>
      <p>Under the UK GDPR, you have the following rights:</p>
      <ul>
        <li><strong>Right of access:</strong> Request a copy of the personal data we hold about you.</li>
        <li><strong>Right to rectification:</strong> Request correction of inaccurate personal data.</li>
        <li><strong>Right to erasure:</strong> Request deletion of your personal data.</li>
        <li><strong>Right to restriction:</strong> Request that we restrict the processing of your data.</li>
        <li><strong>Right to data portability:</strong> Request a copy of your data in a structured, machine-readable format.</li>
        <li><strong>Right to object:</strong> Object to the processing of your data based on legitimate interests.</li>
        <li><strong>Right to withdraw consent:</strong> Withdraw your consent at any time where processing is based on consent.</li>
      </ul>
      <p>
        To exercise any of these rights, please contact us at <a href="mailto:privacy@unworried.co.uk">privacy@unworried.co.uk</a>.
      </p>

      <h2>8. Data Security</h2>
      <p>
        We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, alteration, disclosure, or destruction. These include encryption in transit (TLS/SSL), access controls, and regular security reviews.
      </p>

      <h2>9. Children&apos;s Privacy</h2>
      <p>
        Our services are not directed at children under the age of 16. We do not knowingly collect personal data from children. If you believe we have collected data from a child, please contact us and we will promptly delete it.
      </p>

      <h2>10. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. We will notify you of any material changes by updating the &quot;Last updated&quot; date at the top of this page. We encourage you to review this policy periodically.
      </p>

      <h2>11. Complaints</h2>
      <p>
        If you are not satisfied with how we handle your personal data, you have the right to lodge a complaint with the Information Commissioner&apos;s Office (ICO) at <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer">ico.org.uk</a> or by calling 0303 123 1113.
      </p>

      <h2>12. Contact Us</h2>
      <p>
        If you have any questions about this Privacy Policy or our data practices, please contact us at:
      </p>
      <p>
        Unworried Ventures LTD<br />
        124 City Road, London, England, EC1V 2NX, United Kingdom<br />
        Email: <a href="mailto:privacy@unworried.co.uk">privacy@unworried.co.uk</a>
      </p>
    </LegalLayout>
  );
}
