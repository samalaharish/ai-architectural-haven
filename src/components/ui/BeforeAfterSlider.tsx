
import { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeAlt: string;
  afterAlt: string;
  className?: string;
}

const BeforeAfterSlider = ({ beforeImage, afterImage, beforeAlt, afterAlt, className = '' }: BeforeAfterSliderProps) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  
  return (
    <div className={`relative h-80 overflow-hidden rounded-lg ${className}`}>
      <div className="absolute inset-0 w-full h-full">
        <img 
          src={beforeImage} 
          alt={beforeAlt} 
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
      
      <div 
        className="absolute inset-0 w-full h-full overflow-hidden"
        style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}
      >
        <img 
          src={afterImage} 
          alt={afterAlt} 
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
      
      <div 
        className="absolute inset-y-0 w-1 bg-white cursor-ew-resize"
        style={{ left: `${sliderPosition}%` }}
        onMouseDown={(e) => {
          e.preventDefault();
          
          const handleMouseMove = (moveEvent: MouseEvent) => {
            const container = e.currentTarget.parentElement;
            if (!container) return;
            
            const rect = container.getBoundingClientRect();
            const x = moveEvent.clientX - rect.left;
            const newPosition = Math.max(0, Math.min(100, (x / rect.width) * 100));
            
            setSliderPosition(newPosition);
          };
          
          const handleMouseUp = () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
          };
          
          document.addEventListener('mousemove', handleMouseMove);
          document.addEventListener('mouseup', handleMouseUp);
        }}
      >
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md">
          <div className="flex">
            <ArrowLeft size={12} />
            <ArrowRight size={12} />
          </div>
        </div>
      </div>
      
      <div className="absolute top-4 left-4 bg-indigo/80 text-cream px-3 py-1 text-sm rounded-md backdrop-blur-sm">
        Before
      </div>
      
      <div className="absolute top-4 right-4 bg-gold/80 text-indigo px-3 py-1 text-sm rounded-md backdrop-blur-sm">
        After
      </div>
    </div>
  );
};

export default BeforeAfterSlider;
