import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Star, Zap, Shield, Target, TrendingUp, Award, Users, BookOpen, Heart } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

// Custom Button Component (unchanged)
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

// Animation Variants (unchanged)
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

// Team Members Data (moved from MeetTheTeam)
const teamMembers = [
  {
    name: 'Brianna Cruise',
    role: 'Financial Consultant',
    bio: [
      'A passionate, family-centered professional who knows what it takes to succeed.',
      'As a proud mother, her children are her greatest inspiration and the reason she strives every day to create a future of freedom and opportunity. That same drive fuels her commitment to helping other families secure their futures, ensuring they have the peace of mind and financial confidence they deserve.',
      'She brings a quick wit, a sharp mind, and a heartfelt determination to every conversation. Brianna believes that true success comes not just from working hard, but from learning, growing, and sharing knowledge that empowers others.',
      'When she’s not helping others, Brianna cherishes time with her kids, building memories and modeling what dedication and perseverance look like.'
    ],
    image: '/brianna-cruise.webp',
    quote: 'Family is why I do this, and family is why I’ll always give my best.'
  },
  
  {
    name: 'Matt Barnes',
    role: 'Legacy Advisor',
    bio: [
      'For Matt, family means love. He grew up with the gift of a life insurance policy his parents set up for him, and over the years he has seen firsthand the power of planning ahead.',
      'Matt is a student of life, always learning, adapting, and refining his approach. He digs into the details, ensuring he knows exactly how every strategy works before sharing it with the people he cares about.',
      'As a proud uncle, Matthew is driven by the vision of passing on tools and wisdom that his nieces and nephews can use for decades to come. What inspires him most is knowing that strategies once reserved for the wealthy are now available to anyone willing to take action.'
    ],
    image: '/matt-barnes.webp',
    quote: 'When knowledge meets action, generations rise.'
  },
  {
    name: 'Shina Kaur',
    role: 'Student Coordinator & Entrepreneur',
    bio: [
      'Shina Kaur’s journey is proof that age is no barrier to impact. As a student coordinator at her university, she quickly earned a reputation for inspiring others with her leadership and vision.',
      'Her ability to break through obstacles has left an impression not only on her peers, but also on her family and friends. By helping them see the bigger vision, Shina has become a source of strength and motivation.',
      'Beyond her academic achievements, Shina is also the proud owner of multiple companies. Despite her success, she continues to lay the groundwork due to its fundamentals and importance.'
    ],
    image: '/shina-kaur.webp',
    quote: 'Barriers exist only until someone breaks them — and I live to break them.'
  },
  {
    name: 'EK',
    role: 'Financial Strategist',
    bio: [
      'I joined this industry because I saw how money is at the center of almost everything in people’s lives. If it’s handled right, it makes life easier. If it’s not, it causes stress, arguments, and limits people from living the way they want.',
      'What keeps me going is the growth that comes with it. I’ve pushed myself to improve in every area of life, and I get to help clients do the same—whether that’s building better money habits, saving more, or just having peace of mind.',
      'One experience that really showed me why this work matters was with a single mother. We set up a small savings and insurance plan for her, and when she passed unexpectedly, it gave her two young kids stability when they needed it most.'
    ],
    image: '/ek.webp',
    quote: 'Money isn’t just numbers on a page — it’s the difference between stress and peace, limits and freedom, hardship and legacy.'
  },
  {
    name: 'Raman Kaur',
    role: 'Community Wealth Educator',
    bio: [
      'Raman Kaur is a source of joy, dependability, and motherly love — not only to her own children, but to the countless young lives she touched during her years as a teacher.',
      'When Raman discovered the wealth strategies that had long been reserved for the few, she was ecstatic to finally bring these tools to her community. She has a gift for helping people see a light they may have never noticed before, guiding them toward the path they were always meant to walk.',
      'Her daily practices of meditation, prayer, and unwavering faith in a higher power keep her centered and strong. For Raman, true wealth is more than money — it’s a life filled with love, abundance, and service.'
    ],
    image: '/raman.webp',
    quote: 'True wealth is love in action — and I live it every day.'
  },
  {
    name: 'Eknoor',
    role: 'Community Wealth Educator',
    bio: [
      'Eknoor has a unique talent for bringing people together and helping them see a bigger vision for themselves. With the ability to paint a clear picture of what’s possible, he inspires others to believe in their own potential.',
      'From a young age, Eknoor achieved great feats that placed him at the forefront of his industry. Even with his early success, he has never stopped striving forward — not just for his own growth, but to lift others up to new levels.',
      'What sets Eknoor apart is the way he operates with loyalty, integrity, and confidence in every relationship and endeavor. For Eknoor, success is not just about reaching the top — it’s about bringing others with him.'
    ],
    image: '/eknoor.webp',
    quote: 'True leadership isn’t about titles — it’s about building people.'
  }
];

