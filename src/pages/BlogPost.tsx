import React from 'react'
import { useParams, Link } from 'react-router-dom'

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>()

  // Blog posts data
  const blogPosts = {
    "emotional-support-animals-condominium-communities-guide": {
      id: 6,
      title: "Navigating Emotional Support Animals . A Complete Condo Guide from Manage369",
      content: `
        <div class="prose prose-lg max-w-none">
          <div class="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
            <p class="text-blue-700 font-medium">By Manage369 Property Management – Serving Chicago and Surrounding Communities</p>
          </div>

          <h2>Understanding Emotional Support Animals (ESAs)</h2>
          
          <p>As emotional support animals (ESAs) become more common in residential communities, condominium boards and residents often have questions about how these animals fit into "no-pet" policies, community rules, and legal obligations. Unlike service animals, ESAs are not trained to perform specific tasks — but they are still protected under federal housing law.</p>
          
          <p>At Manage369, we work closely with condominium associations throughout Chicago to ensure compliance with the law while preserving a harmonious living environment for all residents.</p>

          <h2>What Is an Emotional Support Animal?</h2>
          
          <p>An ESA is an animal that provides comfort, companionship, or emotional support to an individual with a diagnosed mental or emotional condition. While ESAs are not considered service animals under the Americans with Disabilities Act (ADA), they are protected under the Fair Housing Act (FHA).</p>
          
          <p>This means that even in buildings with pet restrictions, qualified residents may request a reasonable accommodation to keep an emotional support animal in their unit.</p>

          <h2>Key Differences: ESA vs. Service Animal</h2>
          
          <p>Service animals are trained to perform specific tasks related to a disability and are protected under both the ADA and FHA. ESAs do not require specific training and are only protected under housing laws.</p>
          
          <div class="bg-gray-50 p-6 rounded-lg mb-6">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 class="font-semibold text-green-700 mb-3">Service Animals:</h4>
                <ul class="text-sm space-y-1">
                  <li>• Task-specific training</li>
                  <li>• Covered under ADA and FHA</li>
                  <li>• Allowed in common areas</li>
                </ul>
              </div>
              <div>
                <h4 class="font-semibold text-blue-700 mb-3">Emotional Support Animals:</h4>
                <ul class="text-sm space-y-1">
                  <li>• No specific training</li>
                  <li>• Covered under FHA only</li>
                  <li>• Not automatically allowed in all common areas</li>
                </ul>
              </div>
            </div>
          </div>

          <h2>Reasonable Accommodation: What It Means</h2>
          
          <p>In Illinois and under federal housing law, a condominium board must consider a resident's request for reasonable accommodation to keep an ESA. This includes:</p>
          
          <ul>
            <li>Waiving no-pet policies</li>
            <li>Not charging pet rent, deposits, or fees</li>
            <li>Allowing the ESA in the unit despite pet restrictions</li>
          </ul>
          
          <p>However, the board is permitted to request appropriate documentation verifying the need for the ESA.</p>

          <h2>What Kind of Documentation Can Be Requested?</h2>
          
          <p>Condominium associations may request a letter or completed form from a licensed healthcare professional confirming:</p>
          
          <ul>
            <li>The resident has a mental or emotional disability</li>
            <li>The ESA is necessary to help alleviate symptoms of that disability</li>
          </ul>
          
          <p><strong>You cannot ask for:</strong></p>
          
          <ul>
            <li>Detailed medical records</li>
            <li>A diagnosis or treatment plan</li>
            <li>Certification or training for the animal</li>
          </ul>
          
          <p>The documentation must be kept confidential and reviewed without bias.</p>

          <h2>Valid Documentation Must Reflect a Legitimate Doctor-Patient Relationship</h2>
          
          <p>As ESA requests have become more common, so have fraudulent or questionable claims — especially those involving online-only certificate mills. While residents are allowed to provide documentation from a licensed healthcare provider, that provider must have a legitimate, ongoing relationship with the resident.</p>
          
          <p>Boards should be cautious of documentation:</p>
          
          <ul>
            <li>From out-of-state or unverified providers</li>
            <li>Issued after a single brief virtual consultation</li>
            <li>Purchased from "ESA registration" websites</li>
          </ul>
          
          <div class="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-6">
            <p class="text-yellow-800"><strong>Best Practice:</strong> Require that the documentation be from a provider who is actively involved in the resident's care. If there's any doubt, the association's attorney should review the request and supporting documents before approval or denial.</p>
            <p class="text-yellow-700 text-sm mt-2">This approach ensures compliance with fair housing laws while protecting the community from fraudulent claims and legal risk.</p>
          </div>

          <h2>When Can an ESA Be Denied?</h2>
          
          <p>Condo boards can deny an ESA request if the animal:</p>
          
          <ul>
            <li>Poses a direct threat to the health or safety of others</li>
            <li>Causes significant damage to property that cannot be reasonably prevented</li>
            <li>Is not under the control of the resident</li>
          </ul>
          
          <p>However, denials must be based on specific behavior and documented incidents, not assumptions about breed, size, or species.</p>

          <h2>Common Misconceptions</h2>
          
          <div class="bg-red-50 border-l-4 border-red-500 p-6 mb-6">
            <ul class="text-red-700 space-y-2">
              <li><strong>"We have a no-pet policy, so ESAs aren't allowed."</strong> — Incorrect. ESAs are not considered pets under the law.</li>
              <li><strong>"We can charge a pet deposit just in case."</strong> — No. You may not charge any fees related to ESAs.</li>
              <li><strong>"We can ask to see the animal's certification."</strong> — No certification is required for an ESA.</li>
            </ul>
          </div>

          <h2>Best Practices for Condo Boards</h2>
          
          <p>To ensure fairness and legal compliance:</p>
          
          <ol>
            <li>Establish a clear written policy for handling ESA requests</li>
            <li>Require reasonable documentation using a standardized form</li>
            <li>Apply the process consistently to all residents</li>
            <li>Educate board members and staff on ESA vs. service animal distinctions</li>
            <li>Consult legal counsel or your property management team for complex cases</li>
          </ol>

          <h2>Resident Responsibilities</h2>
          
          <p>Residents with ESAs must:</p>
          
          <ul>
            <li>Keep the animal under control at all times</li>
            <li>Prevent excessive noise, aggression, or damage</li>
            <li>Follow all other community rules (e.g., leash requirements, waste disposal)</li>
          </ul>
          
          <p>If these rules are violated, the board may take action — including fines or requests for removal — provided it's handled legally and fairly.</p>

          <h2>Final Thoughts</h2>
          
          <p>Handling emotional support animal requests doesn't have to be difficult or contentious. With the right policies and professional guidance, condominium associations can remain in full legal compliance while maintaining a respectful, peaceful community.</p>
          
          <p>At Manage369 Property Management, we help Chicago-area condo boards implement fair policies, respond to ESA requests, and avoid legal pitfalls. If your board needs help creating or updating ESA accommodation procedures, reach out to us today.</p>

          <div class="bg-gradient-to-r from-primary-500 to-secondary-500 p-6 rounded-xl text-white mt-8">
            <h3 class="text-xl font-semibold mb-4">Contact Us</h3>
            <div class="space-y-2">
              <p><strong>Manage369 Property Management</strong></p>
              <p>🌐 <a href="/" class="text-yellow-300 hover:underline">www.manage369.com</a></p>
              <p>📍 Serving Chicago and surrounding suburbs</p>
              <p>📞 <a href="tel:773-728-0652" class="text-yellow-300 hover:underline">(773) 728-0652</a></p>
              <p class="text-blue-100 text-sm mt-4">✉️ Let us help you manage with confidence and compliance</p>
            </div>
          </div>
        </div>
      `,
      date: "January 27, 2025",
      category: "Legal & Compliance",
      readTime: "14 min read",
      excerpt: "Comprehensive guide for condominium boards on handling emotional support animal requests, including legal requirements, documentation standards, and best practices for compliance with fair housing laws.",
      author: "Manage369 Team",
      featured: false
    },
    "service-animals-emotional-support-chicago-property-management": {
      id: 5,
      title: "Navigating Service Animals . A Complete Condo Guide from Manage369",
      content: `
        <div class="prose prose-lg max-w-none">
          <div class="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
            <h3 class="text-lg font-semibold text-blue-800 mb-3">Key Takeaways</h3>
            <ul class="text-blue-700 space-y-2">
              <li>✔ Service animals are not pets and must be accommodated without pet fees or deposits under fair housing laws.</li>
              <li>✔ Limited verification is allowed, but landlords cannot request training certificates or detailed medical information.</li>
              <li>✔ Reasonable accommodations are required unless the animal poses a direct threat or significant property damage.</li>
              <li>✔ Clear, consistent policies help protect both landlords and residents from legal risk.</li>
            </ul>
          </div>

          <h2>Service Animals and Fair Housing: What Every Chicago Landlord Should Know</h2>
          
          <p>At Manage369 Property Management, we often hear from landlords who feel uncertain when handling rental applications involving service animals. It's understandable — the legal responsibilities are specific, and the stakes are high.</p>
          
          <p>In Chicago, understanding the rights of residents with disabilities, as well as your own obligations as a housing provider, is critical to avoiding legal trouble and maintaining a respectful, compliant community. Below, we outline what every landlord needs to know when it comes to service animals — and how Manage369 can help you navigate these situations confidently.</p>

          <h2>Service Animals Are Not Pets</h2>
          
          <p>One of the most common misconceptions is that service animals fall under a property's pet policy. They do not.</p>
          
          <p>Service animals are trained to perform specific tasks for individuals with disabilities and are legally protected under the Fair Housing Act (FHA). This means:</p>
          
          <ul>
            <li>You cannot enforce no-pet policies on service animals.</li>
            <li>You cannot charge pet deposits, fees, or pet rent.</li>
            <li>You cannot restrict breeds or sizes if the animal qualifies.</li>
          </ul>
          
          <p>Failing to recognize this legal distinction can put you at risk of violating fair housing laws.</p>

          <h2>Reasonable Accommodation Is Required</h2>
          
          <p>If a qualified resident with a disability requests to live with a service animal, you're required to provide reasonable accommodation — even if your building has a no-pets policy.</p>
          
          <p>This isn't about special treatment. It's about providing equal access to housing as mandated by federal and state law. As long as the animal doesn't pose a direct threat or cause undue hardship, you are legally required to adjust your policies.</p>

          <h2>Verification Is Allowed — With Limits</h2>
          
          <p>When the need for a service animal is not readily apparent, landlords are allowed to request limited documentation. This typically includes a letter from a medical or mental health professional confirming that the resident has a disability and that the animal assists them.</p>
          
          <p>However:</p>
          
          <ul>
            <li>You cannot request a diagnosis or detailed medical records.</li>
            <li>You cannot ask for the animal to demonstrate its task.</li>
            <li>You cannot require a certificate of training.</li>
          </ul>
          
          <p>At Manage369, we guide our clients through the verification process respectfully and legally, ensuring compliance while protecting your rights as a landlord.</p>

          <h2>No Pet Fees or Extra Deposits</h2>
          
          <p>Service animals are not subject to pet fees or deposits of any kind. However, tenants are still responsible for any damages caused by their animal — just as any resident would be responsible for damage caused by a guest.</p>
          
          <p>Make sure your lease clearly states this responsibility, and always document any damage with photos and reports.</p>

          <h2>You Cannot Demand Training Certificates</h2>
          
          <p>Chicago landlords sometimes ask: Can I request proof that the animal is trained?</p>
          
          <p>The answer is no. Service animals are not legally required to have formal training or certification. If the animal assists with a disability, it qualifies — regardless of where or how it was trained.</p>
          
          <p>Focusing on the animal's behavior and role, rather than its paperwork, is key to remaining in compliance.</p>

          <h2>When You Can Deny a Request</h2>
          
          <p>There are rare situations when a service animal may legally be denied, such as:</p>
          
          <ul>
            <li>The animal has a history of aggression or bites.</li>
            <li>It causes significant property damage that cannot be reasonably prevented.</li>
          </ul>
          
          <p>These cases require strong documentation and a clear pattern of harmful behavior. At Manage369, we help landlords document incidents and evaluate whether legal grounds exist for denial.</p>

          <h2>Apply Policies Consistently</h2>
          
          <p>Consistency is critical. If you manage multiple units, be sure that you handle every service animal request with the same process and documentation.</p>
          
          <p>Unequal treatment can lead to fair housing complaints — even when done unintentionally. A consistent, written policy helps:</p>
          
          <ul>
            <li>Avoid legal risk</li>
            <li>Protect your reputation</li>
            <li>Build trust with tenants</li>
          </ul>

          <h2>Service Animals vs. Emotional Support Animals (ESAs)</h2>
          
          <p>It's important to understand the difference:</p>
          
          <ul>
            <li><strong>Service animals</strong> are trained to perform specific tasks related to a disability.</li>
            <li><strong>Emotional support animals (ESAs)</strong> provide comfort but do not require training.</li>
          </ul>
          
          <p>Service animals are protected under both the Fair Housing Act and the Americans with Disabilities Act (ADA). ESAs are only protected under housing laws and have different rules regarding verification and accommodation.</p>
          
          <p>If you're unsure which category applies, contact us — our team at Manage369 can help you navigate the distinction.</p>

          <h2>Residents Must Control the Animal</h2>
          
          <p>While service animals are protected, that does not exempt residents from their responsibilities. Residents must ensure the animal:</p>
          
          <ul>
            <li>Is not aggressive toward other tenants</li>
            <li>Does not create a noise nuisance</li>
            <li>Is leashed or under control in common areas</li>
            <li>Does not cause damage to property</li>
          </ul>
          
          <p>These are reasonable community expectations, and violations should be handled like any other lease issue — calmly, fairly, and in writing.</p>

          <h2>Let Manage369 Handle the Details</h2>
          
          <p>Navigating service animal rules in Chicago can be overwhelming. At Manage369, we help landlords and associations create policies, evaluate requests, and respond to concerns — all while ensuring full compliance with local and federal laws.</p>
          
          <p>If you're unsure about a current situation or need help setting up a service animal policy for your building, reach out to us today.</p>

          <div class="bg-gradient-to-r from-primary-500 to-secondary-500 p-6 rounded-xl text-white mt-8">
            <h3 class="text-xl font-semibold mb-4">Contact Manage369</h3>
            <div class="space-y-2">
              <p>📍 Serving Chicago and surrounding suburbs</p>
              <p>🌐 <a href="/" class="text-yellow-300 hover:underline">www.manage369.com</a></p>
              <p>📞 <a href="tel:773-728-0652" class="text-yellow-300 hover:underline">(773) 728-0652</a></p>
              <p class="text-blue-100 text-sm mt-4">Let us protect your investment — so you can focus on growth.</p>
            </div>
          </div>
        </div>
      `,
      date: "January 27, 2025",
      category: "Legal & Compliance",
      readTime: "12 min read",
      excerpt: "Essential guidance for Chicago property managers on handling service animals and emotional support animals, including legal requirements, verification procedures, and best practices for compliance.",
      author: "Manage369 Team",
      featured: false
    },
    "updating-condo-bylaws-illinois-complete-guide": {
      id: 4,
      title: "Updating Condo Bylaws in Illinois: A Complete Guide for Associations",
      content: `
        <div class="prose prose-lg max-w-none">
          <p>Condominium bylaws serve as the governing framework for your association, outlining everything from board responsibilities to assessment procedures. In Illinois, keeping these documents current is not just good practice—it's essential for legal compliance and effective community management.</p>
          
          <h2>Why Update Your Bylaws?</h2>
          <p>Illinois condominium law has evolved significantly over the years. Outdated bylaws can create legal vulnerabilities, operational inefficiencies, and governance challenges that impact your entire community.</p>
          
          <h2>Key Areas for Review</h2>
          <ul>
            <li>Board composition and election procedures</li>
            <li>Assessment collection and enforcement</li>
            <li>Meeting notice requirements</li>
            <li>Architectural review processes</li>
            <li>Technology and electronic communication provisions</li>
          </ul>
          
          <h2>The Amendment Process</h2>
          <p>Illinois law requires specific procedures for bylaw amendments, including proper notice, voting thresholds, and documentation. Understanding these requirements is crucial for valid amendments.</p>
          
          <p>At Manage369, we guide associations through the entire bylaw update process, ensuring compliance with Illinois law while addressing your community's specific needs.</p>
        </div>
      `,
      date: "January 27, 2025",
      category: "Legal & Compliance",
      readTime: "15 min read",
      excerpt: "Essential guidance for Illinois condominium associations on updating bylaws, including legal requirements, amendment procedures, and best practices for modernizing governance documents.",
      author: "Manage369 Team",
      featured: false
    },
    "managing-association-funds-illinois-operating-reserve-accounts": {
      id: 3,
      title: "Managing Association Funds in Illinois: Operating vs. Reserve Accounts",
      content: `
        <div class="prose prose-lg max-w-none">
          <p>Proper financial management is the cornerstone of successful condominium and HOA operations. Understanding the distinction between operating and reserve funds—and managing both effectively—protects your community's financial health and ensures long-term sustainability.</p>
          
          <h2>Operating Account Fundamentals</h2>
          <p>Your operating account covers day-to-day expenses including utilities, maintenance, management fees, and insurance. These funds should be readily accessible and carefully budgeted to avoid shortfalls.</p>
          
          <h2>Reserve Fund Planning</h2>
          <p>Reserve funds are designated for major repairs and replacements. Illinois law requires associations to maintain adequate reserves, and proper planning prevents the need for special assessments.</p>
          
          <h2>Best Practices for Fund Management</h2>
          <ul>
            <li>Separate accounts for operating and reserve funds</li>
            <li>Regular financial reporting and transparency</li>
            <li>Professional reserve studies every 3-5 years</li>
            <li>Board oversight and fiduciary responsibility</li>
          </ul>
          
          <p>Manage369 provides comprehensive financial management services, ensuring your association maintains healthy operating and reserve accounts while meeting all Illinois regulatory requirements.</p>
        </div>
      `,
      date: "January 27, 2025",
      category: "Financial Management",
      readTime: "8 min read",
      excerpt: "Essential guidelines for proper financial management of condominium and HOA funds in Illinois, including operating account management, reserve fund planning, and regulatory compliance.",
      author: "Manage369 Team",
      featured: false
    },
    "loud-music-chicago-noise-ordinance-guide": {
      id: 2,
      title: "Loud Music and Chicago Noise Ordinance: A Property Management Guide",
      content: `
        <div class="prose prose-lg max-w-none">
          <p>Noise complaints are among the most common issues property managers face in Chicago. Understanding the city's noise ordinance and having effective management strategies helps maintain peaceful communities while protecting tenant rights.</p>
          
          <h2>Chicago Noise Ordinance Overview</h2>
          <p>Chicago Municipal Code Chapter 8-32 establishes specific noise limits and prohibited activities. The ordinance covers everything from amplified music to construction noise, with different standards for residential and commercial areas.</p>
          
          <h2>Quiet Hours and Decibel Limits</h2>
          <p>Chicago's quiet hours typically run from 10 PM to 8 AM on weekdays and 10 PM to 9 AM on weekends. During these times, noise levels must not exceed specific decibel limits that vary by zoning district.</p>
          
          <h2>Property Management Strategies</h2>
          <ul>
            <li>Clear lease provisions regarding noise</li>
            <li>Documented complaint procedures</li>
            <li>Mediation before enforcement</li>
            <li>Coordination with Chicago police when necessary</li>
          </ul>
          
          <p>Manage369 helps property owners develop comprehensive noise policies and provides professional mediation services to resolve conflicts before they escalate.</p>
        </div>
      `,
      date: "January 27, 2025",
      category: "Legal & Compliance",
      readTime: "10 min read",
      excerpt: "Understanding Chicago's noise ordinance, tenant rights, and effective strategies for managing noise complaints in condominiums and multi-unit buildings.",
      author: "Manage369 Team",
      featured: false
    },
    "secondhand-smoke-odor-illinois-condominiums-guide": {
      id: 1,
      title: "Secondhand Smoke and Odor in Illinois Condominiums: A Complete Guide by Manage369",
      content: `
        <div class="prose prose-lg max-w-none">
          <p>Secondhand smoke infiltration is a growing concern for condominium associations across Illinois. As a property management company serving Chicago and surrounding areas, Manage369 frequently helps associations navigate the complex legal and practical challenges of smoke-related issues.</p>
          
          <h2>Health Impacts of Secondhand Smoke</h2>
          <p>The health risks of secondhand smoke are well-documented and include respiratory problems, cardiovascular disease, and increased cancer risk. For condominium residents, smoke infiltration from neighboring units can create serious health concerns, especially for children, elderly residents, and those with pre-existing conditions.</p>
          
          <h2>Illinois Laws and Regulations</h2>
          <p>While Illinois has comprehensive smoke-free laws for public places, private residential properties have different regulations. However, condominium associations have significant authority to regulate smoking within their communities through governing documents and house rules.</p>
          
          <h2>HOA Authority and Options</h2>
          <p>Condominium associations can implement smoking restrictions through:</p>
          <ul>
            <li>Amendments to governing documents</li>
            <li>House rules and regulations</li>
            <li>Designated smoking areas</li>
            <li>Complete smoking bans in common areas</li>
          </ul>
          
          <h2>Practical Solutions</h2>
          <p>Manage369 recommends a multi-faceted approach including improved ventilation, air sealing between units, and clear communication policies. We work with associations to develop comprehensive smoking policies that protect all residents while respecting individual rights.</p>
          
          <p>If your condominium association is dealing with secondhand smoke issues, contact Manage369 for professional guidance and practical solutions tailored to your community's needs.</p>
        </div>
      `,
      date: "January 27, 2025",
      category: "Legal & Compliance",
      readTime: "12 min read",
      excerpt: "Learn about the health impacts of secondhand smoke, Illinois laws, HOA authority, and practical solutions for managing smoke and odor in condo buildings.",
      author: "Manage369 Team",
      featured: true
    }
  }

  const post = slug ? blogPosts[slug as keyof typeof blogPosts] : null

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 py-20">
        <div className="container-max">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Post Not Found</h1>
            <p className="text-gray-600 mb-8">The blog post you're looking for doesn't exist.</p>
            <Link to="/blog" className="btn-primary">
              Back to Blog
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-500 to-primary-700 text-white section-padding">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center space-x-2 mb-4 text-blue-200">
              <Link to="/blog" className="hover:text-white transition-colors">Blog</Link>
              <span>›</span>
              <span className="text-blue-200">{post.category}</span>
            </div>
            <h1 className="heading-1 mb-6 text-white leading-tight">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-blue-100">
              <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm">
                {post.category}
              </span>
              <span>{post.date}</span>
              <span>{post.readTime}</span>
              <span>By {post.author}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <article 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-2 mb-8 text-center">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {Object.entries(blogPosts)
                .filter(([key, relatedPost]) => key !== slug && relatedPost.category === post.category)
                .slice(0, 2)
                .map(([key, relatedPost]) => (
                <article key={key} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm">
                        {relatedPost.category}
                      </span>
                      <span className="text-gray-500 text-sm">{relatedPost.readTime}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight hover:text-primary-600 transition-colors">
                      <Link to={`/blog/${key}`}>
                        {relatedPost.title}
                      </Link>
                    </h3>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {relatedPost.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500 text-sm">{relatedPost.date}</span>
                      <Link 
                        to={`/blog/${key}`}
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
            
            <div className="text-center mt-12">
              <Link to="/blog" className="btn-primary">
                View All Articles
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-primary text-white">
        <div className="container-max text-center">
          <h2 className="heading-2 mb-4 text-white">Need Professional Property Management Guidance?</h2>
          <p className="body-large mb-8 text-blue-100 max-w-2xl mx-auto">
            Contact Chicago's #1 property management company for expert advice 
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

export default BlogPost