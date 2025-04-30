
import { Input } from "../ui/input";

export const Header = () => {
  return (
    <header className="absolute top-0 right-0 left-[300px] z-30 px-8 pt-10">
      <div className="flex justify-between items-center">
        <nav className="flex space-x-12">
          <a href="#" className="text-safari-gold hover:opacity-80 transition-opacity">
            HOME
          </a>
          <a href="#" className="text-white hover:text-safari-gold transition-colors">
            BLOG
          </a>
          <a href="#" className="text-white hover:text-safari-gold transition-colors">
            CONTACT
          </a>
        </nav>
        
        <div className="w-60">
          <Input 
            type="text" 
            placeholder="SEARCH" 
            className="bg-safari-gold bg-opacity-70 text-white placeholder:text-white border-none rounded-full px-4"
          />
        </div>
      </div>
    </header>
  );
};
