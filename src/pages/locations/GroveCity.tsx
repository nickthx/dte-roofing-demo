import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Phone, MapPin, Shield } from 'lucide-react';
import SEO from '../../components/SEO';
import SchemaMarkup from '../../components/SchemaMarkup';

export default function GroveCity() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Roofing Services in Grove City, Ohio - Expert Roof Repair & Replacement | DTE Roofing"
        description="Professional roofing services in Grove City, OH. Local experts serving Jackson Township, Gantz, Southwest Area & all Grove City neighborhoods. Free estimates. Call 614-971-6028."
        keywords="roofing Grove City OH, Grove City roofer, roof repair Grove City, roof replacement Grove City, Jackson Township roofing, Grove City roofing contractor"
        canonical="https://www.dteroofingllc.com/locations/grove-city"
      />
      <SchemaMarkup
        type="location"
        locationName="Grove City"
        pageTitle="Roofing Services in Grove City, OH - DTE Roofing LLC"
        pageDescription="Professional roofing services in Grove City, OH. Local experts serving all Grove City neighborhoods with roof repair, replacement, and installation."
        pageUrl="https://www.dteroofingllc.com/locations/grove-city"
      />

      <section className="relative bg-gradient-to-br from-charcoal-900 via-charcoal-800 to-charcoal-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="w-6 h-6" />
              <span className="text-lg">Serving Grove City, Ohio</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Roofing Services in Grove City, Ohio</h1>
            <p className="text-xl text-gray-200 mb-6">
              Your trusted local roofing contractor serving Columbus's second-largest suburb with expert roof repair, replacement, and installation services
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
              <h2 className="text-3xl font-bold text-charcoal-900 mb-6">Grove City's Premier Roofing Experts</h2>
              <p className="text-lg text-charcoal-600 mb-6 leading-relaxed">
                DTE Roofing proudly serves Grove City, Columbus's second-largest suburb with over 40,000 residents, from the historic Gantz area's established neighborhoods to Jackson Township's rapid development, from Town Center's vibrant core to the expanding southwest corridors along Interstate 71. Located just 20 miles northeast in Hilliard, our team responds quickly to Grove City's roofing needs, understanding the unique challenges facing this dynamic community where historic preservation meets modern suburban growth.
              </p>
              <p className="text-lg text-charcoal-600 mb-6 leading-relaxed">
                Founded in 1852 and incorporated in 1866, Grove City has evolved from an agricultural community into one of Central Ohio's fastest-growing suburbs while maintaining small-town character. The city features remarkable housing diversity—from 1950s-1960s ranch homes in Gantz, to 1970s-1980s colonials throughout established areas, to modern Jackson Township developments that have fueled explosive growth since 2000. This varied housing stock creates diverse roofing needs spanning historic updates, aging subdivision replacements, and quality enhancements for builder-grade installations.
              </p>
              <p className="text-lg text-charcoal-600 mb-6 leading-relaxed">
                Grove City's position within the Big Darby Creek watershed creates unique environmental conditions affecting roofing—enhanced humidity levels from riparian corridors, lush vegetation contributing to debris accumulation and biological growth, and moisture-rich conditions requiring superior ventilation and algae-resistant materials. Our Grove City expertise addresses these watershed challenges through specialized approaches designed for moisture-prone environments while respecting the community's character and rapid development patterns.
              </p>

              <div className="bg-primary-50 p-6 rounded-xl border-2 border-primary-200">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="w-8 h-8 text-primary-700" />
                  <h3 className="font-bold text-charcoal-900 text-xl">Why Grove City Homeowners Choose DTE Roofing</h3>
                </div>
                <ul className="space-y-3">
                  {[
                    'Quick response from our Hilliard location - typically 30-60 minutes',
                    'Experience with Big Darby watershed moisture management',
                    'Expertise handling Grove City\'s diverse housing stock',
                    'Understanding of HOA requirements in newer developments',
                    'Proven track record across all Grove City neighborhoods',
                    'Licensed, insured, and committed to quality'
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
                <h3 className="text-2xl font-bold text-charcoal-900 mb-6">Complete Roofing Services for Grove City</h3>
                <ul className="space-y-3">
                  {[
                    { name: 'Roof Replacement', link: '/services/roof-replacement' },
                    { name: 'Roof Repair', link: '/services/roof-repair' },
                    { name: 'New Roof Installation', link: '/services/roof-installation' },
                    { name: 'Roof Inspections', link: '/services/roof-inspection' },
                    { name: 'Storm Damage Repair', link: '/services/storm-damage' },
                    { name: '24/7 Emergency Services', link: '/services/emergency-services' },
                    { name: 'Gutter Installation & Repair', link: '/services/gutters' },
                    { name: 'Siding Services', link: '/services/siding' },
                    { name: 'HOA Compliance Assistance', link: '/contact' },
                    { name: 'Insurance Claims Support', link: '/contact' },
                    { name: 'Preventative Maintenance', link: '/services/roof-maintenance' }
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
                <h3 className="font-bold text-charcoal-900 mb-2 text-lg">Free Roofing Estimates</h3>
                <p className="text-charcoal-700 mb-4">
                  We provide comprehensive, no-obligation estimates for all Grove City roofing projects. Schedule your free consultation today.
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
            <h2 className="text-3xl font-bold text-charcoal-900 mb-6">Grove City Roofing Challenges & Expert Solutions</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
                <h3 className="text-xl font-bold text-charcoal-900 mb-4">Big Darby Watershed Moisture</h3>
                <p className="text-charcoal-600 mb-4 leading-relaxed">
                  Grove City's location within the Big Darby Creek watershed creates elevated humidity levels and persistent moisture conditions affecting roofing performance. The watershed's extensive riparian corridors generate morning fog, enhanced overnight moisture, and consistently higher humidity compared to areas outside creek valleys. These conditions accelerate algae and moss growth particularly on north-facing roof slopes, promote faster biological colonization from abundant spores, and create moisture-retention scenarios that shorten shingle lifespan through gradual deterioration of protective granules and asphalt substrate beneath.
                </p>
                <p className="text-charcoal-600 leading-relaxed">
                  Our watershed-adapted roofing solutions include algae-resistant shingles with copper granules providing active biological growth inhibition, enhanced attic ventilation removing moisture before problematic accumulation occurs, strategic zinc or copper strip installation offering ongoing algae suppression through ion release, and bi-annual <Link to="/services/roof-maintenance" className="text-primary-700 hover:text-primary-800 font-semibold">maintenance programs</Link> featuring professional debris removal and moss treatment. For Grove City's moisture-prone properties, regular professional care proves essential to achieving full roof lifespan—proactive moisture management prevents the accelerated deterioration common in watershed environments where untreated roofs often fail 5-10 years prematurely.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
                <h3 className="text-xl font-bold text-charcoal-900 mb-4">Established Gantz Area Updates</h3>
                <p className="text-charcoal-600 mb-4 leading-relaxed">
                  The historic Gantz area and surrounding central Grove City neighborhoods developed in the 1950s-1970s feature predominantly ranch-style homes with straightforward roof lines now requiring replacement as original or first-generation systems reach 25-35 year lifespans. These properties typically lack modern roofing technology—inadequate attic ventilation by contemporary standards causing premature shingle aging and ice dam problems, absence of ice and water shield protection now considered essential, deteriorated or compressed insulation contributing to energy inefficiency, and sometimes damaged roof decking hidden beneath surface shingles requiring structural repair before replacement.
                </p>
                <p className="text-charcoal-600 leading-relaxed">
                  We approach Gantz area <Link to="/services/roof-replacement" className="text-primary-700 hover:text-primary-800 font-semibold">roof replacement</Link> comprehensively—evaluating structural condition through detailed inspections, upgrading attic ventilation to modern standards preventing moisture and heat accumulation, installing proper ice and water shield protecting eaves and valleys, replacing damaged decking ensuring sound structural foundation, and recommending insulation improvements that can reduce heating and cooling costs by 15-30%. Proper comprehensive replacement proves far more cost-effective than minimal tear-off approaches ignoring underlying problems that cause premature failures and ongoing ice dam issues requiring expensive emergency repairs.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
                <h3 className="text-xl font-bold text-charcoal-900 mb-4">Jackson Township Rapid Growth</h3>
                <p className="text-charcoal-600 mb-4 leading-relaxed">
                  Jackson Township's explosive development since 2000 has created Grove City's newest neighborhoods—Scioto Grove, Pinnacle Club, White Oak, and numerous other subdivisions featuring modern construction with builder-grade roofing materials installed to minimum specifications rather than optimal performance standards. Many homeowners in these 10-20 year old developments discover their builder-grade shingles showing premature aging—granule loss, algae staining particularly problematic in watershed environments, curling edges, or inadequate storm resistance—prompting consideration of upgrades to premium materials providing enhanced durability, better warranties, and improved performance appropriate for Grove City's environmental challenges.
                </p>
                <p className="text-charcoal-600 leading-relaxed">
                  Our upgrade approach for newer Jackson Township homes focuses on replacing builder-grade materials with premium architectural shingles offering enhanced warranties (30-50 years vs. 20-25 years typical of builder-grade), superior algae resistance maintaining clean appearance in watershed humidity, impact resistance providing Class 4 hail protection, improved wind ratings exceeding Ohio standards, and aesthetic enhancements increasing curb appeal and property values. Many Jackson Township HOAs maintain architectural guidelines—we assist homeowners navigating approval processes, recommending compliant options that enhance both performance and appearance while respecting community standards.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
                <h3 className="text-xl font-bold text-charcoal-900 mb-4">Severe Weather Resilience</h3>
                <p className="text-charcoal-600 mb-4 leading-relaxed">
                  Grove City experiences Central Ohio's full range of severe weather—spring hailstorms capable of significant shingle damage, summer windstorms with gusts exceeding 60 mph stressing roof systems, occasional tornado events requiring storm-resistant construction, and harsh winters with heavy snow loads and ice dam potential. This severe weather exposure demands roofing systems engineered for durability and storm resistance rather than basic materials meeting minimum code requirements that prove inadequate during extreme events, leaving homeowners facing expensive repairs or premature replacement after preventable storm damage.
                </p>
                <p className="text-charcoal-600 leading-relaxed">
                  Our storm-resilient solutions include impact-resistant shingles rated Class 4 for hail protection and often qualifying for insurance discounts, enhanced wind-rated materials certified to 130 mph exceeding Ohio's 110 mph standard, properly engineered roof deck attachment using ring-shank nails and appropriate spacing, comprehensive ice and water shield protecting vulnerable eaves and valleys, and quality underlayment providing secondary waterproofing during wind-driven rain. After severe weather events, our <Link to="/services/storm-damage" className="text-primary-700 hover:text-primary-800 font-semibold">storm damage assessment services</Link> identify both obvious and hidden damage, document losses supporting insurance claims, and ensure complete repairs rather than partial fixes leaving your home vulnerable to future problems or accelerated deterioration.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-charcoal-900 mb-8 text-center">Grove City Neighborhoods We Serve</h2>
            <p className="text-center text-charcoal-600 mb-8 max-w-3xl mx-auto">
              From Gantz to Jackson Township, Town Center to southwest Grove City, DTE Roofing provides expert roofing services throughout the community.
            </p>
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                'Gantz',
                'Jackson Township',
                'Town Center',
                'Southwest Area',
                'Scioto Grove',
                'White Oak',
                'Pinnacle Club',
                'Buckeye Woods',
                'Derby Hill',
                'Demorest Farms',
                'Hoover Crossing',
                'Indian Run',
                'Jackson Pike',
                'Westbury',
                'Darbydale',
                'Beulah Park'
              ].map((neighborhood, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg text-center border border-gray-200 hover:border-primary-700 hover:bg-primary-50 transition-all">
                  <span className="text-charcoal-700 font-medium">{neighborhood}</span>
                </div>
              ))}
            </div>
            <p className="text-center text-charcoal-600 mt-6">
              Serving all Grove City neighborhoods. <Link to="/contact" className="text-primary-700 hover:text-primary-800 font-semibold">Contact us</Link> for your roofing consultation.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-charcoal-900 mb-8">Frequently Asked Questions - Grove City Roofing</h2>
            <div className="space-y-4">
              <details className="bg-white p-6 rounded-xl border-2 border-gray-200 group">
                <summary className="font-bold text-charcoal-900 cursor-pointer text-lg flex items-center justify-between">
                  What makes Grove City roofing different from other suburbs?
                  <ArrowRight className="w-5 h-5 text-primary-700 transform group-open:rotate-90 transition-transform" />
                </summary>
                <div className="text-charcoal-700 leading-relaxed mt-4 space-y-3">
                  <p>
                    Grove City's unique position within the Big Darby Creek watershed creates environmental conditions affecting roofing performance differently than suburbs outside creek valleys or watershed boundaries. Enhanced humidity from extensive riparian corridors, persistent morning fog common in watershed lowlands, and moisture-rich conditions throughout spring and summer accelerate algae and moss growth compared to drier western or northern suburbs. These biological growths aren't merely aesthetic concerns—they retain moisture against shingles, accelerate granule loss, and can reduce effective roof lifespan by 20-30% without proactive prevention and treatment.
                  </p>
                  <p>
                    Additionally, Grove City's rapid growth creates diverse roofing needs across different development eras—historic Gantz area homes from the 1950s-1960s requiring specialized updates addressing outdated construction methods, established 1970s-1980s subdivisions facing widespread replacement cycles, and newer Jackson Township developments where homeowners seek upgrades from builder-grade materials to premium products offering better performance and warranties. This diversity requires contractors understanding varied challenges rather than one-size-fits-all approaches failing to address specific needs across different Grove City neighborhoods.
                  </p>
                  <p>
                    Our Grove City specialization addresses these unique factors through algae-resistant materials appropriate for watershed humidity, enhanced ventilation systems managing moisture accumulation, comprehensive maintenance programs preventing premature biological deterioration, and experience working across all Grove City development eras and housing types. During your <Link to="/services/roof-inspection" className="text-primary-700 hover:text-primary-800 font-semibold">roof inspection</Link>, we assess your specific location's environmental exposure and recommend solutions appropriate for your property's unique conditions rather than generic recommendations failing to account for Grove City's distinctive challenges.
                  </p>
                </div>
              </details>

              <details className="bg-white p-6 rounded-xl border-2 border-gray-200 group">
                <summary className="font-bold text-charcoal-900 cursor-pointer text-lg flex items-center justify-between">
                  How long does a typical Grove City roof replacement take?
                  <ArrowRight className="w-5 h-5 text-primary-700 transform group-open:rotate-90 transition-transform" />
                </summary>
                <div className="text-charcoal-700 leading-relaxed mt-4 space-y-3">
                  <p>
                    Most Grove City roof replacements complete in 1-2 days for typical single-family homes, with timeline variations depending on size, architectural complexity, and unexpected conditions discovered during removal. Single-story ranch homes common in the Gantz area often complete in a single day—straightforward roof lines, easy material access from one level, and efficient workflow allow experienced crews to work quickly while maintaining quality standards. Two-story colonials or homes with complex architectural features (multiple dormers, steep pitches, numerous roof planes) typically require 2 days for thorough installation ensuring proper flashing, ventilation integration, and waterproofing at all transitions and penetrations.
                  </p>
                  <p>
                    Timeline extensions occur when: extensive rotted roof decking requires replacement beyond initial estimates (common in older Grove City homes with ventilation deficiencies causing long-term moisture damage), structural repairs are needed before replacement can proceed properly, severe weather interrupts work (we never compromise quality by working in rain or dangerous conditions), or custom work is required for architectural details. We provide specific timeline estimates during consultations based on your home's characteristics, explain factors that might extend schedules, and commit to working efficiently without sacrificing the quality craftsmanship your investment deserves.
                  </p>
                  <p>
                    Throughout your project, expect professional crews arriving on schedule, methodical work through all installation phases, comprehensive daily cleanup maintaining your property's appearance and safety, and thorough final inspections before we consider work complete. Most Grove City homeowners express surprise at how quickly quality installations finish and how minimal disruption proves to daily routines—proper planning, experienced crews managing each phase efficiently, and respectful job site protocols ensure smooth project completion meeting timeline expectations while exceeding quality standards throughout the process.
                  </p>
                </div>
              </details>

              <details className="bg-white p-6 rounded-xl border-2 border-gray-200 group">
                <summary className="font-bold text-charcoal-900 cursor-pointer text-lg flex items-center justify-between">
                  Do I need to work with my HOA for roofing work in Grove City?
                  <ArrowRight className="w-5 h-5 text-primary-700 transform group-open:rotate-90 transition-transform" />
                </summary>
                <div className="text-charcoal-700 leading-relaxed mt-4 space-y-3">
                  <p>
                    Many Jackson Township and newer Grove City developments maintain HOAs with architectural guidelines governing exterior modifications including roofing. Requirements vary by community but typically include submitting applications before beginning work, specifying material types and manufacturers, providing color samples demonstrating aesthetic compliance, and sometimes requiring contractor information or proof of insurance. Review timelines often span 2-4 weeks from submission to approval, with incomplete applications or non-compliant material choices extending this timeline or resulting in rejection requiring resubmission with different specifications.
                  </p>
                  <p>
                    DTE Roofing assists homeowners navigating HOA processes throughout Jackson Township and HOA-governed Grove City neighborhoods. We provide manufacturer specifications and documentation required by architectural review boards, recommend materials with proven approval histories in your specific community, prepare submission packages with all necessary information reducing approval delays, and ensure installations match approved plans exactly avoiding compliance issues. Our Grove City experience means we understand what different HOAs expect and how to streamline approval processes efficiently.
                  </p>
                  <p>
                    Don't skip HOA approval thinking you can avoid the process—non-compliant work creates serious problems including mandatory removal and replacement at your expense regardless of quality or cost, potential fines escalating until compliance is achieved, liens against your property preventing sale or refinancing, and damaged relationships with neighbors and community governance. Established Grove City neighborhoods outside HOA jurisdictions don't require these approvals, but newer developments almost universally maintain architectural oversight requiring proper compliance. We'll help you determine whether your property falls under HOA governance and handle all necessary processes if approval is required for your project.
                  </p>
                </div>
              </details>

              <details className="bg-white p-6 rounded-xl border-2 border-gray-200 group">
                <summary className="font-bold text-charcoal-900 cursor-pointer text-lg flex items-center justify-between">
                  What roof maintenance is necessary for Grove City homes?
                  <ArrowRight className="w-5 h-5 text-primary-700 transform group-open:rotate-90 transition-transform" />
                </summary>
                <div className="text-charcoal-700 leading-relaxed mt-4 space-y-3">
                  <p>
                    Grove City's watershed environment makes regular maintenance more critical than in drier climates—bi-annual professional inspections (spring and fall) prove optimal for identifying and addressing problems before escalation. Maintenance should include comprehensive debris removal eliminating organic material that traps moisture and supports moss growth, gutter cleaning preventing water backup and ice dam formation, moss and algae treatment particularly important in watershed humidity, minor repair addressing small issues before they become expensive failures, flashing inspection ensuring waterproofing at vulnerable penetrations and transitions, and documentation of roof condition useful for insurance purposes and future planning.
                  </p>
                  <p>
                    Spring inspections assess winter damage from ice, snow loads, and freeze-thaw cycles while checking readiness for severe weather season. Fall inspections prepare roofs for harsh Ohio winters by removing debris, ensuring proper drainage, checking ventilation systems, and identifying vulnerabilities requiring repair before snow and ice create problems. For Grove City properties, this seasonal approach proves especially valuable—watershed moisture and biological growth progress faster than in drier environments, making regular professional attention essential to preventing the accelerated deterioration that shortens roof lifespan significantly when maintenance is deferred or neglected entirely.
                  </p>
                  <p>
                    Our <Link to="/services/roof-maintenance" className="text-primary-700 hover:text-primary-800 font-semibold">preventative maintenance programs</Link> provide scheduled professional care eliminating need to remember seasonal tasks, priority scheduling for any needed repairs discovered during inspections, documentation tracking roof condition over time, and peace of mind that your investment receives expert attention preventing problems. Many Grove City homeowners find professional maintenance more convenient and effective than DIY approaches—trained inspectors identify subtle concerns homeowners miss, safe professional access prevents injury risks from ladder work, and proactive care prevents expensive emergency failures during inconvenient times like harsh winter weather or summer vacation periods.
                  </p>
                </div>
              </details>
            </div>
          </div>

          <div className="bg-gradient-to-br from-primary-700 to-primary-800 text-white p-8 rounded-xl">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Protect Your Grove City Home?</h2>
              <p className="text-xl mb-6">
                Join hundreds of satisfied Grove City homeowners who trust DTE Roofing for quality, reliability, and exceptional service
              </p>
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div>
                  <div className="text-4xl font-bold mb-2">600+</div>
                  <div className="text-gray-100">Grove City Roofs Installed</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">30-60 Min</div>
                  <div className="text-gray-100">Response Time</div>
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
            Schedule Your Grove City Roof Inspection
          </h2>
          <p className="text-xl text-charcoal-600 mb-8 max-w-2xl mx-auto">
            Contact DTE Roofing today for expert roofing services throughout Grove City
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
            Serving Grove City and all surrounding Central Ohio communities
          </p>
        </div>
      </section>
    </div>
  );
}
