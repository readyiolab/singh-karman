import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Star, Zap, Shield, Target, TrendingUp, Award } from 'lucide-react';

// Custom Button Component
const Button = ({ children, className, variant = 'default', size = 'lg', to, ...props }) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-full font-semibold transition-all duration-300 focus:outline-none';
  const variants = {
    default: 'bg-gradient-to-r from-lime-500 to-green-600 text-white hover:from-lime-600 hover:to-green-700 shadow-lg hover:shadow-xl',
    outline: 'border-2 border-white text-white hover:bg-white hover:text-gray-800',
    secondary: 'bg-gray-800 text-white hover:bg-gray-900 shadow-md hover:shadow-lg',
  };
  const sizes = {
    lg: 'px-8 py-4 text-lg',
    md: 'px-6 py-3 text-base',
  };

  return (
    <Link
      to={to}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className || ''}`}
      {...props}
    >
      {children}
    </Link>
  );
};

// Animation Variants
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, ease: 'easeOut' },
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

const About = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section
        className="relative min-h-screen bg-primary flex items-center justify-center overflow-hidden py-10 sm:py-20 lg:py-24"
      >
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,_#84cc16_0%,_transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,_#6b7280_0%,_transparent_50%)]" />
        </div>

        <div className="absolute inset-0 pointer-events-none">
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
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-3 rounded-full mb-8 border border-white/20 shadow-lg"
            >
              <Award className="w-5 h-5 text-[#84cc16] fill-current" />
              <span className="text-sm font-medium tracking-wide">Empowering Wealth Creation</span>
            </motion.div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
              Crafting Your
              <span className="block bg-gradient-to-r from-lime-500 to-green-600 bg-clip-text text-transparent mt-2 pb-3">
                Financial Legacy
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white mb-12 max-w-3xl mx-auto leading-relaxed font-light">
              From humble beginnings to empowering families with strategies for generational wealth and purpose-driven lives.
            </p>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex group"
            >
              <Button
                to="/contact#contact-form"
                size="lg"
                className="text-white min-w-[220px] justify-center bg-accent-dark"
                aria-label="Start Your Financial Journey"
              >
                Start Your Journey
                <ArrowRight className="w-5 h-5 translate-x-0 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="container px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              My Story of
              <span className="block bg-gradient-to-r from-lime-500 to-green-600 bg-clip-text text-transparent mt-2">
                Transformation
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A journey from feeling stuck to empowering others with the tools to build wealth and live with purpose.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="grid gap-8 lg:grid-cols-2 items-start"
          >
            <motion.div variants={fadeInUp} className="space-y-8">
              <div className="bg-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-2xl font-semibold bg-gradient-to-r from-lime-500 to-green-600 bg-clip-text text-transparent mb-4">
                  The Struggle
                </h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  There were many times I felt like my life wasn’t amounting to anything. I’d work hard, achieve a little, and then feel it slipping away. Deep down, I wanted to build something of my own — something that couldn’t be taken away, something with my name on it. But I didn’t come from money. In fact, I was often seen as below average. I felt stuck. I knew I couldn’t live my life working for someone else and calling that fulfillment.
                  <br /><br />
                  I realized this isn’t the era where we need to “work for the man” just to survive. If I was going to work eight hours a day, I decided I’d rather do it for myself — and for a bigger purpose. The only problem? I didn’t have the funds or a financial cushion. I wasn’t going to ask my family for help — they had already given so much just to provide a decent life for me and my little sister. My parents sacrificed endlessly, yet they still didn’t have peace of mind. That lit a fire in me.
                  <br /><br />
                  I started building while still working. I took every ounce of determination I had and pushed toward a future that looked nothing like my present. Along the way, I met people doing things on their own terms — building freedom, creating impact, owning their time. And I knew I was on the right path.
                </p>
              </div>
              <div className="bg-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-2xl font-semibold bg-gradient-to-r from-lime-500 to-green-600 bg-clip-text text-transparent mb-4">
                  The Mission
                </h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  I wasn’t born into wealth. My family worked hard — incredibly hard — to give me and all my family a great life. They sacrificed without hesitation. But even with all that effort, they often came up short on peace of mind. That left a mark on me. I saw the struggle, and I knew I never wanted to just “get by.”
                  <br /><br />
                  I also knew I wasn’t wired to work a job just for the sake of survival. I craved purpose. Ownership. Legacy. But like many others, I didn’t know where to start. Financial literacy wasn’t taught to me in school — or at home. I had to find it myself.
                  <br /><br />
                  And I did. I immersed myself in the world of money, freedom, and long-term thinking. I studied how the elite protect and multiply their wealth — and why so many others stay stuck. I committed to mastering this craft not just for myself, but so I could give it away. Because I believe in empowering people, not just advising them.
                  <br /><br />
                  Today, I help families build generational wealth with strategies rooted in clarity, control, and confidence. I help people understand their money, protect their loved ones, and live with intention. This isn’t just what I do — it’s who I’ve become. And it’s how I give back to the people I care about: my family, my community, and anyone who’s ready to take ownership of their future.
                </p>
              </div>
            </motion.div>
            <motion.div
              variants={fadeInUp}
              className="lg:sticky lg:top-24 flex justify-center lg:justify-end"
            >
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2VvfGVufDB8fDB8fHww"
                alt="Client Portrait"
                className="w-full max-w-md rounded-2xl shadow-lg object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-indigo-50 to-blue-100">
        <div className="container px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Our Core
              <span className="block bg-gradient-to-r from-lime-500 to-green-600 bg-clip-text text-transparent mt-2">
                Values
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              The principles that guide our mission to empower you toward financial freedom and a purpose-driven life.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2"
          >
            {[
              {
                id: 'clarity',
                title: 'Clarity',
                description:
                  'We simplify complex financial concepts to help you understand your money and make informed decisions.',
                icon: <Sparkles className="w-10 h-10 text-white" />,
                gradient: 'from-blue-400 via-blue-500 to-blue-600', // Lime
              },
              {
                id: 'control',
                title: 'Control',
                description:
                  'Take charge of your financial future with strategies designed for stability and growth.',
                icon: <Target className="w-10 h-10 text-white" />,
                gradient: 'from-emerald-400 via-green-500 to-teal-600', // Wolf grey
              },
              {
                id: 'confidence',
                title: 'Confidence',
                description:
                  'Build the confidence to pursue your goals with proven tools and personalized guidance.',
                icon: <Zap className="w-10 h-10 text-white" />,
                gradient: 'from-rose-400 via-red-500 to-orange-500', // Navy
              },
              {
                id: 'legacy',
                title: 'Legacy',
                description:
                  'Create a lasting impact for your family and community with wealth that endures.',
                icon: <Award className="w-10 h-10 text-white" />,
                gradient: 'from-teal-400 via-cyan-500 to-blue-500', // Lime with soft fade
              },
            ].map((value) => (
              <motion.div
                key={value.id}
                variants={fadeInUp}
                className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm
               rounded-3xl shadow-lg hover:shadow-2xl
               transition-all duration-500 p-8 overflow-hidden 
               border border-gray-200/50 dark:border-gray-700/50
               hover:-translate-y-2 hover:scale-[1.03] cursor-pointer"
                style={{
                  background: 'linear-gradient(180deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.85) 100%)',
                }}
              >
                {/* Icon Container */}
                <div
                  className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6
    hover:scale-110 transition-transform duration-300 shadow-md bg-gradient-to-br ${value.gradient}`}
                >
                  {value.icon}
                </div>


                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
                  {value.title}
                </h3>

                {/* Description */}
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                  {value.description}
                </p>

                {/* Hover Overlay Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-lime-200/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none" />
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 m-16 lg:py-24 bg-gradient-to-br from-gray-800 to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,_rgba(132,204,22,0.2)_0%,_transparent_50%)] opacity-15" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,_rgba(107,114,128,0.2)_0%,_transparent_50%)] opacity-15" />

        <div className="container relative z-10 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <motion.div {...fadeInUp} className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
              Ready to Build Your
              <span className="block bg-gradient-to-r from-lime-500 to-green-600 bg-clip-text text-transparent mt-2">
                Financial Legacy?
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto">
              Take the first step toward clarity, control, and confidence. Schedule your free consultation today and start your journey.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="group">
                <Button
                  to="/contact#contact-form"
                  size="lg"
                  className="min-w-[240px] justify-center"
                  aria-label="Schedule a Free Financial Consultation"
                >
                  Schedule Consultation
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="group">
                <Button
                  to="/about"
                  size="lg"
                  variant="outline"
                  className="min-w-[240px] justify-center"
                  aria-label="Learn More About Our Mission"
                >
                  Learn More
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }

        @keyframes pulse {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.4; }
        }

        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-pulse {
          animation: pulse 4s ease-in-out infinite;
        }

        .animate-shimmer {
          background: linear-gradient(to right, #84cc16 0%, #65a30d 50%, #84cc16 100%);
          background-size: 200% 100%;
          animation: shimmer 3s ease-in-out infinite;
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

          .lg\\:grid-cols-2 {
            grid-template-columns: 1fr;
          }

          .lg\\:sticky {
            position: static;
          }

          .lg\\:justify-end {
            justify-content: center;
          }

          .max-w-md {
            max-width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default About;