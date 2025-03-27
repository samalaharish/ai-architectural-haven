
import { useState } from 'react';
import { ArrowRight, Filter, X } from 'lucide-react';
import RevealAnimation from '../components/ui/RevealAnimation';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const portfolioItems = [
  {
    id: 1,
    title: 'Modern Apartment Renovation',
    description: 'Complete redesign of a 2-bedroom apartment with open concept living',
    category: 'residential',
    style: 'modern',
    roomType: 'living',
    sustainability: 'high',
    budget: 85000,
    images: [
      'https://images.unsplash.com/photo-1588854337115-1c67d9247e4d?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=800&auto=format&fit=crop'
    ]
  },
  {
    id: 2,
    title: 'Corporate Office Redesign',
    description: 'Modern workspace for a technology company focusing on collaboration',
    category: 'commercial',
    style: 'contemporary',
    roomType: 'office',
    sustainability: 'medium',
    budget: 250000,
    images: [
      'https://images.unsplash.com/photo-1604328698692-f76ea9498e76?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1497215842964-222b430dc094?w=800&auto=format&fit=crop'
    ]
  },
  {
    id: 3,
    title: 'Luxury Bathroom Remodel',
    description: 'Spa-inspired bathroom with premium fixtures and natural stone',
    category: 'residential',
    style: 'luxury',
    roomType: 'bathroom',
    sustainability: 'medium',
    budget: 45000,
    images: [
      'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=800&auto=format&fit=crop'
    ]
  },
  {
    id: 4,
    title: 'Sustainable Restaurant Design',
    description: 'Eco-friendly dining space using reclaimed materials and energy-efficient systems',
    category: 'commercial',
    style: 'industrial',
    roomType: 'dining',
    sustainability: 'high',
    budget: 180000,
    images: [
      'https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?w=800&auto=format&fit=crop'
    ]
  },
  {
    id: 5,
    title: 'Minimalist Kitchen Renovation',
    description: 'Clean, functional kitchen design with smart appliances',
    category: 'residential',
    style: 'minimalist',
    roomType: 'kitchen',
    sustainability: 'high',
    budget: 65000,
    images: [
      'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1570222094288-c138935518c6?w=800&auto=format&fit=crop'
    ]
  },
  {
    id: 6,
    title: 'Traditional Home Library',
    description: 'Classic library design with custom built-in shelving and reading nooks',
    category: 'residential',
    style: 'traditional',
    roomType: 'library',
    sustainability: 'low',
    budget: 55000,
    images: [
      'https://images.unsplash.com/photo-1580329862358-05db1df1a007?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=800&auto=format&fit=crop'
    ]
  },
  {
    id: 7,
    title: 'Boutique Retail Space',
    description: 'High-end retail environment designed to enhance product display',
    category: 'commercial',
    style: 'contemporary',
    roomType: 'retail',
    sustainability: 'medium',
    budget: 120000,
    images: [
      'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1604176424472-9d7e14d68747?w=800&auto=format&fit=crop'
    ]
  },
  {
    id: 8,
    title: 'Scandinavian Bedroom Design',
    description: 'Light, airy bedroom with natural materials and minimal decor',
    category: 'residential',
    style: 'scandinavian',
    roomType: 'bedroom',
    sustainability: 'high',
    budget: 40000,
    images: [
      'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1588046130717-0eb0c9a3ba15?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1518733057094-95b53143d2a7?w=800&auto=format&fit=crop'
    ]
  }
];

type Filters = {
  category: string;
  style: string;
  roomType: string;
  sustainability: string;
  budgetRange: [number, number];
};

