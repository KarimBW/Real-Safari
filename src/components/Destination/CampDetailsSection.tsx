
import React, { useState, useEffect } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { campData } from '@/data/campData';

interface CampDetailsSectionProps {
  destinationId: string;
  camps: string[];
}

const CampDetailsSection: React.FC<CampDetailsSectionProps> = ({ destinationId, camps }) => {
  const [activeCampIndex, setActiveCampIndex] = useState(0);
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
  
  const goToNextCamp = () => {
    setActiveCampIndex((prevIndex) => (prevIndex + 1) % camps.length);
  };
  
  const goToPreviousCamp = () => {
    setActiveCampIndex((prevIndex) => (prevIndex - 1 + camps.length) % camps.length);
  };

  return (
    <div className="bg-safari-cream py-16 px-8">
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
          
          {/* Camp Preview Area with Carousel */}
          <div className="camp-preview relative">
            <Carousel 
              className="w-full" 
              opts={{
                loop: true,
                align: "start",
                dragFree: true,
              }}
              autoplay={{ delayInMs: 3500, direction: "forward" }}
            >
              <CarouselContent>
                {carouselImages.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="p-1">
                      <div className="overflow-hidden rounded-lg aspect-[4/3]">
                        <img 
                          src={`${image}?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`} 
                          alt={`${activeCamp} camp view ${index + 1}`} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="absolute left-4 top-1/2" />
              <CarouselNext className="absolute right-4 top-1/2" />
            </Carousel>
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
};

export default CampDetailsSection;
