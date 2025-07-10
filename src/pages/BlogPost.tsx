import React from 'react'
import { useParams, Link } from 'react-router-dom'

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>()

  // This would typically come from a CMS or API
  const getBlogPost = (slug: string) => {
    if (slug === 'secondhand-smoke-odor-illinois-condominiums-guide') {
      return {
        title: "Secondhand Smoke and Odor in Illinois Condominiums: A Guide by Manage369 Property Management",
        date: "January 27, 2025",
        category: "Legal & Compliance",
        readTime: "12 min read",
        author: "Manage369 Team",
        content: `
          <p class="text-lg text-gray-700 mb-6">Living in a condominium offers many advantages—shared amenities, vibrant communities, and professional support from firms like Manage369 Property Management. However, when secondhand smoke becomes a persistent issue, it can significantly affect residents' health, quality of life, and property value. In Illinois, the law does not prohibit smoking inside private condo units—but that doesn't mean residents, boards, and your management partner at Manage369 are powerless. This blog explores the impact of secondhand smoke, relevant Illinois laws, HOA authority, and practical solutions for managing smoke and odor in condo buildings.</p>

          <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-8">Health Impacts of Secondhand Smoke</h2>
          <p class="text-gray-700 mb-4">There is no safe level of exposure to secondhand smoke (SHS). It contains thousands of toxic chemicals and carcinogens. SHS is a proven cause of:</p>
          <ul class="list-disc pl-6 mb-6 text-gray-700 space-y-1">
            <li>Lung cancer</li>
            <li>Heart disease</li>
            <li>Stroke</li>
            <li>Sudden infant death syndrome (SIDS)</li>
            <li>Asthma attacks and bronchitis in children</li>
            <li>Worsening respiratory symptoms in adults</li>
          </ul>
          <p class="text-gray-700 mb-4">Sidestream smoke—the smoke from the burning end of a cigarette—makes up about 85% of SHS and is often more toxic. In multi-unit buildings, smoke can infiltrate neighboring units through shared ductwork, walls, plumbing, electrical systems, and even cracks.</p>
          <p class="text-gray-700 mb-6">Studies show 44–53% of residents in smoke-free units still experience smoke infiltration. Odor and toxic particles can settle into furniture, walls, and HVAC systems, making secondhand smoke not just a temporary nuisance but a long-term health risk.</p>

          <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-8">Illinois Laws & What HOAs Can Do</h2>
          <p class="text-gray-700 mb-4">There is no statewide ban in Illinois on smoking inside private condo units. However, the Illinois Condominium Property Act gives associations—working alongside professional property management companies like Manage369—the power to regulate activities within units if they interfere with others' enjoyment of their homes.</p>

          <h3 class="text-xl font-semibold text-gray-900 mb-3 mt-6">Can HOAs Ban Smoking?</h3>
          <p class="text-gray-700 mb-4">Yes. Associations can:</p>
          <ul class="list-disc pl-6 mb-6 text-gray-700 space-y-1">
            <li>Amend governing documents to prohibit smoking within units and common areas</li>
            <li>Enforce nuisance clauses when smoke drifts into other units</li>
            <li>Adopt smoke-free policies much like pet or rental regulations</li>
          </ul>

          <h3 class="text-xl font-semibold text-gray-900 mb-3 mt-6">Legal Precedent</h3>
          <p class="text-gray-700 mb-6">In <em>Carey v. The 400 Erie Condominium Association</em>, the court ruled that secondhand smoke can be considered a nuisance—even if smoking is technically allowed—if it unreasonably interferes with others' use and enjoyment of their property. This case confirmed that condo boards and their management teams have both the authority and obligation to respond to credible smoke complaints.</p>

          <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-8">Dealing with Smoke Infiltration & Odor</h2>
          
          <h3 class="text-xl font-semibold text-gray-900 mb-3 mt-6">Step 1: Document Everything</h3>
          <p class="text-gray-700 mb-4">Keep a detailed log of smoke incidents:</p>
          <ul class="list-disc pl-6 mb-4 text-gray-700 space-y-1">
            <li>Dates and times</li>
            <li>Severity (odor levels, visible smoke, health symptoms)</li>
            <li>Suspected source</li>
          </ul>
          <p class="text-gray-700 mb-6">Professional air-quality testing and photographs can support your case if the issue needs escalation.</p>

          <h3 class="text-xl font-semibold text-gray-900 mb-3 mt-6">Step 2: Communication</h3>
          <p class="text-gray-700 mb-4">Your management team at Manage369 recommends starting with informal communication. Smokers often aren't aware of the impact:</p>
          <ul class="list-disc pl-6 mb-4 text-gray-700 space-y-1">
            <li>Suggest they smoke outdoors, away from vents</li>
            <li>Propose sealing shared walls or duct openings</li>
            <li>Recommend using air purifiers</li>
          </ul>
          <p class="text-gray-700 mb-6">If informal efforts fail, escalate to your property manager and HOA board with documented evidence.</p>

          <h3 class="text-xl font-semibold text-gray-900 mb-3 mt-6">Step 3: HOA Action</h3>
          <p class="text-gray-700 mb-4">HOA boards, in partnership with Manage369 Property Management, can:</p>
          <ul class="list-disc pl-6 mb-4 text-gray-700 space-y-1">
            <li>Investigate and validate complaints</li>
            <li>Enforce nuisance clauses in your governing documents</li>
            <li>Require unit owners to install weatherstripping or fans</li>
            <li>Amend rules to restrict smoking in units and on balconies</li>
          </ul>
          <p class="text-gray-700 mb-6">Consult legal counsel to ensure all actions comply with state law and your association's bylaws.</p>

          <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-8">Thirdhand Smoke & Cleanup</h2>
          <p class="text-gray-700 mb-4">After smoking stops, thirdhand smoke—residual chemicals from SHS—can remain in carpets, walls, furniture, and HVAC systems.</p>
          <p class="text-gray-700 mb-4">Remediation tips include:</p>
          <ul class="list-disc pl-6 mb-6 text-gray-700 space-y-1">
            <li>Repainting walls with odor-sealing primers</li>
            <li>Replacing carpets and upholstery</li>
            <li>Cleaning ductwork and vent covers</li>
            <li>Using HEPA and activated-carbon air purifiers</li>
          </ul>

          <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-8">Why It Matters</h2>
          <ul class="list-disc pl-6 mb-6 text-gray-700 space-y-1">
            <li><strong>Health:</strong> Protects children, seniors, and vulnerable residents</li>
            <li><strong>Property Value:</strong> Smoke-free units are more marketable and hold their value</li>
            <li><strong>Community Wellness:</strong> Promotes peaceful enjoyment and reduces conflict</li>
          </ul>

          <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-8">Final Thoughts & Call to Action</h2>
          <p class="text-gray-700 mb-4">At Manage369 Property Management, we believe every resident deserves a safe, healthy home. You don't have to accept secondhand smoke drifting into your condo. Illinois law grants condo associations the tools to act, and courts uphold your right to a smoke-free living environment.</p>
          <p class="text-gray-700 mb-4">If you're experiencing secondhand smoke in your unit:</p>
          <ol class="list-decimal pl-6 mb-6 text-gray-700 space-y-1">
            <li>Document your experience</li>
            <li>Talk to your neighbor or your Manage369 property manager</li>
            <li>Advocate for smoke-free rules in your building</li>
          </ol>
          <p class="text-gray-700 mb-6">Your health and comfort matter. With the right approach, your HOA and Manage369 can create cleaner, healthier communities for everyone.</p>

          <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-8">Sources & Resources</h2>
          <ul class="list-disc pl-6 mb-6 text-gray-700 space-y-2">
            <li><a href="https://www.lung.org/policy-advocacy/tobacco/smokefree-environments/multi-unit-housing/secondhand-smoke-apartments" class="text-primary-500 hover:underline" target="_blank" rel="noopener noreferrer">American Lung Association: Secondhand Smoke in Multi-Unit Housing</a></li>
            <li><a href="https://chicagocondoresource.com/images/PDF/Smoke-free_Policies_and_Condos_in_Illinois.pdf" class="text-primary-500 hover:underline" target="_blank" rel="noopener noreferrer">Chicago Condo Resource – Smoke-Free Policies</a></li>
            <li><a href="https://www.ksnlaw.com/blog/smoking-illinois-associations-carey/" class="text-primary-500 hover:underline" target="_blank" rel="noopener noreferrer">Carey v. The 400 Erie Condominium Ass'n Summary</a></li>
            <li><a href="https://www.publichealthlawcenter.org/sites/default/files/resources/Secondhand-Smoke-Condos.pdf" class="text-primary-500 hover:underline" target="_blank" rel="noopener noreferrer">Public Health Law Center: Secondhand Smoke in Condos</a></li>
          </ul>
        `
      }
    }
    return null
  }

  const post = getBlogPost(slug || '')

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Blog Post Not Found</h1>
          <p className="text-gray-600 mb-6">The blog post you're looking for doesn't exist.</p>
          <Link to="/blog" className="btn-primary">
            Back to Blog
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-500 to-primary-700 text-white section-padding">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center space-x-2 mb-4 text-blue-200">
              <Link to="/blog" className="hover:text-white transition-colors">Blog</Link>
              <span>›</span>
              <span>{post.category}</span>
            </div>
            <h1 className="heading-1 mb-6 text-white leading-tight">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-blue-100">
              <span>By {post.author}</span>
              <span>•</span>
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readTime}</span>
              <span>•</span>
              <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm">
                {post.category}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <article className="prose prose-lg max-w-none">
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </article>

            {/* Author Bio */}
            <div className="mt-12 p-6 bg-gray-50 rounded-xl">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-xl">M</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Manage369 Team</h3>
                  <p className="text-gray-600 mb-4">
                    Chicago's premier property management company providing expert guidance 
                    and comprehensive management solutions for condominiums, townhomes, and HOA associations.
                  </p>
                  <Link to="/about" className="text-primary-500 hover:underline font-medium">
                    Learn more about our team →
                  </Link>
                </div>
              </div>
            </div>

            {/* Related Articles */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Link to="/blog/chicago-condominium-laws-guide" className="card hover:scale-105 transition-transform duration-300">
                  <h4 className="text-lg font-semibold mb-2">Understanding Chicago Condominium Laws</h4>
                  <p className="text-gray-600 text-sm">Navigate the complex landscape of Chicago condominium regulations...</p>
                </Link>
                <Link to="/resources" className="card hover:scale-105 transition-transform duration-300">
                  <h4 className="text-lg font-semibold mb-2">Property Management Resources</h4>
                  <p className="text-gray-600 text-sm">Access our comprehensive library of property management guides...</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-primary text-white">
        <div className="container-max text-center">
          <h2 className="heading-2 mb-4 text-white">Need Help with Property Management Issues?</h2>
          <p className="body-large mb-8 text-blue-100 max-w-2xl mx-auto">
            Contact Manage369 for expert guidance on secondhand smoke policies, 
            HOA governance, and comprehensive property management solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-secondary text-lg px-8 py-4">
              Get Expert Consultation
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

export default BlogPost