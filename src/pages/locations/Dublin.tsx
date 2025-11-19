import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Phone, MapPin } from 'lucide-react';
import SEO from '../../components/SEO';

export default function Dublin() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Roofing Services Dublin OH | Premium Roof Repair & Replacement"
        description="Professional roofing services in Dublin, OH. Local experts serving Dublin with premium roof repair, replacement, installation. Quality workmanship. Free estimates. Call 614-971-6028."
        keywords="roofing Dublin OH, Dublin roofer, roof repair Dublin, roof replacement Dublin, Dublin roofing contractor"
        canonical="https://dteroofing.com/locations/dublin"
      />

      <section className="relative bg-gradient-to-br from-charcoal-900 via-charcoal-800 to-charcoal-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="w-6 h-6" />
              <span className="text-lg">Serving Dublin, Ohio</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Premium Roofing Services in Dublin</h1>
            <p className="text-xl text-gray-200 mb-6">
              Dublin's choice for quality roofing, exceptional service, and lasting value
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
              <h2 className="text-3xl font-bold text-charcoal-900 mb-6">Dublin's Premier Roofing Contractor</h2>
              <p className="text-lg text-charcoal-600 mb-6 leading-relaxed">
                Dublin is known for its beautiful homes and commitment to quality, and we're proud to uphold
                that standard with our roofing services. From historic Bridge Street to newer developments,
                we understand the high expectations of Dublin homeowners and deliver work that exceeds them.
              </p>
              <p className="text-lg text-charcoal-600 mb-6 leading-relaxed">
                DTE Roofing has been serving Dublin residents with dedication and expertise. We combine premium materials,
                expert craftsmanship, and exceptional customer service to protect Dublin's finest homes. Every
                project reflects our commitment to quality that Dublin homeowners deserve.
              </p>
              <div className="bg-primary-50 p-6 rounded-xl">
                <h3 className="font-bold text-charcoal-900 mb-4">Dublin Roofing Excellence</h3>
                <ul className="space-y-2">
                  {[
                    'Premium materials and workmanship',
                    'Respect for property and landscaping',
                    'Understanding of Dublin architectural standards',
                    'Quick response across all Dublin areas',
                    'Local references available',
                    'Comprehensive warranties'
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
                <h3 className="text-2xl font-bold text-charcoal-900 mb-6">Complete Roofing Solutions</h3>
                <ul className="space-y-3">
                  {[
                    'Premium roof replacement',
                    'Expert roof repairs',
                    'New construction roofing',
                    'Architectural shingles',
                    'Metal and tile roofing',
                    'Cedar shake roofing',
                    'Storm damage restoration',
                    'Roof inspections and maintenance',
                    'Seamless gutter systems',
                    'Gutter guard installation',
                    'Siding and exterior work',
                    'Insurance claims expertise'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary-700 flex-shrink-0 mt-1" />
                      <span className="text-charcoal-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6">
                <h3 className="font-bold text-charcoal-900 mb-2">Free Consultations</h3>
                <p className="text-charcoal-700 mb-4">
                  Schedule a free consultation with detailed estimate and material recommendations for your Dublin home.
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
            <h2 className="text-3xl font-bold text-charcoal-900 mb-8 text-center">Dublin Communities We Serve</h2>
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                'Historic Dublin',
                'Bridge Park',
                'Muirfield Village',
                'Tartan Fields',
                'Ballantrae',
                'Amberleigh',
                'Asherton',
                'Bellepoint',
                'Brandon',
                'Bryson Cove',
                'Donegal Cliffs',
                'Earlington Village',
                'Glacier Ridge',
                'Hawk\'s Nest',
                'Indian Run',
                'Karrer Place',
                'Riverside Glen',
                'Shannon Glen',
                'The Corners',
                'Tuttle Crossing'
              ].map((community, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg text-center">
                  <span className="text-charcoal-700">{community}</span>
                </div>
              ))}
            </div>
            <p className="text-center text-charcoal-600 mt-6">
              Serving all Dublin neighborhoods with the same commitment to quality and service
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="bg-gray-50 p-8 rounded-xl">
              <h2 className="text-2xl font-bold text-charcoal-900 mb-6">The DTE Difference in Dublin</h2>
              <div className="space-y-6">
                {[
                  {
                    title: 'Premium Materials',
                    description: 'We use only the highest quality roofing materials from trusted manufacturers'
                  },
                  {
                    title: 'Expert Craftsmen',
                    description: 'Our certified installers take pride in delivering flawless results'
                  },
                  {
                    title: 'Attention to Detail',
                    description: 'Meticulous work that respects your property and exceeds expectations'
                  },
                  {
                    title: 'Clear Communication',
                    description: 'Regular updates and responsive service throughout your project'
                  },
                  {
                    title: 'Property Protection',
                    description: 'Careful protection of landscaping, driveways, and adjacent areas'
                  },
                  {
                    title: 'Thorough Cleanup',
                    description: 'Complete cleanup with magnetic sweeps to remove all nails'
                  },
                  {
                    title: 'Strong Warranties',
                    description: 'Comprehensive coverage backed by our reputation'
                  },
                  {
                    title: 'Long-term Support',
                    description: 'Available for inspections, maintenance, and any future needs'
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
              <h2 className="text-2xl font-bold text-charcoal-900 mb-6">Dublin Homeowner Testimonials</h2>
              <div className="space-y-6">
                {[
                  {
                    name: 'Robert & Anne M.',
                    area: 'Muirfield Village',
                    text: 'Outstanding quality and professionalism. Our new roof is beautiful and the crew was respectful of our property. Highly recommend!'
                  },
                  {
                    name: 'Chris D.',
                    area: 'Tartan Fields',
                    text: 'DTE Roofing handled our insurance claim and storm damage repair perfectly. Professional from start to finish.'
                  },
                  {
                    name: 'Jennifer L.',
                    area: 'Bridge Park',
                    text: 'Excellent communication, quality work, and fair pricing. They made the whole process easy and stress-free.'
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
              <h2 className="text-3xl font-bold mb-4">Trusted in Dublin Since 2003</h2>
              <p className="text-xl mb-6">
                Exceptional roofing service to Dublin's finest homes
              </p>
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div>
                  <div className="text-4xl font-bold mb-2">3,500+</div>
                  <div className="text-gray-100">Dublin Homes Protected</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">Premium</div>
                  <div className="text-gray-100">Materials & Workmanship</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">5-Star</div>
                  <div className="text-gray-100">Customer Reviews</div>
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
            Protect Your Dublin Investment
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
