import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Eye } from "lucide-react";

export function Projects() {
  const projects = [
    {
      title: "User-Management-app ",
      description: "This is a simple web application built using Node.js, Express.js, and MongoDB that allows you to perform CRUD operations (Create, Read, Update, Delete) on user data. It serves as a foundational project to understand backend development and database interaction using the MERN stack (without React).",
      image: "https://plus.unsplash.com/premium_photo-1720589103335-43589b70bd20?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fG1hbmFnZW1lbnQlMjBzb2Z0d2FyZXxlbnwwfHwwfHx8MA%3D%3D",
      tech: ["Node.js", "Express.js", "EJS (Embedded JavaScript)", "MongoDB"],
      liveUrl: "https://user-management-app-1-51sg.onrender.com/",
      githubUrl: "https://github.com/Yash122005/user-management-app",
      category: "web"
    },
    {
      title: "Text-File-Manager",
      description: "Text File Manager is a simple Node.js application built with Express and EJS that allows users to create, view, edit, and delete text files directly from the browser.",
      image: "https://plus.unsplash.com/premium_photo-1677402408071-232d1c3c3787?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmlsZSUyMG1hbmFnZW1lbnR8ZW58MHx8MHx8fDA%3D",
      tech: ["Node.js", "Express.js", "EJS (Embedded JavaScript)", "File System (fs module)"],
      liveUrl: "https://text-file-manager.onrender.com/",
      githubUrl: "https://github.com/Yash122005/Text-File-Manager",
      category: "web"
    },
    {
      title: "Value Education Cell BIT",
      description: "A responsive website built for the Value Education Cell of BIT Mesra. Features modern design, smooth animations, and optimized performance.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop&crop=top",
      tech: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
      liveUrl: "https://yash122005.github.io/Value-Education-Cell/",
      githubUrl: "#",
      category: "web"
    },
    {
      title: "JS Portfolio",
      description: "An interactive portfolio showcasing JavaScript skills with dynamic animations and modern ES6+ features.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop&crop=center",
      tech: ["JavaScript", "GSAP", "CSS3", "DOM Manipulation"],
      liveUrl: "https://yash122005.github.io/Yash-Gupta/",
      githubUrl: "#",
      category: "javascript"
    },
    {
      title: "Currency Converter",
      description: "A real-time currency converter built with React, featuring live exchange rates and intuitive user interface for seamless currency conversion.",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=400&fit=crop&crop=center",
      tech: ["React", "JavaScript", "API Integration", "CSS3"],
      liveUrl: "https://currency-convertor-tau-livid.vercel.app/",
      githubUrl: "https://github.com/Yash122005/Currency-Convertor/tree/main/src",
      category: "javascript"
    },
    {
      title: "Speech To Text Converter",
      description: "A Speech-to-Text Converter Website is an online platform that converts spoken words into written text in real time using speech recognition technology",
      image: "https://plus.unsplash.com/premium_photo-1681488183639-f38511a647ef?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3BlZWNoJTIwdG8lMjB0ZXh0fGVufDB8fDB8fHww",
      tech: ["NPM package", "node", "JavaScript", "Express"],
      liveUrl: "https://speech-to-text-gamma-beryl.vercel.app/",
      githubUrl: "https://github.com/Yash122005/speech-to-text",
      category: "software"
    }
  ];

  const categories = [
    { name: "All", value: "all", color: "neon-blue" },
    { name: "Web", value: "web", color: "neon-purple" },
    { name: "JavaScript", value: "javascript", color: "neon-cyan" },
    { name: "Hardware", value: "hardware", color: "accent" }
  ];

  return (
    <section id="projects" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-orbitron text-4xl md:text-6xl font-bold mb-4">
            <span className="text-gradient-primary">Featured</span> Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-6 text-lg max-w-2xl mx-auto">
            A showcase of my latest work, demonstrating expertise in modern web technologies and problem-solving skills.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <Button
              key={category.value}
              variant="outline"
              className={`
                border-${category.color}/50 text-${category.color} 
                hover:bg-${category.color}/10 hover:border-${category.color}
                transition-all duration-300 font-orbitron font-semibold
                ${index === 0 ? 'bg-primary/10 border-primary' : ''}
              `}
            >
              {category.name}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className="animate-fade-in-up group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <Card className="bg-card/30 backdrop-blur-sm border-primary/20 overflow-hidden hover-float h-full">
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Overlay Buttons */}
                  <div className="absolute inset-0 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button size="sm" className="bg-primary/90 hover:bg-primary glow-blue">
                      <Eye className="h-4 w-4 mr-2" />
                      Preview
                    </Button>
                    <Button size="sm" variant="outline" className="border-secondary/50 text-secondary hover:bg-secondary/10">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Button>
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="font-orbitron text-xl font-bold text-neon-blue mb-3 group-hover:text-neon-cyan transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary border border-primary/20 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3">
                    <Button 
                      size="sm" 
                      className="flex-1 bg-gradient-primary hover:shadow-glow-blue transition-all duration-300"
                      asChild
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                    
                    <Button 
                      size="sm" 
                      variant="outline"
                      className="border-secondary/50 text-secondary hover:bg-secondary/10 hover:border-secondary"
                      asChild
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* More Projects Button */}
        <div className="text-center mt-12">
          <Button 
            size="lg"
            variant="outline"
            className="border-primary/50 text-primary hover:bg-primary/10 hover:border-primary font-orbitron font-bold px-8 py-4"
          >
            View More Projects
            <ExternalLink className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
