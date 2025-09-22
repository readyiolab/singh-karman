import { CheckCircle, Heart, Users, BookOpen, Target } from "lucide-react";
import { motion } from "framer-motion";

const WhyWorkWithMe = () => {
  const reasons = [
    {
      icon: Heart,
      title: "Purpose-Driven Approach",
      description: "Every plan is built with your family’s future in mind — designed to protect your present and strengthen your legacy.",
      gradient: "from-blue-400 via-blue-500 to-blue-600"
    },
    {
      icon: BookOpen,
      title: "Education-Focused",
      description: "We go beyond advice. You’ll gain the knowledge and tools to make confident financial decisions for life.",
      gradient: "from-emerald-400 via-green-500 to-teal-600"
    },
    {
      icon: Users,
      title: "Personalized Planning",
      description: "No cookie-cutter solutions. Your plan is tailored to your lifestyle, income, and vision for the future.",
      gradient: "from-teal-400 via-cyan-500 to-blue-500"
    },
    {
      icon: Target,
      title: "Simplified Strategies",
      description: "Finance doesn’t need to be complicated. We deliver clear, jargon-free strategies so you can move forward with confidence.",
      gradient: "from-rose-400 via-red-500 to-orange-500"
    }
  ];

  const commitments = [
    {
      title: "Clarity First",
      description: "Simple, jargon-free strategies you can actually understand and trust.",
      gradient: "from-purple-400 via-purple-500 to-indigo-600"
    },
    {
      title: "Ongoing Guidance",
      description: "Annual reviews and check-ins to ensure your plan grows with you.",
      gradient: "from-amber-400 via-yellow-500 to-orange-600"
    },
    {
      title: "Empowering Education",
      description: "Knowledge that equips you to make confident, informed financial choices.",
      gradient: "from-cyan-400 via-teal-500 to-emerald-600"
    },
    {
      title: "Real Solutions",
      description: "Proven strategies designed for real families — practical, effective, lasting.",
      gradient: "from-pink-400 via-rose-500 to-red-600"
    }
  ];

  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-gradient-to-b from-gray-100/50 to-gray-50/20 dark:from-gray-900/50 dark:to-gray-800/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center space-x-2 bg-primary/10 dark:bg-primary/20 text-primary px-4 py-2 rounded-full mb-6 shadow-lg backdrop-blur-sm border border-primary/20"
          >
            <Heart className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-gray-900 dark:text-gray-100 mb-3 sm:mb-4 lg:mb-6"
          >
            Beyond Advice — <span className="bg-clip-text text-transparent bg-accent-dark">Real Tools for Your Financial Future</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="font-body text-sm sm:text-base lg:text-lg xl:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            I know what it feels like to face financial uncertainty — and I also know the freedom that comes from building lasting wealth. My role is to guide you with strategies that don’t just tell you what to do, but empower you to take confident action at every step.
          </motion.p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12 lg:mb-16">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
              className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm
                         rounded-3xl shadow-xl hover:shadow-2xl 
                         transition-all duration-500 
                         p-8 overflow-hidden 
                         border border-gray-200/50 dark:border-gray-700/50
                         hover:-translate-y-2 hover:scale-[1.02]
                         cursor-pointer"
            >
              <div className="flex flex-col items-center text-center">
                <div className={`bg-gradient-to-br ${reason.gradient} p-4 rounded-2xl mb-6 w-fit
                               shadow-lg group-hover:shadow-xl group-hover:scale-110 
                               transition-all duration-300 relative overflow-hidden`}>
                  <reason.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <h3 className="font-heading font-semibold text-base sm:text-lg lg:text-xl xl:text-2xl text-gray-900 dark:text-gray-100 mb-2 sm:mb-3">
                  {reason.title}
                </h3>
                <p className="font-body text-xs sm:text-sm lg:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                  {reason.description}
                </p>
              </div>
              <div className={`absolute inset-0 bg-gradient-to-r ${reason.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-tl-2xl rounded-br-2xl`} />
            </motion.div>
          ))}
        </div>

        {/* Commitment Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mb-8 sm:mb-12 lg:mb-16"
        >
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="font-playwrite font-bold text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-gray-900 dark:text-gray-100 mb-6 sm:mb-8 text-center"
          >
            My <span className="text-accent-dark">Commitment</span>
          </motion.h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {commitments.map((commitment, index) => (
              <motion.div
                key={commitment.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm
                         rounded-3xl shadow-xl hover:shadow-2xl 
                         transition-all duration-500 
                         p-8 overflow-hidden 
                         border border-gray-200/50 dark:border-gray-700/50
                         hover:-translate-y-2 hover:scale-[1.02]
                         cursor-pointer"
              >
                <div className="flex flex-col items-center text-center">
                  <div className={`bg-gradient-to-r ${commitment.gradient} p-2 sm:p-3 rounded-lg mb-3 sm:mb-4 group-hover:scale-110 group-hover:shadow-lg transition-all duration-300`}>
                    <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <h4 className="font-heading font-semibold text-base sm:text-lg lg:text-xl text-gray-900 dark:text-gray-100 mb-2 sm:mb-3">
                    {commitment.title}
                  </h4>
                  <p className="font-body text-xs sm:text-sm lg:text-base xl:text-lg text-gray-600 dark:text-gray-300 leading-relaxed font-medium">
                    {commitment.description}
                  </p>
                </div>
                <div className={`absolute inset-0 bg-gradient-to-r ${commitment.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-tl-2xl rounded-br-2xl`} />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Quote Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          style={{
            backgroundImage: 'linear-gradient(135deg, #004e92 0%, #007494 50%, #009688 100%)'
          }}
          className="max-w-4xl mx-auto rounded-tl-2xl rounded-br-2xl p-4 sm:p-6 lg:p-8 
             border border-blue-500/20 shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <div className="relative text-center">
            {/* Decorative circles */}
            <div className="absolute -top-2 -left-2 w-4 h-4 bg-teal-500/20 rounded-full" />
            <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-teal-500/20 rounded-full" />

            {/* Quote Text */}
            <p className="font-body text-sm sm:text-base lg:text-lg xl:text-xl 
                  text-gray-100 italic leading-relaxed relative z-10">
              "This business was built on purpose, not privilege. I’ve lived through financial struggle, and my mission is to help families rise above it creating wealth with clarity, confidence, and integrity.”
            </p>

            {/* Author */}
            <p className="font-playwrite font-semibold text-white mt-3 sm:mt-4 lg:mt-6 
                  text-sm sm:text-base lg:text-lg xl:text-xl relative z-10">
              — Karman Singh
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default WhyWorkWithMe;