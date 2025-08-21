import { Mail, Phone, MapPin, Instagram, Linkedin, Facebook } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
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

        {/* Social Links & CTA */}
        <div className="border-t border-primary-foreground/20 pt-8 mb-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-left">
            <div>
              <h4 className="font-heading font-semibold text-lg mb-2">
                Ready to Build Your Legacy?
              </h4>
              <p>Schedule your free consultation today</p>
            </div>
            <div className="flex flex-wrap justify-start md:justify-end gap-4">
              {/* Social Icons */}
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a key={social.label} href={social.href} aria-label={social.label} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
              {/* CTA Buttons */}
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