
import React from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useLocation } from "react-router-dom";

interface HeaderProps {
  className?: string;
  menuElevated?: boolean;
}

export const Header: React.FC<HeaderProps> = ({ 
  className = "", 
  menuElevated = false 
}) => {
  const location = useLocation();
  const isHomepage = location.pathname === "/";
  
  return (
    <header className={cn(
      "flex justify-between items-center w-full px-6 py-4", 
      isHomepage ? "bg-transparent" : "bg-safari-dark-grey", 
      className
    )}>
      {/* Logo */}
      <Link to="/" className="z-10">
        <h1 className="text-3xl font-bold text-white">SAFARI</h1>
      </Link>

      {/* Menu Items */}
      <nav className="flex space-x-8">
        <Link 
          to="/plan" 
          className={`text-white font-medium hover:text-safari-gold transition-all duration-300 ${
            menuElevated ? 'transform -translate-y-[7px]' : ''
          }`}
        >
          Game Plan
        </Link>
        <Link 
          to="/destination/okavango" 
          className={`text-white font-medium hover:text-safari-gold transition-all duration-300 ${
            menuElevated ? 'transform -translate-y-[7px]' : ''
          }`}
        >
          Where To Next?
        </Link>
        <Link 
          to="/meet-the-herd" 
          className={`text-white font-medium hover:text-safari-gold transition-all duration-300 ${
            menuElevated ? 'transform -translate-y-[7px]' : ''
          }`}
        >
          Meet the Herd
        </Link>
      </nav>
    </header>
  );
};
