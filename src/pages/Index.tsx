import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import CoursesSection from "@/components/CoursesSection";
import FeaturesSection from "@/components/FeaturesSection";
import FacultySection from "@/components/FacultySection";
import SuccessSection from "@/components/SuccessSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <AboutSection />
      <CoursesSection />
      <FeaturesSection />
      <FacultySection />
      <SuccessSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
