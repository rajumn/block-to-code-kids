import { PlayfulButton } from "@/components/ui/playful-button";
import { LucideIcon } from "lucide-react";

interface NavigationCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  gradient: "primary" | "secondary" | "accent" | "rainbow";
  onClick?: () => void;
}

export const NavigationCard = ({ title, description, icon: Icon, gradient, onClick }: NavigationCardProps) => {
  const gradientClasses = {
    primary: "bg-gradient-primary",
    secondary: "bg-gradient-secondary", 
    accent: "bg-gradient-accent",
    rainbow: "bg-gradient-rainbow"
  };

  return (
    <div className="group cursor-pointer" onClick={onClick}>
      <div className="bg-card rounded-super p-6 shadow-soft hover-lift transition-bounce">
        <div className={`w-16 h-16 rounded-playful ${gradientClasses[gradient]} flex items-center justify-center mb-4 group-hover:animate-wiggle`}>
          <Icon className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-card text-card-foreground mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4 leading-relaxed">{description}</p>
        <PlayfulButton variant={gradient === "rainbow" ? "rainbow" : gradient} size="sm" className="w-full">
          Get Started
        </PlayfulButton>
      </div>
    </div>
  );
};