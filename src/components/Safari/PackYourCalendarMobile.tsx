
import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Calendar } from "lucide-react";

interface SeasonOption {
  title: string;
  subtitle: string;
  image: string;
  period: string;
  pricing: {
    twoPersons: number;
    threePersons: number;
  };
  features: string[];
  description: string;
}

interface PackYourCalendarMobileProps {
  seasonOptions: SeasonOption[];
  scrollToSection: (index: number) => void;
}

export const PackYourCalendarMobile: React.FC<PackYourCalendarMobileProps> = ({ 
  seasonOptions, 
  scrollToSection 
}) => {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <div className="bg-black text-white p-4 text-center">
        <div className="flex items-center justify-center space-x-2">
          <Calendar className="h-6 w-6" />
          <h2 className="text-xl font-bold tracking-wider">PACK YOUR CALENDAR</h2>
        </div>
      </div>
      
      {/* Panels */}
      <div className="flex flex-col">
        {seasonOptions.map((option, index) => (
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
              <p className="text-white text-base opacity-80 mb-1">
                {option.subtitle}
              </p>
              <p className="text-white text-sm opacity-60 mb-3">
                {option.period}
              </p>
              
              <div className="flex justify-between items-center">
                <div className="text-white">
                  <p className="text-sm">From RM {option.pricing.threePersons.toLocaleString()}</p>
                  <p className="text-xs opacity-80">per person</p>
                </div>
                
                <Button 
                  variant="outline" 
                  className="bg-safari-gold border-safari-gold text-white hover:bg-safari-light-brown"
                  onClick={() => scrollToSection(index)}
                >
                  Plan Trip <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
