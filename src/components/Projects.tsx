import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Play, ArrowUpRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const Projects = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

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

  const videos = [
    { name: "Advogado", src: "/lovable-uploads/Advogado.mp4" },
    { name: "Estúdio", src: "/lovable-uploads/Estudio.mp4" },
    { name: "Lanches", src: "/lovable-uploads/Lanches.mp4" },
  ];

  const projects = [
    {
      title: "RR Delícias",
      description:
        "Plataforma de delivery online para hamburgueria com cardápio interativo e sistema de pedidos. Interface moderna com integração com WhatsApp.",
      technologies: ["React.js", "CSS", "JavaScript"],
      image: "/lovable-uploads/fa51402b-15f7-4a4e-bdf1-1df5edef5af2.png",
      category: "E-commerce",
      status: "Concluído",
    },
    {
      title: "Escritório de Advocacia",
      description:
        "Website profissional para escritório de advocacia com seções de serviços jurídicos, equipe e sistema de agendamento. Design corporativo e confiável.",
      technologies: ["React.js", "TypeScript", "CSS"],
      image: "/lovable-uploads/Advogado.png",
      category: "Website Corporativo",
      status: "Concluído",
    },
    {
      title: "Estúdio Beleza",
      description:
        "Site profissional para estúdio de estética e micropigmentação. Interface elegante com seções de procedimentos e agendamentos.",
      technologies: ["React.js", "CSS", "JavaScript"],
      image: "/lovable-uploads/6a52b36b-c37e-4585-95c9-13a6cd6d0df4.png",
      category: "Website",
      status: "Concluído",
    },
  ];

  return (
    <section
      id="projects"
      className="relative py-24 md:py-32 overflow-hidden"
      ref={sectionRef}
    >
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/3 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/3 -right-40 w-80 h-80 bg-secondary/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 md:mb-20 reveal">
          <span className="section-label">Projetos em destaque</span>
          <h2 className="section-title mt-6">
            <span className="gradient-text">Projetos</span>
          </h2>
          <div className="w-16 h-0.5 bg-gradient-primary mx-auto rounded-full mt-6" />
          <p className="text-muted-foreground mt-6 max-w-xl mx-auto leading-relaxed">
            Alguns dos projetos que desenvolvi aplicando tecnologias modernas
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group reveal"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="glass rounded-3xl border-border/40 overflow-hidden hover:border-primary/20 transition-all duration-500 h-full flex flex-col">
                <div className="relative overflow-hidden aspect-[16/10]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />

                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="px-3 py-1 rounded-full text-[11px] font-medium bg-background/60 backdrop-blur-md border border-border/30 text-foreground">
                      {project.category}
                    </span>
                    <span className="px-3 py-1 rounded-full text-[11px] font-medium bg-primary/20 backdrop-blur-md border border-primary/20 text-primary">
                      {project.status}
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-lg font-bold text-white drop-shadow-lg">
                      {project.title}
                    </h3>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-lg text-[11px] font-medium bg-primary/5 border border-primary/10 text-primary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3 pt-4 border-t border-border/20">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          size="sm"
                          className="flex-1 bg-gradient-primary hover:shadow-glow transition-all duration-300 text-white rounded-xl"
                        >
                          <Play className="w-3.5 h-3.5 mr-1.5" />
                          Demo
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-5xl w-[95vw] max-h-[90vh] overflow-hidden rounded-3xl">
                        <DialogHeader className="pb-4">
                          <DialogTitle className="text-xl font-bold">
                            Demonstrações
                          </DialogTitle>
                        </DialogHeader>
                        <div className="space-y-6 overflow-y-auto max-h-[calc(90vh-120px)]">
                          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            {videos.map((video) => (
                              <div
                                key={video.name}
                                className={`relative group cursor-pointer rounded-2xl border-2 transition-all duration-200 p-4 ${
                                  selectedVideo === video.src
                                    ? "border-primary bg-primary/10"
                                    : "border-border hover:border-primary/30 hover:bg-muted/30"
                                }`}
                                onClick={() => setSelectedVideo(video.src)}
                              >
                                <div className="aspect-video rounded-xl bg-gradient-to-br from-primary/5 to-secondary/5 flex items-center justify-center border border-border/30">
                                  <Play
                                    className={`w-8 h-8 transition-colors ${
                                      selectedVideo === video.src
                                        ? "text-primary"
                                        : "text-muted-foreground group-hover:text-primary"
                                    }`}
                                  />
                                </div>
                                <p className="text-center pt-3 text-sm font-medium">
                                  {video.name}
                                </p>
                              </div>
                            ))}
                          </div>

                          {selectedVideo && (
                            <div className="space-y-3">
                              <h3 className="text-lg font-semibold text-center">
                                {
                                  videos.find((v) => v.src === selectedVideo)
                                    ?.name
                                }
                              </h3>
                              <div className="relative w-full rounded-2xl overflow-hidden border border-border/30">
                                <video
                                  key={selectedVideo}
                                  src={selectedVideo}
                                  controls
                                  className="w-full h-auto max-h-[50vh]"
                                  style={{ objectFit: "contain" }}
                                >
                                  Seu navegador não suporta o elemento de vídeo.
                                </video>
                              </div>
                            </div>
                          )}

                          {!selectedVideo && (
                            <div className="text-center py-8 text-muted-foreground">
                              <Play className="w-10 h-10 mx-auto mb-3 opacity-30" />
                              <p className="text-sm">
                                Selecione um vídeo acima para visualizar
                              </p>
                            </div>
                          )}
                        </div>
                      </DialogContent>
                    </Dialog>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-border/30 hover:border-primary/30 hover:bg-primary/5 rounded-xl"
                      onClick={() =>
                        window.open("https://github.com/marceloslm81", "_blank")
                      }
                    >
                      <Github className="w-3.5 h-3.5" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10 reveal reveal-delay-3">
          <Button
            variant="outline"
            size="lg"
            className="rounded-xl border-border/50 hover:border-primary/30 hover:bg-primary/5 h-12 px-8"
            onClick={() =>
              window.open("https://github.com/marceloslm81", "_blank")
            }
          >
            <Github className="w-4 h-4 mr-2" />
            Ver Todos no GitHub
            <ArrowUpRight className="w-3.5 h-3.5 ml-1.5 text-muted-foreground" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
