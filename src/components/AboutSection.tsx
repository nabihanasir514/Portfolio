import { useEffect, useRef, useState } from 'react';
import { Code, Lightbulb, Target, Users } from 'lucide-react';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) setIsVisible(true); }, { threshold: 0.1 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const highlights = [
    { icon: Code, label: 'DSA Expert', description: 'Strong foundation in Data Structures & Algorithms' },
    { icon: Lightbulb, label: 'OOP Proficient', description: 'Solid grasp of Object-Oriented Programming' },
    { icon: Target, label: 'ICPC Competitor', description: '5th Place in ICPC Asia Topi 2026' },
    { icon: Users, label: 'Team Player', description: 'Collaborative & communicative' },
  ];

  const stats = [
    { value: '5th', label: 'ICPC Rank' },
    { value: '5+', label: 'Projects' },
    { value: '7+', label: 'Certificates' },
  ];

  return (
    <section id="about" ref={sectionRef} className="py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          
          {/* Header */}
          <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <span className="text-primary font-medium mb-4 block">About Me</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Passionate About <span className="gradient-text">Technology</span>
            </h2>
          </div>

          {/* Stats Row */}
          <div className={`grid grid-cols-3 gap-6 mb-12 ${isVisible ? 'animate-fade-in-up delay-100' : 'opacity-0'}`}>
            {stats.map((stat) => (
              <div key={stat.label} className="glass-card rounded-2xl p-6 text-center">
                <p className="text-3xl md:text-4xl font-bold gradient-text mb-1">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Bio Content */}
          <div className={`glass-card rounded-3xl p-8 md:p-10 mb-12 ${isVisible ? 'animate-fade-in-up delay-200' : 'opacity-0'}`}>
            <div className="space-y-4 text-muted-foreground leading-relaxed text-lg">
              <p>
                Hi! I'm <span className="text-foreground font-semibold">Nabiha Nasir</span>, a second-year 
                Software Engineering student at <span className="text-primary font-medium">Ghulam Ishaq Khan 
                Institute (GIKI)</span> (2024-2028).
              </p>
              <p>
                I have a <span className="text-foreground font-medium">strong background in Data Structures 
                & Algorithms (DSA)</span> and <span className="text-foreground font-medium">Object-Oriented 
                Programming (OOP)</span>. Currently, I'm expanding my skills by learning 
                <span className="text-primary"> Database Management Systems</span>.
              </p>
              <p>
                As an <span className="text-amber-400 font-medium">ICPC competitor</span> who secured 5th 
                place in Asia Topi Preliminary 2026, I thrive on solving complex problems and building 
                efficient solutions.
              </p>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <div 
                key={item.label} 
                className={`glass-card rounded-xl p-5 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} 
                style={{ animationDelay: `${300 + index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary/10">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{item.label}</h4>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
