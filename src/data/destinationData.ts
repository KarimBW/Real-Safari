
// Define the types for better TypeScript support
export interface Stats {
  castles: string;
  lakes: string;
  islands: string;
}

export interface Tour {
  title: string;
  days: string;
  description: string;
  price: string;
}

export interface DestinationData {
  title: string;
  mainDescription: string;
  stats: Stats;
  descriptionTitle: string;
  descriptionText: string[];
  tours: Tour[];
}

export type EditableData = {
  title: string;
  mainDescription: string;
  stats: Stats;
  descriptionTitle: string;
  descriptionText: string[];
  tours: Tour[];
  [key: string]: any;
};

export const destinationData: Record<string, DestinationData> = {
  okavango: {
    title: "OKAVANGO",
    mainDescription: "Okavango is a paradise of extraordinary beauty, where you can find almost unlimited wildlife adventures, beautiful wetlands, and pristine wilderness.",
    stats: {
      castles: "3K+",
      lakes: "12K+",
      islands: "500+"
    },
    descriptionTitle: "DISCOVER OKAVANGO",
    descriptionText: [
      "Okavango is a paradise of extraordinary beauty, where you can find almost unlimited wildlife adventures, beautiful wetlands, and pristine wilderness.",
      "Rich history surrounds almost everything, revealing the tales of the region of legendary safaris. Dramatic vistas will not cease to surprise you. The vast highlands of Botswana's five biospheres of remote mountains and plains, with mountains and secluded sandy beaches."
    ],
    tours: [
      {
        title: "OKAVANGO DELTA TOUR",
        days: "5 days",
        description: "The magic of Okavango awaits you in this captivating excursion. You'll be charmed by the wonders of this remarkable place.",
        price: "£1,895"
      },
      {
        title: "WATERWAYS TOUR",
        days: "4 days",
        description: "Experience the vast waterways of Botswana. Marvel over stunning views of wildlands. Watch safari and the famous boats drift freely.",
        price: "£1,695" 
      },
      {
        title: "WILDLIFE TOUR",
        days: "6 days",
        description: "Get to know more in-depth the animals. Opens the night to all the wonders. Open the wildest and the richest area for excellent wildlife spotting.",
        price: "£1,995"
      },
      {
        title: "LUXURY SAFARI TOUR",
        days: "10 days",
        description: "On this tour you will see everything: the beauty of the landscape, the animals, excellent lodges, with professional guides and expert trackers.",
        price: "£3,895"
      }
    ]
  },
  kalahari: {
    title: "KALAHARI",
    mainDescription: "Kalahari is a land of stunning contrast, where vast desert plains meet vibrant wildlife and ancient traditions thrive under starlit skies.",
    stats: {
      castles: "2K+",
      lakes: "5K+",
      islands: "300+"
    },
    descriptionTitle: "DISCOVER KALAHARI",
    descriptionText: [
      "Kalahari is a land of stunning contrast, where vast desert plains meet vibrant wildlife and ancient traditions thrive under starlit skies.",
      "Ancient landscapes tell stories of human resilience, displaying the harmony between nature and indigenous communities. The endless horizons of red sand dunes, sparse vegetation, and remarkable wildlife adaptations create an unforgettable safari experience."
    ],
    tours: [
      {
        title: "DESERT EXPLORATION TOUR",
        days: "6 days",
        description: "Journey through the magnificent red dunes and discover the unique adaptations of desert wildlife in this immersive experience.",
        price: "£2,195"
      },
      {
        title: "BUSHMEN CULTURAL TOUR",
        days: "4 days",
        description: "Learn about the ancient traditions and survival techniques of the San people who have thrived in this harsh environment for thousands of years.",
        price: "£1,795" 
      },
      {
        title: "STARGAZING SAFARI",
        days: "3 days",
        description: "Experience the breathtaking night skies of the Kalahari, renowned as one of the best places for astronomy in the world.",
        price: "£1,495"
      },
      {
        title: "COMPLETE KALAHARI EXPERIENCE",
        days: "9 days",
        description: "This comprehensive tour combines wildlife viewing, cultural experiences, and incredible landscapes for the ultimate Kalahari adventure.",
        price: "£3,495"
      }
    ]
  },
  makgadikgadi: {
    title: "MAKGADIKGADI",
    mainDescription: "Makgadikgadi offers a surreal landscape of ancient salt pans, where flamingos gather and zebras migrate across shimmering white horizons.",
    stats: {
      castles: "1K+",
      lakes: "8K+",
      islands: "200+"
    },
    descriptionTitle: "DISCOVER MAKGADIKGADI",
    descriptionText: [
      "Makgadikgadi offers a surreal landscape of ancient salt pans, where flamingos gather and zebras migrate across shimmering white horizons.",
      "Once an enormous prehistoric lake, the pans now form one of Africa's most unique ecosystems. During the wet season, shallow water attracts thousands of pink flamingos, while the dry season reveals cracked, geometric patterns stretching to the horizon."
    ],
    tours: [
      {
        title: "SALT PAN EXPEDITION",
        days: "4 days",
        description: "Experience the otherworldly beauty of these vast salt flats and witness the incredible optical illusions created by the endless white landscape.",
        price: "£1,895"
      },
      {
        title: "ZEBRA MIGRATION SAFARI",
        days: "6 days",
        description: "Time your visit to witness one of Africa's most spectacular yet lesser-known wildlife migrations as thousands of zebras cross the pans.",
        price: "£2,295" 
      },
      {
        title: "MEERKAT ADVENTURE",
        days: "3 days",
        description: "Get up close with habituated meerkat colonies and learn about these fascinating creatures in their natural environment.",
        price: "£1,495"
      },
      {
        title: "COMPLETE PANS EXPERIENCE",
        days: "8 days",
        description: "This comprehensive tour explores the Makgadikgadi and neighboring Nxai Pans, offering the full spectrum of experiences in these remarkable landscapes.",
        price: "£3,295"
      }
    ]
  }
};
