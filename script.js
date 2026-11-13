/* =====================================================================
   RASHA.QUEST — EDITABLE CONTENT
   Update links, places and skills here. Logic lives further down.
   ===================================================================== */
const DATA = {
  name: "Rasha Fathima V",
  subtitle: "A Journey Beyond Imagination",
  tagline: "Every Adventurer Has a Story. This Is Mine.",
  welcome: "Welcome, traveller! I'm Rasha — a BCA graduate from Calicut, Kerala. Seven places on this map hold my story. Shall we explore?",
  resume: "assets/rasharr.pdf", // Resume PDF
  portrait: "assets/rasha.png", // Profile picture of Rasha Fathima
  email: "rashafathima1819@gmail.com",
  linkedin: "https://linkedin.com/in/rasha-fathima-v-46a78234a",
  github: "https://github.com/rashafathimav", // CONFIRM USERNAME BEFORE PUBLISHING

  about: {
    facts: ["Rasha Fathima V", "BCA Graduate", "Calicut, Kerala, India"],
    summary: "BCA graduate with project-based experience in web and mobile application development, including MERN stack concepts and Flutter development.",
    personality: "Creative thinking, problem solving & NSS volunteer — combining code with engaging interactive design.",
    objective: "Seeking an entry-level software or web development opportunity to apply technical skills, learn from experienced teams, and grow professionally.",
  },

  skills: [
    { group: "Programming", icon: "✦", items: ["Python", "JavaScript", "SQL"] },
    { group: "Web", icon: "❖", items: ["HTML", "CSS", "React.js", "Bootstrap"] },
    { group: "Frameworks", icon: "✧", items: ["Django", "Flask", "Flutter"] },
    { group: "Databases", icon: "◆", items: ["PostgreSQL", "MySQL", "SQLite"] },
    { group: "Tools", icon: "✶", items: ["Git", "GitHub", "VS Code", "Postman"] },
  ],

  skillsList: [
    { name: "Python", cat: "lang", level: 90, icon: "🐍" },
    { name: "JavaScript (ES6+)", cat: "lang", level: 85, icon: "⚡" },
    { name: "SQL", cat: "lang", level: 85, icon: "💾" },
    { name: "React.js", cat: "web", level: 82, icon: "⚛️" },
    { name: "HTML5 & Modern CSS", cat: "web", level: 95, icon: "🎨" },
    { name: "Bootstrap UI", cat: "web", level: 88, icon: "📐" },
    { name: "Django", cat: "frame", level: 84, icon: "🛡️" },
    { name: "Flask", cat: "frame", level: 80, icon: "🌶️" },
    { name: "Flutter", cat: "frame", level: 78, icon: "📱" },
    { name: "PostgreSQL", cat: "db", level: 84, icon: "🐘" },
    { name: "MySQL", cat: "db", level: 86, icon: "🐬" },
    { name: "SQLite", cat: "db", level: 88, icon: "📦" },
    { name: "Git & GitHub", cat: "tools", level: 90, icon: "🐙" },
    { name: "Visual Studio Code", cat: "tools", level: 95, icon: "💻" },
    { name: "Postman & REST APIs", cat: "tools", level: 86, icon: "🚀" },
  ],

  project: {
    name: "BRAINLOCK",
    summary: "A digital learning and mentorship platform connecting teachers, students and parents.",
    features: [
      "Study materials & video lessons",
      "Assignments & online exams",
      "AI-supported performance analysis",
      "Face detection & activity tracking",
      "Personalized learning insights"
    ],
  },

  experience: [{
    org: "Cognilearn", place: "Calicut, Kerala · Present",
    points: [
      "Gaining practical industry experience and developing professional skills.",
      "Working on technical tasks and expanding practical software development knowledge.",
    ],
  }],

  education: [
    { title: "Bachelor of Computer Applications (BCA)", where: "MES College of Arts and Science, Calicut (CGPA: 5.942)", when: "2023 – 2026" },
    { title: "Higher Secondary (Plus Two) — Junior Software Developer", where: "Rahmaniya VHSS, Calicut (82%)", when: "2021 – 2023" },
    { title: "Secondary School Leaving Certificate (SSLC)", where: "Markaz Girls High School (89%)", when: "2020 – 2021" },
  ],

  certs: [
    { name: "Little Kites", by: "KITE", when: "2020", icon: "✦" },
    { name: "On the Job Training (OJT)", by: "KELTRON, Calicut", when: "2023", icon: "⚙" },
    { name: "Office Applications and Advanced Excel", by: "Add-on course", when: "2025", icon: "✶" },
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

/* =====================================================================
   REAL 3D VISION ENGINE (Three.js WebGL Realm)
   ===================================================================== */
const Real3DWorld = {
  initialized: false,
  scene: null,
  camera: null,
  renderer: null,
  starfield: null,
  nebulaCloud: null,
  etherMotes: null,
  moonGroup: null,
  comet: null,
  cometSpeed: 0,
  realms: [],
  activeRealmIndex: 0,
  scrollProgress: 0,
  targetScroll: 0,
  currentScreen: "title",
  isOrbitMode: false,
  orbitAngles: { theta: 0, phi: 0 },
  isDragging: false,
  dragStart: { x: 0, y: 0 },
  mouse: { x: 0, y: 0, targetX: 0, targetY: 0 },
  camTargetPos: null,
  camTargetLook: null,
  lights: {},
  curLightColor: null,

  createGlowTexture() {
    const canvas = document.createElement("canvas");
    canvas.width = 64; canvas.height = 64;
    const ctx = canvas.getContext("2d");
    const grad = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
    grad.addColorStop(0, "rgba(255, 255, 255, 1)");
    grad.addColorStop(0.25, "rgba(235, 245, 255, 0.85)");
    grad.addColorStop(0.6, "rgba(180, 215, 255, 0.2)");
    grad.addColorStop(1, "rgba(0, 0, 0, 0)");
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 64, 64);
    return new THREE.CanvasTexture(canvas);
  },

  createSculptedIsland(radius, height, segments, rockColor, mossColor) {
    const group = new THREE.Group();
    const geo = new THREE.CylinderGeometry(radius, radius * 0.15, height, segments, 4, false);
    const pos = geo.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i);
      const y = pos.getY(i);
      const z = pos.getZ(i);
      if (y < height * 0.35) {
        const noise = Math.sin(x * 0.5) * Math.cos(z * 0.5) * 1.8 + Math.sin(y * 0.8) * 1.3;
        pos.setX(i, x + noise);
        pos.setZ(i, z + noise);
      }
    }
    geo.computeVertexNormals();

    const rockMat = new THREE.MeshStandardMaterial({
      color: rockColor,
      roughness: 0.82,
      metalness: 0.15,
      flatShading: true,
    });
    const rockMesh = new THREE.Mesh(geo, rockMat);
    rockMesh.position.y = -height / 2;
    group.add(rockMesh);

    // Lush top plateau
    const topGeo = new THREE.CylinderGeometry(radius * 1.04, radius * 0.98, 1.8, segments, 1);
    const topMat = new THREE.MeshStandardMaterial({
      color: mossColor,
      roughness: 0.7,
      metalness: 0.05,
      flatShading: true,
    });
    const topMesh = new THREE.Mesh(topGeo, topMat);
    topMesh.position.y = 0.9;
    group.add(topMesh);

    // Glowing runic crystal strata band
    const strataGeo = new THREE.TorusGeometry(radius * 0.82, 0.35, 8, segments);
    const strataMat = new THREE.MeshStandardMaterial({
      color: mossColor,
      emissive: mossColor,
      emissiveIntensity: 0.5,
      metalness: 0.8,
      roughness: 0.2,
    });
    const strata = new THREE.Mesh(strataGeo, strataMat);
    strata.rotation.x = Math.PI / 2;
    strata.position.y = -height * 0.35;
    group.add(strata);

    return group;
  },

  init() {
    if (!window.THREE) {
      console.warn("Three.js not found. 3D WebGL disabled.");
      return;
    }
    const canvas = document.getElementById("webgl3d");
    if (!canvas) return;

    document.body.classList.add("has-webgl");

    // 1. Scene, Camera, Renderer
    this.curLightColor = new THREE.Color(0xe8a86b);
    this.scene = new THREE.Scene();
    this.scene.fog = new THREE.FogExp2(0x0c1224, 0.0035);

    const w = window.innerWidth;
    const h = window.innerHeight;
    this.camera = new THREE.PerspectiveCamera(52, w / h, 0.1, 1500);

    this.renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    this.renderer.setSize(w, h);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.15;

    this.camTargetPos = new THREE.Vector3(0, 10, 36);
    this.camTargetLook = new THREE.Vector3(0, 2, 0);
    this.camera.position.copy(this.camTargetPos);
    this.camera.lookAt(this.camTargetLook);

    // 2. Lighting
    this.initLights();

    // 3. Cosmic Environment (Multi-layer particles + Moon + Comets)
    this.initCosmos();

    // 4. The 7 3D Sculpted Realms
    this.initRealms();

    // 5. Input Listeners (Mouse parallax, Resize, Orbit)
    this.initListeners();

    // 6. Animation Loop
    this.initialized = true;
    this.animate = this.animate.bind(this);
    requestAnimationFrame(this.animate);
  },

  initLights() {
    const ambient = new THREE.AmbientLight(0x1a233a, 1.4);
    this.scene.add(ambient);

    const hemi = new THREE.HemisphereLight(0x6b5ea8, 0x0f1526, 1.2);
    this.scene.add(hemi);

    const dirLight = new THREE.DirectionalLight(0xdde5f2, 1.8);
    dirLight.position.set(60, 100, 60);
    this.scene.add(dirLight);

    const accent = new THREE.PointLight(0xd8b477, 3.5, 65);
    accent.position.set(0, 15, 20);
    this.scene.add(accent);

    const secondary = new THREE.PointLight(0x7965a8, 2.5, 55);
    secondary.position.set(-20, -10, 15);
    this.scene.add(secondary);

    this.lights = { ambient, hemi, dirLight, accent, secondary };
  },

  initCosmos() {
    const glowTex = this.createGlowTexture();

    // 1. Distant sharp stars (2400)
    const starCount = 2400;
    const starGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(starCount * 3);
    const colors = new Float32Array(starCount * 3);

    const palette = [
      new THREE.Color(0xd8b477), // Gold
      new THREE.Color(0x8ee3f0), // Cyan
      new THREE.Color(0xb9a4f0), // Violet
      new THREE.Color(0xf4f1ea), // White
    ];

    for (let i = 0; i < starCount; i++) {
      const radius = 280 + Math.random() * 450;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);

      const col = palette[Math.floor(Math.random() * palette.length)];
      colors[i * 3] = col.r;
      colors[i * 3 + 1] = col.g;
      colors[i * 3 + 2] = col.b;
    }

    starGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    starGeo.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const starMat = new THREE.PointsMaterial({
      size: 2.2,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
    });
    this.starfield = new THREE.Points(starGeo, starMat);
    this.scene.add(this.starfield);

    // 2. Volumetric Cosmic Nebula gas clouds (600 soft glow particles)
    const nebCount = 600;
    const nebGeo = new THREE.BufferGeometry();
    const nebPos = new Float32Array(nebCount * 3);
    const nebCol = new Float32Array(nebCount * 3);
    const nebPalette = [new THREE.Color(0x7965a8), new THREE.Color(0x253b63), new THREE.Color(0x7fd1a3), new THREE.Color(0xd8b477)];

    for (let i = 0; i < nebCount; i++) {
      const r = 120 + Math.random() * 300;
      const t = Math.random() * Math.PI * 2;
      const p = Math.acos(2 * Math.random() - 1);
      nebPos[i * 3] = r * Math.sin(p) * Math.cos(t);
      nebPos[i * 3 + 1] = r * Math.sin(p) * Math.sin(t);
      nebPos[i * 3 + 2] = r * Math.cos(p);

      const c = nebPalette[Math.floor(Math.random() * nebPalette.length)];
      nebCol[i * 3] = c.r;
      nebCol[i * 3 + 1] = c.g;
      nebCol[i * 3 + 2] = c.b;
    }
    nebGeo.setAttribute("position", new THREE.BufferAttribute(nebPos, 3));
    nebGeo.setAttribute("color", new THREE.BufferAttribute(nebCol, 3));

    const nebMat = new THREE.PointsMaterial({
      size: 16,
      map: glowTex,
      vertexColors: true,
      transparent: true,
      opacity: 0.45,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    this.nebulaCloud = new THREE.Points(nebGeo, nebMat);
    this.scene.add(this.nebulaCloud);

    // 3. Foreground Ether Motes (75 luminous drifting orbs)
    const moteCount = 75;
    const moteGeo = new THREE.BufferGeometry();
    const motePos = new Float32Array(moteCount * 3);
    for (let i = 0; i < moteCount; i++) {
      motePos[i * 3] = (Math.random() - 0.5) * 80;
      motePos[i * 3 + 1] = (Math.random() - 0.5) * 160;
      motePos[i * 3 + 2] = (Math.random() - 0.5) * 60;
    }
    moteGeo.setAttribute("position", new THREE.BufferAttribute(motePos, 3));
    const moteMat = new THREE.PointsMaterial({
      size: 6,
      map: glowTex,
      color: 0xd8b477,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    this.etherMotes = new THREE.Points(moteGeo, moteMat);
    this.scene.add(this.etherMotes);

    // 4. 3D Celestial Moon with Halo
    const moonGroup = new THREE.Group();
    moonGroup.position.set(160, 110, -290);
    const moonGeo = new THREE.IcosahedronGeometry(38, 2);
    const moonMat = new THREE.MeshStandardMaterial({
      color: 0xf4f1ea,
      emissive: 0x1b2344,
      roughness: 0.8,
      metalness: 0.1,
      flatShading: true,
    });
    moonGroup.add(new THREE.Mesh(moonGeo, moonMat));

    const haloGeo = new THREE.IcosahedronGeometry(44, 2);
    const haloMat = new THREE.MeshBasicMaterial({
      color: 0xb9b3e6,
      transparent: true,
      opacity: 0.14,
      side: THREE.BackSide,
    });
    moonGroup.add(new THREE.Mesh(haloGeo, haloMat));
    this.moonGroup = moonGroup;
    this.scene.add(moonGroup);

    // 5. Shooting Comet / Meteor
    const cometGeo = new THREE.CylinderGeometry(0.1, 0.9, 14, 8);
    const cometMat = new THREE.MeshBasicMaterial({ color: 0x8ee3f0, transparent: true, opacity: 0.8 });
    this.comet = new THREE.Mesh(cometGeo, cometMat);
    this.comet.position.set(200, 200, -200);
    this.comet.rotation.z = Math.PI / 4;
    this.scene.add(this.comet);
  },

  initRealms() {
    this.waypointData = [
      // 0: Adventurer's Home
      { id: "home", pos: new THREE.Vector3(0, 0, 0), cam: new THREE.Vector3(0, 10, 36), look: new THREE.Vector3(0, 2, 0), color: 0xe8a86b },
      // 1: Forest of Skills
      { id: "skills", pos: new THREE.Vector3(-24, -36, -18), cam: new THREE.Vector3(-14, -28, 20), look: new THREE.Vector3(-24, -34, -18), color: 0x7fd1a3 },
      // 2: Project Kingdom (BrainLock)
      { id: "project", pos: new THREE.Vector3(26, -74, -24), cam: new THREE.Vector3(16, -66, 14), look: new THREE.Vector3(26, -72, -24), color: 0xd8b477 },
      // 3: Experience City (Cognilearn)
      { id: "exp", pos: new THREE.Vector3(-22, -114, -16), cam: new THREE.Vector3(-12, -106, 18), look: new THREE.Vector3(-22, -112, -16), color: 0x6fb7ff },
      // 4: Academy of Wisdom (Education)
      { id: "edu", pos: new THREE.Vector3(20, -154, -20), cam: new THREE.Vector3(10, -146, 16), look: new THREE.Vector3(20, -152, -20), color: 0xb9a4f0 },
      // 5: Hall of Achievements (Certs)
      { id: "hall", pos: new THREE.Vector3(-18, -194, -12), cam: new THREE.Vector3(-8, -186, 20), look: new THREE.Vector3(-18, -192, -12), color: 0xf2c66d },
      // 6: Contact Portal
      { id: "portal", pos: new THREE.Vector3(0, -234, 0), cam: new THREE.Vector3(0, -224, 34), look: new THREE.Vector3(0, -232, 0), color: 0x8ee3f0 },
    ];

    // Helper crystal material
    const crystalMat = (colorHex) => new THREE.MeshPhysicalMaterial({
      color: colorHex,
      emissive: colorHex,
      emissiveIntensity: 0.35,
      roughness: 0.12,
      metalness: 0.2,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
      transmission: 0.55,
      ior: 1.5,
      flatShading: true,
    });

    // --- Realm 0: Home ---
    const g0 = new THREE.Group();
    g0.position.copy(this.waypointData[0].pos);
    const island0 = this.createSculptedIsland(15, 12, 8, 0x1a2444, 0x22363e);
    g0.add(island0);

    const runeStone = new THREE.Mesh(new THREE.OctahedronGeometry(4.5, 0), crystalMat(0xd8b477));
    runeStone.position.y = 6;
    g0.add(runeStone);

    const ring0 = new THREE.Mesh(
      new THREE.TorusGeometry(8.2, 0.28, 14, 48),
      new THREE.MeshStandardMaterial({ color: 0xe8a86b, emissive: 0x332008, metalness: 0.95, roughness: 0.1 })
    );
    ring0.position.y = 6;
    ring0.rotation.x = Math.PI / 2.3;
    g0.add(ring0);

    g0.userData = { update: (t) => {
      runeStone.rotation.y = t * 0.6;
      runeStone.position.y = 6 + Math.sin(t * 1.5) * 0.8;
      ring0.rotation.z = t * 0.5;
    }};
    this.scene.add(g0);
    this.realms.push(g0);

    // --- Realm 1: Forest of Skills ---
    const g1 = new THREE.Group();
    g1.position.copy(this.waypointData[1].pos);
    const island1 = this.createSculptedIsland(16, 13, 8, 0x162540, 0x1b3c33);
    g1.add(island1);

    const polyColors = [0x7fd1a3, 0xd8b477, 0xb9a4f0, 0x6fb7ff, 0xf2c66d];
    const polyGeos = [
      new THREE.IcosahedronGeometry(2.4, 0),
      new THREE.OctahedronGeometry(2.2, 0),
      new THREE.DodecahedronGeometry(2.3, 0),
      new THREE.BoxGeometry(2.8, 2.8, 2.8),
      new THREE.TetrahedronGeometry(2.5, 0),
    ];
    const skillOrbs = [];
    for (let i = 0; i < 5; i++) {
      const angle = (i / 5) * Math.PI * 2;
      const orbMesh = new THREE.Mesh(polyGeos[i], crystalMat(polyColors[i]));
      const wire = new THREE.LineSegments(
        new THREE.WireframeGeometry(polyGeos[i]),
        new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.45 })
      );
      orbMesh.add(wire);
      g1.add(orbMesh);
      skillOrbs.push({ mesh: orbMesh, angle, radius: 9.5, speed: 0.4 + i * 0.1, yOffset: 4 + (i % 3) * 2 });
    }
    for (let i = 0; i < 3; i++) {
      const spire = new THREE.Mesh(new THREE.ConeGeometry(1.6, 11, 5), new THREE.MeshStandardMaterial({ color: 0x2e6653, flatShading: true }));
      spire.position.set(Math.cos(i * 2.1) * 6, 5, Math.sin(i * 2.1) * 6);
      g1.add(spire);
    }
    g1.userData = { update: (t) => {
      skillOrbs.forEach((so, idx) => {
        const curA = so.angle + t * so.speed;
        so.mesh.position.set(Math.cos(curA) * so.radius, so.yOffset + Math.sin(t * 2 + idx) * 0.9, Math.sin(curA) * so.radius);
        so.mesh.rotation.x = t * 0.8 + idx;
        so.mesh.rotation.y = t * 1.1 + idx;
      });
    }};
    this.scene.add(g1);
    this.realms.push(g1);

    // --- Realm 2: Project Kingdom (BrainLock) ---
    const g2 = new THREE.Group();
    g2.position.copy(this.waypointData[2].pos);
    const island2 = this.createSculptedIsland(17, 12, 8, 0x1f274a, 0x292850);
    g2.add(island2);

    const citadelCore = new THREE.Mesh(new THREE.ConeGeometry(9, 14, 4), crystalMat(0xd8b477));
    citadelCore.position.y = 6;
    g2.add(citadelCore);

    const gyro1 = new THREE.Mesh(new THREE.TorusGeometry(12, 0.35, 16, 48), new THREE.MeshStandardMaterial({ color: 0xd8b477, metalness: 0.95 }));
    gyro1.position.y = 6;
    g2.add(gyro1);

    const gyro2 = new THREE.Mesh(new THREE.TorusGeometry(15, 0.25, 16, 48), new THREE.MeshStandardMaterial({ color: 0x7965a8, metalness: 0.9 }));
    gyro2.position.y = 6;
    g2.add(gyro2);

    const beamGeo = new THREE.CylinderGeometry(1.6, 5, 55, 16, 1, true);
    const beamMat = new THREE.MeshBasicMaterial({ color: 0xd8b477, transparent: true, opacity: 0.28, side: THREE.DoubleSide });
    const beam = new THREE.Mesh(beamGeo, beamMat);
    beam.position.y = 28;
    g2.add(beam);

    g2.userData = { update: (t) => {
      gyro1.rotation.x = t * 0.8;
      gyro1.rotation.y = t * 0.5;
      gyro2.rotation.y = -t * 0.6;
      gyro2.rotation.z = t * 0.4;
      citadelCore.rotation.y = t * 0.3;
    }};
    this.scene.add(g2);
    this.realms.push(g2);

    // --- Realm 3: Experience City (Cognilearn) ---
    const g3 = new THREE.Group();
    g3.position.copy(this.waypointData[3].pos);
    const island3 = this.createSculptedIsland(18, 12, 8, 0x14203d, 0x182c4f);
    g3.add(island3);

    for (let i = 0; i < 7; i++) {
      const h = 7 + (i % 4) * 4;
      const tower = new THREE.Mesh(
        new THREE.BoxGeometry(3.5, h, 3.5),
        new THREE.MeshStandardMaterial({ color: 0x162c52, roughness: 0.4, metalness: 0.75, flatShading: true })
      );
      const angle = (i / 7) * Math.PI * 2;
      const r = 4.5 + (i % 2) * 3;
      tower.position.set(Math.cos(angle) * r, h / 2 + 1, Math.sin(angle) * r);
      g3.add(tower);
    }
    const sat = new THREE.Mesh(new THREE.OctahedronGeometry(1.8, 0), crystalMat(0x6fb7ff));
    g3.add(sat);

    g3.userData = { update: (t) => {
      sat.position.set(Math.cos(t * 1.4) * 14, 11 + Math.sin(t * 2) * 3, Math.sin(t * 1.4) * 14);
      sat.rotation.y = t * 2;
    }};
    this.scene.add(g3);
    this.realms.push(g3);

    // --- Realm 4: Academy of Wisdom (Astrolabe Observatory) ---
    const g4 = new THREE.Group();
    g4.position.copy(this.waypointData[4].pos);
    const island4 = this.createSculptedIsland(17, 12, 8, 0x1c1e40, 0x27224f);
    g4.add(island4);

    const astro1 = new THREE.Mesh(new THREE.TorusGeometry(10.5, 0.35, 16, 50), new THREE.MeshStandardMaterial({ color: 0xd8b477, metalness: 0.95 }));
    const astro2 = new THREE.Mesh(new THREE.TorusGeometry(8.5, 0.3, 16, 50), new THREE.MeshStandardMaterial({ color: 0xb9a4f0, metalness: 0.9 }));
    const astro3 = new THREE.Mesh(new THREE.TorusGeometry(6.5, 0.25, 16, 50), new THREE.MeshStandardMaterial({ color: 0xe8a86b, metalness: 0.95 }));
    const orb = new THREE.Mesh(new THREE.SphereGeometry(3.4, 24, 24), crystalMat(0xb9a4f0));
    [astro1, astro2, astro3, orb].forEach((m) => { m.position.y = 6; g4.add(m); });

    g4.userData = { update: (t) => {
      astro1.rotation.x = t * 0.7;
      astro2.rotation.y = t * 0.9;
      astro3.rotation.z = t * 1.1;
      orb.scale.setScalar(1 + Math.sin(t * 2) * 0.08);
    }};
    this.scene.add(g4);
    this.realms.push(g4);

    // --- Realm 5: Hall of Achievements ---
    const g5 = new THREE.Group();
    g5.position.copy(this.waypointData[5].pos);
    const island5 = this.createSculptedIsland(16, 12, 8, 0x221f3a, 0x2f2838);
    g5.add(island5);

    const starJewel = new THREE.Mesh(new THREE.OctahedronGeometry(5, 0), crystalMat(0xf2c66d));
    starJewel.position.y = 6;
    g5.add(starJewel);

    const crownRing = new THREE.Mesh(
      new THREE.TorusGeometry(9.2, 0.32, 14, 48),
      new THREE.MeshStandardMaterial({ color: 0xd8b477, metalness: 0.95 })
    );
    crownRing.position.y = 6;
    crownRing.rotation.x = Math.PI / 2.2;
    g5.add(crownRing);

    g5.userData = { update: (t) => {
      starJewel.rotation.y = t * 0.8;
      starJewel.rotation.x = t * 0.4;
      starJewel.position.y = 6 + Math.sin(t * 1.8) * 0.9;
      crownRing.rotation.z = -t * 0.6;
    }};
    this.scene.add(g5);
    this.realms.push(g5);

    // --- Realm 6: Contact Portal (Stargate) ---
    const g6 = new THREE.Group();
    g6.position.copy(this.waypointData[6].pos);
    const island6 = this.createSculptedIsland(18, 12, 8, 0x17243c, 0x163445);
    g6.add(island6);

    const gateOuter = new THREE.Mesh(
      new THREE.TorusGeometry(16, 1.4, 18, 64),
      new THREE.MeshStandardMaterial({ color: 0x1d2748, roughness: 0.6, metalness: 0.65, flatShading: true })
    );
    gateOuter.position.y = 9;
    g6.add(gateOuter);

    const gateEnergy = new THREE.Mesh(
      new THREE.TorusGeometry(13.8, 0.48, 16, 64),
      new THREE.MeshStandardMaterial({ color: 0x8ee3f0, emissive: 0x8ee3f0, emissiveIntensity: 0.85, metalness: 0.95 })
    );
    gateEnergy.position.y = 9;
    g6.add(gateEnergy);

    const pCount = 750;
    const pGeo = new THREE.BufferGeometry();
    const pPos = new Float32Array(pCount * 3);
    const pCol = new Float32Array(pCount * 3);
    for (let i = 0; i < pCount; i++) {
      const r = 1 + Math.random() * 12.5;
      const angle = Math.random() * Math.PI * 2;
      pPos[i * 3] = Math.cos(angle) * r;
      pPos[i * 3 + 1] = Math.sin(angle) * r + 9;
      pPos[i * 3 + 2] = (Math.random() - 0.5) * 3.5;
      pCol[i * 3] = 0.55;
      pCol[i * 3 + 1] = 0.88;
      pCol[i * 3 + 2] = 0.94;
    }
    pGeo.setAttribute("position", new THREE.BufferAttribute(pPos, 3));
    pGeo.setAttribute("color", new THREE.BufferAttribute(pCol, 3));
    const vortexMat = new THREE.PointsMaterial({ size: 2.2, vertexColors: true, transparent: true, opacity: 0.9, blending: THREE.AdditiveBlending });
    const vortex = new THREE.Points(pGeo, vortexMat);
    g6.add(vortex);

    g6.userData = { update: (t) => {
      gateEnergy.rotation.z = -t * 1.5;
      vortex.rotation.z = t * 2.2;
    }};
    this.scene.add(g6);
    this.realms.push(g6);
  },

  initListeners() {
    window.addEventListener("resize", () => {
      if (!this.renderer || !this.camera) return;
      const w = window.innerWidth;
      const h = window.innerHeight;
      this.camera.aspect = w / h;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(w, h);
    });

    window.addEventListener("mousemove", (e) => {
      this.mouse.targetX = (e.clientX / window.innerWidth - 0.5) * 2;
      this.mouse.targetY = (e.clientY / window.innerHeight - 0.5) * 2;

      if (this.isOrbitMode && this.isDragging) {
        const dx = e.clientX - this.dragStart.x;
        const dy = e.clientY - this.dragStart.y;
        this.dragStart.x = e.clientX;
        this.dragStart.y = e.clientY;
        this.orbitAngles.theta -= dx * 0.008;
        this.orbitAngles.phi = Math.max(-1.2, Math.min(1.2, this.orbitAngles.phi + dy * 0.008));
      }
    });

    const canvas = document.getElementById("webgl3d");
    if (canvas) {
      canvas.addEventListener("mousedown", (e) => {
        if (!this.isOrbitMode) return;
        this.isDragging = true;
        this.dragStart.x = e.clientX;
        this.dragStart.y = e.clientY;
      });
    }
    window.addEventListener("mouseup", () => { this.isDragging = false; });
  },

  toggleOrbitMode() {
    this.isOrbitMode = !this.isOrbitMode;
    document.body.classList.toggle("orbit-mode", this.isOrbitMode);
    const hudBtn = document.getElementById("cam3dBtnHud");
    const navBtn = document.getElementById("cam3dNavBtn");
    const titleBtn = document.getElementById("cam3dBtnTitle");
    const text = this.isOrbitMode ? "🌐 3D Cam: Active" : "🌐 3D Cam: Auto";
    if (hudBtn) { hudBtn.textContent = text; hudBtn.classList.toggle("active", this.isOrbitMode); }
    if (navBtn) { navBtn.textContent = text; navBtn.classList.toggle("active", this.isOrbitMode); }
    if (titleBtn) { titleBtn.textContent = this.isOrbitMode ? "🌐 Orbiting" : "🌐 3D Free Look"; }
    toast(this.isOrbitMode ? "✦ 3D Free-Look: Drag mouse on screen to orbit in 360°!" : "✦ Cinematic Camera restored.");
  },

  setScroll(p) {
    this.targetScroll = clamp(p);
  },

  setActivePlace(id) {
    const idx = this.waypointData.findIndex((w) => w.id === id);
    if (idx !== -1) {
      this.activeRealmIndex = idx;
    }
  },

  setScreen(id) {
    this.currentScreen = id;
    if (id === "title") {
      this.activeRealmIndex = 0;
      this.targetScroll = 0;
    } else if (id === "finale") {
      this.activeRealmIndex = 6;
      this.targetScroll = 1;
    }
  },

  animate() {
    requestAnimationFrame(this.animate);
    if (!this.renderer || !this.scene || !this.camera) return;

    const t = performance.now() * 0.001;

    if (this.starfield) this.starfield.rotation.y = t * 0.015;
    if (this.nebulaCloud) this.nebulaCloud.rotation.y = -t * 0.008;
    if (this.etherMotes) this.etherMotes.rotation.y = t * 0.02;
    if (this.moonGroup) this.moonGroup.rotation.y = t * 0.02;

    // Shooting comet streak
    if (this.comet) {
      this.comet.position.x -= 2.8;
      this.comet.position.y -= 2.2;
      this.comet.position.z += 1.4;
      if (this.comet.position.x < -300) {
        this.comet.position.set(300 + Math.random() * 100, 240 + Math.random() * 80, -250);
      }
    }

    this.realms.forEach((r) => {
      if (r.userData && r.userData.update) r.userData.update(t);
    });

    this.scrollProgress += (this.targetScroll - this.scrollProgress) * 0.06;
    this.mouse.x += (this.mouse.targetX - this.mouse.x) * 0.05;
    this.mouse.y += (this.mouse.targetY - this.mouse.y) * 0.05;

    const numSegments = this.waypointData.length - 1;
    const globalFrac = this.scrollProgress * numSegments;
    const segIdx = Math.min(numSegments - 1, Math.floor(globalFrac));
    const segFrac = globalFrac - segIdx;

    const wpA = this.waypointData[segIdx];
    const wpB = this.waypointData[segIdx + 1];

    const curCam = new THREE.Vector3().lerpVectors(wpA.cam, wpB.cam, segFrac);
    const curLook = new THREE.Vector3().lerpVectors(wpA.look, wpB.look, segFrac);

    // Dynamic light color transition
    const targetCol = new THREE.Color(wpA.color).lerp(new THREE.Color(wpB.color), segFrac);
    this.curLightColor.lerp(targetCol, 0.05);
    if (this.lights.accent) {
      this.lights.accent.color.copy(this.curLightColor);
      this.lights.accent.position.set(curCam.x, curCam.y + 4, curCam.z - 8);
    }

    if (this.currentScreen === "title") {
      const titleCam = new THREE.Vector3(
        Math.sin(t * 0.25) * 12,
        9 + Math.sin(t * 0.4) * 2,
        34 + Math.cos(t * 0.25) * 6
      );
      this.camTargetPos.lerp(titleCam, 0.05);
      this.camTargetLook.lerp(wpA.look, 0.05);
    } else if (this.isOrbitMode) {
      const activeWP = this.waypointData[this.activeRealmIndex];
      const radius = 35;
      const ox = activeWP.pos.x + radius * Math.cos(this.orbitAngles.phi) * Math.sin(this.orbitAngles.theta);
      const oy = activeWP.pos.y + radius * Math.sin(this.orbitAngles.phi) + 6;
      const oz = activeWP.pos.z + radius * Math.cos(this.orbitAngles.phi) * Math.cos(this.orbitAngles.theta);
      this.camTargetPos.set(ox, oy, oz);
      this.camTargetLook.copy(activeWP.pos);
    } else {
      const parallaxX = this.mouse.x * 5;
      const parallaxY = -this.mouse.y * 3.5;
      this.camTargetPos.copy(curCam).add(new THREE.Vector3(parallaxX, parallaxY, 0));
      this.camTargetLook.copy(curLook);
    }

    this.camera.position.lerp(this.camTargetPos, 0.06);
    this.camera.lookAt(this.camTargetLook);

    this.renderer.render(this.scene, this.camera);
  },
};

