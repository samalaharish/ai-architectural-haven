
import { NavLink } from 'react-router-dom';
import { Phone, Mail, MapPin, Instagram, Facebook, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-indigo text-cream pt-16 pb-8">
      <div className="content-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Column 1 - About */}
          <div>
            <h3 className="text-gold text-2xl font-playfair mb-4">Vaarahi Design Studio</h3>
            <p className="mb-4 text-cream/80">
              Where AI meets architectural brilliance. We create spaces that inspire, function, and evolve.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" aria-label="Instagram" className="text-cream/70 hover:text-gold transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://facebook.com" aria-label="Facebook" className="text-cream/70 hover:text-gold transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://linkedin.com" aria-label="LinkedIn" className="text-cream/70 hover:text-gold transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://twitter.com" aria-label="Twitter" className="text-cream/70 hover:text-gold transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          {/* Column 2 - Quick Links */}
          <div>
            <h4 className="text-xl font-playfair mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <NavLink to="/services" className="text-cream/70 hover:text-gold transition-colors">
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink to="/portfolio" className="text-cream/70 hover:text-gold transition-colors">
                  Portfolio
                </NavLink>
              </li>
              <li>
                <NavLink to="/process" className="text-cream/70 hover:text-gold transition-colors">
                  Process
                </NavLink>
              </li>
              <li>
                <NavLink to="/blog" className="text-cream/70 hover:text-gold transition-colors">
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="text-cream/70 hover:text-gold transition-colors">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
          
          {/* Column 3 - AI Tools */}
          <div>
            <h4 className="text-xl font-playfair mb-4">AI Tools</h4>
            <ul className="space-y-2">
              <li>
                <NavLink to="/ai-design-studio" className="text-cream/70 hover:text-gold transition-colors">
                  AI Design Studio
                </NavLink>
              </li>
              <li>
                <NavLink to="/budget-calculator" className="text-cream/70 hover:text-gold transition-colors">
                  Budget Calculator
                </NavLink>
              </li>
              <li>
                <a href="#style-quiz" className="text-cream/70 hover:text-gold transition-colors">
                  Style Quiz
                </a>
              </li>
              <li>
                <a href="#virtual-consultation" className="text-cream/70 hover:text-gold transition-colors">
                  Virtual Consultation
                </a>
              </li>
            </ul>
          </div>
          
          {/* Column 4 - Contact */}
          <div>
            <h4 className="text-xl font-playfair mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 text-gold" />
                <p className="text-cream/80">123 Design Avenue, Creative District, City, Country</p>
              </div>
              <div className="flex items-center">
                <Phone size={18} className="mr-2 text-gold" />
                <a href="tel:+1234567890" className="text-cream/80 hover:text-gold transition-colors">
                  +1 (234) 567-890
                </a>
              </div>
              <div className="flex items-center">
                <Mail size={18} className="mr-2 text-gold" />
                <a href="mailto:info@vaarahidesign.com" className="text-cream/80 hover:text-gold transition-colors">
                  info@vaarahidesign.com
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="pt-8 border-t border-cream/10 text-center text-cream/60 text-sm">
          <p>© {currentYear} Vaarahi Design Studio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
