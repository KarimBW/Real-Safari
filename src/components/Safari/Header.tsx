
import { Input } from "../ui/input";
import { 
  NavigationMenu, 
  NavigationMenuContent, 
  NavigationMenuItem, 
  NavigationMenuList, 
  NavigationMenuTrigger 
} from "../ui/navigation-menu";

export const Header = () => {
  const destinations = [
    { name: "OKAVANGO", link: "#okavango" },
    { name: "KALAHARI", link: "#kalahari" },
    { name: "MAKGADIKGADI", link: "#makgadikgadi" }
  ];

  return (
    <header className="absolute top-0 right-0 left-[300px] z-30 px-8 pt-10">
      <div className="flex justify-between items-center">
        <div className="w-60">
          <Input 
            type="text" 
            placeholder="SEARCH" 
            className="bg-safari-gold bg-opacity-70 text-white placeholder:text-white border-none rounded-full px-4"
          />
        </div>
        
        <nav className="flex space-x-16">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-safari-gold hover:opacity-80 transition-opacity bg-transparent">
                  WHERE TO NEXT?
                </NavigationMenuTrigger>
                <NavigationMenuContent className="bg-safari-gold bg-opacity-90 min-w-[200px] rounded-md">
                  <ul className="p-2">
                    {destinations.map((destination) => (
                      <li key={destination.name}>
                        <a 
                          href={destination.link}
                          className="block px-4 py-2 text-white hover:bg-white hover:bg-opacity-20 rounded-md transition-colors"
                        >
                          {destination.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          
          <a href="/plan" className="text-white hover:text-safari-gold transition-colors">
            GAME PLAN
          </a>
          
          <a href="/meet-the-herd" className="text-white hover:text-safari-gold transition-colors">
            MEET THE HERD
          </a>
        </nav>
      </div>
    </header>
  );
};
