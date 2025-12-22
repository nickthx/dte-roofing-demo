import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Phone, MapPin, Shield } from 'lucide-react';
import SEO from '../../components/SEO';
import SchemaMarkup from '../../components/SchemaMarkup';

export default function Reynoldsburg() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Roofing Services in Reynoldsburg, Ohio - Expert Roof Repair & Replacement | DTE Roofing"
        description="Professional roofing services in Reynoldsburg, OH. Local experts serving Brice, Tussing, Blacklick Estates & all Reynoldsburg neighborhoods. Free estimates. Call 614-971-6028."
        keywords="roofing Reynoldsburg OH, Reynoldsburg roofer, roof repair Reynoldsburg, roof replacement Reynoldsburg, Brice roofing, Reynoldsburg roofing contractor"
        canonical="https://www.dteroofingllc.com/locations/reynoldsburg"
      />
      <SchemaMarkup
        type="location"
        locationName="Reynoldsburg"
        pageTitle="Roofing Services in Reynoldsburg, OH - DTE Roofing LLC"
        pageDescription="Professional roofing services in Reynoldsburg, OH. Local experts serving all Reynoldsburg neighborhoods with roof repair, replacement, and installation."
        pageUrl="https://www.dteroofingllc.com/locations/reynoldsburg"
      />

      <section className="relative bg-gradient-to-br from-charcoal-900 via-charcoal-800 to-charcoal-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="w-6 h-6" />
              <span className="text-lg">Serving Reynoldsburg, Ohio</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Roofing Services in Reynoldsburg, Ohio</h1>
            <p className="text-xl text-gray-200 mb-6">
              Your trusted local roofing contractor serving Reynoldsburg's eastern suburbs with expert roof repair, replacement, and installation services
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
              <h2 className="text-3xl font-bold text-charcoal-900 mb-6">Reynoldsburg's Trusted Roofing Specialists</h2>
              <p className="text-lg text-charcoal-600 mb-6 leading-relaxed">
                DTE Roofing proudly serves Reynoldsburg, known as "Ohio's Birthplace of the Tomato," from Brice's established communities to Tussing's family neighborhoods, from Blacklick Estates' growing developments to the expanding eastern corridors along Taylor Road. Located approximately 30 miles west in Hilliard, our team responds efficiently to Reynoldsburg's roofing needs, understanding the unique environmental and structural challenges facing this eastern Franklin County suburb where diverse housing stock spans six decades.
              </p>
              <p className="text-lg text-charcoal-600 mb-6 leading-relaxed">
                Incorporated in 1959 and growing from a small agricultural community into a thriving suburb of nearly 40,000 residents, Reynoldsburg features remarkable housing diversity—from 1950s-1960s ranch homes in Tussing and Brice, to 1970s-1980s colonials throughout central areas, to modern developments along the eastern expansion zones. This varied housing stock creates diverse roofing needs spanning aging subdivision updates, foundation movement concerns common in clay-rich soils, and quality enhancements for newer construction.
              </p>
              <p className="text-lg text-charcoal-600 mb-6 leading-relaxed">
                Reynoldsburg's eastern location exposes homes to enhanced wind patterns and storm intensity compared to western suburbs. Properties face increased hail exposure during spring severe weather events, higher wind stress from storms tracking across open farmland before reaching developed areas, and greater temperature extremes that accelerate shingle aging. Our Reynoldsburg expertise addresses these exposure factors through material selection and installation techniques providing superior storm resistance and durability.
              </p>

              <div className="bg-primary-50 p-6 rounded-xl border-2 border-primary-200">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="w-8 h-8 text-primary-700" />
                  <h3 className="font-bold text-charcoal-900 text-xl">Why Reynoldsburg Homeowners Choose DTE Roofing</h3>
                </div>
                <ul className="space-y-3">
                  {[
                    'Rapid response from Hilliard - serving Reynoldsburg promptly',
                    'Experience with eastern exposure storm challenges',
                    'Expertise addressing foundation movement impacts on roofing',
                    'Understanding of Reynoldsburg\'s diverse housing stock',
                    'Proven track record across all Reynoldsburg neighborhoods',
                    'Licensed, insured, and committed to quality workmanship'
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
                <h3 className="text-2xl font-bold text-charcoal-900 mb-6">Complete Roofing Services for Reynoldsburg</h3>
                <ul className="space-y-3">
                  {[
                    { name: 'Roof Replacement', link: '/services/roof-replacement' },
                    { name: 'Roof Repair', link: '/services/roof-repair' },
                    { name: 'Storm Damage Assessment', link: '/services/storm-damage' },
                    { name: 'Roof Inspections', link: '/services/roof-inspection' },
                    { name: 'Hail Damage Repair', link: '/services/storm-damage' },
                    { name: '24/7 Emergency Services', link: '/services/emergency-services' },
                    { name: 'Wind Damage Repair', link: '/services/storm-damage' },
                    { name: 'Gutter Services', link: '/services/gutters' },
                    { name: 'Siding Installation', link: '/services/siding' },
                    { name: 'Insurance Claims Help', link: '/contact' },
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
                <h3 className="font-bold text-charcoal-900 mb-2 text-lg">Free Storm Damage Assessments</h3>
                <p className="text-charcoal-700 mb-4">
                  We provide comprehensive storm damage inspections and no-obligation estimates for all Reynoldsburg roofing projects.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center text-primary-700 hover:text-primary-800 font-semibold"
                >
                  Request Free Assessment <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-charcoal-900 mb-6">Reynoldsburg Roofing Challenges & Expert Solutions</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
                <h3 className="text-xl font-bold text-charcoal-900 mb-4">Enhanced Wind & Storm Exposure</h3>
                <p className="text-charcoal-600 mb-4 leading-relaxed">
                  Reynoldsburg's eastern location exposes properties to intensified storm systems and wind patterns compared to western suburbs sheltered by urban development. Severe weather tracking from the west builds intensity across open farmland before encountering Reynoldsburg's residential areas, resulting in stronger sustained winds, more frequent hail events during spring severe weather season, and greater tornado risk compared to more urbanized western areas. This enhanced exposure accelerates shingle damage, stresses roof structures, and increases storm damage frequency requiring professional assessment and repair.
                </p>
                <p className="text-charcoal-600 leading-relaxed">
                  Our storm-resilient roofing solutions include impact-resistant shingles rated Class 4 for hail protection—proven to withstand impacts up to 2 inches in diameter and often qualifying for insurance discounts, enhanced wind-rated materials exceeding Ohio's 110 mph standards and reaching 130 mph certifications appropriate for Reynoldsburg's exposure, properly engineered roof deck attachment using ring-shank nails and proper spacing, and comprehensive ice and water shield application protecting vulnerable areas. After severe weather, our <Link to="/services/storm-damage" className="text-primary-700 hover:text-primary-800 font-semibold">storm damage assessment services</Link> identify hidden damage insurance adjusters sometimes overlook, ensuring complete repairs rather than partial fixes leaving you vulnerable to future problems.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
                <h3 className="text-xl font-bold text-charcoal-900 mb-4">Foundation Settlement & Structural Stress</h3>
                <p className="text-charcoal-600 mb-4 leading-relaxed">
                  Reynoldsburg's clay-heavy soils create foundation movement challenges affecting roof structures over time. Clay soils expand dramatically when saturated and contract significantly during dry periods, causing cyclical foundation movement that stresses roof framing connections, creates ridge sags or roof plane unevenness, and sometimes requires structural reinforcement before roof replacement can be properly installed. Older Reynoldsburg homes particularly show these effects—cracks in interior ceilings, doors that stick or fail to close properly, and visible roof irregularities all indicate foundation movement requiring professional assessment.
                </p>
                <p className="text-charcoal-600 leading-relaxed">
                  Before every Reynoldsburg <Link to="/services/roof-replacement" className="text-primary-700 hover:text-primary-800 font-semibold">roof replacement</Link>, we conduct comprehensive structural evaluations identifying foundation-related concerns that must be addressed for proper installation. Our approach includes ridge straightening when settlement has created sags, roof framing reinforcement ensuring proper load distribution, proper attachment techniques accounting for potential continued movement, and honest recommendations when foundation issues require remediation before roofing work proceeds. Ignoring structural concerns creates failed installations and wasted investment—proper assessment and necessary repairs ensure your new roof performs as expected for its full warranty period.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
                <h3 className="text-xl font-bold text-charcoal-900 mb-4">Aging Subdivision Roof Cycles</h3>
                <p className="text-charcoal-600 mb-4 leading-relaxed">
                  Tussing, Brice, and central Reynoldsburg neighborhoods developed in the 1960s-1980s face widespread roof replacement needs as original or first-replacement systems reach 20-30 year lifespans. These predominantly ranch and colonial homes feature relatively straightforward roof designs but often lack modern roofing technology—inadequate attic ventilation causing premature shingle aging and ice dam formation, absence of ice and water shield now considered essential, outdated or compressed insulation contributing to energy inefficiency, and sometimes deteriorated roof decking hidden beneath surface shingles requiring replacement.
                </p>
                <p className="text-charcoal-600 leading-relaxed">
                  We approach aging subdivision replacement comprehensively—evaluating structural condition before beginning work, upgrading attic ventilation to modern standards preventing moisture damage, installing proper ice and water shield protecting eaves and valleys, replacing damaged decking ensuring sound structural foundation, and recommending insulation improvements that dramatically reduce heating and cooling costs. Many Reynoldsburg homeowners report utility cost reductions of 15-25% after comprehensive replacement addressing ventilation and insulation deficiencies common in older construction. Proper replacement proves far more cost-effective than minimal approaches ignoring underlying problems causing premature failures requiring expensive re-replacement.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
                <h3 className="text-xl font-bold text-charcoal-900 mb-4">Temperature Extremes & Accelerated Aging</h3>
                <p className="text-charcoal-600 mb-4 leading-relaxed">
                  Reynoldsburg experiences greater temperature extremes than western suburbs—hotter summer highs due to less urban heat island effect and fewer mature trees, colder winter lows from eastern exposure to Arctic air masses, and more dramatic day-night temperature swings creating expansion-contraction cycles that stress roofing materials. These temperature variations accelerate shingle aging through thermal stress, increase brittleness in cold weather making shingles susceptible to wind damage, and enhance freeze-thaw cycles contributing to ice dam formation and shingle lifting along eaves.
                </p>
                <p className="text-charcoal-600 leading-relaxed">
                  Our material recommendations for Reynoldsburg properties emphasize enhanced durability appropriate for temperature extremes—premium architectural shingles with reinforced construction resisting thermal stress, proper granule adhesion maintaining protective coating despite temperature cycling, superior flexibility preventing cold-weather brittleness, and advanced adhesive technology ensuring shingle tabs remain bonded despite expansion-contraction movements. Additionally, proper attic ventilation proves critical—removing heat accumulation in summer and managing moisture in winter, both factors dramatically extending shingle lifespan in challenging climates. Our <Link to="/services/roof-maintenance" className="text-primary-700 hover:text-primary-800 font-semibold">maintenance programs</Link> include seasonal inspections addressing temperature-related stress before minor issues escalate into expensive failures.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-charcoal-900 mb-8 text-center">Reynoldsburg Neighborhoods We Serve</h2>
            <p className="text-center text-charcoal-600 mb-8 max-w-3xl mx-auto">
              From Brice to Tussing, Blacklick Estates to Taylor Station, DTE Roofing provides expert roofing services throughout Reynoldsburg's diverse communities.
            </p>
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                'Brice',
                'Tussing',
                'Blacklick Estates',
                'Taylor Station',
                'Etna',
                'Eastmoor',
                'Waggoner Estates',
                'Rosehill',
                'Seven Hills',
                'Winchester Lakes',
                'Harmon',
                'Livingston Park',
                'Summit Station',
                'East Reynoldsburg',
                'Mifflin Township',
                'Taylor Road Corridor'
              ].map((neighborhood, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg text-center border border-gray-200 hover:border-primary-700 hover:bg-primary-50 transition-all">
                  <span className="text-charcoal-700 font-medium">{neighborhood}</span>
                </div>
              ))}
            </div>
            <p className="text-center text-charcoal-600 mt-6">
              Serving all Reynoldsburg neighborhoods. <Link to="/contact" className="text-primary-700 hover:text-primary-800 font-semibold">Contact us</Link> for your roofing consultation.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-charcoal-900 mb-8">Frequently Asked Questions - Reynoldsburg Roofing</h2>
            <div className="space-y-4">
              <details className="bg-white p-6 rounded-xl border-2 border-gray-200 group">
                <summary className="font-bold text-charcoal-900 cursor-pointer text-lg flex items-center justify-between">
                  Should I repair or replace my aging Reynoldsburg roof?
                  <ArrowRight className="w-5 h-5 text-primary-700 transform group-open:rotate-90 transition-transform" />
                </summary>
                <div className="text-charcoal-700 leading-relaxed mt-4 space-y-3">
                  <p>
                    The repair vs. replacement decision depends on multiple factors including roof age, extent of damage, overall condition, and cost-effectiveness. Generally, roofs under 15 years old showing isolated damage benefit from targeted repairs—replacing damaged shingles, repairing flashing, addressing specific leak sources. However, roofs approaching or exceeding 20 years, showing widespread deterioration (multiple areas of damage, significant granule loss, curling or missing shingles throughout), or requiring repeated repairs often prove more cost-effective to replace entirely rather than continuing piecemeal repairs on failing systems.
                  </p>
                  <p>
                    Consider replacement when: your roof exceeds 20-25 years in Reynoldsburg's harsh climate, multiple leaks or damage areas indicate systemic failure, shingles show widespread granule loss or curling, visible sagging or structural concerns exist, or repair costs approach 30-40% of replacement costs. Replacement provides comprehensive warranty coverage (typically 25-30 years), addresses underlying ventilation and insulation deficiencies causing premature aging, incorporates modern materials with superior storm resistance appropriate for Reynoldsburg's exposure, and eliminates ongoing repair cycles draining resources without long-term solution.
                  </p>
                  <p>
                    We provide honest assessments during <Link to="/services/roof-inspection" className="text-primary-700 hover:text-primary-800 font-semibold">roof inspections</Link>—sometimes recommending targeted repairs extending serviceable roof lifespan 5-10 years, other times advising replacement when repairs prove false economy. Our recommendations prioritize your long-term interests over maximizing short-term revenue—building lasting relationships through honest guidance that protects your home investment and prevents wasted spending on repairs that only delay inevitable replacement. Schedule a professional evaluation for transparent guidance specific to your roof's condition and your financial situation.
                  </p>
                </div>
              </details>

              <details className="bg-white p-6 rounded-xl border-2 border-gray-200 group">
                <summary className="font-bold text-charcoal-900 cursor-pointer text-lg flex items-center justify-between">
                  What financing options are available for roof replacement?
                  <ArrowRight className="w-5 h-5 text-primary-700 transform group-open:rotate-90 transition-transform" />
                </summary>
                <div className="text-charcoal-700 leading-relaxed mt-4 space-y-3">
                  <p>
                    DTE Roofing understands that roof replacement represents a significant investment—typically $8,000-$18,000 for most Reynoldsburg homes depending on size and complexity. We partner with reputable financing companies offering flexible payment plans making quality roofing accessible regardless of immediate cash availability. Financing options typically include competitive interest rates (often promotional 0% APR for qualified applicants during introductory periods), terms ranging from 12-84 months matching your budget, same-day approvals enabling quick project commencement, and no prepayment penalties allowing early payoff when financially advantageous.
                  </p>
                  <p>
                    Financing proves particularly valuable when: unexpected roof failure creates emergency replacement need without available savings, delaying replacement risks interior damage exceeding financing costs, upgrading to premium materials provides enhanced storm protection in Reynoldsburg's severe weather environment, or spreading costs over time maintains emergency fund liquidity for other needs. Many homeowners find monthly financing payments comparable to or less than utility cost reductions achieved through proper ventilation and insulation upgrades included in comprehensive replacement—essentially allowing the roof to help pay for itself through energy savings.
                  </p>
                  <p>
                    We also assist homeowners exploring other options including home equity lines of credit offering potentially lower rates using home equity, homeowners insurance claims covering storm damage with deductible as only out-of-pocket cost, and FHA Title 1 loans specifically designed for home improvements without requiring home equity. During your consultation, we'll discuss all payment options, provide transparent pricing, and help identify the approach best fitting your financial situation. Quality roofing shouldn't be delayed due to upfront cost concerns—proper financing makes protection affordable while preventing expensive interior damage from failing roofs.
                  </p>
                </div>
              </details>

              <details className="bg-white p-6 rounded-xl border-2 border-gray-200 group">
                <summary className="font-bold text-charcoal-900 cursor-pointer text-lg flex items-center justify-between">
                  How do I know if storm damage requires professional inspection?
                  <ArrowRight className="w-5 h-5 text-primary-700 transform group-open:rotate-90 transition-transform" />
                </summary>
                <div className="text-charcoal-700 leading-relaxed mt-4 space-y-3">
                  <p>
                    Schedule professional inspection after any severe weather event including hailstorms (particularly with marble-sized or larger hail), high winds exceeding 50-60 mph, tornadoes affecting your area, or significant storm debris impact from fallen branches. Even without obvious visible damage from ground level, severe weather can cause hidden problems—bruised shingles from hail impacts that create invisible fractures leading to premature failure, wind-lifted shingles that resealed but sustained nail pull-through or seal damage, debris impacts that punctured or cracked shingles, or compromised flashing at vulnerable transitions.
                  </p>
                  <p>
                    Warning signs requiring immediate inspection include: visible missing or damaged shingles, dents or dimples in metal flashing, gutters, or vents indicating hail impact, granules accumulating in gutters or downspouts (sign of shingle surface damage), water stains on interior ceilings or walls, or visible sagging or irregularity in roof planes. However, many storm damages prove invisible without professional evaluation—trained inspectors identify subtle indicators homeowners miss, document damage supporting insurance claims, and distinguish new storm damage from pre-existing wear ensuring appropriate claim outcomes.
                  </p>
                  <p>
                    Don't delay storm damage assessment—insurance policies typically require prompt damage reporting, unaddressed damage often worsens creating more expensive repairs, and concealed problems sometimes void insurance coverage when discovered later and attributed to maintenance neglect rather than storm events. Our <Link to="/services/storm-damage" className="text-primary-700 hover:text-primary-800 font-semibold">storm damage assessment services</Link> are free and obligation-free—we'll honestly evaluate whether claimable damage exists, assist with insurance documentation if needed, or provide peace of mind that your roof withstood the storm successfully. Contact us immediately after severe weather affecting Reynoldsburg for prompt professional evaluation.
                  </p>
                </div>
              </details>

              <details className="bg-white p-6 rounded-xl border-2 border-gray-200 group">
                <summary className="font-bold text-charcoal-900 cursor-pointer text-lg flex items-center justify-between">
                  What roof color is best for Reynoldsburg homes?
                  <ArrowRight className="w-5 h-5 text-primary-700 transform group-open:rotate-90 transition-transform" />
                </summary>
                <div className="text-charcoal-700 leading-relaxed mt-4 space-y-3">
                  <p>
                    Roof color selection should balance aesthetic preferences with practical considerations including architectural style compatibility, neighborhood standards, heat absorption properties, and resale value implications. Popular Reynoldsburg choices include neutral earth tones (weathered wood, aged cedar, driftwood), classic grays (charcoal, slate, pewter), and rich browns (mission brown, autumn brown, tuscan) that complement brick, siding, and stone exteriors common throughout the community while maintaining broad market appeal important for future property sales.
                  </p>
                  <p>
                    Color impacts attic temperature and energy efficiency—darker shingles (charcoal, black, dark brown) absorb more solar radiation, increasing attic temperatures and potentially raising cooling costs during Ohio's hot summers. Lighter colors (tan, light gray, weathered wood) reflect more sunlight, maintaining cooler attic temperatures and potentially reducing air conditioning loads. However, proper attic ventilation and insulation prove far more impactful than color on energy efficiency—well-ventilated attics with adequate insulation perform efficiently regardless of shingle color, while poorly ventilated spaces suffer regardless of lighter colors.
                  </p>
                  <p>
                    Consider your home's existing colors—roof should complement rather than match siding and trim, brick colors influence which shingle tones harmonize best, stone accents pair well with earth-toned or gray shingles, and neighborhood standards matter in established areas where dramatic departures from surrounding homes affect resale appeal. During your consultation, we provide large shingle samples viewed against your home's exterior in natural lighting, discuss how different colors age and show algae staining over time, and offer guidance ensuring your selection enhances curb appeal while meeting practical performance needs. Most manufacturers offer 15-25 color options within their product lines, providing extensive choice matching any aesthetic preference.
                  </p>
                </div>
              </details>
            </div>
          </div>

          <div className="bg-gradient-to-br from-primary-700 to-primary-800 text-white p-8 rounded-xl">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Protect Your Reynoldsburg Home?</h2>
              <p className="text-xl mb-6">
                Join hundreds of satisfied Reynoldsburg homeowners who trust DTE Roofing for storm-resistant quality and exceptional service
              </p>
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div>
                  <div className="text-4xl font-bold mb-2">350+</div>
                  <div className="text-gray-100">Reynoldsburg Roofs</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">24/7</div>
                  <div className="text-gray-100">Storm Response</div>
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
            Schedule Your Reynoldsburg Roof Inspection
          </h2>
          <p className="text-xl text-charcoal-600 mb-8 max-w-2xl mx-auto">
            Contact DTE Roofing today for expert roofing services throughout Reynoldsburg
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
            Serving Reynoldsburg and all surrounding Central Ohio communities
          </p>
        </div>
      </section>
    </div>
  );
}
