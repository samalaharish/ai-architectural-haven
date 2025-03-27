
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { ArrowRight, Star, Check } from 'lucide-react';
import RevealAnimation from '../components/ui/RevealAnimation';
import AnimatedGradient from '../components/ui/AnimatedGradient';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const designStyles = [
  {
    id: 1,
    name: 'Modern',
    description: 'Clean lines, minimalist aesthetic, and focus on function.',
    image: 'https://images.unsplash.com/photo-1497604401993-f2e922e5cb0a?w=800&auto=format&fit=crop'
  },
  {
    id: 2,
    name: 'Traditional',
    description: 'Classic elegance with detailed craftsmanship and rich materials.',
    image: 'https://images.unsplash.com/photo-1496307653780-42ee777d4833?w=800&auto=format&fit=crop'
  },
  {
    id: 3,
    name: 'Contemporary',
    description: 'Current design trends blending innovation with comfort.',
    image: 'https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?w=800&auto=format&fit=crop'
  },
  {
    id: 4,
    name: 'Industrial',
    description: 'Raw materials with exposed elements creating an urban feel.',
    image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=800&auto=format&fit=crop'
  },
  {
    id: 5,
    name: 'Minimalist',
    description: 'Essential elements only, focusing on space and light.',
    image: 'https://images.unsplash.com/photo-1431576901776-e539bd916ba2?w=800&auto=format&fit=crop'
  },
  {
    id: 6,
    name: 'Scandinavian',
    description: 'Light, airy spaces with natural materials and simple forms.',
    image: 'https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?w=800&auto=format&fit=crop'
  }
];

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Homeowner',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&auto=format&fit=crop',
    quote: 'Their AI-powered design process saved us months of back-and-forth. The final space exceeded our expectations.',
    rating: 5
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Real Estate Developer',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&auto=format&fit=crop',
    quote: 'Vaarahi transformed our commercial space with innovative MEP solutions that reduced costs while increasing efficiency.',
    rating: 5
  },
  {
    id: 3,
    name: 'Priya Sharma',
    role: 'Restaurant Owner',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&auto=format&fit=crop',
    quote: 'From concept to execution, they created a dining space that perfectly balances aesthetics with functionality.',
    rating: 5
  }
];

const trendingSolutions = [
  {
    id: 1,
    title: 'Smart MEP Systems',
    description: 'Integrated mechanical, electrical, and plumbing systems with AI-driven efficiency optimization.',
    icon: '🏗️',
    color: 'bg-indigo text-cream'
  },
  {
    id: 2,
    title: 'Sustainable Design',
    description: 'Eco-friendly materials and energy-efficient solutions for environmentally conscious spaces.',
    icon: '🌱',
    color: 'bg-sage text-cream'
  },
  {
    id: 3,
    title: 'VR Walkthroughs',
    description: 'Experience your space before construction with immersive virtual reality technology.',
    icon: '👓',
    color: 'bg-terracotta text-cream'
  }
];

