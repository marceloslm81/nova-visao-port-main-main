import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Github, Linkedin, Send, ArrowUpRight } from "lucide-react";

const Contact = () => {
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

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "Marcelo.slm.mc@gmail.com",
      href: "mailto:Marcelo.slm.mc@gmail.com",
    },
    {
      icon: Phone,
      label: "Telefone",
      value: "(11) 94321-9223",
      href: "https://wa.me/5511943219223",
    },
    {
      icon: MapPin,
      label: "Localização",
      value: "São Paulo - SP",
      href: "#",
    },
  ];

  return (
    <section
      id="contact"
      className="relative py-24 md:py-32 overflow-hidden"
      ref={sectionRef}
    >
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/3 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/3 -right-40 w-80 h-80 bg-secondary/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 md:mb-20 reveal">
          <span className="section-label">Contato</span>
          <h2 className="section-title mt-6">
            <span className="gradient-text">Vamos Trabalhar Juntos</span>
          </h2>
          <div className="w-16 h-0.5 bg-gradient-primary mx-auto rounded-full mt-6" />
          <p className="text-muted-foreground mt-6 max-w-xl mx-auto leading-relaxed">
            Estou aberto a novas oportunidades e desafios. Entre em contato!
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
          <div className="lg:col-span-3 reveal">
            <div className="glass rounded-3xl border-border/40 p-8 md:p-10">
              <h3 className="text-lg font-bold mb-6 text-foreground">
                Envie uma Mensagem
              </h3>
              <form
                className="space-y-4"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs font-medium text-muted-foreground">
                      Nome
                    </label>
                    <Input
                      placeholder="Seu nome"
                      className="bg-muted/30 border-border/30 focus:border-primary/30 rounded-xl h-11"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-medium text-muted-foreground">
                      Email
                    </label>
                    <Input
                      type="email"
                      placeholder="seu@email.com"
                      className="bg-muted/30 border-border/30 focus:border-primary/30 rounded-xl h-11"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-medium text-muted-foreground">
                    Assunto
                  </label>
                  <Input
                    placeholder="Assunto da mensagem"
                    className="bg-muted/30 border-border/30 focus:border-primary/30 rounded-xl h-11"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-medium text-muted-foreground">
                    Mensagem
                  </label>
                  <Textarea
                    placeholder="Sua mensagem..."
                    className="bg-muted/30 border-border/30 focus:border-primary/30 rounded-xl min-h-[120px] resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300 text-white rounded-xl h-11"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Enviar Mensagem
                </Button>
              </form>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-4 reveal reveal-delay-1">
            <div className="glass rounded-3xl border-border/40 p-8">
              <h3 className="text-lg font-bold mb-6 gradient-text">
                Informações
              </h3>
              <div className="space-y-5">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-4 group">
                    <div className="p-2.5 rounded-xl bg-gradient-primary/10 shrink-0">
                      <info.icon className="w-4 h-4 text-primary" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs text-muted-foreground">
                        {info.label}
                      </p>
                      <a
                        href={info.href}
                        target={
                          info.label === "Telefone" ? "_blank" : undefined
                        }
                        rel={
                          info.label === "Telefone"
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className="text-sm text-foreground hover:text-primary transition-colors font-medium block truncate"
                      >
                        {info.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass rounded-3xl border-border/40 p-8">
              <h3 className="text-lg font-bold mb-4 text-foreground">
                Redes Sociais
              </h3>
              <div className="flex gap-3">
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
                ].map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 p-3 rounded-xl border border-border/30 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 group"
                  >
                    <Icon className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    <span className="text-xs font-medium text-muted-foreground group-hover:text-primary transition-colors">
                      {label}
                    </span>
                    <ArrowUpRight className="w-3 h-3 text-muted-foreground/50 group-hover:text-primary transition-colors" />
                  </a>
                ))}
              </div>
            </div>

            <div className="glass rounded-3xl border-border/40 p-6">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-1.5 animate-pulse" />
                <div>
                  <h4 className="text-sm font-semibold text-foreground">
                    Disponibilidade
                  </h4>
                  <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                    Buscando oportunidades como Desenvolvedor Front-end.
                    Disponível para projetos e posições CLT.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
