import React from 'react';
import CanonicalLink from '../components/CanonicalLink';

const LegalDisclaimers: React.FC = () => {
  return (
    <div>
      <CanonicalLink href="https://www.manage369.com/legal-disclaimers" />
      <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center">Legal Disclaimers</h1>
          
          <div className="space-y-8">
            <section className="bg-gray-800 rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4 text-blue-400">Professional Licensing</h2>
              <div className="space-y-4">
                <p className="text-gray-300 text-sm leading-relaxed">
                  Manage369 is a licensed property management company in the State of Illinois. 
                  License #: 291.000211. All property management activities are conducted 
                  in accordance with Illinois Department of Financial and Professional Regulation 
                  (IDFPR) requirements and Community Associations Institute (CAI) standards.
                </p>
              </div>
            </section>

            <section className="bg-gray-800 rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4 text-blue-400">General Disclaimer</h2>
              <div className="space-y-4">
                <p className="text-gray-300 text-sm leading-relaxed">
                  The information provided on this website is for general informational purposes only. 
                  While we strive to keep the information up to date and correct, we make no 
                  representations or warranties of any kind, express or implied, about the completeness, 
                  accuracy, reliability, suitability, or availability with respect to the website or 
                  the information, products, services, or related graphics contained on the website 
                  for any purpose.
                </p>
              </div>
            </section>

            <section className="bg-gray-800 rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4 text-blue-400">Limitation of Liability</h2>
              <div className="space-y-4">
                <p className="text-gray-300 text-sm leading-relaxed">
                  In no event will Manage369 be liable for any loss or damage including without 
                  limitation, indirect or consequential loss or damage, or any loss or damage 
                  whatsoever arising from loss of data or profits arising out of, or in connection 
                  with, the use of this website or our services.
                </p>
              </div>
            </section>

            <section className="bg-gray-800 rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4 text-blue-400">Professional Standards</h2>
              <div className="space-y-4">
                <p className="text-gray-300 text-sm leading-relaxed">
                  All services are provided in accordance with applicable state and local laws, 
                  regulations, and professional standards. We maintain appropriate insurance 
                  coverage and bonding as required by law and industry best practices.
                </p>
              </div>
            </section>

            <section className="bg-gray-800 rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4 text-blue-400">Contact Information</h2>
              <div className="space-y-4">
                <p className="text-gray-300 text-sm leading-relaxed">
                  For questions regarding our licensing, professional standards, or legal compliance, 
                  please contact us directly. We are committed to maintaining the highest standards 
                  of professional service and regulatory compliance.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default LegalDisclaimers;