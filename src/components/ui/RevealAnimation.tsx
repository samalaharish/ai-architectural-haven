
import React, { useEffect, useRef, useState } from 'react';

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
  duration?: number;
  threshold?: number;
  once?: boolean;
}

const RevealAnimation: React.FC<RevealProps> = ({
  children,
  className = '',
  direction = 'up',
  delay = 0,
  duration = 800,
  threshold = 0.1,
  once = true,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.unobserve(currentRef);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [once, threshold]);

  const getDirectionStyles = () => {
    const distance = '40px';
    switch (direction) {
      case 'up':
        return {
          transform: isVisible ? 'translateY(0)' : `translateY(${distance})`,
        };
      case 'down':
        return {
          transform: isVisible ? 'translateY(0)' : `translateY(-${distance})`,
        };
      case 'left':
        return {
          transform: isVisible ? 'translateX(0)' : `translateX(${distance})`,
        };
      case 'right':
        return {
          transform: isVisible ? 'translateX(0)' : `translateX(-${distance})`,
        };
      default:
        return {
          transform: isVisible ? 'translateY(0)' : `translateY(${distance})`,
        };
    }
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...getDirectionStyles(),
        opacity: isVisible ? 1 : 0,
        transition: `opacity ${duration}ms ease-out, transform ${duration}ms ease-out`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

export default RevealAnimation;
