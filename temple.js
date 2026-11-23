/* ==================================================================
   Vrindavan page — gate, narration scenes, the train journey
   ================================================================== */

(function () {
  const T = SITE.temple;
  const $ = s => document.querySelector(s);

  /* ---------- copy from config ---------- */
  $("#gateKicker").textContent = T.gateKicker;
  $("#innerGreeting").textContent = T.innerGreeting;
  $("#murtiCaption").textContent = T.murtiCaption;
  $("#storyIntro").textContent = T.storyIntro;
  $("#storyBtn").textContent = T.storyButton;
  $("#journeyTitle").textContent = T.journey.title;
  $("#journeyHint").textContent = T.journey.hint;
  $("#funTitle").textContent = T.fun.title;

  /* ---------- gate ---------- */
 $("#gateImg").style.backgroundImage = "url('hero.jpg')";

  $("#enterBtn").addEventListener("click", () => {
    const gate = $("#gate");
    gate.style.transition = "opacity 1.2s ease, transform 1.2s cubic-bezier(.2,.8,.2,1)";
    gate.style.opacity = "0";
    gate.style.transform = "scale(1.06)";
    setTimeout(() => {
      gate.style.display = "none";
      $("#sanctum").classList.add("is-in");
      window.scrollTo(0, 0);
      document.body.style.background = "";
      observeReveals();
    }, 900);
  });

  /* ---------- chapter list ---------- */
  const list = $("#storyList");
  list.hidden = true;
  list.style.transition = "opacity .8s ease";

  T.chapters.forEach((c, i) => {
    const li = document.createElement("li");
    const b = document.createElement("button");
    b.className = "story__btn";
    b.innerHTML = `
      <span class="story__date">${esc(c.date)}</span>
      <span class="story__title">${esc(c.title)}<em>${esc(c.place)}</em></span>
      <span class="story__go">enter the scene →</span>`;
    b.addEventListener("click", () => openScene(i));
    li.appendChild(b);
    list.appendChild(li);
  });

  $("#storyBtn").addEventListener("click", () => {
    if (list.hidden) {
      list.hidden = false;
      list.style.opacity = "0";
      requestAnimationFrame(() => { list.style.opacity = "1"; });
      $("#storyBtn").textContent = "close the register";
      setTimeout(() => list.scrollIntoView({ behavior: "smooth", block: "center" }), 200);
    } else {
      list.hidden = true;
      $("#storyBtn").textContent = T.storyButton;
    }
  });

  /* ---------- immersive scene ---------- */
  const scene = $("#scene");
  let lastIndex = 0;

  function openScene(i) {
    lastIndex = i;
    const c = T.chapters[i];
    $("#sceneBg").style.backgroundImage = `url('${c.image}')`;
    $("#sceneDate").textContent = c.date;
    $("#sceneTitle").textContent = c.title;
    $("#scenePlace").textContent = c.place;
    $("#sceneFilm").textContent = c.caption;
    const body = $("#sceneText");
    body.innerHTML = "";
    c.text.forEach((p, n) => {
      const el = document.createElement("p");
      el.textContent = p;
      el.style.opacity = "0";
      el.style.transform = "translateY(14px)";
      el.style.transition = `opacity .9s ${0.5 + n * 0.55}s ease, transform .9s ${0.5 + n * 0.55}s cubic-bezier(.2,.8,.2,1)`;
      body.appendChild(el);
    });
    scene.classList.add("is-open");
    document.body.style.overflow = "hidden";
    $("#sceneClose").focus();
  }

  function closeScene() {
    scene.classList.remove("is-open");
    document.body.style.overflow = "";
    if (T.chapters[lastIndex].id === "yes") {
      setTimeout(() => $("#journey").scrollIntoView({ behavior: "smooth", block: "start" }), 700);
    }
  }
  $("#sceneClose").addEventListener("click", closeScene);
  document.addEventListener("keydown", e => { if (e.key === "Escape" && scene.classList.contains("is-open")) closeScene(); });

  /* =========================================================
     THE TRAIN JOURNEY
     ========================================================= */
  const stage  = $("#stage");
  const strip  = $("#strip");
  const train  = $("#train");
  const status = $("#status");
  const stops  = T.journey.stops;

  const START_W = 300, ROUGH_W = 430, FINAL_W = 1000;
  const nodes = [];   /* {x, kind, data} */

  build();

  function build() {
    let x = 0;

    addLeg(START_W, "the platform", "start"); x += START_W;
    const startEl = addStop({ no: "i", name: T.journey.startLabel, text: "", rough: false });
    nodes.push({ x, kind: "start", el: startEl });

    stops.forEach((s, i) => {
      addLeg(ROUGH_W, "rough patch " + (i + 1), "rough"); x += ROUGH_W;
      const el = addStop({ no: "0" + (i + 1), name: s.name, text: s.text, rough: true });
      nodes.push({ x, kind: "rough", data: s, el });
    });

    addLeg(FINAL_W, "clear line ahead", "smooth"); x += FINAL_W;
    const finEl = addStop({ no: "∞", name: T.journey.finalTitle, text: "", rough: false, final: true });
    nodes.push({ x, kind: "final", el: finEl });

    strip.style.width = (x + 220) + "px";
    placeTrain(0);
  }

  function addLeg(w, label, kind) {
    const d = document.createElement("div");
    d.className = "leg is-" + kind;
    d.style.width = w + "px";
    d.innerHTML = `<span class="leg__label">${esc(label)}</span>`;
    strip.appendChild(d);
  }

  function addStop({ no, name, text, rough, final }) {
    const d = document.createElement("div");
    d.className = "stop" + (rough ? " is-rough" : "") + (final ? " stop--final" : "") + (!text ? " has-no-card" : "");
    d.innerHTML = `
      <span class="stop__no">${esc(no)}</span>
      <span class="stop__pin" tabindex="0" role="button" aria-label="${esc(name)}"></span>
      ${text ? `<span class="stop__card"><h4>${esc(name)}</h4><p>${esc(text)}</p></span>` : ""}`;
    strip.appendChild(d);
    const pin = d.querySelector(".stop__pin");
    if (text) {
      pin.addEventListener("click", () => d.classList.toggle("is-open"));
      pin.addEventListener("focus", () => d.classList.add("is-open"));
      pin.addEventListener("blur",  () => d.classList.remove("is-open"));
    }
    return d;
  }

  let idx = 0;

  function placeTrain(i, animate) {
    const n = nodes[i];
    const stageW = stage.clientWidth;
    const total  = strip.offsetWidth;
    let T_ = -(n.x - stageW * 0.42);
    T_ = Math.max(-(total - stageW + 40), Math.min(0, T_));
    strip.style.transform = `translateX(${T_}px)`;
    train.style.transform = `translateX(${n.x + T_}px)`;
  }

  $("#throttle").addEventListener("click", () => {
    if (idx >= nodes.length - 1) return;
    idx++;
    const n = nodes[idx];
    document.querySelectorAll(".stop.is-open").forEach(s => s.classList.remove("is-open"));
    train.classList.remove("is-crash");
    train.classList.add("is-moving");
    if (n.kind === "rough") train.classList.add("is-crash");
    placeTrain(idx, true);

    setTimeout(() => {
      train.classList.remove("is-moving");
      if (n.kind === "rough") {
        setTimeout(() => train.classList.remove("is-crash"), 400);
        n.el.classList.add("is-open");
        setTimeout(() => n.el.classList.remove("is-open"), 4200);
      }
      say(n);
    }, 1850);

    if (idx === nodes.length - 1) {
      setTimeout(() => {
        $("#final").classList.add("is-in");
        $("#throttle").disabled = true;
        $("#final").scrollIntoView({ behavior: "smooth", block: "center" });
      }, 2200);
    }
  });

  function say(n) {
    if (n.kind === "start") status.textContent = "at the platform. press when you're ready.";
    if (n.kind === "rough") status.textContent = `signal ${idx} of ${stops.length} — ${n.data.name}. hover it to read what went wrong.`;
    if (n.kind === "final") status.textContent = "the line is clear from here.";
  }

  /* final panel content */
  $("#finalTitle").textContent = T.journey.finalTitle;
  const fb = $("#finalBody");
  T.journey.finalText.forEach((p, i) => {
    const el = document.createElement("p");
    el.textContent = p;
    if (i === T.journey.finalText.length - 1) el.className = "love";
    fb.appendChild(el);
  });

 /* ---------- ring-bound photo album ---------- */
const album = $("#funScatter");

T.fun.items.forEach((f, i) => {
  const fig = document.createElement("figure");
  fig.className = "album-photo reveal";

  fig.innerHTML = `
    <div class="album-photo__image">
      <img src="${f.image}" alt="${esc(f.label)}" loading="lazy">
    </div>
    <figcaption>
      <span class="album-photo__number">${String(i + 1).padStart(2, "0")}</span>
      <span class="t">${esc(f.label)}</span>
      <span class="n">${esc(f.note)}</span>
    </figcaption>
  `;

  album.appendChild(fig);
});
  const scat = $("#funScatter");
  T.fun.items.forEach(f => {
    const fig = document.createElement("figure");
    fig.className = "reveal";
    fig.innerHTML = `
      <img src="${f.image}" alt="${esc(f.label)}" loading="lazy">
      <figcaption><span class="t">${esc(f.label)}</span><span class="n">${esc(f.note)}</span></figcaption>`;
    scat.appendChild(fig);
  });

  /* ---------- reveals ---------- */
  function observeReveals() {
    const showAll = () => document.querySelectorAll(".reveal").forEach(n => n.classList.add("in"));
    if (!("IntersectionObserver" in window) || matchMedia("(prefers-reduced-motion: reduce)").matches) {
      showAll();
      return;
    }
    const io = new IntersectionObserver(es => {
      es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
    }, { threshold: .12 });
    document.querySelectorAll(".reveal:not(.in)").forEach(n => io.observe(n));
    setTimeout(showAll, 5000);
    addEventListener("beforeprint", showAll);
  }

  function esc(s) {
    return String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  }

  addEventListener("resize", () => placeTrain(idx, false));
})();
