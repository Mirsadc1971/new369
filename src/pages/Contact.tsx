import React, { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const Contact = () => {
  useEffect(() => {
    // Add LocalBusiness schema to contact page
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.id = 'contact-page-schema'
    script.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": "https://manage369.com/contact",
      "name": "Manage369 - Chicago Property Management",
      "description": "Professional property management services in Chicago and suburbs. Condominium management, townhome management, and HOA management by Chicago's premier property management company.",
      "url": "https://manage369.com/contact",
      "telephone": "+1-847-834-4131",
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
      "openingHours": [
        "Mo-Fr 09:00-17:00"
      ],
      "priceRange": "$$",
      "paymentAccepted": [
        "Cash",
        "Check", 
        "Credit Card",
        "Bank Transfer",
        "Online Payment"
      ],
      "areaServed": [
        {
          "@type": "City",
          "name": "Chicago",
          "addressRegion": "IL"
        },
        {
          "@type": "AdministrativeArea",
          "name": "Cook County",
          "addressRegion": "IL"
        },
        {
          "@type": "AdministrativeArea", 
          "name": "DuPage County",
          "addressRegion": "IL"
        },
        {
          "@type": "AdministrativeArea",
          "name": "Lake County", 
          "addressRegion": "IL"
        },
        {
          "@type": "AdministrativeArea",
          "name": "Kane County",
          "addressRegion": "IL"
        }
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Property Management Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "name": "Condominium Management",
            "itemOffered": {
              "@type": "Service",
              "name": "Condominium Management",
              "description": "Professional condominium association management services",
              "provider": {
                "@type": "Organization",
                "name": "Manage369"
              }
            },
            "availability": "InStock",
            "priceRange": "$$"
          },
          {
            "@type": "Offer",
            "name": "HOA Management",
            "itemOffered": {
              "@type": "Service",
              "name": "HOA Management", 
              "description": "Comprehensive homeowners association management",
              "provider": {
                "@type": "Organization",
                "name": "Manage369"
              }
            },
            "availability": "InStock",
            "priceRange": "$$"
          },
          {
            "@type": "Offer",
            "name": "Townhome Management",
            "itemOffered": {
              "@type": "Service",
              "name": "Townhome Management",
              "description": "Specialized townhome community management services",
              "provider": {
                "@type": "Organization",
                "name": "Manage369"
              }
            },
            "availability": "InStock",
            "priceRange": "$$"
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
    })
    document.head.appendChild(script)

    return () => {
      // Cleanup schema script when component unmounts
      if (document.head.contains(script)) {
        document.head.removeChild(script)
      }
    }
  }, [])

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    propertyType: '',
    location: '',
    units: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    // Create email content
    const emailSubject = `New Property Management Inquiry from ${formData.name}`
    const emailBody = `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Property Type: ${formData.propertyType}
Location: ${formData.location}
Number of Units: ${formData.units}

Message:
${formData.message}

---
This inquiry was submitted through the Manage369 website contact form.
    `.trim()

    // Create mailto link
    const mailtoLink = `mailto:service@manage369.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`
    
    // Open email client
    window.location.href = mailtoLink
    
    // Show success message
    setSubmitStatus('success')
    setFormData({
      name: '',
      email: '',
      phone: '',
      propertyType: '',
      location: '',
      units: '',
      message: ''
    })
    setIsSubmitting(false)
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-500 to-primary-700 text-white section-padding">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-1 mb-6 text-white">
              Chicago Property Management{' '}
              <span className="text-gradient bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Free Consultation
              </span>
            </h1>
            <p className="body-large mb-8 text-blue-100 max-w-3xl mx-auto">
              Ready to experience professional Chicago property management? Request your free property management consultation today 
              and learn how Chicago's premier property management company can help your Chicago property thrive.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Details */}
            <div className="lg:col-span-1">
              <h2 className="heading-2 mb-8">Get In Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">📞</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Phone</h3>
                    <p className="text-gray-600 mb-2">
                      <a href="tel:+18478344131" className="text-primary-500 hover:underline">(847) 834-4131</a>
                    </p>
                    <p className="text-sm text-gray-500">Monday - Friday: 9:00 AM - 5:00 PM</p>
                    <p className="text-sm text-gray-500">24/7 Emergency Service Available</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">✉️</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Email</h3>
                    <p className="text-gray-600 mb-2">service@manage369.com</p>
                    <p className="text-sm text-gray-500">We respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">📍</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Office Address</h3>
                    <p className="text-gray-600 mb-2">1400 Patriot Boulevard 357</p>
                    <p className="text-gray-600 mb-2">Glenview, IL 60026</p>
                    <p className="text-sm text-gray-500">Professional property management office</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">🗺️</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Office Address</h3>
                    <p className="text-gray-600 mb-2">1400 Patriot Boulevard 357</p>
                    <p className="text-gray-600 mb-2">Glenview, IL 60026</p>
                    <p className="text-sm text-gray-500">Professional property management office</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">🌍</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Emergency Line</h3>
                    <p className="text-gray-600 mb-2">(312) 402-7002</p>
                      <a href="tel:847-834-4131" className="text-red-600 hover:underline font-semibold">
                        (847) 834-4131
                </div>
              </div>

              <div className="mt-8 p-6 bg-gray-50 rounded-xl">
                <h3 className="font-semibold text-lg mb-4">Why Choose Manage369?</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
                    Local Chicago expertise
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
                    24/7 emergency response
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
                    Comprehensive services
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
                    Technology-driven solutions
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
                    Transparent communication
                  </li>
                </ul>
              </div>
              
              <div className="mt-8 p-6 bg-blue-50 border border-blue-200 rounded-xl">
                <h3 className="font-semibold text-lg mb-4">Have a General Question?</h3>
                <p className="text-gray-600 mb-4">
                  If you have a general inquiry or question that doesn't require a consultation, 
                  you can use our general contact form.
                </p>
                <Link to="/general-contact" className="btn-outline">
                  General Contact Form
                </Link>
              </div>
              
              <div className="mt-8 p-6 bg-blue-50 border border-blue-200 rounded-xl">
                <h3 className="font-semibold text-lg mb-4">Schedule a Meeting</h3>
                <p className="text-gray-600 mb-4">
                  Prefer to schedule a specific time to discuss your property management needs? 
                  Book a convenient time slot directly with our team.
                </p>
                <a 
                  href="https://calendly.com/autho369/new-meeting" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center"
                >
                  Schedule Meeting
                  <span className="ml-2">📅</span>
                </a>
              </div>
            </div>

            {/* Property Management Consultation Form */}
            <div className="lg:col-span-2">
              <div className="bg-gray-50 p-8 rounded-xl">
                <h2 className="heading-2 mb-6">Request Free Property Management Consultation</h2>
                <p className="text-gray-600 mb-8">
                  Interested in our Chicago property management services? Fill out this detailed form and we'll contact you within 24 hours to discuss 
                  your Chicago property management needs and provide a customized property management solution.
                </p>

                {submitStatus === 'success' && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                    <div className="flex items-center">
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3">
                        <span className="text-white text-sm">✓</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-green-800">Thank you for your inquiry!</h4>
                        <p className="text-green-700 text-sm">We will contact you within 24 hours to discuss your property management needs.</p>
                      </div>
                    </div>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                    <div className="flex items-center">
                      <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mr-3">
                        <span className="text-white text-sm">!</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-red-800">Error sending message</h4>
                        <p className="text-red-700 text-sm">
                          Please try again or contact us directly at{' '}
                          <a href="mailto:service@manage369.com" className="underline">service@manage369.com</a>
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="Your full name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="(312) 402-7002"
                        placeholder="(847) 834-4131"
                      />
                    </div>

                    <div>
                      <label htmlFor="propertyType" className="block text-sm font-medium text-gray-700 mb-2">
                        Property Type *
                      </label>
                      <select
                        id="propertyType"
                        name="propertyType"
                        required
                        value={formData.propertyType}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      >
                        <option value="">Select Property Type</option>
                        <option value="condominium">Condominium</option>
                        <option value="townhome">Townhome Community</option>
                        <option value="hoa">HOA/Subdivision</option>
                        <option value="mixed-use">Mixed-Use Development</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
                        Property Location *
                      </label>
                      <input
                        type="text"
                        id="location"
                        name="location"
                        required
                        value={formData.location}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="Chicago, IL or suburb"
                      />
                    </div>

                    <div>
                      <label htmlFor="units" className="block text-sm font-medium text-gray-700 mb-2">
                        Number of Units
                      </label>
                      <select
                        id="units"
                        name="units"
                        value={formData.units}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      >
                        <option value="">Select Unit Count</option>
                        <option value="1-25">1-25 units</option>
                        <option value="26-50">26-50 units</option>
                        <option value="51-100">51-100 units</option>
                        <option value="101-200">101-200 units</option>
                        <option value="200+">200+ units</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Tell us about your property management needs, current challenges, or any specific questions you have..."
                    ></textarea>
                  </div>

                  <div className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      id="consent"
                      required
                      className="mt-1 w-4 h-4 text-primary-500 border-gray-300 rounded focus:ring-primary-500"
                    />
                    <label htmlFor="consent" className="text-sm text-gray-600">
                      I consent to being contacted by Manage369 regarding my property management inquiry. 
                      I understand that I may receive calls, emails, or text messages at the contact 
                      information provided above.
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full text-lg py-4 rounded-lg font-semibold transition-colors duration-200 ${
                      isSubmitting 
                        ? 'bg-gray-400 text-gray-600 cursor-not-allowed' 
                        : 'bg-primary-500 text-white hover:bg-primary-600'
                    }`}
                  >
                    {isSubmitting ? 'Sending...' : 'Request Free Consultation'}
                  </button>
                  
                  <div className="mt-4 text-center">
                    <p className="text-sm text-gray-600 mb-3">Or schedule a meeting directly:</p>
                    <a 
                      href="https://calendly.com/autho369/new-meeting" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn-outline inline-flex items-center"
                    >
                      Schedule Meeting
                      <span className="ml-2">📅</span>
                    </a>
                  </div>
                  
                  <div className="mt-3 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                    <div className="flex items-start space-x-2">
                      <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-xs">ℹ️</span>
                      </div>
                      <p className="text-blue-700 text-sm">
                        <strong>Note:</strong> Clicking "Request Free Consultation" will open your default email client 
                        with a pre-filled message to support@manage369.com containing your form information. 
                        You can review and send the email from your email application.
                      </p>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">Find Our Chicago Office</h2>
            <p className="body-large max-w-3xl mx-auto">
              Visit our professional property management office in Chicago or get directions using Google Maps.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="rounded-lg overflow-hidden bg-gray-200 flex items-center justify-center h-96 md:h-[450px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2964.999999999999!2d-87.81858!3d42.080154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd00000000000%3A0x0000000000000000!2s1400%20Patriot%20Blvd%2C%20Glenview%2C%20IL%2060026%2C%20USA!5e0!3m2!1sen!2sus!4v1721000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Manage369 Property Management - Glenview Office Location"
              ></iframe>
            </div>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <span className="text-xl">📍</span>
                </div>
                <h3 className="font-semibold mb-2">Address</h3>
                <p className="text-gray-600 text-sm">1400 Patriot Boulevard 357<br/>Glenview, IL 60026</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <span className="text-xl">🚗</span>
                </div>
                <h3 className="font-semibold mb-2">Parking</h3>
                <p className="text-gray-600 text-sm">Free parking available<br/>for client visits</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <span className="text-xl">🕒</span>
                </div>
                <h3 className="font-semibold mb-2">Hours</h3>
                <p className="text-gray-600 text-sm">Monday - Friday<br/>9:00 AM - 5:00 PM</p>
              </div>
            </div>
            <div className="text-center mt-6">
              <a 
                href="https://maps.google.com/?q=1400+Patriot+Boulevard+357,+Glenview,+IL+60026" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center"
              >
                Get Directions
                <span className="ml-2">🗺️</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-4">Our Service Areas</h2>
            <p className="body-large max-w-3xl mx-auto">
              We provide professional property management services throughout 
              Chicago and surrounding suburban communities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏙️</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Chicago City</h3>
              <p className="text-sm text-gray-600">All neighborhoods and districts</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏘️</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Cook County</h3>
              <p className="text-sm text-gray-600">Suburban communities</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌆</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">DuPage County</h3>
              <p className="text-sm text-gray-600">Western suburbs</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏞️</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Lake & Kane</h3>
              <p className="text-sm text-gray-600">Northern & western areas</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              Don't see your area listed? We're continuously expanding our service coverage.
            </p>
            <div className="text-center">
              <p className="text-2xl font-bold text-primary-500 mb-2">(312) 402-7002</p>
              <a href="tel:312-402-7002" className="btn-outline">
                Call to Inquire About Your Area
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-4">Frequently Asked Questions</h2>
            <p className="body-large max-w-3xl mx-auto">
              Get answers to common questions about our property management services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-lg mb-2">How quickly can you respond to emergencies?</h3>
                <p className="text-gray-600 text-sm">
                  We provide 24/7 emergency response with typical response times under 2 hours 
                  for urgent situations affecting resident safety or property damage.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2">What types of properties do you manage?</h3>
                <p className="text-gray-600 text-sm">
                  We specialize in condominiums, townhome communities, and HOA associations 
                  of all sizes throughout Chicago and surrounding suburbs.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2">How do you handle financial reporting?</h3>
                <p className="text-gray-600 text-sm">
                  We provide detailed monthly financial reports, online access to real-time 
                  financial data, and annual budget preparation with ongoing monitoring.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-lg mb-2">What is your fee structure?</h3>
                <p className="text-gray-600 text-sm">
                  Our fees are competitive and transparent, based on property size and services 
                  required. Contact us for a customized quote based on your specific needs.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2">Do you provide board meeting support?</h3>
                <p className="text-gray-600 text-sm">
                  Yes, we provide comprehensive board support including meeting facilitation, 
                  agenda preparation, minute-taking, and ongoing governance guidance.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2">How do you communicate with residents?</h3>
                <p className="text-gray-600 text-sm">
                  We use modern communication platforms including resident portals, email 
                  updates, newsletters, and mobile apps for convenient access to information.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-primary text-white">
        <div className="container-max text-center">
          <h2 className="heading-2 mb-4 text-white">Ready to Get Started?</h2>
          <p className="body-large mb-8 text-blue-100 max-w-2xl mx-auto">
            Contact us today for a free consultation and discover how Manage369 
            can transform your property management experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:312-402-7002" className="btn-secondary text-lg px-8 py-4">
            <a href="tel:847-834-4131" className="btn-secondary text-lg px-8 py-4">
              Call (847) 834-4131
            </a>
            <a href="mailto:service@manage369.com" className="btn-outline border-white text-white hover:bg-white hover:text-primary-500 text-lg px-8 py-4">
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact