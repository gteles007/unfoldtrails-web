import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Terms of Service — Unfold Trails",
  description: "Terms of Service for Unfold Trails, operated by Unworried Ventures LTD.",
};

export default function TermsOfService() {
  return (
    <LegalLayout title="Terms of Service" lastUpdated="6 April 2026">
      <p>
        These Terms of Service (&quot;Terms&quot;) govern your use of the Unfold Trails website at www.unfoldtrails.com (the &quot;Website&quot;) and any related services provided by Unworried Ventures LTD (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;).
      </p>
      <p>
        Unworried Ventures LTD is a company registered in England and Wales (Company number 15016871) with its registered office at 124 City Road, London, England, EC1V 2NX, United Kingdom.
      </p>
      <p>
        By accessing or using the Website, you agree to be bound by these Terms. If you do not agree, please do not use the Website.
      </p>

      <h2>1. Description of Service</h2>
      <p>
        Unfold Trails is a mobile application currently in development. The Website serves as an informational landing page and provides a waitlist sign-up feature that allows you to register your interest and be notified when the App launches.
      </p>

      <h2>2. Eligibility</h2>
      <p>
        You must be at least 16 years of age to use the Website and join the waitlist. By using the Website, you represent and warrant that you meet this requirement.
      </p>

      <h2>3. Waitlist</h2>
      <ul>
        <li>Joining the waitlist does not guarantee access to the App, early access, or any particular features.</li>
        <li>We reserve the right to modify, suspend, or discontinue the waitlist at any time without notice.</li>
        <li>You agree to provide a valid email address. We will use it solely to notify you about the App launch and related updates.</li>
        <li>You may request removal from the waitlist at any time by contacting us at <a href="mailto:hello@unfoldtrails.com">hello@unfoldtrails.com</a>.</li>
      </ul>

      <h2>4. Intellectual Property</h2>
      <p>
        All content on the Website, including but not limited to text, graphics, logos, icons, images, and software, is the property of Unworried Ventures LTD or its licensors and is protected by applicable intellectual property laws.
      </p>
      <p>
        You may not reproduce, distribute, modify, create derivative works of, publicly display, or otherwise use any content from the Website without our prior written permission.
      </p>

      <h2>5. User Conduct</h2>
      <p>You agree not to:</p>
      <ul>
        <li>Use the Website for any unlawful purpose or in violation of any applicable laws or regulations.</li>
        <li>Attempt to gain unauthorised access to any part of the Website, its servers, or any connected systems.</li>
        <li>Submit false, misleading, or fraudulent information.</li>
        <li>Use automated tools (bots, scrapers, etc.) to access or interact with the Website without our permission.</li>
        <li>Interfere with or disrupt the Website or its infrastructure.</li>
      </ul>

      <h2>6. Disclaimers</h2>
      <p>
        The Website and its content are provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind, whether express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, and non-infringement.
      </p>
      <p>
        We do not warrant that the Website will be uninterrupted, error-free, or free of viruses or other harmful components. We make no guarantees regarding the accuracy or completeness of any content on the Website.
      </p>

      <h2>7. Limitation of Liability</h2>
      <p>
        To the fullest extent permitted by law, Unworried Ventures LTD and its directors, officers, employees, and agents shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits, revenue, data, or goodwill, arising out of or in connection with your use of the Website.
      </p>
      <p>
        Nothing in these Terms excludes or limits our liability for death or personal injury caused by our negligence, fraud or fraudulent misrepresentation, or any other liability that cannot be excluded or limited by English law.
      </p>

      <h2>8. Third-Party Links</h2>
      <p>
        The Website may contain links to third-party websites or services. We are not responsible for the content, privacy policies, or practices of any third-party sites. Your use of third-party sites is at your own risk.
      </p>

      <h2>9. Modifications to These Terms</h2>
      <p>
        We reserve the right to modify these Terms at any time. Changes will be effective when posted on the Website with an updated &quot;Last updated&quot; date. Your continued use of the Website after any changes constitutes acceptance of the revised Terms.
      </p>

      <h2>10. Termination</h2>
      <p>
        We may terminate or suspend your access to the Website at any time, without prior notice or liability, for any reason, including if you breach these Terms.
      </p>

      <h2>11. Governing Law and Jurisdiction</h2>
      <p>
        These Terms are governed by and construed in accordance with the laws of England and Wales. Any disputes arising from or relating to these Terms or your use of the Website shall be subject to the exclusive jurisdiction of the courts of England and Wales.
      </p>

      <h2>12. Severability</h2>
      <p>
        If any provision of these Terms is found to be invalid or unenforceable, that provision shall be limited or eliminated to the minimum extent necessary, and the remaining provisions shall remain in full force and effect.
      </p>

      <h2>13. Contact Us</h2>
      <p>
        If you have any questions about these Terms, please contact us at:
      </p>
      <p>
        Unworried Ventures LTD<br />
        124 City Road, London, England, EC1V 2NX, United Kingdom<br />
        Email: <a href="mailto:hello@unfoldtrails.com">hello@unfoldtrails.com</a>
      </p>
    </LegalLayout>
  );
}
