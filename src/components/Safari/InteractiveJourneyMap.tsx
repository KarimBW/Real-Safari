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
    id: "day1",
    name: "Maun Arrival",
    shortName: "Gateway",
    description: "Your safari begins in the heart of the Okavango",
    poeticDescription: "Where civilization whispers goodbye and the wild calls your name",
    highlights: ["Safari briefing", "Vehicle handover", "Last supplies", "Welcome dinner"],
    bestFor: "Preparation & anticipation",
    terrain: "Town gateway",
    mood: "Excited anticipation",
    image: "/lovable-uploads/59f35e67-5f3a-4177-b4a1-53e4389fee2d.png", // Delta image for Maun
    position: { x: 10, y: 50 },
    day: "Day 1",
    icon: <Compass className="h-4 w-4" />
  },
  {
    id: "day2",
    name: "Central Kalahari Entry",
    shortName: "Desert Gateway",
    description: "First taste of the infinite desert expanses",
    poeticDescription: "The horizon calls and your soul answers with wonder",
    highlights: ["Desert orientation", "Wildlife tracking", "Camp setup", "Star gazing"],
    bestFor: "Adventure begins",
    terrain: "Sandy tracks & acacia",
    mood: "Discovery excitement",
    image: "/lovable-uploads/a79c2903-be2b-4134-acd5-2baba07a13ab.png", // CKGR zebras
    position: { x: 22, y: 65 },
    day: "Day 2",
    icon: <Binoculars className="h-4 w-4" />
  },
  {
    id: "day3",
    name: "Deep Kalahari",
    shortName: "Heart of Desert",
    description: "Where silence teaches you to listen to your soul",
    poeticDescription: "In the vastness of forever, you discover the rhythm of your own heartbeat",
    highlights: ["Desert-adapted wildlife", "Ancient valleys", "Bushmen culture", "Meditation walks"],
    bestFor: "Soul-searching & solitude",
    terrain: "Ancient pans & valleys",
    mood: "Meditative wonder",
    image: "/lovable-uploads/02233ed5-a1fa-40fd-a777-8e843f957aa6.png", // Ostrich from Khutse
    position: { x: 34, y: 70 },
    day: "Day 3",
    icon: <Camera className="h-4 w-4" />
  },
  {
    id: "day4",
    name: "Kalahari Wildlife",
    shortName: "Desert Life",
    description: "Discover how life thrives in the harshest beauty",
    poeticDescription: "Every creature here writes poetry in the sand with their survival",
    highlights: ["Meerkats colony", "Desert lions", "Gemsbok herds", "Sunset photography"],
    bestFor: "Wildlife photography",
    terrain: "Open grasslands",
    mood: "Wild connection",
    image: "/lovable-uploads/09a00f34-b704-4711-88f5-929dbe49f205.png", // Cheetah from Mabuasehube
    position: { x: 46, y: 65 },
    day: "Day 4",
    icon: <MapPin className="h-4 w-4" />
  },
  {
    id: "day5",
    name: "Makgadikgadi Arrival",
    shortName: "Salt Dreams Begin",
    description: "Ancient sea floors where time stands still",
    poeticDescription: "Step onto stages where earth rehearses eternity",
    highlights: ["Salt pan exploration", "Flamingo spotting", "Archaeological sites", "Endless horizons"],
    bestFor: "Epic photography",
    terrain: "Hard-packed salt",
    mood: "Otherworldly awe",
    image: "/lovable-uploads/a25ce305-a695-4546-9fae-b8fdc60cc4d9.png", // Makgadikgadi elephants
    position: { x: 58, y: 40 },
    day: "Day 5",
    icon: <Camera className="h-4 w-4" />
  },
  {
    id: "day6",
    name: "Elephant Migration",
    shortName: "Giant Procession",
    description: "Where elephants march like ghosts across ancient stages",
    poeticDescription: "Witness the oldest parade on earth - giants walking the paths of their ancestors",
    highlights: ["Elephant herds", "Migration routes", "Ancient baobabs", "Cultural storytelling"],
    bestFor: "Wildlife spectacle",
    terrain: "Migration corridors",
    mood: "Humbling reverence",
    image: "/lovable-uploads/13144fc7-d253-4fd1-997d-96c622d2754d.png", // Savuti elephants
    position: { x: 66, y: 35 },
    day: "Day 6",
    icon: <Binoculars className="h-4 w-4" />
  },
  {
    id: "day7",
    name: "Flamingo Spectacle",
    shortName: "Pink Paradise",
    description: "Thousands of flamingos paint the salt pans pink",
    poeticDescription: "Nature's most delicate artists create masterpieces in motion",
    highlights: ["Flamingo colonies", "Salt crystallization", "Bird photography", "Sunset reflections"],
    bestFor: "Serene beauty",
    terrain: "Shallow salt waters",
    mood: "Peaceful wonder",
    image: "/lovable-uploads/52fba817-468b-49a9-827a-bb36b663d4b6.png", // Flamingo image
    position: { x: 72, y: 30 },
    day: "Day 7",
    icon: <Camera className="h-4 w-4" />
  },
  {
    id: "day8",
    name: "Nxai Pan & Baines' Baobabs",
    shortName: "Ancient Giants",
    description: "Where legendary trees guard timeless secrets",
    poeticDescription: "Under Baines' legendary trees, every sunset feels like the first one ever painted",
    highlights: ["Baines' Baobabs", "Lion encounters", "Historical significance", "Golden hour magic"],
    bestFor: "Iconic photography",
    terrain: "Scattered woodlands",
    mood: "Timeless elegance",
    image: "/lovable-uploads/262d126c-8864-467a-a4dc-fa9033a12dc2.png", // Baobab image
    position: { x: 80, y: 20 },
    day: "Day 8",
    icon: <MapPin className="h-4 w-4" />
  },
  {
    id: "day9",
    name: "Final Safari & Departure",
    shortName: "Journey's End",
    description: "Last moments with the wild before returning transformed",
    poeticDescription: "You came seeking adventure but leave carrying the soul of Africa within you",
    highlights: ["Final game drive", "Reflection time", "Journey celebration", "Departure preparations"],
    bestFor: "Reflection & gratitude",
    terrain: "Open savannas",
    mood: "Bittersweet fulfillment",
    image: "/lovable-uploads/d02c9222-8e68-4653-b5ca-528385d274b4.png", // Nxai lions
    position: { x: 88, y: 15 },
    day: "Day 9",
    icon: <Compass className="h-4 w-4" />
  }
];

