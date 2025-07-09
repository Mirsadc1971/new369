import React from 'react'
import { Link } from 'react-router-dom'

const HOAManagement = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-accent-500 to-red-700 text-white section-padding">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center space-x-2 mb-4 text-red-200">
              <Link to="/services" className="hover:text-white transition-colors">Services</Link>
              <span>›</span>
              <span>HOA Management</span>
            </div>
            <h1 className="heading-1 mb-6 text-white">
              Professional{' '}
              <span className="text-gradient bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                HOA Management
              </span>
            </h1>
            <p className="body-large mb-8 text-red-100">
              Comprehensive homeowners association management for single-family 
              subdivisions, master-planned communities, and gated developments 
              throughout Chicago suburbs. We provide the expertise and resources 
              needed to maintain thriving residential communities.
            </p>
          </div>
        </div>
      </section>

      {/* Community Types */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-4">HOA Communities We Manage</h2>
            <p className="body-large max-w-3xl mx-auto">
              From intimate neighborhoods to large master-planned communities, 
              we provide tailored HOA management services for all types of residential developments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card text-center hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-accent-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl text-white">🏘️</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Single-Family Subdivisions</h3>
              <p className="text-sm text-gray-600">
                Traditional neighborhood developments with detached homes, 
                common areas, and shared amenities requiring coordinated management.
              </p>
            </div>

            <div className="card text-center hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl text-white">🌆</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Master-Planned Communities</h3>
              <p className="text-sm text-gray-600">
                Large-scale developments with multiple phases, extensive amenities, 
                and complex governance structures requiring professional oversight.
              </p>
            </div>

            <div className="card text-center hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl text-white">🚪</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Gated Communities</h3>
              <p className="text-sm text-gray-600">
                Secure residential communities with controlled access, enhanced 
                security features, and premium amenity management needs.
              </p>
            </div>

            <div className="card text-center hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl text-white">🏢</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Mixed-Use Developments</h3>
              <p className="text-sm text-gray-600">
                Communities combining residential, commercial, and recreational 
                spaces requiring specialized multi-use management expertise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core HOA Services */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-4">Comprehensive HOA Management Services</h2>
            <p className="body-large max-w-3xl mx-auto">
              Our HOA management services cover all aspects of community governance, 
              maintenance, and administration to ensure smooth operations and happy residents.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-xl">⚖️</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Governance & Compliance</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Board meeting facilitation and support</li>
                <li>• Covenant and bylaw enforcement</li>
                <li>• Legal compliance monitoring</li>
                <li>• Policy development and implementation</li>
                <li>• Election coordination and oversight</li>
                <li>• Document management and filing</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-xl">💰</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Financial Management</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Annual budget preparation and monitoring</li>
                <li>• Assessment collection and management</li>
                <li>• Reserve fund planning and oversight</li>
                <li>• Financial reporting and analysis</li>
                <li>• Audit coordination and support</li>
                <li>• Special assessment planning</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-xl">🌿</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Common Area Maintenance</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Landscaping and grounds maintenance</li>
                <li>• Amenity facility management</li>
                <li>• Street and sidewalk maintenance</li>
                <li>• Lighting system management</li>
                <li>• Signage maintenance and updates</li>
                <li>• Seasonal decoration coordination</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-xl">🏗️</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Architectural Review</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Home improvement application review</li>
                <li>• Design guideline enforcement</li>
                <li>• Construction oversight and coordination</li>
                <li>• Landscape plan approval</li>
                <li>• Color and material compliance</li>
                <li>• Completion inspections and approvals</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-xl">📞</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Communication Services</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Resident communication portals</li>
                <li>• Newsletter and announcement distribution</li>
                <li>• Website management and updates</li>
                <li>• Meeting minutes and documentation</li>
                <li>• Violation notices and follow-up</li>
                <li>• Community event coordination</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-xl">🔧</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Vendor Management</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Contractor selection and oversight</li>
                <li>• Service agreement negotiation</li>
                <li>• Quality control and inspections</li>
                <li>• Emergency service coordination</li>
                <li>• Preventive maintenance scheduling</li>
                <li>• Capital improvement project management</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Amenity Management */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-2 mb-6">Community Amenity Management</h2>
              <p className="body-text mb-6">
                Many HOA communities feature extensive amenities that require 
                professional management to maintain their value and ensure 
                resident satisfaction. We provide comprehensive amenity oversight.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-accent-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">🏊</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Pool & Recreation Facilities</h4>
                    <p className="text-sm text-gray-600">Complete pool management, fitness center operations, and recreational facility oversight</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-accent-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">🏛️</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Clubhouse Management</h4>
                    <p className="text-sm text-gray-600">Event scheduling, facility maintenance, and resident reservation systems</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-accent-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">🌳</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Parks & Open Spaces</h4>
                    <p className="text-sm text-gray-600">Playground maintenance, park upkeep, and natural area preservation</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-accent-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">🚗</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Parking & Transportation</h4>
                    <p className="text-sm text-gray-600">Parking enforcement, guest parking management, and transportation coordination</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-xl font-semibold mb-6">Amenity Benefits</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-sm">Increased property values through well-maintained amenities</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-sm">Enhanced resident satisfaction and community pride</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-sm">Professional safety and liability management</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-sm">Cost-effective maintenance and operations</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-sm">Coordinated programming and community events</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-sm">Regulatory compliance and risk mitigation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enforcement & Compliance */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-4">Covenant Enforcement & Compliance</h2>
            <p className="body-large max-w-3xl mx-auto">
              Maintaining community standards while treating residents fairly requires 
              a balanced approach to covenant enforcement and compliance management.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-xl">👁️</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Property Inspections</h3>
              <p className="text-sm text-gray-600">
                Regular community inspections to identify compliance issues 
                and maintenance needs before they become problems.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-xl">📋</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Violation Management</h3>
              <p className="text-sm text-gray-600">
                Professional handling of covenant violations with clear 
                communication and fair resolution processes.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-xl">🤝</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Mediation Services</h3>
              <p className="text-sm text-gray-600">
                Professional mediation to resolve disputes between neighbors 
                and maintain community harmony.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-xl">📚</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Education & Guidance</h3>
              <p className="text-sm text-gray-600">
                Resident education about community standards and assistance 
                with compliance requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Board Support */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-4">HOA Board Support & Training</h2>
            <p className="body-large max-w-3xl mx-auto">
              We provide comprehensive support to HOA boards, helping them fulfill 
              their fiduciary duties while making informed decisions for their communities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Meeting Management</h3>
              <p className="text-sm text-gray-600 mb-4">
                Professional meeting facilitation, agenda preparation, and 
                comprehensive minute-taking services.
              </p>
              <ul className="text-xs text-gray-500 space-y-1">
                <li>• Agenda development and distribution</li>
                <li>• Meeting facilitation and moderation</li>
                <li>• Detailed minute preparation</li>
                <li>• Action item tracking and follow-up</li>
              </ul>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🎓</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Board Education</h3>
              <p className="text-sm text-gray-600 mb-4">
                Ongoing education and training to help board members understand 
                their roles, responsibilities, and legal obligations.
              </p>
              <ul className="text-xs text-gray-500 space-y-1">
                <li>• Fiduciary duty training</li>
                <li>• Legal compliance education</li>
                <li>• Financial oversight guidance</li>
                <li>• Best practices workshops</li>
              </ul>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Strategic Planning</h3>
              <p className="text-sm text-gray-600 mb-4">
                Long-term planning assistance to help boards make strategic 
                decisions that benefit the entire community.
              </p>
              <ul className="text-xs text-gray-500 space-y-1">
                <li>• Capital improvement planning</li>
                <li>• Reserve fund strategy</li>
                <li>• Community enhancement projects</li>
                <li>• Policy development guidance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-accent-500 to-red-700 text-white">
        <div className="container-max text-center">
          <h2 className="heading-2 mb-4 text-white">Elevate Your HOA Community</h2>
          <p className="body-large mb-8 text-red-100 max-w-2xl mx-auto">
            Contact us today to learn how our comprehensive HOA management services 
            can enhance your community's governance, operations, and resident satisfaction.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary bg-white text-accent-500 hover:bg-gray-100 text-lg px-8 py-4">
              Get Free Assessment
            </Link>
            <a href="tel:773-728-0652" className="btn-outline border-white text-white hover:bg-white hover:text-accent-500 text-lg px-8 py-4">
              Call (773) 728-0652
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HOAManagement