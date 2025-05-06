
import React, { useState } from 'react';
import { Header } from "@/components/Safari/Header";

interface StyleOption {
  title: string;
  subtitle: string;
  image: string;
}

const GamePlan = () => {
  const [activePanel, setActivePanel] = useState<number | null>(null);

  const styleOptions: StyleOption[] = [
    {
      title: "Guided & Glorious",
      subtitle: "Travel with a Guide",
      image: "/lovable-uploads/deccfb04-3b08-496e-a655-8c4af36ea54a.png" // Photo 2
    },
    {
      title: "Lone & Wild",
      subtitle: "Travel without a Guide",
      image: "/lovable-uploads/53775a51-edf9-4574-8b2a-fdbd4b68604a.png" // Photo 1
    }
  ];

  const handlePanelHover = (index: number) => {
    setActivePanel(index);
  };
  
  const handlePanelLeave = () => {
    setActivePanel(null);
  };

  // Get the background image URL based on active panel
  const getBackgroundImage = () => {
    if (activePanel !== null) {
      return styleOptions[activePanel].image;
    }
    return null;
  };

  return (
    <div className="flex flex-col min-h-screen relative">
      {/* Full page background that changes on hover */}
      <div 
        className="fixed inset-0 bg-cover bg-center transition-all duration-700 ease-in-out"
        style={{ 
          backgroundImage: getBackgroundImage() ? `url(${getBackgroundImage()})` : 'none',
          opacity: getBackgroundImage() ? 0.5 : 0,
          zIndex: -1
        }}
      />

      {/* Left sidebar */}
      <div className="w-[80px] h-full bg-black text-white flex flex-col items-center justify-between py-8 fixed left-0 top-0 z-50">
        {/* Vertical title */}
        <div className="flex-grow flex items-center">
          <div className="transform -rotate-90 whitespace-nowrap text-2xl font-bold tracking-wider">
            CHOOSE YOUR STYLE
          </div>
        </div>
      </div>
      
      {/* Main content with panels */}
      <div className="flex h-screen" style={{ marginLeft: '80px' }}>
        {/* Guided Safari Panel (Left) */}
        <div 
          id="guided_panel"
          className="flex-1 h-full bg-cover bg-center relative cursor-pointer transition-all duration-500 ease-in-out"
          style={{ 
            backgroundImage: `url(${styleOptions[0].image})`,
            flex: activePanel === 0 ? '1.5' : activePanel === 1 ? '0.5' : '1'
          }}
          onMouseEnter={() => handlePanelHover(0)}
          onMouseLeave={handlePanelLeave}
        >
          <div className={`absolute inset-0 bg-black transition-opacity duration-300 ${
            activePanel === 0 ? 'bg-opacity-20' : 'bg-opacity-40'
          }`}></div>
          <Header className="absolute top-0 left-0 right-0 z-10" />
          <div className="absolute bottom-0 left-0 right-0 p-10 z-10">
            <h2 
              className={`text-white text-4xl font-bold mb-2 transition-all duration-500 ease-in-out transform ${
                activePanel === 0 ? 'translate-y-[-40px] text-safari-gold' : ''
              }`}
            >
              {styleOptions[0].title}
            </h2>
            <p 
              className={`text-white text-lg opacity-80 transition-all duration-500 ease-in-out transform ${
                activePanel === 0 ? 'translate-y-[-40px]' : ''
              }`}
            >
              {styleOptions[0].subtitle}
            </p>
          </div>
        </div>
        
        {/* Self-Guided Safari Panel (Right) */}
        <div 
          id="unguided_panel"
          className="flex-1 h-full bg-cover bg-center relative cursor-pointer transition-all duration-500 ease-in-out"
          style={{ 
            backgroundImage: `url(${styleOptions[1].image})`,
            flex: activePanel === 1 ? '1.5' : activePanel === 0 ? '0.5' : '1'
          }}
          onMouseEnter={() => handlePanelHover(1)}
          onMouseLeave={handlePanelLeave}
        >
          <div className={`absolute inset-0 bg-black transition-opacity duration-300 ${
            activePanel === 1 ? 'bg-opacity-20' : 'bg-opacity-40'
          }`}></div>
          <div className="absolute bottom-0 left-0 right-0 p-10 z-10">
            <h2 
              className={`text-white text-4xl font-bold mb-2 transition-all duration-500 ease-in-out transform ${
                activePanel === 1 ? 'translate-y-[-40px] text-safari-gold' : ''
              }`}
            >
              {styleOptions[1].title}
            </h2>
            <p 
              className={`text-white text-lg opacity-80 transition-all duration-500 ease-in-out transform ${
                activePanel === 1 ? 'translate-y-[-40px]' : ''
              }`}
            >
              {styleOptions[1].subtitle}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GamePlan;
