
import React from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface HeaderProps {
  className?: string;
  menuElevated?: boolean;
}

export const Header: React.FC<HeaderProps> = ({ 
  className = "", 
  menuElevated = false 
}) => {
  return (
    <header className={cn("flex justify-between items-center w-full px-6 py-4", className)}>
      {/* Logo */}
      <Link to="/" className="z-10">
        <h1 className="text-3xl font-bold text-white">SAFARI</h1>
      </Link>

      {/* Menu Items */}
      <nav className="flex space-x-8">
        <Link 
          to="/" 
          className={`text-white font-medium hover:text-safari-gold transition-all duration-300 ${
            menuElevated ? 'transform -translate-y-[25px]' : ''
          }`}
        >
          Home
        </Link>
        <Link 
          to="/plan" 
          className={`text-white font-medium hover:text-safari-gold transition-all duration-300 ${
            menuElevated ? 'transform -translate-y-[25px]' : ''
          }`}
        >
          Plan Your Safari
        </Link>
        <Link 
          to="/destination/okavango" 
          className={`text-white font-medium hover:text-safari-gold transition-all duration-300 ${
            menuElevated ? 'transform -translate-y-[25px]' : ''
          }`}
        >
          Destinations
        </Link>
        <Link 
          to="/meet-the-herd" 
          className={`text-white font-medium hover:text-safari-gold transition-all duration-300 ${
            menuElevated ? 'transform -translate-y-[25px]' : ''
          }`}
        >
          Meet the Herd
        </Link>
      </nav>

      {/* Contact Button */}
      <button 
        className={`bg-safari-gold hover:bg-safari-light-brown text-white py-2 px-4 rounded transition-all duration-300 ${
          menuElevated ? 'transform -translate-y-[25px]' : ''
        }`}
      >
        Contact Us
      </button>
    </header>
  );
};
