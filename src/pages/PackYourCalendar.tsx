
import React, { useState, useEffect, useRef } from 'react';
import { Header } from "@/components/Safari/Header";
import { Button } from "@/components/ui/button";
import { ChevronDown, Users, Car, Calendar, MapPin } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { PackYourCalendarMobile } from "@/components/Safari/PackYourCalendarMobile";

interface SeasonOption {
  title: string;
  subtitle: string;
  image: string;
  period: string;
  pricing: {
    twoPersons: number;
    threePersons: number;
  };
  features: string[];
  description: string;
}

const itinerary = [
  {
    day: 1,
    title: "Arrive in Maun",
    location: "North Botswana",
    description: "Meet and greet at the airport. Transfer to hotel. Free and easy. Grocery shopping for the camping trip.",
    accommodation: "Hotel"
  },
  {
    day: 2,
    title: "Central Kalahari Game Reserve",
    location: "CKGR",
    description: "Pickup camper and proceed to Central Kalahari Game Reserve. After registration at the gate, proceed to 1st campsite. CKGR is the second largest game reserve in the world.",
    accommodation: "Campsite"
  },
  {
    day: 3,
    title: "CKGR Deep Exploration",
    location: "CKGR",
    description: "Proceed to 2nd campsite within CKGR. Camp here for 2 days to fully enjoy the landscape and wildlife.",
    accommodation: "Campsite"
  },
  {
    day: 4,
    title: "Makgadikgadi National Park",
    location: "Salt Pan Paradise",
    description: "Exit CKGR and proceed to Makgadikgadi National Park. After registration at the gate proceed to 1st campsite. One of the world's largest salt pan.",
    accommodation: "Campsite"
  },
  {
    day: 5,
    title: "Makgadikgadi Exploration",
    location: "Salt Pan Paradise",
    description: "Proceed to 2nd campsite in Makgadikgadi National Park. Full day exploring the vast salt pans.",
    accommodation: "Campsite"
  },
  {
    day: 6,
    title: "Nxai Pan National Park",
    location: "Migration Route",
    description: "Exit Makgadikgadi National Park and proceed to Nxai Pan National Park. After registration proceed to 1st campsite. Nxai Pan is situated along one of Africa's largest zebra migration route.",
    accommodation: "Campsite"
  },
  {
    day: 7,
    title: "Baines Baobab Adventure",
    location: "Nxai Pan",
    description: "Proceed to 2nd campsite in Nxai Pan National Park. Self game drive and exploring Baines Baobab.",
    accommodation: "Campsite"
  },
  {
    day: 8,
    title: "Return to Maun",
    location: "North Botswana",
    description: "Exit Nxai Pan National Park and proceed to Maun. After handover camper proceed to hotel.",
    accommodation: "Hotel"
  },
  {
    day: 9,
    title: "Departure",
    location: "Maun Airport",
    description: "After checkout of hotel, proceed to airport and end of package tour.",
    accommodation: "Airport"
  }
];

