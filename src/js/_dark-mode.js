(function () {
  Chart.defaults.backgroundColor = '#000';
  let darkMode = localStorage.getItem('darkMode');
  const darkModeToggle = document.querySelector('.theme-switcher');

  const enableDarkMode = () => {
    document.body.classList.add('darkmode');
    localStorage.setItem('darkMode', 'enabled');
  };

  const disableDarkMode = () => {
    document.body.classList.remove('darkmode');
    localStorage.setItem('darkMode', null);
  };

  if (darkMode === 'enabled') {
    enableDarkMode();
  }
if (darkModeToggle) {
  darkModeToggle.addEventListener('click', () => {
    darkMode = localStorage.getItem('darkMode');
    if (darkMode !== 'enabled') {
      enableDarkMode();
    } else {
      disableDarkMode();
    }
    addData();
  });
}
})();
