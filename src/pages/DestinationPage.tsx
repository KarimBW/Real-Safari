
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Header } from "@/components/Safari/Header";

const destinationData = {
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

const DestinationPage = () => {
  const { id } = useParams();
  const destination = destinationData[id as keyof typeof destinationData] || destinationData.okavango;
  const [editMode, setEditMode] = useState(false);
  const [editData, setEditData] = useState(destination);

  const handleEditToggle = () => {
    setEditMode(!editMode);
    if (editMode) {
      console.log("Saving changes:", editData);
    }
  };

  const handleTextChange = (field: string, value: string) => {
    setEditData({
      ...editData,
      [field]: value
    });
  };

  const handleNestedTextChange = (category: string, field: string, value: string) => {
    setEditData({
      ...editData,
      [category]: {
        ...editData[category as keyof typeof editData],
        [field]: value
      }
    });
  };

  const handleDescriptionChange = (index: number, value: string) => {
    const newDescriptionText = [...editData.descriptionText];
    newDescriptionText[index] = value;
    setEditData({
      ...editData,
      descriptionText: newDescriptionText
    });
  };

  const handleTourChange = (index: number, field: string, value: string) => {
    const newTours = [...editData.tours];
    newTours[index] = {
      ...newTours[index],
      [field]: value
    };
    setEditData({
      ...editData,
      tours: newTours
    });
  };

  const data = editMode ? editData : destination;

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Admin edit button */}
      <button 
        onClick={handleEditToggle}
        className="fixed bottom-4 right-4 z-50 bg-safari-gold text-white px-4 py-2 rounded-md"
      >
        {editMode ? "Save Changes" : "Edit Content"}
      </button>
      
      {/* Hero Section */}
      <section className="relative h-screen bg-gray-100">
        <div className="absolute inset-0 bg-cover bg-center z-0" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3')" }}>
          <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="text-center">
            {editMode ? (
              <input
                type="text"
                value={data.title}
                onChange={(e) => handleTextChange('title', e.target.value)}
                className="text-6xl font-bold text-white bg-transparent border-b border-white text-center mb-8"
              />
            ) : (
              <h1 className="text-6xl font-bold text-white mb-8">{data.title}</h1>
            )}
            <button className="border border-white text-white px-6 py-2 hover:bg-white hover:text-gray-900 transition-colors">
              BOOK NOW
            </button>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-16 px-8 md:px-16 flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 pr-0 md:pr-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            {editMode ? (
              <input
                type="text"
                value="AWESOME DESTINATION"
                className="w-full border-b border-gray-300"
                readOnly
              />
            ) : (
              "AWESOME DESTINATION"
            )}
          </h2>
          <div className="flex justify-between max-w-md">
            <div className="text-center">
              <h3 className="text-2xl font-bold">
                {editMode ? (
                  <input
                    type="text"
                    value={data.stats.castles}
                    onChange={(e) => handleNestedTextChange('stats', 'castles', e.target.value)}
                    className="w-24 text-center border-b border-gray-300"
                  />
                ) : (
                  data.stats.castles
                )}
              </h3>
              <p className="text-gray-600">Wildlife</p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold">
                {editMode ? (
                  <input
                    type="text"
                    value={data.stats.lakes}
                    onChange={(e) => handleNestedTextChange('stats', 'lakes', e.target.value)}
                    className="w-24 text-center border-b border-gray-300"
                  />
                ) : (
                  data.stats.lakes
                )}
              </h3>
              <p className="text-gray-600">Lakes</p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold">
                {editMode ? (
                  <input
                    type="text"
                    value={data.stats.islands}
                    onChange={(e) => handleNestedTextChange('stats', 'islands', e.target.value)}
                    className="w-24 text-center border-b border-gray-300"
                  />
                ) : (
                  data.stats.islands
                )}
              </h3>
              <p className="text-gray-600">Islands</p>
            </div>
          </div>
          <button className="mt-8 border border-gray-900 px-4 py-2 hover:bg-gray-900 hover:text-white transition-colors">
            READ MORE
          </button>
        </div>
        <div className="w-full md:w-1/2 mt-8 md:mt-0 grid grid-cols-3 gap-4">
          <div className="col-span-2">
            <div className="h-64 bg-gray-200 rounded overflow-hidden">
              <div className="h-full w-full bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1504432842672-1a79f78e4084?ixlib=rb-4.0.3')" }}>
                {editMode && <div className="h-full w-full flex items-center justify-center bg-black bg-opacity-50 text-white">Photo Area 1</div>}
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <div className="h-64 bg-gray-200 rounded overflow-hidden">
              <div className="h-full w-full bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1517825656053-95ab2b9609e6?ixlib=rb-4.0.3')" }}>
                {editMode && <div className="h-full w-full flex items-center justify-center bg-black bg-opacity-50 text-white">Photo Area 2</div>}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Video Section */}
      <section className="py-16 px-8 md:px-16 flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 pr-0 md:pr-8 mb-8 md:mb-0">
          <div className="aspect-video bg-gray-200 rounded overflow-hidden relative">
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-4.0.3')" }}>
              {editMode && <div className="h-full w-full flex items-center justify-center bg-black bg-opacity-50 text-white">Video Area</div>}
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center">
                <div className="ml-1 w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-gray-900 border-b-8 border-b-transparent"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            {editMode ? (
              <input
                type="text"
                value={data.descriptionTitle}
                onChange={(e) => handleTextChange('descriptionTitle', e.target.value)}
                className="w-full border-b border-gray-300"
              />
            ) : (
              data.descriptionTitle
            )}
          </h2>
          <div className="space-y-4">
            {data.descriptionText.map((paragraph, index) => (
              <div key={index}>
                {editMode ? (
                  <textarea
                    value={paragraph}
                    onChange={(e) => handleDescriptionChange(index, e.target.value)}
                    className="w-full border border-gray-300 p-2 rounded"
                    rows={3}
                  />
                ) : (
                  <p>{paragraph}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Tours Section */}
      <section className="py-16 px-8 md:px-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">POPULAR TOURS</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.tours.map((tour, index) => (
            <div key={index} className="mb-8">
              <div className="h-48 bg-gray-200 rounded overflow-hidden mb-4">
                <div className="h-full w-full bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-${520 + index * 10}-create-555?ixlib=rb-4.0.3')` }}>
                  {editMode && <div className="h-full w-full flex items-center justify-center bg-black bg-opacity-50 text-white">Tour Photo {index + 1}</div>}
                </div>
              </div>
              <div>
                {editMode ? (
                  <input
                    type="text"
                    value={tour.title}
                    onChange={(e) => handleTourChange(index, 'title', e.target.value)}
                    className="font-bold block w-full border-b border-gray-300"
                  />
                ) : (
                  <h3 className="font-bold">{tour.title}</h3>
                )}
                <span className="text-sm text-gray-600 block mb-2">
                  {editMode ? (
                    <input
                      type="text"
                      value={tour.days}
                      onChange={(e) => handleTourChange(index, 'days', e.target.value)}
                      className="w-full border-b border-gray-300"
                    />
                  ) : (
                    tour.days
                  )}
                </span>
                {editMode ? (
                  <textarea
                    value={tour.description}
                    onChange={(e) => handleTourChange(index, 'description', e.target.value)}
                    className="w-full border border-gray-300 p-2 rounded mb-2"
                    rows={3}
                  />
                ) : (
                  <p className="mb-2">{tour.description}</p>
                )}
                <div className="flex justify-between items-center mt-2">
                  {editMode ? (
                    <input
                      type="text"
                      value={tour.price}
                      onChange={(e) => handleTourChange(index, 'price', e.target.value)}
                      className="w-32 border-b border-gray-300"
                    />
                  ) : (
                    <span className="font-bold">{tour.price}</span>
                  )}
                  <button className="text-sm border border-gray-900 px-3 py-1 hover:bg-gray-900 hover:text-white transition-colors">
                    VIEW TOUR →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Gallery Section */}
      <section className="py-16 px-8 md:px-16">
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="col-span-3 md:col-span-1 h-64 bg-gray-200 rounded overflow-hidden">
            <div className="h-full w-full bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1507272931001-fc06c17e4f43?ixlib=rb-4.0.3')" }}>
              {editMode && <div className="h-full w-full flex items-center justify-center bg-black bg-opacity-50 text-white">Gallery Photo 1</div>}
            </div>
          </div>
          <div className="col-span-3 md:col-span-2 h-64 bg-gray-200 rounded overflow-hidden">
            <div className="h-full w-full bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1513023840371-dd774fcaee5b?ixlib=rb-4.0.3')" }}>
              {editMode && <div className="h-full w-full flex items-center justify-center bg-black bg-opacity-50 text-white">Gallery Photo 2</div>}
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-3 gap-4">
          <div className="h-64 bg-gray-200 rounded overflow-hidden">
            <div className="h-full w-full bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1518057111178-44a106bad636?ixlib=rb-4.0.3')" }}>
              {editMode && <div className="h-full w-full flex items-center justify-center bg-black bg-opacity-50 text-white">Gallery Photo 3</div>}
            </div>
          </div>
          <div className="h-64 bg-gray-200 rounded overflow-hidden">
            <div className="h-full w-full bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1507915977619-6ccfe8003b22?ixlib=rb-4.0.3')" }}>
              {editMode && <div className="h-full w-full flex items-center justify-center bg-black bg-opacity-50 text-white">Gallery Photo 4</div>}
            </div>
          </div>
          <div className="h-64 bg-gray-200 rounded overflow-hidden">
            <div className="h-full w-full bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1505778276668-26b3ff7af103?ixlib=rb-4.0.3')" }}>
              {editMode && <div className="h-full w-full flex items-center justify-center bg-black bg-opacity-50 text-white">Gallery Photo 5</div>}
            </div>
          </div>
        </div>
        
        <div className="text-center mt-8">
          <button className="border border-gray-900 px-4 py-2 hover:bg-gray-900 hover:text-white transition-colors">
            VIEW OUR PHOTO GALLERY →
          </button>
        </div>
      </section>
      
      {/* Reviews Section */}
      <section className="py-16 px-8 md:px-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">REVIEWS</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 border rounded">
            <div className="flex items-center mb-4">
              <div className="w-16 h-16 rounded-full bg-gray-200 overflow-hidden mr-4">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3" alt="Reviewer" className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="font-bold">SAFARI TOUR</h3>
                <div className="flex text-yellow-400">
                  ★★★★★
                </div>
              </div>
            </div>
            <p className="mb-4">"The experience was amazing! Our guide knew exactly where to take us to see the animals. We had an incredible time!"</p>
            <div className="flex justify-between text-sm text-gray-600">
              <span>Mary K.</span>
              <span>05/08/2023</span>
            </div>
          </div>
          
          <div className="p-6 border rounded">
            <div className="flex items-center mb-4">
              <div className="w-16 h-16 rounded-full bg-gray-200 overflow-hidden mr-4">
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3" alt="Reviewer" className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="font-bold">WILDLIFE TOUR</h3>
                <div className="flex text-yellow-400">
                  ★★★★★
                </div>
              </div>
            </div>
            <p className="mb-4">"We saw incredible wildlife on this tour! The accommodations were perfect and we enjoyed every minute of our safari adventure."</p>
            <div className="flex justify-between text-sm text-gray-600">
              <span>Lisa C.</span>
              <span>09/25/2023</span>
            </div>
          </div>
          
          <div className="p-6 border rounded">
            <div className="flex items-center mb-4">
              <div className="w-16 h-16 rounded-full bg-gray-200 overflow-hidden mr-4">
                <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3" alt="Reviewer" className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="font-bold">LUXURY SAFARI TOUR</h3>
                <div className="flex text-yellow-400">
                  ★★★★★
                </div>
              </div>
            </div>
            <p className="mb-4">"The luxury safari exceeded all expectations. The guides were knowledgeable and passionate. A once-in-a-lifetime experience!"</p>
            <div className="flex justify-between text-sm text-gray-600">
              <span>Alexander H.</span>
              <span>11/12/2023</span>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-8 px-8 md:px-16 border-t">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <p className="mb-4 md:mb-0">© 2023 REAL SAFARI</p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-gray-900">INSTAGRAM</a>
            <a href="#" className="text-gray-500 hover:text-gray-900">FACEBOOK</a>
            <a href="#" className="text-gray-500 hover:text-gray-900">YOUTUBE</a>
            <a href="#" className="text-gray-500 hover:text-gray-900">TELEGRAM</a>
          </div>
        </div>
        <div className="text-right">
          <button className="border border-gray-900 px-4 py-2 hover:bg-gray-900 hover:text-white transition-colors">
            ASK OUR QUESTION →
          </button>
        </div>
      </footer>
    </div>
  );
};

export default DestinationPage;
