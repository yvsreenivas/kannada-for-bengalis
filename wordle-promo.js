// Kannada Wordle promo, shown only on pages aimed at a Kannada-speaking audience
const WORDLE_PROMO_DIRS = ['bengali', 'malayalam', 'konkani', 'gujarati', 'tamil', 'odia'];

function renderWordlePromo() {
  const p = location.pathname;
  const active = WORDLE_PROMO_DIRS.some(dir => p.indexOf('/' + dir + '/') !== -1);
  if (!active) return '';

  return `
    <a class="wordle-promo" href="https://www.kannadawordle.xyz/" target="_blank" rel="noopener noreferrer">
      <span class="wordle-promo-icon" aria-hidden="true">🔤</span>
      <span class="wordle-promo-text">
        <span class="wordle-promo-title">ಕನ್ನಡ ವರ್ಡಲ್ ಆಡಿ</span>
        <span class="wordle-promo-sub">Kannada Wordle · free word game</span>
      </span>
      <span class="wordle-promo-arrow" aria-hidden="true">→</span>
    </a>
  `;
}
