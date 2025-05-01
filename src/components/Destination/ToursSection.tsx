
import React from "react";
import { Tour } from "../../data/destinationData";

interface ToursSectionProps {
  tours: Tour[];
  editMode: boolean;
  onTourChange: (index: number, field: string, value: string) => void;
}

const ToursSection: React.FC<ToursSectionProps> = ({ tours, editMode, onTourChange }) => {
  return (
    <section className="py-16 px-8 md:px-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">POPULAR TOURS</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {tours.map((tour, index) => (
          <div key={index} className="mb-8">
            <div className="h-48 bg-gray-200 rounded overflow-hidden mb-4">
              <div className="h-full w-full bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-${520 + index * 10}-create-555?ixlib=rb-4.0.3')` }}>
                {editMode && <div className="h-full w-full flex items-center justify-center bg-black bg-opacity-50 text-white">Tour Photo {index + 1}</div>}
              </div>
            </div>
            <div>
              {editMode ? (
                <input
                  type="text"
                  value={tour.title}
                  onChange={(e) => onTourChange(index, 'title', e.target.value)}
                  className="font-bold block w-full border-b border-gray-300"
                />
              ) : (
                <h3 className="font-bold">{tour.title}</h3>
              )}
              <span className="text-sm text-gray-600 block mb-2">
                {editMode ? (
                  <input
                    type="text"
                    value={tour.days}
                    onChange={(e) => onTourChange(index, 'days', e.target.value)}
                    className="w-full border-b border-gray-300"
                  />
                ) : (
                  tour.days
                )}
              </span>
              {editMode ? (
                <textarea
                  value={tour.description}
                  onChange={(e) => onTourChange(index, 'description', e.target.value)}
                  className="w-full border border-gray-300 p-2 rounded mb-2"
                  rows={3}
                />
              ) : (
                <p className="mb-2">{tour.description}</p>
              )}
              <div className="flex justify-between items-center mt-2">
                {editMode ? (
                  <input
                    type="text"
                    value={tour.price}
                    onChange={(e) => onTourChange(index, 'price', e.target.value)}
                    className="w-32 border-b border-gray-300"
                  />
                ) : (
                  <span className="font-bold">{tour.price}</span>
                )}
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
