import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  techStack: string[];
  index: number;
  demoComponent?: React.ReactNode;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  title, 
  description, 
  icon, 
  techStack, 
  index,
  demoComponent 
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  // Animation delay for floating effect
  const animationDelay = `${index * 0.5}s`;
  
  return (
    <div 
      className={`glass-panel p-6 relative overflow-hidden transition-all duration-500 ${
        isExpanded ? 'md:col-span-2 md:row-span-2' : ''
      }`}
      style={{ 
        animationDelay, 
        animation: isExpanded ? 'none' : 'float 6s ease-in-out infinite',
        animationDelay
      }}
    >
      {/* Background glow effect */}
      <div className="absolute -inset-1 rounded-xl opacity-30 bg-gradient-to-r from-deepBlue via-neonTurquoise to-deepBlue blur-md"></div>
      
      <div className="relative z-10">
        <div className="flex items-start justify-between mb-4">
          <div className="p-3 rounded-lg bg-deepBlue/50 border border-neonTurquoise/30 text-neonTurquoise">
            {icon}
          </div>
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-neonTurquoise hover:bg-neonTurquoise/10 p-2 rounded-full transition-all"
            aria-label={isExpanded ? "收起" : "展開"}
          >
            {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </button>
        </div>
        
        <h3 className="text-xl font-orbitron font-bold mb-3 neon-text">{title}</h3>
        <p className="text-gray-300 mb-4">{description}</p>
        
        {isExpanded && (
          <div className="mt-6 transition-all duration-500 transform origin-top">
            <h4 className="text-lg font-orbitron mb-3 text-gray-200">技術架構</h4>
            <div className="flex flex-wrap gap-2 mb-6">
              {techStack.map((tech, i) => (
                <span 
                  key={i} 
                  className="px-3 py-1 text-sm bg-deepBlue/70 border border-neonTurquoise/30 rounded-full text-neonTurquoise"
                >
                  {tech}
                </span>
              ))}
            </div>
            
            {demoComponent && (
              <div className="mt-6 border border-neonTurquoise/20 rounded-lg overflow-hidden">
                <div className="bg-deepBlue/70 py-2 px-4 font-orbitron text-sm text-neonTurquoise border-b border-neonTurquoise/20">
                  互動演示
                </div>
                <div className="p-4 bg-deepBlue/30">
                  {demoComponent}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ServiceCard;