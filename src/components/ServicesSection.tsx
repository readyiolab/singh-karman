import React from 'react';
import { 
  Shield, 
  TrendingUp, 
  GraduationCap, 
  Users, 
  BookOpen, 
  Calculator,
  ArrowRight,
  Sparkles,
  Star
} from "lucide-react";
import { NavLink } from 'react-router-dom';

const ServicesSection = () => {
  const services = [
    {
      icon: Shield,
      title: "Life Insurance Planning",
      description: "Protection that builds wealth, not just covers loss. Secure your family's future with smart insurance strategies.",
      gradient: "from-blue-400 via-blue-500 to-blue-600",
      bgPattern: "shield",
      stats: "98% Client Satisfaction"
    },
    {
      icon: TrendingUp,
      title: "Tax-Free Retirement",
      description: "Maximize your income, minimize your tax bill. Build a retirement that works as hard as you did.",
      gradient: "from-emerald-400 via-green-500 to-teal-600",
      bgPattern: "chart",
      stats: "Average 15% Tax Savings"
    },
    {
      icon: GraduationCap,
      title: "College Savings",
      description: "Give your children a debt-free start. Strategic education funding that grows with your family.",
      gradient: "from-purple-400 via-violet-500 to-indigo-600",
      bgPattern: "education",
      stats: "250+ Families Helped"
    },
    {
      icon: Users,
      title: "Legacy Planning",
      description: "Leave more than money — leave direction. Create lasting impact for generations to come.",
      gradient: "from-indigo-400 via-blue-500 to-purple-600",
      bgPattern: "family",
      stats: "$50M+ Protected"
    },
    {
      icon: BookOpen,
      title: "Financial Education",
      description: "Understand what the wealthy know — and apply it. Transform your money mindset with proven strategies.",
      gradient: "from-teal-400 via-cyan-500 to-blue-500",
      bgPattern: "knowledge",
      stats: "1000+ Students Trained"
    },
    {
      icon: Calculator,
      title: "Debt Elimination",
      description: "Get ahead faster by becoming truly debt-free. Strategic debt payoff that accelerates wealth building.",
      gradient: "from-rose-400 via-red-500 to-orange-500",
      bgPattern: "calculator",
      stats: "Average 3.2x Faster Payoff"
    }
  ];

  const BackgroundPattern = ({ pattern, className }) => {
    const patterns = {
      shield: (
        <svg className={className} viewBox="0 0 100 100" fill="none">
          <path d="M50 10L20 25V45C20 65 35 80 50 90C65 80 80 65 80 45V25L50 10Z" 
                stroke="currentColor" strokeWidth="1" opacity="0.1" fill="currentColor" fillOpacity="0.05"/>
        </svg>
      ),
      chart: (
        <svg className={className} viewBox="0 0 100 100" fill="none">
          <path d="M20 80L30 60L40 70L50 40L60 50L70 30L80 20" 
                stroke="currentColor" strokeWidth="1.5" opacity="0.1" fill="none"/>
          <circle cx="30" cy="60" r="2" fill="currentColor" opacity="0.1"/>
          <circle cx="50" cy="40" r="2" fill="currentColor" opacity="0.1"/>
          <circle cx="70" cy="30" r="2" fill="currentColor" opacity="0.1"/>
        </svg>
      ),
      education: (
        <svg className={className} viewBox="0 0 100 100" fill="none">
          <path d="M50 20L80 35L50 50L20 35L50 20Z" stroke="currentColor" strokeWidth="1" opacity="0.1" fill="currentColor" fillOpacity="0.05"/>
          <path d="M20 35V65L50 80L80 65V35" stroke="currentColor" strokeWidth="1" opacity="0.1" fill="none"/>
        </svg>
      ),
      family: (
        <svg className={className} viewBox="0 0 100 100" fill="none">
          <circle cx="35" cy="30" r="8" stroke="currentColor" strokeWidth="1" opacity="0.1" fill="currentColor" fillOpacity="0.05"/>
          <circle cx="65" cy="30" r="8" stroke="currentColor" strokeWidth="1" opacity="0.1" fill="currentColor" fillOpacity="0.05"/>
          <circle cx="25" cy="60" r="6" stroke="currentColor" strokeWidth="1" opacity="0.1" fill="currentColor" fillOpacity="0.05"/>
          <circle cx="50" cy="60" r="6" stroke="currentColor" strokeWidth="1" opacity="0.1" fill="currentColor" fillOpacity="0.05"/>
          <circle cx="75" cy="60" r="6" stroke="currentColor" strokeWidth="1" opacity="0.1" fill="currentColor" fillOpacity="0.05"/>
        </svg>
      ),
      knowledge: (
        <svg className={className} viewBox="0 0 100 100" fill="none">
          <rect x="30" y="20" width="40" height="50" stroke="currentColor" strokeWidth="1" opacity="0.1" fill="currentColor" fillOpacity="0.05"/>
          <path d="M35 30H65M35 40H65M35 50H55" stroke="currentColor" strokeWidth="1" opacity="0.1"/>
        </svg>
      ),
      calculator: (
        <svg className={className} viewBox="0 0 100 100" fill="none">
          <rect x="25" y="15" width="50" height="70" rx="5" stroke="currentColor" strokeWidth="1" opacity="0.1" fill="currentColor" fillOpacity="0.05"/>
          <rect x="30" y="25" width="40" height="10" stroke="currentColor" strokeWidth="1" opacity="0.1" fill="none"/>
          <circle cx="35" cy="45" r="3" fill="currentColor" opacity="0.1"/>
          <circle cx="50" cy="45" r="3" fill="currentColor" opacity="0.1"/>
          <circle cx="65" cy="45" r="3" fill="currentColor" opacity="0.1"/>
        </svg>
      )
    };
    
    return patterns[pattern] || null;
  };

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50 dark:from-gray-900 dark:via-slate-800 dark:to-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-teal-400/20 to-blue-400/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 dark:bg-primary/20 text-primary px-4 py-2 rounded-full mb-6 shadow-lg backdrop-blur-sm border border-primary/20">
            <Sparkles className="w-4 h-4" />
            <span className="font-semibold text-sm uppercase tracking-wider">Our Services</span>
            <Star className="w-4 h-4" />
          </div>
          
          <h2 className="font-heading font-bold text-4xl lg:text-6xl text-gray-900 dark:text-white mb-6 leading-tight">
            Empowering Your{' '}
            <span className="bg-clip-text text-accent-dark">
              Financial Future
            </span>
          </h2>
          
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover tailored wealth-building strategies designed to protect, grow, and secure your financial journey with confidence and expertise.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm
                         rounded-3xl shadow-xl hover:shadow-2xl 
                         transition-all duration-500 
                         p-8 overflow-hidden 
                         border border-gray-200/50 dark:border-gray-700/50
                         hover:-translate-y-2 hover:scale-[1.02]
                         cursor-pointer"
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-30">
                <BackgroundPattern pattern={service.bgPattern} className="w-full h-full text-gray-400" />
              </div>
              
              {/* Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`} />
              
              <div className="relative z-10">
                {/* Icon with enhanced styling */}
                <div className={`bg-gradient-to-br ${service.gradient} p-4 rounded-2xl mb-6 w-fit
                               shadow-lg group-hover:shadow-xl group-hover:scale-110 
                               transition-all duration-300 relative overflow-hidden`}>
                  <service.icon className="w-8 h-8 text-white relative z-10" />
                  <div className="absolute inset-0 bg-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                {/* Stats badge */}
                <div className="absolute top-6 right-6 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-3 py-1 rounded-full text-xs font-semibold">
                  {service.stats}
                </div>
                
                <h3 className="font-heading font-bold text-xl lg:text-2xl text-gray-900 dark:text-white mb-3 group-hover:text-accent-dark transition-all duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6 text-sm">
                  {service.description}
                </p>

                {/* Enhanced CTA */}
                <div className="flex items-center justify-between">
                  <NavLink to="/services">
  <button className="inline-flex items-center text-primary hover:text-primary-dark font-semibold text-sm group-hover:translate-x-1 transition-all duration-300">
    Learn More
    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
  </button>
</NavLink>
                  
                  {/* Progress indicator */}
                  <div className="w-12 h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div className={`h-full bg-gradient-to-r ${service.gradient} w-0 group-hover:w-full transition-all duration-700 delay-200`}></div>
                  </div>
                </div>
              </div>

              {/* Shine effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-full group-hover:-translate-x-full transition-transform duration-1000"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced CTA Section */}
        <div className="text-center">
          <NavLink to="/services">
          <button className="group bg-accent-dark text-white font-semibold px-8 py-4 rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center mx-auto">
            <span>Start Your Journey Today</span>
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
          </NavLink>
          
          <p className="text-gray-500 dark:text-gray-400 text-sm mt-4">
            Join thousands of satisfied clients building their financial future
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;