
import { Facebook, Instagram } from "lucide-react";
import { X } from "lucide-react"; // Using X icon (formerly Twitter)

export const Sidebar = () => {
  return (
    <div className="safari-sidebar bg-safari-dark-grey/50 text-white flex flex-col backdrop-blur-sm">
      <div className="flex-1 flex flex-col justify-between py-10 px-8">
        {/* Logo with homepage link */}
        <div className="flex justify-center mb-8">
          <a href="/">
            <img 
              src="/lovable-uploads/32f6cd57-ea89-4604-8818-e71fa6f7bf9d.png" 
              alt="Real Safari Logo" 
              className="w-[250px] h-auto"
            />
          </a>
        </div>
        
        {/* Social Icons */}
        <div className="flex flex-col space-y-6">
          <a href="#" className="hover:text-safari-gold transition-colors">
            <Facebook size={24} />
          </a>
          <a href="#" className="hover:text-safari-gold transition-colors">
            <Instagram size={24} />
          </a>
          <a href="#" className="hover:text-safari-gold transition-colors">
            <X size={24} />
          </a>
        </div>
        
        {/* Sidebar Quote */}
        <div className="safari-quote text-lg rotate-[-90deg] origin-left whitespace-nowrap mt-20">
          "Live out of a suitcase"
        </div>
      </div>
    </div>
  );
};
