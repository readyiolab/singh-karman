import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FileText,
  ArrowRight,
  X,
  Sparkles,
  Star,
  Zap,
  Award,
  BookCopy,
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

const pdfGuides = [
  {
    title: "The Beginner’s Guide to Building a Tax-Free Retirement",
    description: [
      "Discover proven strategies to structure your savings for tax-free retirement income.",
      "Learn actionable steps to save thousands, whether starting your career or nearing retirement.",
      "Simple, effective methods to secure a stress-free, tax-free future without jargon.",
    ],
    gradient: "from-emerald-400 via-green-500 to-teal-600",
    icon: FileText,
    fileName: "dummy-pdf-1.pdf",
  },
  {
    title: "How to Create Generational Wealth Without a Million-Dollar Salary",
    description: [
      "Build lasting wealth for generations, no seven-figure income required.",
      "Explore smart investments and strategic life insurance planning.",
      "Set up systems to protect your family’s future and break the cycle.",
    ],
    gradient: "from-rose-400 via-red-500 to-orange-500",
    icon: FileText,
    fileName: "dummy-pdf-2.pdf",
  },
  {
    title: "How High Earners Can Still Retire Tax-Free",
    description: [
      "Uncover advanced strategies to minimize tax burdens on retirement savings.",
      "Learn about smart account structures and tax-efficient investments.",
      "Tailored for high earners to retire on their terms with minimal taxes.",
    ],
    gradient: "from-teal-400 via-cyan-500 to-blue-500",
    icon: FileText,
    fileName: "dummy-pdf-3.pdf",
  },
];

