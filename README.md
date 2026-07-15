# DipaMoy — learn Kannada in your own script (and back)

*DipaMoy* builds on দীপা/ದೀಪ ("Dipa" — lamp in both Bengali and Kannada) with the Bengali suffix "-moy" (ময়, "full of") — "full of light."

**Live at [dipamoy.site](https://dipamoy.site)** — one domain, **6 directions across 4 languages**, all from one codebase. Kannada is the hub, paired bidirectionally with Bengali, Malayalam, and Konkani:

| URL | Learner learns… | UI / pronunciation script | TTS |
|---|---|---|---|
| [`/`](https://dipamoy.site/) | **Kannada** (for Bengalis) | Bengali | `kn-IN` |
| [`/bengali/`](https://dipamoy.site/bengali/) | **Bengali** (for Kannadigas) | Kannada | `bn-IN` |
| [`/malayalam/`](https://dipamoy.site/malayalam/) | **Malayalam** (for Kannadigas) | Kannada | `ml-IN` |
| [`/kannada/`](https://dipamoy.site/kannada/) | **Kannada** (for Malayalis) | Malayalam | `kn-IN` |
| [`/konkani/`](https://dipamoy.site/konkani/) | **Konkani** in Devanagari (for Kannadigas) | Kannada | `mr-IN`¹ |
| [`/kannada-konkani/`](https://dipamoy.site/kannada-konkani/) | **Kannada** (for Konkani speakers) | Devanagari | `kn-IN` |
| [`/odia/`](https://dipamoy.site/odia/) | **Odia** (for Kannadigas) | Kannada | `or-IN` |
| [`/kannada-odia/`](https://dipamoy.site/kannada-odia/) | **Kannada** (for Odia speakers) | Odia | `kn-IN` |

¹ No browser has a Konkani voice, so the Konkani-teaching direction reads its Devanagari text with the Marathi voice.

Every page has a **language chooser** in the header to jump between all six directions. A Duolingo-inspired static web app, each direction offers:

- **Letters** — target-script vowels & consonants side-by-side with the closest letters of the learner's own script, including pronunciation-trap notes (e.g. Bengali অ = "ಒ"; Devanagari has one ए while Kannada splits ಎ/ಏ)
- **Everyday phrases** — greetings, market, travel, food, emergencies, with pronunciation written in the learner's script
- **Practice** — multiple-choice quiz and flashcards
- **🔊 Audio** — browser text-to-speech with a graceful fallback message when the voice is missing
- **Progress** — tracked locally in `localStorage` (separate keys per direction), no accounts

Full behavior spec: **[fsd.md](fsd.md)**

## Architecture

One shared engine ([engine.js](engine.js)), used by every direction, parameterized by a per-direction `config.js` (UI strings, target/UI lang, TTS language, storage key, digit script) and a per-direction `data.js` with a normalized shape: letters `{target, equiv, pron, latin, note?}`, phrases `{target, pron, meaning, en}`. `engine.js` also builds the header language chooser from its `DIRECTIONS` list.

```
/                  → Bengali  → Kannada
/bengali/          → Kannada  → Bengali
/malayalam/        → Kannada  → Malayalam
/kannada/          → Malayalam → Kannada
/konkani/          → Kannada  → Konkani (Devanagari)
/kannada-konkani/  → Konkani  → Kannada
/odia/             → Kannada  → Odia
/kannada-odia/     → Odia     → Kannada
engine.js          → shared by all, direction-agnostic
style.css          → shared by all (per-lang font rules: bn, kn, ml, kok, or)
```

Folder = the language being **taught**. The two "learn Kannada" directions for non-Bengali audiences use distinct folders (`/kannada/`, `/kannada-konkani/`) since the root is the Bengali flagship.

### Adding a language pair

New subfolder + `config.js` + `data.js` + `favicon.svg` + 4 HTML pages, one `[lang="…"]` font rule in [style.css](style.css), a new entry in `DIRECTIONS` + `currentBase()` in [engine.js](engine.js), and 4 URLs in [sitemap.xml](sitemap.xml). `engine.js` rendering and `style.css` layout are reused unchanged.

## Stack

Vanilla HTML/CSS/JS. No build step, no dependencies. Deployed on Vercel via GitHub (auto-deploy on push to `main`). Domain on Cloudflare DNS (grey-cloud → Vercel).

## Run locally

Serve the folder with any static server, e.g.:

```
npx serve .
```

Then visit any direction, e.g. `/` (Bengali→Kannada) or `/konkani/` (Kannada→Konkani).

## Content

Each direction's letters/phrases live in its own `data.js` (root [data.js](data.js), plus `bengali/`, `malayalam/`, `kannada/`, `konkani/`, `kannada-konkani/`).
