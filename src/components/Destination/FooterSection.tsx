
import React from "react";
import { Link } from "react-router-dom";

const FooterSection: React.FC = () => {
  return (
    <footer className="py-16 px-8 md:px-16 border-t bg-safari-cream">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start mb-12">
          <div className="mb-8 md:mb-0">
            <Link to="/">
              <img 
                src="/lovable-uploads/32f6cd57-ea89-4604-8818-e71fa6f7bf9d.png" 
                alt="Real Safari Logo" 
                className="w-[180px] h-auto mb-6"
              />
            </Link>
            <p className="max-w-md text-safari-dark-grey">
              At Real Safari, we believe that the best adventures come with a side of laughter. 
              Why track wildlife when you can track your sense of humor too?
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-16 gap-y-8">
            <div>
              <h4 className="text-lg font-bold mb-4 text-safari-dark-grey">Destinations</h4>
              <ul className="space-y-2">
                <li><Link to="/destination/okavango" className="text-safari-light-brown hover:text-safari-gold transition-colors">Okavango</Link></li>
                <li><Link to="/destination/kalahari" className="text-safari-light-brown hover:text-safari-gold transition-colors">Kalahari</Link></li>
                <li><Link to="/destination/makgadikgadi" className="text-safari-light-brown hover:text-safari-gold transition-colors">Makgadikgadi</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4 text-safari-dark-grey">Plan Your Trip</h4>
              <ul className="space-y-2">
                <li><Link to="/plan" className="text-safari-light-brown hover:text-safari-gold transition-colors">Game Plan</Link></li>
                <li><a href="#" className="text-safari-light-brown hover:text-safari-gold transition-colors">Safari Packages</a></li>
                <li><a href="#" className="text-safari-light-brown hover:text-safari-gold transition-colors">Custom Adventures</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4 text-safari-dark-grey">Follow Us</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-safari-light-brown hover:text-safari-gold transition-colors">INSTAGRAM</a></li>
                <li><a href="#" className="text-safari-light-brown hover:text-safari-gold transition-colors">FACEBOOK</a></li>
                <li><a href="#" className="text-safari-light-brown hover:text-safari-gold transition-colors">YOUTUBE</a></li>
                <li><a href="#" className="text-safari-light-brown hover:text-safari-gold transition-colors">TELEGRAM</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-safari-light-brown border-opacity-20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="mb-4 md:mb-0 text-safari-dark-grey opacity-70">
            © 2023 REAL SAFARI — Where wild animals take selfies with you!
          </p>
          <div className="flex space-x-4">
            <button className="border border-safari-gold text-safari-gold px-6 py-2 hover:bg-safari-gold hover:text-white transition-colors">
              ASK US ANYTHING →
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
