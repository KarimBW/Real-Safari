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
    <div className="bg-gradient-to-b from-background via-muted/10 to-background py-20">
      <div className="container mx-auto px-4">
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

        <div className="grid lg:grid-cols-3 gap-12 items-start">
          {/* Interactive Map */}
          <div className="lg:col-span-2">
            <div className="relative bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20 rounded-3xl p-8 overflow-hidden shadow-2xl">
              {/* Background texture overlay */}
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_50%_50%,rgba(251,191,36,0.1),transparent_50%)]" />
              
              {/* Map paths connecting destinations */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
                    <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
                  </linearGradient>
                </defs>
                <path
                  d={`M ${destinations[0].position.x} ${destinations[0].position.y} 
                      Q 25 70 ${destinations[1].position.x} ${destinations[1].position.y}
                      Q 50 55 ${destinations[2].position.x} ${destinations[2].position.y}
                      Q 70 35 ${destinations[3].position.x} ${destinations[3].position.y}`}
                  stroke="url(#pathGradient)"
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray="5,5"
                  className="animate-pulse"
                />
              </svg>

              {/* Destination points */}
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
                  {/* Pulsing ring */}
                  <div className={`absolute inset-0 rounded-full transition-all duration-700 ${
                    hoveredDestination === destination.id 
                      ? 'bg-primary/20 scale-150' 
                      : 'bg-primary/10 scale-100'
                  }`} />
                  
                  {/* Main destination marker */}
                  <div className={`relative w-16 h-16 rounded-full border-4 border-white shadow-lg transition-all duration-500 overflow-hidden ${
                    selectedDestination === destination.id 
                      ? 'ring-4 ring-primary/50 scale-110' 
                      : hoveredDestination === destination.id 
                        ? 'scale-105 shadow-xl' 
                        : 'scale-100'
                  }`}>
                    <img 
                      src={destination.image} 
                      alt={destination.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 text-white">
                      {destination.icon}
                    </div>
                  </div>

                  {/* Day label */}
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                    <Badge variant="outline" className="text-xs font-medium bg-white/90 backdrop-blur-sm">
                      {destination.day}
                    </Badge>
                  </div>

                  {/* Hover tooltip */}
                  {hoveredDestination === destination.id && (
                    <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 z-10">
                      <div className="bg-white dark:bg-gray-900 rounded-lg p-3 shadow-xl border min-w-48 animate-scale-in">
                        <h4 className="font-bold text-primary text-sm mb-1">{destination.shortName}</h4>
                        <p className="text-xs text-muted-foreground italic">{destination.poeticDescription}</p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Destination Details */}
          <div className="lg:col-span-1">
            {destinations
              .filter(dest => dest.id === selectedDestination)
              .map((destination) => (
                <Card key={destination.id} className="overflow-hidden animate-fade-in">
                  <div className="relative h-48">
                    <img 
                      src={destination.image} 
                      alt={destination.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <Badge variant="secondary" className="mb-2 bg-white/20 text-white border-white/30">
                        {destination.day}
                      </Badge>
                      <h3 className="text-xl font-bold">{destination.name}</h3>
                    </div>
                  </div>
                  
                  <CardContent className="p-6 space-y-4">
                    <p className="text-muted-foreground leading-relaxed italic">
                      "{destination.poeticDescription}"
                    </p>
                    
                    <div className="space-y-3">
                      <div>
                        <Badge variant="outline" className="mb-2">Wildlife & Experiences</Badge>
                        <div className="space-y-1">
                          {destination.highlights.map((highlight, index) => (
                            <div key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                              <div className="w-1 h-1 rounded-full bg-primary mt-2 shrink-0" />
                              {highlight}
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <Badge variant="outline" className="mb-2">Perfect For</Badge>
                        <p className="text-sm text-muted-foreground">{destination.bestFor}</p>
                      </div>
                      
                      <div>
                        <Badge variant="outline" className="mb-2">Terrain & Mood</Badge>
                        <p className="text-sm text-muted-foreground">
                          {destination.terrain} • {destination.mood}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>

        {/* Journey Flow Summary */}
        <div className="mt-16 text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-primary mb-6">Your 9-Day Transformation</h3>
            <div className="grid md:grid-cols-4 gap-6">
              {destinations.map((dest, index) => (
                <div 
                  key={dest.id}
                  className="group cursor-pointer"
                  onMouseEnter={() => setHoveredDestination(dest.id)}
                  onMouseLeave={() => setHoveredDestination(null)}
                  onClick={() => setSelectedDestination(dest.id)}
                >
                  <div className={`transition-all duration-300 ${
                    hoveredDestination === dest.id ? 'scale-105' : 'scale-100'
                  }`}>
                    <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      {dest.icon}
                    </div>
                    <h4 className="font-semibold text-sm mb-1">{dest.shortName}</h4>
                    <p className="text-xs text-muted-foreground">{dest.day}</p>
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