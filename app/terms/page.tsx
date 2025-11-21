export default function TermsPage() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-foreground mb-4">{'Terms of Service'}</h1>
        <p className="text-sm text-muted-foreground mb-8">{'Last updated: November 18, 2025'}</p>

        <div className="prose prose-slate max-w-none space-y-6">
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">{'1. Acceptance of Terms'}</h2>
            <p className="text-muted-foreground leading-relaxed">
              {'By accessing and using EcoBrushly.com (the "Website"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to these Terms of Service, please do not use our Website.'}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">{'2. Use License'}</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {'Permission is granted to temporarily access the materials (information or software) on EcoBrushly for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:'}
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>{'Modify or copy the materials'}</li>
              <li>{'Use the materials for any commercial purpose or public display'}</li>
              <li>{'Attempt to decompile or reverse engineer any software on the Website'}</li>
              <li>{'Remove any copyright or proprietary notations from the materials'}</li>
              <li>{'Transfer the materials to another person or "mirror" the materials on any other server'}</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">{'3. Disclaimer'}</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {'The materials on EcoBrushly are provided on an "as is" basis. EcoBrushly makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.'}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {'Our product reviews and recommendations are based on our personal testing and opinions. Results may vary, and we make no guarantees about the performance or suitability of any products for your specific needs.'}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">{'4. Amazon Associates Disclosure'}</h2>
            <p className="text-muted-foreground leading-relaxed">
              {'EcoBrushly is a participant in the Amazon Associates Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.com. As an Amazon Associate, we earn from qualifying purchases. This means we may receive a commission when you click on our affiliate links and make a purchase, at no additional cost to you.'}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">{'5. Product Information Accuracy'}</h2>
            <p className="text-muted-foreground leading-relaxed">
              {'While we strive to provide accurate product information, prices, availability, and specifications, we cannot guarantee that all information is current or error-free. Products and prices are subject to change without notice. For the most up-to-date information, please check directly with Amazon or the product manufacturer.'}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">{'6. Limitations'}</h2>
            <p className="text-muted-foreground leading-relaxed">
              {'In no event shall EcoBrushly or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on EcoBrushly, even if EcoBrushly or an authorized representative has been notified orally or in writing of the possibility of such damage.'}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">{'7. Content Ownership'}</h2>
            <p className="text-muted-foreground leading-relaxed">
              {'All content on this Website, including but not limited to text, graphics, logos, images, and software, is the property of EcoBrushly or its content suppliers and is protected by international copyright laws. Unauthorized use of any content from this Website may violate copyright, trademark, and other laws.'}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">{'8. User Comments and Submissions'}</h2>
            <p className="text-muted-foreground leading-relaxed">
              {'If you submit comments, feedback, or other content to our Website, you grant EcoBrushly a non-exclusive, royalty-free, perpetual, and worldwide license to use, reproduce, modify, and publish such content. You represent that you own or have the necessary rights to the content you submit.'}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">{'9. External Links'}</h2>
            <p className="text-muted-foreground leading-relaxed">
              {'Our Website may contain links to third-party websites, including Amazon.com. We have no control over the content and practices of these sites and cannot accept responsibility or liability for their respective privacy policies or content.'}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">{'10. Modifications'}</h2>
            <p className="text-muted-foreground leading-relaxed">
              {'EcoBrushly may revise these Terms of Service at any time without notice. By using this Website, you agree to be bound by the current version of these Terms of Service. We encourage you to review these terms periodically for any changes.'}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">{'11. Governing Law'}</h2>
            <p className="text-muted-foreground leading-relaxed">
              {'These terms and conditions are governed by and construed in accordance with the laws of the jurisdiction in which EcoBrushly operates, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.'}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">{'12. Contact Information'}</h2>
            <p className="text-muted-foreground leading-relaxed">
              {'If you have any questions about these Terms of Service, please contact us at: '}
              <a href="mailto:legal@ecobrushly.com" className="text-primary hover:underline">
                {'legal@ecobrushly.com'}
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
