import React, { useState } from 'react';
import { 
  Download, 
  Calculator, 
  PlayCircle, 
  BookOpen, 
  ArrowRight, 
  Users, 
  Eye, 
  TrendingUp,
  Sparkles,
  CheckCircle,
  Clock
} from "lucide-react";

const ResourcesSection = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const resources = [
    {
      icon: Download,
      title: "Wealth Building Guide",
      description: "Free PDF: How to Build Wealth Without Confusion",
      type: "PDF Guide",
      action: "Download Free",
      gradient: "bg-gradient-to-br from-blue-500 to-blue-600",
      stats: "10k+ Downloads",
      statsIcon: Download,
      features: ["Step-by-step strategies", "Real-world examples", "Action worksheets"],
      time: "15 min read",
      popularity: "Most Popular"
    },
    {
      icon: Calculator,
      title: "Compound Interest Calculator",
      description: "See how your money can grow with strategic planning",
      type: "Interactive Tool",
      action: "Try Calculator",
      gradient: "bg-gradient-to-br from-purple-500 to-purple-600",
      stats: "5k+ Users",
      statsIcon: Users,
      features: ["Visual projections", "Multiple scenarios", "Export results"],
      time: "5 min setup",
      popularity: "Interactive"
    },
    {
      icon: PlayCircle,
      title: "Financial Freedom Video",
      description: "5-minute explainer on tax-free retirement strategies",
      type: "Video Resource",
      action: "Watch Now",
      gradient: "bg-gradient-to-br from-emerald-500 to-emerald-600",
      stats: "25k+ Views",
      statsIcon: Eye,
      features: ["Expert insights", "Clear explanations", "Actionable tips"],
      time: "5 min watch",
      popularity: "Trending"
    }
  ];

  const FloatingElements = ({ index }) => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div 
        className="absolute top-4 right-4 w-2 h-2 bg-blue-400/30 rounded-full animate-pulse"
        style={{ animationDelay: `${index * 0.5}s` }}
      ></div>
      <div 
        className="absolute bottom-6 left-6 w-1 h-1 bg-purple-400/40 rounded-full animate-bounce"
        style={{ animationDelay: `${index * 0.3}s` }}
      ></div>
      <div 
        className="absolute top-1/2 left-2 w-1.5 h-1.5 bg-emerald-400/30 rounded-full animate-pulse"
        style={{ animationDelay: `${index * 0.7}s` }}
      ></div>
    </div>
  );

  return (
    <section className="py-20 bg-slate-50 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-purple-50/50"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-100/30 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-purple-100/30 to-transparent rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-emerald-100/20 to-blue-100/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      {/* Decorative grid pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <svg className="w-full h-full" viewBox="0 0 100 100">
          <defs>
            <pattern id="grid" width="4" height="4" patternUnits="userSpaceOnUse">
              <path d="M 4 0 L 0 0 0 4" fill="none" stroke="currentColor" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" className="text-slate-400" />
        </svg>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-primary/10 dark:bg-primary/20 text-primary px-4 py-2 rounded-full mb-6 shadow-lg backdrop-blur-sm border border-primary/20">
            <BookOpen className="w-5 h-5 animate-pulse" />
            <span className="font-semibold text-sm uppercase tracking-wider">Free Resources</span>
            <Sparkles className="w-4 h-4 animate-pulse" style={{animationDelay: '1s'}} />
          </div>
          
          <h2 className="font-bold text-4xl lg:text-6xl text-slate-800 mb-8 leading-tight">
            Start With <span className="text-accent-dark ">
              Clarity
              
            </span>
          </h2>
          
          <p className="text-xl lg:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed mb-8">
            Access valuable tools and resources to begin your wealth-building journey. 
            Knowledge is power — and these resources are your first step toward financial freedom.
          </p>

          {/* Trust indicators */}
          <div className="flex items-center justify-center space-x-8 text-sm text-slate-500">
            <div className="flex items-center space-x-2">
              <TrendingUp className="w-4 h-4" />
              <span>40K+ Total Downloads</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="w-4 h-4" />
              <span>Trusted by Thousands</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4" />
              <span>Always Free</span>
            </div>
          </div>
        </div>

        {/* Enhanced Resources Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {resources.map((resource, index) => (
            <div 
              key={resource.title}
              className="group relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 flex flex-col border border-slate-100/50 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] cursor-pointer overflow-hidden"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Floating decorative elements */}
              <FloatingElements index={index} />
              
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl bg-gradient-to-br from-blue-500 to-purple-500"></div>
              
              {/* Popularity badge */}
              <div className="absolute top-4 right-4 bg-black text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                {resource.popularity}
              </div>

              <div className="relative z-10">
                {/* Enhanced Icon */}
                <div className="relative mb-8">
                  <div className={`${resource.gradient} p-5 rounded-2xl w-fit shadow-lg group-hover:shadow-2xl transition-all duration-300 relative overflow-hidden group-hover:scale-110`}>
                    <resource.icon className="w-8 h-8 text-white relative z-10" />
                    <div className="absolute inset-0 bg-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  {/* Stats with enhanced styling */}
                  <div className="absolute -bottom-2 -right-2 bg-white border-2 border-slate-100 rounded-full px-3 py-1 shadow-lg">
                    <div className="flex items-center space-x-1 text-xs">
                      <resource.statsIcon className="w-3 h-3 text-slate-500" />
                      <span className="font-semibold text-slate-700">{resource.stats}</span>
                    </div>
                  </div>
                </div>
                
                {/* Enhanced Type Badge */}
                <div className="bg-gradient-to-r from-slate-100 to-slate-50 text-slate-700 px-4 py-2 rounded-full text-sm font-semibold mb-6 inline-block shadow-sm border border-slate-200/50">
                  {resource.type}
                </div>
                
                {/* Time indicator */}
                <div className="flex items-center space-x-2 text-xs text-slate-500 mb-4">
                  <Clock className="w-3 h-3" />
                  <span>{resource.time}</span>
                </div>
                
                {/* Enhanced Title */}
                <h3 className="font-bold text-xl lg:text-2xl text-slate-800 mb-4 text-center group-hover:text-blue-700 transition-colors duration-300">
                  {resource.title}
                </h3>
                
                {/* Enhanced Description */}
                <p className="text-slate-600 mb-6 leading-relaxed text-center">
                  {resource.description}
                </p>
                
                {/* Enhanced Features List */}
                <div className="space-y-3 mb-8">
                  {resource.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-slate-600 bg-slate-50/50 rounded-lg px-3 py-2 group-hover:bg-blue-50/50 transition-colors duration-300">
                      <CheckCircle className="w-4 h-4 text-blue-500 mr-3 flex-shrink-0" />
                      <span className="font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
                
                {/* Enhanced CTA Button */}
                 <button className="w-full bg-slate-800 hover:bg-slate-900 text-white py-4 px-6 rounded-xl font-semibold flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105 relative overflow-hidden">
    <span className="relative z-10">{resource.action}</span>
    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-full group-hover:-translate-x-full transition-transform duration-1000"></div>
  </button>

                
              </div>

              {/* Card shine effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 translate-x-full group-hover:-translate-x-full transition-transform duration-1000"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced bottom CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-slate-200/50 shadow-xl backdrop-blur-sm">
            <h3 className="font-bold text-2xl text-slate-800 mb-4">
              Need Something Specific?
            </h3>
            <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
              Can't find what you're looking for? Let's schedule a free consultation to discuss your unique financial situation.
            </p>
            <button className="inline-flex items-center space-x-2 bg-slate-800 hover:bg-slate-900 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
              <span>Schedule Free Consultation</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;