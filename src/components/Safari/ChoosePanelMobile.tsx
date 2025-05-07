
import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

interface StyleOption {
  title: string;
  subtitle: string;
  image: string;
  content: {
    title: string;
    subtitle: string;
    description: string;
    features: string[];
    perfectFor: string[];
  };
}

interface ChoosePanelMobileProps {
  styleOptions: StyleOption[];
  scrollToSection: (index: number) => void;
}

export const ChoosePanelMobile: React.FC<ChoosePanelMobileProps> = ({ 
  styleOptions, 
  scrollToSection 
}) => {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <div className="bg-black text-white p-4 text-center">
        <h2 className="text-xl font-bold tracking-wider">CHOOSE YOUR STYLE</h2>
      </div>
      
      {/* Panels */}
      <div className="flex flex-col">
        {styleOptions.map((option, index) => (
          <div 
            key={index}
            className="relative h-[45vh] overflow-hidden"
            onClick={() => scrollToSection(index)}
          >
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${option.image})` }}
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-40" />
            
            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
              <h2 className="text-white text-3xl font-bold mb-1">
                {option.title}
              </h2>
              <p className="text-white text-base opacity-80">
                {option.subtitle}
              </p>
              
              <div className="mt-4">
                <Button 
                  variant="outline" 
                  className="bg-safari-gold border-safari-gold text-white hover:bg-safari-light-brown"
                  onClick={() => scrollToSection(index)}
                >
                  Discover More <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
