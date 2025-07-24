
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
    <div className="mb-8">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-safari-dark-grey mb-2">Your Travel Style</h3>
        <p className="text-safari-dark-grey">Choose how you want to experience Botswana</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {styles.map((style) => {
          const IconComponent = style.icon;
          const isSelected = selectedStyle === style.id;
          
          return (
            <div
              key={style.id}
              className={`relative rounded-lg overflow-hidden cursor-pointer transition-all duration-300 transform hover:scale-105 ${
                isSelected 
                  ? 'ring-2 ring-safari-gold shadow-lg' 
                  : 'shadow hover:shadow-md'
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
              <div className="relative p-4 text-white min-h-[200px] flex flex-col">
                {/* Selected Badge */}
                {isSelected && (
                  <div className="absolute top-2 right-2 bg-safari-gold text-white px-2 py-1 rounded-full text-xs font-medium flex items-center space-x-1">
                    <Star className="h-3 w-3" />
                    <span>Selected</span>
                  </div>
                )}
                
                {/* Header */}
                <div className="flex items-center space-x-2 mb-3">
                  <IconComponent className="h-6 w-6 text-safari-gold" />
                  <h4 className="text-lg font-bold">{style.name}</h4>
                </div>
                
                <p className="text-sm mb-4 opacity-90 flex-grow">{style.description}</p>
                
                {/* Pricing */}
                <div className="border-t border-white border-opacity-30 pt-3">
                  <div className="flex justify-between items-center">
                    <span className="text-xs opacity-80">Additional Fee:</span>
                    <span className="text-lg font-bold text-safari-gold">
                      {style.fee > 0 ? `+RM ${style.fee.toLocaleString()}` : 'FREE'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
