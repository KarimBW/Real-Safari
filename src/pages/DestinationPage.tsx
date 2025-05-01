
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Header } from "@/components/Safari/Header";
import { destinationData, EditableData } from "@/data/destinationData";
import HeroSection from "@/components/Destination/HeroSection";
import StatsSection from "@/components/Destination/StatsSection";
import DescriptionSection from "@/components/Destination/DescriptionSection";
import ToursSection from "@/components/Destination/ToursSection";
import GallerySection from "@/components/Destination/GallerySection";
import ReviewsSection from "@/components/Destination/ReviewsSection";
import FooterSection from "@/components/Destination/FooterSection";

const DestinationPage = () => {
  const { id } = useParams();
  const destination = destinationData[id as keyof typeof destinationData] || destinationData.okavango;
  const [editMode, setEditMode] = useState(false);
  const [editData, setEditData] = useState<EditableData>({
    ...destination
  });

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
        ...editData[category as keyof typeof editData] as Record<string, any>,
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
      <HeroSection 
        title={data.title} 
        editMode={editMode} 
        onTextChange={handleTextChange} 
      />
      
      {/* Stats Section */}
      <StatsSection 
        stats={data.stats}
        editMode={editMode}
        onNestedTextChange={handleNestedTextChange}
      />
      
      {/* Description Video Section */}
      <DescriptionSection
        descriptionTitle={data.descriptionTitle}
        descriptionText={data.descriptionText}
        editMode={editMode}
        onTextChange={handleTextChange}
        onDescriptionChange={handleDescriptionChange}
      />
      
      {/* Tours Section */}
      <ToursSection
        tours={data.tours}
        editMode={editMode}
        onTourChange={handleTourChange}
      />
      
      {/* Gallery Section */}
      <GallerySection editMode={editMode} />
      
      {/* Reviews Section */}
      <ReviewsSection />
      
      {/* Footer */}
      <FooterSection />
    </div>
  );
};

export default DestinationPage;
