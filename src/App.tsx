import React from 'react'
import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
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
import Schedule from './pages/Schedule'

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
          <Route path="/about" element={<About />} />
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
          <Route path="/schedule" element={<Schedule />} />
          
          {/* Dynamic service area route */}
          <Route path="/service-areas/:slug" element={<ServiceAreaDetail />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App