import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
    setIsServicesOpen(false)
  }

  return (
    <header className="bg-white shadow-lg fixed top-0 left-0 right-0 z-50">
      <div className="container-max">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2" onClick={closeMenu}>
            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">M</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-gray-900">Manage369</span>
              <span className="text-xs text-gray-500">Property Management</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className="text-gray-700 hover:text-primary-500 font-medium transition-colors"
            >
              Home
            </Link>
            
            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button className="flex items-center text-gray-700 hover:text-primary-500 font-medium transition-colors">
                Services
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              
              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50">
                  <Link 
                    to="/services/condominium-management"
                    className="block px-4 py-3 text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors"
                    onClick={() => setIsServicesOpen(false)}
                  >
                    <div className="font-medium">Condominium Management</div>
                    <div className="text-sm text-gray-500">Professional condo association management</div>
                  </Link>
                  <Link 
                    to="/services/hoa-management"
                    className="block px-4 py-3 text-gray-700 hover:bg-secondary-50 hover:text-secondary-600 transition-colors"
                    onClick={() => setIsServicesOpen(false)}
                  >
                    <div className="font-medium">HOA Management</div>
                    <div className="text-sm text-gray-500">Homeowners association management</div>
                  </Link>
                  <Link 
                    to="/services/townhome-management"
                    className="block px-4 py-3 text-gray-700 hover:bg-accent-50 hover:text-accent-600 transition-colors"
                    onClick={() => setIsServicesOpen(false)}
                  >
                    <div className="font-medium">Townhome Management</div>
                    <div className="text-sm text-gray-500">Townhome community management</div>
                  </Link>
                  <div className="border-t border-gray-200 mt-2 pt-2">
                    <Link 
                      to="/services"
                      className="block px-4 py-2 text-primary-600 hover:bg-primary-50 font-medium transition-colors"
                      onClick={() => setIsServicesOpen(false)}
                    >
                      View All Services →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link 
              to="/service-areas" 
              className="text-gray-700 hover:text-primary-500 font-medium transition-colors"
            >
              Service Areas
            </Link>
            
            <Link 
              to="/resources" 
              className="text-gray-700 hover:text-primary-500 font-medium transition-colors"
            >
              Resources
            </Link>
            
            <Link 
              to="/payment-options" 
              className="text-gray-700 hover:text-primary-500 font-medium transition-colors"
            >
              Payments
            </Link>
            
            <Link 
              to="/contact" 
              className="btn-primary"
            >
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <nav className="py-4 space-y-2">
              <Link 
                to="/" 
                className="block px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors"
                onClick={closeMenu}
              >
                Home
              </Link>
              
              {/* Mobile Services Section */}
              <div>
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="flex items-center justify-between w-full px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Services
                  <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isServicesOpen && (
                  <div className="bg-gray-50 py-2">
                    <Link 
                      to="/services/condominium-management"
                      className="block px-8 py-2 text-gray-600 hover:text-primary-600 transition-colors"
                      onClick={closeMenu}
                    >
                      Condominium Management
                    </Link>
                    <Link 
                      to="/services/hoa-management"
                      className="block px-8 py-2 text-gray-600 hover:text-secondary-600 transition-colors"
                      onClick={closeMenu}
                    >
                      HOA Management
                    </Link>
                    <Link 
                      to="/services/townhome-management"
                      className="block px-8 py-2 text-gray-600 hover:text-accent-600 transition-colors"
                      onClick={closeMenu}
                    >
                      Townhome Management
                    </Link>
                    <Link 
                      to="/services"
                      className="block px-8 py-2 text-primary-600 font-medium transition-colors"
                      onClick={closeMenu}
                    >
                      View All Services
                    </Link>
                  </div>
                )}
              </div>
              
              <Link 
                to="/service-areas" 
                className="block px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors"
                onClick={closeMenu}
              >
                Service Areas
              </Link>
              
              <Link 
                to="/resources" 
                className="block px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors"
                onClick={closeMenu}
              >
                Resources
              </Link>
              
              <Link 
                to="/payment-options" 
                className="block px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors"
                onClick={closeMenu}
              >
                Payments
              </Link>
              
              <Link 
                to="/contact" 
                className="block mx-4 mt-4 btn-primary text-center"
                onClick={closeMenu}
              >
                Contact
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header