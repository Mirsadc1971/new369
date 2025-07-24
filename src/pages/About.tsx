import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Building2, Users, Award, Clock, CheckCircle, Star, MapPin, Phone, Mail } from 'lucide-react';

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Manage369 - Chicago's Premier Property Management Company</title>
        <meta name="description" content="Learn about Manage369's 18+ years of experience managing condos, townhomes, and HOAs across Chicago and suburbs. Professional property management services." />
        <link rel="canonical" href="https://www.manage369.com/about" />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                About Manage369
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
                Chicago's trusted property management partner for over 18 years
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
              <div className="bg-white bg-opacity-10 p-6 rounded-xl backdrop-blur-sm">
                <div className="text-3xl md:text-4xl font-bold text-yellow-300 mb-2">50+</div>
                <div className="text-blue-100">Properties Managed</div>
              </div>
              <div className="bg-white bg-opacity-10 p-6 rounded-xl backdrop-blur-sm">
                <div className="text-3xl md:text-4xl font-bold text-yellow-300 mb-2">2450+</div>
                <div className="text-blue-100">Units Under Management</div>
              </div>
              <div className="bg-white bg-opacity-10 p-6 rounded-xl backdrop-blur-sm">
                <div className="text-3xl md:text-4xl font-bold text-yellow-300 mb-2">100+</div>
                <div className="text-blue-100">Chicago Neighborhoods</div>
              </div>
              <div className="bg-white bg-opacity-10 p-6 rounded-xl backdrop-blur-sm">
                <div className="text-3xl md:text-4xl font-bold text-yellow-300 mb-2">18+</div>
                <div className="text-blue-100">Years Local Experience</div>
              </div>
              <div className="bg-white bg-opacity-10 p-6 rounded-xl backdrop-blur-sm md:col-span-4">
                <div className="text-3xl md:text-4xl font-bold text-yellow-300 mb-2">Fast</div>
                <div className="text-blue-100">Emergency Response</div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Founded in 2006, Manage369 has grown from a small local operation to Chicago's most trusted property management company. We've built our reputation on delivering exceptional service, maintaining transparent communication, and treating every property as if it were our own.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  Our team combines deep local market knowledge with cutting-edge technology to provide comprehensive management solutions for condominiums, townhomes, and homeowner associations throughout Chicago and the surrounding suburbs.
                </p>
                <div className="flex items-center space-x-4">
                  <Award className="w-8 h-8 text-blue-600" />
                  <span className="text-lg font-semibold text-gray-900">Licensed & Insured</span>
                </div>
              </div>
              <div className="bg-blue-50 p-8 rounded-2xl">
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
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Comprehensive property management solutions tailored to Chicago's diverse real estate market
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
                <Building2 className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Condominium Management</h3>
                <p className="text-gray-600">
                  Full-service management for high-rise and mid-rise condominium buildings throughout Chicago
                </p>
              </div>
              <div className="text-center p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
                <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">HOA Management</h3>
                <p className="text-gray-600">
                  Professional homeowner association management for suburban communities and developments
                </p>
              </div>
              <div className="text-center p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
                <MapPin className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Townhome Management</h3>
                <p className="text-gray-600">
                  Specialized management services for townhome communities and mixed-use developments
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Team</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Experienced professionals dedicated to exceptional property management
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="text-center">
                  <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-10 h-10 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Management Team</h3>
                  <p className="text-gray-600">
                    Licensed property managers with decades of combined experience in Chicago real estate
                  </p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="text-center">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Maintenance Coordinators</h3>
                  <p className="text-gray-600">
                    Skilled professionals managing vendor relationships and emergency response protocols
                  </p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="text-center">
                  <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="w-10 h-10 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Customer Service</h3>
                  <p className="text-gray-600">
                    Dedicated support staff ensuring clear communication and resident satisfaction
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 bg-blue-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Contact us today to learn how Manage369 can help your property thrive
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="/contact"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Get Free Consultation
              </a>
              <div className="flex items-center space-x-2 text-blue-100">
                <Phone className="w-5 h-5" />
                <span>(312) 369-MGMT</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}