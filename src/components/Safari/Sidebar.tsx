
import { Facebook, Twitter, Youtube } from "lucide-react";
import { useState } from "react";

export const Sidebar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  return (
    <div className="safari-sidebar bg-safari-dark-grey text-white flex flex-col">
      <div className="flex-1 flex flex-col justify-between py-10 px-8">
        {/* Social Icons */}
        <div className="flex flex-col space-y-6">
          <a href="#" className="hover:text-safari-gold transition-colors">
            <Facebook size={24} />
          </a>
          <a href="#" className="hover:text-safari-gold transition-colors">
            <Youtube size={24} />
          </a>
          <a href="#" className="hover:text-safari-gold transition-colors">
            <Twitter size={24} />
          </a>
        </div>
        
        {/* Sidebar Quote */}
        <div className="safari-quote text-lg rotate-[-90deg] origin-left whitespace-nowrap mt-20">
          "Live out of a suitcase"
        </div>
      </div>
      
      {/* Mobile menu button */}
      <button 
        className="absolute top-10 right-[-60px] bg-safari-dark-grey p-4 text-white focus:outline-none"
        onClick={toggleMenu}
      >
        <div className="flex flex-col space-y-1.5 w-6">
          <span className="w-full h-0.5 bg-safari-gold block"></span>
          <span className="w-full h-0.5 bg-safari-gold block"></span>
          <span className="w-full h-0.5 bg-safari-gold block"></span>
        </div>
      </button>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-safari-dark-grey z-50 flex flex-col items-center justify-center">
          <button 
            className="absolute top-10 right-10 text-white text-2xl"
            onClick={toggleMenu}
          >
            ×
          </button>
          <nav className="flex flex-col space-y-6 text-center">
            <a href="#" className="text-xl text-safari-gold hover:opacity-80 transition-opacity">HOME</a>
            <a href="#" className="text-xl text-white hover:text-safari-gold transition-colors">BLOG</a>
            <a href="#" className="text-xl text-white hover:text-safari-gold transition-colors">CONTACT</a>
          </nav>
        </div>
      )}
    </div>
  );
};
