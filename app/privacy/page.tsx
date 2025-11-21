export default function PrivacyPage() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-foreground mb-4">{'Privacy Policy'}</h1>
        <p className="text-sm text-muted-foreground mb-8">{'Last updated: November 18, 2025'}</p>

        <div className="prose prose-slate max-w-none space-y-6">
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">{'1. Information We Collect'}</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {'EcoBrushly ("we," "our," or "us") collects information to provide better services to our users. We collect information in the following ways:'}
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>{'Information you give us (e.g., contact form submissions, newsletter signups)'}</li>
              <li>{'Information we get from your use of our services (e.g., page views, clicks on affiliate links)'}</li>
              <li>{'Cookies and similar technologies to enhance your experience'}</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">{'2. How We Use Information'}</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {'We use the information we collect to:'}
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>{'Provide, maintain, and improve our website and content'}</li>
              <li>{'Respond to your inquiries and provide customer support'}</li>
              <li>{'Send you updates, newsletters, and promotional materials (with your consent)'}</li>
              <li>{'Analyze site usage and optimize user experience'}</li>
              <li>{'Comply with legal obligations'}</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">{'3. Cookies'}</h2>
            <p className="text-muted-foreground leading-relaxed">
              {'We use cookies and similar tracking technologies to track activity on our website and store certain information. Cookies help us improve your experience by remembering your preferences and analyzing how you use our site. You can instruct your browser to refuse all cookies or indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our service.'}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">{'4. Amazon Associates Program'}</h2>
            <p className="text-muted-foreground leading-relaxed">
              {'EcoBrushly is a participant in the Amazon Associates Program. When you click on product links and make purchases on Amazon, we may earn a commission. This does not affect the price you pay and helps us maintain our free content. We track these clicks through cookies to ensure proper commission attribution.'}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">{'5. Third-Party Services'}</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {'We may employ third-party companies and individuals to facilitate our service, including:'}
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>{'Analytics providers (to understand site usage)'}</li>
              <li>{'Advertising partners (to display relevant ads)'}</li>
              <li>{'Email service providers (to send newsletters)'}</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">{'6. Data Security'}</h2>
            <p className="text-muted-foreground leading-relaxed">
              {'We value your trust in providing us your personal information and strive to use commercially acceptable means of protecting it. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.'}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">{'7. Your Rights'}</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {'You have the right to:'}
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>{'Access, update, or delete your personal information'}</li>
              <li>{'Opt-out of marketing communications'}</li>
              <li>{'Disable cookies through your browser settings'}</li>
              <li>{'Request a copy of your data'}</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">{'8. Children\'s Privacy'}</h2>
            <p className="text-muted-foreground leading-relaxed">
              {'Our service does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from children under 13. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us.'}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">{'9. Changes to This Privacy Policy'}</h2>
            <p className="text-muted-foreground leading-relaxed">
              {'We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy Policy periodically for any changes.'}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">{'10. Contact Us'}</h2>
            <p className="text-muted-foreground leading-relaxed">
              {'If you have any questions about this Privacy Policy, please contact us at: '}
              <a href="mailto:privacy@ecobrushly.com" className="text-primary hover:underline">
                {'privacy@ecobrushly.com'}
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
