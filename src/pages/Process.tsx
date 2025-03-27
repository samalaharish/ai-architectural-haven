
import { useState } from 'react';
import { ArrowRight, Check, Cpu, PenTool, PanelTop, Lightbulb, Cast, Briefcase } from 'lucide-react';
import RevealAnimation from '../components/ui/RevealAnimation';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const processSteps = [
  {
    id: 1,
    title: 'Discovery',
    description: 'We begin by understanding your vision, requirements, and constraints through in-depth consultations.',
    timeline: '1-2 Weeks',
    aiTools: ['Style Analysis AI', 'Requirements Mapping', 'Budget Optimizer'],
    icon: Lightbulb,
    keyActivities: [
      'Initial consultation',
      'Site analysis and measurements',
      'Client preference exploration',
      'Budget planning',
      'Preliminary timeline development'
    ],
    image: 'https://images.unsplash.com/photo-1530973428-5bf2db2e4d71?w=800&auto=format&fit=crop'
  },
  {
    id: 2,
    title: 'Concept',
    description: 'Using AI-powered design tools, we develop multiple concept options aligned with your vision.',
    timeline: '2-4 Weeks',
    aiTools: ['Design Generation AI', 'Material Matcher', 'Space Optimizer'],
    icon: PenTool,
    keyActivities: [
      'AI-generated design concepts',
      'Material and finish options',
      'Spatial planning',
      'Lighting design',
      'Preliminary 3D visualizations'
    ],
    image: 'https://images.unsplash.com/photo-1558441440-d4111d18d48a?w=800&auto=format&fit=crop'
  },
  {
    id: 3,
    title: 'Refinement',
    description: 'We refine the selected concept, incorporating your feedback and optimizing every detail.',
    timeline: '2-3 Weeks',
    aiTools: ['Detail Enhancer', 'MEP Integration System', 'Cost Calculator'],
    icon: PanelTop,
    keyActivities: [
      'Design revisions based on feedback',
      'Detailed material specifications',
      'MEP system integration',
      'Budget refinement',
      'Photorealistic renderings'
    ],
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&auto=format&fit=crop'
  },
  {
    id: 4,
    title: 'Documentation',
    description: 'Comprehensive documentation is prepared for implementation, including detailed plans and specifications.',
    timeline: '2-3 Weeks',
    aiTools: ['Document Generator', 'Code Compliance Checker', 'Specification Writer'],
    icon: Cpu,
    keyActivities: [
      'Construction documentation',
      'Technical specifications',
      'Material schedules',
      'Vendor coordination',
      'Permit application preparation'
    ],
    image: 'https://images.unsplash.com/photo-1586281380117-5a60ae2050cc?w=800&auto=format&fit=crop'
  },
  {
    id: 5,
    title: 'Execution',
    description: 'We oversee the implementation to ensure your design is executed with precision and excellence.',
    timeline: 'Varies by Project',
    aiTools: ['Progress Tracker', 'Quality Inspector', 'Timeline Optimizer'],
    icon: Briefcase,
    keyActivities: [
      'Contractor selection assistance',
      'Construction supervision',
      'Quality control',
      'Problem-solving',
      'Regular client updates'
    ],
    image: 'https://images.unsplash.com/photo-1581235707960-5a1d318a2a12?w=800&auto=format&fit=crop'
  },
  {
    id: 6,
    title: 'Delivery',
    description: 'The completed project is delivered, and we ensure your complete satisfaction with the final result.',
    timeline: '1-2 Weeks',
    aiTools: ['Client Experience Analytics', 'Post-Project Optimizer', 'Maintenance Scheduler'],
    icon: Cast,
    keyActivities: [
      'Final inspections',
      'Client walkthrough',
      'System demonstrations',
      'Documentation handover',
      'Maintenance guidance'
    ],
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&auto=format&fit=crop'
  }
];

const testimonials = [
  {
    id: 1,
    content: "The process was incredibly smooth and transparent. We knew exactly what was happening at each stage, which gave us great confidence.",
    author: "Emily Parker",
    role: "Homeowner",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&auto=format&fit=crop"
  },
  {
    id: 2,
    content: "Vaarahi's step-by-step approach was perfect for our commercial project. The AI tools they used saved us weeks of back-and-forth.",
    author: "David Chen",
    role: "Restaurant Owner",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&auto=format&fit=crop"
  }
];

