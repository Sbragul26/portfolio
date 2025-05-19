
import { useState, useEffect, useRef } from "react";
import Section from "./Section";
import SectionHeading from "./SectionHeading";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const skills = [
    { name: "JavaScript", level: 90, color: "bg-yellow-400" },
    { name: "Python", level: 85, color: "bg-blue-500" },
    { name: "React", level: 88, color: "bg-cyan-400" },
    { name: "Node.js", level: 80, color: "bg-green-500" },
    { name: "Tailwind CSS", level: 92, color: "bg-sky-400" },
    { name: "HTML/CSS", level: 95, color: "bg-orange-400" },
    { name: "TypeScript", level: 87, color: "bg-blue-600" },
    { name: "Git", level: 83, color: "bg-red-500" },
    { name: "Next.js", level: 82, color: "bg-black" },
    { name: "MongoDB", level: 78, color: "bg-green-600" }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <Section id="about" className="bg-accent/30">
      <div ref={sectionRef} className="container mx-auto">
        <SectionHeading 
          title="About Me" 
          subtitle="Learn more about my skills and background"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* About Text */}
          <div 
            className={`lg:col-span-2 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">Who I Am</h3>
            <div className="space-y-4 text-muted-foreground">
              <p className="first-letter:text-3xl first-letter:font-bold first-letter:mr-1 first-letter:float-left first-letter:text-primary">
                I am a passionate software developer and machine learning enthusiast with a strong 
                foundation in web development and problem-solving. My journey in tech started with 
                curiosity and has evolved into a dedication to creating efficient, scalable, and 
                user-friendly applications.
              </p>
              <p>
                With expertise in modern JavaScript frameworks like React, I enjoy building 
                responsive and interactive front-end experiences. I'm also proficient in 
                server-side technologies and constantly exploring new tools to expand my skill set.
              </p>
              <p>
                When I'm not coding, I'm continuously learning about emerging technologies, 
                particularly in the field of machine learning and artificial intelligence.
              </p>
            </div>
          </div>
          
          {/* Skills */}
          <div 
            className={`bg-card p-6 rounded-lg shadow-md border border-border/50 transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <h3 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">Skills & Technologies</h3>
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <HoverCard key={index}>
                  <HoverCardTrigger asChild>
                    <div className="space-y-1 cursor-pointer">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-xs font-medium text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="h-2 w-full bg-accent/50 rounded-full overflow-hidden">
                        <div 
                          className={`h-full ${skill.color} transition-all duration-1000 ease-out`} 
                          style={{ 
                            width: isVisible ? `${skill.level}%` : '0%',
                            transitionDelay: `${index * 100}ms`
                          }}
                        ></div>
                      </div>
                    </div>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-auto">
                    <p>I'm {skill.level}% proficient with {skill.name}</p>
                  </HoverCardContent>
                </HoverCard>
              ))}
            </div>
            
            <h3 className="text-xl font-bold mt-8 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">Education</h3>
            <div className="space-y-4">
              <div 
                className="border-l-2 border-primary pl-4 transition-all duration-500 hover:pl-6 hover:border-l-4"
              >
                <h4 className="font-medium">Computer Science and Engineering</h4>
                <p className="text-sm text-muted-foreground">University Name, 2019-2023</p>
              </div>
              {/* Add more education items if needed */}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default AboutSection;
