import React from 'react'
import { Link } from 'react-router-dom'
import CanonicalLink from '../components/CanonicalLink'
import { serviceAreas } from '../data/serviceAreas'

const ServiceAreas: React.FC = () => {
  return (
    <div>
      <CanonicalLink href="https://www.manage369.com/service-areas" />
      
      {/* Local Business Schema for Service Areas Page */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Manage369 - Chicago Property Management",
          "description": "Professional property management services throughout Chicago and suburbs. Condominium management, townhome management, and HOA management.",
          "url": "https://manage369.com/service-areas",
          "telephone": "+1-224-647-5621",
          "email": "service@manage369.com",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "1400 Patriot Boulevard 357",
            "addressLocality": "Glenview",
            "addressRegion": "IL",
            "postalCode": "60026",
            "addressCountry": "US"
          },
          "areaServed": serviceAreas.map(area => ({
            "@type": "City",
            "name": area.name,
            "addressRegion": "IL"
          }))
        })}
      </script>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-center mb-8">
          Property Management Across Chicago & North Shore Communities
        </h1>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Choose your community below to view tailored property management services from Manage369.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {serviceAreas.map((area) => (
            <Link
              key={area.slug}
              to={`/property-management-${area.slug}`}
              className="block border border-gray-200 rounded-xl p-6 text-center shadow-sm hover:shadow-md hover:border-yellow-500 hover:bg-gray-50 transition duration-200"
            >
              <h3 className="text-lg font-semibold text-gray-900">{area.name}</h3>
              <p className="text-sm text-gray-500">{area.region}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ServiceAreas