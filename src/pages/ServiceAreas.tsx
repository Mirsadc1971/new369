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
                Chicago Property Management - City Neighborhoods
              </h1>
              <p className="body-large mb-8 text-blue-100 max-w-3xl mx-auto">
                Premier Chicago property management service across Chicago's diverse neighborhoods, 
                from downtown high-rises to residential communities. Manage369 is Chicago's leading 
                property management company with deep understanding of each Chicago 
                neighborhood's unique character.
              </p>
            </div>
          </div>
        </section>

        {/* Chicago City Neighborhoods */}
        <section className="section-padding bg-white">
          <div className="container-max">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              {/* Downtown Chicago */}
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-gray-900">Downtown Chicago</h3>
                  <span className="text-sm text-blue-600 bg-blue-50 px-2 py-1 rounded">Cook County</span>
                </div>
                <p className="text-gray-600 mb-4">
                  Chicago's central business district with luxury high-rise condominiums, 
                  historic buildings, and world-class amenities. 
                  Manage369 is the #1 choice for property 
                  management in downtown Chicago.
                </p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Key Areas:</h4>
                  <div className="text-sm text-gray-600 space-y-1">
                    <div>The Loop • Financial District</div>
                    <div>City Hall • Grant Park • Millennium Park</div>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Premium building stock from vintage to modern</li>
                    <li>• Extensive amenities and concierge services</li>
                    <li>• High-rise residential towers</li>
                    <li>• Luxury condo developments</li>
                  </ul>
                </div>

                <Link 
                  to="/property-management-downtown-chicago"
                  className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center block"
                >
                  View Downtown Chicago Property Management
                </Link>
              </div>

              {/* Lincoln Park */}
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-gray-900">Lincoln Park</h3>
                  <span className="text-sm text-blue-600 bg-blue-50 px-2 py-1 rounded">Cook County</span>
                </div>
                <p className="text-gray-600 mb-4">
                  Historic lakefront neighborhood with tree-lined 
                  streets, Victorian architecture, and diverse 
                  housing options. Manage369 is the premier 
                  property management company in Lincoln 
                  Park.
                </p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Key Areas:</h4>
                  <div className="text-sm text-gray-600 space-y-1">
                    <div>DePaul • Lincoln Park Zoo Area</div>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Victorian housing stock from vintage to modern</li>
                    <li>• Historic brownstones and vintage buildings</li>
                    <li>• Tree-lined residential streets</li>
                    <li>• Lakefront proximity</li>
                  </ul>
                </div>

                <Link 
                  to="/property-management-lincoln-park"
                  className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center block"
                >
                  View Lincoln Park Property Management
                </Link>
              </div>

              {/* Lakeview */}
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-gray-900">Lakeview</h3>
                  <span className="text-sm text-blue-600 bg-blue-50 px-2 py-1 rounded">Cook County</span>
                </div>
                <p className="text-gray-600 mb-4">
                  Vibrant lakefront neighborhood with diverse 
                  entertainment districts, and lakefront access. 
                  Manage369 is the #1 choice for property 
                  management in Lakeview.
                </p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Key Areas:</h4>
                  <div className="text-sm text-gray-600 space-y-1">
                    <div>Wrigleyville • Boystown • Southport Corridor</div>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Diverse housing stock from vintage to modern</li>
                    <li>• Entertainment and nightlife districts</li>
                    <li>• Lakefront proximity</li>
                  </ul>
                </div>

                <Link 
                  to="/property-management-lakeview"
                  className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center block"
                >
                  View Lakeview Property Management
                </Link>
              </div>

              {/* Wicker Park */}
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-gray-900">Wicker Park</h3>
                  <span className="text-sm text-blue-600 bg-blue-50 px-2 py-1 rounded">Cook County</span>
                </div>
                <p className="text-gray-600 mb-4">
                  Trendy neighborhood known for its arts scene, 
                  boutique shopping, and eclectic dining and 
                  nightlife. Manage369 provides property 
                  management in Wicker Park.
                </p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Historic and converted loft buildings</li>
                    <li>• Trendy dining and shopping districts</li>
                    <li>• Artistic community atmosphere</li>
                  </ul>
                </div>

                <Link 
                  to="/property-management-wicker-park"
                  className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center block"
                >
                  View Wicker Park Property Management
                </Link>
              </div>

              {/* Logan Square */}
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-gray-900">Logan Square</h3>
                  <span className="text-sm text-blue-600 bg-blue-50 px-2 py-1 rounded">Cook County</span>
                </div>
                <p className="text-gray-600 mb-4">
                  Dynamic neighborhood with beautiful 
                  boulevards, Manage369 is the leading property 
                  management company in Logan Square.
                </p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Historic and new construction</li>
                    <li>• Diverse and new buildings</li>
                    <li>• Dining and arts culture</li>
                  </ul>
                </div>

                <Link 
                  to="/property-management-logan-square"
                  className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center block"
                >
                  View Logan Square Property Management
                </Link>
              </div>

              {/* Hyde Park */}
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-gray-900">Hyde Park</h3>
                  <span className="text-sm text-blue-600 bg-blue-50 px-2 py-1 rounded">Cook County</span>
                </div>
                <p className="text-gray-600 mb-4">
                  Historic lakefront neighborhood home to the 
                  University of Chicago. Manage369 offers 
                  specialized property management in Hyde 
                  Park.
                </p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Historic architecture</li>
                    <li>• University community</li>
                    <li>• Lakefront parks and beaches</li>
                  </ul>
                </div>

                <Link 
                  to="/property-management-hyde-park"
                  className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center block"
                >
                  View Hyde Park Property Management
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Suburban Communities Section */}
        <section className="section-padding bg-gray-50">
          <div className="container-max">
            <div className="text-center mb-12">
              <h2 className="heading-2 mb-4">Chicago Property Management - Suburban Communities</h2>
              <p className="body-large max-w-3xl mx-auto">
                Leading Chicago property management service throughout Chicago's suburban 
                communities, managing <strong>50+ properties with over 2450+ doors</strong> from established family 
                neighborhoods to modern developments. Manage369 provides tailored property 
                management service to meet each community's unique needs, with proven expertise 
                managing <strong>50+ properties with over 2450+ doors since 2007</strong>.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              {/* Arlington Heights */}
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-gray-900">Arlington Heights</h3>
                  <span className="text-sm text-green-600 bg-green-50 px-2 py-1 rounded">Cook County</span>
                </div>
                <p className="text-gray-600 mb-4">
                  Established suburban community with 
                  excellent transportation, shopping, and 
                  amenities. Manage369 provides 
                  comprehensive property management in 
                  Arlington Heights.
                </p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Property Types:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Established subdivisions</li>
                    <li>• Condominium complexes</li>
                    <li>• Townhome developments</li>
                  </ul>
                </div>

                <Link 
                  to="/property-management-arlington-heights"
                  className="w-full bg-green-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-green-700 transition-colors text-center block"
                >
                  View Market Details
                </Link>
              </div>

              {/* Palatine */}
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-gray-900">Palatine</h3>
                  <span className="text-sm text-green-600 bg-green-50 px-2 py-1 rounded">Cook County</span>
                </div>
                <p className="text-gray-600 mb-4">
                  Northwest suburban community with diverse 
                  housing stock and strong local economy. 
                  Manage369 is the premier property 
                  management company in Palatine.
                </p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Property Types:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Single-family developments</li>
                    <li>• Condominium communities</li>
                  </ul>
                </div>

                <Link 
                  to="/property-management-palatine"
                  className="w-full bg-green-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-green-700 transition-colors text-center block"
                >
                  View Market Details
                </Link>
              </div>

              {/* Evanston */}
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-gray-900">Evanston</h3>
                  <span className="text-sm text-green-600 bg-green-50 px-2 py-1 rounded">Cook County</span>
                </div>
                <p className="text-gray-600 mb-4">
                  University town with diverse housing from 
                  Northwestern University and Lake Michigan. 
                  Manage369 offers specialized property 
                  management in Evanston.
                </p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Property Types:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Historic and modern developments</li>
                    <li>• High-rise condominiums</li>
                    <li>• Lakefront communities</li>
                  </ul>
                </div>

                <Link 
                  to="/property-management-evanston"
                  className="w-full bg-green-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-green-700 transition-colors text-center block"
                >
                  View Market Details
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Service Areas */}
        <section className="section-padding bg-white">
          <div className="container-max">
            <div className="text-center mb-12">
              <h2 className="heading-2 mb-4">Additional Chicagoland Service Areas</h2>
              <p className="body-large max-w-3xl mx-auto">
                Manage369 is Chicago's premier property management service company serving those 
                additional Chicago-area communities. Contact us to learn about our specialized property 
                management service in your specific area.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default ServiceAreas