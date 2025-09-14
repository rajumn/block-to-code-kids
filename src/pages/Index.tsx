import { HeroSection } from "@/components/HeroSection";
import { Dashboard } from "@/components/Dashboard";
import { SimpleIDE } from "@/components/SimpleIDE";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <Dashboard />
      <SimpleIDE />
    </div>
  );
};

export default Index;