// TeamMember Component (moved from MeetTheTeam)
const TeamMember = ({ member, index }) => {
  return (
    <div
      className={`group flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center bg-white/15 p-6 lg:p-8  shadow-md  transition-all duration-500 border border-gray-100/50 max-w-6xl mx-auto  `}
    >
      {/* Image Container */}
      <div className={`flex justify-center mb-6 lg:mb-0 ${index % 2 === 0 ? 'lg:mr-8' : 'lg:ml-8'} flex-shrink-0`}>
        <div className="relative overflow-hidden ">
          <img
            src={member.image}
            alt={`${member.name} profile`}
            className="w-64 h-80 sm:w-72 sm:h-96 lg:w-80 lg:h-[28rem] xl:w-96 xl:h-[32rem] object-cover transition-transform duration-500 "
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      </div>
      
      {/* Content Container */}
      <div className="lg:flex-1 flex flex-col justify-center text-center lg:text-left">
        <h3 className="text-2xl lg:text-3xl xl:text-4xl font-semibold text-gray-800 mb-2  transition-colors duration-300">
          {member.name}
        </h3>
        <p className="text-sm lg:text-xl  md:text-sm  mb-6 uppercase tracking-wide">
          {member.role}
        </p>
        
        {/* Bio List */}
        <div className="text-sm lg:text-lg text-gray-600 leading-relaxed mb-6 space-y-4">
          {member.bio.map((item, idx) => (
            <div key={idx} className="flex items-center text-left">
              <span className="text-black mr-3 mt-1 text-lg font-bold">•</span>
              <span className="flex-1 text-sm">{item}</span>
            </div>
          ))}
        </div>
        
        {/* Quote */}
        <div className="relative">
          <div className="absolute -left-2 -top-2 text-4xl text-lime-500/30 font-serif">"</div>
          <p className="text-sm lg:text-base xl:text-lg text-gray-500 italic tracking-wide leading-relaxed pl-6 pr-6 py-2 bg-gray-50/50 rounded-lg border-l-4 border-lime-500">
            {member.quote}
          </p>
          <div className="absolute -right-2 -bottom-2 text-4xl text-lime-500/30 font-serif rotate-180">"</div>
        </div>
      </div>
    </div>
  );
};

