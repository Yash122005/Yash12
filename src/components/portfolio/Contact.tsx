import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Github, Linkedin, Mail, MapPin, Send, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple form validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon!",
    });

    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com/yash122005",
      color: "neon-blue",
      description: "Check out my repositories"
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://www.linkedin.com/in/yash-gupta-8a8594283/",
      color: "neon-purple",
      description: "Let's connect professionally"
    },
    {
      name: "Email",
      icon: Mail,
      href: "mailto:yashvinodgupta6@gmail.com",
      color: "neon-cyan",
      description: "yashvinodgupta6@gmail.com"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-orbitron text-4xl md:text-6xl font-bold mb-4">
            <span className="text-gradient-primary">Get In</span> Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-6 text-lg max-w-2xl mx-auto">
            Ready to collaborate on your next project? Let's create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="animate-slide-in-left">
            <Card className="bg-card/30 backdrop-blur-sm border-primary/20 glow-blue">
              <CardContent className="p-8">
                <h3 className="font-orbitron text-2xl font-bold text-neon-blue mb-6">
                  Send a Message
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-foreground font-medium">
                        Name *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="bg-input/50 border-primary/30 focus:border-primary glow-blue"
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-foreground font-medium">
                        Email *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="bg-input/50 border-primary/30 focus:border-primary glow-blue"
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-foreground font-medium">
                      Subject
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="bg-input/50 border-primary/30 focus:border-primary glow-blue"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-foreground font-medium">
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="bg-input/50 border-primary/30 focus:border-primary glow-blue min-h-[120px] resize-none"
                      placeholder="Tell me about your project or idea..."
                      required
                    />
                  </div>

                  <Button 
                    type="submit"
                    className="w-full bg-gradient-primary hover:shadow-glow-blue transition-all duration-300 font-orbitron font-bold text-lg py-3"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="animate-slide-in-right space-y-8">
            {/* Quick Contact */}
            <Card className="bg-card/30 backdrop-blur-sm border-secondary/20 glow-purple">
              <CardContent className="p-8">
                <h3 className="font-orbitron text-2xl font-bold text-neon-purple mb-6">
                  Quick Contact
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 rounded-full bg-primary/10 border border-primary/30">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="text-foreground font-medium text-sm sm:text-base break-all">yashvinodgupta6@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="p-3 rounded-full bg-secondary/10 border border-secondary/30">
                      <Phone className="h-5 w-5 text-secondary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Phone</p>
                      <p className="text-foreground font-medium">+91 7607270504</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="p-3 rounded-full bg-accent/10 border border-accent/30">
                      <MapPin className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Location</p>
                      <p className="text-foreground font-medium">Ranchi, Jharkhand, India</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <div className="space-y-4">
              <h3 className="font-orbitron text-xl font-bold text-neon-cyan mb-4">
                Connect With Me
              </h3>
              
              {socialLinks.map((social, index) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group"
                >
                  <Card className={`bg-card/30 backdrop-blur-sm border-${social.color}/20 hover-float transition-all duration-300 group-hover:border-${social.color}`}>
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className={`p-3 rounded-full bg-${social.color}/10 border border-${social.color}/30 group-hover:bg-${social.color}/20 transition-colors`}>
                          <social.icon className={`h-6 w-6 text-${social.color}`} />
                        </div>
                        <div>
                          <h4 className="font-orbitron font-bold text-foreground group-hover:text-neon-blue transition-colors">
                            {social.name}
                          </h4>
                          <p className="text-muted-foreground text-sm">
                            {social.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <Card className="bg-card/20 backdrop-blur-sm border-primary/20 p-8 max-w-3xl mx-auto">
            <h3 className="font-orbitron text-2xl font-bold text-gradient-primary mb-4">
              Let's Build Something Extraordinary
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Whether you have a project in mind, need technical consultation, or just want to chat about technology, 
              I'm always excited to connect with fellow developers and innovators.
            </p>
            <a href = "https://wa.me/7607270504" 
              size="lg"
              className="bg-gradient-secondary hover:shadow-glow-purple transition-all duration-300 font-orbitron font-bold px-8 py-4"
            >
              Start a Conversation
            </a>
          </Card>
        </div>
      </div>
    </section>
  );
}
