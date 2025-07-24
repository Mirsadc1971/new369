import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import CanonicalLink from '../components/CanonicalLink'

const GeneralContact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
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
    const emailSubject = `Contact Us: ${formData.subject || 'General Inquiry'} from ${formData.name}`
    const emailBody = `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Subject: ${formData.subject}

Message:
${formData.message}

---
This message was submitted through the Manage369 general contact form.
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
      subject: '',
      message: ''
    })
    setIsSubmitting(false)
  }

  return (
    <div>
      <CanonicalLink href="https://www.manage369.com/general-contact" />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-500 to-primary-700 text-white section-padding">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-1 mb-6 text-white">
              Contact{' '}
              <span className="text-gradient bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Manage369
              </span>
            </h1>
            <p className="body-large mb-8 text-blue-100 max-w-3xl mx-auto">
              Get in touch with Chicago's #1 property management company. We're here to 
              answer your questions and provide the information you need.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div>
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
                    <h3 className="font-semibold text-lg mb-1">Service Area</h3>
                    <p className="text-gray-600 mb-2">Chicago & Surrounding Suburbs</p>
                    <p className="text-sm text-gray-500">Cook, DuPage, Lake & Kane Counties</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">🚨</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Emergency Line</h3>
                    <p className="text-gray-600 mb-2">(847) 834-4131</p>
                    <p className="text-sm text-gray-500">24/7 Emergency Response</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-gray-50 rounded-xl">
                <h3 className="font-semibold text-lg mb-4">Need Property Management Services?</h3>
                <p className="text-gray-600 mb-4">
                  If you're looking for property management services, we offer free consultations 
                  to discuss your specific needs and provide customized solutions.
                </p>
                <Link to="/contact" className="btn-primary">
                  Request Free Consultation
                </Link>
                
                <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <h4 className="font-semibold mb-2">Schedule a Meeting</h4>
                  <p className="text-sm text-gray-600 mb-3">
                    Book a specific time to discuss your needs
                  </p>
                  <a 
                    href="https://calendly.com/autho369/new-meeting" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-outline text-sm inline-flex items-center"
                  >
                    Schedule Meeting
                    <span className="ml-2">📅</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-gray-50 p-8 rounded-xl">
                <h2 className="heading-2 mb-6">Send Us a Message</h2>
                <p className="text-gray-600 mb-8">
                  Have a question or need information? Fill out the form below and we'll 
                  get back to you as soon as possible.
                </p>

                {submitStatus === 'success' && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                    <div className="flex items-center">
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3">
                        <span className="text-white text-sm">✓</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-green-800">Thank you for your message!</h4>
                        <p className="text-green-700 text-sm">We will respond to your inquiry within 24 hours.</p>
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
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="(847) 834-4131"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                        Subject
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      >
                        <option value="">Select a subject</option>
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Service Question">Service Question</option>
                        <option value="Billing Question">Billing Question</option>
                        <option value="Maintenance Request">Maintenance Request</option>
                        <option value="Complaint">Complaint</option>
                        <option value="Compliment">Compliment</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Please tell us how we can help you..."
                    ></textarea>
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
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                  
                  <div className="mt-3 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                    <div className="flex items-start space-x-2">
                      <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-xs">ℹ️</span>
                      </div>
                      <p className="text-blue-700 text-sm">
                        <strong>Note:</strong> Clicking "Send Message" will open your default email client 
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

      {/* FAQ Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-4">Frequently Asked Questions</h2>
            <p className="body-large max-w-3xl mx-auto">
              Quick answers to common questions about our services and company.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-lg mb-2">What areas do you serve?</h3>
                <p className="text-gray-600 text-sm">
                  We serve Chicago and surrounding suburbs including Cook, DuPage, Lake, and Kane Counties. 
                  <Link to="/service-areas" className="text-primary-500 hover:underline ml-1">View all service areas</Link>.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2">How quickly do you respond to inquiries?</h3>
                <p className="text-gray-600 text-sm">
                  We respond to all inquiries within 24 hours during business days. For emergencies, 
                  we provide 24/7 response through our emergency hotline.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2">Do you offer free consultations?</h3>
                <p className="text-gray-600 text-sm">
                  Yes! We offer free consultations for property management services. 
                  <Link to="/contact" className="text-primary-500 hover:underline ml-1">Request your free consultation</Link>.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-lg mb-2">What types of properties do you manage?</h3>
                <p className="text-gray-600 text-sm">
                  We specialize in condominiums, townhomes, and HOA communities. 
                  <Link to="/services" className="text-primary-500 hover:underline ml-1">Learn about our services</Link>.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2">How can I pay my association fees?</h3>
                <p className="text-gray-600 text-sm">
                  We offer multiple payment options including online payments, bank bill pay, and mail. 
                  <Link to="/payment-options" className="text-primary-500 hover:underline ml-1">View payment options</Link>.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2">Do you provide emergency services?</h3>
                <p className="text-gray-600 text-sm">
                  Yes, we provide 24/7 emergency response for all managed properties. 
                  Call (312) 402-7002 for emergency assistance.
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
            Contact Chicago's #1 property management company today to learn how 
            we can help your property thrive.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:847-834-4131" className="btn-secondary text-lg px-8 py-4">
              Call (847) 834-4131
            </a>
            <Link to="/contact" className="btn-outline border-white text-white hover:bg-white hover:text-primary-500 text-lg px-8 py-4">
              Request Free Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default GeneralContact