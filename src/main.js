import "./style.css";

const toggle = document.querySelector("#nav-toggle");
const nav = document.querySelector("#site-nav");

if (toggle && nav) {
  const setOpen = (open) => {
    nav.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute(
      "aria-label",
      open ? "Close menu" : "Open menu"
    );
  };

  toggle.addEventListener("click", () => {
    const open = !nav.classList.contains("is-open");
    setOpen(open);
  });

  for (const link of nav.querySelectorAll("a[href^='#']")) {
    link.addEventListener("click", () => {
      if (window.matchMedia("(max-width: 47.99rem)").matches) {
        setOpen(false);
      }
    });
  }
}
