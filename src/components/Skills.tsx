import { useEffect, useRef } from "react";
import {
  Code2,
  Palette,
  GitBranch,
  Monitor,
  Smartphone,
  Globe,
  Layout,
  Box,
} from "lucide-react";

const Skills = () => {
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

  const skills = [
    {
      category: "Frontend",
      icon: Code2,
      items: [
        { name: "HTML5", level: 90 },
        { name: "CSS3", level: 85 },
        { name: "JavaScript", level: 80 },
        { name: "React.js", level: 75 },
      ],
    },
    {
      category: "Ferramentas",
      icon: GitBranch,
      items: [
        { name: "Git", level: 70 },
        { name: "GitHub", level: 75 },
        { name: "VS Code", level: 85 },
        { name: "Figma", level: 60 },
      ],
    },
    {
      category: "Sistemas",
      icon: Monitor,
      items: [
        { name: "Windows", level: 90 },
        { name: "macOS", level: 75 },
        { name: "Linux", level: 60 },
      ],
    },
  ];

  const extras = [
    { label: "Responsive Design", icon: Smartphone },
    { label: "UI/UX Design", icon: Palette },
    { label: "Performance", icon: Globe },
    { label: "SEO", icon: Layout },
    { label: "Componentização", icon: Box },
    { label: "TypeScript", icon: Code2 },
  ];

  return (
    <section
      id="skills"
      className="relative py-24 md:py-32 overflow-hidden"
      ref={sectionRef}
    >
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 md:mb-20 reveal">
          <span className="section-label">Competências</span>
          <h2 className="section-title mt-6">
            <span className="gradient-text">Habilidades</span>
          </h2>
          <div className="w-16 h-0.5 bg-gradient-primary mx-auto rounded-full mt-6" />
          <p className="text-muted-foreground mt-6 max-w-xl mx-auto leading-relaxed">
            Tecnologias e ferramentas que utilizo para criar experiências digitais
            excepcionais
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((category, categoryIndex) => (
            <div
              key={category.category}
              className={`glass rounded-3xl border-border/40 p-8 hover:border-primary/20 transition-all duration-300 reveal`}
              style={{ transitionDelay: `${categoryIndex * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2.5 rounded-xl bg-gradient-primary/10">
                  <category.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-bold gradient-text">
                  {category.category}
                </h3>
              </div>

              <div className="space-y-5">
                {category.items.map((skill, index) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-foreground">
                        {skill.name}
                      </span>
                      <span className="text-xs text-muted-foreground font-mono">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full h-1.5 rounded-full bg-muted/50 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-primary transition-all duration-1000 ease-out"
                        style={{
                          width: `${skill.level}%`,
                          transitionDelay: `${categoryIndex * 0.15 + index * 0.08}s`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 reveal reveal-delay-3">
          <div className="glass rounded-3xl border-border/40 p-8 md:p-10 text-center">
            <h3 className="text-lg md:text-xl font-bold mb-8 gradient-text">
              Outras Competências
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {extras.map(({ label, icon: Icon }) => (
                <div
                  key={label}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-primary/5 border border-primary/10 text-sm font-medium text-muted-foreground hover:text-primary hover:border-primary/20 transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                  {label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
