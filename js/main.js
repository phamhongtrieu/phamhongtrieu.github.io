document.addEventListener('DOMContentLoaded', () => {
  
  /* ==========================================================================
     1. HAMBURGER MENU (MOBILE NAVIGATION)
     ========================================================================== */
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  // Toggle Menu
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
  });

  // Close menu when a link is clicked
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navMenu.classList.remove('active');
    });
  });


  /* ==========================================================================
     2. STICKY NAV ON SCROLL
     ========================================================================== */
  const header = document.querySelector('header');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });


  /* ==========================================================================
     3. TYPING EFFECT (HERO SECTION)
     ========================================================================== */
  const typingTextElement = document.querySelector('.typing-text');
  const words = [
    "Người đam mê phát triển phần mềm",
    "Sinh viên Công nghệ Thông tin",
    "Yêu thích Python, Java và Web",
    "Luôn học hỏi công nghệ mới"
  ];
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typeSpeed = 100;

  function typeEffect() {
    const currentWord = words[wordIndex];
    
    if (isDeleting) {
      // Deleting character
      typingTextElement.textContent = currentWord.substring(0, charIndex - 1);
      charIndex--;
      typeSpeed = 50; // Speed up when deleting
    } else {
      // Typing character
      typingTextElement.textContent = currentWord.substring(0, charIndex + 1);
      charIndex++;
      typeSpeed = 100;
    }

    // If typing finished, wait then start deleting
    if (!isDeleting && charIndex === currentWord.length) {
      isDeleting = true;
      typeSpeed = 1500; // Pause at full word
    } 
    // If deleting finished, go to next word
    else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      typeSpeed = 500; // Pause before typing next word
    }

    setTimeout(typeEffect, typeSpeed);
  }

  // Start typing if element exists
  if (typingTextElement) {
    typeEffect();
  }


  /* ==========================================================================
     4. INTERSECTION OBSERVER FOR ACTIVE MENU LINKS
     ========================================================================== */
  const sections = document.querySelectorAll('section[id]');
  
  const scrollActive = () => {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120; // Offset for navbar height
      const sectionId = current.getAttribute('id');
      const navLink = document.querySelector(`.nav-menu a[href*=${sectionId}]`);

      if (navLink) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          navLink.classList.add('active');
        } else {
          navLink.classList.remove('active');
        }
      }
    });
  };

  window.addEventListener('scroll', scrollActive);


  /* ==========================================================================
     5. SKILL BARS ANIMATION ON SCROLL (DISABLED - REMOVED PROGRESS BARS)
     ==========================================================================
  const skillBars = document.querySelectorAll('.skill-bar-fill');
  
  const animateSkills = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const bar = entry.target;
        const percentage = bar.getAttribute('data-percentage');
        bar.style.width = percentage + '%';
        observer.unobserve(bar); // Stop observing after animation
      }
    });
  };

  const skillsObserver = new IntersectionObserver(animateSkills, {
    threshold: 0.2
  });

  skillBars.forEach(bar => {
    skillsObserver.observe(bar);
  });
  ========================================================================== */


  /* ==========================================================================
     6. CONTACT FORM VALIDATION & SIMULATION
     ========================================================================== */
  const contactForm = document.getElementById('contactForm');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();

      // Simple validation
      if (!name || !email || !message) {
        showToast('Vui lòng nhập đầy đủ tất cả các trường thông tin!', 'error');
        return;
      }

      if (!validateEmail(email)) {
        showToast('Email không đúng định dạng. Vui lòng kiểm tra lại!', 'error');
        return;
      }

      const submitButton = document.getElementById('btnSubmitContact');
      const originalBtnHtml = submitButton ? submitButton.innerHTML : 'Gửi lời nhắn <i data-lucide="send"></i>';

      // Disable button during submit
      if (submitButton) {
        submitButton.disabled = true;
        submitButton.innerHTML = 'Đang gửi...';
      }

      // Send form data to Formspree via AJAX
      const data = new FormData(contactForm);
      fetch(contactForm.action, {
        method: contactForm.method,
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      })
      .then(response => {
        if (response.ok) {
          showToast('Cảm ơn bạn đã liên hệ! Mình sẽ phản hồi lại sớm nhất có thể.', 'success');
          contactForm.reset();
        } else {
          showToast('Có lỗi xảy ra khi gửi tin nhắn. Vui lòng thử lại!', 'error');
        }
      })
      .catch(error => {
        showToast('Có lỗi kết nối mạng. Vui lòng thử lại!', 'error');
      })
      .finally(() => {
        if (submitButton) {
          submitButton.disabled = false;
          submitButton.innerHTML = originalBtnHtml;
          // Re-initialize Lucide icons to render the icon in button
          if (window.lucide) {
            window.lucide.createIcons();
          }
        }
      });
    });
  }

  // Email validation helper
  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  // Toast Notification System
  function showToast(message, type = 'success') {
    // Create toast element
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    
    // Icon based on type
    const icon = type === 'success' ? 'check-circle' : 'alert-circle';
    
    toast.innerHTML = `
      <div class="toast-content">
        <i class="lucide-${icon}"></i>
        <span>${message}</span>
      </div>
      <div class="toast-progress"></div>
    `;

    // Add toast to DOM
    let toastContainer = document.querySelector('.toast-container');
    if (!toastContainer) {
      toastContainer = document.createElement('div');
      toastContainer.className = 'toast-container';
      document.body.appendChild(toastContainer);
    }
    
    toastContainer.appendChild(toast);

    // Dynamic styles for Toast in Javascript (keeps stylesheet cleaner)
    Object.assign(toastContainer.style, {
      position: 'fixed',
      bottom: '30px',
      right: '30px',
      zIndex: '9999',
      display: 'flex',
      flexDirection: 'column',
      gap: '10px'
    });

    Object.assign(toast.style, {
      background: 'rgba(17, 24, 39, 0.95)',
      color: '#fff',
      padding: '1rem 1.5rem',
      borderRadius: '8px',
      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.1)',
      borderLeft: `4px solid ${type === 'success' ? '#10b981' : '#ef4444'}`,
      backdropFilter: 'blur(8px)',
      display: 'flex',
      flexDirection: 'column',
      width: '320px',
      opacity: '0',
      transform: 'translateY(20px)',
      transition: 'opacity 0.4s ease, transform 0.4s ease',
      overflow: 'hidden'
    });

    // Animate in
    setTimeout(() => {
      toast.style.opacity = '1';
      toast.style.transform = 'translateY(0)';
    }, 10);

    // Toast Inner content styles
    const content = toast.querySelector('.toast-content');
    Object.assign(content.style, {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      fontSize: '0.9rem',
      fontWeight: '500'
    });

    // Add progress bar
    const progress = toast.querySelector('.toast-progress');
    Object.assign(progress.style, {
      position: 'absolute',
      bottom: '0',
      left: '0',
      height: '3px',
      width: '100%',
      backgroundColor: type === 'success' ? '#10b981' : '#ef4444',
      transition: 'width 4s linear'
    });

    // Animate progress bar width
    setTimeout(() => {
      progress.style.width = '0%';
    }, 50);

    // Remove toast after 4 seconds
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(-20px)';
      setTimeout(() => {
        toast.remove();
      }, 400);
    }, 4000);
  }

  /* ==========================================================================
     7. SCROLL REVEAL ANIMATION (ADDED)
     ========================================================================== */
  const revealElements = document.querySelectorAll(
    '.section-title, .about-info, .about-stats-container, .skill-category, .projects-carousel, .contact-info, .contact-form-wrapper'
  );

  const revealOnScroll = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target); // Trigger only once
      }
    });
  };

  const revealObserver = new IntersectionObserver(revealOnScroll, {
    root: null,
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  });

  revealElements.forEach(el => {
    el.classList.add('reveal');
    revealObserver.observe(el);
  });

  /* ==========================================================================
     8. 3D PROJECTS CAROUSEL (ADDED)
     ========================================================================== */
  const carouselCards = document.querySelectorAll('.carousel-track .project-card');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const dotsContainer = document.getElementById('carouselDots');
  let carouselIndex = 0;

  if (carouselCards.length > 0 && prevBtn && nextBtn && dotsContainer) {
    // Generate dots dynamically
    carouselCards.forEach((_, index) => {
      const dot = document.createElement('div');
      dot.className = `carousel-dot ${index === 0 ? 'active' : ''}`;
      dot.setAttribute('data-index', index);
      dotsContainer.appendChild(dot);
    });

    const dots = document.querySelectorAll('.carousel-dot');

    const updateCarousel = () => {
      carouselCards.forEach((card, index) => {
        card.classList.remove('active-card', 'prev-card', 'next-card');
        
        // Hide card by default (CSS active/prev/next classes will control visibility)
        card.style.opacity = '0';
        card.style.visibility = 'hidden';
        card.style.pointerEvents = 'none';

        // Stagger positions circularly
        if (index === carouselIndex) {
          card.classList.add('active-card');
          card.style.opacity = '1';
          card.style.visibility = 'visible';
          card.style.pointerEvents = 'auto';
        } else if (index === (carouselIndex - 1 + carouselCards.length) % carouselCards.length) {
          card.classList.add('prev-card');
          card.style.opacity = '0.6';
          card.style.visibility = 'visible';
        } else if (index === (carouselIndex + 1) % carouselCards.length) {
          card.classList.add('next-card');
          card.style.opacity = '0.6';
          card.style.visibility = 'visible';
        }
      });

      // Update dot states
      dots.forEach((dot, index) => {
        if (index === carouselIndex) {
          dot.classList.add('active');
        } else {
          dot.classList.remove('active');
        }
      });
    };

    // Nav button click events
    prevBtn.addEventListener('click', () => {
      carouselIndex = (carouselIndex - 1 + carouselCards.length) % carouselCards.length;
      updateCarousel();
    });

    nextBtn.addEventListener('click', () => {
      carouselIndex = (carouselIndex + 1) % carouselCards.length;
      updateCarousel();
    });

    // Dot click events
    dots.forEach(dot => {
      dot.addEventListener('click', (e) => {
        carouselIndex = parseInt(e.target.getAttribute('data-index'));
        updateCarousel();
      });
    });

    // Initial draw
    updateCarousel();
  }

  /* ==========================================================================
     9. SNOW EFFECT (ADDED)
     ========================================================================== */
  const snowContainer = document.getElementById('snowContainer');
  const snowFlakesChars = ['❄', '❅', '❆'];
  
  if (snowContainer) {
    // Detect mobile to limit snowflake count for better performance
    const isMobileDevice = window.innerWidth <= 768;
    const maxFlakes = isMobileDevice ? 20 : 45;

    for (let i = 0; i < maxFlakes; i++) {
      createSnowflake();
    }
  }

  function createSnowflake() {
    const flake = document.createElement('span');
    flake.className = 'snowflake';
    flake.innerText = snowFlakesChars[Math.floor(Math.random() * snowFlakesChars.length)];
    
    // Random sizes (10px to 25px)
    const size = Math.random() * 15 + 10;
    flake.style.fontSize = size + 'px';
    
    // Random horizontal positions (0% to 100%)
    flake.style.left = Math.random() * 100 + 'vw';
    
    // Random animations speed (6s to 12s)
    const duration = Math.random() * 6 + 6;
    flake.style.animationDuration = duration + 's';
    
    // Random starting delays (0s to 10s) so they don't fall all at once
    const delay = Math.random() * 10;
    flake.style.animationDelay = '-' + delay + 's'; // Negative delay starts animation immediately offset by time
    
    // Random opacity (0.4 to 0.9)
    flake.style.opacity = Math.random() * 0.5 + 0.4;
    
    snowContainer.appendChild(flake);
  }

  /* ==========================================================================
     10. THEME TOGGLE (DARK / LIGHT MODE) (ADDED)
     ========================================================================== */
  const themeToggleBtn = document.getElementById('themeToggle');
  const themeIcon = document.getElementById('themeIcon');
  
  if (themeToggleBtn && themeIcon) {
    // Check saved theme or system preference
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme === 'light') {
      document.documentElement.classList.add('light-theme');
      themeIcon.className = 'fa-solid fa-sun';
    } else {
      document.documentElement.classList.remove('light-theme');
      themeIcon.className = 'fa-solid fa-moon';
    }

    // Toggle theme on button click
    themeToggleBtn.addEventListener('click', () => {
      const isLightTheme = document.documentElement.classList.toggle('light-theme');
      
      if (isLightTheme) {
        themeIcon.className = 'fa-solid fa-sun';
        localStorage.setItem('theme', 'light');
      } else {
        themeIcon.className = 'fa-solid fa-moon';
        localStorage.setItem('theme', 'dark');
      }
    });
  }
});
