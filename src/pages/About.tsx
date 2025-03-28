
import RevealAnimation from '../components/ui/RevealAnimation';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { useEffect } from 'react';

const About = () => {
  // Set meta tags for SEO
  useEffect(() => {
    document.title = "About Vaarahi Design Studio – Interior Design with Purpose";
    
    // Set meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Learn about Vaarahi Design Studio – a next-gen interior firm committed to thoughtful, elegant, and practical design solutions for Indian homes and offices.");
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
              About Us
            </span>
          </RevealAnimation>
          
          <RevealAnimation delay={200}>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 max-w-4xl">
              Vaarahi Design Studio
            </h1>
          </RevealAnimation>
          
          <RevealAnimation delay={400}>
            <p className="text-xl max-w-3xl text-cream/80 mb-12">
              A team of passionate designers, architects, and technologists dedicated to transforming spaces through innovative design solutions.
            </p>
          </RevealAnimation>
        </div>
      </section>
      
      {/* Coming Soon */}
      <section className="py-32 text-center">
        <div className="content-container">
          <h2 className="text-3xl md:text-4xl font-bold text-indigo mb-6">Coming Soon</h2>
          <p className="text-xl text-indigo/70 max-w-2xl mx-auto">
            We're currently enhancing this page with our team profiles, design philosophy, and company history. Please check back soon!
          </p>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
