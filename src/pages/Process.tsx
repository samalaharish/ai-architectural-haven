
import { useState } from 'react';
import { LightbulbIcon, Paintbrush, Code, Clock, ArrowRight, Zap, Scan, LayoutGrid, Palette, Brain, Gauge, Server, Activity } from 'lucide-react';
import RevealAnimation from '../components/ui/RevealAnimation';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// Process step data with enhanced AI tools information
const processSteps = [
  {
    id: 1,
    title: "Discovery",
    description: "We begin by understanding your vision, requirements, and constraints to create a strategic foundation for your project.",
    icon: <LightbulbIcon className="h-8 w-8 text-gold" />,
    timeline: "2-3 weeks",
    aiTools: [
      { 
        name: "Needs Analysis AI", 
        description: "AI-powered questionnaire that analyzes your responses to identify key design requirements.",
        icon: <Brain className="h-5 w-5" />
      },
      { 
        name: "Space Scanner", 
        description: "Computer vision tool that analyzes your existing space to identify optimal design opportunities.",
        icon: <Scan className="h-5 w-5" />
      }
    ],
    activities: [
      // INTEGRATION POINT: Connect with user questionnaire system
      {
        name: "Client interviews and questionnaire",
        detail: "Our AI-powered questionnaire adapts questions based on your responses to capture your preferences."
      },
      // INTEGRATION POINT: Integrate with Space Scanner mobile app
      {
        name: "Site visits and measurements",
        detail: "Our Space Scanner app automatically generates floor plans from smartphone photos."
      },
      // INTEGRATION POINT: AI style quiz results can be used here
      {
        name: "AI-powered style preference analysis",
        detail: "Our AI analyzes your responses and existing decor to suggest compatible design styles."
      },
      // INTEGRATION POINT: Connect with Budget Calculator
      {
        name: "Budget and timeline planning",
        detail: "Our Budget Calculator AI estimates costs based on your requirements and local market data."
      }
    ]
  },
  {
    id: 2,
    title: "Concept",
    description: "Our design team creates conceptual designs and visualizations that bring your vision to life through iterative refinement.",
    icon: <Paintbrush className="h-8 w-8 text-gold" />,
    timeline: "3-4 weeks",
    aiTools: [
      // INTEGRATION POINT: Connect with HomeDesigns.ai
      { 
        name: "StyleGen AI", 
        description: "Generates design concepts based on your preferences, space constraints, and style inspirations.",
        icon: <Palette className="h-5 w-5" />
      },
      { 
        name: "Lighting Simulator", 
        description: "Simulates natural and artificial lighting conditions to optimize lighting design.",
        icon: <Zap className="h-5 w-5" />
      }
    ],
    activities: [
      // INTEGRATION POINT: AI-generated mood boards
      {
        name: "Mood board development",
        detail: "Our AI generates mood boards by analyzing your preferences and latest design trends."
      },
      {
        name: "3D spatial planning",
        detail: "We create interactive 3D models that you can explore in virtual reality."
      },
      // INTEGRATION POINT: AR material preview
      {
        name: "Material and finishes selection",
        detail: "Our AR app lets you visualize different materials in your actual space."
      },
      // INTEGRATION POINT: AI-driven color recommendations
      {
        name: "Lighting and color scheme design",
        detail: "Our AI analyzes natural light patterns to recommend optimal color schemes."
      }
    ]
  },
  {
    id: 3,
    title: "Execution",
    description: "We transform concepts into detailed plans and oversee implementation to ensure your design is executed with precision.",
    icon: <Code className="h-8 w-8 text-gold" />,
    timeline: "8-12 weeks",
    aiTools: [
      // INTEGRATION POINT: Integrate with MEP planning tools
      { 
        name: "Construction Planner", 
        description: "AI tool that optimizes construction sequences and resource allocation.",
        icon: <LayoutGrid className="h-5 w-5" />
      },
      { 
        name: "MEP Optimizer", 
        description: "Optimizes mechanical, electrical, and plumbing layouts for efficiency and sustainability.",
        icon: <Server className="h-5 w-5" />
      },
      { 
        name: "QA Inspector", 
        description: "Computer vision tool that identifies construction errors and quality issues in real-time.",
        icon: <Activity className="h-5 w-5" />
      }
    ],
    activities: [
      // INTEGRATION POINT: Connect with CAD software
      {
        name: "Detailed technical drawings",
        detail: "Our AI ensures all technical specifications meet local building codes and regulations."
      },
      // INTEGRATION POINT: Zapier automation for vendor communications
      {
        name: "Contractor and vendor coordination",
        detail: "Automated workflows ensure all stakeholders receive timely updates and information."
      },
      // INTEGRATION POINT: Connect with shopping list export
      {
        name: "Material procurement assistance",
        detail: "Our procurement AI negotiates with suppliers to get you the best prices."
      },
      // INTEGRATION POINT: Project management integrations
      {
        name: "Quality control and site supervision",
        detail: "Real-time monitoring systems alert us to any deviations from the design."
      }
    ]
  }
];

