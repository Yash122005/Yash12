import { Card } from "@/components/ui/card";

export function About() {
  return (
    <section id="about" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-orbitron text-4xl md:text-6xl font-bold mb-4">
            <span className="text-gradient-primary">About</span> Me
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="relative animate-slide-in-left">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-primary rounded-3xl blur-lg opacity-75 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative bg-card rounded-3xl p-8 border border-primary/20 overflow-hidden">
                <div className="aspect-square bg-gradient-secondary rounded-2xl flex items-center justify-center text-8xl font-orbitron font-black text-primary-foreground">
                  YG
                </div>
                <div className="absolute top-4 right-4 w-4 h-4 bg-neon-blue rounded-full animate-pulse"></div>
                <div className="absolute bottom-4 left-4 w-3 h-3 bg-neon-purple rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
              </div>
            </div>
          </div>

          {/* About Content */}
          <div className="space-y-6 animate-slide-in-right">
            <Card className="bg-card/30 backdrop-blur-sm border-primary/20 p-8 hover-float">
              <h3 className="font-orbitron text-2xl font-bold text-neon-blue mb-4">
                My Journey
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                I'm a passionate <span className="text-neon-blue font-semibold">Front-End Developer</span> currently pursuing 
                a Bachelor of Technology in <span className="text-neon-purple font-semibold">Electronics and Communication Engineering</span> 
                at Birla Institute of Technology, Mesra, Ranchi.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My journey in tech is driven by a love for creating clean, responsive, and accessible web interfaces. 
                I believe in crafting code with precision and creativity, always focusing on solving real problems 
                through thoughtful development.
              </p>
            </Card>

            <Card className="bg-card/30 backdrop-blur-sm border-secondary/20 p-8 hover-float glow-purple">
              <h3 className="font-orbitron text-2xl font-bold text-neon-purple mb-4">
                Current Focus
              </h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-neon-blue rounded-full"></div>
                  <span className="text-foreground">Learning microcontrollers and embedded systems</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-neon-purple rounded-full"></div>
                  <span className="text-foreground">Mastering full-stack web development</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-neon-cyan rounded-full"></div>
                  <span className="text-foreground">Building scalable and maintainable applications</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-neon-blue rounded-full"></div>
                  <span className="text-foreground">Exploring modern animation libraries and techniques</span>
                </div>
              </div>
            </Card>

            <Card className="bg-card/30 backdrop-blur-sm border-accent/20 p-8 hover-float">
              <h3 className="font-orbitron text-2xl font-bold text-neon-cyan mb-4">
                Education
              </h3>
              <div className="space-y-2">
                <h4 className="font-semibold text-lg text-foreground">Birla Institute of Technology, Mesra</h4>
                <p className="text-neon-blue font-medium">Bachelor of Technology - Electronics and Communication Engineering</p>
                <p className="text-muted-foreground">Currently in 1st year • Ranchi, India</p>
                <p className="text-sm text-muted-foreground mt-3">
                  Building a strong foundation in electronics, programming, and problem-solving with a focus on C++ and modern web technologies.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}