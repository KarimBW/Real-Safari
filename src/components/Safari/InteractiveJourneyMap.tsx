import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Camera, Binoculars, Compass } from "lucide-react";

interface MapDestination {
  id: string;
  name: string;
  shortName: string;
  description: string;
  poeticDescription: string;
  highlights: string[];
  bestFor: string;
  terrain: string;
  mood: string;
  image: string;
  position: { x: number; y: number };
  day: string;
  icon: React.ReactNode;
}

const destinations: MapDestination[] = [
  {
    id: "maun",
    name: "Maun",
    shortName: "Gateway",
    description: "Your safari begins in the heart of the Okavango",
    poeticDescription: "Where civilization whispers goodbye and the wild calls your name",
    highlights: ["Safari briefing", "Vehicle handover", "Last supplies"],
    bestFor: "Preparation & anticipation",
    terrain: "Town gateway",
    mood: "Excited anticipation",
    image: "/lovable-uploads/02233ed5-a1fa-40fd-a777-8e843f957aa6.png",
    position: { x: 15, y: 60 },
    day: "Day 1",
    icon: <Compass className="h-4 w-4" />
  },
  {
    id: "ckgr",
    name: "Central Kalahari Game Reserve",
    shortName: "The Soul Desert",
    description: "Where horizons forget to end and silence teaches you to listen",
    poeticDescription: "In the vastness of forever, you discover the rhythm of your own heartbeat",
    highlights: ["Desert-adapted wildlife", "Endless horizons", "Star-drunk nights", "Ancient fossil valleys"],
    bestFor: "Soul-searching & solitude",
    terrain: "Ancient pans & sandy tracks",
    mood: "Meditative wonder",
    image: "/lovable-uploads/f8df9392-5003-48b6-ac98-5b48f496ad5b.png",
    position: { x: 35, y: 75 },
    day: "Days 2-4",
    icon: <Binoculars className="h-4 w-4" />
  },
  {
    id: "makgadikgadi",
    name: "Makgadikgadi Pans",
    shortName: "Salt Dreams",
    description: "Ancient sea floors where elephants march like ghosts",
    poeticDescription: "Time stands still on these endless white stages where earth meets eternity",
    highlights: ["Elephant migration", "Salt pan vastness", "Flamingo spectacle", "Prehistoric silence"],
    bestFor: "Epic photography & reflection",
    terrain: "Hard-packed salt & mystery",
    mood: "Otherworldly awe",
    image: "/lovable-uploads/816850fe-ec88-41bc-9a5f-644224f107cc.png",
    position: { x: 60, y: 45 },
    day: "Days 5-7",
    icon: <Camera className="h-4 w-4" />
  },
  {
    id: "nxai",
    name: "Nxai Pan National Park",
    shortName: "Baobab Theatre",
    description: "Where ancient giants guard secrets and lions write stories in tall grass",
    poeticDescription: "Under Baines' legendary trees, every sunset feels like the first one ever painted",
    highlights: ["Baines' Baobabs", "Lion encounters", "Giraffe kingdoms", "Golden hour magic"],
    bestFor: "Classic safari moments",
    terrain: "Scattered woodlands & open pans",
    mood: "Timeless elegance",
    image: "/lovable-uploads/6f7ac6f4-6078-4baa-8ef8-1a5d7f4e8bc0.png",
    position: { x: 75, y: 25 },
    day: "Days 8-9",
    icon: <MapPin className="h-4 w-4" />
  }
];

