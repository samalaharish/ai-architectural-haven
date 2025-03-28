
import { useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import RevealAnimation from '../components/ui/RevealAnimation';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const blogCategories = [
  'All',
  'Design Tips',
  'Trends',
  'Case Studies',
  'Materials',
  'Technology'
];

const blogPosts = [
  {
    id: 1,
    title: 'Top 5 Interior Design Trends for 2023',
    excerpt: 'Discover the latest design trends that are shaping modern Indian homes this year...',
    image: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?w=800&auto=format&fit=crop',
    category: 'Trends',
    date: 'April 12, 2023',
    author: 'Priya Mehta'
  },
  {
    id: 2,
    title: 'How to Choose the Right Color Palette for Your Home',
    excerpt: 'Learn the principles of color theory and how to apply them to create harmonious interiors...',
    image: 'https://images.unsplash.com/photo-1507692049790-de58290a4334?w=800&auto=format&fit=crop',
    category: 'Design Tips',
    date: 'May 23, 2023',
    author: 'Arjun Sharma'
  },
  {
    id: 3,
    title: 'Small Space Makeover: 2BHK Apartment Transformation',
    excerpt: 'See how we transformed a compact 2BHK apartment into a spacious, functional home...',
    image: 'https://images.unsplash.com/photo-1617104678098-de229db51b21?w=800&auto=format&fit=crop',
    category: 'Case Studies',
    date: 'June 15, 2023',
    author: 'Rahul Kapoor'
  },
  {
    id: 4,
    title: 'Sustainable Materials in Modern Interior Design',
    excerpt: 'Explore eco-friendly materials that combine aesthetics with environmental responsibility...',
    image: 'https://images.unsplash.com/photo-1579656381253-c2f1241ff37e?w=800&auto=format&fit=crop',
    category: 'Materials',
    date: 'July 5, 2023',
    author: 'Anika Patel'
  }
];

const Blog = () => {
  // Set meta tags for SEO
  useEffect(() => {
    document.title = "Interior Design Insights & Articles | Vaarahi Design Studio Blog";
    
    // Set meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Explore our collection of articles, case studies, and design insights about interior design, renovation trends, and home styling tips.");
    }
  }, []);
  
  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-indigo text-cream">
        <div className="content-container">
          <RevealAnimation>
            <span className="inline-block mb-4 px-4 py-1 bg-gold/20 text-gold rounded-full text-sm font-medium">
              Our Blog
            </span>
          </RevealAnimation>
          
          <RevealAnimation delay={200}>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 max-w-4xl">
              Design Insights & Inspiration
            </h1>
          </RevealAnimation>
          
          <RevealAnimation delay={400}>
            <p className="text-xl max-w-3xl text-cream/80 mb-12">
              Explore our collection of articles, case studies, and design insights to fuel your creative journey.
            </p>
          </RevealAnimation>
        </div>
      </section>
      
      {/* Blog Categories */}
      <section className="py-12 border-b border-indigo/10">
        <div className="content-container">
          <div className="flex justify-center flex-wrap gap-4">
            {blogCategories.map((category, index) => (
              <button
                key={index}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                  index === 0
                    ? 'bg-indigo text-cream'
                    : 'bg-white text-indigo hover:bg-indigo/10'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>
      
      {/* Featured Article */}
      <section className="py-16">
        <div className="content-container">
          <RevealAnimation>
            <div className="bg-white rounded-xl overflow-hidden shadow-md">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <div className="h-64 md:h-full">
                    <img 
                      src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&auto=format&fit=crop" 
                      alt="Featured article about interior design" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                <div className="md:w-1/2 p-8">
                  <span className="inline-block mb-2 px-3 py-1 bg-gold/10 text-gold rounded-full text-xs font-medium">
                    Featured
                  </span>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 text-indigo">The Evolution of Indian Home Design: Traditional to Contemporary</h2>
                  <p className="text-indigo/70 mb-6">
                    Explore how Indian home interiors have evolved over the decades, blending traditional elements with contemporary aesthetics to create spaces that honor cultural heritage while embracing modern living.
                  </p>
                  
                  <div className="flex items-center mb-6">
                    <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                      <img 
                        src="https://randomuser.me/api/portraits/women/44.jpg" 
                        alt="Priya Mehta" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-medium text-indigo">Priya Mehta</p>
                      <p className="text-sm text-indigo/60">August 18, 2023</p>
                    </div>
                  </div>
                  
                  <a href="#" className="inline-flex items-center text-gold font-medium hover:underline">
                    Read full article <ArrowRight size={16} className="ml-2" />
                  </a>
                </div>
              </div>
            </div>
          </RevealAnimation>
        </div>
      </section>
      
      {/* Blog Articles Grid */}
      <section className="py-16">
        <div className="content-container">
          <RevealAnimation>
            <h2 className="text-3xl font-bold mb-10 text-indigo">Latest Articles</h2>
          </RevealAnimation>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <RevealAnimation key={post.id} delay={index * 100}>
                <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-xs font-medium px-3 py-1 bg-indigo/10 text-indigo rounded-full">
                        {post.category}
                      </span>
                      <span className="text-sm text-indigo/60">{post.date}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3 text-indigo">{post.title}</h3>
                    <p className="text-indigo/70 mb-4">{post.excerpt}</p>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-indigo/60">By {post.author}</span>
                      <a href="#" className="text-gold flex items-center hover:underline">
                        Read more <ArrowRight size={16} className="ml-1" />
                      </a>
                    </div>
                  </div>
                </div>
              </RevealAnimation>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <span className="inline-block text-indigo/70 mb-6">
              More articles coming soon! Check back regularly for new insights.
            </span>
          </div>
        </div>
      </section>
      
      {/* Newsletter */}
      <section className="py-20 bg-indigo/5">
        <div className="content-container max-w-4xl mx-auto">
          <RevealAnimation>
            <div className="bg-indigo rounded-xl p-8 md:p-12 text-center text-cream">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
              <p className="mb-8 text-cream/80">
                Stay updated with the latest design trends, tips, and insights delivered straight to your inbox.
              </p>
              
              <form className="flex flex-col md:flex-row gap-4 max-w-xl mx-auto">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="flex-grow px-4 py-3 rounded-md text-indigo"
                  required
                />
                <button type="submit" className="bg-gold text-indigo px-6 py-3 rounded-md font-medium hover:shadow-lg transition-shadow">
                  Subscribe
                </button>
              </form>
              
              <p className="mt-4 text-sm text-cream/60">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </RevealAnimation>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Blog;
