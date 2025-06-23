document.addEventListener('DOMContentLoaded', function() {
  // Typing Effect
  const typed = new Typed('.typing', {
    strings: ['Software Engineer', 'Web Developer', 'Problem Solver'],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
  });

  // Theme Toggle
  const toggleBtn = document.getElementById('theme-toggle');
  const icon = toggleBtn.querySelector('i');

  toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
    if (document.body.classList.contains('light-theme')) {
      icon.classList.remove('bx-moon');
      icon.classList.add('bx-sun');
      localStorage.setItem('theme', 'light');
    } else {
      icon.classList.remove('bx-sun');
      icon.classList.add('bx-moon');
      localStorage.setItem('theme', 'dark');
    }
  });

  // Check for saved theme preference
  if (localStorage.getItem('theme') === 'light') {
    document.body.classList.add('light-theme');
    icon.classList.remove('bx-moon');
    icon.classList.add('bx-sun');
  } else {
    document.body.classList.remove('light-theme');
    icon.classList.remove('bx-sun');
    icon.classList.add('bx-moon');
  }

  // Scroll-to-top button logic
  const scrollBtn = document.getElementById('scrollBtn');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
      scrollBtn.classList.add('active');
    } else {
      scrollBtn.classList.remove('active');
    }
  });

  scrollBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  
  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
      
      // Update active class in navbar
      document.querySelectorAll('.navbar a').forEach(link => {
        link.classList.remove('active');
      });
      this.classList.add('active');
    });
  });

  // Set active nav link based on scroll position
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.navbar a');
  
  window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      
      if (pageYOffset >= sectionTop - 300) {
        current = section.getAttribute('id');
      }
    });
    
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });

  // Animate skill bars when they come into view
  const skillBars = document.querySelectorAll('.progress-line span');
  
  const animateSkillBars = () => {
    skillBars.forEach(bar => {
      const barPosition = bar.parentElement.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.3;
      
      if (barPosition < screenPosition) {
        bar.style.width = bar.style.width;
      }
    });
  };
  
  window.addEventListener('scroll', animateSkillBars);
  animateSkillBars(); // Run once on page load
});

const menuToggle = document.createElement('button');
menuToggle.innerHTML = '<i class="bx bx-menu"></i>';
menuToggle.classList.add('menu-toggle');
header.appendChild(menuToggle);

menuToggle.addEventListener('click', () => {
  navbar.classList.toggle('active');
});

window.addEventListener('scroll', () => {
  const scrollTop = document.documentElement.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight;
  const clientHeight = document.documentElement.clientHeight;
  const progress = (scrollTop / (scrollHeight - clientHeight)) * 100;
  document.querySelector('.scroll-progress').style.width = `${progress}%`;
});