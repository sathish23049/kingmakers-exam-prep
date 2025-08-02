import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  BookOpen, 
  Brain, 
  Smartphone, 
  FileText, 
  MessageCircle, 
  Award,
  BarChart3,
  Download,
  Video,
  Users,
  CheckCircle,
  TrendingUp
} from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Brain,
      title: "Concept-Based Teaching",
      description: "Updated curriculum with focus on fundamental concepts and practical application methods",
      highlight: "Smart Learning"
    },
    {
      icon: BarChart3,
      title: "Daily Quizzes & Analytics",
      description: "Regular assessments with detailed performance analytics to track your progress",
      highlight: "Performance Tracking"
    },
    {
      icon: Smartphone,
      title: "Mobile App Learning",
      description: "Learn anywhere, anytime with our dedicated mobile app and offline content access",
      highlight: "24/7 Access"
    },
    {
      icon: Download,
      title: "Downloadable Resources",
      description: "Access comprehensive notes, current affairs PDFs, and monthly magazines instantly",
      highlight: "Rich Content"
    },
    {
      icon: MessageCircle,
      title: "Doubt Clearing Support",
      description: "Personal mentorship with dedicated doubt-clearing sessions and expert guidance",
      highlight: "1-on-1 Support"
    },
    {
      icon: Video,
      title: "Live & Recorded Classes",
      description: "Interactive live sessions with recorded backup for flexible learning schedules",
      highlight: "Flexible Learning"
    }
  ];

  const benefits = [
    "Updated curriculum aligned with latest exam patterns",
    "Expert faculty from banking and government sectors", 
    "Comprehensive mock test series with detailed analysis",
    "WhatsApp and Telegram learning communities",
    "Interview training with soft skills development",
    "Monthly current affairs magazines and PDFs"
  ];

  return (
    <section id="features" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">Why Choose Kingmakers?</Badge>
          <h2 className="text-4xl font-bold mb-6">
            Features That Make Us
            <span className="block text-primary">The Best Choice</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our unique combination of traditional teaching excellence and modern technology 
            ensures comprehensive preparation for your competitive exam success.
          </p>
        </div>

        {/* Main Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            
            return (
              <Card 
                key={index} 
                className="hover:shadow-medium transition-all duration-300 hover:scale-105 group border border-border"
              >
                <CardContent className="p-8 text-center space-y-4">
                  <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  
                  <Badge variant="secondary" className="bg-accent text-accent-foreground text-xs">
                    {feature.highlight}
                  </Badge>
                  
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Benefits Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold mb-6">
                Everything You Need for
                <span className="block text-success">Exam Success</span>
              </h3>
              <p className="text-lg text-muted-foreground mb-8">
                Our comprehensive approach combines proven teaching methods with cutting-edge technology 
                to deliver results that speak for themselves.
              </p>
            </div>

            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>

            <Button variant="premium" size="lg" className="mt-8">
              Explore All Features
            </Button>
          </div>

          <div className="space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-gradient-hero text-primary-foreground p-6 text-center">
                <CardContent className="p-0 space-y-2">
                  <div className="text-3xl font-bold">100%</div>
                  <div className="text-sm opacity-90">Updated Content</div>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-success text-success-foreground p-6 text-center">
                <CardContent className="p-0 space-y-2">
                  <div className="text-3xl font-bold">24/7</div>
                  <div className="text-sm opacity-90">Learning Access</div>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-premium text-gold-foreground p-6 text-center">
                <CardContent className="p-0 space-y-2">
                  <div className="text-3xl font-bold">15+</div>
                  <div className="text-sm opacity-90">Expert Faculty</div>
                </CardContent>
              </Card>
              
              <Card className="bg-card border border-border p-6 text-center">
                <CardContent className="p-0 space-y-2">
                  <div className="text-3xl font-bold text-primary">500+</div>
                  <div className="text-sm text-muted-foreground">Study Hours</div>
                </CardContent>
              </Card>
            </div>

            {/* Feature Highlight */}
            <Card className="bg-accent border border-border p-6">
              <CardContent className="p-0 space-y-4">
                <div className="flex items-center gap-3">
                  <Award className="h-6 w-6 text-gold" />
                  <h4 className="font-semibold">Premium Learning Experience</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  Join our exclusive learning communities on WhatsApp and Telegram for continuous 
                  interaction with faculty and peer learning opportunities.
                </p>
                <div className="flex items-center gap-2 text-sm">
                  <TrendingUp className="h-4 w-4 text-success" />
                  <span className="text-success font-medium">40% higher success rate</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="text-center mt-16">
          <p className="text-lg text-primary font-semibold mb-4">
            "Experience the difference that quality education makes in your success journey!"
          </p>
          <Button variant="cta" size="lg">
            Join Our Learning Community
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;