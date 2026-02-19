// Page fade-in
document.body.classList.add("fade-in");


// Active link by current page
const here = (location.pathname.split("/").pop() || "index.html").toLowerCase();
document.querySelectorAll('a[data-nav]').forEach(a => {
  const href = (a.getAttribute("href") || "").toLowerCase();
  if (href === here) a.classList.add("active");
});

// Reveal on scroll
const revealEls = document.querySelectorAll(".reveal");
const io = new IntersectionObserver((entries) => {
  for (const e of entries) {
    if (e.isIntersecting) {
      e.target.classList.add("on");
      io.unobserve(e.target);
    }
  }
}, { threshold: 0.12 });

revealEls.forEach(el => io.observe(el));
// Typewriter effect (Bienvenue)
(function typewriterInit(){
  const el = document.getElementById("typeTarget");
  if (!el) return;

  const text = el.getAttribute("data-text") || "Bienvenue.";
  const speed = 85;        // vitesse de frappe (ms)
  const startDelay = 350;  // petit délai avant de commencer

  el.textContent = "";     // vide au départ
  let i = 0;

  setTimeout(() => {
    const tick = () => {
      el.textContent = text.slice(0, i);
      i++;
      if (i <= text.length) {
        setTimeout(tick, speed);
      }
    };
    tick();
  }, startDelay);
})();

