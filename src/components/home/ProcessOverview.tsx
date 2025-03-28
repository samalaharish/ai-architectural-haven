
import { Sparkles, MessageCircle, Paintbrush } from 'lucide-react';
import RevealAnimation from '../ui/RevealAnimation';
import ProcessStep from './ProcessStep';

const ProcessOverview = () => {
  const steps = [
    {
      number: 1,
      title: 'Consultation',
      description: 'We start with understanding your needs, preferences, and budget constraints through an in-depth consultation.',
      icon: <MessageCircle size={24} />
    },
    {
      number: 2,
      title: 'Design',
      description: 'Our team creates detailed design concepts, 3D visualizations, and material selection tailored to your space.',
      icon: <Paintbrush size={24} />
    },
    {
      number: 3,
      title: 'Execution',
      description: 'We handle the end-to-end implementation with quality craftsmanship and regular progress updates.',
      icon: <Sparkles size={24} />
    }
  ];
  
  return (
    <section className="py-24 bg-indigo/5">
      <div className="content-container">
        <RevealAnimation>
          <div className="text-center mb-16">
            <span className="inline-block mb-4 px-4 py-1 bg-indigo/10 text-indigo rounded-full text-sm font-medium">
              Our Process
            </span>
            <h2 className="text-4xl font-bold mb-6">How We Work</h2>
            <p className="text-lg max-w-2xl mx-auto text-indigo/70">
              We follow a structured approach to bring your vision to life with precision and excellence.
            </p>
          </div>
        </RevealAnimation>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <ProcessStep
              key={index}
              number={step.number}
              title={step.title}
              description={step.description}
              delay={index * 200}
              icon={step.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessOverview;
