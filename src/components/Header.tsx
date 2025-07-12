import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isPaymentsDropdownOpen, setIsPaymentsDropdownOpen] = useState(false)
  const location = useLocation()

  const isActive = (path: string) => location.pathname === path

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Service Areas', href: '/service-areas' },
    { name: 'Resources', href: '/resources' },
    { name: 'Payments', href: '#', dropdown: true },
    { name: 'Contact', href: '/general-contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="container-max">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">M</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-gray-900">Manage369</span>
              <span className="text-xs text-gray-600">Chicago's #1 Property Management</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.dropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setIsPaymentsDropdownOpen(true)}
                    onMouseLeave={() => setIsPaymentsDropdownOpen(false)}
                  >
                    <button
                      className="font-medium text-gray-700 hover:text-primary-500 transition-colors duration-200 flex items-center"
                    >
                      {item.name}
                      <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {isPaymentsDropdownOpen && (
                      <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg border border-gray-200 z-50">
                        <div className="py-1">
                          <a
                            href="https://stellarpropertygrp.appfolio.com/connect/users/sign_in"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-primary-500 transition-colors"
                          >
                            Pay Dues
                          </a>
                          <Link
                            to="/payment-options"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-primary-500 transition-colors"
                          >
                            Payment Options
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className={`font-medium transition-colors duration-200 ${
                      isActive(item.href)
                        ? 'text-primary-500'
                        : 'text-gray-700 hover:text-primary-500'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <Link to="/contact" className="btn-primary ml-4">
              Get Quote
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label="Toggle mobile menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <div className="py-4 space-y-4">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.dropdown ? (
                    <div>
                      <button
                        onClick={() => setIsPaymentsDropdownOpen(!isPaymentsDropdownOpen)}
                        className="flex items-center justify-between w-full px-4 py-2 font-medium text-gray-700 hover:text-primary-500 hover:bg-gray-50 transition-colors duration-200"
                      >
                        {item.name}
                        <svg 
                          className={`h-4 w-4 transform transition-transform duration-200 ${isPaymentsDropdownOpen ? 'rotate-180' : ''}`} 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {isPaymentsDropdownOpen && (
                        <div className="pl-8 space-y-2">
                          <a
                            href="https://stellarpropertygrp.appfolio.com/connect/users/sign_in"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block px-4 py-2 text-sm text-gray-600 hover:text-primary-500 hover:bg-gray-50 transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            Pay Dues
                          </a>
                          <Link
                            to="/payment-options"
                            className="block px-4 py-2 text-sm text-gray-600 hover:text-primary-500 hover:bg-gray-50 transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            Payment Options
                          </Link>
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={`block px-4 py-2 font-medium transition-colors duration-200 ${
                        isActive(item.href)
                          ? 'text-primary-500 bg-primary-50'
                          : 'text-gray-700 hover:text-primary-500 hover:bg-gray-50'
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <div className="px-4 pt-2">
                <Link to="/contact" className="btn-primary w-full" onClick={() => setIsMenuOpen(false)}>
                  Get Quote
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header