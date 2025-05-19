
import { useState, useEffect } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { cn } from "@/lib/utils";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-10",
        scrolled 
          ? "bg-background/80 backdrop-blur-lg shadow-sm py-3" 
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto flex items-center justify-between">
        <a href="#home" className="text-2xl font-bold text-primary">
          Ragul<span className="text-foreground">Balajii</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-foreground/80 hover:text-primary transition-colors relative overflow-hidden group"
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform scale-x-0 transition-transform group-hover:scale-x-100 origin-left"></span>
            </a>
          ))}
          <ThemeToggle />
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="ml-4 p-2"
            aria-label="Toggle menu"
          >
            <div className="w-6 flex flex-col gap-1.5">
              <span 
                className={cn(
                  "block h-0.5 bg-foreground transition-transform duration-300",
                  mobileMenuOpen ? "transform rotate-45 translate-y-2" : ""
                )}
              ></span>
              <span 
                className={cn(
                  "block h-0.5 bg-foreground transition-opacity duration-300",
                  mobileMenuOpen ? "opacity-0" : "opacity-100"
                )}
              ></span>
              <span 
                className={cn(
                  "block h-0.5 bg-foreground transition-transform duration-300",
                  mobileMenuOpen ? "transform -rotate-45 -translate-y-2" : ""
                )}
              ></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <nav
        className={cn(
          "fixed inset-0 z-40 flex flex-col items-center justify-center space-y-8 bg-background/95 backdrop-blur-lg transition-transform duration-300 md:hidden",
          mobileMenuOpen ? "translate-y-0" : "translate-y-full"
        )}
      >
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            onClick={() => setMobileMenuOpen(false)}
            className="text-xl font-medium text-foreground hover:text-primary"
          >
            {item.name}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Header;
