import { useEffect, useRef } from "react";
import { Code, Zap, Lightbulb, Target } from "lucide-react";

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

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

    const elements = sectionRef.current?.querySelectorAll(".reveal");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const highlights = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Código limpo e mantível seguindo boas práticas",
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Aplicações rápidas e otimizadas",
    },
    {
      icon: Lightbulb,
      title: "Inovação",
      description: "Novas tecnologias e soluções criativas",
    },
    {
      icon: Target,
      title: "Resultados",
      description: "Projetos que excedem expectativas",
    },
  ];

  return (
    <section
      id="about"
      className="relative py-24 md:py-32 overflow-hidden"
      ref={sectionRef}
    >
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/3 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/3 -right-40 w-80 h-80 bg-secondary/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 md:mb-20 reveal">
          <span className="section-label">Resumo profissional</span>
          <h2 className="section-title mt-6">
            <span className="gradient-text">Sobre Mim</span>
          </h2>
          <div className="w-16 h-0.5 bg-gradient-primary mx-auto rounded-full mt-6" />
        </div>

        <div className="grid lg:grid-cols-5 gap-8 md:gap-12">
          <div className="lg:col-span-3 reveal">
            <div className="glass rounded-3xl border-border/40 p-8 md:p-10 h-full">
              <h3 className="text-xl md:text-2xl font-bold mb-6 text-primary tracking-tight">
                Minha Jornada
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed text-sm md:text-base">
                <p>
                  Em transição sólida para o desenvolvimento web, com foco em criar
                  experiências digitais elegantes, responsivas e orientadas a resultados.
                </p>
                <p>
                  Tenho base consistente em{" "}
                  <span className="text-foreground font-medium">
                    HTML, CSS, JavaScript e React
                  </span>
                  , com atenção especial à qualidade de código, acessibilidade e
                  performance.
                </p>
                <p>
                  Busco sempre evoluir com as melhores práticas do mercado e entregar
                  valor real para o usuário e para o negócio.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 grid grid-cols-2 gap-4 reveal reveal-delay-1">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="glass rounded-2xl border-border/30 p-5 hover:border-primary/20 transition-all duration-300 group"
              >
                <div className="flex flex-col items-center text-center gap-3">
                  <div className="p-2.5 rounded-xl bg-gradient-primary/10 group-hover:bg-gradient-primary/20 transition-colors">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-foreground">
                      {item.title}
                    </h4>
                    <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 md:mt-12 reveal reveal-delay-2">
          <div className="glass rounded-3xl border-border/40 p-8 md:p-10 text-center max-w-4xl mx-auto">
            <h3 className="text-xl md:text-2xl font-bold mb-4 gradient-text">
              Objetivo Profissional
            </h3>
            <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Busco oportunidades como{" "}
              <span className="text-foreground font-medium">
                Desenvolvedor Front-end
              </span>{" "}
              para contribuir com interfaces modernas, código limpo e colaboração
              ativa em times de produto.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
