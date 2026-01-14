import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Phone, MapPin, Shield } from 'lucide-react';
import SEO from '../../components/SEO';
import SchemaMarkup from '../../components/SchemaMarkup';

export default function Gahanna() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="BEST Roofer Gahanna OH – Roof Repair & Replacement near me | DTE Roofing"
        description="Gahanna Ohio's trusted roofer. 5-star rated, free inspections, honest diagnostics. Serving Rocky Fork, Old Gahanna, Mill Creek and all Gahanna neighborhoods. Call 614-971-6028."
        keywords="roofing Gahanna OH, Gahanna roofer, roof repair Gahanna, roof replacement Gahanna, Rocky Fork roofing, Gahanna roofing contractor, roofer near me Gahanna"
        canonical="https://www.dteroofingllc.com/locations/gahanna"
      />
      <SchemaMarkup
        type="location"
        locationName="Gahanna"
        pageTitle="BEST Roofer Gahanna OH - DTE Roofing LLC"
        pageDescription="Gahanna Ohio's trusted roofing company. Serving all Gahanna neighborhoods with expert roof repair and replacement."
        pageUrl="https://www.dteroofingllc.com/locations/gahanna"
      />

      <section className="relative bg-gradient-to-br from-charcoal-900 via-charcoal-800 to-charcoal-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="w-6 h-6" />
              <span className="text-lg">Serving Gahanna, Ohio</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Gahanna Roofers – Expert Roof Repair & Replacement</h1>
            <p className="text-xl text-gray-200 mb-6">
              Your trusted local roofing contractor serving Gahanna's "City of Character" with honest diagnostics, expert repairs, and quality craftsmanship.
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
              <h2 className="text-3xl font-bold text-charcoal-900 mb-6">Gahanna's Trusted Roofing Company</h2>
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
                    "Fast response from Hilliard—typically same day for Gahanna",
                    "Experience with Big Walnut Creek moisture management",
                    "Expertise handling Gahanna's diverse housing stock",
                    "Understanding of creek-corridor environmental factors",
                    "Honest diagnostics—we fix only what is needed",
                    "Perfect 5-star rating with zero negative reviews"
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
                    { name: "Free Roof Inspections", link: "/services/roof-inspection" },
                    { name: "Roof Repair", link: "/services/roof-repair" },
                    { name: "Roof Replacement", link: "/services/roof-replacement" },
                    { name: "24/7 Emergency Services", link: "/services/emergency-services" },
                    { name: "Storm Damage Repair", link: "/services/emergency-services" },
                    { name: "Insurance Claims Assistance", link: "/contact" },
                    { name: "Gutter Services", link: "/services/gutters" },
                    { name: "Siding Installation", link: "/services/siding" },
                    { name: "Preventative Maintenance", link: "/services/roof-maintenance" },
                    { name: "Algae and Moss Treatment", link: "/services/roof-maintenance" },
                    { name: "Ventilation Upgrades", link: "/services/roof-repair" }
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary-700 flex-shrink-0 mt-1" />
                      <Link to={item.link} className="text-charcoal-700 hover:text-primary-700 transition-colors">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg">
                <h3 className="font-bold text-charcoal-900 mb-2 text-lg">Free Roofing Estimates</h3>
                <p className="text-charcoal-700 mb-4">
                  One of our owners personally inspects every Gahanna roof. No salespeople, no pressure—just honest assessments from experienced professionals.
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
            <h2 className="text-3xl font-bold text-charcoal-900 mb-8">Common Roofing Issues in Gahanna</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                <h3 className="text-xl font-bold text-charcoal-900 mb-3">Big Walnut Creek Moisture Management</h3>
                <p className="text-charcoal-600">
                  Gahanna's position along Big Walnut Creek and Blacklick Creek creates elevated humidity levels compared to western suburbs, promoting faster algae and moss growth particularly on north-facing roof slopes. Creek corridors generate morning fog and persistent moisture that accelerates organic growth. We address this with algae-resistant shingles, enhanced ventilation, and proactive maintenance programs.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                <h3 className="text-xl font-bold text-charcoal-900 mb-3">Historic Old Gahanna Preservation</h3>
                <p className="text-charcoal-600">
                  Old Gahanna near Mill Street and the Creekside district features charming historic homes from the early to mid-20th century with steep roof pitches and limited attic space. We specialize in historic home roofing that respects architectural character while incorporating modern building science and proper ventilation solutions.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                <h3 className="text-xl font-bold text-charcoal-900 mb-3">Rocky Fork Builder-Grade Upgrades</h3>
                <p className="text-charcoal-600">
                  Rocky Fork and surrounding newer developments feature builder-grade roofing materials now showing premature aging at 15-20 years. We help homeowners upgrade to premium architectural shingles with enhanced warranties, superior algae resistance, and improved wind ratings that perform better in Gahanna's humid climate.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                <h3 className="text-xl font-bold text-charcoal-900 mb-3">Established Neighborhood Updates</h3>
                <p className="text-charcoal-600">
                  Lincoln Estates, Bridgeview, and Academy Woods face widespread roof replacement cycles as 1970s-1980s roofs reach end of life. We approach these comprehensively—upgrading ventilation, installing proper ice and water shield, and addressing insulation deficiencies that cause ice dams and energy inefficiency.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-charcoal-900 mb-8 text-center">Gahanna Neighborhoods We Serve</h2>
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                "Rocky Fork",
                "Old Gahanna",
                "Mill Creek",
                "Bridgeview",
                "Lincoln Estates",
                "Academy Woods",
                "Woodside Green",
                "Clark Hall",
                "Hunters Bend",
                "Heartland Meadows",
                "Snouffer Farms",
                "Lambton Park",
                "Taylor Farm",
                "East Gahanna",
                "Creekside District",
                "Jefferson Township"
              ].map((neighborhood, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg text-center border border-gray-200 hover:border-primary-700 hover:bg-primary-50 transition-all">
                  <span className="text-charcoal-700 font-medium">{neighborhood}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-charcoal-900 mb-8">Gahanna Roofing FAQs</h2>
            <div className="space-y-6">
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-charcoal-900 mb-3">Why do Gahanna roofs get more algae and moss growth?</h3>
                <p className="text-charcoal-700">
                  Gahanna's proximity to Big Walnut Creek and Blacklick Creek creates elevated humidity and persistent morning fog that promotes algae and moss colonization. Dense tree canopy provides shade that slows moisture evaporation. We address this with algae-resistant shingles featuring copper granules, zinc strips, enhanced ventilation, and bi-annual maintenance programs.
                </p>
              </div>
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-charcoal-900 mb-3">What roofing materials work best in Gahanna's humid climate?</h3>
                <p className="text-charcoal-700">
                  We recommend premium architectural shingles with algae-resistance technology like GAF Timberline HDZ with StainGuard, CertainTeed Landmark with StreakFighter, or Owens Corning Duration with algae resistance. These products incorporate copper granules that release ions during rainfall, creating an environment hostile to algae growth.
                </p>
              </div>
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-charcoal-900 mb-3">How quickly can you respond to emergencies in Gahanna?</h3>
                <p className="text-charcoal-700">
                  We provide same-day emergency response for Gahanna customers. From our Hilliard location, we typically reach Gahanna within 2-4 hours for urgent situations including active leaks, storm damage, or structural concerns. Our emergency response focuses on immediate damage mitigation and documentation for insurance claims.
                </p>
              </div>
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-charcoal-900 mb-3">Do you help with insurance claims for storm damage?</h3>
                <p className="text-charcoal-700">
                  Yes, we provide comprehensive insurance claim assistance including thorough damage documentation with photos and measurements, written assessments in insurance-friendly terminology, attendance at adjuster inspections, and advocacy for fair settlements. Our Xactimate expertise helps ensure your claim covers all legitimate damage.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-primary-700 to-primary-800 text-white p-8 rounded-xl">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Protect Your Gahanna Home?</h2>
              <p className="text-xl mb-6">
                Your neighbors trust us—see why DTE Roofing is Gahanna's choice for quality roofing
              </p>
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div>
                  <div className="text-4xl font-bold mb-2">5.0</div>
                  <div className="text-gray-100">Google Rating</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">92+</div>
                  <div className="text-gray-100">5-Star Reviews</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">0</div>
                  <div className="text-gray-100">Negative Reviews</div>
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
        </div>
      </section>
    </div>
  );
}
