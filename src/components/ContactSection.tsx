import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Smartphone,
  MessageSquare,
  Building,
  CreditCard,
  Calendar,
  CheckCircle,
  Star,
  Users
} from "lucide-react";

const ContactSection = () => {
  const branches = [
    {
      city: "Chennai",
      locations: ["Anna Nagar", "Adyar"],
      address: "123, Main Street, Anna Nagar, Chennai - 600040",
      phone: "+91 9876543210"
    },
    {
      city: "Salem",
      locations: ["City Center"],
      address: "456, Gandhi Road, Salem - 636001",
      phone: "+91 9876543211"
    },
    {
      city: "Madurai",
      locations: ["Main Branch"],
      address: "789, Periyar Street, Madurai - 625001",
      phone: "+91 9876543212"
    },
    {
      city: "Trichy",
      locations: ["Central"],
      address: "321, Bharathi Road, Trichy - 620001",
      phone: "+91 9876543213"
    }
  ];

  const learningModes = [
    {
      icon: Building,
      title: "Classroom Learning",
      description: "Traditional face-to-face classes with direct interaction",
      features: ["Interactive sessions", "Peer learning", "Immediate doubt clearing"]
    },
    {
      icon: Smartphone,
      title: "Online Classes",
      description: "Live streaming classes accessible from anywhere",
      features: ["Live interaction", "Recorded sessions", "Mobile app access"]
    },
    {
      icon: Users,
      title: "Hybrid Mode",
      description: "Perfect blend of online and offline learning",
      features: ["Flexible schedule", "Best of both worlds", "Personalized approach"]
    }
  ];

  const quickInfo = [
    { label: "Founded", value: "2015" },
    { label: "Locations", value: "Chennai, Trichy, Madurai, Salem" },
    { label: "Focus", value: "Banking, SSC, RBI, NABARD, RRB" },
    { label: "Delivery Mode", value: "Classroom + Online + Hybrid" },
    { label: "Success Rate", value: "1000+ Selections (~40% success)" },
    { label: "Faculty", value: "Domain Experts + Mentors" }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">Get In Touch</Badge>
          <h2 className="text-4xl font-bold mb-6">
            Start Your Journey With Us
            <span className="block text-primary">Multiple Ways to Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose your preferred learning mode and connect with us today. We're here to guide 
            you through every step of your competitive exam preparation journey.
          </p>
        </div>

        {/* Learning Modes */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {learningModes.map((mode, index) => {
            const Icon = mode.icon;
            
            return (
              <Card 
                key={index} 
                className="hover:shadow-medium transition-all duration-300 hover:scale-105 text-center border border-border"
              >
                <CardHeader className="pb-4">
                  <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-4">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{mode.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{mode.description}</p>
                  <div className="space-y-2">
                    {mode.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 justify-center">
                        <CheckCircle className="h-4 w-4 text-success" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button variant="outline" size="sm" className="w-full mt-4">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold mb-6">
                Ready to Enroll?
                <span className="block text-success">Get Started Today</span>
              </h3>
              <p className="text-lg text-muted-foreground mb-8">
                Fill out the form below and our admissions team will contact you within 24 hours 
                to discuss your goals and find the perfect program for you.
              </p>
            </div>

            <Card className="p-8 border border-border">
              <CardContent className="p-0 space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Full Name</label>
                    <Input placeholder="Enter your full name" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Phone Number</label>
                    <Input placeholder="Enter your phone number" />
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">Email Address</label>
                  <Input placeholder="Enter your email address" />
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">Interested Course</label>
                  <Input placeholder="e.g., IBPS PO, SBI Clerk, RBI Grade B" />
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">Preferred Location</label>
                  <Input placeholder="Chennai, Salem, Madurai, or Trichy" />
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">Message (Optional)</label>
                  <Textarea placeholder="Tell us about your goals and any specific questions" />
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="hero" size="lg" className="flex-1">
                    Submit Application
                  </Button>
                  <Button variant="outline" size="lg" className="flex-1">
                    Schedule Demo Class
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Branch Information & Quick Info */}
          <div className="space-y-8">
            {/* Quick Info Table */}
            <Card className="border border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-gold" />
                  Quick Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 p-6 pt-0">
                {quickInfo.map((info, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-border last:border-b-0">
                    <span className="font-medium text-sm">{info.label}</span>
                    <span className="text-sm text-muted-foreground text-right">{info.value}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="border border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-primary" />
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 p-6 pt-0">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <div>
                      <div className="font-medium">Call Us</div>
                      <div className="text-sm text-muted-foreground">+91 9876543210</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-success" />
                    <div>
                      <div className="font-medium">Email Us</div>
                      <div className="text-sm text-muted-foreground">info@kingmakersbanking.com</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <MessageSquare className="h-5 w-5 text-gold" />
                    <div>
                      <div className="font-medium">WhatsApp</div>
                      <div className="text-sm text-muted-foreground">+91 9876543210</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-purple-600" />
                    <div>
                      <div className="font-medium">Office Hours</div>
                      <div className="text-sm text-muted-foreground">Mon-Sat: 9 AM - 7 PM</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Special Offers */}
            <Card className="bg-gradient-premium text-gold-foreground border border-border">
              <CardContent className="p-6 text-center space-y-4">
                <CreditCard className="h-8 w-8 mx-auto" />
                <h4 className="text-xl font-bold">Special Enrollment Offer</h4>
                <p className="text-sm opacity-90">
                  Enroll now and get 20% discount on course fees + Free study material worth ₹5,000
                </p>
                <Badge variant="secondary" className="bg-white/20 text-gold-foreground">
                  Limited Time Offer
                </Badge>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Branch Locations */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12">
            Our Branches Across Tamil Nadu
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {branches.map((branch, index) => (
              <Card 
                key={index} 
                className="hover:shadow-medium transition-all duration-300 hover:scale-105 border border-border"
              >
                <CardContent className="p-6 space-y-4">
                  <div className="text-center">
                    <div className="bg-primary/10 rounded-full p-3 w-12 h-12 mx-auto mb-3">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <h4 className="font-bold text-lg">{branch.city}</h4>
                    <p className="text-sm text-muted-foreground">
                      {branch.locations.join(", ")}
                    </p>
                  </div>
                  
                  <div className="space-y-2 text-sm">
                    <div className="text-muted-foreground">{branch.address}</div>
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-primary" />
                      <span className="font-medium">{branch.phone}</span>
                    </div>
                  </div>
                  
                  <Button variant="outline" size="sm" className="w-full">
                    Get Directions
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center">
          <p className="text-lg text-primary font-semibold mb-4">
            "Your success journey is just one step away. Contact us today!"
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="cta" size="lg">
              Enroll Now
            </Button>
            <Button variant="outline" size="lg">
              Download Brochure
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;