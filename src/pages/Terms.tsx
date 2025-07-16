import React from 'react'
import { Link } from 'react-router-dom'

const Terms = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-500 to-primary-700 text-white section-padding">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-1 mb-6 text-white">
              Terms of{' '}
              <span className="text-gradient bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Service
              </span>
            </h1>
            <p className="body-large mb-8 text-blue-100 max-w-3xl mx-auto">
              These terms govern your use of Manage369's website and services. 
              Please read them carefully before using our services.
            </p>
            <p className="text-sm text-blue-200">
              Last updated: January 2025
            </p>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="max-w-4xl mx-auto prose prose-lg">
            
            {/* Acceptance of Terms */}
            <div className="mb-12">
              <h2 className="heading-2 mb-6">Acceptance of Terms</h2>
              <p className="body-text mb-4">
                By accessing or using the Manage369 website ("Site") or engaging our property 
                management services ("Services"), you agree to be bound by these Terms of Service 
                ("Terms"). If you do not agree to these Terms, please do not use our Site or Services.
              </p>
              <p className="body-text">
                These Terms constitute a legally binding agreement between you and Manage369 
                ("Company," "we," "our," or "us"). We may modify these Terms at any time, 
                and such modifications will be effective immediately upon posting.
              </p>
            </div>

            {/* Description of Services */}
            <div className="mb-12">
              <h2 className="heading-2 mb-6">Description of Services</h2>
              <p className="body-text mb-4">
                Manage369 provides comprehensive property management services including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                <li>Condominium association management</li>
                <li>Townhome community management</li>
                <li>Homeowners association (HOA) management</li>
                <li>Financial management and reporting</li>
                <li>Maintenance coordination</li>
                <li>Board support and governance assistance</li>
                <li>Emergency response services</li>
                <li>Vendor management and oversight</li>
              </ul>
              <p className="body-text">
                Specific services provided will be detailed in individual service agreements 
                between Manage369 and property associations or owners.
              </p>
            </div>

            {/* User Responsibilities */}
            <div className="mb-12">
              <h2 className="heading-2 mb-6">User Responsibilities</h2>
              
              <h3 className="text-xl font-semibold mb-4">Account Information</h3>
              <p className="body-text mb-4">You agree to:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                <li>Provide accurate, current, and complete information</li>
                <li>Maintain the security of your account credentials</li>
                <li>Notify us immediately of any unauthorized use</li>
                <li>Update your information as necessary</li>
              </ul>

              <h3 className="text-xl font-semibold mb-4">Acceptable Use</h3>
              <p className="body-text mb-4">You agree not to:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                <li>Use our Services for any unlawful purpose</li>
                <li>Interfere with or disrupt our Services or servers</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Transmit viruses, malware, or other harmful code</li>
                <li>Harass, abuse, or harm other users</li>
                <li>Violate any applicable laws or regulations</li>
              </ul>

              <h3 className="text-xl font-semibold mb-4">Communication</h3>
              <p className="body-text">
                You agree to communicate respectfully with our staff and other community 
                members. Abusive, threatening, or inappropriate behavior may result in 
                termination of services.
              </p>
            </div>

            {/* Payment Terms */}
            <div className="mb-12">
              <h2 className="heading-2 mb-6">Payment Terms</h2>
              
              <h3 className="text-xl font-semibold mb-4">Service Fees</h3>
              <p className="body-text mb-6">
                Management fees and payment terms will be specified in individual service 
                agreements. Fees are typically billed monthly and are due upon receipt 
                unless otherwise specified.
              </p>

              <h3 className="text-xl font-semibold mb-4">Late Payments</h3>
              <p className="body-text mb-6">
                Late fees may apply to overdue payments as specified in service agreements. 
                Continued non-payment may result in suspension or termination of services.
              </p>

              <h3 className="text-xl font-semibold mb-4">Assessment Collections</h3>
              <p className="body-text">
                For association management services, we collect assessments on behalf of 
                the association according to the governing documents and applicable laws.
              </p>
            </div>

            {/* Intellectual Property */}
            <div className="mb-12">
              <h2 className="heading-2 mb-6">Intellectual Property</h2>
              
              <h3 className="text-xl font-semibold mb-4">Our Content</h3>
              <p className="body-text mb-6">
                All content on our Site, including text, graphics, logos, images, and software, 
                is the property of Manage369 or its licensors and is protected by copyright, 
                trademark, and other intellectual property laws.
              </p>

              <h3 className="text-xl font-semibold mb-4">Limited License</h3>
              <p className="body-text mb-6">
                We grant you a limited, non-exclusive, non-transferable license to access 
                and use our Site for its intended purpose. You may not reproduce, distribute, 
                or create derivative works without our written permission.
              </p>

              <h3 className="text-xl font-semibold mb-4">User Content</h3>
              <p className="body-text">
                By submitting content to our Site or Services, you grant us a non-exclusive, 
                royalty-free license to use, reproduce, and distribute such content in 
                connection with our Services.
              </p>
            </div>

            {/* Privacy and Data Protection */}
            <div className="mb-12">
              <h2 className="heading-2 mb-6">Privacy and Data Protection</h2>
              <p className="body-text mb-4">
                Your privacy is important to us. Our collection and use of personal information 
                is governed by our Privacy Policy, which is incorporated into these Terms by reference.
              </p>
              <p className="body-text">
                By using our Services, you consent to the collection, use, and disclosure of 
                your information as described in our Privacy Policy.
              </p>
            </div>

            {/* Disclaimers */}
            <div className="mb-12">
              <h2 className="heading-2 mb-6">Disclaimers</h2>
              
              <h3 className="text-xl font-semibold mb-4">Service Availability</h3>
              <p className="body-text mb-6">
                While we strive to provide continuous service, we do not guarantee that our 
                Site or Services will be available at all times. We may experience downtime 
                for maintenance, updates, or technical issues.
              </p>

              <h3 className="text-xl font-semibold mb-4">Third-Party Services</h3>
              <p className="body-text mb-6">
                We may use third-party vendors and service providers. We are not responsible 
                for the actions, errors, or omissions of these third parties, though we will 
                use reasonable efforts to select qualified providers.
              </p>

              <h3 className="text-xl font-semibold mb-4">Information Accuracy</h3>
              <p className="body-text">
                While we strive to provide accurate information, we make no warranties about 
                the completeness, reliability, or accuracy of information on our Site.
              </p>
            </div>

            {/* Limitation of Liability */}
            <div className="mb-12">
              <h2 className="heading-2 mb-6">Limitation of Liability</h2>
              <p className="body-text mb-4">
                To the fullest extent permitted by law, Manage369 shall not be liable for any 
                indirect, incidental, special, consequential, or punitive damages, including 
                but not limited to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                <li>Loss of profits or revenue</li>
                <li>Loss of data or information</li>
                <li>Business interruption</li>
                <li>Property damage not directly caused by our negligence</li>
              </ul>
              <p className="body-text">
                Our total liability for any claim shall not exceed the amount paid by you 
                for our Services in the twelve months preceding the claim.
              </p>
            </div>

            {/* Indemnification */}
            <div className="mb-12">
              <h2 className="heading-2 mb-6">Indemnification</h2>
              <p className="body-text">
                You agree to indemnify, defend, and hold harmless Manage369, its officers, 
                directors, employees, and agents from any claims, damages, losses, or expenses 
                arising from your use of our Services, violation of these Terms, or violation 
                of any rights of another party.
              </p>
            </div>

            {/* Termination */}
            <div className="mb-12">
              <h2 className="heading-2 mb-6">Termination</h2>
              
              <h3 className="text-xl font-semibold mb-4">Termination by You</h3>
              <p className="body-text mb-6">
                You may terminate your use of our Services at any time by providing written 
                notice as specified in your service agreement. Termination notice periods 
                and procedures will be outlined in individual contracts.
              </p>

              <h3 className="text-xl font-semibold mb-4">Termination by Us</h3>
              <p className="body-text mb-6">
                We may terminate or suspend your access to our Services immediately, without 
                prior notice, for conduct that we believe violates these Terms or is harmful 
                to other users, us, or third parties.
              </p>

              <h3 className="text-xl font-semibold mb-4">Effect of Termination</h3>
              <p className="body-text">
                Upon termination, your right to use our Services will cease immediately. 
                We will provide a reasonable transition period for the transfer of records 
                and responsibilities as outlined in service agreements.
              </p>
            </div>

            {/* Governing Law */}
            <div className="mb-12">
              <h2 className="heading-2 mb-6">Governing Law and Dispute Resolution</h2>
              
              <h3 className="text-xl font-semibold mb-4">Governing Law</h3>
              <p className="body-text mb-6">
                These Terms shall be governed by and construed in accordance with the laws 
                of the State of Illinois, without regard to its conflict of law provisions.
              </p>

              <h3 className="text-xl font-semibold mb-4">Dispute Resolution</h3>
              <p className="body-text mb-6">
                Any disputes arising under these Terms shall be resolved through binding 
                arbitration in accordance with the rules of the American Arbitration Association, 
                unless both parties agree to court proceedings.
              </p>

              <h3 className="text-xl font-semibold mb-4">Jurisdiction</h3>
              <p className="body-text">
                Any legal proceedings shall take place in the courts of Cook County, Illinois, 
                and you consent to the jurisdiction of such courts.
              </p>
            </div>

            {/* Severability */}
            <div className="mb-12">
              <h2 className="heading-2 mb-6">Severability</h2>
              <p className="body-text">
                If any provision of these Terms is found to be unenforceable or invalid, 
                that provision will be limited or eliminated to the minimum extent necessary 
                so that these Terms will otherwise remain in full force and effect.
              </p>
            </div>

            {/* Entire Agreement */}
            <div className="mb-12">
              <h2 className="heading-2 mb-6">Entire Agreement</h2>
              <p className="body-text">
                These Terms, together with our Privacy Policy and any service agreements, 
                constitute the entire agreement between you and Manage369 regarding the use 
                of our Services and supersede all prior agreements and understandings.
              </p>
            </div>

            {/* Contact Information */}
            <div className="mb-12">
              <h2 className="heading-2 mb-6">Contact Information</h2>
              <p className="body-text mb-6">
                If you have questions about these Terms of Service, please contact us:
              </p>
              
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-lg font-semibold mb-4">Manage369</h3>
                <div className="space-y-2 text-gray-600">
                  <p><strong>Email:</strong> service@manage369.com</p>
                  <p><strong>Phone:</strong> (312) 402-7002</p>
                  <p><strong>Phone:</strong> (847) 834-4131</p>
                  <p><strong>Address:</strong> Glenview, IL</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-primary text-white">
        <div className="container-max text-center">
          <h2 className="heading-2 mb-4 text-white">Questions About Our Terms?</h2>
          <p className="body-large mb-8 text-blue-100 max-w-2xl mx-auto">
            We're here to help clarify any questions you may have about our terms of service 
            or service agreements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:service@manage369.com" className="btn-secondary text-lg px-8 py-4">
            <a href="tel:847-834-4131" className="btn-outline border-white text-white hover:bg-white hover:text-primary-500 text-lg px-8 py-4">
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

export default Terms
  )
}