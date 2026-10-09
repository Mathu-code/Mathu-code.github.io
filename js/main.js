// Main Portfolio Script for Mathuran (Mathu-code)
// http://mathu.me

document.addEventListener("DOMContentLoaded", () => {
  initNeuralBackground();
  initTypingEffect();
  initThemeToggle();
  initNavigation();
  initProjectsRender();
  initModal();
  initContactForm();
  fetchGitHubLiveStats();
  initScrollAnimations();
});

/* ----------------------------------------------------
   1. NEURAL PARTICLE CANVAS BACKGROUND
---------------------------------------------------- */
function initNeuralBackground() {
  const canvas = document.getElementById("neural-canvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  const particles = [];
  const particleCount = Math.min(Math.floor(window.innerWidth / 16), 85);
  const maxDistance = 140;

  const mouse = { x: null, y: null, radius: 160 };

  window.addEventListener("resize", () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  window.addEventListener("mousemove", (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  window.addEventListener("mouseleave", () => {
    mouse.x = null;
    mouse.y = null;
  });

  class Particle {
    constructor() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.vx = (Math.random() - 0.5) * 0.75;
      this.vy = (Math.random() - 0.5) * 0.75;
      this.radius = Math.random() * 2 + 1;
      this.color = Math.random() > 0.5 ? "rgba(0, 240, 255," : "rgba(168, 85, 247,";
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;

      if (this.x < 0 || this.x > width) this.vx *= -1;
      if (this.y < 0 || this.y > height) this.vy *= -1;

      // Mouse attraction / gentle push
      if (mouse.x !== null && mouse.y !== null) {
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < mouse.radius) {
          const force = (mouse.radius - dist) / mouse.radius;
          this.x -= (dx / dist) * force * 2.5;
          this.y -= (dy / dist) * force * 2.5;
        }
      }
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = `${this.color} 0.75)`;
      ctx.shadowBlur = 10;
      ctx.shadowColor = `${this.color} 0.5)`;
      ctx.fill();
    }
  }

  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);

    // Draw connecting lines
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < maxDistance) {
          const alpha = (1 - dist / maxDistance) * 0.22;
          ctx.strokeStyle = `rgba(99, 102, 241, ${alpha})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }

    // Connect to mouse
    if (mouse.x !== null && mouse.y !== null) {
      for (let i = 0; i < particles.length; i++) {
        const dx = mouse.x - particles[i].x;
        const dy = mouse.y - particles[i].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < mouse.radius) {
          const alpha = (1 - dist / mouse.radius) * 0.35;
          ctx.strokeStyle = `rgba(0, 240, 255, ${alpha})`;
          ctx.lineWidth = 1.2;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }
      }
    }

    particles.forEach((p) => {
      p.update();
      p.draw();
    });

    requestAnimationFrame(animate);
  }

  animate();
}

/* ----------------------------------------------------
   2. DYNAMIC HERO TYPING EFFECT
---------------------------------------------------- */
function initTypingEffect() {
  const target = document.getElementById("hero-typing-target");
  if (!target) return;

  const roles = [
    "Full Stack Engineer",
    "AI / Machine Learning Specialist",
    "Deep Learning & NLP Practitioner",
    "MERN & Cloud Architect"
  ];

  let roleIdx = 0;
  let charIdx = 0;
  let isDeleting = false;
  const typeSpeed = 80;
  const deleteSpeed = 40;
  const pauseEnd = 1800;

  function type() {
    const currentRole = roles[roleIdx];

    if (isDeleting) {
      target.textContent = currentRole.substring(0, charIdx - 1);
      charIdx--;
    } else {
      target.textContent = currentRole.substring(0, charIdx + 1);
      charIdx++;
    }

    let delay = isDeleting ? deleteSpeed : typeSpeed;

    if (!isDeleting && charIdx === currentRole.length) {
      delay = pauseEnd;
      isDeleting = true;
    } else if (isDeleting && charIdx === 0) {
      isDeleting = false;
      roleIdx = (roleIdx + 1) % roles.length;
      delay = 400;
    }

    setTimeout(type, delay);
  }

  type();
}

/* ----------------------------------------------------
   3. THEME TOGGLE (DARK / LIGHT)
---------------------------------------------------- */
function initThemeToggle() {
  const toggleBtn = document.getElementById("theme-toggle-btn");
  if (!toggleBtn) return;

  const savedTheme = localStorage.getItem("mathu-theme") || "dark";
  document.documentElement.setAttribute("data-theme", savedTheme);
  updateThemeIcon(savedTheme);

  toggleBtn.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme");
    const nextTheme = current === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", nextTheme);
    localStorage.setItem("mathu-theme", nextTheme);
    updateThemeIcon(nextTheme);
  });

  function updateThemeIcon(theme) {
    const icon = toggleBtn.querySelector("i") || toggleBtn;
    if (theme === "light") {
      toggleBtn.innerHTML = `
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
        </svg>
      `;
      toggleBtn.setAttribute("aria-label", "Switch to Dark Mode");
    } else {
      toggleBtn.innerHTML = `
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="5"></circle>
          <line x1="12" y1="1" x2="12" y2="3"></line>
          <line x1="12" y1="21" x2="12" y2="23"></line>
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
          <line x1="1" y1="12" x2="3" y2="12"></line>
          <line x1="21" y1="12" x2="23" y2="12"></line>
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
        </svg>
      `;
      toggleBtn.setAttribute("aria-label", "Switch to Light Mode");
    }
  }
}

/* ----------------------------------------------------
   4. NAVIGATION & SCROLL SPY
---------------------------------------------------- */
function initNavigation() {
  const navbar = document.getElementById("main-header");
  const navLinks = document.querySelectorAll(".nav-link");
  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  const mobileNav = document.getElementById("mobile-nav-drawer");
  const mobileLinks = document.querySelectorAll(".mobile-nav-link");

  // Sticky blur on scroll
  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      navbar?.classList.add("header-scrolled");
    } else {
      navbar?.classList.remove("header-scrolled");
    }
  });

  // Mobile menu toggle
  mobileMenuBtn?.addEventListener("click", () => {
    const isOpen = mobileNav?.classList.toggle("open");
    mobileMenuBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  mobileLinks.forEach(link => {
    link.addEventListener("click", () => {
      mobileNav?.classList.remove("open");
      mobileMenuBtn?.setAttribute("aria-expanded", "false");
    });
  });

  // Active link spy with IntersectionObserver
  const sections = document.querySelectorAll("section[id]");
  const observerOptions = {
    root: null,
    rootMargin: "-20% 0px -70% 0px",
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute("id");
        navLinks.forEach((link) => {
          if (link.getAttribute("href") === `#${id}`) {
            link.classList.add("active");
          } else {
            link.classList.remove("active");
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach((sec) => observer.observe(sec));
}

/* ----------------------------------------------------
   5. PROJECT RENDERING & CATEGORY FILTERING
---------------------------------------------------- */
function initProjectsRender() {
  const grid = document.getElementById("projects-grid");
  const filterBtns = document.querySelectorAll(".filter-btn");

  if (!grid || typeof projectsData === "undefined") return;

  function render(filter = "all") {
    grid.innerHTML = "";

    const filtered = filter === "all"
      ? projectsData
      : projectsData.filter((p) => p.category === filter);

    filtered.forEach((project, index) => {
      const card = document.createElement("article");
      card.className = "project-card glass-card";
      card.style.animationDelay = `${index * 80}ms`;

      const tagsHtml = project.tags
        .slice(0, 4)
        .map((tag) => `<span class="tech-tag">${tag}</span>`)
        .join("");

      const liveBtnHtml = project.demo
        ? `<a href="${project.demo}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-accent" title="Live Preview">
             <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
             Live Demo
           </a>`
        : "";

      card.innerHTML = `
        <div class="project-header">
          <div class="project-category-badge">${project.categoryLabel}</div>
          <span class="project-badge-pill">${project.badge}</span>
        </div>
        <div class="project-content">
          <h3 class="project-title">${project.title}</h3>
          <p class="project-desc">${project.description}</p>
          <div class="project-tags">${tagsHtml}</div>
        </div>
        <div class="project-footer">
          <button class="btn btn-sm btn-outline view-details-btn" data-id="${project.id}">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
            Deep Dive
          </button>
          <div class="project-actions">
            ${liveBtnHtml}
            <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-icon" title="View GitHub Repository">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
            </a>
          </div>
        </div>
      `;

      grid.appendChild(card);
    });

    // Attach deep dive modal listeners
    document.querySelectorAll(".view-details-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const id = btn.getAttribute("data-id");
        const found = projectsData.find((p) => p.id === id);
        if (found) openProjectModal(found);
      });
    });
  }

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      const category = btn.getAttribute("data-filter");
      render(category);
    });
  });

  render("all");
}

