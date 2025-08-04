
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useLocation } from "react-router-dom";
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
  DrawerClose
} from "@/components/ui/drawer";
import { Menu } from "lucide-react";

interface MobileHeaderProps {
  className?: string;
}

export const MobileHeader: React.FC<MobileHeaderProps> = ({ className = "" }) => {
  const location = useLocation();
  const isHomepage = location.pathname === "/";
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <header className={cn(
      "flex justify-between items-center w-full px-4 py-3", 
      !isHomepage && "bg-safari-dark-grey/65",
      className
    )}>
      {/* Logo */}
      <Link to="/" className="z-10">
        {isHomepage ? (
          <img 
            src="/lovable-uploads/40b013e5-2309-4502-8173-45799a40ea4e.png" 
            alt="SAFARI" 
            className="h-8" 
          />
        ) : (
          <img 
            src="/lovable-uploads/bab0dbdd-68f0-4e7d-a8dc-727c8b80d960.png" 
            alt="REALSAFARI" 
            className="h-8" 
          />
        )}
      </Link>

      {/* Mobile menu */}
      <Drawer open={isOpen} onOpenChange={setIsOpen}>
        <DrawerTrigger asChild>
          <button 
            className="text-white hover:text-safari-gold p-2"
            aria-label="Menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </DrawerTrigger>
        <DrawerContent className="bg-safari-dark-grey border-safari-gold text-white h-[85vh]">
          <div className="flex flex-col space-y-6 p-6">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-quicksand text-safari-gold">Navigation</h3>
              <DrawerClose className="text-white hover:text-safari-gold">
                ✕
              </DrawerClose>
            </div>
            
            <nav className="flex flex-col space-y-8 pt-4">
              {/* Where To Next? */}
               <div className="space-y-4">
                 <h4 className="text-safari-gold font-quicksand text-lg">WHERE TO NEXT?</h4>
                 <div className="flex flex-col space-y-3 pl-4">
                   {/* Removed Okavango - not available yet */}
                   <Link 
                     to="/destination/kalahari" 
                     className="text-white font-quicksand hover:text-safari-gold py-2"
                     onClick={() => setIsOpen(false)}
                   >
                     KALAHARI
                   </Link>
                   <Link 
                     to="/destination/makgadikgadi" 
                     className="text-white font-quicksand hover:text-safari-gold py-2"
                     onClick={() => setIsOpen(false)}
                   >
                     MAKGADIKGADI
                   </Link>
                 </div>
               </div>
              
              {/* Game Plan */}
              <Link 
                to="/game-plan" 
                className="text-white font-quicksand text-lg hover:text-safari-gold"
                onClick={() => setIsOpen(false)}
              >
                GAME PLAN
              </Link>
              
              {/* Pack Your Calendar */}
              <Link 
                to="/pack-your-calendar" 
                className="text-white font-quicksand text-lg hover:text-safari-gold"
                onClick={() => setIsOpen(false)}
              >
                PACK YOUR CALENDAR
              </Link>
            </nav>
          </div>
        </DrawerContent>
      </Drawer>
    </header>
  );
};
