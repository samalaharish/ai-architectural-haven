
import { NavLink } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import RevealAnimation from '../ui/RevealAnimation';

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  color: string;
  delay: number;
}

const ServiceCard = ({ icon, title, description, color, delay }: ServiceCardProps) => {
  return (
    <RevealAnimation delay={delay}>
      <div className={`rounded-xl p-8 h-full flex flex-col ${color}`}>
        <div className="text-4xl mb-6">{icon}</div>
        <h3 className="text-2xl font-bold mb-4">{title}</h3>
        <p className="mb-6 text-cream/80 flex-grow">{description}</p>
        <NavLink to="/services" className="inline-flex items-center text-gold hover:underline mt-auto font-medium">
          Learn more <ArrowRight size={16} className="ml-2" />
        </NavLink>
      </div>
    </RevealAnimation>
  );
};

export default ServiceCard;
