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
              Chicago Property{' '}
              <span className="text-gradient bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Management Services - #1 Company
              </span>
            </h1>
            <p className="body-large mb-8 text-blue-100 max-w-3xl mx-auto">
              Manage369 is Chicago's premier #1 property management company providing professional 
              property management solutions for <Link to="/services/condominium-management" className="text-yellow-300 hover:underline">Chicago condominium management</Link>, 
              <Link to="/services/townhome-management" className="text-yellow-300 hover:underline"> Chicago townhome management</Link>, and 
              <Link to="/services/hoa-management" className="text-yellow-300 hover:underline"> Chicago HOA management</Link> throughout 
              Chicago and suburbs. We provide comprehensive property management services tailored to each property type's unique needs.
            </p>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-4">Specialized Chicago Property Management Services</h2>
            <p className="body-large max-w-3xl mx-auto">
              We offer three distinct property management service categories, each designed to address 
              the specific requirements and challenges of different property types throughout 
              <Link to="/service-areas" className="text-primary-500 hover:underline">Chicago neighborhoods and surrounding areas</Link>.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="card hover:scale-105 transition-transform duration-300 flex flex-col h-full">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl text-white">🏢</span>
              </div>
              <div className="flex-grow">
                <h3 className="heading-3 mb-4">Chicago Condominium Management Services</h3>
                <p className="body-text mb-6">
                  Specialized condominium management for high-rise buildings, mid-rise complexes, 
                  and boutique condominium communities throughout Chicago including 
                  <Link to="/service-areas/downtown-chicago" className="text-primary-500 hover:underline"> Downtown Chicago</Link>, 
                  <Link to="/service-areas/lincoln-park" className="text-primary-500 hover:underline"> Lincoln Park</Link>, and 
                  <Link to="/service-areas/lakeview" className="text-primary-500 hover:underline"> Lakeview</Link>.
                </p>
                <ul className="text-sm text-gray-600 space-y-2 mb-6">
                  <li>• High-rise luxury buildings</li>
                  <li>• Mid-rise residential complexes</li>
                  <li>• Boutique condominium communities</li>
                  <li>• Mixed-use developments</li>
                </ul>
              </div>
              <Link to="/services/condominium-management" className="btn-primary w-full text-center mt-auto">
                Chicago Condominium Management
              </Link>
            </div>

            <div className="card hover:scale-105 transition-transform duration-300 flex flex-col h-full">
              <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl text-white">🏘️</span>
              </div>
              <div className="flex-grow">
                <h3 className="heading-3 mb-4">Chicago Townhome Management Services</h3>
                <p className="body-text mb-6">
                  Comprehensive townhome management for townhome communities, row houses, 
                  and attached home developments across Chicago suburbs including 
                  <Link to="/service-areas/naperville" className="text-secondary-500 hover:underline"> Naperville</Link>, 
                  <Link to="/service-areas/wheaton" className="text-secondary-500 hover:underline"> Wheaton</Link>, and 
                  <Link to="/service-areas/oak-park" className="text-secondary-500 hover:underline"> Oak Park</Link>.
                </p>
                <ul className="text-sm text-gray-600 space-y-2 mb-6">
                  <li>• Townhome communities</li>
                  <li>• Row house developments</li>
                  <li>• Attached home associations</li>
                  <li>• Planned unit developments</li>
                </ul>
              </div>
              <Link to="/services/townhome-management" className="btn-secondary w-full text-center mt-auto">
                Chicago Townhome Management
              </Link>
            </div>

            <div className="card hover:scale-105 transition-transform duration-300 flex flex-col h-full">
              <div className="w-16 h-16 bg-gradient-to-r from-accent-500 to-red-600 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl text-white">🏡</span>
              </div>
              <div className="flex-grow">
                <h3 className="heading-3 mb-4">Chicago HOA Management Services</h3>
                <p className="body-text mb-6">
                  Full-service HOA management for single-family 
                  subdivisions and master-planned communities throughout Chicago suburbs including 
                  <Link to="/service-areas/evanston" className="text-accent-500 hover:underline"> Evanston</Link>, 
                  <Link to="/service-areas/schaumburg" className="text-accent-500 hover:underline"> Schaumburg</Link>, and 
                  <Link to="/service-areas/arlington-heights" className="text-accent-500 hover:underline"> Arlington Heights</Link>.
                </p>
                <ul className="text-sm text-gray-600 space-y-2 mb-6">
                  <li>• Single-family subdivisions</li>
                  <li>• Master-planned communities</li>
                  <li>• Gated communities</li>
                  <li>• Mixed-use developments</li>
                </ul>
              </div>
              <Link to="/services/hoa-management" className="btn-primary w-full text-center mt-auto">
                Chicago HOA Management
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-4">Core Chicago Property Management Services</h2>
            <p className="body-large max-w-3xl mx-auto">
              Regardless of property type, all our Chicago clients receive these essential 
              management services as part of our comprehensive approach. As Chicago's #1 property 
              management company, we provide:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-xl">💰</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Chicago Financial Management</h3>
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
              <h3 className="text-lg font-semibold mb-3">Chicago Maintenance Coordination</h3>
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
              <h3 className="text-lg font-semibold mb-3">Chicago Board Support</h3>
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
              <h3 className="text-lg font-semibold mb-3">Chicago Communication Services</h3>
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
              <h3 className="text-lg font-semibold mb-3">Chicago Legal & Compliance</h3>
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
              <h3 className="text-lg font-semibold mb-3">Chicago Emergency Services</h3>
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
              <h2 className="heading-2 mb-6">Technology-Driven Chicago Property Management</h2>
              <p className="body-text mb-6">
                We leverage cutting-edge property management technology to provide 
                efficient, transparent, and responsive services to our Chicago clients. 
                As Chicago's #1 property management company, we use the latest technology.
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
              <h3 className="text-xl font-semibold mb-6">Chicago Property Management Service Features</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-white rounded-lg">
                  <div className="text-2xl mb-2">⚡</div>
                  <div className="text-sm font-semibold">Fast Response</div>
                  <div className="text-xs text-gray-600">{"< 2 hour emergency response"}</div>
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
            <h2 className="heading-2 mb-4">Our Chicago Property Management Service Process</h2>
            <p className="body-large max-w-3xl mx-auto">
              We follow a proven process to ensure smooth transitions and 
              exceptional ongoing service for all our managed Chicago properties. 
              As Chicago's #1 property management company, our process is refined and effective.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Initial Chicago Consultation</h3>
              <p className="text-sm text-gray-600">
                Comprehensive property assessment and needs analysis to understand 
                your specific Chicago property requirements and challenges.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-secondary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Chicago Transition Planning</h3>
              <p className="text-sm text-gray-600">
                Detailed transition plan development with timelines, responsibilities, 
                and communication strategies for seamless handover.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Chicago Implementation</h3>
              <p className="text-sm text-gray-600">
                Systematic implementation of management systems, vendor relationships, 
                and resident communication protocols.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Ongoing Chicago Management</h3>
              <p className="text-sm text-gray-600">
                Continuous monitoring, regular reporting, and proactive management 
                to ensure optimal property performance and resident satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Integration */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">Chicago Property Management Service Areas</h2>
            <p className="body-large max-w-3xl mx-auto">
              Manage369 provides property management services throughout Chicago and surrounding suburbs. 
              <Link to="/service-areas" className="text-primary-500 hover:underline">View all 100+ service areas</Link> 
              where we provide our comprehensive property management services.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              { name: "Downtown Chicago", slug: "downtown-chicago" },
              { name: "Lincoln Park", slug: "lincoln-park" },
              { name: "Lakeview", slug: "lakeview" },
              { name: "Naperville", slug: "naperville" },
              { name: "Oak Park", slug: "oak-park" },
              { name: "Evanston", slug: "evanston" },
              { name: "Wheaton", slug: "wheaton" },
              { name: "Arlington Heights", slug: "arlington-heights" },
              { name: "Palatine", slug: "palatine" },
              { name: "Wicker Park", slug: "wicker-park" },
              { name: "Logan Square", slug: "logan-square" }
            ].map((area, index) => (
              <Link 
                key={index}
                to={`/service-areas/${area.slug}`}
                className="bg-gray-50 p-3 rounded-lg text-center hover:bg-primary-50 transition-colors duration-200"
              >
                <span className="text-sm font-medium text-gray-700 hover:text-primary-600">
                  {area.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-primary text-white">
        <div className="container-max text-center">
          <h2 className="heading-2 mb-4 text-white">Ready to Experience Chicago's #1 Property Management Company?</h2>
          <p className="body-large mb-8 text-blue-100 max-w-2xl mx-auto">
            Contact us today to learn how our comprehensive Chicago property management services can enhance 
            your property's value and improve resident satisfaction throughout Chicago and suburbs.
          </p>
          <div className="mb-8">
            <div className="bg-white bg-opacity-10 p-4 rounded-lg inline-block">
              <p className="text-white font-semibold">Manage369 - Chicago's Premier Property Management</p>
              <p className="text-blue-100">5107 N Western Ave, Suite 1S, Chicago, IL 60625 (X8F6+RG)</p>
              <p className="text-blue-100">(773) 728-0652 | service@manage369.com</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-secondary text-lg px-8 py-4">
              Get Free Chicago Consultation
            </Link>
            <a href="tel:773-728-0652" className="btn-outline border-white text-white hover:bg-white hover:text-primary-500 text-lg px-8 py-4">
              Call Chicago's #1: (773) 728-0652
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services