/* =====================================================================
   RASHA.QUEST — EDITABLE CONTENT
   Update links, places and skills here. Logic lives further down.
   ===================================================================== */
const DATA = {
  name: "Rasha Fathima V",
  subtitle: "A Journey Beyond Imagination",
  tagline: "Every Adventurer Has a Story. This Is Mine.",
  welcome: "Welcome, traveller! I'm Rasha — a BCA graduate from Calicut, Kerala. Seven places on this map hold my story. Shall we explore?",
  resume: "assets/Rasha_Fathima_Resume (2)-1.pdf", // Resume PDF
  portrait: "assets/rasha.png", // Profile picture of Rasha Fathima
  email: "rashafathima1819@gmail.com",
  linkedin: "https://linkedin.com/in/rasha-fathima-v-46a78234a",
  github: "https://github.com/rashafathimav", // CONFIRM USERNAME BEFORE PUBLISHING

  about: {
    facts: ["Rasha Fathima V", "BCA graduate", "Calicut, Kerala, India"],
    summary: "I'm a BCA graduate from Calicut, Kerala, India, with skills across Python, JavaScript, SQL, Django and React.js.",
    personality: "Creative at heart — I built this portfolio as a small game you can play.", // EDIT ME
    objective: "To begin my career in software development and keep growing through real-world projects.", // EDIT ME
  },

  skills: [
    { group: "Programming", icon: "✦", items: ["Python", "JavaScript", "SQL"] },
    { group: "Web", icon: "❖", items: ["HTML", "CSS", "React.js", "Bootstrap"] },
    { group: "Frameworks", icon: "✧", items: ["Django", "Flask", "Flutter"] },
    { group: "Databases", icon: "◆", items: ["PostgreSQL", "MySQL", "SQLite"] },
    { group: "Tools", icon: "✶", items: ["Git", "GitHub", "Visual Studio Code", "Postman"] },
  ],

  project: {
    name: "BRAINLOCK",
    summary: "A digital learning platform connecting teachers, students and parents.",
    features: ["Online study materials", "Video learning", "Assignments", "Online exams",
      "AI-supported performance analysis", "Face detection", "Student activity tracking"],
  },

  experience: [{
    org: "Cognilearn", place: "Calicut",
    points: [
      "Gained practical industry experience.",
      "Worked on technical tasks.", // EDIT ME: describe the tasks
      "Built new skills through hands-on work.", // EDIT ME: list the skills gained
    ],
  }],

  education: [
    { title: "Bachelor of Computer Applications (BCA)", where: "MES College of Arts and Science, Calicut", when: "2023 – 2026" },
    { title: "Higher Secondary", where: "Rahmaniya VHSS", when: "2021 – 2023" },
  ],

  certs: [
    { name: "Little Kites", by: "KITE", when: "2020", icon: "✦" },
    { name: "OJT (On-the-Job Training)", by: "KELTRON, Calicut", when: "2023", icon: "⚙" },
    { name: "Office Applications and Advanced Excel", by: "", when: "2025", icon: "✶" },
  ],

  // The journey shows these places top to bottom, in this order
  places: [
    { id: "home", name: "Adventurer's Home", sub: "About Me", desc: "Meet the adventurer behind this journey.", ac: "#E8A86B", bg: ["#2c1e33", "#101629"], motif: ["rise", "•"] },
    { id: "skills", name: "Forest of Skills", sub: "Skills", desc: "Gather the abilities collected along the way.", ac: "#7FD1A3", bg: ["#0f2b2a", "#0e1528"], motif: ["fall", "❦"] },
    { id: "project", name: "Project Kingdom", sub: "Projects", desc: "Explore the realm built by hand.", ac: "#D8B477", bg: ["#2a2343", "#101629"], motif: ["rise", "♛"] },
    { id: "exp", name: "Experience City", sub: "Experience", desc: "Walk the streets where real-world skills were earned.", ac: "#6FB7FF", bg: ["#0d2244", "#0d1326"], motif: ["rise", "▪"] },
    { id: "edu", name: "Academy of Wisdom", sub: "Education", desc: "Visit the halls where knowledge was gathered.", ac: "#B9A4F0", bg: ["#231c45", "#0f1428"], motif: ["twinkle", "✶"] },
    { id: "hall", name: "Hall of Achievements", sub: "Certifications", desc: "Behold the badges earned on the road.", ac: "#F2C66D", bg: ["#2f2414", "#121429"], motif: ["twinkle", "★"] },
    { id: "portal", name: "Contact Portal", sub: "Contact", desc: "Open the portal and send word to Rasha.", ac: "#8EE3F0", bg: ["#0f2c3a", "#101629"], motif: ["ring", ""] },
  ],
};

