import React from 'react'
import { Link } from 'react-router-dom'

const TownhomeManagement = () => {
  return (
    <div>
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
              Chicago{' '}
              <span className="text-gradient bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Townhome Management Services
              </span>
            </h1>
            <p className="body-large mb-8 text-green-100">
              Comprehensive Chicago townhome management services for townhome communities, row houses, 
              and attached home developments throughout Chicago suburbs. We understand 
              the unique needs of Chicago townhome associations and provide tailored townhome management solutions 
              that enhance community living and property values.
            </p>
          </div>
        </div>
      </section>

      {/* Property Types */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-4">Chicago Townhome Communities We Serve</h2>
            <p className="body-large max-w-3xl mx-auto">
              From modern planned developments to historic row house communities, 
              we provide specialized townhome management for all types of Chicago townhome properties.
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
                and community facilities requiring comprehensive townhome management.
              </p>
            </div>

            <div className="card text-center hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl text-white">🏠</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Row House Developments</h3>
              <p className="text-sm text-gray-600">
                Traditional and contemporary Chicago row house communities with shared 
                walls and common townhome management responsibilities.
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

      {/* Specialized Services */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-4">Townhome Management Services</h2>
            <p className="body-large max-w-3xl mx-auto">
              Our townhome management services address the unique challenges of 
              attached housing communities while maximizing the benefits of shared ownership.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-xl">🏗️</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Exterior Maintenance</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Roof maintenance and repair coordination</li>
                <li>• Exterior painting and siding maintenance</li>
                <li>• Window and door maintenance</li>
                <li>• Driveway and walkway upkeep</li>
                <li>• Gutter cleaning and maintenance</li>
                <li>• Foundation and structural inspections</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-xl">🌿</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Landscaping & Grounds</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Lawn care and maintenance</li>
                <li>• Seasonal landscaping services</li>
                <li>• Tree and shrub care</li>
                <li>• Irrigation system management</li>
                <li>• Snow removal and ice management</li>
                <li>• Common area beautification</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-xl">🚗</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Parking & Access</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Parking area maintenance and striping</li>
                <li>• Garage door system management</li>
                <li>• Access control and security</li>
                <li>• Street and pathway lighting</li>
                <li>• Traffic flow optimization</li>
                <li>• Visitor parking coordination</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-xl">💰</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Financial Management</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Monthly assessment collection</li>
                <li>• Operating budget development</li>
                <li>• Reserve fund planning</li>
                <li>• Financial reporting and analysis</li>
                <li>• Special assessment coordination</li>
                <li>• Insurance management and claims</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-xl">👥</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Community Management</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Board meeting facilitation</li>
                <li>• Covenant enforcement</li>
                <li>• Architectural review coordination</li>
                <li>• Neighbor dispute resolution</li>
                <li>• Community event planning</li>
                <li>• New resident orientation</li>
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
                <li>• Utility management and monitoring</li>
                <li>• Seasonal maintenance programs</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Unique Challenges */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-2 mb-6">Townhome Management Challenges</h2>
              <p className="body-text mb-6">
                Townhome communities face unique challenges that require specialized 
                management expertise. Our team understands these complexities and 
                provides solutions that work for attached housing communities.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-secondary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">🏠</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Shared Structure Maintenance</h4>
                    <p className="text-sm text-gray-600">Coordinating maintenance of shared walls, roofs, and building systems</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-secondary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">⚖️</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Covenant Enforcement</h4>
                    <p className="text-sm text-gray-600">Balancing individual property rights with community standards</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-secondary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">💰</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Cost Allocation</h4>
                    <p className="text-sm text-gray-600">Fair distribution of maintenance costs among unit owners</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-secondary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">🤝</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Neighbor Relations</h4>
                    <p className="text-sm text-gray-600">Managing close-proximity living and shared responsibilities</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-xl font-semibold mb-6">Our Solutions</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-sm">Proactive maintenance planning and coordination</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-sm">Clear communication and transparent processes</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-sm">Fair and equitable cost allocation methods</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-sm">Professional mediation and conflict resolution</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-sm">Community building and engagement programs</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-sm">Comprehensive insurance and risk management</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seasonal Services */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-4">Seasonal Maintenance Programs</h2>
            <p className="body-large max-w-3xl mx-auto">
              Chicago's changing seasons require specialized maintenance programs 
              to protect townhome communities year-round.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-xl">🌸</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Spring Preparation</h3>
              <ul className="text-sm text-gray-600 space-y-1 text-left">
                <li>• Roof and gutter inspections</li>
                <li>• Landscaping restoration</li>
                <li>• HVAC system maintenance</li>
                <li>• Exterior cleaning and repairs</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-xl">☀️</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Summer Maintenance</h3>
              <ul className="text-sm text-gray-600 space-y-1 text-left">
                <li>• Irrigation system optimization</li>
                <li>• Deck and patio maintenance</li>
                <li>• Exterior painting projects</li>
                <li>• Pest control programs</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-xl">🍂</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Fall Preparation</h3>
              <ul className="text-sm text-gray-600 space-y-1 text-left">
                <li>• Leaf removal and cleanup</li>
                <li>• Winterization procedures</li>
                <li>• Heating system inspections</li>
                <li>• Storm preparation measures</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-xl">❄️</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Winter Services</h3>
              <ul className="text-sm text-gray-600 space-y-1 text-left">
                <li>• Snow removal and ice management</li>
                <li>• Emergency heating repairs</li>
                <li>• Pipe freeze prevention</li>
                <li>• Winter safety measures</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Community Benefits */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-4">Benefits of Professional Townhome Management</h2>
            <p className="body-large max-w-3xl mx-auto">
              Professional management enhances property values, improves quality of life, 
              and creates stronger, more cohesive communities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">📈</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Enhanced Property Values</h3>
              <p className="text-sm text-gray-600">
                Professional maintenance and management help preserve and increase 
                property values for all community members.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🏡</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Improved Quality of Life</h3>
              <p className="text-sm text-gray-600">
                Well-maintained common areas and coordinated services create a 
                more enjoyable living environment for residents.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Stronger Community</h3>
              <p className="text-sm text-gray-600">
                Professional management fosters better communication and cooperation 
                among neighbors, building a stronger community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-secondary text-white">
        <div className="container-max text-center">
          <h2 className="heading-2 mb-4 text-white">Transform Your Townhome Community</h2>
          <p className="body-large mb-8 text-green-100 max-w-2xl mx-auto">
            Contact us today to learn how our specialized townhome management 
            services can enhance your community's value, appearance, and quality of life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary bg-white text-secondary-500 hover:bg-gray-100 text-lg px-8 py-4">
              Get Free Consultation
            </Link>
            <a href="tel:312-402-7002" className="btn-outline border-white text-white hover:bg-white hover:text-secondary-500 text-lg px-8 py-4">
              Call (312) 402-7002
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default TownhomeManagement