export const InteractiveJourneyMap: React.FC = () => {
  const [hoveredDestination, setHoveredDestination] = useState<string | null>(null);
  const [selectedDestination, setSelectedDestination] = useState<string>("day1");

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

        {/* Enhanced Interactive Map with increased height */}
        <div className="max-w-5xl mx-auto">
          <div className="relative w-full h-[60vh] min-h-[500px] overflow-hidden mb-8">
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
                    L ${destinations[1].position.x} ${destinations[1].position.y}
                    L ${destinations[2].position.x} ${destinations[2].position.y}
                    L ${destinations[3].position.x} ${destinations[3].position.y}
                    L ${destinations[4].position.x} ${destinations[4].position.y}
                    L ${destinations[5].position.x} ${destinations[5].position.y}
                    L ${destinations[6].position.x} ${destinations[6].position.y}
                    L ${destinations[7].position.x} ${destinations[7].position.y}
                    L ${destinations[8].position.x} ${destinations[8].position.y}`}
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

                {/* Enhanced day label with better positioning */}
                <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                  <Badge variant="outline" className="text-sm font-medium bg-white/95 backdrop-blur-sm shadow-lg">
                    {destination.day}
                  </Badge>
                </div>

                {/* Enhanced hover tooltip with itinerary details */}
                {hoveredDestination === destination.id && (
                  <div className="absolute -top-40 left-1/2 transform -translate-x-1/2 z-20">
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
            <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-4">
              {destinations.map((dest, index) => (
                <div 
                  key={dest.id}
                  className="group cursor-pointer p-3 rounded-xl hover:bg-muted/30 transition-all duration-300"
                  onMouseEnter={() => setHoveredDestination(dest.id)}
                  onMouseLeave={() => setHoveredDestination(null)}
                  onClick={() => setSelectedDestination(dest.id)}
                >
                  <div className={`transition-all duration-300 ${
                    hoveredDestination === dest.id ? 'scale-105' : 'scale-100'
                  }`}>
                    <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors shadow-lg">
                      {React.cloneElement(dest.icon as React.ReactElement, { className: "h-5 w-5" })}
                    </div>
                    <h4 className="font-semibold text-xs mb-1 text-center">{dest.shortName}</h4>
                    <p className="text-xs text-muted-foreground text-center">{dest.day}</p>
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