/* =====================================================================
   GAME LOGIC
   ===================================================================== */
const $ = (s) => document.querySelector(s);
const PLACES = DATA.places;
const byId = (id) => PLACES.find((p) => p.id === id);
const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
const KEY = "rasha.quest.v1";

function loadState() {
  try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch (e) { return {}; }
}
const S = Object.assign({ visited: [], muted: false, announced: false }, loadState());
if (!Array.isArray(S.visited)) S.visited = [];
S.visited = S.visited.filter((id) => byId(id));
function save() { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) { /* storage unavailable */ } }

const portalOpen = () => PLACES.filter((p) => p.id !== "portal").every((p) => S.visited.includes(p.id));

/* ---------- Audio (Web Audio, generated) ---------- */
const hz = (n) => 440 * Math.pow(2, (n - 69) / 12);
const CHORDS = [[57, 60, 64], [53, 57, 60], [55, 60, 64], [55, 59, 62]];
const Snd = {
  ctx: null, started: false,
  init() {
    if (this.ctx) return true;
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return false;
    try {
      const c = (this.ctx = new AC());
      this.master = c.createGain(); this.master.gain.value = S.muted ? 0 : 0.8; this.master.connect(c.destination);
      const d = c.createDelay(); d.delayTime.value = 0.38;
      const fb = c.createGain(); fb.gain.value = 0.3; d.connect(fb); fb.connect(d); d.connect(this.master);
      const lp = c.createBiquadFilter(); lp.type = "lowpass"; lp.frequency.value = 1800;
      this.mus = c.createGain(); this.mus.gain.value = 0.22; this.mus.connect(lp); lp.connect(this.master); lp.connect(d);
      this.fx = c.createGain(); this.fx.gain.value = 0.5; this.fx.connect(this.master); this.fx.connect(d);
    } catch (e) { this.ctx = null; return false; }
    return true;
  },
  tone(f, t, dur, type, vol, dest, att) {
    const c = this.ctx, o = c.createOscillator(), g = c.createGain();
    o.type = type || "sine"; o.frequency.value = f;
    g.gain.setValueAtTime(0.0001, t);
    g.gain.linearRampToValueAtTime(vol, t + (att || 0.01));
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    o.connect(g); g.connect(dest || this.fx); o.start(t); o.stop(t + dur + 0.05);
  },
  noise(t, dur) {
    const c = this.ctx, b = c.createBuffer(1, c.sampleRate * dur, c.sampleRate), ch = b.getChannelData(0);
    for (let i = 0; i < ch.length; i++) ch[i] = Math.random() * 2 - 1;
    const s = c.createBufferSource(), f = c.createBiquadFilter(), g = c.createGain();
    s.buffer = b; f.type = "bandpass"; f.Q.value = 2;
    f.frequency.setValueAtTime(300, t); f.frequency.exponentialRampToValueAtTime(4000, t + dur);
    g.gain.setValueAtTime(0.0001, t); g.gain.linearRampToValueAtTime(0.35, t + dur * 0.4); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    s.connect(f); f.connect(g); g.connect(this.fx); s.start(t);
  },
  play(name) {
    if (!this.ctx || S.muted) return;
    const t = this.ctx.currentTime, arp = (ns, gap, v, d) => ns.forEach((n, i) => this.tone(hz(n), t + i * gap, d || 0.8, "sine", v));
    if (name === "click") this.tone(hz(81), t, 0.09, "sine", 0.12);
    else if (name === "step") this.tone(130 + Math.random() * 40, t, 0.07, "triangle", 0.07);
    else if (name === "whoosh") { this.noise(t, 0.7); arp([72, 79, 84], 0.08, 0.12, 1.2); }
    else if (name === "chime") arp([72, 76, 79, 84], 0.09, 0.14);
    else if (name === "locked") { this.tone(220, t, 0.25, "square", 0.04); this.tone(185, t + 0.15, 0.35, "square", 0.04); }
    else if (name === "unlock") arp([67, 71, 74, 79, 83, 86], 0.08, 0.14, 1);
    else if (name === "finale") { arp([60, 64, 67, 72, 76, 79, 84, 88], 0.07, 0.13, 1.4);[60, 64, 67].forEach((n) => this.tone(hz(n), t + 0.6, 2.6, "triangle", 0.1, this.fx, 0.3)); }
  },
  startMusic() {
    if (!this.ctx || this.started || S.muted) return;
    this.started = true; this.next = this.ctx.currentTime + 0.1; this.bar = 0;
    this.tick(); this.timer = setInterval(() => this.tick(), 500);
  },
  tick() {
    while (this.next < this.ctx.currentTime + 1.5) {
      const t = this.next, ch = CHORDS[this.bar++ % 4];
      ch.forEach((n) => this.tone(hz(n), t, 4.3, "triangle", 0.1, this.mus, 1.4));
      this.tone(hz(ch[0] - 12), t, 4.2, "sine", 0.16, this.mus, 0.6);
      for (let k = 0; k < 8; k++) this.tone(hz(ch[[0, 1, 2, 1, 2, 0, 1, 2][k]] + 12 + (k > 3 ? 12 : 0)), t + k * 0.5, 0.9, "sine", 0.05, this.mus, 0.02);
      this.next += 4;
    }
  },
  toggle() {
    S.muted = !S.muted; save(); syncSound();
    if (S.muted) {
      if (this.ctx) { this.master.gain.setTargetAtTime(0, this.ctx.currentTime, 0.05); setTimeout(() => S.muted && this.ctx.suspend(), 300); }
    } else if (this.init()) {
      this.ctx.resume(); this.master.gain.setTargetAtTime(0.8, this.ctx.currentTime, 0.1); this.startMusic(); this.play("click");
    }
  },
};
function syncSound() {
  const b = $("#soundBtn");
  b.textContent = S.muted ? "♪ Sound: OFF" : "♪ Sound: ON";
  b.setAttribute("aria-pressed", String(!S.muted));
  b.setAttribute("aria-label", S.muted ? "Sound is off. Turn sound on" : "Sound is on. Turn sound off");
}

