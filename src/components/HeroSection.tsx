import { ArrowDown, Github, Linkedin, Mail, Download, Trophy } from 'lucide-react';
import { useState, useEffect } from 'react';
import profileImage from '@/assets/nabiha-profile-edited.png';

const HeroSection = () => {
  const [currentRole, setCurrentRole] = useState(0);

  const roles = ['Software Engineer', 'DSA Enthusiast', 'ICPC Competitor', 'Problem Solver'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const scrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden bg-background">
      {/* Clean Gradient Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-glow/8 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/3" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-16 items-center min-h-screen py-24">
          
          {/* Left Content - Takes 3 columns */}
          <div className="lg:col-span-3 text-center lg:text-left order-2 lg:order-1">
            
            {/* Achievement Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 mb-8">
              <Trophy className="w-4 h-4 text-amber-400" />
              <span className="text-sm font-medium text-amber-300/90">ICPC Asia Topi 2026 • 5th Place</span>
            </div>

            {/* Name */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-black tracking-tight mb-4">
              <span className="block text-foreground">Nabiha</span>
              <span className="block bg-gradient-to-r from-primary via-purple-400 to-purple-300 bg-clip-text text-transparent">
                Nasir
              </span>
            </h1>

            {/* Animated Role with Line */}
            <div className="flex items-center justify-center lg:justify-start gap-4 mb-6">
              <div className="h-px w-8 bg-gradient-to-r from-primary to-transparent" />
              <div className="h-8 overflow-hidden">
                <div 
                  className="transition-transform duration-500 ease-out"
                  style={{ transform: `translateY(-${currentRole * 32}px)` }}
                >
                  {roles.map((role, i) => (
                    <p key={i} className="h-8 text-lg md:text-xl text-primary font-medium">
                      {role}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            {/* University Info */}
            <p className="text-muted-foreground text-lg mb-6">
              Software Engineering @ <span className="text-foreground font-semibold">GIKI</span>
              <span className="text-muted-foreground/60 ml-2">'24 – '28</span>
            </p>

            {/* Short Bio */}
            <p className="text-muted-foreground text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 mb-10">
              Crafting efficient algorithms and elegant code. Strong foundation in 
              <span className="text-foreground font-medium"> DSA</span>,
              <span className="text-foreground font-medium"> OOP</span>, and
              <span className="text-foreground font-medium"> competitive programming</span>.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12">
              <button 
                onClick={scrollToProjects}
                className="w-full sm:w-auto px-8 py-4 rounded-2xl font-semibold text-primary-foreground bg-gradient-to-r from-primary to-purple-500 hover:opacity-90 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-primary/25"
              >
                View My Work
                <ArrowDown className="w-4 h-4 -rotate-90" />
              </button>
              <a 
                href="/resume.pdf"
                download="Nabiha_Nasir_CV.pdf"
                className="w-full sm:w-auto px-8 py-4 rounded-2xl font-semibold border border-border hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4" />
                Download CV
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center lg:justify-start gap-4">
              <span className="text-sm text-muted-foreground mr-2">Find me on</span>
              {[
                { icon: Github, href: 'https://github.com/nabihanasir514', label: 'GitHub' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/nabiha-nasir-4a06a2349', label: 'LinkedIn' },
                { icon: Mail, href: 'mailto:u2024514@giki.edu.pk', label: 'Email' },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.label !== 'Email' ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl border border-border hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 group"
                >
                  <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Right - Profile Image - Takes 2 columns */}
          <div className="lg:col-span-2 flex justify-center order-1 lg:order-2">
            <div className="relative">
              {/* Soft glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-purple-500/20 rounded-3xl blur-3xl scale-90" />
              
              {/* Main Image Card */}
              <div className="relative w-64 h-80 sm:w-72 sm:h-96 lg:w-80 lg:h-[420px] rounded-3xl overflow-hidden border border-border/50 shadow-2xl shadow-primary/10 bg-gradient-to-br from-card to-background">
                <img 
                  src={profileImage}
                  alt="Nabiha Nasir - Software Engineer"
                  className="w-full h-full object-cover object-top"
                />
                
                {/* Bottom gradient fade */}
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background/80 to-transparent" />
                
                {/* Name overlay at bottom */}
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Software Engineer</p>
                  <p className="text-lg font-bold text-foreground">@ GIKI</p>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border border-primary/20 rounded-2xl -z-10" />
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-primary/10 rounded-2xl -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
