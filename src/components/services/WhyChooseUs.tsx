
import { Check } from 'lucide-react';
import RevealAnimation from '../ui/RevealAnimation';

const WhyChooseUs = () => {
  const advantages = [
    {
      title: "Transparent Pricing",
      description: "We provide detailed cost breakdowns with no hidden charges, so you always know what you're paying for."
    },
    {
      title: "Practical Designs for Indian Spaces",
      description: "Our designs consider the unique challenges and lifestyles of Indian homes and offices."
    },
    {
      title: "Seamless Execution & Timelines",
      description: "We maintain strict adherence to project schedules with regular updates throughout the process."
    },
    {
      title: "Post-Project Support",
      description: "Our relationship doesn't end at project completion—we provide ongoing maintenance support."
    }
  ];
  
  return (
    <RevealAnimation>
      <div className="bg-indigo/5 rounded-xl p-8 md:p-10 mb-16">
        <h2 className="text-3xl font-bold mb-8 text-indigo">Why Choose Us</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {advantages.map((item, index) => (
            <div key={index} className="flex">
              <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0 mr-4">
                <Check size={24} className="text-gold" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-indigo">{item.title}</h3>
                <p className="text-indigo/70">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </RevealAnimation>
  );
};

export default WhyChooseUs;
