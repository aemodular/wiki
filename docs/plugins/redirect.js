'use strict';
function plugin(hook, vm) {
      const fallbacks = ['tangiblewaves', 'bfsynth', 'fauxcyrillic', 'kyaa', 'wonkystuff'];

      hook.doneEach(function () {
        const contentEl = document.querySelector('.content');

        if (!contentEl) return;

        // Detect 404 page by marker
        if (!contentEl.innerHTML.includes('DOCSIFY_404_MARKER')) return;

        const fallbackLog = document.getElementById('fallback-log');
        if (!fallbackLog) return;

        // Extract original slug from current hash
        let hash = location.hash; // e.g. "#/modules/kick"
        const match = hash.match(/^#\/modules\/([^\/]+)$/);
        if (!match) return;

        const slug = match[1];

        // Track which fallback we are on
        let index = parseInt(sessionStorage.getItem('fallbackIndex') || '0', 10);

        function tryNextFallback() {
          if (index >= fallbacks.length) {
            sessionStorage.removeItem('fallbackIndex');
            fallbackLog.textContent += "\nAll fallbacks tried. Showing 404.";
            return; // no more fallbacks
          }

          const prefix = fallbacks[index];
          const newHash = '#/modules/' + prefix + '/' + slug;
          index++;
          sessionStorage.setItem('fallbackIndex', index);

          fallbackLog.textContent += `Trying fallback: ${prefix}...\n`;

          // Update hash → Docsify will render new page
          location.hash = newHash;

          // Wait for Docsify to render the new route
          setTimeout(() => {
            const newContentEl = document.querySelector('.content');
            if (!newContentEl) return;

            // If still 404, try next fallback
            if (newContentEl.innerHTML.includes('DOCSIFY_404_MARKER')) {
              tryNextFallback();
            } else {
              // Success → reset
              sessionStorage.removeItem('fallbackIndex');
              fallbackLog.textContent += `Loaded fallback: ${prefix}\n`;
            }
          }, 300);
        }

        tryNextFallback();
      });
    }
if (typeof window !== "undefined") {
  if (!window.$docsify) {
      console.error('no docsify');
  } else {
      window.$docsify.plugins = [].concat(plugin, window.$docsify.plugins);
  }
} else {
  module.exports = {plugin}
}

