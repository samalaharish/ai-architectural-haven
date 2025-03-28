
import { Check } from 'lucide-react';
import RevealAnimation from '../ui/RevealAnimation';

interface ServiceBlockProps {
  title: string;
  description: string;
  features: string[];
  image: string;
  delay: number;
}

const ServiceBlock = ({ title, description, features, image, delay }: ServiceBlockProps) => {
  return (
    <RevealAnimation delay={delay}>
      <div className="bg-white rounded-xl overflow-hidden shadow-sm mb-12">
        <div className="md:flex">
          <div className="md:w-2/5">
            <div className="h-64 md:h-full relative">
              <img 
                src={image} 
                alt={title} 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="md:w-3/5 p-8">
            <h3 className="text-2xl font-bold mb-4 text-indigo">{title}</h3>
            <p className="text-indigo/70 mb-6">{description}</p>
            
            <div className="space-y-3 mb-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <Check size={20} className="text-gold mt-1 mr-3 flex-shrink-0" />
                  <p className="text-indigo/80">{feature}</p>
                </div>
              ))}
            </div>
            
            <div className="flex gap-4">
              <a 
                href="/contact" 
                className="bg-indigo text-cream px-6 py-2 rounded-md hover:shadow-md transition"
              >
                Inquire Now
              </a>
              <a 
                href="/portfolio" 
                className="border border-indigo text-indigo px-6 py-2 rounded-md hover:bg-indigo/5 transition"
              >
                View Projects
              </a>
            </div>
          </div>
        </div>
      </div>
    </RevealAnimation>
  );
};

export default ServiceBlock;
