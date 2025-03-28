
import RevealAnimation from '../components/ui/RevealAnimation';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { useEffect } from 'react';

const AIDesignStudio = () => {
  // Set meta tags for SEO
  useEffect(() => {
    document.title = "AI Interior Design Tool – Smart Design Suggestions | Vaarahi";
    
    // Set meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Use Vaarahi's AI-powered design studio to upload your room photo and get personalized design suggestions, moodboards, and product recommendations in minutes.");
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
              AI Design Studio
            </span>
          </RevealAnimation>
          
          <RevealAnimation delay={200}>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 max-w-4xl">
              Transform Your Space with AI
            </h1>
          </RevealAnimation>
          
          <RevealAnimation delay={400}>
            <p className="text-xl max-w-3xl text-cream/80 mb-12">
              Upload a photo of your room and watch as our AI transforms it with new designs, styles, and furnishings in seconds.
            </p>
          </RevealAnimation>
        </div>
      </section>
      
      {/* Coming Soon */}
      <section className="py-32 text-center">
        <div className="content-container">
          <h2 className="text-3xl md:text-4xl font-bold text-indigo mb-6">Coming Soon</h2>
          <p className="text-xl text-indigo/70 max-w-2xl mx-auto">
            Our AI Design Studio is currently in development. This innovative tool will allow you to visualize design changes instantly using the power of artificial intelligence.
          </p>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default AIDesignStudio;
