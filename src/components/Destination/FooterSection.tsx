
import React from "react";
import { Link } from "react-router-dom";

const FooterSection: React.FC = () => {
  return (
    <footer className="bg-safari-sand py-16 px-8 md:px-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-safari-dark-grey">Wild Thoughts</h3>
            <p className="text-safari-dark-grey mb-4">
              "In the wild, every sunset is a promise of adventure, and every sunrise a canvas of possibilities."
            </p>
            <p className="text-safari-dark-grey italic">
              — Our rather poetic safari guide
            </p>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-6 text-safari-dark-grey">Safari Facts</h3>
            <ul className="text-safari-dark-grey space-y-3">
              <li>• Lions spend about 20 hours a day napping. (Professional relaxation experts)</li>
              <li>• Giraffes have the same number of neck vertebrae as humans (7). (Just slightly stretched)</li>
              <li>• Hippos can run faster than humans despite their size. (Never challenge one to a race)</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-6 text-safari-dark-grey">Get In Touch</h3>
            <div className="text-safari-dark-grey space-y-3">
              <p className="font-semibold">Blue Zebra Adventures t/a Real Safari</p>
              <p className="text-sm">License Number: MOTAC L/N/12103</p>
              <p className="text-sm">
                G-038, Dataran Millenium<br />
                98, Jalan 14/1<br />
                46100, Petaling Jaya, Selangor<br />
                <span className="italic">(open by appointment only)</span>
              </p>
              <p className="text-sm">
                <a href="mailto:bluezebraadventures@gmail.com" className="hover:text-safari-gold transition-colors">
                  bluezebraadventures@gmail.com
                </a>
              </p>
              <p className="text-sm">
                <a href="tel:+60186311330" className="hover:text-safari-gold transition-colors">
                  +60 186 3113 30
                </a>
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-safari-light-brown pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="mb-4 md:mb-0 text-safari-dark-grey">© 2025 REAL SAFARI — All wildlife respected, all adventures guaranteed</p>
          <div className="flex space-x-6">
            <Link to="#" className="text-safari-dark-grey hover:text-safari-gold transition-colors">INSTAGRAM</Link>
            <Link to="#" className="text-safari-dark-grey hover:text-safari-gold transition-colors">FACEBOOK</Link>
            <Link to="#" className="text-safari-dark-grey hover:text-safari-gold transition-colors">YOUTUBE</Link>
            <Link to="#" className="text-safari-dark-grey hover:text-safari-gold transition-colors">TELEGRAM</Link>
          </div>
        </div>
        
        <div className="mt-8 text-right">
          <button className="border border-safari-dark-grey px-6 py-3 hover:bg-safari-dark-grey hover:text-white transition-colors text-safari-dark-grey">
            ASK OUR QUESTION → (Yes, we're curious too)
          </button>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
