import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">M</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold">Manage369</span>
                <span className="text-sm text-gray-400">Property Management</span>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Chicago's most trusted property management company with <strong>50+ properties managing 2450+ units</strong> across 100+ communities.
              Specializing in condominium management, townhome management, and HOA management throughout Chicago and surrounding suburbs. 
              Unlike large corporate chains, we provide personalized service with proven results since 2007.
            </p>
            <div className="space-y-2">
              <p className="flex items-center text-gray-300">
                <span className="w-5 h-5 mr-2">📞</span>
                <a href="tel:+18478344131" className="hover:text-white">(847) 834-4131</a>
              </p>
              <p className="flex items-center text-gray-300">
                <span className="w-5 h-5 mr-2">✉️</span>
                <a href="mailto:service@manage369.com" className="hover:text-white">service@manage369.com</a>
              </p>
              <div className="space-y-2">
                <p className="flex items-center text-gray-300">
                  <span className="w-5 h-5 mr-2">📍</span>
                  <span className="font-semibold">Chicago Office:</span>
                </p>
                <p className="text-gray-300 ml-7">
                  5107 N Western Ave, Suite 1S, Chicago, IL 60625
                </p>
                <p className="flex items-center text-gray-300">
                  <span className="w-5 h-5 mr-2">📍</span>
                  <span className="font-semibold">Glenview Office:</span>
                </p>
                <p className="text-gray-300 ml-7">
                  1400 Patriot Boulevard 357, Glenview, IL 60026
                </p>
              </div>
              <p className="flex items-center text-gray-300 mt-3">
                <span className="w-5 h-5 mr-2">🕒</span>
                Monday - Friday: 9:00 AM - 5:00 PM
              </p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services/condominium-management" className="text-gray-300 hover:text-white transition-colors">Condominium Management</Link></li>
              <li><Link to="/services/townhome-management" className="text-gray-300 hover:text-white transition-colors">Townhome Management</Link></li>
              <li><Link to="/services/hoa-management" className="text-gray-300 hover:text-white transition-colors">HOA Management</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">All Property Management Services</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/service-areas" className="text-gray-300 hover:text-white transition-colors">Service Areas</Link></li>
              <li><Link to="/locate-us" className="text-gray-300 hover:text-white transition-colors">Locate Us</Link></li>
              <li><Link to="/resources" className="text-gray-300 hover:text-white transition-colors">Resources</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>


        {/* Professional Certifications */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="text-center mb-6">
            <h3 className="text-lg font-semibold text-white mb-4">Professional Certifications & Memberships</h3>
            <div className="flex justify-center items-center space-x-8">
              <div className="flex flex-col items-center">
                <a href="https://www.caionline.org" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center hover:opacity-80 transition-opacity">
                  <img 
                    src="/CAI National.png" 
                    alt="CAI National - Community Associations Institute Member" 
                    className="h-16 w-auto object-contain mb-2"
                  />
                  <span className="text-xs text-gray-400">CAI National Member</span>
                </a>
              </div>
              <div className="flex flex-col items-center">
                <a href="https://www.idfpr.com" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center hover:opacity-80 transition-opacity">
                  <img 
                    src="/IDFPR_circular_logo.png" 
                    alt="Illinois Department of Financial and Professional Regulation Licensed" 
                    className="h-16 w-auto object-contain mb-2"
                  />
                  <span className="text-xs text-gray-400">IDFPR Licensed</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              <p className="mb-2">
                © {currentYear} Manage369 - Chicago's Premier Property Management Company. All rights reserved.
              </p>
              <p className="text-xs">
                Licensed Chicago Property Management Company | IDFPR Licensed | CAI Member | Serving Chicago Since 2007
              </p>
            </div>
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6">
              <Link to="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</Link>
              <Link to="/legal-disclaimers" className="text-gray-400 hover:text-white text-sm transition-colors">Legal Disclaimers</Link>
              <Link to="/accessibility" className="text-gray-400 hover:text-white text-sm transition-colors">Accessibility</Link>
              <Link to="/sitemap" className="text-gray-400 hover:text-white text-sm transition-colors">Sitemap</Link>
            </div>
          </div>
          
          {/* Additional Legal Notice */}
          <div className="border-t border-gray-800 mt-6 pt-6">
            <div className="text-center">
              <p className="text-gray-500 text-xs leading-relaxed max-w-4xl mx-auto">
                <strong className="text-gray-400">Legal Notice:</strong> This website and its contents are protected by copyright, 
                trademark, and other intellectual property laws. Manage369, its logo, and all related marks are 
                trademarks of Manage369. Unauthorized use is prohibited. All property management services are 
                subject to executed agreements and applicable law. Past performance does not guarantee future results. 
                For complete terms and conditions, please refer to our 
                <Link to="/terms" className="text-primary-400 hover:text-primary-300 mx-1">Terms of Service</Link>
                and service agreements.
              </p>
            </div>
          </div>
          
          {/* Emergency Contact Notice */}
          <div className="bg-red-900 bg-opacity-30 border border-red-700 rounded-lg p-4 mt-6">
            <div className="text-center">
              <p className="text-red-200 text-sm font-semibold mb-1">
                🚨 24/7 EMERGENCY PROPERTY MANAGEMENT HOTLINE 🚨
              </p>
              <p className="text-red-100 text-lg font-bold">
                <a href="tel:847-834-4131" className="hover:text-white transition-colors">
                  (847) 834-4131
                </a>
              </p>
              <p className="text-red-200 text-xs mt-1">
                For life-threatening emergencies, call 911 first, then contact Manage369
            </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer