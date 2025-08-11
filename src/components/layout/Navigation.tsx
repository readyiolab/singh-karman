import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("Home");
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Calculator", path: "/calculator" },
    { name: "Resources", path: "/resources" },
    { name: "Contact", path: "/contact" },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (item) => {
    setActiveItem(item.name);
    setIsOpen(false);
    navigate(item.path);
  };

  const isActive = (itemName) => activeItem === itemName;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
            ? "bg-background shadow-lg"
            : "bg-transparent"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div
              className="cursor-pointer"
              onClick={() => {
                setActiveItem("Home");
                navigate("/");
              }}
            >
              <img
                src="/logo.png"
                alt="Logo"
                className="w-auto h-12 object-contain"
              />
            </div>


            {/* Desktop Navigation - Centered */}
            <div className="hidden lg:flex items-center justify-center flex-1">
              <div className="flex items-center space-x-2 bg-white backdrop-blur-sm rounded-full p-2 border border-border/50 shadow-sm">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item)}
                    className={`relative px-6 py-3 font-medium text-sm rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 ${isActive(item.name)
                        ? "text-primary-foreground bg-primary shadow-lg"
                        : "text-foreground hover:text-primary hover:bg-background/80"
                      }`}
                  >
                    <span className="relative z-10">{item.name}</span>
                    {isActive(item.name) && (
                      <div className="absolute inset-0 bg-primary rounded-full shadow-lg animate-pulse opacity-20" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex">
              <Button className="bg-accent-dark font-medium px-8 py-6 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                Book Consultation
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-foreground hover:text-primary transition-all duration-200 p-2 rounded-full hover:bg-muted"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div
            className={`lg:hidden transition-all duration-500 ease-out transform ${isOpen
                ? "max-h-screen opacity-100 translate-y-0"
                : "max-h-0 opacity-0 -translate-y-4 overflow-hidden"
              }`}
          >
            <div
              className={`px-4 pt-6 pb-6 space-y-4 bg-background/98 backdrop-blur-md border-t border-border/30 transform transition-all duration-500 ${isOpen ? "scale-100" : "scale-95"
                }`}
            >
              {navItems.map((item, index) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item)}
                  style={{
                    transitionDelay: isOpen ? `${index * 75}ms` : "0ms",
                  }}
                  className={`block w-full text-left px-6 py-4 font-medium transition-all duration-400 ease-out rounded-2xl border transform hover:scale-[0.98] ${isOpen
                      ? "translate-x-0 opacity-100"
                      : "translate-x-4 opacity-0"
                    } ${isActive(item.name)
                      ? "text-primary-foreground bg-primary border-transparent shadow-lg"
                      : "text-foreground hover:text-primary hover:bg-muted/70 border-border/30 hover:border-border"
                    }`}
                >
                  <span className="flex items-center justify-between">
                    {item.name}
                    {isActive(item.name) && (
                      <div className="w-2 h-2 bg-primary-foreground rounded-full animate-pulse" />
                    )}
                  </span>
                </button>
              ))}
              <div
                className={`pt-4 transition-all duration-400 ease-out transform ${isOpen ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0"
                  }`}
                style={{
                  transitionDelay: isOpen ? `${navItems.length * 75}ms` : "0ms",
                }}
              >
                <Button className="btn-hero w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-4 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-[0.98] transition-all duration-300">
                  Book Consultation
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;