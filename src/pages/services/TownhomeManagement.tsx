import React from 'react'
import { Link } from 'react-router-dom'
import CanonicalLink from '../../components/CanonicalLink'

const TownhomeManagement = () => {
  return (
    <div>
      <CanonicalLink href="https://www.manage369.com/services/townhome-management" />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary-500 to-secondary-700 text-white section-padding">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center space-x-2 mb-4 text-green-200">
              <Link to="/services" className="hover:text-white transition-colors">Services</Link>
              <span>›</span>
              <span>Townhome Management</span>
            </div>
            <h1 className="heading-1 mb-6 text-white">
              Chicago Townhome Management Services by Manage369
            </h1>
            <p className="body-large mb-8 text-green-100">
              Manage369 provides comprehensive townhome management services specifically designed for Chicago townhome association boards. 
              With over 18 years of experience managing attached housing communities throughout Chicago suburbs, we understand 
              the unique challenges of shared ownership and maintenance responsibilities. Our specialized approach helps townhome 
              boards maintain property values while fostering strong community relationships.
            </p>
          </div>
        </div>
      </section>

      {/* Property Types */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-4">Townhome Communities Manage369 Serves</h2>
            <p className="body-large max-w-3xl mx-auto">
              From modern planned developments to historic row house communities, 
              Manage369 provides specialized townhome management for all types of attached housing properties.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card text-center hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl text-white">🏘️</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Planned Communities</h3>
              <p className="text-sm text-gray-600">
                Modern Chicago townhome developments with shared amenities, landscaping, 
                and community facilities requiring comprehensive management.
              </p>
            </div>

            <div className="card text-center hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl text-white">🏠</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Row House Developments</h3>
              <p className="text-sm text-gray-600">
                Traditional and contemporary Chicago row house communities with shared 
                walls and common maintenance responsibilities.
              </p>
            </div>

            <div className="card text-center hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-accent-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl text-white">🏡</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Attached Home Associations</h3>
              <p className="text-sm text-gray-600">
                Duplex and triplex communities with shared structures and 
                coordinated maintenance and improvement needs.
              </p>
            </div>

            <div className="card text-center hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl text-white">🌳</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Garden-Style Communities</h3>
              <p className="text-sm text-gray-600">
                Low-rise townhome communities with extensive landscaping and 
                outdoor common areas requiring specialized maintenance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Services */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-4">Comprehensive Townhome Management Services</h2>
            <p className="body-large max-w-3xl mx-auto">
              Manage369's townhome management services address the unique challenges of 
              attached housing communities while maximizing the benefits of shared ownership.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-xl">🏗️</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Exterior Maintenance & Repairs</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Roof maintenance and repair coordination</li>
                <li>• Exterior painting and siding maintenance</li>
                <li>• Window and door maintenance programs</li>
                <li>• Driveway and walkway upkeep</li>
                <li>• Gutter cleaning and maintenance</li>
                <li>• Foundation and structural inspections</li>
                <li>• Shared wall maintenance and repairs</li>
                <li>• Weatherproofing and insulation services</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-xl">🌿</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Landscaping & Grounds Management</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Professional lawn care and maintenance</li>
                <li>• Seasonal landscaping design and installation</li>
                <li>• Tree and shrub care and pruning</li>
                <li>• Irrigation system management and repairs</li>
                <li>• Snow removal and ice management</li>
                <li>• Common area beautification projects</li>
                <li>• Mulching and seasonal cleanup</li>
                <li>• Pest control and weed management</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-xl">🚗</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Parking & Access Management</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Parking area maintenance and striping</li>
                <li>• Garage door system management</li>
                <li>• Access control and security systems</li>
                <li>• Street and pathway lighting maintenance</li>
                <li>• Traffic flow optimization</li>
                <li>• Visitor parking coordination</li>
                <li>• Driveway sealing and repair</li>
                <li>• Parking enforcement and violations</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-xl">💰</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Financial Management & Budgeting</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Monthly assessment collection and management</li>
                <li>• Annual operating budget development</li>
                <li>• Reserve fund planning and oversight</li>
                <li>• Financial reporting and variance analysis</li>
                <li>• Special assessment coordination</li>
                <li>• Insurance management and claims</li>
                <li>• Vendor payment and expense tracking</li>
                <li>• Annual audit coordination and support</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-xl">👥</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Community Management & Governance</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Board meeting facilitation and minutes</li>
                <li>• Covenant enforcement and compliance</li>
                <li>• Architectural review coordination</li>
                <li>• Neighbor dispute resolution and mediation</li>
                <li>• Community event planning and coordination</li>
                <li>• New resident orientation and welcome</li>
                <li>• Communication portal management</li>
                <li>• Policy development and implementation</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-xl">🔧</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Maintenance Coordination & Emergency Response</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Preventive maintenance scheduling and oversight</li>
                <li>• 24/7 emergency repair coordination</li>
                <li>• Vendor management and quality control</li>
                <li>• Capital improvement planning and execution</li>
                <li>• Utility management and monitoring</li>
                <li>• Seasonal maintenance programs</li>
                <li>• Safety inspections and compliance</li>
                <li>• Warranty management and follow-up</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Manage369 */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-2 mb-6">Why Townhome Boards Choose Manage369</h2>
              <p className="body-text mb-6">
                Townhome communities face unique challenges that require specialized management expertise. 
                Manage369 understands the complexities of shared ownership, maintenance coordination, and 
                community governance that make townhome management distinct from other property types. 
                Our board-focused approach helps reduce liability while enhancing property values.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-secondary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Specialized Townhome Expertise</h4>
                    <p className="text-sm text-gray-600">Deep understanding of shared structure maintenance and cost allocation</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-secondary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Proactive Maintenance Approach</h4>
                    <p className="text-sm text-gray-600">Preventive programs that protect shared investments and reduce emergency costs</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-secondary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Community-Focused Management</h4>
                    <p className="text-sm text-gray-600">Building stronger neighborhoods through effective communication and conflict resolution</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-secondary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Transparent Financial Management</h4>
                    <p className="text-sm text-gray-600">Clear reporting and fair cost allocation that builds trust among homeowners</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-xl font-semibold mb-6">Manage369 Townhome Management Benefits</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-sm">Enhanced property values through professional maintenance</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-sm">Reduced board liability and workload</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-sm">Professional vendor relationships and cost savings</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-sm">Improved neighbor relations and community harmony</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-sm">Comprehensive insurance and risk management</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-sm">24/7 emergency response and coordination</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-secondary text-white">
        <div className="container-max text-center">
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-white mb-4">Explore Service Areas We Serve</h3>
            <Link to="/service-areas" className="text-green-200 hover:text-white underline">
              View All Chicago & North Shore Communities →
            </Link>
          </div>
          <h2 className="heading-2 mb-4 text-white">Ready to Partner with Manage369?</h2>
          <p className="body-large mb-8 text-green-100 max-w-2xl mx-auto">
            Contact Manage369 today to learn how our specialized townhome management 
            services can enhance your community's value, reduce board workload, and improve quality of life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary bg-white text-secondary-500 hover:bg-gray-100 text-lg px-8 py-4">
              Get Free Consultation
            </Link>
            <a href="tel:847-834-4131" className="btn-outline border-white text-white hover:bg-white hover:text-secondary-500 text-lg px-8 py-4">
              Call (224) 647-5621
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default TownhomeManagement