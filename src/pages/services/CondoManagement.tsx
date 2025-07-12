import React from 'react'
import { Link } from 'react-router-dom'

const CondoManagement = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-500 to-primary-700 text-white section-padding">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center space-x-2 mb-4 text-blue-200">
              <Link to="/services" className="hover:text-white transition-colors">Services</Link>
              <span>›</span>
              <span>Condominium Management</span>
            </div>
            <h1 className="heading-1 mb-6 text-white">
              Chicago{' '}
              <span className="text-gradient bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Condominium Management Services
              </span>
            </h1>
            <p className="body-large mb-8 text-blue-100">
              Specialized Chicago condominium management services for high-rise buildings, mid-rise complexes, 
              and boutique condominium communities throughout Chicago. Our expertise 
              ensures your Chicago condominium association operates efficiently and maintains 
              its value while providing exceptional living experiences for residents.
            </p>
          </div>
        </div>
      </section>

      {/* Property Types */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-4">Chicago Condominium Types We Manage</h2>
            <p className="body-large max-w-3xl mx-auto">
              From luxury high-rise towers to intimate boutique buildings, we provide 
              tailored condominium management solutions for all types of Chicago condominium properties.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card text-center hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl text-white">🏗️</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">High-Rise Buildings</h3>
              <p className="text-sm text-gray-600">
                Chicago luxury towers with premium amenities, concierge services, and complex 
                building systems requiring specialized condominium management expertise.
              </p>
            </div>

            <div className="card text-center hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl text-white">🏢</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Mid-Rise Complexes</h3>
              <p className="text-sm text-gray-600">
                Chicago multi-story residential buildings with shared amenities and common 
                areas requiring comprehensive condominium management and maintenance coordination.
              </p>
            </div>

            <div className="card text-center hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-accent-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl text-white">🏛️</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Boutique Buildings</h3>
              <p className="text-sm text-gray-600">
                Smaller, intimate Chicago condominium communities with unique character 
                and personalized condominium management service requirements.
              </p>
            </div>

            <div className="card text-center hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl text-white">🏪</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Mixed-Use Developments</h3>
              <p className="text-sm text-gray-600">
                Properties combining residential condominiums with commercial spaces, 
                requiring specialized management of diverse stakeholder needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Specialized Services */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-4">Specialized Condominium Services</h2>
            <p className="body-large max-w-3xl mx-auto">
              Our condominium management services are specifically designed to address 
              the unique challenges and requirements of multi-unit residential buildings.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-xl">🏗️</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Building Systems Management</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• HVAC system maintenance and monitoring</li>
                <li>• Elevator inspection and service coordination</li>
                <li>• Fire safety system management</li>
                <li>• Security system oversight</li>
                <li>• Plumbing and electrical system maintenance</li>
                <li>• Energy efficiency optimization</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-xl">🛎️</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Amenity Management</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Fitness center operations and maintenance</li>
                <li>• Pool and spa management</li>
                <li>• Rooftop deck and terrace oversight</li>
                <li>• Community room scheduling and setup</li>
                <li>• Concierge service coordination</li>
                <li>• Package and delivery management</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-xl">🔒</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Security & Access Control</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• 24/7 security monitoring</li>
                <li>• Access control system management</li>
                <li>• Visitor management protocols</li>
                <li>• Security staff coordination</li>
                <li>• Emergency response procedures</li>
                <li>• Surveillance system oversight</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-xl">💰</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Financial Management</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Monthly assessment collection</li>
                <li>• Operating budget development</li>
                <li>• Reserve fund planning and management</li>
                <li>• Financial reporting and analysis</li>
                <li>• Audit coordination and support</li>
                <li>• Special assessment planning</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-xl">👥</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Board Support Services</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Board meeting preparation and facilitation</li>
                <li>• Governance guidance and training</li>
                <li>• Policy development assistance</li>
                <li>• Strategic planning support</li>
                <li>• Legal compliance monitoring</li>
                <li>• Conflict resolution assistance</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-xl">🔧</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Maintenance Coordination</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Preventive maintenance scheduling</li>
                <li>• Emergency repair coordination</li>
                <li>• Vendor management and oversight</li>
                <li>• Capital improvement planning</li>
                <li>• Unit turnover inspections</li>
                <li>• Common area maintenance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Chicago Expertise */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-2 mb-6">Chicago Condominium Expertise</h2>
              <p className="body-text mb-6">
                Managing condominiums in Chicago requires deep understanding of local 
                regulations, building codes, and market conditions. Our team brings 
                extensive experience with Chicago's unique condominium landscape.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">🏙️</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Downtown High-Rises</h4>
                    <p className="text-sm text-gray-600">Extensive experience with luxury downtown towers and their unique operational requirements</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">🏘️</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Neighborhood Buildings</h4>
                    <p className="text-sm text-gray-600">Specialized knowledge of Chicago's diverse neighborhoods and their specific characteristics</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">⚖️</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Local Compliance</h4>
                    <p className="text-sm text-gray-600">Thorough understanding of Chicago building codes, ordinances, and condominium regulations</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">🔧</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Vendor Network</h4>
                    <p className="text-sm text-gray-600">Established relationships with Chicago-area contractors and service providers</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-xl font-semibold mb-6">Condominium Management Benefits</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-sm">Enhanced property values through professional management</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-sm">Improved resident satisfaction and retention</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-sm">Reduced board member workload and stress</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-sm">Cost-effective operations and maintenance</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-sm">Professional financial management and reporting</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-sm">24/7 emergency response and support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Solutions */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-4">Technology Solutions for Condominiums</h2>
            <p className="body-large max-w-3xl mx-auto">
              We leverage advanced technology to streamline operations, enhance 
              communication, and provide transparency for condominium associations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-xl">📱</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Resident Portal</h3>
              <p className="text-sm text-gray-600">
                24/7 access to account information, maintenance requests, and community updates
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-xl">📊</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Financial Reporting</h3>
              <p className="text-sm text-gray-600">
                Real-time financial dashboards and detailed monthly reports
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-xl">🔧</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Maintenance Tracking</h3>
              <p className="text-sm text-gray-600">
                Digital work order management and maintenance history tracking
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-xl">💬</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Communication Hub</h3>
              <p className="text-sm text-gray-600">
                Centralized communication platform for announcements and updates
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-primary text-white">
        <div className="container-max text-center">
          <h2 className="heading-2 mb-4 text-white">Ready to Enhance Your Condominium Management?</h2>
          <p className="body-large mb-8 text-blue-100 max-w-2xl mx-auto">
            Contact us today to learn how our specialized condominium management 
            services can improve operations, enhance property values, and increase 
            resident satisfaction.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-secondary text-lg px-8 py-4">
              Get Free Assessment
            </Link>
            <a href="tel:773-728-0652" className="btn-outline border-white text-white hover:bg-white hover:text-primary-500 text-lg px-8 py-4">
              Call (773) 728-0652
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CondoManagement