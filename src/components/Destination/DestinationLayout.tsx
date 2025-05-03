
import React, { useState, useEffect, useRef } from 'react';
import { useParams } from "react-router-dom";
import { Header } from "@/components/Safari/Header";
import { destinationData } from "@/data/destinationData";
import FooterSection from "./FooterSection";
import CampDetailsSection from "./CampDetailsSection";

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
    camps = ['Makgadikgadi', 'Nxai Pan', 'Nata', 'Kubu Island', 'Khama Rhino'];
  } else if (id === 'kalahari') {
    camps = ['CKGR', 'Khutse', 'Ghanzi', 'Mabuasehube', 'Kgalagadi'];
  } else {
    camps = ['Moremi', 'Chobe', 'Maun', 'Khwai', 'Savuti'];
  }

  // Panel data with wildlife images for camps
  const getPanelImages = () => {
    if (id === 'okavango') {
      return [
        {
          title: camps[0], // Moremi
          subtitle: "Leopard territory",
          image: "/lovable-uploads/c49f95ad-a567-416a-b70c-bef52f68f29a.png" // Leopard image
        }, {
          title: camps[1], // Chobe
          subtitle: "Giraffe sanctuary",
          image: "/lovable-uploads/8a3c95d1-48d1-4c2c-b36c-d8accf95133d.png" // Giraffes image
        }, {
          title: camps[2], // Maun
          subtitle: "Delta views",
          image: "/lovable-uploads/59f35e67-5f3a-4177-b4a1-53e4389fee2d.png" // Delta image
        }, {
          title: camps[3], // Khwai
          subtitle: "Wild dog haven",
          image: "/lovable-uploads/5c9ac31f-a57c-43ee-adb0-a97c4ededc98.png" // Wild dog image
        }, {
          title: camps[4], // Savuti
          subtitle: "Elephant paradise",
          image: "/lovable-uploads/13144fc7-d253-4fd1-997d-96c622d2754d.png" // Elephant image
        }
      ];
    } else if (id === 'kalahari') {
      return [
        {
          title: camps[0], // CKGR
          subtitle: "Zebra gatherings",
          image: "/lovable-uploads/a79c2903-be2b-4134-acd5-2baba07a13ab.png" // CKGR image - Zebras
        }, {
          title: camps[1], // Khutse
          subtitle: "Ostrich territory",
          image: "/lovable-uploads/02233ed5-a1fa-40fd-a777-8e843f957aa6.png" // Khutse image - Ostrich
        }, {
          title: camps[2], // Ghanzi
          subtitle: "Cultural experience",
          image: "/lovable-uploads/06030a97-1c87-470f-9e72-3e4704564718.png" // Ghanzi image - People
        }, {
          title: camps[3], // Mabuasehube
          subtitle: "Cheetah country",
          image: "/lovable-uploads/09a00f34-b704-4711-88f5-929dbe49f205.png" // Mabuasehube image - Updated Cheetah
        }, {
          title: camps[4], // Kgalagadi
          subtitle: "Oryx plains",
          image: "/lovable-uploads/edda0aaf-7b54-41c7-afa2-5414f567fdf2.png" // Kgalagadi image - Updated Oryx
        }
      ];
    } else if (id === 'makgadikgadi') {
      // Updated Makgadikgadi camps with new order and images
      return [{
        title: camps[0], // Makgadikgadi
        subtitle: "Elephant territory",
        image: "/lovable-uploads/a25ce305-a695-4546-9fae-b8fdc60cc4d9.png" // New elephant image
      }, {
        title: camps[1], // Nxai Pan
        subtitle: "Lion pride",
        image: "/lovable-uploads/d02c9222-8e68-4653-b5ca-528385d274b4.png" // New lion image
      }, {
        title: camps[2], // Nata
        subtitle: "Flamingo gatherings",
        image: "/lovable-uploads/52fba817-468b-49a9-827a-bb36b663d4b6.png" // Flamingo image
      }, {
        title: camps[3], // Kubu Island
        subtitle: "Ancient baobabs",
        image: "/lovable-uploads/262d126c-8864-467a-a4dc-fa9033a12dc2.png" // Baobab image
      }, {
        title: camps[4], // Khama Rhino
        subtitle: "Rhino sanctuary",
        image: "/lovable-uploads/091c1771-3e0c-47e3-ada4-5db9eedcd4bb.png" // Rhino image
      }];
    } else {
      // Default images for other destinations
      return [{
        title: camps[0],
        subtitle: "Salt flat expanses",
        image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3"
      }, {
        title: camps[1],
        subtitle: "Baobab landscapes",
        image: "https://images.unsplash.com/photo-1504193902866-31d5d1c28ca9?ixlib=rb-4.0.3"
      }, {
        title: camps[2],
        subtitle: "Sunset vistas",
        image: "https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?ixlib=rb-4.0.3"
      }, {
        title: camps[3],
        subtitle: "Starlit skies",
        image: "https://images.unsplash.com/photo-1507272931001-fc06c17e4f43?ixlib=rb-4.0.3"
      }, {
        title: camps[4],
        subtitle: "Flamingo gatherings",
        image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3"
      }];
    }
  };
  
  const panels: PanelData[] = getPanelImages();
  
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
    const updatedPanels = getPanelImages();
    setBackgroundImage(updatedPanels[0].image);
  }, [id]);
  
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
      
      {/* Camp Details Section - New component */}
      <CampDetailsSection destinationId={id || 'okavango'} camps={camps} />
      
      {/* Footer */}
      <FooterSection />
    </div>
  );
};

export default DestinationLayout;
