import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail, Code } from "lucide-react";

export function Hero() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen relative particle-bg flex items-center justify-center overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-blue/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-neon-purple/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-neon-cyan/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Main Title */}
        <div className="animate-fade-in-up">
          <h1 className="font-orbitron text-6xl md:text-8xl font-black mb-6">
            <span className="text-gradient-primary block">YASH</span>
            <span className="text-foreground block">GUPTA</span>
          </h1>
        </div>

        {/* Subtitle */}
        <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-light">
            Web Developer × Tech Enthusiast × Embedded Systems Learner
          </p>
        </div>

        {/* Tagline */}
        <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <div className="bg-card/20 backdrop-blur-sm border border-primary/20 rounded-2xl p-6 mb-8 glow-blue">
            <p className="text-lg md:text-xl text-neon-blue font-medium">
              "Creating with purpose, building for impact."
            </p>
            <p className="text-sm text-muted-foreground mt-2">- Crafting Code with Precision and Creativity</p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="animate-fade-in-up flex flex-col sm:flex-row gap-4 justify-center mb-12" style={{ animationDelay: '0.6s' }}>
          <Button 
            onClick={scrollToProjects}
            size="lg" 
            className="bg-gradient-primary hover:shadow-glow-blue transition-all duration-300 transform hover:scale-105 font-orbitron font-bold text-lg px-8 py-4"
          >
            See My Work
            <ArrowDown className="ml-2 h-5 w-5 animate-bounce" />
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary/50 text-primary hover:bg-primary/10 hover:shadow-glow-blue transition-all duration-300 transform hover:scale-105 font-orbitron font-bold text-lg px-8 py-4"
          >
            Download Resume
          </Button>
        </div>

        {/* Social Links */}
        <div className="animate-fade-in-up flex justify-center space-x-6" style={{ animationDelay: '0.8s' }}>
          <a 
            href="https://github.com/yash122005" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative p-3 rounded-full border border-primary/30 hover:border-primary transition-all duration-300 hover-float"
          >
            <Github className="h-6 w-6 text-primary group-hover:text-neon-blue transition-colors" />
            <div className="absolute inset-0 rounded-full bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity glow-blue"></div>
          </a>
          
          <a 
            href="https://www.linkedin.com/in/yash-gupta-8a8594283/" 
            target="_blank"
            rel="noopener noreferrer"
            className="group relative p-3 rounded-full border border-secondary/30 hover:border-secondary transition-all duration-300 hover-float"
          >
            <Linkedin className="h-6 w-6 text-secondary group-hover:text-neon-purple transition-colors" />
            <div className="absolute inset-0 rounded-full bg-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity glow-purple"></div>
          </a>
          
          <a 
            href="#contact" 
            className="group relative p-3 rounded-full border border-accent/30 hover:border-accent transition-all duration-300 hover-float"
          >
            <Mail className="h-6 w-6 text-accent group-hover:text-neon-cyan transition-colors" />
            <div className="absolute inset-0 rounded-full bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </a>
          
          <a 
            href="https://leetcode.com/u/Yash_Gupta1206/" 
            target="_blank"
            rel="noopener noreferrer"
            className="group relative p-3 rounded-full border border-primary/30 hover:border-primary transition-all duration-300 hover-float"
          >
            <Code className="h-6 w-6 text-primary group-hover:text-neon-blue transition-colors" />
            <div className="absolute inset-0 rounded-full bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity glow-blue"></div>
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}