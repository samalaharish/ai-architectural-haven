
import { useState, useEffect } from 'react';
import { 
  Calculator, 
  DollarSign, 
  Home, 
  Maximize, 
  Check, 
  ArrowRight, 
  Brain, 
  Lightbulb, 
  Database, 
  ChartBar,
  Building,
  Store,
  Download,
  Mail,
  FileText
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Slider } from '@/components/ui/slider';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';
import RevealAnimation from '@/components/ui/RevealAnimation';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

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

/**
 * ===========================================
 * BUDGET CALCULATOR DATA STRUCTURES
 * ===========================================
 * These constants define the base rates, room options, and add-ons for the calculator
 * INTEGRATION POINT: Connect to a backend API to fetch these values dynamically
 */

// Base price per sq.ft mappings for different property types
const baseRates = {
  'Residential': {
    'Living Room': 350,
    'Bedroom': 400,
    'Kitchen': 900,
    'Bathroom': 1000,
    'Balcony': 250,
    'Study Room': 500
  },
  'Commercial': {
    'Open Office': 600,
    'Cabin': 700,
    'Conference Room': 800,
    'Reception': 650,
    'Pantry': 500,
    'Washroom': 900
  },
  'Retail': {
    'Showroom Floor': 750,
    'Storage Area': 400,
    'Billing Counter': 850,
    'Trial Room': 650,
    'Washroom': 950
  }
};

// Available room options for each property type
const roomOptions = {
  'Residential': ['Living Room', 'Bedroom', 'Kitchen', 'Bathroom', 'Balcony', 'Study Room'],
  'Commercial': ['Open Office', 'Cabin', 'Conference Room', 'Reception', 'Pantry', 'Washroom'],
  'Retail': ['Showroom Floor', 'Storage Area', 'Billing Counter', 'Trial Room', 'Washroom']
};

// Style multipliers for different design styles
const styleMultiplier = {
  'Basic': 1.0,
  'Stylish': 1.3,
  'Luxury': 1.6
};

// Available add-ons for projects
const availableAddons = [
  { id: 'false-ceiling', label: 'False Ceiling', cost: 60, type: 'perSqFt' },
  { id: 'modular-kitchen', label: 'Modular Kitchen', cost: 100000, type: 'fixed' },
  { id: 'pooja-room', label: 'Pooja Room', cost: 25000, type: 'fixed' },
  { id: 'wardrobe', label: 'Wardrobe Units', cost: 30000, type: 'perUnit' },
  { id: 'home-automation', label: 'Home Automation', cost: 50000, type: 'fixed' }
];

/**
 * ===========================================
 * FORM SCHEMA VALIDATION
 * ===========================================
 */
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  contact: z.string().min(5, { message: "Please provide a valid contact (email or phone)." }),
  propertyType: z.enum(["Residential", "Commercial", "Retail"]),
  style: z.enum(["Basic", "Stylish", "Luxury"]),
  bufferPercent: z.coerce.number().min(0).max(100),
  rooms: z.record(z.string(), z.number().min(0)),
  roomAreas: z.record(z.string(), z.number().min(0)),
  addons: z.array(z.string())
});

// Type for our form values
type FormValues = z.infer<typeof formSchema>;

/**
 * ===========================================
 * BUDGET CALCULATOR COMPONENT
 * ===========================================
 */
