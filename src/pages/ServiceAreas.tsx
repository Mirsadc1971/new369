import React from 'react'
import { Link } from 'react-router-dom'
import CanonicalLink from '../components/CanonicalLink'

const ServiceAreas: React.FC = () => {
  return (
    <div>
      <CanonicalLink href="https://www.manage369.com/service-areas" />
      
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary-500 to-primary-700 text-white section-padding">
          <div className="container-max">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="heading-1 mb-6 text-white">
                Chicago Property Management Service Areas
              </h1>
              <p className="body-large mb-8 text-blue-100 max-w-3xl mx-auto">
                Premier property management services across Chicago's diverse neighborhoods and suburban communities. 
                Manage369 serves 100+ communities throughout the greater Chicago area.
              </p>
            </div>
          </div>
        </section>

        {/* Chicago Neighborhoods */}
        <section className="section-padding bg-white">
          <div className="container-max">
            <div className="text-center mb-12">
              <h2 className="heading-2 mb-4">Chicago Neighborhoods</h2>
              <p className="body-large max-w-3xl mx-auto">
                Professional property management throughout Chicago's most desirable neighborhoods
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              {/* Downtown Chicago */}
              <Link to="/property-management-downtown-chicago" className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-gray-900">Downtown Chicago</h3>
                  <span className="text-sm text-blue-600 bg-blue-50 px-2 py-1 rounded">Cook County</span>
                </div>
                <p className="text-gray-600 mb-4 text-sm">
                  Chicago's central business district with luxury high-rise condominiums and world-class amenities.
                </p>
                <div className="text-primary-500 font-medium text-sm hover:underline">
                  View Details →
                </div>
              </Link>

              {/* Lincoln Park */}
              <Link to="/property-management-lincoln-park" className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-gray-900">Lincoln Park</h3>
                  <span className="text-sm text-blue-600 bg-blue-50 px-2 py-1 rounded">Cook County</span>
                </div>
                <p className="text-gray-600 mb-4 text-sm">
                  Historic lakefront neighborhood with tree-lined streets and diverse housing options.
                </p>
                <div className="text-primary-500 font-medium text-sm hover:underline">
                  View Details →
                </div>
              </Link>

              {/* Lakeview */}
              <Link to="/property-management-lakeview" className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-gray-900">Lakeview</h3>
                  <span className="text-sm text-blue-600 bg-blue-50 px-2 py-1 rounded">Cook County</span>
                </div>
                <p className="text-gray-600 mb-4 text-sm">
                  Vibrant lakefront neighborhood with diverse entertainment districts and lakefront access.
                </p>
                <div className="text-primary-500 font-medium text-sm hover:underline">
                  View Details →
                </div>
              </Link>

              {/* Wicker Park */}
              <Link to="/property-management-wicker-park" className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-gray-900">Wicker Park</h3>
                  <span className="text-sm text-blue-600 bg-blue-50 px-2 py-1 rounded">Cook County</span>
                </div>
                <p className="text-gray-600 mb-4 text-sm">
                  Trendy neighborhood known for its arts scene, boutique shopping, and eclectic dining.
                </p>
                <div className="text-primary-500 font-medium text-sm hover:underline">
                  View Details →
                </div>
              </Link>

              {/* Logan Square */}
              <Link to="/property-management-logan-square" className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-gray-900">Logan Square</h3>
                  <span className="text-sm text-blue-600 bg-blue-50 px-2 py-1 rounded">Cook County</span>
                </div>
                <p className="text-gray-600 mb-4 text-sm">
                  Dynamic neighborhood with beautiful boulevards and vibrant dining scene.
                </p>
                <div className="text-primary-500 font-medium text-sm hover:underline">
                  View Details →
                </div>
              </Link>

              {/* Hyde Park */}
              <Link to="/property-management-hyde-park" className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-gray-900">Hyde Park</h3>
                  <span className="text-sm text-blue-600 bg-blue-50 px-2 py-1 rounded">Cook County</span>
                </div>
                <p className="text-gray-600 mb-4 text-sm">
                  Historic lakefront neighborhood home to the University of Chicago.
                </p>
                <div className="text-primary-500 font-medium text-sm hover:underline">
                  View Details →
                </div>
              </Link>

            </div>
          </div>
        </section>

        {/* Suburban Communities */}
        <section className="section-padding bg-gray-50">
          <div className="container-max">
            <div className="text-center mb-12">
              <h2 className="heading-2 mb-4">Suburban Communities</h2>
              <p className="body-large max-w-3xl mx-auto">
                Professional property management throughout Chicago's premier suburban communities
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              {/* Arlington Heights */}
              <Link to="/property-management-arlington-heights" className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-gray-900">Arlington Heights</h3>
                  <span className="text-sm text-green-600 bg-green-50 px-2 py-1 rounded">Cook County</span>
                </div>
                <p className="text-gray-600 mb-4 text-sm">
                  Established suburban community with excellent transportation and amenities.
                </p>
                <div className="text-primary-500 font-medium text-sm hover:underline">
                  View Details →
                </div>
              </Link>

              {/* Palatine */}
              <Link to="/property-management-palatine" className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-gray-900">Palatine</h3>
                  <span className="text-sm text-green-600 bg-green-50 px-2 py-1 rounded">Cook County</span>
                </div>
                <p className="text-gray-600 mb-4 text-sm">
                  Northwest suburban community with diverse housing stock and strong economy.
                </p>
                <div className="text-primary-500 font-medium text-sm hover:underline">
                  View Details →
                </div>
              </Link>

              {/* Evanston */}
              <Link to="/property-management-evanston" className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-gray-900">Evanston</h3>
                  <span className="text-sm text-green-600 bg-green-50 px-2 py-1 rounded">Cook County</span>
                </div>
                <p className="text-gray-600 mb-4 text-sm">
                  University town with diverse housing near Northwestern and Lake Michigan.
                </p>
                <div className="text-primary-500 font-medium text-sm hover:underline">
                  View Details →
                </div>
              </Link>

              {/* Glenview */}
              <Link to="/property-management-glenview" className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-gray-900">Glenview</h3>
                  <span className="text-sm text-green-600 bg-green-50 px-2 py-1 rounded">Cook County</span>
                </div>
                <p className="text-gray-600 mb-4 text-sm">
                  Premier North Shore community with excellent schools and amenities.
                </p>
                <div className="text-primary-500 font-medium text-sm hover:underline">
                  View Details →
                </div>
              </Link>

              {/* Northbrook */}
              <Link to="/property-management-northbrook" className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-gray-900">Northbrook</h3>
                  <span className="text-sm text-green-600 bg-green-50 px-2 py-1 rounded">Cook County</span>
                </div>
                <p className="text-gray-600 mb-4 text-sm">
                  Upscale suburban community with top-rated schools and parks.
                </p>
                <div className="text-primary-500 font-medium text-sm hover:underline">
                  View Details →
                </div>
              </Link>

              {/* Wilmette */}
              <Link to="/property-management-wilmette" className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-gray-900">Wilmette</h3>
                  <span className="text-sm text-green-600 bg-green-50 px-2 py-1 rounded">Cook County</span>
                </div>
                <p className="text-gray-600 mb-4 text-sm">
                  Prestigious North Shore village with lakefront access and historic charm.
                </p>
                <div className="text-primary-500 font-medium text-sm hover:underline">
                  View Details →
                </div>
              </Link>

            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-gradient-primary text-white">
          <div className="container-max text-center">
            <h2 className="heading-2 mb-4 text-white">Ready to Get Started?</h2>
            <p className="body-large mb-8 text-blue-100 max-w-2xl mx-auto">
              Contact Chicago's premier property management company to learn how 
              we can help your property thrive in your specific community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-secondary text-lg px-8 py-4">
                Get Free Quote
              </Link>
              <a href="tel:847-834-4131" className="btn-outline border-white text-white hover:bg-white hover:text-primary-500 text-lg px-8 py-4">
                Call (224) 647-5621
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default ServiceAreas