import React from 'react'
import { Link } from 'react-router-dom'
import CanonicalLink from '../../components/CanonicalLink'

const HOAManagement = () => {
  return (
    <div>
      <CanonicalLink href="https://www.manage369.com/services/hoa-management" />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-accent-500 to-red-700 text-white section-padding">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center space-x-2 mb-4 text-red-200">
              <Link to="/services" className="hover:text-white transition-colors">Services</Link>
              <span>›</span>
              <span>HOA Management</span>
            </div>
            <h1 className="heading-1 mb-6 text-white">
              Chicago HOA Management Services by Manage369
            </h1>
            <p className="body-large mb-8 text-red-100">
              Manage369 provides comprehensive HOA management services specifically designed for Chicago homeowner association boards. 
              With over 18 years of experience managing suburban communities throughout Chicago's surrounding areas, we understand 
              the unique challenges of maintaining community standards, managing amenities, and preserving property values. 
              Our board-focused approach helps HOA boards govern effectively while reducing liability and workload.
            </p>
          </div>
        </div>
      </section>

      {/* Community Types */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-4">HOA Communities Manage369 Serves</h2>
            <p className="body-large max-w-3xl mx-auto">
              From intimate neighborhoods to large master-planned communities, 
              Manage369 provides tailored HOA management services for all types of residential developments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card text-center hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-accent-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl text-white">🏘️</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Single-Family Subdivisions</h3>
              <p className="text-sm text-gray-600">
                Traditional Chicago neighborhood developments with detached homes, 
                common areas, and shared amenities requiring coordinated HOA management.
              </p>
            </div>

            <div className="card text-center hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl text-white">🌆</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Master-Planned Communities</h3>
              <p className="text-sm text-gray-600">
                Large-scale Chicago developments with multiple phases, extensive amenities, 
                and complex governance structures requiring professional oversight.
              </p>
            </div>

            <div className="card text-center hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl text-white">🚪</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Gated Communities</h3>
              <p className="text-sm text-gray-600">
                Secure residential communities with controlled access, enhanced 
                security features, and premium amenity management needs.
              </p>
            </div>

            <div className="card text-center hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl text-white">🏢</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Mixed-Use Developments</h3>
              <p className="text-sm text-gray-600">
                Communities combining residential, commercial, and recreational 
                spaces requiring specialized multi-use management expertise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Services */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-4">Comprehensive HOA Management Services</h2>
            <p className="body-large max-w-3xl mx-auto">
              Manage369's HOA management services cover all aspects of community governance, 
              maintenance, and administration to ensure smooth operations and satisfied residents.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-xl">⚖️</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Governance & Legal Compliance</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Board meeting facilitation and professional minutes</li>
                <li>• Covenant and CC&R enforcement procedures</li>
                <li>• Legal compliance monitoring and updates</li>
                <li>• Policy development and implementation</li>
                <li>• Election coordination and oversight</li>
                <li>• Document management and record keeping</li>
                <li>• Annual disclosure statement preparation</li>
                <li>• Regulatory filing and compliance reporting</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-xl">💰</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Financial Management & Reporting</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Annual budget preparation and board approval</li>
                <li>• Assessment collection and delinquency management</li>
                <li>• Reserve fund planning and oversight</li>
                <li>• Monthly financial reporting and analysis</li>
                <li>• Annual audit coordination and support</li>
                <li>• Special assessment planning and implementation</li>
                <li>• Banking relationship management</li>
                <li>• Investment oversight and recommendations</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-xl">🌿</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Common Area Maintenance</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Landscaping and grounds maintenance</li>
                <li>• Amenity facility management and oversight</li>
                <li>• Street and sidewalk maintenance</li>
                <li>• Lighting system management and repairs</li>
                <li>• Signage maintenance and updates</li>
                <li>• Seasonal decoration coordination</li>
                <li>• Snow removal and ice management</li>
                <li>• Common area cleaning and upkeep</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-xl">🏗️</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Architectural Review & Compliance</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Home improvement application review</li>
                <li>• Design guideline enforcement</li>
                <li>• Construction oversight and coordination</li>
                <li>• Landscape plan approval and monitoring</li>
                <li>• Color and material compliance verification</li>
                <li>• Completion inspections and approvals</li>
                <li>• Violation notices and follow-up</li>
                <li>• Architectural standards development</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-xl">📞</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Communication & Resident Services</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Resident communication portals and websites</li>
                <li>• Newsletter and announcement distribution</li>
                <li>• Website management and updates</li>
                <li>• Meeting minutes and documentation</li>
                <li>• Violation notices and enforcement follow-up</li>
                <li>• Community event coordination and planning</li>
                <li>• New resident welcome and orientation</li>
                <li>• Resident feedback collection and response</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-xl">🔧</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Vendor Management & Maintenance</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Contractor selection and oversight</li>
                <li>• Service agreement negotiation and management</li>
                <li>• Quality control and performance monitoring</li>
                <li>• Emergency service coordination</li>
                <li>• Preventive maintenance scheduling</li>
                <li>• Capital improvement project management</li>
                <li>• Warranty management and follow-up</li>
                <li>• Cost analysis and budget optimization</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Manage369 */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-2 mb-6">Why HOA Boards Choose Manage369</h2>
              <p className="body-text mb-6">
                Managing a homeowners association requires balancing community standards with individual rights, 
                maintaining extensive amenities, and ensuring legal compliance. Manage369 has been serving 
                Chicago-area HOA boards since 2007, providing the expertise and resources needed to govern 
                effectively while protecting property values and enhancing community life.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-accent-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Suburban Community Expertise</h4>
                    <p className="text-sm text-gray-600">Specialized knowledge of suburban HOA governance and amenity management</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-accent-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Professional Covenant Enforcement</h4>
                    <p className="text-sm text-gray-600">Fair and consistent enforcement that maintains standards while respecting homeowner rights</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-accent-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Amenity Management Excellence</h4>
                    <p className="text-sm text-gray-600">Professional oversight of pools, clubhouses, and recreational facilities</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-accent-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Board Education & Support</h4>
                    <p className="text-sm text-gray-600">Ongoing training and guidance to help boards fulfill their fiduciary duties</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-xl font-semibold mb-6">Manage369 HOA Management Benefits</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-sm">Enhanced property values through professional management</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-sm">Reduced board liability and volunteer workload</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-sm">Professional vendor relationships and cost savings</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-sm">Improved community harmony and resident satisfaction</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-sm">Legal compliance and risk mitigation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-sm">Professional amenity management and maintenance</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-accent-500 to-red-700 text-white">
        <div className="container-max text-center">
          <h2 className="heading-2 mb-4 text-white">Ready to Partner with Manage369?</h2>
          <p className="body-large mb-8 text-red-100 max-w-2xl mx-auto">
            Contact Manage369 today to learn how our comprehensive HOA management services 
            can enhance your community's governance, reduce board workload, and protect property values.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary bg-white text-accent-500 hover:bg-gray-100 text-lg px-8 py-4">
              Get Free Consultation
            </Link>
            <a href="tel:847-834-4131" className="btn-outline border-white text-white hover:bg-white hover:text-accent-500 text-lg px-8 py-4">
              Call (847) 834-4131
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HOAManagement