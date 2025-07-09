import React from 'react'
import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ServiceArea, chicagoAreas, suburbAreas, additionalServiceAreas } from '../data/serviceAreas'

const ServiceAreaDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  
  useEffect(() => {
    // Ensure scroll to top when component mounts
    window.scrollTo(0, 0)
    
    // Additional scroll to top after content loads
    const timer = setTimeout(() => {
      window.scrollTo(0, 0)
    }, 200)

    return () => clearTimeout(timer)
  }, [slug])
  
  // Find the area in our main service areas
  const allMainAreas = [...chicagoAreas, ...suburbAreas];
  const area = allMainAreas.find(area => area.slug === slug);
  
  // Check if it's an additional area
  const isAdditionalArea = !area && additionalServiceAreas.some(
    areaName => areaName.toLowerCase().replace(/\s+/g, '-') === slug
  );
  
  // Get the name of the additional area
  const additionalAreaName = isAdditionalArea ? 
    additionalServiceAreas.find(
      areaName => areaName.toLowerCase().replace(/\s+/g, '-') === slug
    ) : '';

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-500 to-primary-700 text-white section-padding">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center space-x-2 mb-4 text-blue-200">
              <Link to="/service-areas" className="hover:text-white transition-colors">Service Areas</Link>
              <span>›</span>
              <span>{area ? area.name : additionalAreaName}</span>
            </div>
            <h1 className="heading-1 mb-6 text-white">
              Property Management in{' '}
              <span className="text-gradient bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                {area ? area.name : additionalAreaName}
              </span>
            </h1>
            <p className="body-large mb-8 text-blue-100">
              {area ? area.description : `Manage369 is Chicago's #1 property management company serving ${additionalAreaName}. Our local expertise and comprehensive services are specifically tailored to meet the unique needs of ${additionalAreaName} properties.`}
            </p>
            {area && (
              <div className="flex flex-wrap gap-4">
                <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm">
                  {area.county} County
                </span>
                {area.population && (
                  <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm">
                    {area.population.toLocaleString()} Residents
                  </span>
                )}
                <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm capitalize">
                  {area.type}
                </span>
              </div>
            )}
          </div>
        </div>
      </section>

      {area ? (
        <>
          {/* Key Features */}
          <section className="section-padding bg-white">
            <div className="container-max">
              <h2 className="heading-2 mb-8">Key Features of {area.name}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {area.keyFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="body-text">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Property Types */}
          <section className="section-padding bg-gray-50">
            <div className="container-max">
              <h2 className="heading-2 mb-8">Property Types We Manage</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Common Property Types in {area.name}</h3>
                  <ul className="space-y-3">
                    {area.propertyTypes.map((type, index) => (
                      <li key={index} className="flex items-center space-x-3">
                        <span className="w-2 h-2 bg-secondary-500 rounded-full"></span>
                        <span className="body-text">{type}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h3 className="text-xl font-semibold mb-4">Our Management Services Include:</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Financial management and budgeting</li>
                    <li>• Maintenance coordination and oversight</li>
                    <li>• Board support and meeting management</li>
                    <li>• Vendor management and contracts</li>
                    <li>• Compliance and regulatory adherence</li>
                    <li>• Emergency response coordination</li>
                    <li>• Insurance and risk management</li>
                    <li>• Communication and resident relations</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Market Insights */}
          <section className="section-padding bg-white">
            <div className="container-max">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                  <h2 className="heading-2 mb-6">Market Insights for {area.name}</h2>
                  <div className="space-y-4">
                    {area.marketInsights.map((insight, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-secondary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-white text-xs">📊</span>
                        </div>
                        <span className="body-text">{insight}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-6">Local Regulations & Compliance</h3>
                  <div className="space-y-4">
                    {area.localRegulations.map((regulation, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-accent-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-white text-xs">⚖️</span>
                        </div>
                        <span className="body-text">{regulation}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Challenges & Solutions */}
          <section className="section-padding bg-gray-50">
            <div className="container-max">
              <h2 className="heading-2 mb-12 text-center">Challenges & Our Solutions</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-xl font-semibold mb-6 text-accent-600">Common Management Challenges</h3>
                  <div className="space-y-4">
                    {area.managementChallenges.map((challenge, index) => (
                      <div key={index} className="bg-red-50 p-4 rounded-lg border-l-4 border-accent-500">
                        <span className="body-text text-gray-700">{challenge}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-6 text-secondary-600">Our Proven Solutions</h3>
                  <div className="space-y-4">
                    {area.solutions.map((solution, index) => (
                      <div key={index} className="bg-green-50 p-4 rounded-lg border-l-4 border-secondary-500">
                        <span className="body-text text-gray-700">{solution}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      ) : (
        <>
          {/* Generic content for additional areas */}
          <section className="section-padding bg-white">
            <div className="container-max">
              <h2 className="heading-2 mb-8">Property Management in {additionalAreaName}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <p className="body-text mb-6">
                    Manage369 is proud to be the #1 property management company serving {additionalAreaName}. 
                    With our deep local knowledge and specialized expertise, we provide comprehensive 
                    management services tailored to the unique needs of properties in this area.
                  </p>
                  <p className="body-text mb-6">
                    Our team understands the specific challenges and opportunities of managing properties 
                    in {additionalAreaName}, from local regulations to market trends and community expectations.
                  </p>
                  <div className="bg-gray-50 p-6 rounded-xl mt-8">
                    <h3 className="text-xl font-semibold mb-4">Our Services in {additionalAreaName}</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-primary-500 rounded-full mr-3 mt-2"></span>
                        <span>Condominium Association Management</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-primary-500 rounded-full mr-3 mt-2"></span>
                        <span>Townhome Community Management</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-primary-500 rounded-full mr-3 mt-2"></span>
                        <span>HOA Management</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-primary-500 rounded-full mr-3 mt-2"></span>
                        <span>Financial Management & Reporting</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-primary-500 rounded-full mr-3 mt-2"></span>
                        <span>Maintenance Coordination</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-primary-500 rounded-full mr-3 mt-2"></span>
                        <span>24/7 Emergency Response</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="bg-gray-50 p-8 rounded-xl">
                  <h3 className="text-xl font-semibold mb-6">Why Choose Manage369 in {additionalAreaName}?</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white text-sm">✓</span>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Local Expertise</h4>
                        <p className="text-sm text-gray-600">Deep understanding of {additionalAreaName}'s property market, regulations, and community needs</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white text-sm">✓</span>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Comprehensive Services</h4>
                        <p className="text-sm text-gray-600">Full-service management from financial oversight to maintenance coordination</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white text-sm">✓</span>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Responsive Support</h4>
                        <p className="text-sm text-gray-600">24/7 emergency response and dedicated property management team</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white text-sm">✓</span>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Technology-Driven</h4>
                        <p className="text-sm text-gray-600">Modern software solutions for efficient communication and transparency</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white text-sm">✓</span>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Proven Track Record</h4>
                        <p className="text-sm text-gray-600">Trusted by property owners throughout the Chicago area</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      {/* Local Expertise */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">Why Choose Manage369 in {area ? area.name : additionalAreaName}?</h2>
            <p className="body-large max-w-3xl mx-auto">
              Our deep local knowledge and community connections make us the ideal 
              property management partner for {area ? area.name : additionalAreaName} properties.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏠</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Local Market Knowledge</h3>
              <p className="text-sm text-gray-600">
                In-depth understanding of {area ? area.name : additionalAreaName}'s property market, pricing trends, and resident preferences.
              </p>
            </div>

            <div className="card text-center">
              <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Community Connections</h3>
              <p className="text-sm text-gray-600">
                Established relationships with local vendors, contractors, and service providers in {area ? area.name : additionalAreaName}.
              </p>
            </div>

            <div className="card text-center">
              <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Rapid Response</h3>
              <p className="text-sm text-gray-600">
                Quick response times for emergencies and maintenance requests throughout {area ? area.name : additionalAreaName}.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-primary text-white">
        <div className="container-max text-center">
          <h2 className="heading-2 mb-4 text-white">Ready to Partner with Chicago's #1 Property Management Company?</h2>
          <p className="body-large mb-8 text-blue-100 max-w-2xl mx-auto">
            Contact our {area ? area.name : additionalAreaName} property management specialists today to learn how 
            Manage369 can help your property thrive in this unique market.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-secondary text-lg px-8 py-4">
              Get {area ? area.name : additionalAreaName} Quote
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


export default ServiceAreaDetail