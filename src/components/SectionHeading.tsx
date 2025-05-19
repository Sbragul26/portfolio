
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
}

const SectionHeading = ({ title, subtitle, className }: SectionHeadingProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const headingRef = useRef<HTMLDivElement>(null);

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

    if (headingRef.current) {
      observer.observe(headingRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div 
      ref={headingRef}
      className={cn(
        "mb-12 text-center transition-all duration-700",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
        className
      )}
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4 relative inline-block">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">{title}</span>
        <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-purple-500 transform scale-x-0 origin-left transition-transform duration-1000 ease-out" 
          style={{ transform: isVisible ? 'scaleX(0.8)' : 'scaleX(0)' }}></span>
      </h2>
      {subtitle && (
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto transition-all duration-700 delay-300"
           style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(20px)' }}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
