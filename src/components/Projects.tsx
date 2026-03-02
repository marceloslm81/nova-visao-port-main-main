import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Play } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";

const Projects = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  
  const videos = [
    { name: "Advogado", src: "/lovable-uploads/Advogado.mp4" },
    { name: "Estúdio", src: "/lovable-uploads/Estudio.mp4" },
    { name: "Lanches", src: "/lovable-uploads/Lanches.mp4" }
  ];

  const projects = [
    {
      title: "RR Delícias",
      description: "Plataforma de delivery online para hamburgueria com cardápio interativo e sistema de pedidos. Interface moderna com seções de destaque para produtos, recursos de entrega rápida e integração com WhatsApp para contato direto.",
      technologies: ["React.js", "CSS", "JavaScript"],
      image: "/lovable-uploads/fa51402b-15f7-4a4e-bdf1-1df5edef5af2.png",
      category: "E-commerce",
      status: "Concluído"
    },
    {
      title: "Escritório de Advocacia",
      description: "Website profissional para escritório de advocacia especializado em direito civil, trabalhista e empresarial. Interface elegante com seções de serviços jurídicos, equipe de advogados, casos de sucesso e sistema de agendamento de consultas. Design corporativo e confiável.",
      technologies: ["React.js", "TypeScript", "CSS"],
      image: "/lovable-uploads/Advogado.png",
      category: "Website Corporativo",
      status: "Concluído"
    },
    {
      title: "Estúdio Beleza",
      description: "Site profissional para estúdio de estética e micropigmentação com foco em beleza natural. Interface elegante com seções de procedimentos, agendamentos e estatísticas de sucesso. Design clean e feminino.",
      technologies: ["React.js", "CSS", "JavaScript"],
      image: "/lovable-uploads/6a52b36b-c37e-4585-95c9-13a6cd6d0df4.png",
      category: "Website",
      status: "Concluído"
    }
  ];

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-white/5"></div>
        <div className="floating-animation absolute top-24 left-10 w-36 h-36 bg-primary/10 rounded-full blur-2xl"></div>
        <div className="floating-animation absolute bottom-24 right-10 w-44 h-44 bg-secondary/10 rounded-full blur-2xl" style={{animationDelay: '2s'}}></div>
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-border/40 text-xs uppercase tracking-widest text-muted-foreground mb-6">
            Projetos em destaque
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Projetos</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
            Alguns dos projetos que desenvolvi aplicando conhecimentos em tecnologias modernas
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className={`glass-card rounded-2xl border-border/40 overflow-hidden hover:shadow-glow transition-all duration-300 group fade-in-up stagger-${index + 1}`}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-primary/90 text-primary-foreground text-xs font-semibold rounded-full">
                    {project.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-accent/90 text-accent-foreground text-xs font-semibold rounded-full">
                    {project.status}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-lg font-semibold text-foreground">{project.title}</h3>
                </div>
              </div>

              <div className="p-6">
                <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-2 py-1 bg-gradient-card border border-border/30 rounded text-xs font-medium text-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        size="sm"
                        className="flex-1 bg-gradient-primary hover:shadow-primary transition-all duration-300"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Ver Projeto
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-5xl w-[95vw] max-h-[90vh] overflow-hidden">
                      <DialogHeader className="pb-4">
                        <DialogTitle className="text-xl font-bold">Demonstrações dos Projetos</DialogTitle>
                      </DialogHeader>
                      <div className="space-y-6 overflow-y-auto max-h-[calc(90vh-120px)]">
                        {/* Grid de seleção de vídeos */}
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                          {videos.map((video) => (
                            <div 
                              key={video.name} 
                              className={`relative group cursor-pointer rounded-lg border-2 transition-all duration-200 ${
                                selectedVideo === video.src 
                                  ? 'border-primary bg-primary/10' 
                                  : 'border-border hover:border-primary/50'
                              }`}
                              onClick={() => setSelectedVideo(video.src)}
                            >
                              <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-md flex items-center justify-center">
                                <Play className={`w-8 h-8 transition-colors ${
                                  selectedVideo === video.src 
                                    ? 'text-primary' 
                                    : 'text-gray-600 group-hover:text-primary'
                                }`} />
                              </div>
                              <p className="text-center py-2 text-sm font-medium">{video.name}</p>
                            </div>
                          ))}
                        </div>
                        
                        {/* Player de vídeo */}
                        {selectedVideo && (
                          <div className="space-y-3">
                            <h3 className="text-lg font-semibold text-center">
                              {videos.find(v => v.src === selectedVideo)?.name}
                            </h3>
                            <div className="relative w-full">
                              <video 
                                key={selectedVideo}
                                src={selectedVideo} 
                                controls 
                                className="w-full h-auto max-h-[50vh] rounded-lg shadow-lg"
                                style={{ objectFit: 'contain' }}
                              >
                                Seu navegador não suporta o elemento de vídeo.
                              </video>
                            </div>
                          </div>
                        )}
                        
                        {!selectedVideo && (
                          <div className="text-center py-8 text-muted-foreground">
                            <Play className="w-12 h-12 mx-auto mb-3 opacity-50" />
                            <p>Selecione um vídeo acima para visualizar</p>
                          </div>
                        )}
                      </div>
                    </DialogContent>
                  </Dialog>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-border/30 hover:bg-primary/10 hover:border-primary transition-all duration-300"
                    onClick={() => window.open('https://github.com/marceloslm81', '_blank')}
                  >
                    <Github className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 fade-in-up stagger-4">
          <Button
            variant="outline"
            size="lg"
            className="border-border/30 hover:bg-primary/10 hover:border-primary transition-all duration-300"
            onClick={() => window.open('https://github.com/marceloslm81', '_blank')}
          >
            <Github className="w-5 h-5 mr-2" />
            Ver Todos no GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
