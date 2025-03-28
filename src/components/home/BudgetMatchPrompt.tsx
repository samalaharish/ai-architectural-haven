
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import RevealAnimation from '../ui/RevealAnimation';
import { Check } from 'lucide-react';

const BudgetMatchPrompt = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    projectType: '',
    budgetRange: '',
    timeline: '',
    contact: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const { name, value, type } = e.target;
    const val = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;
    
    setFormData(prev => ({
      ...prev,
      [name]: val
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send this data to your backend
    console.log("Form submitted:", formData);
    alert("Thank you! " + (formData.contact ? "We'll contact you shortly." : "Your preferences have been saved."));
    setShowForm(false);
    setFormData({
      projectType: '',
      budgetRange: '',
      timeline: '',
      contact: false
    });
  };

  return (
    <div className="bg-indigo/5 rounded-2xl p-8 md:p-10">
      <RevealAnimation>
        <h3 className="text-2xl md:text-3xl font-bold mb-4 text-indigo">Find Your Budget Match</h3>
        <p className="text-indigo/70 mb-8">
          Discover the perfect design solution that fits your budget and timeline. Answer a few questions to get started.
        </p>

        {!showForm ? (
          <div className="flex flex-wrap gap-4">
            <button 
              onClick={() => setShowForm(true)}
              className="bg-indigo text-cream font-medium px-6 py-3 rounded-md transition hover:shadow-lg"
            >
              Match My Budget
            </button>
            <NavLink 
              to="/budget-calculator" 
              className="bg-transparent border border-indigo text-indigo font-medium px-6 py-3 rounded-md transition hover:bg-indigo/5"
            >
              Go to Full Calculator
            </NavLink>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-indigo/70 mb-2">Project Type</label>
                <select 
                  name="projectType" 
                  value={formData.projectType}
                  onChange={handleChange}
                  className="w-full bg-white border border-indigo/20 rounded-md px-4 py-2"
                  required
                >
                  <option value="">Select type</option>
                  <option value="2BHK">2BHK</option>
                  <option value="3BHK">3BHK</option>
                  <option value="Villa">Villa</option>
                  <option value="Office">Office</option>
                  <option value="Retail">Retail</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-indigo/70 mb-2">Budget Range</label>
                <select 
                  name="budgetRange" 
                  value={formData.budgetRange}
                  onChange={handleChange}
                  className="w-full bg-white border border-indigo/20 rounded-md px-4 py-2"
                  required
                >
                  <option value="">Select budget</option>
                  <option value="5-10L">₹5-10 Lakhs</option>
                  <option value="10-15L">₹10-15 Lakhs</option>
                  <option value="15-25L">₹15-25 Lakhs</option>
                  <option value="25L+">₹25+ Lakhs</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-indigo/70 mb-2">Timeline</label>
                <select 
                  name="timeline" 
                  value={formData.timeline}
                  onChange={handleChange}
                  className="w-full bg-white border border-indigo/20 rounded-md px-4 py-2"
                  required
                >
                  <option value="">Select timeline</option>
                  <option value="1-2 months">1-2 months</option>
                  <option value="2-3 months">2-3 months</option>
                  <option value="3-6 months">3-6 months</option>
                  <option value="6+ months">6+ months</option>
                </select>
              </div>
              
              <div className="flex items-center">
                <input 
                  type="checkbox" 
                  id="contact" 
                  name="contact"
                  checked={formData.contact}
                  onChange={handleChange}
                  className="mr-2 h-4 w-4"
                />
                <label htmlFor="contact" className="text-indigo/70">
                  Would you like us to contact you with a design plan?
                </label>
              </div>
            </div>
            
            <div className="flex gap-4">
              <button 
                type="submit"
                className="bg-indigo text-cream font-medium px-6 py-3 rounded-md transition hover:shadow-lg"
              >
                Find My Match
              </button>
              <button 
                type="button"
                onClick={() => setShowForm(false)}
                className="bg-transparent border border-indigo text-indigo font-medium px-6 py-3 rounded-md transition hover:bg-indigo/5"
              >
                Cancel
              </button>
            </div>
          </form>
        )}
      </RevealAnimation>
    </div>
  );
};

export default BudgetMatchPrompt;