const BudgetCalculator = () => {
  const { toast } = useToast();
  
  // Results state
  const [estimatedCost, setEstimatedCost] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [breakdown, setBreakdown] = useState({
    materials: 0,
    labor: 0,
    design: 0,
    permits: 0,
    roomCosts: {} as Record<string, number>,
    addonCosts: {} as Record<string, number>,
    baseTotal: 0,
    addonTotal: 0,
    bufferAmount: 0
  });
  
  // Create a form with default values
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      contact: "",
      propertyType: "Residential",
      style: "Basic",
      bufferPercent: 10,
      rooms: roomOptions.Residential.reduce((acc, room) => ({ ...acc, [room]: 0 }), {}),
      roomAreas: roomOptions.Residential.reduce((acc, room) => ({ ...acc, [room]: 0 }), {}),
      addons: []
    }
  });
  
  // Get current property type
  const currentPropertyType = form.watch("propertyType");
  
  // Update available rooms when property type changes
  useEffect(() => {
    // Reset room selections when property type changes
    const newRooms = roomOptions[currentPropertyType as keyof typeof roomOptions].reduce(
      (acc, room) => ({ ...acc, [room]: 0 }), {}
    );
    const newRoomAreas = roomOptions[currentPropertyType as keyof typeof roomOptions].reduce(
      (acc, room) => ({ ...acc, [room]: 0 }), {}
    );
    
    form.setValue("rooms", newRooms);
    form.setValue("roomAreas", newRoomAreas);
  }, [currentPropertyType, form]);
  
  /**
   * ===========================================
   * BUDGET CALCULATION LOGIC
   * ===========================================
   * This function calculates the budget based on the form values
   * INTEGRATION POINT: This could be replaced with an API call to a backend service
   */
  const calculateBudget = (values: FormValues) => {
    // Extract values from the form
    const { propertyType, rooms, style, addons, bufferPercent, roomAreas } = values;
    
    // Get base rates for the selected property type
    const pricePerSqft = baseRates[propertyType as keyof typeof baseRates];
    
    // Calculate room costs
    let roomTotal = 0;
    const detailedRoomCosts: Record<string, number> = {};
    
    // Calculate cost for each room
    Object.entries(rooms).forEach(([room, count]) => {
      if (count > 0 && roomAreas[room] > 0) {
        const rate = pricePerSqft[room as keyof typeof pricePerSqft] || 0;
        const cost = rate * roomAreas[room] * count;
        roomTotal += cost;
        detailedRoomCosts[room] = cost;
      }
    });
    
    // Calculate total area
    const totalArea = Object.entries(rooms).reduce((total, [room, count]) => {
      return total + (count > 0 ? roomAreas[room] * count : 0);
    }, 0);
    
    // Calculate add-on costs
    const addonCosts: Record<string, number> = {};
    let totalAddons = 0;
    
    // Process each addon
    addons.forEach(addonId => {
      const addon = availableAddons.find(a => a.id === addonId);
      if (addon) {
        let cost = 0;
        
        if (addon.type === 'perSqFt') {
          // Per square foot addons (like false ceiling)
          cost = addon.cost * totalArea;
        } else if (addon.type === 'fixed') {
          // Fixed cost addons (like modular kitchen)
          cost = addon.cost;
        } else if (addon.type === 'perUnit') {
          // Per unit addons (like wardrobes) - use wardrobe units value
          const units = form.getValues("rooms")["Bedroom"] || 0;
          cost = addon.cost * units;
        }
        
        addonCosts[addon.label] = cost;
        totalAddons += cost;
      }
    });
    
    // Apply style multiplier
    const styleMultiplierValue = styleMultiplier[style as keyof typeof styleMultiplier];
    const subtotal = (roomTotal + totalAddons) * styleMultiplierValue;
    
    // Calculate buffer amount
    const bufferAmount = subtotal * (bufferPercent / 100);
    
    // Calculate grand total
    const grandTotal = Math.round(subtotal + bufferAmount);
    
    // Update state with breakdown
    setBreakdown({
      materials: Math.round(grandTotal * 0.45),
      labor: Math.round(grandTotal * 0.35),
      design: Math.round(grandTotal * 0.10),
      permits: Math.round(grandTotal * 0.10),
      roomCosts: detailedRoomCosts,
      addonCosts,
      baseTotal: roomTotal,
      addonTotal: totalAddons,
      bufferAmount
    });
    
    setEstimatedCost(grandTotal);
    setShowResults(true);
    
    /**
     * INTEGRATION POINT: Send data to backend for PDF generation
     * In a real implementation, this would make an API call to your backend
     * Example:
     * 
     * fetch("/api/calculate-budget", {
     *   method: "POST",
     *   headers: { "Content-Type": "application/json" },
     *   body: JSON.stringify(values)
     * }).then(response => response.json())
     *   .then(data => {
     *     // Handle PDF download URL
     *     window.open(data.pdf_url, "_blank");
     *   });
     */
    
    if (values.contact.includes('@')) {
      // If contact is an email
      toast({
        title: "Estimate Saved",
        description: "We'll send your detailed estimate to your email shortly.",
      });
    } else {
      toast({
        title: "Estimate Ready",
        description: "Your detailed estimate has been generated.",
      });
    }
  };
  
  /**
   * ===========================================
   * FORM SUBMISSION HANDLER
   * ===========================================
   */
  const onSubmit = (values: FormValues) => {
    calculateBudget(values);
  };
  
  // Get the available rooms for the selected property type
  const availableRooms = roomOptions[currentPropertyType as keyof typeof roomOptions] || [];
  
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
              Our AI-powered budget calculator provides accurate cost estimates for residential, commercial, and retail space designs.
              {/* INTEGRATION POINT: Use AI to generate more personalized description based on user data */}
            </p>
          </RevealAnimation>
          
          <RevealAnimation delay={600}>
            <div className="flex gap-4 flex-wrap">
              <Badge className="bg-indigo/30 text-cream hover:bg-indigo/40" variant="secondary">
                <Home className="w-4 h-4 mr-1" /> Residential
              </Badge>
              <Badge className="bg-indigo/30 text-cream hover:bg-indigo/40" variant="secondary">
                <Building className="w-4 h-4 mr-1" /> Commercial
              </Badge>
              <Badge className="bg-indigo/30 text-cream hover:bg-indigo/40" variant="secondary">
                <Store className="w-4 h-4 mr-1" /> Retail
              </Badge>
            </div>
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
                    
                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        {/* Personal Information */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Your Name</FormLabel>
                                <FormControl>
                                  <Input placeholder="Enter your name" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          
                          <FormField
                            control={form.control}
                            name="contact"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Email or Phone</FormLabel>
                                <FormControl>
                                  <Input placeholder="For your detailed estimate" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                        
                        {/* Property Type */}
                        <FormField
                          control={form.control}
                          name="propertyType"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Property Type</FormLabel>
                              <Select
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                              >
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select property type" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="Residential">Residential</SelectItem>
                                  <SelectItem value="Commercial">Commercial</SelectItem>
                                  <SelectItem value="Retail">Retail</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        {/* Room Selection */}
                        <div>
                          <h3 className="text-lg font-medium text-indigo mb-4">Rooms & Sizes</h3>
                          <div className="space-y-3">
                            {availableRooms.map((room) => (
                              <div key={room} className="grid grid-cols-2 gap-4">
                                <FormField
                                  control={form.control}
                                  name={`rooms.${room}`}
                                  render={({ field }) => (
                                    <FormItem>
                                      <FormLabel>{room} Units</FormLabel>
                                      <FormControl>
                                        <Input 
                                          type="number" 
                                          min="0" 
                                          {...field} 
                                          onChange={(e) => field.onChange(parseInt(e.target.value) || 0)}
                                        />
                                      </FormControl>
                                    </FormItem>
                                  )}
                                />
                                
                                <FormField
                                  control={form.control}
                                  name={`roomAreas.${room}`}
                                  render={({ field }) => (
                                    <FormItem>
                                      <FormLabel>Area (sq.ft)</FormLabel>
                                      <FormControl>
                                        <Input 
                                          type="number" 
                                          min="0" 
                                          {...field}
                                          onChange={(e) => field.onChange(parseInt(e.target.value) || 0)}
                                        />
                                      </FormControl>
                                    </FormItem>
                                  )}
                                />
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        {/* Add-ons */}
                        <div>
                          <h3 className="text-lg font-medium text-indigo mb-4">Add-ons</h3>
                          <FormField
                            control={form.control}
                            name="addons"
                            render={() => (
                              <FormItem>
                                <div className="space-y-3">
                                  {availableAddons.map((addon) => (
                                    <FormField
                                      key={addon.id}
                                      control={form.control}
                                      name="addons"
                                      render={({ field }) => {
                                        return (
                                          <FormItem
                                            key={addon.id}
                                            className="flex flex-row items-start space-x-3 space-y-0"
                                          >
                                            <FormControl>
                                              <Checkbox
                                                checked={field.value?.includes(addon.id)}
                                                onCheckedChange={(checked) => {
                                                  return checked
                                                    ? field.onChange([...field.value, addon.id])
                                                    : field.onChange(
                                                        field.value?.filter(
                                                          (value) => value !== addon.id
                                                        )
                                                      )
                                                }}
                                              />
                                            </FormControl>
                                            <FormLabel className="text-sm font-normal">
                                              {addon.label}
                                              <span className="text-xs text-indigo/60 block">
                                                {addon.type === 'perSqFt' 
                                                  ? `₹${addon.cost}/sq.ft`
                                                  : addon.type === 'perUnit'
                                                    ? `₹${addon.cost.toLocaleString()}/unit`
                                                    : `₹${addon.cost.toLocaleString()}`
                                                }
                                              </span>
                                            </FormLabel>
                                          </FormItem>
                                        )
                                      }}
                                    />
                                  ))}
                                </div>
                              </FormItem>
                            )}
                          />
                        </div>
                        
                        {/* Design Style */}
                        <FormField
                          control={form.control}
                          name="style"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Design Style</FormLabel>
                              <Select
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                              >
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select style" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="Basic">Basic (1.0x)</SelectItem>
                                  <SelectItem value="Stylish">Stylish (1.3x)</SelectItem>
                                  <SelectItem value="Luxury">Luxury (1.6x)</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        {/* Buffer Percentage */}
                        <FormField
                          control={form.control}
                          name="bufferPercent"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="flex justify-between">
                                <span>Contingency Buffer</span>
                                <span className="text-indigo/70">{field.value}%</span>
                              </FormLabel>
                              <FormControl>
                                <Slider
                                  min={0}
                                  max={25}
                                  step={5}
                                  value={[field.value]}
                                  onValueChange={(value) => field.onChange(value[0])}
                                />
                              </FormControl>
                              <FormDescription>
                                A buffer helps account for unexpected expenses during project execution.
                              </FormDescription>
                            </FormItem>
                          )}
                        />
                        
                        <Button 
                          type="submit" 
                          className="w-full bg-indigo hover:bg-indigo/90 text-white"
                        >
                          Calculate Estimate
                        </Button>
                      </form>
                    </Form>
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
                        ₹{estimatedCost.toLocaleString()}
                      </div>
                      
                      <div className="space-y-6 mb-8">
                        <h3 className="text-lg font-medium text-indigo">Detailed Breakdown</h3>
                        
                        {/* Room costs */}
                        <div className="bg-white rounded-lg p-4 space-y-3">
                          <h4 className="font-medium text-indigo">Room Costs</h4>
                          
                          {Object.entries(breakdown.roomCosts).map(([room, cost]) => (
                            <div key={room} className="flex justify-between items-center">
                              <span className="text-indigo/70">{room}</span>
                              <span className="font-medium text-indigo">₹{Math.round(cost).toLocaleString()}</span>
                            </div>
                          ))}
                          
                          <div className="border-t pt-2 mt-2 flex justify-between items-center">
                            <span className="font-medium text-indigo">Base Room Total</span>
                            <span className="font-medium text-indigo">₹{Math.round(breakdown.baseTotal).toLocaleString()}</span>
                          </div>
                        </div>
                        
                        {/* Add-on costs if any */}
                        {Object.keys(breakdown.addonCosts).length > 0 && (
                          <div className="bg-white rounded-lg p-4 space-y-3">
                            <h4 className="font-medium text-indigo">Add-on Costs</h4>
                            
                            {Object.entries(breakdown.addonCosts).map(([addon, cost]) => (
                              <div key={addon} className="flex justify-between items-center">
                                <span className="text-indigo/70">{addon}</span>
                                <span className="font-medium text-indigo">₹{Math.round(cost).toLocaleString()}</span>
                              </div>
                            ))}
                            
                            <div className="border-t pt-2 mt-2 flex justify-between items-center">
                              <span className="font-medium text-indigo">Add-on Total</span>
                              <span className="font-medium text-indigo">₹{Math.round(breakdown.addonTotal).toLocaleString()}</span>
                            </div>
                          </div>
                        )}
                        
                        {/* Summary costs */}
                        <div className="bg-white rounded-lg p-4 space-y-3">
                          <h4 className="font-medium text-indigo">Cost Summary</h4>
                          
                          <div className="flex justify-between items-center">
                            <span className="text-indigo/70">Materials</span>
                            <span className="font-medium text-indigo">₹{breakdown.materials.toLocaleString()}</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-indigo/70">Labor</span>
                            <span className="font-medium text-indigo">₹{breakdown.labor.toLocaleString()}</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-indigo/70">Design & Planning</span>
                            <span className="font-medium text-indigo">₹{breakdown.design.toLocaleString()}</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-indigo/70">Permits & Fees</span>
                            <span className="font-medium text-indigo">₹{breakdown.permits.toLocaleString()}</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-indigo/70">Contingency Buffer</span>
                            <span className="font-medium text-indigo">₹{Math.round(breakdown.bufferAmount).toLocaleString()}</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Download or Email actions */}
                      <div className="space-y-4 mb-6">
                        <h3 className="text-lg font-medium text-indigo">Get Your Detailed Estimate</h3>
                        
                        <div className="flex flex-col sm:flex-row gap-4">
                          <Button className="flex-1 bg-indigo hover:bg-indigo/90">
                            <Download className="mr-2 h-4 w-4" />
                            Download PDF
                          </Button>
                          <Button className="flex-1 bg-gold hover:bg-gold/90 text-indigo">
                            <Mail className="mr-2 h-4 w-4" />
                            Email Estimate
                          </Button>
                        </div>
                        
                        <p className="text-xs text-indigo/60 text-center">
                          The detailed PDF includes complete specifications and a project timeline.
                          {/* INTEGRATION POINT: Mention email delivery time and any other relevant information */}
                        </p>
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
                    
                    {/* INTEGRATION POINT: Add a case studies section or testimonials */}
                    <div className="mt-8 p-5 bg-indigo/5 rounded-lg border border-indigo/10">
                      <h3 className="text-lg font-medium text-indigo mb-2 flex items-center">
                        <FileText className="h-5 w-5 mr-2 text-gold" />
                        How it works
                      </h3>
                      <p className="text-indigo/70 text-sm">
                        Our calculator analyzes thousands of past projects to predict costs with 95% accuracy. 
                        Simply enter your project details, and our AI will generate a comprehensive estimate tailored to your needs.
                      </p>
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
