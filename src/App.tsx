import React, { Suspense, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import { useLocation } from "react-router-dom";
import { initGA, logPageView } from "./lib/analytics"; 

const queryClient = new QueryClient();

// Lazy load components
const Layout = React.lazy(() => import("./components/layout/Layout"));
const AdminLayout = React.lazy(() => import("./components/adminlayout/AdminLayout"));
const Index = React.lazy(() => import("./pages/Index"));
const About = React.lazy(() => import("./pages/About"));
const Services = React.lazy(() => import("./pages/Services"));
const Contact = React.lazy(() => import("./pages/Contact"));
const Resources = React.lazy(() => import("./pages/Resources"));
const Calculator = React.lazy(() => import("./pages/Calculator"));
const PDFDownload = React.lazy(() => import("./pages/PDFDownload"));
const ThankYou = React.lazy(() => import("./pages/ThankYou"));
const Participate = React.lazy(() => import("./pages/Participate"));
const ConfirmSubscription = React.lazy(() => import("./pages/ConfirmSubscription"));
const NotFound = React.lazy(() => import("./pages/NotFound"));
const AdminApplications = React.lazy(() => import("./adminpages/AdminApplications"));
const AdminNewsletter = React.lazy(() => import("./adminpages/AdminNewsletter"));
const AdminLogin = React.lazy(() => import("./adminpages/AdminLogin"));
const AdminContacts = React.lazy(() => import("./adminpages/AdminContacts"));
const CampaignManager = React.lazy(() => import("./adminpages/CampaignManager"));

// Track route changes using React Router
const RouteChangeTracker = () => {
  const location = useLocation();

  useEffect(() => {
    logPageView(location.pathname + location.search);
  }, [location]);

  return null;
};

// Loader Component (Full App Loader)
const Loader = () => {
  return (
    <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
      <div className="relative w-24 h-24 flex items-center justify-center">
        <div className="w-20 h-20 rounded-full bg-accent-dark shadow-lg flex items-center justify-center z-10">
          <span
            className="text-white text-3xl font-bold tracking-wider"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            SM
          </span>
        </div>
        <div className="absolute inset-0 rounded-full border-4 border-accent-dark border-t-transparent animate-spin"></div>
      </div>
    </div>
  );
};

// Page Loader (for individual page transitions)
const PageLoader = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="relative w-16 h-16 flex items-center justify-center">
        <div className="w-14 h-14 rounded-full bg-accent-dark shadow-md flex items-center justify-center z-10">
          <span
            className="text-white text-xl font-bold"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            SM
          </span>
        </div>
        <div className="absolute inset-0 rounded-full border-3 border-accent-dark border-t-transparent animate-spin"></div>
      </div>
    </div>
  );
};

// PrivateRoute component to protect admin routes
const PrivateRoute = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const navigate = useNavigate();

  // Function to decode JWT and check expiration
  const isTokenExpired = (token) => {
    if (!token) return true;
    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      const expiry = payload.exp * 1000; // Convert to milliseconds
      return Date.now() >= expiry;
    } catch (error) {
      console.error("Error decoding token:", error);
      return true; // Treat invalid tokens as expired
    }
  };

  useEffect(() => {
    const checkAuth = () => {
      const token = localStorage.getItem("token");
      if (!token || isTokenExpired(token)) {
        setIsAuthenticated(false);
        localStorage.removeItem("token"); // Clear expired token
      } else {
        setIsAuthenticated(true);
      }
    };

    // Initial check
    checkAuth();

    // Periodic check every 30 seconds
    const interval = setInterval(() => {
      const token = localStorage.getItem("token");
      if (!token || isTokenExpired(token)) {
        setIsAuthenticated(false);
        localStorage.removeItem("token");
        navigate("/admin/login", { replace: true, state: { from: window.location.pathname } });
      }
    }, 30000);

    // Cleanup interval on unmount
    return () => clearInterval(interval);
  }, [navigate]);

  // Show loader while checking authentication
  if (isAuthenticated === null) {
    return <PageLoader />;
  }

  // Redirect to login if not authenticated
  if (!isAuthenticated) {
    return <Navigate to="/admin/login" replace state={{ from: window.location.pathname }} />;
  }

  return children;
};

const App = () => {
  useEffect(() => {
    initGA();
    logPageView(window.location.pathname + window.location.search);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <RouteChangeTracker />
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route element={<Layout />}>
                <Route
                  path="/"
                  element={
                    <Suspense fallback={<PageLoader />}>
                      <Index />
                    </Suspense>
                  }
                />
                <Route
                  path="/about"
                  element={
                    <Suspense fallback={<PageLoader />}>
                      <About />
                    </Suspense>
                  }
                />
                <Route
                  path="/services"
                  element={
                    <Suspense fallback={<PageLoader />}>
                      <Services />
                    </Suspense>
                  }
                />
                <Route
                  path="/contact"
                  element={
                    <Suspense fallback={<PageLoader />}>
                      <Contact />
                    </Suspense>
                  }
                />
                <Route
                  path="/resources"
                  element={
                    <Suspense fallback={<PageLoader />}>
                      <Resources />
                    </Suspense>
                  }
                />
                <Route
                  path="/pdf-download"
                  element={
                    <Suspense fallback={<PageLoader />}>
                      <PDFDownload />
                    </Suspense>
                  }
                />
                <Route
                  path="/participate"
                  element={
                    <Suspense fallback={<PageLoader />}>
                      <Participate />
                    </Suspense>
                  }
                />
                <Route
                  path="/calculator"
                  element={
                    <Suspense fallback={<PageLoader />}>
                      <Calculator />
                    </Suspense>
                  }
                />
                <Route
                  path="/confirm-subscription"
                  element={
                    <Suspense fallback={<PageLoader />}>
                      <ConfirmSubscription />
                    </Suspense>
                  }
                />
                <Route
                  path="*"
                  element={
                    <Suspense fallback={<PageLoader />}>
                      <NotFound />
                    </Suspense>
                  }
                />
              </Route>
              <Route path="/thank-you" element={<ThankYou />} />
              <Route path="/admin/login" element={<Suspense fallback={<PageLoader />}><AdminLogin /></Suspense>} />
              <Route element={<PrivateRoute><AdminLayout /></PrivateRoute>}>
                <Route
                  path="/admin"
                  element={
                    <Suspense fallback={<PageLoader />}>
                      <AdminApplications />
                    </Suspense>
                  }
                />
                <Route
                  path="/admin/applications"
                  element={
                    <Suspense fallback={<PageLoader />}>
                      <AdminApplications />
                    </Suspense>
                  }
                />
                <Route
                  path="/admin/newsletter"
                  element={
                    <Suspense fallback={<PageLoader />}>
                      <AdminNewsletter />
                    </Suspense>
                  }
                />
                <Route
                  path="/admin/campaigns"
                  element={
                    <Suspense fallback={<PageLoader />}>
                      <CampaignManager />
                    </Suspense>
                  }
                />
                <Route
                  path="/admin/contacts"
                  element={
                    <Suspense fallback={<PageLoader />}>
                      <AdminContacts />
                    </Suspense>
                  }
                />
              </Route>
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;