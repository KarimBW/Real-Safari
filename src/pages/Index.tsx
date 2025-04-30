
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

  return (
    <div className="relative overflow-hidden h-screen w-screen flex">
      <Sidebar />
      <div className="flex-1 relative">
        <Header />
        <HeroSection />
      </div>
    </div>
  );
};

export default Index;
