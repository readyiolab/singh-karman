import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Shield, Sparkle, TrendingUp, Users } from "lucide-react";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);

    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Animated triangle component
  const AnimatedTriangle = ({ delay = 0, size = 60, opacity = 0.1 }) => (
    <div
      className="absolute animate-pulse"
      style={{
        animationDelay: `${delay}ms`,
        animationDuration: "3s",
        width: `${size}px`,
        height: `${size}px`,
      }}
    >
      <div
        className="w-full h-full bg-accent transform rotate-45"
        style={{
          clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
          opacity: opacity,
        }}
      />
    </div>
  );

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-primary pt-10">
      {/* Animated background triangles */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)`,
        }}
      >
        <AnimatedTriangle delay={0} size={120} opacity={0.15} />
        <AnimatedTriangle delay={600} size={80} opacity={0.2} />
        <AnimatedTriangle delay={1200} size={160} opacity={0.1} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20 ">
          {/* Left Column - Main Content */}
          <div
            className={`text-center lg:text-left transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
          >
            <h1 className="font-bold text-4xl sm:text-5xl lg:text-6xl text-primary-foreground mb-6 md:mb-8 leading-tight">
              Helping You Build{" "}
              <span className="text-accent-dark">Generational Wealth</span>
              <br />
              <span className="text-3xl sm:text-4xl lg:text-5xl text-primary-foreground/80">
                with Clarity, Control,
                <br />
                and Confidence
              </span>
            </h1>

            <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 md:mb-10 max-w-2xl leading-relaxed mx-auto lg:mx-0">
              Purpose-driven financial strategies designed to empower you and your family.
              Break the cycle of financial uncertainty and create the legacy you deserve.
            </p>

            {/* CTA Buttons with enhanced styling */}
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center lg:justify-start">
              <NavLink to="/contact">
                <Button
                  size="lg"
                  className="relative bg-accent-dark hover:bg-accent/90 text-accent-foreground text-base md:text-lg px-8 md:px-10 py-5 md:py-6 rounded-2xl shadow-2xl shadow-accent/25 border-0 group overflow-hidden transform hover:scale-105 transition-all duration-300"
                >
                  <span className="relative z-10 flex items-center">
                    Get Started Today
                    <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-accent/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Button>
              </NavLink>
              <NavLink to="/contact">
                <Button
                  variant="outline"
                  size="lg"
                  className="relative bg-primary-foreground/10 backdrop-blur-sm text-primary-foreground border-primary-foreground/20 hover:bg-primary-foreground/20 text-base md:text-lg px-8 md:px-10 py-5 md:py-6 rounded-2xl group overflow-hidden transform hover:scale-105 transition-all duration-300"
                >
                  <span className="relative z-10 flex items-center">
                    Book Free Consultation
                    <Phone className="ml-3 w-5 h-5 group-hover:rotate-12 transition-transform" />
                  </span>
                </Button>
              </NavLink>
            </div>

            {/* Stats row */}
            <div className="flex justify-center lg:justify-start space-x-6 md:space-x-8 mt-10 md:mt-12">
              {[
                { label: "Clients Served", value: "10K+" },
                { label: "Assets Protected", value: "$500M+" },
                { label: "Success Rate", value: "98%" },
              ].map((stat, index) => (
                <div
                  key={stat.label}
                  className={`text-center transform transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
                    }`}
                  style={{ transitionDelay: `${600 + index * 200}ms` }}
                >
                  <div className="text-xl md:text-2xl font-bold text-accent-dark">{stat.value}</div>
                  <div className="text-sm md:text-base text-primary-foreground/60">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Clean Background Image */}
          <div className="relative hidden lg:block">
            <div className="relative  rounded-md overflow-hidden shadow-lg  shadow-primary/20">
              <img
                src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                alt="Financial success and growth"
                className="w-full h-auto object-cover"
              />
              {/* Simple dark overlay for better contrast */}
              <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-black/10 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;