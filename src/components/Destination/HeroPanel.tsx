
import React, { useState } from 'react';

export interface PanelData {
  title: string;
  subtitle: string;
  image: string;
}

interface HeroPanelProps {
  panels: PanelData[];
  onPanelHover: (index: number) => void;
  onPanelLeave: () => void;
  activePanel: number | null;
}

const HeroPanel: React.FC<HeroPanelProps> = ({ panels, onPanelHover, onPanelLeave, activePanel }) => {
  return (
    <div className="relative z-10 flex-1 flex h-full" style={{ marginLeft: '80px' }}>
      {panels.map((panel, index) => (
        <div 
          key={index} 
          className="flex-1 flex flex-col justify-end border-r border-gray-700 hover:bg-black hover:bg-opacity-20 transition-all duration-500" 
          onMouseEnter={() => onPanelHover(index)} 
          onMouseLeave={onPanelLeave}
        >
          <div className="p-6 pb-12 transition-all duration-500">
            <h2 
              className={`text-white text-2xl font-bold mb-1 transition-all duration-500 ease-in-out transform ${
                activePanel === index ? 'translate-y-[-40px] text-safari-gold' : ''
              }`}
            >
              {panel.title}
            </h2>
            <p className={`text-white text-sm opacity-80 transition-all duration-500 ease-in-out transform ${
              activePanel === index ? 'translate-y-[-40px]' : ''
            }`}>
              {panel.subtitle}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HeroPanel;
