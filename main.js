/**
 * ==============================================================================
 * PALAK HAJARE — APPLE-INSPIRED EDITORIAL PORTFOLIO ENGINE
 * Subject: JavaScript Lab CA3 Mini Project (V Sem)
 * ==============================================================================
 * Key Concepts Demonstrated for Viva:
 * 1. DOM Traversal & Event Handling (Click, Input, Scroll, Keydown)
 * 2. Web Storage API (localStorage for Theme & Contact Draft auto-saving)
 * 3. IntersectionObserver API (Scroll-reveal and active section highlighting)
 * 4. Regular Expressions for Client-Side Validation
 * 5. Interactive Modal Sheets & Keyboard Accessibility (ESC key listener)
 * 6. Dynamic Date Generation & Toast Notifications
 * 7. One-Click Document & Certificate Lightbox Viewer
 * ==============================================================================
 */

document.addEventListener('DOMContentLoaded', () => {

  /* --- 1. Apple Dark / Light Mode with LocalStorage --- */
  const themeToggle = document.getElementById('themeToggle');
  const savedTheme = localStorage.getItem('palak-theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  // Apply initial theme
  if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
    document.body.classList.add('dark');
    if (themeToggle) themeToggle.innerHTML = '<i class="fa-regular fa-sun"></i>';
  } else {
    document.body.classList.remove('dark');
    if (themeToggle) themeToggle.innerHTML = '<i class="fa-regular fa-moon"></i>';
  }

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      document.body.classList.toggle('dark');
      const isDark = document.body.classList.contains('dark');
      themeToggle.innerHTML = isDark 
        ? '<i class="fa-regular fa-sun"></i>' 
        : '<i class="fa-regular fa-moon"></i>';
      themeToggle.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
      localStorage.setItem('palak-theme', isDark ? 'dark' : 'light');
      showToast(isDark ? 'Dark mode enabled' : 'Light mode enabled');
    });
  }

  /* --- 2. Mobile Navigation Toggle --- */
  const menuToggle = document.getElementById('menuToggle');
  const navlinks = document.getElementById('navlinks');

  if (menuToggle && navlinks) {
    menuToggle.addEventListener('click', () => {
      navlinks.classList.toggle('open');
      const isOpen = navlinks.classList.contains('open');
      menuToggle.innerHTML = isOpen 
        ? '<i class="fa-solid fa-xmark"></i>' 
        : '<i class="fa-solid fa-bars"></i>';
    });

    // Auto-close menu when link is clicked
    navlinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navlinks.classList.remove('open');
        if (menuToggle) menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
      });
    });
  }

  /* --- 3. Dynamic Year --- */
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  /* --- 4. Scroll-Spy Navigation Link Highlighting --- */
  const sections = document.querySelectorAll('section[id], .hero[id]');
  const navLinksItems = document.querySelectorAll('.navlinks a');

  window.addEventListener('scroll', () => {
    let currentId = '';
    const scrollPos = window.scrollY + 120;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        currentId = section.getAttribute('id');
      }
    });

    navLinksItems.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentId}`) {
        link.classList.add('active');
      }
    });
  });

  /* --- 5. Scroll Reveal with IntersectionObserver --- */
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

  /* --- 6. Modal Controller (Apple Sheet Style) --- */
  function openModal(modal) {
    if (!modal) return;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal(modal) {
    if (!modal) return;
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  // Close modals on backdrop click or close button
  document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) closeModal(overlay);
    });
  });

  document.querySelectorAll('.modal-close').forEach(btn => {
    btn.addEventListener('click', () => {
      const parentModal = btn.closest('.modal-overlay');
      closeModal(parentModal);
    });
  });

  // Keyboard Escape Key listener
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.modal-overlay.active').forEach(modal => closeModal(modal));
    }
  });

  /* --- 7. Project Details Modal Data & Handlers --- */
  const projectDetails = {
    'resq': {
      title: 'ResQ — Disaster Response Coordination Platform',
      symbol: '<i class="fa-solid fa-tower-broadcast"></i>',
      symbolClass: 'symbol-red',
      desc: 'A cloud-based real-time coordination platform designed to optimize disaster response and emergency relief. Features automated emergency priority score calculation based on affected population, critical injury counts, and incident severity. Dynamically matches and dispatches the nearest available emergency resources (Ambulances, Rescue Teams, Fire Trucks, Food & Water, Medical Supplies, Shelter) and tracks response states from Pending to Assigned, On the Way, and Completed.',
      tags: ['JavaScript (ES6+)', 'DOM State Engine', 'Cloud Architecture', 'Resource Dispatch', 'Real-time Analytics'],
      link: 'https://github.com/palak2345678'
    },
    'sentiment': {
      title: 'Customer Sentiment Analysis Agent',
      symbol: '<i class="fa-solid fa-comments"></i>',
      symbolClass: 'symbol-purple',
      desc: 'An interactive NLP web application deployed live on Streamlit Cloud that analyzes customer feedback and reviews in real time. It tokenizes raw input, extracts semantic features, and leverages VADER sentiment analysis to classify reviews into Positive, Neutral, or Negative polarity with confidence metrics.',
      tags: ['Python', 'Streamlit Cloud', 'Natural Language Processing (NLP)', 'VADER', 'Scikit-learn', 'Pandas'],
      link: 'https://customer-sentiment-analysis-agent-kczkwtxaimxetz35h7h7oa.streamlit.app/'
    },
    'student': {
      title: 'Student Performance Prediction',
      symbol: '<i class="fa-solid fa-chart-line"></i>',
      symbolClass: 'symbol-blue',
      desc: 'A supervised machine learning system developed in Python using Scikit-learn. Performs exploratory data analysis (EDA), statistical preprocessing, and trains predictive models to forecast academic grades and highlight students who may benefit from early academic intervention.',
      tags: ['Python', 'Scikit-learn', 'Exploratory Data Analysis', 'Machine Learning', 'Data Visualization'],
      link: 'https://github.com/palak2345678'
    },
    'face': {
      title: 'Real-Time Face Detection System',
      symbol: '<i class="fa-solid fa-camera"></i>',
      symbolClass: 'symbol-green',
      desc: 'An AI computer vision application developed using Python and OpenCV. Implements image processing pipelines, grayscale transformation, and cascade classifiers to perform fast, real-time facial bounding and detection from video feeds.',
      tags: ['Python', 'OpenCV', 'Computer Vision', 'Image Processing', 'Object Detection'],
      link: 'https://github.com/palak2345678'
    },
    'rain': {
      title: 'Rain Detection System (IoT)',
      symbol: '<i class="fa-solid fa-cloud-rain"></i>',
      symbolClass: 'symbol-orange',
      desc: 'An embedded Internet of Things hardware project built with physical moisture sensors and a microcontroller. Features automated circuit logic to measure rainfall intensity and dispatch real-time warning indicators for weather monitoring.',
      tags: ['IoT', 'Microcontroller', 'Embedded Systems', 'Sensors', 'Automation'],
      link: 'https://github.com/palak2345678'
    },
    'expense': {
      title: 'AI Expense Audit & Fraud Detection',
      symbol: '<i class="fa-solid fa-shield-halved"></i>',
      symbolClass: 'symbol-purple',
      desc: 'An intelligent corporate expense auditing platform concept using unsupervised machine learning anomaly detection to flag irregular transactions, duplicate submissions, and out-of-policy employee expense claims.',
      tags: ['Python', 'Machine Learning', 'Anomaly Detection', 'Data Analytics', 'Dashboard'],
      link: 'https://github.com/palak2345678'
    }
  };

  const projectModal = document.getElementById('projectModal');
  document.querySelectorAll('.card-details-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const projId = btn.getAttribute('data-project');
      const data = projectDetails[projId];
      if (data && projectModal) {
        document.getElementById('projModalTitle').textContent = data.title;
        document.getElementById('projModalDesc').textContent = data.desc;
        
        const symEl = document.getElementById('projModalSymbol');
        symEl.className = `project-symbol ${data.symbolClass}`;
        symEl.innerHTML = data.symbol;

        const tagsBox = document.getElementById('projModalTags');
        tagsBox.innerHTML = '';
        data.tags.forEach(t => {
          const span = document.createElement('span');
          span.className = 'tag';
          span.textContent = t;
          tagsBox.appendChild(span);
        });

        const linkEl = document.getElementById('projModalLink');
        linkEl.href = data.link;

        openModal(projectModal);
      }
    });
  });

  /* --- 8. Certificate Credentials Modal (One-Click Document Viewer) --- */
  const certModal = document.getElementById('certModal');
  const certImg = document.getElementById('certModalImg');
  const certIframe = document.getElementById('certModalIframe');
  const certDownloadBtn = document.getElementById('certModalDownloadBtn');

  document.querySelectorAll('.cert-trigger').forEach(card => {
    card.addEventListener('click', () => {
      const title = card.getAttribute('data-title');
      const issuer = card.getAttribute('data-issuer');
      const id = card.getAttribute('data-id');
      const date = card.getAttribute('data-date');
      const pdf = card.getAttribute('data-pdf');
      const svg = card.getAttribute('data-svg');

      if (certModal) {
        document.getElementById('certModalName').textContent = title;
        document.getElementById('certModalIssuer').textContent = `Issued by ${issuer}`;
        document.getElementById('certModalId').textContent = `Verification ID / URL: ${id}`;
        document.getElementById('certModalDate').textContent = date ? `Completion Date: ${date}` : '';

        // Prioritize SVG vector preview for pristine high-res visual display
        if (svg) {
          certImg.src = svg;
          certImg.style.display = 'block';
          certIframe.style.display = 'none';
        } else if (pdf) {
          certIframe.src = pdf;
          certIframe.style.display = 'block';
          certImg.style.display = 'none';
        } else {
          certImg.src = 'assets/images/cert-infosys-llm.svg';
          certImg.style.display = 'block';
          certIframe.style.display = 'none';
        }

        // Download / Direct view link
        if (pdf) {
          certDownloadBtn.href = pdf;
          certDownloadBtn.style.display = 'inline-flex';
        } else if (svg) {
          certDownloadBtn.href = svg;
          certDownloadBtn.style.display = 'inline-flex';
        } else {
          certDownloadBtn.href = '#';
        }

        openModal(certModal);
      }
    });
  });

  /* --- 9. Gallery Lightbox Modal --- */
  const galleryModal = document.getElementById('galleryModal');
  document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', () => {
      const title = item.getAttribute('data-title');
      const desc = item.getAttribute('data-desc');
      const icon = item.querySelector('i').className;

      if (galleryModal) {
        document.getElementById('galleryModalHeading').textContent = title;
        document.getElementById('galleryModalDesc').textContent = desc;
        document.getElementById('galleryModalIcon').className = icon;
        openModal(galleryModal);
      }
    });
  });

  /* --- 10. Resume Modal & Print / Download Trigger --- */
  const resumeModal = document.getElementById('resumeModal');
  document.querySelectorAll('.open-resume-trigger').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openModal(resumeModal);
    });
  });

  const printResumeBtn = document.getElementById('printResumeBtn');
  if (printResumeBtn) {
    printResumeBtn.addEventListener('click', () => {
      window.print();
    });
  }

  /* --- 11. Interactive Contact Form with LocalStorage Auto-Drafting --- */
  const contactForm = document.getElementById('contactForm');
  const contactName = document.getElementById('contactName');
  const contactEmail = document.getElementById('contactEmail');
  const contactMsg = document.getElementById('contactMessage');
  const charHint = document.getElementById('charHint');

  // Auto-load draft from localStorage
  const savedDraft = localStorage.getItem('palak-contact-draft');
  if (savedDraft) {
    try {
      const draft = JSON.parse(savedDraft);
      if (contactName && draft.name) contactName.value = draft.name;
      if (contactEmail && draft.email) contactEmail.value = draft.email;
      if (contactMsg && draft.msg) {
        contactMsg.value = draft.msg;
        if (charHint) charHint.textContent = `${draft.msg.length} / 400`;
      }
    } catch (e) {
      console.warn('Error reading saved draft');
    }
  }

  // Auto-save draft on every input
  const persistDraft = () => {
    const draft = {
      name: contactName ? contactName.value : '',
      email: contactEmail ? contactEmail.value : '',
      msg: contactMsg ? contactMsg.value : ''
    };
    localStorage.setItem('palak-contact-draft', JSON.stringify(draft));
  };

  [contactName, contactEmail, contactMsg].forEach(el => {
    if (el) el.addEventListener('input', persistDraft);
  });

  // Character counter
  if (contactMsg && charHint) {
    contactMsg.addEventListener('input', () => {
      charHint.textContent = `${contactMsg.value.length} / 400`;
    });
  }

  // Client-side validation & submission simulation
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameVal = contactName.value.trim();
      const emailVal = contactEmail.value.trim();
      const msgVal = contactMsg.value.trim();
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (nameVal.length < 2) {
        showToast('Please enter your full name', 'error');
        contactName.focus();
        return;
      }

      if (!emailPattern.test(emailVal)) {
        showToast('Please enter a valid email address', 'error');
        contactEmail.focus();
        return;
      }

      if (msgVal.length < 8) {
        showToast('Message must be at least 8 characters long', 'error');
        contactMsg.focus();
        return;
      }

      const submitBtn = document.getElementById('submitBtn');
      const originalHTML = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Sending...';

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalHTML;

        showToast(`Thank you, ${nameVal}! Your message has been dispatched.`);
        contactForm.reset();
        localStorage.removeItem('palak-contact-draft');
        if (charHint) charHint.textContent = '0 / 400';
      }, 1000);
    });
  }

  /* --- 12. Toast Notification Function --- */
  function showToast(message, type = 'info') {
    const box = document.getElementById('toastBox');
    if (!box) return;

    const toast = document.createElement('div');
    toast.className = 'toast';
    const icon = type === 'error' 
      ? '<i class="fa-solid fa-circle-exclamation" style="color:#ef4444;"></i>' 
      : '<i class="fa-solid fa-circle-check" style="color:var(--accent);"></i>';
    toast.innerHTML = `${icon} <span>${message}</span>`;
    box.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      toast.style.transition = 'all 0.25s ease';
      setTimeout(() => toast.remove(), 250);
    }, 3500);
  }

});
