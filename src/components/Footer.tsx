import { Button } from "@/components/ui/button";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  MessageSquare,
  Star,
  Award,
  BookOpen
} from "lucide-react";

const Footer = () => {
  const quickLinks = [
    "About Us", "Courses", "Faculty", "Success Stories", "Admissions", "Contact"
  ];

  const courses = [
    "IBPS PO/Clerk", "SBI PO/Clerk", "RBI Grade B", "NABARD", "SSC CGL/CHSL", "RRB NTPC"
  ];

  const locations = [
    "Chennai (Anna Nagar)", "Chennai (Adyar)", "Salem", "Madurai", "Trichy"
  ];

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-12">
          {/* Brand & Description */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-4 bg-gradient-hero bg-clip-text text-transparent">
                Kingmakers School of Banking
              </h3>
              <p className="text-background/80 leading-relaxed">
                South India's premier coaching institute for competitive exams since 2015. 
                Trusted by 1000+ successful candidates across Tamil Nadu.
              </p>
            </div>
            
            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Award className="h-4 w-4 text-gold" />
                <span>9+ Years</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-4 w-4 text-gold" />
                <span>1000+ Success</span>
              </div>
            </div>

            <div className="flex gap-4">
              <Button variant="outline" size="icon" className="bg-transparent border-background/20 hover:bg-background/10">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="bg-transparent border-background/20 hover:bg-background/10">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="bg-transparent border-background/20 hover:bg-background/10">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="bg-transparent border-background/20 hover:bg-background/10">
                <Youtube className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <div className="space-y-3">
              {quickLinks.map((link, index) => (
                <a 
                  key={index}
                  href="#" 
                  className="block text-background/80 hover:text-background transition-colors text-sm"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Popular Courses */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Popular Courses</h4>
            <div className="space-y-3">
              {courses.map((course, index) => (
                <a 
                  key={index}
                  href="#" 
                  className="block text-background/80 hover:text-background transition-colors text-sm"
                >
                  {course}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Information</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <div className="text-sm font-medium">Call Us</div>
                  <div className="text-background/80 text-sm">+91 9876543210</div>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-success mt-0.5" />
                <div>
                  <div className="text-sm font-medium">Email</div>
                  <div className="text-background/80 text-sm">info@kingmakersbanking.com</div>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <MessageSquare className="h-5 w-5 text-gold mt-0.5" />
                <div>
                  <div className="text-sm font-medium">WhatsApp</div>
                  <div className="text-background/80 text-sm">+91 9876543210</div>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-purple-400 mt-0.5" />
                <div>
                  <div className="text-sm font-medium">Office Hours</div>
                  <div className="text-background/80 text-sm">Mon-Sat: 9 AM - 7 PM</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Branch Locations */}
        <div className="border-t border-background/20 pt-8 mb-8">
          <h4 className="text-lg font-semibold mb-4 text-center">Our Locations</h4>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            {locations.map((location, index) => (
              <div key={index} className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-background/80">{location}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-background/20 pt-8 mb-8">
          <div className="text-center space-y-4">
            <h4 className="text-lg font-semibold">Stay Updated with Latest Exam News</h4>
            <p className="text-background/80 text-sm">
              Subscribe to our newsletter for current affairs, exam notifications, and study tips
            </p>
            <div className="flex max-w-md mx-auto gap-2">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-md bg-background/10 border border-background/20 text-background placeholder:text-background/60 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button variant="hero" size="sm">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/80">
            <div>
              © 2024 Kingmakers School of Banking. All rights reserved.
            </div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-background transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-background transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-background transition-colors">Refund Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;