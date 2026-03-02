import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-16 relative overflow-hidden border-t border-border/30 bg-card/40">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-white/5"></div>
        <div className="floating-animation absolute top-12 left-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
        <div className="floating-animation absolute bottom-12 right-10 w-40 h-40 bg-secondary/10 rounded-full blur-2xl" style={{animationDelay: '2s'}}></div>
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-border/40 text-xs uppercase tracking-widest text-muted-foreground mb-6">
              Vamos conversar
            </div>
            <h3 className="text-2xl font-bold gradient-text mb-4">Marcelo Cavalcanti</h3>
            <p className="text-muted-foreground mb-6">
              Desenvolvedor Front-end Junior especializado em React e JavaScript.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/marceloslm81"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 glass-card hover:shadow-glow hover:bg-primary/10 transition-all duration-300 group"
              >
                <Github className="w-5 h-5 group-hover:text-primary transition-colors" />
              </a>
              <a
                href="https://www.linkedin.com/in/marcelo-cavalcanti-silva/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 glass-card hover:shadow-glow hover:bg-primary/10 transition-all duration-300 group"
              >
                <Linkedin className="w-5 h-5 group-hover:text-primary transition-colors" />
              </a>
              <a
                href="mailto:Marcelo.sim.mc@gmail.com"
                className="p-2 glass-card hover:shadow-glow hover:bg-primary/10 transition-all duration-300 group"
              >
                <Mail className="w-5 h-5 group-hover:text-primary transition-colors" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-foreground">Links Rápidos</h4>
            <ul className="space-y-2">
              {[
                { href: "#home", label: "Início" },
                { href: "#about", label: "Sobre" },
                { href: "#skills", label: "Habilidades" },
                { href: "#projects", label: "Projetos" },
                { href: "#contact", label: "Contato" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-foreground">Contato</h4>
            <div className="space-y-3 text-muted-foreground">
              <div className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-primary"></span>
                <span>São Paulo - SP</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-secondary"></span>
                <span>(11) 94321-9223</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-accent"></span>
                <span>Marcelo.slm.mc@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border/30 pt-8 text-center">
          <p className="text-muted-foreground flex flex-wrap items-center justify-center gap-2">
            © 2025 Marcelo Cavalcanti. Feito com <Heart className="w-4 h-4 text-red-500" /> usando React e TypeScript.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
