
import { useState, useEffect } from 'react';

type Destination = {
  name: string;
  image: string;
  description: string;
};

const destinations: Destination[] = [
  {
    name: "OKAVANGO",
    image: "/lovable-uploads/okavango.jpg",
    description: "Where elephants throw pool parties and hippos are the uninvited guests!"
  },
  {
    name: "KALAHARI",
    image: "/lovable-uploads/kalahari.jpg",
    description: "It's so hot even the sand gets a sunburn!"
  },
  {
    name: "MAKGADIKGADI",
    image: "/lovable-uploads/makgadikgadi.jpg",
    description: "The flattest place on Earth—you can see your future coming from miles away!"
  }
];

// Placeholder images for demo
const placeholderImages = {
  "OKAVANGO": "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1760&auto=format&fit=crop",
  "KALAHARI": "https://images.unsplash.com/photo-1469041797191-50ace28483c3?q=80&w=1752&auto=format&fit=crop",
  "MAKGADIKGADI": "https://images.unsplash.com/photo-1576485375217-d6a95e34d031?q=80&w=1760&auto=format&fit=crop"
};

export const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  const nextDestination = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % destinations.length);
      setIsAnimating(false);
    }, 800); // Matches fade-out animation duration
  };

  const prevDestination = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + destinations.length) % destinations.length);
      setIsAnimating(false);
    }, 800); // Matches fade-out animation duration
  };

  const goToDestination = (index: number) => {
    if (index === currentIndex) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setIsAnimating(false);
    }, 800);
  };

  // Auto rotate every 3.5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextDestination();
    }, 3500);
    
    return () => clearInterval(interval);
  }, []);

  const destination = destinations[currentIndex];
  
  // Use placeholder images for demo until real images are uploaded
  const backgroundImage = destination.image || placeholderImages[destination.name as keyof typeof placeholderImages];

  return (
    <div className="relative h-screen w-screen overflow-hidden">
      {/* Background image with overlay */}
      <div 
        className={`background-image ${isAnimating ? 'animate-fade-out' : 'animate-fade-in'}`} 
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      <div className="destination-overlay" />
      
      <div className="absolute inset-0 flex flex-col justify-center items-start pl-[300px] md:pl-[350px] z-10">
        <div className={`transition-opacity duration-800 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
          <h2 className="text-white text-5xl font-bold mb-4">DISCOVER THE</h2>
          <h1 id="hero-destination" className="destination-text">{destination.name}</h1>
          <p className="safari-quote text-white text-xl mt-4 max-w-md">
            "{destination.description}"
          </p>
        </div>
      </div>

      {/* Navigation dots */}
      <div className="absolute bottom-8 right-8 flex space-x-2">
        {destinations.map((_, index) => (
          <div 
            key={index} 
            className={`dot-indicator ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToDestination(index)}
          />
        ))}
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
