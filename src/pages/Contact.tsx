
import { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, Clock, Send, Check, Calculator, Lightbulb, Image } from 'lucide-react';
import RevealAnimation from '../components/ui/RevealAnimation';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    projectType: 'Residential'
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        projectType: 'Residential'
      });
    }, 1500);
  };
  
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
      
      {/* Contact Information and Form */}
      <section className="py-20">
        <div className="content-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <RevealAnimation>
              <div>
                <h2 className="text-3xl font-bold mb-8 text-indigo">Get in Touch</h2>
                
                <div className="space-y-6 mb-10">
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-indigo/10 flex items-center justify-center mr-4 flex-shrink-0">
                      <MapPin size={20} className="text-indigo" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-indigo mb-1">Our Location</h3>
                      <p className="text-indigo/70">123 Design Avenue, Banjara Hills</p>
                      <p className="text-indigo/70">Hyderabad, Telangana 500034</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-indigo/10 flex items-center justify-center mr-4 flex-shrink-0">
                      <Phone size={20} className="text-indigo" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-indigo mb-1">Call Us</h3>
                      <p className="text-indigo/70">+91 98765 43210</p>
                      <p className="text-indigo/70">+91 12345 67890</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-indigo/10 flex items-center justify-center mr-4 flex-shrink-0">
                      <Mail size={20} className="text-indigo" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-indigo mb-1">Email Us</h3>
                      <p className="text-indigo/70">info@vaarahidesign.com</p>
                      <p className="text-indigo/70">support@vaarahidesign.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-indigo/10 flex items-center justify-center mr-4 flex-shrink-0">
                      <Clock size={20} className="text-indigo" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-indigo mb-1">Business Hours</h3>
                      <p className="text-indigo/70">Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p className="text-indigo/70">Saturday: 10:00 AM - 4:00 PM</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-indigo/5 p-6 rounded-lg">
                  <h3 className="text-lg font-bold text-indigo mb-4">Visit Our Studio</h3>
                  <div className="aspect-[4/3] rounded-lg overflow-hidden">
                    <img 
                      src="https://maps.googleapis.com/maps/api/staticmap?center=Banjara+Hills,Hyderabad&zoom=14&size=600x450&key=AIzaSyBQHAIaWjVDHFY1DcpP1_8PVqePgbCAGKw" 
                      alt="Map showing Vaarahi Design Studio location"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="mt-4 text-sm text-indigo/70">
                    Our design studio is located in the heart of Banjara Hills, easily accessible by car or public transport.
                  </p>
                </div>
              </div>
            </RevealAnimation>
            
            <RevealAnimation delay={300}>
              <div className="bg-white rounded-xl shadow-sm p-8">
                <h2 className="text-2xl font-bold mb-6 text-indigo">Send Us a Message</h2>
                
                {submitted ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Check size={32} className="text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-indigo">Message Sent Successfully!</h3>
                    <p className="text-indigo/70 mb-6">
                      Thank you for reaching out. We'll get back to you within 24 hours.
                    </p>
                    <button 
                      onClick={() => setSubmitted(false)}
                      className="bg-indigo text-cream px-6 py-3 rounded-md transition hover:shadow-lg"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-indigo/70 mb-2">Your Name</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-indigo/20 rounded-md"
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-indigo/70 mb-2">Email Address</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-indigo/20 rounded-md"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-indigo/70 mb-2">Phone Number</label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-indigo/20 rounded-md"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="projectType" className="block text-sm font-medium text-indigo/70 mb-2">Project Type</label>
                        <select
                          id="projectType"
                          name="projectType"
                          value={formData.projectType}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-indigo/20 rounded-md"
                        >
                          <option value="Residential">Residential</option>
                          <option value="Commercial">Commercial</option>
                          <option value="Retail">Retail</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-indigo/70 mb-2">Subject</label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-indigo/20 rounded-md"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-indigo/70 mb-2">Your Message</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        className="w-full px-4 py-2 border border-indigo/20 rounded-md"
                        required
                      ></textarea>
                    </div>
                    
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`flex items-center justify-center w-full bg-indigo text-cream font-medium px-6 py-3 rounded-md transition ${
                        isSubmitting ? 'opacity-70' : 'hover:shadow-lg'
                      }`}
                    >
                      {isSubmitting ? 'Sending...' : (
                        <>
                          Send Message <Send size={16} className="ml-2" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </RevealAnimation>
          </div>
        </div>
      </section>
      
      {/* Quick Links */}
      <section className="py-12 bg-indigo/5">
        <div className="content-container">
          <RevealAnimation>
            <div className="text-center mb-10">
              <h2 className="text-2xl font-bold mb-4 text-indigo">Quick Links</h2>
              <p className="text-indigo/70 max-w-2xl mx-auto">
                Explore our tools and resources to plan your interior design project.
              </p>
            </div>
          </RevealAnimation>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <RevealAnimation delay={100}>
              <a 
                href="/budget-calculator" 
                className="bg-white p-6 rounded-lg shadow-sm text-center hover:shadow-md transition"
              >
                <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calculator size={24} className="text-gold" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-indigo">Budget Calculator</h3>
                <p className="text-indigo/70">
                  Estimate the cost of your interior design project with our interactive calculator.
                </p>
              </a>
            </RevealAnimation>
            
            <RevealAnimation delay={200}>
              <a 
                href="/ai-design-studio" 
                className="bg-white p-6 rounded-lg shadow-sm text-center hover:shadow-md transition"
              >
                <div className="w-16 h-16 bg-indigo/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lightbulb size={24} className="text-indigo" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-indigo">AI Design Studio</h3>
                <p className="text-indigo/70">
                  Upload a photo of your space and get AI-powered design recommendations.
                </p>
              </a>
            </RevealAnimation>
            
            <RevealAnimation delay={300}>
              <a 
                href="/portfolio" 
                className="bg-white p-6 rounded-lg shadow-sm text-center hover:shadow-md transition"
              >
                <div className="w-16 h-16 bg-sage/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Image size={24} className="text-sage" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-indigo">Portfolio</h3>
                <p className="text-indigo/70">
                  Browse our completed projects for inspiration and ideas for your own space.
                </p>
              </a>
            </RevealAnimation>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Contact;