/* ---------- Character ---------- */
const HERO = `<svg class="hero-svg" viewBox="0 0 120 200" aria-hidden="true" focusable="false">
<g class="c-bob"><path class="c-cape" d="M40 80Q60 72 80 80L98 168Q60 180 22 168Z" fill="#5b4a91"/><path class="c-hairback" d="M34 46Q30 96 38 122Q60 130 82 122Q90 96 86 46Z" fill="#2b2450"/></g>
<g class="c-leg l"><rect x="47" y="132" width="11" height="44" rx="5" fill="#1b2240"/><path d="M44 172h15v10H40q0-6 4-10z" fill="#6b4a2c"/></g>
<g class="c-leg r"><rect x="62" y="132" width="11" height="44" rx="5" fill="#222a4d"/><path d="M61 172h15q4 4 4 10H61z" fill="#7a5533"/></g>
<g class="c-bob"><g class="c-arm l"><rect x="33" y="84" width="10" height="40" rx="5" fill="#2f4878"/><circle cx="38" cy="125" r="5" fill="#f2d4c0"/></g>
<path d="M42 82Q60 75 78 82L82 140Q60 148 38 140Z" fill="#253B63"/><path d="M50 80L60 98L70 80" fill="none" stroke="#D8B477" stroke-width="3"/>
<rect x="40" y="116" width="40" height="6" rx="3" fill="#D8B477"/><rect x="56" y="114" width="8" height="10" rx="2" fill="#f4e2b5"/>
<g class="c-arm r"><rect x="77" y="84" width="10" height="40" rx="5" fill="#2f4878"/><circle cx="82" cy="125" r="5" fill="#f2d4c0"/></g>
<rect x="55" y="68" width="10" height="12" fill="#ecc9b2"/><ellipse cx="60" cy="50" rx="24" ry="25" fill="#f6dccb"/>
<g class="c-eyes"><ellipse cx="50" cy="54" rx="4.2" ry="5.6" fill="#2d2a5a"/><ellipse cx="70" cy="54" rx="4.2" ry="5.6" fill="#2d2a5a"/><circle cx="51.4" cy="52" r="1.6" fill="#fff"/><circle cx="71.4" cy="52" r="1.6" fill="#fff"/></g>
<ellipse cx="44" cy="62" rx="4" ry="2" fill="#f2a7a0" opacity=".6"/><ellipse cx="76" cy="62" rx="4" ry="2" fill="#f2a7a0" opacity=".6"/>
<path d="M56 65q4 3 8 0" fill="none" stroke="#a5605a" stroke-width="1.6" stroke-linecap="round"/>
<g class="c-hair"><path d="M34 54Q32 22 60 22Q90 22 86 56Q82 40 74 36Q68 46 58 38Q50 46 42 40Q37 46 34 54Z M36 50Q32 72 38 84L42 56Z M84 50Q88 72 82 84L78 56Z" fill="#2b2450"/><path d="M46 28Q58 22 72 28" stroke="#7965A8" stroke-width="2.4" fill="none" stroke-linecap="round"/><path d="M80 32l3-6 3 6-3 2z" fill="#D8B477"/></g>
</g></svg>`;

