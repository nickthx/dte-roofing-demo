import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Home, Palette, Shield } from 'lucide-react';
import SEO from '../../components/SEO';

export default function Siding() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="BEST Roofer in Columbus – if you're looking for Honest Roofing Services near me or Expert Roof Repair & Replacement near me – DTE Roofing is the place to be."
        description="Professional siding installation and repair in Columbus, OH. Vinyl siding, LP Smart Siding, storm damage repair. Enhance curb appeal and protection. Free estimates. Call 614-971-6028."
        keywords="siding installation Columbus, vinyl siding, LP Smart Siding, siding repair, siding replacement, Columbus siding contractor"
        canonical="https://dteroofing.com/services/siding"
      />

      <section className="relative bg-gradient-to-br from-charcoal-900 via-charcoal-800 to-charcoal-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Professional Siding Services</h1>
            <p className="text-xl text-gray-200">
              Transform your home's exterior with quality siding installation and repair
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold text-charcoal-900 mb-6">Expert Siding Installation & Repair in Columbus</h2>
              <p className="text-lg text-charcoal-600 mb-6 leading-relaxed">
                Serving Columbus, Hilliard, Dublin, and Grove City, DTE Roofing transforms
                homes with professional siding installation and repair. Your siding does more than look good—it's
                your home's first line of defense against Ohio's unpredictable weather, from summer storms to
                winter cold. Quality siding protects your home, improves energy efficiency, and significantly
                boosts curb appeal and property value.
              </p>
              <p className="text-lg text-charcoal-600 mb-6 leading-relaxed">
                Whether you're ready for a complete exterior makeover, need storm damage repairs, or want to
                replace worn-out siding, our experienced team delivers beautiful, long-lasting results using
                premium materials designed for Central Ohio's climate.
              </p>
              <div className="grid md:grid-cols-3 gap-4 mt-8">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Home className="w-10 h-10 text-primary-700 mx-auto mb-2" />
                  <h3 className="font-bold text-charcoal-900 text-sm mb-1">Curb Appeal</h3>
                  <p className="text-xs text-charcoal-600">Beautiful finish</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Shield className="w-10 h-10 text-primary-700 mx-auto mb-2" />
                  <h3 className="font-bold text-charcoal-900 text-sm mb-1">Protection</h3>
                  <p className="text-xs text-charcoal-600">Weather resistant</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Palette className="w-10 h-10 text-primary-700 mx-auto mb-2" />
                  <h3 className="font-bold text-charcoal-900 text-sm mb-1">Customization</h3>
                  <p className="text-xs text-charcoal-600">Many colors & styles</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
              <h3 className="text-2xl font-bold text-charcoal-900 mb-6">Our Siding Services</h3>
              <ul className="space-y-4">
                {[
                  'New siding installation',
                  'Complete siding replacement',
                  'Siding repair and restoration',
                  'Storm damage repair',
                  'Vinyl siding installation',
                  'LP Smart Siding',
                  'Wood siding repair',
                  'Trim and fascia work',
                  'Soffit and fascia installation',
                  'Color consultation',
                  'Insurance claim assistance',
                  'Warranty-backed installation'
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
            <h2 className="text-3xl font-bold text-charcoal-900 mb-8 text-center">Siding Material Options</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Vinyl Siding',
                  description: 'The most popular choice for its durability, low maintenance, and affordability.',
                  features: [
                    'Low maintenance - no painting',
                    'Excellent durability',
                    'Wide color selection',
                    'Cost-effective',
                    'Energy efficient options',
                    'Resists moisture and insects',
                    '20-40 year lifespan',
                    'Warranty protection'
                  ]
                },
                {
                  title: 'LP Smart Siding',
                  description: 'Premium option that mimics wood but offers superior durability and fire resistance.',
                  features: [
                    'Extremely durable',
                    'Fire resistant',
                    'Termite proof',
                    'Can mimic wood grain',
                    'Holds paint well',
                    'Low maintenance',
                    '30-50 year lifespan',
                    'Premium appearance'
                  ]
                },
                {
                  title: 'Wood Siding',
                  description: 'Classic beauty with natural warmth, available in various styles and species.',
                  features: [
                    'Natural beauty',
                    'Traditional appeal',
                    'Can be painted or stained',
                    'Multiple style options',
                    'Renewable resource',
                    'Classic look',
                    'Increases home value',
                    'Requires maintenance'
                  ]
                }
              ].map((material, index) => (
                <div key={index} className="bg-gray-50 p-8 rounded-xl border border-gray-200 hover:border-primary-700 transition-all">
                  <h3 className="text-2xl font-bold text-charcoal-900 mb-4">{material.title}</h3>
                  <p className="text-charcoal-600 mb-6 leading-relaxed">{material.description}</p>
                  <h4 className="font-bold text-charcoal-900 mb-3">Features:</h4>
                  <ul className="space-y-2">
                    {material.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-charcoal-700">
                        <CheckCircle className="w-4 h-4 text-primary-700 mr-2 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="bg-primary-50 p-8 rounded-xl">
              <h2 className="text-2xl font-bold text-charcoal-900 mb-6">Signs You Need Siding Repair</h2>
              <ul className="space-y-3">
                {[
                  'Cracks or holes in siding',
                  'Warped or buckled panels',
                  'Loose or missing pieces',
                  'Fading or discoloration',
                  'Peeling paint on wood siding',
                  'Rot or water damage',
                  'Mold or mildew growth',
                  'Higher energy bills',
                  'Interior moisture or stains',
                  'Visible damage from storms',
                  'Insect damage or holes',
                  'Siding is 20+ years old'
                ].map((sign, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary-700 flex-shrink-0 mt-1" />
                    <span className="text-charcoal-700">{sign}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              <h2 className="text-2xl font-bold text-charcoal-900 mb-6">Benefits of New Siding</h2>
              <div className="space-y-6">
                {[
                  {
                    title: 'Enhanced Curb Appeal',
                    description: 'Transform your home\'s appearance with fresh, beautiful siding'
                  },
                  {
                    title: 'Increased Value',
                    description: 'New siding provides excellent return on investment when selling'
                  },
                  {
                    title: 'Better Energy Efficiency',
                    description: 'Modern insulated siding reduces heating and cooling costs'
                  },
                  {
                    title: 'Superior Protection',
                    description: 'Shield your home from weather, moisture, and the elements'
                  },
                  {
                    title: 'Low Maintenance',
                    description: 'Modern materials require minimal upkeep compared to old siding'
                  },
                  {
                    title: 'Warranty Coverage',
                    description: 'New siding comes with manufacturer and installation warranties'
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

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-charcoal-900 mb-8 text-center">Our Installation Process</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  step: '1',
                  title: 'Consultation',
                  description: 'Free estimate and material selection guidance'
                },
                {
                  step: '2',
                  title: 'Preparation',
                  description: 'Remove old siding and prepare surface'
                },
                {
                  step: '3',
                  title: 'Installation',
                  description: 'Expert installation with attention to detail'
                },
                {
                  step: '4',
                  title: 'Inspection',
                  description: 'Quality check and final walkthrough'
                }
              ].map((item) => (
                <div key={item.step} className="bg-gray-50 p-6 rounded-xl text-center">
                  <div className="w-12 h-12 bg-primary-700 text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-bold text-charcoal-900 mb-2">{item.title}</h3>
                  <p className="text-charcoal-600 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-8 rounded-r-xl">
            <h3 className="font-bold text-charcoal-900 mb-4 text-xl">Color & Style Options</h3>
            <p className="text-charcoal-700 mb-4">
              Choose from dozens of colors and styles to perfectly match your home's architecture and
              your personal taste. We offer free color consultations to help you select the perfect
              combination for your home.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-charcoal-900 mb-2">Popular Styles:</h4>
                <ul className="space-y-1">
                  {['Traditional lap siding', 'Vertical board & batten', 'Shake and shingle style', 'Dutch lap', 'Scalloped'].map((style, i) => (
                    <li key={i} className="text-charcoal-700 text-sm flex items-center">
                      <span className="w-1.5 h-1.5 bg-primary-700 rounded-full mr-2"></span>
                      {style}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-charcoal-900 mb-2">Popular Colors:</h4>
                <ul className="space-y-1">
                  {['Classic whites and creams', 'Earth tones (browns, tans)', 'Cool grays', 'Bold blues and greens', 'Custom colors available'].map((color, i) => (
                    <li key={i} className="text-charcoal-700 text-sm flex items-center">
                      <span className="w-1.5 h-1.5 bg-primary-700 rounded-full mr-2"></span>
                      {color}
                    </li>
                  ))}
                </ul>
              </div>
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
