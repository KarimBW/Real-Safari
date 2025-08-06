import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, MapPin, Calendar, Users } from "lucide-react";

interface PackageIncluded {
  category: string;
  items: string[];
}

const packageInclusions: PackageIncluded[] = [
  {
    category: "Transportation",
    items: [
      "4x4 vehicle with camping gear",
      "Vehicle handover in Maun",
      "All permits and park fees",
      "GPS navigation system"
    ]
  },
  {
    category: "Accommodation",
    items: [
      "Rooftop tent camping",
      "All camping equipment",
      "Portable shower facilities",
      "Camp furniture and cooking gear"
    ]
  },
  {
    category: "Support",
    items: [
      "24/7 emergency contact",
      "Detailed route maps",
      "Wildlife identification guides",
      "Recovery equipment"
    ]
  }
];

export const PackageOverview: React.FC = () => {
  return (
    <div className="bg-background py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 text-primary border-primary">
            Complete Safari Package
          </Badge>
          <h2 className="text-4xl font-bold text-primary mb-4">
            Botswana Wild: Kalahari & Makgadikgadi Safari
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A carefully curated 9-day journey through Botswana's most iconic wilderness areas. 
            From the remote heart of the Kalahari to the vast salt pans of Makgadikgadi, 
            experience the full spectrum of desert beauty.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Package Details */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  Journey Overview
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">9 days, 8 nights</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">2-8 people per booking</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">Start/End: Maun</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Travel Style Options</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-1" />
                  <div>
                    <p className="font-medium">Solo Adventure</p>
                    <p className="text-sm text-muted-foreground">Self-drive with detailed maps and 24/7 support</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-1" />
                  <div>
                    <p className="font-medium">Guided Experience</p>
                    <p className="text-sm text-muted-foreground">Professional guide accompanies your journey (+RM 1,500)</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* What's Included */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Complete Package Includes</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {packageInclusions.map((category, index) => (
                    <div key={index}>
                      <h4 className="font-semibold text-primary mb-3">{category.category}</h4>
                      <div className="space-y-2">
                        {category.items.map((item, itemIndex) => (
                          <div key={itemIndex} className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                            <span className="text-sm text-muted-foreground">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};