import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, Users, Home as HomeIcon, ArrowRight, CheckCircle } from 'lucide-react';
import CanonicalLink from '../components/CanonicalLink';

const Services: React.FC = () => {
  const propertyTypes = [
    {
      id: 1,
      name: 'Condominium Management',
      description: 'Full-service management for condominium associations including financial management, maintenance coordination, and board support.',
      features: [
        'Financial management and budgeting',
        'Maintenance coordination',
        'Board meeting support',
        'Legal compliance'
      ],
      icon: Building2,
      color: 'primary',
      link: '/services/condominium-management'
    },
    {
      id: 2,
      name: 'HOA Management',
      description: 'Professional homeowners association management services to maintain community standards and property values.',
      features: [
        'Community governance',
        'Covenant enforcement',
        'Amenity management',
        'Vendor coordination'
      ],
      icon: Users,
      color: 'secondary',
      link: '/services/hoa-management'
    },
    {
      id: 3,
      name: 'Townhome Management',
      description: 'Specialized management services for townhome communities with focus on maintenance and community relations.',
      features: [
        'Exterior maintenance',
        'Landscaping coordination',
        'Community management',
        'Shared facility oversight'
      ],
      icon: HomeIcon,
      color: 'accent',
      link: '/services/townhome-management'
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'primary':
        return {
          bg: 'bg-primary-100',
          text: 'text-primary-600',
          button: 'btn-primary',
          hover: 'hover:bg-primary-50'
        };
      case 'secondary':
        return {
          bg: 'bg-secondary-100',
          text: 'text-secondary-600',
          button: 'btn-secondary',
          hover: 'hover:bg-secondary-50'
        };
      case 'accent':
        return {
          bg: 'bg-accent-100',
          text: 'text-accent-600',
          button: 'bg-accent-500 text-white hover:bg-accent-600',
          hover: 'hover:bg-accent-50'
        };
      default:
        return {
          bg: 'bg-gray-100',
          text: 'text-gray-600',
          button: 'btn-primary',
          hover: 'hover:bg-gray-50'
        };
    }
  };

  return (
    <>
      <CanonicalLink href="https://www.manage369.com/services" />
      
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary-500 to-primary-700 text-white section-padding">
          <div className="container-max">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="heading-1 mb-6 text-white">
                Property Management{' '}
                <span className="text-gradient bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                  Service
                </span>
              </h1>
              <p className="body-large mb-8 text-blue-100 max-w-3xl mx-auto">
                Professional property management service solutions tailored to your Chicago property needs.
              </p>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Select Your Property Management Service Type
              </h2>
              <p className="text-blue-100">
                Choose the property management service that matches your property to learn more about our specialized solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Property Type Selection */}
        <section className="section-padding bg-white">
          <div className="container-max">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {propertyTypes.map((propertyType) => {
                const colors = getColorClasses(propertyType.color);
                const IconComponent = propertyType.icon;
                
                return (
                  <Link
                    key={propertyType.id}
                    to={propertyType.link}
                    className={`bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 hover:scale-105 ${colors.hover} group`}
                  >
                    <div className="text-center mb-6">
                      <div className={`w-16 h-16 ${colors.bg} rounded-full flex items-center justify-center mx-auto mb-4`}>
                        <IconComponent className={`w-8 h-8 ${colors.text}`} />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        {propertyType.name}
                      </h3>
                      <p className="text-gray-600 mb-6">
                        {propertyType.description}
                      </p>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Key Services Include:</h4>
                      <ul className="space-y-2">
                        {propertyType.features.map((feature, index) => (
                          <li key={index} className="flex items-start text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="text-center">
                      <span className={`inline-flex items-center px-6 py-3 rounded-lg font-semibold transition-colors duration-200 ${colors.button} group-hover:shadow-md`}>
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>

            <div className="text-center mt-16">
              <div className="bg-blue-50 p-8 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Need Help Choosing?</h3>
                <p className="text-gray-600 mb-6">
                  Not sure which service is right for your property? Contact our experts 
                  for a free consultation and personalized recommendation.
                </p>
                <Link to="/contact" className="btn-primary">
                  Get Expert Guidance
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Our Services */}
        <section className="section-padding bg-gray-50">
          <div className="container-max">
            <div className="text-center mb-16">
              <h2 className="heading-2 mb-4">Why Choose Manage369?</h2>
              <p className="body-large max-w-3xl mx-auto">
                Our comprehensive property management service approach ensures your investment 
                is protected and your community thrives.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏆</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Proven Experience</h3>
                <p className="text-sm text-gray-600">
                  Managing 50+ properties with 2450+ units since 2007
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🌟</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Local Expertise</h3>
                <p className="text-sm text-gray-600">
                  Deep knowledge of Chicago's unique property market and regulations
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📞</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">24/7 Support</h3>
                <p className="text-sm text-gray-600">
                  Emergency property management service and dedicated customer support
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💰</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Transparent Pricing</h3>
                <p className="text-sm text-gray-600">
                  Clear, competitive pricing with no hidden fees
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Service Areas Preview */}
        <section className="section-padding bg-white">
          <div className="container-max">
            <div className="text-center mb-12">
              <h2 className="heading-2 mb-4">Serving Chicago & Surrounding Areas</h2>
              <p className="body-large max-w-3xl mx-auto">
                Professional property management service throughout the greater Chicago metropolitan area.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏙️</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Chicago City</h3>
                <p className="text-gray-600">All major neighborhoods and districts</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏘️</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Suburban Communities</h3>
                <p className="text-gray-600">Cook, DuPage, Lake, and Kane Counties</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🌆</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Metro Area</h3>
                <p className="text-gray-600">Extended Chicagoland coverage</p>
              </div>
            </div>

            <div className="text-center mt-12">
              <Link to="/service-areas" className="btn-primary text-lg px-8 py-4">
                View All Service Areas
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-gradient-to-br from-primary-500 to-primary-700 text-white">
          <div className="container-max text-center">
            <h2 className="heading-2 mb-4 text-white">Ready to Get Started?</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-secondary text-lg px-8 py-4">
                Get Free Consultation
              </Link>
              <a href="tel:847-834-4131" className="btn-outline border-white text-white hover:bg-white hover:text-primary-500 text-lg px-8 py-4">
                Call (224) 647-5621
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Services;