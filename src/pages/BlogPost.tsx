import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { Calendar, ArrowLeft, MapPin, User } from 'lucide-react';
import SEO from '../components/SEO';

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content_html: string;
  tags: string[];
  city: string;
  state: string;
  published_at: string;
  created_at: string;
  status: string;
}

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPost() {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('slug', slug)
        .eq('status', 'published')
        .single();

      if (error) {
        console.error('Error fetching post:', error);
      } else {
        setPost(data);
      }
      setLoading(false);
    }

    if (slug) {
      fetchPost();
    }
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-700"></div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold text-charcoal-900 mb-4">Post Not Found</h1>
        <p className="text-charcoal-600 mb-8">The blog post you're looking for doesn't exist.</p>
        <Link 
          to="/blog" 
          className="bg-primary-700 text-white px-6 py-3 rounded-lg hover:bg-primary-800 transition-all font-semibold inline-flex items-center"
        >
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title={`${post.title} | DTE Roofing Blog`}
        description={post.excerpt}
        keywords={post.tags?.join(', ') || 'roofing, Columbus, Ohio'}
        canonical={`https://dteroofingllc.com/blog/${post.slug}`}
      />

      {/* Header */}
      <section className="relative bg-gradient-to-br from-charcoal-900 via-charcoal-800 to-charcoal-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link
              to="/blog"
              className="inline-flex items-center text-gray-300 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-2" /> Back to Blog
            </Link>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-4 text-gray-300">
              <span className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                {new Date(post.published_at).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </span>
              <span className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                {post.city}, {post.state}
              </span>
              <span className="flex items-center">
                <User className="h-4 w-4 mr-2" />
                DTE Roofing
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <article className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {post.tags?.map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 bg-primary-100 text-primary-700 text-sm font-medium rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Article Content */}
            <div
              className="prose prose-lg max-w-none 
                prose-headings:text-charcoal-900 prose-headings:font-bold
                prose-h1:text-3xl prose-h1:mb-6
                prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
                prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
                prose-p:text-charcoal-700 prose-p:leading-relaxed prose-p:mb-4
                prose-a:text-primary-700 prose-a:no-underline hover:prose-a:underline
                prose-ul:my-4 prose-ul:pl-6
                prose-li:text-charcoal-700 prose-li:mb-2
                prose-strong:text-charcoal-900"
              dangerouslySetInnerHTML={{ __html: post.content_html }}
            />

            {/* CTA Section */}
            <div className="mt-12 p-8 bg-gradient-to-br from-primary-700 to-primary-800 rounded-2xl text-white">
              <h3 className="text-2xl font-bold mb-4">
                Need Roofing Help in {post.city}?
              </h3>
              <p className="text-primary-100 mb-6 text-lg">
                DTE Roofing LLC provides expert roofing services throughout {post.city}, {post.state}.
                Contact us today for a free inspection and estimate.
              </p>
              <Link
                to="/contact"
                className="inline-block bg-white text-primary-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
              >
                Get a Free Quote
              </Link>
            </div>

            {/* Back to Blog */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <Link
                to="/blog"
                className="inline-flex items-center text-primary-700 font-semibold hover:text-primary-800 transition-colors"
              >
                <ArrowLeft className="h-4 w-4 mr-2" /> Back to All Articles
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}