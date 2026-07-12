# DipaMoy — Functional Specification Document (FSD)

**Product:** DipaMoy — built on দীপা/ದೀಪ ("Dipa," lamp in both Bengali and Kannada) plus the Bengali suffix "-moy" (ময়, "full of")
**Live site:** https://kannadaforbengalis.online/ (Bengali → Kannada) and https://kannadaforbengalis.online/bengali/ (Kannada → Bengali)
**Type:** Client-side static web app (no backend)
**Status:** Live

---

## 1. Overview

A Duolingo-inspired language-learning app, **bidirectional** between Kannada and Bengali — two related Brahmic scripts spoken by large, overlapping migrant communities (Bengalis living in Karnataka, and vice versa). One codebase, one brand (**DipaMoy**), serves two learner-facing directions from the same domain:

- **`/`** — Bengali-speaking UI, teaches **Kannada**. Pronunciation shown in Bengali script, TTS in `kn-IN`.
- **`/bengali/`** — Kannada-speaking UI, teaches **Bengali**. Pronunciation shown in Kannada script, TTS in `bn-IN`.

The app is fully client-side: static HTML pages, one shared stylesheet, one shared JS engine, and per-direction data/config files. There is no server, database, or login. Progress is stored in the browser via `localStorage`, keyed separately per direction so the two learner populations never collide.

### 1.1 Goals
- Help Bengali speakers living in Karnataka (and Kannadigas living in Bengal / interacting with Bengalis) pick up practical, everyday vocabulary.
- Teach the **script** (letters, closest cross-script equivalents) as well as **spoken phrases** with locally-relevant pronunciation guidance.
- Work well on mobile with zero install, zero signup, zero cost.

### 1.2 Non-goals
- No user accounts, leaderboards, or server-synced progress.
- No spaced-repetition scheduling — practice is quiz + flashcard only, not an SRS algorithm.
- No languages beyond the Kannada↔Bengali pair.
- No pre-recorded audio — pronunciation audio is synthesized on-device (see §3, §6.3).

---

## 2. Target Users
- Bengali speakers relocated to Bengaluru/Karnataka needing survival Kannada (market, auto, food, emergencies).
- Kannadigas with Bengali neighbours, colleagues, or in-laws wanting to reciprocate/learn Bengali.
- Casual script learners curious about the shared Brahmi ancestry of the two scripts.
- Mobile-first audience.

---

## 3. Technology

| Layer | Choice |
|---|---|
| Markup | 8 static HTML pages (4 per direction): `index.html`, `letters.html`, `phrases.html`, `practice.html` |
| Styling | Plain CSS (`style.css`), shared by both directions; font family switched via `html[lang]` |
| Logic | Vanilla JavaScript, no framework, no bundler — one shared `engine.js` |
| Direction config | `config.js` (root) and `bengali/config.js` — per-direction strings, TTS language, storage key, digit script |
| Content data | `data.js` (root) and `bengali/data.js` — normalized letter/phrase records |
| Audio | Web Speech API (`speechSynthesis`), voice picked by `lang` prefix (`kn`/`bn`), rate 0.85 |
| Fonts | Google Fonts — Noto Sans Bengali, Noto Sans Kannada |
| Persistence | Browser `localStorage`, two independent keys (`kfb-progress`, `bfk-progress`) |
| Hosting | Vercel (static), domain `kannadaforbengalis.online` via Cloudflare DNS (grey-cloud → Vercel A/CNAME) |

No external runtime dependencies beyond Google Fonts; the app loads and runs without a build step. Chrome's automatic translation prompt is suppressed via `translate="no"` on `<html>` and `<meta name="google" content="notranslate">` on every page — critical here because auto-translating a language-learning page would garble the very content being taught.

---

## 4. Data Model

### 4.1 Normalized content shape (`data.js`, both directions)