const About = () => {
  return (
    <div className="bg-gray-50">
      <Helmet>
        <title>About Empower Life - Building Your Financial Legacy</title>
        <meta
          name="description"
          content="Learn about Empower Life's mission to empower families with financial strategies for wealth creation, asset protection, and legacy planning. Meet our dedicated team and discover our core values."
        />
        <meta name="keywords" content="financial planning, wealth creation, legacy planning, Empower Life, financial freedom, team, core values" />
        <meta name="author" content="Empower Life" />
        <meta property="og:title" content="About Empower Life - Building Your Financial Legacy" />
        <meta
          property="og:description"
          content="Discover how Empower Life helps families achieve financial freedom through tailored strategies and a committed team. Learn about our mission, values, and community."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.empowerlife.com/about" />
        <meta property="og:image" content="https://www.empowerlife.com/empower.webp" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Empower Life - Building Your Financial Legacy" />
        <meta
          name="twitter:description"
          content="Empower Life is dedicated to helping families build wealth and secure their future. Meet our team and explore our mission and values."
        />
        <meta name="twitter:image" content="https://www.empowerlife.com/empower.webp" />
      </Helmet>
      {/* Hero Section (unchanged) */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden py-10 sm:py-20 lg:py-24"
        style={{
          backgroundImage: "url('/bg-1.webp')",
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
              <Award className="w-5 h-5 text-[#84cc16]" />
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
              <a href="https://calendly.com/karmansingh/financialstratgey" target="_blank" rel="noopener noreferrer">
                <button
                  className="min-w-[240px] bg-accent-dark flex justify-center items-center text-white font-semibold py-5 px-10 rounded-full transition-all duration-300"
                  aria-label="Start Your Financial Journey"
                >
                  Start Your Journey
                  <ArrowRight className="w-5 h-5 translate-x-0 group-hover:translate-x-1 transition-transform" />
                </button>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Story Section (unchanged) */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="container px-4 sm:px-6 lg:px-8">
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
            viewport={{ once: true, amount: 0.2 }}
            className="grid gap-12 lg:grid-cols-2 items-start max-w-7xl mx-auto px-6 py-12"
          >
            <motion.div className="space-y-10">
              <div className="bg-gradient-to-br from-white to-gray-100 p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1">
                <h3 className="text-3xl font-bold text-gray-900 mb-6 tracking-tight">
                  The <span className='text-accent-dark'>Struggle</span>
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed font-medium">
                  There were times I felt like my life wasn’t going anywhere. I would work hard, make a little progress, only to watch it slip away. Deep down, I wanted to build something lasting — something that couldn’t be taken from me, something with my name on it. But I didn’t come from money. In fact, I was often underestimated, seen as “average.” I felt stuck, and I knew working for someone else would never give me the fulfillment I longed for.
                  <br /><br />
                  I realized we’re no longer in an era where success has to mean “working for the man” just to survive. If I was going to pour eight hours a day into work, I wanted it to be for myself — and for a greater purpose. The challenge? I had no financial cushion, no outside funding, and I refused to ask my family for help. My parents had already sacrificed so much to provide a decent life for me and my little sister. Even after all their hard work, they still didn’t have peace of mind — and that lit a fire in me.
                  <br /><br />
                  So I started building while still working. With nothing but determination, I pushed toward a future completely different from my present. Along the way, I met people who were living life on their own terms — creating freedom, impact, and ownership of their time. In that moment, I knew I was on the right path.
                </p>
              </div>
              <div className="bg-gradient-to-br from-white to-gray-100 p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1">
                <h3 className="text-3xl font-bold text-gray-900 mb-6 tracking-tight">
                  The <span className='text-accent-dark'>Mission</span>
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed font-medium">
                  My mission is simple: to equip families with the knowledge and strategies to build lasting wealth, protect what matters most, and create a legacy with confidence.
                  <br /><br />
                  I believe financial freedom is not just about numbers — it’s about clarity, control, and peace of mind.
                  <br /><br />
                  Through education and purposeful planning, I empower people to take ownership of their future and live with intention.
                  <br /><br />
                  Today, I help families build generational wealth with strategies rooted in clarity, control, and confidence. I help people understand their money, protect their loved ones, and live with intention. This isn’t just what I do — it’s who I’ve become. And it’s how I give back to the people I care about: my family, my community, and anyone who’s ready to take ownership of their future.
                </p>
              </div>
            </motion.div>
            <motion.div
              className="lg:sticky lg:top-24 flex justify-center"
            >
              <div className="relative w-full max-w-md">
                <img
                  src="./founder.webp"
                  alt="founder image"
                  className="w-full h-auto aspect-[3/4] rounded-2xl shadow-2xl object-cover relative z-10 border-4 border-white"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Core Values Section (unchanged) */}
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
              The principles that guide everything we do — empowering you to achieve financial freedom with clarity and confidence.
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
                id: 'Confidence',
                title: 'Confidence',
                description: 'We empower you to make informed financial decisions with clarity and peace of mind.',
                icon: <Sparkles className="w-10 h-10 text-white" />,
                gradient: 'from-blue-400 via-blue-500 to-blue-600',
              },
              {
                id: 'Integrity',
                title: 'Integrity',
                description: 'Every recommendation is built on honesty, transparency, and your best interest.',
                icon: <Target className="w-10 h-10 text-white" />,
                gradient: 'from-emerald-400 via-green-500 to-teal-600',
              },
              {
                id: 'Reliability',
                title: 'Reliability',
                description: 'We deliver consistent guidance you can trust — today, tomorrow, and for generations.',
                icon: <Zap className="w-10 h-10 text-white" />,
                gradient: 'from-rose-400 via-red-500 to-orange-500',
              },
              {
                id: 'Legacy',
                title: 'Legacy',
                description: 'We help you create lasting impact for your family and community through purposeful wealth planning.',
                icon: <Award className="w-10 h-10 text-white" />,
                gradient: 'from-teal-400 via-cyan-500 to-blue-500',
              },
            ].map((value) => (
              <motion.div
                key={value.id}
                variants={fadeInUp}
                className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 overflow-hidden border border-gray-200/50 dark:border-gray-700/50 hover:-translate-y-2 hover:scale-[1.03] cursor-pointer"
                style={{
                  background: 'linear-gradient(180deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.85) 100%)',
                }}
              >
                <div
                  className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 hover:scale-110 transition-transform duration-300 shadow-md bg-gradient-to-br ${value.gradient}`}
                >
                  {value.icon}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
                  {value.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                  {value.description}
                </p>
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-lime-200/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Empower Life Section (unchanged) */}
      <section className="py-16 sm:py-24 lg:py-32 bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_90%,_rgba(132,204,22,0.15)_0%,_transparent_60%)] opacity-60" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_10%,_rgba(107,114,128,0.15)_0%,_transparent_60%)] opacity-60" />
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute top-12 left-12 animate-pulse-slow">
            <Shield className="w-10 h-10 text-lime-600 opacity-25" />
          </div>
          <div className="absolute bottom-12 right-12 animate-pulse-slow animation-delay-3000">
            <TrendingUp className="w-10 h-10 text-green-700 opacity-25" />
          </div>
        </div>
        <div className="container relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              About <br />
              <img
                src="/empower.webp"
                alt="Empower Life"
                className="inline mt-2 max-w-full h-44 sm:max-w-[200px] md:max-w-[350px]"
              />
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Empowering individuals, families, and professionals to achieve financial freedom and build lasting legacies with clarity and confidence.
            </p>
          </motion.div>
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="grid gap-8 lg:grid-cols-2 mb-16"
          >
            <motion.div
              variants={fadeInUp}
              className="group bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-200/30 flex flex-col justify-between relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-lime-100/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="mb-6 flex justify-center">
                <Shield className="w-12 h-12 text-lime-600" />
              </div>
              <div className="relative z-10">
                <h3 className="text-3xl font-extrabold text-gray-900 mb-4 text-center">
                  Our Mission
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed text-center">
                  At Empower Life, we redefine what it means to be financially empowered. Our mission is to guide people at every stage of life — from building their first plan to securing their retirement — with tailored strategies in wealth growth, asset protection, and legacy planning. With expert guidance and proven systems, we help ensure a future of abundance, stability, and purpose.
                </p>
              </div>
            </motion.div>
            <motion.div
              variants={fadeInUp}
              className="group bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-200/30 flex flex-col justify-between relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-100/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="mb-6 flex justify-center">
                <Users className="w-12 h-12 text-green-600" />
              </div>
              <div className="relative z-10">
                <h3 className="text-3xl font-extrabold text-gray-900 mb-4 text-center">
                  Our Community
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed text-center">
                  Empower Life is more than a company — it’s a community of ambitious individuals committed to financial success and meaningful impact. We provide world-class mentorship, education, and growth opportunities for both clients and team members. Through collaboration and an education-first approach, we empower people to achieve independence, create legacies, and thrive together.
                </p>
              </div>
            </motion.div>
          </motion.div>
          <motion.div variants={fadeInUp} className="mb-16">
            <h3 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">What We Stand For</h3>
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              className="grid gap-6 sm:grid-cols-2 md:grid-cols-3"
            >
              {[
                {
                  title: 'Empowerment',
                  description: 'We equip clients with the tools to take control of their financial future — and provide team members the opportunity to build thriving, purpose-driven businesses.',
                  icon: <Users className="w-12 h-12 text-white" />,
                  gradient: 'from-blue-600 to-blue-800',
                },
                {
                  title: 'Integrity',
                  description: 'Every solution we provide is transparent, honest, and fully aligned with your best interests. Trust is the foundation of everything we do.',
                  icon: <BookOpen className="w-12 h-12 text-white" />,
                  gradient: 'from-emerald-600 to-teal-800',
                },
                {
                  title: 'Legacy',
                  description: 'We help families and professionals create lasting wealth and impact — building a future that endures for generations.',
                  icon: <Heart className="w-12 h-12 text-white" />,
                  gradient: 'from-teal-600 to-blue-800',
                },
              ].map((item) => (
                <motion.div
                  key={item.title}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05, y: -8 }}
                  className="group bg-white p-6 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 border border-gray-200/30 overflow-hidden flex flex-col items-center text-center"
                >
                  <div
                    className={`w-16 h-16 rounded-xl flex items-center justify-center bg-gradient-to-br ${item.gradient} shadow-lg group-hover:scale-110 transition-transform duration-500 mb-4`}
                  >
                    {item.icon}
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h4>
                  <p className="text-base text-gray-600">{item.description}</p>
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-lime-100/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          <motion.div variants={fadeInUp} className="text-center">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="group inline-flex"
            >
              <a
                href="https://calendly.com/karmansingh/financialstratgey"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button
                  size="lg"
                  className="min-w-[240px] bg-accent-dark flex justify-center items-center text-white font-semibold py-5 px-10 rounded-full transition-all duration-300"
                  aria-label="Join Empower Life"
                >
                  Join Empower Life
                  <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform duration-300" />
                </button>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Meet the Team Section  */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,_rgba(132,204,22,0.15)_0%,_transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,_rgba(107,114,128,0.1)_0%,_transparent_70%)]" />
        <div className="container px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12 lg:mb-20">
          <div className="inline-block mb-4">
            <span className="text-lime-600 font-semibold text-lg uppercase tracking-wide">Our Team</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Meet the Team Behind
            <span className="block pb-5 bg-gradient-to-r from-lime-500 to-green-600 bg-clip-text text-transparent mt-2">
              Empower Life
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our team of dedicated professionals from finance, strategy, and client service is united by a shared commitment to helping families secure their financial futures with clarity and confidence.
          </p>
        </div>
          <div className="space-y-12 lg:space-y-16 xl:space-y-20">
            {teamMembers.map((member, index) => (
              <div key={member.name} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
                <TeamMember member={member} index={index} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section (unchanged) */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-800 to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,_rgba(132,204,22,0.2)_0%,_transparent_50%)] opacity-15" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,_rgba(107,114,128,0.2)_0%,_transparent_50%)] opacity-15" />
        <div className="container relative z-10 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <motion.div {...fadeInUp} className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
              Ready to Build Your
              <span className="block pb-4 bg-gradient-to-r from-lime-500 to-green-600 bg-clip-text text-transparent mt-2">
                Financial Legacy?
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto">
              Take the first step toward clarity, control, and confidence. Schedule your free consultation today and start your journey.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group"
              >
                <a
                  href="https://calendly.com/karmansingh/financialstratgey"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button
                    className="min-w-[240px] bg-accent-dark flex justify-center items-center text-white font-semibold py-5 px-10 rounded-full transition-all duration-300"
                    aria-label="Schedule a Free Financial Consultation"
                  >
                    Schedule Consultation
                    <ArrowRight className="w-5 h-5 ml-2 flex group-hover:translate-x-1 transition-transform" />
                  </button>
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Styles (updated to include MeetTheTeam animations) */}
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

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
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

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
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

          .lg\\:grid-cols-3 {
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

          .lg\\:flex-row, .lg\\:flex-row-reverse {
            flex-direction: column;
          }

          .lg\\:mr-8, .lg\\:ml-8 {
            margin-right: 0;
            margin-left: 0;
          }

          .lg\\:text-left {
            text-align: center;
          }
        }
      `}</style>
    </div>
  );
};

export default About;