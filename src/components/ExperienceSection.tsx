import { useEffect, useRef, useState } from 'react';
import { GraduationCap, Award, BookOpen, Code } from 'lucide-react';

const ExperienceSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) setIsVisible(true); }, { threshold: 0.1 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const experiences = [
    { type: 'education', title: 'BS Software Engineering', organization: 'GIKI - Ghulam Ishaq Khan Institute', period: '2023 - Present', description: 'Currently in second year, studying Data Structures, Algorithms, OOP, and Software Design.', icon: GraduationCap },
    { type: 'course', title: 'Data Structures & Algorithms', organization: 'Academic Course', period: '2024', description: 'Study of arrays, linked lists, trees, graphs, and algorithm design techniques.', icon: Code },
    { type: 'course', title: 'Object-Oriented Programming', organization: 'Academic Course', period: '2024', description: 'OOP concepts including encapsulation, inheritance, polymorphism using C++ and Java.', icon: BookOpen },
    { type: 'achievement', title: 'Web Development Bootcamp', organization: 'Online Certification', period: '2024', description: 'Completed web development training covering HTML, CSS, JavaScript, and React.', icon: Award },
    { type: 'education', title: 'Higher Secondary Education', organization: 'Intermediate (Pre-Engineering)', period: '2021 - 2023', description: 'Completed intermediate with focus on Mathematics, Physics, and Computer Science.', icon: GraduationCap },
  ];

  return (
    <section id="experience" ref={sectionRef} className="py-24 relative overflow-hidden">
      <div className="absolute top-1/4 left-0 w-1/4 h-1/2 bg-purple-glow/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <span className="text-primary font-medium mb-4 block">My Journey</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Education & <span className="gradient-text">Experience</span></h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">My academic journey and learning milestones in software engineering.</p>
        </div>
        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-purple-glow to-purple-soft" />
          {experiences.map((exp, index) => (
            <div key={index} className={`relative flex items-start gap-8 mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: `${index * 150}ms` }}>
              <div className="absolute left-8 md:left-1/2 w-4 h-4 -translate-x-1/2 rounded-full bg-primary border-4 border-background shadow-lg shadow-primary/50 z-10" />
              <div className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                <div className="glass-card rounded-2xl p-6 hover:border-primary/30 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-primary/10 shrink-0"><exp.icon className="w-6 h-6 text-primary" /></div>
                    <div className="flex-1">
                      <span className="text-xs text-primary font-medium uppercase tracking-wider">{exp.period}</span>
                      <h3 className="text-lg font-display font-semibold mt-1 mb-1">{exp.title}</h3>
                      <p className="text-sm text-purple-soft mb-3">{exp.organization}</p>
                      <p className="text-sm text-muted-foreground">{exp.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;