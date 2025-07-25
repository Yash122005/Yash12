import { Button } from "@/components/ui/button";
import { ArrowUp, Github, Linkedin, Mail, Heart, Code } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "https://github.com/yash122005", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/yash-gupta-8a8594283/", label: "LinkedIn" },
    { icon: Mail, href: "mailto:yashvinodgupta6@gmail.com", label: "Email" }
  ];

  return (
    <footer className="relative bg-navy-dark/50 border-t border-primary/10">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-neon-blue/20 rounded-full blur-2xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-neon-purple/20 rounded-full blur-2xl animate-float" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <h3 className="font-orbitron text-2xl font-black text-gradient-primary mb-4">
              Yash Gupta
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Crafting digital experiences with precision, creativity, and a passion for clean code. 
              Always learning, always building.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="font-orbitron text-lg font-bold text-neon-blue mb-4">
              Quick Links
            </h4>
            <div className="flex flex-col space-y-2">
              {["About", "Skills", "Projects", "Contact"].map((link) => (
                <button
                  key={link}
                  onClick={() => {
                    const element = document.getElementById(link.toLowerCase());
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-right">
            <h4 className="font-orbitron text-lg font-bold text-neon-purple mb-4">
              Get In Touch
            </h4>
            <div className="space-y-2 text-muted-foreground">
              <p className="text-sm break-all">yashvinodgupta6@gmail.com</p>
              <p>Ranchi, Jharkhand, India</p>
              <p className="text-sm">
                <span className="text-neon-cyan">Birla Institute of Technology, Mesra</span>
              </p>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-8">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-3 rounded-full border border-primary/30 hover:border-primary transition-all duration-300 hover-float"
              aria-label={social.label}
            >
              <social.icon className="h-5 w-5 text-primary group-hover:text-neon-blue transition-colors" />
              <div className="absolute inset-0 rounded-full bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity glow-blue"></div>
            </a>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-muted-foreground">
              <span>© {currentYear} Yash Gupta. Made with</span>
              <Heart className="h-4 w-4 text-red-500 animate-pulse" />
              <span>and</span>
              <Code className="h-4 w-4 text-neon-blue" />
            </div>

            <div className="flex items-center space-x-4">
              <span className="text-xs text-muted-foreground font-orbitron">
                Built with React + Tailwind CSS
              </span>
              
              {/* Scroll to Top Button */}
              <Button
                onClick={scrollToTop}
                size="sm"
                className="bg-primary/20 hover:bg-primary/30 border border-primary/30 hover:border-primary transition-all duration-300 glow-blue"
              >
                <ArrowUp className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute bottom-4 left-4 w-2 h-2 bg-neon-blue rounded-full animate-pulse"></div>
      <div className="absolute top-4 right-4 w-1 h-1 bg-neon-purple rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-1/2 left-8 w-1.5 h-1.5 bg-neon-cyan rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
    </footer>
  );
}