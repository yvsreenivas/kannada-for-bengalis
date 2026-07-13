# DipaMoy — Kannada ↔ Bengali, both directions

*DipaMoy* builds on দীপা/ದೀಪ ("Dipa" — lamp in both Bengali and Kannada) with the Bengali suffix "-moy" (ময়, "full of") — "full of light."

**Live at [dipamoy.site](https://dipamoy.site)** (Bengali → Kannada) and **[dipamoy.site/bengali/](https://dipamoy.site/bengali/)** (Kannada → Bengali)

A Duolingo-inspired static web app, bidirectional, from one codebase:

- **`/`** — Bengali speakers learn **Kannada** (Bengali UI, Bengali-script pronunciation, `kn-IN` TTS)
- **`/bengali/`** — Kannada speakers learn **Bengali** (Kannada UI, Kannada-script pronunciation, `bn-IN` TTS)

Each direction has:

- **Letters** — target-script vowels & consonants side-by-side with the closest letters of the learner's own script, including pronunciation-trap notes (e.g. Bengali অ = "ಒ", স = "ಶ")
- **Everyday phrases** — greetings, market, travel, food, emergencies, with pronunciation written in the learner's script
- **Practice** — multiple-choice quiz and flashcards
- **🔊 Audio** — browser text-to-speech with a graceful fallback message when the voice is missing
- **Progress** — tracked locally in `localStorage` (separate keys per direction), no accounts

Full behavior spec: **[fsd.md](fsd.md)**

## Architecture

One shared engine ([engine.js](engine.js)), used by both directions, parameterized by a per-direction `config.js` (UI strings, TTS language, storage key, digit script) and a per-direction `data.js` with a normalized shape: letters `{target, equiv, pron, latin, note?}`, phrases `{target, pron, meaning, en}`.

```
/            → Bengali → Kannada: config.js, data.js, index/letters/phrases/practice.html
/bengali/    → Kannada → Bengali: config.js, data.js, index/letters/phrases/practice.html
engine.js    → shared by both, direction-agnostic
style.css    → shared by both
```

## Stack

Vanilla HTML/CSS/JS. No build step, no dependencies. Deployed on Vercel via GitHub (auto-deploy on push to `main`). Domain on Cloudflare DNS (grey-cloud → Vercel).

## Run locally

Serve the folder with any static server, e.g.:

```
npx serve .
```

Then visit `/` for the Bengali→Kannada direction or `/bengali/` for Kannada→Bengali.

## Content

Root letters/phrases live in [data.js](data.js); Bengali-direction content lives in [bengali/data.js](bengali/data.js).
