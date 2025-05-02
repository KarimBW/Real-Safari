
import React, { useState, useEffect, useRef } from 'react';
import { useParams } from "react-router-dom";
import { Header } from "@/components/Safari/Header";
import { destinationData } from "@/data/destinationData";
import FooterSection from "./FooterSection";

interface PanelData {
  title: string;
  subtitle: string;
  image: string;
}

const DestinationLayout: React.FC = () => {
  const { id } = useParams();
  const destination = destinationData[id as keyof typeof destinationData] || destinationData.okavango;

  // Define the camp names based on destination
  let camps = [];
  if (id === 'makgadikgadi') {
    camps = ['Salt Pan', 'Nxai Pan', 'Camp Three', 'Camp Four', 'Camp Five'];
  } else if (id === 'kalahari') {
    camps = ['CKGR', 'MABUA', 'KHUTSE', 'Camp Four', 'Camp Five'];
  } else {
    camps = ['Camp One', 'Camp Two', 'Camp Three', 'Camp Four', 'Camp Five'];
  }

  // Panel data with placeholder images
  const panels: PanelData[] = [{
    title: camps[0],
    subtitle: "My life in images",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3"
  }, {
    title: camps[1],
    subtitle: "All about me",
    image: "https://images.unsplash.com/photo-1504193902866-31d5d1c28ca9?ixlib=rb-4.0.3"
  }, {
    title: camps[2],
    subtitle: "Quoting what I've learnt",
    image: "https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?ixlib=rb-4.0.3"
  }, {
    title: camps[3],
    subtitle: "You and I",
    image: "https://images.unsplash.com/photo-1507272931001-fc06c17e4f43?ixlib=rb-4.0.3"
  }, {
    title: camps[4],
    subtitle: "Official shop",
    image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3"
  }];
  
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
  
  return (
    <div className="flex flex-col min-h-screen">
      {/* Floating header that appears when scrolling */}
      <div 
        className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-500 ease-in-out ${
          showHeader ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <Header className="bg-safari-dark-brown/95 backdrop-blur-sm py-4" menuElevated={true} />
      </div>
      
      {/* Hero section with panels */}
      <div className="h-screen relative overflow-hidden" ref={heroRef}>
        {/* Left sidebar */}
        <div className="w-[80px] h-full bg-black text-white flex flex-col items-center justify-between py-8 absolute left-0 top-0 z-10">
          {/* Logo */}
          <div>
            
          </div>
          
          {/* Vertical destination name */}
          <div className="flex-grow flex items-center">
            <div className="transform -rotate-90 whitespace-nowrap text-2xl font-bold tracking-wider">
              {destination.title.toUpperCase()}
            </div>
          </div>
          
          {/* Bottom text */}
          <div className="flex flex-col items-center gap-4">
            
            <div className="flex gap-2">
              
            </div>
          </div>
        </div>

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
        <div className="relative z-10 flex-1 flex h-full" style={{ marginLeft: '80px' }}>
          {panels.map((panel, index) => (
            <div 
              key={index} 
              className="flex-1 flex flex-col justify-end border-r border-gray-700 hover:bg-black hover:bg-opacity-20 transition-all duration-500" 
              onMouseEnter={() => handlePanelHover(index)} 
              onMouseLeave={handlePanelLeave}
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
      </div>
      
      {/* Content section */}
      <div className="bg-safari-cream min-h-screen">
        <div className="container mx-auto py-16 px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-safari-dark-grey">Discover {destination.title}</h2>
              <p className="text-safari-dark-grey mb-4">
                Welcome to the magnificent {destination.title}, where adventure awaits at every turn. 
                Our camps offer the perfect blend of luxury and wilderness, allowing you to experience 
                the raw beauty of Africa while enjoying world-class amenities.
              </p>
              <p className="text-safari-dark-grey mb-4">
                Each camp has its unique charm and offers different wildlife viewing opportunities. 
                Whether you're interested in big cats, elephants, or rare bird species, 
                our experienced guides will ensure you have the safari of a lifetime.
              </p>
              <button className="mt-6 bg-safari-gold hover:bg-safari-light-brown text-white py-3 px-8 transition-colors duration-300">
                Book Your Safari
              </button>
            </div>
            <div>
              <div className="rounded-lg overflow-hidden h-full">
                <img 
                  src="https://images.unsplash.com/photo-1523805009345-7448845a9e53?ixlib=rb-4.0.3" 
                  alt={`${destination.title} landscape`} 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <FooterSection />
    </div>
  );
};

export default DestinationLayout;
