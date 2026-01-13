import { ArrowDown, Github, Linkedin, Mail, Download } from 'lucide-react';

const HeroSection = () => {
  const scrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-purple-deep/20 to-background" />
      
      {/* Floating Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-glow/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '-2s' }} />
      
      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:100px_100px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-fade-in">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm text-primary font-medium">Welcome to my Portfolio</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 animate-fade-in-up">
            <span className="text-foreground">Hi, I'm </span>
            <span className="gradient-text purple-glow">Nabiha Nasir</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-2 animate-fade-in-up delay-100 font-display">
            Software Engineering Student
          </p>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-soft/10 border border-purple-soft/20 mb-6 animate-fade-in-up delay-200">
            <span className="text-sm md:text-base text-purple-soft font-medium">Second Year | GIKI</span>
          </div>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in-up delay-300 leading-relaxed">
            Building tomorrow's solutions, one line of code at a time. Passionate about creating 
            innovative software solutions and exploring the frontiers of technology.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-12 animate-fade-in-up delay-400">
            <button onClick={scrollToProjects} className="glow-button px-8 py-4 rounded-xl font-semibold text-white">
              View My Projects
            </button>
            <a href="/resume.pdf" download="Nabiha_Nasir_CV.pdf" className="px-8 py-4 rounded-xl font-semibold border border-primary/50 bg-primary/10 hover:bg-primary/20 transition-all duration-300 flex items-center gap-2 group">
              <Download className="w-5 h-5 group-hover:animate-bounce" />
              Download CV
            </a>
          </div>

          <div className="flex items-center justify-center gap-6 animate-fade-in-up delay-500">
            <a href="https://github.com/nabihanasir" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-card/50 border border-border hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 group">
              <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a href="https://www.linkedin.com/in/nabiha-nasir-4a06a2349" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-card/50 border border-border hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 group">
              <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a href="mailto:nabiha.nasir@giki.edu.pk" className="p-3 rounded-full bg-card/50 border border-border hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 group">
              <Mail className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
          </div>
        </div>

        <button onClick={scrollToAbout} className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors cursor-pointer animate-fade-in delay-700">
          <span className="text-sm font-medium">Scroll</span>
          <ArrowDown className="w-5 h-5 animate-bounce" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;