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
              Chicago Condominium Management Services by Manage369
            </h1>
            <p className="body-large mb-8 text-blue-100">
              Manage369 provides professional condominium association management services specifically designed for Chicago condo boards. 
              With over 18 years of experience managing 50+ properties with over 2450+ doors, we understand the unique challenges facing 
              condominium boards in Chicago and surrounding areas. Our comprehensive management approach protects your investment 
              while reducing board workload and ensuring regulatory compliance.
            </p>
          </div>
        </div>
      </section>

      {/* Building Types */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-4">Condominium Types Manage369 Serves</h2>
            <p className="body-large max-w-3xl mx-auto">
              From luxury high-rises to intimate boutique buildings, Manage369 provides specialized 
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
                and complex building systems requiring Manage369's specialized expertise.
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

      {/* Comprehensive Services */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-4">Comprehensive Condominium Management Services</h2>
            <p className="body-large max-w-3xl mx-auto">
              Manage369's full-service approach covers every aspect of condominium management, 
              from financial oversight to daily operations and long-term planning.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-xl">💰</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Financial Management & Reporting</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Annual budget preparation and board approval process</li>
                <li>• Monthly financial statements with variance analysis</li>
                <li>• Assessment collection and delinquency management</li>
                <li>• Reserve fund planning with professional studies</li>
                <li>• Annual audit coordination and CPA liaison</li>
                <li>• Special assessment planning and implementation</li>
                <li>• Banking relationship management</li>
                <li>• Investment oversight and recommendations</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-xl">🔧</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Maintenance & Operations</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• 24/7 emergency response coordination</li>
                <li>• Preventive maintenance program development</li>
                <li>• Vendor selection, management, and oversight</li>
                <li>• Capital improvement project management</li>
                <li>• Building system monitoring and maintenance</li>
                <li>• Seasonal maintenance planning and execution</li>
                <li>• Energy efficiency assessments and improvements</li>
                <li>• Safety and security system management</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-xl">👥</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Board Support & Governance</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Board meeting facilitation and professional minutes</li>
                <li>• Governance training and fiduciary duty education</li>
                <li>• Legal compliance monitoring and updates</li>
                <li>• Policy development and implementation</li>
                <li>• Election coordination and oversight</li>
                <li>• Strategic planning facilitation</li>
                <li>• Conflict resolution and mediation</li>
                <li>• Document management and record keeping</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-xl">📋</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Administrative Services</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Comprehensive document management system</li>
                <li>• Resident communication and portal management</li>
                <li>• Violation notices and enforcement procedures</li>
                <li>• Insurance management and claims coordination</li>
                <li>• Permit applications and municipal liaison</li>
                <li>• Legal document preparation and filing</li>
                <li>• Meeting notice distribution and compliance</li>
                <li>• Annual disclosure statement preparation</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-xl">🏗️</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Capital Project Management</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Engineering assessments and feasibility studies</li>
                <li>• Contractor pre-qualification and bidding process</li>
                <li>• Construction oversight and quality control</li>
                <li>• Budget management and change order approval</li>
                <li>• Timeline coordination and progress reporting</li>
                <li>• Permit acquisition and inspection coordination</li>
                <li>• Resident communication during construction</li>
                <li>• Final inspections and warranty management</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-xl">📞</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Resident Relations</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• 24/7 resident support and emergency hotline</li>
                <li>• Move-in and move-out coordination</li>
                <li>• Amenity reservation and management systems</li>
                <li>• Package and delivery coordination</li>
                <li>• Guest registration and access management</li>
                <li>• Community event planning and coordination</li>
                <li>• Resident feedback collection and response</li>
                <li>• New resident welcome and orientation</li>
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
              <h2 className="heading-2 mb-6">Why Chicago Condo Boards Choose Manage369</h2>
              <p className="body-text mb-6">
                Managing a condominium association requires specialized knowledge of Chicago regulations, 
                complex building systems, and sophisticated financial oversight. Manage369 has been 
                serving Chicago condo boards since 2007, providing the expertise and resources needed 
                to protect your investment and enhance your community.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Proven Chicago Experience</h4>
                    <p className="text-sm text-gray-600">18+ years managing Chicago condominiums with deep local market knowledge</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Licensed & Insured Professionals</h4>
                    <p className="text-sm text-gray-600">IDFPR licensed with comprehensive insurance coverage and CAI membership</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Board-Focused Approach</h4>
                    <p className="text-sm text-gray-600">Dedicated support to help boards fulfill fiduciary duties effectively</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Technology-Enhanced Service</h4>
                    <p className="text-sm text-gray-600">Modern management software for transparency and efficient communication</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-xl font-semibold mb-6">Manage369 Condominium Management Benefits</h3>
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
                  <span className="text-sm">Reduced board member workload and liability</span>
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

      {/* CTA Section */}
      <section className="section-padding bg-gradient-primary text-white">
        <div className="container-max text-center">
          <h2 className="heading-2 mb-4 text-white">Ready to Partner with Manage369?</h2>
          <p className="body-large mb-8 text-blue-100 max-w-2xl mx-auto">
            Contact Manage369 today to learn how our comprehensive condominium management 
            services can enhance your building's operations, reduce board workload, and protect your investment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-secondary text-lg px-8 py-4">
              Get Free Consultation
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