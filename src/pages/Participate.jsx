import React, { useState } from "react";
import { Helmet } from 'react-helmet-async';
import { motion } from "framer-motion";
import {
  Play,
  ArrowRight,
  Users,
  Star,
  Zap,
  Award,
  X,
  Sparkles,
  PhoneCall,
} from "lucide-react";


// Animation Variants
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
  viewport: { once: true },
};

// Benefits Data
const benefits = [
  {
    icon: Award,
    title: "Proven Success System",
    description: "Step-by-step training to help you grow fast.",
    gradient: "from-emerald-400 via-green-500 to-teal-600",
  },
  {
    icon: Star,
    title: "Unlimited Earning Potential",
    description: "No caps on your income.",
    gradient: "from-rose-400 via-red-500 to-orange-500",
  },
  {
    icon: Zap,
    title: "Flexible Work Environment",
    description: "Work from anywhere, on your own schedule.",
    gradient: "from-teal-400 via-cyan-500 to-blue-500",
  },
  {
    icon: Users,
    title: "Mentorship & Support",
    description: "Learn from top-performing leaders.",
    gradient: "from-indigo-400 via-indigo-500 to-blue-600",
  },
];

const Participate = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
  });
  const [showForm, setShowForm] = useState(false);
const [isOpen, setIsOpen] = useState(false);
  const handleJoinClick = () => {
    setShowForm(true);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Simulate redirecting to a thank you page
    window.location.href = `/thank-you?join=team`;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="bg-gray-50">
      <Helmet>
        <title>Join Our Team - Karman Singh Financial Services</title>
        <meta
          name="description"
          content="Join Karman Singh Financial Services and start your journey to financial independence. Discover a proven success system, unlimited earning potential, and a supportive community."
        />
        <meta
          name="keywords"
          content="join our team, financial independence, career opportunities, Karman Singh, financial services, mentorship"
        />
        <meta name="author" content="Karman Singh Financial Services" />
        <meta property="og:title" content="Join Our Team - Karman Singh Financial Services" />
        <meta
          property="og:description"
          content="Become part of a driven team at Karman Singh Financial Services. Enjoy flexible work, unlimited earnings, and world-class mentorship to achieve your goals."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.karmansingh.com/participate" />
        <meta property="og:image" content="https://www.karmansingh.com/participate-hero.webp" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Join Our Team - Karman Singh Financial Services" />
        <meta
          name="twitter:description"
          content="Take the first step toward a rewarding career with Karman Singh Financial Services. Schedule a call to learn about our proven system and supportive community."
        />
        <meta name="twitter:image" content="https://www.karmansingh.com/participate-hero.webp" />
      </Helmet>
      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden py-10 sm:py-20 lg:py-24"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmluYW5jZXxlbnwwfHwwfHx8MA%3D%3D')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50 z-0" />

        {/* Floating Icons */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute top-1/4 left-1/4 animate-float">
            <Sparkles className="w-4 h-4 sm:w-6 sm:h-6 text-[#84cc16] opacity-60" />
          </div>
          <div className="absolute top-1/3 right-1/4 animate-float animation-delay-1000">
            <Star className="w-3 h-3 sm:w-4 sm:h-4 text-[#6b7280] opacity-50" />
          </div>
          <div className="absolute bottom-1/3 left-1/5 animate-float animation-delay-2000">
            <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-[#1e3a8a] opacity-40" />
          </div>
          <div className="absolute top-2/3 right-1/3 animate-float animation-delay-3000">
            <Sparkles className="w-2 h-2 sm:w-3 sm:h-3 text-[#84cc16] opacity-70" />
          </div>
        </div>

        <div className="container relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-3 rounded-full mb-8 border border-white/20 shadow-lg"
            >
              <Award className="w-5 h-5 text-[#84cc16]" />
              <span className="text-sm font-medium tracking-wide">
                Join Our Mission
              </span>
            </motion.div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Build Your Future
              <span className="block text-accent-dark mt-2 pb-3 bg-gradient-to-r from-lime-500 to-green-600 bg-clip-text text-transparent">
                with Our Team
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
              Join a community of driven professionals and start your journey to
              financial independence.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group"
            >
              <a
                href="https://calendly.com/karmansingh/businessoverview "
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center min-w-[280px] py-4 px-8 bg-gradient-to-r from-lime-500 to-green-600 rounded-2xl text-white text-lg font-semibold hover:from-lime-600 hover:to-green-700 shadow-lg hover:shadow-xl transition-all duration-300"
                aria-label="Explore Financial Guides"
              >
                Schedule Your Call
                <PhoneCall className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-white to-green-50 relative overflow-hidden">
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-lime-400/20 rounded-full blur-3xl opacity-80" />
        <div className="absolute bottom-0 -right-20 w-96 h-96 bg-green-300/20 rounded-full blur-3xl opacity-80" />
        <div className="container px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto relative z-10">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Why Join Our{" "}
              <span className="block text-accent-dark mt-2 pb-3">Team</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Become part of a supportive, success-driven community with tools
              and mentorship to thrive.
            </p>
          </motion.div>
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group relative bg-white/90 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 overflow-hidden border border-gray-200/50 hover:-translate-y-2 cursor-pointer"
              >
                <div
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 shadow-md bg-gradient-to-br ${benefit.gradient} group-hover:scale-110 group-hover:rotate-3`}
                >
                  <benefit.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {benefit.title}
                </h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
                <div className="absolute inset-0 bg-gradient-to-br from-lime-200/20 via-transparent to-green-100/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-indigo-50 to-blue-100">
      <div className="container px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div {...fadeInUp} className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Our Approach in
            <span className="block bg-gradient-to-r from-lime-500 to-green-600 bg-clip-text text-transparent mt-2">
              2 Minutes
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Watch a brief video introducing Karman and our wealth-building
            philosophy.
          </p>
        </motion.div>

        {/* Video Thumbnail with Play Button */}
        <motion.div
          {...fadeInUp}
          className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 sm:p-12 border border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <div
            className="aspect-video bg-gray-100 rounded-xl flex items-center justify-center overflow-hidden relative cursor-pointer"
            onClick={() => setIsOpen(true)}
          >
            {/* Thumbnail Image */}
            <img
              src="/founder.webp" // <-- Replace with your thumbnail path
              alt="Karman Video Thumbnail"
              className="w-full h-full object-cover"
            />

            {/* Overlay with Play Button */}
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
                className="bg-[#1e3a8a] p-6 rounded-full w-20 h-20 flex items-center justify-center shadow-lg"
              >
                <Play className="w-10 h-10 text-white ml-1" />
              </motion.div>
            </div>
          </div>
          <p className="text-gray-600 text-sm sm:text-base text-center mt-4">
            Video introducing Karman and his wealth-building services
          </p>
        </motion.div>

        {/* Video Modal */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
          >
            <div className="relative w-[90%] sm:w-[70%] lg:w-[50%] aspect-video bg-black rounded-xl overflow-hidden">
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-3 right-3 text-white bg-black/50 rounded-full p-2 hover:bg-black/70"
                aria-label="Close video modal"
              >
                <X className="w-6 h-6" />
              </button>

              <iframe
                className="w-full h-full"
                src={"https://res.cloudinary.com/dbyjiqjui/video/upload/v1759820089/singhkarman-2_pxdaew.mp4"} // fallback link
                title="Karman Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </motion.div>
        )}
      </div>
    </section>

      {/* Testimonial Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-white to-gray-100 relative overflow-hidden">
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-lime-300/20 rounded-full blur-3xl opacity-70" />
        <div className="absolute bottom-0 -right-20 w-80 h-80 bg-green-300/20 rounded-full blur-3xl opacity-70" />
        <div className="container px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto relative z-10">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Success Stories
              <span className="block bg-gradient-to-r from-lime-500 to-green-600 bg-clip-text text-transparent mt-2">
                From Our Team
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover how our team members transformed their lives with our
              proven system and supportive community.
            </p>
          </motion.div>
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          >
            {[
              {
                quote:
                  "“Joining this team gave me the freedom to work on my terms and the tools to succeed beyond my expectations.”",
                author: "Sarah M.",
                role: "Student",
               
              },
              {
                quote:
                  "“The mentorship and community here are unmatched. I went from zero experience to earning a full-time income.”",
                author: "James T.",
                role: "Team Leader",
               
              },
              {
                quote:
                  "“This opportunity changed my life. I now have the confidence and skills to build a career I love.”",
                author: "Emily R.",
                role: "Marketing Specialist",
                
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group relative bg-white/90 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 border border-gray-200/50 hover:-translate-y-2"
              >
                <div className="flex items-center mb-6">
                  
                  <div>
                    <p className="text-lg font-semibold text-gray-900">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
                <blockquote className="text-base sm:text-lg text-gray-600 italic leading-relaxed mb-4">
                  {testimonial.quote}
                </blockquote>
                <div className="absolute inset-0 bg-gradient-to-br from-lime-200/20 via-transparent to-green-100/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none" />
                <Star className="absolute top-4 right-4 w-5 h-5 text-lime-500 opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-800 to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,_rgba(132,204,22,0.2)_0%,_transparent_50%)] opacity-15" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,_rgba(107,114,128,0.2)_0%,_transparent_50%)] opacity-15" />
        <div className="container relative z-10 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <motion.div {...fadeInUp} className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
              Your Opportunity
              <span className="block bg-gradient-to-r from-lime-500 to-green-600 bg-clip-text text-transparent mt-2">
                Starts Here
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto">
              Take the first step toward a rewarding career. Schedule a call to
              learn how you can join our team and achieve your goals.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group flex justify-center"
            >
              <a
                href="https://calendly.com/karmansingh/businessoverview"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="justify-center flex items-center rounded-full bg-gradient-to-r from-lime-500 to-green-600 text-white hover:from-lime-600 hover:to-green-700 shadow-lg hover:shadow-xl px-8 py-4 text-lg font-semibold">
                  Join the Team Today
                  <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
                </button>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }

        @keyframes pulse {
          0%,
          100% {
            opacity: 0.2;
          }
          50% {
            opacity: 0.4;
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-pulse {
          animation: pulse 4s ease-in-out infinite;
        }

        .animation-delay-1000 {
          animation-delay: 1s;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-3000 {
          animation-delay: 3s;
        }

        @media (max-width: 768px) {
          h1 {
            font-size: 2.5rem;
            line-height: 1.1;
          }

          .sm\\:grid-cols-2 {
            grid-template-columns: 1fr;
          }

          .lg\\:grid-cols-4 {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default Participate;
