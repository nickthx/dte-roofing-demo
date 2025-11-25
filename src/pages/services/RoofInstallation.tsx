import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Shield, Award, Clock } from 'lucide-react';
import SEO from '../../components/SEO';

export default function RoofInstallation() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="BEST Roofer in Columbus – if you're looking for Honest Roofing Services near me or Expert Roof Repair & Replacement near me – DTE Roofing is the place to be."
        description="Expert new roof installation services in Columbus, OH. Premium materials, skilled craftsmanship, and warranty protection. Residential & commercial installations. Free estimates. Call 614-971-6028."
        keywords="roof installation Columbus, new roof installation, residential roof installation, commercial roof installation, asphalt shingle installation, metal roof installation"
        canonical="https://dteroofing.com/services/roof-installation"
      />

      <section className="relative bg-gradient-to-br from-charcoal-900 via-charcoal-800 to-charcoal-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Professional Roof Installation</h1>
            <p className="text-xl text-gray-200">
              Expert new roof installations with premium materials and superior craftsmanship
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold text-charcoal-900 mb-6">New Roof Installation Services</h2>
              <p className="text-lg text-charcoal-600 mb-6 leading-relaxed">
                A new roof is a significant investment that protects your property for decades. At DTE Roofing,
                we specialize in professional roof installations using premium materials and proven techniques.
                Our experienced team ensures your new roof is installed correctly the first time.
              </p>
              <p className="text-lg text-charcoal-600 mb-6 leading-relaxed">
                Whether you're building new construction or replacing an old roof, we guide you through material
                selection, design options, and installation timelines. Every project is backed by our workmanship
                warranty and manufacturer guarantees.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="text-center p-6 bg-gray-50 rounded-xl">
                  <Shield className="w-12 h-12 text-primary-700 mx-auto mb-3" />
                  <h3 className="font-bold text-charcoal-900 mb-2">Warranty Protected</h3>
                  <p className="text-sm text-charcoal-600">Comprehensive coverage</p>
                </div>
                <div className="text-center p-6 bg-gray-50 rounded-xl">
                  <Award className="w-12 h-12 text-primary-700 mx-auto mb-3" />
                  <h3 className="font-bold text-charcoal-900 mb-2">Expert Installation</h3>
                  <p className="text-sm text-charcoal-600">Skilled professionals</p>
                </div>
                <div className="text-center p-6 bg-gray-50 rounded-xl">
                  <Clock className="w-12 h-12 text-primary-700 mx-auto mb-3" />
                  <h3 className="font-bold text-charcoal-900 mb-2">On-Time Completion</h3>
                  <p className="text-sm text-charcoal-600">Reliable scheduling</p>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
                <h3 className="text-2xl font-bold text-charcoal-900 mb-6">Our Installation Process</h3>
                <div className="space-y-6">
                  {[
                    {
                      step: '1',
                      title: 'Initial Consultation',
                      description: 'Free estimate and material selection guidance'
                    },
                    {
                      step: '2',
                      title: 'Site Preparation',
                      description: 'Protect landscaping and prepare work area'
                    },
                    {
                      step: '3',
                      title: 'Professional Installation',
                      description: 'Expert installation with quality materials'
                    },
                    {
                      step: '4',
                      title: 'Quality Inspection',
                      description: 'Thorough review and cleanup'
                    },
                    {
                      step: '5',
                      title: 'Final Walkthrough',
                      description: 'Review work and answer questions'
                    }
                  ].map((item) => (
                    <div key={item.step} className="flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-primary-700 text-white rounded-full flex items-center justify-center font-bold">
                        {item.step}
                      </div>
                      <div>
                        <h4 className="font-bold text-charcoal-900 mb-1">{item.title}</h4>
                        <p className="text-charcoal-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-charcoal-900 mb-8 text-center">Roofing Material Options</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: 'Asphalt Shingles',
                  features: ['Cost-effective', 'Wide color selection', 'Proven durability', '20-30 year lifespan']
                },
                {
                  title: 'Architectural Shingles',
                  features: ['Premium appearance', 'Enhanced durability', 'Dimensional design', '30-50 year lifespan']
                },
                {
                  title: 'Metal Roofing',
                  features: ['Extreme durability', 'Energy efficient', 'Low maintenance', '50+ year lifespan']
                },
                {
                  title: 'Tile Roofing',
                  features: ['Classic beauty', 'Fire resistant', 'Weather resistant', '50+ year lifespan']
                }
              ].map((material, index) => (
                <div key={index} className="bg-white p-6 rounded-xl border border-gray-200 hover:border-primary-700 transition-all">
                  <h3 className="text-xl font-bold text-charcoal-900 mb-4">{material.title}</h3>
                  <ul className="space-y-2">
                    {material.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-charcoal-600">
                        <CheckCircle className="w-4 h-4 text-primary-700 mr-2 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-xl">
            <h2 className="text-3xl font-bold text-charcoal-900 mb-6">What's Included</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                'Complete tear-off and disposal of old roofing',
                'Deck inspection and repairs if needed',
                'Premium underlayment installation',
                'Ice and water shield in critical areas',
                'New drip edge and flashing',
                'Ridge vent or proper ventilation system',
                'Professional shingle installation',
                'Complete cleanup and debris removal',
                'Final inspection and quality assurance',
                'Workmanship warranty',
                'Manufacturer material warranty',
                'Post-installation support'
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary-700 flex-shrink-0 mt-1" />
                  <span className="text-charcoal-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready for a New Roof?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and estimate on your new roof installation
          </p>
          <Link
            to="/contact"
            className="bg-white text-primary-700 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all font-semibold text-lg inline-flex items-center justify-center shadow-lg"
          >
            Get Free Estimate <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
