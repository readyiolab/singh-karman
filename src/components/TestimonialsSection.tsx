import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Working Mother of Two",
      content: "Karman helped us create a plan that actually makes sense for our family. No more confusion about our financial future — we have clarity and confidence now.",
      rating: 5,
      highlight: "Clarity and confidence"
    },
    {
      name: "Michael Rodriguez",
      role: "Small Business Owner",
      content: "I thought building wealth was only for people who already had money. Karman showed me strategies I never knew existed. Our retirement is now fully funded and tax-free.",
      rating: 5,
      highlight: "Tax-free retirement"
    },
    {
      name: "Preet & Jasmine Singh",
      role: "Immigrant Family",
      content: "Coming from a family that never talked about investing, we were lost. Karman speaks our language and understands our values. Now we're building generational wealth.",
      rating: 5,
      highlight: "Generational wealth"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 fade-in-up">
          <div className="inline-flex items-center space-x-2 bg-primary/10 dark:bg-primary/20 text-primary px-4 py-2 rounded-full mb-6 shadow-lg backdrop-blur-sm border border-primary/20">
            <Star className="w-4 h-4" />
            <span className="font-semibold text-sm uppercase tracking-wider">Client Success</span>
          </div>
          
          <h2 className="font-heading font-bold text-3xl lg:text-4xl text-foreground mb-6">
            Real Stories, <span className="text-accent-dark">Real Impact</span>
          </h2>
          
          <p className="font-body text-xl text-muted-foreground max-w-3xl mx-auto">
            See how families like yours have transformed their financial future 
            with purpose-driven strategies and clear guidance.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.name}
              className="wealth-card p-8 relative"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-8">
                <div className="bg-accent-dark p-3 rounded-full">
                  <Quote className="w-6 h-6 text-accent-foreground" />
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-1 mb-6 pt-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent-dark text-accent-dark" />
                ))}
              </div>

              {/* Content */}
              <p className="font-body text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Highlight */}
              <div className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium inline-block mb-4">
                {testimonial.highlight}
              </div>

              {/* Author */}
              <div className="border-t border-border pt-4">
                <p className="font-heading font-semibold text-foreground">
                  {testimonial.name}
                </p>
                <p className="font-body text-sm text-muted-foreground">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-4 bg-muted rounded-xl p-8">
            <div className="flex -space-x-2">
              <div className="w-12 h-12 rounded-full bg-primary-gradient border-2 border-background flex items-center justify-center">
                <span className="font-heading font-bold text-primary-foreground">SC</span>
              </div>
              <div className="w-12 h-12 rounded-full bg-accent border-2 border-background flex items-center justify-center">
                <span className="font-heading font-bold text-accent-foreground">MR</span>
              </div>
              <div className="w-12 h-12 rounded-full bg-secondary-gradient border-2 border-background flex items-center justify-center">
                <span className="font-heading font-bold text-secondary-foreground">PS</span>
              </div>
              <div className="w-12 h-12 rounded-full bg-muted-foreground/20 border-2 border-background flex items-center justify-center">
                <span className="font-heading font-bold text-muted-foreground">+</span>
              </div>
            </div>
            <div className="text-left">
              <p className="font-heading font-semibold text-foreground">
                Join 500+ families building generational wealth
              </p>
              <p className="font-body text-muted-foreground">
                Your success story could be next
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;