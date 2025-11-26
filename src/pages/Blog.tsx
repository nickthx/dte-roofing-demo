import { Link } from 'react-router-dom';
import { Calendar, Clock, ChevronRight, User, Tag } from 'lucide-react';
import { useState, useEffect } from 'react';
import SEO from '../components/SEO';

interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  featuredImage: string;
  published: boolean;
}

export default function Blog() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/data/blog-posts.json')
      .then(response => response.json())
      .then(data => {
        const published = data.filter((post: BlogPost) => post.published);
        setBlogPosts(published);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error loading blog posts:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-700"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="BEST Roofer in Columbus – if you're looking for Honest Roofing Services near me or Expert Roof Repair & Replacement near me – DTE Roofing is the place to be."
        description="Expert roofing advice from DTE Roofing. Learn about roof maintenance, winter prep, signs you need a new roof, and more."
        keywords="roofing blog, roof maintenance tips, Ohio roofing advice"
        canonical="https://dteroofing.com/blog"
      />
      
      <section className="relative bg-gradient-to-br from-charcoal-900 via-charcoal-800 to-charcoal-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">DTE Roofing Blog</h1>
            <p className="text-xl text-gray-200">
              Expert roofing tips, maintenance guides, and industry insights for Columbus homeowners
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal-900 mb-12 text-center">
              Tips on Maintenance, Winter Prep, Roof Inspection, Storm Damage, Energy Efficiency, Materials, Installation & Repairs
            </h2>

            <div className="grid md:grid-cols-2 gap-12">
              {blogPosts.map((post) => (
                <article
                  key={post.id}
                  className="bg-white border-2 border-gray-200 rounded-2xl overflow-hidden hover:shadow-2xl hover:border-primary-300 transition-all duration-300 group"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={post.featuredImage}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary-700 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-8">
                    <div className="flex items-center gap-4 mb-4 text-sm text-charcoal-600">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2 text-primary-700" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2 text-primary-700" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-charcoal-900 mb-4 leading-tight group-hover:text-primary-700 transition-colors">
                      {post.title}
                    </h3>

                    <p className="text-charcoal-600 leading-relaxed mb-6">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                      <div className="flex items-center text-sm text-charcoal-700">
                        <User className="w-4 h-4 mr-2 text-charcoal-500" />
                        <span className="font-medium">By {post.author}</span>
                      </div>
                      <button className="bg-primary-700 text-white px-6 py-2 rounded-lg hover:bg-primary-800 transition-all font-semibold inline-flex items-center text-sm shadow-md hover:shadow-lg">
                        Read More <ChevronRight className="w-4 h-4 ml-1" />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-charcoal-900 mb-8 text-center">
              Popular Topics
            </h2>
            <div className="grid md:grid-cols-4 gap-4">
              {['Maintenance', 'Winter Prep', 'Roof Inspection', 'Storm Damage', 'Energy Efficiency', 'Materials', 'Installation', 'Repairs'].map((topic) => (
                <div
                  key={topic}
                  className="bg-white p-4 rounded-lg text-center border-2 border-gray-200 hover:border-primary-700 hover:shadow-md transition-all cursor-pointer"
                >
                  <Tag className="w-6 h-6 mx-auto mb-2 text-primary-700" />
                  <span className="font-semibold text-charcoal-900">{topic}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary-700 to-primary-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Need Professional Roofing Advice?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-primary-100">
            Our team is here to answer your roofing questions and provide expert guidance for your home
          </p>
          <Link
            to="/contact"
            className="bg-white text-primary-700 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all font-semibold text-lg inline-flex items-center justify-center shadow-lg"
          >
            Contact Our Experts <ChevronRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
