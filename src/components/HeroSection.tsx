import { PlayfulButton } from "@/components/ui/playful-button";
import { Code, Sparkles, Gamepad2 } from "lucide-react";
import heroImage from "@/assets/hero-coding.jpg";

export const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-hero min-h-[60vh] flex items-center">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
              <Sparkles className="w-6 h-6 text-yellow-300 animate-pulse-slow" />
              <span className="text-white/90 font-medium">Welcome to CodePlayground</span>
              <Sparkles className="w-6 h-6 text-yellow-300 animate-pulse-slow" />
            </div>
            
            <h1 className="text-hero text-white mb-6 leading-tight">
              Let's Play with 
              <span className="inline-flex items-center gap-2">
                <Code className="w-12 h-12 lg:w-16 lg:h-16 text-yellow-300 animate-bounce-gentle" />
                Code!
              </span>
            </h1>
            
            <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0">
              Learn programming through fun games, colorful blocks, and creative projects. 
              Perfect for young coders aged 7-15!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <PlayfulButton variant="hero" size="xl" className="group">
                <Gamepad2 className="w-5 h-5 group-hover:animate-wiggle" />
                Start Coding Now
              </PlayfulButton>
              <PlayfulButton variant="outline" size="xl" className="bg-white/10 text-white border-white/30 hover:bg-white/20">
                Watch Demo
              </PlayfulButton>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative rounded-super overflow-hidden shadow-glow">
              <img 
                src={heroImage} 
                alt="Kids coding playground with colorful blocks and friendly robot"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-500/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-10 right-10 w-20 h-20 bg-yellow-300/20 rounded-full animate-bounce-gentle"></div>
      <div className="absolute bottom-20 left-10 w-16 h-16 bg-teal-300/20 rounded-full animate-pulse-slow"></div>
    </section>
  );
};