/* ---------- Icons ---------- */
const ICON = {
  home: "M3 11 12 4l9 7M5 10v10h5v-6h4v6h5V10",
  skills: "M12 2 5 12h4l-3 5h12l-3-5h4zM12 17v5",
  project: "M3 21V9h3V6h2v3h2V6h4v3h2V6h2v3h3v12h-7v-5h-4v5z",
  exp: "M3 21V10h6V3h7v7h5v11zM6 14h1M6 17h1M12 7h1M12 10h1M12 13h1M18 14h1M18 17h1",
  edu: "M2 9l10-5 10 5-10 5zM6 11v5c3 2 9 2 12 0v-5M22 9v6",
  hall: "M7 4h10v4a5 5 0 0 1-10 0zM7 6H4a3 3 0 0 0 3 4M17 6h3a3 3 0 0 1-3 4M12 13v4M8 21h8l-1-4H9z",
  portal: "M12 3a9 9 0 1 0 9 9 6 6 0 1 0-6 6 3 3 0 1 0-3-3",
};
const svgIcon = (k) => `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="${ICON[k]}"/></svg>`;

/* ---------- Helpers ---------- */
let toastTimer;
function toast(msg) {
  const t = $("#toast");
  t.textContent = msg; t.classList.add("show");
  clearTimeout(toastTimer); toastTimer = setTimeout(() => t.classList.remove("show"), 3600);
}
const SCREENS = ["title", "welcome", "journey", "finale"];
let current = "title";
function show(id, focusSel) {
  SCREENS.forEach((s) => { $("#" + s).hidden = s !== id; });
  current = id;
  $("#world").classList.toggle("off", !(id === "title" || id === "welcome"));
  window.scrollTo(0, 0);
  const f = focusSel ? $(focusSel) : $("#" + id + " [tabindex='-1']");
  if (f) f.focus({ preventScroll: true });
}
function sprinkle(el, n, make) { el.innerHTML = ""; for (let i = 0; i < n; i++) el.appendChild(make(i)); }
const rnd = (a, b) => a + Math.random() * (b - a);
const clamp = (v) => Math.max(0, Math.min(1, v));

