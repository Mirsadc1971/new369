import React from 'react'

const Resources = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Property Management Resources
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Access helpful resources, guides, and tools for property owners and residents
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Owner Resources */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              For Property Owners
            </h3>
            <ul className="space-y-3 text-gray-600">
              <li>• Property Management Agreement Templates</li>
              <li>• Financial Reporting Guidelines</li>
              <li>• Maintenance Request Procedures</li>
              <li>• Insurance Requirements</li>
              <li>• Legal Compliance Checklists</li>
            </ul>
          </div>

          {/* Resident Resources */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              For Residents
            </h3>
            <ul className="space-y-3 text-gray-600">
              <li>• Resident Handbook</li>
              <li>• Maintenance Request Portal</li>
              <li>• Community Guidelines</li>
              <li>• Emergency Contact Information</li>
              <li>• Move-in/Move-out Procedures</li>
            </ul>
          </div>

          {/* HOA Resources */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              For HOA Boards
            </h3>
            <ul className="space-y-3 text-gray-600">
              <li>• Board Meeting Templates</li>
              <li>• Budget Planning Tools</li>
              <li>• Vendor Management Guidelines</li>
              <li>• Reserve Study Information</li>
              <li>• Governance Best Practices</li>
            </ul>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-12 text-center">
          <div className="bg-blue-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Need Additional Resources?
            </h2>
            <p className="text-gray-600 mb-6">
              Our team is here to help with any questions or additional resources you may need.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Resources