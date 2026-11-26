
/* shared behaviour: reveals, config injection, fixed day count, photo slots */

(function () {
  const H = SITE.home;

  /* ---- copy from config ---- */
  const lede = document.getElementById("homeLede");
  if (lede) lede.textContent = H.lede;

  const coffeeNote = document.getElementById("coffeeNote");
  if (coffeeNote) coffeeNote.textContent = H.coffeeNote;

  const clockCaption = document.getElementById("clockCaption");
  if (clockCaption) {
    clockCaption.textContent = "Time works differently when we are together.";
  }

  document.querySelectorAll(".frame__cap").forEach(el => {
    const f = H.frames[Number(el.dataset.cap) - 1];
    if (f) el.textContent = f.caption;
  });

  /* ---- photo slots ---- */
  document.querySelectorAll(".frame__slot img").forEach(img => {
    img.addEventListener("error", () => {
      img.remove();
    });

    img.addEventListener("load", () => {
      img.closest(".frame").classList.add("is-live");
    });

    if (img.complete && img.naturalWidth === 0) {
      img.remove();
    }
  });

  /* ---- fixed day count ---- */
  const dayCount = document.getElementById("dayCount");
  if (dayCount) {
    dayCount.textContent = "360 days of us";
  }

  /* ---- scroll reveals ---- */
  const showAll = () => {
    document.querySelectorAll(".reveal").forEach(n => n.classList.add("in"));
  };

  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          io.unobserve(e.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: "0px 0px -8% 0px"
    });

    document.querySelectorAll(".reveal").forEach(n => io.observe(n));

    setTimeout(showAll, 3000);
    addEventListener("beforeprint", showAll);
  } else {
    showAll();
  }

  if (matchMedia("(prefers-reduced-motion: reduce)").matches) {
    showAll();
  }
})();
