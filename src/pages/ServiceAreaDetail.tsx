import React from 'react'
import { useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { serviceAreas } from '../data/serviceAreas'

const ServiceAreaDetail = () => {
  const { slug } = useParams<{ slug: string }>()
  
  // Find the service area by slug
  const area = serviceAreas.find(area => area.slug === slug?.replace('property-management-', ''))
  
  if (!area) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Area Not Found</h1>
          <p className="text-gray-600">The requested service area could not be found.</p>
        </div>
      </div>
    )
  }

  // Get area-specific content
  const getAreaContent = (areaName: string) => {
    switch (areaName.toLowerCase()) {
      case 'glenview':
        return {
          intro: "Glenview is one of the North Shore's most desirable communities, known for The Glen Town Center, The Grove National Historic Landmark, and excellent schools. Manage369 provides specialized property management services for Glenview's condominium, HOA, and townhome communities — ensuring boards benefit from transparent reporting, 24/7 emergency response, and proactive local support.",
          finalCta: "Boards in Glenview choose Manage369 for precise, proactive, and concierge-level service. Let's connect today."
        }
      
      case 'downtown chicago':
        return {
          intro: "Downtown Chicago represents the pinnacle of urban living, featuring iconic Loop high-rises, Millennium Park, and the bustling Chicago River corridor. Manage369 provides specialized property management services for Downtown's luxury condominiums and mixed-use developments — ensuring boards benefit from 24/7 concierge-level support, transparent financial reporting, and expert vendor management in the city's most demanding market.",
          finalCta: "Boards in Downtown Chicago choose Manage369 for sophisticated, white-glove service that matches the prestige of their properties. Let's connect today."
        }
      
      case 'river north':
        return {
          intro: "River North combines Chicago's industrial heritage with modern luxury, featuring converted warehouse lofts, boutique condominiums, and proximity to the Magnificent Mile. Manage369 provides specialized property management services for River North's diverse property portfolio — ensuring boards benefit from expert building system management, transparent reporting, and 24/7 emergency response tailored to both historic and contemporary buildings.",
          finalCta: "Boards in River North choose Manage369 for sophisticated management that honors both historic character and modern expectations. Let's connect today."
        }
      
      case 'gold coast':
        return {
          intro: "The Gold Coast epitomizes Chicago elegance, featuring historic mansions, luxury high-rises along Lake Shore Drive, and tree-lined streets steeped in architectural heritage. Manage369 provides specialized property management services for Gold Coast's prestigious condominium and co-op buildings — ensuring boards benefit from discreet, white-glove service, meticulous financial oversight, and vendor management that meets the highest standards.",
          finalCta: "Boards in the Gold Coast choose Manage369 for refined, discreet service that matches the sophistication of their community. Let's connect today."
        }
      
      case 'streeterville':
        return {
          intro: "Streeterville offers dynamic urban living with Navy Pier, Northwestern Memorial Hospital, and bustling downtown energy just steps from Lake Michigan. Manage369 provides specialized property management services for Streeterville's high-rise condominiums and mixed-use developments — ensuring boards benefit from responsive 24/7 support, transparent financial management, and expert coordination in this fast-paced neighborhood.",
          finalCta: "Boards in Streeterville choose Manage369 for dynamic, responsive service that keeps pace with their vibrant community. Let's connect today."
        }
      
      case 'old town':
        return {
          intro: "Old Town charms with its historic brownstones, cobblestone streets, and proximity to Second City comedy club, blending 19th-century architecture with modern urban amenities. Manage369 provides specialized property management services for Old Town's boutique condominiums and historic conversions — ensuring boards benefit from preservation-minded maintenance, transparent reporting, and respectful stewardship of architectural heritage.",
          finalCta: "Boards in Old Town choose Manage369 for thoughtful, heritage-conscious service that preserves their community's unique character. Let's connect today."
        }
      
      case 'lincoln park':
        return {
          intro: "Lincoln Park combines natural beauty with urban sophistication, featuring the Lincoln Park Zoo, DePaul University, and some of Chicago's most prestigious residential streets. Manage369 provides specialized property management services for Lincoln Park's diverse housing stock — from vintage walk-ups to luxury high-rises — ensuring boards benefit from comprehensive maintenance programs, transparent financial oversight, and 24/7 emergency response.",
          finalCta: "Boards in Lincoln Park choose Manage369 for comprehensive, sophisticated service that enhances their community's desirability. Let's connect today."
        }
      
      case 'lakeview':
        return {
          intro: "Lakeview pulses with energy around Wrigley Field and the lakefront, featuring a vibrant mix of vintage walk-ups, modern condominiums, and bustling commercial corridors. Manage369 provides specialized property management services for Lakeview's diverse property types — ensuring boards benefit from proactive maintenance, transparent budgeting, and responsive service that keeps pace with this dynamic neighborhood.",
          finalCta: "Boards in Lakeview choose Manage369 for energetic, proactive service that matches their community's vibrant spirit. Let's connect today."
        }
      
      case 'wicker park':
        return {
          intro: "Wicker Park embodies Chicago's artistic soul with converted industrial lofts, trendy boutiques, and a rich music heritage that continues to attract creative professionals. Manage369 provides specialized property management services for Wicker Park's unique building stock — from historic conversions to modern developments — ensuring boards benefit from creative problem-solving, transparent communication, and maintenance that respects architectural character.",
          finalCta: "Boards in Wicker Park choose Manage369 for creative, flexible service that honors their community's artistic heritage. Let's connect today."
        }
      
      case 'bucktown':
        return {
          intro: "Bucktown offers family-friendly charm with tree-lined streets, the popular 606 trail, and a perfect blend of residential tranquility and urban convenience. Manage369 provides specialized property management services for Bucktown's growing condominium and townhome communities — ensuring boards benefit from neighborhood-focused maintenance, transparent financial management, and service that supports the area's family-oriented lifestyle.",
          finalCta: "Boards in Bucktown choose Manage369 for family-focused, community-minded service that enhances their neighborhood's appeal. Let's connect today."
        }
      
      case 'logan square':
        return {
          intro: "Logan Square celebrates its historic boulevards and craft brewery culture while maintaining strong community ties and artistic character. Manage369 provides specialized property management services for Logan Square's mix of vintage buildings and new developments — ensuring boards benefit from community-focused maintenance, transparent reporting, and service that supports the neighborhood's creative energy.",
          finalCta: "Boards in Logan Square choose Manage369 for community-focused, authentic service that supports their neighborhood's unique character. Let's connect today."
        }
      
      case 'edgewater':
        return {
          intro: "Edgewater combines lakefront luxury with multicultural vibrancy, featuring high-rise condominiums along Loyola Beach and diverse dining options throughout the neighborhood. Manage369 provides specialized property management services for Edgewater's lakefront buildings and mid-rise developments — ensuring boards benefit from comprehensive building system management, transparent financial oversight, and service that celebrates the community's diversity.",
          finalCta: "Boards in Edgewater choose Manage369 for inclusive, comprehensive service that reflects their community's welcoming spirit. Let's connect today."
        }
      
      case 'rogers park':
        return {
          intro: "Rogers Park thrives as one of Chicago's most diverse neighborhoods, home to Loyola University and residents speaking over 80 languages, creating a truly global community atmosphere. Manage369 provides specialized property management services for Rogers Park's varied housing stock — from lakefront high-rises to vintage courtyard buildings — ensuring boards benefit from culturally sensitive service, transparent communication, and maintenance that serves diverse resident needs.",
          finalCta: "Boards in Rogers Park choose Manage369 for inclusive, globally-minded service that celebrates their community's diversity. Let's connect today."
        }
      
      case 'uptown':
        return {
          intro: "Uptown showcases 1920s grandeur with historic theaters, the Green Mill Cocktail Lounge, and a rich entertainment heritage that continues to attract music lovers and history enthusiasts. Manage369 provides specialized property management services for Uptown's historic buildings and modern developments — ensuring boards benefit from preservation-conscious maintenance, transparent financial management, and service that honors the neighborhood's cultural legacy.",
          finalCta: "Boards in Uptown choose Manage369 for culturally-aware, preservation-minded service that honors their community's rich heritage. Let's connect today."
        }
      
      case 'lincoln square':
        return {
          intro: "Lincoln Square maintains its German heritage with Oktoberfest celebrations, European-style architecture, and the charming Lincoln Square farmers market creating a distinctly Old World atmosphere. Manage369 provides specialized property management services for Lincoln Square's boutique condominiums and historic buildings — ensuring boards benefit from detail-oriented maintenance, transparent reporting, and service that preserves the neighborhood's European charm.",
          finalCta: "Boards in Lincoln Square choose Manage369 for detail-oriented, heritage-conscious service that maintains their community's European character. Let's connect today."
        }
      
      case 'ravenswood':
        return {
          intro: "Ravenswood offers quiet residential charm with tree-lined streets, convenient Brown Line access, and a strong sense of community among families and young professionals. Manage369 provides specialized property management services for Ravenswood's growing condominium developments and vintage buildings — ensuring boards benefit from neighborhood-focused maintenance, transparent budgeting, and service that supports the area's residential tranquility.",
          finalCta: "Boards in Ravenswood choose Manage369 for peaceful, community-focused service that enhances their neighborhood's residential appeal. Let's connect today."
        }
      
      case 'north center':
        return {
          intro: "North Center combines family-friendly atmosphere with the vibrant Southport Corridor, featuring the Music Box Theatre and tree-lined residential streets perfect for raising children. Manage369 provides specialized property management services for North Center's family-oriented condominiums and townhomes — ensuring boards benefit from safety-focused maintenance, transparent communication, and service that supports the neighborhood's family values.",
          finalCta: "Boards in North Center choose Manage369 for family-focused, safety-conscious service that supports their community's values. Let's connect today."
        }
      
      case 'albany park':
        return {
          intro: "Albany Park celebrates incredible diversity with residents speaking over 40 languages, the scenic North Branch River, and a strong immigrant community creating a truly multicultural neighborhood. Manage369 provides specialized property management services for Albany Park's diverse housing stock — ensuring boards benefit from culturally sensitive service, multilingual communication support, and maintenance that serves varied community needs.",
          finalCta: "Boards in Albany Park choose Manage369 for culturally-sensitive, inclusive service that celebrates their community's global character. Let's connect today."
        }
      
      case 'irving park':
        return {
          intro: "Irving Park blends Polish heritage with modern convenience, featuring Independence Park, Blue Line accessibility, and strong community organizations that maintain neighborhood character. Manage369 provides specialized property management services for Irving Park's mix of vintage buildings and newer developments — ensuring boards benefit from community-minded maintenance, transparent financial oversight, and service that honors local traditions.",
          finalCta: "Boards in Irving Park choose Manage369 for community-minded, tradition-respecting service that honors their neighborhood's heritage. Let's connect today."
        }
      
      case 'avondale':
        return {
          intro: "Avondale transforms from its industrial past into a vibrant residential neighborhood, attracting young professionals and families with affordable housing and growing amenities. Manage369 provides specialized property management services for Avondale's emerging condominium developments and converted buildings — ensuring boards benefit from growth-oriented maintenance, transparent budgeting, and service that supports the neighborhood's positive transformation.",
          finalCta: "Boards in Avondale choose Manage369 for forward-thinking, growth-oriented service that supports their community's bright future. Let's connect today."
        }
      
      case 'evanston':
        return {
          intro: "Evanston combines Northwestern University's academic prestige with lakefront beauty, diverse neighborhoods, and a strong commitment to sustainability and community engagement. Manage369 provides specialized property management services for Evanston's varied housing stock — from historic mansions converted to condominiums to modern lakefront high-rises — ensuring boards benefit from academically-rigorous financial oversight, environmentally-conscious maintenance, and service that reflects the community's progressive values.",
          finalCta: "Boards in Evanston choose Manage369 for progressive, academically-rigorous service that reflects their community's values. Let's connect today."
        }
      
      case 'wilmette':
        return {
          intro: "Wilmette epitomizes North Shore elegance with tree-lined streets, excellent schools, and the stunning Bahá'í House of Worship creating a serene, family-oriented community. Manage369 provides specialized property management services for Wilmette's prestigious condominiums and townhome developments — ensuring boards benefit from meticulous attention to detail, transparent financial stewardship, and service that maintains the community's reputation for excellence.",
          finalCta: "Boards in Wilmette choose Manage369 for meticulous, excellence-focused service that maintains their community's prestigious reputation. Let's connect today."
        }
      
      case 'winnetka':
        return {
          intro: "Winnetka represents the pinnacle of North Shore prestige with lakefront estates, top-rated schools, and a commitment to privacy and discretion that attracts discerning residents. Manage369 provides specialized property management services for Winnetka's exclusive condominium developments and luxury townhomes — ensuring boards benefit from white-glove service, confidential financial management, and maintenance that meets the highest standards of excellence.",
          finalCta: "Boards in Winnetka choose Manage369 for white-glove, discreet service that meets their community's exceptional standards. Let's connect today."
        }
      
      case 'kenilworth':
        return {
          intro: "Kenilworth maintains its status as one of the North Shore's most exclusive communities with historic estates, pristine lakefront access, and an unwavering commitment to preserving its village character. Manage369 provides specialized property management services for Kenilworth's select condominium conversions and luxury developments — ensuring boards benefit from discreet, preservation-minded service, confidential financial oversight, and maintenance that honors the community's historic legacy.",
          finalCta: "Boards in Kenilworth choose Manage369 for discreet, preservation-minded service that honors their community's exclusive character. Let's connect today."
        }
      
      case 'glencoe':
        return {
          intro: "Glencoe combines lakefront beauty with small-town charm, featuring the Chicago Botanic Garden, excellent schools, and a strong sense of community among residents who value both privacy and civic engagement. Manage369 provides specialized property management services for Glencoe's boutique condominium developments and luxury townhomes — ensuring boards benefit from personalized service, transparent stewardship, and maintenance that reflects the community's commitment to natural beauty.",
          finalCta: "Boards in Glencoe choose Manage369 for personalized, nature-conscious service that reflects their community's values. Let's connect today."
        }
      
      case 'highland park':
        return {
          intro: "Highland Park celebrates arts and culture with Ravinia Festival, beautiful lakefront parks, and a vibrant downtown that attracts families seeking both sophistication and community spirit. Manage369 provides specialized property management services for Highland Park's diverse condominium and townhome communities — ensuring boards benefit from culturally-aware service, transparent financial management, and maintenance that supports the community's artistic heritage.",
          finalCta: "Boards in Highland Park choose Manage369 for culturally-aware, sophisticated service that celebrates their community's artistic spirit. Let's connect today."
        }
      
      case 'lake forest':
        return {
          intro: "Lake Forest embodies North Shore sophistication with historic estates, Lake Forest College, and pristine forest preserves creating an atmosphere of refined elegance and natural beauty. Manage369 provides specialized property management services for Lake Forest's exclusive condominium developments and luxury communities — ensuring boards benefit from refined service, discreet financial oversight, and maintenance that preserves both architectural heritage and natural landscapes.",
          finalCta: "Boards in Lake Forest choose Manage369 for refined, heritage-conscious service that maintains their community's sophisticated character. Let's connect today."
        }
      
      case 'northbrook':
        return {
          intro: "Northbrook combines excellent schools with family-friendly amenities, featuring beautiful parks, the Northbrook Court shopping center, and a strong sense of community that attracts families seeking suburban excellence. Manage369 provides specialized property management services for Northbrook's growing condominium and townhome developments — ensuring boards benefit from family-focused service, transparent budgeting, and maintenance that supports the community's commitment to quality of life.",
          finalCta: "Boards in Northbrook choose Manage369 for family-focused, quality-oriented service that enhances their community's appeal. Let's connect today."
        }
      
      case 'deerfield':
        return {
          intro: "Deerfield offers suburban tranquility with excellent schools, beautiful parks, and the scenic Des Plaines River creating an ideal environment for families and professionals seeking peaceful living. Manage369 provides specialized property management services for Deerfield's condominium and townhome communities — ensuring boards benefit from peaceful, professional service, transparent financial management, and maintenance that preserves the area's natural beauty.",
          finalCta: "Boards in Deerfield choose Manage369 for peaceful, professional service that maintains their community's tranquil character. Let's connect today."
        }
      
      case 'buffalo grove':
        return {
          intro: "Buffalo Grove thrives as a diverse, family-oriented community with excellent schools, beautiful parks, and a strong commitment to maintaining its suburban character while embracing cultural diversity. Manage369 provides specialized property management services for Buffalo Grove's varied condominium and townhome developments — ensuring boards benefit from inclusive service, transparent communication, and maintenance that serves diverse community needs.",
          finalCta: "Boards in Buffalo Grove choose Manage369 for inclusive, family-oriented service that celebrates their community's diversity. Let's connect today."
        }
      
      case 'vernon hills':
        return {
          intro: "Vernon Hills combines modern amenities with natural beauty, featuring Cuneo Mansion and Gardens, excellent shopping at Hawthorn Hills, and a growing community of young families and professionals. Manage369 provides specialized property management services for Vernon Hills' newer condominium and townhome developments — ensuring boards benefit from modern, efficient service, transparent financial oversight, and maintenance that supports the community's growth and development.",
          finalCta: "Boards in Vernon Hills choose Manage369 for modern, efficient service that supports their community's continued growth. Let's connect today."
        }
      
      case 'libertyville':
        return {
          intro: "Libertyville maintains its historic charm with a vibrant downtown, beautiful lakes, and strong community traditions that create a perfect blend of small-town atmosphere and modern convenience. Manage369 provides specialized property management services for Libertyville's boutique condominium developments and townhome communities — ensuring boards benefit from tradition-honoring service, transparent stewardship, and maintenance that preserves the community's historic character.",
          finalCta: "Boards in Libertyville choose Manage369 for tradition-honoring, community-focused service that preserves their town's historic charm. Let's connect today."
        }
      
      case 'mundelein':
        return {
          intro: "Mundelein offers lakefront living with Diamond Lake, strong community spirit, and growing amenities that attract families seeking affordable North Shore lifestyle with small-town values. Manage369 provides specialized property management services for Mundelein's lakefront condominiums and family-oriented developments — ensuring boards benefit from value-conscious service, transparent budgeting, and maintenance that supports the community's lakefront lifestyle.",
          finalCta: "Boards in Mundelein choose Manage369 for value-conscious, lakefront-focused service that enhances their community's appeal. Let's connect today."
        }
      
      case 'lake zurich':
        return {
          intro: "Lake Zurich centers around its beautiful namesake lake with water activities, charming downtown, and a strong sense of community that attracts families seeking lakefront living with suburban convenience. Manage369 provides specialized property management services for Lake Zurich's lakefront condominiums and townhome communities — ensuring boards benefit from lake-focused maintenance, transparent financial oversight, and service that celebrates the community's water-centered lifestyle.",
          finalCta: "Boards in Lake Zurich choose Manage369 for lake-focused, community-centered service that celebrates their waterfront lifestyle. Let's connect today."
        }
      
      case 'barrington':
        return {
          intro: "Barrington combines equestrian heritage with modern sophistication, featuring horse farms, the Barrington Hills countryside, and a commitment to preserving rural character within suburban convenience. Manage369 provides specialized property management services for Barrington's unique condominium developments and luxury communities — ensuring boards benefit from heritage-conscious service, discreet financial management, and maintenance that respects the area's rural character.",
          finalCta: "Boards in Barrington choose Manage369 for heritage-conscious, sophisticated service that honors their community's equestrian traditions. Let's connect today."
        }
      
      case 'inverness':
        return {
          intro: "Inverness epitomizes luxury living with rolling hills, pristine golf courses, and custom estates creating an exclusive community that values privacy and natural beauty. Manage369 provides specialized property management services for Inverness's select condominium developments and luxury communities — ensuring boards benefit from exclusive, discreet service, confidential financial oversight, and maintenance that preserves the area's natural landscape.",
          finalCta: "Boards in Inverness choose Manage369 for exclusive, discreet service that maintains their community's luxury standards. Let's connect today."
        }
      
      case 'palatine':
        return {
          intro: "Palatine offers diverse neighborhoods with excellent transportation, strong schools, and a vibrant downtown that attracts families and commuters seeking suburban convenience with urban accessibility. Manage369 provides specialized property management services for Palatine's varied condominium and townhome developments — ensuring boards benefit from accessible, efficient service, transparent communication, and maintenance that serves diverse community needs.",
          finalCta: "Boards in Palatine choose Manage369 for accessible, efficient service that meets their community's diverse needs. Let's connect today."
        }
      
      case 'arlington heights':
        return {
          intro: "Arlington Heights combines historic charm with modern amenities, featuring Arlington Park racetrack heritage, vibrant downtown, and excellent transportation making it a premier northwest suburban destination. Manage369 provides specialized property management services for Arlington Heights' diverse condominium and townhome communities — ensuring boards benefit from comprehensive service, transparent financial management, and maintenance that honors both historic character and modern needs.",
          finalCta: "Boards in Arlington Heights choose Manage369 for comprehensive, heritage-conscious service that balances tradition with modern convenience. Let's connect today."
        }
      
      case 'mount prospect':
        return {
          intro: "Mount Prospect thrives with family-friendly neighborhoods, excellent schools, and strong community programs that create an ideal environment for raising families while maintaining suburban charm. Manage369 provides specialized property management services for Mount Prospect's family-oriented condominium and townhome developments — ensuring boards benefit from family-focused service, transparent budgeting, and maintenance that supports safe, welcoming communities.",
          finalCta: "Boards in Mount Prospect choose Manage369 for family-focused, safety-conscious service that enhances their community's appeal to families. Let's connect today."
        }
      
      case 'des plaines':
        return {
          intro: "Des Plaines offers convenient living with excellent transportation, diverse neighborhoods, and the scenic Des Plaines River creating opportunities for both urban convenience and natural recreation. Manage369 provides specialized property management services for Des Plaines' varied condominium developments — ensuring boards benefit from convenient, accessible service, transparent financial oversight, and maintenance that serves diverse resident needs.",
          finalCta: "Boards in Des Plaines choose Manage369 for convenient, accessible service that meets their community's diverse transportation and lifestyle needs. Let's connect today."
        }
      
      case 'park ridge':
        return {
          intro: "Park Ridge maintains its reputation as a premier family community with excellent schools, beautiful parks, and strong civic engagement that attracts families seeking suburban excellence with urban accessibility. Manage369 provides specialized property management services for Park Ridge's established condominium and townhome communities — ensuring boards benefit from excellence-focused service, transparent stewardship, and maintenance that maintains the community's high standards.",
          finalCta: "Boards in Park Ridge choose Manage369 for excellence-focused, civic-minded service that maintains their community's premier reputation. Let's connect today."
        }
      
      case 'niles':
        return {
          intro: "Niles combines cultural diversity with suburban convenience, featuring the Leaning Tower of Niles, strong community services, and neighborhoods that welcome families from many backgrounds. Manage369 provides specialized property management services for Niles' diverse condominium developments — ensuring boards benefit from culturally-sensitive service, transparent communication, and maintenance that serves multicultural community needs.",
          finalCta: "Boards in Niles choose Manage369 for culturally-sensitive, inclusive service that celebrates their community's diversity. Let's connect today."
        }
      
      case 'skokie':
        return {
          intro: "Skokie celebrates incredible diversity with residents from around the world, excellent schools, and strong community programs that create a welcoming environment for all families. Manage369 provides specialized property management services for Skokie's diverse condominium and townhome communities — ensuring boards benefit from inclusive service, multilingual communication support, and maintenance that serves varied cultural needs.",
          finalCta: "Boards in Skokie choose Manage369 for inclusive, globally-minded service that celebrates their community's international character. Let's connect today."
        }
      
      case 'morton grove':
        return {
          intro: "Morton Grove offers family-friendly living with excellent schools, beautiful parks, and a strong sense of community that attracts families seeking suburban tranquility with urban convenience. Manage369 provides specialized property management services for Morton Grove's family-oriented condominium developments — ensuring boards benefit from family-focused service, transparent budgeting, and maintenance that supports safe, welcoming neighborhoods.",
          finalCta: "Boards in Morton Grove choose Manage369 for family-focused, community-minded service that enhances their neighborhood's family appeal. Let's connect today."
        }
      
      case 'lincolnwood':
        return {
          intro: "Lincolnwood combines small-town charm with big-city convenience, featuring beautiful residential neighborhoods, excellent schools, and easy access to both Chicago and the North Shore. Manage369 provides specialized property management services for Lincolnwood's boutique condominium developments — ensuring boards benefit from personalized service, transparent financial management, and maintenance that preserves the community's residential character.",
          finalCta: "Boards in Lincolnwood choose Manage369 for personalized, residential-focused service that maintains their community's small-town charm. Let's connect today."
        }
      
      case 'oak park':
        return {
          intro: "Oak Park showcases architectural heritage with Frank Lloyd Wright homes, diverse community spirit, and progressive values that create a unique blend of historic preservation and social consciousness. Manage369 provides specialized property management services for Oak Park's historic condominium conversions and modern developments — ensuring boards benefit from preservation-minded service, transparent stewardship, and maintenance that honors architectural significance.",
          finalCta: "Boards in Oak Park choose Manage369 for preservation-minded, socially-conscious service that honors their community's architectural and cultural heritage. Let's connect today."
        }
      
      case 'river forest':
        return {
          intro: "River Forest epitomizes suburban elegance with tree-lined streets, architectural treasures, and a commitment to preserving its historic character while embracing modern community needs. Manage369 provides specialized property management services for River Forest's prestigious condominium developments — ensuring boards benefit from elegant, preservation-focused service, discreet financial oversight, and maintenance that honors architectural heritage.",
          finalCta: "Boards in River Forest choose Manage369 for elegant, preservation-focused service that maintains their community's architectural distinction. Let's connect today."
        }
      
      case 'forest park':
        return {
          intro: "Forest Park combines convenient transportation with community charm, featuring easy CTA access, diverse neighborhoods, and strong local businesses that create a welcoming environment for residents and families. Manage369 provides specialized property management services for Forest Park's accessible condominium developments — ensuring boards benefit from convenient, community-focused service, transparent communication, and maintenance that serves diverse resident needs.",
          finalCta: "Boards in Forest Park choose Manage369 for convenient, community-focused service that enhances their neighborhood's accessibility and charm. Let's connect today."
        }
      
      case 'berwyn':
        return {
          intro: "Berwyn celebrates its Czech heritage with Houby Day festival, diverse neighborhoods, and strong community spirit that attracts families seeking affordable living with cultural richness. Manage369 provides specialized property management services for Berwyn's diverse condominium developments — ensuring boards benefit from culturally-aware service, value-conscious budgeting, and maintenance that honors the community's heritage while serving modern needs.",
          finalCta: "Boards in Berwyn choose Manage369 for culturally-aware, value-conscious service that celebrates their community's rich heritage. Let's connect today."
        }
      
      case 'cicero':
        return {
          intro: "Cicero thrives with strong Latino heritage, vibrant community celebrations, and growing neighborhoods that attract families seeking affordable homeownership with cultural connections. Manage369 provides specialized property management services for Cicero's emerging condominium developments — ensuring boards benefit from culturally-sensitive service, bilingual communication support, and maintenance that serves diverse community needs.",
          finalCta: "Boards in Cicero choose Manage369 for culturally-sensitive, bilingual service that celebrates their community's vibrant Latino heritage. Let's connect today."
        }
      
      default:
        return {
          intro: `${areaName} offers unique community character and residential opportunities that attract discerning residents. Manage369 provides specialized property management services for ${areaName}'s condominium, HOA, and townhome communities — ensuring boards benefit from professional service, transparent reporting, and proactive local support.`,
          finalCta: `Boards in ${areaName} choose Manage369 for professional, community-focused service. Let's connect today.`
        }
    }
  }

  const content = getAreaContent(area.name)
  
  // Get nearby communities from same region
  const nearbyAreas = serviceAreas
    .filter(a => a.region === area.region && a.id !== area.id)
    .slice(0, 6)

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <Helmet>
        {/* Meta Tags */}
        <title>Property Management in {area.name}, IL | Manage369</title>
        <meta
          name="description"
          content={`Manage369 provides premium property management services in ${area.name}, IL. Expert HOA, Condominium, and Townhome management with 24/7 support.`}
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
            "telephone": "+18478344131",
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
              "latitude": area.coordinates?.lat || 42.078,
              "longitude": area.coordinates?.lng || -87.815
            },
            "areaServed": `${area.name}, IL`,
            "priceRange": "$$"
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

      {/* H1 */}
      <h1 className="text-3xl font-bold text-center mb-6">
        Property Management in {area.name}, IL | Manage369
      </h1>

      {/* Intro Paragraph */}
      <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
        {content.intro}
      </p>

      {/* Services Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-center mb-8">
          Our Property Management Services in {area.name}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <a href="/services/condominium-management" className="block p-6 border rounded-xl shadow-sm hover:shadow-md hover:border-yellow-500 transition">
            <h3 className="text-lg font-semibold">Condominium Management</h3>
            <p className="text-sm mt-2">
              Full-service support for boutique, mid-rise, and high-rise condos.
            </p>
          </a>
          <a href="/services/hoa-management" className="block p-6 border rounded-xl shadow-sm hover:shadow-md hover:border-yellow-500 transition">
            <h3 className="text-lg font-semibold">HOA Management</h3>
            <p className="text-sm mt-2">
              Expert vendor oversight, budgeting, and governance for HOAs.
            </p>
          </a>
          <a href="/services/townhome-management" className="block p-6 border rounded-xl shadow-sm hover:shadow-md hover:border-yellow-500 transition">
            <h3 className="text-lg font-semibold">Townhome Management</h3>
            <p className="text-sm mt-2">
              Tailored solutions for {area.name}'s townhome communities.
            </p>
          </a>
        </div>
      </section>

      {/* Nearby Communities */}
      {nearbyAreas.length > 0 && (
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-center mb-8">
            Nearby Communities We Also Serve
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {nearbyAreas.map((nearbyArea) => (
              <a 
                key={nearbyArea.id}
                href={`/property-management-${nearbyArea.slug}`} 
                className="px-5 py-3 border rounded-lg hover:border-yellow-500 hover:bg-gray-50 transition"
              >
                {nearbyArea.name}
              </a>
            ))}
          </div>
        </section>
      )}

      {/* Final CTA */}
      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-4">
          Ready to Elevate Your {area.name} Community?
        </h2>
        <p className="text-gray-600 mb-6">
          {content.finalCta}
        </p>
        <a
          href="/contact"
          className="inline-block bg-yellow-500 text-white px-6 py-3 rounded-xl shadow-md hover:bg-yellow-600 transition"
        >
          Contact Manage369 Today
        </a>
      </div>
    </div>
  )
}

export default ServiceAreaDetail