/* ----------------------------------------------------
   6. PROJECT MODAL DEEP DIVE
---------------------------------------------------- */
function initModal() {
  const modal = document.getElementById("project-modal");
  const closeBtn = document.getElementById("modal-close-btn");
  const backdrop = document.getElementById("modal-backdrop");

  if (!modal) return;

  function closeModal() {
    modal.classList.remove("open");
    document.body.style.overflow = "auto";
  }

  closeBtn?.addEventListener("click", closeModal);
  backdrop?.addEventListener("click", closeModal);

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("open")) {
      closeModal();
    }
  });
}

function openProjectModal(project) {
  const modal = document.getElementById("project-modal");
  if (!modal) return;

  document.getElementById("modal-title").textContent = project.title;
  document.getElementById("modal-category").textContent = project.categoryLabel;
  document.getElementById("modal-desc").textContent = project.longDescription || project.description;

  const highlightsContainer = document.getElementById("modal-highlights");
  if (highlightsContainer) {
    highlightsContainer.innerHTML = project.highlights
      ? project.highlights.map((h) => `<li><span class="bullet-icon">✦</span> ${h}</li>`).join("")
      : "";
  }

  const tagsContainer = document.getElementById("modal-tags");
  if (tagsContainer) {
    tagsContainer.innerHTML = project.tags
      .map((t) => `<span class="tech-tag">${t}</span>`)
      .join("");
  }

  const statsContainer = document.getElementById("modal-stats");
  if (statsContainer && project.stats) {
    statsContainer.innerHTML = Object.entries(project.stats)
      .map(
        ([k, v]) => `
        <div class="modal-stat-box">
          <div class="stat-label">${k.toUpperCase()}</div>
          <div class="stat-val">${v}</div>
        </div>
      `
      )
      .join("");
  }

  const ghLink = document.getElementById("modal-github-link");
  if (ghLink) ghLink.href = project.github;

  const demoLink = document.getElementById("modal-demo-link");
  if (demoLink) {
    if (project.demo) {
      demoLink.style.display = "inline-flex";
      demoLink.href = project.demo;
    } else {
      demoLink.style.display = "none";
    }
  }

  modal.classList.add("open");
  document.body.style.overflow = "hidden";
}

