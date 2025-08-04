
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useTravelStyle } from "@/contexts/TravelStyleContext";

interface HeroSectionProps {
  title: string;
  editMode: boolean;
  onTextChange: (field: string, value: string) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ title, editMode, onTextChange }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { setBookingSelection } = useTravelStyle();

  const handleBookNow = () => {
    // Save destination to booking selection
    setBookingSelection({
      destination: id
    });
    
    // Navigate to game plan
    navigate('/game-plan');
  };
  return (
    <section className="relative h-screen bg-gray-100">
      <div className="absolute inset-0 bg-cover bg-center z-0" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      </div>
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="text-center">
          {editMode ? (
            <input
              type="text"
              value={title}
              onChange={(e) => onTextChange('title', e.target.value)}
              className="text-6xl font-bold text-white bg-transparent border-b border-white text-center mb-8"
            />
          ) : (
            <h1 className="text-6xl font-bold text-white mb-8">{title}</h1>
          )}
          <button 
            onClick={handleBookNow}
            className="border border-white text-white px-6 py-2 hover:bg-white hover:text-gray-900 transition-colors"
          >
            BOOK NOW
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
