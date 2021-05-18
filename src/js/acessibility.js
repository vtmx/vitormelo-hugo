const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
const userPrefersContrast = window.matchMedia && window.matchMedia('(prefers-contrast: high)').matches;

if (userPrefersDark || userConfigDark) {
  document.body.classList.add('color-scheme-dark');
}

if (userPrefersContrast) {
  document.body.classList.add('contrast-hight');
}
