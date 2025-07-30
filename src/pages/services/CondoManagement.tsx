import React from 'react'
import { Link } from 'react-router-dom'
import CanonicalLink from '../../components/CanonicalLink'

const CondoManagement = () => {
  return (
    <div>
      <CanonicalLink href="https://www.manage369.com/services/condominium-management" />
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
              Professional condominium association management throughout Chicago and surrounding areas. 
              We provide comprehensive management services for high-rise buildings, mid-rise developments, 
              and boutique condominium communities with expertise in Chicago's unique market.
            </p>
          </div>
        </div>
      </section>

      {/* Building Types */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-4">Condominium Types We Manage</h2>
            <p className="body-large max-w-3xl mx-auto">
              From luxury high-rises to intimate boutique buildings, we provide specialized 
              management services tailored to each condominium community's unique needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card text-center hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl text-white">🏢</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">High-Rise Condominiums</h3>
              <p className="text-sm text-gray-600">
                Luxury towers with premium amenities, concierge services, 
                and complex building systems requiring specialized management.
              </p>
            </div>

            <div className="card text-center hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl text-white">🏘️</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Mid-Rise Buildings</h3>
              <p className="text-sm text-gray-600">
                4-20 story buildings with elevator systems, shared amenities, 
                and community spaces throughout Chicago neighborhoods.
              </p>
            </div>

            <div className="card text-center hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-accent-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl text-white">🏠</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Boutique Communities</h3>
              <p className="text-sm text-gray-600">
                Smaller, intimate buildings with personalized service needs 
                and close-knit community atmosphere.
              </p>
            </div>

            <div className="card text-center hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl text-white">🏛️</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Historic Conversions</h3>
              <p className="text-sm text-gray-600">
                Converted warehouses, schools, and historic buildings 
                with unique architectural features and preservation needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-4">Comprehensive Condominium Management Services</h2>
            <p className="body-large max-w-3xl mx-auto">
              Our full-service approach covers every aspect of condominium management, 
              from financial oversight to daily operations and long-term planning.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-xl">💰</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Financial Management</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Annual budget preparation and monitoring</li>
                <li>• Monthly financial statements and reporting</li>
                <li>• Assessment collection and delinquency management</li>
                <li>• Reserve fund planning and oversight</li>
                <li>• Audit coordination and support</li>
                <li>• Special assessment planning and implementation</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-xl">🔧</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Maintenance Coordination</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Preventive maintenance programs</li>
                <li>• 24/7 emergency response coordination</li>
                <li>• Vendor management and oversight</li>
                <li>• Capital improvement project management</li>
                <li>• Building system monitoring and maintenance</li>
                <li>• Seasonal maintenance planning</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-xl">👥</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Board Support Services</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Board meeting facilitation and minutes</li>
                <li>• Governance guidance and training</li>
                <li>• Legal compliance monitoring</li>
                <li>• Policy development and implementation</li>
                <li>• Election coordination and oversight</li>
                <li>• Strategic planning assistance</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-xl">📋</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Administrative Services</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Document management and filing</li>
                <li>• Communication coordination</li>
                <li>• Violation enforcement and follow-up</li>
                <li>• Insurance management and claims</li>
                <li>• Permit applications and approvals</li>
                <li>• Record keeping and archiving</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-xl">🏗️</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Capital Projects</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Project planning and feasibility studies</li>
                <li>• Contractor selection and bidding</li>
                <li>• Construction oversight and management</li>
                <li>• Quality control and inspections</li>
                <li>• Budget management and cost control</li>
                <li>• Timeline coordination and reporting</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-xl">📞</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Resident Services</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• 24/7 resident support hotline</li>
                <li>• Move-in/move-out coordination</li>
                <li>• Amenity reservation systems</li>
                <li>• Package and delivery management</li>
                <li>• Guest registration and access</li>
                <li>• Community event coordination</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Specialized Features */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-2 mb-6">High-Rise & Luxury Building Expertise</h2>
              <p className="body-text mb-6">
                Managing luxury condominium buildings requires specialized knowledge 
                of complex systems, premium service expectations, and sophisticated 
                amenity coordination. Our team has extensive experience with Chicago's 
                most prestigious properties.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">🏢</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Concierge & Doorman Coordination</h4>
                    <p className="text-sm text-gray-600">Professional staff management and service standards</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">🏊</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Amenity Management</h4>
                    <p className="text-sm text-gray-600">Pool, fitness center, rooftop deck, and clubhouse operations</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">🔒</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Security Systems</h4>
                    <p className="text-sm text-gray-600">Access control, surveillance, and safety protocol management</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">⚡</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Building Systems</h4>
                    <p className="text-sm text-gray-600">HVAC, electrical, plumbing, and elevator system coordination</p>
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
                  <span className="text-sm">Reduced board member workload and stress</span>
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
                  <span className="text-sm">Legal compliance and risk mitigation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-sm">Improved resident satisfaction and communication</span>
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

      {/* Financial Management Detail */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-4">Financial Management Excellence</h2>
            <p className="body-large max-w-3xl mx-auto">
              Transparent, professional financial management that protects your investment 
              and ensures long-term community sustainability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-xl">📊</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Budget Planning</h3>
              <p className="text-sm text-gray-600">
                Comprehensive annual budgets with detailed line items and 
                realistic projections based on historical data.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-xl">💳</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Assessment Collection</h3>
              <p className="text-sm text-gray-600">
                Efficient collection processes with multiple payment options 
                and professional delinquency management.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-xl">📈</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Financial Reporting</h3>
              <p className="text-sm text-gray-600">
                Monthly statements, variance reports, and detailed 
                financial analysis for informed decision-making.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-xl">🏦</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Reserve Planning</h3>
              <p className="text-sm text-gray-600">
                Strategic reserve fund management with professional 
                studies and long-term capital planning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-primary text-white">
        <div className="container-max text-center">
          <h2 className="heading-2 mb-4 text-white">Ready to Elevate Your Condominium Management?</h2>
          <p className="body-large mb-8 text-blue-100 max-w-2xl mx-auto">
            Contact us today to learn how our comprehensive condominium management 
            services can enhance your building's operations and protect your investment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-secondary text-lg px-8 py-4">
              Get Free Assessment
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

export default CondoManagement