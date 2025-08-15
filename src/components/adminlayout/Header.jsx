import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { LogOut, User, Settings } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          setIsAuthenticated(false);
          setIsLoading(false);
          return;
        }

        // For now, if token exists, consider authenticated
        // You can uncomment the API call when your backend is ready
        setIsAuthenticated(true);
        setIsLoading(false);

        /* 
        const response = await fetch("http://localhost:3000/api/auth/check", {
          headers: { Authorization: `Bearer ${token}` },
        });
        const data = await response.json();
        setIsAuthenticated(data.isAuthenticated);
        */
      } catch (error) {
        console.error("Auth check failed:", error);
        setIsAuthenticated(false);
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, []);

  const handleLogout = async () => {
    try {
      // Optional: Call logout API
      /* 
      const token = localStorage.getItem("token");
      if (token) {
        await fetch("http://localhost:3000/api/auth/logout", {
          method: "POST",
          headers: { Authorization: `Bearer ${token}` },
        });
      }
      */

      localStorage.removeItem("token");
      setIsAuthenticated(false);
      navigate("/admin/login");
    } catch (error) {
      console.error("Logout failed:", error);
      // Still remove token and redirect even if API call fails
      localStorage.removeItem("token");
      setIsAuthenticated(false);
      navigate("/admin/login");
    }
  };

  return (
    <header className="bg-black shadow-lg border-b border-gray-800 p-4 sticky top-0 z-40">
      <div className="flex justify-between items-center">
        {/* Logo/Brand */}
        <div className="flex items-center space-x-3">
          <div className="w-auto h-10 rounded-lg flex items-center justify-center overflow-hidden bg-white">
            <img
              src="/logo.webp"
              alt="Logo"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* User Actions */}
        <div className="flex items-center space-x-4">
          {isLoading ? (
            <div className="w-8 h-8 border-2 border-gray-600 border-t-white rounded-full animate-spin"></div>
          ) : isAuthenticated ? (
            <>
              {/* User Profile */}
              <div className="hidden md:flex items-center space-x-3 px-3 py-2 bg-gray-800 rounded-lg">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <User className="h-4 w-4 text-black" />
                </div>
                <div className="text-sm">
                  <p className="text-white font-medium">Admin</p>
                </div>
              </div>

              {/* Logout Button */}
              <Button
                variant="outline"
                size="sm"
                onClick={handleLogout}
                className="bg-transparent border-gray-600 text-white hover:bg-gray-200 hover:text-black transition-all duration-200"
              >
                <LogOut className="w-4 h-4 mr-2" />
                <span className="hidden sm:inline">Logout</span>
              </Button>
            </>
          ) : (
            <Button
              variant="outline"
              size="sm"
              onClick={() => navigate("/admin/login")}
              className="bg-transparent border-gray-600 text-white hover:bg-white hover:text-black"
            >
              Login
            </Button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
