// Shared logic: TTS, progress, page rendering
(function () {
  "use strict";

  /* ---------- TTS ---------- */
  var knVoice = null;
  var ttsWarned = false;

  function pickVoice() {
    var voices = window.speechSynthesis ? speechSynthesis.getVoices() : [];
    knVoice = voices.find(function (v) { return v.lang && v.lang.toLowerCase().indexOf("kn") === 0; }) || null;
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
      toast("এই ব্রাউজারে ভয়েস সাপোর্ট নেই। Chrome ব্যবহার করে দেখুন।");
      return;
    }
    if (!knVoice) pickVoice();
    var u = new SpeechSynthesisUtterance(text);
    u.lang = "kn-IN";
    u.rate = 0.85;
    if (knVoice) {
      u.voice = knVoice;
    } else if (!ttsWarned) {
      ttsWarned = true;
      toast("এই ডিভাইসে কন্নড় ভয়েস নেই — মোবাইলে Chrome-এ সবচেয়ে ভালো শোনা যায়।");
    }
    speechSynthesis.cancel();
    speechSynthesis.speak(u);
  }

  /* ---------- Progress (localStorage) ---------- */
  var KEY = "kfb-progress";
  function loadProgress() {
    try { return JSON.parse(localStorage.getItem(KEY)) || {}; }
    catch (e) { return {}; }
  }
  function saveProgress(p) {
    try { localStorage.setItem(KEY, JSON.stringify(p)); } catch (e) { /* private mode */ }
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

  /* Bengali digits */
  function bnNum(n) {
    return String(n).replace(/\d/g, function (d) { return "০১২৩৪৫৬৭৮৯"[d]; });
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
      '<span class="kn-letter" lang="kn">' + esc(item.kn) + "</span>" +
      '<span class="bn-equiv" lang="bn">' + esc(item.bnEquiv) + "</span>" +
      '<span class="bn-pron" lang="bn">' + esc(item.bnPron) + "</span>" +
      '<span class="latin">' + esc(item.latin) + "</span>" +
      (item.note ? '<span class="note" lang="bn">' + esc(item.note) + "</span>" : "");
    card.addEventListener("click", function () {
      speak(item.kn);
      markSeen(item.id);
      card.classList.add("seen");
    });
    return card;
  }

  function phraseRow(ph) {
    var row = el("div", "phrase-row" + (isSeen(ph.id) ? " seen" : ""));
    row.innerHTML =
      '<div class="phrase-text">' +
      '<div class="kn-phrase" lang="kn">' + esc(ph.kn) + "</div>" +
      '<div class="bn-pron" lang="bn">🗣️ ' + esc(ph.bnPron) + "</div>" +
      '<div class="bn-meaning" lang="bn">' + esc(ph.bnMeaning) +
      ' <span class="en">(' + esc(ph.en) + ")</span></div>" +
      "</div>" +
      '<button type="button" class="speak-btn" aria-label="শুনুন">🔊</button>';
    row.querySelector(".speak-btn").addEventListener("click", function () {
      speak(ph.kn);
      markSeen(ph.id);
      row.classList.add("seen");
    });
    return row;
  }

  function renderLetters() {
    var root = document.getElementById("letters-root");
    if (!root) return;
    [
      { title: "স্বরবর্ণ (ಸ್ವರ)", items: DATA.vowels, hint: "কার্ডে চাপ দিলে উচ্চারণ শুনতে পাবেন" },
      { title: "অনুস্বার ও বিসর্গ", items: DATA.yogavaha },
      { title: "ব্যঞ্জনবর্ণ (ವ್ಯಂಜನ)", items: DATA.consonants }
    ].forEach(function (sec) {
      var h = el("h2", "section-title", esc(sec.title));
      root.appendChild(h);
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
        "<summary><span class='cat-icon'>" + cat.icon + "</span> <span lang='bn'>" +
        esc(cat.bn) + "</span> <span class='cat-count'>" +
        bnNum(learned) + "/" + bnNum(cat.phrases.length) + "</span></summary>";
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
    var mode = "quiz"; // or "cards"
    var qIndex = 0, score = 0, order = shuffle(pool.slice());

    var tabs = el("div", "tabs");
    var tabQuiz = el("button", "tab active", "কুইজ");
    var tabCards = el("button", "tab", "ফ্ল্যাশকার্ড");
    tabQuiz.type = tabCards.type = "button";
    tabs.appendChild(tabQuiz); tabs.appendChild(tabCards);
    root.appendChild(tabs);
    var stage = el("div", "stage");
    root.appendChild(stage);

    tabQuiz.addEventListener("click", function () {
      mode = "quiz"; tabQuiz.classList.add("active"); tabCards.classList.remove("active"); drawQuiz();
    });
    tabCards.addEventListener("click", function () {
      mode = "cards"; tabCards.classList.add("active"); tabQuiz.classList.remove("active"); drawCard();
    });

    function drawQuiz() {
      stage.innerHTML = "";
      if (qIndex >= 10 || qIndex >= order.length) {
        stage.appendChild(el("div", "quiz-done",
          "<div class='big'>🎉</div><p lang='bn'>স্কোর: " + bnNum(score) + "/" + bnNum(qIndex) +
          "</p><button type='button' class='btn primary' id='again'>আবার খেলুন</button>"));
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
      q.appendChild(el("p", "quiz-progress", bnNum(qIndex + 1) + "/" + bnNum(Math.min(10, order.length))));
      var prompt = el("div", "quiz-prompt");
      prompt.innerHTML = "<span lang='kn'>" + esc(answer.kn) + "</span>" +
        "<button type='button' class='speak-btn' aria-label='শুনুন'>🔊</button>";
      prompt.querySelector(".speak-btn").addEventListener("click", function () { speak(answer.kn); });
      q.appendChild(prompt);
      q.appendChild(el("p", "quiz-q", "এর মানে কী?"));
      var opts = el("div", "quiz-options");
      options.forEach(function (opt) {
        var b = el("button", "btn option");
        b.type = "button";
        b.setAttribute("lang", "bn");
        b.textContent = opt.bnMeaning;
        b.addEventListener("click", function () {
          if (b.disabled) return;
          var correct = opt.id === answer.id;
          b.classList.add(correct ? "correct" : "wrong");
          if (correct) { score++; markSeen(answer.id); }
          else {
            opts.querySelectorAll(".option").forEach(function (o) {
              if (o.textContent === answer.bnMeaning) o.classList.add("correct");
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
        "<div class='fc-front' lang='kn'>" + esc(ph.kn) + "</div>" +
        "<div class='fc-back hiddenpart'>" +
        "<div class='bn-pron' lang='bn'>🗣️ " + esc(ph.bnPron) + "</div>" +
        "<div class='bn-meaning' lang='bn'>" + esc(ph.bnMeaning) + "</div>" +
        "<div class='en'>" + esc(ph.en) + "</div></div>" +
        "<p class='hint' lang='bn'>কার্ডে চাপ দিন — মানে দেখুন</p>";
      card.addEventListener("click", function () {
        card.querySelector(".fc-back").classList.remove("hiddenpart");
        card.querySelector(".hint").textContent = "";
        markSeen(ph.id);
      });
      var controls = el("div", "fc-controls");
      var hear = el("button", "btn", "🔊 শুনুন");
      var next = el("button", "btn primary", "পরের কার্ড →");
      hear.type = next.type = "button";
      hear.addEventListener("click", function (e) { e.stopPropagation(); speak(ph.kn); });
      next.addEventListener("click", function () { cardIdx++; drawCard(); });
      controls.appendChild(hear); controls.appendChild(next);
      stage.appendChild(card);
      stage.appendChild(controls);
    }

    drawQuiz();
  }

  /* ---------- Home ---------- */
  function renderHome() {
    var root = document.getElementById("home-progress");
    if (!root) return;
    var letters = allLetters();
    var phrases = allPhrases();
    var lc = seenCount(letters), pc = seenCount(phrases);
    root.innerHTML =
      "<div class='stat'><span class='stat-num'>" + bnNum(lc) + "/" + bnNum(letters.length) +
      "</span><span class='stat-label' lang='bn'>অক্ষর শেখা</span></div>" +
      "<div class='stat'><span class='stat-num'>" + bnNum(pc) + "/" + bnNum(phrases.length) +
      "</span><span class='stat-label' lang='bn'>বাক্য শেখা</span></div>";
  }

  /* ---------- boot ---------- */
  document.addEventListener("DOMContentLoaded", function () {
    renderHome();
    renderLetters();
    renderPhrases();
    renderPractice();
  });
})();
