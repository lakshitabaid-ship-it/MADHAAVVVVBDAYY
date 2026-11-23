/* ==================================================================
   Lakshita GPT — behaviour
   ================================================================== */

(function () {
  const G = SITE.gpt;
  const $  = s => document.querySelector(s);
  const messages = $("#messages");
  const thread   = $("#thread");
  const box      = $("#box");
  const sendBtn  = $("#send");
  const shell    = $(".gpt-shell");

  const MARK = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M12 3c2.2 3.4 5.5 5.2 5.5 9A5.5 5.5 0 0 1 12 21a5.5 5.5 0 0 1-5.5-9c0-3.8 3.3-5.6 5.5-9Z"/></svg>';

  let busy = false;

  /* ---------------- sidebar list ---------------- */
  const list = $("#threadList");
  G.threads.forEach((t, i) => {
    const li = document.createElement("li");
    li.className = "gpt-thread-item" + (i === 0 ? " is-new" : "");
    li.dataset.id = t.id;
    li.innerHTML = `${esc(t.title)}<span class="when">${esc(t.when)}</span>`;
    li.addEventListener("click", () => openThread(t.id));
    list.appendChild(li);
  });

  $("#searchThreads").addEventListener("input", e => {
    const q = e.target.value.trim().toLowerCase();
    list.querySelectorAll(".gpt-thread-item").forEach(el => {
      const t = G.threads.find(x => x.id === el.dataset.id);
      el.style.display = (t.title.toLowerCase().includes(q) ||
                          t.question.toLowerCase().includes(q)) ? "" : "none";
    });
  });

  $("#collapse").addEventListener("click", () => {
    if (innerWidth <= 860) { shell.classList.remove("is-mobile-open"); $("#scrim").classList.remove("is-on"); }
    else shell.classList.toggle("is-narrow");
  });
  $("#openSide").addEventListener("click", () => {
    if (innerWidth <= 860) { shell.classList.add("is-mobile-open"); $("#scrim").classList.add("is-on"); }
    else shell.classList.remove("is-narrow");
  });
  $("#scrim").addEventListener("click", () => {
    shell.classList.remove("is-mobile-open"); $("#scrim").classList.remove("is-on");
  });

  $("#newChat").addEventListener("click", () => {
    list.querySelectorAll(".gpt-thread-item").forEach(el => el.classList.remove("is-active"));
    greeting();
  });

  $("#shareBtn").addEventListener("click", () => {
    const url = location.href;
    if (navigator.clipboard) navigator.clipboard.writeText(url).catch(() => {});
    flash("link copied");
  });

  /* ---------------- states ---------------- */
  function greeting() {
    messages.innerHTML = `
      <div class="gpt-hello">
        <h2>${esc(G.greeting)}</h2>
        <p>${esc(G.subGreeting)}</p>
      </div>`;
    showPinned([G.pinnedQuestion]);
    box.focus();
  }

  function openThread(id) {
    const t = G.threads.find(x => x.id === id);
    if (!t) return;
    list.querySelectorAll(".gpt-thread-item").forEach(el =>
      el.classList.toggle("is-active", el.dataset.id === id));
    if (innerWidth <= 860) { shell.classList.remove("is-mobile-open"); $("#scrim").classList.remove("is-on"); }

    messages.innerHTML = "";
    userMsg(t.question);
    botMsg(t.answer, { shout: !!t.bold, withDrive: t.id === "birthday" });
    showPinned([G.pinnedQuestion]);
    toBottom(true);
  }

  /* ---------------- message builders ---------------- */
  function userMsg(text) {
    const el = document.createElement("div");
    el.className = "msg msg--user";
    el.innerHTML = `<div class="bubble">${esc(text)}</div>`;
    messages.appendChild(el);
    return el;
  }

  function botMsg(text, opts = {}) {
    const el = document.createElement("div");
    el.className = "msg msg--bot" + (opts.shout ? " is-shout" : "");
    el.innerHTML = `
      <span class="msg__face">${MARK}</span>
      <div style="min-width:0;flex:1">
        <div class="bubble"></div>
        <div class="msg__tools">
          <button title="Copy">${icon("copy")}</button>
          <button title="Good answer">${icon("up")}</button>
          <button title="Bad answer">${icon("down")}</button>
          <button title="Read aloud">${icon("wave")}</button>
          <button title="Regenerate">${icon("regen")}</button>
        </div>
      </div>`;
    messages.appendChild(el);
    const bubble = el.querySelector(".bubble");
    const instant = document.hidden || matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (instant) { bubble.textContent = text; finish(el, opts); }
    else stream(bubble, text, () => finish(el, opts));

    return el;
  }

  function finish(el, opts) {
    el.classList.add("is-done");
    if (opts.withDrive) el.querySelector(".bubble").appendChild(driveCard());
    el.querySelectorAll(".msg__tools button").forEach(b => {
      b.addEventListener("click", () => { b.style.color = "#3b2a20"; setTimeout(() => b.style.color = "", 700); });
    });
  }

  function driveCard() {
    const a = document.createElement("a");
    a.className = "drive-link";
    a.href = SITE.driveLink.startsWith("http") ? SITE.driveLink : "#";
    a.target = "_blank"; a.rel = "noopener";
    a.innerHTML = `
      <span class="drive-link__ic">${icon("drive")}</span>
      <span class="drive-link__t">
        <b>${esc(SITE.driveLink.startsWith("http") ? "A folder with everything I couldn't fit in words" : "Paste the Google Drive link in js/config.js")}</b>
        <span>drive.google.com</span>
      </span>`;
    return a;
  }

  /* typewriter that respects paragraph breaks */
  function stream(node, text, done) {
    busy = true; sendBtn.disabled = true;
    node.innerHTML = `<span class="dots"><i></i><i></i><i></i></span>`;
    toBottom();

    setTimeout(() => {
      node.textContent = "";
      const paras = text.split("\n").filter(p => p.trim() !== "" || true);
      let pi = 0, ci = 0, cur = null;

      function step() {
        if (pi >= paras.length) { busy = false; sendBtn.disabled = false; done && done(); return; }
        if (!cur) { cur = document.createElement("div"); cur.style.marginBottom = ".9em"; node.appendChild(cur); }
        const p = paras[pi];
        if (p === "") { cur = null; pi++; ci = 0; setTimeout(step, 140); return; }
        cur.textContent = p.slice(0, ++ci);
        if (ci % 3 === 0) toBottom();
        if (ci >= p.length) { pi++; ci = 0; cur = null; }
        setTimeout(step, 11 + Math.random() * 22);
      }
      step();
    }, 620);
  }

  /* ---------------- sending ---------------- */
  $("#form").addEventListener("submit", e => {
    e.preventDefault();
    const text = box.value.trim();
    if (!text || busy) return;
    box.value = ""; autosize();
    send(text);
  });

  box.addEventListener("keydown", e => {
    if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); $("#form").requestSubmit(); }
  });
  box.addEventListener("input", autosize);

  function send(text) {
    messages.innerHTML = "";
    userMsg(text);
    showPinned([]);

    const hit = G.threads.find(t =>
      t.question.toLowerCase() === text.toLowerCase() ||
      text.toLowerCase().includes(t.title.toLowerCase().replace("?", ""))
    );

    if (hit) {
      botMsg(hit.answer, { shout: !!hit.bold, withDrive: hit.id === "birthday" });
    } else if (isBirthdayQuestion(text)) {
      botMsg(birthdayAnswer(), { withDrive: true });
    } else {
      botMsg(G.fallback);
    }
  }

  function isBirthdayQuestion(t) {
    const s = t.toLowerCase();
    return s.includes("birthday") && (s.includes("mean") || s.includes("you"));
  }

    function birthdayAnswer() {
    return `To her, your 19th birthday means a lot.

Why does it mean so much to her? Because you mean a lot to her. Your birthday is not just another date on the calendar. It is the day someone who has become such an important part of her life came into this world.

She is grateful that you were born, that your paths crossed, and that somehow, out of all the people and all the possibilities, the two of you found each other.

She wants you to know that she is happy you exist. She is happy that you are here, in this universe, in this era, and that she gets to be a part of your story.

So she has done something to show how grateful she is that you were born in this universe, in this era.

Happy birthday, Keshav. She hopes you know just how much you mean to her.`;
  }
  function showPinned(items) {
    const wrap = $("#pinned");
    wrap.innerHTML = "";
    items.forEach((q, i) => {
      const b = document.createElement("button");
      b.className = "pin";
      b.style.animationDelay = (i * 90) + "ms";
      b.innerHTML = `<em>“</em>${esc(q)}<em>”</em>`;
      b.addEventListener("click", () => { box.value = q; $("#form").requestSubmit(); });
      wrap.appendChild(b);
    });
  }

  /* ---------------- utils ---------------- */
  function autosize() {
    box.style.height = "auto";
    box.style.height = Math.min(box.scrollHeight, 144) + "px";
  }
  function toBottom(now) {
    thread.scrollTo({ top: thread.scrollHeight, behavior: now ? "auto" : "smooth" });
  }
  function esc(s) {
    return String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  }
  function flash(msg) {
    const t = $(".gpt-model em");
    const old = t.textContent;
    t.textContent = msg;
    setTimeout(() => (t.textContent = old), 1400);
  }
  function icon(n) {
    const p = {
      copy:  '<path d="M9 9h9v9H9z"/><path d="M6 15V6h9"/>',
      up:    '<path d="M12 19V6"/><path d="M7 11l5-5 5 5"/>',
      down:  '<path d="M12 5v13"/><path d="M7 13l5 5 5-5"/>',
      wave:  '<path d="M4 12h2M8 8v8M12 5v14M16 8v8M20 12h-2"/>',
      regen: '<path d="M20 12a8 8 0 1 1-3-6.2"/><path d="M20 4v5h-5"/>',
      drive: '<path d="M8 4h8l6 10-6 6H8L2 14z"/>'
    }[n];
    return `<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">${p}</svg>`;
  }

  greeting();
})();
