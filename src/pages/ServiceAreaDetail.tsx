import React from 'react'
import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { serviceAreas } from '../data/serviceAreas'

const ServiceAreaDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  
  // Find the area in our service areas
  const area = serviceAreas.find(area => area.slug === slug);
  
  useEffect(() => {
    // If no area found, redirect to service areas page
    if (!area) {
      window.location.href = '/service-areas';
      return;
    }
    
    // Ensure scroll to top when component mounts
    window.scrollTo(0, 0)
    
    // Additional scroll to top after content loads
    const scrollTimer = setTimeout(() => {
      window.scrollTo(0, 0)
    }, 200)

    return () => {
      clearTimeout(scrollTimer)
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

  // Get nearby communities (same region, excluding current area)
  const nearbyAreas = serviceAreas
    .filter(a => a.region === area.region && a.id !== area.id)
    .slice(0, 4);

  // Generate local storytelling content based on area characteristics
  const getLocalStoryContent = (area: any) => {
    const stories = {
      'glenview': 'From the tree-lined neighborhoods near The Glen to boutique condo communities on Patriot Boulevard, Glenview boards trust Manage369 for proactive management, 24/7 emergency support, and complete financial transparency.',
      'evanston': 'From Northwestern University area condos to lakefront high-rises along Sheridan Road, Evanston boards choose Manage369 for our deep local knowledge, responsive service, and commitment to preserving community character.',
      'wilmette': 'From historic homes near Gillson Park to modern townhome developments along Green Bay Road, Wilmette boards rely on Manage369 for professional management that honors this community\'s prestigious reputation.',
      'winnetka': 'From estate properties near Crow Island to luxury condominiums along Sheridan Road, Winnetka boards trust Manage369 for discretionary service that matches this community\'s exceptional standards.',
      'downtown-chicago': 'From luxury high-rises in the Loop to boutique condos near Millennium Park, downtown Chicago boards choose Manage369 for our urban expertise, 24/7 availability, and sophisticated management approach.',
      'river-north': 'From converted loft buildings to modern luxury towers, River North boards trust Manage369 for our understanding of this dynamic neighborhood\'s unique property management challenges.',
      'lincoln-park': 'From historic brownstone conversions to modern high-rises near Lincoln Park Zoo, boards in this prestigious neighborhood choose Manage369 for our commitment to preserving community character while delivering modern management solutions.'
    };
    
    return stories[area.slug] || `From established neighborhoods to modern developments, ${area.name} boards trust Manage369 for proactive management, 24/7 emergency support, and complete financial transparency.`;
  };

  return (
    <div>
      <Helmet>
        <title>Property Management in {area.name}, IL | Manage369</title>
        <meta name="description" content={`Manage369 provides expert property management for condominiums, HOAs, and townhome communities in ${area.name}, IL. Local expertise, 24/7 support, and full-service management.`} />
        <link rel="canonical" href={`https://www.manage369.com/property-management-${area.slug}`} />
        
        {/* Breadcrumb Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://www.manage369.com"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Service Areas",
                "item": "https://www.manage369.com/service-areas"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": area.name,
                "item": `https://www.manage369.com/property-management-${area.slug}`
              }
            ]
          })}
        </script>

        {/* LocalBusiness Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": `https://manage369.com/property-management-${area.slug}`,
            "name": `Manage369 - ${area.name} Property Management`,
            "description": `Professional property management services in ${area.name}, Illinois. Specialized condominium management, townhome management, and HOA management services by Chicago's premier property management company.`,
            "url": `https://manage369.com/property-management-${area.slug}`,
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
                  }
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
                  }
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
                  }
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
              "https://manage369.com"
            ]
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* Breadcrumbs */}
        <div className="bg-white border-b border-gray-200">
          <div className="container-max py-4">
            <nav className="flex items-center space-x-2 text-sm text-gray-600">
              <Link to="/" className="hover:text-primary-500">Home</Link>
              <span>→</span>
              <Link to="/service-areas" className="hover:text-primary-500">Service Areas</Link>
              <span>→</span>
              <span className="text-gray-900">{area.name}</span>
            </nav>
          </div>
        </div>

        {/* 1. Hero Section */}
        <section className="bg-gradient-to-br from-primary-500 to-primary-700 text-white section-padding">
          <div className="container-max">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="heading-1 mb-6 text-white">
                Property Management in {area.name}, IL | Manage369
              </h1>
              <p className="body-large mb-8 text-blue-100 max-w-3xl mx-auto">
                At Manage369, we provide premium property management services tailored for {area.name}'s condominium, HOA, and townhome communities. Our team combines 18+ years of experience with a local presence in {area.name} to deliver concierge-level service boards can rely on.
              </p>
              <Link to="/contact" className="btn-secondary text-lg px-8 py-4">
                Request a Proposal
              </Link>
            </div>
          </div>
        </section>

        {/* 2. Services in This Community */}
        <section className="section-padding bg-white">
          <div className="container-max">
            <div className="text-center mb-12">
              <h2 className="heading-2 mb-4">Comprehensive Management Solutions in {area.name}</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Link to="/services/condominium-management" className="card text-center hover:scale-105 transition-transform duration-300">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">🏢</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Condominium Management</h3>
                <p className="text-gray-600 mb-6">
                  Tailored oversight for high-rise, mid-rise, and boutique condos.
                </p>
                <span className="text-primary-500 font-medium">Learn More →</span>
              </Link>
              
              <Link to="/services/hoa-management" className="card text-center hover:scale-105 transition-transform duration-300">
                <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">👥</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">HOA Management</h3>
                <p className="text-gray-600 mb-6">
                  Expert management for homeowner associations and planned communities.
                </p>
                <span className="text-secondary-500 font-medium">Learn More →</span>
              </Link>
              
              <Link to="/services/townhome-management" className="card text-center hover:scale-105 transition-transform duration-300">
                <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">🏠</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Townhome Management</h3>
                <p className="text-gray-600 mb-6">
                  Specialized management for townhome communities and attached housing.
                </p>
                <span className="text-accent-500 font-medium">Learn More →</span>
              </Link>
            </div>
          </div>
        </section>

        {/* 3. Local Storytelling Section */}
        <section className="section-padding bg-gray-50">
          <div className="container-max">
            <div className="max-w-4xl mx-auto">
              <h2 className="heading-2 mb-6">Why Boards in {area.name} Choose Manage369</h2>
              <p className="body-large mb-8 text-gray-700">
                {getLocalStoryContent(area)}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-gray-700">Licensed & insured professionals</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-gray-700">Local vendor relationships for faster service</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-gray-700">Transparent reporting and budgeting</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-gray-700">24/7 emergency response</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Nearby Communities */}
        {nearbyAreas.length > 0 && (
          <section className="section-padding bg-white">
            <div className="container-max">
              <div className="text-center mb-12">
                <h2 className="heading-2 mb-4">Nearby Communities We Also Serve</h2>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                {nearbyAreas.map((nearbyArea) => (
                  <Link 
                    key={nearbyArea.id}
                    to={`/property-management-${nearbyArea.slug}`} 
                    className="bg-gray-50 p-4 rounded-lg text-center hover:bg-primary-50 hover:text-primary-600 transition-all duration-300 group"
                  >
                    <h3 className="font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                      {nearbyArea.name}
                    </h3>
                    <span className="text-sm text-gray-500 group-hover:text-primary-500">
                      {nearbyArea.county} County
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* 5. Final CTA */}
        <section className="section-padding bg-gradient-primary text-white">
          <div className="container-max text-center">
            <h2 className="heading-2 mb-4 text-white">Ready to Elevate Your {area.name} Community?</h2>
            <p className="body-large mb-8 text-blue-100 max-w-2xl mx-auto">
              We work exclusively with boards who expect precision, discretion, and accountability. 
              If your community demands concierge-level service, let's connect.
            </p>
            <Link to="/contact" className="btn-secondary text-lg px-8 py-4">
              Contact Manage369 Today
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}

export default ServiceAreaDetail