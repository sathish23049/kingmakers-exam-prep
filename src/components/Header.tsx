import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Menu } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-background shadow-soft sticky top-0 z-50">
      <div className="container mx-auto px-4">
        {/* Top Bar */}
        <div className="hidden md:flex items-center justify-between py-2 border-b border-border">
          <div className="flex items-center space-x-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>+91 9876543210</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span>info@kingmakersbanking.com</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>Chennai • Salem • Madurai • Trichy</span>
            </div>
          </div>
          <Button variant="cta" size="sm">
            Free Demo Class
          </Button>
        </div>

        {/* Main Navigation */}
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent">
              Kingmakers School of Banking
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#about" className="text-foreground hover:text-primary transition-colors">About</a>
            <a href="#courses" className="text-foreground hover:text-primary transition-colors">Courses</a>
            <a href="#features" className="text-foreground hover:text-primary transition-colors">Why Choose Us</a>
            <a href="#faculty" className="text-foreground hover:text-primary transition-colors">Faculty</a>
            <a href="#success" className="text-foreground hover:text-primary transition-colors">Success Stories</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm" className="hidden md:flex">
              Login
            </Button>
            <Button variant="hero" size="sm">
              Enroll Now
            </Button>
            
            {/* Mobile Menu Button */}
            <button
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              <a href="#about" className="text-foreground hover:text-primary transition-colors">About</a>
              <a href="#courses" className="text-foreground hover:text-primary transition-colors">Courses</a>
              <a href="#features" className="text-foreground hover:text-primary transition-colors">Why Choose Us</a>
              <a href="#faculty" className="text-foreground hover:text-primary transition-colors">Faculty</a>
              <a href="#success" className="text-foreground hover:text-primary transition-colors">Success Stories</a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;