
import ServiceCard from './ServiceCard';

const ServiceOverview = () => {
  const services = [
    {
      id: 1,
      title: 'Modular Interiors',
      description: 'Custom-designed modular kitchens and wardrobes with smart storage solutions and premium finishes.',
      icon: '🏠',
      color: 'bg-indigo text-cream'
    },
    {
      id: 2,
      title: 'Full Home Design',
      description: 'Complete home transformation with coordinated design themes and functional layouts.',
      icon: '🛋️',
      color: 'bg-sage text-cream'
    },
    {
      id: 3,
      title: 'Commercial Spaces',
      description: 'Ergonomic office and retail space designs that enhance productivity and brand experience.',
      icon: '🏢',
      color: 'bg-terracotta text-cream'
    }
  ];
  
  return (
    <section className="py-24 bg-cream">
      <div className="content-container">
        <div className="text-center mb-16">
          <span className="inline-block mb-4 px-4 py-1 bg-indigo/10 text-indigo rounded-full text-sm font-medium">
            Our Services
          </span>
          <h2 className="text-4xl font-bold mb-6">Premium Design Solutions</h2>
          <p className="text-lg max-w-2xl mx-auto text-indigo/70">
            Explore our specialized interior design services for homes and commercial spaces.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              icon={service.icon}
              title={service.title}
              description={service.description}
              color={service.color}
              delay={index * 200}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceOverview;
