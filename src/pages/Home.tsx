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
              Chicago Property Management Company |{' '}
              <span className="text-gradient bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                #1 Condo, Townhome & HOA Management
              </span>
            </h1>
            <p className="body-large mb-8 text-blue-100 max-w-3xl mx-auto">
              Manage369 is Chicago's #1 property management company providing professional property management 
              services throughout Chicago and suburbs since 2007. We specialize in <Link to="/services/condominium-management" className="text-yellow-300 hover:underline">Chicago condominium management</Link>, 
              <Link to="/services/townhome-management" className="text-yellow-300 hover:underline"> townhome communities</Link>, and 
              <Link to="/services/hoa-management" className="text-yellow-300 hover:underline"> Chicago HOA management</Link> with 
              comprehensive, reliable solutions tailored to your property's unique needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-secondary text-lg px-8 py-4">
                Get Free Consultation
              </Link>
              <a 
                href="https://calendly.com/autho369/new-meeting" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-outline border-white text-white hover:bg-white hover:text-primary-500 text-lg px-8 py-4 inline-flex items-center justify-center"
              >
                Schedule Meeting
                <span className="ml-2">📅</span>
              </a>
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
            <h2 className="heading-2 mb-4">Chicago Property Management Services - #1 Rated Company</h2>
            <p className="body-large max-w-3xl mx-auto">
              Manage369 provides expert property management for all types of residential communities throughout 
              Chicago and surrounding suburbs, with specialized expertise in each property type. As Chicago's 
              #1 property management company, we serve <Link to="/service-areas" className="text-primary-500 hover:underline">100+ Chicago neighborhoods and suburbs</Link> with professional property management services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card text-center group hover:scale-105 transition-transform duration-300 flex flex-col h-full">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">🏢</span>
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
              </div>
              <Link to="/services/condominium-management" className="btn-primary mt-auto w-full text-center block">
                Chicago Condominium Management Services
              </Link>
            </div>

            <div className="card text-center group hover:scale-105 transition-transform duration-300 flex flex-col h-full">
              <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">🏘️</span>
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
              </div>
              <Link to="/services/townhome-management" className="btn-primary mt-auto w-full text-center block">
                Chicago Townhome Management Services
              </Link>
            </div>

            <div className="card text-center group hover:scale-105 transition-transform duration-300 flex flex-col h-full">
              <div className="w-16 h-16 bg-gradient-to-r from-accent-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">🏡</span>
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
              </div>
              <Link to="/services/hoa-management" className="btn-primary mt-auto w-full text-center block">
                Chicago HOA Management Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Preview */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-4">Serving Chicago & Suburbs - #1 Property Management Company</h2>
            <p className="body-large max-w-3xl mx-auto">
              Manage369 is the #1 property management company serving Chicago neighborhoods 
              and surrounding suburban communities, providing local expertise and 
              personalized service in every market we serve. <Link to="/service-areas" className="text-primary-500 hover:underline">View all 100+ service areas</Link>.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { name: "Downtown Chicago", type: "Urban Core", properties: "500+ Properties", slug: "downtown-chicago", established: "Since 2007" },
              { name: "Lincoln Park", type: "Historic Neighborhood", properties: "300+ Properties", slug: "lincoln-park", established: "Since 2008" },
              { name: "Naperville", type: "Suburban Community", properties: "400+ Properties", slug: "naperville", established: "Since 2009" },
              { name: "Oak Park", type: "Historic Suburb", properties: "200+ Properties", slug: "oak-park", established: "Since 2010" },
              { name: "Evanston", type: "University Town", properties: "300+ Properties", slug: "evanston", established: "Since 2010" },
              { name: "Wheaton", type: "Family Community", properties: "150+ Properties", slug: "wheaton", established: "Since 2011" },
              { name: "Arlington Heights", type: "Established Suburb", properties: "200+ Properties", slug: "arlington-heights", established: "Since 2012" },
              { name: "Palatine", type: "Northwest Suburb", properties: "180+ Properties", slug: "palatine", established: "Since 2012" }
            ].map((area, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full">
                <div>
                  <h4 className="font-semibold text-lg mb-2">
                    <Link to={`/service-areas/${area.slug}`} className="text-gray-900 hover:text-primary-500">
                      {area.name}
                    </Link>
                  </h4>
                  <p className="text-sm text-gray-600 mb-3">{area.type}</p>
                  <div className="space-y-1">
                    <p className="text-primary-500 font-semibold text-sm">{area.properties}</p>
                    <p className="text-gray-500 text-xs">{area.established}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <div className="mb-6">
              <p className="text-lg font-semibold text-gray-700 mb-2">
                Total Properties Under Management: <span className="text-primary-500">2,230+</span>
              </p>
              <p className="text-gray-600">
                Serving <span className="font-semibold">100+ Chicago communities</span> since 2007
              </p>
            </div>
            <Link to="/service-areas" className="btn-primary text-lg px-8 py-4">
              View All Chicago Service Areas
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-12">
            <div>
              <h2 className="heading-2 mb-6">Why Manage369 is Chicago's #1 Property Management Company</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Local Chicago Property Management Expertise</h4>
                    <p className="body-text">
                      Deep understanding of Chicago's unique property management requirements, 
                      local regulations, and neighborhood characteristics across all 
                      <Link to="/service-areas" className="text-primary-500 hover:underline"> Chicago service areas</Link>.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Comprehensive Property Management Services</h4>
                    <p className="body-text">
                      From <Link to="/services" className="text-primary-500 hover:underline">financial management and maintenance coordination</Link> to board support 
                      and regulatory compliance - we handle everything for Chicago properties.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">24/7 Emergency Response in Chicago</h4>
                    <p className="body-text">
                      Round-the-clock emergency services ensure your Chicago property and residents 
                      are always protected and supported with immediate response.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Technology-Driven Property Management</h4>
                    <p className="body-text">
                      Modern property management software, online portals, and digital 
                      communication tools for maximum efficiency and transparency in Chicago.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="heading-3 mb-6 text-center">Get Started with Chicago's #1 Property Management</h3>
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
                  <label className="block text-sm font-medium text-gray-700 mb-2">Chicago Area Location</label>
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
                <Link to="/contact" className="w-full btn-primary block text-center">
                  Request Free Consultation
                </Link>
              </form>
            </div>
          </div>
          
          {/* Why Choose Us - Full Width Section */}
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

      {/* CTA Section */}
      <section className="section-padding bg-gradient-secondary text-white">
        <div className="container-max text-center">
          <h2 className="heading-2 mb-4 text-white">Ready to Experience Chicago's #1 Property Management Company?</h2>
          <p className="body-large mb-8 text-green-100 max-w-2xl mx-auto">
            Join hundreds of satisfied property owners and HOA boards who trust Manage369, 
            Chicago's #1 property management company, for comprehensive, reliable property management services 
            throughout <Link to="/service-areas" className="text-yellow-300 hover:underline">Chicago and suburbs</Link>.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary bg-white text-primary-500 hover:bg-gray-100 text-lg px-8 py-4">
              Get Free Quote from Chicago's #1
            </Link>
            <a href="tel:773-728-0652" className="btn-outline border-white text-white hover:bg-white hover:text-secondary-500 text-lg px-8 py-4">
              Call Chicago's #1: (773) 728-0652
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home