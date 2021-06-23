(function () {
  const sidebar = document.querySelector('.sidebar'),
    catSubMenu = document.querySelector('.cat-sub-menu'),
    sidebarBtns = document.querySelectorAll('.sidebar-toggle');
  for (const sidebarBtn of sidebarBtns) {
    if (sidebarBtn && catSubMenu && sidebarBtn) {
      sidebarBtn.addEventListener('click', () => {
        for (const sdbrBtn of sidebarBtns) {
          sdbrBtn.classList.toggle('rotated');
        }
        sidebar.classList.toggle('hidden');
        catSubMenu.classList.remove('visible');
      });
    }
  }
})();

(function () {
  const showCatBtn = document.querySelector('.show-cat-btn');
  const catSubMenu = document.querySelector('.cat-sub-menu');
  if (showCatBtn) {
    showCatBtn.addEventListener('click', function (e) {
      e.preventDefault();
      catSubMenu.classList.toggle('visible');
      const catBtnToRotate = document.querySelector('.category__btn');
      catBtnToRotate.classList.toggle('rotated');
    });
  }
})();