/* ----------------------------------------------------
   7. LIVE GITHUB STATS
---------------------------------------------------- */
async function fetchGitHubLiveStats() {
  try {
    const res = await fetch("https://api.github.com/users/Mathu-code");
    if (!res.ok) return;
    const data = await res.json();

    const repoCountEl = document.getElementById("stat-github-repos");
    const followersEl = document.getElementById("stat-github-followers");
    const commitsCountEl = document.getElementById("stat-github-status");

    if (repoCountEl && data.public_repos) {
      repoCountEl.textContent = `${data.public_repos}+`;
    }
    if (followersEl && data.followers !== undefined) {
      followersEl.textContent = `${data.followers}`;
    }
  } catch (err) {
    console.log("GitHub API stats fetch handled gracefully:", err);
  }
}

/* ----------------------------------------------------
   8. CONTACT FORM & DIRECT COPY
---------------------------------------------------- */
function initContactForm() {
  const form = document.getElementById("contact-form");
  const toast = document.getElementById("contact-toast");
  const copyEmailBtn = document.getElementById("copy-email-btn");

  copyEmailBtn?.addEventListener("click", () => {
    const email = "mathurankoneswaran@gmail.com";
    navigator.clipboard.writeText(email).then(() => {
      showToast("Email copied to clipboard! (mathurankoneswaran@gmail.com)");
    });
  });

  form?.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("contact-name")?.value || "";
    const email = document.getElementById("contact-email")?.value || "";
    const subject = document.getElementById("contact-subject")?.value || "Portfolio Connection";
    const message = document.getElementById("contact-message")?.value || "";

    // Trigger direct email client with pre-filled content
    const mailtoUrl = `mailto:mathurankoneswaran@gmail.com?subject=${encodeURIComponent(
      `[Portfolio Inquiry] ${subject} - from ${name}`
    )}&body=${encodeURIComponent(
      `Hi Mathuran,\n\n${message}\n\nBest regards,\n${name}\nEmail: ${email}`
    )}`;

    window.location.href = mailtoUrl;

    showToast("Launching your email client to send message directly to Mathuran!");
    form.reset();
  });

  function showToast(msg) {
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.add("visible");
    setTimeout(() => {
      toast.classList.remove("visible");
    }, 4500);
  }
}

/* ----------------------------------------------------
   9. SCROLL REVEAL ANIMATIONS
---------------------------------------------------- */
function initScrollAnimations() {
  const revealElements = document.querySelectorAll(".reveal-on-scroll");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  revealElements.forEach((el) => observer.observe(el));
}
