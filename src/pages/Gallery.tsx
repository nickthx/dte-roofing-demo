import { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['all', 'installations', 'repairs', 'commercial', 'residential'];

  const projects = [
    {
      id: 1,
      title: 'Architectural Shingle Roof Replacement',
      category: 'installations',
      type: 'residential',
      description: 'Complete tear-off and replacement with premium Owens Corning Duration shingles in Estate Gray',
      image: 'https://images.pexels.com/photos/209296/pexels-photo-209296.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Architectural shingle roof installation by DTE Roofing in Columbus Ohio residential home'
    },
    {
      id: 2,
      title: 'Modern Black Architectural Shingles',
      category: 'installations',
      type: 'residential',
      description: 'New construction roof installation featuring GAF Timberline HDZ shingles in Charcoal',
      image: 'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Black architectural shingle roof installed by DTE Roofing Columbus Ohio new construction'
    },
    {
      id: 3,
      title: 'Storm Damage Roof Restoration',
      category: 'repairs',
      type: 'residential',
      description: 'Emergency storm damage repair and replacement after severe hail damage',
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Storm damage roof repair and restoration by DTE Roofing Columbus Ohio residential'
    },
    {
      id: 4,
      title: 'Standing Seam Metal Roof',
      category: 'installations',
      type: 'residential',
      description: 'Custom standing seam metal roof system in Bronze finish for superior durability',
      image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Metal roof installation standing seam by DTE Roofing Columbus Ohio residential home'
    },
    {
      id: 5,
      title: 'Commercial TPO Flat Roof',
      category: 'installations',
      type: 'commercial',
      description: 'Multi-building office complex with white TPO membrane roofing system',
      image: 'https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Commercial flat roof TPO installation by DTE Roofing Columbus Ohio office building'
    },
    {
      id: 6,
      title: 'Asphalt Shingle Roof Installation',
      category: 'installations',
      type: 'residential',
      description: 'Traditional 3-tab asphalt shingle replacement on Columbus family home',
      image: 'https://images.pexels.com/photos/210617/pexels-photo-210617.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Asphalt shingle roof installed by DTE Roofing in Columbus Ohio residential property'
    },
    {
      id: 7,
      title: 'Colonial Style Shingle Roof',
      category: 'installations',
      type: 'residential',
      description: 'Premium architectural shingles on colonial-style home with detailed flashing work',
      image: 'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Colonial home roof replacement architectural shingles DTE Roofing Columbus Ohio'
    },
    {
      id: 8,
      title: 'Warehouse Commercial Roofing',
      category: 'installations',
      type: 'commercial',
      description: 'Large-scale industrial warehouse roof replacement with EPDM rubber roofing',
      image: 'https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Commercial warehouse roof installation EPDM by DTE Roofing Columbus Ohio industrial'
    },
    {
      id: 9,
      title: 'Residential Roof Repair',
      category: 'repairs',
      type: 'residential',
      description: 'Professional leak repair and damaged shingle replacement on residential property',
      image: 'https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Roof repair services leak detection DTE Roofing Columbus Ohio residential home'
    },
    {
      id: 10,
      title: 'Brown Architectural Shingle Roof',
      category: 'installations',
      type: 'residential',
      description: 'Complete roof replacement with CertainTeed Landmark shingles in Burnt Sienna',
      image: 'https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Brown architectural shingle roof replacement DTE Roofing Columbus Ohio suburban home'
    },
    {
      id: 11,
      title: 'Modern Residential Complex',
      category: 'installations',
      type: 'residential',
      description: 'Multi-unit residential roofing project with coordinated color schemes',
      image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Residential complex roof installation DTE Roofing Columbus Ohio multi-unit property'
    },
    {
      id: 12,
      title: 'Retail Building Commercial Roof',
      category: 'installations',
      type: 'commercial',
      description: 'Commercial retail center roof replacement with modified bitumen system',
      image: 'https://images.pexels.com/photos/221540/pexels-photo-221540.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Commercial retail roof installation modified bitumen DTE Roofing Columbus Ohio'
    }
  ];

  const filteredProjects = projects.filter(project => {
    if (selectedCategory === 'all') return true;
    return project.category === selectedCategory || project.type === selectedCategory;
  });

  return (
    <div className="min-h-screen bg-white">
      <section className="relative bg-gradient-to-br from-charcoal-900 via-charcoal-800 to-charcoal-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Project Gallery</h1>
            <p className="text-xl text-gray-200">
              Explore our portfolio of completed roofing projects
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                  selectedCategory === category
                    ? 'bg-primary-700 text-white'
                    : 'bg-gray-100 text-charcoal-700 hover:bg-gray-200'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div key={project.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-charcoal-900 mb-2">{project.title}</h3>
                  <p className="text-charcoal-600 mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-block bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-semibold">
                      {project.category}
                    </span>
                    <span className="inline-block bg-gray-100 text-charcoal-700 px-3 py-1 rounded-full text-sm font-semibold">
                      {project.type}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-charcoal-900 mb-6">Want to See Your Project Here?</h2>
          <p className="text-xl text-charcoal-600 mb-8 max-w-2xl mx-auto">
            Let's work together to create something amazing for your home or business
          </p>
          <Link
            to="/contact"
            className="bg-primary-700 text-white px-8 py-4 rounded-lg hover:bg-primary-800 transition-all font-semibold text-lg inline-flex items-center justify-center"
          >
            Start Your Project <ChevronRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
