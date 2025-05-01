
import React from "react";

interface DescriptionSectionProps {
  descriptionTitle: string;
  descriptionText: string[];
}

const DescriptionSection: React.FC<DescriptionSectionProps> = ({ 
  descriptionTitle, 
  descriptionText
}) => {
  return (
    <section className="py-16 px-8 md:px-16 flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 pr-0 md:pr-8 mb-8 md:mb-0">
        <div className="aspect-video bg-gray-200 rounded overflow-hidden relative">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-4.0.3')" }}></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center">
              <div className="ml-1 w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-gray-900 border-b-8 border-b-transparent"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">{descriptionTitle}</h2>
        <div className="space-y-4">
          {descriptionText.map((paragraph, index) => (
            <div key={index}>
              <p>{paragraph}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DescriptionSection;
