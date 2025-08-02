import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Trophy, 
  Star, 
  Quote, 
  TrendingUp,
  Award,
  Target,
  Users,
  Sparkles
} from "lucide-react";

const SuccessSection = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      exam: "SBI PO 2023",
      rank: "AIR 47",
      image: "👩‍💼",
      content: "Kingmakers provided me with the perfect blend of conceptual clarity and practical approach. The daily quizzes and mock tests helped me understand my weak areas and improve consistently. The faculty's personal attention made all the difference!",
      location: "Chennai"
    },
    {
      name: "Rajesh Kumar",
      exam: "IBPS Clerk 2023",
      rank: "AIR 23",
      image: "👨‍💼",
      content: "The interview training program at Kingmakers is exceptional. The mock interviews and soft skills sessions boosted my confidence tremendously. I couldn't have cleared the final round without their guidance.",
      location: "Salem"
    },
    {
      name: "Meera Patel",
      exam: "RBI Grade B 2024",
      rank: "AIR 156",
      image: "👩‍💻",
      content: "The study material and current affairs updates were comprehensive and up-to-date. The mobile app made it convenient to study even during my commute. Highly recommend for serious aspirants!",
      location: "Madurai"
    }
  ];

  const achievements = [
    { label: "Total Selections", value: "1000+", icon: Trophy, color: "text-gold" },
    { label: "Success Rate", value: "40%", icon: Target, color: "text-success" },
    { label: "Top 100 Ranks", value: "200+", icon: Award, color: "text-primary" },
    { label: "Happy Students", value: "5000+", icon: Users, color: "text-purple-600" }
  ];

  const recentToppers = [
    { name: "Anitha R.", exam: "SBI PO 2024", rank: "AIR 12" },
    { name: "Vikram S.", exam: "IBPS PO 2024", rank: "AIR 34" },
    { name: "Kavitha M.", exam: "RRB NTPC 2024", rank: "AIR 78" },
    { name: "Arjun P.", exam: "SSC CGL 2024", rank: "AIR 145" }
  ];

  return (
    <section id="success" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">Success Stories</Badge>
          <h2 className="text-4xl font-bold mb-6">
            1000+ Success Stories
            <span className="block text-primary">That Inspire Us Daily</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our students' achievements are our greatest pride. Here are some of the remarkable 
            success stories that motivate us to continue our mission of excellence.
          </p>
        </div>

        {/* Achievement Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            
            return (
              <Card 
                key={index} 
                className="text-center p-6 hover:shadow-medium transition-all duration-300 hover:scale-105 border border-border"
              >
                <CardContent className="p-0 space-y-4">
                  <div className="bg-accent rounded-full p-4 w-16 h-16 mx-auto">
                    <Icon className={`h-8 w-8 ${achievement.color}`} />
                  </div>
                  <div className={`text-3xl font-bold ${achievement.color}`}>
                    {achievement.value}
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">
                    {achievement.label}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Student Testimonials */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12">
            What Our Successful Students Say
          </h3>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className="hover:shadow-medium transition-all duration-300 border border-border relative overflow-hidden"
              >
                <CardContent className="p-8 space-y-6">
                  <Quote className="h-8 w-8 text-primary/30 absolute top-4 right-4" />
                  
                  <div className="flex items-center gap-4">
                    <div className="text-4xl">{testimonial.image}</div>
                    <div>
                      <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                      <div className="flex items-center gap-2 text-sm">
                        <Badge variant="secondary" className="bg-success/10 text-success">
                          {testimonial.exam}
                        </Badge>
                        <span className="text-muted-foreground">• {testimonial.location}</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gold/10 rounded-lg p-3 text-center">
                    <div className="font-bold text-gold text-lg">{testimonial.rank}</div>
                    <div className="text-xs text-muted-foreground">All India Rank</div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed text-sm">
                    "{testimonial.content}"
                  </p>

                  <div className="flex items-center gap-1 pt-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-gold fill-current" />
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Recent Toppers */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold mb-6">
                Recent Toppers
                <span className="block text-success">2024 Results</span>
              </h3>
              <p className="text-lg text-muted-foreground mb-8">
                Our latest batch of successful candidates who secured top ranks in various 
                competitive examinations this year.
              </p>
            </div>

            <div className="space-y-4">
              {recentToppers.map((topper, index) => (
                <div 
                  key={index} 
                  className="flex items-center justify-between p-4 bg-accent rounded-lg border border-border hover:shadow-soft transition-all duration-300"
                >
                  <div className="flex items-center gap-3">
                    <div className="bg-gold/10 rounded-full p-2">
                      <Trophy className="h-5 w-5 text-gold" />
                    </div>
                    <div>
                      <div className="font-semibold">{topper.name}</div>
                      <div className="text-sm text-muted-foreground">{topper.exam}</div>
                    </div>
                  </div>
                  <Badge variant="secondary" className="bg-success/10 text-success">
                    {topper.rank}
                  </Badge>
                </div>
              ))}
            </div>

            <Button variant="premium" size="lg">
              View All Success Stories
            </Button>
          </div>

          <div className="space-y-6">
            {/* Success Rate Card */}
            <Card className="bg-gradient-success text-success-foreground p-8 text-center">
              <CardContent className="p-0 space-y-4">
                <Sparkles className="h-12 w-12 mx-auto opacity-90" />
                <h4 className="text-2xl font-bold">40% Success Rate</h4>
                <p className="opacity-90">
                  Consistently higher than industry average of 15-20%
                </p>
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div>
                    <div className="text-2xl font-bold">15x</div>
                    <div className="text-sm opacity-90">Better Results</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">95%</div>
                    <div className="text-sm opacity-90">Student Satisfaction</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Growth Chart */}
            <Card className="p-6 border border-border">
              <CardContent className="p-0 space-y-4">
                <div className="flex items-center gap-3">
                  <TrendingUp className="h-6 w-6 text-primary" />
                  <h4 className="font-semibold">Growing Success Rate</h4>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">2022</span>
                    <div className="flex-1 mx-4 bg-muted rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{ width: '35%' }}></div>
                    </div>
                    <span className="text-sm font-medium">35%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">2023</span>
                    <div className="flex-1 mx-4 bg-muted rounded-full h-2">
                      <div className="bg-success h-2 rounded-full" style={{ width: '38%' }}></div>
                    </div>
                    <span className="text-sm font-medium">38%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">2024</span>
                    <div className="flex-1 mx-4 bg-muted rounded-full h-2">
                      <div className="bg-gold h-2 rounded-full" style={{ width: '40%' }}></div>
                    </div>
                    <span className="text-sm font-medium">40%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="text-center">
          <p className="text-lg text-primary font-semibold mb-4">
            "Join the league of successful candidates. Your success story starts here!"
          </p>
          <Button variant="cta" size="lg">
            Be Our Next Success Story
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SuccessSection;