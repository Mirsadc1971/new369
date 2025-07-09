import React from 'react'
import { Link } from 'react-router-dom'

const Services = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-500 to-primary-700 text-white section-padding">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-1 mb-6 text-white">
              Comprehensive Property{' '}
              <span className="text-gradient bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Management Services
              </span>
            </h1>
            <p className="body-large mb-8 text-blue-100 max-w-3xl mx-auto">
              Professional management solutions for condominiums, townhomes, and HOA 
              associations throughout Chicago and suburbs. We provide comprehensive 
              services tailored to each property type's unique needs.
            </p>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-4">Our Specialized Services</h2>
            <p className="body-large max-w-3xl mx-auto">
              We offer three distinct service categories, each designed to address 
              the specific requirements and challenges of different property types.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="card hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl text-white">🏢</span>
              </div>
              <h3 className="heading-3 mb-4">Condominium Management</h3>
              <p className="body-text mb-6">
                Specialized management for high-rise buildings, mid-rise complexes, 
                and boutique condominium communities throughout Chicago.
              </p>
              <ul className="text-sm text-gray-600 space-y-2 mb-6">
                <li>• High-rise luxury buildings</li>
                <li>• Mid-rise residential complexes</li>
                <li>• Boutique condominium communities</li>
                <li>• Mixed-use developments</li>
              </ul>
              <Link to="/services/condominium-management" className="btn-primary w-full text-center">
                Learn More
              </Link>
            </div>

            <div className="card hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl text-white">🏘️</span>
              </div>
              <h3 className="heading-3 mb-4">Townhome Management</h3>
              <p className="body-text mb-6">
                Comprehensive management for townhome communities, row houses, 
                and attached home developments across Chicago suburbs.
              </p>
              <ul className="text-sm text-gray-600 space-y-2 mb-6">
                <li>• Townhome communities</li>
                <li>• Row house developments</li>
                <li>• Attached home associations</li>
                <li>• Planned unit developments</li>
              </ul>
              <Link to="/services/townhome-management" className="btn-secondary w-full text-center">
                Learn More
              </Link>
            </div>

            <div className="card hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-accent-500 to-red-600 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl text-white">🏡</span>
              </div>
              <h3 className="heading-3 mb-4">HOA Management</h3>
              <p className="body-text mb-6">
                Full-service homeowners association management for single-family 
                subdivisions and master-planned communities.
              </p>
              <ul className="text-sm text-gray-600 space-y-2 mb-6">
                <li>• Single-family subdivisions</li>
                <li>• Master-planned communities</li>
                <li>• Gated communities</li>
                <li>• Mixed-use developments</li>
              </ul>
              <Link to="/services/hoa-management" className="btn-primary w-full text-center">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-4">Core Management Services</h2>
            <p className="body-large max-w-3xl mx-auto">
              Regardless of property type, all our clients receive these essential 
              management services as part of our comprehensive approach.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-xl">💰</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Financial Management</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Budget preparation and monitoring</li>
                <li>• Monthly financial reporting</li>
                <li>• Assessment collection</li>
                <li>• Accounts payable management</li>
                <li>• Reserve fund planning</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-xl">🔧</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Maintenance Coordination</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Preventive maintenance programs</li>
                <li>• Emergency repair coordination</li>
                <li>• Vendor management and oversight</li>
                <li>• Property inspections</li>
                <li>• Capital improvement planning</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-xl">👥</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Board Support</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Meeting preparation and facilitation</li>
                <li>• Governance guidance</li>
                <li>• Policy development assistance</li>
                <li>• Strategic planning support</li>
                <li>• Board education and training</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-xl">📞</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Communication Services</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Resident communication portals</li>
                <li>• Newsletter and announcements</li>
                <li>• Website management</li>
                <li>• Meeting minutes and documentation</li>
                <li>• Violation notices and enforcement</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-xl">⚖️</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Legal & Compliance</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Regulatory compliance monitoring</li>
                <li>• Legal document management</li>
                <li>• Insurance coordination</li>
                <li>• Contract negotiation and oversight</li>
                <li>• Dispute resolution assistance</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-xl">🚨</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Emergency Services</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• 24/7 emergency response</li>
                <li>• Emergency contact coordination</li>
                <li>• Crisis management planning</li>
                <li>• After-hours support services</li>
                <li>• Emergency vendor network</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Technology & Innovation */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-2 mb-6">Technology-Driven Management</h2>
              <p className="body-text mb-6">
                We leverage cutting-edge property management technology to provide 
                efficient, transparent, and responsive services to our clients.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">💻</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Online Resident Portals</h4>
                    <p className="text-sm text-gray-600">24/7 access to account information, maintenance requests, and community updates</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">📱</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Mobile Applications</h4>
                    <p className="text-sm text-gray-600">Convenient mobile access for residents and board members</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">📊</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Real-Time Reporting</h4>
                    <p className="text-sm text-gray-600">Instant access to financial reports, maintenance logs, and property data</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">🔒</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Secure Data Management</h4>
                    <p className="text-sm text-gray-600">Bank-level security for all financial and personal information</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-xl font-semibold mb-6">Service Features</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-white rounded-lg">
                  <div className="text-2xl mb-2">⚡</div>
                  <div className="text-sm font-semibold">Fast Response</div>
                  <div className="text-xs text-gray-600">&lt; 2 hour emergency response</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg">
                  <div className="text-2xl mb-2">📈</div>
                  <div className="text-sm font-semibold">Transparent Reporting</div>
                  <div className="text-xs text-gray-600">Monthly detailed reports</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg">
                  <div className="text-2xl mb-2">🎯</div>
                  <div className="text-sm font-semibold">Proactive Management</div>
                  <div className="text-xs text-gray-600">Preventive maintenance focus</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg">
                  <div className="text-2xl mb-2">💬</div>
                  <div className="text-sm font-semibold">Open Communication</div>
                  <div className="text-xs text-gray-600">Multiple contact channels</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-4">Our Service Process</h2>
            <p className="body-large max-w-3xl mx-auto">
              We follow a proven process to ensure smooth transitions and 
              exceptional ongoing service for all our managed properties.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Initial Consultation</h3>
              <p className="text-sm text-gray-600">
                Comprehensive property assessment and needs analysis to understand 
                your specific requirements and challenges.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-secondary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Transition Planning</h3>
              <p className="text-sm text-gray-600">
                Detailed transition plan development with timelines, responsibilities, 
                and communication strategies for seamless handover.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Implementation</h3>
              <p className="text-sm text-gray-600">
                Systematic implementation of management systems, vendor relationships, 
                and resident communication protocols.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Ongoing Management</h3>
              <p className="text-sm text-gray-600">
                Continuous monitoring, regular reporting, and proactive management 
                to ensure optimal property performance and resident satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-primary text-white">
        <div className="container-max text-center">
          <h2 className="heading-2 mb-4 text-white">Ready to Experience Professional Property Management?</h2>
          <p className="body-large mb-8 text-blue-100 max-w-2xl mx-auto">
            Contact us today to learn how our comprehensive services can enhance 
            your property's value and improve resident satisfaction.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-secondary text-lg px-8 py-4">
              Get Free Consultation
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

export default Services