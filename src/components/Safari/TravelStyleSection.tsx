
import React from 'react';
import { Button } from "@/components/ui/button";
import { Users, MapPin, Star } from "lucide-react";

export type TravelStyle = 'guided' | 'solo';

interface TravelStyleSectionProps {
  selectedStyle: TravelStyle;
  onStyleChange: (style: TravelStyle) => void;
}

export const TravelStyleSection: React.FC<TravelStyleSectionProps> = ({ 
  selectedStyle, 
  onStyleChange 
}) => {
  const styles = [
    {
      id: 'guided' as TravelStyle,
      name: 'Guided & Glorious',
      description: 'Expert storytelling and seamless adventure',
      fee: 1500,
      features: [
        'Expert local guide',
        'Rich storytelling & insights',
        'Hassle-free experience',
        'Enhanced safety'
      ],
      icon: Users,
      image: '/lovable-uploads/be7118a7-97ba-4213-8b48-cb5810666f96.png'
    },
    {
      id: 'solo' as TravelStyle,
      name: 'Lone & Wild',
      description: 'Pure wilderness adventure at your own pace',
      fee: 0,
      features: [
        'Complete independence',
        'Self-guided exploration',
        'Flexible itinerary',
        'Raw wilderness experience'
      ],
      icon: MapPin,
      image: '/lovable-uploads/dc4b122a-37bd-449b-8540-8e783ee9b508.png'
    }
  ];

  return (
    <div className="bg-safari-cream py-16 px-4 md:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-safari-dark-grey mb-4">Your Travel Style</h2>
          <p className="text-lg text-safari-dark-grey">Choose how you want to experience Botswana</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {styles.map((style) => {
            const IconComponent = style.icon;
            const isSelected = selectedStyle === style.id;
            
            return (
              <div
                key={style.id}
                className={`relative rounded-xl overflow-hidden cursor-pointer transition-all duration-300 transform hover:scale-105 ${
                  isSelected 
                    ? 'ring-4 ring-safari-gold shadow-2xl' 
                    : 'shadow-lg hover:shadow-xl'
                }`}
                onClick={() => onStyleChange(style.id)}
              >
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${style.image})` }}
                />
                
                {/* Overlay */}
                <div className={`absolute inset-0 transition-all duration-300 ${
                  isSelected ? 'bg-black bg-opacity-30' : 'bg-black bg-opacity-50'
                }`} />
                
                {/* Content */}
                <div className="relative p-8 text-white min-h-[400px] flex flex-col">
                  {/* Selected Badge */}
                  {isSelected && (
                    <div className="absolute top-4 right-4 bg-safari-gold text-white px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                      <Star className="h-4 w-4" />
                      <span>Selected</span>
                    </div>
                  )}
                  
                  {/* Header */}
                  <div className="flex items-center space-x-3 mb-4">
                    <IconComponent className="h-8 w-8 text-safari-gold" />
                    <h3 className="text-2xl font-bold">{style.name}</h3>
                  </div>
                  
                  <p className="text-lg mb-6 opacity-90">{style.description}</p>
                  
                  {/* Features */}
                  <div className="flex-grow mb-6">
                    <h4 className="text-sm font-semibold mb-3 text-safari-gold">INCLUDES:</h4>
                    <ul className="space-y-2">
                      {style.features.map((feature, index) => (
                        <li key={index} className="text-sm opacity-90">
                          • {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Pricing */}
                  <div className="border-t border-white border-opacity-30 pt-4">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-sm opacity-80">Additional Fee:</span>
                      <span className="text-xl font-bold text-safari-gold">
                        {style.fee > 0 ? `+RM ${style.fee.toLocaleString()}` : 'FREE'}
                      </span>
                    </div>
                    
                    <Button 
                      variant={isSelected ? "default" : "outline"}
                      className={`w-full ${
                        isSelected 
                          ? 'bg-safari-gold hover:bg-safari-light-brown text-white' 
                          : 'bg-transparent border-white text-white hover:bg-white hover:text-safari-dark-grey'
                      }`}
                    >
                      {isSelected ? 'Currently Selected' : 'Select This Style'}
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
