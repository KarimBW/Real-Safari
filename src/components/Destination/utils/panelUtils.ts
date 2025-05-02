
import { PanelData } from '../HeroPanel';

export const getPanelImages = (id: string | undefined, camps: string[]): PanelData[] => {
  if (id === 'okavango') {
    return [
      {
        title: camps[0], // Moremi
        subtitle: "Leopard territory",
        image: "/lovable-uploads/c49f95ad-a567-416a-b70c-bef52f68f29a.png" // Leopard image
      }, {
        title: camps[1], // Chobe
        subtitle: "Giraffe sanctuary",
        image: "/lovable-uploads/8a3c95d1-48d1-4c2c-b36c-d8accf95133d.png" // Giraffes image
      }, {
        title: camps[2], // Maun
        subtitle: "Delta views",
        image: "/lovable-uploads/59f35e67-5f3a-4177-b4a1-53e4389fee2d.png" // Delta image
      }, {
        title: camps[3], // Khwai
        subtitle: "Wild dog haven",
        image: "/lovable-uploads/5c9ac31f-a57c-43ee-adb0-a97c4ededc98.png" // Wild dog image
      }, {
        title: camps[4], // Savuti
        subtitle: "Elephant paradise",
        image: "/lovable-uploads/13144fc7-d253-4fd1-997d-96c622d2754d.png" // Elephant image
      }
    ];
  } else if (id === 'kalahari') {
    return [
      {
        title: camps[0], // CKGR
        subtitle: "Zebra gatherings",
        image: "/lovable-uploads/a79c2903-be2b-4134-acd5-2baba07a13ab.png" // CKGR image - Zebras
      }, {
        title: camps[1], // Khutse
        subtitle: "Ostrich territory",
        image: "/lovable-uploads/02233ed5-a1fa-40fd-a777-8e843f957aa6.png" // Khutse image - Ostrich
      }, {
        title: camps[2], // Ghanzi
        subtitle: "Cultural experience",
        image: "/lovable-uploads/06030a97-1c87-470f-9e72-3e4704564718.png" // Ghanzi image - People
      }, {
        title: camps[3], // Mabuasehube
        subtitle: "Cheetah country",
        image: "/lovable-uploads/8fa91479-08fa-445b-abad-047ba109fedf.png" // Mabuasehube image - Cheetah
      }, {
        title: camps[4], // Kgalagadi
        subtitle: "Oryx plains",
        image: "/lovable-uploads/cdf8c116-9e07-456b-9fd6-ba373ceb9d2d.png" // Kgalagadi image - Oryx
      }
    ];
  } else {
    // Default images for other destinations
    return [{
      title: camps[0],
      subtitle: "Salt flat expanses",
      image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3"
    }, {
      title: camps[1],
      subtitle: "Baobab landscapes",
      image: "https://images.unsplash.com/photo-1504193902866-31d5d1c28ca9?ixlib=rb-4.0.3"
    }, {
      title: camps[2],
      subtitle: "Sunset vistas",
      image: "https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?ixlib=rb-4.0.3"
    }, {
      title: camps[3],
      subtitle: "Starlit skies",
      image: "https://images.unsplash.com/photo-1507272931001-fc06c17e4f43?ixlib=rb-4.0.3"
    }, {
      title: camps[4],
      subtitle: "Flamingo gatherings",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3"
    }];
  }
};

export const getCampNames = (id: string | undefined): string[] => {
  if (id === 'makgadikgadi') {
    return ['Salt Pan', 'Nxai Pan', 'Camp Three', 'Camp Four', 'Camp Five'];
  } else if (id === 'kalahari') {
    return ['CKGR', 'Khutse', 'Ghanzi', 'Mabuasehube', 'Kgalagadi'];
  } else {
    return ['Moremi', 'Chobe', 'Maun', 'Khwai', 'Savuti'];
  }
};
