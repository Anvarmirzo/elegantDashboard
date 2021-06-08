(function () {
  const showMenu = document.querySelector('.lang-switcher');
  const langMenu = document.querySelector('.lang-menu');
  const layer = document.querySelector('.layer');
  if (showMenu) {
    showMenu.addEventListener('click', function () {
      langMenu.classList.add('active');
      layer.classList.add('active');
    });
    if (layer) {
      layer.addEventListener('click', function (e) {
        if (langMenu.classList.contains('active')) {
          langMenu.classList.remove('active');
          layer.classList.remove('active');
        }
      });
    }
  }
})();
