import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Building2, 
  Landmark, 
  TrendingUp, 
  Shield, 
  FileText, 
  Train, 
  Briefcase, 
  BookOpen,
  Clock,
  Users,
  Star
} from "lucide-react";

const CoursesSection = () => {
  const courses = [
    {
      icon: Building2,
      title: "IBPS PO / Clerk",
      description: "Comprehensive preparation for Institute of Banking Personnel Selection exams with focus on reasoning, quantitative aptitude, and English proficiency.",
      highlights: ["Mock Tests", "Interview Training", "Study Material"],
      color: "primary"
    },
    {
      icon: Landmark,
      title: "SBI PO / Clerk",
      description: "Specialized coaching for State Bank of India recruitment with updated syllabus coverage and exam pattern analysis.",
      highlights: ["Live Classes", "Doubt Clearing", "Current Affairs"],
      color: "success"
    },
    {
      icon: TrendingUp,
      title: "RBI Grade B",
      description: "Elite preparation program for Reserve Bank of India Grade B officer positions with focus on economics and finance fundamentals.",
      highlights: ["Expert Faculty", "Phase-wise Training", "Economic Analysis"],
      color: "gold"
    },
    {
      icon: Shield,
      title: "NABARD Grade A & B",
      description: "Targeted coaching for National Bank for Agriculture and Rural Development with emphasis on rural banking and development.",
      highlights: ["Sectoral Analysis", "Interview Prep", "Case Studies"],
      color: "primary"
    },
    {
      icon: FileText,
      title: "SSC CGL / CHSL",
      description: "Complete preparation for Staff Selection Commission exams covering all four tiers with comprehensive study plans.",
      highlights: ["Tier-wise Training", "Speed Tests", "Previous Papers"],
      color: "success"
    },
    {
      icon: Train,
      title: "RRB NTPC / Group D",
      description: "Railway recruitment preparation with focus on technical aptitude, general awareness, and reasoning abilities.",
      highlights: ["Technical Focus", "Railway Awareness", "Group Discussions"],
      color: "gold"
    },
    {
      icon: Briefcase,
      title: "LIC AAO & Insurance",
      description: "Insurance sector exam preparation covering life insurance basics, regulations, and mathematical concepts.",
      highlights: ["Insurance Laws", "Product Knowledge", "Regulatory Updates"],
      color: "primary"
    },
    {
      icon: BookOpen,
      title: "Current Affairs & GK",
      description: "Monthly capsules and daily updates covering banking awareness, current affairs, and general knowledge essentials.",
      highlights: ["Daily Updates", "Monthly Magazines", "Topic-wise PDFs"],
      color: "success"
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'primary':
        return {
          iconBg: 'bg-primary/10',
          iconColor: 'text-primary',
          badge: 'bg-primary/10 text-primary'
        };
      case 'success':
        return {
          iconBg: 'bg-success/10',
          iconColor: 'text-success',
          badge: 'bg-success/10 text-success'
        };
      case 'gold':
        return {
          iconBg: 'bg-gold/10',
          iconColor: 'text-gold',
          badge: 'bg-gold/10 text-gold'
        };
      default:
        return {
          iconBg: 'bg-primary/10',
          iconColor: 'text-primary',
          badge: 'bg-primary/10 text-primary'
        };
    }
  };

  return (
    <section id="courses" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">Our Courses</Badge>
          <h2 className="text-4xl font-bold mb-6">
            Comprehensive Exam Preparation
            <span className="block text-primary">For Every Competitive Exam</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From banking to government services, we offer specialized coaching programs designed 
            to maximize your success in all major competitive examinations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {courses.map((course, index) => {
            const colors = getColorClasses(course.color);
            const Icon = course.icon;
            
            return (
              <Card 
                key={index} 
                className="hover:shadow-medium transition-all duration-300 hover:scale-105 group cursor-pointer border border-border"
              >
                <CardHeader className="text-center pb-4">
                  <div className={`${colors.iconBg} rounded-full p-4 w-16 h-16 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`h-8 w-8 ${colors.iconColor}`} />
                  </div>
                  <CardTitle className="text-lg font-semibold">{course.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 pt-0">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {course.description}
                  </p>
                  
                  <div className="space-y-2">
                    {course.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <Star className="h-3 w-3 text-gold" />
                        <span className="text-xs text-muted-foreground">{highlight}</span>
                      </div>
                    ))}
                  </div>

                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full mt-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Course Features */}
        <div className="bg-card rounded-2xl shadow-soft p-8 border border-border">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-3">
              <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold">Flexible Timings</h3>
              <p className="text-sm text-muted-foreground">
                Online, hybrid, and weekend batch formats to suit your schedule
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="bg-success/10 rounded-full p-4 w-16 h-16 mx-auto">
                <Users className="h-8 w-8 text-success" />
              </div>
              <h3 className="font-semibold">Expert Faculty</h3>
              <p className="text-sm text-muted-foreground">
                Experienced teachers from banking and government domains
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="bg-gold/10 rounded-full p-4 w-16 h-16 mx-auto">
                <BookOpen className="h-8 w-8 text-gold" />
              </div>
              <h3 className="font-semibold">Complete Material</h3>
              <p className="text-sm text-muted-foreground">
                Updated study material with mobile app access and downloadable notes
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-primary font-semibold mb-4">
            "Enroll now to get early access to exclusive study material and mentorship!"
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg">
              View All Courses
            </Button>
            <Button variant="outline" size="lg">
              Free Demo Class
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;