import React from 'react'
import { Link } from 'react-router-dom'

const Resources = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-500 to-primary-700 text-white section-padding">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-1 mb-6 text-white">
              Property Management{' '}
              <span className="text-gradient bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Resources
              </span>
            </h1>
            <p className="body-large mb-8 text-blue-100 max-w-3xl mx-auto">
              Helpful resources, guides, and information for property owners, 
              board members, and residents in Chicago area communities.
            </p>
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card hover:scale-105 transition-transform duration-300 flex flex-col h-full">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl text-white">📋</span>
              </div>
              <div className="flex-grow">
                <h3 className="heading-3 mb-4">Board Resources</h3>
                <p className="body-text mb-6">
                  Essential guides and tools for HOA and condominium board members 
                  to effectively govern their communities.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Board member responsibilities</li>
                  <li>• Meeting management guides</li>
                  <li>• Financial oversight best practices</li>
                  <li>• Legal compliance checklists</li>
                </ul>
              </div>
            </div>

            <div className="card hover:scale-105 transition-transform duration-300 flex flex-col h-full">
              <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl text-white">🏠</span>
              </div>
              <div className="flex-grow">
                <h3 className="heading-3 mb-4">Owner Resources</h3>
                <p className="body-text mb-6">
                  Information and guidance for property owners to understand 
                  their rights, responsibilities, and community involvement.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Owner rights and responsibilities</li>
                  <li>• Assessment and fee information</li>
                  <li>• Architectural review processes</li>
                  <li>• Community involvement opportunities</li>
                </ul>
              </div>
            </div>

            <div className="card hover:scale-105 transition-transform duration-300 flex flex-col h-full">
              <div className="w-16 h-16 bg-gradient-to-r from-accent-500 to-red-600 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl text-white">⚖️</span>
              </div>
              <div className="flex-grow">
                <h3 className="heading-3 mb-4">Legal & Compliance</h3>
                <p className="body-text mb-6">
                  Important legal information and compliance requirements 
                  for Chicago area property associations.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Chicago ordinances and regulations</li>
                  <li>• Illinois condominium law</li>
                  <li>• HOA governance requirements</li>
                  <li>• Insurance and liability guidelines</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Board Member Guide */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-4">Board Member Guide</h2>
            <p className="body-large max-w-3xl mx-auto">
              Essential information for effective board governance and community leadership.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-6">Key Responsibilities</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">💰</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Financial Oversight</h4>
                    <p className="text-sm text-gray-600">Monitor budgets, approve expenditures, and ensure financial transparency</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">⚖️</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Legal Compliance</h4>
                    <p className="text-sm text-gray-600">Ensure adherence to governing documents and applicable laws</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">🔧</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Property Maintenance</h4>
                    <p className="text-sm text-gray-600">Oversee maintenance and capital improvement projects</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">👥</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Community Leadership</h4>
                    <p className="text-sm text-gray-600">Represent owner interests and foster community engagement</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-6">Best Practices</h3>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-secondary-500 rounded-full mr-3 mt-2"></span>
                    <span>Attend all board meetings and come prepared</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-secondary-500 rounded-full mr-3 mt-2"></span>
                    <span>Review financial reports and ask questions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-secondary-500 rounded-full mr-3 mt-2"></span>
                    <span>Communicate openly with residents</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-secondary-500 rounded-full mr-3 mt-2"></span>
                    <span>Stay informed about industry best practices</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-secondary-500 rounded-full mr-3 mt-2"></span>
                    <span>Work collaboratively with property management</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-secondary-500 rounded-full mr-3 mt-2"></span>
                    <span>Plan for long-term community needs</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Financial Planning */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-4">Financial Planning & Budgeting</h2>
            <p className="body-large max-w-3xl mx-auto">
              Essential financial management principles for healthy community associations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-xl">📊</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Annual Budgeting</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Operating expense planning</li>
                <li>• Reserve fund contributions</li>
                <li>• Assessment level setting</li>
                <li>• Variance analysis</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-xl">🏦</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Reserve Planning</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Reserve study requirements</li>
                <li>• Capital improvement planning</li>
                <li>• Funding strategies</li>
                <li>• Investment guidelines</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-xl">📈</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Financial Reporting</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Monthly financial statements</li>
                <li>• Budget vs. actual analysis</li>
                <li>• Cash flow management</li>
                <li>• Annual audit preparation</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-xl">⚠️</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Risk Management</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Insurance coverage review</li>
                <li>• Liability protection</li>
                <li>• Emergency fund planning</li>
                <li>• Financial controls</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Maintenance Guidelines */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-4">Maintenance & Capital Planning</h2>
            <p className="body-large max-w-3xl mx-auto">
              Proactive maintenance strategies to preserve property values and minimize costs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-6">Preventive Maintenance</h3>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border-l-4 border-primary-500">
                  <h4 className="font-semibold mb-2">HVAC Systems</h4>
                  <p className="text-sm text-gray-600">Regular filter changes, seasonal tune-ups, and system inspections</p>
                </div>
                <div className="bg-white p-4 rounded-lg border-l-4 border-secondary-500">
                  <h4 className="font-semibold mb-2">Roofing & Exterior</h4>
                  <p className="text-sm text-gray-600">Annual inspections, gutter cleaning, and weather damage prevention</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-6">Capital Improvement Planning</h3>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border-l-4 border-accent-500">
                  <h4 className="font-semibold mb-2">Plumbing & Electrical</h4>
                  <p className="text-sm text-gray-600">Regular inspections, code compliance, and safety system testing</p>
                </div>
                <div className="bg-white p-4 rounded-lg border-l-4 border-primary-500">
                  <h4 className="font-semibold mb-2">Landscaping</h4>
                  <p className="text-sm text-gray-600">Seasonal care, irrigation maintenance, and grounds beautification</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Planning Process Section */}
          <div className="mt-16">
            <h3 className="text-xl font-semibold mb-8 text-center">Capital Improvement Planning Process</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h4 className="font-semibold mb-2">Assessment</h4>
                <p className="text-sm text-gray-600">Evaluate current conditions and future needs</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h4 className="font-semibold mb-2">Prioritization</h4>
                <p className="text-sm text-gray-600">Rank projects by urgency and impact</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h4 className="font-semibold mb-2">Budgeting</h4>
                <p className="text-sm text-gray-600">Develop funding strategies and timelines</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">4</span>
                </div>
                <h4 className="font-semibold mb-2">Implementation</h4>
                <p className="text-sm text-gray-600">Execute projects with proper oversight</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Legal & Compliance */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-4">Legal & Compliance Information</h2>
            <p className="body-large max-w-3xl mx-auto">
              Important legal requirements and compliance guidelines for Chicago area associations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card">
              <h3 className="text-lg font-semibold mb-4">Illinois Condominium Law</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Condominium Property Act requirements</li>
                <li>• Board election procedures</li>
                <li>• Financial disclosure obligations</li>
                <li>• Owner rights and remedies</li>
                <li>• Meeting notice requirements</li>
                <li>• Record keeping obligations</li>
              </ul>
            </div>

            <div className="card">
              <h3 className="text-lg font-semibold mb-4">Chicago Ordinances</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Building code compliance</li>
                <li>• Fire safety regulations</li>
                <li>• Accessibility requirements</li>
                <li>• Environmental regulations</li>
                <li>• Licensing and permits</li>
                <li>• Inspection requirements</li>
              </ul>
            </div>

            <div className="card">
              <h3 className="text-lg font-semibold mb-4">HOA Governance</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Declaration and bylaw enforcement</li>
                <li>• Architectural review processes</li>
                <li>• Assessment collection procedures</li>
                <li>• Dispute resolution mechanisms</li>
                <li>• Insurance requirements</li>
                <li>• Reserve fund regulations</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Procedures */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-4">Emergency Procedures</h2>
            <p className="body-large max-w-3xl mx-auto">
              Essential emergency response procedures for property associations and residents.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-red-50 p-6 rounded-xl border-l-4 border-red-500">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-xl">🚨</span>
              </div>
              <h3 className="text-lg font-semibold mb-3 text-red-800">Fire Emergency</h3>
              <ul className="text-sm text-red-700 space-y-1">
                <li>• Call 911 immediately</li>
                <li>• Evacuate building safely</li>
                <li>• Meet at designated area</li>
                <li>• Contact property management</li>
              </ul>
            </div>

            <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-xl">💧</span>
              </div>
              <h3 className="text-lg font-semibold mb-3 text-blue-800">Water Emergency</h3>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>• Shut off water source if possible</li>
                <li>• Call emergency line</li>
                <li>• Document damage with photos</li>
                <li>• Contact insurance if needed</li>
              </ul>
            </div>

            <div className="bg-yellow-50 p-6 rounded-xl border-l-4 border-yellow-500">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-xl">⚡</span>
              </div>
              <h3 className="text-lg font-semibold mb-3 text-yellow-800">Power Outage</h3>
              <ul className="text-sm text-yellow-700 space-y-1">
                <li>• Check circuit breakers</li>
                <li>• Report to utility company</li>
                <li>• Use flashlights, not candles</li>
                <li>• Notify property management</li>
              </ul>
            </div>

            <div className="bg-green-50 p-6 rounded-xl border-l-4 border-green-500">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-xl">🔒</span>
              </div>
              <h3 className="text-lg font-semibold mb-3 text-green-800">Security Issue</h3>
              <ul className="text-sm text-green-700 space-y-1">
                <li>• Call 911 if immediate danger</li>
                <li>• Report to security/management</li>
                <li>• Document incident details</li>
                <li>• Follow up with board</li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-12">
            <div className="bg-white p-6 rounded-xl shadow-lg max-w-md mx-auto">
              <h3 className="font-semibold text-lg mb-4">24/7 Emergency Contact</h3>
              <p className="text-2xl font-bold text-primary-500 mb-2">(312) 402-7002</p>
              <p className="text-2xl font-bold text-primary-500 mb-2">(847) 834-4131</p>
              <p className="text-sm text-gray-600">Available 24 hours a day, 7 days a week for all property emergencies</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-primary text-white">
        <div className="container-max text-center">
          <h2 className="heading-2 mb-4 text-white">Need Additional Resources or Support?</h2>
          <p className="body-large mb-8 text-blue-100 max-w-2xl mx-auto">
            Contact our team for personalized guidance, additional resources, 
            or answers to specific questions about your property management needs.
          </p>
          <div className="mb-8">
            <div className="bg-white bg-opacity-10 p-4 rounded-lg inline-block">
              <p className="text-white font-semibold">Manage369 Property Management</p>
              <p className="text-blue-100">1400 Patriot Boulevard 357, Glenview, IL 60026</p>
              <p className="text-blue-100">(312) 402-7002 | service@manage369.com</p>
              <p className="text-blue-100">(847) 834-4131 | service@manage369.com</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-secondary text-lg px-8 py-4">
              Contact Our Team
            </Link>
            <a href="tel:847-834-4131" className="btn-outline border-white text-white hover:bg-white hover:text-primary-500 text-lg px-8 py-4">
              Call (847) 834-4131
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Resources
  
}