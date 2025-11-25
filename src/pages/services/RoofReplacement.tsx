import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Home, DollarSign, Calendar } from 'lucide-react';
import SEO from '../../components/SEO';

export default function RoofReplacement() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="BEST Roofer in Columbus – if you're looking for Honest Roofing Services near me or Expert Roof Repair & Replacement near me – DTE Roofing is the place to be."
        description="Expert roof replacement services in Columbus, OH. Complete tear-off and installation with premium materials. Financing available. Licensed & insured. Free estimates. Call 614-971-6028."
        keywords="roof replacement Columbus, complete roof replacement, tear off replacement, new roof, roof replacement cost, residential roof replacement"
        canonical="https://dteroofing.com/services/roof-replacement"
      />

      <section className="relative bg-gradient-to-br from-charcoal-900 via-charcoal-800 to-charcoal-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Complete Roof Replacement</h1>
            <p className="text-xl text-gray-200">
              Transform your property with a new roof built to last decades
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold text-charcoal-900 mb-6">Complete Roof Replacement in Columbus, OH</h2>
              <p className="text-lg text-charcoal-600 mb-6 leading-relaxed">
                Serving homeowners throughout Columbus, Hilliard, Dublin, and Grove City, DTE Roofing specializes in
                installing beautiful, long-lasting roofs. We understand that a new roof is a
                major investment—that's why we focus on quality workmanship, premium materials designed for Ohio's
                climate, and transparent pricing with no surprises.
              </p>
              <p className="text-lg text-charcoal-600 mb-6 leading-relaxed">
                From the initial consultation to the final cleanup, our experienced local team handles every
                detail with care. We work efficiently to minimize disruption to your daily life while delivering
                a roof that protects your home for decades. Every installation is backed by comprehensive
                manufacturer and workmanship warranties for your complete peace of mind.
              </p>
              <div className="grid md:grid-cols-3 gap-4 mt-8">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Home className="w-10 h-10 text-primary-700 mx-auto mb-2" />
                  <h3 className="font-bold text-charcoal-900 text-sm mb-1">Enhanced Protection</h3>
                  <p className="text-xs text-charcoal-600">Superior weather resistance</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <DollarSign className="w-10 h-10 text-primary-700 mx-auto mb-2" />
                  <h3 className="font-bold text-charcoal-900 text-sm mb-1">Increased Value</h3>
                  <p className="text-xs text-charcoal-600">Boost property worth</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Calendar className="w-10 h-10 text-primary-700 mx-auto mb-2" />
                  <h3 className="font-bold text-charcoal-900 text-sm mb-1">Long Lifespan</h3>
                  <p className="text-xs text-charcoal-600">Decades of protection</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
              <h3 className="text-2xl font-bold text-charcoal-900 mb-6">Signs You Need Replacement</h3>
              <ul className="space-y-3">
                {[
                  'Roof is 20+ years old',
                  'Multiple leaks or recurring problems',
                  'Widespread shingle damage',
                  'Curling, cracking, or missing shingles',
                  'Significant granule loss',
                  'Sagging or structural concerns',
                  'Daylight visible through roof boards',
                  'High energy bills from poor insulation',
                  'Extensive storm or hail damage',
                  'Failed previous repairs',
                  'Preparing to sell your property',
                  'Outdated roofing materials'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary-700 flex-shrink-0 mt-1" />
                    <span className="text-charcoal-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-charcoal-900 mb-8 text-center">Our Replacement Process</h2>
            <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
              {[
                { step: '1', title: 'Free Inspection', description: 'Thorough assessment' },
                { step: '2', title: 'Material Selection', description: 'Choose your style' },
                { step: '3', title: 'Schedule Work', description: 'Convenient timing' },
                { step: '4', title: 'Complete Tear-Off', description: 'Remove old roof' },
                { step: '5', title: 'Professional Install', description: 'Expert craftsmanship' },
                { step: '6', title: 'Final Inspection', description: 'Quality assurance' }
              ].map((item) => (
                <div key={item.step} className="bg-gray-50 p-4 rounded-xl text-center">
                  <div className="w-10 h-10 bg-primary-700 text-white rounded-full flex items-center justify-center font-bold mx-auto mb-3">
                    {item.step}
                  </div>
                  <h3 className="font-bold text-charcoal-900 text-sm mb-1">{item.title}</h3>
                  <p className="text-charcoal-600 text-xs">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-charcoal-900 mb-8 text-center">What's Included</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: 'Complete Tear-Off',
                  items: ['Remove all old materials', 'Dispose of debris properly', 'Protect landscaping', 'Daily cleanup']
                },
                {
                  title: 'Deck Inspection & Repair',
                  items: ['Inspect roof deck', 'Replace damaged boards', 'Ensure structural integrity', 'Add reinforcement if needed']
                },
                {
                  title: 'Premium Underlayment',
                  items: ['Synthetic underlayment', 'Ice and water shield', 'Valley protection', 'Enhanced waterproofing']
                },
                {
                  title: 'Flashing & Trim',
                  items: ['New drip edge', 'Step flashing', 'Chimney flashing', 'Pipe boot replacement']
                },
                {
                  title: 'Ventilation System',
                  items: ['Ridge vent installation', 'Soffit vents', 'Proper airflow', 'Energy efficiency']
                },
                {
                  title: 'Quality Installation',
                  items: ['Premium shingles', 'Expert craftsmanship', 'Manufacturer specs', 'Final inspection']
                }
              ].map((section, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-charcoal-900 mb-4">{section.title}</h3>
                  <ul className="space-y-2">
                    {section.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary-700 flex-shrink-0 mt-1" />
                        <span className="text-charcoal-600 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-primary-50 p-8 rounded-xl">
            <h2 className="text-3xl font-bold text-charcoal-900 mb-6">Why Choose DTE Roofing?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: 'Premium Materials',
                  description: 'We use only top-quality materials from trusted manufacturers, backed by industry-leading warranties.'
                },
                {
                  title: 'Expert Installation',
                  description: 'Our certified installers follow manufacturer specifications precisely for optimal performance and warranty coverage.'
                },
                {
                  title: 'Complete Protection',
                  description: 'Every replacement includes comprehensive underlayment, flashing, and ventilation for maximum protection.'
                },
                {
                  title: 'Warranty Coverage',
                  description: 'Dual warranties cover both materials and workmanship for complete peace of mind.'
                },
                {
                  title: 'Minimal Disruption',
                  description: 'We work efficiently to complete your project quickly while maintaining the highest quality standards.'
                },
                {
                  title: 'Financing Available',
                  description: 'Flexible financing options make it easier to invest in your property\'s protection.'
                }
              ].map((item, index) => (
                <div key={index}>
                  <h3 className="font-bold text-charcoal-900 mb-2">{item.title}</h3>
                  <p className="text-charcoal-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight max-w-4xl mx-auto">
            Need expert help? Get your free, no-obligation estimate today.
          </h2>
          <Link
            to="/contact"
            className="bg-white text-primary-700 px-10 py-5 rounded-lg hover:bg-gray-100 transition-all font-bold text-xl inline-flex items-center justify-center shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
          >
            Request Estimate <ArrowRight className="ml-2 w-6 h-6" />
          </Link>
        </div>
      </section>
    </div>
  );
}
