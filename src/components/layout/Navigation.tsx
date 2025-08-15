import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null); // Track open submenu on mobile
  const navigate = useNavigate();
  const location = useLocation();
  const timeoutRef = useRef(null); // For hover delay

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    {
      name: "Services",
      path: "/services",
      children: [
        { name: "PDF Download", path: "/pdf-download" },
        { name: "Participate", path: "/participate" },
      ],
    },
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

  // Handle mouse enter with delay for submenu
  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  // Handle mouse leave with delay for submenu
  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {}, 200);
  };

  const handleNavClick = (item) => {
    setIsOpen(false);
    setOpenSubmenu(null);
    navigate(item.path);
  };

  const toggleSubmenu = (itemName) => {
    setOpenSubmenu((prev) => (prev === itemName ? null : itemName));
  };

  const isActive = (item) => {
    if (!item.path) return false;
    if (item.children) {
      return (
        item.path === location.pathname ||
        item.children.some((child) => child.path === location.pathname)
      );
    }
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
            <img
              src="/logo.webp"
              alt="Logo"
              className="w-auto h-12 object-contain"
            />
          </div>

          {/* Desktop Navigation - Centered */}
          <div className="hidden lg:flex items-center justify-center flex-1">
            <div className="flex items-center space-x-2 bg-white rounded-full p-2 border border-gray-200 shadow-sm">
              {navItems.map((item) => (
                <div
                  key={item.name}
                  className="relative group"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    onClick={() => handleNavClick(item)}
                    className={`relative px-6 py-3 font-medium text-sm rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 flex items-center ${
                      isActive(item)
                        ? "text-white bg-primary shadow-lg"
                        : "text-gray-800 hover:text-blue-600 hover:bg-gray-100"
                    }`}
                  >
                    <span className="relative z-10">{item.name}</span>
                    {item.children && (
                      <ChevronDown size={16} className="ml-1" />
                    )}
                    {isActive(item) && (
                      <div className="absolute inset-0 bg-primary rounded-full shadow-lg animate-pulse opacity-20" />
                    )}
                  </button>
                  {item.children && (
                    <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-48 bg-white rounded-lg shadow-xl py-2 opacity-0 group-hover:opacity-100 group-hover:block transition-opacity duration-200 z-50 border border-gray-100">
                      {item.children.map((child) => (
                        <button
                          key={child.name}
                          onClick={() => handleNavClick(child)}
                          className={`block w-full text-left px-4 py-2 text-sm transition-colors ${
                            child.path === location.pathname
                              ? "bg-primary text-white"
                              : "text-gray-800 hover:bg-gray-100 hover:text-blue-600"
                          }`}
                        >
                          {child.name}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex">
            <Button className="bg-primary text-white font-medium px-8 py-6 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 hover:bg-blue-700">
              Book Consultation
            </Button>
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
              <div key={item.name}>
                <button
                  onClick={() =>
                    item.children ? toggleSubmenu(item.name) : handleNavClick(item)
                  }
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
                  } flex items-center justify-between`}
                >
                  <span>{item.name}</span>
                  {item.children && (
                    <ChevronRight
                      size={20}
                      className={`transition-transform duration-300 ${
                        openSubmenu === item.name ? "rotate-90" : ""
                      }`}
                    />
                  )}
                </button>
                {item.children && openSubmenu === item.name && (
                  <div className="pl-4 space-y-1 mt-2">
                    {item.children.map((child, childIndex) => (
                      <button
                        key={child.name}
                        onClick={() => handleNavClick(child)}
                        style={{
                          transitionDelay: isOpen
                            ? `${(index + childIndex + 1) * 75}ms`
                            : "0ms",
                        }}
                        className={`block w-full text-left px-8 py-3 font-medium transition-all duration-400 ease-out rounded-xl transform hover:scale-[0.98] text-sm ${
                          isOpen
                            ? "translate-x-0 opacity-100"
                            : "translate-x-4 opacity-0"
                        } ${
                          child.path === location.pathname
                            ? "text-white bg-primary border-transparent shadow-sm"
                            : "text-gray-700 hover:text-blue-600 hover:bg-gray-100 border-gray-100 hover:border-gray-200"
                        }`}
                      >
                        - {child.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div
              className={`pt-4 transition-all duration-400 ease-out transform ${
                isOpen ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0"
              }`}
              style={{
                transitionDelay: isOpen ? `${navItems.length * 100}ms` : "0ms",
              }}
            >
              <Button className="w-full bg-primary hover:bg-blue-700 text-white font-medium py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-[0.98] transition-all duration-300">
                Book Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;