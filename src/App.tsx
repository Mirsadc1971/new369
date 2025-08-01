import React from 'react'
import { useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { serviceAreas } from './data/serviceAreas'

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

  // Get area-specific content with DRAMATICALLY different stories
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
          intro: "Uptown showcases 1920s grandeur as Chicago's former entertainment district, where the restored Uptown Theatre, Green Mill Cocktail Lounge (Al Capone's favorite speakeasy), and Aragon Ballroom continue hosting world-class performances in venues that once defined Chicago's jazz age glamour. This culturally rich neighborhood attracts music lovers, history buffs, and urban pioneers who appreciate architectural authenticity, live music venues, and the area's ongoing renaissance. The neighborhood's mix of restored vintage buildings and new construction creates diverse housing options, from affordable apartments to luxury condominiums with lake views and historic character. Manage369 manages Uptown's historic buildings and modern developments, where preservation requirements, entertainment district dynamics, music venue proximity, and residents who value both cultural heritage and contemporary amenities require specialized management expertise.",
          finalCta: "Uptown's most culturally significant buildings trust Manage369 for management that honors their entertainment heritage while supporting the neighborhood's continued renaissance."
        }
      
      case 'lincoln square':
        return {
          intro: "Lincoln Square maintains its authentic German heritage through Oktoberfest celebrations, European-style architecture, and the charming Lincoln Square farmers market that creates an Old World atmosphere unique in Chicago. This family-oriented neighborhood attracts European expatriates, families seeking community connections, and professionals who value cultural authenticity over trendy gentrification. The DANK Haus German American Cultural Center, Merz Apothecary's European imports, and traditional German restaurants like Chicago Brauhaus preserve the area's cultural identity while welcoming new residents. Manage369 manages Lincoln Square's boutique condominiums and historic buildings, where European architectural details, community-focused residents, cultural preservation needs, and family-friendly amenities require management that respects tradition while providing modern convenience and professional oversight.",
          finalCta: "Lincoln Square's most culturally authentic buildings choose Manage369 for management that preserves their European heritage while ensuring modern comfort and community connection."
        }
      
      case 'ravenswood':
        return {
          intro: "Ravenswood offers tranquil residential living with tree-lined streets, convenient Brown Line access, and a strong sense of community among families and young professionals who seek neighborhood charm without sacrificing urban convenience. This peaceful enclave features well-maintained vintage buildings, new construction condominiums, and single-family homes that attract residents seeking stability, good schools, and authentic neighborhood character. The area's proximity to Lincoln Square's cultural amenities, easy downtown commuting, and family-friendly parks create an ideal balance of urban access and residential peace. Manage369 manages Ravenswood's growing condominium developments and vintage buildings, where residents value quiet enjoyment, community connections, family-friendly policies, and management that maintains the neighborhood's residential tranquility while ensuring modern building operations and professional oversight.",
          finalCta: "Ravenswood's most peaceful buildings choose Manage369 for management that enhances their residential appeal, maintains tranquility, and supports community connections."
        }
      
      case 'north center':
        return {
          intro: "North Center combines family-friendly atmosphere with the vibrant Southport Corridor, featuring the historic Music Box Theatre, tree-lined residential streets, and a strong sense of community that makes it ideal for raising children while enjoying urban amenities. This neighborhood attracts young families, education professionals, and long-term residents who value excellent schools, safe streets, and the perfect balance of suburban feel within city limits. Bell Elementary School's outstanding reputation, Hamlin Park's recreational facilities, and the Southport Corridor's local businesses create a village-like atmosphere that's increasingly rare in Chicago. Manage369 manages North Center's family-oriented condominiums and townhomes, where residents prioritize safety, community connections, family-friendly amenities, and management that supports their commitment to raising children in a nurturing urban environment.",
          finalCta: "North Center's most family-focused buildings choose Manage369 for management that supports their community values, enhances safety, and creates lasting neighborhood connections."
        }
      
      case 'albany park':
        return {
          intro: "Albany Park celebrates incredible cultural diversity as one of Chicago's most internationally rich neighborhoods, where residents from over 40 countries create a global marketplace of authentic restaurants, cultural centers, and international businesses along Lawrence Avenue's bustling commercial strip. This affordable neighborhood serves as Chicago's Ellis Island, welcoming new immigrants while providing established families with spacious apartments, single-family homes, and growing condominium developments at prices significantly below downtown rates. The scenic North Branch of the Chicago River, Eugene Field Park's recreational facilities, and the neighborhood's strong community organizations create a supportive environment for families building new lives in America. Manage369 manages Albany Park's diverse building portfolio, where multilingual communication, cultural sensitivity, community-building initiatives, and affordable maintenance solutions serve residents from around the globe while fostering the neighborhood's welcoming, inclusive spirit.",
          finalCta: "Albany Park's most welcoming buildings choose Manage369 for management that celebrates cultural diversity, supports new Americans, and builds strong international communities."
        }
      
      case 'irving park':
        return {
          intro: "Irving Park blends Polish heritage with modern convenience, featuring Independence Park's 60 acres of recreational facilities, Blue Line accessibility for easy downtown commuting, and strong community organizations that maintain neighborhood character while embracing positive change. This stable, working-class neighborhood attracts first-time homebuyers, city employees, and families who value affordability, community connections, and authentic Chicago neighborhood character. The area's Polish heritage remains visible in traditional bakeries, cultural organizations, and community festivals, while new residents add diversity and energy to local businesses and schools. Manage369 manages Irving Park's mix of vintage buildings and newer developments, where residents value community involvement, affordable living, practical amenities, and management that respects the neighborhood's working-class roots while ensuring professional building operations and long-term value preservation.",
          finalCta: "Irving Park's most community-minded buildings choose Manage369 for management that honors their heritage, supports working families, and maintains neighborhood authenticity."
        }
      
      case 'avondale':
        return {
          intro: "Avondale transforms from its industrial past into a vibrant residential neighborhood that attracts young professionals, artists, and families seeking affordable housing with easy access to downtown Chicago and O'Hare Airport. This emerging area features converted industrial buildings, new construction condominiums, and vintage homes that offer significant value compared to more established neighborhoods. The area's proximity to the Kennedy Expressway, Blue Line access, and growing restaurant scene create investment opportunities for residents who recognize the neighborhood's potential for continued appreciation. Manage369 manages Avondale's emerging condominium developments and converted buildings, where residents value affordability, growth potential, convenient transportation, and management that supports the neighborhood's positive transformation while maintaining community character and ensuring professional building operations.",
          finalCta: "Avondale's most forward-thinking buildings choose Manage369 for management that supports their growth potential, maintains affordability, and builds strong community foundations."
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
          intro: "Highland Park represents the pinnacle of North Shore elegance, combining historic charm with modern sophistication. This prestigious lakefront community is home to Ravinia Festival, America's oldest outdoor music festival, and boasts tree-lined streets with magnificent estates designed by renowned architects like David Adler and Howard Van Doren Shaw. The city's commitment to preserving its natural beauty is evident in its extensive park system and protected lakefront, making it a haven for families seeking the perfect balance of cultural enrichment and outdoor recreation.",
          details: {
            founded: "1869",
            population: "30,176",
            medianIncome: "$147,067",
            keyIndustries: ["Finance", "Healthcare", "Professional Services", "Arts & Culture"],
            landmarks: ["Ravinia Festival", "Highland Park Country Club", "Rosewood Beach", "Port Clinton Square"],
            schools: ["Highland Park High School", "Braeside Elementary", "Edgewood Middle School"],
            transportation: ["Metra Union Pacific North Line", "US Route 41", "Sheridan Road"],
            culturalHighlights: ["Highland Park Players", "North Shore Art League", "Highland Park Historical Society"]
          }
        };
      case 'lake forest':
        return {
          intro: "Lake Forest embodies North Shore sophistication with historic estates, Lake Forest College's prestigious liberal arts education, and pristine forest preserves that create an atmosphere of refined elegance and natural beauty unmatched in the Chicago area. This exclusive community attracts old-money families, successful entrepreneurs, and cultural leaders who value privacy, architectural heritage, and environmental preservation. The city's Market Square, designed by Howard Van Doren Shaw, represents one of America's first planned shopping centers, while the Deer Path Inn provides luxury accommodations that reflect the community's commitment to excellence. Manage369 manages Lake Forest's exclusive condominium developments and luxury communities, where residents expect refined service, discreet financial oversight, architectural preservation, and management that maintains both the community's natural beauty and its reputation as one of America's most prestigious residential communities.",
          finalCta: "Lake Forest's most refined buildings entrust Manage369 with management that maintains their sophisticated character, preserves natural beauty, and upholds their prestigious reputation."
        }
      
      case 'northbrook':
        return {
          intro: "Northbrook combines excellent schools with family-friendly amenities, featuring beautiful parks, the Northbrook Court shopping center, and a strong sense of community that attracts families seeking suburban excellence with convenient access to both Chicago and Milwaukee. This well-planned community attracts education-focused families, successful professionals, and long-term residents who value stability, safety, and the community's commitment to maintaining high standards in schools, parks, and municipal services. The village's recreational facilities, including the Northbrook Sports Center and numerous parks, provide year-round activities for families and active adults. Manage369 manages Northbrook's growing condominium and townhome developments, where residents value family-friendly policies, excellent schools, recreational amenities, and management that supports the community's commitment to family life, educational excellence, and maintaining property values through professional oversight and community-focused service.",
          finalCta: "Northbrook's most family-focused buildings choose Manage369 for management that enhances their community appeal, supports family values, and maintains their reputation for excellence."
        }
      
      case 'deerfield':
        return {
          intro: "Deerfield offers suburban tranquility with excellent schools, beautiful parks, and the scenic Des Plaines River creating an ideal environment for families and professionals seeking peaceful living with natural beauty and recreational opportunities. This well-established community attracts families prioritizing education, outdoor enthusiasts, and professionals who value the balance of suburban peace with convenient access to Chicago's business districts. The village's commitment to preserving open space, maintaining excellent municipal services, and supporting local businesses creates a stable, attractive environment for long-term residents. Manage369 manages Deerfield's condominium and townhome communities, where residents value peaceful environments, natural beauty, family-friendly amenities, and management that preserves the area's tranquil character while ensuring professional building operations and maintaining the community's reputation for suburban excellence and environmental stewardship.",
          finalCta: "Deerfield's most peaceful buildings choose Manage369 for management that maintains their tranquil character, supports family life, and preserves natural beauty."
        }
      
      case 'buffalo grove':
        return {
          intro: "Buffalo Grove thrives as a diverse, family-oriented community with excellent schools, beautiful parks, and a strong commitment to maintaining suburban character while embracing cultural diversity that creates a welcoming environment for families from many backgrounds. This planned community attracts young families, diverse professionals, and residents who value inclusivity, excellent municipal services, and the community's commitment to providing recreational opportunities for all ages and interests. The village's numerous parks, recreational programs, and community events foster connections among residents from various cultural backgrounds. Manage369 manages Buffalo Grove's varied condominium and townhome developments, where residents value inclusive policies, diverse community programming, family-friendly amenities, and management that celebrates the community's multicultural character while maintaining high standards for building operations and community life.",
          finalCta: "Buffalo Grove's most inclusive buildings choose Manage369 for management that celebrates their diversity, supports family life, and builds strong multicultural communities."
        }
      
      case 'vernon hills':
        return {
          intro: "Vernon Hills combines modern amenities with natural beauty, featuring Cuneo Mansion and Gardens' historic elegance, excellent shopping at Hawthorn Hills, and a growing community of young families and professionals who appreciate the balance of suburban convenience with cultural and recreational opportunities. This newer community attracts families seeking modern homes, professionals valuing convenient transportation, and residents who appreciate both historic preservation and contemporary amenities. The village's commitment to maintaining green spaces, supporting local businesses, and providing excellent municipal services creates an attractive environment for residents seeking suburban lifestyle with urban conveniences. Manage369 manages Vernon Hills' newer condominium and townhome developments, where residents value modern amenities, convenient shopping, recreational opportunities, and management that supports the community's continued growth while maintaining high standards for building operations and community development.",
          finalCta: "Vernon Hills' most modern buildings choose Manage369 for management that supports their continued growth, maintains high standards, and enhances their suburban lifestyle."
        }
      
      case 'libertyville':
        return {
          intro: "Libertyville maintains its historic charm with a vibrant downtown, beautiful lakes, and strong community traditions that create a perfect blend of small-town atmosphere and modern convenience for families and professionals seeking authentic community connections. This historic community attracts families valuing tradition, small business owners, and residents who appreciate the village's commitment to preserving its character while supporting local businesses and community events. The downtown district's local shops, restaurants, and community events, combined with access to lakes and forest preserves, create a lifestyle that balances small-town charm with modern amenities. Manage369 manages Libertyville's boutique condominium developments and townhome communities, where residents value community traditions, local business support, historic preservation, and management that honors the village's small-town character while providing professional building operations and maintaining property values through community-focused service.",
          finalCta: "Libertyville's most tradition-honoring buildings choose Manage369 for management that preserves their small-town charm, supports local community, and maintains historic character."
        }
      
      case 'mundelein':
        return {
          intro: "Mundelein offers lakefront living with Diamond Lake's recreational opportunities, strong community spirit, and growing amenities that attract families seeking affordable North Shore lifestyle with small-town values and natural beauty. This lakefront community attracts young families, outdoor enthusiasts, and residents who value affordability, natural recreation, and the community's commitment to maintaining its lakefront character while providing modern amenities and services. Diamond Lake's swimming, boating, and fishing opportunities, combined with the village's parks and recreational programs, create a resort-like lifestyle at affordable prices. Manage369 manages Mundelein's lakefront condominiums and family-oriented developments, where residents value lake access, outdoor recreation, family-friendly policies, and management that supports the community's lakefront lifestyle while maintaining affordability and ensuring professional building operations that preserve both property values and the area's natural beauty.",
          finalCta: "Mundelein's most lakefront-focused buildings choose Manage369 for management that enhances their lake lifestyle, maintains affordability, and supports their community's natural beauty."
        }
      
      case 'lake zurich':
        return {
          intro: "Lake Zurich centers around its beautiful namesake lake with water activities, charming downtown, and a strong sense of community that attracts families seeking lakefront living with suburban convenience and recreational opportunities year-round. This water-centered community attracts boating enthusiasts, families seeking lake lifestyle, and residents who value the combination of natural beauty with excellent schools and convenient shopping. The lake's swimming, boating, and fishing opportunities, combined with the downtown district's local businesses and community events, create a lifestyle focused on outdoor recreation and community connections. Manage369 manages Lake Zurich's lakefront condominiums and townhome communities, where residents value lake access, water recreation, community events, and management that celebrates the community's water-centered lifestyle while ensuring professional building operations and maintaining the lakefront character that makes this community special.",
          finalCta: "Lake Zurich's most lake-focused buildings choose Manage369 for management that celebrates their waterfront lifestyle, supports lake recreation, and maintains their community's natural beauty."
        }
      
      case 'barrington':
        return {
          intro: "Barrington combines equestrian heritage with modern sophistication, featuring horse farms, the Barrington Hills countryside, and a commitment to preserving rural character within suburban convenience that attracts families seeking space, privacy, and connection to the land. This unique community attracts equestrian enthusiasts, families seeking large lots, and residents who value the combination of rural character with excellent schools and convenient access to Chicago. The area's horse farms, forest preserves, and large residential lots create a countryside atmosphere that's increasingly rare in the Chicago metropolitan area. Manage369 manages Barrington's unique condominium developments and luxury communities, where residents value privacy, rural character, equestrian amenities, and management that respects the area's agricultural heritage while providing professional building operations and maintaining the community's commitment to preserving open space and rural character.",
          finalCta: "Barrington's most heritage-conscious buildings choose Manage369 for management that honors their equestrian traditions, preserves rural character, and maintains their unique countryside lifestyle."
        }
      
      case 'inverness':
        return {
          intro: "Inverness epitomizes luxury living with rolling hills, pristine golf courses, and custom estates that create an exclusive community where privacy, natural beauty, and architectural excellence attract Chicago's most successful residents seeking the ultimate suburban sanctuary. This exclusive community attracts corporate executives, successful entrepreneurs, and affluent families who value privacy, luxury amenities, and the community's commitment to maintaining its exclusive character through large lot requirements and architectural standards. The area's golf courses, forest preserves, and custom homes on multi-acre lots create a lifestyle that combines luxury with natural beauty and privacy. Manage369 manages Inverness's select condominium developments and luxury communities, where residents expect exclusive service, complete privacy, luxury amenities, and management that maintains the community's reputation for excellence while providing discreet, professional building operations that meet the highest standards of luxury living.",
          finalCta: "Inverness's most exclusive buildings trust Manage369 for management that maintains their luxury standards, ensures complete privacy, and upholds their reputation for excellence."
        }
      
      case 'palatine':
        return {
          intro: "Palatine offers diverse neighborhoods with excellent transportation, strong schools, and a vibrant downtown that attracts families and commuters seeking suburban convenience with urban accessibility and community connections. This well-established community attracts commuting professionals, diverse families, and residents who value the combination of suburban amenities with convenient transportation to Chicago and O'Hare Airport. The downtown district's revitalization, excellent Metra service, and diverse housing options create opportunities for residents seeking suburban lifestyle with urban conveniences. Manage369 manages Palatine's varied condominium and townhome developments, where residents value convenient transportation, diverse community programming, family-friendly amenities, and management that serves the community's diverse needs while maintaining professional building operations and supporting the area's continued development and community growth.",
          finalCta: "Palatine's most accessible buildings choose Manage369 for management that serves their diverse community, supports convenient living, and maintains their suburban appeal."
        }
      
      case 'arlington heights':
        return {
          intro: "Arlington Heights combines historic charm with modern amenities, featuring Arlington Park racetrack's thoroughbred racing heritage, vibrant downtown district, and excellent transportation that makes it a premier northwest suburban destination for families and professionals. This established community attracts horse racing enthusiasts, families seeking excellent schools, and professionals who value the combination of historic character with modern conveniences and easy access to Chicago. The downtown district's shopping, dining, and entertainment venues, combined with the village's parks and recreational facilities, create a lifestyle that balances suburban comfort with urban sophistication. Manage369 manages Arlington Heights' diverse condominium and townhome communities, where residents value historic character, modern amenities, convenient transportation, and management that honors the community's heritage while providing professional building operations and maintaining the area's reputation for suburban excellence and community pride.",
          finalCta: "Arlington Heights' most heritage-conscious buildings choose Manage369 for management that balances historic character with modern convenience and maintains their suburban excellence."
        }
      
      case 'mount prospect':
        return {
          intro: "Mount Prospect thrives with family-friendly neighborhoods, excellent schools, and strong community programs that create an ideal environment for raising families while maintaining suburban charm and community connections that span generations. This stable community attracts young families, education-focused parents, and long-term residents who value the village's commitment to maintaining excellent schools, safe neighborhoods, and recreational opportunities for all ages. The village's parks, recreational programs, and community events foster connections among residents who choose Mount Prospect for its family-oriented character and commitment to community life. Manage369 manages Mount Prospect's family-oriented condominium and townhome developments, where residents value safety, excellent schools, family-friendly policies, and management that supports the community's commitment to family life while ensuring professional building operations and maintaining the suburban character that makes this community ideal for raising children.",
          finalCta: "Mount Prospect's most family-focused buildings choose Manage369 for management that supports their family values, enhances safety, and maintains their community's appeal to families."
        }
      
      case 'des plaines':
        return {
          intro: "Des Plaines offers convenient living with excellent transportation, diverse neighborhoods, and the scenic Des Plaines River that creates opportunities for both urban convenience and natural recreation while maintaining affordability and accessibility for working families. This practical community attracts commuting professionals, diverse families, and residents who value convenient access to O'Hare Airport, downtown Chicago, and suburban amenities without premium pricing. The Des Plaines River's recreational opportunities, combined with the city's parks and community facilities, provide natural beauty and outdoor recreation within an urban setting. Manage369 manages Des Plaines' varied condominium developments, where residents value convenient transportation, affordable living, diverse community programming, and management that serves practical needs while maintaining professional building operations and supporting the community's accessibility and convenience for working families and commuting professionals.",
          finalCta: "Des Plaines' most convenient buildings choose Manage369 for management that supports their accessibility, serves diverse needs, and maintains their practical appeal for working families."
        }
      
      case 'park ridge':
        return {
          intro: "Park Ridge maintains its reputation as a premier family community with excellent schools, beautiful parks, and strong civic engagement that attracts families seeking suburban excellence with small-town character and community pride that spans generations. This prestigious community attracts education-focused families, civic-minded professionals, and residents who value the community's commitment to maintaining high standards in schools, municipal services, and community programming. The city's tree-lined streets, excellent parks, and strong community organizations create an environment where families can build lasting connections and children can thrive. Manage369 manages Park Ridge's established condominium and townhome communities, where residents value educational excellence, community involvement, family-friendly policies, and management that maintains the community's high standards while providing professional building operations and supporting the civic engagement that defines this premier family community.",
          finalCta: "Park Ridge's most excellence-focused buildings choose Manage369 for management that maintains their premier reputation, supports family values, and upholds their commitment to community excellence."
        }
      
      case 'niles':
        return {
          intro: "Niles combines cultural diversity with suburban convenience, featuring the iconic Leaning Tower of Niles, strong community services, and neighborhoods that welcome families from many backgrounds while maintaining suburban character and community connections. This diverse community attracts immigrant families, working professionals, and residents who value the combination of cultural diversity with suburban amenities and affordable housing options. The village's community services, recreational programs, and cultural celebrations reflect the diversity of residents who choose Niles for its welcoming character and practical amenities. Manage369 manages Niles' diverse condominium developments, where residents value cultural inclusivity, community programming, affordable living, and management that serves multicultural needs while maintaining professional building operations and supporting the community's welcoming character and commitment to serving families from diverse backgrounds.",
          finalCta: "Niles' most welcoming buildings choose Manage369 for management that celebrates their diversity, supports multicultural families, and maintains their inclusive community character."
        }
      
      case 'skokie':
        return {
          intro: "Skokie celebrates incredible diversity with residents from around the world, excellent schools, and strong community programs that create a welcoming environment for all families while maintaining suburban amenities and community connections that bridge cultural differences. This internationally diverse community attracts immigrant families, multicultural professionals, and residents who value the village's commitment to inclusivity, excellent municipal services, and community programming that celebrates cultural diversity. The village's cultural centers, diverse restaurants, and community events reflect the global character of residents who choose Skokie for its welcoming atmosphere and practical suburban amenities. Manage369 manages Skokie's diverse condominium and townhome communities, where residents value multicultural programming, inclusive policies, community connections, and management that serves diverse cultural needs while maintaining professional building operations and supporting the village's commitment to creating a welcoming environment for families from around the world.",
          finalCta: "Skokie's most inclusive buildings choose Manage369 for management that celebrates their international character, supports diverse families, and builds strong multicultural communities."
        }
      
      case 'morton grove':
        return {
          intro: "Morton Grove offers family-friendly living with excellent schools, beautiful parks, and a strong sense of community that attracts families seeking suburban tranquility with urban convenience and community connections that support family life and long-term stability. This stable community attracts young families, education-focused parents, and residents who value the village's commitment to maintaining safe neighborhoods, excellent schools, and recreational opportunities that support family life. The village's parks, community center, and family-oriented programming create an environment where children can thrive and families can build lasting connections. Manage369 manages Morton Grove's family-oriented condominium developments, where residents value safety, excellent schools, family-friendly amenities, and management that supports the community's commitment to family life while ensuring professional building operations and maintaining the suburban character that makes this community ideal for raising children and building family connections.",
          finalCta: "Morton Grove's most family-focused buildings choose Manage369 for management that supports their family values, enhances community connections, and maintains their appeal to families."
        }
      
      case 'lincolnwood':
        return {
          intro: "Lincolnwood combines small-town charm with big-city convenience, featuring beautiful residential neighborhoods, excellent schools, and easy access to both Chicago and the North Shore that creates an ideal balance for families and professionals seeking community connections with urban accessibility. This charming community attracts families seeking small-town atmosphere, professionals valuing convenient access, and residents who appreciate the village's commitment to maintaining its residential character while providing modern amenities and services. The village's tree-lined streets, community events, and local businesses create a neighborhood feel that's increasingly rare in the Chicago metropolitan area. Manage369 manages Lincolnwood's boutique condominium developments, where residents value community connections, small-town character, convenient access, and management that preserves the village's residential charm while providing professional building operations and maintaining the community character that attracts families seeking authentic neighborhood living.",
          finalCta: "Lincolnwood's most community-focused buildings choose Manage369 for management that preserves their small-town charm, supports community connections, and maintains their residential appeal."
        }
      
      case 'oak park':
        return {
          intro: "Oak Park showcases architectural heritage with the world's largest collection of Frank Lloyd Wright buildings, diverse community spirit, and progressive values that create a unique blend of historic preservation and social consciousness that attracts architects, educators, and socially conscious families. This culturally rich community attracts architecture enthusiasts, progressive professionals, and families who value the village's commitment to diversity, historic preservation, and social justice. The Frank Lloyd Wright Home and Studio, Unity Temple, and numerous Prairie School buildings create an outdoor architecture museum, while the village's progressive policies and diverse population reflect its commitment to social innovation. Manage369 manages Oak Park's historic condominium conversions and modern developments, where residents value architectural preservation, progressive policies, cultural diversity, and management that honors the community's architectural significance while supporting its commitment to social consciousness and historic preservation.",
          finalCta: "Oak Park's most architecturally significant buildings choose Manage369 for management that honors their historic heritage, supports progressive values, and celebrates their architectural legacy."
        }
      
      case 'river forest':
        return {
          intro: "River Forest epitomizes suburban elegance with tree-lined streets, architectural treasures, and a commitment to preserving its historic character while embracing modern community needs that attract families and professionals seeking refined suburban living with cultural sophistication. This elegant community attracts architecture enthusiasts, established families, and professionals who value the village's commitment to historic preservation, excellent schools, and maintaining its reputation for suburban sophistication. The village's beautiful homes, tree-canopied streets, and proximity to both Chicago and Oak Park create an ideal environment for families seeking refined suburban living. Manage369 manages River Forest's prestigious condominium developments, where residents value architectural preservation, suburban elegance, excellent schools, and management that maintains the village's sophisticated character while providing professional building operations and preserving the community's reputation for elegance and historic preservation.",
          finalCta: "River Forest's most elegant buildings choose Manage369 for management that maintains their architectural distinction, supports suburban sophistication, and preserves their refined character."
        }
      
      case 'forest park':
        return {
          intro: "Forest Park combines convenient transportation with community charm, featuring easy CTA access, diverse neighborhoods, and strong local businesses that create a welcoming environment for residents and families seeking urban convenience with suburban affordability and community connections. This accessible community attracts commuting professionals, diverse families, and residents who value convenient transportation, affordable housing, and the village's commitment to supporting local businesses and community development. The village's convenient CTA access, diverse housing options, and growing business district create opportunities for residents seeking urban convenience at suburban prices. Manage369 manages Forest Park's accessible condominium developments, where residents value convenient transportation, affordable living, diverse community programming, and management that supports the village's accessibility while ensuring professional building operations and maintaining the community character that makes Forest Park an attractive option for families and professionals seeking convenient, affordable living.",
          finalCta: "Forest Park's most accessible buildings choose Manage369 for management that enhances their convenience, supports diverse families, and maintains their community charm."
        }
      
      case 'berwyn':
        return {
          intro: "Berwyn celebrates its Czech heritage with Houby Day festival, diverse neighborhoods, and strong community spirit that attracts families seeking affordable living with cultural richness and authentic neighborhood character that honors its immigrant heritage while welcoming new residents. This culturally rich community attracts families valuing heritage, first-time homebuyers, and residents who appreciate the city's commitment to celebrating its Czech roots while embracing diversity and community development. The annual Houby Day festival, Czech cultural organizations, and traditional businesses reflect the community's heritage, while new residents add energy and diversity to local schools and businesses. Manage369 manages Berwyn's diverse condominium developments, where residents value cultural heritage, affordable living, community celebrations, and management that honors the city's Czech traditions while serving diverse community needs and maintaining professional building operations that support both heritage preservation and community growth.",
          finalCta: "Berwyn's most heritage-conscious buildings choose Manage369 for management that celebrates their Czech heritage, supports diverse families, and maintains their authentic community character."
        }
      
      case 'cicero':
        return {
          intro: "Cicero thrives with strong Latino heritage, vibrant community celebrations, and growing neighborhoods that attract families seeking affordable homeownership with cultural connections and community support that reflects the town's rich immigrant history and continuing role as a gateway community. This vibrant community attracts Latino families, immigrant communities, and residents who value cultural authenticity, affordable housing, and the town's commitment to supporting new Americans while maintaining its cultural character. The town's Mexican restaurants, cultural festivals, and community organizations reflect the heritage of residents who choose Cicero for its welcoming atmosphere and affordable homeownership opportunities. Manage369 manages Cicero's emerging condominium developments, where residents value cultural authenticity, bilingual services, community support, and management that serves Latino families while maintaining professional building operations and supporting the town's role as a welcoming gateway community for new Americans seeking homeownership and community connections.",
          finalCta: "Cicero's most culturally authentic buildings choose Manage369 for management that celebrates their Latino heritage, supports immigrant families, and honors their gateway community role."
        }
      
      default:
        return {
          intro: `${areaName} offers unique community character and residential opportunities that attract discerning residents seeking quality living with professional property management services. Manage369 provides comprehensive management solutions for ${areaName}'s condominium, HOA, and townhome communities, ensuring boards benefit from professional oversight, transparent reporting, and responsive local support.`,
          finalCta: `${areaName}'s most forward-thinking buildings choose Manage369 for professional, community-focused management services.`
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
        {/* ✅ Meta Tags */}
        <title>Property Management in {area.name}, IL | Manage369</title>
        <meta
          name="description"
          content={`Manage369 provides premium property management services in ${area.name}, IL. Expert HOA, Condominium, and Townhome management with 24/7 support.`}
        />

        {/* ✅ LocalBusiness Schema */}
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

        {/* ✅ Breadcrumb Schema */}
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

      {/* ✅ H1 */}
      <h1 className="text-3xl font-bold text-center mb-6">
        Property Management in {area.name}, IL | Manage369
      </h1>

      {/* ✅ Intro Paragraph */}
      <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
        {content.intro}
      </p>

      {/* ✅ Services Section */}
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

      {/* ✅ Nearby Communities */}
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

      {/* ✅ Final CTA */}
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