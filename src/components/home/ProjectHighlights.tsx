
import { useState } from 'react';
import RevealAnimation from '../ui/RevealAnimation';
import BeforeAfterSlider from '../ui/BeforeAfterSlider';

const ProjectHighlights = () => {
  const [activeProject, setActiveProject] = useState(0);
  
  const projects = [
    {
      id: 1,
      title: 'Modern Apartment Transformation',
      description: 'A complete redesign of a 1200 sq ft urban apartment with smart home integration.',
      beforeImage: 'https://images.unsplash.com/photo-1596900779744-2bdc4a90509a?w=800&auto=format&fit=crop',
      afterImage: 'https://images.unsplash.com/photo-1588854337115-1c67d9247e4d?w=800&auto=format&fit=crop',
      category: '2BHK'
    },
    {
      id: 2,
      title: 'Corporate Office Renovation',
      description: 'Modernizing a 5000 sq ft office space for improved productivity and team collaboration.',
      beforeImage: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&auto=format&fit=crop',
      afterImage: 'https://images.unsplash.com/photo-1604328698692-f76ea9498e76?w=800&auto=format&fit=crop',
      category: 'Commercial'
    }
  ];
  
  return (
    <section className="py-24 bg-cream">
      <div className="content-container">
        <RevealAnimation>
          <div className="text-center mb-16">
            <span className="inline-block mb-4 px-4 py-1 bg-indigo/10 text-indigo rounded-full text-sm font-medium">
              Project Highlights
            </span>
            <h2 className="text-4xl font-bold mb-6">Recent Transformations</h2>
            <p className="text-lg max-w-2xl mx-auto text-indigo/70">
              See the dramatic before and after transformations in our recent projects.
            </p>
          </div>
        </RevealAnimation>
        
        <div className="max-w-4xl mx-auto">
          <div className="flex mb-6 space-x-4">
            {projects.map((project, index) => (
              <button
                key={project.id}
                className={`px-5 py-3 rounded-md text-sm font-medium transition-colors ${
                  activeProject === index
                    ? 'bg-gold text-indigo'
                    : 'bg-white text-indigo hover:bg-gold/10'
                }`}
                onClick={() => setActiveProject(index)}
              >
                {project.title}
              </button>
            ))}
          </div>
          
          <RevealAnimation>
            <div className="bg-white rounded-xl overflow-hidden shadow-md">
              <div className="p-6 md:p-8">
                <h3 className="text-2xl font-bold mb-2 text-indigo">{projects[activeProject].title}</h3>
                <p className="text-indigo/70 mb-6">{projects[activeProject].description}</p>
                
                <BeforeAfterSlider
                  beforeImage={projects[activeProject].beforeImage}
                  afterImage={projects[activeProject].afterImage}
                  beforeAlt={`${projects[activeProject].title} before renovation by Vaarahi Design Studio`}
                  afterAlt={`${projects[activeProject].title} after renovation by Vaarahi Design Studio`}
                  className="mb-6"
                />
                
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-sm text-indigo/60">Project Category</span>
                    <p className="text-lg font-bold text-indigo">{projects[activeProject].category}</p>
                  </div>
                  <a href="/portfolio" className="inline-flex items-center text-gold font-medium hover:underline">
                    View All Projects
                  </a>
                </div>
              </div>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default ProjectHighlights;
