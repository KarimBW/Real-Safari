
import React from "react";
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
  
  return (
    <header className={cn(
      "flex justify-between items-center w-full px-6 py-4", 
      isHomepage ? "bg-transparent" : "bg-safari-dark-grey/65", 
      className
    )}>
      {/* Logo */}
      <Link to="/" className="z-10">
        <h1 className="text-3xl font-bold text-white">SAFARI</h1>
      </Link>

      {/* Menu Items */}
      <nav className="flex space-x-8">
        {/* Where To Next? with Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger className={`text-white font-medium hover:text-safari-gold transition-all duration-300 flex items-center gap-1 ${
            menuElevated ? 'transform -translate-y-[7px]' : ''
          }`}>
            Where To Next? <ChevronDown className="w-4 h-4" />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-safari-dark-grey border-safari-gold">
            <DropdownMenuItem className="hover:bg-safari-dark-brown">
              <Link to="/destination/okavango" className="text-white w-full">Okavango</Link>
            </DropdownMenuItem>
            <DropdownMenuItem className="hover:bg-safari-dark-brown">
              <Link to="/destination/kalahari" className="text-white w-full">Kalahari</Link>
            </DropdownMenuItem>
            <DropdownMenuItem className="hover:bg-safari-dark-brown">
              <Link to="/destination/makgadikgadi" className="text-white w-full">Makgadikgadi</Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        
        {/* Game Plan */}
        <Link 
          to="/plan" 
          className={`text-white font-medium hover:text-safari-gold transition-all duration-300 ${
            menuElevated ? 'transform -translate-y-[7px]' : ''
          }`}
        >
          Game Plan
        </Link>
        
        {/* Meet the Herd */}
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
