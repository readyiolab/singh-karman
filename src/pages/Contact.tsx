import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, MapPin, Calendar, MessageCircle, Instagram, Linkedin } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    inquiryType: '',
    message: ''
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ firstName: '', lastName: '', email: '', phone: '', inquiryType: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with Parallax */}
      <section
        className="relative min-h-[60vh] flex items-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1563906267088-b029e7101114?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fGNvbnRhY3R8ZW58MHx8MHx8fDA%3D')"
        }}
      >
        <div className="absolute inset-0 bg-hero-gradient parallax-bg"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <h1 className="font-heading font-bold text-4xl sm:text-5xl text-primary-foreground mb-6">
            Let's Start Your <span className="text-accent">Wealth Journey</span>
          </h1>
          <p className="font-body text-lg sm:text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            I'm always happy to connect — whether you have a question, want clarity, or just want to explore your options, reach out.
          </p>
        </div>
        <style jsx>{`
          .parallax-bg {
            background-attachment: fixed;
            background-position: center;
            background-size: cover;
            transform: translateY(0);
            transition: transform 0.1s ease-out;
          }
          @media (max-width: 768px) {
            .parallax-bg {
              background-attachment: scroll;
            }
          }
        `}</style>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card className="border-border shadow-lg">
                <CardHeader>
                  <CardTitle className="font-heading text-2xl text-foreground">Send Me a Message</CardTitle>
                  <CardDescription className="font-body text-muted-foreground">
                    Fill out the form below and I'll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName" className="font-body font-medium">First Name</Label>
                        <Input
                          id="firstName"
                          value={formData.firstName}
                          onChange={(e) => handleInputChange('firstName', e.target.value)}
                          placeholder="Your first name"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName" className="font-body font-medium">Last Name</Label>
                        <Input
                          id="lastName"
                          value={formData.lastName}
                          onChange={(e) => handleInputChange('lastName', e.target.value)}
                          placeholder="Your last name"
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="font-body font-medium">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="font-body font-medium">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="(555) 123-4567"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="inquiryType" className="font-body font-medium">What are you reaching out about?</Label>
                      <Select value={formData.inquiryType} onValueChange={(value) => handleInputChange('inquiryType', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select an option" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="coaching">Coaching</SelectItem>
                          <SelectItem value="workshop">Workshop</SelectItem>
                          <SelectItem value="general">General Inquiry</SelectItem>
                          <SelectItem value="testimonial">Submit a Testimonial</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message" className="font-body font-medium">Message</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        placeholder="Tell me about your financial goals, questions, or how I can help..."
                        rows={5}
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full btn-hero text-lg py-3">
                      <MessageCircle className="mr-2 w-5 h-5" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info & Calendar */}
            <div className="space-y-8">
              {/* Direct Contact Info */}
              <Card className="border-border shadow-lg">
                <CardHeader>
                  <CardTitle className="font-heading text-2xl text-foreground">Direct Contact</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-heading font-semibold text-lg text-foreground mb-1">Email</h4>
                    <a href="mailto:contact@empowerlife.com" className="font-body text-accent hover:text-foreground">
                      contact@empowerlife.com
                    </a>
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-lg text-foreground mb-1">Phone</h4>
                    <a href="tel:+12068010330" className="font-body text-accent hover:text-foreground">
                      (206) 801-0330
                    </a>
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-lg text-foreground mb-1">WhatsApp</h4>
                    <a
                      href="https://wa.me/12068010330"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-body text-accent hover:text-foreground"
                    >
                      Tap to Chat
                    </a>
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-lg text-foreground mb-1">Location</h4>
                    <p className="font-body text-muted-foreground">Serving clients across the USA</p>
                  </div>
                </CardContent>
              </Card>

             
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-primary-gradient text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-4xl sm:text-5xl mb-6">
            Your Wealth Journey Starts Here
          </h2>
          <p className="font-body text-xl mb-8 opacity-90 leading-relaxed">
            Every financial transformation begins with a single conversation. Let's make it count.
          </p>
          <a
            href="https://calendly.com/simran-shinakaur/15"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              id="calendly-booking"
              className="btn-hero text-lg py-3 w-full sm:w-auto"
            >
              <Calendar className="mr-2 w-5 h-5" />
              Book Free Consultation
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Contact;