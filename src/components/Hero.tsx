import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail, ExternalLink, Download } from "lucide-react";

const Hero = () => {
  const observerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = observerRef.current?.querySelectorAll(".reveal");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      ref={observerRef}
    >
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 hero-gradient-top" />
        <div className="absolute inset-0 hero-gradient-bottom" />

        <div
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full opacity-20 hero-glow-primary"
          style={{ animation: "pulse-glow 4s ease-in-out infinite" }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full opacity-20 hero-glow-secondary"
          style={{ animation: "pulse-glow 4s ease-in-out infinite 2s" }}
        />

        <div className="absolute inset-0 opacity-[0.03] hero-grid" />
      </div>

      <div className="container mx-auto px-6 z-10 pt-28 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="reveal visible">
              <span className="section-label">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                Disponível para oportunidades
              </span>
            </div>

            <div className="space-y-4 reveal visible">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-[0.95]">
                <span className="text-foreground">Marcelo</span>
                <br />
                <span className="gradient-text">Cavalcanti</span>
              </h1>
            </div>

            <div className="reveal reveal-delay-1">
              <div className="flex items-center gap-3 text-lg md:text-xl text-muted-foreground font-mono">
                <span className="text-muted-foreground/40">{"<"}</span>
                <span className="text-primary font-semibold">
                  Desenvolvedor Front-end
                </span>
                <span className="text-muted-foreground/40">{"/>"}</span>
              </div>
            </div>

            <div className="reveal reveal-delay-2">
              <p className="text-base md:text-lg text-muted-foreground/80 max-w-xl leading-relaxed">
                Especializado em <span className="text-foreground font-medium">React</span>,{" "}
                <span className="text-foreground font-medium">JavaScript</span> e tecnologias
                modernas. Crio interfaces rápidas, elegantes e focadas em resultados.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 reveal reveal-delay-3">
              <Button
                size="lg"
                className="bg-gradient-primary hover:shadow-glow transition-all duration-300 text-white rounded-xl px-8 h-12"
                onClick={() =>
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Ver Projetos
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-border/50 hover:border-primary/30 hover:bg-primary/5 rounded-xl px-8 h-12"
                asChild
              >
                <a href="/lovable-uploads/Marcelo-Currículo.pdf" download>
                  <Download className="w-4 h-4 mr-2" />
                  Currículo
                </a>
              </Button>
              <Button
                variant="ghost"
                size="lg"
                className="text-muted-foreground hover:text-foreground hover:bg-muted/30 rounded-xl px-6 h-12"
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Contato
              </Button>
            </div>

            <div className="flex items-center gap-3 reveal reveal-delay-4">
              <span className="text-xs text-muted-foreground/50 uppercase tracking-widest">
                Redes
              </span>
              <div className="h-px w-8 bg-border" />
              <div className="flex gap-2">
                {[
                  {
                    icon: Github,
                    href: "https://github.com/marceloslm81",
                    label: "GitHub",
                  },
                  {
                    icon: Linkedin,
                    href: "https://www.linkedin.com/in/marcelo-cavalcanti-silva/",
                    label: "LinkedIn",
                  },
                  {
                    icon: Mail,
                    href: "mailto:Marcelo.slm.mc@gmail.com",
                    label: "Email",
                  },
                ].map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target={label !== "Email" ? "_blank" : undefined}
                    rel={label !== "Email" ? "noopener noreferrer" : undefined}
                    className="p-2.5 rounded-xl border border-border/30 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 group"
                    aria-label={label}
                  >
                    <Icon className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="hidden lg:block reveal reveal-delay-2">
            <div className="glass rounded-3xl border-border/50 p-8 relative">
              <div className="absolute -inset-px rounded-3xl bg-gradient-primary opacity-10 blur-xl" />
              <div className="relative">
                <span className="text-[11px] uppercase tracking-[0.15em] text-muted-foreground font-medium">
                  Diferenciais
                </span>
                <div className="mt-6 grid grid-cols-2 gap-6">
                  {[
                    {
                      value: "UI/UX",
                      label: "Foco em Design",
                    },
                    {
                      value: "Performance",
                      label: "Experiência rápida",
                    },
                    {
                      value: "Clean Code",
                      label: "Código limpo",
                    },
                    {
                      value: "Colaboração",
                      label: "Trabalho em equipe",
                    },
                  ].map((item) => (
                    <div key={item.value}>
                      <div className="text-sm font-semibold text-foreground">
                        {item.value}
                      </div>
                      <div className="text-xs text-muted-foreground mt-0.5">
                        {item.label}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-8 pt-6 border-t border-border/30">
                  <span className="text-[11px] uppercase tracking-[0.15em] text-muted-foreground font-medium">
                    Stack principal
                  </span>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {["React", "TypeScript", "JavaScript", "CSS", "HTML", "UI/UX"].map(
                      (tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 rounded-lg text-xs font-medium bg-primary/5 border border-primary/10 text-primary"
                        >
                          {tech}
                        </span>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-2 mt-16 md:mt-24 reveal reveal-delay-5">
          <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/40">
            Role para conhecer
          </span>
          <div className="animate-bounce">
            <ArrowDown className="w-4 h-4 text-primary/60" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
