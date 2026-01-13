import { Heart, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: 'https://github.com/nabihanasir', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/nabiha-nasir-4a06a2349', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:nabiha.nasir@giki.edu.pk', label: 'Email' },
  ];

  return (
    <footer className="py-12 border-t border-border relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-24 bg-primary/5 rounded-t-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center gap-6">
          {/* Logo */}
          <a href="#home" className="text-2xl font-display font-bold gradient-text">
            Nabiha Nasir
          </a>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-card/50 border border-border hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 group"
              >
                <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            ))}
          </div>

          {/* Divider */}
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

          {/* Copyright */}
          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-1">
              © {currentYear} Nabiha Nasir. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
              Software Engineering Student @ <span className="text-primary font-medium">GIKI</span>
            </p>
          </div>

          {/* Made with Love */}
          <p className="text-xs text-muted-foreground flex items-center gap-1">
            Made with <Heart className="w-3 h-3 text-primary fill-primary" /> using React & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
