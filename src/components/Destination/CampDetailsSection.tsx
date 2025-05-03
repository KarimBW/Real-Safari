
import React, { useState, useEffect, forwardRef } from 'react';
import { ArrowLeft, ArrowRight } from "lucide-react";
import { campData } from '@/data/campData';

interface CampDetailsSectionProps {
  destinationId: string;
  camps: string[];
  activeCampIndex?: number;
  setActiveCampIndex?: (index: number) => void;
}

const CampDetailsSection = forwardRef<HTMLDivElement, CampDetailsSectionProps>(({ 
  destinationId, 
  camps, 
  activeCampIndex: propActiveCampIndex, 
  setActiveCampIndex: propSetActiveCampIndex 
}, ref) => {
  const [internalActiveCampIndex, setInternalActiveCampIndex] = useState(0);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  
  // Use either the prop or internal state
  const activeCampIndex = propActiveCampIndex !== undefined ? propActiveCampIndex : internalActiveCampIndex;
  const setActiveCampIndex = propSetActiveCampIndex || setInternalActiveCampIndex;
  
  const activeCamp = camps[activeCampIndex];
  const campInfo = campData[destinationId]?.[activeCamp.toLowerCase()] || 
    { description: "Information about this camp is coming soon!", features: ["Wildlife viewing", "Guided safaris", "Stargazing"] };
  
  // Images for the carousel - placeholder implementation
  const getCarouselImages = (destinationId: string, camp: string) => {
    // In a real implementation, these would come from a proper data source
    const basePlaceholders = [
      "https://images.unsplash.com/photo-1472396961693-142e6e269027",
      "https://images.unsplash.com/photo-1466721591366-2d5fba72006d",
      "https://images.unsplash.com/photo-1493962853295-0fd70327578a"
    ];
    
    return basePlaceholders;
  };

  const carouselImages = getCarouselImages(destinationId, activeCamp);
  
  // Auto-rotate functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImageIndex(prevIndex => (prevIndex + 1) % carouselImages.length);
    }, 3500);
    
    return () => clearInterval(interval);
  }, [carouselImages.length]);
  
  const goToNextCamp = () => {
    setActiveCampIndex((prevIndex) => (prevIndex + 1) % camps.length);
    setActiveImageIndex(0); // Reset image index when changing camps
  };
  
  const goToPreviousCamp = () => {
    setActiveCampIndex((prevIndex) => (prevIndex - 1 + camps.length) % camps.length);
    setActiveImageIndex(0); // Reset image index when changing camps
  };
  
  const goToImage = (index: number) => {
    setActiveImageIndex(index);
  };

  return (
    <div ref={ref} className="bg-safari-cream py-16 px-8" id="camp-details-section">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Camp Info Area */}
          <div className="camp-info space-y-6">
            <h2 className="text-4xl font-bold text-safari-dark-grey">{activeCamp} Camp</h2>
            <p className="text-safari-dark-grey leading-relaxed">
              {campInfo.description}
            </p>
            
            <div className="mt-6 space-y-4">
              <h3 className="text-xl font-semibold text-safari-dark-grey">Camp Features:</h3>
              <ul className="list-disc pl-5 space-y-2">
                {campInfo.features.map((feature, index) => (
                  <li key={index} className="text-safari-dark-grey">{feature}</li>
                ))}
              </ul>
            </div>
            
            <div className="mt-8">
              <button className="bg-safari-gold hover:bg-safari-light-brown text-white py-3 px-8 transition-colors duration-300">
                Book This Camp
              </button>
            </div>
          </div>
          
          {/* Camp Preview Area with Overlapping Images Carousel */}
          <div className="camp-preview relative h-[400px]">
            {/* Overlapping images carousel */}
            <div className="relative w-full h-full">
              {carouselImages.map((image, index) => {
                // Calculate z-index and position for overlapping effect
                const isActive = index === activeImageIndex;
                const zIndex = isActive ? 30 : 10 - index;
                const translateX = isActive ? '0' : `${(index - activeImageIndex) * 40}px`;
                const opacity = isActive ? 1 : 0.7;
                const scale = isActive ? 1 : 0.9;
                
                return (
                  <div 
                    key={index}
                    className="absolute transition-all duration-500 ease-in-out rounded-lg overflow-hidden shadow-xl"
                    style={{ 
                      zIndex,
                      transform: `translateX(${translateX}) scale(${scale})`,
                      opacity,
                      width: '90%',
                      height: '90%',
                      top: '5%',
                      left: isActive ? '5%' : `${5 + (index - activeImageIndex) * 2}%`
                    }}
                  >
                    <img 
                      src={`${image}?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`}
                      alt={`${activeCamp} camp view ${index + 1}`}
                      className="w-full h-full object-cover rounded-lg"
                    />
                    
                    {/* Image number indicator */}
                    <div className="absolute bottom-4 right-4 bg-black bg-opacity-50 text-white py-1 px-3 rounded-full text-sm">
                      {index + 1} / {carouselImages.length}
                    </div>
                  </div>
                );
              })}
              
              {/* Navigation dots */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-40">
                {carouselImages.map((_, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === activeImageIndex ? 'bg-white scale-125' : 'bg-white bg-opacity-50'
                    }`}
                    onClick={() => goToImage(index)}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Camp Navigation */}
        <div className="mt-16 flex justify-center gap-8">
          <button 
            onClick={goToPreviousCamp} 
            className="flex items-center gap-2 text-safari-dark-grey hover:text-safari-gold transition-colors"
          >
            <ArrowLeft size={24} />
            <span>Previous Camp</span>
          </button>
          <button 
            onClick={goToNextCamp} 
            className="flex items-center gap-2 text-safari-dark-grey hover:text-safari-gold transition-colors"
          >
            <span>Next Camp</span>
            <ArrowRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
});

CampDetailsSection.displayName = "CampDetailsSection";

export default CampDetailsSection;
