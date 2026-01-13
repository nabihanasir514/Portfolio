import { useEffect, useRef, useState } from 'react';
import { Briefcase, GraduationCap } from 'lucide-react';

const ExperienceSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const experiences = [
    {
      type: 'work',
      title: 'Senior Full Stack Developer',
      company: 'TechVision Inc.',
      period: '2022 - Present',
      description: 'Leading development of enterprise SaaS applications. Architecting scalable solutions and mentoring junior developers.',
    },
    {
      type: 'work',
      title: 'Full Stack Developer',
      company: 'Digital Dynamics',
      period: '2020 - 2022',
      description: 'Built and maintained multiple client projects using React and Node.js. Implemented CI/CD pipelines and improved deployment processes.',
    },
    {
      type: 'education',
      title: 'Master of Computer Science',
      company: 'Stanford University',
      period: '2018 - 2020',
      description: 'Specialized in Human-Computer Interaction and Software Engineering. Graduated with honors.',
    },
    {
      type: 'work',
      title: 'Frontend Developer',
      company: 'StartupHub',
      period: '2018 - 2020',
      description: 'Developed responsive web applications for early-stage startups. Focused on performance optimization and accessibility.',
    },
    {
      type: 'education',
      title: 'Bachelor of Science in Computer Science',
      company: 'UC Berkeley',
      period: '2014 - 2018',
      description: 'Foundation in algorithms, data structures, and software development. Dean\'s List recipient.',
    },
  ];

  return (
    <section id="experience" ref={sectionRef} className="py-24 md:py-32 relative">
      {/* Background accents */}
      <div className="absolute left-1/2 -translate-x-1/2 top-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />

      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className={`text-primary font-medium mb-4 tracking-widest uppercase text-sm ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            My Journey
          </p>
          <h2 className={`section-title ${isVisible ? 'animate-fade-in-up delay-100' : 'opacity-0'}`}>
            Experience &{' '}
            <span className="gradient-text">Education</span>
          </h2>
          <p className={`text-muted-foreground max-w-2xl mx-auto ${isVisible ? 'animate-fade-in-up delay-200' : 'opacity-0'}`}>
            My professional journey and academic background that shaped my skills and expertise.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="timeline-line" />

          {experiences.map((exp, index) => (
            <div 
              key={index}
              className={`relative flex items-start mb-12 last:mb-0 ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${300 + index * 150}ms` }}
            >
              {/* Timeline dot */}
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 z-10">
                <div className="timeline-dot" />
              </div>

              {/* Content */}
              <div className={`w-full pl-12 md:pl-0 ${
                index % 2 === 0 
                  ? 'md:pr-[calc(50%+2rem)] md:text-right' 
                  : 'md:pl-[calc(50%+2rem)]'
              }`}>
                <div className={`glass-card p-6 rounded-2xl hover:border-primary/50 transition-all duration-300 ${
                  index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'
                } max-w-lg`}>
                  <div className={`flex items-center gap-3 mb-3 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                    <div className={`p-2 rounded-lg bg-primary/10 ${index % 2 === 0 ? 'md:order-2' : ''}`}>
                      {exp.type === 'work' 
                        ? <Briefcase className="w-4 h-4 text-primary" />
                        : <GraduationCap className="w-4 h-4 text-primary" />
                      }
                    </div>
                    <span className="text-sm text-primary font-medium">{exp.period}</span>
                  </div>
                  <h3 className="text-xl font-display font-semibold mb-1">
                    {exp.title}
                  </h3>
                  <p className="text-primary/80 font-medium mb-3">{exp.company}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {exp.description}
                  </p>
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
