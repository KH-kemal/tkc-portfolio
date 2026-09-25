// =========================================================
// HEADER: bayangan + background saat discroll
// =========================================================
const header = document.getElementById("site-header");
const onScrollHeader = () => {
  if (window.scrollY > 12) {
    header.classList.add("is-scrolled");
  } else {
    header.classList.remove("is-scrolled");
  }
};
onScrollHeader();
window.addEventListener("scroll", onScrollHeader, { passive: true });

// =========================================================
// MENU MOBILE
// =========================================================
const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");
const iconBurger = document.getElementById("icon-burger");
const iconClose = document.getElementById("icon-close");

if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    const isOpen = !mobileMenu.classList.contains("hidden");
    mobileMenu.classList.toggle("hidden");
    iconBurger.classList.toggle("hidden");
    iconClose.classList.toggle("hidden");
    menuToggle.setAttribute("aria-expanded", String(!isOpen));
  });

  mobileMenu.querySelectorAll("a, button[data-open-cv]").forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.add("hidden");
      iconBurger.classList.remove("hidden");
      iconClose.classList.add("hidden");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

// =========================================================
// PRATINJAU CV
// =========================================================
const cvDialog = document.getElementById("cv-dialog");

document.querySelectorAll("[data-open-cv]").forEach((button) => {
  button.addEventListener("click", () => {
    if (!cvDialog || cvDialog.open) return;
    const preview = cvDialog.querySelector(".cv-preview");
    if (!preview.hasAttribute("src")) preview.src = preview.dataset.src;
    cvDialog.showModal();
  });
});

if (cvDialog) {
  cvDialog.querySelector("[data-close-cv]").addEventListener("click", () => cvDialog.close());
  cvDialog.addEventListener("click", (event) => {
    if (event.target === cvDialog) cvDialog.close();
  });
}

// =========================================================
// REVEAL ON SCROLL
// =========================================================
const revealEls = document.querySelectorAll("[data-reveal]");

if ("IntersectionObserver" in window && revealEls.length) {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
  );
  revealEls.forEach((el) => io.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add("is-visible"));
}

// =========================================================
// INDIKATOR SECTION AKTIF
// =========================================================
const sectionLinks = document.querySelectorAll('.nav-link[href^="#"]');
const sections = [...sectionLinks]
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

if ("IntersectionObserver" in window && sections.length) {
  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        sectionLinks.forEach((link) => {
          const active = link.getAttribute("href") === `#${entry.target.id}`;
          link.classList.toggle("is-active", active);
          if (active) link.setAttribute("aria-current", "location");
          else link.removeAttribute("aria-current");
        });
      });
    },
    { rootMargin: "-25% 0px -60% 0px" }
  );
  sections.forEach((section) => sectionObserver.observe(section));
}
