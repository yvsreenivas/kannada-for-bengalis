// Kannada Translator promo — shown on every direction's home page.
//
// Unlike WORDLE_PROMO_DIRS, this is not filtered by audience: the translator is
// Kannada-centric in both directions, so it is equally useful to a Kannadiga
// learning Bengali and to a Bengali speaker learning Kannada.
function renderTranslatorPromo() {
  return `
    <a class="translator-promo" href="https://kannadatranslate.xyz/" target="_blank" rel="noopener noreferrer">
      <span class="translator-promo-icon" aria-hidden="true">🗣️</span>
      <span class="translator-promo-text">
        <span class="translator-promo-title">ಕನ್ನಡ ಅನುವಾದಕ</span>
        <span class="translator-promo-sub">Kannada Translator · speak in 25 languages</span>
      </span>
      <span class="translator-promo-arrow" aria-hidden="true">→</span>
    </a>
  `;
}
