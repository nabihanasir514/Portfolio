import { ArrowDown, Github, Linkedin, Mail, Download, Trophy } from 'lucide-react';
import { useState, useEffect } from 'react';
import profileImage from '@/assets/nabiha-profile-edited.png';

const HeroSection = () => {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentRole, setCurrentRole] = useState(0);

  const roles = ['Software Engineer', 'DSA Enthusiast', 'ICPC Competitor', 'Problem Solver'];
  const fullName = 'Nabiha Nasir';

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < fullName.length) {
          setDisplayText(fullName.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
        }
      }
    }, isDeleting ? 80 : 150);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting]);

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
      {/* Gradient Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[800px] h-[600px] bg-primary/15 rounded-full blur-[150px] -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-glow/10 rounded-full blur-[120px] translate-y-1/3" />
      </div>

      {/* Subtle Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-screen py-24">
          
          {/* Left Side - Content */}
          <div className="text-center lg:text-left order-2 lg:order-1 lg:pl-8">
            
            {/* ICPC Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 mb-8 animate-fade-in">
              <Trophy className="w-4 h-4 text-amber-400" />
              <span className="text-sm font-medium text-amber-300">ICPC Asia Topi 2026 • 5th Place</span>
            </div>

            {/* Typing Name */}
            <div className="mb-6 animate-fade-in-up delay-100">
              <p className="text-muted-foreground text-xl mb-4">Hello, I am</p>
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-display font-black tracking-tight">
                <span className="bg-gradient-to-r from-primary via-purple-400 to-purple-300 bg-clip-text text-transparent">
                  {displayText}
                </span>
                <span className="animate-pulse text-primary">|</span>
              </h1>
            </div>

            {/* Role Carousel */}
            <div className="h-10 overflow-hidden mb-6 animate-fade-in-up delay-200">
              <div 
                className="transition-transform duration-500 ease-out"
                style={{ transform: `translateY(-${currentRole * 40}px)` }}
              >
                {roles.map((role, i) => (
                  <p key={i} className="h-10 flex items-center justify-center lg:justify-start text-xl text-primary font-medium">
                    {role}
                  </p>
                ))}
              </div>
            </div>

            {/* University */}
            <p className="text-muted-foreground text-lg mb-4 animate-fade-in-up delay-300">
              <span className="text-foreground font-semibold">Second Year</span> at <span className="text-primary font-semibold">GIKI</span>
            </p>

            {/* Skills Tags */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-8 animate-fade-in-up delay-400">
              {['C++', 'Python', 'HTML', 'CSS', 'JavaScript', 'MySQL', 'Git', 'GitHub', 'VS Code'].map((skill) => (
                <span 
                  key={skill}
                  className="px-3 py-1.5 text-sm font-medium rounded-full bg-primary/10 border border-primary/20 text-primary hover:bg-primary/20 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10 animate-fade-in-up delay-500">
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
            <div className="flex items-center justify-center lg:justify-start gap-4 animate-fade-in-up delay-600">
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

          {/* Right Side - Photo */}
          <div className="flex justify-center lg:justify-start order-1 lg:order-2 animate-fade-in-up delay-200 lg:pr-8">
            <div className="relative">
              {/* Outer glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary via-purple-500 to-purple-400 rounded-full blur-2xl opacity-40 scale-110 animate-pulse" />
              
              {/* Animated orbiting ring */}
              <div className="absolute -inset-6 rounded-full border-2 border-transparent animate-[spin_8s_linear_infinite]">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-primary rounded-full shadow-lg shadow-primary/50" />
              </div>
              
              {/* Second orbiting ring - opposite direction */}
              <div className="absolute -inset-8 rounded-full border-2 border-transparent animate-[spin_12s_linear_infinite_reverse]">
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-purple-400 rounded-full shadow-lg shadow-purple-400/50" />
              </div>
              
              {/* Moving gradient border */}
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full p-1 shadow-2xl shadow-primary/30 animate-[spin_6s_linear_infinite]" style={{ background: 'conic-gradient(from 0deg, hsl(var(--primary)), hsl(271 91% 65%), hsl(var(--primary)), transparent, hsl(var(--primary)))' }}>
                {/* Inner container - counter rotate to keep image still */}
                <div className="w-full h-full rounded-full overflow-hidden animate-[spin_6s_linear_infinite_reverse]">
                  <img 
                    src={profileImage}
                    alt="Nabiha Nasir"
                    className="w-full h-full object-cover object-top scale-110"
                  />
                </div>
              </div>

              {/* Shine effect that moves */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none animate-[spin_4s_linear_infinite]" />
              
              {/* Badge at bottom */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-background/90 backdrop-blur-sm border border-primary/30 rounded-full shadow-lg">
                <span className="text-sm font-semibold bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
                  Frontend Developer | Finding Internship
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in delay-700">
        <div className="flex flex-col items-center gap-2 text-muted-foreground">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-5 h-8 rounded-full border-2 border-current flex items-start justify-center p-1.5">
            <div className="w-1 h-1.5 bg-current rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
