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
              <li><Link to="/resources" className="text-gray-300 hover:text-white transition-colors">Resources</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Manage369 - Chicago's #1 Property Management Company. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer