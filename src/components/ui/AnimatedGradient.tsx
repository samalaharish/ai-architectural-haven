
import React, { useEffect, useRef } from 'react';

interface AnimatedGradientProps {
  children: React.ReactNode;
  className?: string;
}

const AnimatedGradient: React.FC<AnimatedGradientProps> = ({ children, className = '' }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const gradientRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const container = containerRef.current;
    const gradient = gradientRef.current;
    
    if (!container || !gradient) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left; // x position within the container
      const y = e.clientY - rect.top; // y position within the container
      
      // Calculate position as a percentage
      const percentX = Math.round((x / rect.width) * 100);
      const percentY = Math.round((y / rect.height) * 100);
      
      // Update the gradient position
      gradient.style.background = `
        radial-gradient(
          circle at ${percentX}% ${percentY}%, 
          rgba(197, 164, 109, 0.15) 0%, 
          rgba(197, 164, 109, 0) 50%
        )
      `;
    };
    
    container.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
      <div 
        ref={gradientRef} 
        className="absolute inset-0 z-0 transition-all duration-500 ease-out"
      />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default AnimatedGradient;
