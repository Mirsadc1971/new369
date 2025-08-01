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

  // Generate detailed local storytelling content for each area
  const getLocalStoryContent = (area: any) => {
    const stories = {
      'glenview': 'From the tree-lined neighborhoods near The Glen to boutique condo communities on Patriot Boulevard, Glenview boards trust Manage369 for proactive management, 24/7 emergency support, and complete financial transparency.',
      'evanston': 'From Northwestern University area high-rises to historic lakefront condominiums along Sheridan Road, Evanston boards choose Manage369 for our deep understanding of this diverse, academic community and commitment to preserving its unique character.',
      'wilmette': 'From elegant lakefront condos near Gillson Park to charming townhome developments along Green Bay Road, Wilmette boards rely on Manage369 for sophisticated management that honors this prestigious North Shore community\'s refined standards.',
      'winnetka': 'From exclusive lakefront estates converted to luxury condominiums to boutique developments near the village center, Winnetka boards trust Manage369 for discretionary service that matches this community\'s exceptional reputation and privacy expectations.',
      'downtown-chicago': 'From iconic Loop high-rises to luxury condos near Millennium Park and Grant Park, downtown Chicago boards choose Manage369 for our urban expertise, 24/7 availability, and sophisticated approach to managing premier city properties.',
      'river-north': 'From converted warehouse lofts to sleek modern towers near the Magnificent Mile, River North boards trust Manage369 for our understanding of this dynamic neighborhood\'s unique blend of historic character and contemporary luxury living.',
      'lincoln-park': 'From historic brownstone conversions to modern high-rises near Lincoln Park Zoo and DePaul University, boards in this prestigious neighborhood choose Manage369 for our commitment to preserving community character while delivering cutting-edge management solutions.',
      'gold-coast': 'From historic mansions converted to luxury condominiums to modern towers along Lake Shore Drive, Gold Coast boards choose Manage369 for our sophisticated approach and deep understanding of this prestigious lakefront community\'s discerning standards.',
      'streeterville': 'From Navy Pier area condos to luxury towers near Northwestern Memorial Hospital and the lakefront, Streeterville boards trust Manage369 for our urban expertise and round-the-clock emergency response capabilities in this bustling downtown district.',
      'old-town': 'From historic brownstone conversions to modern luxury developments near Second City and Lincoln Park, Old Town boards rely on Manage369 for management that respects this neighborhood\'s rich architectural heritage and vibrant cultural scene.',
      'lakeview': 'From vintage walk-ups to modern condos near Wrigley Field and the lakefront, Lakeview boards choose Manage369 for our understanding of this diverse neighborhood\'s unique mix of historic charm and modern amenities.',
      'wicker-park': 'From converted industrial lofts to modern townhome developments in this artistic hub, Wicker Park boards trust Manage369 for our expertise in managing properties that reflect this dynamic community\'s creative energy and entrepreneurial spirit.',
      'bucktown': 'From historic single-family conversions to contemporary townhome communities along the 606 trail, Bucktown boards rely on Manage369 for management that honors this neighborhood\'s creative character and family-friendly atmosphere.',
      'logan-square': 'From vintage courtyard buildings to modern developments along the historic boulevards, Logan Square boards choose Manage369 for our commitment to preserving this community\'s artistic character while supporting its ongoing revitalization.',
      'edgewater': 'From historic lakefront high-rises to vintage courtyard buildings near Loyola Beach, Edgewater boards trust Manage369 for our expertise in managing this diverse lakefront community\'s mix of architectural styles and resident needs.',
      'rogers-park': 'From historic apartment conversions to modern developments near Loyola University and the lakefront, Rogers Park boards rely on Manage369 for our commitment to this diverse, academic community and its multicultural character.',
      'uptown': 'From restored historic high-rises to modern lakefront developments near the entertainment district, Uptown boards choose Manage369 for management that supports this community\'s ongoing renaissance while honoring its rich cultural heritage.',
      'lincoln-square': 'From vintage courtyard buildings to modern condos along Lincoln Avenue\'s charming commercial district, Lincoln Square boards trust Manage369 for our understanding of this family-friendly community\'s European-inspired character.',
      'ravenswood': 'From historic single-family conversions to modern townhome developments near the Brown Line, Ravenswood boards rely on Manage369 for management that preserves this neighborhood\'s quiet, residential character and tree-lined streets.',
      'north-center': 'From vintage buildings to modern developments near Southport Corridor and the lakefront, North Center boards choose Manage369 for our expertise in this desirable residential community known for its excellent schools and family atmosphere.',
      'albany-park': 'From historic courtyard buildings to modern developments along the North Branch Chicago River, Albany Park boards trust Manage369 for our commitment to this diverse, evolving community and its rich multicultural heritage.',
      'irving-park': 'From vintage buildings to modern developments near the Blue Line and Independence Park, Irving Park boards rely on Manage369 for management that supports this community\'s growth while maintaining its neighborhood character.',
      'avondale': 'From converted industrial buildings to modern townhome developments in this rapidly transforming neighborhood, Avondale boards choose Manage369 for our expertise in managing properties during this exciting period of growth and revitalization.',
      'kenilworth': 'From historic lakefront estates to exclusive condominium conversions, Kenilworth boards choose Manage369 for discretionary service that matches this exclusive North Shore village\'s exceptional standards and commitment to privacy.',
      'glencoe': 'From elegant lakefront estates to boutique condo communities near the Botanic Garden, Glencoe boards trust Manage369 for sophisticated management that honors this prestigious North Shore community\'s natural beauty and refined character.',
      'highland-park': 'From historic estates to modern luxury developments near Ravinia Festival and the lakefront, Highland Park boards rely on Manage369 for management that reflects this community\'s cultural sophistication and commitment to the arts.',
      'highwood': 'From historic buildings to modern developments in this charming lakefront community, Highwood boards choose Manage369 for personalized service that supports this close-knit North Shore village\'s unique character and community spirit.',
      'lake-forest': 'From grand estate properties to luxury condominium conversions near Lake Forest College, Lake Forest boards trust Manage369 for discretionary management that matches this community\'s prestigious reputation and commitment to excellence.',
      'lake-bluff': 'From historic lakefront properties to boutique developments overlooking Lake Michigan, Lake Bluff boards rely on Manage369 for sophisticated service in this exclusive North Shore enclave known for its natural beauty and privacy.',
      'northbrook': 'From established neighborhoods near Northbrook Court to modern developments along the Metra line, Northbrook boards choose Manage369 for comprehensive management that supports this thriving suburban community\'s excellent schools and family amenities.',
      'skokie': 'From vintage buildings near the Yellow Line to modern developments throughout this diverse community, Skokie boards trust Manage369 for reliable management that serves this family-oriented suburb\'s multicultural population and strong civic engagement.',
      'niles': 'From established condominium communities to modern townhome developments near the Leaning Tower, Niles boards rely on Manage369 for professional management in this well-established suburban community known for its senior services and community programs.',
      'morton-grove': 'From vintage buildings to modern developments near the Prairie View Metra station, Morton Grove boards choose Manage369 for dependable management that supports this stable residential community\'s commitment to quality of life.',
      'deerfield': 'From established neighborhoods near Deerfield High School to luxury developments along the lakefront, Deerfield boards trust Manage369 for sophisticated management in this prestigious North Shore community known for its excellent schools.',
      'lincolnshire': 'From luxury condominium communities to exclusive townhome developments near Marriott Theatre, Lincolnshire boards rely on Manage369 for premium management that matches this upscale community\'s high standards and corporate presence.',
      'buffalo-grove': 'From established condominium communities to modern townhome developments near Buffalo Grove Golf Course, Buffalo Grove boards choose Manage369 for comprehensive management in this thriving suburban community known for its parks and recreation.',
      'vernon-hills': 'From modern condominium complexes to luxury townhome communities near Hawthorn Mall, Vernon Hills boards trust Manage369 for professional management that supports this dynamic suburban area\'s growth and business development.',
      'libertyville': 'From historic buildings near downtown\'s charming Main Street to modern developments throughout this picturesque community, Libertyville boards rely on Manage369 for management that honors this community\'s small-town character and natural beauty.',
      'mundelein': 'From lakefront properties near Diamond Lake to modern developments throughout this growing community, Mundelein boards choose Manage369 for reliable management that supports this suburban area\'s family-friendly atmosphere and recreational amenities.',
      'long-grove': 'From historic village properties to luxury developments near the covered bridge, Long Grove boards trust Manage369 for sophisticated management that preserves this community\'s unique historic character and rural charm.',
      'hawthorn-woods': 'From luxury estate communities to exclusive developments near Deer Park Town Center, Hawthorn Woods boards rely on Manage369 for premium management in this prestigious suburban enclave known for its natural beauty and privacy.',
      'lake-zurich': 'From lakefront properties overlooking Lake Zurich to modern developments near the Metra station, Lake Zurich boards choose Manage369 for comprehensive management that supports this desirable lakefront community\'s recreational lifestyle.',
      'kildeer': 'From luxury estate communities to exclusive developments near Kemper Lakes Golf Course, Kildeer boards trust Manage369 for discretionary management that matches this upscale community\'s commitment to privacy and natural preservation.'
    };
    
    return stories[area.slug] || `From established neighborhoods to modern developments, ${area.name} boards trust Manage369 for proactive management, 24/7 emergency support, and complete financial transparency.`;
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <Helmet>
        {/* Meta Title & Description */}
        <title>Property Management in {area.name}, IL | Manage369</title>
        <meta
          name="description"
          content={`Manage369 provides premium condominium, HOA, and townhome management in ${area.name}, IL. Trusted by boards for 24/7 support, transparent financials, and proactive service.`}
        />

        {/* LocalBusiness Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Manage369",
            "image": "https://manage369.com/369favicon.png",
            "@id": `https://manage369.com/property-management-${area.slug}`,
            "url": `https://manage369.com/property-management-${area.slug}`,
            "telephone": "+12246475621",
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
              "latitude": "42.0780",
              "longitude": "-87.8150"
            },
            "areaServed": {
              "@type": "Place",
              "name": `${area.name}, Illinois`
            },
            "sameAs": [
              "https://manage369.com"
            ]
          })}
        </script>

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
                "item": "https://manage369.com"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Service Areas",
                "item": "https://manage369.com/service-areas"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": area.name,
                "item": `https://manage369.com/property-management-${area.slug}`
              }
            ]
          })}
        </script>
      </Helmet>

      {/* Breadcrumbs */}
      <nav className="mb-8 text-sm text-gray-600">
        <Link to="/" className="hover:text-blue-600">Home</Link>
        <span className="mx-2">→</span>
        <Link to="/service-areas" className="hover:text-blue-600">Service Areas</Link>
        <span className="mx-2">→</span>
        <span className="text-gray-900">{area.name}</span>
      </nav>

      {/* 1. Hero Section */}
      <section className="mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Property Management in {area.name}, IL | Manage369
        </h1>
        <p className="text-xl text-gray-700 mb-8 leading-relaxed">
          At Manage369, we provide premium property management services tailored for {area.name}'s condominium, HOA, and townhome communities. Our team combines 18+ years of experience with a local presence in {area.name} to deliver concierge-level service boards can rely on.
        </p>
        <Link 
          to="/contact" 
          className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg"
        >
          Request a Proposal
        </Link>
      </section>

      {/* 2. Services in This Community */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          Comprehensive Management Solutions in {area.name}
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <Link 
            to="/services/condominium-management"
            className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow group"
          >
            <div className="text-4xl mb-4">🏢</div>
            <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-600">
              Condominium Management
            </h3>
            <p className="text-gray-600 mb-4">
              Tailored oversight for high-rise, mid-rise, and boutique condos.
            </p>
            <span className="text-blue-600 font-medium">Learn More →</span>
          </Link>

          <Link 
            to="/services/hoa-management"
            className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow group"
          >
            <div className="text-4xl mb-4">👥</div>
            <h3 className="text-xl font-semibold mb-3 group-hover:text-green-600">
              HOA Management
            </h3>
            <p className="text-gray-600 mb-4">
              Expert management for homeowner associations and planned communities.
            </p>
            <span className="text-green-600 font-medium">Learn More →</span>
          </Link>

          <Link 
            to="/services/townhome-management"
            className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow group"
          >
            <div className="text-4xl mb-4">🏠</div>
            <h3 className="text-xl font-semibold mb-3 group-hover:text-red-600">
              Townhome Management
            </h3>
            <p className="text-gray-600 mb-4">
              Specialized management for townhome communities and attached housing.
            </p>
            <span className="text-red-600 font-medium">Learn More →</span>
          </Link>
        </div>
      </section>

      {/* 3. Local Storytelling Section */}
      <section className="mb-16 bg-gray-50 rounded-lg p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Why Boards in {area.name} Choose Manage369
        </h2>
        
        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
          {getLocalStoryContent(area)}
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="flex items-start space-x-3">
            <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <span className="text-white text-xs">✓</span>
            </div>
            <span className="text-gray-700">Licensed & insured professionals</span>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <span className="text-white text-xs">✓</span>
            </div>
            <span className="text-gray-700">Local vendor relationships for faster service</span>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <span className="text-white text-xs">✓</span>
            </div>
            <span className="text-gray-700">Transparent reporting and budgeting</span>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <span className="text-white text-xs">✓</span>
            </div>
            <span className="text-gray-700">24/7 emergency response</span>
          </div>
        </div>
      </section>

      {/* 4. Nearby Communities */}
      {nearbyAreas.length > 0 && (
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Nearby Communities We Also Serve
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {nearbyAreas.map((nearbyArea) => (
              <Link 
                key={nearbyArea.id}
                to={`/property-management-${nearbyArea.slug}`} 
                className="bg-gray-50 p-4 rounded-lg text-center hover:bg-blue-50 hover:text-blue-600 transition-all duration-300 group"
              >
                <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {nearbyArea.name}
                </h3>
                <span className="text-sm text-gray-500 group-hover:text-blue-500">
                  {nearbyArea.county} County
                </span>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* 5. Final CTA */}
      <section className="bg-blue-600 text-white rounded-lg p-8 text-center">
        <h2 className="text-3xl font-bold mb-6">
          Ready to Elevate Your {area.name} Community?
        </h2>
        <p className="text-xl mb-8 text-blue-100">
          We work exclusively with boards who expect precision, discretion, and accountability. 
          If your community demands concierge-level service, let's connect.
        </p>
        <Link 
          to="/contact" 
          className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
        >
          Contact Manage369 Today
        </Link>
      </section>
    </div>
  )
}

export default ServiceAreaDetail