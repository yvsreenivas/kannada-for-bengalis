# দীপা (Dipa) — Learn Kannada for Bengalis

*Dipa* (দীপা / ದೀಪ) means "lamp" in both Bengali and Kannada.

**Live at [kannadaforbengalis.online](https://kannadaforbengalis.online)**

A Duolingo-inspired static web app that helps Bengali speakers learn Kannada:

- **অক্ষর (Letters)** — Kannada vowels & consonants side-by-side with their closest Bengali letters and Bengali-script pronunciation
- **দৈনন্দিন বাক্য (Everyday phrases)** — greetings, market, auto/travel, food, emergencies, with pronunciation written in Bengali script
- **অনুশীলন (Practice)** — multiple-choice quiz and flashcards
- **🔊 Audio** — browser text-to-speech (Web Speech API, `kn-IN` voice) with a graceful Bengali fallback message when no Kannada voice is installed
- **Progress** — tracked locally in `localStorage`, no accounts

## Stack

Vanilla HTML/CSS/JS. No build step, no dependencies. Deployed on Vercel.

## Run locally

Serve the folder with any static server, e.g.:

```
npx serve .
```

## Content

All letters and phrases live in [data.js](data.js).
