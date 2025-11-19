import { useEffect, useState } from 'react';
import SEO from '../components/SEO';
import { Calculator, CheckCircle, Clock, Shield, AlertCircle } from 'lucide-react';

export default function InstantQuote() {
  const [widgetLoaded, setWidgetLoaded] = useState(false);
  const [widgetError, setWidgetError] = useState(false);

  useEffect(() => {
    const checkWidgetLoad = () => {
      const script = document.querySelector('script[src*="roof-quote-pro-embedded-widget"]');

      if (script) {
        script.addEventListener('load', () => {
          setWidgetLoaded(true);
        });

        script.addEventListener('error', () => {
          setWidgetError(true);
        });
      }

      const timeout = setTimeout(() => {
        const container = document.getElementById('roofle-embedded-container');
        if (container && container.children.length === 0) {
          setWidgetError(true);
        }
      }, 10000);

      return () => clearTimeout(timeout);
    };

    checkWidgetLoad();
  }, []);

  return (
    <>
      <SEO
        title="Get Your Instant Roof Quote | DTE Roofing"
        description="Get an accurate roof replacement quote in 30 seconds. AI-powered estimates using satellite imagery. No inspection needed to get started."
        keywords="instant roof quote, roof cost calculator, roof estimate, roof replacement cost, free roof quote"
        canonical="https://dteroofingllc.com/instant-quote"
      />

      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
        <section className="bg-gradient-to-br from-primary-700 via-primary-800 to-primary-900 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 rounded-full mb-6">
                <Calculator className="w-10 h-10" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Get Your Instant Roof Quote
              </h1>
              <p className="text-xl text-white/90 mb-8">
                AI-powered estimates in 30 seconds using satellite imagery. See your price range before we even visit.
              </p>

              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <Clock className="w-8 h-8 mb-2 mx-auto" />
                  <div className="font-semibold">30 Seconds</div>
                  <div className="text-sm text-white/80">Instant results</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <Shield className="w-8 h-8 mb-2 mx-auto" />
                  <div className="font-semibold">No Obligation</div>
                  <div className="text-sm text-white/80">Free to use</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <CheckCircle className="w-8 h-8 mb-2 mx-auto" />
                  <div className="font-semibold">Accurate</div>
                  <div className="text-sm text-white/80">Satellite-powered</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden min-h-[600px] relative">
                <div id="roofle-embedded-container" className="w-full min-h-[600px]"></div>

                {!widgetLoaded && !widgetError && (
                  <div className="absolute inset-0 flex items-center justify-center bg-white">
                    <div className="text-center">
                      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-700 mx-auto mb-4"></div>
                      <p className="text-charcoal-600">Loading instant quote tool...</p>
                    </div>
                  </div>
                )}

                {widgetError && (
                  <div className="absolute inset-0 flex items-center justify-center bg-white p-8">
                    <div className="text-center max-w-md">
                      <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <AlertCircle className="w-8 h-8 text-yellow-600" />
                      </div>
                      <h3 className="text-xl font-bold text-charcoal-900 mb-3">Quote Tool Temporarily Unavailable</h3>
                      <p className="text-charcoal-600 mb-6">
                        We're experiencing technical difficulties with our instant quote tool. Please contact us directly for a free estimate.
                      </p>
                      <div className="space-y-3">
                        <a
                          href="tel:6149716028"
                          className="block w-full bg-primary-700 text-white px-6 py-3 rounded-lg hover:bg-primary-800 transition-all font-bold"
                        >
                          Call 614-971-6028
                        </a>
                        <a
                          href="/contact"
                          className="block w-full bg-charcoal-800 text-white px-6 py-3 rounded-lg hover:bg-charcoal-900 transition-all font-semibold"
                        >
                          Contact Us Online
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="mt-8 bg-blue-50 border-2 border-blue-200 rounded-xl p-6">
                <h3 className="text-xl font-bold text-charcoal-900 mb-3">How It Works</h3>
                <ol className="space-y-2 text-charcoal-700">
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-primary-700 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
                    <span>Enter your property address</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-primary-700 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
                    <span>Our AI analyzes your roof using satellite imagery</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-primary-700 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
                    <span>Get instant pricing for different roofing options</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-primary-700 text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
                    <span>Schedule a free in-person inspection to confirm details</span>
                  </li>
                </ol>
              </div>

              <div className="mt-8 text-center">
                <p className="text-sm text-charcoal-600 mb-4">
                  Trusted by homeowners across Columbus, Hilliard, and Dublin
                </p>
                <div className="flex flex-wrap justify-center gap-4 text-sm text-charcoal-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span>Licensed & Insured</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span>86+ Five-Star Reviews</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span>Locally Owned</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
