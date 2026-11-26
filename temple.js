
/* ==================================================================
   VRINDAVAN PAGE
   Gate, narration scenes, train journey and ring-bound photo album
   ================================================================== */

(function () {
  "use strict";

  const T = SITE.temple;
  const $ = selector => document.querySelector(selector);

  /* ---------- helpers ---------- */

  function setText(selector, value) {
    const el = $(selector);
    if (el) el.textContent = value ?? "";
    return el;
  }

  function esc(value) {
    return String(value ?? "").replace(/[&<>"']/g, char => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    })[char]);
  }

  /* ---------- copy from config ---------- */

  setText("#gateKicker", T.gateKicker);
  setText("#innerGreeting", T.innerGreeting);
  setText("#murtiCaption", T.murtiCaption);
  setText("#storyIntro", T.storyIntro);
  setText("#storyBtn", T.storyButton);
  setText("#journeyTitle", T.journey.title);
  setText("#journeyHint", T.journey.hint);
  setText("#funTitle", T.fun.title);

  /* ---------- entrance gate ---------- */

  const gate = $("#gate");
  const enterBtn = $("#enterBtn");
  const sanctum = $("#sanctum");

  const gateImg = $("#gateImg");
  if (gateImg) {
    gateImg.style.backgroundImage = "url('hero.jpg')";
  }

  function observeReveals() {
    const revealItems = document.querySelectorAll(".reveal:not(.in)");

    const showAll = () => {
      document.querySelectorAll(".reveal").forEach(el => {
        el.classList.add("in");
      });
    };

    if (
      !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      showAll();
      return;
    }

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.12
    });

    revealItems.forEach(el => observer.observe(el));

    setTimeout(showAll, 5000);
    window.addEventListener("beforeprint", showAll);
  }

  if (enterBtn && gate && sanctum) {
    enterBtn.addEventListener("click", () => {
      gate.style.transition =
        "opacity 1.2s ease, transform 1.2s cubic-bezier(.2,.8,.2,1)";

      gate.style.opacity = "0";
      gate.style.transform = "scale(1.06)";

      setTimeout(() => {
        gate.style.display = "none";
        sanctum.classList.add("is-in");

        window.scrollTo(0, 0);
        document.body.style.background = "";

        observeReveals();
      }, 900);
    });
  }

  /* ---------- chapter list ---------- */

  const list = $("#storyList");
  const storyBtn = $("#storyBtn");

  if (list) {
    list.hidden = true;
    list.style.transition = "opacity .8s ease";

    T.chapters.forEach((chapter, index) => {
      const li = document.createElement("li");
      const button = document.createElement("button");

      button.className = "story__btn";

      button.innerHTML = `
        <span class="story__date">${esc(chapter.date)}</span>
        <span class="story__title">
          ${esc(chapter.title)}
          <em>${esc(chapter.place)}</em>
        </span>
        <span class="story__go">enter the scene →</span>
      `;

      button.addEventListener("click", () => openScene(index));

      li.appendChild(button);
      list.appendChild(li);
    });
  }

  if (storyBtn && list) {
    storyBtn.addEventListener("click", () => {
      if (list.hidden) {
        list.hidden = false;
        list.style.opacity = "0";

        requestAnimationFrame(() => {
          list.style.opacity = "1";
        });

        storyBtn.textContent = "close the register";

        setTimeout(() => {
          list.scrollIntoView({
            behavior: "smooth",
            block: "center"
          });
        }, 200);
      } else {
        list.hidden = true;
        storyBtn.textContent = T.storyButton;
      }
    });
  }

  /* ---------- immersive story scenes ---------- */

  const scene = $("#scene");
  let lastIndex = 0;

  function openScene(index) {
    if (!scene || !T.chapters[index]) return;

    lastIndex = index;

    const chapter = T.chapters[index];

    const sceneBg = $("#sceneBg");
    if (sceneBg) {
      sceneBg.style.backgroundImage = `url('${chapter.image}')`;
    }

    setText("#sceneDate", chapter.date);
    setText("#sceneTitle", chapter.title);
    setText("#scenePlace", chapter.place);
    setText("#sceneFilm", chapter.caption);

    const body = $("#sceneText");

    if (body) {
      body.innerHTML = "";

      chapter.text.forEach((paragraph) => {
  const element = document.createElement("p");
  element.textContent = paragraph;
  body.appendChild(element);
});
    }

    scene.classList.add("is-open");
    document.body.style.overflow = "hidden";

    $("#sceneClose")?.focus();
  }

  function closeScene() {
    if (!scene) return;

    scene.classList.remove("is-open");
    document.body.style.overflow = "";

    if (T.chapters[lastIndex]?.id === "yes") {
      setTimeout(() => {
        $("#journey")?.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }, 700);
    }
  }

  $("#sceneClose")?.addEventListener("click", closeScene);

  document.addEventListener("keydown", event => {
    if (
      event.key === "Escape" &&
      scene?.classList.contains("is-open")
    ) {
      closeScene();
    }
  });

  /* =========================================================
     THE TRAIN JOURNEY
     ========================================================= */

  const stage = $("#stage");
  const strip = $("#strip");
  const train = $("#train");
  const status = $("#status");
  const throttle = $("#throttle");

  const stops = T.journey.stops;

  const START_W = 300;
  const ROUGH_W = 430;
  const FINAL_W = 1000;

  const nodes = [];

  let idx = 0;

  if (stage && strip && train && status && throttle) {
    buildJourney();

    throttle.addEventListener("click", () => {
      if (idx >= nodes.length - 1) return;

      idx++;

      const node = nodes[idx];

      document.querySelectorAll(".stop.is-open").forEach(stop => {
        stop.classList.remove("is-open");
      });

      train.classList.remove("is-crash");
      train.classList.add("is-moving");

      if (node.kind === "rough") {
        train.classList.add("is-crash");
      }

      placeTrain(idx);

      setTimeout(() => {
        train.classList.remove("is-moving");

        if (node.kind === "rough") {
          setTimeout(() => {
            train.classList.remove("is-crash");
          }, 400);

          node.el.classList.add("is-open");

          setTimeout(() => {
            node.el.classList.remove("is-open");
          }, 4200);
        }

        say(node);
      }, 1850);

      if (idx === nodes.length - 1) {
        setTimeout(() => {
          $("#final")?.classList.add("is-in");
          throttle.disabled = true;

          $("#final")?.scrollIntoView({
            behavior: "smooth",
            block: "center"
          });
        }, 2200);
      }
    });

    window.addEventListener("resize", () => placeTrain(idx));
  }

  function buildJourney() {
    let x = 0;

    addLeg(START_W, "the platform", "start");
    x += START_W;

    const startEl = addStop({
      no: "i",
      name: T.journey.startLabel,
      text: "",
      rough: false
    });

    nodes.push({
      x,
      kind: "start",
      el: startEl
    });

    stops.forEach((stop, index) => {
      addLeg(ROUGH_W, `rough patch ${index + 1}`, "rough");
      x += ROUGH_W;

      const el = addStop({
        no: "0" + (index + 1),
        name: stop.name,
        text: stop.text,
        rough: true
      });

      nodes.push({
        x,
        kind: "rough",
        data: stop,
        el
      });
    });

    addLeg(FINAL_W, "clear line ahead", "smooth");
    x += FINAL_W;

    const finalEl = addStop({
      no: "∞",
      name: T.journey.finalTitle,
      text: "",
      rough: false,
      final: true
    });

    nodes.push({
      x,
      kind: "final",
      el: finalEl
    });

    strip.style.width = (x + 220) + "px";

    placeTrain(0);
  }

  function addLeg(width, label, kind) {
    const element = document.createElement("div");

    element.className = "leg is-" + kind;
    element.style.width = width + "px";

    element.innerHTML = `
      <span class="leg__label">${esc(label)}</span>
    `;

    strip.appendChild(element);
  }

  function addStop({ no, name, text, rough, final }) {
    const element = document.createElement("div");

    element.className =
      "stop" +
      (rough ? " is-rough" : "") +
      (final ? " stop--final" : "") +
      (!text ? " has-no-card" : "");

    element.innerHTML = `
      <span class="stop__no">${esc(no)}</span>
      <span
        class="stop__pin"
        tabindex="0"
        role="button"
        aria-label="${esc(name)}"
      ></span>
      ${
        text
          ? `<span class="stop__card">
               <h4>${esc(name)}</h4>
               <p>${esc(text)}</p>
             </span>`
          : ""
      }
    `;

    strip.appendChild(element);

    const pin = element.querySelector(".stop__pin");

    if (text && pin) {
      pin.addEventListener("click", () => {
        element.classList.toggle("is-open");
      });

      pin.addEventListener("focus", () => {
        element.classList.add("is-open");
      });

      pin.addEventListener("blur", () => {
        element.classList.remove("is-open");
      });
    }

    return element;
  }

  function placeTrain(index) {
    const node = nodes[index];

    if (!node || !stage || !strip || !train) return;

    const stageWidth = stage.clientWidth;
    const totalWidth = strip.offsetWidth;

    let translateX = -(node.x - stageWidth * 0.42);

    translateX = Math.max(
      -(totalWidth - stageWidth + 40),
      Math.min(0, translateX)
    );

    strip.style.transform = `translateX(${translateX}px)`;
    train.style.transform = `translateX(${node.x + translateX}px)`;
  }

  function say(node) {
    if (!status) return;

    if (node.kind === "start") {
      status.textContent =
        "at the platform. press when you're ready.";
    }

    if (node.kind === "rough") {
      status.textContent =
        `signal ${idx} of ${stops.length} — ${node.data.name}. hover it to read what went wrong.`;
    }

    if (node.kind === "final") {
      status.textContent = "the line is clear from here.";
    }
  }

  /* ---------- final panel content ---------- */

  setText("#finalTitle", T.journey.finalTitle);

  const finalBody = $("#finalBody");

  if (finalBody) {
    finalBody.innerHTML = "";

    T.journey.finalText.forEach((paragraph, index) => {
      const element = document.createElement("p");

      element.textContent = paragraph;

      if (index === T.journey.finalText.length - 1) {
        element.className = "love";
      }

      finalBody.appendChild(element);
    });
  }

  /* =========================================================
     RING-BOUND PHOTO ALBUM
     Each configured memory is added exactly once.
     ========================================================= */

  const album = $("#funScatter");

  if (album) {
    album.innerHTML = "";

    T.fun.items.forEach((memory, index) => {
      const figure = document.createElement("figure");

      figure.className = "album-photo reveal";

      figure.innerHTML = `
        <div class="album-photo__image">
          <img
            src="${esc(memory.image)}"
            alt="${esc(memory.label)}"
            loading="lazy"
          >
        </div>

        <figcaption>
          <span class="album-photo__number">
            ${String(index + 1).padStart(2, "0")}
          </span>

          <span class="t">${esc(memory.label)}</span>

          <span class="n">${esc(memory.note)}</span>
        </figcaption>
      `;

      const image = figure.querySelector("img");

      image.addEventListener("error", () => {
        figure.classList.add("image-missing");
      });

      album.appendChild(figure);
    });
  }

})();
