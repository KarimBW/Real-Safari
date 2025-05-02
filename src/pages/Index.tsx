
import { Header } from "@/components/Safari/Header";
import { HeroSection } from "@/components/Safari/HeroSection";
import { Sidebar } from "@/components/Safari/Sidebar";
import { useEffect } from "react";

const Index = () => {
  // Add Google Fonts for the quote styling
  useEffect(() => {
    const link = document.createElement('link');
    link.href = "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  // Pre-load images
  useEffect(() => {
    const imageUrls = [
      "/lovable-uploads/ebab21c9-3137-406f-b457-4a345b28c6ab.png",
      "/lovable-uploads/c574e67a-51c3-442e-b68e-89788ccfb439.png",
      "/lovable-uploads/44660527-d212-4dc7-a061-b9879acf0e93.png"
    ];
    
    imageUrls.forEach(url => {
      const img = new Image();
      img.src = url;
    });
  }, []);

  return (
    <div className="relative overflow-hidden h-screen w-screen flex">
      <Sidebar />
      <div className="flex-1 relative h-screen w-screen">
        <Header />
        <HeroSection />
      </div>
    </div>
  );
};

export default Index;
