import React from 'react';

const Services: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
            Our Services
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Comprehensive property management solutions tailored to your needs.
          </p>
        </div>
        
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Condominium Management
            </h3>
            <p className="text-gray-600">
              Full-service management for condominium associations including financial management, maintenance coordination, and board support.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              HOA Management
            </h3>
            <p className="text-gray-600">
              Professional homeowners association management services to maintain community standards and property values.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Townhome Management
            </h3>
            <p className="text-gray-600">
              Specialized management services for townhome communities with focus on maintenance and community relations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;