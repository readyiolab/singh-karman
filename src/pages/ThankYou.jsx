import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const ThankYou = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const guideTitle = queryParams.get("guide") || "Your Guide";

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <motion.div {...fadeInUp} className="max-w-2xl mx-auto text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
          Thank You for Your Request!
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 mb-8">
          Your free guide, <strong>{decodeURIComponent(guideTitle)}</strong>, has been sent to your email. Please check your inbox (and spam/junk folder) for the download link.
        </p>
        <Link
          to="/"
          className="inline-flex items-center justify-center py-3 px-6 bg-gradient-to-r from-lime-500 to-green-600 rounded-lg text-white text-lg font-semibold hover:from-lime-600 hover:to-green-700 shadow-lg transition-all duration-300"
        >
          Back to Home
        </Link>
      </motion.div>
    </div>
  );
};

export default ThankYou;