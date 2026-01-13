import { useState, useEffect, useRef } from 'react';
import { Mail, MapPin, Send, Github, Linkedin, CheckCircle } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) setIsVisible(true); }, { threshold: 0.1 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Please enter a valid email';
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const contactInfo = [{ icon: Mail, label: 'Email', value: 'u2024514@giki.edu.pk' }, { icon: MapPin, label: 'Location', value: 'GIKI, Topi, Pakistan' }];
  const socialLinks = [{ icon: Github, href: 'https://github.com/nabihanasir514', label: 'GitHub' }, { icon: Linkedin, href: 'https://www.linkedin.com/in/nabiha-nasir-4a06a2349', label: 'LinkedIn' }, { icon: Mail, href: 'mailto:u2024514@giki.edu.pk', label: 'Email' }];

  return (
    <section id="contact" ref={sectionRef} className="py-24 relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-1/3 h-1/2 bg-primary/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <span className="text-primary font-medium mb-4 block">Get In Touch</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Let's <span className="gradient-text">Connect</span></h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Have a project in mind or want to collaborate? Feel free to reach out.</p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className={`${isVisible ? 'animate-fade-in-up delay-100' : 'opacity-0'}`}>
            <h3 className="text-2xl font-display font-semibold mb-6">Contact Information</h3>
            <div className="space-y-6 mb-8">
              {contactInfo.map((info) => (<div key={info.label} className="flex items-center gap-4"><div className="p-3 rounded-xl bg-primary/10"><info.icon className="w-6 h-6 text-primary" /></div><div><p className="text-sm text-muted-foreground">{info.label}</p><p className="font-medium">{info.value}</p></div></div>))}
            </div>
            <div><h4 className="text-lg font-semibold mb-4">Follow Me</h4><div className="flex gap-4">{socialLinks.map((social) => (<a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-card border border-border hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 group"><social.icon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" /></a>))}</div></div>
            <div className="mt-8 glass-card rounded-2xl p-6 relative overflow-hidden"><h4 className="text-lg font-semibold mb-2">Open to Opportunities</h4><p className="text-sm text-muted-foreground">Currently looking for internship opportunities in software development.</p></div>
          </div>
          <div className={`glass-card rounded-2xl p-8 ${isVisible ? 'animate-fade-in-up delay-200' : 'opacity-0'}`}>
            {isSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12"><CheckCircle className="w-16 h-16 text-green-500 mb-4" /><h3 className="text-2xl font-display font-semibold mb-2">Thank You!</h3><p className="text-muted-foreground">Your message has been sent successfully!</p></div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div><label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label><input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className={`form-input w-full ${errors.name ? 'border-red-500' : ''}`} placeholder="Enter your name" />{errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}</div>
                <div><label htmlFor="email" className="block text-sm font-medium mb-2">Email Address</label><input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className={`form-input w-full ${errors.email ? 'border-red-500' : ''}`} placeholder="Enter your email" />{errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}</div>
                <div><label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label><input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} className={`form-input w-full ${errors.subject ? 'border-red-500' : ''}`} placeholder="What's this about?" />{errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}</div>
                <div><label htmlFor="message" className="block text-sm font-medium mb-2">Message</label><textarea id="message" name="message" rows={4} value={formData.message} onChange={handleChange} className={`form-input w-full resize-none ${errors.message ? 'border-red-500' : ''}`} placeholder="Write your message here..." />{errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}</div>
                <button type="submit" disabled={isSubmitting} className="glow-button w-full py-4 rounded-xl font-semibold text-white flex items-center justify-center gap-2 disabled:opacity-50">{isSubmitting ? (<><div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />Sending...</>) : (<><Send className="w-5 h-5" />Send Message</>)}</button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;