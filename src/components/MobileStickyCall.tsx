import { Phone } from 'lucide-react';

export default function MobileStickyCall() {
  return (
    <div className="md:hidden fixed bottom-6 right-6 z-50">
      <a
        href="tel:6149716028"
        className="bg-primary-700 text-white px-6 py-4 rounded-full hover:bg-primary-800 transition-all font-bold text-lg inline-flex items-center justify-center shadow-2xl hover:shadow-3xl transform hover:scale-105 active:scale-95"
        aria-label="Call DTE Roofing"
      >
        <Phone className="w-6 h-6 mr-2" />
        Call Now
      </a>
    </div>
  );
}