const Process = () => {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <div className="min-h-screen bg-cream">
      {/* INTEGRATION POINT: Add Tidio chatbot script in index.html */}
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
              {/* INTEGRATION POINT: Use SurferSEO + ChatGPT to optimize this headline */}
            </h1>
          </RevealAnimation>
          
          <RevealAnimation delay={400}>
            <p className="text-xl max-w-3xl text-cream/80 mb-12">
              Our design process combines creative excellence with technological innovation to deliver exceptional results.
              {/* INTEGRATION POINT: Use AI to generate SEO-optimized descriptions */}
            </p>
          </RevealAnimation>
        </div>
      </section>
      
      {/* Process Steps Navigation */}
      <section className="py-16 bg-cream">
        <div className="content-container">
          <div className="relative">
            {/* Timeline connector line */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-indigo/10 -translate-y-1/2 z-0"></div>
            
            {/* Step indicators */}
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
          {/* INTEGRATION POINT: This section could be enhanced with dynamic data from Airtable */}
          {processSteps.map((step) => (
            <div 
              key={step.id}
              className={`transition-all duration-500 ${activeStep === step.id ? 'opacity-100' : 'opacity-0 hidden'}`}
            >
              <RevealAnimation>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
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
                      
                      {/* Enhanced AI Tools Section with Tabs */}
                      <div className="bg-white/60 backdrop-blur-sm border border-indigo/10 rounded-xl overflow-hidden shadow-lg p-6 mb-6">
                        <Tabs defaultValue={step.aiTools[0].name} className="w-full">
                          <TabsList className="mb-4 w-full justify-start overflow-x-auto bg-transparent">
                            {step.aiTools.map((tool) => (
                              <TabsTrigger 
                                key={tool.name} 
                                value={tool.name}
                                className="data-[state=active]:bg-indigo data-[state=active]:text-white"
                              >
                                {tool.name}
                              </TabsTrigger>
                            ))}
                          </TabsList>
                          
                          {step.aiTools.map((tool) => (
                            <TabsContent key={tool.name} value={tool.name} className="pt-2">
                              <div className="flex items-start gap-3">
                                <div className="bg-indigo/10 rounded-full p-2 mt-1">
                                  {tool.icon}
                                </div>
                                <div>
                                  <h5 className="text-indigo font-medium mb-1">{tool.name}</h5>
                                  <p className="text-indigo/70">{tool.description}</p>
                                </div>
                              </div>
                            </TabsContent>
                          ))}
                        </Tabs>
                      </div>
                    </div>
                  </div>
                  
                  <Card className="bg-white/60 backdrop-blur-sm border border-indigo/10 rounded-xl overflow-hidden shadow-lg">
                    <CardContent className="p-6">
                      <h4 className="text-xl font-medium mb-6 text-indigo">Key Activities</h4>
                      <ul className="space-y-6">
                        {step.activities.map((activity, index) => (
                          <li key={index} className="flex flex-col">
                            <div className="flex items-start mb-2">
                              <ArrowRight className="h-5 w-5 text-gold mr-3 mt-0.5 flex-shrink-0" />
                              <span className="text-indigo font-medium">{activity.name}</span>
                            </div>
                            <p className="text-indigo/70 ml-8">{activity.detail}</p>
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
      
      {/* AI Technology Stack Section */}
      <section className="py-16 bg-indigo/5">
        <div className="content-container">
          <RevealAnimation>
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4 px-4 py-1 border-indigo/50 text-indigo bg-indigo/5 hover:bg-indigo/10">
                Our Technology
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-indigo">AI Technology Stack</h2>
              <p className="text-lg text-indigo/70 max-w-2xl mx-auto">
                We leverage cutting-edge artificial intelligence to revolutionize the design and construction process.
              </p>
            </div>
          </RevealAnimation>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* INTEGRATION POINT: These cards could be dynamically populated from a CMS */}
            <RevealAnimation>
              <Card className="border-indigo/10 hover:border-indigo/30 transition-all duration-300 hover:shadow-md">
                <CardContent className="p-6">
                  <div className="bg-indigo/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                    <Brain className="h-7 w-7 text-indigo" />
                  </div>
                  <h3 className="text-xl font-medium mb-2 text-indigo">Design AI</h3>
                  <p className="text-indigo/70 mb-4">
                    Our proprietary AI algorithms analyze thousands of design patterns to generate optimized layouts and aesthetics.
                  </p>
                  <Badge variant="outline" className="bg-indigo/5 border-indigo/20 text-indigo/80">
                    Machine Learning
                  </Badge>
                </CardContent>
              </Card>
            </RevealAnimation>
            
            <RevealAnimation delay={100}>
              <Card className="border-indigo/10 hover:border-indigo/30 transition-all duration-300 hover:shadow-md">
                <CardContent className="p-6">
                  <div className="bg-sage/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                    <Gauge className="h-7 w-7 text-sage" />
                  </div>
                  <h3 className="text-xl font-medium mb-2 text-indigo">Energy Optimizer</h3>
                  <p className="text-indigo/70 mb-4">
                    AI-powered algorithms that optimize energy usage based on building orientation, materials, and climate data.
                  </p>
                  <Badge variant="outline" className="bg-sage/5 border-sage/20 text-sage">
                    Predictive Analytics
                  </Badge>
                </CardContent>
              </Card>
            </RevealAnimation>
            
            <RevealAnimation delay={200}>
              <Card className="border-indigo/10 hover:border-indigo/30 transition-all duration-300 hover:shadow-md">
                <CardContent className="p-6">
                  <div className="bg-gold/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                    <Scan className="h-7 w-7 text-gold" />
                  </div>
                  <h3 className="text-xl font-medium mb-2 text-indigo">Vision Recognition</h3>
                  <p className="text-indigo/70 mb-4">
                    Computer vision systems that can analyze spaces from photographs to generate accurate 3D models.
                  </p>
                  <Badge variant="outline" className="bg-gold/5 border-gold/20 text-gold">
                    Computer Vision
                  </Badge>
                </CardContent>
              </Card>
            </RevealAnimation>
          </div>
        </div>
      </section>
      
      {/* Call to Action - INTEGRATION POINT: Connect form submissions with CRM via Zapier */}
      <section className="py-16 bg-indigo/5">
        <div className="content-container text-center">
          <RevealAnimation>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-indigo">Ready to Transform Your Space?</h2>
            <p className="text-lg text-indigo/70 max-w-2xl mx-auto mb-8">
              Begin your design journey with Vaarahi Design Studio. Let's create spaces that inspire and delight.
              {/* INTEGRATION POINT: Use AI to generate personalized CTA copy */}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="btn-primary">Start Your Project</a>
              <a href="/portfolio" className="btn-secondary">View Our Portfolio</a>
            </div>
          </RevealAnimation>
        </div>
      </section>
      
      {/* INTEGRATION POINT: Add Instagram feed component here using a social media widget */}
      
      <Footer />
    </div>
  );
};

export default Process;
