import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div>
      {/* Hero Section with Stats */}
      <section className="bg-gradient-to-br from-primary-500 to-primary-700 text-white py-20">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-1 mb-6 text-white">
              About Chicago's Premier{' '}
              <span className="text-gradient bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Property Management Company
              </span>
            </h1>
            <p className="text-xl mb-12 text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Chicago's leading property management company specializing in Chicago condominium management, 
              Chicago townhome management, and Chicago HOA management. We provide comprehensive, professional 
              property management services throughout Chicago and surrounding suburbs since 2007.
            </p>
            
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white bg-opacity-10 p-6 rounded-xl backdrop-blur-sm">
                <div className="text-3xl font-bold text-yellow-300 mb-2">50+</div>
                <div className="text-blue-100 text-sm">Properties Managed</div>
              </div>
              <div className="bg-white bg-opacity-10 p-6 rounded-xl backdrop-blur-sm">
                <div className="text-3xl font-bold text-yellow-300 mb-2">2450+</div>
                <div className="text-blue-100 text-sm">Units Under Management</div>
              </div>
              <div className="bg-white bg-opacity-10 p-6 rounded-xl backdrop-blur-sm">
                <div className="text-3xl font-bold text-yellow-300 mb-2">100+</div>
                <div className="text-blue-100 text-sm">Chicago Neighborhoods</div>
              </div>
              <div className="bg-white bg-opacity-10 p-6 rounded-xl backdrop-blur-sm">
                <div className="text-3xl font-bold text-yellow-300 mb-2">18+</div>
                <div className="text-blue-100 text-sm">Years Local Experience</div>
              </div>
              <div className="bg-white bg-opacity-10 p-6 rounded-xl backdrop-blur-sm">
                <div className="text-3xl font-bold text-yellow-300 mb-2">24/7</div>
                <div className="text-blue-100 text-sm">Emergency Response</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story & Mission */}
      <section className="py-16 bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="heading-2 mb-6">Our Story & Mission</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Manage369 was founded with a simple mission: to provide exceptional Chicago property 
                management services that exceed expectations while building lasting relationships 
                with Chicago property owners, boards, and residents throughout the Chicago area.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                With years of experience in the Chicago real estate market, our property management team understands 
                the unique challenges and opportunities that come with managing Chicago residential 
                properties in this dynamic Chicago metropolitan area.
              </p>
              
              {/* Mission Points */}
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Excellence in Service</h4>
                    <p className="text-sm text-gray-600">Delivering superior property management with attention to every detail</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-secondary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Transparent Communication</h4>
                    <p className="text-sm text-gray-600">Open, honest communication with all stakeholders at all times</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-accent-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Proactive Solutions</h4>
                    <p className="text-sm text-gray-600">Anticipating needs and solving problems before they impact residents</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Values Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-primary p-6 rounded-xl text-white text-center">
                <div className="text-3xl mb-3">🎯</div>
                <h4 className="font-semibold mb-2">Excellence</h4>
                <p className="text-sm text-blue-100">Striving for perfection in every aspect of service delivery</p>
              </div>
              <div className="bg-gradient-secondary p-6 rounded-xl text-white text-center">
                <div className="text-3xl mb-3">🤝</div>
                <h4 className="font-semibold mb-2">Integrity</h4>
                <p className="text-sm text-green-100">Honest, ethical practices in all business relationships</p>
              </div>
              <div className="bg-gradient-to-r from-accent-500 to-red-600 p-6 rounded-xl text-white text-center">
                <div className="text-3xl mb-3">⚡</div>
                <h4 className="font-semibold mb-2">Responsiveness</h4>
                <p className="text-sm text-red-100">Quick response times and proactive communication</p>
              </div>
              <div className="bg-gradient-to-r from-purple-500 to-pink-600 p-6 rounded-xl text-white text-center">
                <div className="text-3xl mb-3">🏆</div>
                <h4 className="font-semibold mb-2">Leadership</h4>
                <p className="text-sm text-purple-100">Setting industry standards for property management</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do - Services Preview */}
      <section className="py-16 bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">What We Do</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We specialize in three key areas of property management, each tailored to 
              the specific needs of different property types throughout Chicago.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">🏢</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Condominium Management</h3>
              <p className="text-gray-600 mb-6">High-rise buildings, mid-rise complexes, and boutique communities throughout Chicago</p>
              <Link to="/services/condominium-management" className="text-primary-500 hover:text-primary-600 font-medium inline-flex items-center">
                Learn More <span className="ml-2">→</span>
              </Link>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="w-16 h-16 bg-secondary-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">🏘️</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Townhome Management</h3>
              <p className="text-gray-600 mb-6">Row houses, attached homes, and planned developments across Chicago suburbs</p>
              <Link to="/services/townhome-management" className="text-secondary-500 hover:text-secondary-600 font-medium inline-flex items-center">
                Learn More <span className="ml-2">→</span>
              </Link>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="w-16 h-16 bg-accent-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">🏡</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">HOA Management</h3>
              <p className="text-gray-600 mb-6">Single-family subdivisions and master-planned communities</p>
              <Link to="/services/hoa-management" className="text-accent-500 hover:text-accent-600 font-medium inline-flex items-center">
                Learn More <span className="ml-2">→</span>
              </Link>
            </div>
          </div>
          
          <div className="text-center">
            <Link to="/services" className="btn-primary text-lg px-8 py-4">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Professional Expertise */}
      <section className="py-16 bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="heading-2 mb-8">Professional Expertise</h2>
              <p className="text-lg text-gray-600 mb-8">
                Our experienced team brings together decades of combined experience 
                in property management, real estate, and customer service.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">📋</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Licensed Property Managers</h4>
                    <p className="text-gray-600">State-licensed professionals with ongoing education and certification</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-secondary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">🏢</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Real Estate Expertise</h4>
                    <p className="text-gray-600">Deep understanding of Chicago real estate market dynamics</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">💼</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Financial Management</h4>
                    <p className="text-gray-600">Certified accounting and financial management professionals</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">🔧</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Maintenance Coordination</h4>
                    <p className="text-gray-600">Experienced maintenance and vendor management specialists</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-8">Areas of Specialization</h3>
              
              <div className="grid grid-cols-1 gap-6 mb-8">
                <div className="bg-primary-50 border-l-4 border-primary-500 p-6 rounded-r-xl">
                  <h4 className="font-semibold text-primary-700 mb-2">Condominium Management</h4>
                  <p className="text-sm text-gray-600">High-rise buildings, mid-rise complexes, and boutique communities</p>
                </div>
                
                <div className="bg-secondary-50 border-l-4 border-secondary-500 p-6 rounded-r-xl">
                  <h4 className="font-semibold text-secondary-700 mb-2">Townhome Communities</h4>
                  <p className="text-sm text-gray-600">Row houses, attached homes, and planned developments</p>
                </div>
                
                <div className="bg-accent-50 border-l-4 border-accent-500 p-6 rounded-r-xl">
                  <h4 className="font-semibold text-accent-700 mb-2">HOA Management</h4>
                  <p className="text-sm text-gray-600">Single-family subdivisions and mixed-use developments</p>
                </div>
                
                <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-xl">
                  <h4 className="font-semibold text-purple-700 mb-2">Board Support</h4>
                  <p className="text-sm text-gray-600">Meeting facilitation, governance guidance, and strategic planning</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Manage369 - Full Width Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="bg-gradient-to-r from-primary-500 to-secondary-500 p-8 rounded-xl text-white">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">Why Choose Manage369?</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="flex items-center space-x-3">
                <span className="w-3 h-3 bg-white rounded-full flex-shrink-0"></span>
                <span className="text-white font-medium">Local Chicago expertise</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="w-3 h-3 bg-white rounded-full flex-shrink-0"></span>
                <span className="text-white font-medium">24/7 emergency response</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="w-3 h-3 bg-white rounded-full flex-shrink-0"></span>
                <span className="text-white font-medium">Comprehensive services</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="w-3 h-3 bg-white rounded-full flex-shrink-0"></span>
                <span className="text-white font-medium">Technology-driven solutions</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Philosophy */}
      <section className="py-16 bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">Our Service Philosophy</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We believe that successful property management is built on strong relationships, 
              clear communication, and proactive problem-solving.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-lg font-semibold mb-4">Proactive Management</h3>
              <p className="text-gray-600">
                We don't wait for problems to arise. Our proactive approach includes regular inspections and preventive maintenance.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">💬</span>
              </div>
              <h3 className="text-lg font-semibold mb-4">Transparent Communication</h3>
              <p className="text-gray-600">
                Clear, timely communication with detailed reporting and open lines of communication with all stakeholders.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-lg font-semibold mb-4">Financial Stewardship</h3>
              <p className="text-gray-600">
                We treat every property's finances with care, ensuring responsible budgeting and long-term financial health.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🏠</span>
              </div>
              <h3 className="text-lg font-semibold mb-4">Resident-Focused Service</h3>
              <p className="text-gray-600">
                Happy residents are the foundation of successful properties. We prioritize satisfaction through responsive service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology & Innovation */}
      <section className="py-16 bg-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">Technology-Driven Management</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We leverage cutting-edge property management technology to provide 
              efficient, transparent, and responsive services to our clients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">📱</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Online Resident Portals</h3>
              <p className="text-gray-600">24/7 access to account information, maintenance requests, and community updates</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Real-Time Reporting</h3>
              <p className="text-gray-600">Instant access to financial reports, maintenance logs, and property data</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-accent-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🔧</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Maintenance Tracking</h3>
              <p className="text-gray-600">Digital work order management and maintenance history tracking</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🔒</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Secure Data Management</h3>
              <p className="text-gray-600">Bank-level security for all financial and personal information</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-secondary text-white">
        <div className="container-max text-center">
          <h2 className="heading-2 mb-6 text-white">Ready to Experience the Manage369 Difference?</h2>
          <p className="text-xl mb-10 text-green-100 max-w-2xl mx-auto">
            Contact us today to learn how our experienced team can help your property 
            achieve its full potential through professional, comprehensive management services.
          </p>
          <div className="mb-8 text-center">
            <div className="bg-white bg-opacity-10 p-4 rounded-lg inline-block">
              <p className="text-white font-semibold">Manage369 - Chicago Property Management</p>
              <p className="text-green-100">5107 N Western Ave, Suite 1S, Chicago, IL 60625</p>
              <p className="text-green-100">(773) 728-0652 | service@manage369.com</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/contact" className="btn-primary bg-white text-primary-500 hover:bg-gray-100 text-lg px-10 py-4 font-semibold">
              Get Started Today
            </Link>
            <a href="tel:773-728-0652" className="btn-outline border-white text-white hover:bg-white hover:text-secondary-500 text-lg px-10 py-4 font-semibold">
              Call (773) 728-0652
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About