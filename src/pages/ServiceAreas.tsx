import React from 'react'
import { Link } from 'react-router-dom'
import CanonicalLink from '../components/CanonicalLink'
import { serviceAreas } from '../data/serviceAreas'

const ServiceAreas: React.FC = () => {
  // Group service areas by region
  const groupedAreas = serviceAreas.reduce((acc, area) => {
    if (!acc[area.region]) {
      acc[area.region] = [];
    }
    acc[area.region].push(area);
    return acc;
  }, {} as Record<string, typeof serviceAreas>);

  const getRegionColor = (region: string) => {
    switch (region) {
      case "Chicago (Core & Near-North)":
        return "blue";
      case "Inner North / Lakeshore Communities":
        return "green";
      case "Outer North Shore & Northwest Suburbs":
        return "purple";
      default:
        return "gray";
    }
  };

  return (
    <div>
      <CanonicalLink href="https://www.manage369.com/service-areas" />
      
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary-500 to-primary-700 text-white section-padding">
          <div className="container-max">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="heading-1 mb-6 text-white">
                Chicago Property Management Service Areas
              </h1>
              <p className="body-large mb-8 text-blue-100 max-w-3xl mx-auto">
                Premier property management services across Chicago's diverse neighborhoods and suburban communities. 
                Manage369 serves 100+ communities throughout the greater Chicago area with specialized local expertise.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full">
                  {serviceAreas.length} Communities Served
                </span>
                <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full">
                  50+ Properties Managed
                </span>
                <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full">
                  2450+ Units Under Management
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Service Areas by Region */}
        {Object.entries(groupedAreas).map(([region, areas]) => {
          const color = getRegionColor(region);
          const colorClasses = {
            blue: { bg: "bg-blue-50", border: "border-blue-200", text: "text-blue-600", badge: "bg-blue-50" },
            green: { bg: "bg-green-50", border: "border-green-200", text: "text-green-600", badge: "bg-green-50" },
            purple: { bg: "bg-purple-50", border: "border-purple-200", text: "text-purple-600", badge: "bg-purple-50" },
            gray: { bg: "bg-gray-50", border: "border-gray-200", text: "text-gray-600", badge: "bg-gray-50" }
          }[color];

          return (
            <section key={region} className={`section-padding ${region === "Chicago (Core & Near-North)" ? "bg-white" : region === "Inner North / Lakeshore Communities" ? "bg-gray-50" : "bg-white"}`}>
              <div className="container-max">
                <div className="text-center mb-12">
                  <h2 className="heading-2 mb-4">{region}</h2>
                  <p className="body-large max-w-3xl mx-auto">
                    {region === "Chicago (Core & Near-North)" && "Professional property management throughout Chicago's most desirable urban neighborhoods and downtown districts."}
                    {region === "Inner North / Lakeshore Communities" && "Expert property management services in Chicago's diverse lakefront and inner north communities."}
                    {region === "Outer North Shore & Northwest Suburbs" && "Premium property management throughout Chicago's prestigious North Shore and northwest suburban communities."}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {areas.map((area) => (
                    <Link 
                      key={area.id}
                      to={`/property-management-${area.slug}`} 
                      className={`bg-white p-6 rounded-xl shadow-lg border ${colorClasses.border} hover:shadow-xl transition-shadow duration-300 group`}
                    >
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
                          {area.name}
                        </h3>
                        <span className={`text-sm ${colorClasses.text} ${colorClasses.badge} px-2 py-1 rounded`}>
                          {area.county} County
                        </span>
                      </div>
                      <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                        {area.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2 text-xs text-gray-500">
                          {area.population && (
                            <span>{area.population.toLocaleString()} residents</span>
                          )}
                          <span className="capitalize">{area.type}</span>
                        </div>
                        <div className={`${colorClasses.text} font-medium text-sm hover:underline group-hover:translate-x-1 transition-transform duration-200`}>
                          View Details →
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </section>
          );
        })}

        {/* Service Overview */}
        <section className="section-padding bg-gradient-to-br from-gray-100 to-gray-200">
          <div className="container-max">
            <div className="text-center mb-12">
              <h2 className="heading-2 mb-4">Comprehensive Property Management Services</h2>
              <p className="body-large max-w-3xl mx-auto">
                Every service area receives our full range of professional property management services, 
                tailored to the unique characteristics and needs of each community.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Link to="/services/condominium-management" className="card text-center hover:scale-105 transition-transform duration-300">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">🏢</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Condominium Management</h3>
                <p className="text-gray-600 mb-6">
                  Professional management for high-rise and mid-rise condominium buildings across all service areas.
                </p>
                <span className="btn-primary">Learn More</span>
              </Link>
              
              <Link to="/services/hoa-management" className="card text-center hover:scale-105 transition-transform duration-300">
                <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">👥</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">HOA Management</h3>
                <p className="text-gray-600 mb-6">
                  Expert homeowners association management for suburban communities throughout our service areas.
                </p>
                <span className="btn-secondary">Learn More</span>
              </Link>
              
              <Link to="/services/townhome-management" className="card text-center hover:scale-105 transition-transform duration-300">
                <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">🏠</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Townhome Management</h3>
                <p className="text-gray-600 mb-6">
                  Specialized management for townhome communities and attached housing developments.
                </p>
                <span className="bg-accent-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-accent-600 transition-colors duration-200 inline-flex items-center justify-center text-center min-h-[48px] whitespace-nowrap touch-manipulation">Learn More</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Why Choose Manage369 */}
        <section className="section-padding bg-white">
          <div className="container-max">
            <div className="text-center mb-16">
              <h2 className="heading-2 mb-4">Why Choose Manage369 Across All Service Areas?</h2>
              <p className="body-large max-w-3xl mx-auto">
                Our comprehensive approach ensures consistent, high-quality property management 
                services regardless of location, while maintaining deep local expertise in each community.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏆</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Local Expertise</h3>
                <p className="text-sm text-gray-600">
                  Deep knowledge of each community's unique characteristics, regulations, and market conditions.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🌟</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Proven Experience</h3>
                <p className="text-sm text-gray-600">
                  Managing 50+ properties with 2450+ units since 2007 across diverse Chicago communities.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📞</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">24/7 Support</h3>
                <p className="text-sm text-gray-600">
                  Emergency response and dedicated customer support available across all service areas.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💰</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Transparent Pricing</h3>
                <p className="text-sm text-gray-600">
                  Clear, competitive pricing with no hidden fees, consistent across all communities we serve.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-gradient-primary text-white">
          <div className="container-max text-center">
            <h2 className="heading-2 mb-4 text-white">Ready to Get Started?</h2>
            <p className="body-large mb-8 text-blue-100 max-w-2xl mx-auto">
              Contact Chicago's premier property management company to learn how 
              we can help your property thrive in your specific community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-secondary text-lg px-8 py-4">
                Get Free Quote
              </Link>
              <a href="tel:224-647-5621" className="btn-outline border-white text-white hover:bg-white hover:text-primary-500 text-lg px-8 py-4">
                Call (224) 647-5621
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default ServiceAreas