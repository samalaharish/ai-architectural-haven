
import { useEffect } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import RevealAnimation from '../components/ui/RevealAnimation';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

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
      
      {/* About Content */}
      <section className="py-20">
        <div className="content-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <RevealAnimation>
              <div>
                <h2 className="text-3xl font-bold mb-6 text-indigo">Our Story</h2>
                <p className="text-indigo/80 mb-4 leading-relaxed">
                  Founded in 2018, Vaarahi Design Studio emerged from a vision to create interior spaces that perfectly balance aesthetics with functionality for the modern Indian lifestyle.
                </p>
                <p className="text-indigo/80 mb-4 leading-relaxed">
                  We've grown from a small team of passionate designers to a comprehensive interior design firm serving both residential and commercial clients across India.
                </p>
                <p className="text-indigo/80 leading-relaxed">
                  Our approach combines traditional design principles with cutting-edge technology to deliver exceptional spaces that exceed client expectations.
                </p>
              </div>
            </RevealAnimation>
            
            <RevealAnimation delay={300}>
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&auto=format&fit=crop" 
                  alt="Vaarahi Design Studio team working on design project" 
                  className="w-full h-full object-cover"
                />
              </div>
            </RevealAnimation>
          </div>
          
          {/* What Makes Us Different */}
          <RevealAnimation>
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-indigo text-center">What Makes Us Different</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Technology-Driven Design Process",
                    description: "We leverage AI and 3D visualization to help clients see their space before construction begins."
                  },
                  {
                    title: "Indian Context, Global Standards",
                    description: "Our designs consider local living patterns while incorporating international design principles."
                  },
                  {
                    title: "Transparent Pricing and Timelines",
                    description: "We believe in complete transparency throughout the design and execution process."
                  },
                  {
                    title: "Sustainable Design Practices",
                    description: "We prioritize eco-friendly materials and energy-efficient solutions whenever possible."
                  }
                ].map((item, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-bold mb-3 text-indigo">{item.title}</h3>
                    <p className="text-indigo/70">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </RevealAnimation>
          
          {/* Team Section */}
          <RevealAnimation>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-6 text-indigo">Meet Our Team</h2>
              <p className="text-indigo/70 max-w-2xl mx-auto">
                Our diverse team of designers, architects, and project managers work collaboratively to bring your vision to life.
              </p>
            </div>
          </RevealAnimation>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              {
                name: "Arjun Sharma",
                role: "Founder & Principal Designer",
                image: "https://randomuser.me/api/portraits/men/32.jpg"
              },
              {
                name: "Priya Mehta",
                role: "Senior Interior Architect",
                image: "https://randomuser.me/api/portraits/women/44.jpg"
              },
              {
                name: "Rahul Kapoor",
                role: "Project Manager",
                image: "https://randomuser.me/api/portraits/men/55.jpg"
              },
              {
                name: "Anika Patel",
                role: "3D Visualization Expert",
                image: "https://randomuser.me/api/portraits/women/68.jpg"
              }
            ].map((member, index) => (
              <RevealAnimation key={index} delay={index * 100}>
                <div className="bg-white rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md">
                  <div className="h-64 overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="text-lg font-bold text-indigo">{member.name}</h3>
                    <p className="text-indigo/70 text-sm">{member.role}</p>
                  </div>
                </div>
              </RevealAnimation>
            ))}
          </div>
          
          {/* Blog Preview */}
          <RevealAnimation>
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-indigo text-center">Latest From Our Blog</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    title: "5 Small Space Design Hacks for Indian Apartments",
                    excerpt: "Discover practical tips to maximize space and functionality in compact urban living spaces...",
                    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&auto=format&fit=crop",
                    date: "May 15, 2023"
                  },
                  {
                    title: "Sustainable Materials Transforming Indian Interior Design",
                    excerpt: "Explore how eco-friendly materials are becoming the preferred choice for conscious homeowners...",
                    image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800&auto=format&fit=crop",
                    date: "June 2, 2023"
                  }
                ].map((post, index) => (
                  <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm">
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
                ))}
              </div>
            </div>
          </RevealAnimation>
          
          {/* Contact CTA */}
          <RevealAnimation>
            <div className="bg-indigo text-cream rounded-xl p-8 text-center shadow-lg">
              <h2 className="text-2xl font-bold mb-4">Ready to Start Your Design Journey?</h2>
              <p className="mb-6 text-cream/80 max-w-2xl mx-auto">
                Contact us today to schedule a consultation and discover how we can transform your space.
              </p>
              <a 
                href="/contact" 
                className="inline-block bg-gold text-indigo font-medium px-6 py-3 rounded-md transition hover:shadow-lg hover:translate-y-[-2px]"
              >
                Get in Touch
              </a>
            </div>
          </RevealAnimation>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
