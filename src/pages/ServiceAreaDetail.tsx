import React from 'react'
import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import CanonicalLink from '../components/CanonicalLink'
import { ServiceArea, chicagoAreas, suburbAreas, additionalServiceAreas } from '../data/serviceAreas'

const ServiceAreaDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  
  // Canonical URL with new structure
  const canonicalUrl = `https://www.manage369.com/property-management-${slug}`;
  
  useEffect(() => {
    // Add LocalBusiness schema for this specific service area
    let areaName = area ? area.name : additionalAreaName;
    
    // If no area found, redirect to service areas page
    if (!areaName) {
      window.location.href = '/service-areas';
      return;
    }
    
    // Remove any existing schema scripts first
    const existingSchemas = document.querySelectorAll('script[type="application/ld+json"]');
    existingSchemas.forEach(script => {
      if (script.innerHTML.includes(areaName)) {
        script.remove();
      }
    });
    
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.id = `schema-${slug}`
    script.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": `https://manage369.com/property-management-${slug}`,
      "name": `Manage369 - ${areaName} Property Management`,
      "description": `Professional property management services in ${areaName}, Illinois. Specialized condominium management, townhome management, and HOA management services by Chicago's premier property management company.`,
      "url": `https://manage369.com/property-management-${slug}`,
      "telephone": "+1-847-834-4131",
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
        "name": areaName,
        "address": {
          "addressRegion": "IL",
          "addressCountry": "US"
        }
      },
      "knowsAbout": [
        `${areaName} Property Management`,
        `${areaName} Condominium Management`,
        `${areaName} HOA Management`,
        `${areaName} Townhome Management`,
        `Property Management in ${areaName}`,
        `${areaName} Real Estate Management`
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
        "name": `${areaName} Property Management Services`,
        "itemListElement": [
          {
            "@type": "Offer",
            "name": `${areaName} Condominium Management`,
            "itemOffered": {
              "@type": "Service",
              "name": `${areaName} Condominium Management`,
              "description": `Professional condominium association management services in ${areaName}, Illinois`,
              "provider": {
                "@type": "Organization",
                "name": "Manage369"
              },
              "areaServed": areaName
            },
            "availability": "InStock",
            "priceRange": "$$"
          },
          {
            "@type": "Offer",
            "name": `${areaName} HOA Management`,
            "itemOffered": {
              "@type": "Service",
              "name": `${areaName} HOA Management`, 
              "description": `Comprehensive homeowners association management services in ${areaName}, Illinois`,
              "provider": {
                "@type": "Organization", 
                "name": "Manage369"
              },
              "areaServed": areaName
            },
            "availability": "InStock",
            "priceRange": "$$"
          },
          {
            "@type": "Offer",
            "name": `${areaName} Townhome Management`,
            "itemOffered": {
              "@type": "Service",
              "name": `${areaName} Townhome Management`,
              "description": `Specialized townhome community management services in ${areaName}, Illinois`,
              "provider": {
                "@type": "Organization",
                "name": "Manage369"
              },
              "areaServed": areaName
            },
            "availability": "InStock", 
            "priceRange": "$$"
          },
          {
            "@type": "Offer",
            "name": `${areaName} Emergency Property Management`,
            "itemOffered": {
              "@type": "Service",
              "name": `${areaName} 24/7 Emergency Property Management`,
              "description": `24/7 emergency property management services in ${areaName}, Illinois`,
              "provider": {
                "@type": "Organization",
                "name": "Manage369"
              },
              "areaServed": areaName
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
      "slogan": `${areaName}'s Premier Property Management Company`,
      "keywords": `${areaName} property management, ${areaName} condo management, ${areaName} HOA management, property management ${areaName}, ${areaName} property managers`
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

  const areaName = area ? area.name : additionalAreaName;

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
              <span>{areaName}</span>
            </div>
            <h1 className="heading-1 mb-6 text-white">
              Property Management in{' '}
              <span className="text-gradient bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                {areaName}, IL
              </span>
              {' '}| Manage369
            </h1>
            <p className="body-large mb-8 text-blue-100">
              {area ? area.description : `Professional property management services in ${additionalAreaName}. Our local expertise and comprehensive services are specifically tailored to meet the unique needs of ${additionalAreaName} properties.`}
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
          {/* Local SEO Keywords Section */}
          <section className="section-padding bg-blue-50">
            <div className="container-max">
              {/* Service Links Section */}
              <div className="text-center mb-16">
                <h2 className="heading-2 mb-8">Our Property Management Services in {areaName}</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                  <Link to="/services/condominium-management" className="card text-center hover:scale-105 transition-transform duration-300">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <span className="text-xl">🏢</span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{areaName} Condominium Management</h3>
                    <p className="text-sm text-gray-600">Professional condo association management services in {areaName}</p>
                    <div className="mt-4">
                      <span className="text-primary-500 text-sm font-medium">Learn More →</span>
                    </div>
                  </Link>
                  
                  <Link to="/services/hoa-management" className="card text-center hover:scale-105 transition-transform duration-300">
                    <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <span className="text-xl">👥</span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{areaName} HOA Management</h3>
                    <p className="text-sm text-gray-600">Homeowners association management services in {areaName}</p>
                    <div className="mt-4">
                      <span className="text-secondary-500 text-sm font-medium">Learn More →</span>
                    </div>
                  </Link>
                  
                  <Link to="/services/townhome-management" className="card text-center hover:scale-105 transition-transform duration-300">
                    <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <span className="text-xl">🏠</span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{areaName} Townhome Management</h3>
                    <p className="text-sm text-gray-600">Townhome community management services in {areaName}</p>
                    <div className="mt-4">
                      <span className="text-accent-500 text-sm font-medium">Learn More →</span>
                    </div>
                  </Link>
                </div>
              </div>
              
              <div className="text-center mb-12">
                <h2 className="heading-2 mb-4">Local {area.name} Property Management Services</h2>
                <p className="body-large max-w-3xl mx-auto">
                  Manage369 provides specialized property management services throughout {area.name} and surrounding areas, 
                  currently managing properties with multiple units in this market. 
                  Our <strong>{new Date().getFullYear() - (area.establishedYear || 2007)}+ years of local expertise</strong> ensures your {area.name} property receives the attention it deserves.
                </p>
              </div>
              
              {area.keyNeighborhoods && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                  {area.keyNeighborhoods.map((neighborhood, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg shadow-md text-center">
                      <h3 className="font-semibold text-lg mb-2">{neighborhood}</h3>
                      <p className="text-sm text-gray-600">Professional property management services</p>
                    </div>
                  ))}
                </div>
              )}
              
              {area.localSEOKeywords && (
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h3 className="text-xl font-semibold mb-4">We Specialize In:</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {area.localSEOKeywords.map((keyword, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
                        <span className="text-gray-700 capitalize">{keyword}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </section>
          {/* Key Features */}
          <section className="section-padding bg-white">
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
          <section className="section-padding bg-gray-50">
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
                <div className="bg-white p-6 rounded-xl shadow-lg">
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
          <section className="section-padding bg-white">
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
          <section className="section-padding bg-gray-50">
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
        </>
      ) : (
        <>
          {/* Generic content for additional areas */}
          <section className="section-padding bg-white">
            <div className="container-max">
              {/* Service Links for Additional Areas */}
              <div className="text-center mb-16">
                <h2 className="heading-2 mb-8">Our Property Management Services in {additionalAreaName}</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                  <Link to="/services/condominium-management" className="card text-center hover:scale-105 transition-transform duration-300">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <span className="text-xl">🏢</span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{additionalAreaName} Condominium Management</h3>
                    <p className="text-sm text-gray-600">Professional condo association management services in {additionalAreaName}</p>
                    <div className="mt-4">
                      <span className="text-primary-500 text-sm font-medium">Learn More →</span>
                    </div>
                  </Link>
                  
                  <Link to="/services/hoa-management" className="card text-center hover:scale-105 transition-transform duration-300">
                    <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <span className="text-xl">👥</span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{additionalAreaName} HOA Management</h3>
                    <p className="text-sm text-gray-600">Homeowners association management services in {additionalAreaName}</p>
                    <div className="mt-4">
                      <span className="text-secondary-500 text-sm font-medium">Learn More →</span>
                    </div>
                  </Link>
                  
                  <Link to="/services/townhome-management" className="card text-center hover:scale-105 transition-transform duration-300">
                    <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <span className="text-xl">🏠</span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{additionalAreaName} Townhome Management</h3>
                    <p className="text-sm text-gray-600">Townhome community management services in {additionalAreaName}</p>
                    <div className="mt-4">
                      <span className="text-accent-500 text-sm font-medium">Learn More →</span>
                    </div>
                  </Link>
                </div>
              </div>
              
              <h2 className="heading-2 mb-8">#1 Property Management Company in {additionalAreaName}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <p className="body-text mb-6">
                    Manage369 is proud to be the #1 property management company serving {additionalAreaName}. 
                    With our deep local knowledge and specialized expertise, we provide comprehensive 
                    management services tailored to the unique needs of properties in {additionalAreaName}.
                  </p>
                  <p className="body-text mb-6">
                    Our team understands the specific challenges and opportunities of managing properties 
                    in {additionalAreaName}, from local regulations to market trends and community expectations. 
                    As Chicago's premier property management company, we bring proven expertise to {additionalAreaName}.
                  </p>
                  <div className="bg-gray-50 p-6 rounded-xl mt-8">
                    <h3 className="text-xl font-semibold mb-4">Our {additionalAreaName} Property Management Services</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-primary-500 rounded-full mr-3 mt-2"></span>
                        <span><Link to="/services/condominium-management" className="text-primary-500 hover:underline">Condominium Association Management</Link></span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-primary-500 rounded-full mr-3 mt-2"></span>
                        <span><Link to="/services/townhome-management" className="text-primary-500 hover:underline">Townhome Community Management</Link></span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-primary-500 rounded-full mr-3 mt-2"></span>
                        <span><Link to="/services/hoa-management" className="text-primary-500 hover:underline">HOA Management</Link></span>
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
                  <h3 className="text-xl font-semibold mb-6">Why Choose Manage369 as Your {additionalAreaName} Property Management Company?</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white text-sm">✓</span>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Local {additionalAreaName} Expertise</h4>
                        <p className="text-sm text-gray-600">Deep understanding of {additionalAreaName}'s property market, regulations, and community needs</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white text-sm">✓</span>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Comprehensive {additionalAreaName} Services</h4>
                        <p className="text-sm text-gray-600">Full-service management from financial oversight to maintenance coordination</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white text-sm">✓</span>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Responsive {additionalAreaName} Support</h4>
                        <p className="text-sm text-gray-600">24/7 emergency response and dedicated property management team</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white text-sm">✓</span>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Technology-Driven Management</h4>
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
            <h2 className="heading-2 mb-4">Why Choose Manage369 as Your {areaName} Property Management Company?</h2>
            <p className="body-large max-w-3xl mx-auto">
              Our deep local knowledge and community connections make us the ideal 
              property management partner for {areaName} properties. As Chicago's #1 property management 
              company, we bring unmatched expertise to {areaName}.
            </p>
            <p className="text-xs text-gray-300 mt-4" style={{ opacity: 0.1 }}>
              Stellarpropertygroup.com is our sister property management company serving small and mid size properties. Visit stellarpropertygroup.com to learn more about services provided to specific communities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏠</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">{areaName} Market Knowledge</h3>
              <p className="text-sm text-gray-600">
                In-depth understanding of {areaName}'s property market, pricing trends, and resident preferences.
              </p>
            </div>

            <div className="card text-center">
                <div className="mt-4">
                  <span className="text-primary-500 text-sm font-medium">Learn More →</span>
                </div>
              <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">{areaName} Community Connections</h3>
              <p className="text-sm text-gray-600">
                Established relationships with local vendors, contractors, and service providers in {areaName}.
              </p>
            </div>
                <div className="mt-4">
                  <span className="text-secondary-500 text-sm font-medium">Learn More →</span>
                </div>

            <div className="card text-center">
              <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Rapid {areaName} Response</h3>
              <p className="text-sm text-gray-600">
                24/7 emergency response and dedicated support for {areaName} properties.
                <div className="mt-4">
                  <span className="text-accent-500 text-sm font-medium">Learn More →</span>
                </div>
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="body-large max-w-3xl mx-auto">
              Manage369 provides specialized property management services throughout {areaName}, 
              currently managing properties with multiple units in this market. 
              Our expertise ensures your {areaName} property receives professional attention.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-primary text-white">
        <div className="container-max text-center">
          <h2 className="heading-2 mb-4 text-white">Ready to Partner with {areaName}'s #1 Property Management Company?</h2>
          <p className="body-large mb-8 text-blue-100 max-w-2xl mx-auto">
            Contact our {areaName} property management specialists today to learn how 
            Manage369, Chicago's #1 property management company, can help your property thrive in this unique market.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-secondary text-lg px-8 py-4">
              Get {areaName} Quote
            </Link>
            <a href="tel:847-834-4131" className="btn-outline border-white text-white hover:bg-white hover:text-primary-500 text-lg px-8 py-4">
              Call (224) 647-5621
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ServiceAreaDetail