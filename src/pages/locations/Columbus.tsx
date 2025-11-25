import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Phone, MapPin } from 'lucide-react';
import SEO from '../../components/SEO';

export default function Columbus() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="BEST Roofer in Columbus – if you're looking for Honest Roofing Services near me or Expert Roof Repair & Replacement near me – DTE Roofing is the place to be."
        description="Professional roofing services in Columbus, OH. Local experts serving Columbus with roof repair, replacement, installation. Fast response times. Free estimates. Call 614-971-6028."
        keywords="roofing Columbus OH, Columbus roofer, roof repair Columbus, roof replacement Columbus, Columbus roofing contractor"
        canonical="https://dteroofing.com/locations/columbus"
      />

      <section className="relative bg-gradient-to-br from-charcoal-900 via-charcoal-800 to-charcoal-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="w-6 h-6" />
              <span className="text-lg">Serving Columbus, Ohio</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Professional Roofing Services in Columbus</h1>
            <p className="text-xl text-gray-200 mb-6">
              Your trusted local roofing contractor serving all Columbus neighborhoods
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
              <h2 className="text-3xl font-bold text-charcoal-900 mb-6">Columbus Roofing Experts</h2>
              <p className="text-lg text-charcoal-600 mb-6 leading-relaxed">
                As a locally owned and operated roofing company, we understand the unique challenges Columbus
                roofs face. From hot, humid summers to cold winters with ice and snow, Columbus weather demands
                quality roofing materials and expert installation.
              </p>
              <p className="text-lg text-charcoal-600 mb-6 leading-relaxed">
                DTE Roofing has been serving Columbus homeowners and businesses with dedication and expertise. We know the
                area, we know the weather patterns, and we know how to install roofs that protect your property
                for decades.
              </p>
              <div className="bg-primary-50 p-6 rounded-xl">
                <h3 className="font-bold text-charcoal-900 mb-4">Why Choose a Local Roofer?</h3>
                <ul className="space-y-2">
                  {[
                    'Fast response times across Columbus',
                    'Understanding of local building codes',
                    'Familiar with Columbus weather patterns',
                    'Established local reputation',
                    'Support local businesses',
                    'Available for follow-up service'
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
                <h3 className="text-2xl font-bold text-charcoal-900 mb-6">Services in Columbus</h3>
                <ul className="space-y-3">
                  {[
                    'Residential roof repair',
                    'Roof replacement',
                    'New roof installation',
                    'Commercial roofing',
                    'Emergency roof repair',
                    'Storm damage restoration',
                    'Roof inspections',
                    'Gutter services',
                    'Preventative maintenance',
                    'Siding installation',
                    'Insurance claim assistance',
                    '24/7 emergency service'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary-700 flex-shrink-0 mt-1" />
                      <span className="text-charcoal-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6">
                <h3 className="font-bold text-charcoal-900 mb-2">Free Estimates</h3>
                <p className="text-charcoal-700 mb-4">
                  We provide free, no-obligation estimates for all roofing projects in Columbus.
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
            <h2 className="text-3xl font-bold text-charcoal-900 mb-8 text-center">Columbus Neighborhoods We Serve</h2>
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                'German Village',
                'Short North',
                'Clintonville',
                'Victorian Village',
                'Brewery District',
                'Arena District',
                'Franklinton',
                'Italian Village',
                'Grandview Heights',
                'Upper Arlington',
                'Bexley',
                'Whitehall',
                'Gahanna',
                'Reynoldsburg',
                'Westerville',
                'Grove City',
                'Worthington',
                'New Albany',
                'Powell',
                'Dublin'
              ].map((neighborhood, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg text-center">
                  <span className="text-charcoal-700">{neighborhood}</span>
                </div>
              ))}
            </div>
            <p className="text-center text-charcoal-600 mt-6">
              Don't see your neighborhood? We serve all of Columbus and surrounding areas. Call to confirm service in your area.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="bg-gray-50 p-8 rounded-xl">
              <h2 className="text-2xl font-bold text-charcoal-900 mb-6">Columbus Weather & Your Roof</h2>
              <p className="text-charcoal-600 mb-6">
                Columbus experiences four distinct seasons, each presenting unique challenges for your roof:
              </p>
              <div className="space-y-4">
                {[
                  {
                    season: 'Summer',
                    challenge: 'High heat and humidity can accelerate shingle aging and cause thermal expansion'
                  },
                  {
                    season: 'Fall',
                    challenge: 'Falling leaves can clog gutters and trap moisture, requiring regular cleaning'
                  },
                  {
                    season: 'Winter',
                    challenge: 'Ice dams, snow load, and freeze-thaw cycles can cause significant damage'
                  },
                  {
                    season: 'Spring',
                    challenge: 'Heavy rain and severe storms can reveal or create leaks and damage'
                  }
                ].map((item, index) => (
                  <div key={index}>
                    <h3 className="font-bold text-charcoal-900 mb-2">{item.season}:</h3>
                    <p className="text-charcoal-600 text-sm">{item.challenge}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-primary-50 p-8 rounded-xl">
              <h2 className="text-2xl font-bold text-charcoal-900 mb-6">What Columbus Homeowners Say</h2>
              <div className="space-y-6">
                {[
                  {
                    name: 'Mike R.',
                    neighborhood: 'German Village',
                    text: 'DTE Roofing did an excellent job on our historic home. They were respectful of the neighborhood and the quality is outstanding.'
                  },
                  {
                    name: 'Lisa M.',
                    neighborhood: 'Clintonville',
                    text: 'Fast response after storm damage, worked with our insurance, and had our roof repaired quickly. Very professional!'
                  },
                  {
                    name: 'David K.',
                    neighborhood: 'Upper Arlington',
                    text: 'From estimate to completion, the entire process was smooth. Our new roof looks great and we had no issues.'
                  }
                ].map((review, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg">
                    <p className="text-charcoal-700 mb-4 italic">"{review.text}"</p>
                    <div className="font-bold text-charcoal-900">{review.name}</div>
                    <div className="text-charcoal-600 text-sm">{review.neighborhood}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-primary-700 to-primary-800 text-white p-8 rounded-xl">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Serving Columbus with Excellence</h2>
              <p className="text-xl mb-6">
                Trusted roofing service in the Columbus community
              </p>
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div>
                  <div className="text-4xl font-bold mb-2">5,000+</div>
                  <div className="text-gray-100">Columbus Roofs Completed</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">24/7</div>
                  <div className="text-gray-100">Emergency Service</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">100%</div>
                  <div className="text-gray-100">Satisfaction Guarantee</div>
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
            Ready to Get Started?
          </h2>
          <p className="text-xl text-charcoal-600 mb-8 max-w-2xl mx-auto">
            Contact DTE Roofing today for expert roofing services in Columbus
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
