import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  GraduationCap, 
  MessageSquare, 
  Users, 
  Video,
  Award,
  Brain,
  CheckCircle,
  Star,
  Clock,
  UserCheck
} from "lucide-react";

const FacultySection = () => {
  const facultyFeatures = [
    {
      icon: GraduationCap,
      title: "Domain Experts",
      description: "Faculty members with extensive experience in banking, government sectors, and competitive exam coaching",
      stats: "15+ Years Avg Experience"
    },
    {
      icon: MessageSquare,
      title: "Personal Mentorship",
      description: "One-on-one doubt clearing sessions with personalized feedback and study plan customization",
      stats: "24/7 Doubt Support"
    },
    {
      icon: Users,
      title: "Learning Communities",
      description: "Active WhatsApp and Telegram groups for continuous interaction and peer learning opportunities",
      stats: "5000+ Active Members"
    },
    {
      icon: Video,
      title: "Interview Training",
      description: "Comprehensive interview preparation with mock sessions, communication skills, and confidence building",
      stats: "95% Interview Success"
    }
  ];

  const mentorshipBenefits = [
    "Personalized study plans based on individual strengths and weaknesses",
    "Regular performance tracking with detailed analytics and improvement suggestions",
    "Mock interviews with panel-style simulations and expert feedback",
    "Soft skills development including communication and presentation skills",
    "Career guidance and post-selection mentorship support",
    "Access to exclusive masterclasses by industry veterans"
  ];

  return (
    <section id="faculty" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">Faculty & Mentorship</Badge>
          <h2 className="text-4xl font-bold mb-6">
            Learn from the Best
            <span className="block text-primary">Industry Experts</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our experienced faculty from banking and government domains provide personalized 
            guidance to ensure your success in competitive examinations.
          </p>
        </div>

        {/* Faculty Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {facultyFeatures.map((feature, index) => {
            const Icon = feature.icon;
            
            return (
              <Card 
                key={index} 
                className="hover:shadow-medium transition-all duration-300 hover:scale-105 text-center border border-border"
              >
                <CardContent className="p-6 space-y-4">
                  <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  
                  <h3 className="text-lg font-semibold">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                  
                  <Badge variant="secondary" className="bg-success/10 text-success text-xs">
                    {feature.stats}
                  </Badge>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Mentorship Details */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold mb-6">
                Comprehensive Mentorship
                <span className="block text-success">Program</span>
              </h3>
              <p className="text-lg text-muted-foreground mb-8">
                Beyond just teaching, we provide complete mentorship that guides you through 
                every step of your competitive exam journey, from preparation to final selection.
              </p>
            </div>

            <div className="space-y-4">
              {mentorshipBenefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>

            <Button variant="premium" size="lg">
              Meet Our Faculty
            </Button>
          </div>

          <div className="space-y-6">
            {/* Interview Training Highlight */}
            <Card className="bg-gradient-hero text-primary-foreground p-8">
              <CardContent className="p-0 space-y-6">
                <div className="text-center">
                  <Award className="h-12 w-12 mx-auto mb-4 opacity-90" />
                  <h4 className="text-2xl font-bold mb-2">Interview Training Program</h4>
                  <p className="opacity-90">Complete preparation for the final selection round</p>
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold">150+</div>
                    <div className="text-sm opacity-90">Mock Interviews</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">95%</div>
                    <div className="text-sm opacity-90">Success Rate</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Faculty Stats */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-6 text-center bg-card border border-border">
                <CardContent className="p-0 space-y-2">
                  <Brain className="h-8 w-8 text-gold mx-auto" />
                  <div className="text-2xl font-bold text-gold">15+</div>
                  <div className="text-sm text-muted-foreground">Expert Faculty</div>
                </CardContent>
              </Card>
              
              <Card className="p-6 text-center bg-card border border-border">
                <CardContent className="p-0 space-y-2">
                  <Clock className="h-8 w-8 text-success mx-auto" />
                  <div className="text-2xl font-bold text-success">24/7</div>
                  <div className="text-sm text-muted-foreground">Support Available</div>
                </CardContent>
              </Card>
            </div>

            {/* Community Features */}
            <Card className="bg-accent border border-border p-6">
              <CardContent className="p-0 space-y-4">
                <div className="flex items-center gap-3">
                  <Users className="h-6 w-6 text-primary" />
                  <h4 className="font-semibold">Learning Communities</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  Join our active WhatsApp and Telegram communities where students interact 
                  with faculty members, share study tips, and motivate each other.
                </p>
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-1">
                    <UserCheck className="h-4 w-4 text-success" />
                    <span>5000+ Members</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-gold" />
                    <span>Daily Updates</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="text-center">
          <p className="text-lg text-primary font-semibold mb-4">
            "Get personalized guidance from industry experts who are committed to your success!"
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg">
              Book Mentorship Session
            </Button>
            <Button variant="outline" size="lg">
              Join Learning Community
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FacultySection;