import React, { useState, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

interface CaseStudyCardProps {
  title: string;
  description: string;
  beforeImage: string;
  afterImage: string;
  category: string;
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({
  title,
  description,
  beforeImage,
  afterImage,
  category
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isHovered, setIsHovered] = useState(false);
  const sliderContainerRef = useRef<HTMLDivElement>(null);
  
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!sliderContainerRef.current) return;
    
    const rect = sliderContainerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const position = (x / rect.width) * 100;
    setSliderPosition(Math.min(Math.max(position, 0), 100));
  };
  
  const handleTouchMove = (e: React.TouchEvent) => {
    if (!sliderContainerRef.current) return;
    
    const touch = e.touches[0];
    const rect = sliderContainerRef.current.getBoundingClientRect();
    const x = touch.clientX - rect.left;
    const position = (x / rect.width) * 100;
    setSliderPosition(Math.min(Math.max(position, 0), 100));
  };
  
  return (
    <div className="glass-panel overflow-hidden group">
      <div 
        className="relative h-48 md:h-64 overflow-hidden mb-4 cursor-grab"
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        ref={sliderContainerRef}
      >
        {/* Before image (left side) */}
        <div className="absolute inset-0">
          <img 
            src={beforeImage} 
            alt={`${title} - 改版前`} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-deepBlue/30"></div>
        </div>
        
        {/* After image (right side with clip path) */}
        <div 
          className="absolute inset-0"
          style={{ clipPath: `polygon(${sliderPosition}% 0, 100% 0, 100% 100%, ${sliderPosition}% 100%)` }}
        >
          <img 
            src={afterImage} 
            alt={`${title} - 改版後`} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-deepBlue/10"></div>
        </div>
        
        {/* Slider handle */}
        <div 
          className="absolute top-0 bottom-0 w-1 bg-neonTurquoise z-10 shadow-[0_0_10px_rgba(0,245,160,0.7)]"
          style={{ left: `${sliderPosition}%` }}
        ></div>
        
        <div 
          className="absolute top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-neonTurquoise z-10 flex items-center justify-center shadow-[0_0_10px_rgba(0,245,160,0.7)]"
          style={{ left: `${sliderPosition}%`, transform: 'translate(-50%, -50%)' }}
        >
          <div className="flex items-center">
            <ArrowRight size={10} className="text-deepBlue -ml-1" />
            <ArrowRight size={10} className="text-deepBlue -ml-1 -scale-x-100" />
          </div>
        </div>
        
        {/* Labels */}
        <div className="absolute bottom-2 left-2 bg-deepBlue/70 text-white text-xs px-2 py-1 rounded">改版前</div>
        <div className="absolute bottom-2 right-2 bg-neonTurquoise/70 text-deepBlue text-xs px-2 py-1 rounded">改版後</div>
        
        {/* Category badge */}
        <div className="absolute top-2 left-2 bg-deepBlue/80 border border-neonTurquoise/30 text-neonTurquoise text-xs px-2 py-1 rounded-full">
          {category}
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="font-orbitron font-bold text-lg mb-2 neon-text">{title}</h3>
        <p className="text-gray-300 text-sm mb-4">{description}</p>
        <button className="flex items-center gap-2 text-neonTurquoise font-orbitron text-sm group-hover:gap-3 transition-all">
          查看詳情 <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
};

export default CaseStudyCard;