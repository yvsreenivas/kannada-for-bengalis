// Unified learning engine — direction-agnostic.
// Reads window.CONFIG (per-direction strings/langs/storage) and window.DATA
// (normalized: letters {id,target,equiv,pron,latin,note?}, phrases {id,target,pron,meaning,en},
//  categories {id,label,icon,phrases}).
(function () {
  "use strict";

  var C = window.CONFIG;

  /* ---------- TTS ---------- */
  var voice = null;
  var ttsWarned = false;

  function pickVoice() {
    var voices = window.speechSynthesis ? speechSynthesis.getVoices() : [];
    voice = voices.find(function (v) {
      return v.lang && v.lang.toLowerCase().indexOf(C.ttsPrefix) === 0;
    }) || null;
  }
  if (window.speechSynthesis) {
    pickVoice();
    speechSynthesis.onvoiceschanged = pickVoice;
  }

  function toast(msg) {
    var t = document.getElementById("toast");
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

  function speak(text) {
    if (!window.speechSynthesis) {
      toast(C.strings.noTts);
      return;
    }
    if (!voice) pickVoice();
    var u = new SpeechSynthesisUtterance(text);
    u.lang = C.ttsLang;
    u.rate = 0.85;
    if (voice) {
      u.voice = voice;
    } else if (!ttsWarned) {
      ttsWarned = true;
      toast(C.strings.noVoice);
    }
    speechSynthesis.cancel();
    speechSynthesis.speak(u);
  }

  /* ---------- Progress (localStorage) ---------- */
  function loadProgress() {
    try { return JSON.parse(localStorage.getItem(C.storageKey)) || {}; }
    catch (e) { return {}; }
  }
  function saveProgress(p) {
    try { localStorage.setItem(C.storageKey, JSON.stringify(p)); } catch (e) { /* private mode */ }
  }
  function markSeen(id) {
    var p = loadProgress();
    if (!p[id]) { p[id] = 1; saveProgress(p); }
  }
  function isSeen(id) { return !!loadProgress()[id]; }
  function seenCount(items) {
    var p = loadProgress();
    return items.reduce(function (n, it) { return n + (p[it.id] ? 1 : 0); }, 0);
  }

  function allPhrases() {
    return DATA.categories.reduce(function (a, c) { return a.concat(c.phrases); }, []);
  }
  function allLetters() {
    return DATA.vowels.concat(DATA.yogavaha, DATA.consonants);
  }

  /* Native digits */
  function num(n) {
    return String(n).replace(/\d/g, function (d) { return C.digits[d]; });
  }

  /* ---------- Rendering ---------- */
  function el(tag, cls, html) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html !== undefined) e.innerHTML = html;
    return e;
  }
  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  }

  function letterCard(item) {
    var card = el("button", "letter-card" + (isSeen(item.id) ? " seen" : ""));
    card.type = "button";
    card.innerHTML =
      '<span class="kn-letter" lang="' + C.targetLang + '">' + esc(item.target) + "</span>" +
      '<span class="bn-equiv" lang="' + C.uiLang + '">' + esc(item.equiv) + "</span>" +
      '<span class="bn-pron" lang="' + C.uiLang + '">' + esc(item.pron) + "</span>" +
      '<span class="latin">' + esc(item.latin) + "</span>" +
      (item.note ? '<span class="note" lang="' + C.uiLang + '">' + esc(item.note) + "</span>" : "");
    card.addEventListener("click", function () {
      speak(item.target);
      markSeen(item.id);
      card.classList.add("seen");
    });
    return card;
  }

  function phraseRow(ph) {
    var row = el("div", "phrase-row" + (isSeen(ph.id) ? " seen" : ""));
    row.innerHTML =
      '<div class="phrase-text">' +
      '<div class="kn-phrase" lang="' + C.targetLang + '">' + esc(ph.target) + "</div>" +
      '<div class="bn-pron" lang="' + C.uiLang + '">🗣️ ' + esc(ph.pron) + "</div>" +
      '<div class="bn-meaning" lang="' + C.uiLang + '">' + esc(ph.meaning) +
      ' <span class="en">(' + esc(ph.en) + ")</span></div>" +
      "</div>" +
      '<button type="button" class="speak-btn" aria-label="' + esc(C.strings.listen) + '">🔊</button>';
    row.querySelector(".speak-btn").addEventListener("click", function () {
      speak(ph.target);
      markSeen(ph.id);
      row.classList.add("seen");
    });
    return row;
  }

  function renderLetters() {
    var root = document.getElementById("letters-root");
    if (!root) return;
    [
      { title: C.strings.vowelsTitle, items: DATA.vowels, hint: C.strings.lettersHint },
      { title: C.strings.yogavahaTitle, items: DATA.yogavaha },
      { title: C.strings.consonantsTitle, items: DATA.consonants }
    ].forEach(function (sec) {
      root.appendChild(el("h2", "section-title", esc(sec.title)));
      if (sec.hint) root.appendChild(el("p", "hint", esc(sec.hint)));
      var grid = el("div", "letter-grid");
      sec.items.forEach(function (it) { grid.appendChild(letterCard(it)); });
      root.appendChild(grid);
    });
  }

  function renderPhrases() {
    var root = document.getElementById("phrases-root");
    if (!root) return;
    DATA.categories.forEach(function (cat) {
      var details = el("details", "category");
      if (cat.id === "greetings") details.open = true;
      var learned = seenCount(cat.phrases);
      details.innerHTML =
        "<summary><span class='cat-icon'>" + cat.icon + "</span> <span lang='" + C.uiLang + "'>" +
        esc(cat.label) + "</span> <span class='cat-count'>" +
        num(learned) + "/" + num(cat.phrases.length) + "</span></summary>";
      var list = el("div", "phrase-list");
      cat.phrases.forEach(function (ph) { list.appendChild(phraseRow(ph)); });
      details.appendChild(list);
      root.appendChild(details);
    });
  }

  /* ---------- Practice ---------- */
  function shuffle(a) {
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  function renderPractice() {
    var root = document.getElementById("practice-root");
    if (!root) return;
    var pool = allPhrases();
    var qIndex = 0, score = 0, order = shuffle(pool.slice());

    var tabs = el("div", "tabs");
    var tabQuiz = el("button", "tab active", esc(C.strings.quizTab));
    var tabCards = el("button", "tab", esc(C.strings.cardsTab));
    tabQuiz.type = tabCards.type = "button";
    tabs.appendChild(tabQuiz); tabs.appendChild(tabCards);
    root.appendChild(tabs);
    var stage = el("div", "stage");
    root.appendChild(stage);

    tabQuiz.addEventListener("click", function () {
      tabQuiz.classList.add("active"); tabCards.classList.remove("active"); drawQuiz();
    });
    tabCards.addEventListener("click", function () {
      tabCards.classList.add("active"); tabQuiz.classList.remove("active"); drawCard();
    });

    function drawQuiz() {
      stage.innerHTML = "";
      if (qIndex >= 10 || qIndex >= order.length) {
        stage.appendChild(el("div", "quiz-done",
          "<div class='big'>🎉</div><p lang='" + C.uiLang + "'>" + esc(C.strings.score) + ": " +
          num(score) + "/" + num(qIndex) +
          "</p><button type='button' class='btn primary' id='again'>" + esc(C.strings.playAgain) + "</button>"));
        stage.querySelector("#again").addEventListener("click", function () {
          qIndex = 0; score = 0; order = shuffle(pool.slice()); drawQuiz();
        });
        return;
      }
      var answer = order[qIndex];
      var options = shuffle([answer].concat(
        shuffle(pool.filter(function (p) { return p.id !== answer.id; })).slice(0, 3)
      ));
      var q = el("div", "quiz");
      q.appendChild(el("p", "quiz-progress", num(qIndex + 1) + "/" + num(Math.min(10, order.length))));
      var prompt = el("div", "quiz-prompt");
      prompt.innerHTML = "<span lang='" + C.targetLang + "'>" + esc(answer.target) + "</span>" +
        "<button type='button' class='speak-btn' aria-label='" + esc(C.strings.listen) + "'>🔊</button>";
      prompt.querySelector(".speak-btn").addEventListener("click", function () { speak(answer.target); });
      q.appendChild(prompt);
      q.appendChild(el("p", "quiz-q", esc(C.strings.quizQuestion)));
      var opts = el("div", "quiz-options");
      options.forEach(function (opt) {
        var b = el("button", "btn option");
        b.type = "button";
        b.setAttribute("lang", C.uiLang);
        b.textContent = opt.meaning;
        b.addEventListener("click", function () {
          if (b.disabled) return;
          var correct = opt.id === answer.id;
          b.classList.add(correct ? "correct" : "wrong");
          if (correct) { score++; markSeen(answer.id); }
          else {
            opts.querySelectorAll(".option").forEach(function (o) {
              if (o.textContent === answer.meaning) o.classList.add("correct");
            });
          }
          opts.querySelectorAll(".option").forEach(function (o) { o.disabled = true; });
          setTimeout(function () { qIndex++; drawQuiz(); }, 1100);
        });
        opts.appendChild(b);
      });
      q.appendChild(opts);
      stage.appendChild(q);
    }

    var cardIdx = 0, cardOrder = shuffle(pool.slice());
    function drawCard() {
      stage.innerHTML = "";
      var ph = cardOrder[cardIdx % cardOrder.length];
      var card = el("div", "flashcard");
      card.innerHTML =
        "<div class='fc-front' lang='" + C.targetLang + "'>" + esc(ph.target) + "</div>" +
        "<div class='fc-back hiddenpart'>" +
        "<div class='bn-pron' lang='" + C.uiLang + "'>🗣️ " + esc(ph.pron) + "</div>" +
        "<div class='bn-meaning' lang='" + C.uiLang + "'>" + esc(ph.meaning) + "</div>" +
        "<div class='en'>" + esc(ph.en) + "</div></div>" +
        "<p class='hint' lang='" + C.uiLang + "'>" + esc(C.strings.cardHint) + "</p>";
      card.addEventListener("click", function () {
        card.querySelector(".fc-back").classList.remove("hiddenpart");
        card.querySelector(".hint").textContent = "";
        markSeen(ph.id);
      });
      var controls = el("div", "fc-controls");
      var hear = el("button", "btn", "🔊 " + esc(C.strings.listen));
      var next = el("button", "btn primary", esc(C.strings.nextCard));
      hear.type = next.type = "button";
      hear.addEventListener("click", function (e) { e.stopPropagation(); speak(ph.target); });
      next.addEventListener("click", function () { cardIdx++; drawCard(); });
      controls.appendChild(hear); controls.appendChild(next);
      stage.appendChild(card);
      stage.appendChild(controls);
    }

    drawQuiz();
  }

  /* ---------- Language chooser ---------- */
  // All learning directions in the app. `base` is the folder; every direction
  // has the same four page files (index/letters/phrases/practice.html).
  var DIRECTIONS = [
    { base: "/",                label: "বাংলা → ಕನ್ನಡ",   lang: "bn" },
    { base: "/bengali/",        label: "ಕನ್ನಡ → বাংলা",   lang: "kn" },
    { base: "/malayalam/",      label: "ಕನ್ನಡ → മലയാളം", lang: "kn" },
    { base: "/kannada/",        label: "മലയാളം → ಕನ್ನಡ", lang: "ml" },
    { base: "/konkani/",        label: "ಕನ್ನಡ → कोंकणी",  lang: "kn" },
    { base: "/kannada-konkani/", label: "कोंकणी → ಕನ್ನಡ", lang: "kok" },
    { base: "/odia/",            label: "ಕನ್ನಡ → ଓଡ଼ିଆ",   lang: "kn" },
    { base: "/kannada-odia/",   label: "ଓଡ଼ିଆ → ಕನ್ನಡ",   lang: "or" }
  ];

  function currentBase() {
    var p = location.pathname;
    if (p.indexOf("/bengali/") !== -1) return "/bengali/";
    if (p.indexOf("/malayalam/") !== -1) return "/malayalam/";
    if (p.indexOf("/kannada-konkani/") !== -1) return "/kannada-konkani/";
    if (p.indexOf("/konkani/") !== -1) return "/konkani/";
    if (p.indexOf("/kannada-odia/") !== -1) return "/kannada-odia/";
    if (p.indexOf("/kannada/") !== -1) return "/kannada/";
    if (p.indexOf("/odia/") !== -1) return "/odia/";
    return "/";
  }
  function currentFile() {
    var seg = location.pathname.split("/").pop();
    return /\.html$/.test(seg) ? seg : "index.html";
  }

  function renderSwitcher() {
    var file = currentFile(), base = currentBase();
    var sel = document.createElement("select");
    sel.className = "lang-switcher";
    sel.setAttribute("aria-label", "ভাষা / ಭಾಷೆ / ഭാഷ");
    DIRECTIONS.forEach(function (d) {
      var o = document.createElement("option");
      o.value = d.base + file;
      o.textContent = d.label;
      o.setAttribute("lang", d.lang);
      if (d.base === base) o.selected = true;
      sel.appendChild(o);
    });
    sel.addEventListener("change", function () {
      if (sel.value) location.href = sel.value;
    });
    // Replace the static switcher pill if present, otherwise add to the header.
    var old = document.querySelector(".switcher");
    if (old) { old.parentNode.replaceChild(sel, old); return; }
    var header = document.querySelector("header");
    if (header) header.appendChild(sel);
  }

  /* ---------- Home ---------- */
  function renderHome() {
    var root = document.getElementById("home-progress");
    if (!root) return;
    var letters = allLetters();
    var phrases = allPhrases();
    var lc = seenCount(letters), pc = seenCount(phrases);
    root.innerHTML =
      "<div class='stat'><span class='stat-num'>" + num(lc) + "/" + num(letters.length) +
      "</span><span class='stat-label' lang='" + C.uiLang + "'>" + esc(C.strings.lettersStat) + "</span></div>" +
      "<div class='stat'><span class='stat-num'>" + num(pc) + "/" + num(phrases.length) +
      "</span><span class='stat-label' lang='" + C.uiLang + "'>" + esc(C.strings.phrasesStat) + "</span></div>";
  }

  /* ---------- boot ---------- */
  document.addEventListener("DOMContentLoaded", function () {
    renderSwitcher();
    renderHome();
    renderLetters();
    renderPhrases();
    renderPractice();
  });
})();