export const InteractiveJourneyMap: React.FC = () => {
  const [hoveredDestination, setHoveredDestination] = useState<string | null>(null);
  const [selectedDestination, setSelectedDestination] = useState<string>("ckgr");

  return (
    <div className="relative min-h-screen py-20 overflow-hidden">

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary">
            Interactive Journey Map
          </Badge>
          <h2 className="text-5xl font-bold text-primary mb-6">
            Your Safari Unfolds
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Hover over each destination to feel the magic before you even leave home. 
            This is not just a trip—it's a transformation across Botswana's most sacred wilderness.
          </p>
        </div>

        {/* Enhanced Interactive Map */}
        <div className="max-w-5xl mx-auto">
          <div className="relative w-full h-[50vh] min-h-[400px] overflow-hidden">
            {/* Map paths connecting destinations */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.4" />
                  <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.4" />
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                  <feMerge> 
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              <path
                d={`M ${destinations[0].position.x} ${destinations[0].position.y} 
                    Q 25 70 ${destinations[1].position.x} ${destinations[1].position.y}
                    Q 50 55 ${destinations[2].position.x} ${destinations[2].position.y}
                    Q 70 35 ${destinations[3].position.x} ${destinations[3].position.y}`}
                stroke="url(#pathGradient)"
                strokeWidth="3"
                fill="none"
                strokeDasharray="8,4"
                className="animate-pulse"
                filter="url(#glow)"
              />
            </svg>

            {/* Destination points with camp photos */}
            {destinations.map((destination) => (
              <div
                key={destination.id}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-500 hover:scale-110"
                style={{
                  left: `${destination.position.x}%`,
                  top: `${destination.position.y}%`,
                }}
                onMouseEnter={() => setHoveredDestination(destination.id)}
                onMouseLeave={() => setHoveredDestination(null)}
                onClick={() => setSelectedDestination(destination.id)}
              >
                {/* Enhanced pulsing ring */}
                <div className={`absolute inset-0 rounded-full transition-all duration-700 ${
                  hoveredDestination === destination.id 
                    ? 'bg-primary/30 scale-200 shadow-lg shadow-primary/20' 
                    : 'bg-primary/15 scale-100'
                }`} />
                
                {/* Larger destination marker with camp photo */}
                <div className={`relative w-24 h-24 rounded-full border-4 border-white shadow-2xl transition-all duration-500 overflow-hidden ${
                  selectedDestination === destination.id 
                    ? 'ring-6 ring-primary/60 scale-125 shadow-primary/30' 
                    : hoveredDestination === destination.id 
                      ? 'scale-110 shadow-xl ring-4 ring-primary/40' 
                      : 'scale-100'
                }`}>
                  <img 
                    src={destination.image} 
                    alt={destination.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-white">
                    {destination.icon}
                  </div>
                </div>

                {/* Enhanced day label */}
                <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                  <Badge variant="outline" className="text-sm font-medium bg-white/95 backdrop-blur-sm shadow-lg">
                    {destination.day}
                  </Badge>
                </div>

                {/* Enhanced hover tooltip with itinerary details */}
                {hoveredDestination === destination.id && (
                  <div className="absolute -top-32 left-1/2 transform -translate-x-1/2 z-20">
                    <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-2xl border-2 border-primary/20 min-w-80 max-w-md animate-scale-in">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          {destination.icon}
                        </div>
                        <div>
                          <h4 className="font-bold text-primary text-lg">{destination.shortName}</h4>
                          <p className="text-sm text-muted-foreground">{destination.day}</p>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground italic mb-4">"{destination.poeticDescription}"</p>
                      
                      <div className="space-y-3">
                        <div>
                          <h5 className="font-semibold text-sm text-foreground mb-1">Wildlife & Experiences</h5>
                          <div className="space-y-1">
                            {destination.highlights.slice(0, 3).map((highlight, index) => (
                              <div key={index} className="text-xs text-muted-foreground flex items-start gap-2">
                                <div className="w-1 h-1 rounded-full bg-primary mt-1.5 shrink-0" />
                                {highlight}
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <div className="pt-2 border-t">
                          <p className="text-xs text-muted-foreground">
                            <span className="font-medium">Perfect for:</span> {destination.bestFor}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Destination Details Card */}
        {selectedDestination && (
          <div className="mt-12 max-w-4xl mx-auto">
            {destinations
              .filter(dest => dest.id === selectedDestination)
              .map((destination) => (
                <Card key={destination.id} className="overflow-hidden animate-fade-in shadow-2xl border-primary/20">
                  <div className="relative h-64">
                    <img 
                      src={destination.image} 
                      alt={destination.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                    <div className="absolute bottom-6 left-6 text-white">
                      <Badge variant="secondary" className="mb-3 bg-white/20 text-white border-white/30">
                        {destination.day}
                      </Badge>
                      <h3 className="text-3xl font-bold mb-2">{destination.name}</h3>
                      <p className="text-lg opacity-90">{destination.description}</p>
                    </div>
                  </div>
                  
                  <CardContent className="p-8 space-y-6">
                    <p className="text-lg text-muted-foreground leading-relaxed italic">
                      "{destination.poeticDescription}"
                    </p>
                    
                    <div className="grid md:grid-cols-3 gap-6">
                      <div>
                        <Badge variant="outline" className="mb-3">Wildlife & Experiences</Badge>
                        <div className="space-y-2">
                          {destination.highlights.map((highlight, index) => (
                            <div key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                              {highlight}
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <Badge variant="outline" className="mb-3">Perfect For</Badge>
                        <p className="text-sm text-muted-foreground">{destination.bestFor}</p>
                      </div>
                      
                      <div>
                        <Badge variant="outline" className="mb-3">Terrain & Mood</Badge>
                        <p className="text-sm text-muted-foreground">
                          {destination.terrain} • {destination.mood}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        )}

        {/* Journey Flow Summary */}
        <div className="mt-20 text-center">
          <div className="max-w-5xl mx-auto">
            <h3 className="text-3xl font-bold text-primary mb-8">Your 9-Day Transformation</h3>
            <div className="grid md:grid-cols-4 gap-8">
              {destinations.map((dest, index) => (
                <div 
                  key={dest.id}
                  className="group cursor-pointer p-4 rounded-xl hover:bg-muted/30 transition-all duration-300"
                  onMouseEnter={() => setHoveredDestination(dest.id)}
                  onMouseLeave={() => setHoveredDestination(null)}
                  onClick={() => setSelectedDestination(dest.id)}
                >
                  <div className={`transition-all duration-300 ${
                    hoveredDestination === dest.id ? 'scale-105' : 'scale-100'
                  }`}>
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors shadow-lg">
                      {React.cloneElement(dest.icon as React.ReactElement, { className: "h-6 w-6" })}
                    </div>
                    <h4 className="font-semibold text-base mb-2">{dest.shortName}</h4>
                    <p className="text-sm text-muted-foreground">{dest.day}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};