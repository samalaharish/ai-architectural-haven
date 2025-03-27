
import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Home, Calculator, Paintbrush, Code, User, MessageCircle, BookOpen, Sparkles } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/', icon: <Home size={18} /> },
    { name: 'Services', path: '/services', icon: <Sparkles size={18} /> },
    { name: 'Portfolio', path: '/portfolio', icon: <Paintbrush size={18} /> },
    { name: 'Process', path: '/process', icon: <Code size={18} /> },
    { name: 'About', path: '/about', icon: <User size={18} /> },
    { name: 'Blog', path: '/blog', icon: <BookOpen size={18} /> },
    { name: 'Contact', path: '/contact', icon: <MessageCircle size={18} /> },
    { name: 'AI Studio', path: '/ai-design-studio', icon: <Sparkles size={18} /> },
    { name: 'Budget Calculator', path: '/budget-calculator', icon: <Calculator size={18} /> },
  ];

  // Track scroll position to change navbar style
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'py-3 bg-cream/90 backdrop-blur-md shadow-sm' 
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="content-container flex items-center justify-between">
        {/* Logo */}
        <NavLink to="/" className="flex items-center">
          <span className="text-2xl font-playfair font-bold text-indigo">
            Vaarahi
            <span className="text-gold"> Design Studio</span>
          </span>
        </NavLink>

        {/* Desktop Navigation - Updated to be more visible */}
        <div className="hidden lg:flex items-center space-x-1">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) => 
                `flex items-center gap-1 font-medium text-sm transition-colors duration-300 rounded-md px-3 py-2 ${
                  isActive 
                    ? 'text-gold bg-indigo/10' 
                    : 'text-indigo/70 hover:text-indigo hover:bg-indigo/5'
                }`
              }
            >
              {item.icon}
              <span>{item.name}</span>
            </NavLink>
          ))}
        </div>

        {/* Mobile Navigation Toggle */}
        <button 
          className="lg:hidden flex items-center text-indigo p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div 
        className={`lg:hidden fixed inset-0 bg-cream pt-24 z-40 transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col items-center space-y-4 p-6">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) => 
                `flex items-center gap-2 w-full font-medium text-lg rounded-md px-4 py-3 ${
                  isActive 
                    ? 'text-gold bg-indigo/10' 
                    : 'text-indigo hover:bg-indigo/5'
                }`
              }
            >
              {item.icon}
              <span>{item.name}</span>
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
