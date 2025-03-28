
import RevealAnimation from '../components/ui/RevealAnimation';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const AIDesignStudio = () => {
  // Set meta tags for SEO
  useEffect(() => {
    document.title = "AI Interior Design Tool – Coming Soon | Vaarahi";
    
    // Set meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Coming soon: Vaarahi's AI-powered design studio to help you visualize your dream space with personalized design suggestions and moodboards.");
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
              Coming Soon
            </span>
          </RevealAnimation>
          
          <RevealAnimation delay={200}>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 max-w-4xl">
              Smart AI Design Studio
            </h1>
          </RevealAnimation>
          
          <RevealAnimation delay={400}>
            <p className="text-xl max-w-3xl text-cream/80 mb-12">
              We're building a powerful AI tool to help you visualize your dream space. Upload a photo of your room and watch as our AI transforms it with new designs, styles, and furnishings in seconds.
            </p>
          </RevealAnimation>
        </div>
      </section>
      
      {/* Coming Soon */}
      <section className="py-24 text-center">
        <div className="content-container max-w-3xl mx-auto">
          <RevealAnimation>
            <div className="bg-white/50 backdrop-blur-sm rounded-xl p-10 shadow-sm border border-indigo/10">
              <h2 className="text-3xl md:text-4xl font-bold text-indigo mb-6">Coming Soon: Visualize Your Dream Space</h2>
              <p className="text-lg text-indigo/70 mb-8">
                Our AI Design Studio is currently in development. This innovative tool will allow you to:
              </p>
              
              <div className="text-left space-y-4 max-w-md mx-auto mb-8">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-gold font-medium">1</span>
                  </div>
                  <p className="text-indigo">Upload photos of your current space</p>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-gold font-medium">2</span>
                  </div>
                  <p className="text-indigo">See style transformations in seconds</p>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-gold font-medium">3</span>
                  </div>
                  <p className="text-indigo">Get personalized design recommendations</p>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-gold font-medium">4</span>
                  </div>
                  <p className="text-indigo">Create mood boards with AI assistance</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
                <NavLink to="/contact" className="bg-indigo text-cream font-medium px-8 py-4 rounded-md inline-flex items-center justify-center transition hover:shadow-lg hover:translate-y-[-2px]">
                  Get Notified When We Launch
                </NavLink>
                <NavLink to="/budget-calculator" className="bg-transparent border border-indigo text-indigo font-medium px-8 py-4 rounded-md inline-flex items-center justify-center transition hover:bg-indigo/5">
                  Try Our Budget Calculator <ArrowRight size={16} className="ml-2" />
                </NavLink>
              </div>
            </div>
          </RevealAnimation>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default AIDesignStudio;
