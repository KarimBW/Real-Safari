
import { HeroSection } from "@/components/Safari/HeroSection";
import { Sidebar } from "@/components/Safari/Sidebar";
import { Header } from "@/components/Safari/Header";
import { useEffect } from "react";

const Index = () => {
  // Add Google Fonts for the styling
  useEffect(() => {
    // Add the existing Playfair Display font
    const playfairLink = document.createElement('link');
    playfairLink.href = "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&display=swap";
    playfairLink.rel = "stylesheet";
    document.head.appendChild(playfairLink);
    
    // Add Cinzel for the menu items - an elegant serif font
    const cinzelLink = document.createElement('link');
    cinzelLink.href = "https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700&display=swap";
    cinzelLink.rel = "stylesheet";
    document.head.appendChild(cinzelLink);
    
    return () => {
      document.head.removeChild(playfairLink);
      document.head.removeChild(cinzelLink);
    };
  }, []);

  // Pre-load images
  useEffect(() => {
    const imageUrls = [
      "/lovable-uploads/ebab21c9-3137-406f-b457-4a345b28c6ab.png", // Okavango
      "/lovable-uploads/c574e67a-51c3-442e-b68e-89788ccfb439.png", // Kalahari
      "/lovable-uploads/44660527-d212-4dc7-a061-b9879acf0e93.png", // Makgadikgadi
      "/lovable-uploads/bab0dbdd-68f0-4e7d-a8dc-727c8b80d960.png", // Logo
      // Wildlife images for camp panels
      "/lovable-uploads/5c9ac31f-a57c-43ee-adb0-a97c4ededc98.png", // Khwai (wild dog)
      "/lovable-uploads/13144fc7-d253-4fd1-997d-96c622d2754d.png", // Savuti (elephant)
      "/lovable-uploads/c49f95ad-a567-416a-b70c-bef52f68f29a.png", // Moremi (leopard)
      "/lovable-uploads/8a3c95d1-48d1-4c2c-b36c-d8accf95133d.png", // Chobe (giraffes)
      "/lovable-uploads/59f35e67-5f3a-4177-b4a1-53e4389fee2d.png", // Maun (delta)
    ];
    
    imageUrls.forEach(url => {
      const img = new Image();
      img.src = url;
    });
  }, []);

  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <Header className="z-20" />
      <Sidebar />
      <HeroSection />
    </div>
  );
};

export default Index;
