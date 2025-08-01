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
          intro: "Glenview stands as one of the North Shore's most coveted residential destinations, where The Glen Town Center's upscale shopping meets The Grove National Historic Landmark's 145-acre prairie preserve. This affluent community of 47,000 residents boasts median home values exceeding $500,000, top-rated New Trier High School district access, and meticulously maintained neighborhoods that attract discerning families and professionals. Manage369 provides specialized property management services for Glenview's sophisticated condominium developments, exclusive HOA communities, and luxury townhome enclaves.",
          finalCta: "Glenview's most successful boards partner with Manage369 for white-glove service that matches their community's prestigious standards."
        }
      
      case 'downtown chicago':
        return {
          intro: "Downtown Chicago pulses as the economic heart of the Midwest, where 2.7 million square feet of office space towers above the historic Chicago River and generates over $600 billion in annual economic activity. This vertical metropolis houses 40,000+ residents in luxury high-rises ranging from converted 1920s Art Deco masterpieces to ultra-modern glass towers exceeding $1 million per unit. From Millennium Park's Crown Fountain to the architectural marvels of the Chicago Architecture Foundation's river tours, downtown living means embracing world-class culture, Michelin-starred dining, and 24/7 urban energy. Manage369 specializes in managing downtown's most exclusive residential towers, where concierge services, rooftop amenities, and building automation systems demand sophisticated oversight.",
          finalCta: "Downtown Chicago's elite residential towers trust Manage369 for metropolitan-grade management that matches their world-class standards."
        }
      
      case 'river north':
        return {
          intro: "River North emerged from Chicago's 1871 Great Fire as the city's warehouse and manufacturing district, where massive brick and timber structures housed everything from furniture factories to printing presses. Today, this 1.5-square-mile neighborhood commands some of Chicago's highest real estate prices, with converted loft condominiums selling for $400-800 per square foot and new luxury towers reaching $1,000+ per square foot. The neighborhood's 25,000 residents enjoy walking distance to the Magnificent Mile's $3 billion retail corridor, world-renowned galleries like the Richard Gray Gallery, and the Chicago River's architectural boat tours. Manage369 expertly manages River North's unique building stock, from 1890s warehouse conversions with exposed brick and 14-foot ceilings to contemporary glass towers with smart home technology.",
          finalCta: "River North's most prestigious buildings choose Manage369 for management that honors industrial heritage while delivering modern luxury."
        }
      
      case 'gold coast':
        return {
          intro: "The Gold Coast earned its gilded reputation in the 1880s when Chicago's wealthiest families—the Palmers, McCormicks, and Astors—built limestone mansions along Lake Shore Drive's coveted lakefront. This 0.8-square-mile enclave remains Chicago's most exclusive neighborhood, where median condo prices exceed $750,000 and penthouse units command $3-10 million. The area's 8,500 residents include Fortune 500 executives, prominent attorneys, and cultural philanthropists who support institutions like the Newberry Library and the Chicago History Museum. Oak Street Beach provides private-feeling lakefront recreation, while the Oak Street shopping district offers Hermès, Prada, and other luxury boutiques. Manage369 manages the Gold Coast's most distinguished buildings, including pre-war cooperatives with doormen, limestone facades, and residents who value absolute discretion.",
          finalCta: "Gold Coast's most exclusive buildings entrust Manage369 with management that upholds their legendary standards of elegance and privacy."
        }
      
      case 'streeterville':
        return {
          intro: "Streeterville's fascinating history began as a sandbar created by Captain George Streeter's grounded ship in 1886, eventually becoming landfill that now supports some of Chicago's most valuable real estate. This dense 0.6-square-mile peninsula houses 17,000 residents in soaring towers that command Lake Michigan views worth premium prices—lakefront units often exceed $1,200 per square foot. The neighborhood serves as Chicago's medical district hub, anchored by Northwestern Memorial Hospital's $1.2 billion campus and the prestigious Feinberg School of Medicine. Navy Pier's 9 million annual visitors, the Museum of Contemporary Art's cutting-edge exhibitions, and Ohio Street Beach's urban oasis create a uniquely energetic lakefront lifestyle. Manage369 manages Streeterville's sophisticated high-rises, where residents demand seamless building operations amid the neighborhood's constant activity.",
          finalCta: "Streeterville's premier residential towers rely on Manage369 for management that thrives in Chicago's most dynamic lakefront district."
        }
      
      case 'old town':
        return {
          intro: "Old Town survived the Great Chicago Fire of 1871 as one of the city's few intact neighborhoods, preserving Victorian-era cottages and Queen Anne mansions that now anchor a thriving arts district. The neighborhood's 7,800 residents live among cobblestone streets like Crilly Court, where 1880s row houses have been meticulously restored and converted into luxury condominiums selling for $300-600 per square foot. The Second City comedy club launched careers of John Belushi, Bill Murray, and Tina Fey, while the Old Town Art Fair draws 250,000 visitors annually to celebrate local artists. Lincoln Park Zoo's free admission and the Chicago History Museum's extensive archives provide cultural enrichment steps from residents' front doors. Manage369 specializes in managing Old Town's historic building conversions, where preservation requirements, landmark designations, and architectural integrity demand specialized expertise.",
          finalCta: "Old Town's most cherished historic buildings trust Manage369 for preservation-focused management that honors their architectural legacy."
        }
      
      case 'lincoln park':
        return {
          intro: "Lincoln Park evolved from a cemetery into Chicago's premier lakefront neighborhood, where 1,200 acres of parkland, lagoons, and beaches create an urban oasis valued at over $1 billion in recreational amenities. This affluent community of 65,000 residents enjoys median home values exceeding $650,000, with luxury condominiums along Lake Shore Drive commanding $400-800 per square foot. DePaul University's 23,000 students energize the southern portion, while families gravitate toward tree-lined streets near Lincoln Elementary School (rated 9/10). The Lincoln Park Zoo's 1,000 animals, the Chicago History Museum's 22 million artifacts, and North Avenue Beach's volleyball courts provide world-class recreation. Manage369 manages Lincoln Park's diverse building portfolio, from 1920s vintage cooperatives with lakefront views to contemporary towers with rooftop decks and smart building technology.",
          finalCta: "Lincoln Park's most desirable buildings choose Manage369 for management that enhances their lakefront lifestyle and investment value."
        }
      
      case 'lakeview':
        return {
          intro: "Lakeview earned its name from stunning Lake Michigan vistas and evolved into Chicago's most densely populated neighborhood, housing 103,000 residents in a vibrant 2.8-square-mile area that generates over $2 billion in annual economic activity. Wrigley Field's 41,649-seat capacity brings 3 million Cubs fans annually to the historic Wrigleyville district, where vintage 1920s apartment buildings command premium rents during baseball season. The neighborhood's eclectic housing stock ranges from $200,000 vintage walk-ups to $1 million+ luxury condominiums, with the lakefront Belmont Harbor marina adding recreational boating for 1,000+ vessels. Lincoln Park Zoo's northern entrance, the Music Box Theatre's independent films, and Southport Corridor's boutique shopping create diverse entertainment options. Manage369 manages Lakeview's varied building types, from century-old courtyard buildings requiring specialized maintenance to modern towers with amenity decks and Cubs views.",
          finalCta: "Lakeview's most successful buildings partner with Manage369 for management that captures the neighborhood's dynamic energy and investment potential."
        }
      
      case 'wicker park':
        return {
          intro: "Wicker Park transformed from a working-class Polish and Ukrainian enclave into Chicago's bohemian capital, where 1890s industrial buildings house art galleries, music venues, and creative lofts that launched the careers of bands like Smashing Pumpkins and Liz Phair. This 1.2-square-mile neighborhood's 26,000 residents include artists, musicians, and tech entrepreneurs who've driven median home values to $450,000+ while preserving the area's creative authenticity. The Flat Iron Arts Building's artist studios, Subterranean's indie music shows, and the annual Wicker Park Fest draw cultural enthusiasts from across the Midwest. Vintage brick and timber loft buildings, many converted from furniture factories and breweries, offer soaring ceilings and exposed architectural elements that command $300-500 per square foot. Manage369 specializes in managing Wicker Park's unique building conversions, where historic preservation, artist live-work spaces, and creative community needs require innovative management approaches.",
          finalCta: "Wicker Park's most creative buildings trust Manage369 for management that honors artistic heritage while ensuring modern functionality."
        }
      
      case 'bucktown':
        return {
          intro: "Bucktown earned its name from the goats kept by Polish and German immigrants in the 1800s, evolving into one of Chicago's most family-friendly neighborhoods where young professionals and growing families invest in $400,000-700,000 single-family homes and luxury condominiums. The elevated 606 trail, built on a former railway line, provides 2.7 miles of car-free recreation connecting Bucktown to four other neighborhoods and attracting 750,000+ annual users. This 0.8-square-mile community of 23,000 residents enjoys tree-lined streets, award-winning restaurants like Alinea (3 Michelin stars), and boutique shopping along Damen Avenue's trendy corridor. Bucktown's housing stock includes converted industrial lofts, new construction townhomes, and vintage single-family houses that maintain the neighborhood's residential character. Manage369 manages Bucktown's family-oriented developments, where playground access, pet-friendly policies, and community gardens reflect residents' lifestyle priorities.",
          finalCta: "Bucktown's family-focused communities choose Manage369 for management that supports their neighborhood's residential charm and investment growth."
        }
      
      case 'logan square':
        return {
          intro: "Logan Square anchors Chicago's northwest side with its iconic 1917 Illinois Centennial Monument and tree-lined boulevards designed by the same landscape architects who created Central Park. This rapidly gentrifying neighborhood of 73,000 residents has seen median home values rise 85% since 2010, reaching $350,000+ as young professionals discover affordable Victorian houses, spacious apartments, and a thriving craft brewery scene. Revolution Brewing's flagship location, Longman & Eagle's James Beard recognition, and the Logan Square Farmers Market (Chicago's second-largest) create a foodie destination that attracts visitors citywide. The neighborhood's housing includes 1920s courtyard buildings, converted industrial spaces, and new construction condominiums that blend affordability with urban amenities. Manage369 manages Logan Square's diverse building portfolio, where community gardens, bike storage, and local business partnerships reflect residents' values and lifestyle preferences.",
          finalCta: "Logan Square's most forward-thinking buildings partner with Manage369 for management that embraces the neighborhood's creative evolution and community spirit."
        }
      
      case 'edgewater':
        return {
          intro: "Edgewater stretches along 1.5 miles of Lake Michigan shoreline, where 1920s luxury hotels like the Edgewater Beach Hotel once hosted celebrities and now inspire modern high-rise condominiums with panoramic lake views selling for $200-500 per square foot. This diverse neighborhood of 56,000 residents speaks over 40 languages, creating a multicultural tapestry reflected in restaurants serving everything from Ethiopian injera to Vietnamese pho along Broadway's bustling commercial strip. Loyola University Chicago's lakefront campus brings 17,000 students and academic energy, while Loyola Beach and Montrose Beach provide swimming, kayaking, and beach volleyball just steps from residents' doors. The neighborhood's housing ranges from vintage courtyard buildings and mid-century high-rises to new luxury towers with rooftop decks and lake access. Manage369 manages Edgewater's lakefront buildings, where beach access, diverse resident needs, and seasonal tourism create unique management considerations.",
          finalCta: "Edgewater's lakefront communities trust Manage369 for management that celebrates diversity while maximizing their prime location advantages."
        }
      
      case 'rogers park':
        return {
          intro: "Rogers Park stands as Chicago's most internationally diverse neighborhood, where residents from 80+ countries create a United Nations-like community that speaks dozens of languages and celebrates cultures from Somalia to India to Mexico. This lakefront neighborhood of 55,000 residents offers some of Chicago's most affordable housing, with vintage apartments averaging $800-1,200 per month and condominiums selling for $100-300 per square foot, making it a gateway community for new immigrants and young professionals. Loyola University Chicago's main campus brings 17,000 students and academic resources, while the Heartland Café's vegetarian cuisine and live music venue represents the neighborhood's progressive, bohemian spirit. The area's housing stock includes 1920s courtyard buildings, lakefront high-rises with stunning views, and vintage single-family homes that reflect a century of immigrant settlement patterns. Manage369 manages Rogers Park's diverse building portfolio, where multilingual communication, cultural sensitivity, and affordable maintenance solutions serve residents from around the globe.",
          finalCta: "Rogers Park's most welcoming buildings choose Manage369 for management that honors their global community and supports residents from all backgrounds."
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
          intro: "Evanston pioneered progressive governance as the birthplace of the Women's Christian Temperance Union and remains a beacon of social innovation, where Northwestern University's $11 billion endowment and 22,000 students create an intellectual powerhouse that drives the local economy. This lakefront city of 75,000 residents boasts median home values of $450,000+ and a commitment to sustainability evidenced by LEED-certified buildings, comprehensive recycling programs, and the nation's first climate action plan adopted by a municipality. The downtown district generates over $500 million in annual retail sales, anchored by the Sherman Plaza shopping center and dozens of locally-owned restaurants and boutiques. Evanston's housing ranges from historic mansions near the lakefront (many converted to luxury condominiums) to modern high-rises with Northwestern views and sustainable building features. Manage369 manages Evanston's sophisticated building portfolio, where academic calendars, sustainability requirements, and educated residents demand environmentally conscious and intellectually rigorous management approaches.",
          finalCta: "Evanston's most progressive buildings partner with Manage369 for management that reflects their commitment to sustainability, education, and community innovation."
        }
      
      case 'wilmette':
        return {
          intro: "Wilmette embodies North Shore sophistication with tree-canopied streets, the magnificent Bahá'í House of Worship (one of only eight in the world), and New Trier High School's legendary academic excellence that consistently ranks among America's top public schools. This affluent village of 27,000 residents enjoys median home values exceeding $750,000, with lakefront properties commanding $1-3 million and reflecting the community's commitment to architectural preservation and environmental stewardship. The village's Metra train service provides 30-minute access to downtown Chicago, while Gillson Park's 60 acres of lakefront recreation, sailing programs, and beach facilities create resort-like amenities. Wilmette's housing includes stately Tudor and Colonial Revival homes, luxury condominiums in converted mansions, and new construction that adheres to strict architectural guidelines preserving the community's character. Manage369 manages Wilmette's most prestigious residential developments, where residents expect white-glove service, meticulous maintenance, and management that upholds the village's reputation for excellence.",
          finalCta: "Wilmette's most distinguished buildings entrust Manage369 with management that upholds their legendary standards of elegance and community excellence."
        }
      
      case 'winnetka':
        return {
          intro: "Winnetka stands as the crown jewel of Chicago's North Shore, where lakefront estates worth $2-10 million line Sheridan Road and New Trier High School maintains its century-long reputation as America's premier public high school with 99% college acceptance rates. This exclusive village of 12,000 residents, including Fortune 500 CEOs, federal judges, and cultural philanthropists, maintains median home values exceeding $1.2 million while preserving 100+ acres of pristine lakefront parks and beaches. The village's architectural heritage includes designs by David Adler, Howard Van Doren Shaw, and other masters of American residential architecture, protected by strict historic preservation guidelines. Winnetka's limited condominium developments occupy converted estates or new construction that meets the village's exacting architectural standards, offering residents privacy, luxury, and access to world-class amenities. Manage369 manages Winnetka's most exclusive residential properties, where absolute discretion, impeccable maintenance, and white-glove service meet the expectations of Chicago's most discerning residents.",
          finalCta: "Winnetka's most exclusive buildings trust Manage369 for management that delivers the absolute discretion and excellence their residents demand."
        }
      
      case 'kenilworth':
        return {
          intro: "Kenilworth reigns as the North Shore's most exclusive enclave, a 0.6-square-mile village of just 2,500 residents where lakefront estates worth $3-15 million occupy lots averaging 1+ acres and reflect a century of architectural mastery by Daniel Burnham, David Adler, and other luminaries. Founded in 1889 as a planned community for Chicago's industrial elite, Kenilworth maintains its character through the nation's most restrictive zoning laws—no commercial development, no apartments, and architectural review for every exterior modification. The village's residents include hedge fund managers, private equity partners, and multi-generational Chicago families who value absolute privacy and maintain the community's social institutions like the Kenilworth Club and Kenilworth Union Church. Kenilworth's rare condominium developments occupy converted historic estates or new construction that meets the village's architectural standards while providing luxury amenities and lakefront access. Manage369 manages Kenilworth's most prestigious residential properties, where residents expect museum-quality maintenance, complete confidentiality, and service that honors the village's legendary exclusivity.",
          finalCta: "Kenilworth's most exclusive properties entrust Manage369 with management that maintains their unparalleled standards of privacy and prestige."
        }
      
      case 'glencoe':
        return {
          intro: "Glencoe enchants as the North Shore's garden community, where the world-renowned Chicago Botanic Garden's 385 acres showcase 2.6 million plants and attract 900,000+ annual visitors to this village of 8,700 residents who cherish both natural beauty and academic excellence. The village's median home values exceed $900,000, with lakefront properties commanding $2-5 million and reflecting residents' commitment to environmental stewardship and architectural harmony with the landscape. Glencoe's New Trier High School consistently ranks among America's top public schools, while the village's tree preservation ordinances, native plant initiatives, and sustainable building practices demonstrate residents' environmental consciousness. The community's housing includes stately homes designed by Prairie School architects, luxury condominiums in converted estates, and new construction that incorporates green building principles and preserves mature tree canopies. Manage369 manages Glencoe's most distinguished residential developments, where residents expect environmentally conscious maintenance, preservation of natural beauty, and service that reflects their commitment to sustainability and community stewardship.",
          finalCta: "Glencoe's most environmentally conscious buildings choose Manage369 for management that honors their commitment to natural beauty and sustainable living."
        }
      
      case 'highland park':
        return {
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