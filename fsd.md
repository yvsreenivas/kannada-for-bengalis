# DipaMoy — Functional Specification Document (FSD)

**Product:** DipaMoy — built on দীপা/ದೀಪ ("Dipa," lamp in both Bengali and Kannada) plus the Bengali suffix "-moy" (ময়, "full of")
**Live site:** https://dipamoy.site/ — one domain, **6 learner-facing directions across 4 languages** (Kannada as the hub, paired with Bengali, Malayalam, and Konkani)
**Type:** Client-side static web app (no backend)
**Status:** Live

---

## 1. Overview

A Duolingo-inspired language-learning app that is **bidirectional** between Kannada and each of three other languages — Bengali, Malayalam, and Konkani. These are spoken by large migrant/neighbouring communities in and around Karnataka. One codebase, one brand (**DipaMoy**), one shared engine serves all six directions from the same domain:

| URL | Learner's UI | Teaches | Pronunciation shown in | TTS |
|---|---|---|---|---|
| `/` | Bengali | **Kannada** | Bengali script | `kn-IN` |
| `/bengali/` | Kannada | **Bengali** | Kannada script | `bn-IN` |
| `/malayalam/` | Kannada | **Malayalam** | Kannada script | `ml-IN` |
| `/kannada/` | Malayalam | **Kannada** | Malayalam script | `kn-IN` |
| `/konkani/` | Kannada | **Konkani** (Devanagari) | Kannada script | `mr-IN`* |
| `/kannada-konkani/` | Konkani (Devanagari) | **Kannada** | Devanagari | `kn-IN` |

\* No browser ships a Konkani (`kok`) TTS voice, so the Konkani-teaching direction uses the **Marathi** (`mr-IN`) voice, which reads Devanagari-Konkani text accurately. The "no voice" fallback (§6.5) handles devices without it.

The app is fully client-side: static HTML pages, one shared stylesheet, one shared JS engine, and per-direction data/config files. There is no server, database, or login. Progress is stored in the browser via `localStorage`, keyed separately per direction so learner populations never collide.

**Folder-naming convention:** each subfolder is named after the language being **taught** (`/bengali/` teaches Bengali, `/malayalam/` teaches Malayalam, `/konkani/` teaches Konkani). The root `/` is the flagship "Kannada for Bengalis." Because two directions teach Kannada to non-Bengali audiences, they need distinct folders: `/kannada/` (for Malayalam speakers) and `/kannada-konkani/` (for Konkani speakers).

### 1.1 Goals
- Help speakers of Bengali / Malayalam / Konkani living in or around Karnataka pick up practical, everyday **Kannada** — and let Kannadigas reciprocate by learning those languages.
- Teach the **script** (letters, closest cross-script equivalents) as well as **spoken phrases** with pronunciation written in the learner's own script.
- Work well on mobile with zero install, zero signup, zero cost.

### 1.2 Non-goals
- No user accounts, leaderboards, or server-synced progress.
- No spaced-repetition scheduling — practice is quiz + flashcard only, not an SRS algorithm.
- No pre-recorded audio — pronunciation audio is synthesized on-device (see §3, §6.5).
- No multi-script variants of a single language (e.g. Konkani is taught in **Devanagari** only, not also its Kannada-script or Roman forms — see §5.1).

---

## 2. Target Users
- Bengali / Malayalam / Konkani speakers relocated to Karnataka needing survival Kannada (market, auto, food, emergencies).
- Kannadigas with neighbours, colleagues, or in-laws from those communities, wanting to reciprocate.
- Casual script learners curious about the shared Brahmi (and Devanagari) ancestry of these scripts.
- Mobile-first audience.

---

## 3. Technology

