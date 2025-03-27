
import { useState } from 'react';
import { Calculator, DollarSign, Home, Maximize, Check, ArrowRight, Brain, Lightbulb, Database, ChartBar } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Slider } from '@/components/ui/slider';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import RevealAnimation from '@/components/ui/RevealAnimation';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

// AI Tools used in Budget Calculator
const aiTools = [
  {
    id: 1,
    name: "Cost Predictor AI",
    icon: <Brain className="h-6 w-6 text-indigo" />,
    description: "Uses machine learning to predict renovation costs based on historical data, location, and current market conditions.",
    integration: "Integrated with real-time material cost databases and labor rate APIs."
  },
  {
    id: 2,
    name: "Value Estimator",
    icon: <ChartBar className="h-6 w-6 text-gold" />,
    description: "Predicts potential increase in property value based on planned renovations and local real estate trends.",
    integration: "Connects with real estate APIs and property valuation databases."
  },
  {
    id: 3,
    name: "Budget Optimizer",
    icon: <Lightbulb className="h-6 w-6 text-sage" />,
    description: "Suggests cost-saving alternatives and optimal budget allocations across project components.",
    integration: "Utilizes material comparison APIs and vendor pricing databases."
  },
  {
    id: 4,
    name: "Market Intelligence",
    icon: <Database className="h-6 w-6 text-terracotta" />,
    description: "Analyzes current market conditions to provide insights on timing and material selection.",
    integration: "Connected to commodity pricing APIs and supply chain analytics platforms."
  }
];

// Room types with base costs per square foot
const roomTypes = [
  { id: "kitchen", name: "Kitchen", baseCost: 150 },
  { id: "bathroom", name: "Bathroom", baseCost: 125 },
  { id: "bedroom", name: "Bedroom", baseCost: 70 },
  { id: "living", name: "Living Room", baseCost: 80 },
  { id: "dining", name: "Dining Room", baseCost: 75 },
  { id: "office", name: "Home Office", baseCost: 90 },
  { id: "basement", name: "Basement", baseCost: 100 },
  { id: "outdoor", name: "Outdoor Space", baseCost: 60 }
];

// Quality levels with multipliers
const qualityLevels = [
  { id: "standard", name: "Standard", multiplier: 1.0 },
  { id: "premium", name: "Premium", multiplier: 1.5 },
  { id: "luxury", name: "Luxury", multiplier: 2.2 }
];

// Locations with cost adjustments
const locations = [
  { id: "midwest", name: "Midwest", adjustment: 0.9 },
  { id: "northeast", name: "Northeast", adjustment: 1.2 },
  { id: "south", name: "South", adjustment: 0.95 },
  { id: "west", name: "West Coast", adjustment: 1.25 },
  { id: "southwest", name: "Southwest", adjustment: 1.0 }
];

