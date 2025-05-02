
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useLocation } from "react-router-dom";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
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
  const [dropdownOpen, setDropdownOpen] = useState(false);
  
  return (
    <header className={cn(
      "flex justify-between items-center w-full px-4 md:px-6 py-4", 
      !isHomepage && "bg-safari-dark-grey/65",
      className
    )}>
      {/* Logo */}
      <Link to="/" className="z-10">
        {isHomepage ? (
          <img 
            src="/lovable-uploads/40b013e5-2309-4502-8173-45799a40ea4e.png" 
            alt="SAFARI" 
            className="h-10 md:h-12" 
          />
        ) : (
          <img 
            src="/lovable-uploads/bab0dbdd-68f0-4e7d-a8dc-727c8b80d960.png" 
            alt="REALSAFARI" 
            className="h-10 md:h-12" 
          />
        )}
      </Link>

      {/* Menu Items */}
      <nav className="flex space-x-4 md:space-x-8">
        {/* Where To Next? with Dropdown */}
        <DropdownMenu open={dropdownOpen} onOpenChange={setDropdownOpen}>
          <DropdownMenuTrigger 
            className={`text-white font-cinzel hover:text-safari-gold transition-all duration-300 text-sm md:text-base ${
              menuElevated ? 'transform -translate-y-[15px]' : ''
            }`}
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
            asChild
          >
            <div className="flex items-center gap-1 cursor-pointer">
              Where To Next? <ChevronDown className="w-3 h-3 md:w-4 md:h-4" />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent 
            className="bg-safari-dark-grey border-safari-gold p-0 w-40 md:w-48"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <Link to="/destination/okavango" className="text-white block w-full px-3 md:px-4 py-2 hover:bg-safari-dark-brown">
              <DropdownMenuItem className="cursor-pointer text-white hover:text-white focus:text-white">
                Okavango
              </DropdownMenuItem>
            </Link>
            <Link to="/destination/kalahari" className="text-white block w-full px-3 md:px-4 py-2 hover:bg-safari-dark-brown">
              <DropdownMenuItem className="cursor-pointer text-white hover:text-white focus:text-white">
                Kalahari
              </DropdownMenuItem>
            </Link>
            <Link to="/destination/makgadikgadi" className="text-white block w-full px-3 md:px-4 py-2 hover:bg-safari-dark-brown">
              <DropdownMenuItem className="cursor-pointer text-white hover:text-white focus:text-white">
                Makgadikgadi
              </DropdownMenuItem>
            </Link>
          </DropdownMenuContent>
        </DropdownMenu>
        
        {/* Game Plan */}
        <Link 
          to="/plan" 
          className={`text-white font-cinzel hover:text-safari-gold transition-all duration-300 text-sm md:text-base ${
            menuElevated ? 'transform -translate-y-[15px]' : ''
          }`}
        >
          Game Plan
        </Link>
        
        {/* Meet the Herd */}
        <Link 
          to="/meet-the-herd" 
          className={`text-white font-cinzel hover:text-safari-gold transition-all duration-300 text-sm md:text-base ${
            menuElevated ? 'transform -translate-y-[15px]' : ''
          }`}
        >
          Meet the Herd
        </Link>
      </nav>
    </header>
  );
};