| Layer | Choice |
|---|---|
| Markup | 24 static HTML pages (4 per direction × 6 directions): `index.html`, `letters.html`, `phrases.html`, `practice.html` |
| Styling | Plain CSS (`style.css`), shared by all directions; font family switched via `html[lang]` |
| Logic | Vanilla JavaScript, no framework, no bundler — one shared `engine.js` |
| Direction config | Per-direction `config.js` — strings, target/UI lang, TTS language, storage key, digit script |
| Content data | Per-direction `data.js` — normalized letter/phrase records |
| Audio | Web Speech API (`speechSynthesis`), voice picked by `lang` prefix (`CONFIG.ttsPrefix`), rate 0.85 |
| Fonts | Google Fonts — Noto Sans Bengali, Noto Sans Kannada, Noto Sans Malayalam, Noto Sans Devanagari |
| Persistence | Browser `localStorage`, six independent keys (see §4.3) |
| Hosting | Vercel (static), domain `dipamoy.site` via Cloudflare DNS (grey-cloud → Vercel A/CNAME) |

No external runtime dependencies beyond Google Fonts; the app loads and runs without a build step. Chrome's automatic translation prompt is suppressed via `translate="no"` on `<html>` and `<meta name="google" content="notranslate">` on every page — critical here because auto-translating a language-learning page would garble the very content being taught.

---

## 4. Data Model

### 4.1 Normalized content shape (`data.js`, every direction)

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

- `target` — the letter/phrase in the language being **taught** in that direction.
- `equiv` — the closest letter in the **learner's own** script (shown for visual/script comparison).
- `pron` — pronunciation of `target`, written in the **learner's own script** (the core teaching device).
- `latin` — romanized transliteration.
- `note` — optional callout for a pronunciation trap or script mismatch. Examples: Bengali অ pronounced "ಒ" not "ಅ"; Devanagari has a single ए/ओ while Kannada distinguishes short ಎ/ಒ and long ಏ/ಓ; Malayalam ഴ (zha) and റ have no modern Kannada equivalent.
- `meaning` / `en` — phrase meaning in the learner's script and in English.

Content counts:

| Direction | Vowels | Yogavaha | Consonants | Letters total | Categories | Phrases |
|---|---|---|---|---|---|---|
| `/` (→ Kannada) | 13 | 2 | 34 | 49 | 7 | 69 |
| `/bengali/` (→ Bengali) | 11 | 3 | 36 | 50 | 7 | 68 |
| `/malayalam/` (→ Malayalam) | 13 | 2 | 36 | 51 | 7 | 69 |
| `/kannada/` (→ Kannada) | 13 | 2 | 34 | 49 | 7 | 69 |
| `/konkani/` (→ Konkani/Devanagari) | 11 | 2 | 34 | 47 | 7 | 69 |
| `/kannada-konkani/` (→ Kannada) | 13 | 2 | 34 | 49 | 7 | 69 |

Phrase categories (all directions): greetings, essentials, numbers, market/bargaining, travel, food, emergency.

### 4.2 Direction config (`config.js`)

```js
window.CONFIG = {
  targetLang,   // "kn" | "bn" | "ml" | "kok" — lang attr for taught-language text
  uiLang,       // learner's own language — lang attr for their script
  ttsLang,      // "kn-IN" | "bn-IN" | "ml-IN" | "mr-IN"
  ttsPrefix,    // "kn" | "bn" | "ml" | "mr" — used to pick a matching SpeechSynthesisVoice
  storageKey,   // per-direction (see §4.3)
  digits,       // native digit glyphs for score display (Bengali / Kannada / Malayalam / Devanagari)
  strings: { noTts, noVoice, listen, vowelsTitle, yogavahaTitle,
             consonantsTitle, lettersHint, quizTab, cardsTab, quizQuestion,
             score, playAgain, cardHint, nextCard, lettersStat, phrasesStat }
};
```

