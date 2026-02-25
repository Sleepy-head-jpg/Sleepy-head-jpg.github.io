/* ============================================================
   main.js — Sandeep Kumar's site interactivity
   
   HOW JAVASCRIPT WORKS HERE (teaching note):
   - JS runs AFTER the page loads (that's what DOMContentLoaded does)
   - We "select" HTML elements by their id or class
   - Then we add behaviors like scrolling, toggling menus, animations
   ============================================================ */

document.addEventListener('DOMContentLoaded', function () {

  // ===================== MOBILE NAV TOGGLE =====================
  // When someone clicks the ☰ button on mobile, toggle the menu open/closed
  const toggle = document.getElementById('navToggle');
  const navLinks = document.querySelector('.nav-links');

  if (toggle) {
    toggle.addEventListener('click', function () {
      navLinks.classList.toggle('open');
      // Toggle between ☰ and ✕ icon
      toggle.textContent = navLinks.classList.contains('open') ? '✕' : '☰';
    });
  }

  // Close mobile nav when a link is clicked
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      toggle.textContent = '☰';
    });
  });

  // ===================== SCROLL ANIMATIONS =====================
  // IntersectionObserver watches elements and triggers when they enter the viewport
  // This creates the "fade up as you scroll" effect
  
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    { threshold: 0.1 } // trigger when 10% of element is visible
  );

  // Add fade-in class to these elements and observe them
  const animatedEls = document.querySelectorAll(
    '.project-card, .currently-item, .section-header, .anecdote-inner'
  );

  animatedEls.forEach((el, i) => {
    el.classList.add('fade-in');
    el.style.transitionDelay = `${i * 0.08}s`; // stagger the animations
    observer.observe(el);
  });

  // ===================== NAVBAR SHADOW ON SCROLL =====================
  // Adds a subtle shadow to nav when you scroll past the hero
  const navbar = document.getElementById('navbar');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.08)';
    } else {
      navbar.style.boxShadow = 'none';
    }
  });

});
