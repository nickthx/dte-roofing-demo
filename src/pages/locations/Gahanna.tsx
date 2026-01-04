import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Phone, MapPin, Shield } from 'lucide-react';
import SEO from '../../components/SEO';
import SchemaMarkup from '../../components/SchemaMarkup';

export default function Gahanna() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Roofing Services in Gahanna, Ohio - Expert Roof Repair & Replacement | DTE Roofing"
        description="Professional roofing services in Gahanna, OH. Local experts serving Rocky Fork, Mill Creek, Old Gahanna & all Gahanna neighborhoods. Free estimates. Call 614-971-6028."
        keywords="roofing Gahanna OH, Gahanna roofer, roof repair Gahanna, roof replacement Gahanna, Rocky Fork roofing, Gahanna roofing contractor"
        canonical="https://www.dteroofingllc.com/locations/gahanna"
      />
      <SchemaMarkup
        type="location"
        locationName="Gahanna"
        pageTitle="Roofing Services in Gahanna, OH - DTE Roofing LLC"
        pageDescription="Professional roofing services in Gahanna, OH. Local experts serving all Gahanna neighborhoods with roof repair, replacement, and installation."
        pageUrl="https://www.dteroofingllc.com/locations/gahanna"
      />

      <section className="relative bg-gradient-to-br from-charcoal-900 via-charcoal-800 to-charcoal-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="w-6 h-6" />
              <span className="text-lg">Serving Gahanna, Ohio</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Roofing Services in Gahanna, Ohio</h1>
            <p className="text-xl text-gray-200 mb-6">
              Your trusted local roofing contractor serving Gahanna's "City of Character" with expert roof repair, replacement, and installation services
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
              <h2 className="text-3xl font-bold text-charcoal-900 mb-6">Gahanna's Premier Roofing Company</h2>
              <p className="text-lg text-charcoal-600 mb-6 leading-relaxed">
                DTE Roofing is proud to serve Gahanna, the celebrated "City of Character," from Rocky Fork's expanding developments to Old Gahanna's historic charm, from Mill Creek's established neighborhoods to the scenic Big Walnut Creek corridor. Located approximately 28 miles west in Hilliard, our team responds swiftly to Gahanna's roofing needs, understanding the unique environmental factors and housing characteristics that define this vibrant eastern suburb along Interstate 270.
              </p>
              <p className="text-lg text-charcoal-600 mb-6 leading-relaxed">
                Founded in 1849 and incorporated in 1881, Gahanna has evolved from a small mill town on Big Walnut Creek into a thriving suburb of over 35,000 residents. The city's distinctive character stems from its blend of historic districts near Olde Gahanna, mature neighborhoods developed in the 1970s-1980s, and newer subdivisions like Rocky Fork that have fueled growth since the 1990s. This diversity creates varied roofing needs spanning historic preservation, aging subdivision updates, and quality enhancements for builder-grade installations.
              </p>
              <p className="text-lg text-charcoal-600 mb-6 leading-relaxed">
                Gahanna's proximity to Big Walnut Creek and Blacklick Creek creates unique environmental conditions affecting roofing—higher humidity levels encouraging algae and moss growth, enhanced moisture exposure requiring superior ventilation systems, and lush tree coverage depositing debris and creating shade-related biological growth. Our Gahanna expertise addresses these creek-corridor challenges through specialized materials and maintenance approaches designed for moisture-rich environments.
              </p>

              <div className="bg-primary-50 p-6 rounded-xl border-2 border-primary-200">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="w-8 h-8 text-primary-700" />
                  <h3 className="font-bold text-charcoal-900 text-xl">Why Gahanna Homeowners Choose DTE Roofing</h3>
                </div>
                <ul className="space-y-3">
                  {[
                    'Fast response from Hilliard - typically 2-4 hours to Gahanna',
                    'Experience with Big Walnut Creek moisture management',
                    'Expertise handling Gahanna\'s diverse housing stock',
                    'Understanding of creek-corridor environmental factors',
                    'Proven track record across all Gahanna neighborhoods',
                    'Licensed, insured, and committed to excellence'
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
                <h3 className="text-2xl font-bold text-charcoal-900 mb-6">Complete Roofing Services for Gahanna</h3>
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
                    { name: 'Algae & Moss Treatment', link: '/services/roof-maintenance' },
                    { name: 'Insurance Claim Assistance', link: '/contact' },
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
                  We provide comprehensive, no-obligation estimates for all Gahanna roofing projects. Schedule your free consultation today.
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
            <h2 className="text-3xl font-bold text-charcoal-900 mb-6">Gahanna Roofing Challenges & Expert Solutions</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
                <h3 className="text-xl font-bold text-charcoal-900 mb-4">Big Walnut Creek Moisture Management</h3>
                <p className="text-charcoal-600 mb-4 leading-relaxed">
                  Gahanna's position along Big Walnut Creek and Blacklick Creek creates elevated humidity levels compared to western suburbs, promoting faster algae and moss growth particularly on north-facing roof slopes. Creek corridors generate morning fog and persistent moisture, while lush riparian vegetation contributes to higher biological spore counts settling on roofs. These conditions accelerate organic growth that, left untreated, retains moisture against shingles and shortens roof lifespan through gradual deterioration of protective granules and asphalt substrate.
                </p>
                <p className="text-charcoal-600 leading-relaxed">
                  Our moisture-climate roofing solutions include algae-resistant shingles with copper granules actively inhibiting biological growth, enhanced attic ventilation removing moisture before condensation forms, strategic application of zinc or copper strips providing ongoing algae suppression, and bi-annual <Link to="/services/roof-maintenance" className="text-primary-700 hover:text-primary-800 font-semibold">maintenance programs</Link> featuring debris removal and moss treatment. For Gahanna's creek-corridor properties, regular professional maintenance proves essential to achieving full roof lifespan—proactive algae control and moisture management prevent the accelerated deterioration common in high-humidity environments.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
                <h3 className="text-xl font-bold text-charcoal-900 mb-4">Historic Old Gahanna Preservation</h3>
                <p className="text-charcoal-600 mb-4 leading-relaxed">
                  Old Gahanna near Mill Street and the Creekside district features charming historic homes from the early to mid-20th century, showcasing traditional architectural styles with steep roof pitches, limited attic space, and sometimes original materials requiring thoughtful replacement approaches. These properties often lack modern amenities like adequate attic ventilation, proper insulation by contemporary standards, and ice and water shield protection now considered essential. Historic preservation requires balancing authentic aesthetics with modern performance and code compliance.
                </p>
                <p className="text-charcoal-600 leading-relaxed">
                  We specialize in historic home roofing that respects architectural character while incorporating modern building science. Our approach includes sourcing architectural shingles mimicking period-appropriate slate or wood shake aesthetics, creative ventilation solutions adapted to limited attic configurations, custom flashing preserving decorative trim and architectural details, and proper integration of ice and water shield without compromising historic appearance. During your <Link to="/services/roof-inspection" className="text-primary-700 hover:text-primary-800 font-semibold">roof inspection</Link>, we evaluate historic features worth preserving and recommend solutions maintaining character while ensuring reliable protection meeting current building codes and energy efficiency standards.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
                <h3 className="text-xl font-bold text-charcoal-900 mb-4">Rocky Fork Development Growth</h3>
                <p className="text-charcoal-600 mb-4 leading-relaxed">
                  Rocky Fork and surrounding newer developments represent Gahanna's 1990s-2010s growth, featuring modern construction with builder-grade roofing materials installed to meet minimum specifications rather than optimal performance standards. Many homeowners in these neighborhoods discover their 15-20 year old builder-grade shingles showing premature aging—granule loss, algae staining, or curling edges—prompting consideration of upgrades to premium materials providing enhanced durability, better warranties, and improved aesthetics that maintain property values in competitive real estate markets.
                </p>
                <p className="text-charcoal-600 leading-relaxed">
                  Our <Link to="/services/roof-replacement" className="text-primary-700 hover:text-primary-800 font-semibold">roof replacement</Link> services for newer Gahanna developments focus on upgrading from builder-grade to premium architectural shingles with enhanced warranties (30-50 years vs. 20-25 years), superior algae resistance maintaining clean appearance in Gahanna's humid climate, impact resistance providing Class 4 hail protection, and improved wind ratings exceeding Ohio's 110 mph standards. These upgrades prove particularly valuable when HOA guidelines permit color and style choices—premium materials enhance curb appeal, support property values, and provide peace of mind through comprehensive manufacturer warranties and superior storm resistance.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
                <h3 className="text-xl font-bold text-charcoal-900 mb-4">Established Neighborhood Updates</h3>
                <p className="text-charcoal-600 mb-4 leading-relaxed">
                  Lincoln Estates, Bridgeview, Academy Woods, and similar Gahanna neighborhoods developed in the 1970s-1980s face widespread roof replacement cycles as original or first-replacement roofs reach 25-30 year lifespans. These homes typically feature straightforward colonial or ranch designs with simple roof lines but often lack modern roofing technology—inadequate attic ventilation by contemporary standards, absence of ice and water shield in valleys and eaves, dated insulation contributing to energy inefficiency, and sometimes deteriorated roof decking requiring replacement beyond just shingles.
                </p>
                <p className="text-charcoal-600 leading-relaxed">
                  We approach aging subdivision replacement comprehensively—evaluating and upgrading attic ventilation preventing moisture damage and ice dams, installing proper ice and water shield protecting vulnerable areas, replacing damaged decking ensuring sound structural foundation, and recommending insulation improvements enhancing energy efficiency. Many Gahanna homeowners report significant utility cost reductions after our comprehensive approach addresses ventilation and insulation deficiencies common in 1970s-1980s construction. Proper replacement addressing underlying systems proves far more cost-effective than minimal tear-off-and-replace approaches that ignore ventilation problems causing premature failures and ongoing ice dam issues.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-charcoal-900 mb-8 text-center">Gahanna Neighborhoods We Serve</h2>
            <p className="text-center text-charcoal-600 mb-8 max-w-3xl mx-auto">
              From Rocky Fork's newer developments to Old Gahanna's historic streets, DTE Roofing provides expert roofing services throughout Gahanna's diverse community.
            </p>
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                'Rocky Fork',
                'Old Gahanna',
                'Mill Creek',
                'Bridgeview',
                'Lincoln Estates',
                'Academy Woods',
                'Woodside Green',
                'Clark Hall',
                'Carpenters Run',
                'Hunters Bend',
                'Heartland Meadows',
                'Snouffer Farms',
                'Lambton Park',
                'Taylor Farm',
                'East Gahanna',
                'Creekside District'
              ].map((neighborhood, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg text-center border border-gray-200 hover:border-primary-700 hover:bg-primary-50 transition-all">
                  <span className="text-charcoal-700 font-medium">{neighborhood}</span>
                </div>
              ))}
            </div>
            <p className="text-center text-charcoal-600 mt-6">
              Serving all Gahanna neighborhoods. <Link to="/contact" className="text-primary-700 hover:text-primary-800 font-semibold">Contact us</Link> for your roofing consultation.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-charcoal-900 mb-8">Frequently Asked Questions - Gahanna Roofing</h2>
            <div className="space-y-4">
              <details className="bg-white p-6 rounded-xl border-2 border-gray-200 group">
                <summary className="font-bold text-charcoal-900 cursor-pointer text-lg flex items-center justify-between">
                  Why do Gahanna roofs get more algae and moss growth?
                  <ArrowRight className="w-5 h-5 text-primary-700 transform group-open:rotate-90 transition-transform" />
                </summary>
                <div className="text-charcoal-700 leading-relaxed mt-4 space-y-3">
                  <p>
                    Gahanna's proximity to Big Walnut Creek and Blacklick Creek creates microclimates with elevated humidity levels compared to western suburbs farther from waterways. Creek corridors generate persistent morning fog, higher overnight moisture levels, and enhanced humidity that creates ideal conditions for algae and moss colonization on roof surfaces. Additionally, lush creek-corridor vegetation produces abundant biological spores that settle on roofs, while dense tree canopy in established neighborhoods provides shade that slows moisture evaporation and promotes biological growth particularly on north-facing slopes.
                  </p>
                  <p>
                    Algae (appearing as dark streaks) and moss (growing as green patches) aren't merely aesthetic concerns—both organisms retain moisture against shingles, accelerating granule loss and asphalt deterioration that shortens roof lifespan. Moss roots can work under shingle tabs, lifting edges and allowing water infiltration. In Gahanna's moisture-rich environment, untreated biological growth can reduce effective roof lifespan by 5-10 years compared to well-maintained roofs with proactive growth prevention.
                  </p>
                  <p>
                    We address Gahanna's algae challenges through multiple strategies: algae-resistant shingles featuring copper granules that release ions inhibiting growth during rain, zinc or copper strips installed near ridge lines providing ongoing biological suppression, enhanced attic ventilation reducing moisture accumulation, regular debris removal eliminating organic material supporting moss growth, and professional treatment programs safely removing existing growth without damaging shingles. Our <Link to="/services/roof-maintenance" className="text-primary-700 hover:text-primary-800 font-semibold">maintenance programs</Link> prove especially valuable for Gahanna properties—bi-annual professional care prevents the accelerated deterioration common in creek-corridor locations.
                  </p>
                </div>
              </details>

              <details className="bg-white p-6 rounded-xl border-2 border-gray-200 group">
                <summary className="font-bold text-charcoal-900 cursor-pointer text-lg flex items-center justify-between">
                  What's the best roofing material for Gahanna's humid climate?
                  <ArrowRight className="w-5 h-5 text-primary-700 transform group-open:rotate-90 transition-transform" />
                </summary>
                <div className="text-charcoal-700 leading-relaxed mt-4 space-y-3">
                  <p>
                    For Gahanna's moisture-rich environment, we strongly recommend premium architectural shingles with algae-resistance technology rather than basic three-tab or standard architectural products. Algae-resistant shingles incorporate copper granules throughout their composition—copper ions release during rainfall, creating an environment hostile to algae colonization and significantly reducing the dark streaking that plagues untreated shingles in humid climates. This technology proves particularly valuable in Gahanna where high humidity and creek-corridor moisture accelerate algae growth.
                  </p>
                  <p>
                    Top-tier options include CertainTeed's Landmark Premium with StreakFighter technology, GAF's Timberline HDZ with LayerLock and StainGuard protection, Owens Corning's Duration series with SureNail and algae resistance, and IKO's Dynasty featuring ArmourZone and Algae Resistance Warranty. These premium products typically include enhanced warranties (30-50 years), superior wind ratings (110-130 mph), impact resistance options (Class 4 hail protection), and comprehensive algae resistance guarantees often spanning 10-25 years depending on manufacturer.
                  </p>
                  <p>
                    Beyond material selection, proper installation proves equally critical—comprehensive attic ventilation preventing moisture accumulation, strategic ice and water shield application protecting vulnerable areas, quality synthetic underlayment providing secondary waterproofing, and meticulous flashing ensuring water management at all penetrations and transitions. During your consultation, we'll recommend specific products matching your home's architecture, meeting your performance expectations, and fitting your budget while providing the algae resistance and moisture management essential for long-term performance in Gahanna's unique climate conditions.
                  </p>
                </div>
              </details>

              <details className="bg-white p-6 rounded-xl border-2 border-gray-200 group">
                <summary className="font-bold text-charcoal-900 cursor-pointer text-lg flex items-center justify-between">
                  How quickly can you respond to emergency roofing issues in Gahanna?
                  <ArrowRight className="w-5 h-5 text-primary-700 transform group-open:rotate-90 transition-transform" />
                </summary>
                <div className="text-charcoal-700 leading-relaxed mt-4 space-y-3">
                  <p>
                    DTE Roofing provides 24/7 emergency response throughout Gahanna, typically arriving within 2-4 hours of your call for urgent situations including active leaks, storm damage, or structural concerns threatening interior protection. From our Hilliard location, Gahanna sits approximately 28 miles east via I-70 or 270—under normal traffic conditions, our emergency crews reach most Gahanna neighborhoods within this timeframe, often sooner during off-peak hours or overnight emergencies when highways flow freely.
                  </p>
                  <p>
                    Emergency response focuses on immediate damage mitigation—tarping compromised areas to prevent further water infiltration, temporary repairs stabilizing damaged sections until permanent solutions can be implemented, interior moisture assessment identifying potential secondary damage, and documentation supporting insurance claims when storm damage causes issues. We understand that roofing emergencies create stress—water damage threatens your home's interior, possessions, and structural integrity. Our rapid response minimizes damage extension while providing peace of mind that professional help has arrived.
                  </p>
                  <p>
                    Beyond emergency response, we recommend proactive maintenance preventing emergencies through regular inspections identifying developing problems before failures occur, seasonal debris removal eliminating moisture-trapping accumulation, flashing checks ensuring waterproofing at vulnerable transitions, and documentation of roof condition useful for insurance purposes. Many Gahanna homeowners find our <Link to="/services/roof-maintenance" className="text-primary-700 hover:text-primary-800 font-semibold">preventative maintenance programs</Link> eliminate emergency situations entirely—bi-annual professional inspections catch small issues addressable through minor repairs before they escalate into expensive emergency replacements or interior damage requiring extensive restoration work.
                  </p>
                </div>
              </details>

              <details className="bg-white p-6 rounded-xl border-2 border-gray-200 group">
                <summary className="font-bold text-charcoal-900 cursor-pointer text-lg flex items-center justify-between">
                  Do you work with insurance companies for storm damage claims?
                  <ArrowRight className="w-5 h-5 text-primary-700 transform group-open:rotate-90 transition-transform" />
                </summary>
                <div className="text-charcoal-700 leading-relaxed mt-4 space-y-3">
                  <p>
                    Yes, we provide comprehensive insurance claim assistance for Gahanna homeowners dealing with storm damage—a valuable service given Ohio's severe weather including spring hailstorms, summer windstorms, and occasional tornado events affecting Central Ohio. Our insurance experience helps homeowners navigate claim processes that often prove confusing and overwhelming, ensuring they receive fair settlements covering all legitimate damage while avoiding common pitfalls that result in underpayment or claim denial.
                  </p>
                  <p>
                    Our insurance assistance includes thorough damage documentation with detailed photographs and measurements supporting your claim, written assessments explaining damage extent and necessary repairs in insurance-friendly terminology, attendance at insurance adjuster inspections ensuring all damage is identified and properly documented, supplemental documentation when initial assessments miss hidden damage, and advocacy ensuring fair settlements covering complete repairs rather than partial fixes leaving you financially responsible for storm damage.
                  </p>
                  <p>
                    We work with all major insurance carriers and understand their processes, documentation requirements, and settlement practices. Many Gahanna homeowners express relief having professional representation during insurance inspections—adjusters sometimes overlook damage or minimize severity, while our experience ensures comprehensive documentation supporting complete repairs. We never inflate claims or document non-existent damage—our reputation depends on honesty and accuracy. However, we do ensure legitimate storm damage receives appropriate compensation, protecting homeowners from out-of-pocket expenses for damage covered by their policies. Contact our <Link to="/services/storm-damage" className="text-primary-700 hover:text-primary-800 font-semibold">storm damage services</Link> team immediately after severe weather—prompt documentation proves essential for successful claims.
                  </p>
                </div>
              </details>
            </div>
          </div>

          <div className="bg-gradient-to-br from-primary-700 to-primary-800 text-white p-8 rounded-xl">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Protect Your Gahanna Home?</h2>
              <p className="text-xl mb-6">
                Join hundreds of satisfied Gahanna homeowners who trust DTE Roofing for quality, reliability, and exceptional service
              </p>
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div>
                  <div className="text-4xl font-bold mb-2">400+</div>
                  <div className="text-gray-100">Gahanna Roofs Installed</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">2-4 Hrs</div>
                  <div className="text-gray-100">Emergency Response Time</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">5-Star</div>
                  <div className="text-gray-100">Service Rating</div>
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
            Schedule Your Gahanna Roof Inspection
          </h2>
          <p className="text-xl text-charcoal-600 mb-8 max-w-2xl mx-auto">
            Contact DTE Roofing today for expert roofing services throughout Gahanna
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
            Serving Gahanna and all surrounding Central Ohio communities
          </p>
        </div>
      </section>
    </div>
  );
}
