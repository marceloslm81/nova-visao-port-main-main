import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "./theme-toggle";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = ["home", "about", "skills", "projects", "contact"];
      const scrollPos = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "#home", label: "Início" },
    { href: "#about", label: "Sobre" },
    { href: "#skills", label: "Habilidades" },
    { href: "#projects", label: "Projetos" },
    { href: "#contact", label: "Contato" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/70 backdrop-blur-2xl border-b border-border/50 shadow-[0_4px_30px_rgba(0,0,0,0.3)]"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a
            href="#home"
            className="flex items-center gap-3 group shrink-0"
          >
            <div className="h-9 w-9 md:h-10 md:w-10 rounded-xl bg-gradient-primary flex items-center justify-center font-bold text-white text-sm shadow-glow transition-all duration-300 group-hover:scale-105">
              MC
            </div>
            <div className="hidden sm:block">
              <div className="text-sm md:text-base font-semibold text-foreground leading-tight">
                Marcelo Cavalcanti
              </div>
              <div className="text-[10px] md:text-xs text-muted-foreground font-mono">
                Front-end / React
              </div>
            </div>
          </a>

          <div className="hidden md:flex items-center gap-1">
            <div className="flex items-center rounded-2xl border border-border/30 bg-background/40 backdrop-blur-sm p-1">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={`relative px-4 py-2 text-sm font-medium rounded-xl transition-all duration-300 ${
                    activeSection === item.href.slice(1)
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/30"
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <ThemeToggle />

            <Button
              size="sm"
              className="hidden md:inline-flex bg-gradient-primary hover:shadow-glow transition-all duration-300 text-white rounded-xl px-5"
              asChild
            >
              <a href="/lovable-uploads/Marcelo-Currículo.pdf" download>
                Currículo
              </a>
            </Button>

            <Button
              variant="outline"
              size="icon"
              className="md:hidden bg-muted/30 border-border/50 hover:bg-muted/50 rounded-xl"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-4 h-4" />
              ) : (
                <Menu className="w-4 h-4" />
              )}
            </Button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden pb-4 animate-in slide-in-from-top-2 duration-200">
            <div className="glass rounded-2xl border-border/50 p-3 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={`block px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                    activeSection === item.href.slice(1)
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/30"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <Button
                className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300 text-white rounded-xl mt-2"
                asChild
              >
                <a href="/lovable-uploads/Marcelo-Currículo.pdf" download>
                  Baixar Currículo
                </a>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
