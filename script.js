// Smooth-scroll for in-page nav links
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href').slice(1);
    const el = document.getElementById(id);
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });

      // Close mobile nav after click
      const nav = document.querySelector('header nav');
      const toggle = document.querySelector('.nav-toggle');
      if (window.innerWidth < 768 && nav && toggle) {
        nav.style.display = 'none';
        toggle.setAttribute('aria-expanded', 'false');
      }
    }
  });
});

// Mobile nav toggle
const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('header nav');
if (toggle && nav){
  toggle.addEventListener('click', () => {
    const open = nav.style.display === 'block';
    nav.style.display = open ? 'none' : 'block';
    toggle.setAttribute('aria-expanded', String(!open));
  });
}
