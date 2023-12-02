'use strict';

/**
 * Add event listener to element(s)
 */
const addEventOnElem = (elem, type, callback) => {
  if (elem.length) {
    elem.forEach(e => e.addEventListener(type, callback));
  } else {
    elem.addEventListener(type, callback);
  }
}

/**
 * Toggle Navbar
 */
const navToggler = document.querySelector("[data-nav-toggler]");
const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");

const toggleNavbar = () => {
  navbar.classList.toggle("active");
  navToggler.classList.toggle("active");
}

addEventOnElem(navToggler, "click", toggleNavbar);

const closeNavbar = () => {
  navbar.classList.remove("active");
  navToggler.classList.remove("active");
}

addEventOnElem(navbarLinks, "click", closeNavbar);

/**
 * Activate header on scroll
 */
const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

const activeElemOnScroll = () => {
  const isScrolledDown = window.scrollY > 100;
  header.classList.toggle("active", isScrolledDown);
  backTopBtn.classList.toggle("active", isScrolledDown);
}

addEventOnElem(window, "scroll", activeElemOnScroll);

/**
 * Improved Navigation Scroll
 */
document.addEventListener('DOMContentLoaded', () => {
  const navToggleBtn = document.querySelector('[data-nav-toggler]');
  const navbar = document.querySelector('[data-navbar]');

  addEventOnElem(navToggleBtn, 'click', () => {
    navbar.classList.toggle('active');
  });

  addEventOnElem(navbarLinks, 'click', function (event) {
    event.preventDefault();

    const targetId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop,
        behavior: 'smooth'
      });

      navbarLinks.forEach(link => link.classList.remove('active'));
      this.classList.add('active');
    }
  });

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const targetId = entry.target.getAttribute('id');
      const correspondingLink = document.querySelector(`[href="#${targetId}"]`);

      if (entry.isIntersecting) {
        navbarLinks.forEach(link => link.classList.remove('active'));
        correspondingLink.classList.add('active');
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('section').forEach(section => observer.observe(section));
});

/**
 * Category Cards Interaction
 */
document.addEventListener('DOMContentLoaded', () => {
  const categoryCards = document.querySelectorAll(".category-card");

  categoryCards.forEach(card => {
    addEventOnElem(card, "mouseenter", () => card.classList.toggle("hovered"));
    addEventOnElem(card, "mouseleave", () => card.classList.toggle("hovered"));
    addEventOnElem(card, "click", () => {
      const cardTitle = card.querySelector(".card-title").textContent;
      alert(`You clicked on ${cardTitle}`);
    });
  });
});
