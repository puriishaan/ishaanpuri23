// ===== year =====
document.getElementById('yr').textContent = new Date().getFullYear();

// ===== nav: solid background after hero, mobile menu =====
const nav = document.querySelector('.nav');
const burger = document.querySelector('.nav__burger');
const hero = document.querySelector('.hero');

const onScroll = () => {
  const past = window.scrollY > (hero ? hero.offsetHeight - 90 : 300);
  nav.classList.toggle('is-scrolled', past);
};
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });

burger.addEventListener('click', () => {
  const open = nav.classList.toggle('is-open');
  burger.setAttribute('aria-expanded', open ? 'true' : 'false');
});
nav.querySelectorAll('.nav__links a').forEach(a =>
  a.addEventListener('click', () => nav.classList.remove('is-open'))
);

// ===== scroll reveal =====
const io = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) { e.target.classList.add('is-visible'); io.unobserve(e.target); }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });

document.querySelectorAll('.reveal').forEach((el) => io.observe(el));
