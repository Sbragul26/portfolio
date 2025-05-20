import { useState, useEffect, useRef } from "react";
import Section from "./Section";
import SectionHeading from "./SectionHeading";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Code, Server, Shield, Terminal, GitBranch, BarChart3 } from "lucide-react";

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Technical skills organized by category
  const skillCategories = [
    {
      name: "Software Development",
      icon: <Code className="h-5 w-5 text-purple-400" />,
      skills: [
        { name: "Android Studio", level: 90, color: "bg-yellow-400" },
        { name: "Python", level: 65, color: "bg-blue-500" },
        { name: "C++", level: 60, color: "bg-blue-700" },
        { name: "Java", level: 85, color: "bg-orange-600" }
      ]
    },
    {
      name: "Web Technologies",
      icon: <Server className="h-5 w-5 text-cyan-400" />,
      skills: [
        { name: "React", level: 65, color: "bg-cyan-400" },
        { name: "HTML/CSS", level: 95, color: "bg-orange-400" },
        { name: "Next.js", level: 45, color: "bg-green-400" },
        { name: "Tailwind CSS", level: 75, color: "bg-sky-400" }
      ]
    },
    {
      name: "Cybersecurity",
      icon: <Shield className="h-5 w-5 text-red-400" />,
      skills: [
        { name: "Network Security", level: 70, color: "bg-red-500" },
        { name: "Penetration Testing", level: 40, color: "bg-red-600" },
        { name: "Cryptography", level: 35, color: "bg-purple-600" }
      ]
    },
    {
      name: "DevOps & Tools",
      icon: <Terminal className="h-5 w-5 text-green-400" />,
      skills: [
        { name: "Linux", level: 90, color: "bg-yellow-600" },
        { name: "Git", level: 95, color: "bg-red-500" },
        { name: "Docker", level: 95, color: "bg-blue-400" },
        { name : "Kubernets", level: 30, color :"bg-purple-400"}
      ]
    },
  ];

  // Technologies tags showcase
  const technologiesList = [
    { name: "JavaScript", color: "bg-yellow-500/20 text-yellow-300 border-yellow-500/40" },
    { name: "React", color: "bg-blue-500/20 text-blue-300 border-blue-500/40" },
    { name: "Python", color: "bg-blue-600/20 text-blue-300 border-blue-600/40" },
    { name: "Git", color: "bg-red-500/20 text-red-300 border-red-500/40" },
    { name: "Linux", color: "bg-yellow-600/20 text-yellow-300 border-yellow-600/40" },
    { name: "SqLite", color: "bg-green-600/20 text-green-300 border-green-600/40" },
    { name: "Docker", color: "bg-blue-400/20 text-blue-300 border-blue-400/40" },
    { name: "Tailwind", color: "bg-cyan-500/20 text-cyan-300 border-cyan-500/40" },
    { name: "Next.js", color: "bg-black/20 text-green-400 border-green-500/40" },
    { name: "Bash Scripting", color: "bg-gray-500/20 text-gray-300 border-gray-500/40" },
    { name: "C++", color: "bg-orange-400/20 text-orange-300 border-orange-400/40" },
    { name: "Cybersecurity", color: "bg-red-500/20 text-red-300 border-red-500/40" }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <Section id="about" className="bg-gradient-to-b from-accent/5 to-background">
      <div ref={sectionRef} className="container mx-auto">
        <SectionHeading 
          title="About Me" 
          subtitle="Exploring the Intersection of Tech & Problem Solving"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* About Text */}
          <div 
            className={`lg:col-span-1 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="bg-card/30 backdrop-blur-sm p-6 rounded-lg border border-border/50 h-full">
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2">
                  <div className="h-10 w-1 bg-gradient-to-b from-primary to-purple-500 rounded-full"></div>
                  <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">Who I Am</h3>
                </div>
                <div className="w-full h-px bg-gradient-to-r from-primary/50 to-transparent"></div>
              </div>
              
              <div className="space-y-4 text-muted-foreground">
                <p className="first-letter:text-3xl first-letter:font-bold first-letter:mr-1 first-letter:float-left first-letter:text-primary">
                  I'm a tech enthusiast who loves exploring software development, web technologies, and cybersecurity. I’m always curious and enjoy learning new things to stay ahead in the tech world.
                </p>
                <p>
                  I enjoy building responsive, user-friendly applications using modern front-end and back-end frameworks. Alongside development, I prioritize security and have a strong grasp of Linux systems, ensuring my projects are not just efficient but also safe and reliable.
                </p>
                <p>
                  I enjoy solving problems, working with passionate people, and creating meaningful tech solutions that make a real difference.
                </p>
              </div>
              
              <div className="mt-6">
                <h4 className="text-xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500 flex items-center gap-2">
                  <GitBranch className="h-5 w-5" />
                  Education
                </h4>
                <div className="space-y-4">
                  <div 
                    className="border-l-2 border-primary pl-4 py-2 transition-all duration-300 hover:pl-6 hover:border-l-4 bg-card/30 rounded-r-lg"
                  >
                    <h4 className="font-medium">Master of Science (MS)</h4>
                    <h4 className="font-medium">Decision and Computing Sciences</h4>
                    <p className="text-sm text-muted-foreground">Coimbatore Institute of Technology (CIT)</p>
                    <p className="text-sm text-muted-foreground">2023-2028</p>
                    <p className="text-xs text-muted-foreground mt-1">Specialized in AIML & Software Development</p>
                  </div>
                  {/* Add more education items if needed */}
                </div>
              </div>
            </div>
          </div>
          
          {/* Technologies & Skills */}
          <div 
            className={`lg:col-span-2 transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            {/* Technology tags cloud */}
            <div className="bg-card/30 backdrop-blur-sm p-6 rounded-lg border border-border/50 mb-6">
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2">
                  <div className="h-10 w-1 bg-gradient-to-b from-primary to-purple-500 rounded-full"></div>
                  <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">Tech Stack</h3>
                </div>
                <div className="w-full h-px bg-gradient-to-r from-primary/50 to-transparent"></div>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {technologiesList.map((tech, index) => (
                  <Badge 
                    key={index} 
                    className={`${tech.color} px-3 py-1.5 border transition-all duration-300 hover:scale-105 text-sm ${
                      isVisible ? 'animate-fadeIn' : 'opacity-0'
                    }`}
                    style={{ animationDelay: `${index * 50}ms` }}
                    variant="outline"
                  >
                    {tech.name}
                  </Badge>
                ))}
              </div>
            </div>
            
            {/* Skill categories tabs */}
            <div className="bg-card/30 backdrop-blur-sm p-6 rounded-lg border border-border/50">
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2">
                  <div className="h-10 w-1 bg-gradient-to-b from-primary to-purple-500 rounded-full"></div>
                  <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">Professional Skills</h3>
                </div>
                <div className="w-full h-px bg-gradient-to-r from-primary/50 to-transparent"></div>
              </div>
              
              <Tabs defaultValue={skillCategories[0].name.toLowerCase().replace(/\s+/g, '-')} className="w-full">
                <TabsList className="mb-6 w-full flex flex-wrap justify-center overflow-x-auto">
                  {skillCategories.map((category, idx) => (
                    <TabsTrigger 
                      key={idx} 
                      value={category.name.toLowerCase().replace(/\s+/g, '-')}
                      className="flex items-center gap-2"
                    >
                      {category.icon}
                      <span>{category.name}</span>
                    </TabsTrigger>
                  ))}
                </TabsList>
                
                {skillCategories.map((category, idx) => (
                  <TabsContent 
                    key={idx} 
                    value={category.name.toLowerCase().replace(/\s+/g, '-')} 
                    className="space-y-5 mt-2"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {category.skills.map((skill, index) => (
                        <HoverCard key={index}>
                          <HoverCardTrigger asChild>
                            <div className="space-y-2 cursor-pointer">
                              <div className="flex justify-between items-center">
                                <span className="font-medium">{skill.name}</span>
                                <span className="text-xs font-medium text-muted-foreground">{skill.level}%</span>
                              </div>
                              <div className="h-2.5 w-full bg-card rounded-full overflow-hidden border border-border/30">
                                <div 
                                  className={`h-full ${skill.color} transition-all duration-1000 ease-out`} 
                                  style={{ 
                                    width: isVisible ? `${skill.level}%` : '0%',
                                    transitionDelay: `${index * 100 + 300}ms`
                                  }}
                                ></div>
                              </div>
                            </div>
                          </HoverCardTrigger>
                          <HoverCardContent className="w-auto">
                            <div className="text-center">
                              <p className="font-medium">{skill.name}</p>
                              <div className="w-full bg-card/50 h-4 rounded-full mt-2 overflow-hidden border border-border/30">
                                <div 
                                  className={`h-full ${skill.color} text-xs flex items-center justify-center font-medium`}
                                  style={{ width: `${skill.level}%` }}
                                >
                                  {skill.level}%
                                </div>
                              </div>
                            </div>
                          </HoverCardContent>
                        </HoverCard>
                      ))}
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default AboutSection;