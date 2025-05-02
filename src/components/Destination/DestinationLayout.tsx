
import React, { useState, useEffect, useRef } from 'react';
import { useParams } from "react-router-dom";
import { Header } from "@/components/Safari/Header";
import { destinationData } from "@/data/destinationData";
import HeroSection from './HeroSection';
import DestinationContent from './DestinationContent';
import { getPanelImages, getCampNames } from './utils/panelUtils';

const DestinationLayout: React.FC = () => {
  const { id } = useParams();
  const destination = destinationData[id as keyof typeof destinationData] || destinationData.okavango;
  
  const camps = getCampNames(id);
  const panels = getPanelImages(id, camps);
  
  const [activePanel, setActivePanel] = useState<number | null>(null);
  const [backgroundImage, setBackgroundImage] = useState<string>(panels[0].image);
  const [showHeader, setShowHeader] = useState<boolean>(false);
  const heroRef = useRef<HTMLDivElement>(null);
  
  const handlePanelHover = (index: number) => {
    setActivePanel(index);
    setBackgroundImage(panels[index].image);
  };
  
  const handlePanelLeave = () => {
    setActivePanel(null);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const heroHeight = heroRef.current.offsetHeight;
        const scrollPosition = window.scrollY;
        
        // Show header only when scrolled past 80% of the hero section
        setShowHeader(scrollPosition > heroHeight * 0.8);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Update panels when destination changes
  useEffect(() => {
    const updatedPanels = getPanelImages(id, camps);
    setBackgroundImage(updatedPanels[0].image);
  }, [id, camps]);
  
  return (
    <div className="flex flex-col min-h-screen">
      {/* Floating header that appears when scrolling */}
      <div 
        className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-500 ease-in-out ${
          showHeader ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <Header className="bg-safari-dark-grey/65 backdrop-blur-sm py-4" menuElevated={true} />
      </div>
      
      {/* Hero section with panels */}
      <div ref={heroRef}>
        <HeroSection 
          backgroundImage={backgroundImage}
          destinationTitle={destination.title}
          panels={panels}
          onPanelHover={handlePanelHover}
          onPanelLeave={handlePanelLeave}
          activePanel={activePanel}
        />
      </div>
      
      {/* Content section and Footer */}
      <DestinationContent destinationTitle={destination.title} />
    </div>
  );
};

export default DestinationLayout;
