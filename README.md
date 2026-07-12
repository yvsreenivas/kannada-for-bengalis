# দীপা / ದೀಪ (Dipa) — Kannada ↔ Bengali, both directions

*Dipa* (দীপা / ದೀಪ) means "lamp" in both Bengali and Kannada.

**Live at [kannadaforbengalis.online](https://kannadaforbengalis.online)**

A Duolingo-inspired static web app, bidirectional:

- **`/`** — Bengali speakers learn **Kannada** (Bengali UI, Bengali-script pronunciation, `kn-IN` TTS)
- **`/bengali/`** — Kannada speakers learn **Bengali** (Kannada UI, Kannada-script pronunciation, `bn-IN` TTS)

Each direction has:

- **Letters** — target-script vowels & consonants side-by-side with the closest letters of the learner's own script, including pronunciation-trap notes (e.g. Bengali অ = "ಒ", স = "ಶ")
- **Everyday phrases** — greetings, market, travel, food, emergencies, with pronunciation written in the learner's script
- **Practice** — multiple-choice quiz and flashcards
- **🔊 Audio** — browser text-to-speech with a graceful fallback message when the voice is missing
- **Progress** — tracked locally in `localStorage` (separate keys per direction), no accounts

## Architecture

One shared engine ([engine.js](engine.js)) parameterized by a per-direction [config.js](config.js) (UI strings, TTS language, storage key, digit script) and a per-direction `data.js` with a normalized shape: letters `{target, equiv, pron, latin, note?}`, phrases `{target, pron, meaning, en}`.

## Stack

Vanilla HTML/CSS/JS. No build step, no dependencies. Deployed on Vercel.

## Run locally

Serve the folder with any static server, e.g.:

```
npx serve .
```

## Content

All letters and phrases live in [data.js](data.js).
