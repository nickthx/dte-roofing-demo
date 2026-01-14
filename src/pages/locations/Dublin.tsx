import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Phone, MapPin, Shield } from 'lucide-react';
import SEO from '../../components/SEO';
import SchemaMarkup from '../../components/SchemaMarkup';

export default function Dublin() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="BEST Roofer Dublin OH – Roof Repair & Replacement near me | DTE Roofing"
        description="Dublin Ohio's trusted roofer. Premium materials, expert craftsmanship, 5-star rated. Free inspections for Muirfield, Tartan Fields, Bridge Park and all Dublin neighborhoods. Call 614-971-6028."
        keywords="roofing Dublin OH, Dublin roofer, roof repair Dublin, roof replacement Dublin, Dublin roofing contractor, roofer near me Dublin"
        canonical="https://www.dteroofingllc.com/locations/dublin"
      />
      <SchemaMarkup
        type="location"
        locationName="Dublin"
        pageTitle="BEST Roofer Dublin OH - DTE Roofing LLC"
        pageDescription="Dublin Ohio's trusted roofing company. Premium materials and expert craftsmanship for all Dublin neighborhoods."
        pageUrl="https://www.dteroofingllc.com/locations/dublin"
      />

      <section className="relative bg-gradient-to-br from-charcoal-900 via-charcoal-800 to-charcoal-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="w-6 h-6" />
              <span className="text-lg">Serving Dublin, Ohio</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Dublin Roofers – Expert Roof Repair & Replacement</h1>
            <p className="text-xl text-gray-200 mb-6">
              Premium roofing services for Dublin's finest homes. Honest diagnostics, quality materials, and expert craftsmanship from your neighbors in Hilliard.
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
              <h2 className="text-3xl font-bold text-charcoal-900 mb-6">Dublin's Trusted Roofing Company</h2>
              <p className="text-lg text-charcoal-600 mb-6 leading-relaxed">
                Dublin is known for its beautiful homes and commitment to quality, and DTE Roofing is proud to uphold that standard. Based just minutes away in Hilliard, we serve Dublin homeowners with the same care and attention we give our own neighbors. From historic Bridge Street to Muirfield Village to newer developments in Jerome Township, we understand the high expectations of Dublin homeowners.
              </p>
              <p className="text-lg text-charcoal-600 mb-6 leading-relaxed">
                Founded by two brothers from Hilliard, DTE Roofing brings a different approach to Dublin roofing: honest diagnostics first. We will tell you if your roof needs a simple repair rather than pushing an unnecessary replacement. This integrity has earned us a perfect 5-star rating and zero negative reviews.
              </p>
              <p className="text-lg text-charcoal-600 mb-6 leading-relaxed">
                Dublin homes often feature complex rooflines, premium materials, and strict HOA requirements. We have experience working with Dublin HOAs, matching existing architectural shingles, and handling the permitting process efficiently. Your home is a significant investment—we treat it that way.
              </p>

              <div className="bg-primary-50 p-6 rounded-xl border-2 border-primary-200">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="w-8 h-8 text-primary-700" />
                  <h3 className="font-bold text-charcoal-900 text-xl">Why Dublin Homeowners Choose DTE Roofing</h3>
                </div>
                <ul className="space-y-3">
                  {[
                    "Premium materials matched to Dublin home standards",
                    "Experience with Dublin HOA requirements",
                    "Owners personally oversee every Dublin project",
                    "Respect for property and landscaping",
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
                <h3 className="text-2xl font-bold text-charcoal-900 mb-6">Complete Roofing Services for Dublin</h3>
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
                    { name: "Architectural Shingle Matching", link: "/services/roof-replacement" },
                    { name: "Cedar Shake and Premium Materials", link: "/services/roof-replacement" }
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
                  One of our owners personally inspects every Dublin roof. No salespeople, no pressure—just honest assessments and detailed recommendations.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center text-primary-700 hover:text-primary-800 font-semibold"
                >
                  Schedule Consultation <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-charcoal-900 mb-8 text-center">Dublin Neighborhoods We Serve</h2>
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                "Historic Dublin",
                "Bridge Park",
                "Muirfield Village",
                "Tartan Fields",
                "Ballantrae",
                "Amberleigh",
                "Asherton",
                "Bellepoint",
                "Brandon",
                "Bryson Cove",
                "Donegal Cliffs",
                "Earlington Village",
                "Glacier Ridge",
                "Indian Run",
                "Riverside Glen",
                "Shannon Glen"
              ].map((community, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg text-center border border-gray-200 hover:border-primary-700 hover:bg-primary-50 transition-all">
                  <span className="text-charcoal-700 font-medium">{community}</span>
                </div>
              ))}
            </div>
            <p className="text-center text-charcoal-600 mt-6">
              Serving all Dublin neighborhoods with the same commitment to quality and service.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-charcoal-900 mb-8">Common Roofing Issues in Dublin</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                <h3 className="text-xl font-bold text-charcoal-900 mb-3">Complex Rooflines and Multiple Pitches</h3>
                <p className="text-charcoal-600">
                  Many Dublin homes feature complex architectural designs with multiple roof pitches, valleys, and dormers. These areas require expert flashing and installation to prevent leaks. We have extensive experience with Dublin's diverse home styles and ensure every detail is handled correctly.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                <h3 className="text-xl font-bold text-charcoal-900 mb-3">HOA Requirements and Material Matching</h3>
                <p className="text-charcoal-600">
                  Dublin HOAs often have strict requirements for roofing materials, colors, and styles. We work with HOA guidelines and can match existing architectural shingles to maintain neighborhood aesthetics. We handle the approval process to make your project stress-free.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                <h3 className="text-xl font-bold text-charcoal-900 mb-3">Storm Damage in Exposed Areas</h3>
                <p className="text-charcoal-600">
                  Dublin's location exposes homes to strong storms from the west. We frequently repair wind damage, hail damage, and fallen tree limbs. Our team responds quickly to storm damage calls and can document everything for your insurance claim using Xactimate.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                <h3 className="text-xl font-bold text-charcoal-900 mb-3">Aging Roofs in Established Neighborhoods</h3>
                <p className="text-charcoal-600">
                  Many Dublin neighborhoods built in the 1980s-2000s now have roofs reaching 20-30 years old. We help homeowners evaluate whether repairs can extend roof life or if replacement is the smarter investment, always giving honest recommendations.
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="bg-gray-50 p-8 rounded-xl">
              <h2 className="text-2xl font-bold text-charcoal-900 mb-6">The DTE Difference in Dublin</h2>
              <div className="space-y-6">
                {[
                  {
                    title: "Premium Materials",
                    description: "We use only the highest quality roofing materials from trusted manufacturers like GAF"
                  },
                  {
                    title: "Owner Oversight",
                    description: "Donovan or Mitchell personally oversees every Dublin project from start to finish"
                  },
                  {
                    title: "Attention to Detail",
                    description: "Meticulous work that respects your property and exceeds expectations"
                  },
                  {
                    title: "Property Protection",
                    description: "Careful protection of landscaping, driveways, and adjacent areas"
                  },
                  {
                    title: "Thorough Cleanup",
                    description: "Complete cleanup with magnetic sweeps to remove all nails and debris"
                  },
                  {
                    title: "Strong Warranties",
                    description: "Workmanship warranty plus manufacturer material warranties"
                  }
                ].map((item, index) => (
                  <div key={index}>
                    <h3 className="font-bold text-charcoal-900 mb-2 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-primary-700" />
                      {item.title}
                    </h3>
                    <p className="text-charcoal-600 pl-7">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-primary-50 p-8 rounded-xl">
              <h2 className="text-2xl font-bold text-charcoal-900 mb-6">Dublin Customer Reviews</h2>
              <div className="space-y-6">
                {[
                  {
                    name: "Robert & Anne M.",
                    area: "Muirfield Village",
                    text: "Outstanding quality and professionalism. Our new roof is beautiful and the crew was respectful of our property. Highly recommend!"
                  },
                  {
                    name: "Chris D.",
                    area: "Tartan Fields",
                    text: "DTE Roofing handled our insurance claim and storm damage repair perfectly. Professional from start to finish."
                  },
                  {
                    name: "Jennifer L.",
                    area: "Bridge Park",
                    text: "Excellent communication, quality work, and fair pricing. They made the whole process easy and stress-free."
                  }
                ].map((review, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg border border-gray-200">
                    <p className="text-charcoal-700 mb-4 italic">"{review.text}"</p>
                    <div className="font-bold text-charcoal-900">{review.name}</div>
                    <div className="text-charcoal-600 text-sm">{review.area}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-primary-700 to-primary-800 text-white p-8 rounded-xl">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Trusted by Dublin Homeowners</h2>
              <p className="text-xl mb-6">
                Your neighbors trust us—see why DTE Roofing is Dublin's choice for premium roofing
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
            Schedule Your Dublin Roof Inspection
          </h2>
          <p className="text-xl text-charcoal-600 mb-8 max-w-2xl mx-auto">
            Contact DTE Roofing today for premium roofing services in Dublin
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
