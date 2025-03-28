
import { useState } from 'react';
import { Check, Users, PaintBucket, LayoutGrid, HardHat, Home } from 'lucide-react';
import RevealAnimation from '../ui/RevealAnimation';

const ProcessSteps = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  
  const steps = [
    {
      number: 1,
      title: "Site Visit & Consultation",
      description: "We understand your space, needs, and goals",
      icon: <Users size={24} className="text-gold" />,
      details: "We begin with a detailed discussion to understand your needs, preferences, budget, and timeline."
    },
    {
      number: 2,
      title: "Personalized Moodboard + Estimate",
      description: "Visualizing your dream space with budget clarity",
      icon: <PaintBucket size={24} className="text-gold" />,
      details: "Our design team creates preliminary concepts based on your requirements and space constraints."
    },
    {
      number: 3,
      title: "2D/3D Planning + Vendor Coordination",
      description: "Detailed designs and material sourcing",
      icon: <LayoutGrid size={24} className="text-gold" />,
      details: "We refine the chosen concept with detailed 3D visualizations, material selections, and technical specifications."
    },
    {
      number: 4,
      title: "Supervised Execution",
      description: "Quality craftsmanship with regular updates",
      icon: <HardHat size={24} className="text-gold" />,
      details: "Our implementation team brings the design to life with quality craftsmanship and strict quality control."
    },
    {
      number: 5,
      title: "Final Handover + Support",
      description: "Your dream space with ongoing assistance",
      icon: <Home size={24} className="text-gold" />,
      details: "We conduct final inspections, provide maintenance guidance, and offer post-completion support."
    }
  ];
  
  return (
    <div className="mb-16">
      <RevealAnimation>
        <h2 className="text-3xl font-bold mb-10 text-indigo text-center">Our 5-Step Process</h2>
      </RevealAnimation>
      
      <div className="mx-auto max-w-4xl">
        {/* Horizontal Timeline */}
        <div className="hidden md:flex items-center justify-between mb-12 relative">
          {/* Timeline connector line */}
          <div className="absolute left-0 right-0 h-1 bg-indigo/20"></div>
          
          {steps.map((step, index) => (
            <RevealAnimation key={index} delay={index * 100}>
              <div 
                className="relative flex flex-col items-center cursor-pointer"
                onMouseEnter={() => setActiveStep(step.number)}
                onMouseLeave={() => setActiveStep(null)}
              >
                <div 
                  className={`w-12 h-12 rounded-full flex items-center justify-center z-10 transition-all duration-300 ${
                    activeStep === step.number ? 'bg-gold scale-110' : 'bg-indigo/10'
                  }`}
                >
                  {activeStep === step.number ? (
                    <Check size={20} className="text-white" />
                  ) : (
                    <span className="font-bold text-indigo">{step.number}</span>
                  )}
                </div>
                <div className={`absolute top-16 w-48 text-center transition-opacity duration-300 ${
                  activeStep === step.number ? 'opacity-100' : 'opacity-0'
                }`}>
                  <p className="text-sm bg-cream p-2 rounded shadow-sm">{step.details}</p>
                </div>
              </div>
            </RevealAnimation>
          ))}
        </div>
        
        {/* Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {steps.map((step, index) => (
            <RevealAnimation key={index} delay={index * 150}>
              <div 
                className="bg-white/80 rounded-lg p-6 shadow-sm border border-indigo/10 hover:shadow-md transition-all duration-300 h-full flex flex-col"
                onMouseEnter={() => setActiveStep(step.number)}
                onMouseLeave={() => setActiveStep(null)}
              >
                <div className="flex items-center mb-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-3 ${
                    activeStep === step.number ? 'bg-gold' : 'bg-indigo/10'
                  }`}>
                    {step.icon || <span className="font-bold text-indigo">{step.number}</span>}
                  </div>
                  <h3 className="font-bold text-indigo">{step.number}. {step.title.split(' ')[0]}</h3>
                </div>
                <p className="text-indigo/70 text-sm mb-2">{step.description}</p>
                <div className={`text-xs mt-auto pt-2 text-indigo/60 transition-opacity duration-300 ${
                  activeStep === step.number ? 'opacity-100' : 'opacity-70'
                }`}>
                  {step.title}
                </div>
              </div>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProcessSteps;
