import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Phone, MapPin, Shield } from 'lucide-react';
import SEO from '../../components/SEO';
import SchemaMarkup from '../../components/SchemaMarkup';

export default function Hilliard() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="BEST Roofer Hilliard OH – Roof Repair & Replacement near me | DTE Roofing"
        description="Hilliard's hometown roofers. Founded by two Hilliard Davidson grads, DTE Roofing delivers honest inspections & expert repairs. 5-star rated. Call 614-971-6028."
        keywords="roofing Hilliard OH, Hilliard roofer, roof repair Hilliard, roof replacement Hilliard, Hilliard roofing contractor, roofer near me Hilliard"
        canonical="https://www.dteroofingllc.com/locations/hilliard"
      />
      <SchemaMarkup
        type="location"
        locationName="Hilliard"
        pageTitle="BEST Roofer Hilliard OH - DTE Roofing LLC"
        pageDescription="Hilliard's hometown roofing company. Founded by Hilliard Davidson graduates, serving all Hilliard neighborhoods with expert roof repair and replacement."
        pageUrl="https://www.dteroofingllc.com/locations/hilliard"
      />

      <section className="relative bg-gradient-to-br from-charcoal-900 via-charcoal-800 to-charcoal-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="w-6 h-6" />
              <span className="text-lg">Serving Hilliard, Ohio</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Hilliard Roofers – Expert Roof Repair & Replacement</h1>
            <p className="text-xl text-gray-200 mb-6">
              Your hometown roofing contractor. Founded by two Hilliard Davidson graduates, DTE Roofing delivers honest diagnostics and expert craftsmanship to our neighbors.
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
              <h2 className="text-3xl font-bold text-charcoal-900 mb-6">Hilliard's Hometown Roofing Company</h2>
              <p className="text-lg text-charcoal-600 mb-6 leading-relaxed">
                DTE Roofing is not just another contractor serving Hilliard—we are from here. Founders Donovan and Mitchell grew up in Hilliard and graduated from Hilliard Davidson High School. Our office at 615 Hilliard Rome Road means we are minutes from anywhere in town, whether you are in Old Hilliard near the historic downtown, the established neighborhoods off Cemetery Road, or the newer developments along Cosgray Road.
              </p>
              <p className="text-lg text-charcoal-600 mb-6 leading-relaxed">
                Hilliard has grown tremendously over the years, transforming from a small town into one of Central Ohio's most desirable communities. This growth means diverse housing stock with different roofing needs: historic homes in Old Hilliard requiring careful preservation approaches, 1980s-90s builds in neighborhoods like Hilliard Estates and Britton Farms now reaching the age where original roofs need replacement, and newer construction in areas like Scioto Reserve where builder-grade materials may already be showing wear.
              </p>
              <p className="text-lg text-charcoal-600 mb-6 leading-relaxed">
                We understand Hilliard's specific challenges: the wind exposure from open farmland to the west, the mature tree canopy in older neighborhoods causing debris accumulation and shade-related moss growth, and the strict HOA requirements in many subdivisions. As locals, we know the permitting process with the City of Hilliard and can navigate it efficiently for you.
              </p>

              <div className="bg-primary-50 p-6 rounded-xl border-2 border-primary-200">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="w-8 h-8 text-primary-700" />
                  <h3 className="font-bold text-charcoal-900 text-xl">Why Hilliard Homeowners Choose DTE Roofing</h3>
                </div>
                <ul className="space-y-3">
                  {[
                    "Founded by Hilliard Davidson graduates—we are your neighbors",
                    "Office on Hilliard Rome Rd—fastest response times in town",
                    "Deep knowledge of Hilliard neighborhoods and housing styles",
                    "Experience with Hilliard HOA requirements and city permits",
                    "Honest diagnostics—we fix only what is needed",
                    "Perfect 5-star rating from Hilliard customers"
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
                <h3 className="text-2xl font-bold text-charcoal-900 mb-6">Complete Roofing Services for Hilliard</h3>
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
                    { name: "Ventilation Upgrades", link: "/services/roof-repair" },
                    { name: "Flashing Repair", link: "/services/roof-repair" }
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
                  As Hilliard locals, one of our owners personally inspects every roof. No salespeople, no pressure—just honest assessments from your neighbors.
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
            <h2 className="text-3xl font-bold text-charcoal-900 mb-8 text-center">Hilliard Neighborhoods We Serve</h2>
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                "Old Hilliard",
                "Hilliard Estates",
                "Britton Farms",
                "Heritage Lakes",
                "Hoffman Farms",
                "Hayden Run",
                "Scioto Reserve",
                "Bradley Farms",
                "Tanglewood",
                "Ridgewood",
                "Homestead",
                "Crossing at Scioto",
                "Darby Glen",
                "Schirm Farms",
                "Wellington",
                "Mill Run"
              ].map((neighborhood, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg text-center border border-gray-200 hover:border-primary-700 hover:bg-primary-50 transition-all">
                  <span className="text-charcoal-700 font-medium">{neighborhood}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-charcoal-900 mb-8">Common Roofing Issues in Hilliard</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                <h3 className="text-xl font-bold text-charcoal-900 mb-3">Aging Roofs in Established Neighborhoods</h3>
                <p className="text-charcoal-600">
                  Many homes in Hilliard Estates, Britton Farms, and similar 1980s-90s developments have original roofs now 30-40 years old. These roofs are past their expected lifespan and often show curling shingles, granule loss, and compromised flashing. We help homeowners determine whether repairs can extend roof life or if replacement is the smarter investment.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                <h3 className="text-xl font-bold text-charcoal-900 mb-3">Wind Damage from Western Exposure</h3>
                <p className="text-charcoal-600">
                  Hilliard's location on the western edge of Columbus means storms roll in with full force across open farmland. We frequently repair wind-lifted shingles, damaged ridge caps, and blown-off vents—especially on west-facing roof slopes. After major storms, we offer priority response for Hilliard customers.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                <h3 className="text-xl font-bold text-charcoal-900 mb-3">Ice Dams and Ventilation Problems</h3>
                <p className="text-charcoal-600">
                  Ohio winters create ice dam risks, especially on north-facing slopes and in older homes with inadequate attic ventilation. Proper ventilation prevents warm air from melting snow unevenly and causing ice buildup at eaves. We assess ventilation during every inspection and recommend improvements when needed.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                <h3 className="text-xl font-bold text-charcoal-900 mb-3">Builder-Grade Materials in Newer Homes</h3>
                <p className="text-charcoal-600">
                  Some newer Hilliard subdivisions were built with minimum-spec roofing materials that do not hold up well to Ohio's temperature swings. We see premature wear, poor sealing, and ventilation shortcuts. If your newer home has roof issues, we can identify what went wrong and fix it properly.
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="bg-gray-50 p-8 rounded-xl">
              <h2 className="text-2xl font-bold text-charcoal-900 mb-6">Why Hilliard Residents Choose Us</h2>
              <div className="space-y-6">
                {[
                  {
                    title: "We Are Your Neighbors",
                    description: "Founded by Hilliard Davidson grads with our office on Hilliard Rome Road"
                  },
                  {
                    title: "Honest Diagnostics",
                    description: "We only recommend repairs that are actually needed—no upselling"
                  },
                  {
                    title: "Quality Materials",
                    description: "GAF certified contractor using premium materials built for Ohio weather"
                  },
                  {
                    title: "Fair Pricing",
                    description: "Detailed written estimates with no hidden fees or surprises"
                  },
                  {
                    title: "Strong Warranties",
                    description: "Workmanship warranty plus manufacturer material warranties"
                  },
                  {
                    title: "Insurance Expertise",
                    description: "We help document storm damage and work with your insurance company"
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
              <h2 className="text-2xl font-bold text-charcoal-900 mb-6">Hilliard Customer Reviews</h2>
              <div className="space-y-6">
                {[
                  {
                    name: "Tom & Karen S.",
                    area: "Britton Farms",
                    text: "DTE Roofing replaced our entire roof last year. The crew was professional, the cleanup was thorough, and the roof looks fantastic!"
                  },
                  {
                    name: "James P.",
                    area: "Hilliard Estates",
                    text: "After storm damage, they came out the same day to assess and tarp our roof. The permanent repair was completed quickly and professionally."
                  },
                  {
                    name: "Michelle T.",
                    area: "Old Hilliard",
                    text: "Honest, reliable, and fairly priced. They helped us through the insurance claim process and our new roof is beautiful!"
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
              <h2 className="text-3xl font-bold mb-4">Proud to Serve Our Hometown</h2>
              <p className="text-xl mb-6">
                Your neighbors trust us—see why DTE Roofing is Hilliard's choice for roofing
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
            Schedule Your Hilliard Roof Inspection
          </h2>
          <p className="text-xl text-charcoal-600 mb-8 max-w-2xl mx-auto">
            Contact DTE Roofing today for expert roofing services from your Hilliard neighbors
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