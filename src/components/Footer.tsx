import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-border/20 bg-background/50">
      <div className="container mx-auto px-6">
        <div className="py-12 md:py-16">
          <div className="grid md:grid-cols-4 gap-10">
            <div className="md:col-span-2">
              <a
                href="#home"
                className="inline-flex items-center gap-2.5 group mb-4"
              >
                <div className="h-8 w-8 rounded-xl bg-gradient-primary flex items-center justify-center font-bold text-white text-xs">
                  MC
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">
                    Marcelo Cavalcanti
                  </div>
                  <div className="text-[10px] text-muted-foreground font-mono">
                    Front-end / React
                  </div>
                </div>
              </a>
              <p className="text-sm text-muted-foreground/70 max-w-sm leading-relaxed">
                Desenvolvedor Front-end especializado em React e JavaScript.
                Foco em interfaces modernas, performance e código limpo.
              </p>
              <div className="flex gap-2 mt-5">
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
                    className="p-2.5 rounded-xl border border-border/20 hover:border-primary/20 hover:bg-primary/5 transition-all duration-300 group"
                    aria-label={label}
                  >
                    <Icon className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xs font-semibold text-foreground uppercase tracking-wider mb-4">
                Navegação
              </h4>
              <ul className="space-y-2.5">
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
                      className="text-sm text-muted-foreground/70 hover:text-primary transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-semibold text-foreground uppercase tracking-wider mb-4">
                Contato
              </h4>
              <ul className="space-y-2.5">
                <li className="text-sm text-muted-foreground/70">
                  São Paulo - SP
                </li>
                <li>
                  <a
                    href="https://wa.me/5511943219223"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground/70 hover:text-primary transition-colors"
                  >
                    (11) 94321-9223
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:Marcelo.slm.mc@gmail.com"
                    className="text-sm text-muted-foreground/70 hover:text-primary transition-colors"
                  >
                    Marcelo.slm.mc@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between py-6 border-t border-border/20">
          <p className="text-xs text-muted-foreground/50">
            &copy; {new Date().getFullYear()} Marcelo Cavalcanti. Todos os
            direitos reservados.
          </p>
          <button
            onClick={scrollToTop}
            className="p-2 rounded-xl border border-border/20 hover:border-primary/20 hover:bg-primary/5 transition-all duration-300 group"
            aria-label="Voltar ao topo"
          >
            <ArrowUp className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
