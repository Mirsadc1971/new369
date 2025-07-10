import React from 'react'
import { Link } from 'react-router-dom'

const Blog = () => {
  // Sample blog posts data
  const blogPosts = [
    {
      id: 1,
      title: "5 Essential Tips for Effective HOA Board Management in Chicago",
      excerpt: "Learn the key strategies that successful HOA boards use to manage their communities effectively while maintaining resident satisfaction.",
      date: "January 25, 2025",
      category: "HOA Management",
      readTime: "5 min read",
      slug: "effective-hoa-board-management-chicago"
    },
    {
      id: 2,
      title: "Understanding Chicago Condominium Laws: A Property Owner's Guide",
      excerpt: "Navigate the complex landscape of Chicago condominium regulations with this comprehensive guide for property owners and board members.",
      date: "January 22, 2025",
      category: "Legal & Compliance",
      readTime: "8 min read",
      slug: "chicago-condominium-laws-guide"
    },
    {
      id: 3,
      title: "Winter Property Maintenance: Protecting Your Chicago Investment",
      excerpt: "Essential winter maintenance tips to protect your property from Chicago's harsh weather conditions and prevent costly repairs.",
      date: "January 18, 2025",
      category: "Maintenance",
      readTime: "6 min read",
      slug: "winter-property-maintenance-chicago"
    },
    {
      id: 4,
      title: "Budget Planning for Property Associations: Best Practices for 2025",
      excerpt: "Strategic budget planning tips to help property associations maintain financial health while funding necessary improvements.",
      date: "January 15, 2025",
      category: "Financial Management",
      readTime: "7 min read",
      slug: "budget-planning-property-associations-2025"
    },
    {
      id: 5,
      title: "The Benefits of Professional Property Management vs. Self-Management",
      excerpt: "Compare the advantages and challenges of professional property management versus self-management for Chicago area properties.",
      date: "January 12, 2025",
      category: "Property Management",
      readTime: "9 min read",
      slug: "professional-vs-self-property-management"
    },
    {
      id: 6,
      title: "Townhome Community Governance: Building Stronger Neighborhoods",
      excerpt: "Discover how effective governance can transform townhome communities and create more harmonious living environments.",
      date: "January 8, 2025",
      category: "Community Management",
      readTime: "6 min read",
      slug: "townhome-community-governance"
    }
  ]

  const categories = [
    "All Posts",
    "HOA Management",
    "Property Management", 
    "Financial Management",
    "Maintenance",
    "Legal & Compliance",
    "Community Management"
  ]

  const [selectedCategory, setSelectedCategory] = React.useState("All Posts")

  const filteredPosts = selectedCategory === "All Posts" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory)

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-500 to-primary-700 text-white section-padding">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-1 mb-6 text-white">
              Property Management{' '}
              <span className="text-gradient bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Blog
              </span>
            </h1>
            <p className="body-large mb-8 text-blue-100 max-w-3xl mx-auto">
              Expert insights, tips, and guidance for property owners, HOA boards, 
              and residents in Chicago and surrounding areas. Stay informed with 
              the latest property management trends and best practices.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-primary-500 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-primary-50 hover:text-primary-600 shadow-md'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                    <span className="text-gray-500 text-sm">{post.readTime}</span>
                  </div>
                  
                  <h2 className="text-xl font-bold text-gray-900 mb-3 leading-tight hover:text-primary-600 transition-colors">
                    <Link to={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h2>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 text-sm">{post.date}</span>
                    <Link 
                      to={`/blog/${post.slug}`}
                      className="text-primary-500 hover:text-primary-600 font-medium inline-flex items-center transition-colors"
                    >
                      Read More
                      <span className="ml-2">→</span>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No posts found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl p-8 md:p-12 text-white text-center">
            <h2 className="heading-2 mb-4 text-white">Stay Updated with Property Management Insights</h2>
            <p className="body-large mb-8 text-blue-100 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest property management tips, 
              Chicago market updates, and expert advice delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="btn-secondary bg-white text-primary-500 hover:bg-gray-100 px-8 py-3">
                Subscribe
              </button>
            </div>
            <p className="text-blue-200 text-sm mt-4">
              No spam, unsubscribe at any time. We respect your privacy.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">Helpful Resources</h2>
            <p className="body-large max-w-3xl mx-auto">
              Explore our comprehensive resources for property owners, board members, and residents.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link to="/resources" className="card text-center hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">📚</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Property Management Resources</h3>
              <p className="text-gray-600">
                Comprehensive guides and tools for effective property management
              </p>
            </Link>

            <Link to="/services" className="card text-center hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🏢</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Our Services</h3>
              <p className="text-gray-600">
                Learn about our comprehensive property management solutions
              </p>
            </Link>

            <Link to="/contact" className="card text-center hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">💬</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Expert Consultation</h3>
              <p className="text-gray-600">
                Get personalized advice from our property management experts
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-primary text-white">
        <div className="container-max text-center">
          <h2 className="heading-2 mb-4 text-white">Need Professional Property Management?</h2>
          <p className="body-large mb-8 text-blue-100 max-w-2xl mx-auto">
            Contact Chicago's #1 property management company for expert guidance 
            and comprehensive management solutions for your property.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-secondary text-lg px-8 py-4">
              Get Free Consultation
            </Link>
            <a href="tel:773-728-0652" className="btn-outline border-white text-white hover:bg-white hover:text-primary-500 text-lg px-8 py-4">
              Call (773) 728-0652
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Blog