// DipaMoy Blog cross-promo — shown on every home page, above the books sidebar
// so it's the first thing visible, not buried in the book lists.
function renderBlogPromo() {
  return `
    <a class="blog-promo" href="/blog/" lang="en">
      <span class="blog-promo-icon" aria-hidden="true">💼</span>
      <span class="blog-promo-text">
        <span class="blog-promo-title">Small business ideas for young workers</span>
        <span class="blog-promo-sub">Tea stalls, tailoring, tiffin service &amp; more</span>
      </span>
      <span class="blog-promo-arrow" aria-hidden="true">→</span>
    </a>
  `;
}