/* ---------- Opening scene ---------- */
function buildScene() {
  const ns = "http://www.w3.org/2000/svg", g = $("#stars");
  for (let i = 0; i < 70; i++) {
    const c = document.createElementNS(ns, "circle");
    c.setAttribute("cx", rnd(0, 1600).toFixed(0)); c.setAttribute("cy", rnd(0, 520).toFixed(0));
    c.setAttribute("r", rnd(0.6, 2.2).toFixed(1)); c.setAttribute("fill", "#DDE5F2");
    c.setAttribute("class", "tw"); c.style.animationDelay = rnd(-3, 0).toFixed(2) + "s";
    g.appendChild(c);
  }
  const fx = $("#fx"), runes = "ᚱᚨᛊᚺᚠᛏᛗᛟᚹᛉ";
  for (let i = 0; i < 16; i++) {
    const f = document.createElement("i"); f.className = "ff";
    f.style.cssText = `left:${rnd(4, 96)}%;top:${rnd(50, 92)}%;animation-delay:${rnd(-9, 0)}s,${rnd(-2, 0)}s`;
    fx.appendChild(f);
  }
  for (let i = 0; i < 9; i++) {
    const r = document.createElement("span"); r.className = "rune"; r.textContent = runes[i % runes.length];
    r.style.cssText = `left:${rnd(3, 95)}%;top:${rnd(55, 95)}%;animation-delay:${rnd(-12, 0)}s`;
    fx.appendChild(r);
  }
}

/* ---------- Opening → welcome → journey ---------- */
let welcomeTimer;
function start() {
  if (!S.muted && Snd.init()) { Snd.ctx.resume(); Snd.startMusic(); }
  Snd.play("whoosh");
  const fl = $("#flash"); fl.classList.remove("go"); void fl.offsetWidth; fl.classList.add("go");
  setTimeout(() => {
    show("welcome", "#skipBtn");
    const w = $("#welcomeHero");
    w.classList.add("walking"); w.style.animation = "none"; void w.offsetWidth; w.style.animation = "";
    setTimeout(() => w.classList.remove("walking"), reduced ? 0 : 2600);
    clearTimeout(welcomeTimer); welcomeTimer = setTimeout(() => goJourney(), reduced ? 3500 : 3800);
  }, reduced ? 50 : 380);
}
function skipWelcome() { clearTimeout(welcomeTimer); goJourney(); }

