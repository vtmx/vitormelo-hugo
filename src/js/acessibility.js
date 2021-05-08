const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

if (userPrefersDark) {
  document.body.classList.add('color-scheme-dark');
}
