import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Phone, MapPin, Shield } from 'lucide-react';
import SEO from '../../components/SEO';
import SchemaMarkup from '../../components/SchemaMarkup';

export default function UpperArlington() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Roofing Services in Upper Arlington, Ohio - Expert Roof Repair & Replacement | DTE Roofing"
        description="Professional roofing services in Upper Arlington, OH. Local experts serving Old Arlington, Tremont, Kingsdale & all Upper Arlington neighborhoods. Free estimates. Call 614-971-6028."
        keywords="roofing Upper Arlington OH, Upper Arlington roofer, roof repair Upper Arlington, roof replacement Upper Arlington, Old Arlington roofing, Upper Arlington roofing contractor"
        canonical="https://www.dteroofingllc.com/locations/upper-arlington"
      />
      <SchemaMarkup
        type="location"
        locationName="Upper Arlington"
        pageTitle="Roofing Services in Upper Arlington, OH - DTE Roofing LLC"
        pageDescription="Professional roofing services in Upper Arlington, OH. Local experts serving all Upper Arlington neighborhoods with roof repair, replacement, and installation."
        pageUrl="https://www.dteroofingllc.com/locations/upper-arlington"
      />

      <section className="relative bg-gradient-to-br from-charcoal-900 via-charcoal-800 to-charcoal-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="w-6 h-6" />
              <span className="text-lg">Serving Upper Arlington, Ohio</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Roofing Services in Upper Arlington, Ohio</h1>
            <p className="text-xl text-gray-200 mb-6">
              Your trusted local roofing contractor serving all Upper Arlington neighborhoods with expert roof repair, replacement, and installation services
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
              <h2 className="text-3xl font-bold text-charcoal-900 mb-6">Upper Arlington's Trusted Roofing Professionals</h2>
              <p className="text-lg text-charcoal-600 mb-6 leading-relaxed">
                DTE Roofing has earned the trust of Upper Arlington homeowners from Old Arlington's historic properties to Tremont's tree-lined streets, from Kingsdale's charming neighborhoods to Canterbury's elegant homes. Located just 12 miles west in Hilliard, we're perfectly positioned to serve this prestigious inner-ring suburb where exceptional schools, walkable communities, and meticulously maintained properties create one of Central Ohio's most desirable addresses.
              </p>
              <p className="text-lg text-charcoal-600 mb-6 leading-relaxed">
                Founded in 1918 and fully developed by the 1960s, Upper Arlington features remarkable architectural diversity—from Tudor Revival and Colonial Revival homes in Old Arlington dating to the 1920s, to mid-century modern gems in Northwest neighborhoods, to transitional styles throughout Barrington and Miller Park areas. This architectural heritage demands roofing expertise that respects historical character while incorporating modern performance and efficiency—exactly what our team delivers.
              </p>
              <p className="text-lg text-charcoal-600 mb-6 leading-relaxed">
                Upper Arlington's mature tree canopy, while enhancing the community's renowned aesthetics and property values, creates specific roofing challenges. Towering oaks, maples, and sycamores provide shade and beauty but also deposit debris, encourage moss growth, create moisture retention conditions, and occasionally drop branches causing damage. Our Upper Arlington expertise addresses these environmental factors through specialized maintenance approaches and installation techniques designed for heavily tree-shaded properties.
              </p>

              <div className="bg-primary-50 p-6 rounded-xl border-2 border-primary-200">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="w-8 h-8 text-primary-700" />
                  <h3 className="font-bold text-charcoal-900 text-xl">Why Upper Arlington Homeowners Choose DTE Roofing</h3>
                </div>
                <ul className="space-y-3">
                  {[
                    'Rapid response from our nearby Hilliard location - typically same day',
                    'Experience with historic home preservation and diverse architectural styles',
                    'Understanding of mature tree canopy impact on roof health',
                    'Respect for Upper Arlington\'s community character and standards',
                    'Proven track record across all Upper Arlington neighborhoods',
                    'Licensed, insured, and committed to exceeding expectations'
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
                <h3 className="text-2xl font-bold text-charcoal-900 mb-6">Complete Roofing Services for Upper Arlington</h3>
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
                    { name: 'Tree Damage Prevention', link: '/services/roof-maintenance' },
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
                <h3 className="font-bold text-charcoal-900 mb-2 text-lg">Free Roofing Estimates in Upper Arlington</h3>
                <p className="text-charcoal-700 mb-4">
                  We provide detailed, no-obligation estimates for all roofing projects in Upper Arlington, respecting your home's character and community standards.
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
            <h2 className="text-3xl font-bold text-charcoal-900 mb-6">Upper Arlington Roofing Challenges & Expert Solutions</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
                <h3 className="text-xl font-bold text-charcoal-900 mb-4">Historic Home Preservation</h3>
                <p className="text-charcoal-600 mb-4 leading-relaxed">
                  Upper Arlington's Old Arlington neighborhood and scattered historic properties throughout the city feature homes approaching or exceeding 100 years old. These architectural treasures often showcase Tudor Revival, Colonial Revival, English Cottage, and early 20th-century American Foursquare styles with distinctive roofing requirements—steep pitches, complex dormers, decorative details, and sometimes original slate or tile materials requiring specialized approaches or historically appropriate replacements.
                </p>
                <p className="text-charcoal-600 leading-relaxed">
                  We specialize in historic home roofing that respects architectural integrity while incorporating modern performance. Our approach includes sourcing architectural shingles mimicking historic slate or shake aesthetics, custom flashing fabrication preserving decorative details and original trim, proper ventilation design for homes with limited attic space, and installation techniques appropriate for older roof structures. During your <Link to="/services/roof-inspection" className="text-primary-700 hover:text-primary-800 font-semibold">roof inspection</Link>, we evaluate historic features worth preserving and recommend solutions maintaining character while ensuring decades of reliable protection.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
                <h3 className="text-xl font-bold text-charcoal-900 mb-4">Mature Tree Canopy Management</h3>
                <p className="text-charcoal-600 mb-4 leading-relaxed">
                  Upper Arlington's renowned tree-lined streets and mature landscaping create a distinctive community aesthetic but pose significant roofing challenges. Towering oaks, maples, and sycamores deposit leaves, twigs, and seed pods accumulating in valleys and gutters, block sunlight encouraging moss and algae growth particularly on north-facing slopes, retain moisture against shingles accelerating deterioration, and occasionally drop branches causing punctures or structural damage during storms.
                </p>
                <p className="text-charcoal-600 leading-relaxed">
                  Our Upper Arlington installations address tree-related challenges through algae-resistant shingles with copper granules preventing biological growth, enhanced debris management including gutter guards and regular cleaning services, strategic attic ventilation removing moisture before damage occurs, and impact-resistant materials providing protection against falling branches. We recommend bi-annual <Link to="/services/roof-maintenance" className="text-primary-700 hover:text-primary-800 font-semibold">preventative maintenance</Link> for tree-shaded Upper Arlington homes—regular debris removal and moss treatment extending roof lifespan significantly in this heavily canopied environment.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
                <h3 className="text-xl font-bold text-charcoal-900 mb-4">Aging Housing Stock Roof Replacement</h3>
                <p className="text-charcoal-600 mb-4 leading-relaxed">
                  With most Upper Arlington homes built between the 1920s-1960s, the community faces ongoing roof replacement cycles as systems installed 20-40 years ago reach end-of-life. Older homes often lack modern roofing technology—inadequate attic ventilation by contemporary standards, absence of ice and water shield in critical areas, insufficient insulation contributing to energy inefficiency, and original roof framing sometimes requiring reinforcement before replacement. These factors demand contractors understanding both historic construction and modern building science.
                </p>
                <p className="text-charcoal-600 leading-relaxed">
                  Our <Link to="/services/roof-replacement" className="text-primary-700 hover:text-primary-800 font-semibold">roof replacement</Link> approach for Upper Arlington's aging housing stock includes comprehensive structural evaluation before beginning work, modern ventilation systems adapted to historic attic configurations, enhanced insulation recommendations improving energy efficiency while respecting original construction, and proper integration of contemporary materials with older home structures. Many Upper Arlington homeowners are amazed by energy cost reductions achieved through proper ventilation and insulation upgrades during replacement—investments that enhance comfort while protecting property values.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
                <h3 className="text-xl font-bold text-charcoal-900 mb-4">Property Value & Neighborhood Standards</h3>
                <p className="text-charcoal-600 mb-4 leading-relaxed">
                  Upper Arlington's prestigious reputation and high property values demand exterior maintenance exceeding typical suburban standards. Neighbors notice deteriorating roofs, property values suffer from deferred maintenance, and home sale processes become challenging when roofs show age or damage. Conversely, quality roofing investments enhance curb appeal, support premium property valuations, and demonstrate the pride of ownership Upper Arlington residents expect from their neighbors and community.
                </p>
                <p className="text-charcoal-600 leading-relaxed">
                  We approach every Upper Arlington project understanding that roofing represents more than functional necessity—it's a statement about homeowner commitment to community standards and property stewardship. Our installations prioritize aesthetic excellence through material selection complementing architectural style, meticulous attention to symmetry and alignment, clean lines enhancing the distinctive Upper Arlington streetscape, and quality evident in every detail. Upper Arlington homeowners consistently report that premium roofing investments enhance property marketability and often recover 70-90% of replacement costs through increased sale prices when moving.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-charcoal-900 mb-8 text-center">Upper Arlington Neighborhoods We Serve</h2>
            <p className="text-center text-charcoal-600 mb-8 max-w-3xl mx-auto">
              From Old Arlington's historic charm to Northwest's mid-century character, DTE Roofing provides expert roofing services throughout Upper Arlington's distinctive neighborhoods.
            </p>
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                'Old Arlington',
                'Tremont',
                'Kingsdale',
                'Canterbury',
                'Barrington',
                'Northwest',
                'Miller Park',
                'Brandon',
                'Waltham',
                'Northam Park',
                'Edgehill',
                'Ridgeview',
                'Arlington Park',
                'Greensview',
                'Reed Road',
                'Northwest Area'
              ].map((neighborhood, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg text-center border border-gray-200 hover:border-primary-700 hover:bg-primary-50 transition-all">
                  <span className="text-charcoal-700 font-medium">{neighborhood}</span>
                </div>
              ))}
            </div>
            <p className="text-center text-charcoal-600 mt-6">
              Serving all Upper Arlington neighborhoods. <Link to="/contact" className="text-primary-700 hover:text-primary-800 font-semibold">Contact us</Link> to schedule your roofing consultation.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-charcoal-900 mb-8">Frequently Asked Questions - Upper Arlington Roofing</h2>
            <div className="space-y-4">
              <details className="bg-white p-6 rounded-xl border-2 border-gray-200 group">
                <summary className="font-bold text-charcoal-900 cursor-pointer text-lg flex items-center justify-between">
                  How do mature trees affect Upper Arlington roofing needs?
                  <ArrowRight className="w-5 h-5 text-primary-700 transform group-open:rotate-90 transition-transform" />
                </summary>
                <div className="text-charcoal-700 leading-relaxed mt-4 space-y-3">
                  <p>
                    Upper Arlington's magnificent tree canopy—one of the community's defining characteristics—creates unique roofing challenges requiring proactive management. Mature trees deposit substantial organic debris (leaves, twigs, acorns, seed pods) that accumulates in roof valleys and gutters, trapping moisture against shingles and accelerating deterioration. North-facing roof slopes shaded by dense canopy receive minimal direct sunlight, creating perfect conditions for moss and algae growth that, left untreated, shortens roof lifespan by retaining moisture and compromising shingle integrity.
                  </p>
                  <p>
                    Overhanging branches pose mechanical risks—wind causes rubbing that wears away protective granules, storms drop branches causing punctures or structural damage, and falling limbs during severe weather can penetrate roof decking requiring emergency repairs. Additionally, tree-shaded roofs experience slower drying after rain, extended moisture exposure during Ohio's humid summers, and enhanced biological growth compared to sun-exposed properties.
                  </p>
                  <p>
                    We address these challenges through multiple strategies: algae-resistant shingles with copper granules inhibiting moss and algae growth, impact-resistant materials providing protection against falling branches, comprehensive gutter systems with guards preventing debris accumulation, and bi-annual <Link to="/services/roof-maintenance" className="text-primary-700 hover:text-primary-800 font-semibold">maintenance programs</Link> including debris removal and moss treatment. For Upper Arlington's heavily tree-shaded properties, regular professional maintenance proves essential to achieving full roof lifespan—well-maintained roofs in shaded locations can match or exceed the performance of sun-exposed roofs through proactive care.
                  </p>
                </div>
              </details>

              <details className="bg-white p-6 rounded-xl border-2 border-gray-200 group">
                <summary className="font-bold text-charcoal-900 cursor-pointer text-lg flex items-center justify-between">
                  What roofing materials best suit Upper Arlington's historic architecture?
                  <ArrowRight className="w-5 h-5 text-primary-700 transform group-open:rotate-90 transition-transform" />
                </summary>
                <div className="text-charcoal-700 leading-relaxed mt-4 space-y-3">
                  <p>
                    Upper Arlington's diverse architectural heritage—from Tudor Revival and Colonial Revival to mid-century modern and transitional styles—demands thoughtful material selection that complements each home's distinctive character. For historic properties in Old Arlington and throughout the city, premium architectural shingles that replicate traditional slate, cedar shake, or tile aesthetics provide authentic appearances while delivering modern performance and reasonable costs compared to actual historic materials.
                  </p>
                  <p>
                    Tudor Revival homes often benefit from designer shingles mimicking slate in charcoal, gray, or weathered wood tones that complement stucco and timber details. Colonial Revival properties pair well with dimensional architectural shingles in classic colors (weathered wood, aged cedar, colonial slate) that harmonize with symmetrical facades. Mid-century modern homes in Northwest neighborhoods can embrace contemporary shingle profiles in clean gray or earth tone palettes matching their architectural simplicity and horizontal emphasis.
                  </p>
                  <p>
                    For homeowners seeking truly authentic historic aesthetics, synthetic slate products provide remarkably realistic slate appearance at a fraction of natural slate costs, exceptional durability (50+ year lifespans), and significantly lighter weight requiring no structural reinforcement. Metal roofing systems—increasingly popular in Upper Arlington—offer 40-60 year lifespans, distinctive aesthetics suitable for various architectural styles, and exceptional storm resistance. During your consultation, we'll recommend specific materials matching your home's architecture, meeting your performance expectations, and fitting within your budget while enhancing Upper Arlington's distinctive neighborhood character.
                  </p>
                </div>
              </details>

              <details className="bg-white p-6 rounded-xl border-2 border-gray-200 group">
                <summary className="font-bold text-charcoal-900 cursor-pointer text-lg flex items-center justify-between">
                  How does roof condition affect Upper Arlington property values?
                  <ArrowRight className="w-5 h-5 text-primary-700 transform group-open:rotate-90 transition-transform" />
                </summary>
                <div className="text-charcoal-700 leading-relaxed mt-4 space-y-3">
                  <p>
                    In Upper Arlington's competitive real estate market characterized by high property values, strong buyer demand, and sophisticated purchaser expectations, roof condition significantly impacts property valuations, sale speed, and negotiating positions. Buyers shopping Upper Arlington—often relocating professionals, growing families seeking excellent schools, or empty-nesters downsizing within the community—scrutinize exterior condition as indicators of overall property care and potential future expenses.
                  </p>
                  <p>
                    Properties with dated, deteriorating, or obviously aging roofs trigger immediate buyer concerns about deferred maintenance, prompt aggressive pricing negotiations seeking roof replacement credits (typically inflated beyond actual costs), extend time-on-market as buyers hesitate over potential expenses, and sometimes prevent sales entirely when buyers choose competing properties with newer roofs. Conversely, homes with quality recent roofing installations signal pride of ownership, command premium pricing reflective of move-in-ready condition, sell faster in competitive multiple-offer situations, and often recover 70-90% of roof replacement costs through increased sale prices.
                  </p>
                  <p>
                    Beyond sale scenarios, roof condition affects neighborhood aesthetics and community standards—Upper Arlington residents expect well-maintained properties that contribute to the area's prestigious reputation. Deteriorating roofs visible from the street detract from neighborhood appearance, potentially impact nearby property values, and contradict the community pride Upper Arlington is known for. Proactive roof replacement before severe deterioration develops protects property values, maintains neighborhood standards, provides peace of mind about your home's protection, and eliminates stressful emergency decisions during inopportune times like harsh winters or spring storm seasons.
                  </p>
                </div>
              </details>

              <details className="bg-white p-6 rounded-xl border-2 border-gray-200 group">
                <summary className="font-bold text-charcoal-900 cursor-pointer text-lg flex items-center justify-between">
                  What's the typical project timeline for Upper Arlington roof replacement?
                  <ArrowRight className="w-5 h-5 text-primary-700 transform group-open:rotate-90 transition-transform" />
                </summary>
                <div className="text-charcoal-700 leading-relaxed mt-4 space-y-3">
                  <p>
                    Most Upper Arlington roof replacements complete in 1-3 days for typical single-family homes (1,500-2,500 square feet) with standard architectural complexity. Ranch-style homes from the 1950s-60s often complete in a single day due to simpler roof lines and easier access, while two-story colonials and homes with complex architectural features (dormers, multiple roof planes, steep pitches) typically require 2-3 days. Historic properties in Old Arlington with intricate details sometimes extend to 3-4 days when preservation considerations demand additional care.
                  </p>
                  <p>
                    Several factors influence timelines: existing roof condition (extensive rotted decking requiring replacement adds time), architectural complexity (custom flashing around chimneys, dormers, or decorative features requires meticulous work), weather conditions (we never compromise quality by working in rain or dangerous conditions), and material selection (specialty products sometimes require additional installation time). We provide specific timeline estimates during your consultation based on your home's unique characteristics and project scope.
                  </p>
                  <p>
                    Our Upper Arlington installations prioritize thoroughness over speed—while we work efficiently, we never rush quality or cut corners to meet arbitrary deadlines. Professional crews arrive promptly, work methodically through all installation steps, perform comprehensive daily cleanup maintaining your property's appearance, and conduct final walkthroughs ensuring complete satisfaction before considering projects finished. Most Upper Arlington homeowners comment on our efficiency—completing high-quality installations faster than expected while exceeding quality expectations and maintaining the respectful, professional presence appropriate for this prestigious community.
                  </p>
                </div>
              </details>
            </div>
          </div>

          <div className="bg-gradient-to-br from-primary-700 to-primary-800 text-white p-8 rounded-xl">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Protect Your Upper Arlington Home?</h2>
              <p className="text-xl mb-6">
                Join hundreds of satisfied Upper Arlington homeowners who trust DTE Roofing for quality, reliability, and exceptional service
              </p>
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div>
                  <div className="text-4xl font-bold mb-2">800+</div>
                  <div className="text-gray-100">Upper Arlington Roofs</div>
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
            Schedule Your Upper Arlington Roof Inspection
          </h2>
          <p className="text-xl text-charcoal-600 mb-8 max-w-2xl mx-auto">
            Contact DTE Roofing today for expert roofing services throughout Upper Arlington
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
            Serving Upper Arlington and all surrounding Central Ohio communities
          </p>
        </div>
      </section>
    </div>
  );
}
