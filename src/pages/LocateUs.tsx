import React from 'react'
import { Link } from 'react-router-dom'

const LocateUs = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-500 to-primary-700 text-white section-padding">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-1 mb-6 text-white">
              Visit{' '}
              <span className="text-gradient bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Manage369 in Chicago
              </span>
            </h1>
            <p className="body-large mb-8 text-blue-100 max-w-3xl mx-auto">
              Manage369 is Chicago's premier property management company with 18+ years of experience 
              serving 50+ HOA and condo associations across 70+ neighborhoods. We provide comprehensive 
              management solutions including 24/7 emergency response, financial management, maintenance 
              coordination, and legal compliance. Licensed, insured, and trusted since 2007.
            </p>
            <div className="bg-white bg-opacity-10 p-6 rounded-xl backdrop-blur-sm inline-block">
              <p className="text-blue-100 mb-2">
                Serving Lincoln Park, Lakeview, River North, Gold Coast, Logan Square, Hyde Park, 
                and surrounding suburbs. Contact us for professional, reliable property management services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Main Contact Info */}
            <div>
              <h2 className="heading-2 mb-8">Chicago Property Management Office</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">📍</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Chicago Office Location</h3>
                    <p className="text-gray-600 mb-2">Chicago, Illinois</p>
                    <p className="text-sm text-gray-500">Serving all Chicago neighborhoods and suburbs</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">📞</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Phone</h3>
                    <p className="text-gray-600 mb-2">
                      <a href="tel:773-728-0652" className="text-primary-500 hover:underline text-xl font-semibold">
                        (773) 728-0652
                      </a>
                    </p>
                    <p className="text-sm text-gray-500">Monday - Friday: 8:00 AM - 6:00 PM</p>
                    <p className="text-sm text-gray-500">24/7 Emergency Service Available</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">✉️</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Email</h3>
                    <p className="text-gray-600 mb-2">
                      <a href="mailto:service@manage369.com" className="text-primary-500 hover:underline">
                        service@manage369.com
                      </a>
                    </p>
                    <p className="text-sm text-gray-500">We respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">🚨</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Emergency Line</h3>
                    <p className="text-gray-600 mb-2">
                      <a href="tel:773-728-0652" className="text-red-600 hover:underline font-semibold">
                        (773) 728-0652
                      </a>
                    </p>
                    <p className="text-sm text-gray-500">24/7 Emergency Response for Chicago Properties</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Service Areas Map */}
            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-xl font-semibold mb-6">Chicago Property Management Service Areas</h3>
              
              <div className="mb-6">
                <h4 className="font-semibold mb-3 text-primary-600">Chicago Neighborhoods</h4>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <Link to="/service-areas/downtown-chicago" className="text-gray-600 hover:text-primary-500">Downtown Chicago</Link>
                  <Link to="/service-areas/lincoln-park" className="text-gray-600 hover:text-primary-500">Lincoln Park</Link>
                  <Link to="/service-areas/lakeview" className="text-gray-600 hover:text-primary-500">Lakeview</Link>
                  <span className="text-gray-600">River North</span>
                  <span className="text-gray-600">Gold Coast</span>
                  <Link to="/service-areas/logan-square" className="text-gray-600 hover:text-primary-500">Logan Square</Link>
                  <Link to="/service-areas/hyde-park" className="text-gray-600 hover:text-primary-500">Hyde Park</Link>
                  <Link to="/service-areas/wicker-park" className="text-gray-600 hover:text-primary-500">Wicker Park</Link>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold mb-3 text-secondary-600">Chicago Suburbs</h4>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <Link to="/service-areas/naperville" className="text-gray-600 hover:text-secondary-500">Naperville</Link>
                  <Link to="/service-areas/oak-park" className="text-gray-600 hover:text-secondary-500">Oak Park</Link>
                  <Link to="/service-areas/evanston" className="text-gray-600 hover:text-secondary-500">Evanston</Link>
                  <Link to="/service-areas/wheaton" className="text-gray-600 hover:text-secondary-500">Wheaton</Link>
                  <Link to="/service-areas/schaumburg" className="text-gray-600 hover:text-secondary-500">Schaumburg</Link>
                  <Link to="/service-areas/arlington-heights" className="text-gray-600 hover:text-secondary-500">Arlington Heights</Link>
                  <Link to="/service-areas/palatine" className="text-gray-600 hover:text-secondary-500">Palatine</Link>
                  <span className="text-gray-600">And 60+ more areas</span>
                </div>
              </div>

              <div className="text-center">
                <Link to="/service-areas" className="btn-primary">
                  View All Service Areas
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local SEO Services Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">Chicago Property Management Services</h2>
            <p className="body-large max-w-3xl mx-auto">
              Find Manage369 for all your Chicago property management needs. We specialize in 
              property management Chicago, HOA management, and condo management near me.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-xl">🏢</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Condo Management Near Me</h3>
              <p className="text-gray-600 mb-4">
                Professional condominium management services throughout Chicago. Search "condo management near me" 
                and find Chicago's #1 property management company.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• High-rise condo management Chicago</li>
                <li>• Mid-rise building management</li>
                <li>• Boutique condo communities</li>
                <li>• Downtown Chicago condos</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-xl">🏘️</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">HOA Management Chicago</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive HOA management services for Chicago area homeowners associations. 
                Professional HOA management Chicago residents trust.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Single-family HOA management</li>
                <li>• Townhome association management</li>
                <li>• Master-planned communities</li>
                <li>• Chicago suburb HOAs</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-xl">🏡</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Property Management Chicago</h3>
              <p className="text-gray-600 mb-4">
                Full-service property management Chicago solutions. When searching "property management Chicago," 
                choose the #1 rated company.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• 24/7 emergency response</li>
                <li>• Financial management</li>
                <li>• Maintenance coordination</li>
                <li>• Board support services</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Visit Us */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-2 mb-6">Why Visit Manage369 in Chicago?</h2>
              <p className="body-text mb-6">
                When you're looking for "property management Chicago" or "condo management near me," 
                visiting our Chicago office gives you the opportunity to meet our team face-to-face 
                and discuss your specific property management needs.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Free Property Assessment</h4>
                    <p className="text-sm text-gray-600">Get a comprehensive evaluation of your Chicago property management needs</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Meet Our Chicago Team</h4>
                    <p className="text-sm text-gray-600">Connect with local property management experts who know Chicago</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Customized Solutions</h4>
                    <p className="text-sm text-gray-600">Tailored property management solutions for your specific Chicago property</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Local Market Insights</h4>
                    <p className="text-sm text-gray-600">Expert knowledge of Chicago property management regulations and trends</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary-500 to-primary-700 p-8 rounded-xl text-white">
              <h3 className="text-xl font-semibold mb-6">Schedule Your Visit</h3>
              <p className="text-blue-100 mb-6">
                Ready to visit Chicago's #1 property management company? Contact us to schedule 
                your consultation and property assessment.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <span className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <span className="text-sm">📞</span>
                  </span>
                  <div>
                    <p className="font-semibold">Call to Schedule</p>
                    <a href="tel:773-728-0652" className="text-yellow-300 hover:underline">
                      (773) 728-0652
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <span className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <span className="text-sm">✉️</span>
                  </span>
                  <div>
                    <p className="font-semibold">Email Us</p>
                    <a href="mailto:service@manage369.com" className="text-yellow-300 hover:underline">
                      service@manage369.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <span className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <span className="text-sm">📋</span>
                  </span>
                  <div>
                    <p className="font-semibold">Online Form</p>
                    <Link to="/contact" className="text-yellow-300 hover:underline">
                      Request Consultation
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local SEO Keywords Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">Find Us for Chicago Property Management</h2>
            <p className="body-large max-w-3xl mx-auto">
              Whether you're searching for "property management Chicago," "HOA management," 
              "condo management near me," or "Chicago property managers," Manage369 is your local solution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg text-center">
              <h3 className="font-semibold mb-2">Property Management Chicago</h3>
              <p className="text-sm text-gray-600">Comprehensive property management services throughout Chicago</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg text-center">
              <h3 className="font-semibold mb-2">Condo Management Near Me</h3>
              <p className="text-sm text-gray-600">Local condominium management in your Chicago neighborhood</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg text-center">
              <h3 className="font-semibold mb-2">HOA Management</h3>
              <p className="text-sm text-gray-600">Professional homeowners association management services</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg text-center">
              <h3 className="font-semibold mb-2">Chicago Property Managers</h3>
              <p className="text-sm text-gray-600">Licensed and experienced property management professionals</p>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">
              Serving all Chicago neighborhoods and suburbs with professional property management services.
            </p>
            <div className="flex flex-wrap justify-center gap-2 text-sm text-gray-500">
              <span>Property management Chicago</span>
              <span>•</span>
              <span>HOA management Chicago</span>
              <span>•</span>
              <span>Condo management near me</span>
              <span>•</span>
              <span>Chicago property managers</span>
              <span>•</span>
              <span>Condominium management Chicago</span>
            </div>
          </div>
        </div>
      </section>

      {/* Directions and Transportation */}
      <section className="section-padding bg-white">
        <div className="container-max">
          {/* Google Map Section */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <h2 className="heading-2 mb-4">Find Manage369 on Google Maps</h2>
              <p className="body-large max-w-3xl mx-auto">
                Locate our Chicago property management office and get directions using Google Maps.
              </p>
            </div>
            
            <div className="bg-gray-100 p-4 rounded-xl">
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                <iframe 
                  src="https://maps.app.goo.gl/gPy3kMGiv4bLnh4r7"
                  width="100%" 
                  height="450" 
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Manage369 Chicago Property Management Office Location"
                  className="w-full h-96 md:h-[450px] rounded-lg"
                ></iframe>
              </div>
              <div className="text-center mt-4">
                <a 
                  href="https://maps.app.goo.gl/gPy3kMGiv4bLnh4r7" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center"
                >
                  Open in Google Maps
                  <span className="ml-2">↗</span>
                </a>
              </div>
            </div>
          </div>

          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">Getting to Manage369 in Chicago</h2>
            <p className="body-large max-w-3xl mx-auto">
              Conveniently located to serve all Chicago neighborhoods and suburbs. 
              Easy access via public transportation and major highways.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚗</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">By Car</h3>
              <p className="text-gray-600">
                Easily accessible from all major Chicago highways and expressways. 
                Convenient parking available for client visits.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚇</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Public Transit</h3>
              <p className="text-gray-600">
                Accessible via CTA buses and trains. Multiple public transportation 
                options available throughout Chicago.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚶</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Walking Distance</h3>
              <p className="text-gray-600">
                Conveniently located in Chicago with easy walking access 
                from nearby neighborhoods and business districts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-primary text-white">
        <div className="container-max text-center">
          <h2 className="heading-2 mb-4 text-white">Visit Chicago's #1 Property Management Company</h2>
          <p className="body-large mb-8 text-blue-100 max-w-2xl mx-auto">
            Stop searching for "property management Chicago" or "condo management near me." 
            Visit Manage369 today and discover why we're Chicago's premier property management company.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:773-728-0652" className="btn-secondary text-lg px-8 py-4">
              Call (773) 728-0652
            </a>
            <Link to="/contact" className="btn-outline border-white text-white hover:bg-white hover:text-primary-500 text-lg px-8 py-4">
              Schedule Visit
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default LocateUs