import { useEffect, useRef, useState } from 'react';
import { Code, Lightbulb, Target, Users } from 'lucide-react';
import profilePhoto from '@/assets/nabiha-profile.jpeg';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) setIsVisible(true); }, { threshold: 0.1 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const highlights = [
    { icon: Code, label: 'Clean Code', description: 'Writing efficient & maintainable code' },
    { icon: Lightbulb, label: 'Problem Solver', description: 'Analytical approach to challenges' },
    { icon: Target, label: 'Goal-Oriented', description: 'Focused on delivering results' },
    { icon: Users, label: 'Team Player', description: 'Collaborative & communicative' },
  ];

  return (
    <section id="about" ref={sectionRef} className="py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className={`relative ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <div className="glass-card rounded-3xl p-8 relative overflow-hidden">
              <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-br from-primary via-purple-glow to-purple-soft p-1 mb-6 overflow-hidden">
                <img src={profilePhoto} alt="Nabiha Nasir" className="w-full h-full rounded-full object-cover object-top" />
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-display font-bold mb-2">Nabiha Nasir</h3>
                <p className="text-primary font-medium">Software Engineering Student</p>
                <p className="text-sm text-muted-foreground mt-1">GIKI - Second Year</p>
              </div>
              <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-border">
                <div className="text-center"><p className="text-2xl font-bold gradient-text">2nd</p><p className="text-xs text-muted-foreground">Year</p></div>
                <div className="text-center"><p className="text-2xl font-bold gradient-text">10+</p><p className="text-xs text-muted-foreground">Projects</p></div>
                <div className="text-center"><p className="text-2xl font-bold gradient-text">5+</p><p className="text-xs text-muted-foreground">Certificates</p></div>
              </div>
            </div>
          </div>
          <div className={`${isVisible ? 'animate-fade-in-up delay-200' : 'opacity-0'}`}>
            <span className="text-primary font-medium mb-4 block">About Me</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Passionate About <span className="gradient-text">Technology</span></h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
              <p>Hi! I'm <span className="text-foreground font-semibold">Nabiha Nasir</span>, a second-year Software Engineering student at <span className="text-primary font-medium">Ghulam Ishaq Khan Institute (GIKI)</span>.</p>
              <p>I'm passionate about leveraging technology to solve real-world problems. My journey in software engineering has equipped me with strong foundations in programming, data structures, algorithms, and software development.</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <div key={item.label} className={`glass-card rounded-xl p-4 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: `${300 + index * 100}ms` }}>
                  <item.icon className="w-8 h-8 text-primary mb-3" />
                  <h4 className="font-semibold mb-1">{item.label}</h4>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;