
import { useState } from 'react';
import { ArrowLeft, ArrowRight, Filter, Search } from 'lucide-react';
import RevealAnimation from '../components/ui/RevealAnimation';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { Slider } from '@/components/ui/slider';
import { Badge } from '@/components/ui/badge';

const categories = [
  { id: 'all', name: 'All Projects' },
  { id: 'residential', name: 'Residential' },
  { id: 'commercial', name: 'Commercial' },
  { id: 'hospitality', name: 'Hospitality' },
  { id: 'institutional', name: 'Institutional' },
];

const filters = {
  rooms: [
    'Living Room', 
    'Kitchen', 
    'Bedroom', 
    'Bathroom', 
    'Office', 
    'Outdoor', 
    'Dining', 
    'Lobby'
  ],
  styles: [
    'Modern', 
    'Traditional', 
    'Contemporary', 
    'Industrial', 
    'Minimalist', 
    'Scandinavian', 
    'Bohemian', 
    'Mid-Century'
  ],
  sustainability: [
    'Energy Efficient', 
    'Sustainable Materials', 
    'Water Conservation', 
    'LEED Certified', 
    'Solar Integrated'
  ]
};

const projectsData = [
  {
    id: 1,
    title: "Coastal Modern Retreat",
    category: "residential",
    rooms: ["Living Room", "Kitchen", "Bedroom"],
    styles: ["Modern", "Minimalist"],
    sustainability: ["Energy Efficient", "Sustainable Materials"],
    budget: 125000,
    location: "Malibu, CA",
    year: 2023,
    description: "A stunning beachfront property redesigned with sustainable materials and smart automation.",
    thumbnail: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800",
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200",
      "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?auto=format&fit=crop&w=1200",
      "https://images.unsplash.com/photo-1537726235470-8504e3beef77?auto=format&fit=crop&w=1200",
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1200"
    ]
  },
  {
    id: 2,
    title: "Urban Loft Conversion",
    category: "residential",
    rooms: ["Living Room", "Kitchen", "Office"],
    styles: ["Industrial", "Contemporary"],
    sustainability: ["Energy Efficient"],
    budget: 95000,
    location: "Brooklyn, NY",
    year: 2022,
    description: "Transformed an old factory space into a modern living environment while preserving industrial elements.",
    thumbnail: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800",
    images: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200",
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200"
    ]
  },
  {
    id: 3,
    title: "Tech Headquarters",
    category: "commercial",
    rooms: ["Office", "Lobby", "Dining"],
    styles: ["Modern", "Minimalist"],
    sustainability: ["Energy Efficient", "LEED Certified", "Solar Integrated"],
    budget: 2500000,
    location: "San Francisco, CA",
    year: 2023,
    description: "A carbon-neutral office space designed for collaboration and innovation.",
    thumbnail: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=800",
    images: [
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200",
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200",
      "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?auto=format&fit=crop&w=1200"
    ]
  },
  {
    id: 4,
    title: "Boutique Hotel Renovation",
    category: "hospitality",
    rooms: ["Lobby", "Bedroom", "Dining", "Bathroom"],
    styles: ["Contemporary", "Traditional"],
    sustainability: ["Water Conservation", "Sustainable Materials"],
    budget: 1800000,
    location: "Charleston, SC",
    year: 2022,
    description: "A historic building transformed into a luxurious boutique hotel with modern amenities.",
    thumbnail: "https://images.unsplash.com/photo-1606402179428-a57976d71fa4?auto=format&fit=crop&w=800",
    images: [
      "https://images.unsplash.com/photo-1606402179428-a57976d71fa4?auto=format&fit=crop&w=1200",
      "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1200",
      "https://images.unsplash.com/photo-1587985064135-0366536eab42?auto=format&fit=crop&w=1200"
    ]
  },
  {
    id: 5,
    title: "Scandinavian Apartment",
    category: "residential",
    rooms: ["Living Room", "Kitchen", "Bedroom", "Bathroom"],
    styles: ["Scandinavian", "Minimalist"],
    sustainability: ["Energy Efficient", "Sustainable Materials"],
    budget: 85000,
    location: "Seattle, WA",
    year: 2023,
    description: "A light-filled urban apartment designed with Scandinavian principles of simplicity and connection to nature.",
    thumbnail: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800",
    images: [
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200",
      "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1200",
      "https://images.unsplash.com/photo-1551516594-56cb78394645?auto=format&fit=crop&w=1200"
    ]
  },
  {
    id: 6,
    title: "Modern Educational Center",
    category: "institutional",
    rooms: ["Classroom", "Office", "Lobby", "Outdoor"],
    styles: ["Contemporary", "Modern"],
    sustainability: ["LEED Certified", "Solar Integrated", "Water Conservation"],
    budget: 4200000,
    location: "Austin, TX",
    year: 2023,
    description: "A state-of-the-art educational facility designed for flexible learning and environmental sustainability.",
    thumbnail: "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=800",
    images: [
      "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=1200",
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200",
      "https://images.unsplash.com/photo-1522661067900-ab829854a57f?auto=format&fit=crop&w=1200"
    ]
  }
];

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [budgetRange, setBudgetRange] = useState([0, 5000000]);
  const [selectedRooms, setSelectedRooms] = useState<string[]>([]);
  const [selectedStyles, setSelectedStyles] = useState<string[]>([]);
  const [selectedSustainability, setSelectedSustainability] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filtersVisible, setFiltersVisible] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Filter projects based on selection
  const filteredProjects = projectsData.filter(project => {
    // Category filter
    if (selectedCategory !== 'all' && project.category !== selectedCategory) {
      return false;
    }
    
    // Budget filter
    if (project.budget < budgetRange[0] || project.budget > budgetRange[1]) {
      return false;
    }
    
    // Room filter
    if (selectedRooms.length > 0 && !selectedRooms.some(room => project.rooms.includes(room))) {
      return false;
    }
    
    // Style filter
    if (selectedStyles.length > 0 && !selectedStyles.some(style => project.styles.includes(style))) {
      return false;
    }
    
    // Sustainability filter
    if (selectedSustainability.length > 0 && 
        !selectedSustainability.some(item => project.sustainability.includes(item))) {
      return false;
    }
    
    // Search filter
    if (searchQuery && 
        !project.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !project.description.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !project.location.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    
    return true;
  });
  
  const toggleFilter = (type: 'rooms' | 'styles' | 'sustainability', value: string) => {
    switch (type) {
      case 'rooms':
        setSelectedRooms(prev => 
          prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]
        );
        break;
      case 'styles':
        setSelectedStyles(prev => 
          prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]
        );
        break;
      case 'sustainability':
        setSelectedSustainability(prev => 
          prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]
        );
        break;
    }
  };
  
  const openProjectModal = (project: any) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
    setModalOpen(true);
    document.body.style.overflow = 'hidden';
  };
  
  const closeProjectModal = () => {
    setModalOpen(false);
    document.body.style.overflow = 'auto';
  };
  
  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === selectedProject.images.length - 1 ? 0 : prevIndex + 1
      );
    }
  };
  
  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === 0 ? selectedProject.images.length - 1 : prevIndex - 1
      );
    }
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
              Explore Our Design Excellence
            </h1>
          </RevealAnimation>
          
          <RevealAnimation delay={400}>
            <p className="text-xl max-w-3xl text-cream/80 mb-12">
              Browse our curated collection of projects that showcase our expertise in creating innovative, functional, and beautiful spaces.
            </p>
          </RevealAnimation>
        </div>
      </section>
      
      {/* Filters Section */}
      <section className="py-8 border-b border-indigo/10">
        <div className="content-container">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
            {/* Category Navigation */}
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    selectedCategory === category.id 
                      ? 'bg-indigo text-cream' 
                      : 'bg-indigo/10 text-indigo hover:bg-indigo/20'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
            
            {/* Search and Filters */}
            <div className="flex items-center gap-3 w-full md:w-auto">
              <div className="relative flex-1 md:w-64">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-indigo/50 h-4 w-4" />
                <input
                  type="text"
                  placeholder="Search projects..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 border border-indigo/20 rounded-md focus:outline-none focus:border-indigo/40 bg-white"
                />
              </div>
              
              <button
                onClick={() => setFiltersVisible(!filtersVisible)}
                className="flex items-center gap-2 px-4 py-2 bg-indigo/10 hover:bg-indigo/20 text-indigo rounded-md transition-colors"
              >
                <Filter size={16} />
                <span className="hidden sm:inline">Filters</span>
              </button>
            </div>
          </div>
          
          {/* Expanded Filters */}
          {filtersVisible && (
            <div className="bg-white p-6 rounded-lg shadow-md mb-8 animate-in fade-in slide-in-from-top-5 duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Budget Range Slider */}
                <div>
                  <h3 className="text-lg font-medium mb-4 text-indigo">Budget Range</h3>
                  <Slider
                    defaultValue={budgetRange}
                    max={5000000}
                    step={10000}
                    onValueChange={setBudgetRange}
                    className="mb-2"
                  />
                  <div className="flex justify-between text-sm text-indigo/70">
                    <span>${budgetRange[0].toLocaleString()}</span>
                    <span>${budgetRange[1].toLocaleString()}</span>
                  </div>
                </div>
                
                {/* Room Type Filters */}
                <div>
                  <h3 className="text-lg font-medium mb-4 text-indigo">Room Types</h3>
                  <div className="flex flex-wrap gap-2">
                    {filters.rooms.map(room => (
                      <Badge
                        key={room}
                        variant={selectedRooms.includes(room) ? "default" : "outline"}
                        className={`cursor-pointer ${
                          selectedRooms.includes(room) 
                            ? 'bg-indigo text-cream hover:bg-indigo/80' 
                            : 'text-indigo hover:bg-indigo/10'
                        }`}
                        onClick={() => toggleFilter('rooms', room)}
                      >
                        {room}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                {/* Combined Style & Sustainability */}
                <div className="space-y-6">
                  {/* Style Filters */}
                  <div>
                    <h3 className="text-lg font-medium mb-4 text-indigo">Design Style</h3>
                    <div className="flex flex-wrap gap-2">
                      {filters.styles.map(style => (
                        <Badge
                          key={style}
                          variant={selectedStyles.includes(style) ? "default" : "outline"}
                          className={`cursor-pointer ${
                            selectedStyles.includes(style) 
                              ? 'bg-indigo text-cream hover:bg-indigo/80' 
                              : 'text-indigo hover:bg-indigo/10'
                          }`}
                          onClick={() => toggleFilter('styles', style)}
                        >
                          {style}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  {/* Sustainability Filters */}
                  <div>
                    <h3 className="text-lg font-medium mb-4 text-indigo">Sustainability</h3>
                    <div className="flex flex-wrap gap-2">
                      {filters.sustainability.map(item => (
                        <Badge
                          key={item}
                          variant={selectedSustainability.includes(item) ? "default" : "outline"}
                          className={`cursor-pointer ${
                            selectedSustainability.includes(item) 
                              ? 'bg-sage text-white hover:bg-sage/80' 
                              : 'text-sage border-sage/30 hover:bg-sage/10'
                          }`}
                          onClick={() => toggleFilter('sustainability', item)}
                        >
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
      
      {/* Projects Grid */}
      <section className="py-16 bg-cream">
        <div className="content-container">
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <RevealAnimation key={project.id}>
                  <div 
                    className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 cursor-pointer"
                    onClick={() => openProjectModal(project)}
                  >
                    <div className="relative h-64 overflow-hidden">
                      <img 
                        src={project.thumbnail} 
                        alt={project.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-indigo mb-2">{project.title}</h3>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.styles.slice(0, 2).map((style, index) => (
                          <Badge key={index} variant="outline" className="bg-indigo/5 text-indigo border-indigo/20">
                            {style}
                          </Badge>
                        ))}
                      </div>
                      
                      <p className="text-indigo/70 mb-4 line-clamp-2">{project.description}</p>
                      
                      <div className="flex justify-between items-center text-sm text-indigo/60">
                        <span>{project.location}</span>
                        <span>{project.year}</span>
                      </div>
                    </div>
                  </div>
                </RevealAnimation>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h3 className="text-2xl font-medium text-indigo mb-4">No projects match your filters</h3>
              <p className="text-indigo/70 mb-6">Try adjusting your filters or search terms to find what you're looking for.</p>
              <button 
                onClick={() => {
                  setSelectedCategory('all');
                  setBudgetRange([0, 5000000]);
                  setSelectedRooms([]);
                  setSelectedStyles([]);
                  setSelectedSustainability([]);
                  setSearchQuery('');
                }}
                className="btn-secondary"
              >
                Reset All Filters
              </button>
            </div>
          )}
        </div>
      </section>
      
      {/* Project Modal */}
      {modalOpen && selectedProject && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-6xl w-full bg-white rounded-lg overflow-hidden">
            {/* Close Button */}
            <button 
              onClick={closeProjectModal}
              className="absolute right-4 top-4 z-10 w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70 transition-colors"
              aria-label="Close modal"
            >
              <span className="text-xl">&times;</span>
            </button>
            
            <div className="md:flex">
              {/* Image Gallery */}
              <div className="md:w-3/5 relative bg-black">
                <div className="relative h-72 md:h-[600px]">
                  <img 
                    src={selectedProject.images[currentImageIndex]} 
                    alt={selectedProject.title} 
                    className="w-full h-full object-contain"
                  />
                  
                  {/* Image Navigation */}
                  <button 
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70 transition-colors"
                    aria-label="Previous image"
                  >
                    <ArrowLeft size={20} />
                  </button>
                  
                  <button 
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70 transition-colors"
                    aria-label="Next image"
                  >
                    <ArrowRight size={20} />
                  </button>
                  
                  {/* Image Counter */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                    {currentImageIndex + 1} / {selectedProject.images.length}
                  </div>
                </div>
              </div>
              
              {/* Project Details */}
              <div className="md:w-2/5 p-6 md:p-8 overflow-y-auto max-h-[600px]">
                <h2 className="text-2xl font-bold text-indigo mb-3">{selectedProject.title}</h2>
                
                <div className="flex items-center text-indigo/70 mb-6">
                  <span className="mr-4">{selectedProject.location}</span>
                  <span>{selectedProject.year}</span>
                </div>
                
                <p className="text-indigo/80 mb-6">{selectedProject.description}</p>
                
                <div className="mb-6">
                  <h3 className="text-lg font-medium mb-2 text-indigo">Project Details</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-indigo/70">Category</p>
                      <p className="font-medium text-indigo capitalize">{selectedProject.category}</p>
                    </div>
                    <div>
                      <p className="text-sm text-indigo/70">Budget</p>
                      <p className="font-medium text-indigo">${selectedProject.budget.toLocaleString()}</p>
                    </div>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-lg font-medium mb-2 text-indigo">Design Style</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.styles.map((style: string, index: number) => (
                      <Badge key={index} className="bg-indigo text-cream">
                        {style}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-lg font-medium mb-2 text-indigo">Room Types</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.rooms.map((room: string, index: number) => (
                      <Badge key={index} variant="outline" className="border-indigo/30 text-indigo">
                        {room}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                {selectedProject.sustainability.length > 0 && (
                  <div>
                    <h3 className="text-lg font-medium mb-2 text-indigo">Sustainability Features</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.sustainability.map((item: string, index: number) => (
                        <Badge key={index} className="bg-sage text-white">
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* CTA Section */}
      <section className="py-16 bg-indigo/5">
        <div className="content-container text-center">
          <RevealAnimation>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-indigo">Ready to Start Your Project?</h2>
            <p className="text-lg text-indigo/70 max-w-2xl mx-auto mb-8">
              Transform your space with our innovative design solutions tailored to your unique vision.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="btn-primary">Request a Consultation</a>
              <a href="/budget-calculator" className="btn-secondary">Calculate Your Budget</a>
            </div>
          </RevealAnimation>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Portfolio;