/* ---------- Chapter content ---------- */
const RENDER = {
  home: () => {
    const a = DATA.about;
    const pic = DATA.portrait ? `<img src="${DATA.portrait}" alt="Portrait of ${DATA.name}">` : `<span role="img" aria-label="Portrait placeholder">RF</span>`;
    return `<div class="about"><div class="portrait">${pic}</div>
      <div class="panel"><div class="facts">${a.facts.map((f) => `<span class="chip">${f}</span>`).join("")}</div>
      <p>${a.summary}</p><p class="muted">${a.personality}</p>
      <h3 style="margin-top:18px">Career objective</h3><p>${a.objective}</p>
      <a class="btn btn-gold" href="${DATA.resume}" download>⬇ Download Resume</a></div></div>`;
  },
  skills: () => `<div class="abilities">${DATA.skills.map((s) => `<article class="ability" tabindex="0">
      <h3><b aria-hidden="true">${s.icon}</b>${s.group}</h3><ul>${s.items.map((x) => `<li class="chip">${x}</li>`).join("")}</ul></article>`).join("")}</div>`,
  project: () => {
    const p = DATA.project;
    return `<div class="project">
      <div class="mock" role="img" aria-label="Illustrated preview of the ${p.name} dashboard">
        <div class="mock-top"><i></i><i></i><i></i><em>${p.name}</em></div>
        <div class="mock-body"><div class="mock-side"><i></i><i></i><i></i><i></i></div>
        <div class="mock-main"><div class="mock-card"><b>Study materials</b>Videos · Notes</div><div class="mock-card"><b>Online exam</b>Assignments</div>
        <div class="mock-card"><b>Performance</b><div class="bars">${[40, 65, 50, 85, 70, 95].map((h, i) => `<i style="height:${h}%;animation-delay:${0.2 + i * 0.08}s"></i>`).join("")}</div></div>
        <div class="mock-card"><b>Face detection</b><div class="face-frame"></div></div></div></div></div>
      <div class="panel"><h3>${p.name}</h3><p>${p.summary}</p><div class="tags">${p.features.map((f) => `<span class="chip">${f}</span>`).join("")}</div></div></div>
      <div class="future">${[1, 2].map(() => `<div class="panel"><span aria-hidden="true">🔒</span><h3 style="margin-top:8px">Future quest</h3><p class="muted">A new project is on its way.</p></div>`).join("")}</div>`;
  },
  exp: () => `<ol class="timeline">${DATA.experience.map((e) => `<li class="panel"><h3>${e.org}</h3><p class="when">${e.place}</p>
      <ul class="points">${e.points.map((x) => `<li>${x}</li>`).join("")}</ul></li>`).join("")}</ol>`,
  edu: () => `<ol class="timeline">${DATA.education.map((e) => `<li class="panel"><p class="when">${e.when}</p><h3>${e.title}</h3><p class="muted">${e.where}</p></li>`).join("")}</ol>`,
  hall: () => `<div class="badges">${DATA.certs.map((c) => `<article class="cert"><div class="medal" aria-hidden="true">${c.icon}</div>
      <h3>${c.name}</h3><p class="muted">${[c.by, c.when].filter(Boolean).join(" · ")}</p></article>`).join("")}</div>`,
  portal: () => `<div class="links">
      <a class="link-card" href="mailto:${DATA.email}"><i aria-hidden="true">✉</i><div><b>Email</b><span>${DATA.email}</span></div></a>
      <a class="link-card" href="${DATA.linkedin}" target="_blank" rel="noopener noreferrer"><i aria-hidden="true">in</i><div><b>LinkedIn</b><span>rasha-fathima-v</span></div></a>
      <a class="link-card" href="${DATA.github}" target="_blank" rel="noopener noreferrer"><i aria-hidden="true">⌥</i><div><b>GitHub</b><span>${DATA.github.replace("https://", "")}</span></div></a>
      <a class="link-card" href="${DATA.resume}" download><i aria-hidden="true">⬇</i><div><b>Resume</b><span>Download PDF</span></div></a></div>
      <div class="panel complete"><h3>The final step</h3><p>You have walked every path of this realm.</p>
      <button class="btn btn-gold" type="button" id="completeBtn">✦ Complete the Quest</button></div>`,
};
const REVEAL = ".about>*,.ability,.project>*,.future>*,.timeline>li,.cert,.links>*,.complete";

/* ---------- Journey (scroll) ---------- */
let chapters = [], anchors = [], activeId = null, ticking = false, lastY = 0, walkTimer, lastStep = 0;
const avatar = $("#avatar"), face = $("#avatarFace"), backdrop = $("#backdrop");
const isPhone = () => innerWidth < 700;

