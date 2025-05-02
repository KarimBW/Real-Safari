
import React from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useLocation } from "react-router-dom";
import { 
  Popover,
  PopoverContent,
  PopoverTrigger
} from "@/components/ui/popover";
import { ChevronDown } from "lucide-react";

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
  
  // Don't render header on homepage
  if (isHomepage) {
    return null;
  }
  
  return (
    <header className={cn(
      "flex justify-between items-center w-full px-6 py-4", 
      "bg-safari-dark-grey/65", 
      className
    )}>
      {/* Logo */}
      <Link to="/" className="z-10">
        <img 
          src="/lovable-uploads/40b013e5-2309-4502-8173-45799a40ea4e.png" 
          alt="SAFARI" 
          className="h-12" 
        />
      </Link>

      {/* Menu Items */}
      <nav className="flex space-x-8">
        {/* Where To Next? with Dropdown */}
        <Popover>
          <PopoverTrigger className={`text-white font-medium hover:text-safari-gold transition-all duration-300 flex items-center gap-1 ${
            menuElevated ? 'transform -translate-y-[15px]' : ''
          }`}>
            <span className="flex items-center gap-1 hover:text-safari-gold">
              Where To Next? <ChevronDown className="w-4 h-4" />
            </span>
          </PopoverTrigger>
          <PopoverContent className="bg-safari-dark-grey border-safari-gold p-0 w-48">
            <div className="py-2">
              <Link to="/destination/okavango" className="text-white block w-full px-4 py-2 hover:bg-safari-dark-brown">
                Okavango
              </Link>
              <Link to="/destination/kalahari" className="text-white block w-full px-4 py-2 hover:bg-safari-dark-brown">
                Kalahari
              </Link>
              <Link to="/destination/makgadikgadi" className="text-white block w-full px-4 py-2 hover:bg-safari-dark-brown">
                Makgadikgadi
              </Link>
            </div>
          </PopoverContent>
        </Popover>
        
        {/* Game Plan */}
        <Link 
          to="/plan" 
          className={`text-white font-medium hover:text-safari-gold transition-all duration-300 ${
            menuElevated ? 'transform -translate-y-[15px]' : ''
          }`}
        >
          Game Plan
        </Link>
        
        {/* Meet the Herd */}
        <Link 
          to="/meet-the-herd" 
          className={`text-white font-medium hover:text-safari-gold transition-all duration-300 ${
            menuElevated ? 'transform -translate-y-[15px]' : ''
          }`}
        >
          Meet the Herd
        </Link>
      </nav>
    </header>
  );
};
