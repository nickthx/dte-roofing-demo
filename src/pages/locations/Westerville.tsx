import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Phone, MapPin, Shield } from 'lucide-react';
import SEO from '../../components/SEO';
import SchemaMarkup from '../../components/SchemaMarkup';

export default function Westerville() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Roofing Services in Westerville, Ohio - Expert Roof Repair & Replacement | DTE Roofing"
        description="Professional roofing services in Westerville, OH. Local experts serving Uptown, Huber Village, Cooper Woods & all Westerville neighborhoods. Free estimates. Call 614-971-6028."
        keywords="roofing Westerville OH, Westerville roofer, roof repair Westerville, roof replacement Westerville, Uptown Westerville roofing, Westerville roofing contractor"
        canonical="https://www.dteroofingllc.com/locations/westerville"
      />
      <SchemaMarkup
        type="location"
        locationName="Westerville"
        pageTitle="Roofing Services in Westerville, OH - DTE Roofing LLC"
        pageDescription="Professional roofing services in Westerville, OH. Local experts serving all Westerville neighborhoods with roof repair, replacement, and installation."
        pageUrl="https://www.dteroofingllc.com/locations/westerville"
      />

      <section className="relative bg-gradient-to-br from-charcoal-900 via-charcoal-800 to-charcoal-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="w-6 h-6" />
              <span className="text-lg">Serving Westerville, Ohio</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Roofing Services in Westerville, Ohio</h1>
            <p className="text-xl text-gray-200 mb-6">
              Your trusted local roofing contractor serving all Westerville neighborhoods with expert roof repair, replacement, and installation services
            </p>
            <a
              href="tel:614-971-6028"
              className="bg-primary-700 text-white px-8 py-4 rounded-lg hover:bg-primary-800 transition-all font-semibold text-lg inline-flex items-center justify-center shadow-xl"
            >
              <Phone className="mr-2 w-5 h-5" />
              Call 614-971-6028
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold text-charcoal-900 mb-6">Westerville's Trusted Roofing Experts</h2>
              <p className="text-lg text-charcoal-600 mb-6 leading-relaxed">
                DTE Roofing proudly serves Westerville's vibrant community, from historic Uptown's charming 19th-century architecture to Huber Village's established neighborhoods, from Cooper Woods' family-friendly streets to the scenic Alum Creek corridor. Located just 25 miles southwest in Hilliard, our team responds quickly to Westerville's roofing needs, understanding the unique challenges facing this northeastern suburb where rich history meets modern suburban living.
              </p>
              <p className="text-lg text-charcoal-600 mb-6 leading-relaxed">
                Founded in 1858 and known as "Dry Capital of the World" for its anti-saloon history, Westerville has evolved into a thriving community anchored by Otterbein University and characterized by tree-lined streets, strong schools, and a diverse housing stock ranging from Victorian-era homes near downtown to 1970s-1990s subdivisions throughout the city. This architectural diversity requires roofing expertise spanning historic preservation, aging subdivision updates, and modern performance standards.
              </p>
              <p className="text-lg text-charcoal-600 mb-6 leading-relaxed">
                Westerville homeowners face distinct roofing challenges including mature tree canopy management in established neighborhoods, ice dam prevention during harsh Ohio winters, and the widespread replacement cycle as 1970s-1980s subdivision roofs reach end-of-life. Our experience throughout Westerville's neighborhoods means we understand local conditions and deliver solutions protecting your home investment while respecting community character.
              </p>

              <div className="bg-primary-50 p-6 rounded-xl border-2 border-primary-200">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="w-8 h-8 text-primary-700" />
                  <h3 className="font-bold text-charcoal-900 text-xl">Why Westerville Homeowners Choose DTE Roofing</h3>
                </div>
                <ul className="space-y-3">
                  {[
                    'Fast response from our Hilliard location - typically within 2-4 hours',
                    'Experience with historic home preservation and diverse architectural styles',
                    'Understanding of Westerville\'s weather patterns and roofing challenges',
                    'Expertise with aging subdivision roof replacement cycles',
                    'Proven track record across all Westerville neighborhoods',
                    'Fully licensed, insured, and committed to quality craftsmanship'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-primary-700 flex-shrink-0 mt-0.5" />
                      <span className="text-charcoal-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <div className="bg-gray-50 p-8 rounded-xl border-2 border-gray-200 mb-8">
                <h3 className="text-2xl font-bold text-charcoal-900 mb-6">Complete Roofing Services for Westerville</h3>
                <ul className="space-y-3">
                  {[
                    { name: 'Roof Replacement', link: '/services/roof-replacement' },
                    { name: 'Roof Repair', link: '/services/roof-repair' },
                    { name: 'Historic Home Roofing', link: '/services/roof-installation' },
                    { name: 'Roof Inspections', link: '/services/roof-inspection' },
                    { name: 'Storm Damage Repair', link: '/services/storm-damage' },
                    { name: '24/7 Emergency Services', link: '/services/emergency-services' },
                    { name: 'Gutter Installation & Repair', link: '/services/gutters' },
                    { name: 'Siding Installation', link: '/services/siding' },
                    { name: 'Ice Dam Prevention', link: '/services/roof-maintenance' },
                    { name: 'Insurance Claim Assistance', link: '/contact' },
                    { name: 'Preventative Maintenance Programs', link: '/services/roof-maintenance' }
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary-700 flex-shrink-0 mt-1" />
                      {item.link ? (
                        <Link to={item.link} className="text-charcoal-700 hover:text-primary-700 transition-colors">
                          {item.name}
                        </Link>
                      ) : (
                        <span className="text-charcoal-700">{item.name}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg">
                <h3 className="font-bold text-charcoal-900 mb-2 text-lg">Free Roofing Estimates in Westerville</h3>
                <p className="text-charcoal-700 mb-4">
                  We provide detailed, no-obligation estimates for all roofing projects in Westerville. Schedule your free inspection today.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center text-primary-700 hover:text-primary-800 font-semibold"
                >
                  Request Free Estimate <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-charcoal-900 mb-6">Westerville Roofing Challenges & Expert Solutions</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
                <h3 className="text-xl font-bold text-charcoal-900 mb-4">Historic Uptown Preservation</h3>
                <p className="text-charcoal-600 mb-4 leading-relaxed">
                  Westerville's historic Uptown district features charming Victorian-era homes, 19th-century architecture, and buildings listed on the National Register of Historic Places. These properties showcase steep roof pitches, complex dormers, decorative trim, and architectural details requiring specialized preservation approaches. Original materials like slate or wood shake may need historically appropriate replacements that maintain authentic appearance while incorporating modern performance standards.
                </p>
                <p className="text-charcoal-600 leading-relaxed">
                  Our historic home roofing expertise includes sourcing architectural shingles mimicking period-appropriate aesthetics, custom flashing fabrication preserving decorative details, proper ventilation design for homes with limited attic space, and installation techniques respecting older roof structures. During your <Link to="/services/roof-inspection" className="text-primary-700 hover:text-primary-800 font-semibold">roof inspection</Link>, we evaluate historic features worth preserving and recommend solutions maintaining character while ensuring reliable protection and meeting modern building codes for safety and energy efficiency.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
                <h3 className="text-xl font-bold text-charcoal-900 mb-4">Aging Subdivision Roof Replacement</h3>
                <p className="text-charcoal-600 mb-4 leading-relaxed">
                  Large Westerville subdivisions developed in the 1970s-1990s—including Huber Village, Cooper Woods, and Spring Run—face widespread roof replacement cycles as original or first-replacement roofs reach 20-30 year lifespans. These neighborhoods feature predominantly ranch and two-story colonial homes with straightforward roof lines but often inadequate attic ventilation by modern standards, absence of ice and water shield in critical areas, and outdated insulation contributing to energy inefficiency and ice dam formation.
                </p>
                <p className="text-charcoal-600 leading-relaxed">
                  Our <Link to="/services/roof-replacement" className="text-primary-700 hover:text-primary-800 font-semibold">roof replacement</Link> approach for Westerville's aging subdivisions includes comprehensive attic ventilation upgrades preventing moisture damage and ice dams, strategic ice and water shield application at eaves and valleys, enhanced insulation recommendations improving energy efficiency, and quality architectural shingles with algae resistance suitable for tree-shaded properties. Many Westerville homeowners report significant heating and cooling cost reductions after our comprehensive replacement approach addresses ventilation and insulation deficiencies.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
                <h3 className="text-xl font-bold text-charcoal-900 mb-4">Ice Dam Prevention & Winter Weather</h3>
                <p className="text-charcoal-600 mb-4 leading-relaxed">
                  Westerville experiences harsh Ohio winters with substantial snowfall, prolonged freezing temperatures, and the freeze-thaw cycles that create damaging ice dams along roof eaves. Ice dams form when inadequate attic insulation and ventilation allow heat to escape, melting snow on the upper roof. Water flows to cold eaves where it refreezes, creating ice barriers that force water under shingles, causing interior damage to ceilings, walls, and insulation while stressing gutter systems.
                </p>
                <p className="text-charcoal-600 leading-relaxed">
                  We prevent ice dams through comprehensive solutions including proper attic insulation maintaining consistent roof deck temperature, enhanced ventilation systems allowing cold air circulation, strategic ice and water shield installation providing backup protection, and gutter maintenance ensuring proper drainage. Our <Link to="/services/roof-maintenance" className="text-primary-700 hover:text-primary-800 font-semibold">preventative maintenance programs</Link> include pre-winter inspections, debris removal, and ventilation checks ensuring your Westerville home is prepared for harsh winter conditions before problems develop.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
                <h3 className="text-xl font-bold text-charcoal-900 mb-4">Mature Tree Canopy Management</h3>
                <p className="text-charcoal-600 mb-4 leading-relaxed">
                  Westerville's established neighborhoods boast magnificent mature trees—towering oaks, maples, and ash trees that define the community's character but create roofing challenges. Heavy leaf accumulation in fall clogs gutters and traps moisture in roof valleys, overhanging branches scrape protective granules from shingles, dense shade encourages moss and algae growth particularly on north-facing slopes, and occasional storm-damaged limbs cause punctures or structural damage requiring emergency repairs.
                </p>
                <p className="text-charcoal-600 leading-relaxed">
                  Our tree-canopy roofing solutions include algae-resistant shingles with copper granules inhibiting biological growth, impact-resistant materials providing protection against falling branches, comprehensive gutter systems with guards preventing debris accumulation, and bi-annual maintenance programs including debris removal and moss treatment. For Westerville's heavily tree-shaded properties, regular professional maintenance proves essential to achieving full roof lifespan—well-maintained roofs in shaded locations often match or exceed the performance of sun-exposed roofs through proactive care addressing moisture and biological growth before damage occurs.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-charcoal-900 mb-8 text-center">Westerville Neighborhoods We Serve</h2>
            <p className="text-center text-charcoal-600 mb-8 max-w-3xl mx-auto">
              From historic Uptown to Huber Village's family neighborhoods, DTE Roofing provides expert roofing services throughout Westerville's diverse community.
            </p>
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                'Uptown Westerville',
                'Huber Village',
                'Cooper Woods',
                'Spring Run',
                'Windsor Park',
                'Cherry Bottom',
                'Minerva Park',
                'Annehurst',
                'Stoneridge',
                'Foxfire',
                'Heritage Club',
                'Liberty Woods',
                'Westar',
                'Otterbein Area',
                'Westerville North',
                'Alum Creek Corridor'
              ].map((neighborhood, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg text-center border border-gray-200 hover:border-primary-700 hover:bg-primary-50 transition-all">
                  <span className="text-charcoal-700 font-medium">{neighborhood}</span>
                </div>
              ))}
            </div>
            <p className="text-center text-charcoal-600 mt-6">
              Serving all Westerville neighborhoods. <Link to="/contact" className="text-primary-700 hover:text-primary-800 font-semibold">Contact us</Link> to schedule your roofing consultation.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-charcoal-900 mb-8">Frequently Asked Questions - Westerville Roofing</h2>
            <div className="space-y-4">
              <details className="bg-white p-6 rounded-xl border-2 border-gray-200 group">
                <summary className="font-bold text-charcoal-900 cursor-pointer text-lg flex items-center justify-between">
                  What does roof replacement cost in Westerville?
                  <ArrowRight className="w-5 h-5 text-primary-700 transform group-open:rotate-90 transition-transform" />
                </summary>
                <div className="text-charcoal-700 leading-relaxed mt-4 space-y-3">
                  <p>
                    Westerville roof replacement costs typically range from $8,000 to $15,000 for most single-family homes, depending on size, architectural complexity, and material selection. Ranch homes common in 1970s-1980s subdivisions like Huber Village often fall toward the lower end due to simpler roof lines and easier access, while two-story colonials with multiple dormers or complex features approach the higher range. Historic Uptown properties may exceed these estimates when preservation requirements demand specialty materials or additional structural work.
                  </p>
                  <p>
                    Several factors influence costs: home size (most Westerville homes range from 1,500-2,500 square feet), roof pitch and complexity (steeper pitches and multiple planes increase labor), material quality (standard architectural shingles vs. premium impact-resistant products), existing condition (extensive rotted decking requiring replacement adds costs), and ventilation upgrades addressing common deficiencies in older homes. We always provide transparent, itemized estimates explaining exactly what your investment includes.
                  </p>
                  <p>
                    Consider roof replacement an investment protecting your Westerville home's value and preventing costly interior damage from leaks or ice dams. Quality installations with proper ventilation and materials typically last 25-30 years, provide improved energy efficiency reducing heating and cooling costs, enhance curb appeal benefiting property values, and include comprehensive warranties protecting your investment. Our <Link to="/services/roof-replacement" className="text-primary-700 hover:text-primary-800 font-semibold">roof replacement services</Link> focus on long-term value rather than lowest initial cost—proper installation and quality materials prevent premature failures requiring expensive repairs.
                  </p>
                </div>
              </details>

              <details className="bg-white p-6 rounded-xl border-2 border-gray-200 group">
                <summary className="font-bold text-charcoal-900 cursor-pointer text-lg flex items-center justify-between">
                  Do I need a building permit for roofing work in Westerville?
                  <ArrowRight className="w-5 h-5 text-primary-700 transform group-open:rotate-90 transition-transform" />
                </summary>
                <div className="text-charcoal-700 leading-relaxed mt-4 space-y-3">
                  <p>
                    Yes, the City of Westerville requires building permits for roof replacements and most significant roof repairs. Permits ensure work meets current building codes, proper installation techniques are followed, adequate structural support exists for roofing materials, and appropriate fire resistance and ventilation standards are maintained. The permitting process protects homeowners by requiring inspections verifying quality workmanship and code compliance before projects are finalized.
                  </p>
                  <p>
                    DTE Roofing handles the entire permit process for Westerville projects as part of our comprehensive service—we prepare and submit permit applications with required documentation, coordinate inspection schedules with the city, ensure installations meet all current code requirements, and obtain final approval confirming compliant completion. This service saves homeowners the complexity of navigating municipal processes while guaranteeing their roofing project is properly documented and code-compliant.
                  </p>
                  <p>
                    Permit requirements exist for homeowners' protection—unpermitted work can create issues when selling your home (buyers' inspectors often check permit records), may void homeowners insurance if undisclosed work leads to claims, and can result in fines requiring expensive corrective work if discovered. We always obtain proper permits, providing documentation you can reference during future home sales, maintaining your property's clear title and compliance history. Never work with contractors who suggest skipping permits—this shortcut exposes you to significant legal and financial risks.
                  </p>
                </div>
              </details>

              <details className="bg-white p-6 rounded-xl border-2 border-gray-200 group">
                <summary className="font-bold text-charcoal-900 cursor-pointer text-lg flex items-center justify-between">
                  How long does a typical Westerville roof replacement take?
                  <ArrowRight className="w-5 h-5 text-primary-700 transform group-open:rotate-90 transition-transform" />
                </summary>
                <div className="text-charcoal-700 leading-relaxed mt-4 space-y-3">
                  <p>
                    Most Westerville roof replacements complete in 1-3 days depending on home size and architectural complexity. Single-story ranch homes common in subdivisions like Cooper Woods or Spring Run typically complete in 1-2 days—straightforward roof lines, easy material access, and efficient workflow allow our experienced crews to work quickly without compromising quality. Two-story homes with multiple roof planes, dormers, or complex features generally require 2-3 days for meticulous installation ensuring proper flashing, ventilation, and weatherproofing at all transitions and penetrations.
                  </p>
                  <p>
                    Historic Uptown properties occasionally extend to 3-4 days when preservation considerations demand additional care—steep Victorian pitches require enhanced safety measures, decorative trim and architectural details need custom flashing fabrication, and older roof structures may require repairs or reinforcement before new materials can be installed. Weather also influences timelines—we never compromise quality by working in rain or dangerous conditions, prioritizing proper installation over arbitrary schedule adherence.
                  </p>
                  <p>
                    Throughout your project, our professional crews arrive on schedule, work efficiently through all installation phases, perform comprehensive daily cleanup maintaining your property's appearance, and conduct thorough final inspections before considering work complete. Most Westerville homeowners express surprise at how quickly projects finish and how minimal disruption proves to their daily routines—professional planning, experienced crews, and respectful job site management ensure efficient completion without sacrificing the quality craftsmanship your home deserves.
                  </p>
                </div>
              </details>

              <details className="bg-white p-6 rounded-xl border-2 border-gray-200 group">
                <summary className="font-bold text-charcoal-900 cursor-pointer text-lg flex items-center justify-between">
                  Should I proactively replace my roof or wait for problems?
                  <ArrowRight className="w-5 h-5 text-primary-700 transform group-open:rotate-90 transition-transform" />
                </summary>
                <div className="text-charcoal-700 leading-relaxed mt-4 space-y-3">
                  <p>
                    Proactive roof replacement before obvious failures develop proves far more cost-effective and less stressful than reactive emergency replacement after leaks cause interior damage. Roofs reaching 20-25 years old in Westerville—particularly common in 1970s-1990s subdivisions—show warning signs including curling or missing shingles, granule loss exposing asphalt substrate, cracked or damaged flashing, and visible sagging or unevenness. These indicators suggest compromised waterproofing and structural concerns requiring professional evaluation.
                  </p>
                  <p>
                    Waiting for active leaks creates multiple problems: interior water damage to ceilings, walls, insulation, and potentially electrical systems far exceeds roof replacement costs, emergency repairs during harsh Ohio winters prove difficult and expensive, compromised roof decking requires replacement adding substantial costs, and stress of coordinating emergency contractors while managing interior damage proves overwhelming. Additionally, severe deterioration sometimes voids insurance coverage when insurers determine neglected maintenance contributed to damage.
                  </p>
                  <p>
                    We recommend scheduling a professional <Link to="/services/roof-inspection" className="text-primary-700 hover:text-primary-800 font-semibold">roof inspection</Link> when your Westerville home's roof reaches 18-20 years old or shows any warning signs. Comprehensive inspections identify current condition, predict remaining lifespan, reveal developing problems addressable through targeted repairs, and provide information supporting informed replacement timing decisions. Proactive replacement during favorable weather on your schedule—rather than emergency replacement during winter storms on contractors' schedules—ensures quality installation, better pricing, and peace of mind protecting your home investment before problems escalate.
                  </p>
                </div>
              </details>
            </div>
          </div>

          <div className="bg-gradient-to-br from-primary-700 to-primary-800 text-white p-8 rounded-xl">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Protect Your Westerville Home?</h2>
              <p className="text-xl mb-6">
                Join hundreds of satisfied Westerville homeowners who trust DTE Roofing for quality, reliability, and exceptional service
              </p>
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div>
                  <div className="text-4xl font-bold mb-2">500+</div>
                  <div className="text-gray-100">Westerville Roofs Installed</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">24/7</div>
                  <div className="text-gray-100">Emergency Response</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">25+</div>
                  <div className="text-gray-100">Years Excellence</div>
                </div>
              </div>
              <Link
                to="/contact"
                className="bg-white text-primary-700 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all font-semibold text-lg inline-flex items-center justify-center shadow-lg"
              >
                Get Your Free Estimate <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-charcoal-900 mb-6">
            Schedule Your Westerville Roof Inspection
          </h2>
          <p className="text-xl text-charcoal-600 mb-8 max-w-2xl mx-auto">
            Contact DTE Roofing today for expert roofing services throughout Westerville
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:614-971-6028"
              className="bg-primary-700 text-white px-8 py-4 rounded-lg hover:bg-primary-800 transition-all font-semibold text-lg inline-flex items-center justify-center shadow-lg"
            >
              <Phone className="mr-2 w-5 h-5" />
              614-971-6028
            </a>
            <Link
              to="/contact"
              className="bg-charcoal-900 text-white px-8 py-4 rounded-lg hover:bg-charcoal-800 transition-all font-semibold text-lg inline-flex items-center justify-center shadow-lg"
            >
              Request Estimate <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
          <p className="text-charcoal-600 mt-6">
            Serving Westerville and all surrounding Central Ohio communities
          </p>
        </div>
      </section>
    </div>
  );
}
