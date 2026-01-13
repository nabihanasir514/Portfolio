import React, { useState, useEffect, useRef } from 'react';
import { Mail, MapPin, Send, Github, Linkedin, CheckCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      // Configuration based on your provided IDs and dashboard screenshots
      await emailjs.send(
        'service_l7mkg6m',      // Your Service ID
        'template_jujwjwg',     // Your Template ID
        {
          name: formData.name,      // Maps to {{name}} in your dashboard
          email: formData.email,    // Maps to {{email}} for the Reply To field
          title: formData.subject,  // Maps to {{title}} in your Subject line
          message: formData.message // Maps to {{message}} in your template body
        },
        'k-TeCfB8OBUDl1Bsg'     // Your Public Key
      );

      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error: any) {
      console.error('EmailJS Error:', error);
      // Detailed alert to help you see WHY it failed (e.g., "Public key is invalid")
      alert(`Failed to send message: ${error?.text || 'Check your internet connection'}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'u2024514@giki.edu.pk' },
    { icon: MapPin, label: 'Location', value: 'GIKI, Topi, Pakistan' }
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/nabihanasir514', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/nabiha-nasir-4a06a2349', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:u2024514@giki.edu.pk', label: 'Email' }
  ];

  return (
    <section id="contact" ref={sectionRef} className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Let's Connect</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className={`transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-6">
              {contactInfo.map((info) => (
                <div key={info.label} className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-primary/10"><info.icon className="w-6 h-6 text-primary" /></div>
                  <div>
                    <p className="text-sm opacity-70">{info.label}</p>
                    <p className="font-medium">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={`p-8 bg-card rounded-2xl border transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {isSubmitted ? (
              <div className="text-center py-12">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-semibold mb-2">Thank You!</h3>
                <p>Your message has been sent successfully!</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-3 rounded-lg border bg-background focus:ring-2 focus:ring-primary outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 rounded-lg border bg-background focus:ring-2 focus:ring-primary outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full p-3 rounded-lg border bg-background focus:ring-2 focus:ring-primary outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full p-3 rounded-lg border bg-background focus:ring-2 focus:ring-primary outline-none resize-none"
                    required
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-primary text-primary-foreground rounded-xl font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-50"
                >
                  {isSubmitting ? 'Sending...' : <><Send className="w-5 h-5" />Send Message</>}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
