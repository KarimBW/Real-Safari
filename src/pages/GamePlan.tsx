
import React, { useState, useEffect, useRef } from 'react';
import { Header } from "@/components/Safari/Header";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

interface StyleOption {
  title: string;
  subtitle: string;
  image: string;
  content: {
    title: string;
    subtitle: string;
    description: string;
    features: string[];
    perfectFor: string[];
  };
}

const GamePlan = () => {
  const [activePanel, setActivePanel] = useState<number | null>(null);
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  
  const guidedSectionRef = useRef<HTMLDivElement>(null);
  const selfGuidedSectionRef = useRef<HTMLDivElement>(null);
  const choosePanelRef = useRef<HTMLDivElement>(null);

  const styleOptions: StyleOption[] = [
    {
      title: "Guided & Glorious",
      subtitle: "Travel with a Guide",
      image: "/lovable-uploads/691157be-fdd5-4b67-811b-9f440014bdeb.png",
      content: {
        title: "Ride with a Legend at the Wheel",
        subtitle: "aka The Guided Safari",
        description: "Prefer a little storytelling with your scenery? This one's for you. You'll still be in your own fully-kitted 4x4, but one of our expert safari guides will lead the convoy in a separate vehicle—or ride along with you if you'd like. They know every dust track, every elephant hangout, and which bird call means \"there's a leopard nearby.\" Think of it as having a living, breathing safari encyclopedia… with jokes.",
        features: [
          "A pro guide who's part animal tracker, part history buff, part bush therapist",
          "Deep insights about wildlife, culture, and the land",
          "Peace of mind, especially if you're new to Botswana or just want to chill",
          "A bit more structure, with a lot more storytelling"
        ],
        perfectFor: [
          "First-timers to Africa",
          "Families with curious kids",
          "Photographers who want the best angles and timing",
          "Anyone who wants to hear, \"See that fresh spoor? That's lion… and it's recent.\""
        ]
      }
    },
    {
      title: "Lone & Wild",
      subtitle: "Travel without a Guide",
      image: "/lovable-uploads/dc4b122a-37bd-449b-8540-8e783ee9b508.png",
      content: {
        title: "Solo, But Not Sorry",
        subtitle: "aka The Self-Guided Safari",
        description: "You're the kind of traveler who likes a little dirt under the fingernails, GPS in hand, and freedom in the air. With this option, you take the wheel, plot the course, and set the pace. We handle all the logistics—from vehicle hire to campsite bookings—so you can focus on spotting lions instead of arguing over fuel stops.",
        features: [
          "A rugged 4x4 with a rooftop tent (because ground tents are for amateurs)",
          "A fully prepped itinerary with insider tips",
          "Campsites booked and confirmed (we've got the plug)",
          "24/7 support, because even Tarzan needs a backup sometimes",
          "Botswana in its rawest, most beautiful form—at your command"
        ],
        perfectFor: [
          "Independent spirits",
          "Couples, friends, or families who've watched just enough National Geographic",
          "People who think \"lost\" is just another word for \"found something cool\""
        ]
      }
    }
  ];

  // Handle scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const scrollThreshold = windowHeight * 0.8; // 80% of viewport height
      
      setShowMenu(scrollPosition > scrollThreshold);
      
      // Hide the choose panel when scrolled past it
      if (choosePanelRef.current) {
        const choosePanelHeight = choosePanelRef.current.offsetHeight;
        if (scrollPosition > choosePanelHeight * 0.5) {
          choosePanelRef.current.style.transform = `translateY(-${Math.min(scrollPosition - (choosePanelHeight * 0.3), choosePanelHeight)}px)`;
          choosePanelRef.current.style.opacity = `${1 - Math.min(scrollPosition / choosePanelHeight, 1)}`;
        } else {
          choosePanelRef.current.style.transform = 'translateY(0)';
          choosePanelRef.current.style.opacity = '1';
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handlePanelHover = (index: number) => {
    setActivePanel(index);
  };
  
  const handlePanelLeave = () => {
    setActivePanel(null);
  };

  // Get the background image URL based on active panel
  const getBackgroundImage = () => {
    if (activePanel !== null) {
      return styleOptions[activePanel].image;
    }
    return null;
  };

  const scrollToSection = (index: number) => {
    if (index === 0 && guidedSectionRef.current) {
      guidedSectionRef.current.scrollIntoView({ behavior: 'smooth' });
      setActiveSection('guided');
    } else if (index === 1 && selfGuidedSectionRef.current) {
      selfGuidedSectionRef.current.scrollIntoView({ behavior: 'smooth' });
      setActiveSection('self-guided');
    }
  };

  return (
    <div className="flex flex-col min-h-screen relative">
      {/* Full page background that changes on hover */}
      <div 
        className="fixed inset-0 bg-cover bg-center transition-all duration-700 ease-in-out"
        style={{ 
          backgroundImage: getBackgroundImage() ? `url(${getBackgroundImage()})` : 'none',
          opacity: getBackgroundImage() ? 0.5 : 0,
          zIndex: -1
        }}
      />

      {/* Disappearing menu that appears at 80% scroll */}
      <div 
        className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-500 ease-in-out ${
          showMenu ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <Header className="bg-black bg-opacity-80" />
      </div>

      {/* Left sidebar */}
      <div className="w-[80px] h-full bg-black text-white flex flex-col items-center justify-between py-8 fixed left-0 top-0 z-50">
        {/* Vertical title */}
        <div className="flex-grow flex items-center">
          <div className="transform -rotate-90 whitespace-nowrap text-2xl font-bold tracking-wider">
            CHOOSE YOUR STYLE
          </div>
        </div>
      </div>
      
      {/* Main content with panels */}
      <div 
        ref={choosePanelRef} 
        className="flex h-screen transition-all duration-500 ease-out"
        style={{ marginLeft: '80px' }}
      >
        {/* Guided Safari Panel (Left) */}
        <div 
          id="guided_panel"
          className="flex-1 h-full bg-cover bg-center relative cursor-pointer transition-all duration-500 ease-in-out"
          style={{ 
            backgroundImage: `url(${styleOptions[0].image})`,
            flex: activePanel === 0 ? '1.5' : activePanel === 1 ? '0.5' : '1'
          }}
          onMouseEnter={() => handlePanelHover(0)}
          onMouseLeave={handlePanelLeave}
          onClick={() => scrollToSection(0)}
        >
          <div className={`absolute inset-0 bg-black transition-opacity duration-300 ${
            activePanel === 0 ? 'bg-opacity-20' : 'bg-opacity-40'
          }`}></div>
          
          <div className="absolute bottom-0 left-0 right-0 p-10 z-10">
            <h2 
              className={`text-white text-4xl font-bold mb-2 transition-all duration-500 ease-in-out transform ${
                activePanel === 0 ? 'translate-y-[-40px] text-safari-gold' : ''
              }`}
            >
              {styleOptions[0].title}
            </h2>
            <p 
              className={`text-white text-lg opacity-80 transition-all duration-500 ease-in-out transform ${
                activePanel === 0 ? 'translate-y-[-40px]' : ''
              }`}
            >
              {styleOptions[0].subtitle}
            </p>
            
            {activePanel === 0 && (
              <div className="mt-6 animate-fade-in">
                <Button 
                  variant="outline" 
                  className="bg-safari-gold border-safari-gold text-white hover:bg-safari-light-brown"
                >
                  Discover More <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </div>
            )}
          </div>
        </div>
        
        {/* Self-Guided Safari Panel (Right) */}
        <div 
          id="unguided_panel"
          className="flex-1 h-full bg-cover bg-center relative cursor-pointer transition-all duration-500 ease-in-out"
          style={{ 
            backgroundImage: `url(${styleOptions[1].image})`,
            flex: activePanel === 1 ? '1.5' : activePanel === 0 ? '0.5' : '1'
          }}
          onMouseEnter={() => handlePanelHover(1)}
          onMouseLeave={handlePanelLeave}
          onClick={() => scrollToSection(1)}
        >
          <div className={`absolute inset-0 bg-black transition-opacity duration-300 ${
            activePanel === 1 ? 'bg-opacity-20' : 'bg-opacity-40'
          }`}></div>
          
          <div className="absolute bottom-0 left-0 right-0 p-10 z-10">
            <h2 
              className={`text-white text-4xl font-bold mb-2 transition-all duration-500 ease-in-out transform ${
                activePanel === 1 ? 'translate-y-[-40px] text-safari-gold' : ''
              }`}
            >
              {styleOptions[1].title}
            </h2>
            <p 
              className={`text-white text-lg opacity-80 transition-all duration-500 ease-in-out transform ${
                activePanel === 1 ? 'translate-y-[-40px]' : ''
              }`}
            >
              {styleOptions[1].subtitle}
            </p>
            
            {activePanel === 1 && (
              <div className="mt-6 animate-fade-in">
                <Button 
                  variant="outline" 
                  className="bg-safari-gold border-safari-gold text-white hover:bg-safari-light-brown"
                >
                  Discover More <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Details sections */}
      <div className="mt-0">
        {/* Guided Safari Details Section */}
        <div 
          ref={guidedSectionRef} 
          className={`bg-safari-cream py-16 px-8 ${activeSection === 'guided' ? 'scroll-mt-20' : ''}`}
        >
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Content Area */}
              <div className="camp-info space-y-6">
                <h2 className="text-4xl font-bold text-safari-dark-grey">{styleOptions[0].content.title}</h2>
                <h3 className="text-2xl italic text-safari-gold">{styleOptions[0].content.subtitle}</h3>
                <p className="text-safari-dark-grey leading-relaxed">
                  {styleOptions[0].content.description}
                </p>
                
                <div className="mt-6 space-y-4">
                  <h3 className="text-xl font-semibold text-safari-dark-grey">You get everything from the self-guided safari, plus:</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    {styleOptions[0].content.features.map((feature, index) => (
                      <li key={index} className="text-safari-dark-grey">{feature}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-6 space-y-4">
                  <h3 className="text-xl font-semibold text-safari-dark-grey">Perfect for:</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    {styleOptions[0].content.perfectFor.map((item, index) => (
                      <li key={index} className="text-safari-dark-grey">{item}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-8">
                  <Button className="bg-safari-gold hover:bg-safari-light-brown text-white">
                    Book This Experience
                  </Button>
                </div>
              </div>
              
              {/* Image Area */}
              <div className="relative h-[500px] overflow-hidden rounded-lg shadow-xl">
                <img 
                  src={styleOptions[0].image}
                  alt="Guided Safari Experience"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Self-Guided Safari Details Section */}
        <div 
          ref={selfGuidedSectionRef} 
          className={`bg-white py-16 px-8 ${activeSection === 'self-guided' ? 'scroll-mt-20' : ''}`}
        >
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Image Area */}
              <div className="relative h-[500px] overflow-hidden rounded-lg shadow-xl order-2 md:order-1">
                <img 
                  src={styleOptions[1].image}
                  alt="Self-Guided Safari Experience"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              
              {/* Content Area */}
              <div className="camp-info space-y-6 order-1 md:order-2">
                <h2 className="text-4xl font-bold text-safari-dark-grey">{styleOptions[1].content.title}</h2>
                <h3 className="text-2xl italic text-safari-gold">{styleOptions[1].content.subtitle}</h3>
                <p className="text-safari-dark-grey leading-relaxed">
                  {styleOptions[1].content.description}
                </p>
                
                <div className="mt-6 space-y-4">
                  <h3 className="text-xl font-semibold text-safari-dark-grey">You get:</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    {styleOptions[1].content.features.map((feature, index) => (
                      <li key={index} className="text-safari-dark-grey">{feature}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-6 space-y-4">
                  <h3 className="text-xl font-semibold text-safari-dark-grey">Perfect for:</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    {styleOptions[1].content.perfectFor.map((item, index) => (
                      <li key={index} className="text-safari-dark-grey">{item}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-8">
                  <Button className="bg-safari-gold hover:bg-safari-light-brown text-white">
                    Book This Experience
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GamePlan;
