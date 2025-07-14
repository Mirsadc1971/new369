import React from 'react'
import { Link } from 'react-router-dom'
import { chicagoAreas, suburbAreas, additionalServiceAreas } from '../data/serviceAreas'

const Sitemap = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-500 to-primary-700 text-white section-padding">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-1 mb-6 text-white">
              Site{' '}
              <span className="text-gradient bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Map
              </span>
            </h1>
            <p className="body-large mb-8 text-blue-100 max-w-3xl mx-auto">
              Find all pages and content on the Manage369 website. Navigate easily 
              to any section or service area you're looking for.
            </p>
          </div>
        </div>
      </section>

      {/* Sitemap Content */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Main Pages */}
            <div>
              <h2 className="heading-2 mb-8">Main Pages</h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-primary-600">Core Pages</h3>
                  <ul className="space-y-2">
                    <li><Link to="/" className="text-gray-600 hover:text-primary-500 transition-colors">Home</Link></li>
                    <li><Link to="/about" className="text-gray-600 hover:text-primary-500 transition-colors">About Us</Link></li>
                    <li><Link to="/contact" className="text-gray-600 hover:text-primary-500 transition-colors">Contact</Link></li>
                    <li><Link to="/resources" className="text-gray-600 hover:text-primary-500 transition-colors">Resources</Link></li>
                    <li><Link to="/blog" className="text-gray-600 hover:text-primary-500 transition-colors">Blog</Link></li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4 text-secondary-600">Services</h3>
                  <ul className="space-y-2">
                    <li><Link to="/services" className="text-gray-600 hover:text-secondary-500 transition-colors">All Services</Link></li>
                    <li><Link to="/services/condominium-management" className="text-gray-600 hover:text-secondary-500 transition-colors">Condominium Management</Link></li>
                    <li><Link to="/services/townhome-management" className="text-gray-600 hover:text-secondary-500 transition-colors">Townhome Management</Link></li>
                    <li><Link to="/services/hoa-management" className="text-gray-600 hover:text-secondary-500 transition-colors">HOA Management</Link></li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4 text-accent-600">Service Areas</h3>
                  <ul className="space-y-2">
                    <li><Link to="/service-areas" className="text-gray-600 hover:text-accent-500 transition-colors">All Service Areas</Link></li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-600">Legal & Information</h3>
                  <ul className="space-y-2">
                    <li><Link to="/privacy" className="text-gray-600 hover:text-primary-500 transition-colors">Privacy Policy</Link></li>
                    <li><Link to="/terms" className="text-gray-600 hover:text-primary-500 transition-colors">Terms of Service</Link></li>
                    <li><Link to="/accessibility" className="text-gray-600 hover:text-primary-500 transition-colors">Accessibility Statement</Link></li>
                    <li><Link to="/sitemap" className="text-gray-600 hover:text-primary-500 transition-colors">Sitemap</Link></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Service Areas */}
            <div>
              <h2 className="heading-2 mb-8">Service Areas</h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-primary-600">Chicago Neighborhoods</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {chicagoAreas.map((area) => (
                      <Link 
                        key={area.id}
                        to={`/service-areas/${area.slug}`} 
                        className="text-gray-600 hover:text-primary-500 transition-colors text-sm"
                      >
                        {area.name}
                      </Link>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4 text-secondary-600">Suburban Communities</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {suburbAreas.map((area) => (
                      <Link 
                        key={area.id}
                        to={`/service-areas/${area.slug}`} 
                        className="text-gray-600 hover:text-secondary-500 transition-colors text-sm"
                      >
                        {area.name}
                      </Link>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4 text-accent-600">Additional Areas</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {additionalServiceAreas.slice(0, 18).map((area, index) => (
                      <Link 
                        key={index}
                        to={`/service-areas/${area.toLowerCase().replace(/\s+/g, '-')}`} 
                        className="text-gray-600 hover:text-accent-500 transition-colors text-sm"
                      >
                        {area}
                      </Link>
                    ))}
                  </div>
                  <p className="text-sm text-gray-500 mt-4">
                    And {additionalServiceAreas.length - 18} more areas...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">Quick Navigation</h2>
            <p className="body-large max-w-3xl mx-auto">
              Jump directly to the most popular sections of our website.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link to="/contact" className="card text-center hover:scale-105 transition-transform duration-300 flex flex-col h-full justify-between">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-xl">📞</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Get Quote</h3>
              <p className="text-sm text-gray-600">Contact us for a free consultation</p>
            </Link>

            <Link to="/services" className="card text-center hover:scale-105 transition-transform duration-300 flex flex-col h-full justify-between">
              <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-xl">🏢</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Our Services</h3>
              <p className="text-sm text-gray-600">Explore our management services</p>
            </Link>

            <Link to="/service-areas" className="card text-center hover:scale-105 transition-transform duration-300 flex flex-col h-full justify-between">
              <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-xl">📍</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Service Areas</h3>
              <p className="text-sm text-gray-600">Find your Chicago area</p>
            </Link>

            <Link to="/about" className="card text-center hover:scale-105 transition-transform duration-300 flex flex-col h-full justify-between">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-xl">ℹ️</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">About Us</h3>
              <p className="text-sm text-gray-600">Learn about our company</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">Need Help Finding Something?</h2>
            <p className="body-large max-w-3xl mx-auto">
              Can't find what you're looking for? Our team is here to help you 
              navigate our services and find the information you need.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📞</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Call Us</h3>
              <p className="text-gray-600 mb-2">(312) 402-7002</p>
              <p className="text-sm text-gray-500">Monday - Friday: 8:00 AM - 6:00 PM</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✉️</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Email Us</h3>
              <p className="text-gray-600 mb-2">service@manage369.com</p>
              <p className="text-sm text-gray-500">We respond within 24 hours</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💬</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Contact Form</h3>
              <Link to="/contact" className="text-primary-500 hover:underline">
                Fill out our contact form
              </Link>
              <p className="text-sm text-gray-500 mt-1">Get a personalized response</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-primary text-white">
        <div className="container-max text-center">
          <h2 className="heading-2 mb-4 text-white">Ready to Get Started?</h2>
          <p className="body-large mb-8 text-blue-100 max-w-2xl mx-auto">
            Contact Chicago's #1 property management company today to learn how 
            we can help your property thrive.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-secondary text-lg px-8 py-4">
              Get Free Quote
            </Link>
            <a href="tel:312-402-7002" className="btn-outline border-white text-white hover:bg-white hover:text-primary-500 text-lg px-8 py-4">
              Call (312) 402-7002
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Sitemap