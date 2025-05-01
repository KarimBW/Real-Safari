
import React from "react";

interface HeroSectionProps {
  title: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ title }) => {
  return (
    <section className="relative h-screen bg-gray-100">
      <div className="absolute inset-0 bg-cover bg-center z-0" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      </div>
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-white mb-8">{title}</h1>
          <button className="border border-white text-white px-6 py-2 hover:bg-white hover:text-gray-900 transition-colors">
            BOOK NOW
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
