
import React from "react";

const FooterSection: React.FC = () => {
  return (
    <footer className="py-8 px-8 md:px-16 border-t">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8">
        <p className="mb-4 md:mb-0">© 2023 REAL SAFARI</p>
        <div className="flex space-x-6">
          <a href="#" className="text-gray-500 hover:text-gray-900">INSTAGRAM</a>
          <a href="#" className="text-gray-500 hover:text-gray-900">FACEBOOK</a>
          <a href="#" className="text-gray-500 hover:text-gray-900">YOUTUBE</a>
          <a href="#" className="text-gray-500 hover:text-gray-900">TELEGRAM</a>
        </div>
      </div>
      <div className="text-right">
        <button className="border border-gray-900 px-4 py-2 hover:bg-gray-900 hover:text-white transition-colors">
          ASK OUR QUESTION →
        </button>
      </div>
    </footer>
  );
};

export default FooterSection;
