import React, { useState } from 'react';
import { useParams } from "react-router-dom";
import { Header } from "@/components/Safari/Header";
import { destinationData } from "@/data/destinationData";
interface PanelData {
  title: string;
  subtitle: string;
  image: string;
}
const DestinationLayout: React.FC = () => {
  const {
    id
  } = useParams();
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
  const handlePanelHover = (index: number) => {
    setActivePanel(index);
    setBackgroundImage(panels[index].image);
  };
  const handlePanelLeave = () => {
    setActivePanel(null);
  };
  return <div className="flex h-screen w-screen overflow-hidden bg-black">
      {/* Left sidebar */}
      <div className="w-[80px] bg-black text-white flex flex-col items-center justify-between py-8">
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

      {/* Main content area with panels */}
      <div className="flex-1 flex">
        {/* Background image that changes on hover */}
        <div className="absolute inset-0 bg-cover bg-center transition-all duration-500 z-0" style={{
        backgroundImage: `url(${backgroundImage})`,
        left: '80px'
      }}>
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>

        {/* Panels */}
        <div className="relative z-10 flex-1 flex">
          {panels.map((panel, index) => <div key={index} className="flex-1 flex flex-col justify-end border-r border-gray-700 hover:bg-black hover:bg-opacity-20 transition-all duration-300" onMouseEnter={() => handlePanelHover(index)} onMouseLeave={handlePanelLeave}>
              <div className="p-6 pb-12">
                <h2 className="text-white text-2xl font-bold mb-1">{panel.title}</h2>
                <p className="text-white text-sm opacity-80">{panel.subtitle}</p>
              </div>
            </div>)}
        </div>
      </div>
    </div>;
};
export default DestinationLayout;