function buildJourney() {
  const wrap = $("#chapters");
  PLACES.forEach((p, i) => {
    const sec = document.createElement("section");
    sec.className = "chapter"; sec.id = "ch-" + p.id; sec.dataset.id = p.id;
    sec.setAttribute("aria-labelledby", "h-" + p.id);
    sec.style.cssText = `--ac:${p.ac}`;
    sec.innerHTML = `<span class="ch-num" aria-hidden="true">0${i + 1}</span>
      <div class="ch-head reveal"><span class="ch-icon" aria-hidden="true">${svgIcon(p.id)}</span>
      <p class="quest-no">Place ${i + 1} of ${PLACES.length} · ${p.sub}</p>
      <h2 class="quest-title" id="h-${p.id}" tabindex="-1">${p.name}</h2>
      <p class="quest-desc">${p.desc}</p></div>
      <div class="quest-body">${RENDER[p.id]()}</div>`;
    sec.querySelectorAll(REVEAL).forEach((el) => {
      el.classList.add("reveal");
      el.style.setProperty("--d", ([...el.parentNode.children].indexOf(el) * 0.12).toFixed(2) + "s");
    });
    wrap.appendChild(sec);
  });
  chapters = [...document.querySelectorAll(".chapter")];
  $("#railDots").innerHTML = PLACES.map((p, i) => `<li><button class="dot" type="button" data-id="${p.id}" style="--c:${p.ac}"><span>${svgIcon(p.id)}</span></button></li>`).join("");
  $("#railDots").addEventListener("click", (e) => { const b = e.target.closest(".dot"); if (b) jumpTo(b.dataset.id); });
  $("#chapters").addEventListener("click", (e) => { if (e.target.closest("#completeBtn")) complete(); });

  const revealIO = new IntersectionObserver((es) => es.forEach((en) => {
    if (en.isIntersecting) { en.target.classList.add("in"); revealIO.unobserve(en.target); }
  }), { threshold: 0.12 });
  document.querySelectorAll(".reveal").forEach((el) => (reduced ? el.classList.add("in") : revealIO.observe(el)));

  const activeIO = new IntersectionObserver((es) => es.forEach((en) => { if (en.isIntersecting) setActive(en.target.dataset.id); }),
    { rootMargin: "-45% 0px -45% 0px" });
  chapters.forEach((c) => activeIO.observe(c));
}
function layoutRail() {
  const max = Math.max(1, document.documentElement.scrollHeight - innerHeight);
  // scroll position at which each place becomes active; dots sit evenly on the rail
  anchors = chapters.map((c) => Math.min(max, Math.max(0, c.getBoundingClientRect().top + scrollY - innerHeight * 0.55)));
  document.querySelectorAll("#railDots li").forEach((li, i) => { li.style.top = ((i / (PLACES.length - 1)) * 100).toFixed(2) + "%"; });
}
function pathFrac(y) {
  const n = anchors.length - 1;
  if (y <= anchors[0]) return 0;
  for (let i = 0; i < n; i++) {
    if (y < anchors[i + 1]) return (i + (y - anchors[i]) / Math.max(1, anchors[i + 1] - anchors[i])) / n;
  }
  return 1;
}
function setActive(id) {
  if (activeId === id) return;
  activeId = id;
  const p = byId(id);
  backdrop.style.setProperty("--ac", p.ac); backdrop.style.setProperty("--bg1", p.bg[0]); backdrop.style.setProperty("--bg2", p.bg[1]);
  const m = $("#motif");
  m.className = "motif m-" + p.motif[0];
  sprinkle(m, reduced ? 0 : 16, () => {
    const s = document.createElement("span"); s.textContent = p.motif[1];
    s.style.cssText = `left:${rnd(2, 96)}%;top:${p.motif[0] === "fall" ? rnd(-10, 30) : rnd(20, 100)}%;font-size:${rnd(0.7, 1.6).toFixed(2)}rem;animation-delay:${rnd(-10, 0).toFixed(2)}s`;
    return s;
  });
  if (!S.visited.includes(id)) { S.visited.push(id); save(); Snd.play("chime"); }
  refreshProgress();
  if (portalOpen() && !S.announced) {
    S.announced = true; save();
    toast("✦ The Contact Portal has awakened! Your final quest awaits below.");
    Snd.play("unlock");
  }
}
function refreshProgress() {
  PLACES.forEach((p, i) => {
    const b = document.querySelector(`.dot[data-id="${p.id}"]`), done = S.visited.includes(p.id);
    b.classList.toggle("done", done);
    b.setAttribute("aria-current", String(p.id === activeId));
    b.setAttribute("aria-label", `Go to ${i + 1}. ${p.name}, ${p.sub}. ${done ? "completed" : "not visited"}`);
  });
  const n = S.visited.length;
  $("#progressFill").style.transform = `scaleX(${n / PLACES.length})`;
  $("#progressText").textContent = `${n} / ${PLACES.length} places`;
}
function onScroll() {
  if (current !== "journey") return;
  const y = scrollY, dy = y - lastY; lastY = y;
  if (dy && !reduced) {
    face.classList.toggle("left", dy < 0);
    avatar.classList.add("walking");
    clearTimeout(walkTimer); walkTimer = setTimeout(() => avatar.classList.remove("walking"), 180);
    const now = performance.now(); if (now - lastStep > 300) { lastStep = now; Snd.play("step"); }
  }
  if (!ticking) { ticking = true; requestAnimationFrame(tick); }
}
function tick() {
  ticking = false;
  const p = pathFrac(scrollY), vh = innerHeight;
  const rects = chapters.map((c) => c.getBoundingClientRect()); // read first, then write
  if (isPhone()) {
    avatar.style.transform = `translateX(${(p * (innerWidth - 32)).toFixed(1)}px)`;
    $("#groundFill").style.transform = `scaleX(${p})`;
  } else {
    const railH = vh - 122, ty = Math.min(railH - 66, Math.max(0, p * railH - 33));
    avatar.style.transform = `translateY(${ty.toFixed(1)}px)`;
    $("#railFill").style.transform = `scaleY(${p})`;
  }
  if (reduced) return;
  rects.forEach((r, i) => {
    if (r.bottom < -100 || r.top > vh + 100) return;
    const lp = clamp((vh - r.top) / (vh + r.height)).toFixed(3);
    chapters[i].style.setProperty("--p", lp);
    if (chapters[i].dataset.id === activeId) backdrop.style.setProperty("--p", lp);
  });
}
function goJourney(toId) {
  show("journey");
  layoutRail(); refreshProgress(); lastY = scrollY; tick();
  if (toId) jumpTo(toId, true);
}
function jumpTo(id, instant) {
  const c = $("#ch-" + id);
  c.scrollIntoView({ behavior: instant || reduced ? "auto" : "smooth" });
  $("#h-" + id).focus({ preventScroll: true });
  Snd.play("click");
}

