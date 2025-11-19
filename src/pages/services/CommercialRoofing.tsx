import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Building2, Clock, Shield } from 'lucide-react';
import SEO from '../../components/SEO';

export default function CommercialRoofing() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Commercial Roofing Columbus OH | Business Roof Services"
        description="Expert commercial roofing services in Columbus, OH. TPO, EPDM, metal roofing. Minimal disruption, maintenance programs, emergency service. Licensed & insured. Call 614-971-6028."
        keywords="commercial roofing Columbus, business roofing, flat roof repair, TPO roofing, EPDM roofing, commercial roof replacement"
        canonical="https://dteroofing.com/services/commercial-roofing"
      />

      <section className="relative bg-gradient-to-br from-charcoal-900 via-charcoal-800 to-charcoal-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Commercial Roofing Services</h1>
            <p className="text-xl text-gray-200">
              Professional roofing solutions for businesses and commercial properties
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold text-charcoal-900 mb-6">Commercial Roofing Solutions in Columbus, OH</h2>
              <p className="text-lg text-charcoal-600 mb-6 leading-relaxed">
                Columbus-area businesses trust DTE Roofing for their commercial
                roofing needs. From small retail shops in Hilliard to large industrial facilities in Grove City,
                we understand that your roof protects more than just a building—it protects your business,
                inventory, employees, and operations. Commercial roofing requires specialized expertise, quality
                materials, and careful planning to avoid disrupting your daily business.
              </p>
              <p className="text-lg text-charcoal-600 mb-6 leading-relaxed">
                We work around your schedule—including evenings and weekends when needed—to minimize downtime.
                Our team provides detailed project planning, transparent communication, and expert installation
                of TPO, EPDM, metal roofing, and coating systems designed for Ohio's commercial applications.
              </p>
              <div className="grid md:grid-cols-3 gap-4 mt-8">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Building2 className="w-10 h-10 text-primary-700 mx-auto mb-2" />
                  <h3 className="font-bold text-charcoal-900 text-sm mb-1">Commercial Expertise</h3>
                  <p className="text-xs text-charcoal-600">Business-focused service</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Clock className="w-10 h-10 text-primary-700 mx-auto mb-2" />
                  <h3 className="font-bold text-charcoal-900 text-sm mb-1">Flexible Scheduling</h3>
                  <p className="text-xs text-charcoal-600">Minimize disruption</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Shield className="w-10 h-10 text-primary-700 mx-auto mb-2" />
                  <h3 className="font-bold text-charcoal-900 text-sm mb-1">Fully Insured</h3>
                  <p className="text-xs text-charcoal-600">Complete protection</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
              <h3 className="text-2xl font-bold text-charcoal-900 mb-6">Commercial Services</h3>
              <ul className="space-y-4">
                {[
                  'New commercial roof installation',
                  'Flat roof repair and restoration',
                  'TPO and EPDM roofing systems',
                  'Metal roofing installation',
                  'Roof coating systems',
                  'Emergency repair services',
                  'Preventative maintenance programs',
                  'Roof inspections and assessments',
                  'Storm damage restoration',
                  'Leak detection and repair',
                  'Tenant improvement projects',
                  'Multi-property management'
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
            <h2 className="text-3xl font-bold text-charcoal-900 mb-8 text-center">Commercial Roofing Systems</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'TPO Roofing',
                  description: 'Single-ply membrane that\'s energy efficient and durable',
                  features: [
                    'Energy efficient white surface',
                    'Heat-welded seams',
                    'Excellent durability',
                    'Resists UV and ozone',
                    'Cost-effective',
                    'Easy to maintain',
                    '15-30 year lifespan',
                    'Environmentally friendly'
                  ]
                },
                {
                  title: 'EPDM Roofing',
                  description: 'Proven rubber membrane for flat and low-slope roofs',
                  features: [
                    'Excellent durability',
                    'Weather resistant',
                    'Easy to install',
                    'Low maintenance',
                    'Cost-effective',
                    'Fire resistant',
                    '20-30 year lifespan',
                    'Black or white options'
                  ]
                },
                {
                  title: 'Metal Roofing',
                  description: 'Long-lasting solution for commercial applications',
                  features: [
                    'Extreme durability',
                    'Fire resistant',
                    'Energy efficient',
                    'Low maintenance',
                    'Multiple styles',
                    'Excellent drainage',
                    '40-70 year lifespan',
                    'Sustainable choice'
                  ]
                },
                {
                  title: 'Built-Up Roofing (BUR)',
                  description: 'Traditional multi-layer system for flat roofs',
                  features: [
                    'Proven performance',
                    'Multiple protective layers',
                    'Excellent waterproofing',
                    'UV protection',
                    'Cost-effective',
                    'Good for low-traffic roofs',
                    '15-30 year lifespan',
                    'Easily repaired'
                  ]
                },
                {
                  title: 'Modified Bitumen',
                  description: 'Enhanced asphalt system with added durability',
                  features: [
                    'Excellent flexibility',
                    'Self-healing properties',
                    'Good for high-traffic areas',
                    'Weather resistant',
                    'Easy to repair',
                    'Multiple installation methods',
                    '15-25 year lifespan',
                    'Cost-effective'
                  ]
                },
                {
                  title: 'Roof Coating Systems',
                  description: 'Extend life of existing commercial roofs',
                  features: [
                    'Restore aging roofs',
                    'Energy savings',
                    'Seamless membrane',
                    'Reflects heat',
                    'Extends roof life 10+ years',
                    'Cost-effective solution',
                    'Quick installation',
                    'Minimal disruption'
                  ]
                }
              ].map((system, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                  <h3 className="text-xl font-bold text-charcoal-900 mb-3">{system.title}</h3>
                  <p className="text-charcoal-600 mb-4 text-sm">{system.description}</p>
                  <ul className="space-y-2">
                    {system.features.map((feature, i) => (
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
              <h2 className="text-2xl font-bold text-charcoal-900 mb-6">Why Choose DTE for Commercial Roofing?</h2>
              <div className="space-y-6">
                {[
                  {
                    title: 'Minimal Business Disruption',
                    description: 'We work around your schedule, including evenings and weekends if needed'
                  },
                  {
                    title: 'Experienced Commercial Team',
                    description: 'Specialized training and equipment for commercial projects'
                  },
                  {
                    title: 'Safety First',
                    description: 'Comprehensive safety protocols and fully insured crews'
                  },
                  {
                    title: 'Quality Materials',
                    description: 'Premium commercial-grade materials from trusted manufacturers'
                  },
                  {
                    title: 'Detailed Planning',
                    description: 'Thorough project planning and transparent communication'
                  },
                  {
                    title: 'Warranty Protection',
                    description: 'Comprehensive warranties on materials and workmanship'
                  },
                  {
                    title: 'Maintenance Programs',
                    description: 'Proactive maintenance to extend roof life and prevent issues'
                  },
                  {
                    title: 'Emergency Service',
                    description: '24/7 availability for urgent commercial roofing needs'
                  }
                ].map((item, index) => (
                  <div key={index}>
                    <h3 className="font-bold text-charcoal-900 mb-2 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-primary-700 flex-shrink-0" />
                      {item.title}
                    </h3>
                    <p className="text-charcoal-600 pl-7">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              <h2 className="text-2xl font-bold text-charcoal-900 mb-6">Commercial Maintenance Programs</h2>
              <p className="text-charcoal-600 mb-6">
                Protect your investment with a customized maintenance program designed for your property
                and business needs.
              </p>
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-charcoal-900 mb-3">Program Includes:</h3>
                  <ul className="space-y-2">
                    {[
                      'Bi-annual roof inspections',
                      'Detailed photo documentation',
                      'Immediate minor repairs',
                      'Gutter and drain cleaning',
                      'Debris removal',
                      'Preventive maintenance',
                      'Priority emergency service',
                      'Long-term budget planning',
                      'Compliance documentation',
                      'Multi-property discounts'
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-primary-700 flex-shrink-0 mt-0.5" />
                        <span className="text-charcoal-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg border border-gray-300">
                  <h4 className="font-bold text-charcoal-900 mb-2">Benefits:</h4>
                  <ul className="space-y-1 text-sm text-charcoal-700">
                    <li>• Extend roof lifespan by years</li>
                    <li>• Prevent costly emergency repairs</li>
                    <li>• Maintain warranty coverage</li>
                    <li>• Budget predictability</li>
                    <li>• Peace of mind</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-8 rounded-r-xl">
            <h3 className="font-bold text-charcoal-900 mb-4 text-xl">Property Types We Serve</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                ['Retail Centers', 'Office Buildings', 'Warehouses', 'Industrial Facilities'],
                ['Apartment Complexes', 'Hotels & Hospitality', 'Medical Facilities', 'Schools & Churches'],
                ['Restaurants', 'Storage Facilities', 'Manufacturing Plants', 'Mixed-Use Buildings']
              ].map((column, colIndex) => (
                <ul key={colIndex} className="space-y-2">
                  {column.map((type, i) => (
                    <li key={i} className="flex items-center text-charcoal-700">
                      <CheckCircle className="w-4 h-4 text-primary-700 mr-2 flex-shrink-0" />
                      <span>{type}</span>
                    </li>
                  ))}
                </ul>
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
