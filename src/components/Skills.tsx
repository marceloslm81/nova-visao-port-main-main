const Skills = () => {
  const skills = [
    {
      category: "Frontend",
      items: [
        { name: "HTML5", level: 90, color: "text-orange-500" },
        { name: "CSS3", level: 85, color: "text-blue-500" },
        { name: "JavaScript", level: 80, color: "text-yellow-500" },
        { name: "React.js", level: 75, color: "text-cyan-500" },
      ]
    },
    {
      category: "Ferramentas",
      items: [
        { name: "Git", level: 70, color: "text-red-500" },
        { name: "GitHub", level: 75, color: "text-gray-400" },
        { name: "VS Code", level: 85, color: "text-blue-400" },
        { name: "Figma", level: 60, color: "text-purple-500" },
      ]
    },
    {
      category: "Sistemas",
      items: [
        { name: "Windows", level: 90, color: "text-blue-600" },
        { name: "macOS", level: 75, color: "text-gray-500" },
        { name: "Linux", level: 60, color: "text-orange-600" },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-white/5"></div>
        <div className="floating-animation absolute top-24 left-10 w-36 h-36 bg-primary/10 rounded-full blur-2xl"></div>
        <div className="floating-animation absolute bottom-24 right-10 w-44 h-44 bg-secondary/10 rounded-full blur-2xl" style={{animationDelay: '2s'}}></div>
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-border/40 text-xs uppercase tracking-widest text-muted-foreground mb-6">
            Competências
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Habilidades</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
            Tecnologias e ferramentas que domino para criar experiências digitais excepcionais
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-xs uppercase tracking-widest text-muted-foreground">
            <span className="px-3 py-1 rounded-full border border-border/40 bg-gradient-card">UI Polida</span>
            <span className="px-3 py-1 rounded-full border border-border/40 bg-gradient-card">Performance</span>
            <span className="px-3 py-1 rounded-full border border-border/40 bg-gradient-card">Código Limpo</span>
            <span className="px-3 py-1 rounded-full border border-border/40 bg-gradient-card">Aprendizado Contínuo</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((category, categoryIndex) => (
            <div 
              key={category.category}
              className={`glass-card p-8 rounded-2xl border-border/40 hover:shadow-glow transition-all duration-300 fade-in-up stagger-${categoryIndex + 1}`}
            >
              <h3 className="text-2xl font-bold mb-8 text-center">
                <span className="gradient-text">{category.category}</span>
              </h3>
              
              <div className="space-y-6">
                {category.items.map((skill, index) => (
                  <div key={skill.name} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-foreground">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    
                    <div className="w-full bg-muted/60 rounded-full h-2 overflow-hidden border border-border/40">
                      <div 
                        className="h-full bg-gradient-primary rounded-full transition-all duration-1000 ease-out shadow-glow"
                        style={{ 
                          width: `${skill.level}%`,
                          animationDelay: `${categoryIndex * 0.2 + index * 0.1}s`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 fade-in-up stagger-4">
          <div className="glass-card p-8 rounded-2xl text-center border-border/40">
            <h3 className="text-2xl font-bold mb-6 gradient-text">Outras Competências</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {["Responsive Design", "UI/UX Design", "Performance", "SEO"].map((skill, index) => (
                <div 
                  key={skill}
                  className="p-4 bg-gradient-card rounded-lg border border-border/30 hover:border-primary/50 transition-all duration-300"
                >
                  <span className="text-sm font-medium text-foreground">{skill}</span>
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
