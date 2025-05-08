
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { destinationData } from "@/data/destinationData";

interface PanelData {
  title: string;
  subtitle: string;
  image: string;
}

interface DestinationMobileLayoutProps {
  panels: PanelData[];
  onPanelClick: (index: number) => void;
}

export const DestinationMobileLayout: React.FC<DestinationMobileLayoutProps> = ({
  panels,
  onPanelClick
}) => {
  const [activePanel, setActivePanel] = useState<number | null>(null);
  
  const handlePanelClick = (index: number) => {
    setActivePanel(index);
    onPanelClick(index);
  };
  
  return (
    <div className="flex flex-col w-full">
      {/* Panels */}
      <div className="flex flex-col">
        {panels.map((panel, index) => (
          <div 
            key={index}
            className="relative h-[35vh] overflow-hidden border-b border-gray-700"
            onClick={() => handlePanelClick(index)}
          >
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${panel.image})` }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            </div>
            
            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-end p-4">
              <h2 className="text-white text-2xl font-bold mb-1">
                {panel.title}
              </h2>
              <p className="text-white text-sm opacity-80">
                {panel.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
