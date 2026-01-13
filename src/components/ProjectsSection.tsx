import { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';

const ProjectsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: 'Nova Dashboard',
      description: 'A comprehensive analytics dashboard with real-time data visualization, user management, and customizable widgets.',
      tech: ['React', 'TypeScript', 'D3.js', 'Node.js'],
      image: 'linear-gradient(135deg, hsl(263, 70%, 30%), hsl(280, 60%, 40%))',
      featured: true,
    },
    {
      title: 'CloudSync',
      description: 'File synchronization platform with end-to-end encryption and seamless cross-device access.',
      tech: ['Next.js', 'AWS S3', 'PostgreSQL'],
      image: 'linear-gradient(135deg, hsl(220, 70%, 30%), hsl(240, 60%, 40%))',
      featured: false,
    },
    {
      title: 'TaskFlow',
      description: 'Modern project management tool with kanban boards, team collaboration, and automation features.',
      tech: ['Vue.js', 'GraphQL', 'MongoDB'],
      image: 'linear-gradient(135deg, hsl(280, 70%, 30%), hsl(300, 60%, 40%))',
      featured: false,
    },
    {
      title: 'Meridian',
      description: 'AI-powered writing assistant that helps content creators with grammar, style, and SEO optimization.',
      tech: ['React', 'OpenAI', 'Python', 'FastAPI'],
      image: 'linear-gradient(135deg, hsl(250, 70%, 30%), hsl(270, 60%, 40%))',
      featured: true,
    },
    {
      title: 'PayFlow',
      description: 'Fintech application for expense tracking, budgeting, and financial insights with bank integrations.',
      tech: ['React Native', 'Node.js', 'Plaid API'],
      image: 'linear-gradient(135deg, hsl(200, 70%, 30%), hsl(220, 60%, 40%))',
      featured: false,
    },
    {
      title: 'Artisan',
      description: 'E-commerce platform for handmade crafts with seller dashboards and secure payments.',
      tech: ['Next.js', 'Stripe', 'Prisma'],
      image: 'linear-gradient(135deg, hsl(290, 70%, 30%), hsl(310, 60%, 40%))',
      featured: false,
    },
  ];

  return (
    <section id="projects" ref={sectionRef} className="py-24 md:py-32 relative">
      {/* Background accents */}
      <div className="absolute right-0 top-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
      <div className="absolute left-0 bottom-0 w-80 h-80 bg-accent/5 rounded-full blur-[100px]" />

      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className={`text-primary font-medium mb-4 tracking-widest uppercase text-sm ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            My Work
          </p>
          <h2 className={`section-title ${isVisible ? 'animate-fade-in-up delay-100' : 'opacity-0'}`}>
            Featured{' '}
            <span className="gradient-text">Projects</span>
          </h2>
          <p className={`text-muted-foreground max-w-2xl mx-auto ${isVisible ? 'animate-fade-in-up delay-200' : 'opacity-0'}`}>
            A selection of my recent work. Each project is crafted with attention 
            to detail and a focus on user experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className={`group glass-card rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-500 ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0'
              } ${project.featured ? 'md:col-span-2 lg:col-span-1' : ''}`}
              style={{ animationDelay: `${300 + index * 100}ms` }}
            >
              {/* Project Image/Preview */}
              <div 
                className="h-48 relative overflow-hidden"
                style={{ background: project.image }}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/80" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex gap-4">
                    <button className="p-3 rounded-full bg-background/80 backdrop-blur-sm border border-border hover:border-primary hover:bg-primary/20 transition-all">
                      <Github className="w-5 h-5" />
                    </button>
                    <button className="p-3 rounded-full bg-background/80 backdrop-blur-sm border border-border hover:border-primary hover:bg-primary/20 transition-all">
                      <ExternalLink className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-display font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </div>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
