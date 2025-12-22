import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Phone, MapPin, Shield } from 'lucide-react';
import SEO from '../../components/SEO';
import SchemaMarkup from '../../components/SchemaMarkup';

export default function Delaware() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Roofing Services in Delaware, Ohio - Expert Roof Repair & Replacement | DTE Roofing"
        description="Professional roofing services in Delaware, OH. Local experts serving Historic Downtown, Ohio Wesleyan, Berkshire & all Delaware neighborhoods. Free estimates. Call 614-971-6028."
        keywords="roofing Delaware OH, Delaware roofer, roof repair Delaware, roof replacement Delaware, Ohio Wesleyan roofing, Delaware roofing contractor"
        canonical="https://www.dteroofingllc.com/locations/delaware"
      />
      <SchemaMarkup
        type="location"
        locationName="Delaware"
        pageTitle="Roofing Services in Delaware, OH - DTE Roofing LLC"
        pageDescription="Professional roofing services in Delaware, OH. Local experts serving all Delaware neighborhoods with roof repair, replacement, and installation."
        pageUrl="https://www.dteroofingllc.com/locations/delaware"
      />

      <section className="relative bg-gradient-to-br from-charcoal-900 via-charcoal-800 to-charcoal-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="w-6 h-6" />
              <span className="text-lg">Serving Delaware, Ohio</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Roofing Services in Delaware, Ohio</h1>
            <p className="text-xl text-gray-200 mb-6">
              Your trusted local roofing contractor serving Delaware County's seat with expert roof repair, replacement, and installation services
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
              <h2 className="text-3xl font-bold text-charcoal-900 mb-6">Delaware's Premier Roofing Company</h2>
              <p className="text-lg text-charcoal-600 mb-6 leading-relaxed">
                DTE Roofing proudly serves Delaware, the historic county seat situated 35 miles north of our Hilliard headquarters. From Historic Downtown's Victorian-era charm to the Ohio Wesleyan University area's distinctive architecture, from Berkshire and Glenmoor's established neighborhoods to Villages at Glenmoor and Presidential Parkway's newer developments, we understand this northern community's unique character and roofing needs.
              </p>
              <p className="text-lg text-charcoal-600 mb-6 leading-relaxed">
                Founded in 1808 and serving as Delaware County's seat, the city blends historic preservation with modern growth. Housing diversity ranges from 19th-century downtown properties requiring specialized approaches, to mid-20th century suburban developments needing replacement, to recent construction in Liberty Township and north Delaware experiencing rapid expansion. This variety creates distinct roofing challenges spanning historic preservation, aging updates, and quality oversight for new installations.
              </p>
              <p className="text-lg text-charcoal-600 mb-6 leading-relaxed">
                Delaware's northern location exposes properties to harsher winter conditions than southern suburbs—heavier snow accumulations requiring enhanced structural support, longer periods of freezing temperatures accelerating shingle brittleness, and more severe ice dam risks demanding proper ventilation and protection. Additionally, Delaware County building codes differ from Franklin County requirements, necessitating contractor expertise with specific permitting and inspection processes.
              </p>

              <div className="bg-primary-50 p-6 rounded-xl border-2 border-primary-200">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="w-8 h-8 text-primary-700" />
                  <h3 className="font-bold text-charcoal-900 text-xl">Why Delaware Homeowners Choose DTE Roofing</h3>
                </div>
                <ul className="space-y-3">
                  {[
                    'Experience with Delaware County codes and permits',
                    'Understanding of northern exposure winter challenges',
                    'Expertise in historic downtown preservation',
                    'Knowledge of diverse Delaware housing stock',
                    'Proven track record across Delaware neighborhoods',
                    'Licensed, insured, and committed to quality'
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
                <h3 className="text-2xl font-bold text-charcoal-900 mb-6">Complete Roofing Services for Delaware</h3>
                <ul className="space-y-3">
                  {[
                    { name: 'Roof Replacement', link: '/services/roof-replacement' },
                    { name: 'Roof Repair', link: '/services/roof-repair' },
                    { name: 'Historic Home Roofing', link: '/services/roof-installation' },
                    { name: 'Roof Inspections', link: '/services/roof-inspection' },
                    { name: 'Ice Dam Prevention', link: '/services/roof-maintenance' },
                    { name: '24/7 Emergency Services', link: '/services/emergency-services' },
                    { name: 'Storm Damage Repair', link: '/services/storm-damage' },
                    { name: 'Gutter Services', link: '/services/gutters' },
                    { name: 'Siding Installation', link: '/services/siding' },
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
                  We provide comprehensive estimates for all Delaware roofing projects. Delaware County permitting assistance included.
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
            <h2 className="text-3xl font-bold text-charcoal-900 mb-8 text-center">Delaware Neighborhoods We Serve</h2>
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                'Historic Downtown',
                'Ohio Wesleyan Area',
                'Berkshire',
                'Cobblestone',
                'Glenmoor',
                'Liberty Park',
                'Oak Creek',
                'Pebble Run',
                'Presidential Parkway',
                'Turnberry',
                'Villages at Glenmoor',
                'Southpointe',
                'North Delaware',
                'Olentangy River',
                'Berlin Township',
                'Radnor'
              ].map((neighborhood, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg text-center border border-gray-200 hover:border-primary-700 hover:bg-primary-50 transition-all">
                  <span className="text-charcoal-700 font-medium">{neighborhood}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-primary-700 to-primary-800 text-white p-8 rounded-xl">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Protect Your Delaware Home?</h2>
              <p className="text-xl mb-6">
                Join satisfied Delaware homeowners who trust DTE Roofing for quality roofing and exceptional service
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
            Schedule Your Delaware Roof Inspection
          </h2>
          <p className="text-xl text-charcoal-600 mb-8 max-w-2xl mx-auto">
            Contact DTE Roofing today for expert roofing services throughout Delaware
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
