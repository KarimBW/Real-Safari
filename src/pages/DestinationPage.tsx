
import React from "react";
import { useParams } from "react-router-dom";
import { Header } from "@/components/Safari/Header";
import { destinationData } from "@/data/destinationData";
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

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <HeroSection title={destination.title} />
      
      {/* Stats Section */}
      <StatsSection stats={destination.stats} />
      
      {/* Description Video Section */}
      <DescriptionSection
        descriptionTitle={destination.descriptionTitle}
        descriptionText={destination.descriptionText}
      />
      
      {/* Tours Section */}
      <ToursSection tours={destination.tours} />
      
      {/* Gallery Section */}
      <GallerySection />
      
      {/* Reviews Section */}
      <ReviewsSection />
      
      {/* Footer */}
      <FooterSection />
    </div>
  );
};

export default DestinationPage;
