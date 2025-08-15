import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800 p-4 mt-auto">
      <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
        <div className="text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} SM Admin. All rights reserved.
        </div>
        
        <div className="flex items-center space-x-6 text-sm text-gray-400">
          <span>Version 1.0.0</span>
          <span className="hidden md:inline">|</span>
          <span>Last updated: {new Date().toLocaleDateString()}</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;