
import RevealAnimation from '../ui/RevealAnimation';

const ProcessSteps = () => {
  const steps = [
    {
      number: 1,
      title: "Initial Consultation",
      description: "We begin with a detailed discussion to understand your needs, preferences, budget, and timeline."
    },
    {
      number: 2,
      title: "Concept Development",
      description: "Our design team creates preliminary concepts based on your requirements and space constraints."
    },
    {
      number: 3,
      title: "Design Refinement",
      description: "We refine the chosen concept with detailed 3D visualizations, material selections, and technical specifications."
    },
    {
      number: 4,
      title: "Execution",
      description: "Our implementation team brings the design to life with quality craftsmanship and strict quality control."
    },
    {
      number: 5,
      title: "Handover & Support",
      description: "We conduct final inspections, provide maintenance guidance, and offer post-completion support."
    }
  ];
  
  return (
    <div className="mb-16">
      <RevealAnimation>
        <h2 className="text-3xl font-bold mb-10 text-indigo text-center">Our 5-Step Process</h2>
      </RevealAnimation>
      
      <div className="relative">
        {/* Process Timeline Line */}
        <div className="absolute top-0 bottom-0 left-6 md:left-1/2 w-1 bg-indigo/20 -ml-0.5 hidden md:block"></div>
        
        {steps.map((step, index) => (
          <RevealAnimation key={index} delay={index * 150}>
            <div className={`relative mb-12 md:mb-0 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
              <div className={`flex md:block ${index % 2 === 0 ? 'md:ml-auto' : ''}`}>
                <div className="flex-shrink-0 mr-4 md:mr-0 md:mb-0 md:absolute md:top-0 z-10">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl ${
                    index % 2 === 0 ? 'md:left-auto md:right-0 md:-mr-6' : 'md:left-1/2 md:-ml-6'
                  } bg-indigo text-cream`}>
                    {step.number}
                  </div>
                </div>
                
                <div className={`pb-8 md:pb-0 md:w-5/12 ${
                  index % 2 === 0 ? 'md:ml-0 md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                }`}>
                  <h3 className="text-xl font-bold mb-2 text-indigo">{step.title}</h3>
                  <p className="text-indigo/70">{step.description}</p>
                </div>
              </div>
            </div>
          </RevealAnimation>
        ))}
      </div>
    </div>
  );
};

export default ProcessSteps;