const Portfolio = () => {
  // Lightbox state
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Filter states
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filters, setFilters] = useState<Filters>({
    category: 'all',
    style: 'all',
    roomType: 'all',
    sustainability: 'all',
    budgetRange: [0, 300000],
  });
  
  // Calculate min and max budget
  const minBudget = Math.min(...portfolioItems.map(item => item.budget));
  const maxBudget = Math.max(...portfolioItems.map(item => item.budget));
  
  // Update filters
  const updateFilter = (key: keyof Filters, value: any) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };
  
  // Filter portfolio items
  const filteredItems = portfolioItems.filter(item => {
    return (
      (filters.category === 'all' || item.category === filters.category) &&
      (filters.style === 'all' || item.style === filters.style) &&
      (filters.roomType === 'all' || item.roomType === filters.roomType) &&
      (filters.sustainability === 'all' || item.sustainability === filters.sustainability) &&
      item.budget >= filters.budgetRange[0] && item.budget <= filters.budgetRange[1]
    );
  });
  
  // Open lightbox
  const openLightbox = (index: number) => {
    setCurrentProject(index);
    setCurrentImageIndex(0);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };
  
  // Close lightbox
  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'auto';
  };
  
  // Navigate lightbox images
  const navigateImage = (direction: 'next' | 'prev') => {
    if (currentProject === null) return;
    
    const projectImages = portfolioItems[currentProject].images;
    
    if (direction === 'next') {
      setCurrentImageIndex(prev => (prev + 1) % projectImages.length);
    } else {
      setCurrentImageIndex(prev => (prev - 1 + projectImages.length) % projectImages.length);
    }
  };
  
  // Reset all filters
  const resetFilters = () => {
    setFilters({
      category: 'all',
      style: 'all',
      roomType: 'all',
      sustainability: 'all',
      budgetRange: [0, maxBudget],
    });
  };
  
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
              Showcasing Our Design Excellence
            </h1>
          </RevealAnimation>
          
          <RevealAnimation delay={400}>
            <p className="text-xl max-w-3xl text-cream/80 mb-12">
              Explore our collection of transformative projects across residential and commercial spaces. Each design tells a unique story of innovation and functional aesthetics.
            </p>
          </RevealAnimation>
        </div>
      </section>
      
      {/* Filter Controls */}
      <section className="py-8 border-b border-indigo/10 sticky top-0 bg-cream/95 backdrop-blur-md z-20 shadow-sm">
        <div className="content-container">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center">
              <button 
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="flex items-center space-x-2 bg-indigo text-cream px-4 py-2 rounded-md"
              >
                <Filter size={18} />
                <span>Filters</span>
              </button>
              
              {/* Active filter badges */}
              <div className="ml-4 flex flex-wrap gap-2">
                {filters.category !== 'all' && (
                  <div className="bg-indigo/10 text-indigo text-sm rounded-full px-3 py-1 flex items-center">
                    {filters.category}
                    <button 
                      className="ml-2" 
                      onClick={() => updateFilter('category', 'all')}
                    >
                      <X size={14} />
                    </button>
                  </div>
                )}
                
                {filters.style !== 'all' && (
                  <div className="bg-indigo/10 text-indigo text-sm rounded-full px-3 py-1 flex items-center">
                    {filters.style}
                    <button 
                      className="ml-2" 
                      onClick={() => updateFilter('style', 'all')}
                    >
                      <X size={14} />
                    </button>
                  </div>
                )}
                
                {filters.roomType !== 'all' && (
                  <div className="bg-indigo/10 text-indigo text-sm rounded-full px-3 py-1 flex items-center">
                    {filters.roomType}
                    <button 
                      className="ml-2" 
                      onClick={() => updateFilter('roomType', 'all')}
                    >
                      <X size={14} />
                    </button>
                  </div>
                )}
                
                {filters.sustainability !== 'all' && (
                  <div className="bg-indigo/10 text-indigo text-sm rounded-full px-3 py-1 flex items-center">
                    {filters.sustainability} sustainability
                    <button 
                      className="ml-2" 
                      onClick={() => updateFilter('sustainability', 'all')}
                    >
                      <X size={14} />
                    </button>
                  </div>
                )}
                
                {(filters.category !== 'all' || 
                 filters.style !== 'all' || 
                 filters.roomType !== 'all' || 
                 filters.sustainability !== 'all') && (
                  <button 
                    className="text-indigo underline text-sm"
                    onClick={resetFilters}
                  >
                    Clear All
                  </button>
                )}
              </div>
            </div>
            
            <div className="text-indigo/70">
              {filteredItems.length} projects found
            </div>
          </div>
          
          {/* Expanded filter panel */}
          {isFilterOpen && (
            <div className="mt-6 p-6 bg-white rounded-lg shadow-sm animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-6">
                {/* Category filter */}
                <div>
                  <h3 className="text-sm font-medium mb-3 text-indigo">Project Type</h3>
                  <div className="space-y-2">
                    {['all', 'residential', 'commercial'].map(category => (
                      <label key={category} className="flex items-center cursor-pointer">
                        <input 
                          type="radio" 
                          name="category" 
                          checked={filters.category === category}
                          onChange={() => updateFilter('category', category)}
                          className="mr-2 accent-gold" 
                        />
                        <span className="text-indigo/80 capitalize">
                          {category === 'all' ? 'All Types' : category}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
                
                {/* Style filter */}
                <div>
                  <h3 className="text-sm font-medium mb-3 text-indigo">Design Style</h3>
                  <div className="space-y-2">
                    {['all', 'modern', 'traditional', 'contemporary', 'minimalist', 'scandinavian', 'industrial', 'luxury'].map(style => (
                      <label key={style} className="flex items-center cursor-pointer">
                        <input 
                          type="radio" 
                          name="style" 
                          checked={filters.style === style}
                          onChange={() => updateFilter('style', style)}
                          className="mr-2 accent-gold" 
                        />
                        <span className="text-indigo/80 capitalize">
                          {style === 'all' ? 'All Styles' : style}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
                
                {/* Room Type filter */}
                <div>
                  <h3 className="text-sm font-medium mb-3 text-indigo">Room Type</h3>
                  <div className="space-y-2">
                    {['all', 'living', 'kitchen', 'bathroom', 'bedroom', 'office', 'dining', 'retail', 'library'].map(roomType => (
                      <label key={roomType} className="flex items-center cursor-pointer">
                        <input 
                          type="radio" 
                          name="roomType" 
                          checked={filters.roomType === roomType}
                          onChange={() => updateFilter('roomType', roomType)}
                          className="mr-2 accent-gold" 
                        />
                        <span className="text-indigo/80 capitalize">
                          {roomType === 'all' ? 'All Rooms' : roomType}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
                
                {/* Sustainability filter */}
                <div>
                  <h3 className="text-sm font-medium mb-3 text-indigo">Sustainability</h3>
                  <div className="space-y-2">
                    {['all', 'low', 'medium', 'high'].map(sustainability => (
                      <label key={sustainability} className="flex items-center cursor-pointer">
                        <input 
                          type="radio" 
                          name="sustainability" 
                          checked={filters.sustainability === sustainability}
                          onChange={() => updateFilter('sustainability', sustainability)}
                          className="mr-2 accent-gold" 
                        />
                        <span className="text-indigo/80 capitalize">
                          {sustainability === 'all' ? 'All Levels' : `${sustainability}`}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Budget range */}
              <div className="mt-8">
                <h3 className="text-sm font-medium mb-3 text-indigo">Budget Range</h3>
                <div className="px-3">
                  <input 
                    type="range"
                    min={0}
                    max={maxBudget}
                    value={filters.budgetRange[1]}
                    onChange={(e) => updateFilter('budgetRange', [0, parseInt(e.target.value)])}
                    className="w-full accent-gold"
                  />
                  <div className="flex justify-between text-indigo/70 text-sm mt-2">
                    <span>$0</span>
                    <span>Up to ${filters.budgetRange[1].toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
      
      {/* Portfolio Grid */}
      <section className="py-16">
        <div className="content-container">
          {filteredItems.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredItems.map((item, index) => (
                <RevealAnimation key={item.id} delay={index * 100}>
                  <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                    <div 
                      className="h-64 overflow-hidden cursor-pointer relative"
                      onClick={() => openLightbox(portfolioItems.findIndex(p => p.id === item.id))}
                    >
                      <img 
                        src={item.images[0]} 
                        alt={item.title} 
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-indigo/10 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="bg-indigo/80 text-cream px-4 py-2 rounded-md backdrop-blur-sm">
                          View Project
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-xl font-bold text-indigo">{item.title}</h3>
                        <div className="bg-gold/10 text-gold text-xs px-2 py-1 rounded-md">
                          ${item.budget.toLocaleString()}
                        </div>
                      </div>
                      
                      <p className="text-indigo/70 mb-4">{item.description}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-6">
                        <span className="bg-indigo/5 text-indigo/70 text-xs px-2 py-1 rounded-full capitalize">
                          {item.category}
                        </span>
                        <span className="bg-indigo/5 text-indigo/70 text-xs px-2 py-1 rounded-full capitalize">
                          {item.style}
                        </span>
                        <span className="bg-indigo/5 text-indigo/70 text-xs px-2 py-1 rounded-full capitalize">
                          {item.roomType}
                        </span>
                      </div>
                      
                      <a href="#" className="inline-flex items-center text-gold font-medium hover:underline">
                        View Case Study <ArrowRight size={16} className="ml-2" />
                      </a>
                    </div>
                  </div>
                </RevealAnimation>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h3 className="text-2xl font-bold text-indigo mb-4">No Projects Found</h3>
              <p className="text-indigo/70 mb-6">No projects match your current filter criteria.</p>
              <button
                onClick={resetFilters}
                className="bg-indigo text-cream px-6 py-3 rounded-md"
              >
                Reset All Filters
              </button>
            </div>
          )}
        </div>
      </section>
      
      {/* Lightbox */}
      {lightboxOpen && currentProject !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 md:p-8">
          <button 
            className="absolute top-4 right-4 text-white p-2 rounded-full bg-black/50 hover:bg-black/70 transition"
            onClick={closeLightbox}
          >
            <X size={24} />
          </button>
          
          <div className="w-full max-w-6xl">
            <div className="relative aspect-video bg-black/50 rounded-lg overflow-hidden">
              <img 
                src={portfolioItems[currentProject].images[currentImageIndex]} 
                alt={portfolioItems[currentProject].title} 
                className="w-full h-full object-contain"
              />
              
              {/* Navigation arrows */}
              {portfolioItems[currentProject].images.length > 1 && (
                <>
                  <button 
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition"
                    onClick={() => navigateImage('prev')}
                  >
                    <ArrowLeft size={24} />
                  </button>
                  <button 
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition"
                    onClick={() => navigateImage('next')}
                  >
                    <ArrowRight size={24} />
                  </button>
                </>
              )}
              
              {/* Image counter */}
              <div className="absolute bottom-4 right-4 bg-black/70 text-white text-sm px-3 py-1 rounded-md">
                {currentImageIndex + 1} / {portfolioItems[currentProject].images.length}
              </div>
            </div>
            
            <div className="mt-4 text-white">
              <h3 className="text-2xl font-bold">{portfolioItems[currentProject].title}</h3>
              <p className="text-white/70 mt-2">{portfolioItems[currentProject].description}</p>
            </div>
            
            {/* Thumbnail navigation */}
            {portfolioItems[currentProject].images.length > 1 && (
              <div className="mt-4 flex space-x-2 overflow-x-auto pb-2">
                {portfolioItems[currentProject].images.map((image, idx) => (
                  <button 
                    key={idx} 
                    className={`w-20 h-20 flex-shrink-0 rounded overflow-hidden transition ${
                      idx === currentImageIndex ? 'ring-2 ring-gold' : 'opacity-70 hover:opacity-100'
                    }`}
                    onClick={() => setCurrentImageIndex(idx)}
                  >
                    <img 
                      src={image} 
                      alt={`Thumbnail ${idx + 1}`} 
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
      
      {/* CTA Section */}
      <section className="py-20 bg-indigo text-cream">
        <div className="content-container">
          <RevealAnimation>
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Create Your Own Success Story?
              </h2>
              <p className="text-cream/80 max-w-2xl mx-auto mb-10">
                Let's collaborate on your next design project and transform your space into something extraordinary.
              </p>
              <a href="/contact" className="bg-gold text-indigo font-medium px-8 py-4 rounded-md inline-block transition hover:shadow-lg hover:translate-y-[-2px]">
                Start Your Project
              </a>
            </div>
          </RevealAnimation>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Portfolio;
