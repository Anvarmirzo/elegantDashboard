(function () {
  const sidebar = document.querySelector('.sidebar');
  const catSubMenu = document.querySelector('.cat-sub-menu');
  const sidebarBtn = document.querySelector('.sidebar-toggle');
  if (sidebarBtn) {
    sidebarBtn.addEventListener('click', () => {
      sidebarBtn.classList.toggle('rotated');
      sidebar.classList.toggle('hidden');
      catSubMenu.classList.remove('visible');
    });
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
