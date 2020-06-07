// Set a given theme/color-scheme
function setTheme(themeName) {
  localStorage.setItem('theme', themeName);
  document.documentElement.className = themeName;
}

// Toggle between color themes
function toggleDefaultTheme() {
  if (localStorage.getItem('theme') !== 'theme-default'){
      setTheme('theme-default');
  }
}
function toggleSecondTheme() {
  if (localStorage.getItem('theme') !== 'theme-dark'){
      setTheme('theme-dark');
  }
}
function toggleThirdTheme() {
  if (localStorage.getItem('theme') !== 'theme-mint'){
      setTheme('theme-mint');
  }
}

// Immediately set the theme on initial load
(function () {
  if (localStorage.getItem('theme') === 'theme-default') {
      setTheme('theme-default');
  }
  if (localStorage.getItem('theme') === 'theme-dark') {
      setTheme('theme-dark');
  }
  if (localStorage.getItem('theme') === 'theme-mint') {
      setTheme('theme-mint');
  }
})();