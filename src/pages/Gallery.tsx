import { useState } from 'react';
import { ChevronRight, X, MapPin, ChevronLeft, ChevronRight as ChevronRightIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import MobileStickyCall from '../components/MobileStickyCall';

interface GalleryProject {
  id: number;
  title: string;
  category: string;
  location: string;
  image: string;
  alt: string;
}

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const categories = [
    { value: 'all', label: 'All Projects' },
    { value: 'installations', label: 'Installations' },
    { value: 'repairs', label: 'Repairs' },
    { value: 'commercial', label: 'Commercial' },
    { value: 'residential', label: 'Residential' }
  ];

  const projects: GalleryProject[] = [
    {
      id: 1,
      title: 'Residential Roof Replacement',
      category: 'installations',
      location: 'Columbus, OH',
      image: '/IMG_20240614_162239.jpg',
      alt: 'Completed residential roof with dark architectural shingles, aerial view'
    },
    {
      id: 2,
      title: 'Premium Asphalt Shingles',
      category: 'installations',
      location: 'Dublin, OH',
      image: '/PXL_20240910_193642307.jpg',
      alt: 'Close-up view of high-quality dark architectural shingle installation'
    },
    {
      id: 3,
      title: 'Ridge Cap Installation',
      category: 'installations',
      location: 'Westerville, OH',
      image: '/PXL_20240223_174412521.jpg',
      alt: 'Professional ridge cap and flashing work on residential roof'
    },
    {
      id: 4,
      title: 'Architectural Shingle Design',
      category: 'installations',
      location: 'Powell, OH',
      image: '/PXL_20241117_184811431.jpg',
      alt: 'Multi-tone architectural shingles showing dimensional pattern'
    },
    {
      id: 5,
      title: 'Roof Repair & Maintenance',
      category: 'repairs',
      location: 'New Albany, OH',
      image: '/PXL_20241123_193437816.jpg',
      alt: 'Professional roof inspection and repair services'
    },
    {
      id: 6,
      title: 'Asphalt Shingle Installation',
      category: 'residential',
      location: 'Dublin, OH',
      image: 'https://images.pexels.com/photos/210617/pexels-photo-210617.jpeg?auto=compress&cs=tinysrgb&w=1200',
      alt: 'Asphalt shingle roof installed by DTE Roofing'
    }
  ];

  const filteredProjects = projects.filter(project => {
    if (selectedCategory === 'all') return true;
    return project.category === selectedCategory;
  });

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'unset';
  };

  const goToNext = () => {
    setCurrentImageIndex((prev) => (prev + 1) % filteredProjects.length);
  };

  const goToPrevious = () => {
    setCurrentImageIndex((prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') goToNext();
    if (e.key === 'ArrowLeft') goToPrevious();
  };

  return (
    <>
      <MobileStickyCall />
      <div className="min-h-screen bg-white">
        <SEO
          title="Roofing Project Gallery - DTE Roofing Columbus OH | Before & After Photos"
          description="View our portfolio of completed roofing projects in Columbus, Dublin, and Hilliard OH. See quality roof installations, repairs, and commercial roofing work by DTE Roofing."
          keywords="roofing gallery Columbus, roof installation photos, before after roofing, Columbus roofing projects, DTE Roofing portfolio"
          canonical="https://dteroofing.com/gallery"
        />

        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-charcoal-900 via-charcoal-800 to-charcoal-900 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Project Gallery</h1>
              <p className="text-xl text-gray-200">
                Explore our portfolio of completed roofing projects across Columbus, Dublin, and Hilliard
              </p>
            </div>
          </div>
        </section>

        {/* Filter Buttons */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <button
                  key={category.value}
                  onClick={() => setSelectedCategory(category.value)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                    selectedCategory === category.value
                      ? 'bg-primary-700 text-white shadow-lg scale-105'
                      : 'bg-white text-charcoal-700 hover:bg-gray-100 shadow-md hover:shadow-lg'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
            <p className="text-center mt-6 text-charcoal-600">
              Showing {filteredProjects.length} {filteredProjects.length === 1 ? 'project' : 'projects'}
            </p>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {filteredProjects.map((project, index) => (
                <div
                  key={project.id}
                  className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
                  onClick={() => openLightbox(index)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && openLightbox(index)}
                  aria-label={`View ${project.title} in lightbox`}
                >
                  {/* Image Container */}
                  <div className="relative h-72 overflow-hidden bg-gray-200">
                    <img
                      src={project.image}
                      alt={project.alt}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8">
                      <span className="text-white font-semibold text-lg">Click to View</span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-5">
                    <h3 className="text-xl font-bold text-charcoal-900 mb-3 group-hover:text-primary-700 transition-colors">
                      {project.title}
                    </h3>

                    {/* Location Badge */}
                    <div className="flex items-center text-charcoal-600">
                      <MapPin className="w-4 h-4 mr-2 text-primary-700" />
                      <span className="text-sm font-medium">{project.location}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* No Results Message */}
            {filteredProjects.length === 0 && (
              <div className="text-center py-16">
                <p className="text-xl text-charcoal-600">No projects found in this category.</p>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-primary-700 to-primary-800 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-95">
              Let's work together to create something amazing for your home or business. Get your free estimate today.
            </p>
            <Link
              to="/contact"
              className="bg-white text-primary-700 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all font-semibold text-lg inline-flex items-center justify-center shadow-xl hover:shadow-2xl hover:scale-105"
            >
              Get Free Estimate <ChevronRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </section>
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
          onClick={closeLightbox}
          onKeyDown={handleKeyDown}
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors p-2 z-10"
            aria-label="Close lightbox"
          >
            <X className="w-8 h-8" />
          </button>

          {/* Previous Button */}
          {filteredProjects.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToPrevious();
              }}
              className="absolute left-4 text-white hover:text-gray-300 transition-colors p-2 z-10"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-10 h-10" />
            </button>
          )}

          {/* Next Button */}
          {filteredProjects.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
              className="absolute right-4 text-white hover:text-gray-300 transition-colors p-2 z-10"
              aria-label="Next image"
            >
              <ChevronRightIcon className="w-10 h-10" />
            </button>
          )}

          {/* Image Container */}
          <div
            className="max-w-6xl max-h-[90vh] w-full flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={filteredProjects[currentImageIndex].image}
              alt={filteredProjects[currentImageIndex].alt}
              className="max-w-full max-h-[75vh] object-contain rounded-lg shadow-2xl"
            />

            {/* Image Info */}
            <div className="mt-6 text-center text-white">
              <h3 className="text-2xl font-bold mb-2">
                {filteredProjects[currentImageIndex].title}
              </h3>
              <div className="flex items-center justify-center text-gray-300">
                <MapPin className="w-5 h-5 mr-2" />
                <span>{filteredProjects[currentImageIndex].location}</span>
              </div>
              <p className="text-sm text-gray-400 mt-3">
                {currentImageIndex + 1} / {filteredProjects.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
