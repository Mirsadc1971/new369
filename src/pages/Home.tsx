import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Building2, Users, Award, Clock, CheckCircle, Star, MapPin, Phone, Mail } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Chicago Property Management Company | Manage369</title>
        <meta name="description" content="Chicago's #1 property management. Expert condo, HOA & townhome management. Trusted by 50+ properties, 2450+ units. Call (773) 728-0652 today." />
        <link rel="canonical" href="https://www.manage369.com" />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary-500 to-primary-700 text-white section-padding">
          <div className="container-max">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="heading-1 mb-6 text-white">
                Chicago Property Management Service | Professional Property Management Company
              </h1>
              <p className="body-large mb-8 text-blue-100 max-w-3xl mx-auto">
                Premier property management service for Chicago condominiums, HOAs, and residential communities. Trusted property management company serving 50+ properties with 2450+ units throughout Chicago and suburbs since 2007.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="btn-secondary text-lg px-8 py-4">
                  Get Started
                </Link>
                <a href="tel:847-834-4131" className="btn-outline border-white text-white hover:bg-white hover:text-primary-500 text-lg px-8 py-4">
                  Call (847) 834-4131
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="section-padding bg-white">
          <div className="container-max">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="heading-2 mb-6">Our Story</h2>
                <p className="body-text mb-6">
                  Founded in 2007, Manage369 has grown from a small local operation to Chicago's most trusted property management company. We've built our reputation on delivering exceptional service, maintaining transparent communication, and treating every property as if it were our own.
                </p>
                <p className="body-text mb-6">
                  Our team combines deep local market knowledge with cutting-edge technology to provide comprehensive management solutions for condominiums, townhomes, and homeowner associations throughout Chicago and the surrounding suburbs.
                </p>
                <div className="flex items-center space-x-4">
                  <Award className="w-8 h-8 text-primary-600" />
                  <span className="text-lg font-semibold text-gray-900">Licensed & Insured</span>
                </div>
              </div>
              <div className="bg-primary-50 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Manage369?</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Local expertise in Chicago's unique property market</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Transparent financial reporting and communication</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">24/7 emergency response and maintenance coordination</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Comprehensive insurance and legal compliance</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="section-padding bg-gray-50">
          <div className="container-max">
            <div className="text-center mb-16">
              <h2 className="heading-2 mb-4">Our Services</h2>
              <p className="body-large max-w-3xl mx-auto">
                Professional property management service solutions tailored to Chicago's diverse real estate market
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="card text-center hover:scale-105 transition-transform duration-300">
                <Building2 className="w-12 h-12 text-primary-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Condominium Management</h3>
                <p className="text-gray-600 mb-6">
                  Professional property management service for high-rise and mid-rise condominium buildings throughout Chicago
                </p>
                <Link to="/services/condominium-management" className="btn-primary">
                  Learn More
                </Link>
              </div>
              <div className="card text-center hover:scale-105 transition-transform duration-300">
                <Users className="w-12 h-12 text-secondary-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">HOA Management</h3>
                <p className="text-gray-600 mb-6">
                  Expert property management service for homeowner associations in suburban communities and developments
                </p>
                <Link to="/services/hoa-management" className="btn-secondary">
                  Learn More
                </Link>
              </div>
              <div className="card text-center hover:scale-105 transition-transform duration-300">
                <MapPin className="w-12 h-12 text-accent-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Townhome Management</h3>
                <p className="text-gray-600 mb-6">
                  Specialized property management service for townhome communities and mixed-use developments
                </p>
                <Link to="/services/townhome-management" className="bg-accent-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-accent-600 transition-colors duration-200 inline-flex items-center justify-center text-center min-h-[48px] whitespace-nowrap touch-manipulation">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="section-padding bg-white">
          <div className="container-max">
            <div className="text-center mb-16">
              <h2 className="heading-2 mb-4">Our Team</h2>
              <p className="body-large max-w-3xl mx-auto">
                Experienced professionals dedicated to exceptional property management
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="card text-center">
                <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-10 h-10 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Management Team</h3>
                <p className="text-gray-600">
                  Licensed property managers with decades of combined experience in Chicago real estate
                </p>
              </div>
              <div className="card text-center">
                <div className="w-20 h-20 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-10 h-10 text-secondary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Maintenance Coordinators</h3>
                <p className="text-gray-600">
                  Skilled professionals managing vendor relationships and emergency response protocols
                </p>
              </div>
              <div className="card text-center">
                <div className="w-20 h-20 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-10 h-10 text-accent-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Customer Service</h3>
                <p className="text-gray-600">
                  Dedicated support staff ensuring clear communication and resident satisfaction
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Service Areas Preview */}
        <section className="section-padding bg-gray-50">
          <div className="container-max">
            <div className="text-center mb-16">
              <h2 className="heading-2 mb-4">Chicago Service Areas</h2>
              <p className="body-large max-w-3xl mx-auto">
                We serve properties throughout Chicago and surrounding suburbs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏙️</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Chicago City</h3>
                <p className="text-gray-600">All major neighborhoods and districts within the city limits</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏘️</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Suburban Communities</h3>
                <p className="text-gray-600">Cook, DuPage, Lake, and Kane County suburbs</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🌆</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Metro Area</h3>
                <p className="text-gray-600">Extended coverage throughout Chicagoland region</p>
              </div>
            </div>

            <div className="text-center mt-12">
              <Link to="/service-areas" className="btn-primary text-lg px-8 py-4">
                View All Service Areas
              </Link>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="section-padding bg-gradient-primary text-white">
          <div className="container-max text-center">
            <h2 className="heading-2 mb-4 text-white">Ready to Get Started?</h2>
            <p className="body-large mb-8 text-blue-100 max-w-2xl mx-auto">
              Professional property management service for condominiums, HOAs, and residential communities throughout Chicago and suburbs. Expert property management company with local expertise serving your community since 2007.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/contact" className="btn-secondary text-lg px-8 py-4">
                Get Free Consultation
              </Link>
              <div className="flex items-center space-x-2 text-blue-100">
                <Phone className="w-5 h-5" />
                <a href="tel:847-834-4131" className="hover:text-white transition-colors">
                  (847) 834-4131
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;