const PDFDownload = () => {
  const [selectedGuide, setSelectedGuide] = useState(null);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
  });
  const [showForm, setShowForm] = useState(false);
  const [error, setError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleDownloadClick = (guide) => {
    setSelectedGuide(guide);
    setShowForm(true);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);

    try {
      const response = await fetch("http://localhost:3000/api/applications", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          pdf: selectedGuide.fileName,
        }),
      });

      if (!response.ok) throw new Error("Failed to submit application");

      await response.json();
      setShowForm(false);
      setFormData({ fullName: "", email: "", phone: "" });
      navigate(`/thank-you?guide=${encodeURIComponent(selectedGuide.title)}`);
    } catch (err) {
      setError("Error submitting form. Please try again.");
      console.error("Form submission error:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const scrollToGuides = () => {
    const guidesSection = document.getElementById("pdf-guides-section");
    if (guidesSection) {
      guidesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden py-10 sm:py-20 lg:py-24"
        style={{
          backgroundImage: "url('https://plus.unsplash.com/premium_photo-1672423156257-9a2bc5e1f480?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGZpbmFuY2V8ZW58MHx8MHx8fDA%3D')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50 z-0" />
        
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
                Empowering Financial Freedom
              </span>
            </motion.div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Unlock Your Financial Future
              <span className="block text-accent-dark mt-2 pb-3 bg-gradient-to-r from-lime-500 to-green-600 bg-clip-text text-transparent">
                Download Free Guides
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
              Start building wealth, protecting your income, and creating a
              future you’ll be proud of with our free, expert-crafted guides.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group"
            >
              <button
                onClick={scrollToGuides}
                className="inline-flex items-center justify-center min-w-[280px] py-4 px-8 bg-gradient-to-r from-lime-500 to-green-600 rounded-2xl text-white text-lg font-semibold hover:from-lime-600 hover:to-green-700 shadow-lg hover:shadow-xl transition-all duration-300"
                aria-label="Explore Financial Guides"
              >
                Explore Guides
                <BookCopy className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* PDF Guides Section */}
      <section
        id="pdf-guides-section"
        className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-white to-green-50 relative overflow-hidden"
      >
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-lime-400/20 rounded-full blur-3xl opacity-80" />
        <div className="absolute bottom-0 -right-20 w-96 h-96 bg-green-300/20 rounded-full blur-3xl opacity-80" />
        <div className="container px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto relative z-10">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Free Financial
              <span className="block text-accent-dark mt-2 pb-3">Guides</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Download our expertly crafted guides to start your journey toward
              financial freedom.
            </p>
          </motion.div>
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          >
            {pdfGuides.map((guide, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group relative bg-white/95 backdrop-blur-md rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 p-8 overflow-hidden border border-gray-200/50 hover:-translate-y-2 cursor-pointer flex flex-col min-h-[450px]"
              >
                <div className="flex flex-col flex-grow">
                  <div
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 shadow-md bg-gradient-to-br ${guide.gradient} group-hover:scale-110 group-hover:rotate-3`}
                  >
                    <guide.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 min-h-[60px] flex items-center">
                    {guide.title}
                  </h3>
                  <div className="text-base text-gray-700 leading-relaxed space-y-4 mb-6 flex-1">
                    {guide.description.map((item, idx) => (
                      <motion.p
                        key={idx}
                        className={`${
                          idx % 2 === 0 ? "text-left" : "text-right"
                        } max-w-[85%] ${
                          idx % 2 === 0 ? "mr-auto" : "ml-auto"
                        } bg-gray-100/50 p-3 rounded-lg shadow-sm transition-all duration-300 hover:bg-gray-100 hover:shadow-md`}
                        initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                        viewport={{ once: true }}
                      >
                        {item}
                      </motion.p>
                    ))}
                  </div>
                  <div className="mt-auto">
                    <button
                      onClick={() => handleDownloadClick(guide)}
                      className="w-full flex justify-center items-center bg-gradient-to-r from-lime-500 to-green-600 text-white hover:from-lime-600 hover:to-green-700 shadow-lg hover:shadow-xl py-3 rounded-3xl text-lg font-semibold transition-all duration-300"
                    >
                      Download Now
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-lime-200/20 via-transparent to-green-100/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none" />
              </motion.div>
            ))}
          </motion.div>
          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-8 border border-gray-200/50 shadow-xl backdrop-blur-sm">
              <h3 className="font-bold text-2xl text-gray-900 mb-4">
                Need Something Specific?
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Can't find what you're looking for? Let's schedule a free consultation to discuss your unique financial situation.
              </p>
              <a href="https://calendly.com/karmansingh/financialstratgey" target="_blank" rel="noopener noreferrer">
                <button className="inline-flex items-center space-x-2 bg-gradient-to-r from-lime-500 to-green-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                  <span>Schedule Free Consultation</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Form Popup */}
      {showForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 relative shadow-2xl"
          >
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-6 right-4 text-gray-600 hover:text-gray-900"
            >
              <X size={24} />
            </button>
            <h3 className="text-xl font-semibold text-gray-900 mb-6 mt-2">
              {selectedGuide?.title}
            </h3>
            {error && (
              <p className="text-red-500 text-sm mb-4">{error}</p>
            )}
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                  className="mt-1 block w-full p-3 rounded-md border-gray-300 shadow-sm focus:border-lime-500 focus:ring-lime-500 sm:text-sm"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="mt-1 block w-full p-3 rounded-md border-gray-300 shadow-sm focus:border-lime-500 focus:ring-lime-500 sm:text-sm"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="mt-1 block w-full p-3 rounded-md border-gray-300 shadow-sm focus:border-lime-500 focus:ring-lime-500 sm:text-sm"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full flex justify-center items-center bg-gradient-to-r from-lime-500 to-green-600 text-white hover:from-lime-600 hover:to-green-700 shadow-lg hover:shadow-xl py-3 rounded-lg text-lg font-semibold transition-all duration-300 ${
                  isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {isSubmitting ? "Submitting..." : "Get My Free Guide"}
              </button>
            </form>
          </motion.div>
        </div>
      )}

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

          .lg\\:grid-cols-3 {
            grid-template-columns: 1fr;
          }

          .text-right {
            text-align: left !important;
          }

          .ml-auto {
            margin-left: 0 !important;
            margin-right: auto !important;
          }

          .max-w-[85%] {
            max-width: 100% !important;
          }
        }
      `}</style>
    </div>
  );
};

export default PDFDownload;