import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Target, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const AboutPreview = () => {
  const values = [
    {
      icon: Target,
      title: "Purpose-Driven Approach",
      description:
        "Every strategy is crafted with your family’s future in mind, prioritizing long-term impact over fleeting gains.",
    },
    {
      icon: Users,
      title: "Education-Focused Sessions",
      description:
        "We empower you with knowledge, not just advice, so you can make confident financial decisions.",
    },
    {
      icon: Heart,
      title: "Simplified Strategies",
      description:
        "Clear, jargon-free plans designed to build your confidence through understanding.",
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-b from-background to-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start"
        >
          {/* Left Column - Story */}
          <div className="space-y-6 lg:space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-3 py-1.5 sm:px-4 sm:py-2 rounded-full"
            >
              <Heart className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="font-medium text-xs sm:text-sm uppercase tracking-wide">
                Personal Mission
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground"
            >
              From Humble Roots to{" "}
              <span className="bg-clip-text text-accent-dark ">
                Purposeful Wealth
              </span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-4 text-base sm:text-lg text-muted-foreground leading-relaxed"
            >
              <p>
                Karman’s journey began with a family that worked tirelessly,
                sacrificing everything for a better future. That relentless drive
                to create a lasting legacy fuels his mission today.
              </p>
              <p>
                He’s now dedicated to empowering others to break free from
                financial uncertainty, using time-tested strategies once reserved
                for the elite. This isn’t just business—it’s personal.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Link to="/about">
                <Button
                  size="lg"
                  className="group bg-accent-dark rounded-full px-5 py-2 sm:px-6 sm:py-3 text-sm sm:text-base"
                >
                  Read My Full Story
                  <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>
          </div>

          {/* Right Column - Values */}
          <div className="space-y-4 sm:space-y-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.2 }}
                  className="relative group p-[2px] rounded-tr-3xl rounded-bl-3xl overflow-hidden"
                >
                  {/* Animated gradient border */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-cyan-400 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-tr-3xl rounded-bl-3xl"></div>

                  {/* Main content */}
                  <div className="relative bg-primary  backdrop-blur-md border border-blue-800 shadow-lg group-hover:shadow-2xl transition-all duration-300 p-4 sm:p-6 flex items-start space-x-4 rounded-tr-3xl rounded-bl-3xl group-hover:scale-[1.03]">
                    <div className="bg-white p-2 sm:p-3 rounded-full flex-shrink-0 transition-colors duration-300 group-hover:bg-primary-foreground/65">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-lg sm:text-xl lg:text-2xl text-white mb-2">
                        {value.title}
                      </h3>
                      <p className="text-blue-100 text-sm sm:text-base leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutPreview;
