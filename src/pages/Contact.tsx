import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct mailto URL
    const subject = encodeURIComponent('Website Contact Inquiry');
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone}\n\n` +
      `Message:\n${formData.message}`
    );
    
    const mailtoUrl = `mailto:service@manage369.com?subject=${subject}&body=${body}`;
    
    // Open email client
    window.location.href = mailtoUrl;
  };

  return (
    <>
      <Helmet>
        <title>Contact Us - Manage369 Property Management</title>
        <meta name="description" content="Contact Manage369 for professional property management services in Chicago. Get expert consultation for your condominium, townhome, or HOA management needs." />
        <link rel="canonical" href="https://www.manage369.com/contact" />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
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
                Get in touch with Chicago's premier property management company. 
                We're here to help with all your condominium, townhome, and HOA management needs.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="section-padding bg-white">
          <div className="container-max">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div>
                <h2 className="heading-2 mb-6">Get In Touch</h2>
                <p className="body-text mb-8">
                  Ready to experience the difference professional property management can make? 
                  Contact us today for a free consultation and discover why we're Chicago's 
                  most trusted property management company.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-xl">📞</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                      <p className="text-gray-600">
                        <a href="tel:224-647-5621" className="hover:text-primary-500">(224) 647-5621</a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-xl">✉️</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                      <p className="text-gray-600">
                        <a href="mailto:service@manage369.com" className="hover:text-secondary-500">service@manage369.com</a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-xl">📍</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Office Locations</h3>
                      <div className="text-gray-600 space-y-2">
                        <div>
                          <p className="font-medium">Chicago Office:</p>
                          <p>5107 N Western Ave, Suite 1S</p>
                          <p>Chicago, IL 60625</p>
                        </div>
                        <div>
                          <p className="font-medium">Glenview Office:</p>
                          <p>1400 Patriot Boulevard 357</p>
                          <p>Glenview, IL 60026</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-xl">🕒</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Business Hours</h3>
                      <p className="text-gray-600">Monday - Friday: 9:00 AM - 5:00 PM</p>
                      <p className="text-gray-600">24/7 Emergency Response Available</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-gray-50 p-8 rounded-xl">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent mobile-form-input"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent mobile-form-input"
                      placeholder="your.email@example.com"
                    />
                  </div>

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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent mobile-form-input"
                      placeholder="(555) 123-4567"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent mobile-form-input"
                      placeholder="Tell us about your property management needs..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full btn-primary text-lg py-4"
                  >
                    Send Message
                  </button>
                  
                  <p className="text-sm text-gray-500 text-center">
                    This will open your email client with a pre-filled message to send to us.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>


        {/* Emergency Contact */}
        <section className="section-padding bg-red-50 border-t-4 border-red-500">
          <div className="container-max text-center">
            <h2 className="text-2xl font-bold text-red-800 mb-4">🚨 Emergency Property Management</h2>
            <p className="text-red-700 mb-6">
              For urgent property management emergencies outside business hours, 
              call our emergency hotline immediately.
            </p>
            <a 
              href="tel:224-647-5621" 
              className="inline-flex items-center bg-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition-colors text-lg"
            >
              📞 Emergency: (224) 647-5621
            </a>
            <p className="text-red-600 text-sm mt-4">
              For life-threatening emergencies, call 911 first, then contact Manage369
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;