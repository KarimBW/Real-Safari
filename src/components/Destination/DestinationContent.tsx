
import React from 'react';
import FooterSection from "./FooterSection";

interface DestinationContentProps {
  destinationTitle: string;
}

const DestinationContent: React.FC<DestinationContentProps> = ({ destinationTitle }) => {
  return (
    <>
      <div className="bg-safari-cream min-h-screen">
        <div className="container mx-auto py-16 px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-safari-dark-grey">Discover {destinationTitle}</h2>
              <p className="text-safari-dark-grey mb-4">
                Welcome to the magnificent {destinationTitle}, where adventure awaits at every turn. 
                Our camps offer the perfect blend of luxury and wilderness, allowing you to experience 
                the raw beauty of Africa while enjoying world-class amenities.
              </p>
              <p className="text-safari-dark-grey mb-4">
                Each camp has its unique charm and offers different wildlife viewing opportunities. 
                Whether you're interested in big cats, elephants, or rare bird species, 
                our experienced guides will ensure you have the safari of a lifetime.
              </p>
              <button className="mt-6 bg-safari-gold hover:bg-safari-light-brown text-white py-3 px-8 transition-colors duration-300">
                Book Your Safari
              </button>
            </div>
            <div>
              <div className="rounded-lg overflow-hidden h-full">
                <img 
                  src="https://images.unsplash.com/photo-1523805009345-7448845a9e53?ixlib=rb-4.0.3" 
                  alt={`${destinationTitle} landscape`} 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <FooterSection />
    </>
  );
};

export default DestinationContent;
