/* ─────────────────────────────────────────────────────────
   Dr. Sarah Okonkwo — Portfolio Animations
   Handles:
     1. Typing cursor on the nav brand
   (Animations 2 & 3 — draw underline + card lift — are
    CSS-only and need no JavaScript.)
───────────────────────────────────────────────────────── */

(function () {
  'use strict';

  /* ── Animation 1: Typing cursor ────────────────────────
     Types out the nav brand character by character, then
     leaves a blinking cursor in place permanently.
  ─────────────────────────────────────────────────────── */

  const FULL_TEXT   = 'Dr. S. Okonkwo';
  const TYPE_DELAY  = 80;   // ms per character (mid-string)
  const START_DELAY = 400;  // ms pause before typing begins

  function initTypingCursor() {
    const brand = document.querySelector('.nav-brand');
    if (!brand) return;

    // Wrap content in typed-chars span + add cursor element
    brand.innerHTML =
      '<span class="typed-chars"></span>' +
      '<span class="cursor" aria-hidden="true"></span>';

    const charsEl  = brand.querySelector('.typed-chars');
    const cursorEl = brand.querySelector('.cursor');

    let index = 0;

    function typeNext() {
      if (index <= FULL_TEXT.length) {
        charsEl.textContent = FULL_TEXT.slice(0, index);
        index++;
        // Slightly vary speed to feel organic
        const jitter = Math.random() * 40 - 20;
        setTimeout(typeNext, TYPE_DELAY + jitter);
      } else {
        // Typing done — make cursor blink
        cursorEl.classList.add('visible');
      }
    }

    setTimeout(typeNext, START_DELAY);
  }

  /* ── Boot ──────────────────────────────────────────── */

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTypingCursor);
  } else {
    initTypingCursor();
  }

})();
