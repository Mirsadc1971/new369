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
              Premier Property Management Company |{' '}
              <span className="text-gradient bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Managing 50+ Properties, 2450+ Units Since 2007
              </span>
            </h1>
            <p className="body-large mb-8 text-blue-100 max-w-3xl mx-auto">
              The most trusted property management company with 50+ properties managing 2450+ units across 100+ neighborhoods. 
              Expert <Link to="/services/condominium-management" className="text-yellow-300 hover:underline">condo management</Link>, 
              <Link to="/services/townhome-management" className="text-yellow-300 hover:underline"> HOA management</Link>, and 
              <Link to="/services/hoa-management" className="text-yellow-300 hover:underline"> townhome management</Link> with 
              24/7 emergency response, licensed professionals, and proven results that larger corporate companies can't match.
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
            <h2 className="heading-2 mb-4">Property Management Services - #1 Rated Company</h2>
            <p className="body-large max-w-3xl mx-auto">
              Manage369 provides expert property management for all types of residential communities throughout the metropolitan area and surrounding suburbs, with specialized expertise in each property type. As the premier property management company, we serve <Link to="/service-areas" className="text-primary-500 hover:underline">neighborhoods and suburbs</Link> including Lincoln Park, Naperville, Oak Park, Evanston, and many more with professional property management services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card text-center group hover:scale-105 transition-transform duration-300 flex flex-col h-full">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">🏢</span>
              </div>
              <div className="flex-grow">
                <h3 className="heading-3 mb-4">Condominium Management Services</h3>
                <p className="body-text mb-6">
                  Specialized condominium management for high-rise buildings, mid-rise complexes, 
                  and boutique condominium communities throughout Chicago including 
                  <Link to="/service-areas/downtown-chicago" className="text-primary-500 hover:underline"> Downtown</Link>, 
                  <Link to="/service-areas/lincoln-park" className="text-primary-500 hover:underline"> Lincoln Park</Link>, and 
                  <Link to="/service-areas/lakeview" className="text-primary-500 hover:underline"> Lakeview</Link>.
                </p>
              </div>
              <Link to="/services/condominium-management" className="btn-primary mt-auto w-full text-center block">
                Condominium Management Services
              </Link>
            </div>

            <div className="card text-center group hover:scale-105 transition-transform duration-300 flex flex-col h-full">
              <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">🏘️</span>
              </div>
              <div className="flex-grow">
                <h3 className="heading-3 mb-4">Townhome Management Services</h3>
                <p className="body-text mb-6">
                  Comprehensive townhome management for townhome communities, row houses, 
                  and attached home developments across suburbs including 
                  <Link to="/service-areas/naperville" className="text-secondary-500 hover:underline"> Naperville</Link>, 
                  <Link to="/service-areas/wheaton" className="text-secondary-500 hover:underline"> Wheaton</Link>, and 
                  <Link to="/service-areas/oak-park" className="text-secondary-500 hover:underline"> Oak Park</Link>.
                </p>
              </div>
              <Link to="/services/townhome-management" className="btn-primary mt-auto w-full text-center block">
                Townhome Management Services
              </Link>
            </div>

            <div className="card text-center group hover:scale-105 transition-transform duration-300 flex flex-col h-full">
              <div className="w-16 h-16 bg-gradient-to-r from-accent-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">🏡</span>
              </div>
              <div className="flex-grow">
                <h3 className="heading-3 mb-4">HOA Management Services</h3>
                <p className="body-text mb-6">
                  Full-service HOA management for single-family 
                  subdivisions and master-planned communities throughout suburbs including 
                  <Link to="/service-areas/evanston" className="text-accent-500 hover:underline"> Evanston</Link>, 
                  <Link to="/service-areas/schaumburg" className="text-accent-500 hover:underline"> Schaumburg</Link>, and 
                  <Link to="/service-areas/arlington-heights" className="text-accent-500 hover:underline"> Arlington Heights</Link>.
                </p>
              </div>
              <Link to="/services/hoa-management" className="btn-primary mt-auto w-full text-center block">
                HOA Management Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Preview */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-4">Property Management - Neighborhood Specialists <span className="sr-only">near you</span></h2>
            <p className="body-large max-w-3xl mx-auto">
              Expert property management across 100+ neighborhoods including Lincoln Park, 
              Downtown, Lakeview, Naperville, and surrounding suburbs. Local expertise 
              and personalized service in every community we serve. <Link to="/service-areas" className="text-primary-500 hover:underline">View all service areas</Link>.
            </p>
          </div>
          
          {/* Neighborhood-Specific Keywords */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-center mb-8">Local Property Management by Neighborhood</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              <Link to="/service-areas/lincoln-park" className="bg-white p-3 rounded-lg text-center hover:bg-primary-50 transition-colors">
                <span className="text-sm font-medium">Lincoln Park Property Management</span>
              </Link>
              <Link to="/service-areas/downtown-chicago" className="bg-white p-3 rounded-lg text-center hover:bg-primary-50 transition-colors">
                <span className="text-sm font-medium">Downtown Condo Management</span>
              </Link>
              <Link to="/service-areas/lakeview" className="bg-white p-3 rounded-lg text-center hover:bg-primary-50 transition-colors">
                <span className="text-sm font-medium">Lakeview Property Management</span>
              </Link>
              <Link to="/service-areas/naperville" className="bg-white p-3 rounded-lg text-center hover:bg-primary-50 transition-colors">
                <span className="text-sm font-medium">Naperville HOA Management</span>
              </Link>
              <Link to="/service-areas/oak-park" className="bg-white p-3 rounded-lg text-center hover:bg-primary-50 transition-colors">
                <span className="text-sm font-medium">Oak Park Property Management</span>
              </Link>
              <Link to="/service-areas/evanston" className="bg-white p-3 rounded-lg text-center hover:bg-primary-50 transition-colors">
                <span className="text-sm font-medium">Evanston Property Management</span>
              </Link>
            </div>
          </div>

          {/* Neighborhood-Specific Keywords */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-center mb-8">Property Management by Neighborhood</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              <Link to="/service-areas/lincoln-park" className="bg-white p-3 rounded-lg text-center hover:bg-primary-50 transition-colors">
                <span className="text-sm font-medium">Lincoln Park Property Management</span>
              </Link>
              <Link to="/service-areas/downtown-chicago" className="bg-white p-3 rounded-lg text-center hover:bg-primary-50 transition-colors">
                <span className="text-sm font-medium">Downtown Condo Management</span>
              </Link>
              <Link to="/service-areas/lakeview" className="bg-white p-3 rounded-lg text-center hover:bg-primary-50 transition-colors">
                <span className="text-sm font-medium">Lakeview Property Management</span>
              </Link>
              <Link to="/service-areas/naperville" className="bg-white p-3 rounded-lg text-center hover:bg-primary-50 transition-colors">
                <span className="text-sm font-medium">Naperville HOA Management</span>
              </Link>
              <Link to="/service-areas/oak-park" className="bg-white p-3 rounded-lg text-center hover:bg-primary-50 transition-colors">
                <span className="text-sm font-medium">Oak Park Property Management</span>
              </Link>
              <Link to="/service-areas/evanston" className="bg-white p-3 rounded-lg text-center hover:bg-primary-50 transition-colors">
                <span className="text-sm font-medium">Evanston Property Management</span>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { name: "Downtown Chicago", type: "Urban Core", slug: "downtown-chicago", description: "Chicago's business district with luxury high-rise condominiums" },
              { name: "Downtown", type: "Urban Core", slug: "downtown-chicago", description: "Business district with luxury high-rise condominiums" },
              { name: "Lincoln Park", type: "Historic Neighborhood", slug: "lincoln-park", description: "Tree-lined streets with Victorian architecture and diverse housing" },
              { name: "Naperville", type: "Suburban Community", slug: "naperville", description: "Top-rated schools and master-planned family communities" },
              { name: "Oak Park", type: "Historic Suburb", slug: "oak-park", description: "Frank Lloyd Wright architecture and progressive community values" },
              { name: "Evanston", type: "University Town", slug: "evanston", description: "Northwestern University area with diverse housing near Lake Michigan" },
              { name: "Wheaton", type: "Family Community", slug: "wheaton", description: "Family-oriented community with excellent schools and downtown charm" },
              { name: "Arlington Heights", type: "Established Suburb", slug: "arlington-heights", description: "Established community with Metra access and family amenities" },
              { name: "Palatine", type: "Northwest Suburb", slug: "palatine", description: "Diverse housing options with strong local economy and transportation" }
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
                    <p className="text-gray-600 text-xs mt-2">{area.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/service-areas" className="btn-primary text-lg px-8 py-4">
              View All Chicago Service Areas
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-white">
        <div className="container-max">
          {/* FAQ Section for SEO */}
          <div className="mb-16">
            <h2 className="heading-2 mb-8 text-center">Property Management FAQ</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-lg mb-2">What makes Manage369 different from other property management companies?</h3>
                  <p className="text-gray-600 text-sm">
                    Unlike large corporate property management companies, Manage369 focuses on local markets 
                    with neighborhood expertise, personalized service, and 18+ years of market experience.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-lg mb-2">How much does property management cost?</h3>
                  <p className="text-gray-600 text-sm">
                    Property management fees vary by property size and services. Manage369 offers 
                    competitive, transparent pricing with no hidden fees. Contact us for a free quote.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-lg mb-2">Do you manage properties in all neighborhoods?</h3>
                  <p className="text-gray-600 text-sm">
                    Yes! We provide property management services across 100+ neighborhoods including 
                    Lincoln Park, Downtown, Lakeview, and surrounding suburbs.
                  </p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-lg mb-2">What types of properties do you manage?</h3>
                  <p className="text-gray-600 text-sm">
                    We specialize in condo management, HOA management, and townhome management 
                    for properties ranging from 10 to 500+ units.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-lg mb-2">How quickly do you respond to emergencies?</h3>
                  <p className="text-gray-600 text-sm">
                    Manage369 provides 24/7 emergency response with typical response times under 2 hours 
                    for urgent situations affecting properties.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-lg mb-2">Are you licensed for property management in Illinois?</h3>
                  <p className="text-gray-600 text-sm">
                    Yes, Manage369 is fully licensed and insured for property management in Illinois, 
                    with all required certifications and professional memberships.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Competitive Advantage Section */}
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-4">Why Choose Manage369 Over Other Property Management Companies?</h2>
            <p className="body-large max-w-3xl mx-auto mb-8">
              Unlike large corporate property management companies that treat you like a number, 
              Manage369 provides personalized service with measurable results. Here's our competitive advantage:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-green-50 p-6 rounded-xl border-l-4 border-green-500">
                <h3 className="font-semibold text-lg mb-2 text-green-800">Manage369 Advantages</h3>
                <ul className="text-sm text-green-700 space-y-1 text-left">
                  <li>• <strong>2,230+ Properties:</strong> Proven track record with specific portfolio size</li>
                  <li>• <strong>100+ Neighborhoods:</strong> Unmatched local area expertise</li>
                  <li>• <strong>Specialized Services:</strong> Distinct condo/townhome/HOA expertise</li>
                  <li>• <strong>Local Focus:</strong> Regional expertise vs. national corporate chains</li>
                  <li>• <strong>Direct Access:</strong> No call centers, speak directly to your manager</li>
                </ul>
              </div>
              
              <div className="bg-red-50 p-6 rounded-xl border-l-4 border-red-500">
                <h3 className="font-semibold text-lg mb-2 text-red-800">Large Corporate Companies</h3>
                <ul className="text-sm text-red-700 space-y-1 text-left">
                  <li>• <strong>Volume Focus:</strong> Prioritize quantity over quality service</li>
                  <li>• <strong>Call Centers:</strong> Impersonal customer service experience</li>
                  <li>• <strong>One-Size-Fits-All:</strong> Generic solutions for unique properties</li>
                  <li>• <strong>Hidden Fees:</strong> Complex pricing with unexpected charges</li>
                  <li>• <strong>Slow Response:</strong> Bureaucratic processes delay action</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-12">
            <div>
              <h2 className="heading-2 mb-6">Why Manage369 is Chicago's #1 Property Management Company</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Local Property Management Expertise</h4>
                    <p className="body-text">
                      Deep understanding of local property management requirements, 
                      local regulations, and neighborhood characteristics across all 
                      <Link to="/service-areas" className="text-primary-500 hover:underline"> service areas</Link>.
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
                      and regulatory compliance - we handle everything for your properties.
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
                      communication tools for maximum efficiency and transparency.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="heading-3 mb-6 text-center">Get Started with #1 Property Management</h3>
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
                  <label className="block text-sm font-medium text-gray-700 mb-2">Property Location</label>
                  <input 
                    type="text" 
                    placeholder="Property location"
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
              <h3 className="text-2xl font-bold text-white mb-4">Proven Results: 50+ Properties Successfully Managed</h3>
              <p className="text-blue-100 mb-4">Unlike competitors who hide their portfolio size, we're proud to share our proven track record</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="flex items-center space-x-3">
                <span className="w-3 h-3 bg-white rounded-full flex-shrink-0"></span>
                <span className="text-white font-medium"><strong>50+</strong> Properties Managed</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="w-3 h-3 bg-white rounded-full flex-shrink-0"></span>
                <span className="text-white font-medium"><strong>100+</strong> Neighborhoods</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="w-3 h-3 bg-white rounded-full flex-shrink-0"></span>
                <span className="text-white font-medium"><strong>18+</strong> Years Local Experience</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="w-3 h-3 bg-white rounded-full flex-shrink-0"></span>
                <span className="text-white font-medium"><strong>24/7</strong> Emergency Response</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-secondary text-white">
        <div className="container-max text-center">
          <h2 className="heading-2 mb-4 text-white">Ready to Experience the #1 Property Management Company?</h2>
          <p className="body-large mb-8 text-green-100 max-w-2xl mx-auto">
            Join hundreds of satisfied property owners and HOA boards who trust Manage369, 
            the #1 property management company, for comprehensive, reliable property management services 
            throughout <Link to="/service-areas" className="text-yellow-300 hover:underline">the metropolitan area and suburbs</Link>.
          </p>
          <div className="mb-8">
            <div className="bg-white bg-opacity-10 p-4 rounded-lg inline-block">
              <p className="text-white font-semibold">Manage369 - #1 Property Management Company</p>
              <p className="text-green-100">1400 Patriot Boulevard 357, Glenview, IL 60026</p>
              <p className="text-green-100">(847) 834-4131 | service@manage369.com</p>
              <p className="text-green-100 text-sm">Serving Cook, DuPage, Lake & Kane Counties</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary bg-white text-primary-500 hover:bg-gray-100 text-lg px-8 py-4">
              Get Free Quote from #1 Company
            </Link>
            <a href="tel:847-834-4131" className="btn-outline border-white text-white hover:bg-white hover:text-secondary-500 text-lg px-8 py-4">
              Call the #1 Company: (847) 834-4131
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home