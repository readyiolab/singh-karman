import { Button } from "@/components/ui/button";
import { Calendar, Phone, MessageCircle, ArrowRight, Clock, CheckCircle } from "lucide-react";

const CallToActionSection = () => {
  const benefits = [
    "Completely free consultation",
    "No pressure, just clarity",
    "Custom wealth strategy overview",
    "Clear next steps for your goals"
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Main CTA */}
          <div className="fade-in-left">
            <div className="inline-flex items-center space-x-2 bg-accent/10 text-accent px-4 py-2 rounded-full mb-6">
              <Calendar className="w-4 h-4" />
              <span className="font-body font-medium text-sm">Ready to Start?</span>
            </div>
            
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-foreground mb-6">
              Ready to Take Control of Your <span className="text-wealth-gradient">Financial Future?</span>
            </h2>
            
            <p className="font-body text-xl text-muted-foreground mb-8">
              Let's build a plan that works for your life, your goals, and your legacy. 
              Your future self will thank you for taking this step today.
            </p>

            {/* Benefits List */}
            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={benefit} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="font-body text-muted-foreground">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="space-y-4">
              <Button size="lg" className="btn-hero w-full sm:w-auto text-lg px-8 py-4">
                <Calendar className="mr-2 w-5 h-5" />
                Book a Free Call
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              
              <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span>30-minute session</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4" />
                  <span>No obligation</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Options */}
          <div className="fade-in-right">
            <div className="bg-primary-gradient rounded-2xl p-8 lg:p-12 text-center">
              <h3 className="font-heading font-bold text-2xl text-primary-foreground mb-8">
                Multiple Ways to Connect
              </h3>
              
              <div className="space-y-6">
                {/* Phone */}
                <div className="bg-primary-foreground/10 rounded-xl p-6 border border-primary-foreground/20">
                  <Phone className="w-8 h-8 text-accent mx-auto mb-4" />
                  <h4 className="font-heading font-semibold text-lg text-primary-foreground mb-2">
                    Call Directly
                  </h4>
                  <p className="font-body text-primary-foreground/80 mb-4">
                    Speak with Karman directly about your financial goals
                  </p>
                  <a 
                    href="tel:206-801-0330" 
                    className="font-heading font-semibold text-accent hover:text-accent-light transition-colors"
                  >
                    (206) 801-0330
                  </a>
                </div>

                {/* Online Booking */}
                <div className="bg-primary-foreground/10 rounded-xl p-6 border border-primary-foreground/20">
                  <Calendar className="w-8 h-8 text-accent mx-auto mb-4" />
                  <h4 className="font-heading font-semibold text-lg text-primary-foreground mb-2">
                    Schedule Online
                  </h4>
                  <p className="font-body text-primary-foreground/80 mb-4">
                    Pick a time that works for your schedule
                  </p>
                  <Button variant="outline" className="text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary">
                    View Available Times
                  </Button>
                </div>

                {/* Message */}
                <div className="bg-primary-foreground/10 rounded-xl p-6 border border-primary-foreground/20">
                  <MessageCircle className="w-8 h-8 text-accent mx-auto mb-4" />
                  <h4 className="font-heading font-semibold text-lg text-primary-foreground mb-2">
                    Send a Message
                  </h4>
                  <p className="font-body text-primary-foreground/80 mb-4">
                    Prefer to start with a written message?
                  </p>
                  <Button variant="outline" className="text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary">
                    Contact Form
                  </Button>
                </div>
              </div>

              {/* Guarantee */}
              <div className="mt-8 p-4 bg-accent/20 rounded-xl border border-accent/30">
                <p className="font-body text-primary-foreground italic">
                  "I promise you'll leave our call with clarity about your financial future — 
                  even if we don't work together."
                </p>
                <p className="font-heading font-semibold text-accent mt-2">
                  — Karman Singh
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;