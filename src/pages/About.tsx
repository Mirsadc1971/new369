import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-500 to-primary-700 text-white section-padding">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-1 mb-6 text-white">
              About{' '}
              <span className="text-gradient bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Manage369
              </span>
            </h1>
            <p className="body-large mb-8 text-blue-100 max-w-3xl mx-auto">
              Chicago's premier property management company specializing in condominiums, 
              townhomes, and HOA associations. We provide comprehensive, professional 
              management services throughout Chicago and surrounding suburbs.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="bg-white bg-opacity-10 p-6 rounded-xl backdrop-blur-sm">
                <div className="text-3xl font-bold text-yellow-300">15+</div>
                <div className="text-blue-100">Years Experience</div>
              </div>
              <div className="bg-white bg-opacity-10 p-6 rounded-xl backdrop-blur-sm">
                <div className="text-3xl font-bold text-yellow-300">500+</div>
                <div className="text-blue-100">Properties Managed</div>
              </div>
              <div className="bg-white bg-opacity-10 p-6 rounded-xl backdrop-blur-sm">
                <div className="text-3xl font-bold text-yellow-300">24/7</div>
                <div className="text-blue-100">Emergency Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story & Mission */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-2 mb-6">Our Story & Mission</h2>
              <p className="body-text mb-6">
                Manage369 was founded with a simple mission: to provide exceptional property 
                management services that exceed expectations while building lasting relationships 
                with property owners, boards, and residents throughout the Chicago area.
              </p>
              <p className="body-text mb-6">
                With years of experience in the Chicago real estate market, our team understands 
                the unique challenges and opportunities that come with managing residential 
                properties in this dynamic metropolitan area.
              </p>
              <div className="bg-primary-50 p-6 rounded-xl">
                <h3 className="text-lg font-semibold mb-3 text-primary-700">Our Core Values</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                    <span className="text-sm font-medium">Excellence in every service</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-secondary-500 rounded-full"></div>
                    <span className="text-sm font-medium">Transparent communication</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-accent-500 rounded-full"></div>
                    <span className="text-sm font-medium">Proactive problem-solving</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-primary p-6 rounded-xl text-white text-center">
                <div className="text-2xl mb-2">🎯</div>
                <h4 className="font-semibold mb-2">Excellence</h4>
                <p className="text-sm text-blue-100">Striving for perfection in every aspect of service delivery</p>
              </div>
              <div className="bg-gradient-secondary p-6 rounded-xl text-white text-center">
                <div className="text-2xl mb-2">🤝</div>
                <h4 className="font-semibold mb-2">Integrity</h4>
                <p className="text-sm text-green-100">Honest, ethical practices in all business relationships</p>
              </div>
              <div className="bg-gradient-to-r from-accent-500 to-red-600 p-6 rounded-xl text-white text-center">
                <div className="text-2xl mb-2">⚡</div>
                <h4 className="font-semibold mb-2">Responsiveness</h4>
                <p className="text-sm text-red-100">Quick response times and proactive communication</p>
              </div>
              <div className="bg-gradient-to-r from-purple-500 to-pink-600 p-6 rounded-xl text-white text-center">
                <div className="text-2xl mb-2">🏆</div>
                <h4 className="font-semibold mb-2">Leadership</h4>
                <p className="text-sm text-purple-100">Setting industry standards for property management</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-12 bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">What We Do</h2>
            <p className="body-large max-w-3xl mx-auto">
              We specialize in three key areas of property management, each tailored to 
              the specific needs of different property types.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-xl">🏢</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Condominium Management</h3>
              <p className="text-sm text-gray-600 mb-4">High-rise buildings, mid-rise complexes, and boutique communities</p>
              <Link to="/services/condominium-management" className="text-primary-500 hover:text-primary-600 text-sm font-medium">
                Learn More →
              </Link>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-xl">🏘️</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Townhome Management</h3>
              <p className="text-sm text-gray-600 mb-4">Row houses, attached homes, and planned developments</p>
              <Link to="/services/townhome-management" className="text-secondary-500 hover:text-secondary-600 text-sm font-medium">
                Learn More →
              </Link>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-xl">🏡</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">HOA Management</h3>
              <p className="text-sm text-gray-600 mb-4">Single-family subdivisions and master-planned communities</p>
              <Link to="/services/hoa-management" className="text-accent-500 hover:text-accent-600 text-sm font-medium">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Team & Expertise */}
      <section className="py-12 bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="heading-2 mb-6">Professional Expertise</h2>
              <p className="body-text mb-8">
                Our experienced team brings together decades of combined experience 
                in property management, real estate, and customer service.
              </p>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">📋</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Licensed Property Managers</h4>
                    <p className="text-sm text-gray-600">State-licensed professionals with ongoing education and certification</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">🏢</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Real Estate Expertise</h4>
                    <p className="text-sm text-gray-600">Deep understanding of Chicago real estate market dynamics</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">💼</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Financial Management</h4>
                    <p className="text-sm text-gray-600">Certified accounting and financial management professionals</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">🔧</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Maintenance Coordination</h4>
                    <p className="text-sm text-gray-600">Experienced maintenance and vendor management specialists</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-6">Areas of Specialization</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 text-primary-600">Condominium Management</h4>
                  <p className="text-sm text-gray-600">High-rise buildings, mid-rise complexes, and boutique communities</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 text-secondary-600">Townhome Communities</h4>
                  <p className="text-sm text-gray-600">Row houses, attached homes, and planned developments</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 text-accent-600">HOA Management</h4>
                  <p className="text-sm text-gray-600">Single-family subdivisions and mixed-use developments</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 text-purple-600">Board Support</h4>
                  <p className="text-sm text-gray-600">Meeting facilitation, governance guidance, and strategic planning</p>
                </div>
              </div>
              
              <div className="mt-8 bg-gradient-to-r from-primary-500 to-secondary-500 p-6 rounded-xl text-white">
                <h4 className="font-semibold mb-3">Why Choose Manage369?</h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-white rounded-full"></span>
                    <span>Local Chicago expertise</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-white rounded-full"></span>
                    <span>24/7 emergency response</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-white rounded-full"></span>
                    <span>Comprehensive services</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-white rounded-full"></span>
                    <span>Technology-driven solutions</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Philosophy */}
      <section className="py-12 bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">Our Service Philosophy</h2>
            <p className="body-large max-w-3xl mx-auto">
              We believe that successful property management is built on strong relationships, 
              clear communication, and proactive problem-solving.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Proactive Management</h3>
              <p className="text-sm text-gray-600">
                We don't wait for problems to arise. Our proactive approach includes regular inspections and preventive maintenance.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💬</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Transparent Communication</h3>
              <p className="text-sm text-gray-600">
                Clear, timely communication with detailed reporting and open lines of communication with all stakeholders.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Financial Stewardship</h3>
              <p className="text-sm text-gray-600">
                We treat every property's finances with care, ensuring responsible budgeting and long-term financial health.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏠</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Resident-Focused Service</h3>
              <p className="text-sm text-gray-600">
                Happy residents are the foundation of successful properties. We prioritize satisfaction through responsive service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-secondary text-white">
        <div className="container-max text-center">
          <h2 className="heading-2 mb-4 text-white">Ready to Experience the Manage369 Difference?</h2>
          <p className="body-large mb-8 text-green-100 max-w-2xl mx-auto">
            Contact us today to learn how our experienced team can help your property 
            achieve its full potential through professional, comprehensive management services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary bg-white text-primary-500 hover:bg-gray-100 text-lg px-8 py-4">
              Get Started Today
            </Link>
            <a href="tel:773-728-0652" className="btn-outline border-white text-white hover:bg-white hover:text-secondary-500 text-lg px-8 py-4">
              Call (773) 728-0652
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About