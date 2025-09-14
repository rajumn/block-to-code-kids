import { NavigationCard } from "./NavigationCard";
import { Code, BookOpen, Trophy, Folder, Users, Settings } from "lucide-react";

export const Dashboard = () => {
  const navigationCards = [
    {
      title: "Start Coding",
      description: "Jump into our fun coding environment with blocks or text!",
      icon: Code,
      gradient: "primary" as const,
    },
    {
      title: "Learn & Play", 
      description: "Interactive lessons designed for your age group",
      icon: BookOpen,
      gradient: "secondary" as const,
    },
    {
      title: "Challenges",
      description: "Fun coding puzzles and games with rewards",
      icon: Trophy,
      gradient: "accent" as const,
    },
    {
      title: "My Projects",
      description: "Save, edit and share your awesome creations",
      icon: Folder,
      gradient: "primary" as const,
    },
    {
      title: "Code with Friends",
      description: "Safe collaborative coding environment",
      icon: Users,
      gradient: "secondary" as const,
    },
    {
      title: "Parent Corner",
      description: "Tips and guides for parents and teachers", 
      icon: Settings,
      gradient: "rainbow" as const,
    },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-section text-foreground mb-4">
            Choose Your Adventure!
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Pick what you'd like to do today. Every option is designed to make coding fun and easy to learn!
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {navigationCards.map((card, index) => (
            <NavigationCard
              key={index}
              title={card.title}
              description={card.description}
              icon={card.icon}
              gradient={card.gradient}
              onClick={() => {
                // TODO: Add navigation logic
                console.log(`Navigate to ${card.title}`);
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};