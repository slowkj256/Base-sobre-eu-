document.addEventListener('DOMContentLoaded', () => {

  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const scanLine = document.querySelector('.scan-line');
  const updateScanLine = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    if (scanLine) scanLine.style.width = progress + '%';
  };

  const header = document.getElementById('siteHeader');
  const updateHeader = () => {
    if (!header) return;
    if (window.scrollY > 40) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
  };

  let scrollTicking = false;
  window.addEventListener('scroll', () => {
    if (!scrollTicking) {
      requestAnimationFrame(() => {
        updateScanLine();
        updateHeader();
        scrollTicking = false;
      });
      scrollTicking = true;
    }
  }, { passive: true });

  updateScanLine();
  updateHeader();

  const navToggle = document.getElementById('navToggle');
  const mainNav = document.getElementById('mainNav');

  if (navToggle && mainNav) {
    navToggle.addEventListener('click', () => {
      const isOpen = mainNav.classList.toggle('open');
      navToggle.classList.toggle('active', isOpen);
      navToggle.setAttribute('aria-expanded', String(isOpen));
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    mainNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mainNav.classList.remove('open');
        navToggle.classList.remove('active');
        navToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });
  }

  const revealEls = document.querySelectorAll('[data-reveal]');

  if ('IntersectionObserver' in window && revealEls.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.15,
      rootMargin: '0px 0px -60px 0px'
    });

    revealEls.forEach(el => observer.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('is-visible'));
  }

  const headerHeight = () => (header ? header.offsetHeight : 0);

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href');
      if (!targetId || targetId === '#') return;

      const targetEl = document.querySelector(targetId);
      if (!targetEl) return;

      e.preventDefault();
      const offset = headerHeight() + 16;
      const top = targetEl.getBoundingClientRect().top + window.scrollY - offset;

      window.scrollTo({ top, behavior: 'smooth' });
    });
  });

  const particlesContainer = document.querySelector('.particles');
  if (particlesContainer) {
    function createParticles() {
      const particleCount = window.innerWidth > 768 ? 60 : 25;
      
      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.position = 'fixed';
        particle.style.width = Math.random() * 4 + 1 + 'px';
        particle.style.height = particle.style.width;
        particle.style.background = Math.random() > 0.5 ? '#52D273' : '#2DD96F';
        particle.style.borderRadius = '50%';
        particle.style.pointerEvents = 'none';
        particle.style.opacity = Math.random() * 0.6 + 0.2;
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.zIndex = '-1';
        particle.style.animation = `float-particle ${Math.random() * 25 + 20}s infinite linear`;
        particle.style.filter = `blur(${Math.random() * 2}px)`;
        particle.style.boxShadow = `0 0 ${Math.random() * 10 + 5}px rgba(82, 210, 115, 0.5)`;
        particlesContainer.appendChild(particle);
      }
    }

    createParticles();
  }

  document.querySelectorAll('.service-card, .project-card, .testimonial-card').forEach((card, index) => {
    card.style.animationDelay = `${index * 0.1}s`;
  });

  const cards = document.querySelectorAll('.service-card, .project-card');
  cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-8px) scale(1.02)';
    });
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0) scale(1)';
    });
  });

  const skillBars = document.querySelectorAll('.skill-progress');
  if ('IntersectionObserver' in window) {
    const skillObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.animation = 'none';
          setTimeout(() => {
            entry.target.style.animation = 'progress-fill 1s var(--ease) forwards';
          }, 100);
          skillObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    skillBars.forEach(bar => skillObserver.observe(bar));
  }

  const style = document.createElement('style');
  style.textContent = `
    @keyframes progress-fill {
      from {
        width: 0% !important;
      }
    }
    
    @keyframes float-particle {
      0% {
        transform: translateY(0) translateX(0);
        opacity: 0.2;
      }
      50% {
        opacity: 0.6;
      }
      100% {
        transform: translateY(-100vh) translateX(100px);
        opacity: 0;
      }
    }
  `;
  document.head.appendChild(style);

  document.addEventListener('mousemove', (e) => {
    const blur1 = document.querySelector('.blur-1');
    const blur2 = document.querySelector('.blur-2');
    
    if (blur1 && blur2 && window.innerWidth > 1024) {
      const x = (e.clientX / window.innerWidth) * 10;
      const y = (e.clientY / window.innerHeight) * 10;
      
      blur1.style.transform = `translate(${x}px, ${y}px)`;
      blur2.style.transform = `translate(${-x}px, ${-y}px)`;
    }
  });

  const links = document.querySelectorAll('a[href^="mailto:"], a[href^="https://wa.me"], a[href^="https://"]');
  links.forEach(link => {
    if (link.href.includes('seu@email.com') || link.href.includes('5511999999999')) {
      link.style.cursor = 'not-allowed';
      link.style.opacity = '0.6';
      link.addEventListener('click', (e) => {
        e.preventDefault();
      });
    }
  });

});
