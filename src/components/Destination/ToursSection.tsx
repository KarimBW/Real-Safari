
import React from "react";
import { Tour } from "../../data/destinationData";

interface ToursSectionProps {
  tours: Tour[];
}

const ToursSection: React.FC<ToursSectionProps> = ({ tours }) => {
  return (
    <section className="py-16 px-8 md:px-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">POPULAR TOURS</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {tours.map((tour, index) => (
          <div key={index} className="mb-8">
            <div className="h-48 bg-gray-200 rounded overflow-hidden mb-4">
              <div className="h-full w-full bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-${520 + index * 10}-create-555?ixlib=rb-4.0.3')` }}></div>
            </div>
            <div>
              <h3 className="font-bold">{tour.title}</h3>
              <span className="text-sm text-gray-600 block mb-2">{tour.days}</span>
              <p className="mb-2">{tour.description}</p>
              <div className="flex justify-between items-center mt-2">
                <span className="font-bold">{tour.price}</span>
                <button className="text-sm border border-gray-900 px-3 py-1 hover:bg-gray-900 hover:text-white transition-colors">
                  VIEW TOUR →
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ToursSection;
