
import React, { useState } from 'react';
import HeroSidebar from './HeroSidebar';
import HeroPanel from './HeroPanel';
import { PanelData } from './HeroPanel';

interface HeroSectionProps {
  backgroundImage: string;
  destinationTitle: string;
  panels: PanelData[];
  onPanelHover: (index: number) => void;
  onPanelLeave: () => void;
  activePanel: number | null;
}

const HeroSection: React.FC<HeroSectionProps> = ({ 
  backgroundImage, 
  destinationTitle, 
  panels, 
  onPanelHover, 
  onPanelLeave, 
  activePanel 
}) => {
  return (
    <div className="h-screen relative overflow-hidden">
      <HeroSidebar destinationTitle={destinationTitle} />

      {/* Background image that changes on hover */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-all duration-700 ease-in-out z-0" 
        style={{
          backgroundImage: `url(${backgroundImage})`,
          left: '80px'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      {/* Panels */}
      <HeroPanel 
        panels={panels} 
        onPanelHover={onPanelHover} 
        onPanelLeave={onPanelLeave} 
        activePanel={activePanel} 
      />
    </div>
  );
};

export default HeroSection;
