
import { Check } from 'lucide-react';
import RevealAnimation from '../ui/RevealAnimation';

const PricingTable = () => {
  const packages = [
    {
      name: 'Basic',
      price: '₹1,099 - 1,599/sq.ft',
      timeline: '45-60 days',
      customizable: 'Moderate',
      features: [
        'Standard material options',
        'Basic space planning',
        'Essential lighting design',
        'Limited customization',
        'Basic 3D visualization'
      ]
    },
    {
      name: 'Premium',
      price: '₹1,699 - 2,299/sq.ft',
      timeline: '60-90 days',
      customizable: 'High',
      features: [
        'Premium material selection',
        'Detailed space planning',
        'Comprehensive lighting design',
        'Custom furniture options',
        'Full 3D visualization',
        'Smart home basic integration'
      ]
    },
    {
      name: 'Luxury',
      price: '₹2,499+/sq.ft',
      timeline: '90-120 days',
      customizable: 'Very High',
      features: [
        'Top-tier material finishes',
        'Advanced space optimization',
        'Specialist lighting design',
        'Fully custom furniture',
        'AR/VR visualization',
        'Complete smart home integration',
        'Dedicated project manager'
      ]
    }
  ];
  
  return (
    <RevealAnimation>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-indigo text-cream">
              <th className="p-4 text-left">Service</th>
              <th className="p-4 text-left">Budget Range</th>
              <th className="p-4 text-left">Timeline</th>
              <th className="p-4 text-left">Customizable</th>
              <th className="p-4 text-left">Features</th>
            </tr>
          </thead>
          <tbody>
            {packages.map((pkg, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-indigo/5'}>
                <td className="p-4 font-medium text-indigo">{pkg.name}</td>
                <td className="p-4 text-indigo/80">{pkg.price}</td>
                <td className="p-4 text-indigo/80">{pkg.timeline}</td>
                <td className="p-4 text-indigo/80">{pkg.customizable}</td>
                <td className="p-4">
                  <ul className="space-y-1">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Check size={16} className="text-gold mt-1 mr-2 flex-shrink-0" />
                        <span className="text-sm text-indigo/80">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="mt-4 text-sm text-indigo/60 text-center">
        * Prices may vary based on specific project requirements and complexity
      </div>
    </RevealAnimation>
  );
};

export default PricingTable;
