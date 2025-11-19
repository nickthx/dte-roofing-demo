import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import Reviews from './pages/Reviews';
import Blog from './pages/Blog';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import RoofInstallation from './pages/services/RoofInstallation';
import RoofRepair from './pages/services/RoofRepair';
import RoofReplacement from './pages/services/RoofReplacement';
import RoofInspection from './pages/services/RoofInspection';
import GutterServices from './pages/services/GutterServices';
import Gutters from './pages/services/Gutters';
import EmergencyServices from './pages/services/EmergencyServices';
import StormDamage from './pages/services/StormDamage';
import RoofMaintenance from './pages/services/RoofMaintenance';
import PreventativeMaintenance from './pages/services/PreventativeMaintenance';
import Siding from './pages/services/Siding';
import CommercialRoofing from './pages/services/CommercialRoofing';
import Columbus from './pages/locations/Columbus';
import Hilliard from './pages/locations/Hilliard';
import Dublin from './pages/locations/Dublin';
import InstantQuote from './pages/InstantQuote';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white flex flex-col">
        <Navigation />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/roof-installation" element={<RoofInstallation />} />
            <Route path="/services/roof-repair" element={<RoofRepair />} />
            <Route path="/services/roof-replacement" element={<RoofReplacement />} />
            <Route path="/services/roof-inspection" element={<RoofInspection />} />
            <Route path="/services/gutter-services" element={<GutterServices />} />
            <Route path="/services/gutters" element={<Gutters />} />
            <Route path="/services/emergency-services" element={<EmergencyServices />} />
            <Route path="/services/storm-damage" element={<StormDamage />} />
            <Route path="/services/roof-maintenance" element={<RoofMaintenance />} />
            <Route path="/services/preventative-maintenance" element={<PreventativeMaintenance />} />
            <Route path="/services/siding" element={<Siding />} />
            <Route path="/services/commercial-roofing" element={<CommercialRoofing />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/locations/columbus" element={<Columbus />} />
            <Route path="/locations/hilliard" element={<Hilliard />} />
            <Route path="/locations/dublin" element={<Dublin />} />
            <Route path="/instant-quote" element={<InstantQuote />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
