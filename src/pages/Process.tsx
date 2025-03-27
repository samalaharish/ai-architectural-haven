
import { useState } from 'react';
import { LightbulbIcon, CodeIcon, PaintBrushIcon, Clock, ArrowRight } from 'lucide-react';
import RevealAnimation from '../components/ui/RevealAnimation';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

// Process step data
const processSteps = [
  {
    id: 1,
    title: "Discovery",
    description: "We begin by understanding your vision, requirements, and constraints to create a strategic foundation for your project.",
    icon: <LightbulbIcon className="h-8 w-8 text-gold" />,
    timeline: "2-3 weeks",
    aiTools: ["Needs Analysis AI", "Space Scanner"],
    activities: [
      "Client interviews and questionnaire",
      "Site visits and measurements",
      "AI-powered style preference analysis",
      "Budget and timeline planning"
    ]
  },
  {
    id: 2,
    title: "Concept",
    description: "Our design team creates conceptual designs and visualizations that bring your vision to life through iterative refinement.",
    icon: <PaintBrushIcon className="h-8 w-8 text-gold" />,
    timeline: "3-4 weeks",
    aiTools: ["StyleGen AI", "Lighting Simulator"],
    activities: [
      "Mood board development",
      "3D spatial planning",
      "Material and finishes selection",
      "Lighting and color scheme design"
    ]
  },
  {
    id: 3,
    title: "Execution",
    description: "We transform concepts into detailed plans and oversee implementation to ensure your design is executed with precision.",
    icon: <CodeIcon className="h-8 w-8 text-gold" />,
    timeline: "8-12 weeks",
    aiTools: ["Construction Planner", "MEP Optimizer"],
    activities: [
      "Detailed technical drawings",
      "Contractor and vendor coordination",
      "Material procurement assistance",
      "Quality control and site supervision"
    ]
  }
];

const Process = () => {
  const [activeStep, setActiveStep] = useState(1);

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
              How We Transform Your Vision Into Reality
            </h1>
          </RevealAnimation>
          
          <RevealAnimation delay={400}>
            <p className="text-xl max-w-3xl text-cream/80 mb-12">
              Our design process combines creative excellence with technological innovation to deliver exceptional results.
            </p>
          </RevealAnimation>
        </div>
      </section>
      
      {/* Process Steps Navigation */}
      <section className="py-16 bg-cream">
        <div className="content-container">
          <div className="relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-indigo/10 -translate-y-1/2 z-0"></div>
            <div className="flex flex-col md:flex-row justify-between items-center relative z-10">
              {processSteps.map((step) => (
                <div 
                  key={step.id} 
                  className={`flex flex-col items-center mb-8 md:mb-0 cursor-pointer transition-all duration-300 ${activeStep === step.id ? 'scale-105' : 'opacity-70 hover:opacity-100'}`}
                  onClick={() => setActiveStep(step.id)}
                >
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${activeStep === step.id ? 'bg-indigo' : 'bg-indigo/20'}`}>
                    <span className="text-xl font-bold text-cream">{step.id}</span>
                  </div>
                  <h3 className={`text-lg font-medium ${activeStep === step.id ? 'text-indigo' : 'text-indigo/70'}`}>
                    {step.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Active Process Step Detail */}
      <section className="pb-24 bg-cream">
        <div className="content-container">
          {processSteps.map((step) => (
            <div 
              key={step.id}
              className={`transition-all duration-500 ${activeStep === step.id ? 'opacity-100' : 'opacity-0 hidden'}`}
            >
              <RevealAnimation>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <Badge variant="outline" className="mb-4 px-4 py-1 border-gold/50 text-gold bg-gold/5 hover:bg-gold/10">
                      Step {step.id}
                    </Badge>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-indigo">{step.title}</h2>
                    <p className="text-lg text-indigo/80 mb-8">{step.description}</p>
                    
                    <div className="flex items-center mb-8 space-x-2">
                      <Clock className="h-5 w-5 text-sage" />
                      <span className="text-sage font-medium">Timeline: {step.timeline}</span>
                    </div>
                    
                    <div className="mb-8">
                      <h4 className="text-lg font-medium mb-3 text-indigo">AI Tools We Use</h4>
                      <div className="flex flex-wrap gap-2">
                        {step.aiTools.map((tool, index) => (
                          <Badge key={index} className="bg-gold/20 hover:bg-gold/30 text-gold border-none">
                            {tool}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <Card className="bg-white/60 backdrop-blur-sm border border-indigo/10 rounded-xl overflow-hidden shadow-lg">
                    <CardContent className="p-6">
                      <h4 className="text-xl font-medium mb-4 text-indigo">Key Activities</h4>
                      <ul className="space-y-4">
                        {step.activities.map((activity, index) => (
                          <li key={index} className="flex items-start">
                            <ArrowRight className="h-5 w-5 text-gold mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-indigo/80">{activity}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </RevealAnimation>
            </div>
          ))}
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-indigo/5">
        <div className="content-container text-center">
          <RevealAnimation>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-indigo">Ready to Transform Your Space?</h2>
            <p className="text-lg text-indigo/70 max-w-2xl mx-auto mb-8">
              Begin your design journey with Vaarahi Design Studio. Let's create spaces that inspire and delight.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="btn-primary">Start Your Project</a>
              <a href="/portfolio" className="btn-secondary">View Our Portfolio</a>
            </div>
          </RevealAnimation>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Process;
