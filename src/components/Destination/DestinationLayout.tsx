
import React, { useState, useEffect } from 'react';
import { useParams, Link } from "react-router-dom";
import { Header } from "@/components/Safari/Header";
import { destinationData } from "@/data/destinationData";
import FooterSection from "./FooterSection";
import { ScrollArea } from "@/components/ui/scroll-area";

interface PanelData {
  title: string;
  subtitle: string;
  image: string;
}

const DestinationLayout: React.FC = () => {
  const { id } = useParams();
  const destination = destinationData[id as keyof typeof destinationData] || destinationData.okavango;
  const [showHeader, setShowHeader] = useState(false);
  const [activePanel, setActivePanel] = useState<number | null>(null);

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
  const panels: PanelData[] = [
    {
      title: camps[0],
      subtitle: "My life in images",
      image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3"
    },
    {
      title: camps[1],
      subtitle: "All about me",
      image: "https://images.unsplash.com/photo-1504193902866-31d5d1c28ca9?ixlib=rb-4.0.3"
    },
    {
      title: camps[2],
      subtitle: "Quoting what I've learnt",
      image: "https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?ixlib=rb-4.0.3"
    },
    {
      title: camps[3],
      subtitle: "You and I",
      image: "https://images.unsplash.com/photo-1507272931001-fc06c17e4f43?ixlib=rb-4.0.3"
    },
    {
      title: camps[4],
      subtitle: "Official shop",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3"
    }
  ];

  const [backgroundImage, setBackgroundImage] = useState<string>(panels[0].image);

  useEffect(() => {
    const handleScroll = () => {
      // Show header when scrolled down past the panel section (adjust threshold as needed)
      const scrollThreshold = window.innerHeight * 0.8;
      setShowHeader(window.scrollY > scrollThreshold);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handlePanelHover = (index: number) => {
    setActivePanel(index);
    setBackgroundImage(panels[index].image);
  };

  const handlePanelLeave = () => {
    setActivePanel(null);
  };

  return (
    <ScrollArea className="h-screen w-screen">
      <div className="flex min-h-screen">
        {/* Header that appears on scroll */}
        <div className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${showHeader ? 'translate-y-0' : '-translate-y-full'}`}>
          <Header />
        </div>

        {/* Left sidebar */}
        <div className="w-[80px] bg-black text-white flex flex-col items-center justify-between py-8 fixed h-screen z-40">
          {/* Logo */}
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-10">
            <Link to="/">
              <img 
                src="/lovable-uploads/32f6cd57-ea89-4604-8818-e71fa6f7bf9d.png" 
                alt="Real Safari Logo" 
                className="w-[75px] h-auto"
              />
            </Link>
          </div>
          
          {/* Vertical destination name */}
          <div className="flex-grow flex items-center">
            <div className="transform -rotate-90 whitespace-nowrap text-2xl font-bold tracking-wider">
              {destination.title.toUpperCase()}
            </div>
          </div>
        </div>

        {/* Main content area with panels */}
        <div className="flex-1 flex ml-[80px]">
          {/* Background image that changes on hover */}
          <div 
            className="fixed inset-0 bg-cover bg-center transition-all duration-700 ease-in-out z-0 ml-[80px]" 
            style={{ backgroundImage: `url(${backgroundImage})` }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          </div>

          {/* Panels */}
          <div className="relative z-10 flex-1 flex h-screen overflow-hidden">
            {panels.map((panel, index) => (
              <div 
                key={index} 
                className="flex-1 flex flex-col justify-end border-r border-gray-700 hover:bg-black hover:bg-opacity-20 transition-all duration-300" 
                onMouseEnter={() => handlePanelHover(index)} 
                onMouseLeave={handlePanelLeave}
              >
                <div className="p-6 pb-12 transition-all duration-300 ease-in-out" style={{
                  transform: activePanel === index ? 'translateY(-40px)' : 'translateY(0)'
                }}>
                  <h2 className={`text-2xl font-bold mb-1 transition-colors duration-300 ${activePanel === index ? 'text-safari-gold' : 'text-white'}`}>
                    {panel.title}
                  </h2>
                  <p className="text-white text-sm opacity-80">{panel.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional content below panels */}
        <div className="w-full mt-screen bg-white">
          {/* Placeholder content sections - would be replaced with actual content */}
          <div className="p-16 bg-safari-cream">
            <h2 className="text-4xl font-bold mb-6 text-safari-dark-grey">{destination.title} Experience</h2>
            <p className="text-lg max-w-3xl">
              Step into the untamed wilderness of {destination.title}, where adventure awaits at every turn. 
              Our camps offer unparalleled access to the region's most spectacular landscapes and wildlife.
            </p>
          </div>
          
          {/* Camp descriptions section */}
          <div className="bg-white py-16">
            <div className="container mx-auto px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {camps.slice(0, 3).map((camp, index) => (
                  <div key={index} className="bg-safari-cream bg-opacity-30 p-8 rounded-lg">
                    <h3 className="text-2xl font-bold mb-3 text-safari-dark-grey">{camp}</h3>
                    <p className="mb-4">
                      Ever wondered what it's like to wake up to the sound of nature's alarm clock? 
                      At {camp}, that's just a regular Tuesday. Our luxury tents might make you forget 
                      you're in the wilderness, but the local wildlife will quickly remind you!
                    </p>
                    <a href="#" className="text-safari-gold hover:text-safari-light-brown font-medium">
                      Discover more →
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Footer section */}
          <FooterSection />
        </div>
      </div>
    </ScrollArea>
  );
};

export default DestinationLayout;
