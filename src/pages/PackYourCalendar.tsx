import React, { useState, useEffect, useRef } from 'react';
import { Header } from "@/components/Safari/Header";
import { Button } from "@/components/ui/button";
import { ChevronDown, Users, Car, Calendar, MapPin, Star } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { PackYourCalendarMobile } from "@/components/Safari/PackYourCalendarMobile";
import { TravelStyleSection, TravelStyle } from "@/components/Safari/TravelStyleSection";
import { InteractiveJourneyMap } from "@/components/Safari/InteractiveJourneyMap";
import { PackageOverview } from "@/components/Safari/PackageOverview";
import { useTravelStyle } from "@/contexts/TravelStyleContext";
import { BookingEmailModal } from "@/components/BookingEmailModal";

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
  const [vehicleConfigs, setVehicleConfigs] = useState<{[key: number]: number[]}>({});
  const [showBookingModal, setShowBookingModal] = useState(false);
  const { travelStyle, setTravelStyle, setBookingSelection } = useTravelStyle();
  const isMobile = useIsMobile();
  
  const itinerarySectionRef = useRef<HTMLDivElement>(null);
  const calculatorSectionRef = useRef<HTMLDivElement>(null);
  const choosePanelRef = useRef<HTMLDivElement>(null);
  const travelStyleRef = useRef<HTMLDivElement>(null);

  const seasonOptions: SeasonOption[] = [
    {
      title: "Brown Season",
      subtitle: "High Season Experience",
      image: "/lovable-uploads/f8df9392-5003-48b6-ac98-5b48f496ad5b.png",
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
      image: "/lovable-uploads/816850fe-ec88-41bc-9a5f-644224f107cc.png",
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

  const getVehicleConfigurations = (people: number): number[][] => {
    const configs: number[][] = [];
    
    if (people === 2) configs.push([2]);
    if (people === 3) configs.push([3]);
    if (people === 4) configs.push([2, 2], [4]);
    if (people === 5) configs.push([2, 3]);
    if (people === 6) configs.push([2, 2, 2], [3, 3]);
    if (people === 7) configs.push([2, 2, 3], [3, 4]);
    if (people === 8) configs.push([2, 3, 3], [4, 4]);
    
    return configs;
  };

  const getSelectedVehicleConfig = (people: number): number[] => {
    const configs = getVehicleConfigurations(people);
    const selected = vehicleConfigs[people];
    
    if (selected && configs.some(config => JSON.stringify(config) === JSON.stringify(selected))) {
      return selected;
    }
    
    // Return most economical configuration (prioritize 3-person vehicles)
    return configs.find(config => config.includes(3)) || configs[0];
  };

  const calculateVehicles = (people: number): number => {
    return getSelectedVehicleConfig(people).length;
  };

  const calculateTotalCost = (season: 'brown' | 'green', people: number): number => {
    const seasonPricing = seasonOptions.find(option => 
      (season === 'brown' && option.title === 'Brown Season') ||
      (season === 'green' && option.title === 'Green Season')
    );
    
    if (!seasonPricing) return 0;

    const config = getSelectedVehicleConfig(people);
    let totalCost = 0;
    
    config.forEach(vehiclePeople => {
      if (vehiclePeople === 2) {
        totalCost += seasonPricing.pricing.twoPersons * 2;
      } else {
        totalCost += seasonPricing.pricing.threePersons * vehiclePeople;
      }
    });
    
    // Add guide fee based on travel style
    if (travelStyle === 'guided') {
      totalCost += 1500;
    }
    
    return totalCost;
  };

  const getCostBreakdown = (season: 'brown' | 'green', people: number) => {
    const seasonPricing = seasonOptions.find(option => 
      (season === 'brown' && option.title === 'Brown Season') ||
      (season === 'green' && option.title === 'Green Season')
    );
    
    if (!seasonPricing) return { vehicles: [], guideFee: 0, total: 0 };

    const config = getSelectedVehicleConfig(people);
    const vehicles = config.map((vehiclePeople, index) => ({
      id: index + 1,
      people: vehiclePeople,
      rate: vehiclePeople === 2 ? seasonPricing.pricing.twoPersons : seasonPricing.pricing.threePersons,
      cost: vehiclePeople === 2 
        ? seasonPricing.pricing.twoPersons * 2 
        : seasonPricing.pricing.threePersons * vehiclePeople
    }));

    const guideFee = travelStyle === 'guided' ? 1500 : 0;
    const total = vehicles.reduce((sum, v) => sum + v.cost, 0) + guideFee;

    return { vehicles, guideFee, total };
  };

  useEffect(() => {
    if (isMobile) return;
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const scrollThreshold = windowHeight * 0.8;
      
      setShowMenu(scrollPosition > scrollThreshold);
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
    const season = index === 0 ? 'brown' : 'green';
    setSelectedSeason(season);
    
    // Save season selection to context
    setBookingSelection({ 
      selectedSeason: season,
      groupSize: groupSize,
      totalCost: calculateTotalCost(season, groupSize)
    });
    
    if (travelStyleRef.current) {
      travelStyleRef.current.scrollIntoView({ behavior: 'smooth' });
      setActiveSection('travelStyle');
    }
  };

  const handleStyleChange = (style: TravelStyle) => {
    setTravelStyle(style);
  };

  const handleBookingClick = () => {
    if (!selectedSeason) return;
    
    // Update booking selection with final details
    setBookingSelection({
      selectedSeason: selectedSeason,
      groupSize: groupSize,
      totalCost: calculateTotalCost(selectedSeason, groupSize)
    });
    
    setShowBookingModal(true);
  };

  // Update booking selection when group size changes
  const handleGroupSizeChange = (size: number) => {
    setGroupSize(size);
    if (selectedSeason) {
      setBookingSelection({
        selectedSeason: selectedSeason,
        groupSize: size,
        totalCost: calculateTotalCost(selectedSeason, size)
      });
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


      {/* Enhanced Interactive Journey Map */}
      <InteractiveJourneyMap />


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
            {/* Travel Style Section */}
            <div ref={travelStyleRef} className="mb-8">
              <TravelStyleSection 
                selectedStyle={travelStyle}
                onStyleChange={handleStyleChange}
              />
            </div>
            
            <div className="bg-safari-cream rounded-lg p-8">
              <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
                {/* Group Size Selector */}
                <div>
                  <h3 className="text-2xl font-bold text-safari-dark-grey mb-6">Group Size</h3>
                  <div className="grid grid-cols-4 gap-2">
                    {[2, 3, 4, 5, 6, 7, 8].map((size) => (
                      <Button
                        key={size}
                        variant={groupSize === size ? "default" : "outline"}
                        onClick={() => handleGroupSizeChange(size)}
                        className={`h-16 text-sm font-semibold transition-all duration-200 ${
                          groupSize === size
                            ? 'bg-safari-gold border-safari-gold text-white hover:bg-safari-light-brown'
                            : 'bg-transparent border-safari-gold/30 text-safari-dark-grey hover:bg-safari-gold/10 hover:border-safari-gold'
                        }`}
                      >
                        {size}+
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Vehicle Configuration */}
                <div>
                  <h3 className="text-2xl font-bold text-safari-dark-grey mb-6">Vehicle Setup</h3>
                  {getVehicleConfigurations(groupSize).length > 1 ? (
                    <div className="grid grid-cols-2 gap-2">
                      {getVehicleConfigurations(groupSize).map((config, index) => (
                        <Button
                          key={index}
                          variant={JSON.stringify(getSelectedVehicleConfig(groupSize)) === JSON.stringify(config) ? "default" : "outline"}
                          onClick={() => setVehicleConfigs(prev => ({ ...prev, [groupSize]: config }))}
                          className={`h-16 text-xs font-semibold transition-all duration-200 justify-between ${
                            JSON.stringify(getSelectedVehicleConfig(groupSize)) === JSON.stringify(config)
                              ? 'bg-safari-gold border-safari-gold text-white hover:bg-safari-light-brown'
                              : 'bg-transparent border-safari-gold/30 text-safari-dark-grey hover:bg-safari-gold/10 hover:border-safari-gold'
                          }`}
                        >
                          <div className="flex items-center space-x-3">
                            <Car className="h-6 w-6" />
                            <div className="text-left">
                              <div className="font-semibold text-sm">
                                {config.length} Vehicle{config.length > 1 ? 's' : ''}
                              </div>
                              <div className="text-xs opacity-80 flex items-center space-x-2">
                                {config.map((people, idx) => (
                                  <div key={idx} className="flex items-center space-x-1">
                                    <span>{people}</span>
                                    <Users className="h-3 w-3" />
                                    {idx < config.length - 1 && <span className="text-safari-dark-grey/40">•</span>}
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </Button>
                      ))}
                    </div>
                  ) : (
                    <div className="bg-white rounded-lg p-4 border border-safari-gold/30">
                      <div className="flex items-center space-x-3">
                        <Car className="h-6 w-6 text-safari-gold" />
                        <div>
                          <div className="font-semibold text-sm text-safari-dark-grey">
                            {getSelectedVehicleConfig(groupSize).length} Vehicle{getSelectedVehicleConfig(groupSize).length > 1 ? 's' : ''}
                          </div>
                          <div className="text-xs text-safari-dark-grey opacity-80 flex items-center space-x-2">
                            {getSelectedVehicleConfig(groupSize).map((people, idx) => (
                              <div key={idx} className="flex items-center space-x-1">
                                <span>{people}</span>
                                <Users className="h-3 w-3" />
                                {idx < getSelectedVehicleConfig(groupSize).length - 1 && <span className="text-safari-dark-grey/40">•</span>}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Pricing Display */}
                <div>
                  <h3 className="text-2xl font-bold text-safari-dark-grey mb-6">Pricing</h3>
                  <div className="space-y-4">
                    {selectedSeason && (
                      <div className="bg-white rounded-lg p-4">
                        <div className="flex justify-between items-center mb-4">
                          <span className="font-medium text-safari-dark-grey">
                            {selectedSeason === 'brown' ? 'Brown Season' : 'Green Season'}
                          </span>
                          <span className="text-safari-gold font-bold">
                            {selectedSeason === 'brown' ? 'High Season' : 'Low Season'}
                          </span>
                        </div>
                        
                        {/* Cost Breakdown */}
                        <div className="space-y-2 mb-4">
                          {getCostBreakdown(selectedSeason, groupSize).vehicles.map((vehicle) => (
                            <div key={vehicle.id} className="flex justify-between text-sm">
                              <span className="text-safari-dark-grey">
                                Vehicle {vehicle.id} ({vehicle.people} pax):
                              </span>
                              <span className="text-safari-dark-grey">
                                RM {vehicle.cost.toLocaleString()}
                              </span>
                            </div>
                          ))}
                          {getCostBreakdown(selectedSeason, groupSize).guideFee > 0 && (
                            <div className="flex justify-between text-sm">
                              <span className="text-safari-dark-grey">Expert Guide Service:</span>
                              <span className="text-safari-dark-grey">
                                RM {getCostBreakdown(selectedSeason, groupSize).guideFee.toLocaleString()}
                              </span>
                            </div>
                          )}
                        </div>
                        
                        <div className="border-t pt-2">
                          <div className="flex justify-between items-center">
                            <span className="text-safari-dark-grey font-medium">
                              Total Cost ({groupSize} people):
                            </span>
                            <span className="text-2xl font-bold text-safari-gold">
                              RM {calculateTotalCost(selectedSeason, groupSize).toLocaleString()}
                            </span>
                          </div>
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
                <Button 
                  onClick={handleBookingClick}
                  disabled={!selectedSeason}
                  className="bg-safari-gold hover:bg-safari-light-brown text-white px-8 py-3 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {selectedSeason ? 'Book Your Adventure' : 'Select a Season First'}
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

      {/* Booking Email Modal */}
      {selectedSeason && (
        <BookingEmailModal
          isOpen={showBookingModal}
          onClose={() => setShowBookingModal(false)}
          seasonTitle={selectedSeason === 'brown' ? 'Brown Season (High Season)' : 'Green Season (Low Season)'}
          groupSize={groupSize}
          totalCost={calculateTotalCost(selectedSeason, groupSize)}
        />
      )}
    </div>
  );
};

export default PackYourCalendar;