Every user-facing string, language tag, TTS parameter, and storage key is sourced from this object — `engine.js` itself contains no hardcoded language (the sole exception is the language-chooser's `DIRECTIONS` list; see §6.7).

### 4.3 Progress state (`localStorage`)
- Key: `CONFIG.storageKey`, distinct per direction so tracks never overlap even in the same browser:
  `kfb-progress` (`/`), `bfk-progress` (`/bengali/`), `mfk-progress` (`/malayalam/`), `kfm-progress` (`/kannada/`), `kokfk-progress` (`/konkani/`), `kfkok-progress` (`/kannada-konkani/`).
- Value: `{ [itemId]: 1 }` — a flat map of every letter/phrase `id` the user has interacted with.
- No expiry, no sync, no PII.

---

## 5. Core Concept: Shared Engine, Divergent Content

`engine.js` is direction-agnostic: it reads `window.CONFIG` and `window.DATA` and renders identically regardless of which way the app is teaching. This means:

- A bug fix or feature added to `engine.js` benefits all six directions simultaneously.
- The only per-direction artifacts are `config.js` (strings/langs) and `data.js` (content) — both small, human-editable files.
- **Adding a language pair** means: a new subfolder, a new `config.js`, a new `data.js`, a new `favicon.svg`, 4 HTML pages, one `[lang="…"]` font rule in `style.css`, a new entry in the `DIRECTIONS` list + `currentBase()` in `engine.js`, and 4 new URLs in `sitemap.xml`. `engine.js` rendering and `style.css` layout are otherwise reused unchanged.

### 5.1 Script choice for Konkani
Konkani has no single script — it is written in Devanagari (official standard), Kannada script (common in coastal Karnataka), and Roman/Romi (Goan Catholics). DipaMoy teaches Konkani in **Devanagari** because the app's model depends on the taught language having a script *distinct* from Kannada; a Kannada-script rendering would make the Letters module redundant. (Dialectal variation exists between Goan and Mangalorean Konkani; the content uses standard, widely-understood forms.)

---

## 6. Functional Requirements

### 6.1 Home page (`index.html`)
- **FR-1** Displays two progress stats (letters-learned, phrases-learned) computed from `localStorage` against total counts, rendered in the direction's native digit glyphs.
- **FR-2** Three module cards link to Letters, Phrases, Practice.
- **FR-3** The header carries the **language chooser** (§6.7).

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
- **FR-11 (Quiz)** Presents the target-script phrase plus a 🔊 button and 4 shuffled meaning options (1 correct + 3 random distractors, no repeats). Selecting an option locks all options, colors the chosen one green/red and reveals the correct one if wrong, marks the phrase `seen` on a correct answer, and auto-advances after ~1.1s. Ends after 10 questions (or the full pool if smaller) with a score summary and a "play again" reset.
- **FR-12 (Flashcards)** Shows the target-script phrase front-only; tapping reveals pronunciation + meaning + English and marks it `seen`. A 🔊 button speaks without flipping; a "next card →" button advances through a shuffled deck, looping.

### 6.5 Text-to-speech
- **FR-13** On card/phrase interaction, `speechSynthesis` speaks the target-script text using a voice matched by `lang` prefix (`CONFIG.ttsPrefix`) at rate 0.85.
- **FR-14** If the Web Speech API is unavailable, a toast (`CONFIG.strings.noTts`) suggests using Chrome.
- **FR-15** If the API is available but no matching-language voice is installed, playback still fires with the closest available voice, and a one-time-per-session toast (`CONFIG.strings.noVoice`) suggests mobile Chrome. This path is expected on `/konkani/`, which relies on a Marathi (`mr`) voice.

### 6.6 Progress tracking
- **FR-16** Every letter tap and phrase interaction (speak, correct quiz answer, flashcard flip) writes `{ [id]: 1 }` into the direction's `localStorage` key, idempotently.
- **FR-17** Home page stats and per-category phrase counts read live from this store on each page load.

### 6.7 Language chooser (direction switching)
- **FR-18** Every page's header carries a **native `<select>` language chooser**, built by `engine.js` from a `DIRECTIONS` list of all six directions. The current direction is preselected; choosing another navigates to the **same page type** in that direction (e.g. Phrases → Phrases), preserving context. On home pages it replaces the static `.switcher` pill; on other pages it is appended to the header. Progress is not shared or migrated between directions — they are independent learning tracks.

---

## 7. Non-Functional Requirements

### 7.1 Responsive / mobile
- **NFR-1** Mobile-first CSS: bottom tab navigation fixed to the viewport, card grids reflow via `auto-fill`/`minmax`, safe-area padding for notch/home-indicator devices.

### 7.2 Performance
- **NFR-2** No build step, no JS framework; total payload per page is a handful of small text files plus the two Google Font families that page needs. All rendering is O(content size) and runs once on `DOMContentLoaded`.

### 7.3 Internationalization / no-translate
- **NFR-3** Every page sets `<html lang>` to the **learner's own language** (`bn`, `kn`, `ml`, or `kok`) and tags target-language spans/attributes with the opposite `lang` value, so screen readers and browser font-selection behave correctly for mixed-script content.
- **NFR-4** `translate="no"` + `<meta name="google" content="notranslate">` on every page prevents Chrome's auto-translate prompt from mangling the bilingual teaching content.

### 7.4 SEO & sharing
- **NFR-5** Each of the 24 pages has a descriptive, direction-appropriate `<title>`/meta description and a canonical URL under `https://dipamoy.site/`.
- **NFR-6** The homepage (`/`) additionally carries Open Graph + Twitter Card tags pointing at a shared 1200×630 `og-image.png` (generated via headless Chrome from `og-image.html`); the other direction home pages carry their own OG tags.
- **NFR-7** `sitemap.xml` lists all 24 URLs; `robots.txt` allows all crawling and references the sitemap. All directions are independently indexable.
- **NFR-8** Google Search Console verification is via a Cloudflare DNS TXT record on the domain — see repo memory notes for the verification value location.

### 7.5 Browser support
- **NFR-9** Modern evergreen browsers (Chrome, Edge, Firefox, Safari) on desktop and mobile. TTS quality depends on the OS/browser's installed voices; Chrome (especially Android) has the most complete Indic voice coverage, hence the fallback messaging steers users there. Konkani has no dedicated voice anywhere and falls back to Marathi.

---

## 8. Architecture & Files

| Path | Responsibility |
|---|---|
| `engine.js` | Shared rendering/logic engine for **all** directions: TTS, `localStorage` progress, letter-card/phrase-row/quiz/flashcard/home rendering, and the language chooser (`DIRECTIONS` + `renderSwitcher()` + `currentBase()`). Reads content from `window.CONFIG` + `window.DATA`. |
| `style.css` | All styling, shared by every direction; `html[lang]` selects the default body font family (rules for `bn`, `kn`, `ml`, `kok`). |
| `config.js`, `data.js`, `favicon.svg`, `index/letters/phrases/practice.html` (root) | Root direction — Bengali UI → learn Kannada. |
| `bengali/…` | Kannada UI → learn Bengali. |
| `malayalam/…` | Kannada UI → learn Malayalam. |
| `kannada/…` | Malayalam UI → learn Kannada. |
| `konkani/…` | Kannada UI → learn Konkani (Devanagari); config uses `mr-IN` TTS. |
| `kannada-konkani/…` | Konkani (Devanagari) UI → learn Kannada. |
| `og-image.png`, `og-image.html` | Social share image + its HTML source (rendered via headless Chrome). |
| `robots.txt`, `sitemap.xml` | Crawling / indexing directives, covering all directions. |
| `whatsapp-*`, `instagram-*` | Marketing launch drafts — message copy + 1200×630/1080×1080 HTML→PNG graphics, per campaign. |

Each direction's HTML loads its own `config.js` → `data.js` → the shared `../engine.js` (root pages load `engine.js`).

**Data flow:** page load → `config.js` sets `window.CONFIG` → `data.js` sets `window.DATA` → `engine.js`'s `DOMContentLoaded` handler calls `renderSwitcher()` then `renderHome()` / `renderLetters()` / `renderPhrases()` / `renderPractice()` depending on which root elements exist (`#home-progress`, `#letters-root`, `#phrases-root`, `#practice-root`) → user interaction → `speak()` / `markSeen()` → `localStorage` write → next render reads updated progress.

---

## 9. Deployment

- **Repo:** [github.com/yvsreenivas/kannada-for-bengalis](https://github.com/yvsreenivas/kannada-for-bengalis) (public); single repo, all directions. (Repo name predates the DipaMoy rebrand and the added pairs.)
- **Hosting:** Vercel, connected via GitHub integration — every push to `main` auto-deploys.
- **Domain:** `dipamoy.site` → Cloudflare DNS (grey-cloud / DNS-only) → Vercel A/CNAME, so Vercel issues and manages its own SSL certificate. (The former `kannadaforbengalis.online` domain redirects to `dipamoy.site` via the registrar/dashboard.)
- **Local dev:** any static file server, e.g. `npx serve .` or `python -m http.server`; no build step.