/* ---------- Finale ---------- */
function complete() {
  if (!portalOpen()) {
    const left = PLACES.filter((p) => p.id !== "portal" && !S.visited.includes(p.id)).length;
    toast(`Almost there! Visit the other places first — ${left} left.`); Snd.play("locked");
    return;
  }
  show("finale");
  Snd.play("finale");
  sprinkle($("#burst"), reduced ? 0 : 48, (i) => {
    const s = document.createElement("i"), a = (i / 48) * Math.PI * 2, r = rnd(120, 380);
    s.style.cssText = `--x:${(Math.cos(a) * r).toFixed(0)}px;--y:${(Math.sin(a) * r).toFixed(0)}px;animation-delay:${rnd(0, 0.35).toFixed(2)}s`;
    if (i % 3 === 0) s.style.background = "#B9A4F0";
    return s;
  });
}
function resetJourney() {
  S.visited = []; S.announced = false; save(); activeId = null;
  show("title", "#startBtn");
  toast("A new journey begins. Your progress has been cleared.");
}

/* ---------- Wire up ---------- */
function init() {
  $("#subtitle").textContent = DATA.subtitle;
  $("#tagline").textContent = DATA.tagline;
  $("#welcomeText").textContent = DATA.welcome;
  ["#titleHero", "#welcomeHero", "#avatarFace"].forEach((s) => { $(s).innerHTML = HERO; });
  buildScene(); buildJourney(); syncSound();

  $("#startBtn").addEventListener("click", start);
  $("#soundBtn").addEventListener("click", () => Snd.toggle());
  $("#welcome").addEventListener("click", skipWelcome);
  $("#finMap").addEventListener("click", () => goJourney("portal"));
  $("#finNew").addEventListener("click", resetJourney);
  document.addEventListener("keydown", (e) => {
    if (e.key !== "Escape") return;
    if (current === "finale") goJourney("portal");
    else if (current === "welcome") skipWelcome();
  });
  addEventListener("scroll", onScroll, { passive: true });
  let rz;
  addEventListener("resize", () => { clearTimeout(rz); rz = setTimeout(() => { if (current === "journey") { layoutRail(); tick(); } }, 120); });

  const loader = $("#loader");
  setTimeout(() => { loader.classList.add("out"); setTimeout(() => loader.remove(), 450); $("#startBtn").focus({ preventScroll: true }); }, 700);
}
init();
