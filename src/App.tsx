import React, { Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop"; // adjust path

const queryClient = new QueryClient();

// Lazy load components
const Layout = React.lazy(() => import("./components/layout/Layout"));
const Index = React.lazy(() => import("./pages/Index"));
const About = React.lazy(() => import("./pages/About"));
const Services = React.lazy(() => import("./pages/Services"));
const Contact = React.lazy(() => import("./pages/Contact"));
const Resources = React.lazy(() => import("./pages/Resources"));
const Calculator = React.lazy(() => import("./pages/Calculator"));
const NotFound = React.lazy(() => import("./pages/NotFound"));

// Loader Component (Full App Loader)
const Loader = () => {
  return (
    <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
      <div className="relative w-24 h-24 flex items-center justify-center">
        {/* SM Logo */}
        <div className="w-20 h-20 rounded-full bg-accent-dark shadow-lg flex items-center justify-center z-10">
          <span
            className="text-white text-3xl font-bold tracking-wider"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            SM
          </span>
        </div>

        {/* Animated ring */}
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
        {/* SM Logo */}
        <div className="w-14 h-14 rounded-full bg-accent-dark shadow-md flex items-center justify-center z-10">
          <span
            className="text-white text-xl font-bold"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            SM
          </span>
        </div>

        {/* Animated ring */}
        <div className="absolute inset-0 rounded-full border-3 border-accent-dark border-t-transparent animate-spin"></div>
      </div>
    </div>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
       <ScrollToTop />
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
                path="/calculator"
                element={
                  <Suspense fallback={<PageLoader />}>
                    <Calculator />
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
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
