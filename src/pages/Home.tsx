import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-500 to-primary-700 text-white section-padding">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-1 mb-6 text-white">
              Chicago's Premier Property Management for{' '}
              <span className="text-gradient bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Condos, Townhomes & HOAs
              </span>
            </h1>
            <p className="body-large mb-8 text-blue-100 max-w-3xl mx-auto">
              Professional property management services throughout Chicago and suburbs. 
              We specialize in condominium associations, townhome communities, and HOA management 
              with comprehensive, reliable solutions tailored to your property's unique needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-secondary text-lg px-8 py-4">
                Get Free Consultation
              </Link>
              <Link to="/services" className="btn-outline border-white text-white hover:bg-white hover:text-primary-500 text-lg px-8 py-4">
                View Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Property Types Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-4">Specialized Management Services</h2>
            <p className="body-large max-w-3xl mx-auto">
              We provide expert management for all types of residential communities throughout 
              Chicago and surrounding suburbs, with specialized expertise in each property type.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card text-center group hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">🏢</span>
              </div>
              <h3 className="heading-3 mb-4">Condominium Management</h3>
              <p className="body-text mb-6">
                Comprehensive management for high-rise buildings, mid-rise complexes, and 
                boutique condominium communities. From luxury downtown towers to neighborhood buildings.
              </p>
              <Link to="/services/condominium-management" className="btn-primary">
                Learn More
              </Link>
            </div>

            <div className="card text-center group hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">🏘️</span>
              </div>
              <h3 className="heading-3 mb-4">Townhome Management</h3>
              <p className="body-text mb-6">
                Specialized services for townhome communities, row houses, and attached home 
                developments. Expert management of shared amenities and community spaces.
              </p>
              <Link to="/services/townhome-management" className="btn-primary">
                Learn More
              </Link>
            </div>

            <div className="card text-center group hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-accent-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">🏡</span>
              </div>
              <h3 className="heading-3 mb-4">HOA Management</h3>
              <p className="body-text mb-6">
                Full-service homeowners association management for single-family subdivisions, 
                master-planned communities, and mixed-use developments.
              </p>
              <Link to="/services/hoa-management" className="btn-primary">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Preview */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-4">Serving Chicago & Suburbs</h2>
            <p className="body-large max-w-3xl mx-auto">
              Our property management services extend throughout Chicago neighborhoods 
              and surrounding suburban communities, providing local expertise and 
              personalized service in every market we serve.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { name: "Downtown Chicago", type: "Urban Core", properties: "500+" },
              { name: "Lincoln Park", type: "Historic Neighborhood", properties: "300+" },
              { name: "Naperville", type: "Suburban Community", properties: "400+" },
              { name: "Schaumburg", type: "Business Hub", properties: "250+" },
              { name: "Oak Park", type: "Historic Suburb", properties: "200+" },
              { name: "Evanston", type: "University Town", properties: "300+" },
              { name: "Wheaton", type: "Family Community", properties: "150+" },
              { name: "Arlington Heights", type: "Established Suburb", properties: "200+" }
            ].map((area, index) => (
              <div key={index} className="card hover:scale-105 transition-transform duration-300">
                <h4 className="font-semibold text-lg mb-2">{area.name}</h4>
                <p className="text-sm text-gray-600 mb-2">{area.type}</p>
                <p className="text-primary-500 font-semibold">{area.properties} Properties</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/service-areas" className="btn-primary text-lg px-8 py-4">
              View All Service Areas
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-2 mb-6">Why Choose Manage369?</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Local Chicago Expertise</h4>
                    <p className="body-text">
                      Deep understanding of Chicago's unique property management requirements, 
                      local regulations, and neighborhood characteristics.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Comprehensive Services</h4>
                    <p className="body-text">
                      From financial management and maintenance coordination to board support 
                      and regulatory compliance - we handle everything.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">24/7 Emergency Response</h4>
                    <p className="body-text">
                      Round-the-clock emergency services ensure your property and residents 
                      are always protected and supported.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Technology-Driven</h4>
                    <p className="body-text">
                      Modern property management software, online portals, and digital 
                      communication tools for maximum efficiency and transparency.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="heading-3 mb-6 text-center">Get Started Today</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Property Type</label>
                  <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent">
                    <option>Select Property Type</option>
                    <option>Condominium</option>
                    <option>Townhome Community</option>
                    <option>HOA/Subdivision</option>
                    <option>Mixed-Use Development</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                  <input 
                    type="text" 
                    placeholder="Chicago area location"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Number of Units</label>
                  <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent">
                    <option>Select Unit Count</option>
                    <option>1-25 units</option>
                    <option>26-50 units</option>
                    <option>51-100 units</option>
                    <option>100+ units</option>
                  </select>
                </div>
                <button type="submit" className="w-full btn-primary">
                  Request Free Consultation
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-secondary text-white">
        <div className="container-max text-center">
          <h2 className="heading-2 mb-4 text-white">Ready to Experience Professional Property Management?</h2>
          <p className="body-large mb-8 text-green-100 max-w-2xl mx-auto">
            Join hundreds of satisfied property owners and HOA boards who trust Manage369 
            for comprehensive, reliable property management services throughout Chicago and suburbs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary bg-white text-primary-500 hover:bg-gray-100 text-lg px-8 py-4">
              Get Free Quote
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

export default Home