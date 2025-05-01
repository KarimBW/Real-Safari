
import React from "react";

const ReviewsSection: React.FC = () => {
  return (
    <section className="py-16 px-8 md:px-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">REVIEWS</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-6 border rounded">
          <div className="flex items-center mb-4">
            <div className="w-16 h-16 rounded-full bg-gray-200 overflow-hidden mr-4">
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3" alt="Reviewer" className="w-full h-full object-cover" />
            </div>
            <div>
              <h3 className="font-bold">SAFARI TOUR</h3>
              <div className="flex text-yellow-400">
                ★★★★★
              </div>
            </div>
          </div>
          <p className="mb-4">"The experience was amazing! Our guide knew exactly where to take us to see the animals. We had an incredible time!"</p>
          <div className="flex justify-between text-sm text-gray-600">
            <span>Mary K.</span>
            <span>05/08/2023</span>
          </div>
        </div>
        
        <div className="p-6 border rounded">
          <div className="flex items-center mb-4">
            <div className="w-16 h-16 rounded-full bg-gray-200 overflow-hidden mr-4">
              <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3" alt="Reviewer" className="w-full h-full object-cover" />
            </div>
            <div>
              <h3 className="font-bold">WILDLIFE TOUR</h3>
              <div className="flex text-yellow-400">
                ★★★★★
              </div>
            </div>
          </div>
          <p className="mb-4">"We saw incredible wildlife on this tour! The accommodations were perfect and we enjoyed every minute of our safari adventure."</p>
          <div className="flex justify-between text-sm text-gray-600">
            <span>Lisa C.</span>
            <span>09/25/2023</span>
          </div>
        </div>
        
        <div className="p-6 border rounded">
          <div className="flex items-center mb-4">
            <div className="w-16 h-16 rounded-full bg-gray-200 overflow-hidden mr-4">
              <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3" alt="Reviewer" className="w-full h-full object-cover" />
            </div>
            <div>
              <h3 className="font-bold">LUXURY SAFARI TOUR</h3>
              <div className="flex text-yellow-400">
                ★★★★★
              </div>
            </div>
          </div>
          <p className="mb-4">"The luxury safari exceeded all expectations. The guides were knowledgeable and passionate. A once-in-a-lifetime experience!"</p>
          <div className="flex justify-between text-sm text-gray-600">
            <span>Alexander H.</span>
            <span>11/12/2023</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
