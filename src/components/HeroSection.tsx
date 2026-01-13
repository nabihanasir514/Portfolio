import { ArrowDown, Github, Linkedin, Mail, Download, Sparkles, Code2, Terminal } from 'lucide-react';
import { useState, useEffect } from 'react';

const HeroSection = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = [
    'Software Engineer',
    'DSA Enthusiast',
    'ICPC Competitor',
    'Problem Solver',
  ];

  useEffect(() => {
    const currentText = roles[currentRole];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentText.length) {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentRole((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole, roles]);

  const scrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Mesh Gradient Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-background to-background" />
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.15),transparent_50%)]" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_20%_80%,rgba(168,85,247,0.1),transparent_50%)]" />
      </div>
      
      {/* Floating Geometric Shapes */}
      <div className="absolute top-20 left-10 w-20 h-20 border border-primary/20 rounded-lg rotate-12 animate-float" />
      <div className="absolute top-40 right-20 w-16 h-16 border border-purple-glow/20 rounded-full animate-float" style={{ animationDelay: '-2s' }} />
      <div className="absolute bottom-32 left-20 w-12 h-12 bg-primary/10 rounded-lg rotate-45 animate-float" style={{ animationDelay: '-4s' }} />
      <div className="absolute bottom-40 right-32 w-24 h-24 border border-purple-soft/20 rounded-full animate-float" style={{ animationDelay: '-1s' }} />
      
      {/* Code Decoration */}
      <div className="absolute top-1/4 left-10 hidden lg:block opacity-20 font-mono text-xs text-primary">
        <div>{'{'}</div>
        <div className="ml-4">"name": "Nabiha",</div>
        <div className="ml-4">"passion": "code",</div>
        <div className="ml-4">"rank": "ICPC 5th"</div>
        <div>{'}'}</div>
      </div>
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Intro Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary/20 to-purple-glow/20 border border-primary/30 mb-8 animate-fade-in backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-sm text-primary font-medium">ICPC Asia Topi 2026 — 5th Place</span>
            <Sparkles className="w-4 h-4 text-primary animate-pulse" />
          </div>

          {/* Greeting */}
          <p className="text-lg md:text-xl text-muted-foreground mb-4 animate-fade-in-up font-light tracking-wide">
            Hello World! I'm
          </p>

          {/* Name with Enhanced Styling */}
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-black mb-6 animate-fade-in-up delay-100 tracking-tight">
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
                Nabiha
              </span>
            </span>
            <br />
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-primary via-purple-glow to-purple-soft bg-clip-text text-transparent purple-glow">
                Nasir
              </span>
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full" />
            </span>
          </h1>

          {/* Typing Animation Role */}
          <div className="h-12 md:h-14 flex items-center justify-center mb-6 animate-fade-in-up delay-200">
            <div className="flex items-center gap-3 px-6 py-3 rounded-xl bg-card/50 border border-border backdrop-blur-sm">
              <Terminal className="w-5 h-5 text-primary" />
              <span className="text-lg md:text-xl font-mono">
                <span className="text-muted-foreground">{">"} </span>
                <span className="text-primary">{displayText}</span>
                <span className="animate-pulse text-primary">|</span>
              </span>
            </div>
          </div>

          {/* University Badge */}
          <div className="flex items-center justify-center gap-2 mb-8 animate-fade-in-up delay-300">
            <Code2 className="w-5 h-5 text-purple-soft" />
            <span className="text-muted-foreground">Software Engineering</span>
            <span className="text-primary">@</span>
            <span className="text-purple-soft font-semibold">GIKI</span>
            <span className="text-muted-foreground text-sm">(2024-2028)</span>
          </div>

          {/* Description */}
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12 animate-fade-in-up delay-400 leading-relaxed">
            Crafting elegant solutions through <span className="text-foreground font-medium">Data Structures</span>, 
            <span className="text-foreground font-medium"> Algorithms</span>, and 
            <span className="text-foreground font-medium"> Object-Oriented Design</span>. 
            Turning complex problems into clean, efficient code.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-16 animate-fade-in-up delay-500">
            <button 
              onClick={scrollToProjects} 
              className="group relative px-8 py-4 rounded-xl font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-purple-glow to-primary bg-[length:200%_100%] animate-shimmer" />
              <span className="relative flex items-center gap-2">
                Explore My Work
                <ArrowDown className="w-4 h-4 rotate-[-90deg] group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            <a 
              href="/resume.pdf"
              download="Nabiha_Nasir_CV.pdf"
              className="px-8 py-4 rounded-xl font-semibold border-2 border-primary/50 bg-primary/5 hover:bg-primary/15 hover:border-primary transition-all duration-300 flex items-center gap-2 group backdrop-blur-sm"
            >
              <Download className="w-5 h-5 group-hover:animate-bounce" />
              Download CV
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4 animate-fade-in-up delay-600">
            <span className="text-xs text-muted-foreground uppercase tracking-widest mr-2">Connect</span>
            <div className="w-8 h-px bg-border" />
            <a href="https://github.com/nabihanasir514" target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-card/50 border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300 group backdrop-blur-sm">
              <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a href="https://www.linkedin.com/in/nabiha-nasir-4a06a2349" target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-card/50 border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300 group backdrop-blur-sm">
              <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a href="mailto:u2024514@giki.edu.pk" className="p-3 rounded-xl bg-card/50 border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300 group backdrop-blur-sm">
              <Mail className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <div className="w-8 h-px bg-border" />
          </div>
        </div>

        {/* Scroll Indicator */}
        <button 
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors cursor-pointer animate-fade-in delay-700 group"
        >
          <span className="text-xs font-medium uppercase tracking-widest">Discover More</span>
          <div className="w-6 h-10 rounded-full border-2 border-current flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-current rounded-full animate-bounce" />
          </div>
        </button>
      </div>
    </section>
  );
};

export default HeroSection;