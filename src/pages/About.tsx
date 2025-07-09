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
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-2 mb-6">Our Story</h2>
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
              <p className="body-text mb-8">
                We specialize in three key areas: condominium management, townhome community 
                management, and homeowners association (HOA) management, providing tailored 
                solutions for each property type.
              </p>
              <Link to="/services" className="btn-primary">
                Explore Our Services
              </Link>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="heading-3 mb-6">Why Choose Manage369?</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Local Expertise</h4>
                    <p className="text-sm text-gray-600">Deep knowledge of Chicago's property management regulations and market conditions</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Comprehensive Services</h4>
                    <p className="text-sm text-gray-600">Full-service management from financial oversight to maintenance coordination</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">24/7 Support</h4>
                    <p className="text-sm text-gray-600">Round-the-clock emergency response and resident support services</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Technology-Driven</h4>
                    <p className="text-sm text-gray-600">Modern software solutions for efficient communication and transparency</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission & Values */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-4">Our Mission & Values</h2>
            <p className="body-large max-w-3xl mx-auto">
              We are committed to delivering exceptional property management services 
              that enhance property values and improve the quality of life for residents.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card text-center flex flex-col h-full">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl text-white">🎯</span>
              </div>
              <div className="flex-grow">
                <h3 className="heading-3 mb-4">Excellence</h3>
                <p className="body-text">
                  We strive for excellence in every aspect of our service delivery, 
                  from routine maintenance to complex financial management.
                </p>
              </div>
            </div>

            <div className="card text-center flex flex-col h-full">
              <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl text-white">🤝</span>
              </div>
              <div className="flex-grow">
                <h3 className="heading-3 mb-4">Integrity</h3>
                <p className="body-text">
                  Transparency, honesty, and ethical business practices form the 
                  foundation of all our client relationships and business operations.
                </p>
              </div>
            </div>

            <div className="card text-center flex flex-col h-full">
              <div className="w-16 h-16 bg-gradient-to-r from-accent-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl text-white">⚡</span>
              </div>
              <div className="flex-grow">
                <h3 className="heading-3 mb-4">Responsiveness</h3>
                <p className="body-text">
                  Quick response times and proactive communication ensure that 
                  issues are addressed promptly and effectively.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team & Expertise */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-4">Our Team & Expertise</h2>
            <p className="body-large max-w-3xl mx-auto">
              Our experienced team brings together decades of combined experience 
              in property management, real estate, and customer service.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-6">Professional Qualifications</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">📋</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Licensed Property Managers</h4>
                    <p className="text-sm text-gray-600">State-licensed professionals with ongoing education and certification</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">🏢</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Real Estate Expertise</h4>
                    <p className="text-sm text-gray-600">Deep understanding of Chicago real estate market dynamics</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">💼</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Financial Management</h4>
                    <p className="text-sm text-gray-600">Certified accounting and financial management professionals</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">🔧</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Maintenance Coordination</h4>
                    <p className="text-sm text-gray-600">Experienced maintenance and vendor management specialists</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-6">Areas of Specialization</h3>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Condominium Management</h4>
                  <p className="text-sm text-gray-600">
                    High-rise buildings, mid-rise complexes, and boutique condominium communities
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Townhome Communities</h4>
                  <p className="text-sm text-gray-600">
                    Row houses, attached homes, and planned townhome developments
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">HOA Management</h4>
                  <p className="text-sm text-gray-600">
                    Single-family subdivisions, master-planned communities, and mixed-use developments
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Board Support</h4>
                  <p className="text-sm text-gray-600">
                    Meeting facilitation, governance guidance, and strategic planning assistance
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Philosophy */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-4">Our Service Philosophy</h2>
            <p className="body-large max-w-3xl mx-auto">
              We believe that successful property management is built on strong relationships, 
              clear communication, and proactive problem-solving.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">Proactive Management</h3>
                <p className="body-text">
                  We don't wait for problems to arise. Our proactive approach includes 
                  regular property inspections, preventive maintenance scheduling, and 
                  continuous monitoring of property conditions and resident satisfaction.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3">Transparent Communication</h3>
                <p className="body-text">
                  Clear, timely communication is essential to successful property management. 
                  We provide regular updates, detailed reporting, and maintain open lines 
                  of communication with all stakeholders.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">Financial Stewardship</h3>
                <p className="body-text">
                  We treat every property's finances with the same care and attention 
                  we would give our own investments, ensuring responsible budgeting, 
                  cost-effective operations, and long-term financial health.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3">Resident-Focused Service</h3>
                <p className="body-text">
                  Happy residents are the foundation of successful properties. We prioritize 
                  resident satisfaction through responsive service, community building, 
                  and maintaining high-quality living environments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-secondary text-white">
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