import React from 'react'
import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import CanonicalLink from '../components/CanonicalLink'
import { serviceAreas } from '../data/serviceAreas'

const ServiceAreaDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  
  // Find the area in our service areas
  const area = serviceAreas.find(area => area.slug === slug);
  
  // Canonical URL with new structure
  const canonicalUrl = `https://www.manage369.com/property-management-${slug}`;
  
  useEffect(() => {
    // If no area found, redirect to service areas page
    if (!area) {
      window.location.href = '/service-areas';
      return;
    }
    
    // Add LocalBusiness schema for this specific service area
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.id = `schema-${slug}`
    script.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": `https://manage369.com/property-management-${slug}`,
      "name": `Manage369 - ${area.name} Property Management`,
      "description": `Professional property management services in ${area.name}, Illinois. Specialized condominium management, townhome management, and HOA management services by Chicago's premier property management company.`,
      "url": `https://manage369.com/property-management-${slug}`,
      "telephone": "+1-224-647-5621",
      "email": "service@manage369.com",
      "image": "https://manage369.com/manage369-logo.png",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "1400 Patriot Boulevard 357",
        "addressLocality": "Glenview",
        "addressRegion": "IL",
        "postalCode": "60026",
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 42.080154,
        "longitude": -87.81858
      },
      "areaServed": {
        "@type": "Place",
        "name": area.name,
        "address": {
          "addressRegion": "IL",
          "addressCountry": "US"
        }
      },
      "knowsAbout": [
        `${area.name} Property Management`,
        `${area.name} Condominium Management`,
        `${area.name} HOA Management`,
        `${area.name} Townhome Management`,
        `Property Management in ${area.name}`,
        `${area.name} Real Estate Management`
      ],
      "priceRange": "$$",
      "openingHours": [
        "Mo-Fr 09:00-17:00",
        "Sa-Su 00:00-23:59"
      ],
      "paymentAccepted": [
        "Cash",
        "Check", 
        "Credit Card",
        "Bank Transfer",
        "Online Payment"
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": `${area.name} Property Management Services`,
        "itemListElement": [
          {
            "@type": "Offer",
            "name": `${area.name} Condominium Management`,
            "itemOffered": {
              "@type": "Service",
              "name": `${area.name} Condominium Management`,
              "description": `Professional condominium association management services in ${area.name}, Illinois`,
              "provider": {
                "@type": "Organization",
                "name": "Manage369"
              },
              "areaServed": area.name
            },
            "availability": "InStock",
            "priceRange": "$$"
          },
          {
            "@type": "Offer",
            "name": `${area.name} HOA Management`,
            "itemOffered": {
              "@type": "Service",
              "name": `${area.name} HOA Management`, 
              "description": `Comprehensive homeowners association management services in ${area.name}, Illinois`,
              "provider": {
                "@type": "Organization", 
                "name": "Manage369"
              },
              "areaServed": area.name
            },
            "availability": "InStock",
            "priceRange": "$$"
          },
          {
            "@type": "Offer",
            "name": `${area.name} Townhome Management`,
            "itemOffered": {
              "@type": "Service",
              "name": `${area.name} Townhome Management`,
              "description": `Specialized townhome community management services in ${area.name}, Illinois`,
              "provider": {
                "@type": "Organization",
                "name": "Manage369"
              },
              "areaServed": area.name
            },
            "availability": "InStock", 
            "priceRange": "$$"
          }
        ]
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "127",
        "bestRating": "5",
        "worstRating": "1"
      },
      "sameAs": [
        "https://manage369.com",
        "https://www.google.com/maps/place/Manage369"
      ],
      "founder": {
        "@type": "Person",
        "name": "Manage369 Team"
      },
      "foundingDate": "2007",
      "slogan": `${area.name}'s Premier Property Management Company`,
      "keywords": `${area.name} property management, ${area.name} condo management, ${area.name} HOA management, property management ${area.name}, ${area.name} property managers`
    })
    document.head.appendChild(script)

    // Ensure scroll to top when component mounts
    window.scrollTo(0, 0)
    
    // Additional scroll to top after content loads
    const scrollTimer = setTimeout(() => {
      window.scrollTo(0, 0)
    }, 200)

    return () => {
      clearTimeout(scrollTimer)
      // Cleanup schema script
      if (document.head.contains(script)) {
        document.head.removeChild(script)
      }
    }
  }, [slug, area])

  if (!area) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Redirecting...</h1>
          <p className="text-gray-600">Taking you to our service areas page</p>
        </div>
      </div>
    )
  }

  // Get nearby communities (same region)
  const nearbyAreas = serviceAreas
    .filter(a => a.region === area.region && a.id !== area.id)
    .slice(0, 6);

  return (
    <div>
      <CanonicalLink href={canonicalUrl} />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-500 to-primary-700 text-white section-padding">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center space-x-2 mb-4 text-blue-200">
              <Link to="/service-areas" className="hover:text-white transition-colors">Chicago Service Areas</Link>
              <span>›</span>
              <span>{area.name}</span>
            </div>
            <h1 className="heading-1 mb-6 text-white">
              Property Management in{' '}
              <span className="text-gradient bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                {area.name}, IL
              </span>
              {' '}| Manage369
            </h1>
            <p className="body-large mb-8 text-blue-100">
              {area.description}
            </p>
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
          </div>
        </div>
      </section>

      {/* Mini Service Cards */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">Property Management Services in {area.name}</h2>
            <p className="body-large max-w-3xl mx-auto">
              Choose the type of property management service you need in {area.name}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Link to="/services/condominium-management" className="card text-center hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🏢</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Condominium Management</h3>
              <p className="text-gray-600 mb-6">
                Professional condo association management services in {area.name}
              </p>
              <span className="btn-primary">Learn More</span>
            </Link>
            
            <Link to="/services/hoa-management" className="card text-center hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">👥</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">HOA Management</h3>
              <p className="text-gray-600 mb-6">
                Expert homeowners association management in {area.name}
              </p>
              <span className="btn-secondary">Learn More</span>
            </Link>
            
            <Link to="/services/townhome-management" className="card text-center hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🏠</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Townhome Management</h3>
              <p className="text-gray-600 mb-6">
                Specialized townhome community management in {area.name}
              </p>
              <span className="bg-accent-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-accent-600 transition-colors duration-200 inline-flex items-center justify-center text-center min-h-[48px] whitespace-nowrap touch-manipulation">Learn More</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <h2 className="heading-2 mb-8">Key Features of {area.name} Property Management</h2>
          <p className="body-large mb-8 text-gray-600">
            As the #1 property management company in {area.name}, Manage369 understands the unique characteristics 
            that make this {area.type} special. Our specialized {area.name} property management services address 
            these key features:
          </p>
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
      <section className="section-padding bg-white">
        <div className="container-max">
          <h2 className="heading-2 mb-8">Property Types We Manage in {area.name}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Common Property Types in {area.name}</h3>
              <p className="text-gray-600 mb-6">
                Manage369 provides specialized property management services for all types of residential 
                properties in {area.name}. As the #1 property management company in {area.name}, we have 
                extensive experience with:
              </p>
              <ul className="space-y-3">
                {area.propertyTypes.map((type, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-secondary-500 rounded-full"></span>
                    <span className="body-text">{type}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4">Our {area.name} Property Management Services Include:</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• <Link to="/services" className="text-primary-500 hover:underline">Financial management and budgeting</Link></li>
                <li>• Maintenance coordination and oversight</li>
                <li>• Board support and meeting management</li>
                <li>• Vendor management and contracts</li>
                <li>• Compliance and regulatory adherence</li>
                <li>• 24/7 emergency response coordination</li>
                <li>• Insurance and risk management</li>
                <li>• Communication and resident relations</li>
                <li>• <Link to="/services/condominium-management" className="text-primary-500 hover:underline">Condominium management</Link> services</li>
                <li>• <Link to="/services/townhome-management" className="text-primary-500 hover:underline">Townhome management</Link> services</li>
                <li>• <Link to="/services/hoa-management" className="text-primary-500 hover:underline">HOA management</Link> services</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Market Insights */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="heading-2 mb-6">{area.name} Property Management Market Insights</h2>
              <p className="text-gray-600 mb-6">
                As Chicago's #1 property management company, Manage369 has deep insights into the 
                {area.name} market. Our expertise helps property owners and associations make informed 
                decisions about their {area.name} properties.
              </p>
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
              <h3 className="text-xl font-semibold mb-6">{area.name} Local Regulations & Compliance</h3>
              <p className="text-gray-600 mb-6">
                Managing properties in {area.name} requires understanding of local regulations and compliance 
                requirements. Manage369's expertise ensures your {area.name} property stays compliant.
              </p>
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
      <section className="section-padding bg-white">
        <div className="container-max">
          <h2 className="heading-2 mb-12 text-center">{area.name} Property Management Challenges & Our Solutions</h2>
          <p className="body-large text-center mb-12 text-gray-600">
            As the #1 property management company in {area.name}, Manage369 has identified and solved 
            the most common property management challenges in this area.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-6 text-accent-600">Common {area.name} Management Challenges</h3>
              <div className="space-y-4">
                {area.managementChallenges.map((challenge, index) => (
                  <div key={index} className="bg-red-50 p-4 rounded-lg border-l-4 border-accent-500">
                    <span className="body-text text-gray-700">{challenge}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-6 text-secondary-600">Our Proven {area.name} Solutions</h3>
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

      {/* Nearby Communities */}
      {nearbyAreas.length > 0 && (
        <section className="section-padding bg-gray-50">
          <div className="container-max">
            <div className="text-center mb-12">
              <h2 className="heading-2 mb-4">Nearby Communities We Serve</h2>
              <p className="body-large max-w-3xl mx-auto">
                Explore other {area.region.toLowerCase()} communities where Manage369 provides 
                professional property management services.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {nearbyAreas.map((nearbyArea) => (
                <Link 
                  key={nearbyArea.id}
                  to={`/property-management-${nearbyArea.slug}`} 
                  className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300 group"
                >
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
                      {nearbyArea.name}
                    </h3>
                    <span className="text-xs text-gray-500 bg-gray-50 px-2 py-1 rounded">
                      {nearbyArea.county} County
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {nearbyArea.description.substring(0, 120)}...
                  </p>
                  <div className="text-primary-500 font-medium text-sm hover:underline group-hover:translate-x-1 transition-transform duration-200">
                    View Details →
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Local Expertise */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">Why Choose Manage369 as Your {area.name} Property Management Company?</h2>
            <p className="body-large max-w-3xl mx-auto">
              Our deep local knowledge and community connections make us the ideal 
              property management partner for {area.name} properties. As Chicago's #1 property management 
              company, we bring unmatched expertise to {area.name}.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏠</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">{area.name} Market Knowledge</h3>
              <p className="text-sm text-gray-600">
                In-depth understanding of {area.name}'s property market, pricing trends, and resident preferences.
              </p>
            </div>

            <div className="card text-center">
              <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">{area.name} Community Connections</h3>
              <p className="text-sm text-gray-600">
                Established relationships with local vendors, contractors, and service providers in {area.name}.
              </p>
            </div>

            <div className="card text-center">
              <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Rapid {area.name} Response</h3>
              <p className="text-sm text-gray-600">
                24/7 emergency response and dedicated support for {area.name} properties.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="body-large max-w-3xl mx-auto">
              Manage369 provides specialized property management services throughout {area.name}, 
              currently managing properties with multiple units in this market. 
              Our expertise ensures your {area.name} property receives professional attention.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-primary text-white">
        <div className="container-max text-center">
          <h2 className="heading-2 mb-4 text-white">Ready to Partner with {area.name}'s #1 Property Management Company?</h2>
          <p className="body-large mb-8 text-blue-100 max-w-2xl mx-auto">
            Contact our {area.name} property management specialists today to learn how 
            Manage369, Chicago's #1 property management company, can help your property thrive in this unique market.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-secondary text-lg px-8 py-4">
              Get {area.name} Quote
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

export default ServiceAreaDetail