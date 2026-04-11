// script.js
// No analytics, no tracking, no third-party scripts.

(function () {
  'use strict';

  // ----------------------------------------------------------
  // Smooth scroll for the #contact CTA anchor only.
  // The global scroll-behavior is left as "auto" in CSS so
  // no other navigation is affected.
  // ----------------------------------------------------------
  var ctaLink = document.querySelector('a[href="#contact"]');
  if (ctaLink) {
    ctaLink.addEventListener('click', function (e) {
      e.preventDefault();
      var target = document.getElementById('contact');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  }

  // ----------------------------------------------------------
  // Contact form: submit button is permanently disabled.
  // Form backend is not yet wired up. Button stays greyed out
  // so no visitor is misled into thinking their submission sent.
  // ----------------------------------------------------------

})();
