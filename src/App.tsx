import React from 'react'
import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Services from './pages/Services'
import CondoManagement from './pages/services/CondoManagement'
import TownhomeManagement from './pages/services/TownhomeManagement'
import HOAManagement from './pages/services/HOAManagement'
import ServiceAreas from './pages/ServiceAreas'
import Contact from './pages/Contact'
import GeneralContact from './pages/GeneralContact'
import Resources from './pages/Resources'
import ServiceAreaDetail from './pages/ServiceAreaDetail'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import LegalDisclaimers from './pages/LegalDisclaimers'
import Accessibility from './pages/Accessibility'
import Sitemap from './pages/Sitemap'
import LocateUs from './pages/LocateUs'
import PaymentOptions from './pages/PaymentOptions'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'

// Component for handling fake/spam URLs with noindex
const NoIndexPage = () => {
  useEffect(() => {
    // Add noindex meta tag for fake pages
    const metaRobots = document.createElement('meta')
    metaRobots.name = 'robots'
    metaRobots.content = 'noindex, nofollow'
    document.head.appendChild(metaRobots)

    // Redirect to home after a brief delay
    const timer = setTimeout(() => {
      window.location.href = '/'
    }, 1000)

    return () => {
      clearTimeout(timer)
      // Clean up meta tag
      if (document.head.contains(metaRobots)) {
        document.head.removeChild(metaRobots)
      }
    }
  }, [])

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Redirecting...</h1>
        <p className="text-gray-600">Taking you to our homepage</p>
      </div>
    </div>
  )
}

function App() {
  const location = useLocation()

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0)
    
    // Also scroll to top after a small delay to handle any layout shifts
    const timer = setTimeout(() => {
      window.scrollTo(0, 0)
    }, 100)

    return () => clearTimeout(timer)
  }, [location.pathname])

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/condominium-management" element={<CondoManagement />} />
          <Route path="/services/townhome-management" element={<TownhomeManagement />} />
          <Route path="/services/hoa-management" element={<HOAManagement />} />
          <Route path="/service-areas" element={<ServiceAreas />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/general-contact" element={<GeneralContact />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/legal-disclaimers" element={<LegalDisclaimers />} />
          <Route path="/accessibility" element={<Accessibility />} />
          <Route path="/sitemap" element={<Sitemap />} />
          <Route path="/locate-us" element={<LocateUs />} />
          <Route path="/payment-options" element={<PaymentOptions />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          
          {/* Additional missing routes */}
          <Route path="/loop" element={<ServiceAreaDetail />} />
          <Route path="/highwood" element={<ServiceAreaDetail />} />
          <Route path="/request-proposal" element={<Contact />} />
          <Route path="/edgewater" element={<ServiceAreaDetail />} />
          <Route path="/old-town" element={<ServiceAreaDetail />} />
          <Route path="/gold-coast" element={<ServiceAreaDetail />} />
          <Route path="/barrington" element={<ServiceAreaDetail />} />
          <Route path="/wheeling" element={<ServiceAreaDetail />} />
          <Route path="/category/uncategorized/" element={<NoIndexPage />} />
          <Route path="/category/*" element={<NoIndexPage />} />
          
          {/* Handle fake/spam URLs with noindex */}
          <Route path="/tinggi/*" element={<NoIndexPage />} />
          <Route path="/tinggi" element={<NoIndexPage />} />
          
          {/* Dynamic service area route */}
          <Route path="/service-areas/:slug" element={<ServiceAreaDetail />} />
          
          {/* Catch-all route for 404s with noindex */}
          <Route path="*" element={<NoIndexPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App