
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Process', path: '/process' },
    { name: 'About', path: '/about' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
    { name: 'AI Studio', path: '/ai-design-studio' },
    { name: 'Budget Calculator', path: '/budget-calculator' },
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

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) => 
                `font-medium text-sm transition-colors duration-300 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-gold after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left ${
                  isActive 
                    ? 'text-indigo after:scale-x-100' 
                    : 'text-indigo/70 hover:text-indigo'
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
          <NavLink 
            to="/ai-design-studio" 
            className="btn-primary text-sm"
          >
            AI Design Studio
          </NavLink>
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
        <div className="flex flex-col items-center space-y-6 p-6">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) => 
                `font-medium text-lg ${
                  isActive 
                    ? 'text-gold' 
                    : 'text-indigo'
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
          <NavLink 
            to="/ai-design-studio" 
            onClick={() => setIsOpen(false)}
            className="btn-primary mt-4"
          >
            AI Design Studio
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
