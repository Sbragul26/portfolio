import { Button } from "@/components/ui/button";
import { ArrowRight, MousePointer, Github, Linkedin, Mail, FileText } from "lucide-react";
import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import ResumePreview from "./ResumePreview";

const HeroSection = () => {
  const roles = [
    { text: "Software Developer", color: "#a855f7" },
    { text: "ML Enthusiast", color: "#3b82f6" },
    { text: "Problem Solver", color: "#f97316" },
    { text: "Coding Enthusiast", color: "#10b981" }
  ];

  const skills = [
    { name: "JavaScript", color: "bg-amber-500/30 text-amber-300 border-amber-500/50" },
    { name: "React", color: "bg-blue-500/30 text-blue-300 border-blue-500/50" },
    { name: "Python", color: "bg-green-500/30 text-green-300 border-green-500/50" },
    { name: "Node.js", color: "bg-green-600/30 text-green-300 border-green-600/50" },
    { name: "Tailwind", color: "bg-cyan-500/30 text-cyan-300 border-cyan-500/50" }
  ];

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [showResumePreview, setShowResumePreview] = useState(false);
  const [activeRoleIndex, setActiveRoleIndex] = useState(0);
  const [showAllRoles, setShowAllRoles] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.body.offsetHeight;
      const totalScrollable = docHeight - windowHeight;
      const percent = Math.min(scrollY / (totalScrollable * 0.1), 1) * 100;
      setScrollPercentage(percent);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);
    
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    // Role rotation only if not showing all roles
    const roleInterval = !showAllRoles ? setInterval(() => {
      setActiveRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 3000) : null;

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
      if (roleInterval) clearInterval(roleInterval);
    };
  }, [roles.length, showAllRoles]);

  const handleResumeClick = () => {
    setShowResumePreview(true);
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-[#0a051d] text-white overflow-hidden">
      {/* Progress indicator */}
      <div className="fixed top-0 left-0 h-1 bg-gradient-to-r from-purple-600 to-purple-400 z-50" style={{ width: `${scrollPercentage}%` }}></div>
      
      {/* Animated background effects */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5"></div>
      
      <div 
        className="absolute -z-10 bg-gradient-to-r from-purple-600/10 to-purple-400/5 rounded-full blur-[120px] w-[600px] h-[600px]"
        style={{ 
          left: `${mousePosition.x * 0.02 - 200}px`, 
          top: `${mousePosition.y * 0.02 - 200}px`,
          transition: "left 1s ease-out, top 1s ease-out",
        }}
      ></div>
      
      <div 
        className="absolute -z-10 bg-gradient-to-r from-blue-600/10 to-cyan-400/5 rounded-full blur-[100px] w-[500px] h-[500px]"
        style={{ 
          right: `${mousePosition.x * 0.01 - 200}px`, 
          bottom: `${mousePosition.y * 0.01 - 200}px`,
          transition: "right 1.2s ease-out, bottom 1.2s ease-out",
        }}
      ></div>
      
      {/* Main content container */}
      <div className="container mx-auto px-6 relative flex flex-col lg:flex-row items-center justify-between gap-8 py-12 lg:py-0">
        {/* Left side with profile */}
        <div className={`w-full lg:w-5/12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="relative mx-auto lg:mx-0 max-w-md">
            {/* Profile circle with decorative elements */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto lg:mx-0">
              {/* Outer rotating ring */}
              <div className="absolute inset-[-30px] rounded-full border border-purple-500/30 animate-[spin_40s_linear_infinite]"></div>
              <div className="absolute inset-[-15px] rounded-full border border-purple-400/20 animate-[spin_30s_linear_reverse_infinite]"></div>
              
              {/* Glowing background */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-900/30 to-purple-600/10 blur-md"></div>
              
              {/* Main profile circle */}
              <div className="absolute inset-0 rounded-full border-2 border-purple-500/50 overflow-hidden backdrop-blur-sm bg-white/5">
                <div className="absolute inset-1 rounded-full bg-gradient-to-br from-purple-900/80 to-purple-800/40 flex items-center justify-center">
                  <span className="text-6xl font-bold text-white/90">RB</span>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-5 -right-4 w-10 h-10 bg-amber-400 rounded-full blur-[1px] animate-pulse"></div>
              <div className="absolute -bottom-2 left-12 w-8 h-8 bg-purple-600 rounded-full blur-[1px] animate-pulse delay-700"></div>
              <div className="absolute top-1/2 -left-6 w-6 h-6 bg-blue-500 rounded-full blur-[1px] animate-pulse delay-1000"></div>
              
              {/* Connector line to text */}
              <div className="hidden lg:block absolute top-1/2 -right-[300px] w-[300px] h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
            </div>
          </div>
        </div>
        
        {/* Right side with text content */}
        <div className={`w-full lg:w-7/12 text-center lg:text-left transition-all duration-1000 mt-8 lg:mt-0 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-purple-400 font-medium mb-2">Hello, I'm</p>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 relative tracking-tighter">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">
              Ragul Balajii S S
            </span>
            <span className="absolute bottom-0 left-0 lg:left-0 w-full h-1 bg-gradient-to-r from-purple-600 to-transparent"></span>
          </h1>
          
          {/* Role display */}
          <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-2 mb-6 mt-8 relative">
            <span className="text-lg text-gray-300">I'm a</span>
            
            <div 
              className="role-container relative h-16 min-w-64 cursor-pointer"
              onMouseEnter={() => setShowAllRoles(true)}
              onMouseLeave={() => setShowAllRoles(false)}
            >
              {roles.map((role, index) => (
                <div 
                  key={index}
                  className={`absolute left-0 w-full px-4 py-2 rounded-lg border border-transparent transition-all duration-500 ease-in-out flex items-center justify-center ${
                    showAllRoles 
                      ? `opacity-100 translate-y-${index * 12} border-${role.color}/20 bg-${role.color}/5` 
                      : index === activeRoleIndex 
                        ? 'opacity-100 translate-y-0 border-purple-500/20 bg-purple-500/5' 
                        : 'opacity-0 translate-y-0'
                  }`}
                  style={{
                    borderColor: showAllRoles ? `${role.color}30` : '#a855f730',
                    backgroundColor: showAllRoles ? `${role.color}10` : '#a855f710',
                    transform: showAllRoles ? `translateY(${index * 48}px)` : 'translateY(0)',
                    zIndex: 10 - index
                  }}
                >
                  <span 
                    className="text-xl font-semibold tracking-wide"
                    style={{ color: role.color }}
                  >
                    {role.text}
                  </span>
                </div>
              ))}
              
            </div>
          </div>
          
          <p className="text-lg text-gray-300 mb-8 max-w-lg mx-auto lg:mx-0">
            Passionate Coding Enthusiast and Eager to Solve Problems
          </p>

          {/* Skill badges */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-8">
            {skills.map((skill, index) => (
              <TooltipProvider key={index}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Badge 
                      className={`${skill.color} px-4 py-1.5 border transition-all duration-300 hover:scale-105 cursor-default text-sm`}
                      variant="outline"
                    >
                      {skill.name}
                    </Badge>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Experienced in {skill.name}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ))}
          </div>
          
          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8">
            <Button 
              size="lg" 
              className="bg-purple-600 hover:bg-purple-700 text-white group relative overflow-hidden w-full sm:w-auto"
              onClick={handleResumeClick}
            >
              <span className="relative z-10">View Resume</span>
              <span className="absolute inset-0 bg-gradient-to-r from-purple-700 to-purple-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <FileText className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              asChild 
              className="group relative overflow-hidden border-purple-500 text-purple-400 hover:text-purple-300 w-full sm:w-auto"
            >
              <a href="#contact">
                <span className="relative z-10">Contact Me</span>
                <span className="absolute inset-0 bg-purple-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
              </a>
            </Button>
          </div>

          {/* Social links */}
          <div className="flex justify-center lg:justify-start gap-6 mb-8">
            <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-300 transform hover:scale-110">
              <Github className="h-6 w-6" />
              <span className="sr-only">GitHub</span>
            </a>
            <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-300 transform hover:scale-110">
              <Linkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-300 transform hover:scale-110">
              <Mail className="h-6 w-6" />
              <span className="sr-only">Email</span>
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <p className="text-sm text-gray-400 mb-2">Scroll Down</p>
        <MousePointer className="h-5 w-5 text-purple-500" />
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-32 h-32 border border-purple-500/10 rounded-full animate-pulse opacity-30 hidden lg:block"></div>
      <div className="absolute bottom-20 left-10 w-24 h-24 border border-purple-500/20 rounded-full animate-ping opacity-20 hidden lg:block"></div>
      <div className="absolute top-1/3 left-8 w-2 h-20 bg-gradient-to-b from-purple-500/30 to-transparent rounded-full hidden lg:block"></div>
      <div className="absolute bottom-1/3 right-8 w-2 h-20 bg-gradient-to-t from-purple-500/30 to-transparent rounded-full hidden lg:block"></div>

      {/* Resume Preview Dialog */}
      <ResumePreview 
        isOpen={showResumePreview} 
        onClose={() => setShowResumePreview(false)} 
      />
    </section>
  );
};

export default HeroSection;