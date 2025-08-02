import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Award, Users, TrendingUp, CheckCircle } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-subtle py-20 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fadeInUp">
            <div className="space-y-4">
              <Badge variant="secondary" className="bg-accent text-accent-foreground px-4 py-2">
                🎯 South India's Leading Banking Institute
              </Badge>
              
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Your Gateway to 
                <span className="bg-gradient-hero bg-clip-text text-transparent block">
                  Banking Excellence
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                Join 1000+ successful candidates who achieved their dreams with Kingmakers School of Banking. 
                Expert coaching for IBPS, SBI, RBI, SSC, and all major competitive exams.
              </p>
            </div>

            {/* Key Stats */}
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                <span className="font-semibold">1000+ Selections</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 text-gold" />
                <span className="font-semibold">40% Success Rate</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5 text-success" />
                <span className="font-semibold">Since 2015</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" className="flex-1 sm:flex-initial">
                Start Your Journey
              </Button>
              <Button variant="outline" size="xl" className="flex-1 sm:flex-initial">
                Free Demo Class
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground mb-4">Trusted by students across Tamil Nadu:</p>
              <div className="flex flex-wrap gap-4 text-sm">
                <span className="flex items-center gap-1">
                  <CheckCircle className="h-4 w-4 text-success" />
                  Chennai
                </span>
                <span className="flex items-center gap-1">
                  <CheckCircle className="h-4 w-4 text-success" />
                  Salem
                </span>
                <span className="flex items-center gap-1">
                  <CheckCircle className="h-4 w-4 text-success" />
                  Madurai
                </span>
                <span className="flex items-center gap-1">
                  <CheckCircle className="h-4 w-4 text-success" />
                  Trichy
                </span>
              </div>
            </div>
          </div>

          {/* Right Content - Stats Card */}
          <div className="relative animate-scaleIn">
            <div className="bg-card rounded-2xl shadow-strong p-8 border border-border">
              <div className="text-center space-y-6">
                <h3 className="text-2xl font-bold text-foreground">Why Students Choose Us</h3>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">1000+</div>
                    <div className="text-sm text-muted-foreground">Successful Candidates</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-success">40%</div>
                    <div className="text-sm text-muted-foreground">Success Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-gold">9+</div>
                    <div className="text-sm text-muted-foreground">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">4</div>
                    <div className="text-sm text-muted-foreground">City Locations</div>
                  </div>
                </div>

                <div className="pt-6 border-t border-border">
                  <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                    <TrendingUp className="h-4 w-4 text-success" />
                    <span>Growing success rate every year</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-gold text-gold-foreground rounded-full p-3 animate-float shadow-medium">
              <Award className="h-6 w-6" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-success text-success-foreground rounded-full p-3 animate-float shadow-medium" style={{ animationDelay: '1s' }}>
              <Star className="h-6 w-6" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;