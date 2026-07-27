// "Fun with Kannada" — pull a floating Kannada letter down and it teaches a
// word starting with it, spoken aloud. Direction-agnostic: reads window.CONFIG
// (langs, storage, digits, UI strings), window.DATA (the letter ↔ local-script
// map this direction already ships) and window.FUN_WORDS / FUN_STRINGS.
(function () {
  "use strict";

  const C = window.CONFIG;
  const S = (window.FUN_STRINGS || {})[C.uiLang] || {};
  const LETTERS = Object.keys(window.FUN_WORDS);

  /* Letter → { equiv, pron } in the learner's own script, from this
     direction's data.js. Missing letters simply show no equivalence line. */
  const LOCAL = {};
  DATA.vowels.concat(DATA.yogavaha, DATA.consonants).forEach(function (l) {
    LOCAL[l.target] = { equiv: l.equiv, pron: l.pron };
  });

  const stage = document.getElementById("stage");
  const canvas = document.getElementById("bg-canvas");
  const ctx = canvas.getContext("2d");
  const floatArea = document.getElementById("float-area");
  const snakeEl = document.getElementById("snake");
  const wordContainer = document.getElementById("word-container");
  const hint = document.getElementById("hint");
  const scoreEl = document.getElementById("score");
  const leftEl = document.getElementById("left");
  const eatenEl = document.getElementById("eaten");
  const eatenStat = document.getElementById("eaten-stat");
  const btnL1 = document.getElementById("level-1");
  const btnL2 = document.getElementById("level-2");
  const resetBtn = document.getElementById("reset");
  const resetScoreBtn = document.getElementById("reset-score");
  const winMsg = document.getElementById("win");
  const loseMsg = document.getElementById("lose");

  const SCORE_KEY = C.storageKey + "-fun-score";
  const TOP_SAFE = 44;        // stats strip across the top of the stage
  const BOTTOM_SAFE = 116;    // where the word card lands
  const PULL_THRESHOLD = 70;  // px you must drag down to "pull" a letter
  const SNAKE_LIMIT = 12;     // letters the snake may eat before you lose

  let score = parseInt(localStorage.getItem(SCORE_KEY) || "0", 10) || 0;
  let eatenCount = 0;
  let floatItems = [];
  let gameOver = false;
  let level = 1;
  let targetLetter = null;
  let stageW = 0, stageH = 0, tile = 50;
  const snake = { x: 60, y: 120, speed: 1.1 };

  function random(a, b) { return Math.random() * (b - a) + a; }

  /* Score in the learner's own numerals, like the rest of the app. */
  function num(n) {
    if (!C.digits) return String(n);
    return String(n).replace(/[0-9]/g, function (d) { return C.digits[+d]; });
  }

  /* All game coordinates are relative to the stage, not the viewport. */
  function measure() {
    stageW = stage.clientWidth;
    stageH = stage.clientHeight;
    tile = stageW < 380 ? 42 : 50;
    stage.style.setProperty("--tile", tile + "px");
    canvas.width = stageW;
    canvas.height = stageH;
  }
  function maxX() { return Math.max(6, stageW - tile - 6); }
  function maxY() { return Math.max(TOP_SAFE + 1, stageH - BOTTOM_SAFE - tile); }
  window.addEventListener("resize", measure);

  /* ---------- Fireworks ---------- */
  const particles = [];
  const COLORS = ["#ff4d6d", "#ffd76a", "#7bffb3", "#6ecbff", "#c77dff", "#ff9e6d", "#fff", "#ff6bcb"];

  function explode(x, y, count, power) {
    for (let i = 0; i < count; i++) {
      const ang = Math.random() * Math.PI * 2, sp = random(2, 8.5) * power;
      particles.push({
        x: x, y: y, vx: Math.cos(ang) * sp, vy: Math.sin(ang) * sp,
        life: 1, decay: random(0.014, 0.03),
        color: COLORS[(Math.random() * COLORS.length) | 0],
        size: random(2, 4.2), gravity: 0.07
      });
    }
  }
  function bigExplosion(x, y) {
    explode(x, y, 100, 1.1);
    setTimeout(function () { explode(x + random(-25, 25), y + random(-20, 20), 50, 0.85); }, 70);
  }
  function updateFireworks() {
    for (let i = particles.length - 1; i >= 0; i--) {
      const p = particles[i];
      p.x += p.vx; p.y += p.vy; p.vy += p.gravity; p.vx *= 0.985; p.life -= p.decay;
      if (p.life <= 0) particles.splice(i, 1);
    }
  }
  function drawFireworks() {
    ctx.fillStyle = "rgba(7,7,26,.2)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    particles.forEach(function (p) {
      ctx.globalAlpha = Math.max(0, p.life);
      ctx.fillStyle = p.color;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size * p.life, 0, Math.PI * 2);
      ctx.fill();
    });
    ctx.globalAlpha = 1;
  }

  /* ---------- Speech, with a visual echo for muted phones ---------- */
  let voice = null, ttsWarned = false;
  function pickVoice() {
    const voices = window.speechSynthesis ? speechSynthesis.getVoices() : [];
    voice = voices.find(function (v) {
      return v.lang && v.lang.toLowerCase().indexOf(C.ttsPrefix) === 0;
    }) || null;
  }
  if (window.speechSynthesis) {
    pickVoice();
    speechSynthesis.onvoiceschanged = pickVoice;
  }
  function toast(msg) {
    let t = document.getElementById("toast");
    if (!t) {
      t = document.createElement("div");
      t.id = "toast";
      document.body.appendChild(t);
    }
    t.textContent = msg;
    t.classList.add("show");
    clearTimeout(t._timer);
    t._timer = setTimeout(function () { t.classList.remove("show"); }, 4000);
  }
  function visualSound(x, y) {
    for (let i = 0; i < 3; i++) {
      setTimeout(function () {
        const ring = document.createElement("div");
        ring.className = "fun-ring";
        ring.style.left = x + "px";
        ring.style.top = y + "px";
        ring.style.borderColor = i === 0 ? "rgba(255,215,100,.8)" : i === 1 ? "rgba(126,200,255,.7)" : "rgba(200,120,255,.6)";
        stage.appendChild(ring);
        setTimeout(function () { ring.remove(); }, 950);
      }, i * 120);
    }
    const notes = ["♪", "♫", "♩", "♬"];
    for (let i = 0; i < 4; i++) {
      setTimeout(function () {
        const n = document.createElement("div");
        n.className = "fun-note";
        n.textContent = notes[i % notes.length];
        n.style.left = (x + random(-30, 30)) + "px";
        n.style.top = (y + random(-10, 10)) + "px";
        n.style.color = ["#ffd76a", "#7ec8ff", "#d97bff", "#7bffb3"][i % 4];
        stage.appendChild(n);
        setTimeout(function () { n.remove(); }, 1150);
      }, i * 90);
    }
  }
  function speak(text, rate, x, y) {
    visualSound(typeof x === "number" ? x : stageW / 2, typeof y === "number" ? y : stageH * 0.55);
    if (!window.speechSynthesis) {
      if (!ttsWarned) { ttsWarned = true; toast(C.strings.noTts); }
      return;
    }
    if (!voice) pickVoice();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = C.ttsLang;
    u.rate = rate;
    u.pitch = 1.05;
    if (voice) {
      u.voice = voice;
    } else if (!ttsWarned) {
      ttsWarned = true;
      toast(C.strings.noVoice);
    }
    speechSynthesis.cancel();
    speechSynthesis.speak(u);
  }

  /* ---------- Floating letters ---------- */
  function createFloatingLetters() {
    floatArea.innerHTML = "";
    floatItems = [];
    LETTERS.forEach(function (ch) {
      const meta = window.FUN_META[ch] || { r: 1 };
      const el = document.createElement("div");
      el.className = "fun-letter r" + meta.r;
      el.textContent = ch;
      el.lang = "kn";
      el.dataset.letter = ch;
      const x = random(6, maxX()), y = random(TOP_SAFE, maxY());
      el.style.left = x + "px";
      el.style.top = y + "px";
      floatArea.appendChild(el);
      floatItems.push({
        el: el, x: x, y: y, vx: random(-0.28, 0.28), vy: random(-0.25, 0.25),
        letter: ch, rarity: meta.r, points: window.FUN_POINTS[meta.r], used: false, eaten: false
      });
    });
    updateStats();
  }
  function updateFloating() {
    if (gameOver) return;
    floatItems.forEach(function (item) {
      if (item.used || item.eaten || item.el.classList.contains("dragging")) return;
      item.x += item.vx;
      item.y += item.vy;
      if (item.x < 6 || item.x > maxX()) item.vx *= -1;
      if (item.y < TOP_SAFE || item.y > maxY()) item.vy *= -1;
      item.x = Math.max(6, Math.min(maxX(), item.x));
      item.y = Math.max(TOP_SAFE, Math.min(maxY(), item.y));
      item.el.style.left = item.x + "px";
      item.el.style.top = item.y + "px";
    });
  }
  function getAliveLetters() {
    return floatItems.filter(function (i) { return !i.used && !i.eaten; });
  }

  /* ---------- Snake (level 2) ---------- */
  function placeSnake() {
    snakeEl.style.left = (snake.x - 22) + "px";
    snakeEl.style.top = (snake.y - 22) + "px";
  }
  function updateSnake() {
    if (gameOver || level !== 2) return;
    const alive = getAliveLetters();
    if (!alive.length) return;
    if (!targetLetter || targetLetter.used || targetLetter.eaten) {
      let best = null, bestScore = -1e9;
      alive.forEach(function (it) {
        const dx = it.x - snake.x, dy = it.y - snake.y;
        const dist = Math.sqrt(dx * dx + dy * dy) || 1;
        const sc = (it.rarity * 18) - dist * 0.55;
        if (sc > bestScore) { bestScore = sc; best = it; }
      });
      targetLetter = best;
    }
    if (!targetLetter) return;
    const tx = targetLetter.x + tile / 2, ty = targetLetter.y + tile / 2;
    const dx = tx - snake.x, dy = ty - snake.y;
    const dist = Math.sqrt(dx * dx + dy * dy) || 1;
    const sp = snake.speed * (1 + (LETTERS.length - alive.length) * 0.035);
    snake.x += (dx / dist) * sp;
    snake.y += (dy / dist) * sp;
    snake.x = Math.max(22, Math.min(stageW - 22, snake.x));
    snake.y = Math.max(TOP_SAFE, Math.min(stageH - 40, snake.y));
    placeSnake();
    if (dist < tile * 0.7) eatLetter(targetLetter);
  }
  function eatLetter(item) {
    if (item.eaten || item.used) return;
    item.eaten = true;
    item.el.classList.add("eaten");
    eatenCount++;
    targetLetter = null;
    snakeEl.classList.remove("chomping");
    void snakeEl.offsetWidth;
    snakeEl.classList.add("chomping");
    explode(snake.x, snake.y, 35, 0.7);
    updateStats();
    checkEnd();
  }

  function updateStats() {
    scoreEl.textContent = num(score);
    leftEl.textContent = num(getAliveLetters().length);
    eatenEl.textContent = num(eatenCount);
  }
  function checkEnd() {
    const alive = getAliveLetters().length;
    if (alive === 0) {
      gameOver = true;
      setTimeout(function () { winMsg.classList.add("show"); }, 400);
    } else if (level === 2 && eatenCount >= SNAKE_LIMIT) {
      gameOver = true;
      setTimeout(function () { loseMsg.classList.add("show"); }, 300);
    }
  }

  /* ---------- Pull-to-learn drag ---------- */
  let dragging = null, startY = 0, currentX = 0, currentY = 0, hasTriggered = false, activePointerId = null;

  function getPoint(e) {
    const r = stage.getBoundingClientRect();
    return { x: e.clientX - r.left, y: e.clientY - r.top };
  }
  function onPointerDown(e) {
    if (gameOver) return;
    const target = e.target.closest(".fun-letter");
    if (!target || target.classList.contains("used") || target.classList.contains("eaten") || dragging) return;
    e.preventDefault();
    if (e.pointerId != null && target.setPointerCapture) {
      try { target.setPointerCapture(e.pointerId); activePointerId = e.pointerId; } catch (_) {}
    }
    dragging = target;
    hasTriggered = false;
    const pt = getPoint(e);
    startY = pt.y;
    currentX = pt.x;
    currentY = pt.y;
    target.classList.add("dragging");
  }
  function onPointerMove(e) {
    if (!dragging) return;
    if (activePointerId != null && e.pointerId != null && e.pointerId !== activePointerId) return;
    e.preventDefault();
    const pt = getPoint(e);
    currentX = pt.x;
    currentY = pt.y;
    dragging.style.left = (currentX - tile / 2) + "px";
    dragging.style.top = (currentY - tile / 2) + "px";
    const dy = currentY - startY;
    dragging.style.transform = "scale(" + (1 + Math.min(Math.max(dy, 0) / 380, 0.32)) + ")";
    if (dy > PULL_THRESHOLD * 0.5) {
      dragging.style.borderColor = "#ff6b6b";
      dragging.style.boxShadow = "0 0 28px rgba(255,80,80,.9)";
    }
  }
  function clearDragStyles(el) {
    el.classList.remove("dragging");
    el.style.transform = "";
    el.style.borderColor = "";
    el.style.boxShadow = "";
  }
  function finishDrag(success) {
    if (!dragging) return;
    const letter = dragging.dataset.letter;
    const item = floatItems.find(function (i) { return i.el === dragging; });
    if (success && !hasTriggered && item && !item.eaten) {
      hasTriggered = true;
      bigExplosion(currentX, currentY);
      item.used = true;
      dragging.classList.add("used");
      clearDragStyles(dragging);
      score += item.points;
      try { localStorage.setItem(SCORE_KEY, score); } catch (_) { /* private mode */ }
      updateStats();
      showWord(letter, item.points);
      hint.classList.add("gone");
      checkEnd();
    } else {
      clearDragStyles(dragging);
      if (item && !item.used && !item.eaten) {
        dragging.style.left = item.x + "px";
        dragging.style.top = item.y + "px";
      }
    }
    if (activePointerId != null && dragging.releasePointerCapture) {
      try { dragging.releasePointerCapture(activePointerId); } catch (_) {}
    }
    activePointerId = null;
    dragging = null;
  }
  floatArea.addEventListener("pointerdown", onPointerDown, { passive: false });
  window.addEventListener("pointermove", onPointerMove, { passive: false });
  window.addEventListener("pointerup", function (e) {
    if (!dragging) return;
    e.preventDefault();
    finishDrag(currentY - startY > PULL_THRESHOLD);
  }, { passive: false });
  window.addEventListener("pointercancel", function () { if (dragging) finishDrag(false); }, { passive: false });

  /* ---------- The payoff card ---------- */
  function showWord(letter, pts) {
    const options = window.FUN_WORDS[letter];
    if (!options || !options.length) return;
    const pick = options[Math.floor(Math.random() * options.length)];

    const card = document.createElement("div");
    card.className = "fun-card";

    const startEl = document.createElement("div");
    startEl.className = "fun-card-letter";
    startEl.lang = "kn";
    startEl.textContent = letter;
    card.appendChild(startEl);

    // The DipaMoy move: show the nearest letter in the learner's own script.
    const local = LOCAL[letter];
    if (local && local.equiv) {
      const eq = document.createElement("div");
      eq.className = "fun-card-equiv";
      eq.innerHTML = "<span lang='kn'>" + letter + "</span> = <span lang='" + C.uiLang + "'>" +
        local.equiv + "</span>";
      card.appendChild(eq);
    }

    if (pick.e) {
      const em = document.createElement("div");
      em.className = "fun-card-emoji";
      em.textContent = pick.e;
      card.appendChild(em);
    }

    const full = document.createElement("div");
    full.className = "fun-card-word";
    full.lang = "kn";
    full.textContent = pick.w;
    const waves = document.createElement("span");
    waves.className = "fun-waves";
    waves.innerHTML = "<span></span><span></span><span></span><span></span>";
    full.appendChild(waves);
    card.appendChild(full);

    const ptsEl = document.createElement("div");
    ptsEl.className = "fun-card-points";
    ptsEl.textContent = "+" + num(pts) + " ⭐";
    card.appendChild(ptsEl);

    wordContainer.innerHTML = "";
    wordContainer.appendChild(card);

    setTimeout(function () {
      const r = card.getBoundingClientRect(), s = stage.getBoundingClientRect();
      const cx = r.left - s.left + r.width / 2, cy = r.top - s.top + r.height / 2;
      explode(cx, cy, 28, 0.5);
      speak(letter, 0.8, cx, cy);
      setTimeout(function () {
        speak(pick.w, 0.9, cx, cy);
        setTimeout(function () { if (waves.parentNode) waves.remove(); }, 1600);
      }, 850);
    }, 320);
  }

  /* ---------- Levels & controls ---------- */
  function setLevel(lv) {
    level = lv;
    btnL1.classList.toggle("active", lv === 1);
    btnL2.classList.toggle("active", lv === 2);
    eatenStat.hidden = lv !== 2;
    snakeEl.classList.toggle("show", lv === 2);
    hint.textContent = lv === 1 ? S.hint1 : S.hint2;
    fullReset();
  }
  function fullReset() {
    measure();
    gameOver = false;
    eatenCount = 0;
    targetLetter = null;
    snake.x = 60;
    snake.y = TOP_SAFE + 40;
    placeSnake();
    wordContainer.innerHTML = "";
    hint.classList.remove("gone");
    winMsg.classList.remove("show");
    loseMsg.classList.remove("show");
    particles.length = 0;
    createFloatingLetters();
    updateStats();
  }
  btnL1.addEventListener("click", function () { setLevel(1); });
  btnL2.addEventListener("click", function () { setLevel(2); });
  resetBtn.addEventListener("click", fullReset);
  resetScoreBtn.addEventListener("click", function () {
    if (confirm(S.resetConfirm)) {
      score = 0;
      try { localStorage.setItem(SCORE_KEY, 0); } catch (_) { /* private mode */ }
      updateStats();
    }
  });
  Array.prototype.forEach.call(document.querySelectorAll(".fun-again"), function (b) {
    b.addEventListener("click", fullReset);
  });

  /* ---------- Direction switcher (only where the target is Kannada) ---------- */
  const FUN_DIRECTIONS = [
    { base: "/", label: "বাংলা → ಕನ್ನಡ", lang: "bn" },
    { base: "/kannada/", label: "മലയാളം → ಕನ್ನಡ", lang: "ml" },
    { base: "/kannada-konkani/", label: "कोंकणी → ಕನ್ನಡ", lang: "kok" },
    { base: "/kannada-odia/", label: "ଓଡ଼ିଆ → ಕನ್ನಡ", lang: "or" },
    { base: "/kannada-tamil/", label: "தமிழ் → ಕನ್ನಡ", lang: "ta" },
    { base: "/kannada-gujarati/", label: "ગુજરાતી → ಕನ್ನಡ", lang: "gu" }
  ];
  function renderSwitcher() {
    const old = document.querySelector(".switcher");
    if (!old) return;
    const sel = document.createElement("select");
    sel.className = "lang-switcher";
    sel.setAttribute("aria-label", "ভাষা / ಭಾಷೆ / ഭാഷ");
    FUN_DIRECTIONS.forEach(function (d) {
      const o = document.createElement("option");
      o.value = d.base + "fun.html";
      o.textContent = d.label;
      o.setAttribute("lang", d.lang);
      if (d.lang === C.uiLang) o.selected = true;
      sel.appendChild(o);
    });
    sel.addEventListener("change", function () {
      if (sel.value) location.href = sel.value;
    });
    old.parentNode.replaceChild(sel, old);
  }

  /* ---------- Labels & go ---------- */
  function applyStrings() {
    btnL1.textContent = S.level1;
    btnL2.textContent = S.level2;
    resetBtn.textContent = S.reset;
    resetScoreBtn.textContent = "⭐ " + S.resetScore;
    document.getElementById("win-title").textContent = "🎉 " + S.winTitle;
    document.getElementById("win-text").textContent = S.winText;
    document.getElementById("lose-title").textContent = "🐍 " + S.loseTitle;
    document.getElementById("lose-text").textContent = S.loseText;
    Array.prototype.forEach.call(document.querySelectorAll(".fun-again"), function (b) {
      b.textContent = S.reset;
    });
  }
  function loop() {
    updateFireworks();
    drawFireworks();
    updateFloating();
    if (level === 2) updateSnake();
    requestAnimationFrame(loop);
  }

  renderSwitcher();
  applyStrings();
  measure();
  hint.textContent = S.hint1;
  createFloatingLetters();
  placeSnake();
  ctx.fillStyle = "#07071a";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  loop();
})();
