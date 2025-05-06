
import { useState } from "react";
import { Header } from "@/components/Safari/Header";

const Plan = () => {
  const [activePanel, setActivePanel] = useState<string | null>(null);
  
  return (
    <div className="h-screen flex">
      {/* Left sidebar */}
      <div className="w-[80px] h-full bg-black text-white flex flex-col items-center justify-between py-8 z-10">
        {/* Vertical text */}
        <div className="flex-grow flex items-center">
          <div className="transform -rotate-90 whitespace-nowrap text-2xl font-bold tracking-wider">
            CHOOSE YOUR STYLE
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="flex-1 relative">
        <Header />
        
        {/* Background images that change on hover */}
        <div 
          className={`absolute inset-0 bg-cover bg-center transition-all duration-700 ease-in-out z-0 ${
            activePanel === "guided" ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(/lovable-uploads/c93ccf5a-3f2a-4d60-abef-f2ecc4b333cf.png)`,
            left: '80px'
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        
        <div 
          className={`absolute inset-0 bg-cover bg-center transition-all duration-700 ease-in-out z-0 ${
            activePanel === "unguided" ? "opacity-100" : activePanel === null ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(/lovable-uploads/bde8de13-3929-41b5-b056-9726f95358ff.png)`,
            left: '80px'
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        
        {/* Diagonal panels container */}
        <div className="absolute inset-0 left-[80px] flex" style={{ zIndex: 1 }}>
          {/* Guided panel (top-left triangle) */}
          <div 
            id="guided_panel"
            className="absolute inset-0 cursor-pointer overflow-hidden"
            onMouseEnter={() => setActivePanel("guided")}
            onMouseLeave={() => setActivePanel(null)}
            onClick={() => console.log("Guided Safari clicked")}
          >
            {/* Clip-path creates the diagonal triangle */}
            <div className="relative h-full w-full" style={{ clipPath: 'polygon(0 0, 100% 0, 0 100%)' }}>
              <div className="absolute inset-0 hover:bg-black hover:bg-opacity-20 transition-all duration-500">
                {/* Panel content - positioned for the animation effect */}
                <div 
                  className={`absolute top-1/2 left-[30%] transform -translate-y-1/2 transition-all duration-500 ${
                    activePanel === "guided" 
                      ? "translate-x-0 opacity-100" 
                      : "-translate-x-16 opacity-0"
                  }`}
                >
                  <h2 className="text-white text-4xl md:text-5xl font-bold mb-2">Guided & Glorious</h2>
                  <p className="text-white text-xl opacity-80">Travel with a Guide</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Unguided panel (bottom-right triangle) */}
          <div 
            id="unguided_panel"
            className="absolute inset-0 cursor-pointer overflow-hidden"
            onMouseEnter={() => setActivePanel("unguided")}
            onMouseLeave={() => setActivePanel(null)}
            onClick={() => console.log("Self-Guided Safari clicked")}
          >
            {/* Clip-path creates the diagonal triangle */}
            <div className="relative h-full w-full" style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 100%)' }}>
              <div className="absolute inset-0 hover:bg-black hover:bg-opacity-20 transition-all duration-500">
                {/* Panel content - positioned for the animation effect */}
                <div 
                  className={`absolute top-1/2 right-[30%] transform -translate-y-1/2 transition-all duration-500 ${
                    activePanel === "unguided" 
                      ? "translate-x-0 opacity-100" 
                      : "translate-x-16 opacity-0"
                  }`}
                >
                  <h2 className="text-white text-4xl md:text-5xl font-bold mb-2">Lone & Wild</h2>
                  <p className="text-white text-xl opacity-80">Travel without a Guide</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Dividing line */}
          <div 
            className="absolute h-[142%] w-0.5 bg-white bg-opacity-40 z-10 pointer-events-none"
            style={{ 
              top: '-21%',
              left: '50%',
              transform: 'rotate(45deg) translateX(-50%)'
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Plan;
