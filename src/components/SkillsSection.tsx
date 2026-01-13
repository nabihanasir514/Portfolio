import { useEffect, useRef, useState } from 'react';

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) setIsVisible(true); }, { threshold: 0.1 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    { title: 'Programming Languages', skills: [{ name: 'Python', level: 85 }, { name: 'C++', level: 80 }, { name: 'Java', level: 75 }, { name: 'JavaScript', level: 70 }] },
    { title: 'Web Development', skills: [{ name: 'HTML/CSS', level: 85 }, { name: 'React', level: 65 }, { name: 'Node.js', level: 60 }, { name: 'Tailwind CSS', level: 70 }] },
    { title: 'Databases & Tools', skills: [{ name: 'MySQL', level: 75 }, { name: 'MongoDB', level: 65 }, { name: 'Git/GitHub', level: 80 }, { name: 'VS Code', level: 90 }] },
    { title: 'Core Concepts', skills: [{ name: 'Data Structures', level: 80 }, { name: 'Algorithms', level: 75 }, { name: 'OOP', level: 85 }, { name: 'Problem Solving', level: 80 }] },
  ];

  return (
    <section id="skills" ref={sectionRef} className="py-24 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-purple-glow/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <span className="text-primary font-medium mb-4 block">My Expertise</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Skills & <span className="gradient-text">Technologies</span></h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">A comprehensive overview of my technical skills developed through coursework and projects.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={category.title} className={`glass-card rounded-2xl p-6 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: `${categoryIndex * 100}ms` }}>
              <h3 className="text-xl font-display font-semibold mb-6 flex items-center gap-2"><span className="w-2 h-2 bg-primary rounded-full" />{category.title}</h3>
              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2"><span className="font-medium text-sm">{skill.name}</span><span className="text-sm text-muted-foreground">{skill.level}%</span></div>
                    <div className="skill-bar"><div className="skill-bar-fill" style={{ width: isVisible ? `${skill.level}%` : '0%', transitionDelay: `${categoryIndex * 100 + skillIndex * 100}ms` }} /></div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;