import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, Phone, X } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Flattened navigation items
  const navItems = [
    
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "PDF Download", path: "/pdf-download" },
    { name: "Participate", path: "/participate" },
    { name: "Calculator", path: "/calculator" },
    { name: "Contact", path: "/contact" },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (item) => {
    setIsOpen(false);
    navigate(item.path);
  };

  const isActive = (item) => {
    return item.path === location.pathname;
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg" : "bg-white shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div
            className="cursor-pointer"
            onClick={() => {
              navigate("/");
            }}
          >
            <img src="/logo.webp" alt="Logo" className="w-20 h-auto" />
          </div>

          {/* Desktop Navigation - Centered */}
          <div className="hidden lg:flex items-center justify-center flex-1">
            <div className="flex items-center space-x-2 bg-white rounded-full p-2 border border-gray-200 shadow-sm">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item)}
                  className={`relative px-6 py-3 font-medium text-sm rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 flex items-center ${
                    isActive(item)
                      ? "text-white bg-primary shadow-lg"
                      : "text-gray-800 hover:text-blue-600 hover:bg-gray-100"
                  }`}
                >
                  <span className="relative z-10">{item.name}</span>
                  {isActive(item) && (
                    <div className="absolute inset-0 bg-primary rounded-full shadow-lg animate-pulse opacity-20" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex">
            <a
              href=" https://calendly.com/karmansingh/financialstratgey "
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="w-full bg-primary hover:bg-blue-700 text-white font-medium py-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-[0.98] transition-all duration-300">
                Book Consultation 
              </Button>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 hover:text-blue-600 transition-all duration-200 p-2 rounded-full hover:bg-gray-100"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden transition-all duration-500 ease-out ${
            isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="px-4 pt-6 pb-6 space-y-2 bg-white border-t border-gray-200 shadow-md">
            {navItems.map((item, index) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item)}
                style={{
                  transitionDelay: isOpen ? `${index * 75}ms` : "0ms",
                }}
                className={`block w-full text-left px-6 py-4 font-medium transition-all duration-400 ease-out rounded-xl border transform hover:scale-[0.98] ${
                  isOpen
                    ? "translate-x-0 opacity-100"
                    : "translate-x-4 opacity-0"
                } ${
                  isActive(item)
                    ? "text-white bg-primary border-transparent shadow-md"
                    : "text-gray-800 hover:text-blue-600 hover:bg-gray-100 border-gray-200 hover:border-gray-300"
                }`}
              >
                {item.name}
              </button>
            ))}
            <div
              className={`pt-4 transition-all duration-400 ease-out transform ${
                isOpen ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0"
              }`}
              style={{
                transitionDelay: isOpen ? `${navItems.length * 75}ms` : "0ms",
              }}
            >
              <a
                href=" https://calendly.com/karmansingh/financialstratgey "
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="w-full bg-primary hover:bg-blue-700 text-white font-medium py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-[0.98] transition-all duration-300">
                  Book Consultation
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;