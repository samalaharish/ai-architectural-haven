
import RevealAnimation from '../components/ui/RevealAnimation';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { useEffect } from 'react';

const Contact = () => {
  // Set meta tags for SEO
  useEffect(() => {
    document.title = "Contact Vaarahi Design Studio – Let's Design Your Space";
    
    // Set meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Reach out to Vaarahi Design Studio to start your interior design journey. Call, chat, or email us for consultations, site visits, and custom packages.");
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
              Contact Us
            </span>
          </RevealAnimation>
          
          <RevealAnimation delay={200}>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 max-w-4xl">
              Let's Start a Conversation
            </h1>
          </RevealAnimation>
          
          <RevealAnimation delay={400}>
            <p className="text-xl max-w-3xl text-cream/80 mb-12">
              Reach out to discuss your project, schedule a consultation, or learn more about our design services.
            </p>
          </RevealAnimation>
        </div>
      </section>
      
      {/* Coming Soon */}
      <section className="py-32 text-center">
        <div className="content-container">
          <h2 className="text-3xl md:text-4xl font-bold text-indigo mb-6">Coming Soon</h2>
          <p className="text-xl text-indigo/70 max-w-2xl mx-auto">
            We're currently enhancing our contact form with advanced features. In the meantime, please reach out to us at info@vaarahidesign.com.
          </p>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Contact;
