import React from 'react'
import { Link } from 'react-router-dom'
import CanonicalLink from '../components/CanonicalLink'

const Resources = () => {
  return (
    <div>
      <CanonicalLink href="https://www.manage369.com/resources" />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-500 to-primary-700 text-white section-padding">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-1 mb-6 text-white">
              Board Resources & Property Management Insights
            </h1>
            <p className="body-large mb-8 text-blue-100 max-w-3xl mx-auto">
              Access helpful resources and information about our property management services 
              throughout Chicago and surrounding communities.
            </p>
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-4">Helpful Resources</h2>
            <p className="body-large max-w-3xl mx-auto">
              Find the information and tools you need for effective property management.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card text-center hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🏢</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Our Services</h3>
              <p className="text-gray-600 mb-6">
                Learn about our comprehensive property management solutions for condominiums, 
                townhomes, and HOAs.
              </p>
              <Link to="/services" className="btn-primary">
                View Services
              </Link>
            </div>

            <div className="card text-center hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">📍</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Service Areas</h3>
              <p className="text-gray-600 mb-6">
                Discover the Chicago neighborhoods and suburban communities we serve 
                with professional property management.
              </p>
              <Link to="/service-areas" className="btn-secondary">
                View Areas
              </Link>
            </div>

            <div className="card text-center hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">📝</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Property Management Blog</h3>
              <p className="text-gray-600 mb-6">
                Expert insights, tips, and guidance for property owners, HOA boards, 
                and residents in Chicago.
              </p>
              <Link to="/blog" className="bg-accent-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-accent-600 transition-colors duration-200 inline-flex items-center justify-center text-center min-h-[48px] whitespace-nowrap touch-manipulation">
                Read Blog
              </Link>
            </div>

            <div className="card text-center hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Payment Options</h3>
              <p className="text-gray-600 mb-6">
                Convenient and secure payment methods for property owners and residents.
              </p>
              <Link to="/payment-options" className="btn-primary">
                View Options
              </Link>
            </div>

            <div className="card text-center hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">📞</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
              <p className="text-gray-600 mb-6">
                Get in touch with our property management experts for personalized assistance.
              </p>
              <Link to="/contact" className="btn-secondary">
                Contact Us
              </Link>
            </div>

            <div className="card text-center hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">📍</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Find Our Offices</h3>
              <p className="text-gray-600 mb-6">
                Locate our Chicago and Glenview offices and get directions for visits.
              </p>
              <Link to="/locate-us" className="bg-accent-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-accent-600 transition-colors duration-200 inline-flex items-center justify-center text-center min-h-[48px] whitespace-nowrap touch-manipulation">
                Find Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section-padding bg-gradient-primary text-white">
        <div className="container-max text-center">
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-white mb-4">Explore Our Services & Areas</h3>
            <div className="flex flex-wrap justify-center gap-6 mb-6">
              <Link to="/services" className="text-blue-200 hover:text-white underline">
                View All Services
              </Link>
              <Link to="/service-areas" className="text-blue-200 hover:text-white underline">
                Browse Service Areas
              </Link>
              <Link to="/blog" className="text-blue-200 hover:text-white underline">
                Read Our Blog
              </Link>
            </div>
          </div>
          <h2 className="heading-2 mb-4 text-white">Need More Information?</h2>
          <p className="body-large mb-8 text-blue-100 max-w-2xl mx-auto">
            Contact our property management experts for personalized guidance 
            and answers to your specific questions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-secondary text-lg px-8 py-4">
              Contact Us
            </Link>
            <a href="tel:224-647-5621" className="btn-outline border-white text-white hover:bg-white hover:text-primary-500 text-lg px-8 py-4">
              Call (224) 647-5621
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Resources