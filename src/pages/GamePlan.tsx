
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
      title: "Lone & Wild",
      subtitle: "Travel without a Guide",
      image: "/lovable-uploads/8fa91479-08fa-445b-abad-047ba109fedf.png" // Photo 1
    },
    {
      title: "Guided & Glorious",
      subtitle: "Travel with a Guide",
      image: "/lovable-uploads/6f7ac6f4-6078-4baa-8ef8-1a5d7f4e8bc0.png" // Photo 2
    }
  ];

  const handlePanelHover = (index: number) => {
    setActivePanel(index);
  };
  
  const handlePanelLeave = () => {
    setActivePanel(null);
  };

  return (
    <div className="flex flex-col min-h-screen">
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
          className="flex-1 h-full bg-cover bg-center relative cursor-pointer"
          style={{ backgroundImage: `url(${styleOptions[0].image})` }}
          onMouseEnter={() => handlePanelHover(0)}
          onMouseLeave={handlePanelLeave}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300 hover:bg-opacity-20"></div>
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
          className="flex-1 h-full bg-cover bg-center relative cursor-pointer"
          style={{ backgroundImage: `url(${styleOptions[1].image})` }}
          onMouseEnter={() => handlePanelHover(1)}
          onMouseLeave={handlePanelLeave}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300 hover:bg-opacity-20"></div>
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
