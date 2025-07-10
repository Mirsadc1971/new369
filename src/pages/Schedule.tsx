import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const Schedule = () => {
  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    document.body.appendChild(script)

    return () => {
      // Cleanup script when component unmounts
      if (document.body.contains(script)) {
        document.body.removeChild(script)
      }
    }
  }, [])

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-500 to-primary-700 text-white section-padding">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-1 mb-6 text-white">
              Schedule a{' '}
              <span className="text-gradient bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Consultation
              </span>
            </h1>
            <p className="body-large mb-8 text-blue-100 max-w-3xl mx-auto">
              Book a convenient time to discuss your property management needs with our expert team. 
              Choose from available time slots that work best for your schedule.
            </p>
          </div>
        </div>
      </section>

      {/* Calendly Widget Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="heading-2 mb-4">Choose Your Preferred Time</h2>
              <p className="body-large text-gray-600">
                Select a time that works best for you. We'll send you a confirmation 
                email with meeting details and a calendar invite.
              </p>
            </div>

            {/* Calendly Inline Widget */}
            <div className="bg-gray-50 p-8 rounded-xl">
              <div 
                className="calendly-inline-widget" 
                data-url="https://calendly.com/your-calendly-username"
                style={{ minWidth: '320px', height: '700px' }}
              ></div>
            </div>

            {/* Alternative Contact Methods */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-lg font-semibold mb-4">Prefer to Call?</h3>
                <p className="text-gray-600 mb-4">
                  Speak with our team directly during business hours.
                </p>
                <a href="tel:773-728-0652" className="btn-primary">
                  Call (773) 728-0652
                </a>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-lg font-semibold mb-4">Send a Message</h3>
                <p className="text-gray-600 mb-4">
                  Fill out our contact form and we'll get back to you within 24 hours.
                </p>
                <Link to="/contact" className="btn-outline">
                  Contact Form
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Schedule