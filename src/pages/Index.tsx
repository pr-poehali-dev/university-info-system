import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import LabsList from "@/components/LabsList";
import TheorySection from "@/components/TheorySection";
import ResultsSection from "@/components/ResultsSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <LabsList />
      <TheorySection />
      <ResultsSection />
    </div>
  );
};

export default Index;
