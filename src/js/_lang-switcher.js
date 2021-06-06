(function () {
  const showMenu = document.querySelector('.lang-switcher');
  const langMenu = document.querySelector('.lang-menu');
  showMenu.addEventListener('click', function () {
    langMenu.classList.toggle('active');
  });
})();
