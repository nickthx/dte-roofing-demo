import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Phone, MapPin, Shield } from 'lucide-react';
import SEO from '../../components/SEO';
import SchemaMarkup from '../../components/SchemaMarkup';

export default function GroveCity() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="BEST Roofer Grove City OH – Roof Repair & Replacement near me | DTE Roofing"
        description="Grove City Ohio's trusted roofer. 5-star rated, free inspections, honest diagnostics. Serving Gantz, Jackson Township, Town Center and all Grove City neighborhoods. Call 614-971-6028."
        keywords="roofing Grove City OH, Grove City roofer, roof repair Grove City, roof replacement Grove City, Jackson Township roofing, Grove City roofing contractor, roofer near me Grove City"
        canonical="https://www.dteroofingllc.com/locations/grove-city"
      />
      <SchemaMarkup
        type="location"
        locationName="Grove City"
        pageTitle="BEST Roofer Grove City OH - DTE Roofing LLC"
        pageDescription="Grove City Ohio's trusted roofing company. Serving all Grove City neighborhoods with expert roof repair and replacement."
        pageUrl="https://www.dteroofingllc.com/locations/grove-city"
      />

      <section className="relative bg-gradient-to-br from-charcoal-900 via-charcoal-800 to-charcoal-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="w-6 h-6" />
              <span className="text-lg">Serving Grove City, Ohio</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Grove City Roofers – Expert Roof Repair & Replacement</h1>
            <p className="text-xl text-gray-200 mb-6">
              Your trusted local roofing contractor serving Columbus's second-largest suburb with honest diagnostics, expert repairs, and quality craftsmanship.
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
              <h2 className="text-3xl font-bold text-charcoal-900 mb-6">Grove City's Trusted Roofing Company</h2>
              <p className="text-lg text-charcoal-600 mb-6 leading-relaxed">
                DTE Roofing proudly serves Grove City, Columbus's second-largest suburb with over 40,000 residents, from the historic Gantz area to Jackson Township's rapid development, from Town Center's vibrant core to the expanding southwest corridors along Interstate 71. Located just 20 miles northeast in Hilliard, our team responds quickly to Grove City's roofing needs, understanding the unique challenges facing this dynamic community.
              </p>
              <p className="text-lg text-charcoal-600 mb-6 leading-relaxed">
                Founded in 1852, Grove City has evolved from an agricultural community into one of Central Ohio's fastest-growing suburbs while maintaining small-town character. The city features remarkable housing diversity—from 1950s-1960s ranch homes in Gantz, to 1970s-1980s colonials throughout established areas, to modern Jackson Township developments that have fueled explosive growth since 2000. This varied housing stock creates diverse roofing needs we understand well.
              </p>
              <p className="text-lg text-charcoal-600 mb-6 leading-relaxed">
                Grove City's position within the Big Darby Creek watershed creates unique environmental conditions affecting roofing—enhanced humidity levels from riparian corridors, lush vegetation contributing to debris accumulation and biological growth, and moisture-rich conditions requiring superior ventilation and algae-resistant materials. Our expertise addresses these watershed challenges through specialized approaches.
              </p>

              <div className="bg-primary-50 p-6 rounded-xl border-2 border-primary-200">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="w-8 h-8 text-primary-700" />
                  <h3 className="font-bold text-charcoal-900 text-xl">Why Grove City Homeowners Choose DTE Roofing</h3>
                </div>
                <ul className="space-y-3">
                  {[
                    "Quick response from Hilliard—typically 30-60 minutes to Grove City",
                    "Experience with Big Darby watershed moisture management",
                    "Expertise handling Grove City's diverse housing stock",
                    "Understanding of HOA requirements in newer developments",
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
                <h3 className="text-2xl font-bold text-charcoal-900 mb-6">Complete Roofing Services for Grove City</h3>
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
                    { name: "HOA Compliance Assistance", link: "/contact" },
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
                  One of our owners personally inspects every Grove City roof. No salespeople, no pressure—just honest assessments from experienced professionals.
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
            <h2 className="text-3xl font-bold text-charcoal-900 mb-8">Common Roofing Issues in Grove City</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                <h3 className="text-xl font-bold text-charcoal-900 mb-3">Big Darby Watershed Moisture</h3>
                <p className="text-charcoal-600">
                  Grove City's location within the Big Darby Creek watershed creates elevated humidity and persistent moisture conditions that accelerate algae and moss growth, particularly on north-facing slopes. We address this with algae-resistant shingles, enhanced ventilation, zinc strips, and bi-annual maintenance programs designed for moisture-rich environments.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                <h3 className="text-xl font-bold text-charcoal-900 mb-3">Established Gantz Area Updates</h3>
                <p className="text-charcoal-600">
                  The historic Gantz area and central Grove City neighborhoods from the 1950s-1970s feature ranch-style homes now requiring replacement. These properties often lack modern ventilation and ice protection. We approach replacement comprehensively—upgrading ventilation, adding ice and water shield, and addressing insulation deficiencies.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                <h3 className="text-xl font-bold text-charcoal-900 mb-3">Jackson Township Builder-Grade Upgrades</h3>
                <p className="text-charcoal-600">
                  Jackson Township's newer developments feature builder-grade roofing now showing premature aging at 10-20 years. We help homeowners upgrade to premium architectural shingles with enhanced warranties, superior algae resistance for watershed humidity, and improved wind ratings. We also assist with HOA approval processes.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                <h3 className="text-xl font-bold text-charcoal-900 mb-3">Severe Weather Resilience</h3>
                <p className="text-charcoal-600">
                  Grove City experiences spring hailstorms, summer windstorms exceeding 60 mph, and harsh winters with ice dam potential. We install impact-resistant Class 4 shingles, enhanced wind-rated materials certified to 130 mph, and comprehensive ice and water shield to protect your home from Ohio's severe weather.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-charcoal-900 mb-8 text-center">Grove City Neighborhoods We Serve</h2>
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                "Gantz",
                "Jackson Township",
                "Town Center",
                "Southwest Area",
                "Scioto Grove",
                "White Oak",
                "Pinnacle Club",
                "Buckeye Woods",
                "Derby Hill",
                "Demorest Farms",
                "Hoover Crossing",
                "Indian Run",
                "Jackson Pike",
                "Westbury",
                "Darbydale",
                "Beulah Park"
              ].map((neighborhood, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg text-center border border-gray-200 hover:border-primary-700 hover:bg-primary-50 transition-all">
                  <span className="text-charcoal-700 font-medium">{neighborhood}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-charcoal-900 mb-8">Grove City Roofing FAQs</h2>
            <div className="space-y-6">
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-charcoal-900 mb-3">What makes Grove City roofing different from other suburbs?</h3>
                <p className="text-charcoal-700">
                  Grove City's position within the Big Darby Creek watershed creates higher humidity and persistent moisture that accelerates algae and moss growth compared to drier suburbs. Additionally, the city's diverse housing stock—from 1950s Gantz ranches to modern Jackson Township developments—requires contractors who understand varied challenges across different eras and construction types.
                </p>
              </div>
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-charcoal-900 mb-3">How long does a typical Grove City roof replacement take?</h3>
                <p className="text-charcoal-700">
                  Most Grove City roof replacements complete in 1-2 days. Single-story ranch homes common in the Gantz area often complete in a single day. Two-story homes or those with complex architectural features typically require 2 days. We provide specific timeline estimates during consultations based on your home's characteristics.
                </p>
              </div>
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-charcoal-900 mb-3">Do I need HOA approval for roofing work in Grove City?</h3>
                <p className="text-charcoal-700">
                  Many Jackson Township and newer Grove City developments maintain HOAs with architectural guidelines. Requirements typically include submitting applications, specifying materials and colors, and waiting 2-4 weeks for approval. We assist homeowners navigating HOA processes, recommending compliant materials with proven approval histories in your specific community.
                </p>
              </div>
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-charcoal-900 mb-3">What roof maintenance is necessary for Grove City homes?</h3>
                <p className="text-charcoal-700">
                  Grove City's watershed environment makes bi-annual professional inspections (spring and fall) especially important. Maintenance should include debris removal, gutter cleaning, moss and algae treatment, minor repairs, and flashing inspection. Our preventative maintenance programs provide scheduled professional care that prevents the accelerated deterioration common in watershed environments.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-primary-700 to-primary-800 text-white p-8 rounded-xl">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Protect Your Grove City Home?</h2>
              <p className="text-xl mb-6">
                Your neighbors trust us—see why DTE Roofing is Grove City's choice for quality roofing
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
        </div>
      </section>
    </div>
  );
}
