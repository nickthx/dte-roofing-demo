import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Phone, MapPin, Shield } from 'lucide-react';
import SEO from '../../components/SEO';
import SchemaMarkup from '../../components/SchemaMarkup';

export default function NewAlbany() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Roofing Services in New Albany, Ohio - Expert Roof Repair & Replacement | DTE Roofing"
        description="Professional roofing services in New Albany, OH. Local experts serving New Albany Country Club, Hampstead, Fenway & all New Albany neighborhoods. Free estimates. Call 614-971-6028."
        keywords="roofing New Albany OH, New Albany roofer, roof repair New Albany, roof replacement New Albany, New Albany Country Club roofing, New Albany roofing contractor"
        canonical="https://www.dteroofingllc.com/locations/new-albany"
      />
      <SchemaMarkup
        type="location"
        locationName="New Albany"
        pageTitle="Roofing Services in New Albany, OH - DTE Roofing LLC"
        pageDescription="Professional roofing services in New Albany, OH. Local experts serving all New Albany neighborhoods with roof repair, replacement, and installation."
        pageUrl="https://www.dteroofingllc.com/locations/new-albany"
      />

      <section className="relative bg-gradient-to-br from-charcoal-900 via-charcoal-800 to-charcoal-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="w-6 h-6" />
              <span className="text-lg">Serving New Albany, Ohio</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Roofing Services in New Albany, Ohio</h1>
            <p className="text-xl text-gray-200 mb-6">
              Your trusted local roofing contractor serving all New Albany neighborhoods with expert roof repair, replacement, and installation services
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
              <h2 className="text-3xl font-bold text-charcoal-900 mb-6">New Albany's Premier Roofing Specialists</h2>
              <p className="text-lg text-charcoal-600 mb-6 leading-relaxed">
                DTE Roofing proudly serves New Albany's distinctive community, from the prestigious New Albany Country Club to Hampstead's elegant estates, Fenway's family neighborhoods to the Village Center's commercial district. Located approximately 30 miles west in Hilliard, our team understands that New Albany represents Central Ohio's pinnacle of planned community excellence, where architectural standards, property values, and homeowner expectations demand nothing less than superior craftsmanship.
              </p>
              <p className="text-lg text-charcoal-600 mb-6 leading-relaxed">
                Developed primarily by The New Albany Company beginning in the 1990s, this master-planned community features rigorous architectural review processes, comprehensive design guidelines, and exceptional attention to aesthetic detail. These high standards extend to every exterior element including roofing—where material selection, color coordination, and installation quality directly impact property values and community character. Our experience with New Albany's exacting requirements ensures compliant, premium-quality installations.
              </p>
              <p className="text-lg text-charcoal-600 mb-6 leading-relaxed">
                New Albany homes represent significant investments with median values substantially exceeding regional averages. Premium construction demands premium roofing services—contractors who understand luxury home nuances, work seamlessly with architectural review boards, source highest-quality materials, and deliver impeccable installations worthy of New Albany's reputation. Our portfolio throughout New Albany demonstrates our capability to meet and exceed these elevated standards.
              </p>

              <div className="bg-primary-50 p-6 rounded-xl border-2 border-primary-200">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="w-8 h-8 text-primary-700" />
                  <h3 className="font-bold text-charcoal-900 text-xl">Why New Albany Homeowners Choose DTE Roofing</h3>
                </div>
                <ul className="space-y-3">
                  {[
                    'Experience navigating New Albany Company architectural review processes',
                    'Understanding of premium materials and luxury home requirements',
                    'White-glove service matching New Albany\'s standards of excellence',
                    'Meticulous attention to aesthetic details and property values',
                    'Portfolio of successful New Albany installations',
                    'Fully licensed, insured, and committed to exceeding expectations'
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
                <h3 className="text-2xl font-bold text-charcoal-900 mb-6">Complete Roofing Services for New Albany</h3>
                <ul className="space-y-3">
                  {[
                    { name: 'Premium Roof Replacement', link: '/services/roof-replacement' },
                    { name: 'Roof Repair & Maintenance', link: '/services/roof-repair' },
                    { name: 'Luxury Home Roof Installation', link: '/services/roof-installation' },
                    { name: 'Comprehensive Roof Inspections', link: '/services/roof-inspection' },
                    { name: 'Storm Damage Restoration', link: '/services/storm-damage' },
                    { name: '24/7 Emergency Services', link: '/services/emergency-services' },
                    { name: 'Premium Gutter Systems', link: '/services/gutters' },
                    { name: 'Designer Siding Installation', link: '/services/siding' },
                    { name: 'Preventative Maintenance Programs', link: '/services/roof-maintenance' },
                    { name: 'Architectural Review Board Assistance', link: '/contact' },
                    { name: 'Insurance Claim Management', link: '/contact' }
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
                <h3 className="font-bold text-charcoal-900 mb-2 text-lg">Free Premium Roofing Estimates</h3>
                <p className="text-charcoal-700 mb-4">
                  We provide detailed consultations and no-obligation estimates for all New Albany roofing projects, including architectural review assistance.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center text-primary-700 hover:text-primary-800 font-semibold"
                >
                  Request Free Consultation <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-charcoal-900 mb-6">New Albany Roofing Considerations & Premium Solutions</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
                <h3 className="text-xl font-bold text-charcoal-900 mb-4">Architectural Review Board Requirements</h3>
                <p className="text-charcoal-600 mb-4 leading-relaxed">
                  New Albany's comprehensive design guidelines govern every exterior element including roofing materials, colors, styles, and installation methods. The New Albany Company's architectural review process requires detailed submissions showing material specifications, color samples, manufacturer information, and installation plans before approval. Non-compliance risks rejection, project delays, and potential fines—making experienced contractor guidance essential.
                </p>
                <p className="text-charcoal-600 leading-relaxed">
                  We streamline architectural review by providing pre-approved material recommendations, preparing comprehensive submission packages with all required documentation, coordinating with review board timelines to prevent delays, and ensuring installations meet approved specifications exactly. Our New Albany experience means we understand what the review board expects and how to achieve first-submission approval, saving time and frustration for homeowners navigating this process.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
                <h3 className="text-xl font-bold text-charcoal-900 mb-4">Premium Materials & Luxury Home Standards</h3>
                <p className="text-charcoal-600 mb-4 leading-relaxed">
                  New Albany homes demand premium architectural shingles and designer roofing products that complement luxury construction standards. Basic three-tab shingles or entry-level materials appear incongruous with New Albany's aesthetic—homeowners need access to premium brands offering superior performance, enhanced warranties, distinctive profiles, and sophisticated color palettes that harmonize with high-end architecture and maintain exceptional property values.
                </p>
                <p className="text-charcoal-600 leading-relaxed">
                  Our <Link to="/services/roof-replacement" className="text-primary-700 hover:text-primary-800 font-semibold">roof replacement</Link> services showcase premium manufacturers' designer collections—impact-resistant options providing Class 4 hail protection, architectural profiles mimicking slate or cedar shake aesthetics, exclusive colors coordinating with New Albany's refined palette, and extended warranties (up to lifetime coverage) appropriate for luxury home investments. We help homeowners select materials worthy of their properties while ensuring architectural review compliance.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
                <h3 className="text-xl font-bold text-charcoal-900 mb-4">Complex Architecture & Custom Details</h3>
                <p className="text-charcoal-600 mb-4 leading-relaxed">
                  New Albany architecture frequently features complex roof lines with multiple planes, custom dormers, turrets, steep pitches, valleys requiring specialized flashing, and architectural details demanding meticulous installation expertise. These sophisticated designs maximize curb appeal but require contractors experienced with luxury home complexity—improper installation of valleys, insufficient flashing around custom features, or inadequate attention to water management creates expensive failures.
                </p>
                <p className="text-charcoal-600 leading-relaxed">
                  Our installation teams specialize in complex architectural roofing—properly engineered valley systems preventing water infiltration, custom flashing fabrication for unique architectural elements, ice and water shield protection in all critical areas, enhanced ventilation systems appropriate for cathedral ceilings and complex attic configurations. During your <Link to="/services/roof-inspection" className="text-primary-700 hover:text-primary-800 font-semibold">roof inspection</Link>, we evaluate every architectural complexity ensuring installations protect your investment comprehensively.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
                <h3 className="text-xl font-bold text-charcoal-900 mb-4">Property Value Protection & Aesthetic Excellence</h3>
                <p className="text-charcoal-600 mb-4 leading-relaxed">
                  In New Albany's premium real estate market, roof condition and aesthetics directly impact property valuations, marketability, and neighborhood standards. Buyers shopping New Albany expect impeccable exterior condition—dated, deteriorating, or aesthetically mismatched roofs immediately raise concerns about overall property maintenance and trigger aggressive pricing negotiations. Conversely, premium roofing installations enhance perceived value and differentiate properties in competitive markets.
                </p>
                <p className="text-charcoal-600 leading-relaxed">
                  We approach every New Albany project understanding that roofing represents more than weather protection—it's a crucial element of property presentation and value preservation. Our installations prioritize aesthetic excellence through careful material selection coordinating with architectural style, meticulous attention to symmetry and alignment, clean lines enhancing curb appeal, and quality craftsmanship evident in every detail. Many New Albany homeowners report that premium roofing investments recover 80-100% of costs through enhanced property values and faster sales.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-charcoal-900 mb-8 text-center">New Albany Neighborhoods We Serve</h2>
            <p className="text-center text-charcoal-600 mb-8 max-w-3xl mx-auto">
              From New Albany Country Club's premier estates to Fenway's family neighborhoods, DTE Roofing provides expert premium roofing services throughout New Albany's distinctive community.
            </p>
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                'New Albany Country Club',
                'Hampstead',
                'Fenway',
                'Central College',
                'Kitzmiller',
                'York Woods',
                'Market Street',
                'Bevelhymer',
                'Rocky Fork-Blacklick',
                'Forest Park',
                'Central New Albany',
                'Village Center',
                'Learning Campus',
                'Business Park',
                'New Albany Farms',
                'Columbus Metro Area'
              ].map((neighborhood, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg text-center border border-gray-200 hover:border-primary-700 hover:bg-primary-50 transition-all">
                  <span className="text-charcoal-700 font-medium">{neighborhood}</span>
                </div>
              ))}
            </div>
            <p className="text-center text-charcoal-600 mt-6">
              Serving all New Albany neighborhoods and surrounding areas. <Link to="/contact" className="text-primary-700 hover:text-primary-800 font-semibold">Contact us</Link> for your premium roofing consultation.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-charcoal-900 mb-8">Frequently Asked Questions - New Albany Roofing</h2>
            <div className="space-y-4">
              <details className="bg-white p-6 rounded-xl border-2 border-gray-200 group">
                <summary className="font-bold text-charcoal-900 cursor-pointer text-lg flex items-center justify-between">
                  How do I navigate New Albany's architectural review process for roofing?
                  <ArrowRight className="w-5 h-5 text-primary-700 transform group-open:rotate-90 transition-transform" />
                </summary>
                <div className="text-charcoal-700 leading-relaxed mt-4 space-y-3">
                  <p>
                    New Albany's architectural review process, administered by The New Albany Company, requires homeowners to submit detailed applications before beginning exterior work including roofing. Applications must include material specifications with manufacturer names and model numbers, color samples or swatches demonstrating proposed aesthetics, installation plans showing how materials will be applied, photographs of the existing condition, and contractor information demonstrating qualified professional involvement.
                  </p>
                  <p>
                    Review timelines typically span 2-4 weeks from submission to decision, though incomplete applications or materials requiring clarification extend this timeline. The review board evaluates submissions based on design guideline compliance, aesthetic harmony with surrounding properties, material quality standards, and overall community character preservation. Approvals include specific conditions that must be followed exactly—deviations risk compliance issues even after approval.
                  </p>
                  <p>
                    DTE Roofing simplifies this process by preparing comprehensive submission packages with all required documentation, recommending pre-approved materials from our New Albany project experience, coordinating submission timing with your project schedule, and ensuring installations match approved specifications exactly. Our experience means we understand review board expectations and how to achieve efficient approvals, allowing your roofing project to proceed smoothly within New Albany's governance framework.
                  </p>
                </div>
              </details>

              <details className="bg-white p-6 rounded-xl border-2 border-gray-200 group">
                <summary className="font-bold text-charcoal-900 cursor-pointer text-lg flex items-center justify-between">
                  What roofing materials are appropriate for New Albany luxury homes?
                  <ArrowRight className="w-5 h-5 text-primary-700 transform group-open:rotate-90 transition-transform" />
                </summary>
                <div className="text-charcoal-700 leading-relaxed mt-4 space-y-3">
                  <p>
                    New Albany's luxury home market demands premium architectural shingles or designer roofing products that complement high-end construction and meet architectural review standards. We recommend premium manufacturers' top-tier collections featuring impact resistance (Class 4 hail protection), distinctive dimensional profiles creating depth and shadow lines, sophisticated color palettes coordinating with New Albany's refined aesthetics, and extended warranties (30-50 year or lifetime coverage) appropriate for luxury property investments.
                  </p>
                  <p>
                    Popular options include CertainTeed's Landmark Premium and Grand Manor collections offering exceptional aesthetics with lifetime warranties, GAF's Timberline HDZ and Designer Shingles providing superior performance with distinctive appearances, Owens Corning's Duration Premium and Berkshire collections featuring excellent wind and impact resistance, and specialty products like synthetic slate or metal roofing systems for properties seeking truly distinctive aesthetics.
                  </p>
                  <p>
                    Material selection should consider architectural style compatibility—contemporary homes often pair well with clean-lined architectural shingles in modern gray palettes, traditional colonials complement designer shingles mimicking slate in classic colors, transitional architecture benefits from dimensional shingles in sophisticated earth tones. During your consultation, we'll recommend specific products matching your home's architecture, meeting review board standards, and delivering performance worthy of your New Albany investment while staying within your budget parameters.
                  </p>
                </div>
              </details>

              <details className="bg-white p-6 rounded-xl border-2 border-gray-200 group">
                <summary className="font-bold text-charcoal-900 cursor-pointer text-lg flex items-center justify-between">
                  How much should I budget for roof replacement on a New Albany home?
                  <ArrowRight className="w-5 h-5 text-primary-700 transform group-open:rotate-90 transition-transform" />
                </summary>
                <div className="text-charcoal-700 leading-relaxed mt-4 space-y-3">
                  <p>
                    New Albany roof replacement costs typically range from $15,000 to $40,000+ depending on home size, architectural complexity, and material selection. The community's larger average home sizes (many exceeding 3,500 square feet), complex roof lines with multiple planes and custom features, premium material standards, and meticulous installation requirements all contribute to investment levels exceeding typical Central Ohio averages.
                  </p>
                  <p>
                    Basic premium architectural shingles on straightforward New Albany homes might approach the lower end of this range, while designer products on architecturally complex properties with multiple dormers, turrets, steep pitches, or extensive square footage easily reach or exceed the upper range. Specialty materials like synthetic slate, cedar shake alternatives, or metal roofing systems command premium pricing but deliver distinctive aesthetics and exceptional longevity justifying higher initial investments.
                  </p>
                  <p>
                    It's crucial to view New Albany roofing as value investment rather than expense—premium materials and expert installation protect substantial property values, enhance marketability in competitive real estate markets, provide extended warranties minimizing future costs, and contribute to New Albany's distinctive community character. We provide transparent, itemized estimates explaining exactly what your investment includes, helping you make informed decisions appropriate for your specific property and budget while ensuring installations meet New Albany's exacting standards.
                  </p>
                </div>
              </details>

              <details className="bg-white p-6 rounded-xl border-2 border-gray-200 group">
                <summary className="font-bold text-charcoal-900 cursor-pointer text-lg flex items-center justify-between">
                  Do you offer maintenance programs for New Albany homes?
                  <ArrowRight className="w-5 h-5 text-primary-700 transform group-open:rotate-90 transition-transform" />
                </summary>
                <div className="text-charcoal-700 leading-relaxed mt-4 space-y-3">
                  <p>
                    Yes, our <Link to="/services/roof-maintenance" className="text-primary-700 hover:text-primary-800 font-semibold">preventative maintenance programs</Link> are particularly valuable for New Albany homeowners seeking to protect premium roofing investments and maintain impeccable property condition. Programs include bi-annual professional inspections (spring and fall), debris removal preventing moisture retention and drainage issues, moss and algae treatment preserving roof aesthetics, minor repair addressing small issues before escalation, gutter cleaning ensuring proper water management, and detailed condition reports documenting roof health over time.
                  </p>
                  <p>
                    Regular maintenance extends premium roofing lifespan significantly—well-maintained New Albany roofs commonly exceed manufacturer warranty periods by 20-30% through proactive care preventing deterioration. This protection proves especially valuable for New Albany's complex architectural roofing where unaddressed minor issues in valleys, around custom features, or at flashing locations can escalate into expensive damage requiring major repairs or premature replacement.
                  </p>
                  <p>
                    Our maintenance programs provide peace of mind that your substantial roofing investment receives professional attention preventing problems, documentation of condition useful for insurance purposes or property sales, priority scheduling for any needed repairs, and the satisfaction of maintaining your New Albany home's exterior to the highest standards. Many New Albany homeowners find scheduled maintenance more convenient than remembering seasonal care themselves while ensuring professional expertise identifies potential concerns early.
                  </p>
                </div>
              </details>
            </div>
          </div>

          <div className="bg-gradient-to-br from-primary-700 to-primary-800 text-white p-8 rounded-xl">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Protect Your New Albany Investment</h2>
              <p className="text-xl mb-6">
                Join discerning New Albany homeowners who trust DTE Roofing for premium quality, meticulous craftsmanship, and exceptional service
              </p>
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div>
                  <div className="text-4xl font-bold mb-2">150+</div>
                  <div className="text-gray-100">New Albany Premium Roofs</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">100%</div>
                  <div className="text-gray-100">Review Board Approval Rate</div>
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
                Schedule Premium Consultation <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-charcoal-900 mb-6">
            Schedule Your New Albany Roofing Consultation
          </h2>
          <p className="text-xl text-charcoal-600 mb-8 max-w-2xl mx-auto">
            Contact DTE Roofing today for premium roofing services throughout New Albany
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
              Request Premium Estimate <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
          <p className="text-charcoal-600 mt-6">
            Serving New Albany and all surrounding Central Ohio communities
          </p>
        </div>
      </section>
    </div>
  );
}
