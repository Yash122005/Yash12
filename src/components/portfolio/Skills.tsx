import { Card } from "@/components/ui/card";

export function Skills() {
  const skillCategories = [
    {
      title: "Frontend Technologies",
      color: "neon-blue",
      skills: [
        { name: "HTML5", icon: "🌐", level: 90 },
        { name: "CSS3", icon: "🎨", level: 85 },
        { name: "JavaScript", icon: "⚡", level: 80 },
        { name: "React", icon: "⚛️", level: 80 },
        { name: "Tailwind CSS", icon: "💨", level: 85 },
        { name: "Bootstrap", icon: "🅱️", level: 80 },
        { name: "jQuery", icon: "📚", level: 75 }
      ]
    },
    {
      title: "Development Tools",
      color: "neon-purple",
      skills: [
        { name: "Git", icon: "🔀", level: 85 },
        { name: "GitHub", icon: "🐙", level: 85 },
        { name: "Express.js", icon: "🚀", level: 70 },
        { name: "DOM", icon: "🌳", level: 80 },
        { name: "Web Development", icon: "🌍", level: 85 },
        { name: "GSAP", icon: "✨", level: 75 }
      ]
    },
    {
      title: "Programming & Hardware",
      color: "neon-cyan",
      skills: [
        { name: "C", icon: "⚙️", level: 80 },
        { name: "C++", icon: "🔧", level: 85 },
        { name: "Arduino IDE", icon: "🤖", level: 70 },
        { name: "Embedded Systems", icon: "🔌", level: 65 }
      ]
    },
    {
      title: "Design & Creative",
      color: "accent",
      skills: [
        { name: "Canva", icon: "🎨", level: 80 },
        { name: "UI/UX Design", icon: "✏️", level: 75 },
        { name: "Responsive Design", icon: "📱", level: 85 }
      ]
    }
  ];

  const getColorClass = (color: string) => {
    switch (color) {
      case "neon-blue": return "text-neon-blue border-neon-blue/30";
      case "neon-purple": return "text-neon-purple border-neon-purple/30";
      case "neon-cyan": return "text-neon-cyan border-neon-cyan/30";
      case "accent": return "text-accent border-accent/30";
      default: return "text-neon-blue border-neon-blue/30";
    }
  };

  const getGlowClass = (color: string) => {
    switch (color) {
      case "neon-blue": return "glow-blue";
      case "neon-purple": return "glow-purple";
      default: return "glow-blue";
    }
  };

  return (
    <section id="skills" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-orbitron text-4xl md:text-6xl font-bold mb-4">
            <span className="text-gradient-primary">Skills</span> & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-6 text-lg max-w-2xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks that I use to build amazing digital experiences.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={category.title}
              className="animate-fade-in-up"
              style={{ animationDelay: `${categoryIndex * 0.2}s` }}
            >
              <Card className={`bg-card/30 backdrop-blur-sm border ${getColorClass(category.color)} p-6 h-full hover-float ${categoryIndex % 2 === 0 ? getGlowClass(category.color) : ''}`}>
                <h3 className={`font-orbitron text-xl font-bold mb-6 ${getColorClass(category.color).split(' ')[0]}`}>
                  {category.title}
                </h3>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skill.name} 
                      className="group"
                      style={{ animationDelay: `${(categoryIndex * 0.2) + (skillIndex * 0.1)}s` }}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-3">
                          <span className="text-2xl">{skill.icon}</span>
                          <span className="font-medium text-foreground">{skill.name}</span>
                        </div>
                        <span className={`text-sm font-orbitron font-bold ${getColorClass(category.color).split(' ')[0]}`}>
                          {skill.level}%
                        </span>
                      </div>
                      
                      {/* Progress Bar */}
                      <div className="w-full bg-muted/30 rounded-full h-2 overflow-hidden">
                        <div 
                          className={`h-full rounded-full transition-all duration-1000 ease-out ${
                            category.color === 'neon-blue' ? 'bg-gradient-to-r from-neon-blue to-neon-cyan' :
                            category.color === 'neon-purple' ? 'bg-gradient-to-r from-neon-purple to-accent' :
                            category.color === 'neon-cyan' ? 'bg-gradient-to-r from-neon-cyan to-neon-blue' :
                            'bg-gradient-to-r from-accent to-neon-purple'
                          }`}
                          style={{ 
                            width: `${skill.level}%`,
                            animationDelay: `${(categoryIndex * 0.2) + (skillIndex * 0.1) + 0.5}s`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <Card className="bg-card/20 backdrop-blur-sm border-primary/20 p-8 max-w-3xl mx-auto">
            <h3 className="font-orbitron text-2xl font-bold text-neon-blue mb-4">
              Always Learning, Always Growing
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Technology is constantly evolving, and so am I. I'm always exploring new frameworks, 
              tools, and methodologies to stay at the forefront of web development. My goal is to 
              write clean, maintainable code that solves real-world problems while delivering 
              exceptional user experiences.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}