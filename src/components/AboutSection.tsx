import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Trophy, Clock, BookOpen, Users } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <Badge variant="secondary" className="mb-4">About Kingmakers</Badge>
          <h2 className="text-4xl font-bold mb-6">
            Shaping Future Banking & Government Professionals
            <span className="block text-primary">Since 2015</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Established in 2015, Kingmakers School of Banking has emerged as South India's premier coaching institute 
            for competitive exams. With a track record of 1000+ successful selections, we are committed to producing 
            the next generation of civil servants and banking professionals.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 rounded-lg p-3">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
                  <p className="text-muted-foreground">
                    To democratize quality education and make competitive exam success accessible to every deserving 
                    candidate through innovative teaching methodologies and personalized guidance.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-success/10 rounded-lg p-3">
                  <Eye className="h-6 w-6 text-success" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
                  <p className="text-muted-foreground">
                    To be the most trusted and preferred coaching institute in South India, known for our exceptional 
                    results, ethical practices, and student-centric approach.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-gold/10 rounded-lg p-3">
                  <Trophy className="h-6 w-6 text-gold" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Our Achievement</h3>
                  <p className="text-muted-foreground">
                    With 1000+ successful selections and a consistent 40% success rate, we have established ourselves 
                    as the benchmark for quality coaching in Tamil Nadu.
                  </p>
                </div>
              </div>
            </div>

            <Button variant="premium" size="lg">
              Learn More About Our Journey
            </Button>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <Card className="text-center p-6 hover:shadow-medium transition-all duration-300">
                <CardContent className="space-y-3 p-0">
                  <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto flex items-center justify-center">
                    <Clock className="h-8 w-8 text-primary" />
                  </div>
                  <h4 className="text-2xl font-bold text-primary">9+</h4>
                  <p className="text-sm text-muted-foreground">Years of Excellence</p>
                </CardContent>
              </Card>

              <Card className="text-center p-6 hover:shadow-medium transition-all duration-300">
                <CardContent className="space-y-3 p-0">
                  <div className="bg-success/10 rounded-full p-4 w-16 h-16 mx-auto flex items-center justify-center">
                    <Users className="h-8 w-8 text-success" />
                  </div>
                  <h4 className="text-2xl font-bold text-success">1000+</h4>
                  <p className="text-sm text-muted-foreground">Success Stories</p>
                </CardContent>
              </Card>

              <Card className="text-center p-6 hover:shadow-medium transition-all duration-300">
                <CardContent className="space-y-3 p-0">
                  <div className="bg-gold/10 rounded-full p-4 w-16 h-16 mx-auto flex items-center justify-center">
                    <BookOpen className="h-8 w-8 text-gold" />
                  </div>
                  <h4 className="text-2xl font-bold text-gold">15+</h4>
                  <p className="text-sm text-muted-foreground">Course Programs</p>
                </CardContent>
              </Card>

              <Card className="text-center p-6 hover:shadow-medium transition-all duration-300">
                <CardContent className="space-y-3 p-0">
                  <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto flex items-center justify-center">
                    <Trophy className="h-8 w-8 text-primary" />
                  </div>
                  <h4 className="text-2xl font-bold text-primary">40%</h4>
                  <p className="text-sm text-muted-foreground">Success Rate</p>
                </CardContent>
              </Card>
            </div>

            <div className="bg-accent rounded-xl p-6 text-center">
              <h4 className="font-semibold mb-2">Trusted Institute in Tamil Nadu</h4>
              <p className="text-sm text-muted-foreground">
                Recognized for our commitment to online + offline excellence and student success
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <p className="text-lg text-primary font-semibold mb-4">
            "Take the next step toward a secure government career. Join Kingmakers today!"
          </p>
          <Button variant="cta" size="lg">
            Start Your Success Journey
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;