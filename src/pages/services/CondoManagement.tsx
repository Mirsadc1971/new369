import React from 'react';

const CondoManagement: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
            Condominium Management
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Professional condominium association management services throughout Chicago and surrounding areas.
          </p>
        </div>
        
        <div className="mt-12">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Our Condominium Management Services
            </h2>
            
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-3">
                  Financial Management
                </h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Budget preparation and monitoring</li>
                  <li>• Assessment collection</li>
                  <li>• Financial reporting</li>
                  <li>• Reserve fund management</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-3">
                  Maintenance Coordination
                </h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Preventive maintenance programs</li>
                  <li>• Emergency response</li>
                  <li>• Vendor management</li>
                  <li>• Capital improvement projects</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-3">
                  Administrative Services
                </h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Board meeting coordination</li>
                  <li>• Document management</li>
                  <li>• Compliance monitoring</li>
                  <li>• Communication management</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-3">
                  Legal & Compliance
                </h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Regulatory compliance</li>
                  <li>• Legal coordination</li>
                  <li>• Insurance management</li>
                  <li>• Violation enforcement</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CondoManagement;