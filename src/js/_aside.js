(function () {
  const sidebar = document.querySelector('.sidebar');
  const catSubMenu = document.querySelector('.cat-sub-menu');
  const sidebarBtn = document.querySelector('.sidebar-toggle');

  sidebarBtn.addEventListener('click', () => {
    sidebar.classList.toggle('hidden');
    catSubMenu.classList.remove('visible');
  });
})();

(function () {
  const showCatBtn = document.querySelector('.category__btn');
  const catSubMenu = document.querySelector('.cat-sub-menu');

  showCatBtn.addEventListener('click', function (e) {
    catSubMenu.classList.toggle('visible');
    console.log(showCatBtn.style.transform);
    showCatBtn.classList.toggle('rotated');
  });
})();