const Index = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  
  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-b from-indigo/20 to-transparent" />
          <video
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            poster="https://images.unsplash.com/photo-1493397212122-2b85dda8106b?auto=format&fit=crop"
          >
            <source 
              src="https://assets.mixkit.co/videos/preview/mixkit-modern-house-with-a-swimming-pool-and-large-windows-1120-large.mp4" 
              type="video/mp4" 
            />
            Your browser does not support the video tag.
          </video>
        </div>
        
        <AnimatedGradient className="relative z-10 w-full">
          <div className="content-container py-32">
            <RevealAnimation>
              <span className="inline-block mb-4 px-4 py-1 bg-gold/10 text-gold rounded-full text-sm font-medium">
                AI-Powered Design Innovation
              </span>
            </RevealAnimation>
            
            <RevealAnimation delay={200}>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-indigo max-w-4xl">
                Where AI Meets <span className="text-gold">Architectural Brilliance</span>
              </h1>
            </RevealAnimation>
            
            <RevealAnimation delay={400}>
              <p className="text-lg md:text-xl max-w-2xl mb-10 text-indigo/80">
                Transform your space with our innovative design solutions that blend cutting-edge AI technology with timeless architectural principles.
              </p>
            </RevealAnimation>
            
            <RevealAnimation delay={600} className="flex flex-wrap gap-4">
              <NavLink to="/ai-design-studio" className="btn-primary">
                Start with AI Design Studio
              </NavLink>
              <NavLink to="/budget-calculator" className="btn-secondary">
                Calculate Your Project Budget
              </NavLink>
            </RevealAnimation>
            
            <RevealAnimation delay={800} className="mt-12">
              <div className="flex items-center space-x-6">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-cream overflow-hidden">
                      <img 
                        src={`https://randomuser.me/api/portraits/${i % 2 === 0 ? 'women' : 'men'}/${i + 20}.jpg`} 
                        alt="Client" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
                <div className="text-indigo">
                  <div className="flex items-center">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} size={16} className="fill-gold text-gold" />
                    ))}
                  </div>
                  <p className="text-sm mt-1">From over 200+ happy clients</p>
                </div>
              </div>
            </RevealAnimation>
          </div>
        </AnimatedGradient>
      </section>
      
      {/* Design Styles Grid */}
      <section className="py-24 bg-cream">
        <div className="content-container">
          <RevealAnimation>
            <div className="text-center mb-16">
              <span className="inline-block mb-4 px-4 py-1 bg-indigo/10 text-indigo rounded-full text-sm font-medium">
                Explore Design Styles
              </span>
              <h2 className="text-4xl font-bold mb-6">Find Your Perfect Aesthetic</h2>
              <p className="text-lg max-w-2xl mx-auto text-indigo/70">
                Discover the design style that resonates with your vision and lifestyle, crafted with precision and personalized for your space.
              </p>
            </div>
          </RevealAnimation>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {designStyles.map((style, index) => (
              <RevealAnimation key={style.id} delay={index * 100}>
                <div className="group relative overflow-hidden rounded-lg shadow-md h-80 transition-all duration-500 hover:shadow-xl">
                  <div className="absolute inset-0 bg-gradient-to-t from-indigo/90 to-transparent opacity-70 transition-opacity group-hover:opacity-80 z-10" />
                  
                  <img 
                    src={style.image} 
                    alt={style.name} 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-20 transition-transform duration-500 group-hover:translate-y-[-10px]">
                    <h3 className="text-2xl font-bold text-cream mb-2">{style.name}</h3>
                    <p className="text-cream/80 mb-4">{style.description}</p>
                    <span className="text-gold flex items-center text-sm font-medium">
                      Explore Style <ArrowRight size={16} className="ml-2 animate-slide-right" />
                    </span>
                  </div>
                </div>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-24 bg-indigo text-cream">
        <div className="content-container">
          <RevealAnimation>
            <div className="text-center mb-16">
              <span className="inline-block mb-4 px-4 py-1 bg-gold/20 text-gold rounded-full text-sm font-medium">
                Client Testimonials
              </span>
              <h2 className="text-4xl font-bold mb-6">What Our Clients Say</h2>
              <p className="text-lg max-w-2xl mx-auto text-cream/70">
                Read about the experiences of clients who have transformed their spaces with our innovative design solutions.
              </p>
            </div>
          </RevealAnimation>
          
          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={testimonial.id}
                  className={`transition-opacity duration-1000 absolute inset-0 ${
                    activeTestimonial === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
                  }`}
                >
                  <div className="bg-indigo/50 backdrop-blur-sm p-8 md:p-10 rounded-2xl border border-cream/10">
                    <div className="flex flex-col md:flex-row gap-8 items-center">
                      <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden flex-shrink-0 border-4 border-gold/30">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex mb-3">
                          {Array(testimonial.rating).fill(0).map((_, i) => (
                            <Star key={i} size={18} className="text-gold fill-gold mr-1" />
                          ))}
                        </div>
                        
                        <blockquote className="text-xl md:text-2xl italic mb-6">
                          "{testimonial.quote}"
                        </blockquote>
                        
                        <div>
                          <p className="font-bold text-gold">{testimonial.name}</p>
                          <p className="text-cream/70">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex justify-center mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full mx-1 transition-all ${
                    activeTestimonial === index ? 'bg-gold scale-125' : 'bg-cream/30'
                  }`}
                  aria-label={`View testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Trending Solutions */}
      <section className="py-24 bg-cream">
        <div className="content-container">
          <RevealAnimation>
            <div className="text-center mb-16">
              <span className="inline-block mb-4 px-4 py-1 bg-indigo/10 text-indigo rounded-full text-sm font-medium">
                Trending Solutions
              </span>
              <h2 className="text-4xl font-bold mb-6">Innovative Approaches</h2>
              <p className="text-lg max-w-2xl mx-auto text-indigo/70">
                Discover our cutting-edge solutions that are transforming the design industry.
              </p>
            </div>
          </RevealAnimation>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {trendingSolutions.map((solution, index) => (
              <RevealAnimation key={solution.id} delay={index * 200}>
                <div className={`rounded-xl p-8 h-full flex flex-col ${solution.color}`}>
                  <div className="text-4xl mb-6">{solution.icon}</div>
                  <h3 className="text-2xl font-bold mb-4">{solution.title}</h3>
                  <p className="mb-6 text-cream/80 flex-grow">{solution.description}</p>
                  <NavLink to="/services" className="inline-flex items-center text-gold hover:underline mt-auto font-medium">
                    Learn more <ArrowRight size={16} className="ml-2" />
                  </NavLink>
                </div>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24 bg-gold/10">
        <div className="content-container">
          <div className="bg-indigo rounded-2xl overflow-hidden shadow-xl">
            <div className="md:flex">
              <div className="md:w-1/2 p-10 md:p-16">
                <RevealAnimation>
                  <h2 className="text-3xl md:text-4xl font-bold text-gold mb-6">
                    Ready to Transform Your Space?
                  </h2>
                </RevealAnimation>
                
                <RevealAnimation delay={200}>
                  <p className="text-cream/80 mb-8">
                    Start your design journey today and discover how our AI-powered solutions can bring your vision to life.
                  </p>
                </RevealAnimation>
                
                <RevealAnimation delay={400}>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Check size={20} className="text-gold mt-1 mr-3 flex-shrink-0" />
                      <p className="text-cream/90">Personalized design consultations</p>
                    </div>
                    <div className="flex items-start">
                      <Check size={20} className="text-gold mt-1 mr-3 flex-shrink-0" />
                      <p className="text-cream/90">AI-generated design concepts in minutes</p>
                    </div>
                    <div className="flex items-start">
                      <Check size={20} className="text-gold mt-1 mr-3 flex-shrink-0" />
                      <p className="text-cream/90">Detailed budget estimates and timelines</p>
                    </div>
                  </div>
                </RevealAnimation>
                
                <RevealAnimation delay={600}>
                  <div className="mt-10">
                    <NavLink to="/contact" className="bg-gold text-indigo font-medium px-8 py-4 rounded-md inline-block transition hover:shadow-lg hover:translate-y-[-2px]">
                      Get Started Today
                    </NavLink>
                  </div>
                </RevealAnimation>
              </div>
              
              <div className="md:w-1/2 relative min-h-[300px] md:min-h-0">
                <img 
                  src="https://images.unsplash.com/photo-1551038247-3d9af20df552?auto=format&fit=crop" 
                  alt="Modern interior design" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
