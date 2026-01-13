import { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github, Folder } from 'lucide-react';

const ProjectsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) setIsVisible(true); }, { threshold: 0.1 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const projects = [
    { 
      title: 'SWOT-LINK', 
      description: 'Strategic analysis tool for comprehensive SWOT (Strengths, Weaknesses, Opportunities, Threats) assessment and visualization.', 
      technologies: ['C++', 'Analysis', 'Data Management'], 
      image: 'from-purple-soft via-primary to-purple-glow', 
      github: 'https://github.com/nabihanasir514/SWOT-LINK',
      semester: 'Project'
    },
    { 
      title: 'Intru-Watch', 
      description: 'An intrusion detection system built as a DSA project, implementing efficient data structures and algorithms for security monitoring.', 
      technologies: ['C++', 'DSA', 'Algorithms'], 
      image: 'from-primary to-purple-glow', 
      github: 'https://github.com/nabihanasir514/Intru-Watch',
      semester: '3rd Semester'
    },
    { 
      title: 'Study Group Scheduler', 
      description: 'A collaborative academic platform to help university students connect, form study groups, and share resources seamlessly. Built using OOP principles.', 
      technologies: ['C++', 'OOP', 'File Handling'], 
      image: 'from-purple-glow to-purple-soft', 
      github: 'https://github.com/nabihanasir514/Study-Group-Scheduler-System',
      semester: '2nd Semester'
    },
    { 
      title: 'Hospital Management System', 
      description: 'Console-based system managing staff records, patient details, appointments, inventory tracking, and ward/bed allocations.', 
      technologies: ['C++', 'Structures', 'Arrays'], 
      image: 'from-purple-soft to-primary', 
      github: 'https://github.com/nabihanasir514/Hospital-Management-System',
      semester: '1st Semester'
    },
    { 
      title: 'Personal Portfolio', 
      description: 'Modern and responsive portfolio website showcasing projects and skills with elegant dark theme.', 
      technologies: ['React', 'Tailwind CSS', 'TypeScript'], 
      image: 'from-primary via-purple-glow to-purple-soft', 
      github: 'https://github.com/nabihanasir514',
      live: '#'
    },
  ];

  return (
    <section id="projects" ref={sectionRef} className="py-24 relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <span className="text-primary font-medium mb-4 block">My Work</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Featured <span className="gradient-text">Projects</span></h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">A collection of academic and personal projects showcasing my skills.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={project.title} className={`group glass-card rounded-2xl overflow-hidden ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: `${index * 100}ms` }}>
              <div className={`h-48 bg-gradient-to-br ${project.image} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                <Folder className="absolute top-4 left-4 w-8 h-8 text-white/80" />
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-black/50 backdrop-blur-sm hover:bg-primary transition-colors"><Github className="w-5 h-5 text-white" /></a>}
                  {project.live && <a href={project.live} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-black/50 backdrop-blur-sm hover:bg-primary transition-colors"><ExternalLink className="w-5 h-5 text-white" /></a>}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-display font-semibold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-2">{project.technologies.map((tech) => (<span key={tech} className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20">{tech}</span>))}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;