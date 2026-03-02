import { Code, Lightbulb, Target, Zap } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Escrevo código limpo e mantível seguindo as melhores práticas"
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Foco em aplicações rápidas e otimizadas para melhor experiência"
    },
    {
      icon: Lightbulb,
      title: "Inovação",
      description: "Sempre buscando novas tecnologias e soluções criativas"
    },
    {
      icon: Target,
      title: "Resultados",
      description: "Comprometido em entregar projetos que excedem expectativas"
    }
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-white/5"></div>
        <div className="floating-animation absolute top-16 right-10 w-28 h-28 bg-primary/10 rounded-full blur-xl"></div>
        <div className="floating-animation absolute bottom-24 left-16 w-40 h-40 bg-secondary/10 rounded-full blur-xl" style={{animationDelay: '2s'}}></div>
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-border/40 text-xs uppercase tracking-widest text-muted-foreground mb-6">
            Resumo profissional
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Sobre Mim</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="fade-in-up">
            <div className="glass-card p-8 rounded-2xl border-border/40">
              <h3 className="text-2xl font-bold mb-6 text-primary">Minha Jornada</h3>
              <div className="space-y-4 text-foreground/80 leading-relaxed">
                <p>
                  Em transição sólida para o desenvolvimento web, com foco em criar experiências
                  digitais elegantes, responsivas e orientadas a resultados.
                </p>
                <p>
                  Tenho base consistente em <span className="text-primary font-semibold">HTML, CSS, JavaScript e React</span>,
                  com atenção especial à qualidade de código, acessibilidade e performance.
                </p>
                <p>
                  Busco sempre evoluir com as melhores práticas do mercado e entregar valor real
                  para o usuário e para o negócio.
                </p>
              </div>
              <div className="mt-8">
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

          <div className="fade-in-up stagger-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {highlights.map((item, index) => (
                <div 
                  key={index}
                  className="glass-card p-6 rounded-2xl border-border/40 hover:shadow-glow transition-all duration-300 group"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="p-3 bg-gradient-primary rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 text-center fade-in-up stagger-2">
          <div className="glass-card p-8 rounded-2xl max-w-4xl mx-auto border-border/40">
            <h3 className="text-2xl font-bold mb-4 gradient-text">Objetivo Profissional</h3>
            <p className="text-lg text-foreground/80 leading-relaxed">
              Busco oportunidades como <span className="text-primary font-semibold">Desenvolvedor Front-end Junior </span>
              para contribuir com interfaces modernas, código limpo e colaboração ativa em times de produto.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
