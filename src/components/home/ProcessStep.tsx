
import RevealAnimation from '../ui/RevealAnimation';

interface ProcessStepProps {
  number: number;
  title: string;
  description: string;
  delay: number;
}

const ProcessStep = ({ number, title, description, delay }: ProcessStepProps) => {
  return (
    <RevealAnimation delay={delay}>
      <div className="flex flex-col items-center text-center">
        <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mb-4">
          <span className="text-2xl font-bold text-gold">{number}</span>
        </div>
        <h3 className="text-xl font-bold mb-2 text-indigo">{title}</h3>
        <p className="text-indigo/70">{description}</p>
      </div>
    </RevealAnimation>
  );
};

export default ProcessStep;
