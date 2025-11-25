import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Phone, MapPin } from 'lucide-react';
import SEO from '../../components/SEO';

export default function Hilliard() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="BEST Roofer in Columbus – if you're looking for Honest Roofing Services near me or Expert Roof Repair & Replacement near me – DTE Roofing is the place to be."
        description="Professional roofing services in Hilliard, OH. Local experts serving Hilliard with roof repair, replacement, installation. Family-owned business. Free estimates. Call 614-971-6028."
        keywords="roofing Hilliard OH, Hilliard roofer, roof repair Hilliard, roof replacement Hilliard, Hilliard roofing contractor"
        canonical="https://dteroofing.com/locations/hilliard"
      />

      <section className="relative bg-gradient-to-br from-charcoal-900 via-charcoal-800 to-charcoal-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="w-6 h-6" />
              <span className="text-lg">Serving Hilliard, Ohio</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Hilliard's Trusted Roofing Company</h1>
            <p className="text-xl text-gray-200 mb-6">
              Your local roofing experts serving Hilliard homeowners and businesses
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
              <h2 className="text-3xl font-bold text-charcoal-900 mb-6">Roofing Services in Hilliard</h2>
              <p className="text-lg text-charcoal-600 mb-6 leading-relaxed">
                Hilliard is a wonderful community with beautiful homes, and we're proud to serve this area
                with professional roofing services. Whether you live in one of Hilliard's established
                neighborhoods or a newer development, we understand the importance of protecting your home
                with a quality roof.
              </p>
              <p className="text-lg text-charcoal-600 mb-6 leading-relaxed">
                DTE Roofing is a family-owned business that treats every Hilliard home like our own. We
                provide honest estimates, quality workmanship, and stand behind our work with comprehensive
                warranties.
              </p>
              <div className="bg-primary-50 p-6 rounded-xl">
                <h3 className="font-bold text-charcoal-900 mb-4">Local Hilliard Advantages</h3>
                <ul className="space-y-2">
                  {[
                    'Quick response throughout Hilliard',
                    'Knowledge of local architectural styles',
                    'Familiar with Hilliard weather patterns',
                    'Active in the Hilliard community',
                    'References from your neighbors',
                    'Local supplier relationships'
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
              <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 mb-8">
                <h3 className="text-2xl font-bold text-charcoal-900 mb-6">Complete Roofing Services</h3>
                <ul className="space-y-3">
                  {[
                    'Roof repair and leak detection',
                    'Complete roof replacement',
                    'New construction roofing',
                    'Asphalt shingle installation',
                    'Metal roofing systems',
                    'Emergency storm repairs',
                    'Annual roof inspections',
                    'Gutter installation and repair',
                    'Attic ventilation solutions',
                    'Siding installation',
                    'Insurance claims assistance',
                    'Free estimates and consultations'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary-700 flex-shrink-0 mt-1" />
                      <span className="text-charcoal-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6">
                <h3 className="font-bold text-charcoal-900 mb-2">Hilliard Homeowners</h3>
                <p className="text-charcoal-700 mb-4">
                  Get a free roof inspection and estimate. No pressure, just honest advice from your local roofing experts.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center text-primary-700 hover:text-primary-800 font-semibold"
                >
                  Schedule Free Inspection <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-charcoal-900 mb-8 text-center">Hilliard Areas We Serve</h2>
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                'Heritage Golf Club',
                'Ballantrae',
                'Village of Hilliard',
                'Homestead',
                'Britton Farms',
                'Ridgeview',
                'Woods of Scioto',
                'Presidential Meadows',
                'Scioto Darby Crossing',
                'Hilliard Green',
                'Old Hilliard',
                'Davidson Farms',
                'Hilliard Woods',
                'Indian Run',
                'Norwich',
                'Crosswinds'
              ].map((area, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg text-center">
                  <span className="text-charcoal-700">{area}</span>
                </div>
              ))}
            </div>
            <p className="text-center text-charcoal-600 mt-6">
              Proudly serving all Hilliard neighborhoods. Call to discuss your roofing needs!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="bg-gray-50 p-8 rounded-xl">
              <h2 className="text-2xl font-bold text-charcoal-900 mb-6">Why Hilliard Residents Choose Us</h2>
              <div className="space-y-6">
                {[
                  {
                    title: 'Local Reputation',
                    description: 'Proudly serving Hilliard with hundreds of satisfied customers'
                  },
                  {
                    title: 'Quality Materials',
                    description: 'Premium roofing materials that perform in Ohio\'s climate'
                  },
                  {
                    title: 'Expert Installation',
                    description: 'Certified installers who follow manufacturer specifications precisely'
                  },
                  {
                    title: 'Fair Pricing',
                    description: 'Competitive rates with no hidden fees or surprises'
                  },
                  {
                    title: 'Strong Warranties',
                    description: 'Comprehensive coverage on both materials and workmanship'
                  },
                  {
                    title: 'Customer Service',
                    description: 'Responsive communication and professional service throughout'
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
                    name: 'Tom & Karen S.',
                    area: 'Ballantrae',
                    text: 'DTE Roofing replaced our entire roof last year. The crew was professional, the cleanup was thorough, and the roof looks fantastic!'
                  },
                  {
                    name: 'James P.',
                    area: 'Heritage Golf Club',
                    text: 'After storm damage, they came out the same day to assess and tarp our roof. The permanent repair was completed quickly and professionally.'
                  },
                  {
                    name: 'Michelle T.',
                    area: 'Old Hilliard',
                    text: 'Honest, reliable, and fairly priced. They helped us through the insurance claim process and our new roof is beautiful!'
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
              <h2 className="text-3xl font-bold mb-4">Proud to Serve Hilliard</h2>
              <p className="text-xl mb-6">
                Your neighbors trust us - see why DTE Roofing is Hilliard's choice for roofing
              </p>
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div>
                  <div className="text-4xl font-bold mb-2">2,000+</div>
                  <div className="text-gray-100">Hilliard Homes Served</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">20+</div>
                  <div className="text-gray-100">Years in Business</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">A+</div>
                  <div className="text-gray-100">BBB Rating</div>
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
            Ready to Protect Your Hilliard Home?
          </h2>
          <p className="text-xl text-charcoal-600 mb-8 max-w-2xl mx-auto">
            Contact us today for expert roofing services in Hilliard
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
