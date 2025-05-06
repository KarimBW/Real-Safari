
import { useState } from "react";
import { Header } from "@/components/Safari/Header";

const Plan = () => {
  const [activePanel, setActivePanel] = useState<string | null>(null);

  // Background images for panels using the uploaded images
  const guidedPanelBg = "/lovable-uploads/10876708-3c0c-40d1-9c65-dab5ff494de6.png"; // Person driving (Photo 1)
  const unguidedPanelBg = "/lovable-uploads/a02a96c4-6bb6-45d6-a50c-97f0cf620edb.png"; // Vehicle in desert (Photo 2)

  const handlePanelHover = (panel: string) => {
    setActivePanel(panel);
  };

  const handlePanelLeave = () => {
    setActivePanel(null);
  };

  const handlePanelClick = (panel: string) => {
    console.log(`${panel} clicked`);
    // We'll add navigation or other actions here later
  };

  return (
    <div className="h-screen flex">
      {/* Left sidebar */}
      <div className="w-[80px] h-full bg-black text-white flex flex-col items-center justify-between py-8 fixed left-0 top-0 z-10">
        {/* Vertical text */}
        <div className="flex-grow flex items-center">
          <div className="transform -rotate-90 whitespace-nowrap text-2xl font-bold tracking-wider">
            CHOOSE YOUR STYLE
          </div>
        </div>
      </div>

      {/* Main Content with diagonal panels */}
      <div className="flex-1 relative ml-[80px]">
        <Header />
        
        {/* Background image that changes on hover */}
        <div 
          className="absolute inset-0 bg-cover bg-center transition-all duration-700 ease-in-out z-0" 
          style={{
            backgroundImage: `url(${activePanel === 'guided' ? guidedPanelBg : activePanel === 'unguided' ? unguidedPanelBg : guidedPanelBg})`,
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>

        <div className="relative h-screen flex flex-col z-10">
          {/* Panel container */}
          <div className="flex-1 flex relative overflow-hidden">
            {/* Diagonal divider */}
            <div 
              className="absolute inset-0 z-10 pointer-events-none"
              style={{
                background: 'linear-gradient(to bottom right, transparent calc(50% - 1px), rgba(255,255,255,0.3), transparent calc(50% + 1px))'
              }}
            ></div>
            
            {/* Top-left triangular panel (guided) */}
            <div 
              className="absolute inset-0 cursor-pointer z-20"
              style={{ 
                clipPath: 'polygon(0% 0%, 100% 0%, 0% 100%)',
              }}
              onMouseEnter={() => handlePanelHover('guided')}
              onMouseLeave={handlePanelLeave}
              onClick={() => handlePanelClick('guided')}
            >
              {/* This is a transparent overlay for the clickable area */}
            </div>
            
            {/* Bottom-right triangular panel (unguided) */}
            <div 
              className="absolute inset-0 cursor-pointer z-20"
              style={{ 
                clipPath: 'polygon(100% 0%, 100% 100%, 0% 100%)',
              }}
              onMouseEnter={() => handlePanelHover('unguided')}
              onMouseLeave={handlePanelLeave}
              onClick={() => handlePanelClick('unguided')}
            >
              {/* This is a transparent overlay for the clickable area */}
            </div>
            
            {/* Panel content - guided panel */}
            <div 
              className={`absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-full transition-all duration-500 ease-in-out z-30 ${
                activePanel === 'guided' 
                  ? 'opacity-100 -translate-x-[60%]' 
                  : 'opacity-0 -translate-x-full'
              }`}
            >
              <h2 className="text-4xl font-bold text-white mb-2">Guided & Glorious</h2>
              <p className="text-xl text-white/80">Travel with a Guide</p>
            </div>
            
            {/* Panel content - unguided panel */}
            <div 
              className={`absolute top-1/2 left-1/2 transform -translate-y-1/2 translate-x-0 transition-all duration-500 ease-in-out z-30 ${
                activePanel === 'unguided' 
                  ? 'opacity-100 translate-x-[10%]' 
                  : 'opacity-0 translate-x-0'
              }`}
            >
              <h2 className="text-4xl font-bold text-white mb-2">Lone & Wild</h2>
              <p className="text-xl text-white/80">Travel without a Guide</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plan;