const Process = () => {
  const [activeStep, setActiveStep] = useState(0);
  
  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-indigo text-cream">
        <div className="content-container">
          <RevealAnimation>
            <span className="inline-block mb-4 px-4 py-1 bg-gold/20 text-gold rounded-full text-sm font-medium">
              Our Process
            </span>
          </RevealAnimation>
          
          <RevealAnimation delay={200}>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 max-w-4xl">
              A Seamless Journey from Vision to Reality
            </h1>
          </RevealAnimation>
          
          <RevealAnimation delay={400}>
            <p className="text-xl max-w-3xl text-cream/80 mb-12">
              Our design process combines human creativity with AI-powered precision to deliver exceptional results efficiently and reliably.
            </p>
          </RevealAnimation>
        </div>
      </section>
      
      {/* Process Overview Section */}
      <section className="py-20">
        <div className="content-container">
          <RevealAnimation>
            <div className="text-center mb-16">
              <span className="inline-block mb-4 px-4 py-1 bg-indigo/10 text-indigo rounded-full text-sm font-medium">
                Step-by-Step Excellence
              </span>
              <h2 className="text-4xl font-bold mb-6 text-indigo">Our Design Process</h2>
              <p className="text-lg max-w-2xl mx-auto text-indigo/70">
                A systematic approach that leverages human expertise and AI capabilities to deliver innovative, functional, and beautiful design solutions.
              </p>
            </div>
          </RevealAnimation>
          
          {/* Process Navigation */}
          <div className="relative mb-16">
            <div className="hidden md:block h-1 bg-indigo/10 absolute top-1/2 left-0 right-0 -translate-y-1/2 z-0"></div>
            
            <div className="flex flex-wrap md:flex-nowrap justify-between relative z-10">
              {processSteps.map((step, index) => (
                <button
                  key={step.id}
                  className={`flex flex-col items-center mb-4 md:mb-0 ${index !== 0 ? 'md:ml-4' : ''}`}
                  onClick={() => setActiveStep(index)}
                >
                  <div 
                    className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 transition-colors ${
                      index <= activeStep 
                        ? 'bg-gold text-indigo' 
                        : 'bg-indigo/10 text-indigo'
                    }`}
                  >
                    {index < activeStep ? (
                      <Check size={20} />
                    ) : (
                      <span className="font-bold">{index + 1}</span>
                    )}
                  </div>
                  <span className={`text-sm font-medium ${
                    index === activeStep ? 'text-indigo' : 'text-indigo/60'
                  }`}>
                    {step.title}
                  </span>
                </button>
              ))}
            </div>
          </div>
          
          {/* Active Step Content */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2 p-8 md:p-12">
                <RevealAnimation>
                  <div className="flex items-center mb-6">
                    <span className="w-10 h-10 rounded-full bg-gold/10 text-gold flex items-center justify-center mr-4">
                      <processSteps[activeStep].icon size={20} />
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold text-indigo">
                      {activeStep + 1}. {processSteps[activeStep].title}
                    </h3>
                  </div>
                </RevealAnimation>
                
                <RevealAnimation delay={200}>
                  <p className="text-indigo/70 mb-8">
                    {processSteps[activeStep].description}
                  </p>
                </RevealAnimation>
                
                <RevealAnimation delay={300}>
                  <div className="mb-8">
                    <div className="flex items-center mb-4">
                      <span className="w-6 h-6 rounded-full bg-indigo text-cream flex items-center justify-center mr-2">
                        <Clock size={12} />
                      </span>
                      <h4 className="font-bold text-indigo">Timeline</h4>
                    </div>
                    <p className="text-indigo/70 ml-8">
                      {processSteps[activeStep].timeline}
                    </p>
                  </div>
                </RevealAnimation>
                
                <RevealAnimation delay={400}>
                  <div className="mb-8">
                    <div className="flex items-center mb-4">
                      <span className="w-6 h-6 rounded-full bg-indigo text-cream flex items-center justify-center mr-2">
                        <Cpu size={12} />
                      </span>
                      <h4 className="font-bold text-indigo">AI-Powered Tools</h4>
                    </div>
                    <ul className="space-y-2 ml-8">
                      {processSteps[activeStep].aiTools.map((tool, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-gold mr-2">•</span>
                          <span className="text-indigo/70">{tool}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </RevealAnimation>
                
                <RevealAnimation delay={500}>
                  <div>
                    <h4 className="font-bold text-indigo mb-4">Key Activities</h4>
                    <ul className="space-y-3">
                      {processSteps[activeStep].keyActivities.map((activity, index) => (
                        <li key={index} className="flex items-start">
                          <Check size={16} className="text-gold mt-1 mr-3 flex-shrink-0" />
                          <span className="text-indigo/70">{activity}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </RevealAnimation>
                
                <RevealAnimation delay={600} className="mt-8 flex justify-between">
                  <button 
                    onClick={() => setActiveStep(prev => Math.max(0, prev - 1))}
                    disabled={activeStep === 0}
                    className={`flex items-center ${
                      activeStep === 0 
                        ? 'text-indigo/30 cursor-not-allowed' 
                        : 'text-indigo hover:text-gold'
                    }`}
                  >
                    <ArrowLeft size={16} className="mr-2" />
                    Previous Step
                  </button>
                  
                  <button 
                    onClick={() => setActiveStep(prev => Math.min(processSteps.length - 1, prev + 1))}
                    disabled={activeStep === processSteps.length - 1}
                    className={`flex items-center ${
                      activeStep === processSteps.length - 1 
                        ? 'text-indigo/30 cursor-not-allowed' 
                        : 'text-indigo hover:text-gold'
                    }`}
                  >
                    Next Step
                    <ArrowRight size={16} className="ml-2" />
                  </button>
                </RevealAnimation>
              </div>
              
              <div className="md:w-1/2 relative min-h-[300px] md:min-h-0">
                <img 
                  src={processSteps[activeStep].image} 
                  alt={processSteps[activeStep].title} 
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Timeline Section */}
      <section className="py-20 bg-indigo/5">
        <div className="content-container">
          <RevealAnimation>
            <div className="text-center mb-16">
              <span className="inline-block mb-4 px-4 py-1 bg-indigo/10 text-indigo rounded-full text-sm font-medium">
                Project Timeline
              </span>
              <h2 className="text-4xl font-bold mb-6 text-indigo">From Start to Completion</h2>
              <p className="text-lg max-w-2xl mx-auto text-indigo/70">
                A clear visualization of the project journey with estimated timeframes for each phase.
              </p>
            </div>
          </RevealAnimation>
          
          <div className="relative">
            {/* Vertical line */}
            <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-1 bg-indigo/10 -translate-x-1/2"></div>
            
            <div className="space-y-0">
              {processSteps.map((step, index) => (
                <RevealAnimation key={step.id} delay={index * 100}>
                  <div className={`flex flex-col md:flex-row items-center md:items-start ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                    <div className="md:w-1/2 p-6 md:p-12 flex flex-col items-center md:items-start">
                      <span className="inline-block mb-3 px-3 py-1 bg-gold/10 text-gold rounded-full text-xs font-medium">
                        Phase {index + 1}
                      </span>
                      <h3 className="text-xl md:text-2xl font-bold mb-3 text-indigo">{step.title}</h3>
                      <p className="text-indigo/70 mb-4 text-center md:text-left">
                        {step.description}
                      </p>
                      <div className="bg-indigo/10 text-indigo font-medium px-3 py-1 rounded-md text-sm">
                        {step.timeline}
                      </div>
                    </div>
                    
                    <div className="relative flex items-center justify-center md:w-0 py-6 md:py-0">
                      <div className="w-14 h-14 rounded-full bg-indigo text-cream flex items-center justify-center z-10">
                        <step.icon size={24} />
                      </div>
                      {/* Arrow connecting timeline */}
                      <div className={`hidden md:block absolute h-1 bg-indigo/10 w-16 top-1/2 -translate-y-1/2 ${
                        index % 2 === 0 ? 'right-full -mr-4' : 'left-full -ml-4'
                      }`}></div>
                    </div>
                    
                    <div className="md:w-1/2"></div>
                  </div>
                </RevealAnimation>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-20 bg-indigo text-cream">
        <div className="content-container">
          <RevealAnimation>
            <div className="text-center mb-12">
              <span className="inline-block mb-4 px-4 py-1 bg-gold/20 text-gold rounded-full text-sm font-medium">
                Client Experiences
              </span>
              <h2 className="text-3xl font-bold mb-6">Process Testimonials</h2>
              <p className="text-lg max-w-2xl mx-auto text-cream/80">
                Hear from clients who have experienced our design process firsthand.
              </p>
            </div>
          </RevealAnimation>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <RevealAnimation key={testimonial.id} delay={index * 200}>
                <div className="bg-indigo/50 backdrop-blur-sm p-8 rounded-2xl border border-cream/10">
                  <p className="text-lg italic mb-6 text-cream">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-4 border-2 border-gold/30">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.author} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-bold text-gold">{testimonial.author}</p>
                      <p className="text-cream/70">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20">
        <div className="content-container">
          <RevealAnimation>
            <div className="bg-gold/10 rounded-2xl p-10 md:p-16 text-center shadow-sm">
              <h2 className="text-3xl md:text-4xl font-bold text-indigo mb-6">
                Ready to Begin Your Design Journey?
              </h2>
              <p className="text-indigo/70 max-w-2xl mx-auto mb-8">
                Let's start with a discovery session to understand your vision and explore how our process can bring it to life.
              </p>
              <a href="/contact" className="bg-indigo text-cream font-medium px-8 py-4 rounded-md inline-block transition hover:shadow-lg hover:translate-y-[-2px]">
                Schedule a Consultation
              </a>
            </div>
          </RevealAnimation>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

const Clock = ({ size, className }: { size: number, className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <circle cx="12" cy="12" r="10"></circle>
    <polyline points="12 6 12 12 16 14"></polyline>
  </svg>
);

export default Process;
