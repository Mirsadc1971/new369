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
              Premier property management services for condominiums, townhomes, and HOA associations 
              throughout Chicago and surrounding suburbs. Professional, reliable, and comprehensive 
              management solutions. Chicago's #1 property management company.
            </p>
            <div className="space-y-2">
              <p className="flex items-center text-gray-300">
                <span className="w-5 h-5 mr-2">📞</span>
                (773) 728-0652
              </p>
              <p className="flex items-center text-gray-300">
                <span className="w-5 h-5 mr-2">✉️</span>
                service@manage369.com
              </p>
              <p className="flex items-center text-gray-300">
                <span className="w-5 h-5 mr-2">📍</span>
                Chicago, IL & Suburbs
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
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">All Services</Link></li>
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
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>


        {/* Legal Disclaimers */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-white mb-6 text-center">Legal Information & Disclaimers</h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              {/* Professional Licensing */}
              <div className="bg-gray-800 p-6 rounded-lg">
                <h4 className="font-semibold text-white mb-3 flex items-center">
                  <span className="w-5 h-5 bg-primary-500 rounded-full flex items-center justify-center mr-2">
                    <span className="text-white text-xs">⚖️</span>
                  </span>
                  Professional Licensing
                </h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Manage369 is a licensed property management company in the State of Illinois. 
                  License #: [License Number]. All property management activities are conducted 
                  in accordance with Illinois Department of Financial and Professional Regulation 
                  (IDFPR) requirements and Community Associations Institute (CAI) standards.
                </p>
              </div>

              {/* Insurance & Bonding */}
              <div className="bg-gray-800 p-6 rounded-lg">
                <h4 className="font-semibold text-white mb-3 flex items-center">
                  <span className="w-5 h-5 bg-secondary-500 rounded-full flex items-center justify-center mr-2">
                    <span className="text-white text-xs">🛡️</span>
                  </span>
                  Insurance & Bonding
                </h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Manage369 maintains comprehensive general liability insurance, professional 
                  liability insurance, and fidelity bonding to protect our clients' interests. 
                  All insurance policies meet or exceed industry standards and state requirements.
                </p>
              </div>
            </div>

            {/* Service Disclaimers */}
            <div className="bg-gray-800 p-6 rounded-lg mb-6">
              <h4 className="font-semibold text-white mb-4 flex items-center">
                <span className="w-5 h-5 bg-accent-500 rounded-full flex items-center justify-center mr-2">
                  <span className="text-white text-xs">📋</span>
                </span>
                Service Disclaimers
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-300 text-sm">
                <div>
                  <p className="mb-3">
                    <strong className="text-white">Property Management Services:</strong> All property management 
                    services are provided subject to executed management agreements. Service availability 
                    may vary by location and property type.
                  </p>
                  <p className="mb-3">
                    <strong className="text-white">Emergency Response:</strong> 24/7 emergency response is 
                    provided for life-threatening situations and property damage prevention. Response times 
                    may vary based on location and circumstances.
                  </p>
                </div>
                <div>
                  <p className="mb-3">
                    <strong className="text-white">Financial Management:</strong> All financial services are 
                    conducted in accordance with Illinois law and industry standards. Manage369 maintains 
                    separate trust accounts for client funds.
                  </p>
                  <p className="mb-3">
                    <strong className="text-white">Vendor Services:</strong> Third-party vendors are 
                    independent contractors. While we carefully screen vendors, Manage369 is not liable 
                    for vendor performance beyond our direct oversight responsibilities.
                  </p>
                </div>
              </div>
            </div>

            {/* Regulatory Compliance */}
            <div className="bg-gray-800 p-6 rounded-lg mb-6">
              <h4 className="font-semibold text-white mb-4 flex items-center">
                <span className="w-5 h-5 bg-primary-500 rounded-full flex items-center justify-center mr-2">
                  <span className="text-white text-xs">📜</span>
                </span>
                Regulatory Compliance
              </h4>
              <div className="text-gray-300 text-sm space-y-3">
                <p>
                  <strong className="text-white">Fair Housing:</strong> Manage369 is committed to fair housing 
                  practices and complies with all federal, state, and local fair housing laws including the 
                  Fair Housing Act and Illinois Human Rights Act.
                </p>
                <p>
                  <strong className="text-white">ADA Compliance:</strong> We assist clients in maintaining 
                  compliance with the Americans with Disabilities Act (ADA) and provide guidance on 
                  accessibility requirements for common areas and facilities.
                </p>
                <p>
                  <strong className="text-white">Environmental Compliance:</strong> Property management services 
                  include guidance on environmental regulations including asbestos, lead paint, and other 
                  environmental hazards as required by law.
                </p>
              </div>
            </div>

            {/* Website Disclaimers */}
            <div className="bg-gray-800 p-6 rounded-lg">
              <h4 className="font-semibold text-white mb-4 flex items-center">
                <span className="w-5 h-5 bg-secondary-500 rounded-full flex items-center justify-center mr-2">
                  <span className="text-white text-xs">💻</span>
                </span>
                Website & Information Disclaimers
              </h4>
              <div className="text-gray-300 text-sm space-y-3">
                <p>
                  <strong className="text-white">Information Accuracy:</strong> While we strive to maintain 
                  accurate and current information on this website, Manage369 makes no warranties about 
                  the completeness, reliability, or accuracy of this information.
                </p>
                <p>
                  <strong className="text-white">Service Availability:</strong> Services described on this 
                  website may not be available in all areas. Please contact us to confirm service 
                  availability in your specific location.
                </p>
                <p>
                  <strong className="text-white">Third-Party Links:</strong> This website may contain links 
                  to third-party websites. Manage369 is not responsible for the content or privacy 
                  practices of external sites.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Professional Certifications */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="text-center mb-6">
            <h3 className="text-lg font-semibold text-white mb-4">Professional Certifications & Memberships</h3>
            <div className="flex justify-center items-center space-x-8">
              <div className="flex flex-col items-center">
                <img 
                  src="/CAI National.png" 
                  alt="CAI National - Community Associations Institute Member" 
                  className="h-16 w-auto object-contain mb-2"
                />
                <span className="text-xs text-gray-400">CAI National Member</span>
              </div>
              <div className="flex flex-col items-center">
                <img 
                  src="/IDFPR_circular_logo.png" 
                  alt="Illinois Department of Financial and Professional Regulation Licensed" 
                  className="h-16 w-auto object-contain mb-2"
                />
                <span className="text-xs text-gray-400">IDFPR Licensed</span>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              <p className="mb-2">
                © {currentYear} Manage369 - Chicago's #1 Property Management Company. All rights reserved.
              </p>
              <p className="text-xs">
                Licensed Property Management Company | IDFPR Licensed | CAI Member | Serving Chicago Since 2007
              </p>
            </div>
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6">
              <Link to="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</Link>
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
                <a href="tel:773-728-0652" className="hover:text-white transition-colors">
                  (773) 728-0652
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