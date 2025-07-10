import React from 'react'
import { useParams, Link } from 'react-router-dom'

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>()

  // This would typically come from a CMS or API
  const getBlogPost = (slug: string) => {
    if (slug === 'loud-music-chicago-noise-ordinance-guide') {
      return {
        title: "Loud Music and Chicago Noise Ordinance: A Property Management Guide",
        date: "January 27, 2025",
        category: "Legal & Compliance",
        readTime: "10 min read",
        author: "Manage369 Team",
        content: `
          <p class="text-lg text-gray-700 mb-6">Living in a condominium or multi-unit building in Chicago comes with the expectation of peaceful enjoyment of your home. However, noise complaints—particularly those involving loud music—are among the most common issues property managers and HOA boards face. Understanding Chicago's noise ordinance, tenant rights, and effective management strategies is crucial for maintaining harmony in residential communities. This guide from Manage369 Property Management explores the legal framework, practical solutions, and best practices for addressing noise issues in Chicago properties.</p>

          <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-8">Chicago Noise Ordinance Overview</h2>
          <p class="text-gray-700 mb-4">Chicago Municipal Code Chapter 8-32 establishes comprehensive noise regulations designed to protect residents' quality of life while balancing individual freedoms. The ordinance applies to all residential properties, including condominiums, townhomes, and apartment buildings throughout the city.</p>

          <h3 class="text-xl font-semibold text-gray-900 mb-3 mt-6">Key Provisions of Chicago's Noise Ordinance</h3>
          <ul class="list-disc pl-6 mb-6 text-gray-700 space-y-2">
            <li><strong>Quiet Hours:</strong> 10:00 PM to 8:00 AM on weekdays, 11:00 PM to 9:00 AM on weekends</li>
            <li><strong>Decibel Limits:</strong> 55 dB during daytime hours, 50 dB during quiet hours in residential areas</li>
            <li><strong>Amplified Sound:</strong> Special restrictions on amplified music and sound systems</li>
            <li><strong>Repetitive Noise:</strong> Prohibitions on continuous or repetitive sounds that disturb neighbors</li>
            <li><strong>Construction Noise:</strong> Specific hours and decibel limits for construction activities</li>
          </ul>

          <h3 class="text-xl font-semibold text-gray-900 mb-3 mt-6">What Constitutes a Violation?</h3>
          <p class="text-gray-700 mb-4">Under Chicago's ordinance, noise violations include:</p>
          <ul class="list-disc pl-6 mb-6 text-gray-700 space-y-1">
            <li>Playing music or television at volumes audible beyond the property line</li>
            <li>Operating sound equipment during quiet hours</li>
            <li>Creating noise that exceeds decibel limits for the area</li>
            <li>Producing repetitive or continuous sounds that disturb neighbors</li>
            <li>Hosting parties or gatherings that generate excessive noise</li>
          </ul>

          <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-8">Property Management Responsibilities</h2>
          <p class="text-gray-700 mb-4">As Chicago's premier property management company, Manage369 understands that effective noise management requires a proactive approach that balances enforcement with community relations.</p>

          <h3 class="text-xl font-semibold text-gray-900 mb-3 mt-6">Establishing Clear Policies</h3>
          <p class="text-gray-700 mb-4">Successful noise management begins with clear, well-communicated policies:</p>
          <ul class="list-disc pl-6 mb-6 text-gray-700 space-y-2">
            <li><strong>Written Noise Policies:</strong> Include specific quiet hours and acceptable noise levels in lease agreements and HOA rules</li>
            <li><strong>Resident Education:</strong> Provide information about Chicago's noise ordinance and building-specific policies</li>
            <li><strong>Consequences:</strong> Clearly outline escalation procedures and potential penalties for violations</li>
            <li><strong>Contact Information:</strong> Provide 24/7 contact information for noise complaints</li>
          </ul>

          <h3 class="text-xl font-semibold text-gray-900 mb-3 mt-6">Documentation and Response Procedures</h3>
          <p class="text-gray-700 mb-4">Proper documentation is essential for effective noise complaint resolution:</p>
          <ul class="list-disc pl-6 mb-6 text-gray-700 space-y-2">
            <li><strong>Complaint Logs:</strong> Maintain detailed records of all noise complaints including dates, times, and descriptions</li>
            <li><strong>Response Times:</strong> Establish target response times for different types of complaints</li>
            <li><strong>Follow-up:</strong> Document resolution efforts and outcomes</li>
            <li><strong>Pattern Recognition:</strong> Identify repeat offenders and chronic problem areas</li>
          </ul>

          <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-8">Tenant Rights and Responsibilities</h2>
          <p class="text-gray-700 mb-4">Both tenants and unit owners have rights and responsibilities regarding noise in multi-unit buildings.</p>

          <h3 class="text-xl font-semibold text-gray-900 mb-3 mt-6">Tenant Rights</h3>
          <ul class="list-disc pl-6 mb-6 text-gray-700 space-y-2">
            <li><strong>Quiet Enjoyment:</strong> Right to peaceful use of their unit without unreasonable noise interference</li>
            <li><strong>Complaint Process:</strong> Right to file complaints and expect timely investigation</li>
            <li><strong>Due Process:</strong> Right to respond to noise complaints and present their side</li>
            <li><strong>Reasonable Accommodation:</strong> Consideration for medical conditions or disabilities that may affect noise sensitivity</li>
          </ul>

          <h3 class="text-xl font-semibold text-gray-900 mb-3 mt-6">Tenant Responsibilities</h3>
          <ul class="list-disc pl-6 mb-6 text-gray-700 space-y-2">
            <li><strong>Compliance:</strong> Adherence to building noise policies and Chicago ordinances</li>
            <li><strong>Consideration:</strong> Being mindful of neighbors and adjusting behavior accordingly</li>
            <li><strong>Communication:</strong> Notifying neighbors in advance of potentially noisy activities</li>
            <li><strong>Cooperation:</strong> Working with property management to resolve noise issues</li>
          </ul>

          <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-8">Effective Noise Complaint Resolution</h2>
          <p class="text-gray-700 mb-4">Manage369's proven approach to noise complaint resolution emphasizes communication, documentation, and progressive enforcement.</p>

          <h3 class="text-xl font-semibold text-gray-900 mb-3 mt-6">Step 1: Initial Response</h3>
          <ul class="list-disc pl-6 mb-6 text-gray-700 space-y-2">
            <li><strong>Immediate Assessment:</strong> Determine if the complaint requires immediate attention or can wait for business hours</li>
            <li><strong>Documentation:</strong> Record all relevant details including time, location, and nature of the complaint</li>
            <li><strong>Initial Contact:</strong> Reach out to the noise source if appropriate and safe to do so</li>
            <li><strong>Complainant Follow-up:</strong> Inform the complainant of actions taken</li>
          </ul>

          <h3 class="text-xl font-semibold text-gray-900 mb-3 mt-6">Step 2: Investigation and Mediation</h3>
          <ul class="list-disc pl-6 mb-6 text-gray-700 space-y-2">
            <li><strong>Fact Gathering:</strong> Interview all parties involved and any witnesses</li>
            <li><strong>Policy Review:</strong> Confirm which policies or ordinances may have been violated</li>
            <li><strong>Mediation:</strong> Facilitate communication between neighbors when appropriate</li>
            <li><strong>Solution Development:</strong> Work with all parties to develop mutually acceptable solutions</li>
          </ul>

          <h3 class="text-xl font-semibold text-gray-900 mb-3 mt-6">Step 3: Enforcement and Follow-up</h3>
          <ul class="list-disc pl-6 mb-6 text-gray-700 space-y-2">
            <li><strong>Progressive Discipline:</strong> Implement escalating consequences for repeat violations</li>
            <li><strong>Legal Action:</strong> Involve legal counsel or city authorities when necessary</li>
            <li><strong>Monitoring:</strong> Continue to monitor the situation to ensure compliance</li>
            <li><strong>Community Communication:</strong> Keep the broader community informed of policy enforcement</li>
          </ul>

          <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-8">Prevention Strategies</h2>
          <p class="text-gray-700 mb-4">The most effective noise management focuses on prevention rather than reaction.</p>

          <h3 class="text-xl font-semibold text-gray-900 mb-3 mt-6">Building Design and Soundproofing</h3>
          <ul class="list-disc pl-6 mb-6 text-gray-700 space-y-2">
            <li><strong>Sound Insulation:</strong> Invest in quality soundproofing materials during construction or renovation</li>
            <li><strong>Floor Coverings:</strong> Require or incentivize carpet or sound-dampening flooring in upper units</li>
            <li><strong>Window Treatments:</strong> Encourage heavy curtains or sound-blocking window treatments</li>
            <li><strong>HVAC Considerations:</strong> Ensure heating and cooling systems don't transmit sound between units</li>
          </ul>

          <h3 class="text-xl font-semibold text-gray-900 mb-3 mt-6">Community Education and Engagement</h3>
          <ul class="list-disc pl-6 mb-6 text-gray-700 space-y-2">
            <li><strong>New Resident Orientation:</strong> Include noise policies in move-in materials and orientations</li>
            <li><strong>Regular Communication:</strong> Send periodic reminders about noise policies and quiet hours</li>
            <li><strong>Community Events:</strong> Foster positive neighbor relationships through social activities</li>
            <li><strong>Feedback Channels:</strong> Provide multiple ways for residents to communicate concerns</li>
          </ul>

          <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-8">Legal Considerations and Enforcement</h2>
          <p class="text-gray-700 mb-4">Understanding the legal framework surrounding noise complaints is essential for effective property management.</p>

          <h3 class="text-xl font-semibold text-gray-900 mb-3 mt-6">Chicago Police Department Role</h3>
          <p class="text-gray-700 mb-4">The Chicago Police Department can be called for noise violations, particularly during quiet hours:</p>
          <ul class="list-disc pl-6 mb-6 text-gray-700 space-y-2">
            <li><strong>Non-Emergency Line:</strong> 311 for non-urgent noise complaints</li>
            <li><strong>Emergency Line:</strong> 911 only for situations involving threats or violence</li>
            <li><strong>Documentation:</strong> Police reports can provide valuable documentation for ongoing issues</li>
            <li><strong>Citations:</strong> Officers can issue citations for noise ordinance violations</li>
          </ul>

          <h3 class="text-xl font-semibold text-gray-900 mb-3 mt-6">HOA and Condo Association Authority</h3>
          <p class="text-gray-700 mb-4">Associations have significant authority to address noise issues:</p>
          <ul class="list-disc pl-6 mb-6 text-gray-700 space-y-2">
            <li><strong>Rule Making:</strong> Authority to establish noise policies stricter than city ordinances</li>
            <li><strong>Fines and Penalties:</strong> Ability to impose financial penalties for violations</li>
            <li><strong>Legal Action:</strong> Right to pursue legal remedies for chronic violators</li>
            <li><strong>Lease Enforcement:</strong> Working with landlords to address tenant violations</li>
          </ul>

          <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-8">Technology Solutions</h2>
          <p class="text-gray-700 mb-4">Modern technology can help property managers monitor and address noise issues more effectively.</p>

          <h3 class="text-xl font-semibold text-gray-900 mb-3 mt-6">Noise Monitoring Systems</h3>
          <ul class="list-disc pl-6 mb-6 text-gray-700 space-y-2">
            <li><strong>Decibel Meters:</strong> Portable devices for measuring noise levels during complaints</li>
            <li><strong>Continuous Monitoring:</strong> Permanent systems that track noise levels in common areas</li>
            <li><strong>Alert Systems:</strong> Automated notifications when noise levels exceed thresholds</li>
            <li><strong>Data Logging:</strong> Historical data to identify patterns and problem times</li>
          </ul>

          <h3 class="text-xl font-semibold text-gray-900 mb-3 mt-6">Communication Platforms</h3>
          <ul class="list-disc pl-6 mb-6 text-gray-700 space-y-2">
            <li><strong>Resident Apps:</strong> Mobile applications for reporting noise complaints</li>
            <li><strong>Online Portals:</strong> Web-based systems for tracking complaint status</li>
            <li><strong>Automated Responses:</strong> Immediate acknowledgment of complaints</li>
            <li><strong>Anonymous Reporting:</strong> Options for residents who prefer not to identify themselves</li>
          </ul>

          <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-8">Special Considerations</h2>
          <p class="text-gray-700 mb-4">Certain situations require special attention and modified approaches.</p>

          <h3 class="text-xl font-semibold text-gray-900 mb-3 mt-6">Holiday and Special Events</h3>
          <ul class="list-disc pl-6 mb-6 text-gray-700 space-y-2">
            <li><strong>Extended Hours:</strong> Consider relaxed policies for major holidays</li>
            <li><strong>Advance Notice:</strong> Require notification for parties or gatherings</li>
            <li><strong>Time Limits:</strong> Set specific end times for special events</li>
            <li><strong>Community Guidelines:</strong> Establish clear expectations for celebrations</li>
          </ul>

          <h3 class="text-xl font-semibold text-gray-900 mb-3 mt-6">Children and Families</h3>
          <ul class="list-disc pl-6 mb-6 text-gray-700 space-y-2">
            <li><strong>Reasonable Expectations:</strong> Balance child noise with neighbor rights</li>
            <li><strong>Daytime Activities:</strong> Encourage active play during appropriate hours</li>
            <li><strong>Soundproofing Solutions:</strong> Suggest rugs, soft furnishings, and play areas</li>
            <li><strong>Communication:</strong> Foster understanding between families and other residents</li>
          </ul>

          <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-8">Best Practices for Property Managers</h2>
          <p class="text-gray-700 mb-4">Manage369's experience managing Chicago properties has identified key best practices for noise management:</p>

          <h3 class="text-xl font-semibold text-gray-900 mb-3 mt-6">Proactive Communication</h3>
          <ul class="list-disc pl-6 mb-6 text-gray-700 space-y-2">
            <li><strong>Regular Updates:</strong> Keep residents informed about noise policies and expectations</li>
            <li><strong>Seasonal Reminders:</strong> Send targeted communications during high-noise periods</li>
            <li><strong>Success Stories:</strong> Share positive examples of neighbor cooperation</li>
            <li><strong>Policy Clarification:</strong> Address common misconceptions about noise rules</li>
          </ul>

          <h3 class="text-xl font-semibold text-gray-900 mb-3 mt-6">Consistent Enforcement</h3>
          <ul class="list-disc pl-6 mb-6 text-gray-700 space-y-2">
            <li><strong>Fair Application:</strong> Apply policies consistently regardless of the resident</li>
            <li><strong>Documentation:</strong> Maintain detailed records of all enforcement actions</li>
            <li><strong>Progressive Discipline:</strong> Use escalating consequences for repeat violations</li>
            <li><strong>Legal Compliance:</strong> Ensure all actions comply with local and state laws</li>
          </ul>

          <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-8">Conclusion</h2>
          <p class="text-gray-700 mb-4">Effective noise management in Chicago's multi-unit residential buildings requires a comprehensive approach that combines clear policies, proactive communication, and consistent enforcement. Understanding Chicago's noise ordinance and implementing best practices helps create harmonious communities where all residents can enjoy their homes.</p>

          <p class="text-gray-700 mb-4">At Manage369 Property Management, we believe that successful noise management is about more than just enforcing rules—it's about building communities where neighbors respect each other and work together to maintain a peaceful living environment.</p>

          <h3 class="text-xl font-semibold text-gray-900 mb-3 mt-6">Key Takeaways</h3>
          <ul class="list-disc pl-6 mb-6 text-gray-700 space-y-2">
            <li><strong>Know the Law:</strong> Understand Chicago's noise ordinance and your property's specific policies</li>
            <li><strong>Document Everything:</strong> Maintain detailed records of complaints and resolutions</li>
            <li><strong>Communicate Clearly:</strong> Keep all parties informed throughout the process</li>
            <li><strong>Focus on Prevention:</strong> Invest in soundproofing and community education</li>
            <li><strong>Be Consistent:</strong> Apply policies fairly and consistently to all residents</li>
            <li><strong>Seek Professional Help:</strong> Work with experienced property management professionals</li>
          </ul>

          <p class="text-gray-700 mb-6">If you're dealing with noise issues in your Chicago property, contact Manage369 Property Management for expert guidance and comprehensive solutions tailored to your community's needs.</p>

          <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-8">Resources</h2>
          <ul class="list-disc pl-6 mb-6 text-gray-700 space-y-2">
            <li><a href="https://www.chicago.gov/city/en/depts/bacp/supp_info/noise-ordinance.html" class="text-primary-500 hover:underline" target="_blank" rel="noopener noreferrer">Chicago Noise Ordinance - Official City Information</a></li>
            <li><a href="https://www.chicago.gov/city/en/depts/311.html" class="text-primary-500 hover:underline" target="_blank" rel="noopener noreferrer">Chicago 311 - Non-Emergency Services</a></li>
            <li><a href="https://www.illinoislegalaid.org/legal-information/noise-complaints" class="text-primary-500 hover:underline" target="_blank" rel="noopener noreferrer">Illinois Legal Aid - Noise Complaints</a></li>
          </ul>
        `
      }
    }
    
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
                <Link to="/resources" className="card hover:scale-105 transition-transform duration-300">
                  <h4 className="text-lg font-semibold mb-2">Property Management Resources</h4>
                  <p className="text-gray-600 text-sm">Access our comprehensive library of property management guides and tools...</p>
                </Link>
                <Link to="/services" className="card hover:scale-105 transition-transform duration-300">
                  <h4 className="text-lg font-semibold mb-2">Our Management Services</h4>
                  <p className="text-gray-600 text-sm">Learn about our comprehensive property management solutions...</p>
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