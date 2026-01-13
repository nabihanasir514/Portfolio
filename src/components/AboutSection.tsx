import { useEffect, useRef, useState } from 'react';
import { Code2, Palette, Rocket, Heart } from 'lucide-react';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const highlights = [
    { icon: Code2, label: '5+ Years Experience', desc: 'Building web applications' },
    { icon: Palette, label: 'UI/UX Focused', desc: 'Design-driven development' },
    { icon: Rocket, label: '50+ Projects', desc: 'Delivered successfully' },
    { icon: Heart, label: 'Passionate', desc: 'About clean code' },
  ];

  return (
    <section id="about" ref={sectionRef} className="py-24 md:py-32 relative">
      {/* Background accent */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image/Visual */}
          <div className={`relative ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Decorative elements */}
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 rounded-3xl blur-2xl" />
              <div className="absolute inset-0 glass-card rounded-3xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <span className="text-5xl font-display font-bold text-white">AC</span>
                  </div>
                </div>
              </div>
              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 glass-card px-4 py-2 rounded-full animate-float">
                <span className="text-sm font-medium text-primary">React</span>
              </div>
              <div className="absolute -bottom-4 -left-4 glass-card px-4 py-2 rounded-full animate-float delay-200">
                <span className="text-sm font-medium text-accent">TypeScript</span>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className={`${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
            <p className="text-primary font-medium mb-4 tracking-widest uppercase text-sm">
              About Me
            </p>
            <h2 className="section-title">
              Turning ideas into{' '}
              <span className="gradient-text">reality</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              I'm a passionate full-stack developer and designer based in San Francisco. 
              With over 5 years of experience, I specialize in building modern web applications 
              that are both beautiful and functional.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              My approach combines clean, efficient code with thoughtful design to create 
              seamless user experiences. When I'm not coding, you'll find me exploring 
              new technologies, contributing to open-source projects, or sharing my 
              knowledge through technical writing.
            </p>

            {/* Highlight Cards */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <div 
                  key={index}
                  className="glass-card p-4 rounded-xl hover:border-primary/50 transition-all duration-300 group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <item.icon className="w-6 h-6 text-primary mb-2 group-hover:scale-110 transition-transform" />
                  <p className="font-semibold text-sm">{item.label}</p>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
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
