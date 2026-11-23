/* shared behaviour: reveals, config injection, live counter, photo slots */

(function () {
  const H = SITE.home;

  /* ---- copy from config ---- */
  const lede = document.getElementById("homeLede");
  if (lede) lede.textContent = H.lede;
  const cn = document.getElementById("coffeeNote");
  if (cn) cn.textContent = H.coffeeNote;
  const cc = document.getElementById("clockCaption");
  if (cc) cc.textContent = H.clockCaption;

  document.querySelectorAll(".frame__cap").forEach(el => {
    const f = H.frames[Number(el.dataset.cap) - 1];
    if (f) el.textContent = f.caption;
  });

  /* ---- photo slots: if the file isn't there, stay a placeholder ---- */
  document.querySelectorAll(".frame__slot img").forEach(img => {
    img.addEventListener("error", () => {
      img.remove();
    });
    img.addEventListener("load", () => {
      img.closest(".frame").classList.add("is-live");
    });
    if (img.complete && img.naturalWidth === 0) img.remove();
  });

  /* ---- live counter ---- */
  const el = document.getElementById("dayCount");
  if (el && H.sinceDate) {
    const start = new Date(H.sinceDate + "T00:00:00");
    const days = Math.max(0, Math.floor((Date.now() - start) / 86400000));
    el.textContent = `${days.toLocaleString("en-IN")} days of us`;
  }

  /* ---- scroll reveals ---- */
  const showAll = () => document.querySelectorAll(".reveal").forEach(n => n.classList.add("in"));

  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });

    document.querySelectorAll(".reveal").forEach(n => io.observe(n));
    /* never leave a blank page if the observer can't fire */
    setTimeout(showAll, 5000);
    addEventListener("beforeprint", showAll);
  } else {
    showAll();
  }

  if (matchMedia("(prefers-reduced-motion: reduce)").matches) showAll();
})();
