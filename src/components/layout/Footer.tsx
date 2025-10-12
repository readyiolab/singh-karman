
import { Mail, Phone, MapPin, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Footer = () => {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [message, setMessage] = useState({ text: "", type: "" });

  const footerLinks = {
    services: [
      { name: "Life Insurance Planning", href: "/services#life-insurance" },
      { name: "Tax-Free Retirement", href: "/services#retirement" },
      { name: "Legacy Planning", href: "/services#legacy" },
      { name: "Financial Education", href: "/services#education" }
    ],
    resources: [
      { name: "Wealth Calculator", href: "/calculator" },
      { name: "Free PDF Guides", href: "#" }
    ],
    company: [
      { name: "About Karman", href: "/about" },
      { name: "Our Mission", href: "/about#mission" },
      { name: "Success Stories", href: "/testimonials" },
      { name: "Join Our Team", href: "/participate" }
    ]
  };

  const socialLinks = [
    { icon: Instagram, href: "https://instagram.com/singhkarman", label: "Instagram" },
    { icon: Linkedin, href: "https://linkedin.com/in/karmansinghceo", label: "LinkedIn" }
  ];

  const handleNewsletterSubscribe = async (email) => {
    if (!email) {
      setMessage({ text: "Please enter a valid email address.", type: "error" });
      return;
    }

    try {
      const response = await fetch('http://localhost:3000/api/newsletter/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email })
      });

      const data = await response.json();

      if (response.ok) {
        setMessage({
          text: data.message || 'Please check your email to confirm your subscription.',
          type: 'success'
        });
        setNewsletterEmail("");
        setTimeout(() => setMessage({ text: "", type: "" }), 5000); // Clear message after 5 seconds
      } else {
        setMessage({
          text: data.message === "Subscription request is pending confirmation"
            ? "A confirmation email has been resent. Please check your email."
            : data.message || 'Subscription failed. Please try again.',
          type: 'error'
        });
      }
    } catch (error) {
      console.error('Subscription error:', error);
      setMessage({
        text: 'An error occurred. Please try again later.',
        type: 'error'
      });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">

        {/* Main Footer Content */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 mb-12">

          {/* Company Info */}
          <div className="text-left">
            <div className="flex justify-start items-center space-x-3 mb-6">
              <div className="h-10 w-auto">
                <img src="/footer-logo.png" alt="Company Logo" className="h-16 w-auto" />
              </div>
            </div>
            <p className="font-body text-primary-foreground/80 mb-6 leading-relaxed">
              Building generational wealth through purpose-driven financial strategies. 
              Empowering families to achieve clarity, control, and confidence in their financial future.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex justify-start items-center space-x-3">
                <Phone className="w-5 h-5 text-accent" />
                <a href="tel:206-801-0330" className="hover:text-accent transition-colors">
                  (206) 801-0330
                </a>
              </div>
              <div className="flex justify-start items-center space-x-3">
                <Mail className="w-5 h-5 text-accent" />
                <a href="mailto:admin@singhkarman.com" className="hover:text-accent transition-colors">
                  admin@singhkarman.com
                </a>
              </div>
              <div className="flex justify-start items-center space-x-3">
                <MapPin className="w-5 h-5 text-accent" />
                <span>USA</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="text-left">
            <h3 className="font-heading font-semibold text-lg mb-6">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="hover:text-accent transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="text-left">
            <h3 className="font-heading font-semibold text-lg mb-6">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="hover:text-accent transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="text-left">
            <h3 className="font-heading font-semibold text-lg mb-6">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="hover:text-accent transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Links, Newsletter & CTA */}
        <div className="border-t border-primary-foreground/20 pt-8 mb-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-left">
            <div>
              <h4 className="font-heading font-semibold text-lg mb-2">
                Ready to Build Your Legacy?
              </h4>
              <p>Schedule your free consultation today</p>
            </div>
            <div className="flex flex-col sm:flex-row justify-start md:justify-end gap-4">
              {/* Newsletter Signup */}
              <div className="flex flex-col gap-2">
                <h4 className="font-heading font-semibold text-lg">Stay Updated</h4>
                <p className="text-sm">Subscribe to our newsletter for financial tips and updates</p>
                <div className="flex gap-2">
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="bg-primary-foreground/10 text-primary-foreground px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent flex-1"
                  />
                  <button 
                    onClick={() => handleNewsletterSubscribe(newsletterEmail)}
                    className="bg-accent px-4 py-2 rounded-lg font-medium hover:bg-accent-dark transition-colors"
                  >
                    Subscribe
                  </button>
                </div>
                {message.text && (
                  <p className={`text-sm mt-2 ${message.type === 'success' ? 'text-green-400' : 'text-red-400'}`}>
                    {message.text}
                  </p>
                )}
              </div>
              {/* Social Icons & CTA Buttons */}
              <div className="flex flex-col gap-4">
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <a key={social.label} href={social.href} aria-label={social.label} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="https://calendly.com/singhkarman/businessoverview" target="_blank" rel="noopener noreferrer" className="bg-accent px-6 py-3 rounded-lg font-medium hover:bg-accent-dark transition-colors text-center">
                    Business Overview
                  </a>
                  <a href="https://calendly.com/singhkarman/financialstrategy" target="_blank" rel="noopener noreferrer" className="bg-accent px-6 py-3 rounded-lg font-medium hover:bg-accent-dark transition-colors text-center">
                    Financial Strategy
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-8 text-left">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4 text-sm">
              <p>&copy; 2024 Empower Life. All rights reserved.</p>
              <div className="flex gap-4">
                <Link to="/privacy" className="hover:text-accent transition-colors">
                  Privacy Policy
                </Link>
                <Link to="/terms" className="hover:text-accent transition-colors">
                  Terms of Service
                </Link>
                <Link to="/disclaimer" className="hover:text-accent transition-colors">
                  Financial Disclaimer
                </Link>
              </div>
            </div>
            <p className="text-sm">Licensed Financial Professional </p>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
