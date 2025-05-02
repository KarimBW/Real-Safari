
import React from 'react';

interface HeroSidebarProps {
  destinationTitle: string;
}

const HeroSidebar: React.FC<HeroSidebarProps> = ({ destinationTitle }) => {
  return (
    <div className="w-[80px] h-full bg-black text-white flex flex-col items-center justify-between py-8 absolute left-0 top-0 z-10">
      {/* Logo */}
      <div></div>
      
      {/* Vertical destination name */}
      <div className="flex-grow flex items-center">
        <div className="transform -rotate-90 whitespace-nowrap text-2xl font-bold tracking-wider">
          {destinationTitle.toUpperCase()}
        </div>
      </div>
      
      {/* Bottom text */}
      <div className="flex flex-col items-center gap-4">
        <div className="flex gap-2"></div>
      </div>
    </div>
  );
};

export default HeroSidebar;
