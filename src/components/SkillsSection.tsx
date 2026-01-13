import { useEffect, useRef, useState } from 'react';

const SkillsSection = () => {
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

  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React / Next.js', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'Tailwind CSS', level: 92 },
        { name: 'Vue.js', level: 75 },
      ],
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 88 },
        { name: 'Python', level: 82 },
        { name: 'PostgreSQL', level: 85 },
        { name: 'GraphQL', level: 78 },
      ],
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'Git / GitHub', level: 94 },
        { name: 'Docker', level: 80 },
        { name: 'AWS / Cloud', level: 76 },
        { name: 'Figma', level: 88 },
      ],
    },
  ];

  return (
    <section id="skills" ref={sectionRef} className="py-24 md:py-32 relative">
      {/* Background accents */}
      <div className="absolute left-0 top-1/4 w-80 h-80 bg-primary/5 rounded-full blur-[100px]" />
      <div className="absolute right-0 bottom-1/4 w-64 h-64 bg-accent/5 rounded-full blur-[80px]" />

      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className={`text-primary font-medium mb-4 tracking-widest uppercase text-sm ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            Skills & Expertise
          </p>
          <h2 className={`section-title ${isVisible ? 'animate-fade-in-up delay-100' : 'opacity-0'}`}>
            Technologies I{' '}
            <span className="gradient-text">work with</span>
          </h2>
          <p className={`text-muted-foreground max-w-2xl mx-auto ${isVisible ? 'animate-fade-in-up delay-200' : 'opacity-0'}`}>
            I'm constantly learning and expanding my skill set to stay up-to-date 
            with the latest technologies and best practices.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={category.title}
              className={`glass-card p-6 rounded-2xl ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
              style={{ animationDelay: `${300 + categoryIndex * 100}ms` }}
            >
              <h3 className="text-xl font-display font-semibold mb-6 gradient-text">
                {category.title}
              </h3>
              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-bar-fill"
                        style={{ 
                          width: isVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${500 + categoryIndex * 100 + skillIndex * 100}ms`
                        }}
                      />
                    </div>
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
