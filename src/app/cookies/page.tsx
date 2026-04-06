import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Cookie Policy — Unfold Trails",
  description: "Cookie Policy for Unfold Trails, operated by Unworried Ventures LTD.",
};

export default function CookiePolicy() {
  return (
    <LegalLayout title="Cookie Policy" lastUpdated="6 April 2026">
      <p>
        This Cookie Policy explains how Unworried Ventures LTD (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), trading as Unfold Trails, uses cookies and similar technologies on our website at www.unfoldtrails.com (the &quot;Website&quot;).
      </p>

      <h2>1. What Are Cookies?</h2>
      <p>
        Cookies are small text files that are stored on your device (computer, tablet, or mobile phone) when you visit a website. They are widely used to make websites work more efficiently and to provide information to website owners.
      </p>

      <h2>2. Cookies We Use</h2>
      <p>
        We use a minimal number of cookies on the Website. Below is a summary of the cookies we may use:
      </p>

      <h3>2.1 Strictly Necessary Cookies</h3>
      <p>
        These cookies are essential for the Website to function properly. They enable basic features such as page navigation and security. The Website cannot function properly without these cookies, and they cannot be disabled.
      </p>
      <ul>
        <li><strong>Session cookies:</strong> Used to maintain your browsing session. These are temporary and are deleted when you close your browser.</li>
      </ul>

      <h3>2.2 Performance and Analytics Cookies</h3>
      <p>
        We do not currently use any third-party analytics or tracking cookies. If we introduce analytics in the future, we will update this policy and obtain your consent where required.
      </p>

      <h3>2.3 Marketing Cookies</h3>
      <p>
        We do not use any marketing or advertising cookies.
      </p>

      <h2>3. Third-Party Cookies</h2>
      <p>
        Our Website is hosted on Vercel and uses Supabase for backend services. These providers may set strictly necessary cookies for the operation of their services (e.g., load balancing, security). These cookies do not track you across websites and are not used for advertising purposes.
      </p>

      <h2>4. How to Manage Cookies</h2>
      <p>
        Most web browsers allow you to control cookies through their settings. You can typically:
      </p>
      <ul>
        <li>View what cookies are stored on your device and delete them individually or all at once.</li>
        <li>Block third-party cookies.</li>
        <li>Block cookies from particular websites.</li>
        <li>Block all cookies.</li>
        <li>Delete all cookies when you close your browser.</li>
      </ul>
      <p>
        Please note that blocking or deleting cookies may affect the functionality of the Website. For more information on managing cookies in your browser, visit:
      </p>
      <ul>
        <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">Google Chrome</a></li>
        <li><a href="https://support.mozilla.org/en-US/kb/clear-cookies-and-site-data-firefox" target="_blank" rel="noopener noreferrer">Mozilla Firefox</a></li>
        <li><a href="https://support.apple.com/en-gb/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer">Safari</a></li>
        <li><a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer">Microsoft Edge</a></li>
      </ul>

      <h2>5. Local Storage</h2>
      <p>
        In addition to cookies, we may use browser local storage to store your language preference on the Website. This data is stored only on your device and is not transmitted to our servers. You can clear local storage through your browser&apos;s developer tools or settings.
      </p>

      <h2>6. Changes to This Policy</h2>
      <p>
        We may update this Cookie Policy from time to time to reflect changes in the cookies we use or for other operational, legal, or regulatory reasons. We will notify you of any material changes by updating the &quot;Last updated&quot; date at the top of this page.
      </p>

      <h2>7. Contact Us</h2>
      <p>
        If you have any questions about our use of cookies, please contact us at:
      </p>
      <p>
        Unworried Ventures LTD<br />
        124 City Road, London, England, EC1V 2NX, United Kingdom<br />
        Email: <a href="mailto:privacy@unworried.co.uk">privacy@unworried.co.uk</a>
      </p>
    </LegalLayout>
  );
}