/* =====================================================================
   REAL 3D CARD TILT & GLARE SYSTEM
   ===================================================================== */
function init3DTilt() {
  const cards = document.querySelectorAll(
    ".panel, .ability, .cert, .link-card, .mock, .portrait, .finale-card, .dialog"
  );
  cards.forEach((card) => {
    card.classList.add("has-tilt", "has-glare");
    if (!card.querySelector(".card-glare")) {
      const glare = document.createElement("div");
      glare.className = "card-glare";
      card.appendChild(glare);
    }
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const px = (x / rect.width - 0.5) * 2;
      const py = (y / rect.height - 0.5) * 2;
      const rotX = -py * 12;
      const rotY = px * 14;
      card.style.transform = `perspective(1000px) rotateX(${rotX.toFixed(2)}deg) rotateY(${rotY.toFixed(2)}deg) translateZ(14px)`;
      card.style.setProperty("--gx", `${x.toFixed(0)}px`);
      card.style.setProperty("--gy", `${y.toFixed(0)}px`);
    });
    card.addEventListener("mouseleave", () => {
      card.style.transform = "";
    });
  });
}

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
  if (window.Real3DWorld && Real3DWorld.initialized) Real3DWorld.setScreen(id);
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
    return `<div class="about">
      <div class="portrait-wrapper" style="display:grid;gap:12px">
        <div class="portrait">${pic}</div>
        <div style="text-align:center;background:rgba(16,22,41,.6);border:1px solid rgba(216,180,119,.25);border-radius:10px;padding:8px 10px">
          <span style="display:inline-flex;align-items:center;gap:6px;font-size:.76rem;color:#7fd1a3;font-weight:700"><i class="pulse-dot"></i> Open for Roles</span>
          <p style="font-size:.78rem;color:var(--soft);margin-top:4px">📍 Calicut, Kerala, India</p>
        </div>
      </div>
      <div class="panel">
        <div class="facts">${a.facts.map((f) => `<span class="chip">${f}</span>`).join("")}</div>
        <h3 style="font-size:1.18rem;color:var(--gold);margin-bottom:8px">Software Developer & BCA Graduate</h3>
        <p style="font-size:.95rem;line-height:1.6">${a.summary}</p>
        <p class="muted" style="margin-top:8px;font-size:.92rem">${a.personality}</p>
        
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:10px;margin:16px 0">
          <div style="background:rgba(16,22,41,.6);border:1px solid rgba(216,180,119,.25);border-radius:8px;padding:10px">
            <b style="color:var(--gold);font-size:.82rem;display:block">⚡ Full-Stack & Python</b>
            <span style="font-size:.78rem;color:var(--soft)">Django, React.js, SQL & REST APIs</span>
          </div>
          <div style="background:rgba(16,22,41,.6);border:1px solid rgba(216,180,119,.25);border-radius:8px;padding:10px">
            <b style="color:var(--gold);font-size:.82rem;display:block">🧠 AI & Proctoring</b>
            <span style="font-size:.78rem;color:var(--soft)">Computer Vision & Face Tracking</span>
          </div>
          <div style="background:rgba(16,22,41,.6);border:1px solid rgba(216,180,119,.25);border-radius:8px;padding:10px">
            <b style="color:var(--gold);font-size:.82rem;display:block">📱 Cross-Platform</b>
            <span style="font-size:.78rem;color:var(--soft)">Flutter & Modern Responsive UI</span>
          </div>
        </div>

        <h3 style="margin-top:14px;font-size:.92rem">Career Objective</h3>
        <p style="font-size:.92rem">${a.objective}</p>
        
        <div style="display:flex;flex-wrap:wrap;gap:10px;margin-top:18px">
          <a class="btn btn-gold" href="${DATA.resume}" download="Rasha_Fathima_Resume.pdf">⬇ Download Resume (PDF)</a>
          <a class="btn btn-ghost" href="${DATA.linkedin}" target="_blank" rel="noreferrer">💼 LinkedIn Profile</a>
          <button class="btn btn-ghost copy-btn-email" type="button" data-email="${DATA.email}">✉ Copy Email</button>
        </div>
      </div>
    </div>`;
  },

  skills: () => {
    return `<div class="skills-module">
      <div class="skill-filters">
        <button class="skill-tab active" type="button" data-filter="all">All Skills</button>
        <button class="skill-tab" type="button" data-filter="lang">Languages</button>
        <button class="skill-tab" type="button" data-filter="web">Web & UI</button>
        <button class="skill-tab" type="button" data-filter="frame">Frameworks</button>
        <button class="skill-tab" type="button" data-filter="db">Databases</button>
        <button class="skill-tab" type="button" data-filter="tools">Tools</button>
      </div>
      <div class="abilities">
        ${DATA.skillsList.map((s) => `
          <article class="ability skill-item" data-cat="${s.cat}" tabindex="0">
            <div class="skill-meta">
              <span><b>${s.icon}</b> ${s.name}</span>
              <span style="color:var(--ac)">${s.level}%</span>
            </div>
            <div class="skill-track"><i class="skill-fill" style="transform:scaleX(${s.level / 100})"></i></div>
          </article>
        `).join("")}
      </div>
    </div>`;
  },

  project: () => {
    const p = DATA.project;
    return `<div class="project">
      <div class="mock" role="img" aria-label="Interactive preview of ${p.name}">
        <div class="mock-top">
          <i></i><i></i><i></i><em>BRAINLOCK · AI Powered LMS & Proctoring Platform</em>
        </div>
        <div class="mock-tab-bar">
          <button class="mock-tab active" type="button" data-tab="proctor">AI Proctoring</button>
          <button class="mock-tab" type="button" data-tab="analytics">Analytics</button>
          <button class="mock-tab" type="button" data-tab="learning">Study Modules</button>
        </div>
        <div class="mock-body" style="grid-template-columns:1fr;min-height:230px;padding:14px;background:#0d1430">
          <div class="mock-view view-proctor">
            <div class="face-scan-box">
              <div class="face-scan-hud">
                <span>● CAM_01: LIVE FEED</span>
                <span>STATUS: INTEGRITY VERIFIED</span>
                <span style="color:#8ee3f0">AI CONFIDENCE: 98.4%</span>
              </div>
              <div class="face-frame" style="width:72px;height:72px;margin-top:14px"></div>
              <div class="scan-laser"></div>
            </div>
            <p style="font-size:.74rem;color:var(--soft);margin-top:10px;text-align:center">Automated Computer Vision Proctoring: Real-time Face Detection & Activity Verification</p>
          </div>
          <div class="mock-view view-analytics" style="display:none">
            <div style="font-size:.76rem;color:var(--mist);margin-bottom:8px">Performance & Topic Mastery Matrix</div>
            <div class="bars" style="height:90px">${[45, 75, 60, 90, 85, 98].map((h, i) => `<i style="height:${h}%;animation-delay:${0.1 + i * 0.08}s"></i>`).join("")}</div>
            <div style="display:flex;justify-content:space-between;font-size:.7rem;color:var(--soft);margin-top:6px">
              <span>Python</span><span>Data Struct</span><span>Algorithms</span><span>Web Dev</span><span>DB Systems</span><span>Final Score</span>
            </div>
          </div>
          <div class="mock-view view-learning" style="display:none">
            <div style="display:grid;gap:8px">
              <div class="mock-card"><b>Interactive Video Lectures</b>High-definition streaming & automated bookmarking</div>
              <div class="mock-card"><b>Assessment Engine</b>Automated grading and parent-teacher feedback loops</div>
            </div>
          </div>
        </div>
      </div>

      <div class="panel">
        <span class="chip" style="margin-bottom:8px">Flagship Platform</span>
        <h3 style="font-size:1.4rem;color:var(--gold);margin:4px 0">${p.name}</h3>
        <p style="font-size:.95rem;line-height:1.6">${p.summary}</p>
        
        <h4 style="font-size:.82rem;color:var(--gold);letter-spacing:.1em;text-transform:uppercase;margin:14px 0 8px">Core Architecture & Concepts</h4>
        <div class="tags" style="margin-bottom:16px">${p.features.map((f) => `<span class="chip">${f}</span>`).join("")}</div>
        
        <div style="display:flex;flex-wrap:wrap;gap:6px">
          <span class="chip" style="border-color:#7fd1a3;color:#7fd1a3">Python</span>
          <span class="chip" style="border-color:#7fd1a3;color:#7fd1a3">AI / Computer Vision</span>
          <span class="chip" style="border-color:#7fd1a3;color:#7fd1a3">React.js</span>
          <span class="chip" style="border-color:#7fd1a3;color:#7fd1a3">Django</span>
          <span class="chip" style="border-color:#7fd1a3;color:#7fd1a3">PostgreSQL</span>
        </div>
      </div>
    </div>
    <div class="future" style="margin-top:20px">
      <div class="panel">
        <span aria-hidden="true">🚀</span>
        <h3 style="margin-top:8px">Upcoming Project: E-Commerce REST API</h3>
        <p class="muted">Microservice architecture with Django, PostgreSQL, JWT Authentication & Payment Gateway integration.</p>
      </div>
      <div class="panel">
        <span aria-hidden="true">📱</span>
        <h3 style="margin-top:8px">Upcoming Project: Flutter Mobile Suite</h3>
        <p class="muted">Cross-platform mobile client for student productivity and offline-first notes synchronization.</p>
      </div>
    </div>`;
  },

  exp: () => `<ol class="timeline">${DATA.experience.map((e) => `<li class="panel">
    <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px">
      <h3 style="font-size:1.2rem;color:var(--mist);margin:0">${e.org}</h3>
      <span class="chip" style="color:var(--ac);border-color:var(--ac)">Active Role</span>
    </div>
    <p class="when" style="margin:4px 0 10px">${e.place}</p>
    <ul class="points" style="line-height:1.7;color:var(--soft)">
      <li>Gaining practical industry experience building modern web architectures and user-facing features.</li>
      <li>Developed modular application components, integrated RESTful APIs, and resolved technical defects.</li>
      <li>Collaborated on version-controlled sprint deliveries, code reviews, and database optimization workflows.</li>
    </ul>
    <div style="display:flex;flex-wrap:wrap;gap:6px;margin-top:14px">
      <span class="chip">Python</span><span class="chip">JavaScript</span><span class="chip">Django</span><span class="chip">PostgreSQL</span><span class="chip">Git</span>
    </div>
  </li>`).join("")}</ol>`,

  edu: () => `<ol class="timeline">${DATA.education.map((e) => `<li class="panel">
    <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px">
      <p class="when" style="margin:0">${e.when}</p>
      <span class="chip" style="font-size:.78rem;color:var(--gold)">Verified Credential</span>
    </div>
    <h3 style="font-size:1.15rem;color:var(--mist);margin:6px 0 4px">${e.title}</h3>
    <p class="muted" style="font-size:.92rem">${e.where}</p>
  </li>`).join("")}</ol>`,

  hall: () => `<div class="badges">${DATA.certs.map((c) => `<article class="cert">
    <div class="medal" aria-hidden="true">${c.icon}</div>
    <h3 style="font-size:1.05rem;color:var(--mist);margin-bottom:6px">${c.name}</h3>
    <p class="muted" style="font-size:.88rem">${[c.by, c.when].filter(Boolean).join(" · ")}</p>
  </article>`).join("")}</div>`,

  portal: () => `<div class="contact-section">
    <div class="links">
      <div class="link-card" style="cursor:pointer" id="copyEmailCard">
        <i aria-hidden="true">✉</i>
        <div>
          <b>Email (Click to Copy)</b>
          <span style="color:var(--gold)">${DATA.email}</span>
        </div>
      </div>
      <div class="link-card" style="cursor:pointer" id="copyPhoneCard">
        <i aria-hidden="true">📞</i>
        <div>
          <b>Phone (Click to Copy)</b>
          <span style="color:var(--gold)">+91 97785 62503</span>
        </div>
      </div>
      <a class="link-card" href="${DATA.linkedin}" target="_blank" rel="noopener noreferrer">
        <i aria-hidden="true">in</i>
        <div>
          <b>LinkedIn</b>
          <span>rasha-fathima-v-46a78234a</span>
        </div>
      </a>
      <a class="link-card" href="${DATA.github}" target="_blank" rel="noopener noreferrer">
        <i aria-hidden="true">⌥</i>
        <div>
          <b>GitHub</b>
          <span>github.com/rashafathimav</span>
        </div>
      </a>
      <a class="link-card" href="${DATA.resume}" download="Rasha_Fathima_Resume.pdf">
        <i aria-hidden="true">⬇</i>
        <div>
          <b>Official Resume</b>
          <span>Download PDF Document</span>
        </div>
      </a>
    </div>

    <!-- Quick Message Composer -->
    <div class="panel" style="margin-top:24px">
      <h3 style="font-size:1.15rem;color:var(--gold)">Direct Recruiter & Hiring Dispatch</h3>
      <p style="font-size:.9rem;color:var(--soft);margin-bottom:14px">Interested in hiring or interviewing Rasha for software roles? Send a quick message directly.</p>
      <form id="contactForm" style="display:grid;gap:12px">
        <input type="text" id="contactSubject" placeholder="Subject / Job Title (e.g. Software Developer Opportunity)" required style="background:rgba(10,15,31,.7);border:1px solid rgba(216,180,119,.4);border-radius:8px;padding:10px 14px;color:#fff;font-family:var(--fb)">
        <textarea id="contactBody" rows="3" placeholder="Message details..." required style="background:rgba(10,15,31,.7);border:1px solid rgba(216,180,119,.4);border-radius:8px;padding:10px 14px;color:#fff;font-family:var(--fb)"></textarea>
        <button class="btn btn-gold" type="submit" style="justify-self:start">🚀 Send Direct Email</button>
      </form>
    </div>

    <div class="panel complete" style="margin-top:20px">
      <h3>The Final Milestone</h3>
      <p>You have explored every corner of this 3D realm.</p>
      <button class="btn btn-gold" type="button" id="completeBtn">✦ Complete the Quest</button>
    </div>
  </div>`,
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
  if (window.Real3DWorld && Real3DWorld.initialized) Real3DWorld.setActivePlace(id);
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
  if (window.Real3DWorld && Real3DWorld.initialized) Real3DWorld.setScroll(p);
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

