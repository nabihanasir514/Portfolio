import { useEffect, useRef, useState } from 'react';
import { Award, ExternalLink, Calendar } from 'lucide-react';

const CertificatesSection = () => {
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

  const certificates = [
    {
      title: 'Crash Course on Python',
      issuer: 'Google (Coursera)',
      date: '2024',
      category: 'Programming',
      color: 'from-primary to-purple-glow',
      link: 'https://www.coursera.org/account/accomplishments/verify/08DL1WW7TCYM',
    },
    {
      title: 'OCI 2025 AI Foundation Associate',
      issuer: 'Oracle',
      date: '2025',
      category: 'Cloud & AI',
      color: 'from-purple-glow to-purple-soft',
      link: 'https://catalog-education.oracle.com/pls/certview/sharebadge?id=A32CFF374FB96109E8FE4E3A98532B17ABB70B47DD7BE202A2375D51D84EED3C',
    },
    {
      title: 'Introduction to Software Engineering',
      issuer: 'IBM',
      date: '2024',
      category: 'Software Dev',
      color: 'from-purple-soft to-primary',
      link: '/certificates/Into_to_Software_Engineering.pdf',
    },
    {
      title: 'Foundations of UX Design',
      issuer: 'Google',
      date: '2024',
      category: 'Design',
      color: 'from-primary via-purple-glow to-purple-soft',
      link: '/certificates/Foundations_of_UX_Design.pdf',
    },
    {
      title: 'Introduction to Python',
      issuer: 'DataCamp',
      date: '2024',
      category: 'Programming',
      color: 'from-purple-glow via-purple-soft to-primary',
      link: '/certificates/Introduction_to_python.pdf',
    },
  ];

  const categories = ['All', 'Programming', 'Cloud & AI', 'Software Dev', 'Design'];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredCertificates = activeCategory === 'All' 
    ? certificates 
    : certificates.filter(cert => cert.category === activeCategory);

  return (
    <section id="certificates" ref={sectionRef} className="py-24 relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-1/4 h-1/3 bg-purple-glow/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className={`text-center mb-12 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <span className="text-primary font-medium mb-4 block">Achievements</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Certificates & <span className="gradient-text">Awards</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Certifications and credentials that validate my skills and commitment 
            to continuous learning.
          </p>
        </div>

        {/* Category Filters */}
        <div className={`flex flex-wrap justify-center gap-3 mb-12 ${isVisible ? 'animate-fade-in-up delay-100' : 'opacity-0'}`}>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-primary text-white shadow-lg shadow-primary/30'
                  : 'bg-primary/10 text-muted-foreground hover:bg-primary/20 hover:text-foreground'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Certificates Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCertificates.map((cert, index) => (
            <div
              key={cert.title}
              className={`group glass-card rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-300 ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${200 + index * 100}ms` }}
            >
              {/* Certificate Header */}
              <div className={`h-24 bg-gradient-to-r ${cert.color} relative`}>
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Award className="w-12 h-12 text-white/80" />
                </div>
                
                {/* Category Badge */}
                <span className="absolute top-3 right-3 px-3 py-1 text-xs rounded-full bg-black/30 backdrop-blur-sm text-white">
                  {cert.category}
                </span>
              </div>

              {/* Certificate Content */}
              <div className="p-6">
                <h3 className="text-lg font-display font-semibold mb-2 group-hover:text-primary transition-colors">
                  {cert.title}
                </h3>
                
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <span className="font-medium text-purple-soft">{cert.issuer}</span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {cert.date}
                  </span>
                </div>

                <a 
                  href={cert.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-primary hover:underline"
                >
                  <ExternalLink className="w-4 h-4" />
                  View Certificate
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;
