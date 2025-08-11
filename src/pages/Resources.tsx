
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Calculator, Video, BookOpen, Download, ArrowRight, Shield, TrendingUp, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";

const Resources = () => {
  const pdfResources = [
    {
      icon: Shield,
      title: "Life Insurance Guide",
      description: "Complete guide to using life insurance as a wealth-building tool",
      type: "PDF Guide",
      downloadUrl: "#"
    },
    {
      icon: TrendingUp,
      title: "Tax-Free Retirement Strategies",
      description: "How to build retirement income without giving it away in taxes",
      type: "PDF Guide",
      downloadUrl: "#"
    },
    {
      icon: GraduationCap,
      title: "College Savings Blueprint",
      description: "Alternative strategies to traditional 529 plans",
      type: "PDF Guide",
      downloadUrl: "#"
    }
  ];

  const toolResources = [
    {
      icon: Calculator,
      title: "Compound Interest Calculator",
      description: "See how your money can grow over time with compound interest",
      type: "Interactive Tool",
      action: "Try Calculator",
      link: "/calculator"
    },
    {
      icon: BookOpen,
      title: "Debt Elimination Calculator",
      description: "Calculate how quickly you can become debt-free",
      type: "Interactive Tool",
      action: "Coming Soon",
      link: "#"
    }
  ];

  const videoResources = [
    {
      icon: Video,
      title: "Wealth Building Fundamentals",
      description: "5-part video series on building generational wealth",
      type: "Video Series",
      duration: "45 min total"
    },
    {
      icon: Video,
      title: "Life Insurance Explained",
      description: "Understanding how life insurance can build wealth",
      type: "Educational Video",
      duration: "12 min"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
   
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-hero-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading font-bold text-4xl lg:text-5xl text-primary-foreground mb-6">
            Free Resources to <span className="text-accent">Accelerate</span> Your Wealth
          </h1>
          <p className="font-body text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            Everything you need to start building wealth with clarity and confidence
          </p>
        </div>
      </section>

      {/* PDF Resources */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
              <FileText className="w-4 h-4" />
              <span className="font-body font-medium text-sm">PDF Guides</span>
            </div>
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-foreground mb-6">
              Downloadable Wealth Guides
            </h2>
            <p className="font-body text-xl text-muted-foreground max-w-3xl mx-auto">
              In-depth guides that break down complex financial strategies into simple, actionable steps
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {pdfResources.map((resource, index) => (
              <Card key={resource.title} className="border-border shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105">
                <CardHeader>
                  <div className="bg-primary-gradient p-4 rounded-xl mb-4 w-fit">
                    <resource.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <div className="text-sm text-accent font-medium mb-2">{resource.type}</div>
                  <CardTitle className="font-heading text-xl text-foreground">{resource.title}</CardTitle>
                  <CardDescription className="font-body text-muted-foreground">
                    {resource.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full btn-hero">
                    <Download className="mr-2 w-4 h-4" />
                    Download Free
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Tools */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-accent/10 text-accent px-4 py-2 rounded-full mb-6">
              <Calculator className="w-4 h-4" />
              <span className="font-body font-medium text-sm">Interactive Tools</span>
            </div>
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-foreground mb-6">
              Financial Calculators & Tools
            </h2>
            <p className="font-body text-xl text-muted-foreground max-w-3xl mx-auto">
              See what's possible with just a few numbers - calculate your potential and plan your future
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {toolResources.map((tool, index) => (
              <Card key={tool.title} className="border-border shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="bg-accent/10 p-4 rounded-xl mb-4 w-fit">
                    <tool.icon className="w-8 h-8 text-accent" />
                  </div>
                  <div className="text-sm text-accent font-medium mb-2">{tool.type}</div>
                  <CardTitle className="font-heading text-xl text-foreground">{tool.title}</CardTitle>
                  <CardDescription className="font-body text-muted-foreground">
                    {tool.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {tool.link === "/calculator" ? (
                    <Link to={tool.link}>
                      <Button className="w-full btn-accent">
                        <Calculator className="mr-2 w-4 h-4" />
                        {tool.action}
                      </Button>
                    </Link>
                  ) : (
                    <Button className="w-full" variant="outline" disabled>
                      {tool.action}
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Video Resources */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full mb-6">
              <Video className="w-4 h-4" />
              <span className="font-body font-medium text-sm">Video Content</span>
            </div>
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-foreground mb-6">
              Educational Videos
            </h2>
            <p className="font-body text-xl text-muted-foreground max-w-3xl mx-auto">
              Visual learning for complex financial concepts - watch and understand at your own pace
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {videoResources.map((video, index) => (
              <Card key={video.title} className="border-border shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="aspect-video bg-muted rounded-xl mb-4 flex items-center justify-center">
                    <div className="bg-primary-gradient p-4 rounded-full">
                      <Video className="w-8 h-8 text-primary-foreground" />
                    </div>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-secondary font-medium">{video.type}</span>
                    <span className="text-sm text-muted-foreground">{video.duration}</span>
                  </div>
                  <CardTitle className="font-heading text-xl text-foreground">{video.title}</CardTitle>
                  <CardDescription className="font-body text-muted-foreground">
                    {video.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full btn-secondary">
                    Watch Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary-gradient rounded-2xl p-12 text-center">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-primary-foreground mb-6">
              Ready to Go Beyond the Basics?
            </h2>
            <p className="font-body text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              These resources are just the beginning. Let's create a personalized wealth strategy that fits your life and goals.
            </p>
            
            <Button size="lg" className="btn-accent text-lg px-8 py-4">
              Book Your Strategy Session
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

    
    </div>
  );
};

export default Resources;