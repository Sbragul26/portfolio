
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Github, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

export interface ProjectProps {
  title: string;
  description: string;
  image?: string;
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
  reversed?: boolean;
}

const ProjectCard = ({
  title,
  description,
  image,
  technologies,
  githubUrl,
  demoUrl,
  reversed = false
}: ProjectProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

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

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <Card 
      ref={cardRef}
      className={cn(
        "project-card overflow-hidden border border-border/50 transition-all duration-700",
        "lg:grid lg:grid-cols-2 lg:gap-0",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={cn(
        "order-1 z-10",
        reversed ? "lg:order-2" : "lg:order-1"
      )}>
        <CardHeader>
          <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">{title}</h3>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4">{description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {technologies.map((tech, index) => (
              <HoverCard key={index}>
                <HoverCardTrigger asChild>
                  <span 
                    className="bg-accent/50 px-3 py-1 rounded-full text-xs font-medium hover:bg-primary/10 cursor-pointer transition-all duration-300 hover:scale-105"
                  >
                    {tech}
                  </span>
                </HoverCardTrigger>
                <HoverCardContent className="w-auto">
                  <p>{tech} skill used in this project</p>
                </HoverCardContent>
              </HoverCard>
            ))}
          </div>
        </CardContent>
        <CardFooter className="flex gap-4">
          {githubUrl && (
            <Button 
              size="sm" 
              variant="outline" 
              className="group relative overflow-hidden border-primary"
              asChild
            >
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <span className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
                <Github className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform duration-300" />
                <span>Code</span>
              </a>
            </Button>
          )}
          {demoUrl && (
            <Button 
              size="sm" 
              className="group relative overflow-hidden"
              asChild
            >
              <a href={demoUrl} target="_blank" rel="noopener noreferrer">
                <span className="absolute inset-0 bg-gradient-to-r from-primary to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="relative z-10">Live Demo</span>
                <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </Button>
          )}
        </CardFooter>
      </div>
      
      <div className={cn(
        "order-2 h-64 lg:h-auto overflow-hidden relative",
        reversed ? "lg:order-1" : "lg:order-2",
        "transition-transform duration-700",
        isHovered ? "scale-105" : "scale-100"
      )}>
        {image ? (
          <div className="relative w-full h-full">
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
            <img 
              src={image} 
              alt={title} 
              className="w-full h-full object-cover transition-transform duration-700"
              style={{ transform: isHovered ? 'scale(1.1)' : 'scale(1)' }}
            />
          </div>
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-accent/30 to-primary/10">
            <span className="text-8xl font-bold text-accent-foreground/10">
              {title.charAt(0)}
            </span>
          </div>
        )}
      </div>
    </Card>
  );
};

export default ProjectCard;
