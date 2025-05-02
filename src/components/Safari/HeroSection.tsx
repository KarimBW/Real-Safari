import { useState, useEffect } from 'react';
type Destination = {
  name: string;
  image: string;
  description: string;
};
const destinations: Destination[] = [{
  name: "OKAVANGO",
  image: "/lovable-uploads/ebab21c9-3137-406f-b457-4a345b28c6ab.png",
  description: "Where lions roam and whisper tales of the wild savanna!"
}, {
  name: "KALAHARI",
  image: "/lovable-uploads/c574e67a-51c3-442e-b68e-89788ccfb439.png",
  description: "It's so hot even the sand gets a sunburn!"
}, {
  name: "MAKGADIKGADI",
  image: "/lovable-uploads/44660527-d212-4dc7-a061-b9879acf0e93.png",
  description: "Where elephants throw dust parties and have trunk-to-trunk conversations!"
}];
export const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  
  const nextDestination = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex(prev => (prev + 1) % destinations.length);
      setIsAnimating(false);
      // Start typewriter effect after changing destination
      setIsTyping(true);
      setTimeout(() => setIsTyping(false), 1000); // Reset typing state after animation completes
    }, 800); // Matches fade-out animation duration
  };
  
  const prevDestination = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex(prev => (prev - 1 + destinations.length) % destinations.length);
      setIsAnimating(false);
      // Start typewriter effect after changing destination
      setIsTyping(true);
      setTimeout(() => setIsTyping(false), 1000); // Reset typing state after animation completes
    }, 800); // Matches fade-out animation duration
  };
  
  const goToDestination = (index: number) => {
    if (index === currentIndex) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setIsAnimating(false);
      // Start typewriter effect after changing destination
      setIsTyping(true);
      setTimeout(() => setIsTyping(false), 1000); // Reset typing state after animation completes
    }, 800);
  };

  // Auto rotate every 4.15 seconds (as requested)
  useEffect(() => {
    const interval = setInterval(() => {
      nextDestination();
    }, 4150);
    return () => clearInterval(interval);
  }, []);
  
  // Trigger typewriter effect on initial load
  useEffect(() => {
    setIsTyping(true);
    setTimeout(() => setIsTyping(false), 1000);
  }, []);

  const destination = destinations[currentIndex];
  return (
    <div className="absolute inset-0 h-screen w-screen overflow-hidden">
      {/* Background image with overlay */}
      <div className={`background-image ${isAnimating ? 'animate-fade-out' : 'animate-fade-in'}`} style={{
        backgroundImage: `url(${destination.image})`,
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -2
      }} />
      <div className="destination-overlay absolute inset-0 z-[-1]" />
      
      {/* Static H2 heading - moved right by 15px from previous position */}
      <div className="absolute inset-0 flex flex-col justify-center items-start pl-[85px] md:pl-[135px] z-10 -mt-[200px]">
        <h2 className="text-white mb-4 text-7xl text-left font-semibold my-0 mx-[2px]">DISCOVER THE</h2>
      </div>

      {/* H1 section - moved right by 18px from previous position */}
      <div className="absolute inset-0 flex flex-col justify-center items-start pl-[83px] md:pl-[133px] z-10 mt-[15px]">
        <div className={`transition-opacity duration-800 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
          {/* Destination name with typewriter effect */}
          <h1 id="hero-destination" className={`destination-text mx-[168px] overflow-hidden whitespace-nowrap ${isTyping ? 'animated' : ''}`}>
            {destination.name}
          </h1>
          <p className="safari-quote text-white text-xl mt-4 max-w-md mx-[178px]">
            "{destination.description}"
          </p>
        </div>
      </div>

      {/* Navigation dots */}
      <div className="absolute bottom-8 right-8 flex space-x-2">
        {destinations.map((_, index) => <div key={index} className={`dot-indicator ${index === currentIndex ? 'active' : ''}`} onClick={() => goToDestination(index)} />)}
      </div>

      {/* Navigation arrows */}
      <div className="navigation-arrows absolute bottom-8 left-[350px] flex space-x-8 items-center">
        <button onClick={prevDestination} aria-label="Previous destination">
          &lt;
        </button>
        
        <div className="flex flex-col items-center">
          <div className="page-indicator"></div>
          <div className="slide-number text-white">
            0{currentIndex + 1}
          </div>
        </div>
        
        <button onClick={nextDestination} aria-label="Next destination">
          &gt;
        </button>
      </div>
    </div>
  );
};
