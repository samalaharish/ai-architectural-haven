
import { useState, useEffect } from 'react';
import RevealAnimation from '../components/ui/RevealAnimation';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

// Import new components
import ServiceBlock from '../components/services/ServiceBlock';
import PricingTable from '../components/services/PricingTable';
import ProcessSteps from '../components/services/ProcessSteps';
import WhyChooseUs from '../components/services/WhyChooseUs';

// Define service blocks data
const serviceBlocks = [
  {
    id: 1,
    title: 'Full Home Interiors',
    description: 'Complete transformation of your living spaces with coordinated design themes, optimal space utilization, and personalized touches that reflect your lifestyle.',
    features: [
      'Comprehensive space planning and optimization',
      'Custom furniture and storage solutions',
      'Coordinated color schemes and material selection',
      'Lighting design and fixtures',
      'Smart home integration options'
    ],
    image: 'https://images.unsplash.com/photo-1600210491369-e753d80a41f3?w=800&auto=format&fit=crop'
  },
  {
    id: 2,
    title: 'Modular Kitchen Design',
    description: 'Functional and beautiful kitchen designs with premium materials, smart storage solutions, and efficient workflows tailored to Indian cooking needs.',
    features: [
      'Ergonomic layout optimization',
      'Quality modular cabinets and countertops',
      'Efficient storage with specialized organizers',
      'Integrated appliances and fixtures',
      'Durable, easy-maintenance finishes'
    ],
    image: 'https://images.unsplash.com/photo-1556911220-dabc1f02913a?w=800&auto=format&fit=crop'
  },
  {
    id: 3,
    title: 'Commercial/Retail Spaces',
    description: 'Strategic design solutions for offices, stores, and commercial environments that enhance productivity, brand experience, and customer engagement.',
    features: [
      'Functional space planning for workflow efficiency',
      'Brand-aligned design elements and touchpoints',
      'Ergonomic furniture and workstation design',
      'Collaborative and individual work zones',
      'Acoustic management and lighting solutions'
    ],
    image: 'https://images.unsplash.com/photo-1604328698692-f76ea9498e76?w=800&auto=format&fit=crop'
  },
  {
    id: 4,
    title: 'Home Renovation & Styling',
    description: 'Refresh your existing spaces with targeted renovations, styling updates, and decor enhancements that transform without a complete overhaul.',
    features: [
      'Focused renovation of key areas',
      'Furniture rearrangement and new layouts',
      'Window treatments and soft furnishings',
      'Decor accessories and styling',
      'Art and feature element selection'
    ],
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop'
  },
  {
    id: 5,
    title: 'Sustainability Add-On',
    description: 'Enhance any project with eco-friendly materials, energy-efficient systems, and sustainable practices that reduce environmental impact.',
    features: [
      'Eco-friendly material selection',
      'Energy-efficient lighting and systems',
      'Water conservation fixtures',
      'Indoor air quality optimization',
      'Waste reduction strategies'
    ],
    image: 'https://images.unsplash.com/photo-1482745637430-91c0bbceef41?w=800&auto=format&fit=crop'
  }
];

const Services = () => {
  // Set meta tags for SEO
  useEffect(() => {
    document.title = "Interior Design Services – Modular, Full Home, and Commercial Spaces | Vaarahi";
    
    // Set meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Explore premium interior services at Vaarahi Design Studio. We offer modular kitchens, home makeovers, and office design with transparent pricing and on-time delivery.");
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
              Our Services
            </span>
          </RevealAnimation>
          
          <RevealAnimation delay={200}>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 max-w-4xl">
              Comprehensive Design Solutions
            </h1>
          </RevealAnimation>
          
          <RevealAnimation delay={400}>
            <p className="text-xl max-w-3xl text-cream/80 mb-12">
              Discover our range of AI-enhanced design services tailored to transform your spaces with innovation, functionality, and aesthetic excellence.
            </p>
          </RevealAnimation>
          
          <RevealAnimation delay={600} className="flex flex-wrap gap-6">
            {['Interior Design', 'MEP Planning', 'Commercial Design', 'Sustainable Design'].map((service) => (
              <div key={service} className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-gold mr-2"></div>
                <span className="text-cream/90">{service}</span>
              </div>
            ))}
          </RevealAnimation>
        </div>
      </section>
      
      {/* Detailed Service Blocks */}
      <section className="py-20">
        <div className="content-container">
          <RevealAnimation>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-indigo">Our Specialized Services</h2>
              <p className="text-lg max-w-2xl mx-auto text-indigo/70">
                We offer a comprehensive range of interior design services tailored to meet your specific needs and preferences.
              </p>
            </div>
          </RevealAnimation>
          
          {serviceBlocks.map((service, index) => (
            <ServiceBlock
              key={service.id}
              title={service.title}
              description={service.description}
              features={service.features}
              image={service.image}
              delay={index * 150}
            />
          ))}
        </div>
      </section>
      
      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="content-container">
          <WhyChooseUs />
        </div>
      </section>
      
      {/* Pricing Table */}
      <section className="py-20">
        <div className="content-container">
          <RevealAnimation>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-indigo">Transparent Pricing</h2>
              <p className="text-lg max-w-2xl mx-auto text-indigo/70">
                We believe in complete transparency. Here's a breakdown of our service packages and what they include.
              </p>
            </div>
          </RevealAnimation>
          
          <PricingTable />
        </div>
      </section>
      
      {/* 5-Step Process */}
      <section className="py-20 bg-white">
        <div className="content-container">
          <ProcessSteps />
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-cream">
        <div className="content-container">
          <RevealAnimation>
            <div className="bg-gold/10 rounded-2xl p-10 md:p-16 text-center shadow-sm">
              <h2 className="text-3xl md:text-4xl font-bold text-indigo mb-6">
                Ready to Elevate Your Space?
              </h2>
              <p className="text-indigo/70 max-w-2xl mx-auto mb-8">
                Start your design journey today and discover how our AI-powered solutions can bring your vision to life.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="/contact" className="bg-indigo text-cream font-medium px-8 py-4 rounded-md inline-block transition hover:shadow-lg hover:translate-y-[-2px]">
                  Request a Consultation
                </a>
                <a href="/budget-calculator" className="bg-transparent border border-indigo text-indigo font-medium px-8 py-4 rounded-md inline-block transition hover:bg-indigo/5">
                  Calculate Your Budget
                </a>
              </div>
            </div>
          </RevealAnimation>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Services;
