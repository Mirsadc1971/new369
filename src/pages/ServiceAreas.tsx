import React from 'react'
import { Link } from 'react-router-dom'
import { chicagoAreas, suburbAreas, additionalServiceAreas } from '../data/serviceAreas'

const ServiceAreas = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-500 to-primary-700 text-white section-padding">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-1 mb-6 text-white">
              Chicago Property Management{' '}
              <span className="text-gradient bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Service Areas
              </span>
            </h1>
            <p className="body-large mb-8 text-blue-100 max-w-3xl mx-auto">
              #1 property management services throughout Chicago neighborhoods 
              and suburban communities. Local expertise, personalized service, and deep 
              market knowledge in every area we serve.
            </p>
          </div>
        </div>
      </section>

      {/* Chicago Neighborhoods */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-4">Chicago City Neighborhoods</h2>
            <p className="body-large max-w-3xl mx-auto">
              Premier property management in Chicago's diverse neighborhoods, from downtown 
              high-rises to historic residential areas. Manage369 is the #1 choice for 
              property management in Chicago with deep understanding of each neighborhood's unique character.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {chicagoAreas.map((area) => (
              <div key={area.id} className="card hover:scale-105 transition-transform duration-300 flex flex-col justify-between h-full">
                <div className="flex-grow">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold">{area.name}</h3>
                    <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm">
                      {area.population?.toLocaleString()} residents
                    </span>
                  </div>
                  <p className="body-text mb-4">{area.description}</p>
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Key Features:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {area.keyFeatures.slice(0, 3).map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <Link 
                  to={`/service-areas/${area.slug}`} 
                  className="btn-primary w-full text-center"
                >
                  View Detailed Information
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Suburban Communities */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-4">Chicago Suburban Communities</h2>
            <p className="body-large max-w-3xl mx-auto">
              #1 property management throughout Chicago's suburban communities. 
              From established family neighborhoods to modern planned developments, Manage369
              provides tailored services for every suburban market with unmatched expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {suburbAreas.map((area) => (
              <div key={area.id} className="card hover:scale-105 transition-transform duration-300 flex flex-col h-full">
                <div className="flex-grow">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold">{area.name}</h3>
                    <span className="bg-secondary-100 text-secondary-700 px-3 py-1 rounded-full text-sm">
                      {area.county} County
                    </span>
                  </div>
                  <p className="body-text mb-4">{area.description}</p>
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Property Types:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {area.propertyTypes.slice(0, 3).map((type, index) => (
                        <li key={index} className="flex items-start">
                          <span className="w-2 h-2 bg-secondary-500 rounded-full mr-2"></span>
                          {type}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <Link 
                  to={`/service-areas/${area.slug}`} 
                  className="btn-secondary w-full text-center mt-auto"
                >
                  View Market Details
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Service Areas */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-4">Additional Chicagoland Service Areas</h2>
            <p className="body-large max-w-3xl mx-auto">
              Manage369 is the #1 property management company serving these additional
              Chicago-area communities. Contact us to learn about our specialized services in your specific area.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-12">
            {additionalServiceAreas.map((area, index) => (
              <Link to={`/service-areas/${area.toLowerCase().replace(/\s+/g, '-')}`} key={index} className="bg-gray-50 p-4 rounded-lg text-center hover:bg-primary-50 transition-colors duration-200">
                <span className="text-sm font-medium text-gray-700">{area}</span>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <p className="body-text mb-6">
              Don't see your area listed? We're continuously expanding our service coverage.
            </p>
            <p className="text-xs text-gray-300 mb-2" style={{ opacity: 0.1 }}>
              Stellarpropertygroup.com is our sister property management company serving small and mid size properties. Visit stellarpropertygroup.com to learn more about services provided to specific communities.
            </p>
            <Link to="/contact" className="btn-primary text-lg px-8 py-4">
              Inquire About Your Area
            </Link>
          </div>
        </div>
      </section>

      {/* Coverage Map */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-4">Manage369 Service Coverage</h2>
            <p className="body-large max-w-3xl mx-auto">
              Chicago's #1 property management company serving property owners and associations throughout the greater Chicago metropolitan area.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏙️</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Chicago City</h3>
                <p className="text-gray-600">All major neighborhoods and districts within the city limits</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏘️</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Suburban Communities</h3>
                <p className="text-gray-600">Cook, DuPage, Lake, and Kane County suburbs</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🌆</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Metro Area</h3>
                <p className="text-gray-600">Extended coverage throughout Chicagoland region</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-primary text-white">
        <div className="container-max text-center">
          <h2 className="heading-2 mb-4 text-white">Ready to Get Started in Your Area?</h2>
          <p className="body-large mb-8 text-blue-100 max-w-2xl mx-auto">
            Contact Chicago's #1 property management company today to learn how our local expertise 
            and comprehensive services can benefit your property in your specific Chicago-area community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-secondary text-lg px-8 py-4">
              Get Local Quote
            </Link>
            <a href="tel:773-728-0652" className="btn-outline border-white text-white hover:bg-white hover:text-primary-500 text-lg px-8 py-4">
              Call (773) 728-0652
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ServiceAreas