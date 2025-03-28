
import { useState, useEffect } from 'react';
import RevealAnimation from '../components/ui/RevealAnimation';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import BeforeAfterSlider from '../components/ui/BeforeAfterSlider';
import { ArrowRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Modern 2BHK Transformation',
    description: 'Complete renovation of a compact 2BHK apartment to maximize space and functionality.',
    category: '2BHK',
    location: 'Hyderabad',
    beforeImage: 'https://images.unsplash.com/photo-1503174971373-b1f69a8a41bf?w=800&auto=format&fit=crop',
    afterImage: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop'
  },
  {
    id: 2,
    title: 'Luxury Villa Interiors',
    description: 'Comprehensive interior design for a 5000 sq ft villa with custom furniture and premium finishes.',
    category: 'Villas',
    location: 'Bangalore',
    beforeImage: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&auto=format&fit=crop',
    afterImage: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=800&auto=format&fit=crop'
  },
  {
    id: 3,
    title: 'Modular Kitchen Design',
    description: 'Space-efficient modular kitchen with premium materials and smart storage solutions.',
    category: 'Kitchens',
    location: 'Mumbai',
    beforeImage: 'https://images.unsplash.com/photo-1556912998-c57cc6b63cd7?w=800&auto=format&fit=crop',
    afterImage: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=800&auto=format&fit=crop'
  },
  {
    id: 4,
    title: 'Corporate Office Redesign',
    description: 'Modern office design that enhances productivity, collaboration, and employee well-being.',
    category: 'Offices',
    location: 'Pune',
    beforeImage: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=800&auto=format&fit=crop',
    afterImage: 'https://images.unsplash.com/photo-1604328698692-f76ea9498e76?w=800&auto=format&fit=crop'
  },
  {
    id: 5,
    title: 'Contemporary 2BHK Home',
    description: 'Sleek, modern design for a young family with functional spaces and stylish aesthetics.',
    category: '2BHK',
    location: 'Chennai',
    beforeImage: 'https://images.unsplash.com/photo-1600607687101-9d8ebd2c49bd?w=800&auto=format&fit=crop',
    afterImage: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&auto=format&fit=crop'
  },
  {
    id: 6,
    title: 'Retail Store Design',
    description: 'Engaging retail environment that enhances customer experience and brand presence.',
    category: 'Offices',
    location: 'Delhi',
    beforeImage: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&auto=format&fit=crop',
    afterImage: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop'
  }
];

const blogPosts = [
  {
    id: 1,
    title: 'Top 5 Interior Design Trends for 2023',
    excerpt: 'Discover the latest design trends that are shaping modern Indian homes this year...',
    image: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?w=800&auto=format&fit=crop',
    date: 'April 12, 2023'
  },
  {
    id: 2,
    title: 'How to Choose the Right Color Palette for Your Home',
    excerpt: 'Learn the principles of color theory and how to apply them to create harmonious interiors...',
    image: 'https://images.unsplash.com/photo-1507692049790-de58290a4334?w=800&auto=format&fit=crop',
    date: 'May 23, 2023'
  }
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', '2BHK', 'Villas', 'Kitchens', 'Offices'];
  
  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);
  
  // Set meta tags for SEO
  useEffect(() => {
    document.title = "Completed Interior Projects – Homes, Villas, Offices | Vaarahi Portfolio";
    
    // Set meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Browse through Vaarahi's completed interior design projects across homes, villas, kitchens, and commercial spaces. Real transformations, real results.");
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
              Our Portfolio
            </span>
          </RevealAnimation>
          
          <RevealAnimation delay={200}>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 max-w-4xl">
              Our Transformative Projects
            </h1>
          </RevealAnimation>
          
          <RevealAnimation delay={400}>
            <p className="text-xl max-w-3xl text-cream/80 mb-12">
              Explore our collection of completed interior design projects, showcasing our expertise across various spaces and styles.
            </p>
          </RevealAnimation>
        </div>
      </section>
      
      {/* Portfolio Filter */}
      <section className="py-12">
        <div className="content-container">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-md text-sm font-medium transition-colors ${
                  activeCategory === category
                    ? 'bg-indigo text-cream'
                    : 'bg-white text-indigo hover:bg-indigo/10'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <RevealAnimation key={project.id} delay={index * 100}>
                <div className="bg-white rounded-xl overflow-hidden shadow-md">
                  <div className="relative h-64">
                    <BeforeAfterSlider
                      beforeImage={project.beforeImage}
                      afterImage={project.afterImage}
                      beforeAlt={`${project.title} before renovation by Vaarahi Design Studio`}
                      afterAlt={`${project.title} after renovation by Vaarahi Design Studio`}
                    />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-sm font-medium px-3 py-1 bg-indigo/10 text-indigo rounded-full">
                        {project.category}
                      </span>
                      <span className="text-sm text-indigo/60">{project.location}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-2 text-indigo">{project.title}</h3>
                    <p className="text-indigo/70 mb-4">{project.description}</p>
                    
                    <button className="text-gold font-medium flex items-center hover:underline">
                      View Project <ArrowRight size={16} className="ml-2" />
                    </button>
                  </div>
                </div>
              </RevealAnimation>
            ))}
          </div>
          
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-indigo/70 mb-4">No projects found in this category.</p>
              <button 
                onClick={() => setActiveCategory('All')}
                className="bg-indigo text-cream px-6 py-3 rounded-md"
              >
                View All Projects
              </button>
            </div>
          )}
        </div>
      </section>
      
      {/* Blog Preview Section */}
      <section className="py-20 bg-indigo/5">
        <div className="content-container">
          <RevealAnimation>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-indigo">From Our Blog</h2>
              <p className="text-indigo/70 max-w-2xl mx-auto">
                Read our latest articles about interior design trends, tips, and inspirations.
              </p>
            </div>
          </RevealAnimation>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {blogPosts.map((post, index) => (
              <RevealAnimation key={post.id} delay={index * 200}>
                <div className="bg-white rounded-lg overflow-hidden shadow-sm">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <span className="text-sm text-indigo/60">{post.date}</span>
                    <h3 className="text-xl font-bold my-2 text-indigo">{post.title}</h3>
                    <p className="text-indigo/70 mb-4">{post.excerpt}</p>
                    <a href="/blog" className="text-gold font-medium flex items-center hover:underline">
                      Read more <ArrowRight size={16} className="ml-2" />
                    </a>
                  </div>
                </div>
              </RevealAnimation>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <a 
              href="/blog" 
              className="inline-block bg-indigo text-cream font-medium px-6 py-3 rounded-md transition hover:shadow-md"
            >
              Explore All Articles
            </a>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Portfolio;
