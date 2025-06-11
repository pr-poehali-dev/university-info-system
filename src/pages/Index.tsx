import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import FacultySection from "@/components/FacultySection";
import DepartmentInfo from "@/components/DepartmentInfo";
import ContactInfo from "@/components/ContactInfo";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <FacultySection />
      <DepartmentInfo />
      <ContactInfo />
    </div>
  );
};

export default Index;
