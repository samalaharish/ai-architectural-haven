
import { useState } from 'react';
import { ArrowRight, ArrowLeft, Check } from 'lucide-react';
import RevealAnimation from '../components/ui/RevealAnimation';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const services = [
  {
    id: 1,
    title: 'Interior Design',
    description: 'Transform your living spaces with our AI-enhanced interior design services.',
    features: [
      'Personalized design concepts',
      'Material selection assistance',
      'Furniture layout planning',
      'Color scheme development',
      '3D visualization'
    ],
    image: 'https://images.unsplash.com/photo-1524230572899-a752b3835840?w=800&auto=format&fit=crop',
    category: 'residential',
    priceRange: 'medium'
  },
  {
    id: 2,
    title: 'MEP Planning',
    description: 'Comprehensive mechanical, electrical, and plumbing solutions for optimal functionality.',
    features: [
      'Energy efficiency analysis',
      'Smart home integration',
      'Sustainable systems design',
      'Regulatory compliance',
      'Cost optimization'
    ],
    image: 'https://images.unsplash.com/photo-1460574283810-2aab119d8511?w=800&auto=format&fit=crop',
    category: 'commercial',
    priceRange: 'high'
  },
  {
    id: 3,
    title: 'Renovation Consultancy',
    description: 'Expert guidance for renovating and upgrading your existing spaces.',
    features: [
      'Project feasibility assessment',
      'Budget planning',
      'Timeline development',
      'Contractor coordination',
      'Quality assurance'
    ],
    image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&auto=format&fit=crop',
    category: 'both',
    priceRange: 'medium'
  },
  {
    id: 4,
    title: 'Commercial Design',
    description: 'Create functional and impressive commercial spaces that enhance productivity.',
    features: [
      'Brand-aligned design concepts',
      'Space optimization',
      'Traffic flow planning',
      'Accessibility compliance',
      'Multi-functional areas'
    ],
    image: 'https://images.unsplash.com/photo-1497604401993-f2e922e5cb0a?w=800&auto=format&fit=crop',
    category: 'commercial',
    priceRange: 'high'
  },
  {
    id: 5,
    title: 'Sustainable Design',
    description: 'Eco-friendly design solutions that minimize environmental impact.',
    features: [
      'Energy-efficient systems',
      'Sustainable material selection',
      'Water conservation strategies',
      'Natural lighting optimization',
      'Green certification guidance'
    ],
    image: 'https://images.unsplash.com/photo-1439337153520-7082a56a81f4?w=800&auto=format&fit=crop',
    category: 'both',
    priceRange: 'medium'
  },
  {
    id: 6,
    title: 'Virtual Reality Tours',
    description: 'Experience your designed space before construction begins.',
    features: [
      'Immersive VR walkthroughs',
      'Real-time design adjustments',
      'Material and finish visualization',
      'Spatial awareness enhancement',
      'Client presentation tools'
    ],
    image: 'https://images.unsplash.com/photo-1433832597046-4f10e10ac764?w=800&auto=format&fit=crop',
    category: 'both',
    priceRange: 'low'
  }
];

const caseStudies = [
  {
    id: 1,
    title: 'Modern Apartment Transformation',
    description: 'A complete redesign of a 1200 sq ft urban apartment with smart home integration.',
    challenge: 'Limited space with outdated systems and poor natural light distribution.',
    solution: 'Open concept redesign with strategic mirrored surfaces and smart lighting system.',
    imageBefore: 'https://images.unsplash.com/photo-1596900779744-2bdc4a90509a?w=800&auto=format&fit=crop',
    imageAfter: 'https://images.unsplash.com/photo-1588854337115-1c67d9247e4d?w=800&auto=format&fit=crop',
    category: 'residential',
    budget: 75000
  },
  {
    id: 2,
    title: 'Corporate Office Renovation',
    description: 'Modernizing a 5000 sq ft office space for improved productivity and team collaboration.',
    challenge: 'Outdated layout with isolated workspaces and inefficient use of natural light.',
    solution: 'Activity-based design with flexible workstations and collaboration zones.',
    imageBefore: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&auto=format&fit=crop',
    imageAfter: 'https://images.unsplash.com/photo-1604328698692-f76ea9498e76?w=800&auto=format&fit=crop',
    category: 'commercial',
    budget: 250000
  }
];

type FilterState = {
  category: string;
  priceRange: string;
};

