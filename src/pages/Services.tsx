import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sparkles, Star, Zap, Award, Calculator, TrendingUp, GraduationCap, PiggyBank, Heart, BookOpen, Target, ArrowRight, Play, FileText, CreditCard, ShieldCheck } from 'lucide-react';

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

const Services = () => {
  const services = [
    {
      id: 'life-insurance',
      icon: Sparkles,
      title: 'Life Insurance Planning',
      description: 'We go beyond the basics of life coverage and help you use insurance as a strategic asset — one that can protect your family and create long-term cash value.',
      features: ['Term, whole, and indexed universal options', 'Tax-advantaged growth', 'Asset protection and liquidity'],
      gradient: 'from-blue-400 via-blue-500 to-blue-600',
    },
    {
      id: 'retirement',
      icon: TrendingUp,
      title: 'Tax-Free Retirement Solutions',
      description: 'Why give away a third of your retirement income in taxes? We help you build retirement income using tools that grow and distribute tax-free.',
      features: ['Indexed life insurance-based plans', 'Retirement withdrawal strategies', 'Longevity planning'],
      gradient: 'from-emerald-400 via-green-500 to-teal-600',
    },
    {
      id: 'college-savings',
      icon: GraduationCap,
      title: 'College Savings Strategies',
      description: 'We help parents design plans that grow without market risk and can be used for any purpose — not just tuition.',
      features: ['Alternative to 529s', 'Cash value growth', 'Multi-use flexibility'],
      gradient: 'from-rose-400 via-red-500 to-orange-500',
    },
    {
      id: 'annuities',
      icon: PiggyBank,
      title: 'Annuities & Rollovers',
      description: 'Ensure your retirement savings are safe, growing, and guaranteed to provide lifetime income — with no guesswork.',
      features: ['Fixed & Indexed Annuities', 'IRA / 401(k) Rollovers', 'Market-loss protection'],
      gradient: 'from-teal-400 via-cyan-500 to-blue-500',
    },
    {
      id: 'debt-elimination',
      icon: Calculator,
      title: 'Debt Elimination Plans',
      description: 'We design cash flow systems that help you clear debts faster and redirect that money toward building wealth.',
      features: ['Income restructuring', 'Budgeting with purpose', 'Reinvestment of paid-off debt'],
      gradient: 'from-purple-400 via-purple-500 to-indigo-600',
    },
    {
      id: 'legacy',
      icon: Heart,
      title: 'Legacy & Estate Planning',
      description: 'We guide you in building a legacy that’s structured, tax-efficient, and legally protected — so your wealth goes where you want it to.',
      features: ['Living trusts', 'Estate life insurance', 'Wealth transfer without probate'],
      gradient: 'from-pink-400 via-pink-500 to-rose-600',
    },
    {
      id: 'education',
      icon: BookOpen,
      title: 'Financial Education',
      description: 'Not just services — empowerment. Learn the strategies we use so you’re in control, not confused.',
      features: ['One-on-one coaching', 'Strategy breakdowns', 'Tools & calculators'],
      gradient: 'from-indigo-400 via-indigo-500 to-blue-600',
    },
    {
      id: 'wealth-roadmaps',
      icon: Target,
      title: 'Custom Wealth Roadmaps',
      description: 'One size doesn’t fit all. We start by understanding you — then create a fully tailored financial plan.',
      features: ['Personal goal alignment', 'Integrated strategy', 'Annual reviews and adjustments'],
      gradient: 'from-green-400 via-lime-500 to-emerald-600',
    },
  ];

  const processSteps = [
    {
      step: '01',
      title: 'One-on-One Strategy Session',
      description: 'We begin by understanding your goals, fears, and current financial position.',
    },
    {
      step: '02',
      title: 'Plan Customization',
      description: 'You’ll receive a clear, customized roadmap that aligns with your income, lifestyle, and legacy needs.',
    },
    {
      step: '03',
      title: 'Implementation & Support',
      description: 'We help you take action — with trusted partners, guidance, and ongoing reviews.',
    },
    {
      step: '04',
      title: 'Growth & Review',
      description: 'Your financial life evolves. So does our plan. We review and adjust annually or as needed.',
    },
  ];

  const tools = [
    {
      icon: FileText,
      title: 'PDF Tools',
      description: 'Access our collection of financial planning PDFs and resources to get started.',
      to: '/tools/pdf',
    },
    {
      icon: Calculator,
      title: 'Wealth Calculator',
      description: 'Calculate your potential wealth growth with our interactive tool.',
      to: '/tools/calculator',
    },
    {
      icon: CreditCard,
      title: 'Debt Payoff Simulator',
      description: 'Simulate debt elimination strategies and see how fast you can become debt-free.',
      to: '/tools/debt-simulator',
    },
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section - Enhanced with smoother animations and better overlay */}
      <section className="relative min-h-screen bg-[#1e3a8a] flex items-center justify-center overflow-hidden py-10 sm:py-20 lg:py-24">
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
            transition={{ duration: 0.8, ease: 'easeOut' }}
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
              Wealth Is More Than Money
              <span className="block bg-gradient-to-r from-lime-500 to-green-600 bg-clip-text text-transparent mt-2 pb-3">
                Freedom. Legacy. Peace.
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
              Tailored strategies to protect your income, grow your assets, and secure your family’s future with confidence.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-flex group">
              <Button
                to="/contact#contact-form"
                size="lg"
                className="min-w-[240px] justify-center"
                aria-label="Start Your Financial Journey"
              >
                Start Your Journey
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Introduction Section - Polished with better spacing and hover effects */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="container px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <motion.div
            {...fadeInUp}
            className="bg-gray-50 p-8 sm:p-12 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="space-y-6">
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                Karman Singh’s journey began in a hardworking immigrant family, where sacrifice was a way of life. That experience fueled a mission to empower families to break free from financial uncertainty.
              </p>
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                Through relentless self-education, Karman mastered the strategies of the wealthy and now shares them to help you build a future of clarity, control, and confidence.
              </p>
              <p className="text-lg sm:text-xl text-[#1e3a8a] font-semibold leading-relaxed">
                Discover our services to protect what you’ve built and create lasting wealth.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Video Section - Enhanced with better placeholder and animations */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-indigo-50 to-blue-100">
        <div className="container px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Our Approach in
              <span className="block bg-gradient-to-r from-lime-500 to-green-600 bg-clip-text text-transparent mt-2">
                2 Minutes
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Watch a brief video introducing Karman and our wealth-building philosophy.
            </p>
          </motion.div>
          <motion.div
            {...fadeInUp}
            className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 sm:p-12 border border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="aspect-video bg-gray-100 rounded-xl flex items-center justify-center overflow-hidden">
              <div className="text-center">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  className="bg-[#1e3a8a] p-6 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center shadow-lg"
                >
                  <Play className="w-10 h-10 text-white ml-1" />
                </motion.div>
                <p className="text-gray-600 text-sm sm:text-base">
                  Video introducing Karman and his wealth-building services
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Overview - Polished with smoother hover effects and gradients */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-white via-green-50/30 to-white relative overflow-hidden">
        <div className="container px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto relative z-10">
          
          {/* Section Heading */}
          <motion.div {...fadeInUp} className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Our Wealth-Building
              <span className="block text-accent-dark mt-2">
                Services
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mt-4 leading-relaxed">
              Expert strategies and tailored solutions to protect your income, accelerate asset growth, 
              and safeguard your family’s financial future — so you can live with confidence.
            </p>
          </motion.div>

          {/* Services Grid */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid gap-10 sm:grid-cols-3 lg:grid-cols-2"
          >
            {services.map((service) => (
              <motion.div
                key={service.id}
                variants={fadeInUp}
                className="group relative bg-white/90 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 overflow-hidden border border-gray-200/50 hover:-translate-y-2 hover:scale-[1.03] cursor-pointer"
                whileHover={{ scale: 1.03, rotate: 0.5 }}
              >
                {/* Icon */}
                <div
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 shadow-md bg-gradient-to-br ${service.gradient} group-hover:scale-110 group-hover:rotate-3`}
                >
                  <service.icon className="w-10 h-10 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Feature List */}
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-lime-500 rounded-full mr-3 flex-shrink-0"></div>
                      <span className="text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-lime-200/20 via-transparent to-green-100/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none" />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Decorative Blur Elements - Enhanced for better visual polish */}
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-lime-400/20 rounded-full blur-3xl opacity-80"></div>
        <div className="absolute bottom-0 -right-20 w-96 h-96 bg-green-300/20 rounded-full blur-3xl opacity-80"></div>
      </section>

      {/* Process Section - Enhanced with better card designs */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-indigo-50 to-blue-100">
        <div className="container px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              How We Build Your
              <span className="block bg-gradient-to-r from-lime-500 to-green-600 bg-clip-text text-transparent mt-2">
                Wealth Plan
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A clear, step-by-step process to guide you toward financial success.
            </p>
          </motion.div>
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2"
          >
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                variants={fadeInUp}
                className="text-center p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200/50 hover:-translate-y-2"
              >
                <div className="bg-[#1e3a8a] text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 font-bold text-xl shadow-md">
                  {step.step}
                </div>
                <h3 className="font-semibold text-lg text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600 text-sm sm:text-base">{step.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section - Polished with better gradients and animations */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-800 to-gray-900 relative overflow-hidden">
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

      {/* Tools Section - Enhanced to three polished boxes/cards with icons, descriptions, and buttons */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="container px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Prefer to Explore on Your Own First?
              <span className="block bg-gradient-to-r from-lime-500 to-green-600 bg-clip-text text-transparent mt-2">
                Try Our Tools
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Try out our tools to see what’s possible with just a few numbers.
            </p>
          </motion.div>
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          >
            {tools.map((tool, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group relative bg-white/90 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 overflow-hidden border border-gray-200/50 hover:-translate-y-2 cursor-pointer"
              >
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 shadow-md bg-gradient-to-br from-lime-400 via-green-500 to-emerald-600 mx-auto group-hover:scale-110">
                  <tool.icon className="w-10 h-10 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">{tool.title}</h3>

                {/* Description */}
                <p className="text-base text-gray-600 leading-relaxed mb-6 text-center">{tool.description}</p>

                {/* Button */}
                <div className="flex justify-center">
                  <Button
                    to={tool.to}
                    size="md"
                    className="justify-center"
                    aria-label={`Try ${tool.title}`}
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-lime-200/20 via-transparent to-green-100/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none" />
              </motion.div>
            ))}
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

          .sm\\:grid-cols-2 {
            grid-template-columns: 1fr;
          }

          .lg\\:grid-cols-4 {
            grid-template-columns: 1fr;
          }

          .lg\\:grid-cols-3 {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default Services;