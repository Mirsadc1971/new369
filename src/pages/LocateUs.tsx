import React from 'react'
import { Link } from 'react-router-dom'
import CanonicalLink from '../components/CanonicalLink'

const LocateUs = () => {
  return (
    <div>
      <CanonicalLink href="https://www.manage369.com/locate-us" />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-500 to-primary-700 text-white section-padding">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-1 mb-6 text-white">
              Locate{' '}
              <span className="text-gradient bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Manage369
              </span>
            </h1>
            <p className="body-large mb-8 text-blue-100 max-w-3xl mx-auto">
              Find our Chicago property management offices and get in touch with 
              our local property management experts serving Chicago and surrounding communities.
            </p>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-4">Our Office Locations</h2>
            <p className="body-large max-w-3xl mx-auto">
              Manage369 operates from multiple locations to better serve our 
              Chicago-area property management clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Chicago Office */}
            <div className="card">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🏢</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center">Chicago Office</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <span className="w-5 h-5 text-primary-500 mt-1">📍</span>
                  <div>
                    <p className="font-semibold">Address:</p>
                    <p className="text-gray-600">5107 N Western Ave, Suite 1S</p>
                    <p className="text-gray-600">Chicago, IL 60625</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="w-5 h-5 text-primary-500 mt-1">📞</span>
                  <div>
                    <p className="font-semibold">Phone:</p>
                    <p className="text-gray-600">
                      <a href="tel:312-402-7002" className="hover:text-primary-500">(312) 402-7002</a>
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="w-5 h-5 text-primary-500 mt-1">🕒</span>
                  <div>
                    <p className="font-semibold">Hours:</p>
                    <p className="text-gray-600">Monday - Friday: 9:00 AM - 5:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Glenview Office */}
            <div className="card">
              <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🏠</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center">Glenview Office</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <span className="w-5 h-5 text-secondary-500 mt-1">📍</span>
                  <div>
                    <p className="font-semibold">Address:</p>
                    <p className="text-gray-600">1400 Patriot Boulevard 357</p>
                    <p className="text-gray-600">Glenview, IL 60026</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="w-5 h-5 text-secondary-500 mt-1">📞</span>
                  <div>
                    <p className="font-semibold">Phone:</p>
                    <p className="text-gray-600">
                      <a href="tel:224-647-5621" className="hover:text-secondary-500">(224) 647-5621</a>
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="w-5 h-5 text-secondary-500 mt-1">🕒</span>
                  <div>
                    <p className="font-semibold">Hours:</p>
                    <p className="text-gray-600">Monday - Friday: 9:00 AM - 5:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Map */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-4">Service Coverage Area</h2>
            <p className="body-large max-w-3xl mx-auto">
              From our Chicago and Glenview offices, we provide property management 
              services throughout the greater Chicago metropolitan area.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏙️</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Chicago City</h3>
              <p className="text-gray-600 text-sm">
                All major neighborhoods including Downtown, Lincoln Park, Lakeview, 
                Wicker Park, and more.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏘️</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">North Suburbs</h3>
              <p className="text-gray-600 text-sm">
                Evanston, Skokie, Glenview, Northbrook, Arlington Heights, 
                and surrounding communities.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌆</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">West Suburbs</h3>
              <p className="text-gray-600 text-sm">
                Oak Park, Naperville, Wheaton, Elmhurst, and other 
                DuPage County communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-4">Get In Touch</h2>
            <p className="body-large max-w-3xl mx-auto">
              Ready to discuss your property management needs? Contact us through 
              any of these convenient methods.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📞</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Call Us</h3>
              <p className="text-gray-600 text-sm mb-3">
                Speak directly with our property management experts
              </p>
              <div className="space-y-1">
                <p><a href="tel:224-647-5621" className="text-primary-500 hover:underline">(224) 647-5621</a></p>
              </div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✉️</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Email Us</h3>
              <p className="text-gray-600 text-sm mb-3">
                Send us your questions and we'll respond promptly
              </p>
              <p>
                <a href="mailto:service@manage369.com" className="text-secondary-500 hover:underline">
                  service@manage369.com
                </a>
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💬</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Contact Form</h3>
              <p className="text-gray-600 text-sm mb-3">
                Fill out our online form for detailed inquiries
              </p>
              <Link to="/contact" className="text-accent-500 hover:underline">
                Contact Form
              </Link>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚨</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Emergency</h3>
              <p className="text-gray-600 text-sm mb-3">
                24/7 emergency property management support
              </p>
              <p>
                <a href="tel:224-647-5621" className="text-red-500 hover:underline font-semibold">
                  (224) 647-5621
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Directions */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-4">Directions & Parking</h2>
            <p className="body-large max-w-3xl mx-auto">
              Easy access and convenient parking available at both locations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Chicago Office Directions</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">By Car:</h4>
                  <p className="text-gray-600 text-sm">
                    Located on Western Avenue with street parking available. 
                    Easy access from I-94 and I-90.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">By Public Transit:</h4>
                  <p className="text-gray-600 text-sm">
                    Accessible via CTA Brown Line (Western stop) and multiple bus routes.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Parking:</h4>
                  <p className="text-gray-600 text-sm">
                    Street parking and nearby parking lots available.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Glenview Office Directions</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">By Car:</h4>
                  <p className="text-gray-600 text-sm">
                    Convenient location with easy access from I-94 and local roads. 
                    Free parking available on-site.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">By Public Transit:</h4>
                  <p className="text-gray-600 text-sm">
                    Accessible via Metra North Line and Pace bus routes.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Parking:</h4>
                  <p className="text-gray-600 text-sm">
                    Free on-site parking available for all visitors.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-primary text-white">
        <div className="container-max text-center">
          <h2 className="heading-2 mb-4 text-white">Visit Us Today</h2>
          <p className="body-large mb-8 text-blue-100 max-w-2xl mx-auto">
            Stop by either of our convenient locations or contact us to schedule 
            a consultation about your property management needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-secondary text-lg px-8 py-4">
              Schedule Consultation
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

export default LocateUs