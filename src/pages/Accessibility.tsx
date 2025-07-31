import React from 'react'
import { Link } from 'react-router-dom'
import CanonicalLink from '../components/CanonicalLink'

const Accessibility = () => {
  return (
    <div>
      <CanonicalLink href="https://www.manage369.com/accessibility" />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-500 to-primary-700 text-white section-padding">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-1 mb-6 text-white">
              Accessibility{' '}
              <span className="text-gradient bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Statement
              </span>
            </h1>
            <p className="body-large mb-8 text-blue-100 max-w-3xl mx-auto">
              Manage369 is committed to ensuring digital accessibility for all users, 
              including those with disabilities. We strive to provide an inclusive 
              experience for everyone.
            </p>
            <p className="text-sm text-blue-200">
              Last updated: January 2025
            </p>
          </div>
        </div>
      </section>

      {/* Accessibility Content */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="max-w-4xl mx-auto prose prose-lg">
            
            {/* Our Commitment */}
            <div className="mb-12">
              <h2 className="heading-2 mb-6">Our Commitment to Accessibility</h2>
              <p className="body-text mb-4">
                Manage369 is committed to ensuring that our website and digital services are 
                accessible to all users, including those with disabilities. We believe that 
                everyone should have equal access to information and functionality, regardless 
                of their abilities or the technologies they use.
              </p>
              <p className="body-text mb-4">
                We are continuously working to improve the accessibility of our website and 
                services to ensure compliance with applicable accessibility standards and 
                provide the best possible user experience for all visitors.
              </p>
              <p className="body-text">
                This accessibility statement reflects our ongoing efforts to make our digital 
                presence inclusive and user-friendly for people with diverse needs and abilities.
              </p>
            </div>

            {/* Standards and Guidelines */}
            <div className="mb-12">
              <h2 className="heading-2 mb-6">Accessibility Standards</h2>
              <p className="body-text mb-4">
                Our website aims to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 
                Level AA standards. These guidelines explain how to make web content more accessible 
                for people with disabilities and provide a better user experience for everyone.
              </p>
              
              <h3 className="text-xl font-semibold mb-4">Key Principles</h3>
              <p className="body-text mb-4">We follow the four main principles of accessibility:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                <li><strong>Perceivable:</strong> Information and user interface components must be presentable in ways users can perceive</li>
                <li><strong>Operable:</strong> User interface components and navigation must be operable by all users</li>
                <li><strong>Understandable:</strong> Information and operation of user interface must be understandable</li>
                <li><strong>Robust:</strong> Content must be robust enough to be interpreted by a wide variety of user agents and assistive technologies</li>
              </ul>
            </div>

            {/* Accessibility Features */}
            <div className="mb-12">
              <h2 className="heading-2 mb-6">Accessibility Features</h2>
              <p className="body-text mb-4">
                Our website includes the following accessibility features:
              </p>
              
              <h3 className="text-xl font-semibold mb-4">Navigation and Structure</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                <li>Clear and consistent navigation structure</li>
                <li>Descriptive page titles and headings</li>
                <li>Logical reading order and tab sequence</li>
                <li>Skip navigation links for keyboard users</li>
                <li>Breadcrumb navigation where appropriate</li>
              </ul>

              <h3 className="text-xl font-semibold mb-4">Visual Design</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                <li>High contrast color schemes for better readability</li>
                <li>Scalable text that can be enlarged up to 200% without loss of functionality</li>
                <li>Clear visual focus indicators for keyboard navigation</li>
                <li>Consistent layout and design patterns</li>
                <li>Alternative text for images and graphics</li>
              </ul>

              <h3 className="text-xl font-semibold mb-4">Interactive Elements</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                <li>Keyboard accessible forms and controls</li>
                <li>Clear labels and instructions for form fields</li>
                <li>Error messages and validation feedback</li>
                <li>Sufficient time limits for interactive content</li>
                <li>Descriptive link text and button labels</li>
              </ul>

              <h3 className="text-xl font-semibold mb-4">Content and Media</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Plain language and clear communication</li>
                <li>Structured content with proper headings</li>
                <li>Captions and transcripts for video content (when applicable)</li>
                <li>Alternative formats for complex information</li>
              </ul>
            </div>

            {/* Assistive Technologies */}
            <div className="mb-12">
              <h2 className="heading-2 mb-6">Assistive Technology Compatibility</h2>
              <p className="body-text mb-4">
                Our website is designed to be compatible with assistive technologies, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                <li>Screen readers (such as JAWS, NVDA, and VoiceOver)</li>
                <li>Voice recognition software</li>
                <li>Keyboard navigation tools</li>
                <li>Screen magnification software</li>
                <li>Alternative input devices</li>
              </ul>
              <p className="body-text">
                We test our website with various assistive technologies to ensure compatibility 
                and usability across different tools and platforms.
              </p>
            </div>

            {/* Browser and Device Support */}
            <div className="mb-12">
              <h2 className="heading-2 mb-6">Browser and Device Support</h2>
              <p className="body-text mb-4">
                Our website is designed to work with current versions of major browsers and 
                operating systems, including:
              </p>
              
              <h3 className="text-xl font-semibold mb-4">Supported Browsers</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                <li>Google Chrome (latest version)</li>
                <li>Mozilla Firefox (latest version)</li>
                <li>Safari (latest version)</li>
                <li>Microsoft Edge (latest version)</li>
              </ul>

              <h3 className="text-xl font-semibold mb-4">Mobile Accessibility</h3>
              <p className="body-text mb-6">
                Our website is responsive and accessible on mobile devices, with touch-friendly 
                controls and compatibility with mobile screen readers and accessibility features.
              </p>

              <h3 className="text-xl font-semibold mb-4">Operating System Support</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Windows with built-in accessibility features</li>
                <li>macOS with VoiceOver and other accessibility tools</li>
                <li>iOS with VoiceOver and accessibility settings</li>
                <li>Android with TalkBack and accessibility features</li>
              </ul>
            </div>

            {/* Ongoing Efforts */}
            <div className="mb-12">
              <h2 className="heading-2 mb-6">Ongoing Accessibility Efforts</h2>
              <p className="body-text mb-4">
                Accessibility is an ongoing commitment, and we continuously work to improve 
                our website and services:
              </p>
              
              <h3 className="text-xl font-semibold mb-4">Regular Testing and Audits</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                <li>Regular accessibility audits and testing</li>
                <li>User testing with people who use assistive technologies</li>
                <li>Automated accessibility scanning tools</li>
                <li>Manual testing with keyboard navigation and screen readers</li>
              </ul>

              <h3 className="text-xl font-semibold mb-4">Staff Training and Awareness</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                <li>Accessibility training for development and design teams</li>
                <li>Awareness of accessibility best practices</li>
                <li>Regular updates on accessibility standards and guidelines</li>
              </ul>

              <h3 className="text-xl font-semibold mb-4">Content and Design Reviews</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Accessibility considerations in design and development processes</li>
                <li>Content reviews for plain language and clarity</li>
                <li>Regular updates to improve accessibility features</li>
              </ul>
            </div>

            {/* Known Issues */}
            <div className="mb-12">
              <h2 className="heading-2 mb-6">Known Accessibility Issues</h2>
              <p className="body-text mb-4">
                We are aware of some accessibility challenges and are actively working to address them:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                <li>Some third-party embedded content may not fully meet accessibility standards</li>
                <li>Certain interactive features are being enhanced for better screen reader support</li>
                <li>We are working to improve color contrast in some areas of the site</li>
              </ul>
              <p className="body-text">
                We prioritize these improvements and work to resolve accessibility issues as 
                quickly as possible. If you encounter any accessibility barriers, please let us know.
              </p>
            </div>

            {/* Alternative Access */}
            <div className="mb-12">
              <h2 className="heading-2 mb-6">Alternative Access Methods</h2>
              <p className="body-text mb-4">
                If you have difficulty accessing any content or functionality on our website, 
                we offer alternative ways to get the information and services you need:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                <li>Phone support for information and assistance</li>
                <li>Email communication for inquiries and requests</li>
                <li>Alternative document formats upon request</li>
                <li>In-person assistance when possible</li>
              </ul>
              <p className="body-text">
                Our team is committed to providing equal access to our services and will work 
                with you to find the best solution for your needs.
              </p>
            </div>

            {/* Feedback and Contact */}
            <div className="mb-12">
              <h2 className="heading-2 mb-6">Accessibility Feedback</h2>
              <p className="body-text mb-4">
                We welcome your feedback on the accessibility of our website and services. 
                Your input helps us identify areas for improvement and ensures we're meeting 
                the needs of all users.
              </p>
              
              <h3 className="text-xl font-semibold mb-4">How to Provide Feedback</h3>
              <p className="body-text mb-4">
                If you encounter accessibility barriers or have suggestions for improvement, 
                please contact us using any of the following methods:
              </p>
              
              <div className="bg-gray-50 p-6 rounded-xl mb-6">
                <h4 className="text-lg font-semibold mb-4">Contact Information</h4>
                <div className="space-y-2 text-gray-600">
                  <p><strong>Email:</strong> service@manage369.com</p>
                  <p><strong>Phone:</strong> (312) 402-7002</p>
                  <p><strong>Phone:</strong> (847) 834-4131</p>
                  <p><strong>Address:</strong> Glenview, IL</p>
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-4">What to Include in Your Feedback</h3>
              <p className="body-text mb-4">
                When reporting accessibility issues, please include:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                <li>The specific page or feature where you encountered the issue</li>
                <li>A description of the problem or barrier</li>
                <li>The assistive technology or browser you were using</li>
                <li>Any error messages you received</li>
                <li>Suggestions for improvement, if you have any</li>
              </ul>

              <h3 className="text-xl font-semibold mb-4">Response Time</h3>
              <p className="body-text">
                We aim to respond to accessibility feedback within 5 business days and will 
                work to address any issues as quickly as possible. For urgent accessibility 
                needs, please call us directly for immediate assistance.
              </p>
            </div>

            {/* Legal Information */}
            <div className="mb-12">
              <h2 className="heading-2 mb-6">Legal and Compliance Information</h2>
              <p className="body-text mb-4">
                Manage369 is committed to compliance with applicable accessibility laws and 
                regulations, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                <li>Americans with Disabilities Act (ADA)</li>
                <li>Section 508 of the Rehabilitation Act</li>
                <li>Illinois accessibility requirements</li>
                <li>Web Content Accessibility Guidelines (WCAG) 2.1</li>
              </ul>
              <p className="body-text">
                We regularly review our accessibility practices to ensure ongoing compliance 
                and to provide the best possible experience for all users.
              </p>
            </div>

            {/* Resources */}
            <div className="mb-12">
              <h2 className="heading-2 mb-6">Accessibility Resources</h2>
              <p className="body-text mb-4">
                For more information about web accessibility and assistive technologies, 
                you may find these resources helpful:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Web Content Accessibility Guidelines (WCAG): <a href="https://www.w3.org/WAI/WCAG21/quickref/" className="text-primary-500 hover:underline" target="_blank" rel="noopener noreferrer">WCAG 2.1 Quick Reference</a></li>
                <li>WebAIM (Web Accessibility In Mind): <a href="https://webaim.org/" className="text-primary-500 hover:underline" target="_blank" rel="noopener noreferrer">webaim.org</a></li>
                <li>National Federation of the Blind: <a href="https://nfb.org/" className="text-primary-500 hover:underline" target="_blank" rel="noopener noreferrer">nfb.org</a></li>
                <li>Disability Rights Education & Defense Fund: <a href="https://dredf.org/" className="text-primary-500 hover:underline" target="_blank" rel="noopener noreferrer">dredf.org</a></li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-primary text-white">
        <div className="container-max text-center">
          <h2 className="heading-2 mb-4 text-white">Help Us Improve Accessibility</h2>
          <p className="body-large mb-8 text-blue-100 max-w-2xl mx-auto">
            Your feedback is valuable in helping us create a more accessible experience 
            for everyone. Contact us with your suggestions or accessibility concerns.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:847-834-4131" className="btn-secondary text-lg px-8 py-4">
              Call (224) 647-5621
            </a>
            <Link to="/contact" className="btn-outline border-white text-white hover:bg-white hover:text-primary-500 text-lg px-8 py-4">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Accessibility