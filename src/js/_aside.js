(function () {
  const sidebar = document.querySelector('.sidebar'),
    catSubMenu = document.querySelector('.cat-sub-menu'),
    sidebarBtn = document.querySelector('.sidebar-toggle');
  if (sidebarBtn && catSubMenu && sidebarBtn) {
    sidebarBtn.addEventListener('click', () => {
      sidebarBtn.classList.toggle('rotated');
      sidebar.classList.toggle('hidden');
      catSubMenu.classList.remove('visible');
    });

    function hideSidebar() {
      const windowInnerWidth = window.innerWidth;
      if (windowInnerWidth <= 992) {
        sidebar.classList.add('hidden');
      }
    }
    hideSidebar();

    window.addEventListener('resize', () => {
      hideSidebar();
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
