import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Phone, MapPin, Shield } from 'lucide-react';
import SEO from '../../components/SEO';
import SchemaMarkup from '../../components/SchemaMarkup';

export default function Powell() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Roofing Services in Powell, Ohio - Expert Roof Repair & Replacement | DTE Roofing"
        description="Professional roofing services in Powell, OH. Local experts serving Wedgewood Glen, Scioto Reserve, Tartan Ridge & all Powell neighborhoods. Free estimates. Call 614-971-6028."
        keywords="roofing Powell OH, Powell roofer, roof repair Powell, roof replacement Powell, Scioto Reserve roofing, Powell roofing contractor"
        canonical="https://www.dteroofingllc.com/locations/powell"
      />
      <SchemaMarkup
        type="location"
        locationName="Powell"
        pageTitle="Roofing Services in Powell, OH - DTE Roofing LLC"
        pageDescription="Professional roofing services in Powell, OH. Local experts serving all Powell neighborhoods with roof repair, replacement, and installation."
        pageUrl="https://www.dteroofingllc.com/locations/powell"
      />

      <section className="relative bg-gradient-to-br from-charcoal-900 via-charcoal-800 to-charcoal-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="w-6 h-6" />
              <span className="text-lg">Serving Powell, Ohio</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Roofing Services in Powell, Ohio</h1>
            <p className="text-xl text-gray-200 mb-6">
              Your trusted local roofing contractor serving Powell's thriving northern suburbs with expert roof repair, replacement, and installation
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
              <h2 className="text-3xl font-bold text-charcoal-900 mb-6">Powell's Premier Roofing Experts</h2>
              <p className="text-lg text-charcoal-600 mb-6 leading-relaxed">
                DTE Roofing proudly serves Powell, one of Central Ohio's fastest-growing and most desirable communities, from Wedgewood Glen and Scioto Reserve's premier developments to Tartan Ridge's family neighborhoods, from Village of Wetherington's established areas to Liberty Township's newest constructions. Located approximately 22 miles south in Hilliard, we respond quickly to serve this northern suburb celebrated for excellent Olentangy Schools and exceptional quality of life.
              </p>
              <p className="text-lg text-charcoal-600 mb-6 leading-relaxed">
                Powell's explosive growth since the 1990s created extensive newer housing stock predominantly built during the 2000s-2020s boom. This relatively recent development means many homes feature builder-grade roofing materials approaching 10-20 years old—perfect timing for homeowners to consider upgrading from basic specifications to premium products offering enhanced performance, better warranties, and improved storm resistance appropriate for northern exposure weather patterns and maintaining high Powell property values.
              </p>
              <p className="text-lg text-charcoal-600 mb-6 leading-relaxed">
                Powell's northern Delaware County location creates unique considerations—Delaware County building codes differing from Franklin County requirements, northern exposure to harsher winter weather with heavier snow and more ice dam risks, and competitive real estate market where roof condition significantly impacts property values. Many Powell neighborhoods maintain HOAs with architectural guidelines requiring compliant material selections, making experienced contractor guidance essential for successful projects.
              </p>

              <div className="bg-primary-50 p-6 rounded-xl border-2 border-primary-200">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="w-8 h-8 text-primary-700" />
                  <h3 className="font-bold text-charcoal-900 text-xl">Why Powell Homeowners Choose DTE Roofing</h3>
                </div>
                <ul className="space-y-3">
                  {[
                    'Experience with Delaware County codes and permits',
                    'Understanding of Olentangy Schools area property standards',
                    'Expertise upgrading builder-grade materials',
                    'Knowledge of HOA requirements in Powell developments',
                    'Proven track record across Powell neighborhoods',
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
                <h3 className="text-2xl font-bold text-charcoal-900 mb-6">Complete Roofing Services for Powell</h3>
                <ul className="space-y-3">
                  {[
                    { name: 'Roof Replacement', link: '/services/roof-replacement' },
                    { name: 'Builder-Grade Upgrades', link: '/services/roof-replacement' },
                    { name: 'Roof Repair', link: '/services/roof-repair' },
                    { name: 'Roof Inspections', link: '/services/roof-inspection' },
                    { name: 'Storm Damage Repair', link: '/services/storm-damage' },
                    { name: '24/7 Emergency Services', link: '/services/emergency-services' },
                    { name: 'Ice Dam Prevention', link: '/services/roof-maintenance' },
                    { name: 'Gutter Services', link: '/services/gutters' },
                    { name: 'Siding Installation', link: '/services/siding' },
                    { name: 'HOA Compliance', link: '/contact' },
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
                  We provide comprehensive estimates for all Powell roofing projects. HOA and Delaware County permitting assistance included.
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
            <h2 className="text-3xl font-bold text-charcoal-900 mb-8 text-center">Powell Neighborhoods We Serve</h2>
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                'Wedgewood Glen',
                'Scioto Reserve',
                'Tartan Ridge',
                'Village of Wetherington',
                'Lowell Trace',
                'Sawmill Parkway',
                'Preserve at Sawmill',
                'Enclave',
                'Riverbend',
                'Olentangy Commons',
                'Seldom Seen',
                'Fox Glen',
                'Four Bridges',
                'Kendall Ridge',
                'Old Stagecoach',
                'Liberty Township'
              ].map((neighborhood, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg text-center border border-gray-200 hover:border-primary-700 hover:bg-primary-50 transition-all">
                  <span className="text-charcoal-700 font-medium">{neighborhood}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-primary-700 to-primary-800 text-white p-8 rounded-xl">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Protect Your Powell Home?</h2>
              <p className="text-xl mb-6">
                Join satisfied Powell homeowners who trust DTE Roofing for quality upgrades and exceptional service
              </p>
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div>
                  <div className="text-4xl font-bold mb-2">300+</div>
                  <div className="text-gray-100">Powell Roofs Installed</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">24/7</div>
                  <div className="text-gray-100">Emergency Response</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">25+</div>
                  <div className="text-gray-100">Years Excellence</div>
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
            Schedule Your Powell Roof Inspection
          </h2>
          <p className="text-xl text-charcoal-600 mb-8 max-w-2xl mx-auto">
            Contact DTE Roofing today for expert roofing services throughout Powell
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
