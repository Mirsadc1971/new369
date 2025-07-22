import React from 'react'
import { Link } from 'react-router-dom'

const PaymentOptions = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-500 to-primary-700 text-white section-padding">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-1 mb-6 text-white">
              Property Management{' '}
              <span className="text-gradient bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Payment Options
              </span>
            </h1>
            <p className="body-large mb-8 text-blue-100 max-w-3xl mx-auto">
              Convenient, Secure, and Flexible Payment Methods for Property Owners and Tenants
            </p>
          </div>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-4">Payment Methods</h2>
            <p className="body-large max-w-3xl mx-auto">
              We offer multiple convenient and secure payment options to meet your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card text-center hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">💻</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Online Owner Portal</h3>
              <p className="text-gray-600 mb-6">
                Securely manage and process payments through our dedicated online platform.
              </p>
              <a 
                href="https://stellarpropertygrp.appfolio.com/connect/users/sign_in" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Access Portal
              </a>
            </div>

            <div className="card text-center hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">✉️</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Mail Payment</h3>
              <p className="text-gray-600 mb-6">
                Traditional check payments sent directly to our office address.
              </p>
              <a href="#mailing-address" className="btn-secondary">
                View Mailing Address
              </a>
            </div>

            <div className="card text-center hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🏦</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Bank Bill Pay</h3>
              <p className="text-gray-600 mb-6">
                Convenient, zero-fee payment option through your bank's online platform.
              </p>
              <a href="#bill-pay-instructions" className="btn-primary">
                View Instructions
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Fees */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">Payment Fees Explained</h2>
            <p className="body-large max-w-3xl mx-auto">
              <strong>Fee Notice:</strong> We strive to provide transparent and cost-effective payment options.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
              <h3 className="text-lg font-semibold text-red-800 mb-2">Credit Card Payments</h3>
              <p className="text-red-700">3.5% processing fee per transaction</p>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
              <h3 className="text-lg font-semibold text-green-800 mb-2">Bank Bill Pay</h3>
              <p className="text-green-700">100% FREE - No additional charges</p>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-lg font-semibold text-gray-700">
              We recommend Bank Bill Pay for the most cost-effective payment method.
            </p>
          </div>
        </div>
      </section>

      {/* Online Payments */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-2 mb-6">Online Payments</h2>
              <p className="body-text mb-6">
                Our secure owner portal allows you to make payments, view your account balance, 
                and access important documents. To access the portal, you'll need your account 
                number and password provided to you.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">1</span>
                  </div>
                  <span className="body-text">Go to the "Access Portal" button above</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">2</span>
                  </div>
                  <span className="body-text">Enter your account credentials</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">3</span>
                  </div>
                  <span className="body-text">Navigate to the "Payments" section</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">4</span>
                  </div>
                  <span className="body-text">Follow the instructions to submit your payment</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-xl font-semibold mb-6">Portal Features</h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
                  <span className="text-sm">Secure payment processing</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
                  <span className="text-sm">Account balance viewing</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
                  <span className="text-sm">Payment history access</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
                  <span className="text-sm">Document downloads</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
                  <span className="text-sm">24/7 availability</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Mail Payments */}
      <section id="mailing-address" className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">Mail Payments</h2>
            <p className="body-large max-w-3xl mx-auto">
              If you prefer to mail your payments, please send them to:
            </p>
          </div>

          <div className="max-w-md mx-auto bg-white p-8 rounded-xl shadow-lg text-center">
            <h3 className="text-xl font-semibold mb-4">Mailing Address</h3>
            <div className="space-y-2 text-gray-700">
              <p className="font-semibold">Manage369</p>
              <p>1400 Patriot Boulevard 357</p>
              <p>Glenview, IL 60026</p>
            </div>
            
            <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <p className="text-sm text-yellow-800">
                <strong>Important:</strong> Please include your property address and account number 
                on your check to ensure proper crediting to your account.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bill Pay Instructions */}
      <section id="bill-pay-instructions" className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">Setting Up Bill Pay</h2>
            <p className="body-large max-w-3xl mx-auto">
              Bill Pay is a convenient way to manage your payments through your own bank's 
              online banking platform. Follow these steps to set up recurring or one-time payments:
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-6">Step-by-Step Instructions</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-secondary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Access your bank's online banking portal</h4>
                    <p className="text-sm text-gray-600">Log into your bank's website or mobile app</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-secondary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Look for the "Bill Pay" or "Payments" section</h4>
                    <p className="text-sm text-gray-600">Usually found in the main navigation menu</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-secondary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Add a new payee using our information</h4>
                    <p className="text-sm text-gray-600">See the payee information in the box to the right</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-secondary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">4</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Schedule your payment</h4>
                    <p className="text-sm text-gray-600">Choose one-time or recurring payment options</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-secondary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">5</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Include reference information</h4>
                    <p className="text-sm text-gray-600">Add your property address and unit number in the memo field</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-xl font-semibold mb-6">Payee Information</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Payee Name:</label>
                  <p className="text-gray-900 font-semibold">Your Association</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Mailing Address:</label>
                  <div className="text-gray-900">
                    <p>1400 Patriot Boulevard 357</p>
                    <p>Glenview, IL 60026</p>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Reference Field:</label>
                  <p className="text-gray-900">Include your property address and unit number</p>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-sm text-green-800">
                  <strong>Tip:</strong> Set up recurring payments to never miss a due date!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Payment FAQs */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-4">Payment FAQs</h2>
            <p className="body-large max-w-3xl mx-auto">
              Common questions about payments and billing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-lg font-semibold mb-3">When are payments due?</h3>
              <p className="text-gray-600 text-sm">
                Monthly payments are typically due on the 1st of each month, with a grace period 
                until the 5th. Please check your specific agreement for your property's due dates.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-lg font-semibold mb-3">Is there a fee for online payments?</h3>
              <p className="text-gray-600 text-sm">
                Credit card payments incur a processing fee of 3.5% per transaction. 
                ACH/eCheck payments from your bank account are free.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-lg font-semibold mb-3">What if my payment is late?</h3>
              <p className="text-gray-600 text-sm">
                Late fees vary by association and are outlined in your governing documents. 
                Typically, payments received after the grace period incur a late fee as 
                determined by your association's rules.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-lg font-semibold mb-3">How can I check my account balance?</h3>
              <p className="text-gray-600 text-sm">
                You can view your current balance by logging into your owner portal. 
                If you haven't set up portal access, please contact our office for assistance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Need Help */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">Need Help With Your Payment?</h2>
            <p className="body-large max-w-3xl mx-auto">
              If you have any questions about making payments or need assistance with your account, 
              our team is here to help.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📞</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Call Us</h3>
              <p className="text-2xl font-bold text-primary-500 mb-2">
                <a href="tel:847-834-4131" className="hover:underline">847.834.4131</a>
              </p>
              <p className="text-sm text-gray-600">Monday - Friday: 8:00 AM - 6:00 PM</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✉️</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Email Us</h3>
              <Link to="/contact" className="btn-primary">
                Email Us
              </Link>
              <p className="text-sm text-gray-600 mt-2">We respond within 24 hours</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-primary text-white">
        <div className="container-max text-center">
          <h2 className="heading-2 mb-4 text-white">Ready to Make a Payment?</h2>
          <p className="body-large mb-8 text-blue-100 max-w-2xl mx-auto">
            Choose the payment method that works best for you and get started today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://stellarpropertygrp.appfolio.com/connect/users/sign_in" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-secondary text-lg px-8 py-4"
            >
              Access Online Portal
            </a>
            <a href="tel:847-834-4131" className="btn-outline border-white text-white hover:bg-white hover:text-primary-500 text-lg px-8 py-4">
              Call (847) 834-4131
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PaymentOptions