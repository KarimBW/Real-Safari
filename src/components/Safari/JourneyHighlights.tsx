import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface DestinationHighlight {
  name: string;
  description: string;
  highlights: string;
  terrain: string;
  mood: string;
  vibe: string;
  image: string;
  camps: string[];
}

const destinationHighlights: DestinationHighlight[] = [
  {
    name: "Central Kalahari Game Reserve",
    description: "The soul of solitude where horizons forget to end and the road becomes your story.",
    highlights: "Zebra, oryx, lion, cheetah, springbok",
    terrain: "Open pans, fossil riverbeds, sandy tracks",
    mood: "Remote, raw, meditative",
    vibe: "For travellers who like their solitude shaken, not stirred",
    image: "/lovable-uploads/f8df9392-5003-48b6-ac98-5b48f496ad5b.png",
    camps: ["CKGR"]
  },
  {
    name: "Makgadikgadi Pans",
    description: "Ancient salt flats where elephants march like ghosts and silence makes itself at home.",
    highlights: "Elephants, zebra, flamingos (wet season), brown hyena",
    terrain: "Hard-packed salt, dusty tracks, soft edges after rain",
    mood: "Otherworldly, reflective, wide open",
    vibe: "For dreamers chasing horizons",
    image: "/lovable-uploads/816850fe-ec88-41bc-9a5f-644224f107cc.png",
    camps: ["Makgadikgadi"]
  },
  {
    name: "Nxai Pan National Park",
    description: "Where drama meets elegance with lions in tall grass and Baines' Baobabs keeping ancient secrets.",
    highlights: "Lion, zebra, elephant, giraffe",
    terrain: "Flat pans, scattered woodland, baobab stands",
    mood: "Gentle, timeless, visually stunning",
    vibe: "For slow movers and still shooters",
    image: "/lovable-uploads/6f7ac6f4-6078-4baa-8ef8-1a5d7f4e8bc0.png",
    camps: ["Nxai Pan"]
  }
];

export const JourneyHighlights: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-background to-muted/20 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">Your Journey Through Botswana</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Experience three distinct ecosystems in one epic 9-day adventure. From desert solitude to salt pan vastness, 
            each destination offers its own magic and wildlife encounters.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {destinationHighlights.map((destination, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-48">
                <img 
                  src={destination.image} 
                  alt={destination.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20" />
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-primary mb-2">{destination.name}</h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {destination.description}
                </p>
                
                <div className="space-y-3">
                  <div>
                    <Badge variant="outline" className="mb-2">Wildlife</Badge>
                    <p className="text-xs text-muted-foreground">{destination.highlights}</p>
                  </div>
                  
                  <div>
                    <Badge variant="outline" className="mb-2">Terrain</Badge>
                    <p className="text-xs text-muted-foreground">{destination.terrain}</p>
                  </div>
                  
                  <div>
                    <Badge variant="outline" className="mb-2">Vibe</Badge>
                    <p className="text-xs text-muted-foreground italic">{destination.vibe}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};