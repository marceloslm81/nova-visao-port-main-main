import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "Marcelo.slm.mc@gmail.com",
      href: "mailto:Marcelo.slm.mc@gmail.com"
    },
    {
      icon: Phone,
      label: "Telefone",
      value: "(11) 94321-9223",
      href: "https://wa.me/5511943219223"
    },
    {
      icon: MapPin,
      label: "Localização",
      value: "São Paulo - SP",
      href: "#"
    }
  ];

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-white/5"></div>
        <div className="floating-animation absolute top-20 left-12 w-36 h-36 bg-primary/10 rounded-full blur-2xl"></div>
        <div className="floating-animation absolute bottom-20 right-12 w-44 h-44 bg-secondary/10 rounded-full blur-2xl" style={{animationDelay: '2s'}}></div>
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-border/40 text-xs uppercase tracking-widest text-muted-foreground mb-6">
            Contato
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Vamos Trabalhar Juntos</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
            Estou sempre aberto a novas oportunidades e desafios. Entre em contato!
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="fade-in-up">
            <div className="glass-card p-8 rounded-2xl border-border/40">
              <h3 className="text-2xl font-bold mb-8 gradient-text">Informações de Contato</h3>
              
              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center group">
                    <div className="p-3 bg-gradient-primary rounded-lg mr-4 group-hover:scale-110 transition-transform duration-300">
                      <info.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{info.label}</p>
                      <a 
                        href={info.href}
                        target={info.label === "Telefone" ? "_blank" : undefined}
                        rel={info.label === "Telefone" ? "noopener noreferrer" : undefined}
                        className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
                      >
                        {info.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-border/30 pt-8">
                <h4 className="text-lg font-semibold mb-4 text-foreground">Redes Sociais</h4>
                <div className="flex space-x-4">
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
                </div>
              </div>

              <div className="mt-8 p-6 bg-gradient-card rounded-lg border border-border/30">
                <h4 className="font-semibold text-foreground mb-2">Disponibilidade</h4>
                <p className="text-muted-foreground text-sm">
                  Atualmente buscando oportunidades como Desenvolvedor Front-end Junior. 
                  Disponível para projetos freelance e posições CLT.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
