import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-28">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-white/5"></div>
        <div className="floating-animation absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-xl"></div>
        <div className="floating-animation absolute top-40 right-20 w-48 h-48 bg-secondary/10 rounded-full blur-xl" style={{animationDelay: '2s'}}></div>
        <div className="floating-animation absolute bottom-20 left-20 w-40 h-40 bg-accent/10 rounded-full blur-xl" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="container mx-auto px-6 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="fade-in-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-border/40 text-xs uppercase tracking-widest text-muted-foreground mb-6">
                Disponível para oportunidades
              </div>
            </div>

            <div className="fade-in-up stagger-1">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                <span className="text-foreground">Marcelo</span>
                <br />
                <span className="text-foreground">Cavalcanti da Silva</span>
              </h1>
            </div>

            <div className="fade-in-up stagger-2">
              <div className="text-xl md:text-2xl text-muted-foreground mb-6 font-mono">
                &lt;{" "}
                <span className="text-primary font-semibold">Desenvolvedor Front-end Junior</span>
                {" "}/&gt;
              </div>
            </div>

            <div className="fade-in-up stagger-3">
              <p className="text-lg md:text-xl text-foreground/80 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Especializado em React, JavaScript e tecnologias modernas.
                Crio interfaces rápidas, elegantes e focadas em resultados.
              </p>
            </div>

            <div className="fade-in-up stagger-4">
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-border/30 hover:bg-primary/10 hover:border-primary transition-all duration-300 text-lg px-8 py-3"
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Ver Projetos
                </Button>
                <Button
                  size="lg"
                  className="bg-gradient-secondary hover:shadow-glow transition-all duration-300 text-lg px-8 py-3"
                  asChild
                >
                  <a href="/lovable-uploads/Marcelo-Currículo.pdf" download>
                    Baixar Currículo
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-border/30 hover:bg-primary/10 hover:border-primary transition-all duration-300 text-lg px-8 py-3"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Entre em Contato
                </Button>
              </div>
            </div>

            <div className="fade-in-up stagger-4">
              <div className="flex justify-center lg:justify-start space-x-4">
                <a
                  href="https://github.com/marceloslm81"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 glass-card hover:shadow-glow hover:bg-primary/10 transition-all duration-300 group"
                >
                  <Github className="w-6 h-6 group-hover:text-primary transition-colors" />
                </a>
                <a
                  href="https://www.linkedin.com/in/marcelo-cavalcanti-silva/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 glass-card hover:shadow-glow hover:bg-primary/10 transition-all duration-300 group"
                >
                  <Linkedin className="w-6 h-6 group-hover:text-primary transition-colors" />
                </a>
                <a
                  href="mailto:Marcelo.slm.mc@gmail.com"
                  className="p-3 glass-card hover:shadow-glow hover:bg-primary/10 transition-all duration-300 group"
                >
                  <Mail className="w-6 h-6 group-hover:text-primary transition-colors" />
                </a>
              </div>
            </div>
          </div>

          <div className="fade-in-up stagger-2">
            <div className="glass-card p-8 rounded-3xl border-border/40 relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-16 -left-10 w-52 h-52 bg-secondary/10 rounded-full blur-2xl"></div>
              <div className="relative">
                <div className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
                  Diferenciais
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <div className="text-lg font-semibold text-foreground mb-1">Foco em UI</div>
                    <div className="text-sm text-muted-foreground">Interfaces polidas e consistentes</div>
                  </div>
                  <div>
                    <div className="text-lg font-semibold text-foreground mb-1">Performance</div>
                    <div className="text-sm text-muted-foreground">Experiências rápidas e leves</div>
                  </div>
                  <div>
                    <div className="text-lg font-semibold text-foreground mb-1">Código Limpo</div>
                    <div className="text-sm text-muted-foreground">Padrões modernos e manutenção fácil</div>
                  </div>
                  <div>
                    <div className="text-lg font-semibold text-foreground mb-1">Colaboração</div>
                    <div className="text-sm text-muted-foreground">Comunicação clara e foco no time</div>
                  </div>
                </div>

                <div className="text-xs uppercase tracking-widest text-muted-foreground mb-3">
                  Stack principal
                </div>
                <div className="flex flex-wrap gap-2">
                  {["HTML", "CSS", "JavaScript", "React", "UI/UX", "Performance"].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full border border-border/40 bg-gradient-card text-xs font-medium text-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="fade-in-up stagger-4 mt-12">
          <div className="flex flex-col items-center gap-2 text-muted-foreground">
            <span className="text-xs uppercase tracking-widest">Role para ver mais</span>
            <div className="animate-bounce">
              <ArrowDown className="w-6 h-6 text-primary" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
