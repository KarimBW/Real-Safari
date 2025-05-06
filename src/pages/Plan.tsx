import React from "react";
import { Header } from "@/components/Safari/Header";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card } from "@/components/ui/card";

const Plan = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <div className="relative h-screen">
        <div className="absolute inset-0">
          <img 
            src="/lovable-uploads/6b012c0a-b276-4f95-9829-740876cbf1a2.png" 
            alt="Safari landscape" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        
        <Header />
        
        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-6 md:px-12 lg:px-24">
            <div className="max-w-3xl">
              <h2 className="text-2xl font-light text-white mb-2">IT'S TIME TO</h2>
              <h1 className="text-6xl md:text-7xl font-cinzel font-semibold text-white mb-6">
                SAFARI ADVENTURES
              </h1>
              <p className="text-lg text-white mb-8 max-w-2xl">
                Choose new adventures, mystical experiences and relaxing safaris. 
                You need to visit Botswana. We make sure that you'll get an experience you'll never forget.
              </p>
              <Button 
                variant="outline" 
                className="rounded-full border-white text-white hover:bg-white hover:text-safari-dark-grey px-8 py-6 h-auto"
              >
                OUR OFFERS
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* A Place To Be Section */}
      <div className="bg-gray-100">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row">
            {/* Image */}
            <div className="w-full md:w-1/2">
              <div className="h-full">
                <img 
                  src="/lovable-uploads/8a3c95d1-48d1-4c2c-b36c-d8accf95133d.png" 
                  alt="Safari temple" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Content */}
            <div className="w-full md:w-1/2 p-12 md:p-24 flex flex-col justify-center">
              <h2 className="text-4xl font-cinzel text-safari-dark-grey mb-8">
                A PLACE TO BE
              </h2>
              <p className="text-safari-dark-grey mb-6">
                It's no coincidence that Botswana is one of the top safari destinations 
                for the discerning traveler. The breathtaking natural landscapes, 
                endless savannas, and peaceful lands make Botswana a place for everyone.
              </p>
              <p className="text-safari-dark-grey mb-8">
                We know that safari trips are filled with emotions. That's why we focus on creating 
                what you need to plan a lasting journey with peace of mind. We are here to give you 
                exactly the safari adventure you dream to see.
              </p>
              <Button 
                variant="outline" 
                className="rounded-full border-safari-dark-grey text-safari-dark-grey hover:bg-safari-dark-grey hover:text-white self-start"
              >
                LEARN MORE
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* In Love With Safari Section */}
      <div className="bg-safari-dark-grey text-white">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row">
            {/* Content */}
            <div className="w-full md:w-1/2 p-12 md:p-24 flex flex-col justify-center">
              <h2 className="text-4xl font-cinzel text-white mb-8">
                IN LOVE<br />WITH SAFARI
              </h2>
              <p className="text-white mb-6">
                We are a couple of safari enthusiasts who explore the globe. The safaris 
                of Africa have always taken our hearts. Sharing our passion with others, we 
                know that our journeys will create memories that last a lifetime.
              </p>
              <p className="text-white mb-6">
                It's true when they witness the fully majestical herds in their own spaces, 
                watching the animal behavior. Safari moments define what we've loved 
                and cherished in our hearts all these years.
              </p>
            </div>
            
            {/* Image */}
            <div className="w-full md:w-1/2">
              <div className="h-full">
                <img 
                  src="/lovable-uploads/16aba57c-38a1-4e65-91fe-9c9300bdb5ab.png" 
                  alt="Safari waterfall" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* License to Live Section - Moved to bottom */}
      <div className="py-20 px-6 md:px-12 lg:px-24 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-4xl font-cinzel text-safari-dark-grey text-center mb-16">
            LICENCE TO EXPLORE
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Adventure Card */}
            <div className="flex flex-col items-center">
              <div className="w-full mb-6">
                <AspectRatio ratio={1 / 1} className="bg-gray-200 rounded-lg overflow-hidden">
                  <img 
                    src="/lovable-uploads/c574e67a-51c3-442e-b68e-89788ccfb439.png" 
                    alt="Adventure" 
                    className="w-full h-full object-cover"
                  />
                </AspectRatio>
              </div>
              <h3 className="text-xl font-cinzel text-safari-dark-grey uppercase mb-4">
                ADVENTURE
              </h3>
              <Button 
                variant="outline" 
                className="rounded-full border-safari-dark-grey text-safari-dark-grey hover:bg-safari-dark-grey hover:text-white"
              >
                EXPLORE SAFARI
              </Button>
            </div>

            {/* Culture Card */}
            <div className="flex flex-col items-center">
              <div className="w-full mb-6">
                <AspectRatio ratio={1 / 1} className="bg-gray-200 rounded-lg overflow-hidden">
                  <img 
                    src="/lovable-uploads/44660527-d212-4dc7-a061-b9879acf0e93.png" 
                    alt="Culture" 
                    className="w-full h-full object-cover"
                  />
                </AspectRatio>
              </div>
              <h3 className="text-xl font-cinzel text-safari-dark-grey uppercase mb-4">
                CULTURE
              </h3>
              <Button 
                variant="outline" 
                className="rounded-full border-safari-dark-grey text-safari-dark-grey hover:bg-safari-dark-grey hover:text-white"
              >
                UNDERSTAND SAFARI
              </Button>
            </div>

            {/* Relaxation Card */}
            <div className="flex flex-col items-center">
              <div className="w-full mb-6">
                <AspectRatio ratio={1 / 1} className="bg-gray-200 rounded-lg overflow-hidden">
                  <img 
                    src="/lovable-uploads/09a00f34-b704-4711-88f5-929dbe49f205.png" 
                    alt="Relaxation" 
                    className="w-full h-full object-cover"
                  />
                </AspectRatio>
              </div>
              <h3 className="text-xl font-cinzel text-safari-dark-grey uppercase mb-4">
                RELAXATION
              </h3>
              <Button 
                variant="outline" 
                className="rounded-full border-safari-dark-grey text-safari-dark-grey hover:bg-safari-dark-grey hover:text-white"
              >
                RELAX IN SAFARI
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plan;
