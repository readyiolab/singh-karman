import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Star, Zap, Phone, Mail, MapPin, Calendar, MessageCircle, Instagram, Linkedin, Target, ChevronDown } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
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

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '', // Changed to single name field
    email: '',
    phone: '',
    inquiryType: '',
    message: '',
  });
 const [formStatus, setFormStatus] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus(null);
    setErrorMessage('');

    // Data matches backend schema exactly
    const submitData = {
      name: formData.name,
      email: formData.email,
      inquiry_type: formData.inquiryType,
      phone: formData.phone,
      message: formData.message,
    };

    try {
      const response = await fetch('https://singhkarman.com/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(submitData),
      });

      const data = await response.json();

      if (response.ok) {
        setFormStatus('success');
        setFormData({ name: '', email: '', phone: '', inquiryType: '', message: '' });
      } else {
        setFormStatus('error');
        setErrorMessage(data.message || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setFormStatus('error');
      setErrorMessage('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: 'How can I join the Empower Life team and what benefits will I get?',
      answer: 'Joining our team starts with a simple step — schedule a call using the “Book a Call” button on this page. We’ll guide you through the onboarding process and provide all the tools you need to succeed. Benefits include:\n- Flexible working hours & location freedom\n- Unlimited earning potential\n- World-class training & mentorship\n- The chance to help families secure their financial future',
    },
    {
      question: 'What types of insurance solutions do you provide?',
      answer: 'We offer a wide range of insurance products, including life insurance, retirement protection plans, and income replacement strategies. Every plan is tailored to your unique needs, ensuring you and your loved ones are covered for life’s unexpected moments.',
    },
    {
      question: 'Can you help me plan for my retirement?',
      answer: 'Yes! We specialize in customized retirement strategies that aim to protect your savings, reduce tax burdens, and ensure a steady income throughout retirement. Whether you’re just starting or nearing retirement, we have solutions to fit your goals.',
    },
    {
      question: 'Do you offer financial strategies for families and business owners?',
      answer: 'Absolutely. We work with individuals, families, and small business owners to create financial plans that safeguard assets, manage risks, and build long-term wealth. From estate planning to succession strategies, we’ve got you covered.',
    },
    {
      question: 'How do I know which service is right for me?',
      answer: 'We start with a free consultation to understand your goals, needs, and financial situation. Based on that, we recommend the best solutions — whether it’s insurance, retirement planning, or wealth-building strategies — so you can make an informed decision with confidence.',
    },
  ];

  return (
    <div className="bg-gray-50">
      <Helmet>
        <title>Contact Us - Karman Singh Financial Services</title>
        <meta
          name="description"
          content="Get in touch with Karman Singh Financial Services to start your wealth journey. Schedule a consultation, send a message, or connect via email, phone, or social media."
        />
        <meta
          name="keywords"
          content="contact, financial consultation, wealth planning, Karman Singh, financial services, inquiry"
        />
        <meta name="author" content="Karman Singh Financial Services" />
        <meta property="og:title" content="Contact Us - Karman Singh Financial Services" />
        <meta
          property="og:description"
          content="Reach out to Karman Singh Financial Services to discuss your financial goals. Book a consultation or contact us via email, phone, or social media."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.karmansingh.com/contact" />
        <meta property="og:image" content="https://www.karmansingh.com/contact-hero.webp" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Us - Karman Singh Financial Services" />
        <meta
          name="twitter:description"
          content="Start your financial transformation with Karman Singh Financial Services. Contact us today for a free consultation or to learn more about our services."
        />
        <meta name="twitter:image" content="https://www.karmansingh.com/contact-hero.webp" />
      </Helmet>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-10 sm:py-20 lg:py-24">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/uploads/141103282695035fa1380/95cdfeef?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGNvbnRhY3R8ZW58MHx8MHx8fDA%3D"
            alt="Hero background"
            className="w leakage-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-primary/60" />
        </div>
        <div className="absolute inset-0 opacity-20">
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
              <MessageCircle className="w-5 h-5 text-[#84cc16] fill-current" />
              <span className="text-sm font-medium tracking-wide">Let's Connect</span>
            </motion.div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
              Start Your
              <span className="block bg-gradient-to-r from-lime-500 to-green-600 bg-clip-text text-transparent mt-2 pb-3">
                Wealth Journey
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white mb-12 max-w-3xl mx-auto leading-relaxed font-light">
              Whether you have a question, need clarity, or want to explore your options, I'm here to help you take the first step.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex group"
            >
             <a href=" https://calendly.com/karmansingh/financialstratgey " target="_blank" rel="noopener noreferrer">
               <button
               
                
                                  className="min-w-[240px]  bg-accent-dark flex justify-center items-center  text-white font-semibold py-5 px-10 rounded-full transition-all duration-300"
                aria-label="Contact Us Now"
              >
                Get in Touch
                <ArrowRight className="w-5 h-5 translate-x-0 group-hover:translate-x-1 transition-transform" />
              </button>
             </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="container px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Reach Out
              <span className="block bg-gradient-to-r from-lime-500 to-green-600 bg-clip-text text-transparent mt-2">
                Today
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Fill out the form or use the direct contact options to start a conversation about your financial goals.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="grid gap-12 lg:grid-cols-2 items-start"
          >
            {/* Contact Form */}
            <motion.div variants={fadeInUp} className="bg-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-2xl text-center font-extrabold text-black mb-6">
                Send Me a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-base font-medium text-gray-900">Name</label>
                  <input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    placeholder="Your full name"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-lime-500 transition-all duration-300"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-base font-medium text-gray-900">Email</label>
                  <input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="your.email@example.com"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-lime-500 transition-all duration-300"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-base font-medium text-gray-900">Phone Number</label>
                  <input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    placeholder="(555) 123-4567"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-lime-500 transition-all duration-300"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="inquiryType" className="text-base font-medium text-gray-900">What are you reaching out about?</label>
                  <select
                    id="inquiryType"
                    value={formData.inquiryType}
                    onChange={(e) => handleInputChange('inquiryType', e.target.value)}
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-lime-500 transition-all duration-300"
                    required
                  >
                    <option value="" disabled>Select an option</option>
                    <option value="coaching">Coaching</option>
                    <option value="workshop">Workshop</option>
                    <option value="general">General Inquiry</option>
                    <option value="testimonial">Submit a Testimonial</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-base font-medium text-gray-900">Message</label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    placeholder="Tell me about your financial goals, questions, or how I can help..."
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-lime-500 transition-all duration-300"
                    rows={5}
                    required
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full rounded-full bg-gradient-to-r from-lime-500 to-green-600 text-white px-8 py-4 text-lg font-semibold transition-all duration-300 hover:from-lime-600 hover:to-green-700 shadow-lg hover:shadow-xl flex items-center justify-center ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
                {formStatus === 'success' && (
                  <p className="text-green-600 text-center font-semibold">Message sent successfully! We'll get back to you soon.</p>
                )}
                {formStatus === 'error' && (
                  <p className="text-red-600 text-center font-semibold">{errorMessage}</p>
                )}
              </form>
            </motion.div>

            {/* Contact Info (unchanged) */}
            <motion.div variants={fadeInUp} className="bg-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-2xl text-center font-extrabold text-black mb-6">
                Direct Contact
              </h3>
              <div className="space-y-6">
                {[
                  {
                    icon: <Mail className="w-6 h-6 text-lime-500 flex-shrink-0" />,
                    content: (
                      <a
                        href="mailto:admin@singhkarman.com"
                        className="text-gray-700 hover:text-lime-500 transition-colors duration-300"
                      >
                        admin@singhkarman.com
                      </a>
                    ),
                  },
                  {
                    icon: <Phone className="w-6 h-6 text-lime-500 flex-shrink-0" />,
                    content: (
                      <a
                        href="tel:+12068010330"
                        className="text-gray-700 hover:text-lime-500 transition-colors duration-300"
                      >
                        (206) 801-0330
                      </a>
                    ),
                  },
                  {
                    icon: <MessageCircle className="w-6 h-6 text-lime-500 flex-shrink-0" />,
                    content: (
                      <a
                        href="https://wa.me/12068010330"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-700 hover:text-lime-500 transition-colors duration-300"
                      >
                        WhatsApp: Tap to Chat
                      </a>
                    ),
                  },
                  {
                    icon: <MapPin className="w-6 h-6 text-lime-500 flex-shrink-0" />,
                    content: <p className="text-gray-700">Serving clients across the USA</p>,
                  },
                  {
                    icon: <Instagram className="w-6 h-6 text-lime-500 flex-shrink-0" />,
                    content: (
                      <a
                        href="https://instagram.com/singhkarman"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-700 hover:text-lime-500 transition-colors duration-300"
                      >
                        Mrkarmansingh
                      </a>
                    ),
                  },
                  {
                    icon: <Linkedin className="w-6 h-6 text-lime-500 flex-shrink-0" />,
                    content: (
                      <a
                        href="https://linkedin.com/in/karmansinghceo"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-700 hover:text-lime-500 transition-colors duration-300"
                      >
                        karmansinghceo
                      </a>
                    ),
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-4 p-4 rounded-lg bg-white/50 hover:bg-white/80 transition-all duration-300 shadow-sm hover:shadow-md"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    {item.icon}
                    <div className="text-base font-medium">{item.content}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-indigo-50 to-blue-100">
        <div className="container px-4 sm:px-
6 lg:px-8 max-w-6xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Why Connect
              <span className="block bg-gradient-to-r from-lime-500 to-green-600 bg-clip-text text-transparent mt-2">
                With Us
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our commitment is rooted in the values that guide everything we do. When you reach out, you’re not just meeting an advisor — you’re partnering with someone who puts your future first.
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
                description: 'We empower you to make informed decisions with clarity and peace of mind.',
                icon: <Sparkles className="w-10 h-10 text-white" />,
                gradient: 'from-blue-400 via-blue-500 to-blue-600',
              },
              {
                id: 'Integrity',
                title: 'Integrity',
                description: 'Every recommendation is built on honesty, transparency, and your best interest.',
                icon: <Zap className="w-10 h-10 text-white" />,
                gradient: 'from-emerald-400 via-green-500 to-teal-600',
              },
              {
                id: 'Reliability',
                title: 'Reliability',
                description

: 'We deliver consistent guidance you can trust — today, tomorrow, and for generations.',
                icon: <Target className="w-10 h-10 text-white" />,
                gradient: 'from-rose-400 via-red-500 to-orange-500',
              },
              {
                id: 'Legacy',
                title: 'Legacy',
                description: 'We help you create lasting impact for your family and community through purposeful wealth planning.',
                icon: <Calendar className="w-10 h-10 text-white" />,
                gradient: 'from-teal-400 via-cyan-500 to-blue-500',
              },
            ].map((value) => (
              <motion.div
                key={value.id}
                variants={fadeInUp}
                className="group relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 overflow-hidden border border-gray-200/50 hover:-translate-y-2 hover:scale-[1.03] cursor-pointer"
                style={{
                  background: 'linear-gradient(180deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.85) 100%)',
                }}
              >
                <div
                  className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 hover:scale-110 transition-transform duration-300 shadow-md bg-gradient-to-br ${value.gradient}`}
                >
                  {value.icon}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 leading-tight">
                  {value.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {value.description}
                </p>
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-lime-200/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="container px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Frequently Asked
              <span className="block bg-gradient-to-r from-lime-500 to-green-600 bg-clip-text text-transparent mt-2">
                Questions
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Got questions? We've got answers. Explore our FAQs or reach out for personalized guidance.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="space-y-4"
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-gray-50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex justify-between items-center p-6 text-left"
                  aria-expanded={openFaq === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    className={`w-6 h-6 text-lime-500 transform transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`}
                  />
                </button>
                <div
                  id={`faq-answer-${index}`}
                  className={`${openFaq === index ? 'block' : 'hidden'} px-6 pb-6 text-gray-600 text-base sm:text-lg leading-relaxed`}
                >
                  {faq.answer.split('\n').map((line, i) => (
                    <p key={i} className={line.startsWith('-') ? 'ml-4' : ''}>
                      {line.startsWith('-') ? `• ${line.slice(2)}` : line}
                    </p>
                  ))}
                </div>
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
              Begin Your
              <span className="block bg-gradient-to-r from-lime-500 to-green-600 bg-clip-text text-transparent mt-2">
                Financial Transformation
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto">
              Every wealth journey starts with a single conversation. Schedule your free consultation today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="group">
                <a
                  href="https://calendly.com/singhkarman/businessoverview"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button
                    
                     className="min-w-[240px] justify-center bg-accent-dark text-white rounded-full px-8 py-4 text-lg font-semibold shadow-lg hover:bg-accent-darker transition-colors flex items-center group"
                    aria-label="Book a Business Overview Consultation"
                  >
                    Business Overview
                    <Calendar className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </a>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="group">
                <a
                  href="https://calendly.com/singhkarman/financialstrategy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button
                    
                     className="min-w-[240px] justify-center bg-accent-dark text-white rounded-full px-8 py-4 text-lg font-semibold shadow-lg hover:bg-accent-darker transition-colors flex items-center group"
                    aria-label="Book a Financial Strategy Consultation"
                  >
                    Financial Strategy
                    <Calendar className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </a>
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

export default Contact;