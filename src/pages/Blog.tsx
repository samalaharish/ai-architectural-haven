
import RevealAnimation from '../components/ui/RevealAnimation';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const Blog = () => {
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
      
      {/* Coming Soon */}
      <section className="py-32 text-center">
        <div className="content-container">
          <h2 className="text-3xl md:text-4xl font-bold text-indigo mb-6">Coming Soon</h2>
          <p className="text-xl text-indigo/70 max-w-2xl mx-auto">
            We're currently crafting thoughtful articles and insights about design, architecture, and innovation. Please check back soon!
          </p>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Blog;