const Services = () => {
  const [filters, setFilters] = useState<FilterState>({
    category: 'all',
    priceRange: 'all'
  });
  
  const [activeCaseStudy, setActiveCaseStudy] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);
  
  const handleFilterChange = (filterType: keyof FilterState, value: string) => {
    setFilters((prev) => ({
      ...prev,
      [filterType]: value
    }));
  };
  
  const filteredServices = services.filter((service) => {
    const categoryMatch = filters.category === 'all' || service.category === filters.category || service.category === 'both';
    const priceMatch = filters.priceRange === 'all' || service.priceRange === filters.priceRange;
    
    return categoryMatch && priceMatch;
  });
  
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
      
      {/* Filters Section */}
      <section className="py-12 border-b border-indigo/10">
        <div className="content-container">
          <RevealAnimation>
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-bold mb-6 text-indigo">Filter Services</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-sm font-medium text-indigo/70 mb-2">Project Type</label>
                  <div className="flex space-x-4">
                    {[
                      { value: 'all', label: 'All Types' },
                      { value: 'residential', label: 'Residential' },
                      { value: 'commercial', label: 'Commercial' }
                    ].map((option) => (
                      <button
                        key={option.value}
                        onClick={() => handleFilterChange('category', option.value)}
                        className={`px-4 py-2 rounded-md text-sm transition-colors ${
                          filters.category === option.value
                            ? 'bg-indigo text-cream'
                            : 'bg-indigo/10 text-indigo hover:bg-indigo/20'
                        }`}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-indigo/70 mb-2">Budget Range</label>
                  <div className="flex space-x-4">
                    {[
                      { value: 'all', label: 'All Budgets' },
                      { value: 'low', label: 'Economy' },
                      { value: 'medium', label: 'Standard' },
                      { value: 'high', label: 'Premium' }
                    ].map((option) => (
                      <button
                        key={option.value}
                        onClick={() => handleFilterChange('priceRange', option.value)}
                        className={`px-4 py-2 rounded-md text-sm transition-colors ${
                          filters.priceRange === option.value
                            ? 'bg-gold text-indigo'
                            : 'bg-gold/10 text-indigo hover:bg-gold/20'
                        }`}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </RevealAnimation>
        </div>
      </section>
      
      {/* Services Grid */}
      <section className="py-20">
        <div className="content-container">
          <RevealAnimation>
            <h2 className="text-3xl font-bold mb-12 text-indigo">Our Design Services</h2>
          </RevealAnimation>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.length > 0 ? (
              filteredServices.map((service, index) => (
                <RevealAnimation key={service.id} delay={index * 100}>
                  <div className="bg-white rounded-xl overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md hover:translate-y-[-5px] h-full flex flex-col">
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={service.image} 
                        alt={service.title} 
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                      />
                    </div>
                    
                    <div className="p-6 flex-grow">
                      <h3 className="text-xl font-bold mb-3 text-indigo">{service.title}</h3>
                      <p className="text-indigo/70 mb-4">{service.description}</p>
                      
                      <ul className="space-y-2 mb-6">
                        {service.features.slice(0, 3).map((feature, i) => (
                          <li key={i} className="flex items-start">
                            <Check size={16} className="text-gold mt-1 mr-2 flex-shrink-0" />
                            <span className="text-sm text-indigo/80">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="p-6 pt-0 mt-auto">
                      <a href="#" className="inline-flex items-center text-gold font-medium hover:underline">
                        Learn more <ArrowRight size={16} className="ml-2" />
                      </a>
                    </div>
                  </div>
                </RevealAnimation>
              ))
            ) : (
              <div className="col-span-full py-12 text-center">
                <p className="text-lg text-indigo/60">No services match your current filters. Please adjust your criteria.</p>
                <button
                  onClick={() => setFilters({ category: 'all', priceRange: 'all' })}
                  className="mt-4 px-4 py-2 bg-indigo text-cream rounded-md"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
      
      {/* Case Studies */}
      <section className="py-20 bg-indigo/5">
        <div className="content-container">
          <RevealAnimation>
            <div className="text-center mb-16">
              <span className="inline-block mb-4 px-4 py-1 bg-indigo/10 text-indigo rounded-full text-sm font-medium">
                Case Studies
              </span>
              <h2 className="text-3xl font-bold mb-6 text-indigo">See Our Work In Action</h2>
              <p className="text-lg max-w-2xl mx-auto text-indigo/70">
                Explore real projects where our design expertise has transformed spaces and exceeded client expectations.
              </p>
            </div>
          </RevealAnimation>
          
          <div className="max-w-4xl mx-auto">
            <div className="flex mb-6 space-x-4">
              {caseStudies.map((study, index) => (
                <button
                  key={study.id}
                  className={`px-5 py-3 rounded-md text-sm font-medium transition-colors ${
                    activeCaseStudy === index
                      ? 'bg-gold text-indigo'
                      : 'bg-white text-indigo hover:bg-gold/10'
                  }`}
                  onClick={() => setActiveCaseStudy(index)}
                >
                  {study.title}
                </button>
              ))}
            </div>
            
            <RevealAnimation>
              <div className="bg-white rounded-xl overflow-hidden shadow-md">
                <div className="p-6 md:p-8">
                  <h3 className="text-2xl font-bold mb-2 text-indigo">{caseStudies[activeCaseStudy].title}</h3>
                  <p className="text-indigo/70 mb-6">{caseStudies[activeCaseStudy].description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h4 className="text-lg font-bold mb-2 text-indigo">The Challenge</h4>
                      <p className="text-indigo/70">{caseStudies[activeCaseStudy].challenge}</p>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-2 text-indigo">Our Solution</h4>
                      <p className="text-indigo/70">{caseStudies[activeCaseStudy].solution}</p>
                    </div>
                  </div>
                  
                  <div className="relative h-80 overflow-hidden rounded-lg">
                    <div className="absolute inset-0 w-full h-full">
                      <img 
                        src={caseStudies[activeCaseStudy].imageBefore} 
                        alt="Before" 
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    </div>
                    
                    <div 
                      className="absolute inset-0 w-full h-full overflow-hidden"
                      style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}
                    >
                      <img 
                        src={caseStudies[activeCaseStudy].imageAfter} 
                        alt="After" 
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    </div>
                    
                    <div 
                      className="absolute inset-y-0 w-1 bg-white cursor-ew-resize"
                      style={{ left: `${sliderPosition}%` }}
                      onMouseDown={(e) => {
                        e.preventDefault();
                        
                        const handleMouseMove = (moveEvent: MouseEvent) => {
                          const container = e.currentTarget.parentElement;
                          if (!container) return;
                          
                          const rect = container.getBoundingClientRect();
                          const x = moveEvent.clientX - rect.left;
                          const newPosition = Math.max(0, Math.min(100, (x / rect.width) * 100));
                          
                          setSliderPosition(newPosition);
                        };
                        
                        const handleMouseUp = () => {
                          document.removeEventListener('mousemove', handleMouseMove);
                          document.removeEventListener('mouseup', handleMouseUp);
                        };
                        
                        document.addEventListener('mousemove', handleMouseMove);
                        document.addEventListener('mouseup', handleMouseUp);
                      }}
                    >
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md">
                        <div className="flex">
                          <ArrowLeft size={12} />
                          <ArrowRight size={12} />
                        </div>
                      </div>
                    </div>
                    
                    <div className="absolute top-4 left-4 bg-indigo/80 text-cream px-3 py-1 text-sm rounded-md backdrop-blur-sm">
                      Before
                    </div>
                    
                    <div className="absolute top-4 right-4 bg-gold/80 text-indigo px-3 py-1 text-sm rounded-md backdrop-blur-sm">
                      After
                    </div>
                  </div>
                  
                  <div className="mt-6 flex justify-between items-center">
                    <div>
                      <span className="text-sm text-indigo/60">Project Budget</span>
                      <p className="text-xl font-bold text-indigo">${caseStudies[activeCaseStudy].budget.toLocaleString()}</p>
                    </div>
                    <a href="#" className="inline-flex items-center text-gold font-medium hover:underline">
                      View Full Case Study <ArrowRight size={16} className="ml-2" />
                    </a>
                  </div>
                </div>
              </div>
            </RevealAnimation>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24 bg-cream">
        <div className="content-container">
          <RevealAnimation>
            <div className="bg-gold/10 rounded-2xl p-10 md:p-16 text-center shadow-sm">
              <h2 className="text-3xl md:text-4xl font-bold text-indigo mb-6">
                Ready to Elevate Your Space?
              </h2>
              <p className="text-indigo/70 max-w-2xl mx-auto mb-8">
                Start your design journey today and discover how our AI-powered solutions can bring your vision to life.
              </p>
              <a href="/contact" className="bg-indigo text-cream font-medium px-8 py-4 rounded-md inline-block transition hover:shadow-lg hover:translate-y-[-2px]">
                Request a Consultation
              </a>
            </div>
          </RevealAnimation>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Services;
