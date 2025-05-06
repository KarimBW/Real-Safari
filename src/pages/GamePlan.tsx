
import React, { useState, useRef, useEffect } from "react";
import { Header } from "@/components/Safari/Header";

interface StyleOption {
  title: string;
  subtitle: string;
  image: string;
}

const GamePlan = () => {
  const [activePanel, setActivePanel] = useState<number | null>(null);
  const [showHeader, setShowHeader] = useState<boolean>(false);
  const heroRef = useRef<HTMLDivElement>(null);
  
  // Style options data
  const styleOptions: StyleOption[] = [
    {
      title: "Lone & Wild",
      subtitle: "Travel without a Guide",
      image: "/lovable-uploads/954941cb-6486-4858-a800-159610f0f83c.png" // Photo 1 - self-drive with burned car
    },
    {
      title: "Guided & Glorious",
      subtitle: "Travel with a Guide",
      image: "/lovable-uploads/40df4a48-fdc5-4347-814e-f8730c637d2c.png" // Photo 2 - guide driving
    }
  ];

  const handlePanelHover = (index: number) => {
    setActivePanel(index);
  };
  
  const handlePanelLeave = () => {
    setActivePanel(null);
  };
  
  const handlePanelClick = (index: number) => {
    // Handle panel click - could navigate to specific plan details in future
    console.log(`Selected plan: ${styleOptions[index].title}`);
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
      <div className="h-screen relative overflow-hidden" ref={heroRef}>
        {/* Left sidebar */}
        <div className="w-[80px] h-full bg-black text-white flex flex-col items-center justify-between py-8 absolute left-0 top-0 z-10">
          {/* Logo */}
          <div>
            
          </div>
          
          {/* Vertical text */}
          <div className="flex-grow flex items-center">
            <div className="transform -rotate-90 whitespace-nowrap text-2xl font-bold tracking-wider">
              CHOOSE YOUR STYLE
            </div>
          </div>
          
          {/* Bottom text */}
          <div className="flex flex-col items-center gap-4">
            
          </div>
        </div>

        {/* Panels */}
        <div className="relative z-10 flex h-full" style={{ marginLeft: '80px' }}>
          {styleOptions.map((option, index) => (
            <div 
              key={index} 
              className={`flex-1 flex flex-col justify-end relative overflow-hidden cursor-pointer border-r border-gray-700 ${
                index === 0 ? 'guided_panel' : 'unguided_panel'
              }`}
              onMouseEnter={() => handlePanelHover(index)} 
              onMouseLeave={handlePanelLeave}
              onClick={() => handlePanelClick(index)}
            >
              {/* Background image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-all duration-700 ease-in-out" 
                style={{ backgroundImage: `url(${option.image})` }}
              >
                {/* Overlay to darken image */}
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>
              </div>
              
              {/* Panel content */}
              <div className="relative z-10 p-6 pb-12">
                <h2 
                  className={`text-white text-3xl font-bold mb-1 transition-all duration-500 ease-in-out transform ${
                    activePanel === index ? 'translate-y-[-40px] text-safari-gold' : ''
                  }`}
                >
                  {option.title}
                </h2>
                <p 
                  className={`text-white text-lg opacity-80 transition-all duration-500 ease-in-out transform ${
                    activePanel === index ? 'translate-y-[-40px]' : ''
                  }`}
                >
                  {option.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Additional content sections can be added below if needed */}
    </div>
  );
};

export default GamePlan;