/* ---------- Recruiter Modal Controls ---------- */
function openRecruiterModal() {
  const m = $("#recruiterModal");
  if (m) m.classList.add("active");
  Snd.play("click");
}
function closeRecruiterModal() {
  const m = $("#recruiterModal");
  if (m) m.classList.remove("active");
  Snd.play("click");
}

/* ---------- Wire up ---------- */
function init() {
  const subEl = $("#subtitle"); if (subEl) subEl.textContent = DATA.subtitle || subEl.textContent;
  const tagEl = $("#tagline"); if (tagEl) tagEl.textContent = DATA.tagline || tagEl.textContent;
  const welEl = $("#welcomeText"); if (welEl) welEl.textContent = DATA.welcome || welEl.textContent;
  ["#titleHero", "#welcomeHero", "#avatarFace"].forEach((s) => { const el = $(s); if (el) el.innerHTML = HERO; });
  buildScene(); buildJourney(); syncSound();

  if (window.Real3DWorld) Real3DWorld.init();
  init3DTilt();

  // 3D Cam controls
  ["#cam3dBtnTitle", "#cam3dBtnHud", "#cam3dNavBtn"].forEach((sel) => {
    const el = $(sel);
    if (el) el.addEventListener("click", () => Real3DWorld.toggleOrbitMode());
  });

  // Recruiter modal buttons
  ["#recruiterBtnNav", "#recruiterBtnHero"].forEach((sel) => {
    const el = $(sel);
    if (el) el.addEventListener("click", openRecruiterModal);
  });
  const closeRecruiter = $("#closeRecruiterBtn");
  if (closeRecruiter) closeRecruiter.addEventListener("click", closeRecruiterModal);
  const recruiterBackdrop = $("#recruiterBackdrop");
  if (recruiterBackdrop) recruiterBackdrop.addEventListener("click", closeRecruiterModal);

  // Top Nav brand & links
  const brandLogo = $("#brandLogo");
  if (brandLogo) brandLogo.addEventListener("click", () => show("title", "#startBtn"));
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      const targetId = link.dataset.jump;
      if (targetId) goJourney(targetId);
    });
  });

  // Interactive Skill Filter Tabs
  document.addEventListener("click", (e) => {
    const tab = e.target.closest(".skill-tab");
    if (tab) {
      document.querySelectorAll(".skill-tab").forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");
      const f = tab.dataset.filter;
      document.querySelectorAll(".skill-item").forEach((item) => {
        item.style.display = (f === "all" || item.dataset.cat === f) ? "grid" : "none";
      });
      Snd.play("click");
    }

    // Interactive Project Tabs
    const mockTab = e.target.closest(".mock-tab");
    if (mockTab) {
      document.querySelectorAll(".mock-tab").forEach((t) => t.classList.remove("active"));
      mockTab.classList.add("active");
      const tabName = mockTab.dataset.tab;
      document.querySelectorAll(".mock-view").forEach((v) => { v.style.display = "none"; });
      const activeView = $(`.view-${tabName}`);
      if (activeView) activeView.style.display = "block";
      Snd.play("click");
    }

    // Direct Copy Buttons
    if (e.target.closest("#copyEmailCard") || e.target.closest(".copy-btn-email")) {
      navigator.clipboard.writeText(DATA.email).then(() => {
        toast("✓ Email copied to clipboard: " + DATA.email);
        Snd.play("chime");
      }).catch(() => {
        window.location.href = `mailto:${DATA.email}`;
      });
    }
    if (e.target.closest("#copyPhoneCard")) {
      navigator.clipboard.writeText("+919778562503").then(() => {
        toast("✓ Phone number copied: +91 97785 62503");
        Snd.play("chime");
      });
    }
  });

  // Contact Form Dispatch
  document.addEventListener("submit", (e) => {
    if (e.target.id === "contactForm") {
      e.preventDefault();
      const sub = encodeURIComponent($("#contactSubject").value || "Software Developer Opportunity");
      const body = encodeURIComponent($("#contactBody").value || "");
      window.location.href = `mailto:${DATA.email}?subject=${sub}&body=${body}`;
      toast("🚀 Opening email client to send dispatch...");
    }
  });

  $("#startBtn").addEventListener("click", start);
  $("#soundBtn").addEventListener("click", () => Snd.toggle());
  const soundBtnNav = $("#soundBtnNav");
  if (soundBtnNav) soundBtnNav.addEventListener("click", () => Snd.toggle());
  $("#welcome").addEventListener("click", skipWelcome);
  $("#finMap").addEventListener("click", () => goJourney("portal"));
  $("#finNew").addEventListener("click", resetJourney);

  // Keyboard Shortcuts
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      const recModal = $("#recruiterModal");
      if (recModal && recModal.classList.contains("active")) {
        closeRecruiterModal();
        return;
      }
      if (current === "finale") goJourney("portal");
      else if (current === "welcome") skipWelcome();
      return;
    }
    // Don't trigger shortcuts when typing in inputs
    if (["INPUT", "TEXTAREA"].includes(document.activeElement.tagName)) return;

    if (e.key >= "1" && e.key <= "7") {
      const num = parseInt(e.key, 10) - 1;
      if (PLACES[num]) goJourney(PLACES[num].id);
    } else if (e.key === "r" || e.key === "R") {
      const recModal = $("#recruiterModal");
      if (recModal && recModal.classList.contains("active")) closeRecruiterModal();
      else openRecruiterModal();
    } else if (e.key === "c" || e.key === "C") {
      Real3DWorld.toggleOrbitMode();
    } else if (e.key === "m" || e.key === "M") {
      Snd.toggle();
    }
  });

  addEventListener("scroll", onScroll, { passive: true });
  let rz;
  addEventListener("resize", () => { clearTimeout(rz); rz = setTimeout(() => { if (current === "journey") { layoutRail(); tick(); } }, 120); });

  const loader = $("#loader");
  setTimeout(() => { loader.classList.add("out"); setTimeout(() => loader.remove(), 450); $("#startBtn").focus({ preventScroll: true }); }, 700);
}
init();
