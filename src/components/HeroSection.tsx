import { ArrowRight, Github, Linkedin, Mail, Download, Trophy, Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';
import profileImage from '@/assets/nabiha-profile-edited.png';

const HeroSection = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const roles = [
    'Software Engineer',
    'DSA Enthusiast', 
    'ICPC Competitor',
    'Problem Solver',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-purple-950/20" />
        
        {/* Animated Orbs */}
        <div 
          className="absolute w-[600px] h-[600px] rounded-full opacity-30 blur-[100px] transition-all duration-1000"
          style={{
            background: 'radial-gradient(circle, hsl(263 90% 60%), transparent)',
            left: `${mousePosition.x * 0.02}px`,
            top: `${mousePosition.y * 0.02}px`,
          }}
        />
        <div 
          className="absolute w-[400px] h-[400px] rounded-full opacity-20 blur-[80px] right-0 bottom-0 transition-all duration-1000"
          style={{
            background: 'radial-gradient(circle, hsl(280 90% 65%), transparent)',
            right: `${mousePosition.x * -0.01}px`,
            bottom: `${mousePosition.y * -0.01}px`,
          }}
        />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/40 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${6 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Subtle Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.02)_1px,transparent_1px)] bg-[size:80px_80px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-screen py-20">
          
          {/* Left Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            {/* ICPC Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-amber-500/20 to-yellow-500/20 border border-amber-500/30 mb-6 animate-fade-in">
              <Trophy className="w-4 h-4 text-amber-400" />
              <span className="text-sm font-medium text-amber-300">ICPC Asia Topi 2026 — 5th Place</span>
            </div>

            {/* Main Heading */}
            <div className="mb-6 animate-fade-in-up delay-100">
              <p className="text-muted-foreground text-lg mb-2 font-light">Hello, I'm</p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-black tracking-tight leading-none">
                <span className="text-foreground">Nabiha</span>
                <br />
                <span className="gradient-text">Nasir</span>
              </h1>
            </div>

            {/* Animated Role */}
            <div className="h-10 mb-6 animate-fade-in-up delay-200 overflow-hidden">
              <div 
                className="transition-transform duration-500 ease-out"
                style={{ transform: `translateY(-${currentRole * 40}px)` }}
              >
                {roles.map((role, index) => (
                  <div 
                    key={index}
                    className="h-10 flex items-center justify-center lg:justify-start"
                  >
                    <span className="text-xl md:text-2xl font-medium text-primary">
                      {role}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* University */}
            <p className="text-muted-foreground mb-8 animate-fade-in-up delay-300">
              Software Engineering @ <span className="text-foreground font-semibold">GIKI</span>
              <span className="text-muted-foreground/60 text-sm ml-2">(2024–2028)</span>
            </p>

            {/* Description */}
            <p className="text-muted-foreground text-lg max-w-lg mx-auto lg:mx-0 mb-10 animate-fade-in-up delay-400 leading-relaxed">
              Passionate about <span className="text-foreground">Data Structures</span>, 
              <span className="text-foreground"> Algorithms</span>, and building 
              elegant solutions to complex problems.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-10 animate-fade-in-up delay-500">
              <button 
                onClick={scrollToProjects}
                className="group glow-button flex items-center gap-2"
              >
                View My Work
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <a 
                href="/resume.pdf"
                download="Nabiha_Nasir_CV.pdf"
                className="px-6 py-3.5 rounded-xl font-medium border border-border bg-card/50 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 flex items-center gap-2 group backdrop-blur-sm"
              >
                <Download className="w-4 h-4 group-hover:animate-bounce" />
                Download CV
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center lg:justify-start gap-3 animate-fade-in-up delay-600">
              <a 
                href="https://github.com/nabihanasir514" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-3 rounded-xl bg-card/50 border border-border hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 group"
              >
                <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a 
                href="https://www.linkedin.com/in/nabiha-nasir-4a06a2349" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-3 rounded-xl bg-card/50 border border-border hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 group"
              >
                <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a 
                href="mailto:u2024514@giki.edu.pk" 
                className="p-3 rounded-xl bg-card/50 border border-border hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 group"
              >
                <Mail className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            </div>
          </div>

          {/* Right - Profile Image */}
          <div className="order-1 lg:order-2 flex justify-center animate-fade-in-up delay-200">
            <div className="relative">
              {/* Glow Effect Behind */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/40 via-purple-glow/30 to-purple-soft/20 rounded-full blur-3xl scale-110 animate-glow-pulse" />
              
              {/* Decorative Ring */}
              <div className="absolute -inset-4 rounded-full border border-primary/20 animate-[spin_20s_linear_infinite]">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-primary rounded-full" />
              </div>
              <div className="absolute -inset-8 rounded-full border border-purple-glow/10 animate-[spin_30s_linear_infinite_reverse]">
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 bg-purple-glow rounded-full" />
              </div>

              {/* Main Image Container */}
              <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-2 border-primary/30 shadow-2xl">
                <img 
                  src={profileImage}
                  alt="Nabiha Nasir"
                  className="w-full h-full object-cover object-top scale-110"
                />
                {/* Subtle Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-2 -right-2 px-4 py-2 rounded-xl bg-card border border-border shadow-xl animate-float">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">Open to Opportunities</span>
                </div>
              </div>

              {/* Stats Badge */}
              <div className="absolute -top-2 -left-2 px-4 py-2 rounded-xl bg-card border border-border shadow-xl animate-float" style={{ animationDelay: '-3s' }}>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">5th</div>
                  <div className="text-xs text-muted-foreground">ICPC Rank</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button 
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors cursor-pointer animate-fade-in delay-700 group"
        >
          <span className="text-xs font-medium uppercase tracking-widest">Scroll</span>
          <div className="w-5 h-8 rounded-full border-2 border-current flex items-start justify-center p-1.5">
            <div className="w-1 h-1.5 bg-current rounded-full animate-bounce" />
          </div>
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
