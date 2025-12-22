import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Phone, MapPin, Shield } from 'lucide-react';
import SEO from '../../components/SEO';
import SchemaMarkup from '../../components/SchemaMarkup';

export default function Worthington() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Roofing Services in Worthington, Ohio - Expert Roof Repair & Replacement | DTE Roofing"
        description="Professional roofing services in Worthington, OH. Local experts serving Historic Village Green, Worthington Hills, Colonial Hills & all Worthington neighborhoods. Free estimates. Call 614-971-6028."
        keywords="roofing Worthington OH, Worthington roofer, roof repair Worthington, roof replacement Worthington, Village Green roofing, Worthington roofing contractor"
        canonical="https://www.dteroofingllc.com/locations/worthington"
      />
      <SchemaMarkup
        type="location"
        locationName="Worthington"
        pageTitle="Roofing Services in Worthington, OH - DTE Roofing LLC"
        pageDescription="Professional roofing services in Worthington, OH. Local experts serving all Worthington neighborhoods with roof repair, replacement, and installation."
        pageUrl="https://www.dteroofingllc.com/locations/worthington"
      />

      <section className="relative bg-gradient-to-br from-charcoal-900 via-charcoal-800 to-charcoal-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="w-6 h-6" />
              <span className="text-lg">Serving Worthington, Ohio</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Roofing Services in Worthington, Ohio</h1>
            <p className="text-xl text-gray-200 mb-6">
              Your trusted local roofing contractor serving Worthington's prestigious community with expert roof repair, replacement, and installation
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
              <h2 className="text-3xl font-bold text-charcoal-900 mb-6">Worthington's Premier Roofing Specialists</h2>
              <p className="text-lg text-charcoal-600 mb-6 leading-relaxed">
                DTE Roofing proudly serves Worthington, one of Central Ohio's most desirable addresses, from the Historic Village Green's 18th and 19th-century architecture to Worthington Hills' mid-century modern character, from Colonial Hills' tree-lined streets to North Worthington's expanding neighborhoods. Located just 18 miles south in Hilliard, we respond quickly to serve this distinguished northern suburb known for excellent schools, historic preservation, and exceptional property values.
              </p>
              <p className="text-lg text-charcoal-600 mb-6 leading-relaxed">
                Founded in 1803 by James Kilbourne and the Scioto Company, Worthington maintains remarkable architectural heritage spanning over 200 years. The Historic Village Green district features homes from the early 1800s requiring specialized preservation approaches, while mid-century neighborhoods showcase 1950s-1960s architectural styles including flat and low-slope roofs demanding different expertise than traditional pitched systems. This diversity requires contractors understanding both historic preservation and modern roofing technology.
              </p>
              <p className="text-lg text-charcoal-600 mb-6 leading-relaxed">
                Worthington's mature neighborhoods feature extensive tree coverage creating distinctive roofing challenges—debris accumulation, enhanced shade promoting moss growth, and branch hazards during storms. Additionally, the Worthington Architectural Review Board maintains strict guidelines for historic district work, requiring contractor familiarity with approval processes and compliant material selections preserving community character while ensuring modern performance standards.
              </p>

              <div className="bg-primary-50 p-6 rounded-xl border-2 border-primary-200">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="w-8 h-8 text-primary-700" />
                  <h3 className="font-bold text-charcoal-900 text-xl">Why Worthington Homeowners Choose DTE Roofing</h3>
                </div>
                <ul className="space-y-3">
                  {[
                    'Experience with Architectural Review Board requirements',
                    'Expertise in historic home preservation',
                    'Understanding of mid-century modern roofing challenges',
                    'Knowledge of mature tree canopy impacts',
                    'Proven track record across all Worthington neighborhoods',
                    'Licensed, insured, and committed to excellence'
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
                <h3 className="text-2xl font-bold text-charcoal-900 mb-6">Complete Roofing Services for Worthington</h3>
                <ul className="space-y-3">
                  {[
                    { name: 'Roof Replacement', link: '/services/roof-replacement' },
                    { name: 'Historic Home Roofing', link: '/services/roof-installation' },
                    { name: 'Mid-Century Modern Roofing', link: '/services/roof-repair' },
                    { name: 'Roof Inspections', link: '/services/roof-inspection' },
                    { name: 'Storm Damage Repair', link: '/services/storm-damage' },
                    { name: '24/7 Emergency Services', link: '/services/emergency-services' },
                    { name: 'Gutter Services', link: '/services/gutters' },
                    { name: 'Siding Installation', link: '/services/siding' },
                    { name: 'Review Board Assistance', link: '/contact' },
                    { name: 'Insurance Claims', link: '/contact' },
                    { name: 'Preventative Maintenance', link: '/services/roof-maintenance' }
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
                <h3 className="font-bold text-charcoal-900 mb-2 text-lg">Free Roofing Estimates</h3>
                <p className="text-charcoal-700 mb-4">
                  We provide detailed estimates for all Worthington roofing projects, including architectural review assistance.
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
            <h2 className="text-3xl font-bold text-charcoal-900 mb-8 text-center">Worthington Neighborhoods We Serve</h2>
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                'Village Green (Historic)',
                'Worthington Hills',
                'Worthington Estates',
                'Colonial Hills',
                'Kilbourne Run',
                'Worthington Woods',
                'Wilson Hill',
                'Perry Run',
                'Smoky Row',
                'North Worthington',
                'Snouffer',
                'Olentangy',
                'McCord Park',
                'Evening Street',
                'Proprietors',
                'Pingue Farm'
              ].map((neighborhood, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg text-center border border-gray-200 hover:border-primary-700 hover:bg-primary-50 transition-all">
                  <span className="text-charcoal-700 font-medium">{neighborhood}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-primary-700 to-primary-800 text-white p-8 rounded-xl">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Protect Your Worthington Home?</h2>
              <p className="text-xl mb-6">
                Join satisfied Worthington homeowners who trust DTE Roofing for historic preservation and quality service
              </p>
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
            Schedule Your Worthington Roof Inspection
          </h2>
          <p className="text-xl text-charcoal-600 mb-8 max-w-2xl mx-auto">
            Contact DTE Roofing today for expert roofing services throughout Worthington
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