const BudgetCalculator = () => {
  const { toast } = useToast();
  
  // Form state
  const [roomType, setRoomType] = useState(roomTypes[0].id);
  const [qualityLevel, setQualityLevel] = useState(qualityLevels[0].id);
  const [location, setLocation] = useState(locations[0].id);
  const [squareFootage, setSquareFootage] = useState(200);
  const [email, setEmail] = useState("");
  
  // Results state
  const [estimatedCost, setEstimatedCost] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [breakdown, setBreakdown] = useState({
    materials: 0,
    labor: 0,
    design: 0,
    permits: 0
  });
  
  const calculateEstimate = () => {
    // Find the selected options
    const selectedRoom = roomTypes.find(room => room.id === roomType);
    const selectedQuality = qualityLevels.find(quality => quality.id === qualityLevel);
    const selectedLocation = locations.find(loc => loc.id === location);
    
    if (!selectedRoom || !selectedQuality || !selectedLocation) return;
    
    // Base calculation
    const baseCost = selectedRoom.baseCost * squareFootage;
    const qualityAdjusted = baseCost * selectedQuality.multiplier;
    const totalCost = qualityAdjusted * selectedLocation.adjustment;
    
    // Cost breakdown
    const materialsPercentage = selectedQuality.id === "luxury" ? 0.5 : (selectedQuality.id === "premium" ? 0.45 : 0.4);
    const laborPercentage = 0.35;
    const designPercentage = selectedQuality.id === "luxury" ? 0.1 : (selectedQuality.id === "premium" ? 0.08 : 0.05);
    const permitsPercentage = 0.05;
    
    setBreakdown({
      materials: Math.round(totalCost * materialsPercentage),
      labor: Math.round(totalCost * laborPercentage),
      design: Math.round(totalCost * designPercentage),
      permits: Math.round(totalCost * permitsPercentage)
    });
    
    setEstimatedCost(Math.round(totalCost));
    setShowResults(true);
    
    // INTEGRATION POINT: Send data to CRM via Zapier webhook if email provided
    if (email) {
      // Notify user
      toast({
        title: "Estimate Saved",
        description: "We'll send your detailed estimate to your email shortly.",
      });
    }
  };
  
  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-indigo text-cream">
        <div className="content-container">
          <RevealAnimation>
            <span className="inline-block mb-4 px-4 py-1 bg-gold/20 text-gold rounded-full text-sm font-medium">
              AI-Powered Estimator
            </span>
          </RevealAnimation>
          
          <RevealAnimation delay={200}>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 max-w-4xl">
              Smart Budget Calculator
            </h1>
          </RevealAnimation>
          
          <RevealAnimation delay={400}>
            <p className="text-xl max-w-3xl text-cream/80 mb-12">
              Our AI-powered budget calculator provides accurate cost estimates for your renovation or new construction project.
              {/* INTEGRATION POINT: Use AI to generate more personalized description based on user data */}
            </p>
          </RevealAnimation>
        </div>
      </section>
      
      {/* Calculator Section */}
      <section className="py-16 bg-cream">
        <div className="content-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <RevealAnimation>
                <Card className="border-indigo/10">
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold mb-6 text-indigo flex items-center">
                      <Calculator className="mr-2 h-6 w-6 text-gold" />
                      Project Details
                    </h2>
                    
                    <div className="space-y-6">
                      <div>
                        <Label htmlFor="room-type">Room Type</Label>
                        <Select value={roomType} onValueChange={setRoomType}>
                          <SelectTrigger id="room-type" className="w-full mt-2">
                            <SelectValue placeholder="Select room type" />
                          </SelectTrigger>
                          <SelectContent>
                            {roomTypes.map(room => (
                              <SelectItem key={room.id} value={room.id}>
                                {room.name} (${room.baseCost}/sq.ft base)
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div>
                        <Label htmlFor="square-footage" className="flex justify-between">
                          <span>Square Footage</span>
                          <span className="text-indigo/70">{squareFootage} sq.ft</span>
                        </Label>
                        <div className="flex items-center gap-4 mt-2">
                          <Maximize className="h-5 w-5 text-indigo/60" />
                          <Slider
                            id="square-footage"
                            min={50}
                            max={1000}
                            step={10}
                            value={[squareFootage]}
                            onValueChange={(value) => setSquareFootage(value[0])}
                            className="flex-1"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <Label htmlFor="quality-level">Quality Level</Label>
                        <Select value={qualityLevel} onValueChange={setQualityLevel}>
                          <SelectTrigger id="quality-level" className="w-full mt-2">
                            <SelectValue placeholder="Select quality level" />
                          </SelectTrigger>
                          <SelectContent>
                            {qualityLevels.map(quality => (
                              <SelectItem key={quality.id} value={quality.id}>
                                {quality.name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div>
                        <Label htmlFor="location">Location</Label>
                        <Select value={location} onValueChange={setLocation}>
                          <SelectTrigger id="location" className="w-full mt-2">
                            <SelectValue placeholder="Select location" />
                          </SelectTrigger>
                          <SelectContent>
                            {locations.map(loc => (
                              <SelectItem key={loc.id} value={loc.id}>
                                {loc.name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div>
                        <Label htmlFor="email">Email (optional)</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="Enter your email for detailed report"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="mt-2"
                        />
                        <p className="text-xs text-indigo/60 mt-1">
                          We'll send you a detailed breakdown of costs
                        </p>
                      </div>
                      
                      <Button 
                        onClick={calculateEstimate} 
                        className="w-full bg-indigo hover:bg-indigo/90 text-white"
                      >
                        Calculate Estimate
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </RevealAnimation>
            </div>
            
            <div>
              {showResults ? (
                <RevealAnimation>
                  <Card className="border-gold/20 bg-gradient-to-br from-indigo/5 to-gold/5">
                    <CardContent className="p-6">
                      <h2 className="text-2xl font-bold mb-2 text-indigo flex items-center">
                        <DollarSign className="mr-2 h-6 w-6 text-gold" />
                        Estimated Cost
                      </h2>
                      
                      <div className="text-4xl font-bold text-indigo mb-6">
                        ${estimatedCost.toLocaleString()}
                      </div>
                      
                      <div className="space-y-4 mb-8">
                        <h3 className="text-lg font-medium text-indigo">Cost Breakdown</h3>
                        
                        <div className="bg-white rounded-lg p-4 space-y-3">
                          <div className="flex justify-between items-center">
                            <span className="text-indigo/70">Materials</span>
                            <span className="font-medium text-indigo">${breakdown.materials.toLocaleString()}</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-indigo/70">Labor</span>
                            <span className="font-medium text-indigo">${breakdown.labor.toLocaleString()}</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-indigo/70">Design & Planning</span>
                            <span className="font-medium text-indigo">${breakdown.design.toLocaleString()}</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-indigo/70">Permits & Fees</span>
                            <span className="font-medium text-indigo">${breakdown.permits.toLocaleString()}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <h3 className="text-lg font-medium text-indigo">Next Steps</h3>
                        
                        <ul className="space-y-3">
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-gold mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-indigo/80">Schedule a free consultation with our design team</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-gold mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-indigo/80">Get a detailed project plan with timeline</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-gold mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-indigo/80">Explore AI-generated design concepts for your space</span>
                          </li>
                        </ul>
                        
                        <div className="pt-4">
                          <Button className="w-full bg-gold hover:bg-gold/90 text-indigo">
                            <a href="/contact" className="flex items-center justify-center w-full">
                              Schedule Free Consultation
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </a>
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </RevealAnimation>
              ) : (
                <RevealAnimation>
                  <div className="h-full flex flex-col justify-center">
                    <h2 className="text-2xl font-bold mb-6 text-indigo">Our AI Budget Calculator</h2>
                    
                    <p className="text-indigo/70 mb-6">
                      Our advanced AI-powered calculator uses real-time data, historical project costs, and regional pricing factors to provide you with an accurate estimate for your project.
                    </p>
                    
                    <div className="space-y-6">
                      {aiTools.map((tool) => (
                        <Card key={tool.id} className="border-indigo/10 hover:border-indigo/30 transition-all duration-300">
                          <CardContent className="p-4 flex items-start gap-3">
                            <div className="bg-indigo/5 p-2 rounded-full">
                              {tool.icon}
                            </div>
                            <div>
                              <h3 className="font-medium text-indigo">{tool.name}</h3>
                              <p className="text-sm text-indigo/70">{tool.description}</p>
                              <Badge variant="outline" className="mt-2 text-xs bg-transparent">
                                {tool.integration}
                              </Badge>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                </RevealAnimation>
              )}
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section - INTEGRATION POINT: Use AI to generate and optimize FAQ content */}
      <section className="py-16 bg-indigo/5">
        <div className="content-container">
          <RevealAnimation>
            <h2 className="text-3xl font-bold mb-8 text-indigo text-center">Frequently Asked Questions</h2>
          </RevealAnimation>
          
          <div className="max-w-3xl mx-auto">
            <Tabs defaultValue="accuracy" className="w-full">
              <RevealAnimation>
                <TabsList className="mb-6 w-full grid grid-cols-2 md:grid-cols-4">
                  <TabsTrigger value="accuracy">Accuracy</TabsTrigger>
                  <TabsTrigger value="factors">Cost Factors</TabsTrigger>
                  <TabsTrigger value="timeline">Timeline</TabsTrigger>
                  <TabsTrigger value="process">Process</TabsTrigger>
                </TabsList>
              </RevealAnimation>
              
              <RevealAnimation>
                <TabsContent value="accuracy" className="space-y-4">
                  <div>
                    <h3 className="text-lg font-medium text-indigo mb-2">How accurate is the estimate?</h3>
                    <p className="text-indigo/70">
                      Our estimates are typically within 10-15% of the final cost. The AI continuously learns from completed projects to improve accuracy.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-indigo mb-2">What data is used to generate the estimate?</h3>
                    <p className="text-indigo/70">
                      We use a combination of historical project data, current material costs, regional labor rates, and market conditions to calculate estimates.
                    </p>
                  </div>
                </TabsContent>
              </RevealAnimation>
              
              <RevealAnimation>
                <TabsContent value="factors" className="space-y-4">
                  <div>
                    <h3 className="text-lg font-medium text-indigo mb-2">What factors affect the cost the most?</h3>
                    <p className="text-indigo/70">
                      Square footage, quality level, location, and room type are the primary factors. Kitchens and bathrooms typically cost more due to plumbing and specialized fixtures.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-indigo mb-2">Do seasonal changes affect costs?</h3>
                    <p className="text-indigo/70">
                      Yes, material costs and labor availability can fluctuate seasonally. Our AI accounts for seasonal trends in its calculations.
                    </p>
                  </div>
                </TabsContent>
              </RevealAnimation>
              
              <RevealAnimation>
                <TabsContent value="timeline" className="space-y-4">
                  <div>
                    <h3 className="text-lg font-medium text-indigo mb-2">How long will my project take?</h3>
                    <p className="text-indigo/70">
                      Project timelines vary based on scope and complexity. During your consultation, we'll provide a detailed timeline estimate.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-indigo mb-2">Does the estimate include a project timeline?</h3>
                    <p className="text-indigo/70">
                      The initial estimate focuses on cost. A detailed timeline is provided during your free consultation with our design team.
                    </p>
                  </div>
                </TabsContent>
              </RevealAnimation>
              
              <RevealAnimation>
                <TabsContent value="process" className="space-y-4">
                  <div>
                    <h3 className="text-lg font-medium text-indigo mb-2">What happens after I get my estimate?</h3>
                    <p className="text-indigo/70">
                      We'll schedule a free consultation to discuss your project in detail, refine the estimate, and create a comprehensive project plan.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-indigo mb-2">Can I see design concepts before committing?</h3>
                    <p className="text-indigo/70">
                      Yes, our AI Design Studio can generate concept visualizations based on your preferences and budget before you commit to the project.
                    </p>
                  </div>
                </TabsContent>
              </RevealAnimation>
            </Tabs>
          </div>
        </div>
      </section>
      
      {/* Call to Action - INTEGRATION POINT: Connect with lead generation system */}
      <section className="py-16 bg-indigo text-cream">
        <div className="content-container text-center">
          <RevealAnimation>
            <h2 className="text-3xl font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-cream/80 max-w-2xl mx-auto mb-8">
              Get a free consultation with our design experts to discuss your project in detail and create a customized plan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="bg-gold text-indigo font-medium px-8 py-4 rounded-md inline-block transition hover:shadow-lg hover:translate-y-[-2px]">
                Schedule Consultation
              </a>
              <a href="/ai-design-studio" className="border border-cream/20 text-cream font-medium px-8 py-4 rounded-md inline-block transition hover:bg-cream/10">
                Try AI Design Studio
              </a>
            </div>
          </RevealAnimation>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default BudgetCalculator;