const PackYourCalendar = () => {
  const [activePanel, setActivePanel] = useState<number | null>(null);
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [selectedSeason, setSelectedSeason] = useState<'brown' | 'green' | null>(null);
  const [groupSize, setGroupSize] = useState<number>(2);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const isMobile = useIsMobile();
  
  const itinerarySectionRef = useRef<HTMLDivElement>(null);
  const calculatorSectionRef = useRef<HTMLDivElement>(null);
  const choosePanelRef = useRef<HTMLDivElement>(null);

  const seasonOptions: SeasonOption[] = [
    {
      title: "Brown Season",
      subtitle: "High Season Experience",
      image: "/lovable-uploads/be7118a7-97ba-4213-8b48-cb5810666f96.png",
      period: "01 July - 31 October",
      pricing: {
        twoPersons: 7600,
        threePersons: 5900
      },
      features: [
        "Peak wildlife viewing with animals concentrated around water sources",
        "Clear skies and excellent photography conditions",
        "Cooler temperatures and minimal rainfall",
        "Best time for game drives and wildlife spotting"
      ],
      description: "The dry season offers the most predictable wildlife viewing as animals gather around permanent water sources. Perfect for photographers and first-time safari visitors."
    },
    {
      title: "Green Season",
      subtitle: "Low Season Adventure",
      image: "/lovable-uploads/dc4b122a-37bd-449b-8540-8e783ee9b508.png",
      period: "01 November - 30 June",
      pricing: {
        twoPersons: 6300,
        threePersons: 5100
      },
      features: [
        "Lush landscapes and dramatic skies",
        "Baby animals and birthing season",
        "Fewer crowds and more intimate experience",
        "Lower prices and better value"
      ],
      description: "The wet season transforms the landscape into a green paradise. Experience the raw beauty of Botswana with fewer tourists and witness new life in the wilderness."
    }
  ];

  // Calculate vehicles needed based on group size
  const calculateVehicles = (people: number): number => {
    if (people <= 3) return 1;
    if (people <= 6) return 2;
    return 3; // Max 8 people, max 3 vehicles
  };

  // Calculate total cost
  const calculateTotalCost = (season: 'brown' | 'green', people: number): number => {
    const vehicles = calculateVehicles(people);
    const seasonData = seasonOptions.find(s => s.title.toLowerCase().includes(season));
    if (!seasonData) return 0;

    let totalCost = 0;
    let remainingPeople = people;

    // Optimize pricing: try to put 3 people per vehicle when possible
    for (let i = 0; i < vehicles; i++) {
      if (remainingPeople >= 3) {
        totalCost += seasonData.pricing.threePersons * 3;
        remainingPeople -= 3;
      } else {
        totalCost += seasonData.pricing.twoPersons * remainingPeople;
        remainingPeople = 0;
      }
    }

    return totalCost;
  };

  // Handle scroll behavior for desktop
  useEffect(() => {
    if (isMobile) return;
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const scrollThreshold = windowHeight * 0.8;
      
      setShowMenu(scrollPosition > scrollThreshold);
      
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
  }, [isMobile]);

  const handlePanelHover = (index: number) => {
    setActivePanel(index);
  };
  
  const handlePanelLeave = () => {
    setActivePanel(null);
  };

  const getBackgroundImage = () => {
    if (activePanel !== null) {
      return seasonOptions[activePanel].image;
    }
    return null;
  };

  const scrollToSection = (index: number) => {
    if (index === 0) {
      setSelectedSeason('brown');
      if (itinerarySectionRef.current) {
        itinerarySectionRef.current.scrollIntoView({ behavior: 'smooth' });
        setActiveSection('itinerary');
      }
    } else if (index === 1) {
      setSelectedSeason('green');
      if (itinerarySectionRef.current) {
        itinerarySectionRef.current.scrollIntoView({ behavior: 'smooth' });
        setActiveSection('itinerary');
      }
    }
  };

  return (
    <div className="flex flex-col min-h-screen relative">
      {/* Full page background - desktop only */}
      {!isMobile && (
        <div 
          className="fixed inset-0 bg-cover bg-center transition-all duration-700 ease-in-out"
          style={{ 
            backgroundImage: getBackgroundImage() ? `url(${getBackgroundImage()})` : 'none',
            opacity: getBackgroundImage() ? 0.5 : 0,
            zIndex: -1
          }}
        />
      )}

      {/* Disappearing menu - desktop only */}
      {!isMobile && (
        <div 
          className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-500 ease-in-out ${
            showMenu ? 'translate-y-0' : '-translate-y-full'
          }`}
        >
          <Header className="bg-black bg-opacity-80" />
        </div>
      )}
      
      {/* Mobile Header */}
      {isMobile && <Header />}
      
      {/* Panel section */}
      {isMobile ? (
        <PackYourCalendarMobile 
          seasonOptions={seasonOptions} 
          scrollToSection={scrollToSection} 
        />
      ) : (
        <div 
          ref={choosePanelRef} 
          className="flex h-screen transition-all duration-500 ease-out"
        >
          {/* Left sidebar */}
          <div className="w-[80px] h-screen bg-black text-white flex flex-col items-center justify-between py-8">
            <div className="flex-grow flex items-center">
              <div className="transform -rotate-90 whitespace-nowrap text-2xl font-bold tracking-wider">
                PACK YOUR CALENDAR
              </div>
            </div>
          </div>
          
          {/* Desktop Panels */}
          <div className="flex flex-1 h-screen">
            {/* Brown Season Panel */}
            <div 
              className="flex-1 h-full bg-cover bg-center relative cursor-pointer transition-all duration-500 ease-in-out"
              style={{ 
                backgroundImage: `url(${seasonOptions[0].image})`,
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
                  {seasonOptions[0].title}
                </h2>
                <p 
                  className={`text-white text-lg opacity-80 transition-all duration-500 ease-in-out transform ${
                    activePanel === 0 ? 'translate-y-[-40px]' : ''
                  }`}
                >
                  {seasonOptions[0].subtitle}
                </p>
                <p 
                  className={`text-white text-sm opacity-60 transition-all duration-500 ease-in-out transform ${
                    activePanel === 0 ? 'translate-y-[-40px]' : ''
                  }`}
                >
                  {seasonOptions[0].period}
                </p>
                
                {activePanel === 0 && (
                  <div className="mt-6 animate-fade-in">
                    <Button 
                      variant="outline" 
                      className="bg-safari-gold border-safari-gold text-white hover:bg-safari-light-brown"
                    >
                      Plan Your Trip <ChevronDown className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                )}
              </div>
            </div>
            
            {/* Green Season Panel */}
            <div 
              className="flex-1 h-full bg-cover bg-center relative cursor-pointer transition-all duration-500 ease-in-out"
              style={{ 
                backgroundImage: `url(${seasonOptions[1].image})`,
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
                  {seasonOptions[1].title}
                </h2>
                <p 
                  className={`text-white text-lg opacity-80 transition-all duration-500 ease-in-out transform ${
                    activePanel === 1 ? 'translate-y-[-40px]' : ''
                  }`}
                >
                  {seasonOptions[1].subtitle}
                </p>
                <p 
                  className={`text-white text-sm opacity-60 transition-all duration-500 ease-in-out transform ${
                    activePanel === 1 ? 'translate-y-[-40px]' : ''
                  }`}
                >
                  {seasonOptions[1].period}
                </p>
                
                {activePanel === 1 && (
                  <div className="mt-6 animate-fade-in">
                    <Button 
                      variant="outline" 
                      className="bg-safari-gold border-safari-gold text-white hover:bg-safari-light-brown"
                    >
                      Plan Your Trip <ChevronDown className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Itinerary Section */}
      <div 
        ref={itinerarySectionRef}
        className="bg-safari-cream py-16 px-4 md:px-8"
      >
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-safari-dark-grey mb-4">Your 9-Day Safari Adventure</h2>
            <p className="text-lg text-safari-dark-grey">Experience the best of Botswana across three iconic destinations</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {itinerary.map((day, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-safari-gold text-white p-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold">Day {day.day}</h3>
                    <Calendar className="h-5 w-5" />
                  </div>
                  <h4 className="text-xl font-semibold mt-1">{day.title}</h4>
                  <p className="text-safari-light-brown text-sm flex items-center mt-1">
                    <MapPin className="h-4 w-4 mr-1" />
                    {day.location}
                  </p>
                </div>
                
                <div className="p-4">
                  <p className="text-safari-dark-grey text-sm mb-3 leading-relaxed">
                    {day.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-safari-gold font-medium">
                      {day.accommodation}
                    </span>
                    <span className="text-xs text-safari-dark-grey">
                      {day.day === 1 || day.day === 8 ? "Hotel" : "Rooftop Tent"}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Group Size Calculator Section */}
      <div 
        ref={calculatorSectionRef}
        className="bg-white py-16 px-4 md:px-8"
      >
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-safari-dark-grey mb-4">Plan Your Group</h2>
            <p className="text-lg text-safari-dark-grey">Select your group size and see pricing</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-safari-cream rounded-lg p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Group Size Selector */}
                <div>
                  <h3 className="text-2xl font-bold text-safari-dark-grey mb-6">Group Size</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <label className="text-safari-dark-grey font-medium">Number of People:</label>
                      <div className="flex items-center space-x-4">
                        <button 
                          onClick={() => setGroupSize(Math.max(2, groupSize - 1))}
                          className="bg-safari-gold text-white w-10 h-10 rounded-full hover:bg-safari-light-brown transition-colors"
                        >
                          -
                        </button>
                        <span className="text-xl font-bold text-safari-dark-grey w-8 text-center">
                          {groupSize}
                        </span>
                        <button 
                          onClick={() => setGroupSize(Math.min(8, groupSize + 1))}
                          className="bg-safari-gold text-white w-10 h-10 rounded-full hover:bg-safari-light-brown transition-colors"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-safari-dark-grey font-medium">Vehicles Needed:</span>
                      <div className="flex items-center space-x-2">
                        <Car className="h-5 w-5 text-safari-gold" />
                        <span className="text-xl font-bold text-safari-gold">
                          {calculateVehicles(groupSize)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Pricing Display */}
                <div>
                  <h3 className="text-2xl font-bold text-safari-dark-grey mb-6">Pricing</h3>
                  <div className="space-y-4">
                    {selectedSeason && (
                      <div className="bg-white rounded-lg p-4">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-medium text-safari-dark-grey">
                            {selectedSeason === 'brown' ? 'Brown Season' : 'Green Season'}
                          </span>
                          <span className="text-safari-gold font-bold">
                            {selectedSeason === 'brown' ? 'High Season' : 'Low Season'}
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-safari-dark-grey">
                            Total Cost ({groupSize} people):
                          </span>
                          <span className="text-2xl font-bold text-safari-gold">
                            RM {calculateTotalCost(selectedSeason, groupSize).toLocaleString()}
                          </span>
                        </div>
                      </div>
                    )}
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white rounded-lg p-4 text-center">
                        <h4 className="font-bold text-safari-dark-grey mb-2">Brown Season</h4>
                        <p className="text-sm text-safari-dark-grey mb-2">July - October</p>
                        <p className="text-lg font-bold text-safari-gold">
                          RM {calculateTotalCost('brown', groupSize).toLocaleString()}
                        </p>
                      </div>
                      <div className="bg-white rounded-lg p-4 text-center">
                        <h4 className="font-bold text-safari-dark-grey mb-2">Green Season</h4>
                        <p className="text-sm text-safari-dark-grey mb-2">November - June</p>
                        <p className="text-lg font-bold text-safari-gold">
                          RM {calculateTotalCost('green', groupSize).toLocaleString()}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <Button className="bg-safari-gold hover:bg-safari-light-brown text-white px-8 py-3 text-lg">
                  Book Your Adventure
                </Button>
              </div>
            </div>
          </div>
          
          {/* Important Notes */}
          <div className="mt-12 bg-safari-cream rounded-lg p-6">
            <h3 className="text-xl font-bold text-safari-dark-grey mb-4">Important Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-safari-dark-grey">
              <ul className="space-y-1">
                <li>• All campsites use rooftop tent accommodation</li>
                <li>• HALAL meat available from certified suppliers</li>
                <li>• Diesel fuel for camper not included</li>
                <li>• Guide included (own tent provided)</li>
              </ul>
              <ul className="space-y-1">
                <li>• Maximum 8 persons and 3 vehicles per group</li>
                <li>• Campsite locations may vary by availability</li>
                <li>• Bring food supplies or buy in Maun</li>
                <li>• Best flight connections: Qatar Airways or Emirates</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackYourCalendar;