```js
window.DATA = {
  vowels:      [{ id, target, equiv, pron, latin, note? }, ...],
  yogavaha:    [{ id, target, equiv, pron, latin, note? }, ...],   // anusvara/visarga/chandrabindu
  consonants:  [{ id, target, equiv, pron, latin, note? }, ...],
  categories: [
    { id, label, icon, phrases: [{ id, target, pron, meaning, en }, ...] },
    ...
  ]
};
```

- `target` — the letter/phrase in the language being **taught** (Kannada on `/`, Bengali on `/bengali/`).
- `equiv` — the closest letter in the **learner's own** script (shown for visual/script comparison).
- `pron` — pronunciation of `target`, written in the **learner's own script** (the core teaching device).
- `latin` — romanized transliteration.
- `note` — optional callout for a pronunciation trap or script mismatch (e.g. Bengali অ pronounced "ಒ" not "ಅ"; short/long vowel pairs Bengali doesn't distinguish).
- `meaning` / `en` — phrase meaning in the learner's script and in English.

Content counts:

| Direction | Vowels | Yogavaha | Consonants | Categories | Phrases |
|---|---|---|---|---|---|
| `/` (→ Kannada) | 13 | 2 | 34 | 7 | 69 |
| `/bengali/` (→ Bengali) | 11 | 3 | 36 | 7 | 68 |

Phrase categories (both directions): greetings, essentials, numbers, market/bargaining, travel, food, emergency.

### 4.2 Direction config (`config.js`)

```js
window.CONFIG = {
  targetLang,   // "kn" | "bn" — lang attr for taught-language text
  uiLang,       // "bn" | "kn" — lang attr for learner's own script
  ttsLang,      // "kn-IN" | "bn-IN"
  ttsPrefix,    // "kn" | "bn" — used to pick a matching SpeechSynthesisVoice
  storageKey,   // "kfb-progress" | "bfk-progress"
  digits,       // native digit glyphs "０-৯" or "೦-೯" for score display
  strings: { noTts, noVoice, listen, vowelsTitle, yogavahaTitle,
             consonantsTitle, lettersHint, quizTab, cardsTab, quizQuestion,
             score, playAgain, cardHint, nextCard, lettersStat, phrasesStat }
};
```

Every user-facing string, language tag, TTS parameter, and storage key is sourced from this object — `engine.js` itself contains no hardcoded language.

### 4.3 Progress state (`localStorage`)
- Key: `CONFIG.storageKey` (distinct per direction, so learning progress on `/` and `/bengali/` never overlaps even for the same browser).
- Value: `{ [itemId]: 1 }` — a flat map of every letter/phrase `id` the user has interacted with (tapped a card, played its audio, or answered a quiz question correctly).
- No expiry, no sync, no PII.

---

## 5. Core Concept: Shared Engine, Divergent Content

`engine.js` is 100% direction-agnostic: it reads `window.CONFIG` and `window.DATA` and renders identically regardless of which way the app is teaching. This means:

- A bug fix or feature added to `engine.js` benefits both directions simultaneously.
- The only per-direction artifacts are `config.js` (strings/langs) and `data.js` (content) — both small, human-editable files.
- Adding a third language pair in the future would mean: a new subfolder, a new `config.js`, a new `data.js`, and reusing `engine.js` + `style.css` unchanged.

---

## 6. Functional Requirements

### 6.1 Home page (`index.html`)
- **FR-1** Displays two progress stats (`X/Y অক্ষর শেখা`, `X/Y বাক্য শেখা` or Kannada equivalent) computed from `localStorage` against total letter/phrase counts, rendered in the direction's native digit glyphs.
- **FR-2** Three module cards link to Letters, Phrases, Practice.
- **FR-3** A **direction switcher** pill link in the header (e.g. "ನಾನು ಕನ್ನಡಿಗ →" on `/`, "আমি বাঙালি →" on `/bengali/`) sends the user to the other direction's home page.

### 6.2 Letters (`letters.html`)
- **FR-4** Renders three sections — vowels, yogavaha (anusvara/visarga/chandrabindu), consonants — each as a grid of tappable cards.
- **FR-5** Each card shows: the target-script letter (large), the learner's-script equivalent (colored), the learner's-script pronunciation, the Latin transliteration, and an optional trap/mismatch note.
- **FR-6** Tapping a card speaks the target letter aloud (§6.5) and marks it `seen` in progress (visual border change + `localStorage` write).

### 6.3 Phrases (`phrases.html`)
- **FR-7** Renders 7 collapsible `<details>` categories (icon + label + `learned/total` count in native digits); the first category (greetings) starts expanded.
- **FR-8** Each phrase row shows: target-script phrase, learner's-script pronunciation (🗣️ prefixed), learner's-script meaning, English gloss in parentheses, and a 🔊 speak button.
- **FR-9** Tapping 🔊 speaks the phrase (§6.5) and marks it `seen`.

### 6.4 Practice (`practice.html`)
- **FR-10** Two tabs: **Quiz** (default) and **Flashcards**.
- **FR-11 (Quiz)** Presents the target-script phrase plus a 🔊 button and 4 shuffled meaning options (1 correct + 3 random distractors from the full phrase pool, no repeats within the option set). Selecting an option locks all options, colors the chosen one green/red and reveals the correct one if wrong, marks the phrase `seen` on a correct answer, and auto-advances after ~1.1s. Ends after 10 questions (or the full pool if smaller) with a score summary and a "play again" reset (fresh shuffle).
- **FR-12 (Flashcards)** Shows the target-script phrase front-only; tapping the card reveals pronunciation + meaning + English on the back and marks it `seen`. A 🔊 button speaks without flipping the card; a "next card →" button advances through a shuffled deck, looping.

### 6.5 Text-to-speech
- **FR-13** On card/phrase interaction, `speechSynthesis` speaks the target-script text using a voice matched by `lang` prefix (`CONFIG.ttsPrefix`) at rate 0.85.
- **FR-14** If the Web Speech API is unavailable at all, a toast (`CONFIG.strings.noTts`) suggests using Chrome.
- **FR-15** If the API is available but no matching-language voice is installed, playback still fires with the closest available voice (or browser default), and a one-time-per-session toast (`CONFIG.strings.noVoice`) suggests mobile Chrome for better voice coverage.

### 6.6 Progress tracking
- **FR-16** Every letter tap and every phrase interaction (speak, correct quiz answer, flashcard flip) writes `{ [id]: 1 }` into the direction's `localStorage` key, idempotently (already-seen items are no-ops).
- **FR-17** Home page stats and per-category phrase counts read live from this store on each page load.

### 6.7 Direction switching
- **FR-18** Both directions' headers carry a switcher link (§6.1 FR-3) so a bilingual user, or one direction's learner curious about the reverse, can cross over in one tap. Progress is not shared or migrated between directions — they are independent learning tracks.

---

## 7. Non-Functional Requirements

### 7.1 Responsive / mobile
- **NFR-1** Mobile-first CSS: bottom tab navigation fixed to the viewport, card grids reflow via `auto-fill`/`minmax`, safe-area padding for notch/home-indicator devices.

### 7.2 Performance
- **NFR-2** No build step, no JS framework; total payload per page is a handful of small text files plus two Google Font families. All rendering is O(content size) and runs once on `DOMContentLoaded`.

### 7.3 Internationalization / no-translate
- **NFR-3** Every page sets `<html lang>` to the **learner's own language** (`bn` on `/`, `kn` on `/bengali/`) and tags target-language spans/attributes with the opposite `lang` value, so screen readers and browser font-selection behave correctly for mixed-script content.
- **NFR-4** `translate="no"` + `<meta name="google" content="notranslate">` on every page prevents Chrome's auto-translate prompt from mangling the bilingual teaching content (see §3).

### 7.4 SEO & sharing
- **NFR-5** Each of the 8 pages has a descriptive, direction-appropriate `<title>`/meta description and a canonical URL under `https://kannadaforbengalis.online/`.
- **NFR-6** The homepage (`/`) additionally carries Open Graph + Twitter Card tags pointing at a shared 1200×630 `og-image.png` (bilingual branded card, generated via headless Chrome from `og-image.html`).
- **NFR-7** `sitemap.xml` lists all 8 URLs (4 per direction); `robots.txt` allows all crawling and references the sitemap. Both directions are independently indexable.
- **NFR-8** Google Search Console verification is via a Cloudflare DNS TXT record on the domain (no file upload / meta-tag needed) — see repo memory notes for the verification value location.

### 7.5 Browser support
- **NFR-9** Modern evergreen browsers (Chrome, Edge, Firefox, Safari) on desktop and mobile. TTS quality depends on the OS/browser's installed voices; Chrome (especially Android) has the most complete `kn-IN`/`bn-IN` coverage, hence the fallback messaging steers users there.

---

## 8. Architecture & Files

| Path | Responsibility |
|---|---|
| `engine.js` | Shared rendering/logic engine for **both** directions: TTS, `localStorage` progress, letter-card/phrase-row/quiz/flashcard/home rendering. Reads everything from `window.CONFIG` + `window.DATA`. |
| `config.js` | Root direction config (Bengali UI → learn Kannada). |
| `data.js` | Root content: Kannada letters/phrases with Bengali pronunciation. |
| `index.html`, `letters.html`, `phrases.html`, `practice.html` | Root pages; each loads `config.js` → `data.js` → `engine.js`. |
| `bengali/config.js` | Kannada-direction config (Kannada UI → learn Bengali). |
| `bengali/data.js` | Bengali content: Bengali letters/phrases with Kannada pronunciation. |
| `bengali/index.html`, `bengali/letters.html`, `bengali/phrases.html`, `bengali/practice.html` | `/bengali/` pages; each loads its own `config.js`/`data.js` plus the shared `../engine.js`. |
| `style.css` | All styling, shared by both directions; `html[lang]` selects the default body font family. |
| `favicon.svg` (root and `bengali/`) | Direction-specific favicons (ক/ಕ badge vs ব/ಬ badge). |
| `og-image.png`, `og-image.html` | Social share image + its HTML source (rendered via headless Chrome). |
| `robots.txt`, `sitemap.xml` | Crawling / indexing directives, covering both directions. |
| `whatsapp-*`, `instagram-*` (untracked, `.gitignore`d) | Marketing launch drafts — message copy + 1200×630/1080×1080 HTML→PNG graphics, per campaign. |

**Data flow:** page load → `config.js` sets `window.CONFIG` → `data.js` sets `window.DATA` → `engine.js`'s `DOMContentLoaded` handler calls `renderHome()` / `renderLetters()` / `renderPhrases()` / `renderPractice()` depending on which root elements exist on the page (`#home-progress`, `#letters-root`, `#phrases-root`, `#practice-root`) → user interaction → `speak()` / `markSeen()` → `localStorage` write → next render reads updated progress.

---

## 9. Deployment

- **Repo:** [github.com/yvsreenivas/kannada-for-bengalis](https://github.com/yvsreenivas/kannada-for-bengalis) (public), single repo for both directions.
- **Hosting:** Vercel, connected via GitHub integration — every push to `main` auto-deploys.
- **Domain:** `kannadaforbengalis.online` (Namecheap registrar) → Cloudflare DNS (nameservers delegated from Namecheap) → Vercel via grey-cloud (DNS-only) A/CNAME records, so Vercel issues and manages its own SSL certificate.
- **Local dev:** any static file server, e.g. `npx serve .` or `python -m http.server`; no build step for either directory.
