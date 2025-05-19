
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/ThemeProvider";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  
  // Make sure the component is mounted before accessing theme (to avoid hydration mismatch)
  useEffect(() => {
    setMounted(true);
  }, []);
  
  if (!mounted) return null;

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="relative rounded-full overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label="Toggle theme"
    >
      {/* Background effect */}
      <span 
        className={`absolute inset-0 bg-primary/10 transform transition-transform duration-500 rounded-full ${
          isHovered ? 'scale-100' : 'scale-0'
        }`}
      />
      
      <Sun className={`h-[1.2rem] w-[1.2rem] transition-all duration-500 ${
        theme === 'dark' 
          ? 'rotate-90 scale-0 opacity-0' 
          : 'rotate-0 scale-100 opacity-100'
      }`} />
      
      <Moon className={`absolute h-[1.2rem] w-[1.2rem] transition-all duration-500 ${
        theme === 'light' 
          ? 'rotate-90 scale-0 opacity-0' 
          : 'rotate-0 scale-100 opacity-100'
      }`} />
    </Button>
  );
}
