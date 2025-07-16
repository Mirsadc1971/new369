import React from 'react'
import { Link } from 'react-router-dom'

const Privacy = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-500 to-primary-700 text-white section-padding">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-1 mb-6 text-white">
              Privacy{' '}
              <span className="text-gradient bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Policy
              </span>
            </h1>
            <p className="body-large mb-8 text-blue-100 max-w-3xl mx-auto">
              Your privacy is important to us. This policy explains how Manage369 
              collects, uses, and protects your personal information.
            </p>
            <p className="text-sm text-blue-200">
              Last updated: January 2025
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="max-w-4xl mx-auto prose prose-lg">
            
            {/* Introduction */}
            <div className="mb-12">
              <h2 className="heading-2 mb-6">Introduction</h2>
              <p className="body-text mb-4">
                Manage369 ("we," "our," or "us") is committed to protecting your privacy and personal information. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when 
                you visit our website, use our services, or interact with us in connection with our property 
                management services.
              </p>
              <p className="body-text">
                By using our website or services, you consent to the data practices described in this policy. 
                If you do not agree with the practices described in this policy, please do not use our website or services.
              </p>
            </div>

            {/* Information We Collect */}
            <div className="mb-12">
              <h2 className="heading-2 mb-6">Information We Collect</h2>
              
              <h3 className="text-xl font-semibold mb-4">Personal Information</h3>
              <p className="body-text mb-4">We may collect the following types of personal information:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                <li>Contact information (name, email address, phone number, mailing address)</li>
                <li>Property information (property address, unit number, ownership details)</li>
                <li>Financial information (bank account details for payments, assessment information)</li>
                <li>Emergency contact information</li>
                <li>Communication preferences</li>
                <li>Service requests and maintenance history</li>
                <li>Board member and committee participation information</li>
              </ul>

              <h3 className="text-xl font-semibold mb-4">Automatically Collected Information</h3>
              <p className="body-text mb-4">When you visit our website, we may automatically collect:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                <li>IP address and device information</li>
                <li>Browser type and version</li>
                <li>Pages visited and time spent on our website</li>
                <li>Referring website information</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>

              <h3 className="text-xl font-semibold mb-4">Information from Third Parties</h3>
              <p className="body-text mb-4">We may receive information from:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Property owners and HOA boards</li>
                <li>Vendors and service providers</li>
                <li>Legal and financial institutions</li>
                <li>Government agencies and regulatory bodies</li>
              </ul>
            </div>

            {/* How We Use Information */}
            <div className="mb-12">
              <h2 className="heading-2 mb-6">How We Use Your Information</h2>
              <p className="body-text mb-4">We use your information for the following purposes:</p>
              
              <h3 className="text-xl font-semibold mb-4">Property Management Services</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                <li>Providing property management and maintenance services</li>
                <li>Processing payments and managing financial accounts</li>
                <li>Coordinating repairs and maintenance requests</li>
                <li>Communicating about property matters and community updates</li>
                <li>Managing board meetings and community governance</li>
                <li>Enforcing community rules and regulations</li>
              </ul>

              <h3 className="text-xl font-semibold mb-4">Communication and Support</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                <li>Responding to inquiries and providing customer support</li>
                <li>Sending service notifications and important updates</li>
                <li>Providing emergency communications</li>
                <li>Conducting surveys and gathering feedback</li>
              </ul>

              <h3 className="text-xl font-semibold mb-4">Legal and Compliance</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                <li>Complying with legal obligations and regulations</li>
                <li>Protecting our rights and interests</li>
                <li>Preventing fraud and ensuring security</li>
                <li>Maintaining accurate records for auditing purposes</li>
              </ul>

              <h3 className="text-xl font-semibold mb-4">Business Operations</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Improving our services and website functionality</li>
                <li>Analyzing usage patterns and trends</li>
                <li>Marketing our services to potential clients</li>
                <li>Training staff and quality assurance</li>
              </ul>
            </div>

            {/* Information Sharing */}
            <div className="mb-12">
              <h2 className="heading-2 mb-6">How We Share Your Information</h2>
              <p className="body-text mb-4">
                We may share your information in the following circumstances:
              </p>

              <h3 className="text-xl font-semibold mb-4">Service Providers</h3>
              <p className="body-text mb-4">
                We may share information with trusted third-party service providers who assist us in:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                <li>Maintenance and repair services</li>
                <li>Financial and accounting services</li>
                <li>Legal and professional services</li>
                <li>Technology and software providers</li>
                <li>Insurance companies</li>
              </ul>

              <h3 className="text-xl font-semibold mb-4">Property Owners and Boards</h3>
              <p className="body-text mb-6">
                We may share information with property owners, HOA boards, and community members 
                as necessary for property management and governance purposes.
              </p>

              <h3 className="text-xl font-semibold mb-4">Legal Requirements</h3>
              <p className="body-text mb-6">
                We may disclose information when required by law, court order, or government 
                regulation, or to protect our rights, property, or safety.
              </p>

              <h3 className="text-xl font-semibold mb-4">Business Transfers</h3>
              <p className="body-text">
                In the event of a merger, acquisition, or sale of assets, your information 
                may be transferred to the new entity.
              </p>
            </div>

            {/* Data Security */}
            <div className="mb-12">
              <h2 className="heading-2 mb-6">Data Security</h2>
              <p className="body-text mb-4">
                We implement appropriate technical and organizational measures to protect your 
                personal information against unauthorized access, alteration, disclosure, or destruction:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                <li>Encryption of sensitive data in transit and at rest</li>
                <li>Secure servers and data centers</li>
                <li>Access controls and authentication measures</li>
                <li>Regular security assessments and updates</li>
                <li>Employee training on data protection</li>
                <li>Incident response procedures</li>
              </ul>
              <p className="body-text">
                However, no method of transmission over the internet or electronic storage is 
                100% secure. While we strive to protect your information, we cannot guarantee 
                absolute security.
              </p>
            </div>

            {/* Data Retention */}
            <div className="mb-12">
              <h2 className="heading-2 mb-6">Data Retention</h2>
              <p className="body-text mb-4">
                We retain your personal information for as long as necessary to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                <li>Provide our services and fulfill our contractual obligations</li>
                <li>Comply with legal and regulatory requirements</li>
                <li>Resolve disputes and enforce our agreements</li>
                <li>Maintain business records for operational purposes</li>
              </ul>
              <p className="body-text">
                When information is no longer needed, we will securely delete or anonymize it 
                in accordance with our data retention policies.
              </p>
            </div>

            {/* Your Rights */}
            <div className="mb-12">
              <h2 className="heading-2 mb-6">Your Rights and Choices</h2>
              <p className="body-text mb-4">
                Depending on your location and applicable laws, you may have the following rights:
              </p>
              
              <h3 className="text-xl font-semibold mb-4">Access and Correction</h3>
              <p className="body-text mb-6">
                You have the right to access and update your personal information. You can 
                request corrections to inaccurate or incomplete information.
              </p>

              <h3 className="text-xl font-semibold mb-4">Communication Preferences</h3>
              <p className="body-text mb-6">
                You can opt out of non-essential communications by following the unsubscribe 
                instructions in our emails or contacting us directly.
              </p>

              <h3 className="text-xl font-semibold mb-4">Data Portability and Deletion</h3>
              <p className="body-text mb-6">
                Subject to legal and contractual obligations, you may request a copy of your 
                data or request deletion of your personal information.
              </p>

              <p className="body-text">
                To exercise these rights, please contact us using the information provided below.
              </p>
            </div>

            {/* Cookies */}
            <div className="mb-12">
              <h2 className="heading-2 mb-6">Cookies and Tracking Technologies</h2>
              <p className="body-text mb-4">
                We use cookies and similar technologies to enhance your experience on our website:
              </p>
              
              <h3 className="text-xl font-semibold mb-4">Types of Cookies</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                <li><strong>Essential Cookies:</strong> Necessary for website functionality</li>
                <li><strong>Performance Cookies:</strong> Help us understand how visitors use our site</li>
                <li><strong>Functional Cookies:</strong> Remember your preferences and settings</li>
                <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements</li>
              </ul>

              <h3 className="text-xl font-semibold mb-4">Managing Cookies</h3>
              <p className="body-text">
                You can control cookies through your browser settings. However, disabling 
                certain cookies may affect the functionality of our website.
              </p>
            </div>

            {/* Third-Party Links */}
            <div className="mb-12">
              <h2 className="heading-2 mb-6">Third-Party Links</h2>
              <p className="body-text">
                Our website may contain links to third-party websites. We are not responsible 
                for the privacy practices or content of these external sites. We encourage you 
                to review the privacy policies of any third-party sites you visit.
              </p>
            </div>

            {/* Children's Privacy */}
            <div className="mb-12">
              <h2 className="heading-2 mb-6">Children's Privacy</h2>
              <p className="body-text">
                Our services are not directed to children under 13 years of age. We do not 
                knowingly collect personal information from children under 13. If we become 
                aware that we have collected information from a child under 13, we will take 
                steps to delete such information.
              </p>
            </div>

            {/* Changes to Policy */}
            <div className="mb-12">
              <h2 className="heading-2 mb-6">Changes to This Privacy Policy</h2>
              <p className="body-text">
                We may update this Privacy Policy from time to time to reflect changes in our 
                practices or applicable laws. We will notify you of any material changes by 
                posting the updated policy on our website and updating the "Last Updated" date. 
                Your continued use of our services after such changes constitutes acceptance 
                of the updated policy.
              </p>
            </div>

            {/* Contact Information */}
            <div className="mb-12">
              <h2 className="heading-2 mb-6">Contact Us</h2>
              <p className="body-text mb-6">
                If you have questions about this Privacy Policy or our data practices, 
                please contact us:
              </p>
              
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-lg font-semibold mb-4">Manage369</h3>
                <div className="space-y-2 text-gray-600">
                  <p><strong>Email:</strong> service@manage369.com</p>
                  <p><strong>Phone:</strong> (312) 402-7002</p>
                  <p><strong>Phone:</strong> (847) 834-4131</p>
                  <p><strong>Address:</strong> Glenview, IL</p>
                </div>
                <p className="text-sm text-gray-500 mt-4">
                  We will respond to your inquiry within 30 days of receipt.
                </p>
              </div>
            </div>

            {/* State-Specific Rights */}
            <div className="mb-12">
              <h2 className="heading-2 mb-6">State-Specific Privacy Rights</h2>
              
              <h3 className="text-xl font-semibold mb-4">Illinois Residents</h3>
              <p className="body-text mb-6">
                Illinois residents may have additional rights under the Illinois Personal 
                Information Protection Act and other state privacy laws. We comply with 
                applicable Illinois privacy requirements in our data handling practices.
              </p>

              <h3 className="text-xl font-semibold mb-4">California Residents</h3>
              <p className="body-text">
                If you are a California resident, you may have additional rights under the 
                California Consumer Privacy Act (CCPA). Please contact us for more information 
                about your California privacy rights.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-primary text-white">
        <div className="container-max text-center">
          <h2 className="heading-2 mb-4 text-white">Questions About Our Privacy Practices?</h2>
          <p className="body-large mb-8 text-blue-100 max-w-2xl mx-auto">
            We're committed to transparency and protecting your privacy. Contact us if you 
            have any questions or concerns about how we handle your information.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:847-834-4131" className="btn-secondary text-lg px-8 py-4">
              Call (847) 834-4131
            </a>
            <Link to="/contact" className="btn-outline border-white text-white hover:bg-white hover:text-primary-500 text-lg px-8 py-4">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Privacy
  )
}