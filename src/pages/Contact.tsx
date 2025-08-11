
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin, Calendar, MessageCircle } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
   
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-hero-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading font-bold text-4xl lg:text-5xl text-primary-foreground mb-6">
            Let's Start Your <span className="text-accent">Wealth Journey</span>
          </h1>
          <p className="font-body text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            I'm always happy to connect — whether you have a question, want clarity, or just want to explore your options, reach out.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
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
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="font-body font-medium">First Name</Label>
                      <Input id="firstName" placeholder="Your first name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="font-body font-medium">Last Name</Label>
                      <Input id="lastName" placeholder="Your last name" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email" className="font-body font-medium">Email</Label>
                    <Input id="email" type="email" placeholder="your.email@example.com" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="font-body font-medium">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="(555) 123-4567" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject" className="font-body font-medium">Subject</Label>
                    <Input id="subject" placeholder="What's this about?" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message" className="font-body font-medium">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell me about your financial goals, questions, or how I can help..."
                      rows={5}
                    />
                  </div>
                  
                  <Button className="w-full btn-hero text-lg py-3">
                    <MessageCircle className="mr-2 w-5 h-5" />
                    Send Message
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="font-heading font-bold text-3xl text-foreground mb-6">
                  Get In Touch
                </h2>
                <p className="font-body text-lg text-muted-foreground mb-8">
                  Ready to take control of your financial future? I'm here to help you every step of the way.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-gradient p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg text-foreground mb-1">Phone</h3>
                    <p className="font-body text-muted-foreground">(206) 801-0330</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary-gradient p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg text-foreground mb-1">Email</h3>
                    <p className="font-body text-muted-foreground">contact@empowerlife.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary-gradient p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg text-foreground mb-1">Location</h3>
                    <p className="font-body text-muted-foreground">Serving clients across the USA</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary-gradient p-3 rounded-lg">
                    <Calendar className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg text-foreground mb-1">Schedule a Call</h3>
                    <p className="font-body text-muted-foreground mb-3">
                      Book a free consultation to discuss your financial goals
                    </p>
                    <Button className="btn-accent">
                      Book Free Consultation
                    </Button>
                  </div>
                </div>
              </div>

              {/* Office Hours */}
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="font-heading text-xl text-foreground">Office Hours</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-body text-muted-foreground">Monday - Friday</span>
                    <span className="font-body text-foreground font-medium">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-body text-muted-foreground">Saturday</span>
                    <span className="font-body text-foreground font-medium">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-body text-muted-foreground">Sunday</span>
                    <span className="font-body text-foreground font-medium">By Appointment</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

     
    </div>
  );
};

export default Contact;